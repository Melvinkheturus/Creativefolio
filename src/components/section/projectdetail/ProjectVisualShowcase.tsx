"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";

import { Project, ImageType, CasestudyType } from "@/types/project";
import { urlFor } from "@/sanity/lib/image";

interface ProjectVisualShowcaseProps {
  project: CasestudyType;
}

type ImageCardProps = {
  image: ImageType;
  delay: number;
  onClick: () => void;
};

type LightboxProps = {
  image: ImageType;
  onClose: () => void;
};

export default function ProjectVisualShowcase({ project }: ProjectVisualShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const openLightbox = (image: ImageType) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const images = project.visualShowcase || [];
  // Double the images array for infinite loop effect
  const duplicatedImages = [...images, ...images];
  
  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center mb-4">
        <Maximize2 size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Visual Showcase</h3>
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedImages.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            delay={0.9 + (index * 0.05)}
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      )}
    </ProjectCard>
  );
}

function ImageCard({ image, delay, onClick }: ImageCardProps) {
  return (
    <motion.div
      className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer group">
        <Image
          src={urlFor(image).url()}
          alt={image.alt || "Project Image"}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="text-white" size={32} />
        </div>
      </div>
      {image.caption && (
        <p className="text-gray-400 text-sm mt-2 text-center">
          {image.caption}
        </p>
      )}
    </motion.div>
  );
}

function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative bg-[#040406] p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        <Image
          src={urlFor(image).url()}
          alt={image.alt || "Project Image"}
          width={800}
          height={600}
          objectFit="contain"
          className="rounded-lg"
        />
        {image.caption && (
          <p className="text-gray-300 text-sm mt-4 text-center">
            {image.caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}