"use client";

import { motion } from "framer-motion";
import { Workflow, FileText, Ruler, Code, TestTube } from "lucide-react";
import { useState, ReactNode } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, ArtifactType, ProcessPhaseType, CasestudyType } from "@/types/project";

interface ProcessPhaseCardProps {
  title: string;
  description: string;
  artifacts?: ArtifactType[];
  delay: number;
}

function ProcessPhaseCard({ title, description, artifacts, delay }: ProcessPhaseCardProps) {
  const [activeArtifact, setActiveArtifact] = useState<number | null>(null);

  const getIconForArtifact = (artifactType: string): ReactNode => {
    switch (artifactType.toLowerCase()) {
      case "documentation":
        return <FileText size={16} />;
      case "wireframes":
        return <Ruler size={16} />;
      case "code":
        return <Code size={16} />;
      case "tests":
        return <TestTube size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <motion.div
      className="flex flex-col p-4 bg-[#040406] rounded-lg border border-[#1c0333]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="text-white font-medium text-base mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      {artifacts && artifacts.length > 0 && (
        <div>
          <h5 className="text-white text-sm font-medium mb-2">Artifacts</h5>
          <div className="flex flex-wrap gap-2">
            {artifacts.map((artifact, index) => (
              <motion.a
                key={index}
                href={artifact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="badge hover:bg-[#252525]"
                whileHover={{ scale: 1.05 }}
              >
                {getIconForArtifact(artifact.type)}
                <span className="ml-1">{artifact.type}</span>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

type ProjectProcessProps = {
  project: CasestudyType;
};

export default function ProjectProcess({ project }: ProjectProcessProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="flex items-center mb-4">
        <Workflow size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Process</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.processPhases && Array.isArray(project.processPhases) && project.processPhases.map((phase: ProcessPhaseType, index: number) => (
          <ProcessPhaseCard
            key={index}
            title={phase.title}
            description={phase.description}
            artifacts={phase.artifacts}
            delay={0.8 + (index * 0.1)}
          />
        ))}
      </div>
    </ProjectCard>
  );
}