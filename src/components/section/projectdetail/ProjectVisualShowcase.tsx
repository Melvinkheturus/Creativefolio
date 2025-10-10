"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Bookmark, ExternalLink } from "lucide-react";

type ProjectVisualShowcaseProps = {
  images: ImageType[];
};

type ImageType = {
  url: string;
  alt: string;
  caption: string;
  title?: string;
  subtitle?: string;
  location?: string;
};

export default function ProjectVisualShowcase({ images }: ProjectVisualShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [detailsEven, setDetailsEven] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides
  useEffect(() => {
    const startAutoAdvance = () => {
      intervalRef.current = setInterval(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 4000);
    };

    startAutoAdvance();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setDetailsEven(prev => !prev);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setDetailsEven(prev => !prev);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentImage = images[currentIndex];
  const otherImages = images.filter((_, index) => index !== currentIndex);

  if (!images || images.length === 0) return null;

  return (
    <motion.div
      className="relative w-full h-[600px] rounded-2xl bg-[#1a1a1a] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      {/* Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <motion.div
          className="h-full bg-[#ecad29]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Side Cards */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
        {otherImages.slice(0, 4).map((image, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            className="w-16 h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-white/20 hover:border-[#ecad29] transition-colors"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            onClick={() => {
              const originalIndex = images.findIndex(img => img.url === image.url);
              if (originalIndex !== -1) {
                setCurrentIndex(originalIndex);
                setDetailsEven(prev => !prev);
              }
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={64}
              height={80}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Details Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${detailsEven}`}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-40 max-w-md"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Location */}
          <motion.div
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-8 h-1 bg-white rounded-full mb-2" />
            <p className="text-white/80 text-sm font-medium">
              {currentImage.location || "Project Gallery"}
            </p>
          </motion.div>

          {/* Title */}
          <div className="mb-6 overflow-hidden">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white font-['Oswald'] leading-none"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              {currentImage.title || currentImage.alt.split(' ')[0]?.toUpperCase() || "IMAGE"}
            </motion.h2>
          </div>

          <div className="mb-6 overflow-hidden">
            <motion.h3
              className="text-5xl md:text-6xl font-bold text-white font-['Oswald'] leading-none"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            >
              {currentImage.subtitle || currentImage.alt.split(' ').slice(1).join(' ').toUpperCase() || "SHOWCASE"}
            </motion.h3>
          </div>

          {/* Description */}
          <motion.p
            className="text-white/90 text-sm leading-relaxed mb-6 max-w-sm"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {currentImage.caption}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="w-9 h-9 bg-[#ecad29] rounded-full flex items-center justify-center text-white hover:bg-[#d49a24] transition-colors">
              <Bookmark size={16} />
            </button>
            <button className="px-6 py-2 border border-white/30 rounded-full text-white text-xs uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2">
              View Details
              <ExternalLink size={12} />
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-8 left-8 flex items-center gap-6 z-40">
        {/* Arrow Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#ecad29] rounded-full"
              animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Slide Counter */}
        <div className="w-12 h-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.3 }}
            >
              {currentIndex + 1}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Cover Animation (for initial load) */}
      <motion.div
        className="absolute inset-0 bg-white z-[100]"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}