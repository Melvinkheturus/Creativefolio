"use client";

import { motion } from "framer-motion";

export default function AboutCard() {
  const highlightText = (text: string): JSX.Element[] => {
    const result: JSX.Element[] = [];
    let lastIndex = 0;
    
    // Match text between ** **
    const pattern = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
      // Add non-highlighted text before match
      if (match.index > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}`}>
            {text.slice(lastIndex, match.index)}
          </span>
        );
      }

      // Add highlighted text
      result.push(
        <span
          key={`highlight-${match.index}`}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]"
        >
          {match[1]}
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(
        <span key={`text-${lastIndex}`}>
          {text.slice(lastIndex)}
        </span>
      );
    }

    return result;
  };

  const aboutText = "Hi! I'm a **creative developer** who loves building **beautiful digital experiences**. With a passion for both **design and code**, I create websites that don't just work well—they look amazing too!";

  return (
    <motion.div
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold mb-4">
          <span className="text-white">About </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]">
            Me
          </span>
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {highlightText(aboutText)}
        </p>
      </div>
    </motion.div>
  );
} 