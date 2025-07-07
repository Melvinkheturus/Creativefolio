"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  gradient?: boolean;
  glassy?: boolean;
  glow?: "purple" | "blue" | "teal" | "pink" | "none";
  gradientDirection?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export default function BentoCard({
  children,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  gradient = false,
  glassy = false,
  glow = "none",
  gradientDirection = "top-right",
}: BentoCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Map glow options to actual shadow colors
  const glowMap = {
    purple: "shadow-[0_0_15px_rgba(147,51,234,0.15)]",
    blue: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    teal: "shadow-[0_0_15px_rgba(45,212,191,0.15)]",
    pink: "shadow-[0_0_15px_rgba(236,72,153,0.15)]",
    none: "shadow-lg"
  };

  // Map gradient directions to tailwind classes
  const directionMap = {
    "top-left": "ellipse_at_top_left",
    "top-right": "ellipse_at_top_right",
    "bottom-left": "ellipse_at_bottom_left",
    "bottom-right": "ellipse_at_bottom_right"
  };
  
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
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`
        ${colSpan} ${rowSpan}
        rounded-2xl overflow-hidden relative
        p-6 
        ${glow !== "none" ? glowMap[glow] : "shadow-lg shadow-black/5"}
        ${gradient ? "bg-gradient-to-tr from-[#7F5AF0]/90 to-[#2CB67D]/90" : ""}
        ${glassy ? "bg-[#0a0912]/60 backdrop-blur-xl border border-white/5" : 
                  gradient ? "" : 
                  "bg-[#0a0912]/70 border border-white/5"}
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Subtle inner gradient overlay */}
      <div className={`absolute inset-0 bg-[radial-gradient(${directionMap[gradientDirection]},_rgba(147,51,234,0.05),_transparent_70%)] pointer-events-none`}></div>
      
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      {children}
    </motion.div>
  );
} 