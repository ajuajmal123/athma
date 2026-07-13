"use client";

import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-6 z-40 hidden sm:flex flex-col items-center space-y-3 bg-brand-green/95 backdrop-blur-md border border-brand-cream/10 p-2.5 rounded-full shadow-xl">
      
      {/* WhatsApp Link */}
      <motion.a
        href="https://wa.me/917012646402"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#25D366] text-brand-cream hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
        aria-label="WhatsApp"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.386 9.805-9.779.001-2.613-1.015-5.07-2.861-6.92-1.847-1.85-4.307-2.868-6.923-2.869-5.409 0-9.81 4.388-9.813 9.78-.002 1.958.51 3.864 1.484 5.56l-.974 3.56 3.662-.962zm10.741-6.906c-.287-.144-1.702-.84-1.965-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.167.192-.335.216-.622.072-1.359-.68-2.316-1.12-3.238-2.71-.243-.418.244-.388.697-1.29.073-.144.036-.27-.018-.378-.054-.108-.456-1.102-.624-1.512-.164-.396-.345-.342-.474-.342h-.402c-.144 0-.378.054-.576.27-.198.216-.756.738-.756 1.8 0 1.062.774 2.088.882 2.232.108.144 1.524 2.328 3.69 3.264 1.28.552 1.77.6 2.424.5.42-.066 1.29-.528 1.47-.978.18-.45.18-.834.126-.93-.054-.096-.204-.144-.492-.288z" />
        </svg>
      </motion.a>

      {/* Instagram Link */}
      <motion.a
        href="https://instagram.com/athmaspices"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-brand-cream hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </motion.a>

      {/* Facebook Link */}
      <motion.a
        href="https://facebook.com/athmaspices"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, y: -2 }}
        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] text-brand-cream hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </motion.a>

    </div>
  );
}
