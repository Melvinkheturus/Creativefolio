"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, Download, Briefcase, Users } from "lucide-react";
import { ReactNode, useState, useRef } from "react";

export default function ResumeCard() {
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
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 h-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
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
        <motion.a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center space-x-3 mb-5 p-3 bg-[#1D1D2D]/70 backdrop-blur-sm rounded-xl hover:bg-[#252535]/80 transition-all duration-300 border border-white/5 shimmer-wrapper"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#252525]/80 group-hover:bg-[#2a2a2a]/80">
            <FileText className="text-[#A56CFF] group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-white text-sm font-medium">Download Resume</h4>
            <p className="text-gray-400 text-xs">Updated June 2024</p>
          </div>
          
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <Download size={18} className="text-[#A56CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.a>
        
        <h4 className="text-sm text-gray-300 mb-3 font-medium">Current status:</h4>
        
        <div className="space-y-3">
          <StatusBadge 
            text="Open to Freelance" 
            icon={<Briefcase size={14} />} 
          />
          <StatusBadge 
            text="Open for Collaborations" 
            icon={<Users size={14} />}
          />
          <StatusBadge 
            text="Actively Looking for Opportunities" 
            icon={<CheckCircle size={14} />}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface StatusBadgeProps {
  text: string;
  icon: ReactNode;
}

function StatusBadge({ text, icon }: StatusBadgeProps) {
  return (
    <motion.div 
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1D1D2D]/50 backdrop-blur-sm border border-white/5 text-sm text-gray-300 hover:bg-[#252535]/60 transition-colors duration-300"
      whileHover={{ x: 3, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
}