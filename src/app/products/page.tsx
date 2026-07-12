"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="relative min-h-screen bg-brand-cream font-sans">
      {/* Navbar spacer */}
      <Navbar />
      <div className="h-24 md:h-28" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10">
        
        {/* Back Link / Breadcrumb */}
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
        <div className="border-b border-brand-cream-dark/50 pb-12 mb-16 space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-brand-red" />
            <span className="text-brand-red text-xs tracking-[0.25em] uppercase font-bold">
              The Complete Collection
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl text-brand-green font-bold leading-none tracking-editorial">
            Our Spice Catalog.
          </h1>
          <p className="text-brand-clay/90 text-sm md:text-base font-sans leading-relaxed pt-2">
            Every bag of Athma represents spices sourced from estate farms, ground slowly to preserve aroma oils, and packaged in a fully automated state-of-the-art facility with no hand/human interaction.
          </p>
        </div>

        {/* 2-Column Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-brand-cream border border-brand-cream-dark/60 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* Product Number Backdrop */}
              <div className="absolute top-4 right-6 select-none opacity-[0.08] z-0 pointer-events-none">
                <span className="font-serif text-7xl font-black text-brand-clay leading-none">
                  {product.number}
                </span>
              </div>

              {/* Product Image Box */}
              <div
                className="w-full md:w-2/5 aspect-[3/4] relative bg-brand-cream-dark/30 overflow-hidden border border-brand-cream-dark shrink-0 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Product Information Details */}
              <div className="flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-brand-red text-[10px] tracking-widest uppercase font-bold">
                      {product.category}
                    </span>
                    <h2
                      className="font-serif text-2xl md:text-3xl text-brand-green font-bold hover:text-brand-red cursor-pointer transition-colors leading-tight"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-xs text-brand-clay font-sans font-semibold tracking-wide uppercase">
                    Origin: {product.origin}
                  </p>
                  <p className="text-xs md:text-sm text-brand-clay/90 font-sans leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream-dark/50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-brand-clay/60 uppercase tracking-widest">Weight & Price</p>
                    <p className="font-serif text-xl text-brand-green font-bold">
                      {product.price}{" "}
                      <span className="text-xs text-brand-clay/80 font-sans font-normal">
                        / {product.size}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center space-x-1.5 bg-brand-green hover:bg-brand-red text-brand-cream px-4 py-2.5 text-[10px] tracking-widest uppercase font-semibold transition-colors duration-300"
                  >
                    <span>Ingredients & Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Modal for Details (Reusable on separate catalog page) */}
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

              {/* Right Side: Information */}
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

                  {/* Ingredients */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-sans font-bold uppercase tracking-wider text-brand-green">
                      Ingredients List:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="bg-brand-cream-dark/50 text-brand-clay border border-brand-cream-dark px-2.5 py-1 text-xs font-medium"
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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
