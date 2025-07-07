"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ripple } from "@/components/magicui/ripple";
import { useEffect, useState, useRef } from "react";

export default function QuoteCard() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-lg h-full relative flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      {/* Magic UI Ripple effect with updated opacity */}
      <Ripple className="z-0 opacity-60" />
      
      {/* Centered Logo with glow */}
      <div className="z-20 flex items-center justify-center relative">
        {mounted && (
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full opacity-30 blur-xl"></div>
            <Image 
              src="/mklogo.png"
              alt="Logo"
              width={180}
              height={180}
              className="max-w-full h-auto relative"
              style={{ filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.2))" }}
              priority
            />
          </div>
        )}
      </div>
    </motion.div>
  );
} 