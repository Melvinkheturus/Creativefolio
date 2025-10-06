"use client";

import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiChevronDown, FiLayout, FiCode, FiMonitor, FiTrendingUp, FiPenTool } from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

const iconMap: { [key: string]: JSX.Element } = {
  "FiLayout": <FiLayout className="w-4 h-4" />,
  "FiCode": <FiCode className="w-4 h-4" />,
  "FiMonitor": <FiMonitor className="w-4 h-4" />,
  "FiTrendingUp": <FiTrendingUp className="w-4 h-4" />,
  "FiPenTool": <FiPenTool className="w-4 h-4" />,
};

interface SkillCategory {
  _id: string;
  _type: string;
  id: number;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

const DEFAULT_SKILLS: SkillCategory[] = [
  {
    _id: 'skill-1',
    _type: 'skillCategory',
    id: 1,
    title: "UI/UX Design",
    icon: "FiLayout",
    description: "Creating intuitive, beautiful interfaces with user-centered design principles.",
    skills: ["Wireframing", "Prototyping", "User Research", "Figma", "Framer"]
  },
  {
    _id: 'skill-2',
    _type: 'skillCategory',
    id: 2,
    title: "Web Development",
    icon: "FiCode",
    description: "Building responsive, interactive web experiences with modern frameworks.",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Supabase", "Sanity"]
  },
  {
    _id: 'skill-3',
    _type: 'skillCategory',
    id: 3,
    title: "Web Design",
    icon: "FiMonitor",
    description: "Crafting visually appealing websites with focus on aesthetics and usability.",
    skills: ["Responsive Design", "WordPress", "Visual Hierarchy", "Accessibility", "Cross-platform Compatibility"]
  },
  {
    _id: 'skill-4',
    _type: 'skillCategory',
    id: 4,
    title: "Graphic Design",
    icon: "FiPenTool",
    description: "Creating visual content that communicates messages effectively.",
    skills: ["Brand Identity", "Typography", "Illustration", "Motion Graphics", "Print Design"]
  }
];

type SkillData = SkillCategory[];

export default function WhatIDo() {
  const [openCategory, setOpenCategory] = useState<number>(1); // Default open is UI/UX Design (id: 1)
  const cardRef = useRef<HTMLDivElement>(null);
  const [skillData, setSkillData] = useState<SkillData>(DEFAULT_SKILLS);

  useEffect(() => {
    async function fetchSkillData() {
      const query = `*[_type == "skillCategory"] | order(id asc) {
        _id,
        _type,
        id,
        title,
        icon,
        description,
        skills
      }`;
      const result = await sanityFetch<SkillData>(query, DEFAULT_SKILLS);
      setSkillData(result.data);
    }
    fetchSkillData();
  }, []);

  const toggleCategory = (id: number) => {
    // Always keep one category open
    setOpenCategory(openCategory === id ? openCategory : id);
  };

  return (
    <motion.div
      ref={cardRef}
      className="p-6 rounded-2xl bg-[#040406] border-#1c0333 relative min-h-[240px] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      
      <div className="relative z-10">
        <SectionHeader title="What I Do" />
        
        <div className="space-y-1.5">
          {skillData.map((category) => (
            <div key={category.id} className="overflow-hidden">
              <motion.button
                className={`w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-left ${
                  openCategory === category.id ? "border-b border-[#2a2a2a]" : ""
                }`}
                onClick={() => toggleCategory(category.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-2">
                  <div className={`p-1 rounded-full ${openCategory === category.id ? "bg-purple-500/20 text-purple-400" : "bg-[#1a1a1a] text-gray-400"}`}>
                    {iconMap[category.icon]}
                  </div>
                  <span className={`font-medium text-xs md:text-sm ${openCategory === category.id ? "text-white" : "text-gray-300"}`}>
                    {category.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-gray-400 w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-2 bg-[#0a0912]/90 rounded-b-lg"
                  >
                    <p className="text-xs text-gray-300 mb-2">{category.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-[#1D1D1D] text-gray-300 rounded-full text-[10px] hover:bg-purple-900/20 hover:text-purple-300 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}