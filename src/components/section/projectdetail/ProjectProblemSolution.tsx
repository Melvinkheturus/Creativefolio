"use client";

import { PortableText } from '@portabletext/react';
import { motion } from "framer-motion";
import { Lightbulb, Rocket } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { CasestudyType } from "@/types/project";
import { portableTextComponents } from '@/components/ui/PortableTextComponent';

type ProjectProblemSolutionProps = {
  project: CasestudyType;
};

export default function ProjectProblemSolution({ project }: ProjectProblemSolutionProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Problem Section */}
        <div>
          <div className="flex items-center mb-4">
            <Lightbulb size={18} className="gradient-text mr-2" />
            <h3 className="text-white font-medium">Problem</h3>
          </div>
          <PortableText value={project.problem} components={portableTextComponents} />
        </div>

        {/* Solution Section */}
        <div>
          <div className="flex items-center mb-4">
            <Rocket size={18} className="gradient-text mr-2" />
            <h3 className="text-white font-medium">Solution</h3>
          </div>
          <PortableText value={project.solution} components={portableTextComponents} />
        </div>
      </div>
    </ProjectCard>
  );
}