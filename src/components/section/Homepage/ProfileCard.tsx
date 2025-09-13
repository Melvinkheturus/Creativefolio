"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { WordRotate } from "@/components/ui/word-rotate";
import Image from "next/image";

export default function Profile() {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [scrambledName, setScrambledName] = useState("MANIKANDAN S");
  const cardRef = useRef<HTMLDivElement>(null);
  
  const name = "MANIKANDAN S";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const designationWords = ["UI/UX Designer", "Developer", "Creative Technologist"];
  const quote = "Crafting clarity in a chaotic digital world.";
  
  // Memoized scramble text animation to prevent unnecessary re-renders
  const handleNameHover = useCallback((isHovered: boolean) => {
    setIsNameHovered(isHovered);
    
    // If not hovering, just set the name immediately
    if (!isHovered) {
      setScrambledName(name);
      return;
    }
  }, []);
  
  // Scramble text animation
  useEffect(() => {
    if (!isNameHovered) {
      return;
    }
    
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setScrambledName(prev => 
        prev.split('').map((char, idx) => {
          if (char === ' ') return ' ';
          // If we've hit our max iterations for this character, return the original
          if (iterations > idx) return name[idx];
          // Otherwise return a random character
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );
      
      iterations += 1/2;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledName(name);
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, [isNameHovered]);
  
  return (
    <motion.div
      ref={cardRef}
      className="relative h-full w-full p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden min-h-[450px] md:min-h-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="region"
      aria-label="Profile Information"
    >
      {/* Purple gradient corners */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none z-10" />
      {/* Full card image */}
      <div className="absolute inset-0 w-full h-full">
          <Image
          src="/profile.png"
          alt="Manikandan S - Web Developer, UI/UX Designer & Creative Technologist"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          />
      </div>
      
     {/* Gradient blur overlay */}
<div className="absolute inset-0 z-10 pointer-events-none">
  {/* Gradient background only in the bottom portion, keeping face area clear */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
  <div className="absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-xl opacity-[0.85] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.7)_20%,black_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%]" />

  {/* Content container at bottom, positioned below facial area */}
  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
    <div className="flex flex-col">
      <h1
        className="text-2xl font-bold tracking-wider cursor-pointer bg-gradient-to-b from-white to-purple-500 bg-clip-text text-transparent"
        onMouseEnter={() => handleNameHover(true)}
        onMouseLeave={() => handleNameHover(false)}
      >
        {scrambledName}
      </h1>

      <div className="mt-0.5">
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm font-medium text-white tracking-wide">I'm a</span>
          <WordRotate 
            words={designationWords}
            className="text-sm font-medium bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent tracking-wide"
            duration={2000}
            motionProps={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          />
        </div>
      </div>

      <div className="mt-1 cursor-default">
        <p className="text-gray-300 text-xs italic leading-relaxed">
          "{quote}"
        </p>
      </div>
    </div>
  </div>
</div>

    </motion.div>
  );
}