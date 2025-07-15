"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Import components
import ProjectHero from "../../components/project/ProjectHero";
import ProjectSummary from "../../components/project/ProjectSummary";
import ProjectTechStack from "../../components/project/ProjectTechStack";
import ProjectProblemSolution from "../../components/project/ProjectProblemSolution";
import ProjectFeatures from "../../components/project/ProjectFeatures";
import ProjectVisualShowcase from "../../components/project/ProjectVisualShowcase";
import ProjectProcess from "../../components/project/ProjectProcess";
import ProjectResults from "../../components/project/ProjectResults";
import ProjectLinks from "../../components/project/ProjectLinks";

// Import project data function
import { getProjectBySlug } from "../../data/projects";

// Helper function to normalize tech stack items to ensure they're all in the correct format
const normalizeTechStack = (techStack: any[]) => {
  if (!techStack || !Array.isArray(techStack)) return [];
  
  return techStack.map(tech => {
    // If it's already in the correct format, return as is
    if (tech && typeof tech === 'object' && tech.name) {
      return tech;
    }
    
    // If it's a string, convert it to the required object format
    if (typeof tech === 'string') {
      return {
        name: tech,
        icon: tech.toLowerCase()
      };
    }
    
    // Fallback for any unexpected format
    return { name: String(tech), icon: '' };
  });
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [project, setProject] = useState<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const projectData = getProjectBySlug(slug);
    setProject(projectData);
    
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);
  
  if (!project) return <div className="min-h-screen bg-black flex items-center justify-center">Loading...</div>;
  
  // The project data already contains properly formatted techStack from the data file
  const projectWithDefaults = {
    ...project,
    summary: project.summary || project.description,
    contribution: project.contribution || `As ${project.role}, I was responsible for the entire project lifecycle, from conceptualization to final delivery.`,
    problem: project.problem || "The project addressed key challenges in the industry with innovative solutions.",
    solution: project.solution || "We delivered a comprehensive solution that met all client requirements and exceeded expectations.",
    // Normalize the tech stack to ensure it's in the correct format
    techStack: normalizeTechStack(project.techStack || []),
    projectType: project.projectType || project.category || "Web Development",
    process: project.process || [],
    images: project.images || [
      { url: project.coverImage || project.thumbnail, alt: project.title, caption: project.subtitle }
    ],
    type: project.type || project.category,
    links: project.links || {}
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#A56CFF] to-[#C278FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Back to home */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link href="/">
          <motion.div 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1D1D1D]/80 backdrop-blur-sm border border-[#333] hover:bg-[#252525] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} className="text-white" />
          </motion.div>
        </Link>
      </div>
      
      {/* Breadcrumbs */}
      <div className="container mx-auto max-w-6xl pt-8 px-4 md:px-6">
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/#work" className="hover:text-white transition-colors">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{project.title}</span>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-12 gap-6 pb-20">
          {/* Hero Section - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectHero project={project} />
          </div>
          
          {/* Summary Section - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectSummary project={projectWithDefaults} />
          </div>
          
          {/* Tech Stack - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectTechStack project={projectWithDefaults} />
          </div>
          
          {/* Problem - Half width */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-6">
            <ProjectProblemSolution 
              title="Problem" 
              content={project.problem || ""}
              color="#A56CFF"
            />
          </div>
          
          {/* Solution - Half width */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-6">
            <ProjectProblemSolution 
              title="Solution" 
              content={project.solution || ""}
              color="#C278FF"
            />
          </div>
          
          {/* Features - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectFeatures features={project.features || []} />
          </div>
          
          {/* Visual Showcase - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectVisualShowcase images={projectWithDefaults.images} />
          </div>
          
          {/* Process - Full width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectProcess process={projectWithDefaults.process} type={projectWithDefaults.type} />
          </div>
          
          {/* Results - Full width or half width depending on content */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-12">
            <ProjectResults results={project.results || []} />
          </div>
          
          {/* Links - Half width on larger screens */}
          <div className="col-span-1 md:col-span-2 lg:col-span-6 xl:col-span-6">
            <ProjectLinks links={projectWithDefaults.links} />
          </div>
        </div>
      </div>
    </main>
  );
} 