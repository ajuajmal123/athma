import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // 1. Write to Google Sheets (Vercel Compatible)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      try {
        // Authenticate via a Google Service Account
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            // Next.js (or any env loader) might require replacing literal `\n` mapped in strings so the key parses properly
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        
        // Append a new row to the sheet (defaults to appending to the end)
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:F', // Assumes a generic Sheet1 name
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [new Date().toLocaleString(), name, email, phone, subject, message]
            ]
          }
        });
      } catch (sheetError) {
        console.error("Google Sheets API Error:", sheetError);
      }
    } else {
      console.warn("Google Sheets credentials are not fully configured in environment variables.");
    }

    // 2. Send Email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // App password
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'athmaspices@gmail.com',
        subject: `New Web Enquiry: ${subject}`,
        text: `You have received a new enquiry from the website.\n\nName: ${name}\nEmail: ${email}\nMobile: ${phone}\nType: ${subject}\n\nMessage:\n${message}`,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP_USER and SMTP_PASS are not set. Email was not sent.");
    }

    return NextResponse.json({ success: true, message: 'Enquiry processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
