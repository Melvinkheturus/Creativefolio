"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StoryCard() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-lg relative h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ boxShadow: "0 0 30px rgba(147,51,234,0.15)" }}
    >
      {/* Inner gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.05),_transparent_70%)] rounded-2xl pointer-events-none"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-white font-geist font-light">The Story </span>
          <span className="bg-gradient-to-b from-[#7f40ff] to-white bg-clip-text text-transparent">So Far</span>
        </motion.h2>
        
        {/* Timeline container */}
        <div ref={timelineRef} className="relative flex-1 max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-[10%] sm:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#aa42ff] via-[#7f40ff] to-transparent origin-top"
            style={{ scaleY }}
          />
          
          {/* Timeline entries */}
          <div className="relative z-10 space-y-12">
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
      className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] items-start gap-4 sm:gap-6 relative pl-12 sm:pl-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Left column: Title and company */}
      <div className="sm:text-right order-2 sm:order-1">
        <h4 className="text-lg sm:text-xl font-medium text-white mb-1">{title}</h4>
        <p className="text-purple-400 text-sm sm:text-base">{company}</p>
      </div>
      
      {/* Center column: Year with glowing dot */}
      <div className="flex flex-col items-center justify-center order-1 sm:order-2 absolute sm:relative left-0 sm:left-auto">
        {/* Glowing dot */}
        <div className="relative mb-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_3px_rgba(170,66,255,0.4)] animate-pulse"></div>
        </div>
        
        {/* Year */}
        <div className="text-center">
          <span className="text-base sm:text-lg font-bold bg-gradient-to-b from-[#aa42ff] to-white bg-clip-text text-transparent">
            {year}
          </span>
        </div>
      </div>
      
      {/* Right column: Description */}
      <div className="order-3 space-y-1.5">
        {description.map((item, i) => (
          <p key={i} className="text-gray-300 text-sm sm:text-base leading-relaxed">
            • {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
} 