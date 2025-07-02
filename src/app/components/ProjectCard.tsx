"use client";

import { motion } from "framer-motion";

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
      className="group bg-white dark:bg-zinc-900 rounded-card p-4 shadow-md transition-all hover:shadow-xl cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <img 
          src={image}
          alt={title}
          className="rounded-xl mb-3 w-full h-48 object-cover"
        />
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
    </motion.div>
  );
} 