"use client";

import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";

export default function WhatIDoCard() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["Figma", "Canva", "Adobe XD", "UI/UX"]
    },
    {
      title: "Frontend Core",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      title: "React Ecosystem",
      skills: ["React.js", "Next.js", "Redux", "Hooks"]
    },
    {
      title: "Styling",
      skills: ["Tailwind", "SCSS", "Styled", "Framer"]
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express", "MongoDB", "SQL"]
    },
    {
      title: "Dev Tools",
      skills: ["Git", "VS Code", "Vercel", "Docker"]
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Cursor", "Copilot", "Claude"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "TeamWork", "Agile", "Communication"]
    }
  ];

  return (
    <motion.div
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-base font-medium mb-3 flex items-center">
        <span className="text-white">What </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff] ml-1">
          I Do
        </span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </motion.div>
  );
} 