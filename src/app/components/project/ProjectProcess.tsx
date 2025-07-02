"use client";

import { motion } from "framer-motion";
import { Workflow, FileText, Ruler, Code, TestTube } from "lucide-react";
import { useState, ReactNode } from "react";

type ArtifactType = {
  type: string;
  url: string;
};

type ProcessPhaseType = {
  phase: string;
  description: string;
  artifacts?: ArtifactType[];
};

type ProjectProcessProps = {
  process: ProcessPhaseType[];
  type: string;
};

export default function ProjectProcess({ process, type }: ProjectProcessProps) {
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
    switch (type) {
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
      className="bento-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center mb-6">
        <Workflow size={20} className="gradient-text mr-2" />
        <h3 className="card-title m-0">
          <span className="text-white">
            {getProcessTitle()}
          </span>
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Phase tabs */}
        <div className="md:w-1/4">
          <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {process?.map((phase, index) => (
              <motion.button
                key={index}
                className={`flex items-center p-3 rounded-lg text-left w-full ${
                  activePhase === index 
                    ? 'bg-[#252525] border border-[#A56CFF]/30' 
                    : 'bg-[#1D1D1D] hover:bg-[#252525] border border-transparent'
                }`}
                onClick={() => setActivePhase(index)}
                whileHover={{ x: activePhase === index ? 0 : 3 }}
              >
                <span className="gradient-text mr-2">
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
                
                <p className="text-gray-300 text-sm mb-4">
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
                          className="badge hover:bg-[#252525]"
                          whileHover={{ scale: 1.05 }}
                        >
                          {artifact.type}
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