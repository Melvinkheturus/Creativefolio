"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiChevronDown, FiLayout, FiCode, FiMonitor, FiPenTool } from "react-icons/fi";
import SectionHeader from "../../ui/SectionHeader";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

// Default fallback data
const DEFAULT_SKILLS = {
  title: 'What I Do',
  categories: [
    {
      id: 1,
      title: "UI/UX Design",
      icon: "FiLayout",
      description: "Creating intuitive, beautiful interfaces with user-centered design principles.",
      skills: ["Wireframing", "Prototyping", "User Research", "Figma", "Framer"],
      order: 1
    },
    {
      id: 2,
      title: "Web Development",
      icon: "FiCode",
      description: "Building responsive, interactive web experiences with modern frameworks.",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "Supabase", "Sanity"],
      order: 2
    },
    {
      id: 3,
      title: "Web Design",
      icon: "FiMonitor",
      description: "Crafting visually appealing websites with focus on aesthetics and usability.",
      skills: ["Responsive Design", "WordPress", "Visual Hierarchy", "Accessibility", "Cross-platform Compatibility"],
      order: 3
    },
    {
      id: 4,
      title: "Graphic Design",
      icon: "FiPenTool",
      description: "Creating visual content that communicates messages effectively.",
      skills: ["Brand Identity", "Typography", "Illustration", "Motion Graphics", "Print Design"],
      order: 4
    }
  ]
};

interface SkillData {
  title: string;
  categories: Array<{
    id: number;
    title: string;
    icon: string;
    description: string;
    skills: string[];
    order: number;
  }>;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  FiLayout: <FiLayout className="w-4 h-4" />,
  FiCode: <FiCode className="w-4 h-4" />,
  FiMonitor: <FiMonitor className="w-4 h-4" />,
  FiPenTool: <FiPenTool className="w-4 h-4" />,
};

export default function WhatIDo() {
  const [openCategory, setOpenCategory] = useState<number>(1);
  const cardRef = useRef<HTMLDivElement>(null);
  const [skillData, setSkillData] = useState<SkillData>(DEFAULT_SKILLS);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchSkillData() {
      const query = `*[_type == "skill"] | order(order asc){
        _id,
        title,
        icon,
        description,
        skills,
        order
      }`;
      const result = await sanityFetch<Array<any>>(query, DEFAULT_SKILLS.categories);
      
      if (result.data && result.data.length > 0) {
        const categories = result.data.map((skill, index) => ({
          id: index + 1,
          title: skill.title,
          icon: skill.icon,
          description: skill.description,
          skills: skill.skills,
          order: skill.order
        }));
        setSkillData({ title: 'What I Do', categories });
      }
    }
    fetchSkillData();
  }, []);

  const toggleCategory = (id: number) => {
    // Always keep one category open
    setOpenCategory(openCategory === id ? openCategory : id);
  };

  const categories: SkillCategory[] = (skillData.categories || DEFAULT_SKILLS.categories).map(cat => ({
    ...cat,
    icon: iconMap[cat.icon] || <FiCode className="w-4 h-4" />
  }));

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
        <SectionHeader title={skillData.title} />
        
        <div className="space-y-1.5">
          {categories.map((category) => (
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
                    {category.icon}
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