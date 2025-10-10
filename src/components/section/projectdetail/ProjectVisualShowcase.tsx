"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, ArrowLeft, Eye, EyeOff } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

type ProjectVisualShowcaseProps = {
  images: ImageType[];
};

type ImageType = {
  url: string;
  alt: string;
  caption: string;
  title?: string;
  location?: string;
  keyFeature?: string;
};

export default function ProjectVisualShowcase({ images }: ProjectVisualShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [detailsEven, setDetailsEven] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTextInFullscreen, setShowTextInFullscreen] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 4000; // 4 seconds per slide
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms

  // Auto-advance slides with progress bar
  useEffect(() => {
    if (isFullscreen) return; // Don't auto-advance in fullscreen

    const startAutoAdvance = () => {
      setProgress(0);

      // Progress bar animation
      progressRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
          if (newProgress >= 100) {
            clearInterval(progressRef.current!);
            return 100;
          }
          return newProgress;
        });
      }, PROGRESS_INTERVAL);

      // Slide change
      intervalRef.current = setTimeout(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, SLIDE_DURATION);
    };

    startAutoAdvance();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [currentIndex, isAnimating, isFullscreen]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setDetailsEven(prev => !prev);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setDetailsEven(prev => !prev);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setDetailsEven(prev => !prev);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    setShowTextInFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const toggleTextInFullscreen = () => {
    setShowTextInFullscreen(prev => !prev);
  };

  const currentImage = images[currentIndex];
  const otherImages = images.filter((_, index) => index !== currentIndex);

  if (!images || images.length === 0) return null;

  return (
    <>
      <motion.div
        className="relative w-full h-[600px] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {/* Timer Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-black/20 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-purple-700"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>

        {/* Section Header - Top Left Corner */}
        <div className="absolute top-6 left-6 z-50">
          <SectionHeader title="Visual Showcase" className="text-left" />
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={openFullscreen}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
        >
          <Maximize2 size={18} />
        </button>

        {/* Main Image with Smooth Transition */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing similar to sine.inOut
              }}
            >
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Left Side Gradient Overlay with Easing */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side Cards (without white border bleeding) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
          {otherImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="w-16 h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-purple-500 transition-colors"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onClick={() => {
                const originalIndex = images.findIndex(img => img.url === image.url);
                if (originalIndex !== -1) {
                  goToSlide(originalIndex);
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

        {/* Text Content - Left Side Centered */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${detailsEven}`}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-40 max-w-md"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1
            }}
          >
            {/* Key Feature - CMS Ready */}
            <motion.div
              className="mb-2 overflow-hidden"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p
                className="text-purple-400 text-sm font-medium uppercase tracking-wider"
                style={{
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                {currentImage.keyFeature || "Project Detail"}
              </p>
            </motion.div>

            {/* Title with Purple Gradient (top white, bottom purple) */}
            <motion.div
              className="mb-6 overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              <h2
                className="text-5xl md:text-6xl font-bold font-['Oswald'] leading-none"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 30%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 4px 8px rgba(0, 0, 0, 0.8)'
                }}
              >
                {currentImage.title || currentImage.alt.split(' ')[0]?.toUpperCase() || "PROJECT"}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="overflow-hidden"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p
                className="text-white/90 text-sm leading-relaxed max-w-sm"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}
              >
                {currentImage.caption}
              </p>
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
                className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Slide Counter with Purple Line */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-purple-700" />
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
        </div>

        {/* Cover Animation (for initial load) */}
        <motion.div
          className="absolute inset-0 bg-white z-[100]"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Fullscreen Image */}
            <div className="relative w-full h-full">
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                className="object-contain"
                priority
              />

              {/* Back Button */}
              <button
                onClick={closeFullscreen}
                className="absolute top-6 left-6 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                <ArrowLeft size={20} />
              </button>

              {/* Eye Toggle Button */}
              <button
                onClick={toggleTextInFullscreen}
                className="absolute top-6 right-6 z-60 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                {showTextInFullscreen ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>

              {/* Fullscreen Text Content with Gradient Overlay */}
              <AnimatePresence>
                {showTextInFullscreen && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-60"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Gradient Overlay Background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 p-8 pb-12">
                      {/* Key Feature - CMS Ready */}
                      <motion.div
                        className="mb-3"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p
                          className="text-purple-400 text-sm font-medium uppercase tracking-wider"
                          style={{
                            textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {currentImage.keyFeature || "Project Detail"}
                        </p>
                      </motion.div>

                      {/* Title */}
                      <motion.div
                        className="mb-4"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2
                          className="text-4xl md:text-6xl font-bold font-['Oswald'] leading-none"
                          style={{
                            background: 'linear-gradient(to bottom, #ffffff 30%, #a855f7 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 4px 8px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {currentImage.title || currentImage.alt.split(' ')[0]?.toUpperCase() || "PROJECT"}
                        </h2>
                      </motion.div>

                      {/* Description */}
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p
                          className="text-white/90 text-lg leading-relaxed max-w-4xl"
                          style={{
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {currentImage.caption}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}