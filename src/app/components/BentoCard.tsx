"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  // Map glow options to actual shadow colors
  const glowMap = {
    purple: "shadow-[0_0_25px_rgba(147,51,234,0.2)]",
    blue: "shadow-[0_0_25px_rgba(59,130,246,0.2)]",
    teal: "shadow-[0_0_25px_rgba(45,212,191,0.2)]",
    pink: "shadow-[0_0_25px_rgba(236,72,153,0.2)]",
    none: ""
  };

  // Map gradient directions to tailwind classes
  const directionMap = {
    "top-left": "ellipse_at_top_left",
    "top-right": "ellipse_at_top_right",
    "bottom-left": "ellipse_at_bottom_left",
    "bottom-right": "ellipse_at_bottom_right"
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        ${colSpan} ${rowSpan}
        rounded-2xl overflow-hidden relative
        p-6 
        ${glow !== "none" ? glowMap[glow] : "shadow-lg shadow-black/10"}
        ${gradient ? "bg-gradient-to-tr from-[#7F5AF0] to-[#2CB67D]" : ""}
        ${glassy ? "bg-[#161625]/60 backdrop-blur-xl border border-white/10" : 
                  gradient ? "" : 
                  "bg-[#161625]/80 border border-white/5"}
        ${className}
      `}
    >
      {/* Subtle inner gradient overlay */}
      <div className={`absolute inset-0 bg-[radial-gradient(${directionMap[gradientDirection]},_rgba(147,51,234,0.08),_transparent_70%)] pointer-events-none`}></div>
      
      {children}
    </motion.div>
  );
} 