"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, CasestudyType } from '@/types/project';
import { urlFor } from '@/sanity/lib/image';

type ProjectHeroProps = {
  project: CasestudyType;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  if (!project) return null;

  // Check if thumbnail has a valid asset reference
  const hasValidThumbnail = 
    project.thumbnail?.asset?._ref && 
    project.thumbnail.asset._ref.trim() !== '';

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="p-0 overflow-hidden"
    >
      <div className="relative w-full h-64 md:h-96">
        {hasValidThumbnail ? (
          <>
            <Image
              src={urlFor(project.thumbnail).url()}
              alt={project.title || "Project Thumbnail"}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </>
        ) : (
          // Fallback for missing thumbnail
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <p className="text-gray-400">No thumbnail available</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>
    </ProjectCard>
  );
}