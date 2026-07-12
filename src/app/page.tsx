import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BrandStory from "@/components/home/BrandStory";
import ProductShowcase from "@/components/home/ProductShowcase";
import SoulStatement from "@/components/home/SoulStatement";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-cream font-sans">
      {/* Decorative Grid backdrop for the entire site */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#8B5A3C_1px,transparent_1px)] [background-size:24px_24px] z-0" />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero />
        <BrandStory />
        <ProductShowcase />
        <SoulStatement />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
