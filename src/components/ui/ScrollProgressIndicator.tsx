"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type ScrollProgressIndicatorProps = {
  sections: Section[];
};

export default function ScrollProgressIndicator({ sections }: ScrollProgressIndicatorProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section is currently in view
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-3 py-4">
        {sections.map((section, index) => {
          const isBigDash = index % 2 === 0;
          const isCurrent = index === activeSection;
          const isFilled = index < activeSection;
          
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to ${section.label}`}
            >
              {/* Glow effect for current */}
              {isCurrent && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: '0 0 12px 3px rgba(255, 255, 255, 0.6)',
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.8, 0.4, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              
              {isCurrent ? (
                // Current position: dot
                <div className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300" />
              ) : (
                // Big or small dash
                <div
                  className={`${isBigDash ? 'w-3' : 'w-2'} h-0.5 rounded-full transition-all duration-300 ${
                    isFilled ? 'bg-white' : 'bg-zinc-700'
                  }`}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}