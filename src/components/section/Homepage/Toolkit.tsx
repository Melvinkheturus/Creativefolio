"use client";

import { motion } from "framer-motion";
import React from 'react';
import { SiReact, SiFigma, SiFramer, SiTailwindcss, SiWordpress, SiNotion, SiGithub, SiSupabase } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useRef } from "react";
import SectionHeader from "../../ui/SectionHeader";

// Generic marquee wrapper
function InfiniteMarquee({ children, speed = 30, direction = "left" }: { children: React.ReactNode; speed?: number; direction?: "left" | "right" }) {
  return (
    <div className="relative w-full overflow-hidden scrollbar-hide">
      <motion.div
        className="flex w-max"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Render children twice for seamless loop */}
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
}

export default function Toolkit() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tool names for text marquee
  const toolNames = ["Figma", "Framer", "React", "Tailwind", "WordPress", "Cursor AI", "Supabase", "Notion", "GitHub"];
  
  // Tools with icons for icon marquee
  const toolIcons = [
    { name: "Figma", icon: <SiFigma size={28} /> },
    { name: "Framer", icon: <SiFramer size={28} /> },
    { name: "React", icon: <SiReact size={28} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={28} /> },
    { name: "WordPress", icon: <SiWordpress size={28} /> },
    { name: "Cursor AI", icon: <FaCode size={28} /> },
    { name: "Supabase", icon: <SiSupabase size={28} /> },
    { name: "Notion", icon: <SiNotion size={28} /> },
    { name: "GitHub", icon: <SiGithub size={28} /> }
  ];

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col justify-center items-center p-6 rounded-2xl bg-[#040406] border-#1c0333 relative min-h-[240px] overflow-hidden"
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
        <SectionHeader title="My Tool Kit" />
      </div>

      <div className="flex flex-col justify-center gap-8 flex-1 h-full w-full">
        {/* Text Marquee - Left to Right */}
        <InfiniteMarquee speed={25} direction="left">
          {toolNames.map((tool, i) => (
            <span key={i} className="flex items-center text-gray-300 text-sm md:text-base mx-4 hover:text-white transition-colors">
              {tool}
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-70 mx-3"></span>
            </span>
          ))}
        </InfiniteMarquee>
        
        {/* Icons Marquee - Right to Left */}
        <InfiniteMarquee speed={35} direction="right">
          {toolIcons.map((tool, i) => (
            <div key={i} className="group relative mx-6">
              <div className="w-12 h-12 rounded-full bg-[#1D1D1D]/70 backdrop-blur-sm flex items-center justify-center group-hover:ring-2 ring-[#A56CFF]/50 transition-all">
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{tool.icon}</span>
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </motion.div>
  );
}