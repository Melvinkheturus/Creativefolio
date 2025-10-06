"use client";

import { motion } from "framer-motion";
import { PieChart, TrendingUp, Award, Clock, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, ReactNode } from "react";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, ResultType, CasestudyType } from "@/types/project";


type ProjectResultsProps = {
  project: CasestudyType;
};

interface ResultCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function ResultCard({ title, description, icon, delay }: ResultCardProps) {
  const getIconComponent = (iconName: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "pie-chart": <PieChart size={24} />,
      "trending-up": <TrendingUp size={24} />,
      "award": <Award size={24} />,
      "clock": <Clock size={24} />,
      "trophy": <Trophy size={24} />,
    };
    return icons[iconName] || <Award size={24} />;
  };

  return (
    <motion.div
      className="flex flex-col p-4 bg-[#040406] rounded-lg border border-[#1c0333]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-2">
        <span className="gradient-text mr-2">
          {getIconComponent(icon)}
        </span>
        <h4 className="text-white font-medium text-base">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ProjectResults({ project }: ProjectResultsProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center mb-4">
        <Trophy size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Results</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.results && Array.isArray(project.results) && project.results.map((result, index) => (
          <ResultCard
            key={index}
            title={result.title}
            description={result.description}
            icon={result.icon}
            delay={0.9 + (index * 0.1)}
          />
        ))}
      </div>
    </ProjectCard>
  );
}