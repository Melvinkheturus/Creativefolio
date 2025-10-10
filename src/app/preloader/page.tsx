"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Preloader from '@/components/section/preloader/Preloader';

export default function PreloaderPage() {
  const router = useRouter();
  const [showPreloader, setShowPreloader] = useState(true);
  const [testVisible, setTestVisible] = useState(true);

  useEffect(() => {
    // Clear any existing session storage
    sessionStorage.removeItem('hasVisited');
    sessionStorage.removeItem('hasVisitedHomepage');
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Set session storage to prevent preloader from showing again
    sessionStorage.setItem('hasVisitedHomepage', 'true');
    // Redirect to home page after preloader completes
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  // Test if the page is even rendering
  if (testVisible) {
    return (
      <div className="fixed inset-0 bg-red-500 z-[9999] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl mb-4">PRELOADER PAGE TEST</h1>
          <p className="text-xl mb-4">This should be visible immediately</p>
          <button
            onClick={() => setTestVisible(false)}
            className="bg-white text-red-500 px-6 py-3 rounded font-bold"
          >
            Start Preloader
          </button>
        </div>
      </div>
    );
  }

  if (!showPreloader) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p>Redirecting to portfolio...</p>
        </div>
      </div>
    );
  }

  return <Preloader onComplete={handlePreloaderComplete} />;
}