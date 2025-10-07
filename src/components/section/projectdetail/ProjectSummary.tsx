"use client";

import { motion } from "framer-motion";
import PortableTextComponent from "@/components/ui/PortableTextComponent";

type ProjectSummaryProps = {
  project: Project;
};

interface Project {
  summary?: any;
  contribution?: string;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row relative z-10">
        <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-4">
            <span className="text-white">PROJECT </span>
            <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">OVERVIEW</span>
          </h3>
          
          <motion.div 
            className="text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.summary ? (
              <PortableTextComponent blocks={project.summary} />
            ) : (
              <p>No summary available</p>
            )}
          </motion.div>
        </div>
        
        <div className="md:w-1/2 md:border-l md:border-[#333] md:pl-8">
          <h3 className="text-lg font-bold mb-4">
            <span className="text-white">MY </span>
            <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">CONTRIBUTION</span>
          </h3>
          
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {project.contribution || "No contribution details available"}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}