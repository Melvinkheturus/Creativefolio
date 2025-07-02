"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCard() {
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
  const highlightText = (text) => {
    let result = [];
    let lastIndex = 0;
    
    highlightedWords.forEach((word) => {
      const index = text.toLowerCase().indexOf(word.toLowerCase());
      if (index !== -1) {
        result.push(text.substring(lastIndex, index));
        result.push(
          <span key={word} className="gradient-text font-medium">
            {text.substring(index, index + word.length)}
          </span>
        );
        lastIndex = index + word.length;
      }
    });
    
    result.push(text.substring(lastIndex));
    return result;
  };

  return (
    <motion.div
      className="bento-card h-full p-6 flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="card-title">
          <span className="text-white">MEET THE </span>
          <span className="gradient-text">CREATOR</span>
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
        
        <div className="mt-auto pt-4 flex justify-between items-center">
          <p className="text-xs text-gray-500">smk.manikandan.dev@gmail.com</p>
          <motion.button 
            className="flex items-center space-x-1 text-xs text-[#A56CFF] hover:text-[#C278FF] transition-colors group"
            whileHover={{ x: 3 }}
          >
            <span>Full about</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 