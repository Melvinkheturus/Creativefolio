"use client";
import { useState, useEffect } from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { motion, useScroll, useSpring, TargetAndTransition } from "framer-motion";
import { useRef } from "react";

const DEFAULT_EXPERIENCE = [
  {
    _id: 'experience-1',
    _type: 'experience',
    title: "Web Development Intern",
    company: "SAIC",
    year: "2024",
    description: [
      "Built and maintained responsive, SEO-friendly websites using WordPress and no-code tools, focusing on UI/UX design, plugin integration, and content management.",
      "Collaborated on real-world client projects, gaining hands-on experience in website optimization, accessibility, and cross-browser compatibility."
    ]
  },
  {
    _id: 'experience-2',
    _type: 'experience',
    title: "Freelance Web Developer",
    company: "Self-Employed",
    year: "NOW",
    description: [
      "Delivering custom websites for startups and businesses, covering domain setup, hosting, CMS integration, and on-page SEO optimization.",
      "Actively expanding skills in modern frameworks (React, Next.js, Tailwind CSS, Framer Motion, Supabase) to provide scalable and future-ready digital solutions."
    ]
  }
];

type ExperienceItem = typeof DEFAULT_EXPERIENCE[0];
type ExperienceData = ExperienceItem[];

export default function ExperienceCard() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [experienceData, setExperienceData] = useState<ExperienceData>(DEFAULT_EXPERIENCE);

  useEffect(() => {
    async function fetchExperienceData() {
      const query = `*[_type == "experience"] | order(year desc){
        _id,
        _type,
        title,
        company,
        year,
        description
      }`;
      const result = await sanityFetch<ExperienceData>(query, DEFAULT_EXPERIENCE);
      setExperienceData(result.data);
    }
    fetchExperienceData();
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Animation for the timeline dot
  
  return (
    <motion.div
      ref={containerRef}
      className="p-6 rounded-2xl bg-[#040406] border-#1c0333 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />


      
      <div className="flex flex-col h-full relative z-10">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-normal mb-6 md:mb-10 text-center">
          <span className="bg-gradient-to-t from-purple-600 to-white bg-clip-text text-transparent">Journey So Far </span>
        </h2>
        
        {/* Timeline container */}
        <div ref={timelineRef} className="relative flex-1 max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-[12px] md:left-[20px] lg:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#aa42ff] via-[#7f40ff] to-transparent origin-top"
            style={{ scaleY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Animated dot */}
          <motion.div 
            className="absolute left-[12px] md:left-[20px] lg:left-1/2 transform -translate-x-1/2 bottom-0 w-[10px] h-[10px] bg-[#aa42ff] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          {/* Timeline entries */}
          <div className="relative z-10 space-y-5 md:space-y-6">
            {experienceData.map((exp, index) => (
              <TimelineEntry
                key={index}
                {...exp}
                delay={index * 0.2}
                isLast={index === experienceData.length - 1}
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
      className="flex flex-col lg:flex-row justify-between mb-12 relative pl-[25px] md:pl-[35px] lg:pl-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Career info box */}
      <div className="career-info-box w-full flex flex-col lg:flex-row justify-between">
        {/* Left side: Title and company */}
        <div className="career-info-in w-full lg:w-3/6 flex justify-between mb-2 lg:mb-0">
          <div className="career-role">
            <h4 className="text-base md:text-lg lg:text-xl font-medium text-white leading-tight">{title}</h4>
            <h5 className="text-purple-400 text-sm md:text-sm lg:text-base mt-1 md:mt-2">{company}</h5>
          </div>
          
          {/* Year */}
          <h3 className="text-xl md:text-xl lg:text-2xl font-medium bg-gradient-to-b from-[#aa42ff] to-white bg-clip-text text-transparent lg:pr-8">
            {year}
          </h3>
        </div>
        
        {/* Right side: Description */}
        <div className="w-full lg:w-2/5 mt-3 lg:mt-0">
          {description.map((item, i) => (
            <p key={i} className="text-gray-300 text-sm lg:text-xs leading-relaxed mb-2">
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}