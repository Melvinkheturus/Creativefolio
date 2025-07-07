'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components for better performance
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false,
});

const ScrollProgressBar = dynamic(() => import('@/components/ScrollProgressBar'), {
  ssr: false,
});

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollProgressBar />
      </Suspense>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      {children}
    </>
  );
} 