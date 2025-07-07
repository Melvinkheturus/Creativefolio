'use client';

import { useEffect, useState, useCallback } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Debounced scroll handler for better performance
  const updateScrollProgress = useCallback(() => {
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    });
  }, []);

  useEffect(() => {
    // Initial update
    updateScrollProgress();

    // Passive event listener for better scroll performance
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, [updateScrollProgress]);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar; 