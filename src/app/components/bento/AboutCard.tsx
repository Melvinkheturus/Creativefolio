"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

export default function AboutCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Words to highlight with gradient animation
  const highlightedWords = ["visual storytelling", "cutting-edge tech", "scalable", "elegant", "extraordinary"];
  
  const textContent = [
    "I'm Manikandan, a Creative Technologist and Designer who blends visual storytelling and cutting-edge tech.",
    "I create meaningful digital experiences by leveraging AI tools, no-code platforms, and modern design systems.",
    "With a blend of design vision and execution speed, I build scalable, elegant, and purposeful interfaces—rapidly.",
    "Whether it's a website, dashboard, or app—I turn your ideas into tangible digital experiences.",
    "Let's create something extraordinary."
  ];
  
  // Function to highlight specific words in text
  const highlightText = (text: string): (string | ReactNode)[] => {
    let result: (string | ReactNode)[] = [];
    let lastIndex = 0;
    
    highlightedWords.forEach((word) => {
      const index = text.toLowerCase().indexOf(word.toLowerCase());
      if (index !== -1) {
        result.push(text.substring(lastIndex, index));
        result.push(
          <span key={word} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-medium">
            {text.substring(index, index + word.length)}
          </span>
        );
        lastIndex = index + word.length;
      }
    });
    
    result.push(text.substring(lastIndex));
    return result;
  };

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
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg relative"
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
      
      <div className="flex flex-col h-full relative z-10">
        <h3 className="text-lg font-semibold mb-4">
          <span className="text-white">MEET THE </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]">CREATOR</span>
        </h3>
        
        <div className="mt-4 text-gray-300 text-sm space-y-3">
          {textContent.map((text, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
            >
              {highlightText(text)}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 