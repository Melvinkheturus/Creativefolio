"use client";

import { motion } from "framer-motion";
import { Github, Figma, ExternalLink, FileText } from "lucide-react";
import { ReactNode } from "react";

type LinkType = {
  type: string;
  url: string;
  icon: string;
};

type ProjectLinksProps = {
  links: LinkType[];
};

type LinkCardProps = {
  type: string;
  url: string;
  icon: ReactNode;
  delay: number;
};

export default function ProjectLinks({ links }: ProjectLinksProps) {
  // Map icon names to actual icon components
  const getIconComponent = (iconName: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "github": <Github size={20} />,
      "figma": <Figma size={20} />,
      "external-link": <ExternalLink size={20} />,
      "file-text": <FileText size={20} />
    };
    
    return icons[iconName] || <ExternalLink size={20} />;
  };
  
  return (
    <motion.div
      className="bento-card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <h3 className="card-title mb-6">
        <span className="text-white">PROJECT </span>
        <span className="gradient-text">LINKS</span>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links?.map((link, index) => (
          <LinkCard 
            key={index}
            type={link.type}
            url={link.url}
            icon={getIconComponent(link.icon)}
            delay={1.1 + (index * 0.1)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function LinkCard({ type, url, icon, delay }: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 bg-[#1D1D1D] rounded-lg hover:bg-[#252525] transition-all duration-300 border border-[#333] hover:border-[#A56CFF]/30 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -3,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="mr-3 p-2 rounded-full bg-[#252525] group-hover:bg-[#2A2A2A]">
        <span className="gradient-text group-hover:scale-110 transition-transform block">
          {icon}
        </span>
      </div>
      
      <div>
        <h4 className="text-white text-sm font-medium">{type}</h4>
        <p className="text-gray-400 text-xs truncate max-w-[150px]">{url}</p>
      </div>
      
      <div className="ml-auto">
        <motion.div
          className="text-gray-500"
          initial={{ x: 0 }}
          whileHover={{ x: 3, color: "#A56CFF" }}
        >
          <ExternalLink size={16} />
        </motion.div>
      </div>
    </motion.a>
  );
} 