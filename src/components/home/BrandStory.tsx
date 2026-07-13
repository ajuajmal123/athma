"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Heart } from "lucide-react";

export default function BrandStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="story" className="py-24 bg-brand-cream border-t border-brand-cream-dark/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 justify-center">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
              Our Story & Roots
            </span>
            <span className="h-[1px] w-8 bg-brand-red" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-green font-bold leading-tight tracking-editorial">
            More Than Spice. <span className="text-brand-clay italic font-normal">It’s Athma.</span>
          </h2>

          <p className="text-brand-clay/95 text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            Athma represents spices made with heart, cultural memory, Kerala culinary traditions, and the emotional connection between food, family, and home. Our mission is to keep this purity alive, ensuring every meal you prepare is filled with authentic flavor and care.
          </p>
        </div>

        {/* Triple Points Grid (No Images, Compact Symmetrical Cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto relative"
        >
          {/* Point 1: Natural Ingredients */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-cream border border-brand-cream-dark/50 p-6 lg:p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-cream-dark/40 flex items-center justify-center text-brand-gold group-hover:text-brand-red transition-colors duration-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl text-brand-green font-bold">
              Natural Ingredients
            </h3>
            <div className="w-8 h-[1px] bg-brand-gold mx-auto" />
            <p className="text-brand-clay/90 font-sans text-xs md:text-sm leading-relaxed">
              Only the best-quality Raw materials are handpicked, according to rigorous standards set to deliver the best.
            </p>
          </motion.div>

          {/* Point 2: Hygienic Preparation */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-cream border border-brand-cream-dark/50 p-6 lg:p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-cream-dark/40 flex items-center justify-center text-brand-gold group-hover:text-brand-red transition-colors duration-300">
              <Heart className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl text-brand-green font-bold">
              Hygienic Preparation
            </h3>
            <div className="w-8 h-[1px] bg-brand-gold mx-auto" />
            <p className="text-brand-clay/90 font-sans text-xs md:text-sm leading-relaxed">
              Prepared under strict hygienic conditions using traditional slow-milling methods to guarantee absolute cleanliness and purity.
            </p>
          </motion.div>

          {/* Point 3: Rigorous Quality Check */}
          <motion.div
            variants={itemVariants}
            className="bg-brand-cream border border-brand-cream-dark/50 p-6 lg:p-8 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-cream-dark/40 flex items-center justify-center text-brand-gold group-hover:text-brand-red transition-colors duration-300">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl text-brand-green font-bold">
              Rigorous Quality Check
            </h3>
            <div className="w-8 h-[1px] bg-brand-gold mx-auto" />
            <p className="text-brand-clay/90 font-sans text-xs md:text-sm leading-relaxed">
              Each products that finds you passes through stringent quality checks to ensure its long lasting freshness.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
