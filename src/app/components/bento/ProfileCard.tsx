"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export default function ProfileCard() {
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [scrambledName, setScrambledName] = useState("MANIKANDAN S");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const name = "MANIKANDAN S";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const quote = "Crafting clarity in a chaotic digital world.";
  
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
  
  // Typewriter effect with debounce to prevent flicker
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isQuoteHovered) {
      let i = 0;
      setDisplayedText("");
      
      const typeWriter = () => {
        if (i < quote.length) {
          setDisplayedText(quote.substring(0, i + 1));
          i++;
          timeoutId = setTimeout(typeWriter, 40);
        }
      };
      
      timeoutId = setTimeout(typeWriter, 200); // Small delay before starting
    } else {
      // When not hovered, just show the full quote
      timeoutId = setTimeout(() => {
        setDisplayedText(quote);
      }, 100);
    }
    
    return () => clearTimeout(timeoutId);
  }, [isQuoteHovered]);
  
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
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
      
      <div className="flex items-center relative z-10">
        {/* Profile Image with glow */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-blue-500/50 rounded-xl opacity-20 blur-md"></div>
          <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg relative">
            <Image 
              src="/profile-pic.png" 
              alt="Manikandan" 
              width={112}
              height={112}
              className="object-cover w-full h-full scale-110"
              priority
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center ml-5">
          <h2 
            className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff] tracking-wider cursor-pointer"
            onMouseEnter={() => handleNameHover(true)}
            onMouseLeave={() => handleNameHover(false)}
          >
            {scrambledName}
          </h2>
          
          <div className="mt-1">
            <p className="text-sm font-medium text-purple-300 tracking-wide">
              UI/UX DESIGNER &
            </p>
            <p className="font-allura text-base bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Creative Technologist
            </p>
          </div>
          
          <div
            className="mt-2 cursor-default"
            onMouseEnter={() => setIsQuoteHovered(true)}
            onMouseLeave={() => setIsQuoteHovered(false)}
          >
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "{displayedText}"
              {isQuoteHovered && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-0.5 h-3 ml-0.5 bg-purple-400"
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 