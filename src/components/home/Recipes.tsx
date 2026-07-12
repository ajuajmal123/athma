"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import { recipes } from "@/data/recipes";
import { Recipe } from "@/types";

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section id="recipes" className="py-24 bg-brand-cream border-t border-brand-cream-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-brand-red" />
              <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-semibold">
                Kitchen Journal & Culture
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-green font-bold tracking-editorial leading-tight">
              Curries with History. <br />
              <span className="text-brand-clay italic font-normal">Stories from Our Stoves.</span>
            </h2>
          </div>
          <p className="text-brand-clay/80 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Discover the time-tested techniques and secret ingredients that define authentic Kerala cooking. Click on any dish to reveal the family recipe card.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {recipes.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group cursor-pointer flex flex-col justify-between h-full bg-brand-cream border border-brand-cream-dark/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div>
                {/* Visual Image container with zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream-dark/30">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Difficulty Tag */}
                  <span className="absolute top-4 right-4 bg-brand-cream/95 text-brand-green border border-brand-green/20 px-2.5 py-1 text-[9px] tracking-widest uppercase font-bold">
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Metadata & Copy */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center space-x-4 text-brand-clay/70 text-[10px] tracking-widest uppercase font-semibold">
                    <span className="flex items-center space-x-1.5">
                      <Clock size={12} className="text-brand-gold" />
                      <span>{recipe.prepTime} Prep</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <Users size={12} className="text-brand-gold" />
                      <span>{recipe.servings}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-green font-bold group-hover:text-brand-red transition-colors duration-300 leading-tight">
                    {recipe.title}
                  </h3>

                  <p className="text-xs md:text-sm text-brand-clay/90 font-sans leading-relaxed line-clamp-3">
                    {recipe.description}
                  </p>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className="p-6 md:p-8 pt-0 border-t border-brand-cream-dark/20 flex items-center justify-between mt-auto">
                <span className="text-[10px] tracking-widest uppercase font-bold text-brand-green group-hover:text-brand-red transition-colors">
                  View Full Recipe Card
                </span>
                <ArrowRight size={14} className="text-brand-gold group-hover:text-brand-red transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Recipe Details (Full recipe display) */}
        <AnimatePresence>
          {selectedRecipe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedRecipe(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-brand-cream text-brand-clay max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl relative border-t-4 border-brand-red"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 bg-brand-green hover:bg-brand-red text-brand-cream p-2 z-10 transition-colors"
                  aria-label="Close recipe card"
                >
                  ✕
                </button>

                {/* Left Side: Recipe Presentation */}
                <div className="relative aspect-[4/5] md:aspect-auto w-full h-full bg-brand-cream-dark/50 min-h-[300px]">
                  <Image
                    src={selectedRecipe.image}
                    alt={selectedRecipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Metadata display */}
                  <div className="absolute bottom-6 left-6 right-6 text-brand-cream space-y-2">
                    <span className="bg-brand-red text-brand-cream px-3 py-1 text-[9px] tracking-widest uppercase font-bold w-max block">
                      {selectedRecipe.difficulty} Recipe
                    </span>
                    <h3 className="font-serif text-3xl font-bold leading-tight">{selectedRecipe.title}</h3>
                    <div className="flex items-center space-x-4 text-[10px] tracking-widest uppercase font-semibold text-brand-cream/80 pt-1">
                      <span>Cook Time: {selectedRecipe.cookTime}</span>
                      <span>•</span>
                      <span>Serves {selectedRecipe.servings}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Ingredients and preparation steps */}
                <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 overflow-y-auto max-h-[90vh] md:max-h-[85vh]">
                  
                  {/* Ingredients Section */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl text-brand-green font-bold border-b border-brand-cream-dark/50 pb-2 flex items-center space-x-2">
                      <BookOpen size={16} className="text-brand-gold" />
                      <span>Ingredients</span>
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm font-sans text-brand-clay/90">
                      {selectedRecipe.ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-brand-gold shrink-0">•</span>
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cooking Steps Section */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl text-brand-green font-bold border-b border-brand-cream-dark/50 pb-2">
                      Preparation Method
                    </h4>
                    <ol className="space-y-3.5 text-xs md:text-sm font-sans text-brand-clay/90">
                      {selectedRecipe.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="font-serif font-bold text-brand-red text-sm shrink-0 mt-0.5">
                            {idx + 1}.
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Cultural Context Note */}
                  <div className="p-4 bg-brand-cream-dark/40 border-l-2 border-brand-gold space-y-1.5">
                    <h5 className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-green">
                      Heritage Note:
                    </h5>
                    <p className="text-xs italic text-brand-clay/95 font-serif leading-relaxed">
                      {selectedRecipe.culturalNote}
                    </p>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
