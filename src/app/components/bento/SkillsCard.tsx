"use client";

import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";
import { PaletteIcon, CodeIcon, BotIcon, LampIcon, BrushIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function SkillsCard() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Design Tools",
      icon: <PaletteIcon size={20} />,
      skills: ["Figma", "Canva", "Illustrator (Intermediate)", "Photoshop (Intermediate)", "Spline"]
    },
    {
      title: "AI & No-Code Tools",
      icon: <BotIcon size={20} />,
      skills: ["Cursor AI (Proficient)", "Framer (AI-assisted)", "FlutterFlow", "WordPress", "20+ Generative AI tools"]
    },
    {
      title: "Frontend",
      icon: <CodeIcon size={20} />,
      skills: ["HTML", "CSS", "Tailwind CSS (Learning)"]
    },
    {
      title: "Soft Skills",
      icon: <LampIcon size={20} />,
      skills: ["Leadership & Team Management", "Problem-Solving", "Communication", "Fast Learning & Adaptability"]
    },
    {
      title: "Additional",
      icon: <BrushIcon size={20} />,
      skills: ["Supabase", "SQLite", "GitHub", "Python", "CapCut", "Premiere Pro", "Notion (Proficient)"]
    }
  ];

  return (
    <motion.div
      className="col-span-2 md:col-span-6 bg-gradient-to-br from-[#131313] to-[#242424] p-6 rounded-[30px] shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <SectionTitle title="Skills & Tools" className="text-white" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-[#1E1E1E] p-4 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#7F5AF0]">{category.icon}</span>
              <h3 className="font-poppins font-medium text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="text-xs bg-[#2A2A2A] text-gray-300 px-2 py-1 rounded-md"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(127, 90, 240, 0.2)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 