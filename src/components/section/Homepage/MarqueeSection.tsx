"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

// Default fallback data
const DEFAULT_MARQUEE = {
  content: 'Manikandan ✦ Web Developer ✦ Designer ✦ Creator',
  animationDuration: 20,
  fontSize: 'text-6xl',
  padding: 'py-8'
};

interface MarqueeData {
  content: string;
  animationDuration: number;
  fontSize: string;
  padding: string;
}

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numDuplicates, setNumDuplicates] = useState(3);
  const [marqueeData, setMarqueeData] = useState<MarqueeData>(DEFAULT_MARQUEE);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchMarqueeData() {
      const query = `*[_type == "marquee"][0]{
        _id,
        _type,
        content,
        animationDuration,
        fontSize,
        padding
      }`;
      const result = await sanityFetch<MarqueeData>(query, DEFAULT_MARQUEE);
      setMarqueeData(result.data);
    }
    fetchMarqueeData();
  }, []);
  
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
      tempElement.className = `${marqueeData.fontSize} font-bold whitespace-nowrap`;
      tempElement.innerText = marqueeData.content;
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
  }, [marqueeData.content, marqueeData.fontSize]);
  
  return (
    <div className={`w-full overflow-hidden ${marqueeData.padding} bg-black`}>
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
              duration: marqueeData.animationDuration,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: numDuplicates }).map((_, index) => (
            <span 
              key={index} 
              className={`inline-block ${marqueeData.fontSize} font-bold px-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-purple-500`}
            >
              {marqueeData.content}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}