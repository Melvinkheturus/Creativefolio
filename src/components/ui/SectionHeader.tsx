"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <motion.h2 
      className={`text-xl md:text-2xl lg:text-3xl font-normal mb-4 md:mb-2 text-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="bg-gradient-to-t from-purple-600 to-white bg-clip-text text-transparent">
        {title}
      </span>
    </motion.h2>
  );
}