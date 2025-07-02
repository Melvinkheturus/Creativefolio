"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";

type Skill = {
  name: string;
  icon: string;
};

export default function SkillsCard() {
  const skills: Skill[] = [
    { name: "HTML", icon: "💻" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Figma", icon: "🖌️" },
    { name: "Git", icon: "📂" },
    { name: "UI/UX", icon: "✨" },
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-1">
      <h3 className="text-xl font-poppins font-semibold mb-4">Skills & Tools</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-100 dark:bg-zinc-800 p-3 rounded-xl text-center hover:scale-105 transition flex flex-col items-center justify-center"
          >
            <span className="text-2xl mb-1">{skill.icon}</span>
            <p className="text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
} 