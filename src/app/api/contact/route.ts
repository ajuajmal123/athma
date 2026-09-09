import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Send Email Notifications
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // App password
        },
      });

      // 1. Email to Athma Spices Admin
      const adminMailOptions = {
        from: process.env.SMTP_USER,
        to: 'athmaspices@gmail.com',
        subject: `New Web Enquiry: ${subject}`,
        text: `You have received a new enquiry from the website.\n\nName: ${name}\nEmail: ${email}\nMobile: ${phone}\nType: ${subject}\n\nMessage:\n${message}`,
      };

      // 2. Automated Thank You Email to Customer
      const customerMailOptions = {
        from: process.env.SMTP_USER,
        to: email, // send auto-reply to the submitted email
        subject: `Thank you for contacting Athma Spices - ${subject}`,
        text: `Dear ${name},\n\nThank you for reaching out to Athma Spices!\n\nWe have received your enquiry regarding "${subject}" and our team will get back to you shortly.\n\nHere is a copy of your message:\n${message}\n\nBest regards,\nThe Athma Spices Team\n+91 70126 46402\nathmaspices@gmail.com`,
      };

      // Send both emails
      await transporter.sendMail(adminMailOptions);
      if (email) {
        await transporter.sendMail(customerMailOptions);
      }
    } else {
      console.warn("SMTP_USER and SMTP_PASS are not set. Email was not sent.");
    }

    return NextResponse.json({ success: true, message: 'Enquiry processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
