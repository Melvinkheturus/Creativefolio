"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ProjectCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export default function ProjectCard({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  whileHover = { scale: 1.02 },
  whileTap = { scale: 0.98 },
  ...rest
}: ProjectCardProps) {
  return (
    <motion.div
      className={`relative w-full p-6 rounded-2xl bg-[#040406] border border-[#1c0333] overflow-hidden ${className || ""}`}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}
    >
      {children}
    </motion.div>
  );
}