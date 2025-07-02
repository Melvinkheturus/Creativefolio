"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard() {
  const projects = [
    {
      id: 1,
      title: "ExaminerPro – COE Automation",
      image: "/projects/examiner-pro.svg",
      category: "Web App",
      slug: "examiner-pro"
    },
    {
      id: 2,
      title: "Event Website with CMS",
      image: "/projects/event-website.svg",
      category: "Website",
      slug: "event-website"
    },
    {
      id: 3,
      title: "UI/UX for ExaminerPro",
      image: "/projects/uiux-examiner.svg",
      category: "Design",
      slug: "uiux-examiner"
    },
    {
      id: 4,
      title: "Portfolio & Creative Projects",
      image: "/projects/portfolio-projects.svg",
      category: "Portfolio",
      slug: "portfolio-projects"
    }
  ];

  return (
    <motion.div
      className="bento-card h-full p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="card-title mb-6">
          <span className="text-white">MY </span>
          <span className="gradient-text">WORK</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5 }}
    >
      <Link href={`/project/${project.slug}`}>
        <motion.div
          className="block relative bg-[#1D1D1D] rounded-lg overflow-hidden aspect-square"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 z-10" />
          
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
          />
          
          <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
            <div className="self-start">
              <span className="tag px-2 py-1 text-[10px] bg-[#252525]/80 backdrop-blur-sm">{project.category}</span>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex justify-between items-end">
                <h4 className="text-white text-sm font-medium pr-2 line-clamp-2">{project.title}</h4>
                <motion.div 
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={18} className="gradient-text" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
} 