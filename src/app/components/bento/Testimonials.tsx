"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import BentoCard from '../BentoCard';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "Manikandan consistently delivered thoughtful, user-centered designs that exceeded expectations.",
    name: "Ravi Kumar",
    role: "UI Lead at Softwave"
  },
  {
    id: 2,
    text: "Working with Mani was a game-changer for our product. His attention to detail and creative solutions elevated our user experience.",
    name: "Priya Sharma",
    role: "Product Manager"
  },
  {
    id: 3,
    text: "Exceptional designer who balances creativity with pragmatism. Always delivers work that pushes boundaries while remaining practical.",
    name: "Alex Johnson",
    role: "Creative Director"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((current + 1) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      handleNext();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [current, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <BentoCard 
      className="col-span-1 md:col-span-2 h-full"
      glow="violet"
      spotlightEnabled={true}
      glassy={false}
    >
      <div className="flex flex-col h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 className="text-lg font-semibold mb-4 md:mb-6">
          <span className="text-white">TRUSTED </span>
          <span className="text-violet-400">VOICES</span>
        </h3>
        
        <div className="relative flex-grow">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction * 100
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: direction * -100
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="text-4xl text-violet-400 mb-4 opacity-50">
                <Quote size={40} />
              </div>
              <p className="italic text-lg leading-relaxed mb-6 font-[Playfair_Display]">
                {testimonials[current].text}
              </p>
              <div>
                <p className="font-semibold text-white">{testimonials[current].name}</p>
                <p className="text-sm text-gray-400">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i < current ? -1 : 1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'bg-violet-500 w-4' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            <motion.button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={16} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </BentoCard>
  );
} 