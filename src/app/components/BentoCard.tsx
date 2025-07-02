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
};

export default function BentoCard({
  children,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  gradient = false,
  glassy = false,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        ${colSpan} ${rowSpan}
        rounded-[30px] shadow-xl shadow-black/10
        p-6 overflow-hidden relative
        ${gradient ? "bg-gradient-to-tr from-[#7F5AF0] to-[#2CB67D]" : ""}
        ${glassy ? "bg-white/10 backdrop-blur-md" : gradient ? "" : "bg-white dark:bg-zinc-900"}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
} 