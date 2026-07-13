"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero_slide_1.png?v=2",
  "/images/hero_slide_2.png?v=2",
  "/images/hero_slide_3.png?v=2",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds to give room for the slow cinematic motion
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-brand-green overflow-hidden flex items-center justify-center">
      {/* Full-bleed Sliding Image Gallery with Ken Burns Cinematic Motion */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              initial={{ scale: 1.05, x: -8, y: -5 }}
              animate={{ scale: 1.15, x: 8, y: 5 }}
              transition={{ duration: 6, ease: "linear" }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Dark Vignette Overlay for rich text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      </div>

      {/* Tagline Overlay (Centered, Minimal, Bold Serif Editorial Typography) */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-brand-cream font-bold leading-tight tracking-editorial text-shadow-cinematic"
        >
          Signature of Perfect <span className="text-brand-gold italic font-normal font-serif">taste.</span>
        </motion.h1>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[3px] transition-all duration-300 ${index === currentIndex ? "w-8 bg-brand-gold" : "w-3 bg-brand-cream/40"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
