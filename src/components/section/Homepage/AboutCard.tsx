"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

// Default fallback data
const DEFAULT_ABOUT = {
  title: 'Meet the Creator',
  sentences: [
    'Hi there i am Manikandan a designer and creative technologist passionate about crafting meaningful digital experiences.',
    'With a sharp eye for UI/UX and a strong grasp of emerging tools like AI, I bridge the gap between design and development. I create interfaces that are not only beautiful, but also purposeful and efficient.',
    'I may not be a traditional developer, but I bring ideas to life from concept to launch blending creativity with execution at every step.',
    'Let\'s build something meaningful together.'
  ],
  highlightedWords: [
    'Manikandan', 'designer', 'creative technologist',
    'UI/UX', 'AI', 'ideas to life', 'blending creativity with execution',
    'meaningful'
  ]
};

interface AboutData {
  title: string;
  sentences: string[];
  highlightedWords: string[];
}

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.3 });
  const [aboutData, setAboutData] = useState<AboutData>(DEFAULT_ABOUT);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchAboutData() {
      const query = `*[_type == "about"][0]{
        _id,
        _type,
        title,
        sentences,
        highlightedWords
      }`;
      const result = await sanityFetch<AboutData>(query, DEFAULT_ABOUT);
      setAboutData(result.data);
    }
    fetchAboutData();
  }, []);

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

  // Helper function to highlight words in sentences
  const highlightSentence = (sentence: string) => {
    let result: (string | React.ReactNode)[] = [sentence];
    
    (aboutData.highlightedWords || []).forEach((word) => {
      const newResult: (string | React.ReactNode)[] = [];
      result.forEach((part) => {
        if (typeof part === 'string') {
          const parts = part.split(new RegExp(`(${word})`, 'gi'));
          parts.forEach((p, i) => {
            if (p.toLowerCase() === word.toLowerCase()) {
              newResult.push(
                <span key={`${word}-${i}`} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 animate-gradient">
                  {p}
                </span>
              );
            } else if (p) {
              newResult.push(p);
            }
          });
        } else {
          newResult.push(part);
        }
      });
      result = newResult;
    });
    
    return <>{result}</>;
  };

  const sentences = (aboutData.sentences || DEFAULT_ABOUT.sentences).map(sentence => highlightSentence(sentence));

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
        <SectionHeader title={aboutData.title} />
        
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