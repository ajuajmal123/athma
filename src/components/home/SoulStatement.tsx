"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SoulStatement() {
  return (
    <section className="relative h-[65vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-green">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clay_mortar_texture.png"
          alt="Macro close-up of textured earthen clay mortar pot with cardamom, pepper, and dried cinnamon bark"
          fill
          className="object-cover opacity-35 scale-105 animate-parallax-slow"
          sizes="100vw"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/95 via-brand-green/80 to-brand-green/95" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
        
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center space-x-3"
        >
          <span className="h-[1px] w-6 bg-brand-gold" />
          <span className="text-brand-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            The Athma Promise
          </span>
          <span className="h-[1px] w-6 bg-brand-gold" />
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-brand-cream font-bold leading-tight tracking-editorial mx-auto max-w-4xl"
        >
          “We don’t cut corners. <span className="text-brand-gold italic font-normal">We grind fresh.</span>”
        </motion.h2>

        {/* Small separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-16 h-[2px] bg-brand-red mx-auto"
        />

        {/* Sub-text block */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-brand-cream/80 text-xs md:text-sm font-sans tracking-widest uppercase font-semibold max-w-md mx-auto leading-relaxed"
        >
          No colorants. No preservatives. Pure curry soul.
        </motion.p>

      </div>
    </section>
  );
}
