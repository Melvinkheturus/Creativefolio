"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
// Removed Lens import

type ProjectVisualShowcaseProps = {
  images: ImageType[];
};

type ImageType = {
  url: string;
  alt: string;
  caption: string;
};

type ImageCardProps = {
  image: ImageType;
  delay: number;
  onClick: () => void;
};

type LightboxProps = {
  image: ImageType;
  onClose: () => void;
};

export default function ProjectVisualShowcase({ images }: ProjectVisualShowcaseProps) {
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
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-lg font-bold mb-6 relative z-10">
        <span className="text-white">VISUAL </span>
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">SHOWCASE</span>
      </h3>
      
      {/* Auto-scrolling showcase container */}
      <div 
        className="relative w-full overflow-hidden z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#040406] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#040406] to-transparent z-10" />
        
        <motion.div
          ref={carouselRef}
          className="flex gap-6 py-4"
          animate={{ 
            x: isHovered ? 0 : [0, '-50%']
          }}
          transition={{ 
            x: {
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
              repeatType: 'loop'
            }
          }}
          style={{ width: duplicatedImages.length * 320 + 'px' }}
        >
          {duplicatedImages.map((image, index) => (
            <ImageCard 
              key={index}
              image={image}
              delay={0.1 * (index % images.length)}
              onClick={() => openLightbox(image)}
            />
          ))}
        </motion.div>
      </div>
      
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </motion.div>
  );
}

function ImageCard({ image, delay, onClick }: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      style={{ width: '320px', flexShrink: 0 }}
      onClick={onClick}
    >
      <div className="aspect-video">
        <div className="w-full h-full relative z-0 overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt}
            width={320}
            height={180}
              className="w-full h-full object-cover"
              priority
            />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20 pointer-events-none">
        {/* Expand icon at top-right */}
        <div className="self-end">
          <motion.div
            className="bg-black/60 p-2 rounded-full backdrop-blur-sm pointer-events-auto border border-purple-500/30"
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
          <p className="text-gray-300 text-xs leading-relaxed">{image.caption}</p>
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
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#252525] hover:bg-[#333] transition-colors border border-purple-500/30"
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <X size={20} className="text-white" />
        </motion.button>
      </div>
      
      <motion.div
        className="relative max-w-4xl max-h-[80vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={900}
          height={600}
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