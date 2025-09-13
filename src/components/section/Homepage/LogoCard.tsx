"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCard() {
  return (
    <motion.div
        className="h-full p-6 rounded-2xl bg-[#040406] border-#1c0333 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Top-left corner glow */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />
        
        {/* Bottom-right corner glow */}
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <Image 
            src="/Logo_MK.png" 
            alt="MK Logo" 
            width={150} 
            height={150} 
            className="object-contain w-auto h-auto max-w-[350%] max-h-[350%]" 
            priority
          />
        </div>
      </motion.div>
  );
}