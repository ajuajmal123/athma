"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Eye, Loader, Sparkles, ChefHat } from "lucide-react";
import { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  {
    id: "01",
    step: "Source",
    title: "Heritage Sourcing",
    description: "Sourcing heirloom crop varieties from single-origin organic estates in the misty slopes of Wayanad and Cardamom Hills.",
    keralaContext: "Direct fair-trade partnership with local family estates."
  },
  {
    id: "02",
    step: "Select",
    title: "Manual Sorting",
    description: "Hand-picking spices under morning sunbeams. Only whole pods and flawless seeds pass our elders' careful gaze.",
    keralaContext: "Discarding split seeds and hollow pods which lose essential oil."
  },
  {
    id: "03",
    step: "Grind",
    title: "Slow Low-Temp Milled",
    description: "Slow-milled under stone cylinders at chilled temperatures, ensuring essential volatile aroma oils are completely locked inside.",
    keralaContext: "Never heated, preserving natural therapeutic values."
  },
  {
    id: "04",
    step: "Blend",
    title: "Family Ratios",
    description: "Formulating blends based on ancestral culinary proportions. No filler flours, MSG, or chemical coloring agents.",
    keralaContext: "Exactly mimicking the traditional wood-fired skillet roasts."
  },
  {
    id: "05",
    step: "Cook",
    title: "Soulful Currying",
    description: "Entering your kitchen to create the deep amber gravies and smoky red coastal curries that define home comfort.",
    keralaContext: "Ready to pair with clay pot (manchatti) cooking styles."
  }
];

// Map indexes to Lucide Icons for premium visual storytelling
const icons = [Leaf, Eye, Loader, Sparkles, ChefHat];

export default function ProcessJourney() {
  return (
    <section id="process" className="py-24 bg-brand-cream border-t border-brand-cream-dark/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro */}
        <div className="max-w-2xl mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-semibold">
              Farm To Kitchen
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-bold tracking-editorial leading-tight">
            The Crafting Journey. <br />
            <span className="text-brand-clay italic font-normal">How We Preserved Flavour.</span>
          </h2>
        </div>

        {/* Narrative Journey Grid */}
        <div className="relative">
          {/* Horizontal connecting line on desktop */}
          <div className="absolute top-[45px] left-10 right-10 h-[1.5px] bg-brand-gold/30 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = icons[idx];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="space-y-6 flex flex-col items-start text-left lg:px-4 first:pl-0 last:pr-0"
                >
                  {/* Step bubble and line connector */}
                  <div className="flex items-center space-x-4 lg:space-x-0 lg:flex-col lg:items-start lg:space-y-4 w-full">
                    {/* Circle Icon Badge */}
                    <div className="w-16 h-16 rounded-full bg-brand-cream border-2 border-brand-gold hover:border-brand-red flex items-center justify-center text-brand-green transition-colors duration-300 shadow-sm shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="lg:space-y-1">
                      <span className="text-brand-red text-[10px] tracking-widest uppercase font-bold">
                        Step {item.id} — {item.step}
                      </span>
                      <h4 className="font-serif text-lg md:text-xl text-brand-green font-bold leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-brand-clay/90 font-sans text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Earthen/Tradition Box Accent */}
                  <div className="p-3 bg-brand-cream-dark/30 border-l border-brand-green w-full">
                    <p className="text-[10px] text-brand-green font-sans font-semibold uppercase tracking-wider">
                      Kerala Context:
                    </p>
                    <p className="text-[11px] text-brand-clay italic font-serif mt-1">
                      {item.keralaContext}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
