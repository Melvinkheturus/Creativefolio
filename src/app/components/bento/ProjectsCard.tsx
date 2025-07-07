"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import { GithubIcon, ExternalLinkIcon, FolderIcon, LucideIcon } from "lucide-react";
import DrawerPanel from "../DrawerPanel";
import { Lens } from "@/components/magicui/lens";

type Project = {
  id: string;
  title: string;
  description: string;
  tools: string[];
  highlight: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export default function ProjectsCard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: "examiner-pro",
      title: "ExaminerPro – COE Automation Tool",
      description: "Full-stack app built in 15 days with PDF export, archive filters, RLS security, and desktop version in 2 days.",
      tools: ["Flutter (AI)", "React (AI)", "Supabase", "SQLite"],
      highlight: "Built in just 15 days with comprehensive features",
      image: "/profile-pic.png" // Placeholder
    },
    {
      id: "event-management",
      title: "Event Management Website with CMS",
      description: "Built in 17 hours with real-time editing, event/media management, and fully responsive design.",
      tools: ["React", "Tailwind CSS", "Supabase"],
      highlight: "Completed in only 17 hours",
      image: "/profile-pic.png" // Placeholder
    },
    {
      id: "ui-ux-examiner",
      title: "UI/UX Design for ExaminerPro",
      description: "Complete UI/UX flow from research to prototype. Prioritized hierarchy, accessibility, and simplified UX.",
      tools: ["Figma", "Canva", "Galileo AI", "Uizard"],
      highlight: "User-centric design approach",
      image: "/profile-pic.png" // Placeholder
    }
  ];

  return (
    <>
      <motion.div
        className="col-span-2 md:col-span-6 bg-gradient-to-br from-[#1A1A1A] to-[#282828] p-6 rounded-[30px] shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SectionTitle 
          title="Featured Projects" 
          className="text-white"
          icon={<FolderIcon size={24} />} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#222222] rounded-2xl p-5 cursor-pointer hover:bg-[#2A2A2A] transition-all"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)"
              }}
            >
              {project.image && (
                <div className="h-40 rounded-xl overflow-hidden mb-4 relative z-0">
                  <Lens
                    zoomFactor={1.5}
                    lensSize={100}
                    isStatic={false}
                    ariaLabel="Zoom Image"
                    lensColor="#121212"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400} 
                      height={300}
                      className="w-full h-full object-cover"
                      priority 
                    />
                  </Lens>
                </div>
              )}
              
              <h3 className="text-lg font-medium text-white font-poppins">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span 
                    key={tool} 
                    className="text-xs px-2 py-0.5 bg-[#333333] text-gray-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-sm text-[#7F5AF0]">✨ {project.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Project Detail Drawer */}
      <DrawerPanel 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="space-y-6">
            {selectedProject.image && (
              <div className="rounded-xl overflow-hidden relative z-0">
                <Lens
                  zoomFactor={1.5}
                  lensSize={120}
                  isStatic={false}
                  ariaLabel="Zoom Image"
                  lensColor="#121212"
                >
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    width={600} 
                    height={400}
                    className="w-full h-64 object-cover"
                    priority
                  />
                </Lens>
              </div>
            )}
            
            <h2 className="text-2xl font-bold font-poppins">{selectedProject.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{selectedProject.description}</p>
            
            <div>
              <h3 className="font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map(tool => (
                  <span 
                    key={tool} 
                    className="bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
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
    </>
  );
} 