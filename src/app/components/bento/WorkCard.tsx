"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useState, useRef } from "react";
import { Lens } from "@/components/magicui/lens";

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
  isHovered: boolean;
}

export default function WorkCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "ExaminerPro – UI/UX Case Study",
      image: "/projects/thumbnail/examinerpro-cs.jpg",
      category: "UI/UX Case Study",
      slug: "examiner-pro"
    },
    {
      id: 2,
      title: "ExaminerPro – Full-Stack Web App",
      image: "/projects/thumbnail/examinerpro-dev.jpg",
      category: "Web App",
      slug: "event-website"
    },
    {
      id: 3,
      title: "PixelDraft Agency Website",
      image: "/projects/thumbnail/pixeldraft.jpg",
      category: "Web Design",
      slug: "pixeldraft"
    },
    {
      id: 4,
      title: "RR Miracle Events",
      image: "/projects/thumbnail/rr-miracle-events.jpg",
      category: "Event Website",
      slug: "rr-miracle-events"
    },
    {
      id: 5,
      title: "UniSync – UX Case Study",
      image: "/projects/thumbnail/Unisync thumbnail.mp4",
      category: "Mobile UX",
      slug: "unisync"
    }
  ];

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      scrollToCard(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < projects.length - 3) {
      setActiveIndex(activeIndex + 1);
      scrollToCard(activeIndex + 1);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / projects.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg overflow-hidden relative shimmer-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold">
            <span className="text-white">MY </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]">WORK</span>
          </h3>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <motion.button 
              onClick={scrollPrev}
              className={`p-1.5 rounded-full ${activeIndex > 0 ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 cursor-not-allowed'} transition text-white shimmer-wrapper`}
              whileHover={activeIndex > 0 ? { scale: 1.1 } : {}}
              whileTap={activeIndex > 0 ? { scale: 0.95 } : {}}
              disabled={activeIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </motion.button>
            <motion.button 
              onClick={scrollNext}
              className={`p-1.5 rounded-full ${activeIndex < projects.length - 3 ? 'bg-white/10 hover:bg-white/20' : 'bg-white/5 cursor-not-allowed'} transition text-white shimmer-wrapper`}
              whileHover={activeIndex < projects.length - 3 ? { scale: 1.1 } : {}}
              whileTap={activeIndex < projects.length - 3 ? { scale: 0.95 } : {}}
              disabled={activeIndex === projects.length - 3}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </motion.button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex-none w-[calc(33.333%-11px)] snap-center"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <ProjectCard 
                project={project} 
                delay={0.3 + (index * 0.1)}
                index={index}
                total={projects.length}
                isHovered={hoveredCardIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, delay = 0, index, total, isHovered }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div 
        className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/80 border border-white/5 group"
      >
        {/* Mouse position-based glow */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.15),_transparent_60%)] rounded-xl pointer-events-none opacity-0 transition-opacity duration-300 z-20"
          style={{ 
            opacity: mousePosition.x > 0 ? 1 : 0,
          }}
        />
        
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
            <Lens
              zoomFactor={1.5}
              lensSize={100}
              isStatic={false}
              ariaLabel="Zoom Image"
              lensColor="#121212"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={225}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                priority
              />
            </Lens>
          </div>
        )}

        {/* Gradient Fade (only behind text) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        
        <Link href={`/project/${project.slug}`}>
          <div className="absolute inset-0 z-20 p-3 flex flex-col justify-between">
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
              
              <motion.button 
                className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm shimmer-wrapper"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Eye size={14} className="text-white" />
              </motion.button>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
} 