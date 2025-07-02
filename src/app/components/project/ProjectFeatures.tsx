"use client";

import { motion } from "framer-motion";
import { Calendar, BarChart, Award, LayoutDashboard } from "lucide-react";
import { ReactNode } from "react";

type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

type ProjectFeaturesProps = {
  features: FeatureType[];
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  // Map icon names to actual icon components
  const getIconComponent = (iconName: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "calendar": <Calendar size={24} />,
      "bar-chart": <BarChart size={24} />,
      "award": <Award size={24} />,
      "layout-dashboard": <LayoutDashboard size={24} />
    };
    
    return icons[iconName] || <Calendar size={24} />;
  };
  
  return (
    <motion.div
      className="bento-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="card-title mb-6">
        <span className="text-white">KEY </span>
        <span className="gradient-text">FEATURES</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features?.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={getIconComponent(feature.icon)}
            delay={0.7 + (index * 0.1)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#1D1D1D] p-4 rounded-xl hover:bg-[#252525] transition-colors border border-[#333] hover:border-[#444]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="mb-3 gradient-text">
        {icon}
      </div>
      
      <h4 className="text-white text-base font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
} 