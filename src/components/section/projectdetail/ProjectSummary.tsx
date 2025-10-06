"use client";

import { motion } from "framer-motion";
import { PortableText } from '@portabletext/react';
import { AlignLeft } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { CasestudyType } from '@/types/project';
import { portableTextComponents } from '@/components/ui/PortableTextComponent';

type ProjectSummaryProps = {
  project: CasestudyType;
};

export default function ProjectSummary({ project }: ProjectSummaryProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="flex items-center mb-4">
        <AlignLeft size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Summary</h3>
      </div>
      <div className="text-gray-400 text-sm leading-relaxed">
        {project.summary && <PortableText value={project.summary} components={portableTextComponents} />}
      </div>
    </ProjectCard>
  );
}