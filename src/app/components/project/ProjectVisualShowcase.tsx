"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ProjectVisualShowcaseProps = {
  images: any[];
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
  
  const openLightbox = (image: ImageType) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <motion.div
      className="bento-card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <h3 className="card-title mb-6">
        <span className="text-white">VISUAL </span>
        <span className="gradient-text">SHOWCASE</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images?.map((image, index) => (
          <ImageCard 
            key={index}
            image={image}
            delay={0.8 + (index * 0.1)}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>
      
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </motion.div>
  );
}

function ImageCard({ image, delay, onClick }: ImageCardProps) {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
    >
      <div className="aspect-square">
        <Image
          src={image.url}
          alt={image.alt}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="text-white text-sm font-medium">{image.alt}</h4>
        <p className="text-gray-300 text-xs">{image.caption}</p>
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