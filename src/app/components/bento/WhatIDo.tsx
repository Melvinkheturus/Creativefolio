"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown, FiLayout, FiCode, FiMonitor, FiTrendingUp, FiPenTool } from "react-icons/fi";

interface SkillCategory {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  skills: string[];
}

export default function WhatIDo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openCategory, setOpenCategory] = useState<number>(1); // Default open is UI/UX Design (id: 1)
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const toggleCategory = (id: number) => {
    // Always keep one category open
    setOpenCategory(openCategory === id ? openCategory : id);
  };

  const categories: SkillCategory[] = [
    {
      id: 1,
      title: "UI/UX Design",
      icon: <FiLayout className="w-4 h-4" />,
      description: "Creating intuitive, beautiful interfaces with user-centered design principles.",
      skills: ["Wireframing", "Prototyping", "User Research", "Figma", "Framer"]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: <FiCode className="w-4 h-4" />,
      description: "Building responsive, interactive web experiences with modern frameworks.",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Web Design",
      icon: <FiMonitor className="w-4 h-4" />,
      description: "Crafting visually appealing websites with focus on aesthetics and usability.",
      skills: ["Responsive Design", "WordPress", "Visual Hierarchy", "Accessibility", "Cross-platform Compatibility"]
    },
    {
      id: 4,
      title: "Digital Marketing",
      icon: <FiTrendingUp className="w-4 h-4" />,
      description: "Implementing strategies to enhance online presence and user engagement.",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media", "Email Marketing"]
    },
    {
      id: 5,
      title: "Graphic Design",
      icon: <FiPenTool className="w-4 h-4" />,
      description: "Creating visual content that communicates messages effectively.",
      skills: ["Brand Identity", "Typography", "Illustration", "Motion Graphics", "Print Design"]
    }
  ];

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          <span className="text-white">WHAT I </span>
          <span className="text-purple-400">DO</span>
        </h3>
        
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