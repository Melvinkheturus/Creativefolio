'use client';

import { usePathname } from 'next/navigation';

type StructuredDataProps = {
  title?: string;
  description?: string;
  type?: 'Person' | 'WebSite' | 'WebPage';
  image?: string;
};

export default function StructuredData({
  title = 'Manikandan S | Creative Technologist & UI/UX Designer',
  description = 'Creative Technologist and UI/UX Designer specializing in digital experiences, modern design systems, and AI-powered solutions.',
  type = 'WebSite',
  image = '/og-image.jpg',
}: StructuredDataProps) {
  const pathname = usePathname();
  const url = `https://your-domain.com${pathname}`;
  
  // Person schema for the portfolio owner
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manikandan S',
    url: 'https://your-domain.com',
    image: 'https://your-domain.com/profile-pic.png',
    jobTitle: 'Creative Technologist & UI/UX Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Guru Nanak College',
    },
    sameAs: [
      'https://linkedin.com/in/username',
      'https://instagram.com/username',
      'https://dribbble.com/username',
    ],
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Manikandan S Portfolio',
    url: 'https://your-domain.com',
    description,
    author: {
      '@type': 'Person',
      name: 'Manikandan S',
    },
  };

  // WebPage schema for individual pages
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    image,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Manikandan S Portfolio',
      url: 'https://your-domain.com',
    },
    author: {
      '@type': 'Person',
      name: 'Manikandan S',
    },
  };

  // Select the appropriate schema based on type
  const schemaData = 
    type === 'Person' ? personSchema :
    type === 'WebPage' ? webPageSchema :
    websiteSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 