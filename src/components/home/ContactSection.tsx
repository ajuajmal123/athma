"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone || !formState.message) return;

    setStatus("submitting");

    // Construct WhatsApp message details before clearing state
    const whatsappText = `Hello Athma Spices,\n\nI have submitted an enquiry on the website:\n\n*Name*: ${formState.name}\n*Email*: ${formState.email}\n*Mobile*: ${formState.phone}\n*Type*: ${formState.subject}\n*Message*: ${formState.message}`;
    const whatsappUrl = `https://wa.me/917012646402?text=${encodeURIComponent(whatsappText)}`;

    // API request to Next.js route (Handles Email + Excel)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
    } catch (err) {
      console.error("Failed to submit to server:", err);
    }

    setStatus("success");
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    setFormState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  return (
    <section id="contact-section" className="relative py-24 bg-brand-green text-brand-cream overflow-hidden">
      {/* Decorative radial blur for glow effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#F5F1E8_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="h-[1px] w-8 bg-brand-red" />
                <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
                  Connect With Us
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-editorial leading-tight">
                Visit The Spice <br />
                <span className="text-brand-gold italic font-normal">Kitchen & Mill.</span>
              </h2>
              <p className="text-brand-cream/70 text-sm leading-relaxed max-w-md pt-2">
                Whether you are a chef looking for bespoke spice milling, a distributor, or a culinary enthusiast, our doors are always open. Reach out or visit us in the hills.
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-8">
              <a
                href="https://maps.app.goo.gl/NoH5HWz7BbKZpsd49"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-brand-cream/15 group-hover:border-brand-gold group-hover:text-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-gold">
                    Our Mill Address
                  </h4>
                  <p className="text-sm text-brand-cream/80 leading-relaxed group-hover:text-brand-cream transition-colors">
                    ATHMA SPICES, Pollambara,<br />
                    Puthusery P.O., Mananthavady, Wayanad - 670645
                  </p>
                </div>
              </a>

              <a
                href="tel:+917012646402"
                className="flex items-start space-x-4 group hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-brand-cream/15 group-hover:border-brand-gold group-hover:text-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-gold">
                    Call Direct
                  </h4>
                  <p className="text-sm text-brand-cream/80 group-hover:text-brand-cream transition-colors">
                    +91 70126 46402
                  </p>
                </div>
              </a>

              <a
                href="mailto:athmaspices@gmail.com"
                className="flex items-start space-x-4 group hover:opacity-90 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full border border-brand-cream/15 group-hover:border-brand-gold group-hover:text-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-gold">
                    Email Correspondence
                  </h4>
                  <p className="text-sm text-brand-cream/80 group-hover:text-brand-cream transition-colors">
                    athmaspices@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 rounded-full border border-brand-cream/15 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wider uppercase text-brand-gold">
                    Mill Hours
                  </h4>
                  <p className="text-sm text-brand-cream/80">
                    Monday — Saturday: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 bg-brand-green-dark/60 border border-brand-cream/10 p-8 md:p-12 relative">
            <AnimatePresence mode="wait">
              {status !== "success" ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold block">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="your name"
                        className="w-full bg-brand-green border-b border-brand-cream/20 hover:border-brand-cream/40 focus:border-brand-gold focus:outline-none py-3 text-sm transition-colors text-brand-cream placeholder:text-brand-cream/35"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold block">
                        Your Email
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your email address"
                        className="w-full bg-brand-green border-b border-brand-cream/20 hover:border-brand-cream/40 focus:border-brand-gold focus:outline-none py-3 text-sm transition-colors text-brand-cream placeholder:text-brand-cream/35"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <label htmlFor="form-phone" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold block">
                        Mobile Number
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="your mobile number"
                        className="w-full bg-brand-green border-b border-brand-cream/20 hover:border-brand-cream/40 focus:border-brand-gold focus:outline-none py-3 text-sm transition-colors text-brand-cream placeholder:text-brand-cream/35"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="form-subject" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold block">
                        Inquiry Type
                      </label>
                      <select
                        id="form-subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-brand-green border-b border-brand-cream/20 focus:border-brand-gold focus:outline-none py-3 text-sm transition-colors text-brand-cream cursor-pointer"
                      >
                        <option className="bg-brand-green-dark" value="General Inquiry">General Inquiry</option>
                        <option className="bg-brand-green-dark" value="Bespoke Milling">Bespoke Spice Milling</option>
                        <option className="bg-brand-green-dark" value="Wholesale & Export">Wholesale & Export</option>
                        <option className="bg-brand-green-dark" value="Mill Visit">Mill Visit & Tasting</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-[10px] tracking-widest uppercase font-bold text-brand-gold block">
                      Your Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-brand-green border border-brand-cream/20 hover:border-brand-cream/40 focus:border-brand-gold focus:outline-none p-4 text-sm transition-colors text-brand-cream placeholder:text-brand-cream/35 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center space-x-2 w-full bg-brand-red hover:bg-brand-red/90 text-brand-cream py-4 text-xs tracking-widest uppercase font-semibold transition-colors duration-300 shadow-md disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold flex items-center justify-center rounded-full text-brand-gold animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-serif text-3xl font-bold">Inquiry Sent.</h3>
                    <p className="text-sm text-brand-cream/80 leading-relaxed">
                      Thank you for contacting Athma. Our mill office will review your request and reach out to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-brand-gold hover:text-brand-cream tracking-widest uppercase font-semibold border-b border-brand-gold hover:border-brand-cream pb-1 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
