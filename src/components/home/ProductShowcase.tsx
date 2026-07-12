"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Product } from "@/types";

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="spices" className="py-24 bg-brand-cream border-t border-brand-cream-dark/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 justify-center">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
              Signature Blends
            </span>
            <span className="h-[1px] w-8 bg-brand-red" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-green font-bold tracking-editorial leading-tight">
            Grounded with Heart. <span className="text-brand-clay italic font-normal font-serif">Our Curated Catalog.</span>
          </h2>
        </div>

        {/* 4-Column Pure Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer aspect-[3/4] bg-brand-cream-dark/20 overflow-hidden border border-brand-cream-dark/50 shadow-md relative"
              onClick={() => setSelectedProduct(product)}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-w-768px) 100vw, 25vw"
              />
              {/* Subtle hover overlay shadow to indicate interactiveness */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View More Products CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 border border-brand-clay/35 hover:border-brand-green hover:text-brand-green text-brand-clay px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
          >
            <span>View More Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Modal for Product Details */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProduct(null)}
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
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-brand-green hover:bg-brand-red text-brand-cream p-2 z-10 transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                {/* Left Side: Product Media */}
                <div className="relative aspect-[4/5] md:aspect-auto w-full h-full bg-brand-cream-dark/50 min-h-[300px]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-brand-cream">
                    <span className="bg-brand-gold text-brand-green px-3 py-1 text-[10px] tracking-widest uppercase font-bold block w-max mb-2">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-3xl font-bold">{selectedProduct.name}</h3>
                  </div>
                </div>

                {/* Right Side: Editorial Information */}
                <div className="p-8 md:p-12 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div>
                      <span className="text-brand-red text-[10px] tracking-[0.2em] uppercase font-bold">
                        — Sourced from {selectedProduct.origin}
                      </span>
                      <p className="text-sm font-sans mt-3 leading-relaxed text-brand-clay/90">
                        {selectedProduct.description}
                      </p>
                    </div>

                    {/* Aroma Profile */}
                    <div className="p-4 bg-brand-cream-dark/30 border-l-2 border-brand-gold space-y-1">
                      <h5 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-green flex items-center space-x-1.5">
                        <Sparkles size={12} className="text-brand-gold" />
                        <span>Aroma Profile</span>
                      </h5>
                      <p className="text-xs italic text-brand-clay/95 font-serif">
                        {selectedProduct.aromaProfile}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-green">
                        Ingredients List:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="bg-brand-cream-dark/50 text-brand-clay border border-brand-cream-dark px-2.5 py-1 text-xs font-medium rounded-none"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-brand-cream-dark/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-brand-clay/60 uppercase tracking-widest">Weight & Price</p>
                      <p className="font-serif text-2xl text-brand-green font-bold">
                        {selectedProduct.price}{" "}
                        <span className="text-xs text-brand-clay/80 font-sans font-normal">
                          / {selectedProduct.size}
                        </span>
                      </p>
                    </div>
                    <Link
                      href="/blog"
                      onClick={() => setSelectedProduct(null)}
                      className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red/90 text-brand-cream px-6 py-3.5 text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
                    >
                      <span>Explore Journal</span>
                      <ArrowRight size={12} />
                    </Link>
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
