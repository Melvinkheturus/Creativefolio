"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numDuplicates, setNumDuplicates] = useState(3); // Start with 3 duplicates
  
  const content = "Manikandan ✦ Web Developer ✦ Designer ✦ Creator";
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Measure the container width
    const updateWidths = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      setContainerWidth(containerWidth);
      
      // Create a temporary element to measure content width
      const tempElement = document.createElement('div');
      tempElement.className = 'text-6xl font-bold whitespace-nowrap';
      tempElement.innerText = content;
      document.body.appendChild(tempElement);
      const contentWidth = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      setContentWidth(contentWidth);
      
      // Calculate how many duplicates we need to fill the screen at least twice
      // This ensures smooth looping
      const duplicatesNeeded = Math.max(3, Math.ceil((containerWidth * 2) / contentWidth));
      setNumDuplicates(duplicatesNeeded);
    };
    
    updateWidths();
    window.addEventListener('resize', updateWidths);
    
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, [content]);
  
  return (
    <div className="w-full overflow-hidden py-8 bg-black">
      <div 
        ref={containerRef}
        className="relative whitespace-nowrap"
      >
        <motion.div
          className="inline-block"
          animate={{
            x: [-contentWidth, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Adjust speed here
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: numDuplicates }).map((_, index) => (
            <span 
              key={index} 
              className="inline-block text-6xl font-bold px-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-500"
            >
              {content}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}