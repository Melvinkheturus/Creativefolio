"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function ToolkitCard() {
  const toolIcons = [
    { name: "Figma", icon: "figma.svg" },
    { name: "Framer", icon: "framer.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
  ];

  return (
    <motion.div
      className="bento-card h-full p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="card-title mb-1">
          <span className="text-white">MY </span>
          <span className="gradient-text">TOOL KIT</span>
        </h3>
        
        <div className="flex flex-col justify-center gap-3 mt-1">
          <Marquee 
            speed={30} 
            direction="left" 
            className="text-gray-300 text-xs" 
            gradient={true}
            gradientColor={[18, 18, 18]}
            gradientWidth={20}
          >
            <div className="flex items-center py-1">
              {["Figma", "Framer", "React", "Tailwind", "WordPress", "Cursor AI", "Supabase", "Notion", "GitHub"].map((tool, index) => (
                <span key={index} className="mx-4 hover:text-white transition-colors duration-300">{tool}</span>
              ))}
            </div>
          </Marquee>
          
          <Marquee 
            speed={25} 
            direction="right" 
            className="text-gray-300 text-xs"
            gradient={true}
            gradientColor={[18, 18, 18]}
            gradientWidth={20}
          >
            <div className="flex items-center py-1">
              {toolIcons.map((tool) => (
                <ToolIcon key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
}

function ToolIcon({ name, icon }) {
  return (
    <motion.div 
      className="group relative mx-4"
      whileHover={{ scale: 1.15 }}
    >
      <div className="w-8 h-8 rounded-full bg-[#1D1D1D] flex items-center justify-center group-hover:ring-2 ring-[#A56CFF]/50 transition-all duration-300">
        <img 
          src={`/icons/${icon}`} 
          alt={name} 
          className="w-5 h-5"
        />
      </div>
      <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{name}</span>
    </motion.div>
  );
} 