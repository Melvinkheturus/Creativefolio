"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });
  const [revealComplete, setRevealComplete] = useState(false);

  // Mark animation as complete after all sentences are revealed
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRevealComplete(true);
      }, 3000); // Slightly longer than the staggered animation total time
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Animation complete effect
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setRevealComplete(true);
      }, 3000);
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
      className="p-6 rounded-2xl bg-[#040406] border-[#1c0333] relative h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="region"
      aria-label="About Manikandan"
    >
      {/* Corner glows */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeader title="Meet the Creator" />
        
        <div 
          ref={contentRef} 
          className="text-gray-300 text-base md:text-lg leading-relaxed space-y-3"
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