export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms.",
    longDescription: "A comprehensive admin dashboard for e-commerce platforms. Features include analytics, order management, customer profiles, and inventory tracking. Built with a focus on performance and responsive design.",
    image: "/profile-pic.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
  },
  {
    id: "project-2",
    title: "Mobile Weather App",
    description: "A weather application with location-based forecasting.",
    longDescription: "A weather application that provides real-time weather updates and forecasts based on user location. Features include daily and hourly forecasts, weather alerts, and customizable units.",
    image: "/profile-pic.png",
    tech: ["React Native", "Redux", "OpenWeather API"],
    demoUrl: "https://example.com/weather-app",
    githubUrl: "https://github.com/username/weather-app",
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "A modern portfolio website with animation effects.",
    longDescription: "A personal portfolio website designed with modern UI principles and smooth animations. Features a responsive layout, dark mode support, and project showcases.",
    image: "/profile-pic.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio",
  },
]; 

// Mock project data
const mockProjects = [
  {
    id: 1,
    slug: 'examiner-pro',
    title: 'ExaminerPro – COE Automation',
    subtitle: 'Exam Office Automation System',
    category: 'Web App',
    timeline: 'May 2024 - July 2024',
    role: 'UI/UX Designer & Frontend Developer',
    thumbnail: '/projects/examiner-pro.svg',
    heroImage: '/projects/examiner-pro-hero.svg',
    summary: 'ExaminerPro is a comprehensive web application designed to automate and streamline examination processes for educational institutions. The platform handles everything from exam scheduling and result processing to certificate generation.',
    contribution: 'I led the design and frontend development of the system, focusing on creating an intuitive interface that simplifies complex examination workflows. I worked closely with backend developers to ensure seamless integration of UI components with the database.',
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Figma', icon: 'figma' }
    ],
    tools: ['VSCode', 'GitHub', 'Postman', 'Notion'],
    projectType: 'Full Stack Web Application',
    problem: 'Educational institutions face significant challenges managing examination processes manually. Paper-based systems lead to errors, delays, and administrative overhead. Staff spend excessive time on tasks like scheduling, paper distribution, and result calculation that could be automated.',
    solution: 'ExaminerPro provides an end-to-end digital solution that automates the entire examination lifecycle. It features intuitive dashboards for administrators, faculty, and students, real-time updates, automated result processing, and secure certificate generation with blockchain verification.',
    features: [
      {
        title: 'Smart Scheduling',
        icon: 'calendar',
        description: 'AI-assisted exam scheduling that prevents conflicts and optimizes resource allocation.'
      },
      {
        title: 'Real-time Results',
        icon: 'bar-chart',
        description: 'Automated result processing with statistical analysis and performance tracking.'
      },
      {
        title: 'Certificate Generation',
        icon: 'award',
        description: 'Secure, tamper-proof certificate generation with digital signatures and verification.'
      },
      {
        title: 'Admin Dashboard',
        icon: 'layout-dashboard',
        description: 'Comprehensive dashboard for monitoring all examination activities and KPIs.'
      }
    ],
    images: [
      {
        url: '/projects/examiner-pro-1.svg',
        alt: 'Admin Dashboard',
        caption: 'The main dashboard provides a comprehensive overview of all examination activities.'
      },
      {
        url: '/projects/examiner-pro-2.svg',
        alt: 'Exam Scheduling Interface',
        caption: 'The scheduling interface uses AI to suggest optimal exam timetables.'
      },
      {
        url: '/projects/examiner-pro-3.svg',
        alt: 'Results Analysis',
        caption: 'Statistical visualization of examination results with insights.'
      },
      {
        url: '/projects/examiner-pro-4.svg',
        alt: 'Certificate Template',
        caption: 'Secure certificate design with QR verification.'
      }
    ],
    process: [
      {
        phase: 'Research',
        description: 'Conducted interviews with examination officers, faculty, and students to understand pain points in the current manual system.',
        artifacts: [
          { type: 'Research Report', url: '#' },
          { type: 'User Personas', url: '#' }
        ]
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity prototypes with a focus on simplifying complex workflows.',
        artifacts: [
          { type: 'Wireframes', url: '#' },
          { type: 'UI Kit', url: '#' }
        ]
      },
      {
        phase: 'Development',
        description: 'Implemented the frontend using React and Tailwind CSS, with responsive design and accessibility features.',
        artifacts: [
          { type: 'Component Library', url: '#' },
          { type: 'API Documentation', url: '#' }
        ]
      },
      {
        phase: 'Testing',
        description: 'Conducted usability testing with actual users and iteratively improved the interface based on feedback.',
        artifacts: [
          { type: 'Testing Report', url: '#' },
          { type: 'Feedback Analysis', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Time Saved',
        value: '85%',
        description: 'Reduction in time spent on examination administration'
      },
      {
        metric: 'Error Reduction',
        value: '95%',
        description: 'Decrease in result calculation errors'
      },
      {
        metric: 'User Satisfaction',
        value: '4.8/5',
        description: 'Average rating from administrators'
      },
      {
        metric: 'Adoption Rate',
        value: '100%',
        description: 'Full adoption across all departments'
      }
    ],
    links: [
      { type: 'GitHub', url: 'https://github.com/username/examiner-pro', icon: 'github' },
      { type: 'Figma', url: 'https://figma.com/file/examiner-pro', icon: 'figma' },
      { type: 'Live Demo', url: 'https://examiner-pro.example.com', icon: 'external-link' },
      { type: 'Case Study', url: '/docs/examiner-pro-case-study.pdf', icon: 'file-text' }
    ],
    type: 'UI/UX'
  },
  {
    id: 2,
    slug: 'event-website',
    title: 'Event Website with CMS',
    subtitle: 'Dynamic Event Management Platform',
    category: 'Website',
    timeline: 'March 2024 - April 2024',
    role: 'Full-Stack Developer',
    thumbnail: '/projects/event-website.svg',
    heroImage: '/projects/event-website-hero.svg',
    summary: 'A dynamic event website with a content management system that enables event organizers to create, manage, and promote events with ease.',
    contribution: 'I designed and developed the entire platform, including the frontend interface and the backend CMS. I focused on creating a user-friendly admin panel that requires minimal technical knowledge.',
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Sanity CMS', icon: 'sanity' },
      { name: 'Framer Motion', icon: 'framer' }
    ],
    tools: ['VS Code', 'GitHub', 'Figma', 'Vercel'],
    projectType: 'Website with CMS',
    problem: 'Event organizers often struggle with outdated, static websites that require technical expertise to update. This leads to delays in publishing event information and poor user experience for attendees.',
    solution: 'A modern, responsive website with an intuitive CMS that allows non-technical users to easily update content, manage registrations, and track attendance in real-time.',
    features: [
      {
        title: 'Dynamic Content',
        icon: 'layout-dashboard',
        description: 'Easy-to-update content management system for event details, speakers, and schedules.'
      },
      {
        title: 'Registration System',
        icon: 'calendar',
        description: 'Built-in registration with automated confirmation emails and attendee management.'
      },
      {
        title: 'Analytics Dashboard',
        icon: 'bar-chart',
        description: 'Real-time analytics for tracking registrations, page views, and engagement.'
      },
      {
        title: 'Mobile Responsive',
        icon: 'smartphone',
        description: 'Fully responsive design optimized for all devices and screen sizes.'
      }
    ],
    images: [
      {
        url: '/projects/event-website-1.svg',
        alt: 'Homepage Design',
        caption: 'Modern, engaging homepage with event countdown and featured speakers.'
      },
      {
        url: '/projects/event-website-2.svg',
        alt: 'Event Schedule',
        caption: 'Interactive schedule with filtering options and session details.'
      },
      {
        url: '/projects/event-website-3.svg',
        alt: 'Admin Dashboard',
        caption: 'Intuitive admin interface for content management.'
      },
      {
        url: '/projects/event-website-4.svg',
        alt: 'Mobile View',
        caption: 'Responsive design optimized for mobile devices.'
      }
    ],
    process: [
      {
        phase: 'Research',
        description: 'Analyzed user needs and competitive event websites to identify best practices and opportunities for innovation.',
        artifacts: [
          { type: 'Competitive Analysis', url: '#' },
          { type: 'User Interviews', url: '#' }
        ]
      },
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity designs with a focus on user experience and visual appeal.',
        artifacts: [
          { type: 'Wireframes', url: '#' },
          { type: 'UI Design', url: '#' }
        ]
      },
      {
        phase: 'Development',
        description: 'Built the frontend with Next.js and integrated Sanity CMS for content management.',
        artifacts: [
          { type: 'Frontend Code', url: '#' },
          { type: 'CMS Schema', url: '#' }
        ]
      },
      {
        phase: 'Testing',
        description: 'Conducted usability testing and performance optimization before launch.',
        artifacts: [
          { type: 'Test Results', url: '#' },
          { type: 'Performance Report', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Registration Increase',
        value: '40%',
        description: 'Higher registration rate compared to previous events'
      },
      {
        metric: 'Content Updates',
        value: '90%',
        description: 'Reduction in time required to update event content'
      },
      {
        metric: 'Mobile Traffic',
        value: '65%',
        description: 'Percentage of users accessing via mobile devices'
      },
      {
        metric: 'Client Satisfaction',
        value: '5/5',
        description: 'Perfect client satisfaction score'
      }
    ],
    links: [
      { type: 'GitHub', url: 'https://github.com/username/event-website', icon: 'github' },
      { type: 'Figma', url: 'https://figma.com/file/event-website', icon: 'figma' },
      { type: 'Live Demo', url: 'https://event-website.example.com', icon: 'external-link' },
      { type: 'Case Study', url: '/docs/event-website-case-study.pdf', icon: 'file-text' }
    ],
    type: 'Web Development'
  },
  {
    id: 3,
    slug: 'uiux-examiner',
    title: 'UI/UX for ExaminerPro',
    subtitle: 'Design System for Education Platform',
    category: 'Design',
    timeline: 'February 2024 - May 2024',
    role: 'UI/UX Designer',
    thumbnail: '/projects/uiux-examiner.svg',
    heroImage: '/projects/uiux-examiner-hero.svg',
    summary: 'Comprehensive design system and user experience for an examination management platform focused on accessibility and user-centered design.',
    contribution: 'I led the user research, created wireframes, designed the UI components, and developed a comprehensive design system for the platform.',
    techStack: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Adobe XD', icon: 'xd' },
      { name: 'Illustrator', icon: 'illustrator' },
      { name: 'Protopie', icon: 'protopie' }
    ],
    tools: ['Miro', 'UserTesting', 'Maze', 'Notion'],
    projectType: 'UX/UI Design System',
    problem: 'The existing examination system had a confusing interface with poor accessibility, leading to user frustration and errors in critical examination processes.',
    solution: 'A comprehensive design system with consistent components, clear information hierarchy, and accessibility features that simplify complex workflows for all users.',
    features: [
      {
        title: 'Component Library',
        icon: 'layers',
        description: 'Comprehensive library of reusable UI components with variants and documentation.'
      },
      {
        title: 'Accessibility Focus',
        icon: 'eye',
        description: 'WCAG 2.1 AA compliant design with keyboard navigation and screen reader support.'
      },
      {
        title: 'User Flows',
        icon: 'git-branch',
        description: 'Optimized user journeys for key examination management tasks.'
      },
      {
        title: 'Design Tokens',
        icon: 'palette',
        description: 'Systematic design tokens for colors, typography, spacing, and animations.'
      }
    ],
    images: [
      {
        url: '/projects/uiux-examiner-1.svg',
        alt: 'Design System Overview',
        caption: 'The comprehensive design system with color palettes, typography, and components.'
      },
      {
        url: '/projects/uiux-examiner-2.svg',
        alt: 'User Flow Diagrams',
        caption: 'Detailed user flow diagrams for key examination processes.'
      },
      {
        url: '/projects/uiux-examiner-3.svg',
        alt: 'Component Library',
        caption: 'The component library with variants and documentation.'
      },
      {
        url: '/projects/uiux-examiner-4.svg',
        alt: 'Accessibility Features',
        caption: 'Accessibility features and considerations in the design.'
      }
    ],
    process: [
      {
        phase: 'Research',
        description: 'Conducted user interviews, surveys, and competitive analysis to understand user needs and pain points.',
        artifacts: [
          { type: 'User Personas', url: '#' },
          { type: 'Research Report', url: '#' }
        ]
      },
      {
        phase: 'Design',
        description: 'Created wireframes, design system, and high-fidelity mockups based on research insights.',
        artifacts: [
          { type: 'Wireframes', url: '#' },
          { type: 'Design System', url: '#' }
        ]
      },
      {
        phase: 'Testing',
        description: 'Conducted usability testing with actual users and iteratively improved the designs based on feedback.',
        artifacts: [
          { type: 'Usability Test Results', url: '#' },
          { type: 'Iteration Documentation', url: '#' }
        ]
      },
      {
        phase: 'Handoff',
        description: 'Created detailed documentation and specifications for developers to implement the designs.',
        artifacts: [
          { type: 'Design Specs', url: '#' },
          { type: 'Implementation Guide', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Task Completion',
        value: '92%',
        description: 'Increase in successful task completion rate'
      },
      {
        metric: 'Time on Task',
        value: '60%',
        description: 'Reduction in time required to complete key tasks'
      },
      {
        metric: 'User Satisfaction',
        value: '4.7/5',
        description: 'Average user satisfaction rating in usability tests'
      },
      {
        metric: 'Accessibility Score',
        value: '98/100',
        description: 'Accessibility compliance score'
      }
    ],
    links: [
      { type: 'Figma', url: 'https://figma.com/file/uiux-examiner', icon: 'figma' },
      { type: 'Prototype', url: 'https://prototype.example.com/uiux-examiner', icon: 'external-link' },
      { type: 'Case Study', url: '/docs/uiux-examiner-case-study.pdf', icon: 'file-text' }
    ],
    type: 'UI/UX'
  },
  {
    id: 4,
    slug: 'portfolio-projects',
    title: 'Portfolio & Creative Projects',
    subtitle: 'Personal Creative Showcase',
    category: 'Portfolio',
    timeline: 'Ongoing',
    role: 'Designer & Developer',
    thumbnail: '/projects/portfolio-projects.svg',
    heroImage: '/projects/portfolio-projects-hero.svg',
    summary: 'Collection of personal and creative projects showcasing my skills in design, development, and creative technology.',
    contribution: 'I designed and developed each project, focusing on experimenting with new technologies and design approaches.',
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Three.js', icon: 'threejs' },
      { name: 'GSAP', icon: 'gsap' },
      { name: 'Tailwind CSS', icon: 'tailwind' }
    ],
    tools: ['Figma', 'VS Code', 'Blender', 'Adobe Creative Suite'],
    projectType: 'Creative Portfolio',
    problem: 'Traditional portfolios often fail to showcase the full range of a creative technologist\'s skills and the process behind their work.',
    solution: 'An interactive portfolio that demonstrates technical skills, design thinking, and creative process through immersive project showcases and case studies.',
    features: [
      {
        title: '3D Interactions',
        icon: 'cube',
        description: 'Interactive 3D elements that showcase technical skills and create engaging user experiences.'
      },
      {
        title: 'Case Studies',
        icon: 'file-text',
        description: 'In-depth case studies that highlight the process, challenges, and solutions for each project.'
      },
      {
        title: 'Experimental UI',
        icon: 'layout',
        description: 'Experimental UI patterns and micro-interactions that demonstrate creative thinking.'
      },
      {
        title: 'Performance Focus',
        icon: 'zap',
        description: 'Optimized performance with modern web technologies and best practices.'
      }
    ],
    images: [
      {
        url: '/projects/portfolio-projects-1.svg',
        alt: '3D Interactive Elements',
        caption: 'Interactive 3D elements that engage users and showcase technical skills.'
      },
      {
        url: '/projects/portfolio-projects-2.svg',
        alt: 'Case Study Layout',
        caption: 'Detailed case study layout that highlights the creative process.'
      },
      {
        url: '/projects/portfolio-projects-3.svg',
        alt: 'Experimental UI',
        caption: 'Experimental UI patterns and micro-interactions.'
      },
      {
        url: '/projects/portfolio-projects-4.svg',
        alt: 'Mobile Experience',
        caption: 'Responsive mobile experience with optimized performance.'
      }
    ],
    process: [
      {
        phase: 'Concept',
        description: 'Explored creative concepts and approaches for showcasing diverse projects in a cohesive portfolio.',
        artifacts: [
          { type: 'Concept Sketches', url: '#' },
          { type: 'Mood Boards', url: '#' }
        ]
      },
      {
        phase: 'Design',
        description: 'Created unique designs for each project showcase while maintaining a consistent overall aesthetic.',
        artifacts: [
          { type: 'Design Files', url: '#' },
          { type: 'Style Guide', url: '#' }
        ]
      },
      {
        phase: 'Development',
        description: 'Implemented the designs using modern web technologies with a focus on performance and interactivity.',
        artifacts: [
          { type: 'Code Repository', url: '#' },
          { type: 'Technical Documentation', url: '#' }
        ]
      },
      {
        phase: 'Iteration',
        description: 'Continuously refined and expanded the portfolio based on feedback and new project additions.',
        artifacts: [
          { type: 'Feedback Log', url: '#' },
          { type: 'Iteration History', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Projects Showcased',
        value: '12',
        description: 'Creative projects featured in the portfolio'
      },
      {
        metric: 'Engagement',
        value: '3:45',
        description: 'Average time visitors spend exploring the portfolio'
      },
      {
        metric: 'Conversion Rate',
        value: '15%',
        description: 'Visitors who reach out via contact form'
      },
      {
        metric: 'Performance Score',
        value: '95/100',
        description: 'Google Lighthouse performance score'
      }
    ],
    links: [
      { type: 'GitHub', url: 'https://github.com/username/portfolio', icon: 'github' },
      { type: 'Live Site', url: 'https://portfolio.example.com', icon: 'external-link' },
      { type: 'Process', url: '/docs/portfolio-process.pdf', icon: 'file-text' }
    ],
    type: 'Creative'
  }
];

// Function to get all projects
export const getAllProjects = () => {
  return mockProjects;
};

// Function to get a project by slug
export const getProjectBySlug = (slug: string) => {
  return mockProjects.find(project => project.slug === slug) || null;
};

// Function to get a project by ID
export const getProjectById = (id: number) => {
  return mockProjects.find(project => project.id === id) || null;
}; 