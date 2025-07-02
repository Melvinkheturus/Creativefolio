"use client";

import { motion } from "framer-motion";
import { Code, Wrench, Layers } from "lucide-react";
import Image from "next/image";

interface TechStack {
  name: string;
  icon?: string;
}

interface Project {
  techStack?: TechStack[];
  tools?: string[];
  projectType: string;
}

type ProjectTechStackProps = {
  project: Project;
};

type TechBadgeProps = {
  name: string;
  icon?: string;
  delay: number;
};

function TechBadge({ name, icon, delay }: TechBadgeProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="badge flex items-center gap-2">
        {name}
      </div>
      
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <span className="text-xs text-gray-400 whitespace-nowrap">{name}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <motion.div
      className="bento-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tech Stack Section */}
        <div>
          <div className="flex items-center mb-4">
            <Code size={18} className="gradient-text mr-2" />
            <h3 className="text-white font-medium">Tech Stack</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack?.map((tech, index) => (
              <TechBadge 
                key={index} 
                name={tech.name} 
                icon={tech.icon} 
                delay={0.4 + (index * 0.05)}
              />
            ))}
          </div>
        </div>
        
        {/* Tools Section */}
        <div>
          <div className="flex items-center mb-4">
            <Wrench size={18} className="gradient-text mr-2" />
            <h3 className="text-white font-medium">Tools Used</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tools?.map((tool, index) => (
              <motion.span
                key={index}
                className="badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.05) }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Project Type Section */}
        <div>
          <div className="flex items-center mb-4">
            <Layers size={18} className="gradient-text mr-2" />
            <h3 className="text-white font-medium">Project Type</h3>
          </div>
          
          <motion.div
            className="bg-[#1D1D1D] rounded-lg p-3 border border-[#333] inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-300 text-sm">{project.projectType}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 