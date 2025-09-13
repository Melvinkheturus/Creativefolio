'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Add the JSON-LD script to the document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      // Clean up when component unmounts
      document.head.removeChild(script);
    };
  }, [data]);

  // This component doesn't render anything visible
  return null;
}