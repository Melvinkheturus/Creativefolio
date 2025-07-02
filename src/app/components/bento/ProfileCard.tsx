"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <motion.div
      className="bento-card h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full">
        <motion.div 
          className="w-full h-56 bg-gradient-to-b from-[#1A1A1A] to-[#121212] relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image 
            src="/profile-pic.png" 
            alt="Manikandan" 
            width={300} 
            height={300} 
            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute top-3 right-3">
            <span className="badge bg-[#1D1D1D]/60 backdrop-blur-sm text-xs flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse-slow"></span>
              Available for Work
            </span>
          </div>
        </motion.div>
        
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">MANIKANDAN S</h2>
          <div className="mt-1 mb-3">
            <p className="text-sm font-medium text-gray-300 tracking-wide">UI/UX DESIGNER &</p>
            <p className="font-allura text-lg gradient-text tracking-wider">Creative Technologist</p>
          </div>
          
          <p className="text-gray-400 text-sm italic leading-relaxed border-l-2 border-[#A56CFF]/30 pl-3">
            Design is not just what it looks like and feels like. Design is how it works.
          </p>
        </div>
      </div>
    </motion.div>
  );
} 