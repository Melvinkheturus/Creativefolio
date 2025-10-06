"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, Smartphone, Eye } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { urlFor } from '@/sanity/lib/image';
import { Project, ImageType, CasestudyType } from '@/types/project';

export default function MobileVisualShowcase({ project }: { project: CasestudyType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const images = project.mobileShowcase || [];

  if (!images || images.length === 0) return null;

  return (
    <ProjectCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="p-0 overflow-hidden"
    >
      <div className="flex items-center px-6 pt-6 mb-4">
        <Smartphone size={18} className="gradient-text mr-2" />
        <h3 className="text-white font-medium">Mobile Showcase</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 pt-0">
        {images.map((image: ImageType, index: number) => (
          <motion.div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={urlFor(image).url()}
              alt={image.alt || `Mobile project image ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Eye size={32} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          image={images[photoIndex]}
          onClose={closeLightbox}
        />
      )}
    </ProjectCard>
  );
}

function Lightbox({ image, onClose }: { image: ImageType; onClose: () => void }) {
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
          alt={image.alt}
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