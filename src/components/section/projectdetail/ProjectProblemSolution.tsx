"use client";

import { motion } from "framer-motion";
import PortableTextComponent from "@/components/ui/PortableTextComponent";

type ProjectProblemSolutionProps = {
  title: string;
  content: any;
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
      className="relative h-full p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
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
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className={`border-l-2 pl-4 relative z-10`} style={{ borderColor: color }}>
        <h3 className="text-lg font-bold mb-4">
          <span className="text-white">{title.toUpperCase()}</span>
        </h3>

        <div className="text-gray-300 text-sm leading-relaxed">
          {content ? (
            <PortableTextComponent blocks={content} />
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
} 