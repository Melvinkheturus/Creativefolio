'use client';

import { motion } from 'framer-motion';

interface SkeletonCardProps {
  height?: string;
}

export default function SkeletonCard({ height = 'h-full' }: SkeletonCardProps) {
  return (
    <motion.div 
      className={`bento-card ${height} w-full flex flex-col gap-4 animate-pulse-slow`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Skeleton header */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-1/3 bg-gray-800 rounded-md"></div>
        <div className="h-6 w-10 bg-gray-800 rounded-md"></div>
      </div>
      
      {/* Skeleton content */}
      <div className="flex-grow flex flex-col gap-3">
        <div className="h-4 w-full bg-gray-800 rounded-md"></div>
        <div className="h-4 w-5/6 bg-gray-800 rounded-md"></div>
        <div className="h-4 w-4/6 bg-gray-800 rounded-md"></div>
      </div>
      
      {/* Skeleton footer */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-800 rounded-full"></div>
        <div className="h-4 w-1/4 bg-gray-800 rounded-md"></div>
      </div>
    </motion.div>
  );
}