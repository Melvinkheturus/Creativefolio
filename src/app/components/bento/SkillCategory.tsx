"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  colSpan?: boolean;
}

export default function SkillCategory({ title, skills, colSpan = false }: SkillCategoryProps) {
  return (
    <motion.div
      className={`bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-lg p-2.5 ${
        colSpan ? 'col-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="text-xs font-medium text-white/70 mb-1.5">{title}</h4>
      <div className="grid grid-cols-2 gap-1.5">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-2 py-1 bg-white/5 rounded-md text-[11px] font-medium text-purple-300 flex items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
} 