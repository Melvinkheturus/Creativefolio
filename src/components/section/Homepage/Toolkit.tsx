"use client";

import { motion } from "framer-motion";
import React from 'react';
import { SiReact, SiFigma, SiFramer, SiTailwindcss, SiWordpress, SiNotion, SiGithub, SiSupabase, SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

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

// Default fallback data
const DEFAULT_TOOLKIT = {
  title: 'My Tool Kit',
  tools: [
    { name: "Figma", icon: "SiFigma", order: 1 },
    { name: "Framer", icon: "SiFramer", order: 2 },
    { name: "React", icon: "SiReact", order: 3 },
    { name: "Tailwind", icon: "SiTailwindcss", order: 4 },
    { name: "WordPress", icon: "SiWordpress", order: 5 },
    { name: "Cursor AI", icon: "FaCode", order: 6 },
    { name: "Supabase", icon: "SiSupabase", order: 7 },
    { name: "Notion", icon: "SiNotion", order: 8 },
    { name: "GitHub", icon: "SiGithub", order: 9 }
  ]
};

interface ToolkitData {
  title: string;
  tools: Array<{
    name: string;
    icon: string;
    order: number;
  }>;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  SiFigma: <SiFigma size={28} />,
  SiFramer: <SiFramer size={28} />,
  SiReact: <SiReact size={28} />,
  SiTailwindcss: <SiTailwindcss size={28} />,
  SiWordpress: <SiWordpress size={28} />,
  FaCode: <FaCode size={28} />,
  SiSupabase: <SiSupabase size={28} />,
  SiNotion: <SiNotion size={28} />,
  SiGithub: <SiGithub size={28} />,
  SiNextdotjs: <SiNextdotjs size={28} />,
  SiTypescript: <SiTypescript size={28} />,
  SiJavascript: <SiJavascript size={28} />,
};

export default function Toolkit() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [toolkitData, setToolkitData] = useState<ToolkitData>(DEFAULT_TOOLKIT);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchToolkitData() {
      const query = `*[_type == "tool"] | order(order asc){
        _id,
        name,
        reactIcon,
        order
      }`;
      const result = await sanityFetch<Array<any>>(query, DEFAULT_TOOLKIT.tools);
      
      if (result.data && result.data.length > 0) {
        const tools = result.data.map(tool => ({
          name: tool.name,
          icon: tool.reactIcon || 'FaCode',
          order: tool.order
        }));
        setToolkitData({ title: 'My Tool Kit', tools });
      }
    }
    fetchToolkitData();
  }, []);

  // Tool names for text marquee
  const toolNames = (toolkitData.tools || DEFAULT_TOOLKIT.tools).map(t => t.name);
  
  // Tools with icons for icon marquee
  const toolIcons = (toolkitData.tools || DEFAULT_TOOLKIT.tools).map(tool => ({
    name: tool.name,
    icon: iconMap[tool.icon] || <FaCode size={28} />
  }));

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
        <SectionHeader title={toolkitData.title} />
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