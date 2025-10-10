"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DotTextProps = {
  text: string;
  size?: 'small' | 'medium' | 'large';
};

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState('loading'); // loading, dev, logo, complete
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Stage 1: Counter animation (0-100%)
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          setTimeout(() => setStage('dev'), 300);
          return 100;
        }
        return prev + 2; // Faster increment
      });
    }, 30);

    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    // Stage 2: Show "dev" for 1 second
    if (stage === 'dev') {
      setTimeout(() => setStage('logo'), 800);
    }
    // Stage 3: Show "MANIKANDAN" for 1 second
    else if (stage === 'logo') {
      setTimeout(() => setStage('complete'), 1000);
    }
    // Stage 4: Fade out preloader
    else if (stage === 'complete') {
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 500);
    }
  }, [stage, onComplete]);

  const DotText = ({ text, size = 'large' }: DotTextProps) => {
    const dots: Record<string, number[][]> = {
      '0': [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
      '1': [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]],
      '2': [[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],
      '3': [[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],
      '4': [[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],
      '5': [[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],
      '6': [[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],
      '7': [[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],
      '8': [[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],
      '9': [[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]],
      '%': [[1,0,1],[0,0,1],[0,1,0],[1,0,0],[1,0,1]],
      'd': [[0,0,1],[0,0,1],[0,1,1],[1,0,1],[0,1,1]],
      'e': [[0,0,0],[0,1,1],[1,1,1],[1,0,0],[0,1,1]],
      'v': [[0,0,0],[1,0,1],[1,0,1],[1,0,1],[0,1,0]],
      'm': [[0,0,0],[1,1,1],[1,1,1],[1,0,1],[1,0,1]],
      'a': [[0,1,0],[1,0,1],[1,1,1],[1,0,1],[1,0,1]],
      'n': [[0,0,0],[1,1,0],[1,0,1],[1,0,1],[1,0,1]],
      'i': [[0,1,0],[0,0,0],[0,1,0],[0,1,0],[0,1,0]],
      'k': [[1,0,0],[1,0,1],[1,1,0],[1,1,0],[1,0,1]],
      'o': [[0,0,0],[0,1,0],[1,0,1],[1,0,1],[0,1,0]],
      'l': [[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]],
      's': [[0,1,1],[1,0,0],[0,1,0],[0,0,1],[1,1,0]],
      'f': [[0,1,1],[1,0,0],[1,1,0],[1,0,0],[1,0,0]],
      ' ': [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
    };

    const dotSize = size === 'large' ? 'w-2 h-2' : size === 'medium' ? 'w-1.5 h-1.5' : 'w-1 h-1';
    const gapSize = size === 'large' ? 'gap-1' : size === 'medium' ? 'gap-0.5' : 'gap-0.5';
    const charGap = size === 'large' ? 'gap-3' : size === 'medium' ? 'gap-2' : 'gap-1';

    return (
      <div className={`flex ${charGap}`}>
        {text.split('').map((char, idx) => {
          const pattern = dots[char.toLowerCase()] || dots['0'];
          return (
            <div key={idx} className={`grid grid-cols-3 ${gapSize}`}>
              {pattern.map((row, rowIdx) =>
                row.map((dot, dotIdx) => (
                  <motion.div
                    key={`${rowIdx}-${dotIdx}`}
                    className={`${dotSize} rounded-full ${
                      dot ? 'bg-purple-500' : 'bg-transparent'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: dot ? 1 : 0, 
                      scale: dot ? 1 : 0 
                    }}
                    transition={{
                      delay: (rowIdx * 3 + dotIdx) * 0.05,
                      duration: 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1
                    }}
                  />
                ))
              )}
            </div>
          );
        })}
      </div>
    );
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Stage 1: Loading with arrow and counter */}
        <AnimatePresence>
          {stage === 'loading' && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Arrow (bottom-left) */}
              <div className="absolute bottom-12 left-12">
                <motion.div 
                  className="grid grid-cols-3 gap-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {/* Arrow down pattern using dots */}
                  {[[0,1,0],[0,1,0],[0,1,0],[1,1,1],[0,1,0]].map((row, rowIdx) =>
                    row.map((dot, dotIdx) => (
                      <div
                        key={`${rowIdx}-${dotIdx}`}
                        className={`w-2 h-2 rounded-full ${
                          dot ? 'bg-purple-500' : 'bg-transparent'
                        }`}
                      />
                    ))
                  )}
                </motion.div>
              </div>

              {/* Counter (bottom-right) */}
              <div className="absolute bottom-12 right-12">
                <DotText text={`${counter.toString().padStart(3, '0')}%`} size="large" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: "dev" text */}
        <AnimatePresence>
          {stage === 'dev' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <DotText text="dev" size="large" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3: "MANIKANDAN" text */}
        <AnimatePresence>
          {stage === 'logo' && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <DotText text="manikandan" size="medium" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}