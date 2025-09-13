"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Removed Lens import

interface TechItem {
  name: string;
  icon?: string;
}

interface Project {
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  role: string;
  techStack?: TechItem[];
  heroImage?: string;
  thumbnail: string;
}

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  // Get techStack safely with fallback to empty array
  const techStack = project.techStack || [];
  
  return (
    <motion.div
      className="bento-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <span className="tag mr-2">{project.category}</span>
            <span className="text-xs text-gray-400">{project.timeline}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h1>
          <p className="text-lg gradient-text mb-4">{project.subtitle}</p>
          
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Role</p>
              <p className="text-sm text-white font-medium">{project.role}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex flex-wrap">
              {techStack.slice(0, 4).map((tech: TechItem, index: number) => (
                <span key={index} className="skill-tag">
                  {tech.name}
                </span>
              ))}
              {techStack.length > 4 && (
                <span className="skill-tag">+{techStack.length - 4} more</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 h-64 md:h-auto relative group overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative z-0 overflow-hidden"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
          
          <div className="absolute bottom-4 right-4 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="badge bg-black/60 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse-slow"></span>
              Project Complete
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}