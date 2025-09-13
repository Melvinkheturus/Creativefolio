'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PreloaderAnimation from '@/components/section/preloader/PreloaderAnimation';

export default function PreloaderPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleComplete = () => {
    setIsLoading(false);
    // Navigate to homepage after preloader completes
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {isLoading && (
        <PreloaderAnimation onComplete={handleComplete} />
      )}
    </main>
  );
}