"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSolid = !isHomepage || isScrolled;

  // Monitor scroll height to trigger background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when full-screen mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navListVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isSolid
            ? "bg-brand-cream border-b border-brand-cream-dark/40 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Image */}
          <a
            href="/"
            className="relative block h-14 w-[104px] md:h-20 md:w-[150px] transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/image.png"
              alt="ATHMA Logo"
              fill
              priority
              className="object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-sans tracking-widest uppercase font-medium hover:text-brand-red transition-colors duration-300 relative group py-2 ${
                  isSolid ? "text-brand-clay" : "text-brand-cream"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isSolid ? "text-brand-green" : "text-brand-cream"} size={26} />
            ) : (
              <Menu className={isSolid ? "text-brand-green" : "text-brand-cream"} size={26} />
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-green z-30 flex flex-col justify-between p-8 md:p-16 lg:hidden"
          >
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F5F1E8_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            {/* Top Space (padding for header) */}
            <div className="h-16" />

            {/* Editorial Nav Links */}
            <div className="max-w-2xl mx-auto w-full flex flex-col justify-center flex-grow">
              <span className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-6 block">
                — Menu
              </span>
              <motion.nav
                variants={navListVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col space-y-6 md:space-y-8"
              >
                {navigationItems.map((item) => (
                  <motion.div key={item.label} variants={navItemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-4xl md:text-5xl text-brand-cream hover:text-brand-gold transition-colors duration-300 block"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            {/* Footer Area inside Mobile Menu */}
            <div className="max-w-2xl mx-auto w-full border-t border-brand-cream/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <p className="text-brand-cream/60 text-xs tracking-widest uppercase font-semibold">
                  ATHMA SPICES
                </p>
                <p className="text-brand-gold text-sm mt-1">
                  The Soul of Curry. Rooted in Kerala.
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
