"use client";
import { useState, useEffect, useRef } from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { motion } from "framer-motion";

const DEFAULT_MARQUEE = {
  _id: 'marquee-section',
  _type: 'marquee',
  content: "Manikandan ✦ Web Developer ✦ Designer ✦ Creator"
};

type MarqueeData = typeof DEFAULT_MARQUEE;

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numDuplicates, setNumDuplicates] = useState(3); // Start with 3 duplicates
  const [marqueeData, setMarqueeData] = useState<MarqueeData>(DEFAULT_MARQUEE);
  
  useEffect(() => {
    async function fetchMarqueeData() {
      const query = `*[_type == "marquee"][0]{
        _id,
        _type,
        content
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
      tempElement.className = 'text-6xl font-bold whitespace-nowrap';
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
  }, [marqueeData.content]);
  
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
              {marqueeData.content}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}