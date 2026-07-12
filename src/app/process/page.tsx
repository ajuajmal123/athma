"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Leaf, Eye, Loader, Sparkles, ChefHat, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  keralaContext: string;
}

const steps: ProcessStep[] = [
  {
    id: "01",
    step: "Source",
    title: "Heritage Sourcing",
    description: "We navigate deep into the mist-shrouded elevations of Wayanad and Kumily to partner directly with family-owned micro-estates. By harvesting green cardamom and black pepper exclusively at seasonal oil peaks, we preserve nature's robust aromatic yield.",
    keralaContext: "Direct fair-trade contracts that bypass brokers, ensuring living wages for indigenous growers."
  },
  {
    id: "02",
    step: "Select",
    title: "Triple Manual Sorting",
    description: "Standard industrial spices are ground whole—dust, stems, and hollow pods included. At Athma, our spice crops undergo three rounds of visual inspection under sunlight. Only fully developed seeds and rich, uncracked pods proceed.",
    keralaContext: "Eliminating empty or split seeds, which lose their flavor oils long before milling."
  },
  {
    id: "03",
    step: "Grind",
    title: "Slow Low-Temp Milling",
    description: "High-speed metal crushers cook the spice during grinding, scorching away therapeutic oils. Our custom stone mills spin at a slow 400 RPM with cold-water jackets, maintaining a temperature below 25°C to lock in every droplet of aroma oil.",
    keralaContext: "Replicating the cool friction of the ancestral grinding stones (Ammi Kallu)."
  },
  {
    id: "04",
    step: "Blend",
    title: "Sacred Ancestral Ratios",
    description: "Our blends are balanced based on traditional recipes preserved in handwriting. We never add artificial colors, chemical preservatives, MSG, or starch/flour fillers. Every milligram is pure, authentic spice.",
    keralaContext: "Recreating the exact flavor profiles of coconut-husk fired skillet roasts."
  },
  {
    id: "05",
    step: "Cook",
    title: "Soulful Home Curries",
    description: "When our slow-ground blends meet warm coconut oil in your pan, they release their locked-in volatile compounds. This slow-release chemistry produces the deep amber gravies and smoky aromas of authentic home cooking.",
    keralaContext: "Optimized to yield maximum flavor depth when cooked in earthenware pots (Manchatti)."
  }
];

const icons = [Leaf, Eye, Loader, Sparkles, ChefHat];

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-brand-cream font-sans">
      <Navbar />
      <div className="h-24 md:h-28" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-clay hover:text-brand-green text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="border-b border-brand-cream-dark/50 pb-12 mb-20 space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
              Farm to Kitchen Craft
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl text-brand-green font-bold leading-none tracking-editorial">
            The Crafting Process. <br />
            <span className="text-brand-clay italic font-normal font-serif">How We Lock in Aroma.</span>
          </h1>
          <p className="text-brand-clay text-sm md:text-base font-sans leading-relaxed pt-2 max-w-2xl">
            We reject the shortcuts of industrial high-speed mills. Every step of our journey is calibrated to protect and deliver the natural essential oils of Kerala's finest heritage estates.
          </p>
        </div>

        {/* Visual Editorial Process Timeline */}
        <div className="relative space-y-24 md:space-y-36 max-w-5xl mx-auto">
          {/* Vertical connecting line in middle for desktop */}
          <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-brand-cream-dark/80 hidden md:block pointer-events-none z-0" />

          {steps.map((step, idx) => {
            const IconComp = icons[idx];
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={step.id}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16 z-10`}
              >
                {/* Visual Circle Milestone Indicator */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-20 hidden md:block">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-10 h-10 rounded-full bg-brand-cream border-4 border-brand-gold hover:border-brand-red text-brand-green flex items-center justify-center transition-colors duration-300 shadow-md font-serif text-xs font-bold"
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Left/Right Text Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <span className="bg-brand-red/10 text-brand-red px-2.5 py-1 text-[9px] tracking-widest uppercase font-bold">
                      Step {step.id} — {step.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-green font-bold leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-brand-clay text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Left/Right Decorative Accent Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2"
                >
                  <div className="bg-brand-green-dark/5 border border-brand-cream-dark/60 p-6 md:p-8 rounded-none hover:border-brand-gold/60 transition-colors duration-300 relative group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-cream border border-brand-cream-dark shadow-sm flex items-center justify-center text-brand-gold group-hover:text-brand-red transition-colors duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] tracking-widest uppercase font-bold text-brand-green">
                        Ancestral Knowledge
                      </span>
                    </div>
                    <div className="space-y-1.5 border-l-2 border-brand-gold pl-4">
                      <p className="text-[10px] text-brand-green font-sans font-bold uppercase tracking-wider">
                        Kerala Sourcing Context:
                      </p>
                      <p className="text-xs md:text-sm text-brand-clay italic font-serif leading-relaxed">
                        “{step.keralaContext}”
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
