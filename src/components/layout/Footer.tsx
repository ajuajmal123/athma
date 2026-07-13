import React from "react";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-brand-green text-brand-cream pt-20 pb-12 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5F1E8_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-brand-cream/10 pb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="relative h-16 w-44 md:h-20 md:w-56">
              <Image
                src="/images/image.png"
                alt="ATHMA Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-brand-cream/80 text-sm font-sans leading-relaxed max-w-xs">
              Crafting single-origin, heirloom spice blends that connect family, memory, and the authentic culinary traditions of Kerala.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-green flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-green flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold mb-6 font-medium">Explore</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="/#story" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#spices" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Our Spices
                </a>
              </li>
              <li>
                <a href="/process" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Crafting Process
                </a>
              </li>
              <li>
                <a href="/blog" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Blog Journal
                </a>
              </li>
              <li>
                <a href="/#contact-section" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold mb-6 font-medium">Spices</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#spices" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Everyday Blends
                </a>
              </li>
              <li>
                <a href="#spices" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Coastal Blends
                </a>
              </li>
              <li>
                <a href="#spices" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Heritage Roasts
                </a>
              </li>
              <li>
                <a href="#spices" className="text-brand-cream/80 hover:text-brand-cream transition-colors">
                  Royal Aromas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold mb-6 font-medium">The Spice Kitchen</h4>
            <ul className="space-y-4 text-sm text-brand-cream/80">
              <li className="flex items-start space-x-3">
                <a
                  href="https://maps.app.goo.gl/NoH5HWz7BbKZpsd49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-brand-gold transition-colors"
                >
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span>ATHMA SPICES, Pollambara, Puthusery P.O., Mananthavady, Wayanad - 670645</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+917012646402" className="hover:text-brand-gold transition-colors">+91 70126 46402</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="mailto:athmaspices@gmail.com" className="hover:text-brand-gold transition-colors">athmaspices@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Oversized wordmark */}
        <div className="relative pt-10 flex flex-col md:flex-row items-center justify-between z-10 text-xs text-brand-cream/50 space-y-4 md:space-y-0">
          <p>© {currentYear} Athma Spices. All rights reserved. Handcrafted in Kerala.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-cream transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Tasteful oversized background wordmark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
        <h2 className="font-serif text-[12vw] font-bold text-[#2A4608] leading-none opacity-40 select-none">
          ATHMA
        </h2>
      </div>
    </footer>
  );
}
