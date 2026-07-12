"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-brand-cream border-t border-brand-cream-dark/30 text-center relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#C1440E_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-10">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2"
        >
          <span className="h-[1px] w-8 bg-brand-red" />
          <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
            Join the Heritage Kitchen
          </span>
          <span className="h-[1px] w-8 bg-brand-red" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl text-brand-green font-bold leading-[1.1] tracking-editorial"
        >
          Bring Soul Back <br />
          <span className="text-brand-clay italic font-normal font-serif">to Your Kitchen.</span>
        </motion.h2>

        {/* Short Emotional Supporting Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-brand-clay/95 text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed"
        >
          No shortcuts. No mass production. Just pure, single-origin heirloom spices roasted and ground slowly to connect you with the authenticity of Kerala.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-4"
        >
          <a
            href="#spices"
            className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red/90 text-brand-cream px-10 py-5 text-sm tracking-widest uppercase font-semibold transition-all duration-300 shadow-lg"
          >
            <span>Explore Athma Spices</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Editorial Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pt-12 text-[10px] tracking-[0.25em] uppercase text-brand-clay/50 font-semibold"
        >
          ATHMA SPICES • ESTD. KERALA
        </motion.div>

      </div>
    </section>
  );
}
