"use client";

import { motion } from "framer-motion";

type ProjectProblemSolutionProps = {
  title: string;
  content: string;
  color: string;
};

export default function ProjectProblemSolution({ 
  title, 
  content, 
  color 
}: ProjectProblemSolutionProps) {
  const isLeftSide = title === "Problem";
  
  return (
    <motion.div
      className="bento-card h-full p-6"
      initial={{ 
        opacity: 0, 
        x: isLeftSide ? -20 : 20 
      }}
      animate={{ 
        opacity: 1, 
        x: 0 
      }}
      transition={{ 
        duration: 0.6, 
        delay: isLeftSide ? 0.4 : 0.5 
      }}
    >
      <div className={`border-l-2 pl-4`} style={{ borderColor: color }}>
        <h3 className="card-title">
          <span className="text-white">{title.toUpperCase()}</span>
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );
} 