"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects as projectsData } from "@/data/projects";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
  index: number;
  total: number;
}

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Convert projectsData to the format needed for display, using useMemo to avoid recalculation
  const projects = useMemo(() => {
    return projectsData.map((project, index) => ({
      id: index + 1,
      title: project.title,
      image: project.thumbnail,
      category: project.category,
      slug: project.slug
    }));
  }, []);

  const scrollPrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      scrollToCard(activeIndex - 1);
    }
  }, [activeIndex]);

  const scrollNext = useCallback(() => {
    if (activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
      scrollToCard(activeIndex + 1);
    }
  }, [activeIndex, projects.length]);

  const scrollToCard = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / projects.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  }, [projects.length]);
  
  // Removed mouse movement handlers for glow effect

  // Auto-scrolling functionality
  useEffect(() => {
    if (autoScroll) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (activeIndex < projects.length - 1) {
          setActiveIndex(prev => prev + 1);
          scrollToCard(activeIndex + 1);
        } else {
          setActiveIndex(0);
          scrollToCard(0);
        }
      }, 3000); // Change slide every 3 seconds
    }
    
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [activeIndex, autoScroll, projects.length, scrollToCard]);

  // Pause auto-scrolling when user interacts with carousel
  const handleUserInteraction = useCallback(() => {
    setAutoScroll(false);
    
    // Resume auto-scrolling after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setAutoScroll(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="p-6 rounded-2xl bg-[#040406] border-#1c0333 relative min-h-[240px] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Static background elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-center mb-4 md:mb-5">
          <div className="flex items-center gap-2">
            <SectionHeader title="My Work" className="text-left mb-0" />
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <motion.button 
              onClick={() => {
                handleUserInteraction();
                scrollPrev();
              }}
              className={`p-1.5 rounded-full ${activeIndex > 0 ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 cursor-not-allowed'} transition text-white shimmer-wrapper`}
              whileHover={activeIndex > 0 ? { scale: 1.1 } : {}}
              whileTap={activeIndex > 0 ? { scale: 0.95 } : {}}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </motion.button>
            <motion.button 
              onClick={() => {
                handleUserInteraction();
                scrollNext();
              }}
              className={`p-1.5 rounded-full ${activeIndex < projects.length - 1 ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 cursor-not-allowed'} transition text-white shimmer-wrapper`}
              whileHover={activeIndex < projects.length - 1 ? { scale: 1.1 } : {}}
              whileTap={activeIndex < projects.length - 1 ? { scale: 0.95 } : {}}
              disabled={activeIndex >= projects.length - 1}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </motion.button>
          </div>
        </div>
        
        <motion.div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleUserInteraction}
          onTouchStart={handleUserInteraction}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex-none w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] snap-center"
            >
              <ProjectCard 
                project={project} 
                delay={0.3 + (index * 0.1)}
                index={index}
                total={projects.length}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Dotted indicator for auto-scroll */}
        <div className="flex justify-center mt-4 mb-2 gap-2">
          {projects.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-purple-500' : 'bg-gray-700'}`}
              animate={{
                scale: index === activeIndex ? [1, 1.2, 1] : 1,
                opacity: index === activeIndex ? 1 : 0.5
              }}
              transition={{
                duration: 1,
                repeat: index === activeIndex && autoScroll ? Infinity : 0,
                repeatType: 'loop'
              }}
            />
          ))}
        </div>
        
        {/* Removed duplicate mobile indicator dots as requested */}
      </div>
    </motion.div>
  );
}

const ProjectCard = React.memo(function ProjectCard({ project, delay = 0, index, total }: ProjectCardProps) {
  // Removed mouse position tracking for hover glow effect
  
  return (
      <div 
        className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/80 border border-white/5 group"
      >
        
        {/* Thumbnail Image or Video */}
        {project.image.endsWith('.mp4') ? (
          <video
            src={project.image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full relative z-0 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                quality={80}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                priority={index < 3} // Only prioritize the first 3 images
                loading={index < 3 ? "eager" : "lazy"}
              />
          </div>
        )}

        {/* Gradient Fade (only behind text) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        
        <Link href={`/project/${project.slug}`} className="absolute inset-0 z-20 p-3 flex flex-col justify-between">
          {/* Top row with Badge */}
          <div className="flex justify-between">
            <span className="px-2 py-0.5 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full text-white">
              {project.category}
            </span>
          </div>
          
          {/* Bottom row with Title and View Icon */}
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <h3 className="text-white text-sm font-medium">{project.title}</h3>
              <span className="text-[10px] text-white/70">{index + 1} / {total}</span>
            </div>
            
            <motion.div 
              className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm shimmer-wrapper"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Eye size={14} className="text-white" />
            </motion.div>
          </div>
        </Link>
      </div>
  );
});