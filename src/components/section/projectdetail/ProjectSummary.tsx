"use client";

import { motion } from "framer-motion";

type ProjectSummaryProps = {
  project: Project;
};

interface Project {
  summary?: string;
  contribution?: string;
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <motion.div
      className="bento-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h3 className="card-title">
            <span className="text-white">PROJECT </span>
            <span className="gradient-text">OVERVIEW</span>
          </h3>
          
          <motion.p 
            className="text-gray-300 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.summary}
          </motion.p>
        </div>
        
        <div className="md:w-1/2 md:border-l md:border-[#333] md:pl-8">
          <h3 className="card-title">
            <span className="text-white">MY </span>
            <span className="gradient-text">CONTRIBUTION</span>
          </h3>
          
          <motion.p 
            className="text-gray-300 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {project.contribution}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}