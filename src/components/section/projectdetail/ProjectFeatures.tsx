"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

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
      
      {/* Section Header Inside Card - Top Left */}
      <div className="relative z-10 mb-8">
        <SectionHeader title="Feature Spotlight" className="text-left" />
      </div>

        {/* Horizontal Masonry Grid Layout for Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              delay={0.7 + (index * 0.1)}
            />
          ))}
        </div>
      </motion.div>
  );
}

function FeatureCard({ title, description, imageUrl, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px rgba(165, 108, 255, 0.15)",
      }}
    >
      {/* Feature Image - Portrait 4:5 Aspect Ratio (1080x1350px) */}
      <div className="relative w-full aspect-[4/5]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay with Easing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Text Content Overlaid on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.5 }}
          >
            <h4
              className="text-base font-bold mb-2 font-['Oswald']"
              style={{
                background: 'linear-gradient(to bottom, #ffffff 40%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              {title}
            </h4>
            <p
              className="text-white/90 text-xs leading-relaxed"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* Hover Effect - Additional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}