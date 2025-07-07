"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroCard() {
  return (
    <motion.div
      className="col-span-1 md:col-span-2 bg-gradient-to-tr from-[#7F5AF0] to-[#2CB67D] p-6 rounded-[30px] shadow-xl shadow-black/10 relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="z-10">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2">
            Hi, I'm Manikandan 👋
          </h1>
          <p className="text-lg text-white/90 max-w-md">
            UI/UX Designer & Front-end Developer with a passion for creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
          
          <motion.button 
            className="mt-6 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium backdrop-blur-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>
        
        <div className="relative z-10">
          <motion.div
            className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-xl border-4 border-white/30 overflow-hidden"
            animate={{ 
              boxShadow: ["0 0 20px rgba(255,255,255,0.3)", "0 0 30px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image 
              src="/profile-pic.png" 
              alt="Manikandan" 
              width={180} 
              height={180}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
          </defs>
          <circle cx="350" cy="150" r="200" fill="url(#gradient)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="350" r="200" fill="url(#gradient2)" />
        </svg>
      </div>
    </motion.div>
  );
} 