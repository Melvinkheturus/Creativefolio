'use client';

import JsonLd from './JsonLd';

export default function PersonSchema() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manikandan S',
    url: 'https://yourdomain.com',
    jobTitle: 'Web Developer, UI/UX Designer & Creative Technologist',
    sameAs: [
      'https://linkedin.com',
      'https://github.com',
      'https://dribbble.com',
      'https://instagram.com'
    ],
    knowsAbout: [
      'Web Development',
      'UI/UX Design',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'JavaScript'
    ],
    image: 'https://yourdomain.com/profile.png',
    description: 'Web Developer, UI/UX Designer, and Creative Technologist specializing in creating modern, interactive, and accessible digital experiences.'
  };

  return <JsonLd data={personData} />;
}