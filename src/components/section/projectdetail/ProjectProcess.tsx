"use client";

import { motion } from "framer-motion";
import { Workflow, FileText, Ruler, Code, TestTube } from "lucide-react";
import { useState, ReactNode } from "react";

type ArtifactType = {
  label: string;
  url: string;
};

type ProcessPhaseType = {
  phase: string;
  description: string;
  artifacts?: ArtifactType[];
};

type ProjectProcessProps = {
  process: ProcessPhaseType[];
  projectType: string;
};

export default function ProjectProcess({ process, projectType }: ProjectProcessProps) {
  const [activePhase, setActivePhase] = useState(0);
  
  // Icons for different phases
  const phaseIcons: Record<string, ReactNode> = {
    'Research': <FileText size={18} />,
    'Design': <Ruler size={18} />,
    'Development': <Code size={18} />,
    'Testing': <TestTube size={18} />
  };
  
  // Custom titles based on project type
  const getProcessTitle = () => {
    switch (projectType) {
      case 'UI/UX':
        return 'DESIGN PROCESS';
      case 'Web Development':
        return 'DEVELOPMENT PROCESS';
      case 'Creative':
        return 'CREATIVE PROCESS';
      default:
        return 'PROJECT PROCESS';
    }
  };
  
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex items-center mb-6 relative z-10">
        <Workflow size={20} className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent mr-2" />
        <h3 className="text-lg font-bold m-0">
          <span className="text-white">
            {getProcessTitle()}
          </span>
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        {/* Phase tabs */}
        <div className="md:w-1/4">
          <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {process?.map((phase, index) => (
              <motion.button
                key={index}
                className={`flex items-center p-3 rounded-lg text-left w-full transition-all duration-300 ${
                  activePhase === index 
                    ? 'bg-[#252525] border border-purple-500/50' 
                    : 'bg-[#1D1D1D] hover:bg-[#252525] border border-[#333]'
                }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ x: activePhase === index ? 0 : 3 }}
              >
                <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent mr-2">
                  {phaseIcons[phase.phase] || <FileText size={18} />}
                </span>
                <span className={`${activePhase === index ? 'text-white' : 'text-gray-400'}`}>
                  {phase.phase}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Phase content */}
        <div className="md:w-3/4">
          {process && process[activePhase] && (
            <div>
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1D1D1D] rounded-lg p-5 border border-[#333]"
              >
                <h4 className="text-white text-base font-medium mb-3">
                  {process[activePhase].phase}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {process[activePhase].description}
                </p>
                
                {process[activePhase].artifacts && (
                  <div>
                    <h5 className="text-white text-sm font-medium mb-2">Artifacts</h5>
                    <div className="flex flex-wrap gap-2">
                      {process[activePhase].artifacts.map((artifact, i) => (
                        <motion.a
                          key={i}
                          href={artifact.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs bg-[#252525] text-gray-300 rounded-full border border-[#333] hover:border-purple-500/50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {artifact.label}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}