"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import BentoCard from "../BentoCard";

export default function Quote() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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
    <BentoCard
      className="col-span-1 h-full"
      glow="fuchsia"
      spotlightEnabled={true}
      glassy={false}
    >
      <div
        ref={cardRef}
        className="relative z-10 flex items-center justify-center h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          className="relative w-40 h-40 md:w-48 md:h-48"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Image
            src="/mklogo.png"
            alt="MK Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </BentoCard>
  );
} 