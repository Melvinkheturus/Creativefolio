"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { Project, projects } from "../data/projects";
import DrawerPanel from "./DrawerPanel";
import { GithubIcon, ExternalLinkIcon, FolderIcon } from "lucide-react";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FolderIcon className="text-[#7F5AF0]" size={24} />
          <h3 className="text-xl font-poppins font-semibold">Projects</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            {project.image && (
              <div className="h-40 rounded-xl overflow-hidden mb-3">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <h4 className="font-medium text-lg font-poppins">{project.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tech.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-zinc-700 rounded-full">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-zinc-700 rounded-full">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Project Detail Drawer */}
      <DrawerPanel isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-6">
            {selectedProject.image && (
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-56 object-cover rounded-xl"
              />
            )}
            <h2 className="text-2xl font-bold font-poppins">{selectedProject.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedProject.longDescription}
            </p>
            
            <div>
              <h3 className="font-medium mb-2 font-poppins">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              {selectedProject.demoUrl && (
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:opacity-90 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2"
                >
                  <ExternalLinkIcon size={16} />
                  Live Demo
                </a>
              )}
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 flex items-center gap-2"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </DrawerPanel>
    </BentoCard>
  );
} 