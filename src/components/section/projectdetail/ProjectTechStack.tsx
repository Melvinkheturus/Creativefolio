"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface TechStack {
  name: string;
  icon?: string;
}

interface Project {
  techStack?: TechStack[] | string[];
  projectType?: string;
  timeline?: string;
  role?: string;
}

type ProjectTechStackProps = {
  project: Project;
};

// Safe function to handle tech stack rendering
const getTechName = (tech: TechStack | string | null): string => {
  if (!tech) return '';
  if (typeof tech === 'string') return tech;
  if (tech && typeof tech === 'object' && tech.name) return tech.name;
  return '';
};

// Tech Stack Card Component
function TechStackCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header Inside Card - Top Left */}
        <div className="mb-6">
          <SectionHeader title="Tech Stack" className="text-left" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {project.techStack && Array.isArray(project.techStack) && project.techStack
            .filter(tech => tech && getTechName(tech))
            .map((tech, index) => {
              const techName = getTechName(tech);
              const techIcon = typeof tech === 'object' && tech && tech.icon ? tech.icon : undefined;

              return (
                <motion.div
                  key={index}
                  className="group relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.05) }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-3 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                    {techIcon ? (
                      <img src={techIcon} alt={techName} className="w-8 h-8" />
                    ) : (
                      <div className="w-8 h-8 bg-purple-500/20 rounded-md flex items-center justify-center">
                        <Code size={16} className="text-purple-300" />
                      </div>
                    )}
                  </div>
                  
                  {/* Tech Name Outside Card */}
                  <p className="text-sm text-gray-300 font-medium text-center">{techName}</p>
                </motion.div>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
}

// Project Info Card Component (Structured Typography)
function ProjectInfoCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header Inside Card - Top Left */}
        <div className="mb-6">
          <SectionHeader title="Project Overview" className="text-left" />
        </div>
        
        <div className="space-y-6">
        {/* Project Type */}
        <div>
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Project Type</p>
          <p className="text-xl font-bold text-white">{project.projectType || "Project"}</p>
        </div>

        {/* Role */}
        {project.role && (
          <div>
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Role</p>
            <p className="text-lg text-white font-medium">{project.role}</p>
          </div>
        )}

        {/* Timeline */}
        {project.timeline && (
          <div>
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Duration</p>
            <p className="text-lg text-white font-medium">{project.timeline}</p>
          </div>
        )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TechStackCard project={project} />
      <ProjectInfoCard project={project} />
    </div>
  );
}