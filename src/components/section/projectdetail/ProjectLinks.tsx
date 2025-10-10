"use client";

import { motion } from "framer-motion";
import { Github, Figma, ExternalLink, FileText } from "lucide-react";
import { ReactNode } from "react";

type IconType = {
  type: 'library' | 'image';
  libraryIcon?: string;
  customImage?: string;
};

type LinkType = {
  type: string;
  url: string;
  icon: IconType | null;
};

type ProjectLinksProps = {
  links: LinkType[];
};

type LinkCardProps = {
  label: string;
  url: string;
  icon: ReactNode;
  delay: number;
};

export default function ProjectLinks({ links }: ProjectLinksProps) {
  // Map icon names to actual icon components
  const getIconComponent = (iconData: IconType | null): ReactNode => {
    if (!iconData) return <ExternalLink size={20} />;
    
    // If it's a custom image
    if (iconData.type === 'image' && iconData.customImage) {
      return <img src={iconData.customImage} alt="Link icon" className="w-5 h-5" />;
    }
    
    // If it's a library icon
    const iconName = iconData.libraryIcon;
    if (!iconName) return <ExternalLink size={20} />;
    
    const icons: Record<string, ReactNode> = {
      "github": <Github size={20} />,
      "figma": <Figma size={20} />,
      "external-link": <ExternalLink size={20} />,
      "file-text": <FileText size={20} />,
      "globe": <ExternalLink size={20} />,
      "link": <ExternalLink size={20} />,
      "download": <ExternalLink size={20} />
    };
    
    return icons[iconName] || <ExternalLink size={20} />;
  };
  
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-lg font-bold mb-6 relative z-10">
        <span className="text-white">PROJECT </span>
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">LINKS</span>
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        {links?.map((link, index) => (
          <LinkCard 
            key={index}
            label={link.type}
            url={link.url}
            icon={getIconComponent(link.icon)}
            delay={1.1 + (index * 0.1)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function LinkCard({ label, url, icon, delay }: LinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -3,
        boxShadow: "0 20px 40px rgba(165, 108, 255, 0.15)",
      }}
    >
      <div className="mr-3 p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/15 transition-colors">
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform block">
          {icon}
        </span>
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-white text-sm font-medium">{label}</h4>
        <p className="text-gray-300 text-xs truncate">{url}</p>
      </div>
      
      <div className="ml-auto">
        <motion.div
          className="text-gray-500 group-hover:text-purple-400 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <ExternalLink size={16} />
        </motion.div>
      </div>
    </motion.a>
  );
}