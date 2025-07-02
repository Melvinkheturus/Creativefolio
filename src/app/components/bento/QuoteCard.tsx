"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <motion.div
      className="bento-card h-full p-6 relative flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <Quote size={48} className="absolute top-4 left-4 text-[#1D1D1D] opacity-50" />
      
      <div className="text-center z-10">
        <p className="text-lg text-gray-300 italic">
          "Pixels with purpose."
        </p>
        
        <motion.div 
          className="mt-4 h-0.5 w-12 bg-gradient-to-r from-[#A56CFF] to-[#C278FF] mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
      </div>
      
      <div className="absolute bottom-4 right-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 5H21V11L24 14L21 17V23H15L12 26L9 23H3V17L0 14L3 11V5H9L12 2Z" fill="url(#gradient)" opacity="0.4" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A56CFF" />
              <stop offset="1" stopColor="#C278FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
} 