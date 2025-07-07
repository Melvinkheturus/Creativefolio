"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { SiReact, SiFigma, SiFramer, SiTailwindcss, SiWordpress, SiNotion, SiGithub, SiSupabase } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

export default function ToolkitCard() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tool names for text marquee
  const toolNames = ["Figma", "Framer", "React", "Tailwind", "WordPress", "Cursor AI", "Supabase", "Notion", "GitHub"];
  
  // Tools with icons for icon marquee
  const toolIcons = [
    { name: "Figma", icon: <SiFigma size={20} /> },
    { name: "Framer", icon: <SiFramer size={20} /> },
    { name: "React", icon: <SiReact size={20} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
    { name: "WordPress", icon: <SiWordpress size={20} /> },
    { name: "Cursor AI", icon: <FaCode size={20} /> },
    { name: "Supabase", icon: <SiSupabase size={20} /> },
    { name: "Notion", icon: <SiNotion size={20} /> },
    { name: "GitHub", icon: <SiGithub size={20} /> }
  ];
  
  // Convert RGB array to string for Marquee component
  const gradientColorString = "#0a0912";
  
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

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ 
        height: "150px",
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.01 }}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <h3 className="text-lg font-semibold mb-4 relative z-10">
        <span className="text-white">MY </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]">TOOL KIT</span>
      </h3>

      {mounted && (
        <div className="flex flex-col justify-center gap-3 overflow-hidden relative z-10">
          {/* Text Marquee - Left to Right */}
          <div className="overflow-hidden w-full">
            <Marquee 
              speed={30} 
              direction="left" 
              className="text-gray-300 text-xs"
              gradient={true}
              gradientColor={gradientColorString}
              gradientWidth={20}
            >
              <div className="flex items-center py-1">
                {toolNames.map((tool, index) => (
                  <span key={index} className="flex items-center hover:text-white transition-colors duration-300">
                    <span className="mx-2">{tool}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 opacity-70 mx-2"></span>
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
          
          {/* Icons Marquee - Right to Left */}
          <div className="overflow-hidden w-full scrollbar-hide">
            <Marquee 
              speed={25} 
              direction="right" 
              className="text-gray-300 text-xs scrollbar-hide"
              gradient={true}
              gradientColor={gradientColorString}
              gradientWidth={20}
            >
              <div className="flex items-center py-1">
                {toolIcons.map((tool, index) => (
                  <div 
                    key={index} 
                    className="group relative mx-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1D1D1D]/70 backdrop-blur-sm flex items-center justify-center group-hover:ring-2 ring-[#A56CFF]/50 transition-all duration-300">
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{tool.icon}</span>
                    </div>
                    <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      )}
    </motion.div>
  );
} 