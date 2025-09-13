"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-6 rounded-2xl bg-[#040406] border-#1c0333 relative overflow-hidden ${className}`}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}