'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectHero from '@/components/section/projectdetail/ProjectHero';
import ProjectTechStack from '@/components/section/projectdetail/ProjectTechStack';
import ProjectSummary from '@/components/section/projectdetail/ProjectSummary';
import ProjectProblemSolution from '@/components/section/projectdetail/ProjectProblemSolution';
import ProjectFeatures from '@/components/section/projectdetail/ProjectFeatures';
import ProjectProcess from '@/components/section/projectdetail/ProjectProcess';
import ProjectResults from '@/components/section/projectdetail/ProjectResults';
import ProjectLinks from '@/components/section/projectdetail/ProjectLinks';
import ProjectVisualShowcase from '@/components/section/projectdetail/ProjectVisualShowcase';
import MobileVisualShowcase from '@/components/section/projectdetail/MobileVisualShowcase';

// Sample project data - in a real app, this would come from a CMS or API
const projects = [
  {
    id: 1,
    title: 'Digital Experience Platform',
    subtitle: 'Interactive digital platform for enterprise solutions',
    category: 'Web Development',
    timeline: 'Jan 2023 - Jun 2023',
    role: 'Lead Developer & UX Designer',
    projectType: 'Enterprise Web Application',
    thumbnail: '/project1.jpg',
    heroImage: '/project1-hero.jpg',
    summary: 'A comprehensive digital platform with interactive elements and engaging user experiences. This project focused on creating a seamless interface that guides users through complex information in an intuitive way.',
    contribution: 'I led the development team and worked closely with stakeholders to define the product vision. My responsibilities included architecture planning, UX design, frontend implementation, and coordinating with backend developers.',
    problem: 'The client needed a way to present complex data sets to non-technical users in an intuitive and engaging way. The existing solution was outdated, difficult to navigate, and failed to highlight key insights effectively.',
    solution: 'We developed a modular platform with customizable dashboards, interactive visualizations, and a guided user experience. The solution incorporated real-time data updates, collaborative features, and responsive design to work across all devices.',
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Three.js', icon: 'threejs' },
      { name: 'D3.js', icon: 'd3' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' }
    ],
    tools: ['Figma', 'GitHub', 'Vercel', 'Storybook', 'Jest', 'Cypress'],
    visualShowcase: [
      { url: '/project1-1.jpg', alt: 'Dashboard View', caption: 'Main dashboard with customizable widgets' },
      { url: '/project1-2.jpg', alt: 'Interactive 3D Model', caption: 'Interactive 3D visualization component' },
      { url: '/project1-3.jpg', alt: 'Mobile View', caption: 'Responsive design for mobile devices' },
      { url: '/project1-4.jpg', alt: 'Data Visualization', caption: 'Complex data presented in an accessible format' }
    ],
    features: [
      { title: 'Real-time Updates', description: 'Live data synchronization across all connected devices', icon: 'bar-chart' },
      { title: 'Interactive 3D Models', description: 'Explorable 3D visualizations of complex structures', icon: 'layout-dashboard' },
      { title: 'User Collaboration', description: 'Multi-user editing and annotation capabilities', icon: 'users' },
      { title: 'Advanced Filtering', description: 'Contextual filtering system for large datasets', icon: 'filter' },
      { title: 'Custom Dashboards', description: 'User-configurable dashboard layouts', icon: 'settings' },
      { title: 'Export Capabilities', description: 'Multiple export formats for reports and visualizations', icon: 'download' }
    ],
    process: [
      { 
        phase: 'Research', 
        description: 'Conducted user interviews and competitive analysis to identify key requirements and opportunities.',
        artifacts: [
          { type: 'Research Report', url: '#' },
          { type: 'User Personas', url: '#' }
        ]
      },
      { 
        phase: 'Design', 
        description: 'Created wireframes, prototypes, and design systems focusing on intuitive data visualization.',
        artifacts: [
          { type: 'Wireframes', url: '#' },
          { type: 'UI Kit', url: '#' }
        ]
      },
      { 
        phase: 'Development', 
        description: 'Implemented frontend components, integrated APIs, and established data pipelines.',
        artifacts: [
          { type: 'GitHub Repository', url: '#' },
          { type: 'Technical Documentation', url: '#' }
        ]
      },
      { 
        phase: 'Testing', 
        description: 'Conducted usability testing, performance optimization, and accessibility audits.',
        artifacts: [
          { type: 'Test Results', url: '#' },
          { type: 'Performance Report', url: '#' }
        ]
      }
    ],
    results: [
      { metric: 'User Engagement', value: '+150%', description: 'Increase in average session duration' },
      { metric: 'Data Processing', value: '10x', description: 'Faster data processing and visualization' },
      { metric: 'User Adoption', value: '95%', description: 'Of target users actively using the platform' },
      { metric: 'Time Savings', value: '20hrs/wk', description: 'Average time saved per department' }
    ],
    links: [
      { type: 'Live Demo', url: '#', icon: 'external-link' },
      { type: 'Case Study', url: '#', icon: 'file-text' },
      { type: 'GitHub', url: '#', icon: 'github' },
      { type: 'Figma Prototype', url: '#', icon: 'figma' }
    ],
    mobileShowcase: [
      { url: '/project1-mobile-1.jpg', alt: 'Mobile Dashboard', caption: 'Dashboard optimized for mobile' },
      { url: '/project1-mobile-2.jpg', alt: 'Mobile Data View', caption: 'Data visualization on mobile' },
      { url: '/project1-mobile-3.jpg', alt: 'Mobile Navigation', caption: 'Intuitive mobile navigation' }
    ],
    slug: 'digital-experience-platform'
  },
  {
    id: 2,
    title: 'E-Commerce Redesign',
    subtitle: 'Complete UX overhaul for an established online retailer',
    category: 'UI/UX Design',
    timeline: 'Mar 2022 - Aug 2022',
    role: 'Lead UX Designer',
    projectType: 'E-Commerce',
    thumbnail: '/project2.jpg',
    heroImage: '/project2-hero.jpg',
    summary: 'A comprehensive redesign of an established e-commerce platform focusing on improving user experience, conversion rates, and mobile responsiveness.',
    contribution: 'I led the UX design process from research through implementation, working closely with stakeholders and developers to ensure the vision was executed properly.',
    problem: 'The client was experiencing high cart abandonment rates and poor mobile conversion. User testing revealed confusing navigation, an overly complex checkout process, and performance issues on mobile devices.',
    solution: 'We redesigned the entire user journey with a focus on simplicity and performance. Key improvements included streamlined navigation, a redesigned product page, one-page checkout, and a complete rebuild of the mobile experience.',
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
      { name: 'Shopify API', icon: 'shopify' },
      { name: 'Stripe', icon: 'stripe' }
    ],
    tools: ['Figma', 'Hotjar', 'Google Analytics', 'Optimizely', 'UserTesting'],
    slug: 'ecommerce-redesign'
  },
  {
    id: 3,
    title: 'Interactive Data Visualization',
    subtitle: 'Complex data made accessible through interactive visualizations',
    category: 'Data Visualization',
    timeline: 'Sep 2022 - Dec 2022',
    role: 'Data Visualization Developer',
    projectType: 'Data Dashboard',
    thumbnail: '/project3.jpg',
    heroImage: '/project3-hero.jpg',
    summary: 'An interactive dashboard that transforms complex datasets into intuitive visualizations, allowing users to explore trends and patterns easily.',
    contribution: 'I designed and developed all visualizations, working closely with data scientists to ensure accuracy while maintaining accessibility for non-technical users.',
    techStack: [
      { name: 'D3.js', icon: 'd3' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'SVG Animation', icon: 'svg' },
      { name: 'React', icon: 'react' },
      { name: 'Visx', icon: 'visx' }
    ],
    tools: ['Observable', 'Jupyter Notebooks', 'Tableau', 'Adobe Illustrator'],
    slug: 'interactive-data-visualization'
  },
  {
    id: 4,
    title: 'Mobile App Design',
    subtitle: 'Fitness tracking app with personalized coaching',
    category: 'Mobile Development',
    timeline: 'May 2022 - Oct 2022',
    role: 'UI/UX Designer & Frontend Developer',
    projectType: 'Mobile Application',
    thumbnail: '/project4.jpg',
    heroImage: '/project4-hero.jpg',
    summary: 'A comprehensive fitness tracking mobile app that provides personalized workout plans, progress tracking, and virtual coaching.',
    contribution: 'I led the UI/UX design process and implemented the frontend using React Native, ensuring a seamless and engaging user experience across iOS and Android.',
    techStack: [
      { name: 'React Native', icon: 'react-native' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Expo', icon: 'expo' }
    ],
    tools: ['Figma', 'Adobe XD', 'Lottie', 'App Center'],
    slug: 'mobile-app-design'
  },
  {
    id: 5,
    title: 'Brand Identity System',
    subtitle: 'Comprehensive brand identity for a tech startup',
    category: 'Branding',
    timeline: 'Feb 2022 - Apr 2022',
    role: 'Brand Designer',
    projectType: 'Brand Identity',
    thumbnail: '/project5.jpg',
    heroImage: '/project5-hero.jpg',
    summary: 'A complete brand identity system for a tech startup, including logo design, typography, color palette, and brand guidelines.',
    contribution: 'I developed the entire brand identity from concept to implementation, working directly with the founders to capture their vision and values.',
    techStack: [
      { name: 'Branding', icon: 'branding' },
      { name: 'Graphic Design', icon: 'graphic-design' },
      { name: 'Typography', icon: 'typography' }
    ],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Figma'],
    slug: 'brand-identity-system'
  },
  {
    id: 6,
    title: 'Interactive Installation',
    subtitle: 'Physical computing installation for museum exhibit',
    category: 'Interactive Design',
    timeline: 'Nov 2021 - Mar 2022',
    role: 'Creative Technologist',
    projectType: 'Physical Installation',
    thumbnail: '/project6.jpg',
    heroImage: '/project6-hero.jpg',
    summary: 'An interactive physical installation that combines digital elements with tangible interfaces to create an immersive museum experience.',
    contribution: 'I designed the interaction model and developed both the physical components and digital interfaces, collaborating with museum curators to align with exhibition themes.',
    techStack: [
      { name: 'Arduino', icon: 'arduino' },
      { name: 'Processing', icon: 'processing' },
      { name: 'Physical Computing', icon: 'physical-computing' },
      { name: 'WebGL', icon: 'webgl' }
    ],
    tools: ['Fusion 360', 'Eagle CAD', 'Laser Cutting', '3D Printing'],
    slug: 'interactive-installation'
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the current project based on the slug
  const currentProject = projects.find(project => project.slug === slug);
  
  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-8 flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            href="/" 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>
        
        <div className="space-y-6">
          {/* Hero Section */}
          <ProjectHero project={currentProject} />
          
          {/* Tech Stack Section */}
          <ProjectTechStack project={currentProject} />
          
          {/* Summary Section */}
          <ProjectSummary project={currentProject} />
          
          {/* Problem/Solution Section */}
          {currentProject.problem && currentProject.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectProblemSolution 
                title="Problem"
                content={currentProject.problem}
                color="#ff5e5e"
              />
              <ProjectProblemSolution 
                title="Solution"
                content={currentProject.solution}
                color="#4caf50"
              />
            </div>
          )}
          
          {/* Visual Showcase Section */}
          {currentProject.visualShowcase && (
            <ProjectVisualShowcase images={currentProject.visualShowcase} />
          )}
          
          {/* Features Section */}
          {currentProject.features && (
            <ProjectFeatures features={currentProject.features} />
          )}
          
          {/* Process Section */}
          {currentProject.process && (
            <ProjectProcess 
              process={currentProject.process} 
              type={currentProject.category} 
            />
          )}
          
          {/* Mobile Showcase Section */}
          {currentProject.mobileShowcase && (
            <MobileVisualShowcase 
              images={currentProject.mobileShowcase} 
              features={currentProject.features || []}
            />
          )}
          
          {/* Results Section */}
          {currentProject.results && (
            <ProjectResults results={currentProject.results} />
          )}
          
          {/* Links Section */}
          {currentProject.links && (
            <ProjectLinks links={currentProject.links} />
          )}
        </div>
      </div>
    </main>
  );
}