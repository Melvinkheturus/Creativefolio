"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechItem {
  name: string;
  icon?: string; // Sanity returns icon as a URL string
}

interface Project {
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  role: string;
  projectType?: string; // Added from Sanity schema
  techStack?: TechItem[];
  heroImage?: string; // Sanity returns heroImage as a URL string
  thumbnail: string; // Sanity returns thumbnail as a URL string
}

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  // Get techStack safely with fallback to empty array
  const techStack = project.techStack || [];
  
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row relative z-10">
        <div className="md:w-1/2 flex flex-col justify-center mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full mr-2">{project.category || 'Project'}</span>
            {project.timeline && <span className="text-xs text-gray-400">{project.timeline}</span>}
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title || 'Untitled Project'}</h1>
          <p className="text-lg bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent mb-4">{project.subtitle || 'Project description'}</p>
          
          {project.role && (
            <div className="flex items-center space-x-4 mb-6">
              <div>
                <p className="text-xs text-gray-400 mb-1">Role</p>
                <p className="text-sm text-white font-medium">{project.role}</p>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech: TechItem, index: number) => (
              <span key={index} className="px-3 py-1 text-xs bg-[#1D1D1D] text-gray-300 rounded-full border border-[#333] hover:border-purple-500/50 transition-colors">
                {tech.name}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-3 py-1 text-xs bg-[#1D1D1D] text-gray-300 rounded-full border border-[#333]">+{techStack.length - 4} more</span>
            )}
          </div>
        </div>
        
        <div className="md:w-1/2 h-64 md:h-auto relative group overflow-hidden rounded-xl">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          
          <motion.div
            whileHover={{ scale: 1.05 }}
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
              className="px-3 py-1.5 text-xs bg-black/60 backdrop-blur-sm rounded-full text-white flex items-center"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
              Project Complete
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}