"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });
  const [revealComplete, setRevealComplete] = useState(false);

  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Mark animation as complete after all sentences are revealed
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRevealComplete(true);
      }, 3000); // Slightly longer than the staggered animation total time
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Animation variants for sentence reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      }
    }
  };

  const sentenceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Define sentences with highlighted words
  const sentences = [
    <>Hi there i am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">Manikandan</span> a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">designer</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">creative technologist</span> passionate about crafting meaningful digital experiences.</>,
    <>With a sharp eye for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">UI/UX</span> and a strong grasp of emerging tools like <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">AI</span>, I bridge the gap between design and development. I create interfaces that are not only beautiful, but also purposeful and efficient.</>,
    <>I may not be a traditional developer, but I bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">ideas to life</span> from concept to launch <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">blending creativity with execution</span> at every step.</>,
    <>Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">meaningful</span> together.</>
  ];

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-lg relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
          <span className="text-white">MEET THE </span>
          <span className="text-purple-400">CREATOR</span>
        </h3>
        
        <div 
          ref={contentRef} 
          className="text-gray-300 text-xs md:text-sm leading-relaxed space-y-3"
        >
          {isInView ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {sentences.map((sentence, index) => (
                <motion.p key={index} variants={sentenceVariants}>
                  {sentence}
                </motion.p>
              ))}
            </motion.div>
          ) : (
            <div className="h-24 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 