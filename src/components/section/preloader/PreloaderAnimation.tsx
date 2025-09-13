'use client';

import { useEffect, useState } from 'react';

interface PreloaderAnimationProps {
  onComplete?: () => void;
}

const PreloaderAnimation = ({ onComplete }: PreloaderAnimationProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(() => {
              onComplete();
            }, 500); // Delay before calling onComplete
          }
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-8">SMK</div>
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-sm">{progress}%</div>
    </div>
  );
};

export default PreloaderAnimation;