"use client";

import { motion } from "framer-motion";
import { Calendar, BarChart, Award, LayoutDashboard, Users, Lock, Clipboard, Calculator, FileText, Archive, Settings, Moon, Navigation, CheckCircle, HelpCircle, Mail, Image, Smartphone, MessageCircle, Camera } from "lucide-react";
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
  size?: 'small' | 'medium' | 'large';
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  // Map icon names to actual icon components
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
      "camera": <Camera size={24} />
    };
    
    return icons[iconName] || <Calendar size={24} />;
  };

  // Assign sizes to features for bento grid layout
  const featuresWithSizes = features.map((feature, index) => {
    let size: 'small' | 'medium' | 'large';
    
    // Create pattern for varied sizes
    if (index % 7 === 0) {
      size = 'large';
    } else if (index % 3 === 0) {
      size = 'medium';
    } else {
      size = 'small';
    }
    
    return { ...feature, size };
  });
  
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-lg font-bold mb-6 relative z-10">
        <span className="text-white">KEY </span>
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">FEATURES</span>
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto relative z-10">
        {featuresWithSizes.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={getIconComponent(feature.icon)}
            delay={0.7 + (index * 0.1)}
            size={feature.size}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, description, icon, delay, size = 'small' }: FeatureCardProps) {
  // Set grid span based on size
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-2 row-span-2'
  };

  return (
    <motion.div
      className={`bg-[#1D1D1D] p-4 rounded-xl hover:bg-[#252525] transition-all duration-300 border border-[#333] hover:border-purple-500/50 ${sizeClasses[size]}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(165, 108, 255, 0.1)",
      }}
    >
      <div className="mb-3 bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
        {icon}
      </div>
      
      <h4 className="text-white text-base font-medium mb-2">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}