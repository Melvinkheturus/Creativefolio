"use client";

import { motion } from "framer-motion";
import { Calendar, BarChart, Award, LayoutDashboard, Users, Lock, Clipboard, Calculator, FileText, Archive, Settings, Moon, Navigation, CheckCircle, HelpCircle, Mail, Image, Smartphone, MessageCircle, Camera, Sparkles } from "lucide-react";
import { ReactNode } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project, CasestudyType } from "@/types/project";

type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

type ProjectFeaturesProps = {
  project: CasestudyType;
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const getIconComponent = (iconName: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "calendar": <Calendar size={24} />,
      "bar-chart": <BarChart size={24} />,
      "award": <Award size={24} />,
      "layout-dashboard": <LayoutDashboard size={24} />,
      "users": <Users size={24} />,
      "lock": <Lock size={24} />,
      "clipboard": <Clipboard size={24} />,
      "calculator": <Calculator size={24} />,
      "file-text": <FileText size={24} />,
      "archive": <Archive size={24} />,
      "settings": <Settings size={24} />,
      "moon": <Moon size={24} />,
      "navigation": <Navigation size={24} />,
      "check-circle": <CheckCircle size={24} />,
      "help-circle": <HelpCircle size={24} />,
      "mail": <Mail size={24} />,
      "image": <Image size={24} />,
      "smartphone": <Smartphone size={24} />,
      "message-circle": <MessageCircle size={24} />,
      "camera": <Camera size={24} />,
      "sparkles": <Sparkles size={24} />,
    };
    return icons[iconName] || <Calendar size={24} />;
  };

  return (
    <motion.div
      className="flex flex-col p-4 bg-[#040406] rounded-lg border border-[#1c0333]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-2">
        <span className="gradient-text mr-2">
          {getIconComponent(icon)}
        </span>
        <h4 className="text-white font-medium text-base">{title}</h4>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  if (!project) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Sparkles size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Key Features</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.features && Array.isArray(project.features) && project.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={0.6 + (index * 0.1)}
          />
        ))}
      </div>
    </ProjectCard>
  );
}