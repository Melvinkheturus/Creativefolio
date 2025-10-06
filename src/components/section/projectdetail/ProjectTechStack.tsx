"use client";

import { motion } from "framer-motion";
import { Code, Wrench, Layers } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, TechItemType, CasestudyType } from "@/types/project";

interface TechBadgeProps {
  name: string;
  delay: number;
}

function TechBadge({ name, delay }: TechBadgeProps) {
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

type ProjectTechStackProps = {
  project: CasestudyType;
};

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project) return null;
  
  return (
    <ProjectCard
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
            {project.techStack && Array.isArray(project.techStack) && project.techStack.map((tech: TechItemType, index: number) => {
              return (
                <TechBadge 
                  key={index} 
                  name={tech.name} 
                  delay={0.4 + (index * 0.05)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ProjectCard>
  );
}