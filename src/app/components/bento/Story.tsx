"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Story() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const experiences = [
    {
      title: "Department General Secretary",
      company: "Guru Nanak College",
      year: "2024–2025",
      description: [
        "Spearheaded academic and extracurricular coordination across the department.",
        "Represented student community in inter-department events and decision-making."
      ]
    },
    {
      title: "Event Head – Juno Fest",
      company: "Guru Nanak College",
      year: "2024",
      description: [
        "Led a 20+ member core team to organize and execute the college's flagship intercollegiate event.",
        "Oversaw logistics, scheduling, design, marketing, and event branding."
      ]
    },
    {
      title: "Web Development Intern",
      company: "SAIC",
      year: "May–June 2024",
      description: [
        "Built and maintained responsive websites using WordPress and modern no-code tools.",
        "Gained hands-on experience in real-world projects involving UI layout, plugin configuration, and content management."
      ]
    },
    {
      title: "Freelance & Upskilling",
      company: "Freelance",
      year: "NOW",
      description: [
        "Working as a freelancer for various clients, web services, while actively upskilling.",
        "Continuously expanding my tech stack and exploring new technologies."
      ]
    }
  ];
  
  return (
    <motion.div
      ref={containerRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg relative h-full overflow-hidden"
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
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          <span className="text-white">The Story So </span>
          <span className="text-purple-400">Far</span>
        </h3>
        
        {/* Timeline container */}
        <div ref={timelineRef} className="relative flex-1 max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-[20px] md:left-[10%] lg:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#aa42ff] via-[#7f40ff] to-transparent origin-top"
            style={{ scaleY }}
          />
          
          {/* Timeline entries */}
          <div className="relative z-10 space-y-5 md:space-y-6">
            {experiences.map((exp, index) => (
              <TimelineEntry
                key={index}
                {...exp}
                delay={index * 0.2}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineEntry({ title, company, year, description, delay, isLast }: {
  title: string;
  company: string;
  year: string;
  description: string[];
  delay: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      className="grid grid-cols-[auto,1fr] md:grid-cols-1 lg:grid-cols-[1fr,auto,1fr] items-start gap-2 md:gap-3 relative pl-10 md:pl-12 lg:pl-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Center column: Year with glowing dot - on mobile it's first */}
      <div className="flex flex-col items-center justify-center order-1 md:order-1 lg:order-2 absolute left-0 md:left-0 lg:relative lg:left-auto">
        {/* Glowing dot */}
        <div className="relative mb-1.5">
          <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_3px_rgba(170,66,255,0.4)] animate-pulse"></div>
        </div>
        
        {/* Year */}
        <div className="text-center">
          <span className="text-xs md:text-sm font-bold bg-gradient-to-b from-[#aa42ff] to-white bg-clip-text text-transparent">
            {year}
          </span>
        </div>
      </div>

      {/* Left column: Title and company - on mobile it's second */}
      <div className="md:hidden lg:block lg:text-right order-2 lg:order-1">
        <h4 className="text-sm md:text-base font-medium text-white mb-0.5">{title}</h4>
        <p className="text-purple-400 text-xs">{company}</p>
      </div>
      
      {/* Mobile combined title - only shows on medium screens */}
      <div className="hidden md:block lg:hidden order-2">
        <h4 className="text-base font-medium text-white mb-0.5">{title}</h4>
        <p className="text-purple-400 text-xs">{company}</p>
      </div>
      
      {/* Right column: Description - on mobile it appears after title */}
      <div className="col-span-2 md:col-span-1 lg:col-span-1 order-3 space-y-1 mt-1 md:mt-1.5 lg:mt-0">
        {description.map((item, i) => (
          <p key={i} className="text-gray-300 text-xs leading-relaxed">
            • {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
} 