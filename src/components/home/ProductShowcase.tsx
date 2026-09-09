"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Product } from "@/types";

export default function ProductShowcase() {
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
            The Soul of Curry. <span className="text-brand-clay italic font-normal font-serif">Our Curated Collection.</span>
          </h2>
        </div>

        {/* 4-Column Pure Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {products.slice(0, 4).map((product, idx) => (
            <Link
              key={product.id}
              href={`/products?id=${product.id}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer aspect-[3/4] bg-brand-cream-dark/20 overflow-hidden border border-brand-cream-dark/50 shadow-md relative"
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
            </Link>
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

      </div>
    </section>
  );
}
