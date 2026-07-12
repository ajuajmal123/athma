"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Purity",
    tagline: "No compromise, honest flavours.",
    description:
      "We believe that the best spices are the ones untouched by chemical fillers, coloring, or artificial preservation. Our spices are sun-dried and ground in slow, temperature-controlled mills. You taste the spice in its absolute, raw authenticity, exactly as nature grew it.",
  },
  {
    number: "02",
    title: "Origin",
    tagline: "Rooted in the soil of Kerala.",
    description:
      "Our sourcing is limited to heritage estate farms in Wayanad, Idukki, and Kumily. By partnering directly with traditional farmers, we ensure our spice crops are harvested at peak seasonal oil content, keeping the ancient connection between the soil and your plate alive.",
  },
  {
    number: "03",
    title: "Home",
    tagline: "Food as culinary memory.",
    description:
      "Curry is the language of family comfort. The clink of the clay pot lid, the sudden sizzle of curry leaves hitting hot coconut oil, the warmth of returning home. We grind our blends to capture that precise olfactory memory, bringing the soul back to your kitchen.",
  },
];

export default function BrandPillars() {
  return (
    <section id="pillars" className="py-24 bg-brand-cream border-t border-brand-cream-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="max-w-2xl mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-semibold">
              The Soul Philosophy
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-bold tracking-editorial leading-tight">
            Our Three Pillars. <br />
            <span className="text-brand-clay italic font-normal">What We Standardize by.</span>
          </h2>
        </div>

        {/* Pillars Layout (Asymmetric Typography Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Vertical Separator lines between pillars */}
          <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-brand-cream-dark/60 pointer-events-none hidden lg:block" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-brand-cream-dark/60 pointer-events-none hidden lg:block" />

          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="space-y-6 lg:px-6 first:pl-0 last:pr-0"
            >
              {/* Huge Background Number */}
              <div className="relative">
                <span className="font-serif text-7xl md:text-8.5xl font-black text-brand-gold/25 block leading-none">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-3xl text-brand-green font-bold absolute bottom-1 left-0">
                  {pillar.title}
                </h3>
              </div>

              {/* Sub-headline */}
              <p className="text-brand-red font-sans text-xs tracking-wider uppercase font-semibold">
                {pillar.tagline}
              </p>

              {/* Separator */}
              <div className="h-[1.5px] w-12 bg-brand-gold" />

              {/* Description */}
              <p className="text-brand-clay/90 font-sans text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
