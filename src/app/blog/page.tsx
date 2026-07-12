"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts, BlogPost } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
              The Athma Journal
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl text-brand-green font-bold leading-none tracking-editorial">
            Stories from Soil <br />
            <span className="text-brand-clay italic font-normal font-serif">& Slow Grinding.</span>
          </h1>
          <p className="text-brand-clay/90 text-sm md:text-base font-sans leading-relaxed pt-2">
            Explore the culinary history, agricultural traditions, and slow-grinding science that preserves the volatile aroma oils in our single-origin Kerala spices.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col h-full bg-brand-cream border border-brand-cream-dark/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Cover Image */}
              <div className="aspect-[16/10] w-full relative bg-brand-cream-dark/30 overflow-hidden border border-brand-cream-dark mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Text Info */}
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] text-brand-red tracking-widest uppercase font-bold">
                      {post.tag}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-brand-green font-bold group-hover:text-brand-red transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-xs md:text-sm text-brand-clay/85 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-cream-dark/50 flex items-center justify-between text-[11px] text-brand-clay/60 font-semibold tracking-wider uppercase">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <span className="inline-flex items-center text-brand-red hover:text-brand-red/80 font-bold tracking-widest text-[10px] uppercase space-x-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </main>

      {/* Full-bleed animated reading Drawer/Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 z-50 flex justify-end"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="bg-brand-cream text-brand-clay w-full max-w-3xl h-full shadow-2xl relative overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Header */}
              <div className="sticky top-0 bg-brand-cream/95 backdrop-blur-md border-b border-brand-cream-dark/40 px-6 py-4 flex items-center justify-between z-20">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center space-x-2 text-xs tracking-widest font-bold uppercase hover:text-brand-red transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Articles</span>
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-brand-green hover:bg-brand-red text-brand-cream p-2 transition-colors rounded-sm"
                  aria-label="Close article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Article Content */}
              <div className="pb-16">
                {/* Hero Cover */}
                <div className="relative w-full h-[280px] md:h-[400px] bg-brand-cream-dark/40 border-b border-brand-cream-dark">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-w-1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-transparent to-black/30" />
                  
                  {/* Floating Metadata */}
                  <div className="absolute bottom-6 left-6 right-6 text-brand-green md:max-w-2xl">
                    <span className="bg-brand-red text-brand-cream px-3 py-1 text-[10px] tracking-widest uppercase font-bold block w-max mb-3">
                      {selectedPost.tag}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight drop-shadow-sm">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                {/* Article Text */}
                <div className="px-6 md:px-12 pt-8 space-y-6 max-w-2xl">
                  {/* Author / Date Info */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-brand-clay/70 border-b border-brand-cream-dark/40 pb-4 font-sans">
                    <p>By <span className="font-semibold text-brand-green">{selectedPost.author}</span></p>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{selectedPost.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{selectedPost.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary Block */}
                  <p className="font-serif text-lg md:text-xl text-brand-green font-medium italic border-l-2 border-brand-gold pl-4 leading-relaxed pt-2">
                    {selectedPost.summary}
                  </p>

                  {/* Full Reading Paragraphs */}
                  <div className="space-y-6 pt-4 font-sans text-sm md:text-base text-brand-clay/90 leading-relaxed">
                    {selectedPost.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
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
