"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

type ImageType = {
  url: string;
  alt: string;
  caption: string;
};

type FeatureType = {
  title: string;
  description: string;
  icon?: string;
};

type MobileVisualShowcaseProps = {
  images: ImageType[];
  features: FeatureType[];
};

type LightboxProps = {
  image: ImageType;
  onClose: () => void;
};

export default function MobileVisualShowcase({ images, features }: MobileVisualShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const openLightbox = (image: ImageType) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Double the images array for infinite loop effect
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Features Bento Grid - Left Side */}
      <motion.div
        className="bento-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="card-title mb-6">
          <span className="text-white">APP </span>
          <span className="gradient-text">FEATURES</span>
        </h3>
        
        <div className="grid grid-cols-2 gap-4 auto-rows-auto">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Vertical Visual Showcase - Right Side */}
      <motion.div
        className="bento-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h3 className="card-title mb-6">
          <span className="text-white">APP </span>
          <span className="gradient-text">SCREENS</span>
        </h3>
        
        {/* Auto-scrolling showcase container */}
        <div 
          className="relative w-full h-[500px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top and bottom fade gradients */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121212] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#121212] to-transparent z-10" />
          
          <motion.div
            ref={carouselRef}
            className="flex flex-col gap-6 px-4"
            animate={{ 
              y: isHovered ? 0 : [0, '-50%']
            }}
            transition={{ 
              y: {
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
                repeatType: 'loop'
              }
            }}
            style={{ height: duplicatedImages.length * 400 + 'px' }}
          >
            {duplicatedImages.map((image, index) => (
              <MobileImageCard 
                key={index}
                image={image}
                delay={0.1 * (index % images.length)}
                onClick={() => openLightbox(image)}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </div>
  );
}

function FeatureItem({ title, description, index }: { title: string; icon?: string; description: string; index: number }) {
  // Determine if feature should be large based on index
  const isLarge = index % 5 === 0;
  const sizeClasses = isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1';
  
  return (
    <motion.div
      className={`bg-[#1D1D1D] p-4 rounded-xl hover:bg-[#252525] transition-colors border border-[#333] hover:border-[#444] ${sizeClasses}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 * index + 0.7, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="mb-3 gradient-text">
        {/* Placeholder for icon - in a real app, you'd map icons */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m8 12 2 2 4-4" />
        </svg>
      </div>
      
      <h4 className="text-white text-base font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

function MobileImageCard({ image, delay, onClick }: { image: ImageType; delay: number; onClick: () => void }) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '100%', flexShrink: 0 }}
      onClick={onClick}
    >
      <div className="aspect-[9/16] relative z-0 overflow-hidden">
        <div className="w-full h-full relative z-0 overflow-hidden">
            <Image
              src={image.url}
              alt={image.alt}
              width={300}
              height={534}
              className="w-full h-full object-cover"
              priority
            />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20 pointer-events-none">
        {/* Expand icon at top-right */}
        <div className="self-end">
          <motion.div
            className="bg-black/50 p-2 rounded-full backdrop-blur-sm pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <Maximize2 size={16} className="text-white" />
          </motion.div>
        </div>
        
        {/* Caption at bottom */}
        <div>
          <h4 className="text-white text-sm font-medium">{image.alt}</h4>
          <p className="text-gray-300 text-xs">{image.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute top-4 right-4">
        <motion.button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[#252525] hover:bg-[#333] transition-colors"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <X size={16} className="text-gray-400" />
        </motion.button>
      </div>
      
      <motion.div
        className="relative max-w-xs max-h-[80vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={375}
          height={667}
          className="max-h-[80vh] object-contain"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
          <h4 className="text-white font-medium">{image.alt}</h4>
          <p className="text-gray-300 text-sm">{image.caption}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}