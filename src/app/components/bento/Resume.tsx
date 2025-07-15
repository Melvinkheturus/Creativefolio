"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

export default function Resume() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
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
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-lg relative min-h-[240px]"
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
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Current Status Section */}
        <div>
          <p className="text-lg font-semibold text-white">I'm currently:</p>
          <ul className="mt-2 space-y-1.5 pl-5 list-disc text-gray-300 text-sm">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Available for freelance work
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Open to creative collaborations
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Actively exploring new opportunities
            </motion.li>
          </ul>
        </div>
        
        {/* Resume Download Section */}
        <motion.a
          href="/resume.pdf"
          download="Manikandan_Resume.pdf"
          className="mt-4 text-sm text-violet-300 inline-flex items-center gap-2 transition-colors hover:text-violet-200 cursor-pointer"
          onMouseEnter={() => setIsDownloadHovered(true)}
          onMouseLeave={() => setIsDownloadHovered(false)}
          whileHover={{ x: 2 }}
        >
          <FaFileAlt className={`${isDownloadHovered ? 'animate-pulse' : ''}`} />
          <span>Grab my resume <span className="text-gray-400 italic">(Updated June 2025)</span></span>
        </motion.a>
        
        {/* Signature */}
        <motion.div 
          className="mt-2 text-right font-allura text-xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ~ manikandan
        </motion.div>
      </div>
    </motion.div>
  );
} 