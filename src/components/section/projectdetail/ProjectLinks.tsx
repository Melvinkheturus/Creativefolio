"use client";

import { motion } from "framer-motion";
import { Github, Figma, ExternalLink, FileText, Link } from "lucide-react";
import { ReactNode } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, LinkType, CasestudyType } from "@/types/project";

type ProjectLinksProps = {
  project: CasestudyType;
};

interface LinkButtonProps {
  href: string;
  label: string;
  icon: string;
  delay: number;
}

function LinkButton({ href, label, icon, delay }: LinkButtonProps) {
  const getIconComponent = (iconName: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "github": <Github size={20} />,
      "figma": <Figma size={20} />,
      "external-link": <ExternalLink size={20} />,
      "file-text": <FileText size={20} />,
      "link": <Link size={20} />,
    };
    return icons[iconName] || <ExternalLink size={20} />;
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {getIconComponent(icon)}
      <span className="ml-2">{label}</span>
    </motion.a>
  );
}

export default function ProjectLinks({ project }: ProjectLinksProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center mb-4">
        <Link size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Links</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {project.links && Array.isArray(project.links) && project.links.map((link, index) => (
          <LinkButton
            key={index}
            href={link.url}
            label={link.label}
            icon={link.icon}
            delay={0.5 + (index * 0.1)}
          />
        ))}
      </div>
    </ProjectCard>
  );
}