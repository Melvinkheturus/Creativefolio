"use client";

import { motion } from "framer-motion";
import { Palette, Cpu, Code, MessageCircle, Wrench } from "lucide-react";

export default function WhatIDoCard() {
  const skillCategories = [
    {
      icon: <Palette size={16} />,
      title: "Design Tools",
      skills: ["Figma", "Canva", "Illustrator", "Photoshop"],
    },
    {
      icon: <Cpu size={16} />,
      title: "AI / No-Code",
      skills: ["Cursor", "Framer", "Uizard", "Galileo", "FlutterFlow"],
    },
    {
      icon: <Code size={16} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind", "React (Learning)"],
    },
    {
      icon: <MessageCircle size={16} />,
      title: "Soft Skills",
      skills: ["Communication", "Fast Learning", "Collaboration"],
    },
    {
      icon: <Wrench size={16} />,
      title: "Other Tools",
      skills: ["Supabase", "SQLite", "GitHub", "Notion"],
    },
  ];

  return (
    <motion.div
      className="bento-card h-full p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="card-title">
          <span className="text-white">WHAT I </span>
          <span className="gradient-text">DO</span>
        </h3>
        
        <div className="space-y-5">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="pb-2"
            >
              <div className="flex items-center mb-2">
                <span className="gradient-text mr-2">{category.icon}</span>
                <h4 className="text-white text-sm font-medium">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 