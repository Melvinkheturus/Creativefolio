"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FeatureType = {
  title: string;
  description: string;
  imageUrl: string;
};

type ProjectFeaturesProps = {
  features: FeatureType[];
};

type FeatureCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  delay: number;
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) return null;
  
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
      
      <h3 className="text-lg font-bold mb-8 relative z-10">
        <span className="text-white">FEATURE </span>
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">GALLERY</span>
      </h3>
      
      {/* Masonry Grid Layout for Images */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 relative z-10">
        {features.map((feature, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <FeatureCard 
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              delay={0.7 + (index * 0.1)}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FeatureCard({ title, description, imageUrl, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(165, 108, 255, 0.15)",
      }}
    >
      {/* Feature Image */}
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h4 className="text-white text-lg font-semibold mb-3">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}