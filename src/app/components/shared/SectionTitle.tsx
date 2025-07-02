"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function SectionTitle({ title, className = '', icon }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`flex items-center gap-2 mb-5 ${className}`}
    >
      {icon && <span className="text-[#7F5AF0]">{icon}</span>}
      <h2 className="text-xl md:text-2xl font-poppins font-semibold">{title}</h2>
    </motion.div>
  );
} 