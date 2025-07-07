"use client";

import { motion } from "framer-motion";
import GlowShimmerCard from "@/components/GlowShimmerCard";
import { Lens } from "@/components/magicui/lens";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <GlowShimmerCard>
        {image && (
          <div className="rounded-xl mb-3 w-full h-48 overflow-hidden relative z-0">
            <Lens
              zoomFactor={1.5}
              lensSize={100}
              isStatic={false}
              ariaLabel="Zoom Image"
              lensColor="#121212"
            >
              <img 
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </Lens>
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {description}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {tech.map((item) => (
            <span 
              key={item}
              className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </GlowShimmerCard>
    </motion.div>
  );
} 