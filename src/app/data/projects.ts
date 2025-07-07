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
    subtitle: 'Salary Automation System',
    category: 'UI/UX Case Study',
    timeline: 'April – May 2025',
    role: 'UI/UX Designer',
    thumbnail: '/projects/examinerpro-cs.jpg',
    heroImage: '/projects/examinerpro-cs.jpg',
    summary: 'ExaminerPro is a UI/UX case study focused on solving inefficiencies in academic examiner workflows. It reimagines how Chief Examiners and COEs manage evaluation logs, staff payments, and report generation, turning spreadsheet-based manual tasks into seamless digital flows.',
    contribution: 'I led the end-to-end UI/UX design process: user flows, journey mapping, wireframes, accessibility validation, and creating a responsive design system optimized for desktop-first admin tools.',
    techStack: [
      { name: 'Figma', icon: 'figma' }
    ],
    tools: ['Figma', 'Tailwind UI references'],
    projectType: 'UI/UX Case Study',
    problem: 'Manual spreadsheet-based examiner salary tracking often leads to errors, lack of standardization, and inefficient admin effort.',
    solution: 'I designed ExaminerPro to streamline these workflows with clear UX flows, intuitive dashboards, validation-rich forms, and compliant auto-generated PDF exports.',
    features: [
      {
        title: 'Responsive Admin Dashboard',
        icon: 'layout-dashboard',
        description: 'Intuitive dashboard for monitoring all examination activities and salary calculations.'
      },
      {
        title: 'Add & Manage Examiner Data',
        icon: 'users',
        description: 'User-friendly interface for adding and managing examiner information.'
      },
      {
        title: 'Smart Form Validation',
        icon: 'check-circle',
        description: 'Robust form validation to prevent errors in data entry.'
      },
      {
        title: 'Salary Calculation UX',
        icon: 'calculator',
        description: 'Streamlined user experience for calculating examiner salaries.'
      },
      {
        title: 'Accessible Theme Switching',
        icon: 'moon',
        description: 'Support for light and dark themes with accessibility considerations.'
      },
      {
        title: 'PDF Preview with Download',
        icon: 'file-text',
        description: 'Preview and download functionality for generated PDF reports.'
      },
      {
        title: 'Breadcrumbs for Navigation',
        icon: 'navigation',
        description: 'Clear breadcrumb navigation for improved user orientation.'
      }
    ],
    images: [
      {
        url: '/projects/examiner-pro-1.svg',
        alt: 'Dashboard',
        caption: 'The main dashboard provides a comprehensive overview of all examination activities.'
      },
      {
        url: '/projects/examiner-pro-2.svg',
        alt: 'Add Examiner Form',
        caption: 'User-friendly form for adding new examiners with validation.'
      },
      {
        url: '/projects/examiner-pro-3.svg',
        alt: 'Staff Entry Grid',
        caption: 'Grid layout for managing staff entries and evaluations.'
      },
      {
        url: '/projects/examiner-pro-4.svg',
        alt: 'Calculator Screen',
        caption: 'Intuitive interface for salary calculations.'
      },
      {
        url: '/projects/examiner-pro-5.svg',
        alt: 'PDF Preview Interface',
        caption: 'Preview interface for generated PDF reports.'
      },
      {
        url: '/projects/examiner-pro-6.svg',
        alt: 'Theme Customization',
        caption: 'Theme customization options for accessibility.'
      }
    ],
    process: [
      {
        phase: 'UX Research',
        description: 'Identified 3 primary user roles and pain points in the current workflow.',
        artifacts: [
          { type: 'User Personas', url: '#' },
          { type: 'Research Report', url: '#' }
        ]
      },
      {
        phase: 'User Persona',
        description: 'Created detailed user persona for Dr. Manikandan S, Chief Examiner.',
        artifacts: [
          { type: 'User Persona', url: '#' }
        ]
      },
      {
        phase: 'Journey Mapping',
        description: 'Developed comprehensive journey map from login to report download.',
        artifacts: [
          { type: 'Journey Map', url: '#' }
        ]
      },
      {
        phase: 'Wireframing',
        description: 'Created low-fidelity wireframes and transformed them into high-fidelity designs.',
        artifacts: [
          { type: 'Wireframes', url: '#' },
          { type: 'High-Fidelity Designs', url: '#' }
        ]
      },
      {
        phase: 'Accessibility',
        description: 'Implemented WCAG AA+ contrast, screen reader support, and keyboard navigation.',
        artifacts: [
          { type: 'Accessibility Audit', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Timeline',
        value: '4 weeks',
        description: 'Total project duration'
      },
      {
        metric: 'Report Creation Time',
        value: '90%',
        description: 'Reduction in report creation time (simulated test)'
      },
      {
        metric: 'WCAG Compliance',
        value: 'AA+',
        description: 'Accessibility compliance level'
      },
      {
        metric: 'User Satisfaction',
        value: '4.8/5',
        description: 'Average rating in usability tests'
      }
    ],
    links: [
      { type: 'Figma', url: '#', icon: 'figma' },
      { type: 'PDF Case Study', url: '#', icon: 'file-text' },
      { type: 'Behance', url: '#', icon: 'behance' }
    ],
    type: 'UI/UX'
  },
  {
    id: 2,
    slug: 'event-website',
    title: 'ExaminerPro – Full-Stack Web App',
    subtitle: 'COE Automation Web App',
    category: 'Web App',
    timeline: 'April – May 2025',
    role: 'Full Stack Developer',
    thumbnail: '/projects/examinerpro-dev.jpg',
    heroImage: '/projects/examinerpro-dev.jpg',
    summary: 'ExaminerPro is a full-stack web application designed to eliminate human errors in examiner evaluation and salary reporting. Built with Supabase, React, and @react-pdf/renderer, it enables admin teams to manage logs, calculate salaries, and export compliant reports.',
    contribution: 'I developed the frontend, backend, and PDF export logic. This includes form management, salary calculation engine, PDF generation, Supabase integration, and breadcrumb routing.',
    techStack: [
      { name: 'React.js', icon: 'react' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: '@react-pdf/renderer', icon: 'file-text' }
    ],
    tools: ['VS Code', 'Supabase Studio'],
    projectType: 'Full-Stack Web App',
    problem: 'Manual data entry and salary calculations led to inconsistent formats, miscommunication, and time-consuming efforts across departments.',
    solution: 'ExaminerPro replaced Excel sheets with a structured database, streamlined PDF reports, and a clean dashboard with reusable components and secure login.',
    features: [
      {
        title: 'Secure Login System',
        icon: 'lock',
        description: 'OAuth + Email/Password authentication for secure access.'
      },
      {
        title: 'Examiner Profile Creation',
        icon: 'user-plus',
        description: 'Comprehensive interface for creating and managing examiner profiles.'
      },
      {
        title: 'Daily Staff Evaluation Logging',
        icon: 'clipboard',
        description: 'Efficient system for logging daily staff evaluations.'
      },
      {
        title: 'Auto Salary Calculation',
        icon: 'calculator',
        description: 'Automated salary calculation based on evaluation data.'
      },
      {
        title: 'PDF Report Generator',
        icon: 'file-text',
        description: 'Generate 4 different types of professional PDF reports.'
      },
      {
        title: 'History Archive + Filters',
        icon: 'archive',
        description: 'Comprehensive archive with customizable filters.'
      },
      {
        title: 'Theme Settings',
        icon: 'settings',
        description: 'Personalized UI settings and theme preferences.'
      }
    ],
    images: [
      {
        url: '/projects/examiner-pro-1.svg',
        alt: 'React UI Screens',
        caption: 'Form and dashboard interfaces built with React.'
      },
      {
        url: '/projects/examiner-pro-2.svg',
        alt: 'Salary Calculator Logic',
        caption: 'The core salary calculation logic implementation.'
      },
      {
        url: '/projects/examiner-pro-3.svg',
        alt: 'Supabase DB Schema',
        caption: 'Database schema design in Supabase.'
      },
      {
        url: '/projects/examiner-pro-4.svg',
        alt: 'PDF Output Preview',
        caption: 'Preview of generated PDF reports.'
      },
      {
        url: '/projects/examiner-pro-5.svg',
        alt: 'Architecture Flow Diagram',
        caption: 'System architecture and data flow diagram.'
      }
    ],
    process: [
      {
        phase: 'Architecture Design',
        description: 'Created modular architecture layout with Supabase as Backend-as-a-Service.',
        artifacts: [
          { type: 'Architecture Diagram', url: '#' }
        ]
      },
      {
        phase: 'API Integration',
        description: 'Implemented real-time Supabase fetch and filter queries.',
        artifacts: [
          { type: 'API Documentation', url: '#' }
        ]
      },
      {
        phase: 'Database Design',
        description: 'Designed relational schema with tables for Examiners, Staff Logs, and Reports.',
        artifacts: [
          { type: 'DB Schema', url: '#' }
        ]
      },
      {
        phase: 'Frontend Development',
        description: 'Built responsive React components with Tailwind CSS.',
        artifacts: [
          { type: 'Component Library', url: '#' }
        ]
      },
      {
        phase: 'PDF Generation',
        description: 'Implemented PDF generation with custom React components.',
        artifacts: [
          { type: 'PDF Templates', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Duration',
        value: '4-5 weeks',
        description: 'Total development time'
      },
      {
        metric: 'Report Export Speed',
        value: '90%',
        description: 'Faster report export compared to manual process'
      },
      {
        metric: 'PDF Format Consistency',
        value: '100%',
        description: 'Consistency in generated PDF formats'
      },
      {
        metric: 'User Acceptance',
        value: 'High',
        description: 'Admin satisfaction in User Acceptance Testing'
      }
    ],
    links: [
      { type: 'Live Website', url: '#', icon: 'external-link' },
      { type: 'GitHub', url: '#', icon: 'github' },
      { type: 'Tech Breakdown', url: '#', icon: 'file-text' },
      { type: 'PDF Samples', url: '#', icon: 'file' }
    ],
    type: 'Web Development'
  },
  {
    id: 3,
    slug: 'pixeldraft',
    title: 'PixelDraft Agency Website',
    subtitle: 'Creative Agency Website',
    category: 'Web Design',
    timeline: 'June – July 2025',
    role: 'Web Designer',
    thumbnail: '/projects/thumbnail/pixeldraft.jpg',
    heroImage: '/projects/thumbnail/pixeldraft.jpg',
    summary: 'A modern website for a creative digital agency showcasing their services and portfolio.',
    contribution: 'I designed and developed a responsive website with interactive elements and optimized performance.',
    techStack: [
      { name: 'Next.js', icon: 'next' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' }
    ],
    tools: ['Figma', 'VS Code'],
    projectType: 'Web Design',
    problem: 'The agency needed a professional online presence that reflected their creative capabilities and attracted potential clients.',
    solution: 'I created a dynamic and visually engaging website with smooth animations, responsive design, and optimized loading times.',
    features: [
      {
        title: 'Responsive Design',
        icon: 'smartphone',
        description: 'Fully responsive layout that works on all devices.'
      },
      {
        title: 'Interactive Elements',
        icon: 'mouse-pointer',
        description: 'Engaging interactive elements that enhance user experience.'
      },
      {
        title: 'Portfolio Showcase',
        icon: 'image',
        description: 'Dynamic portfolio section to showcase client work.'
      }
    ],
    images: [
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-06 174451.png',
        alt: 'Agency Homepage',
        caption: 'Modern homepage design with hero section and service highlights.'
      },
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-07 142912.png',
        alt: 'Services Page',
        caption: 'Service showcase with interactive cards and descriptions.'
      },
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-07 142949.png',
        alt: 'About Page',
        caption: 'Team showcase and company information layout.'
      },
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-07 143010.png',
        alt: 'Portfolio Grid',
        caption: 'Portfolio project grid with filtering options.'
      },
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-07 143555.png',
        alt: 'Contact Page',
        caption: 'Contact form with location map and social media links.'
      },
      {
        url: '/projects/visual showcase/project3/Screenshot 2025-07-07 143639.png',
        alt: 'Mobile Responsive View',
        caption: 'Mobile-optimized responsive layout.'
      }
    ],
    process: [
      {
        phase: 'Design',
        description: 'Created wireframes and high-fidelity designs.',
        artifacts: []
      },
      {
        phase: 'Development',
        description: 'Built the website using Next.js and Tailwind CSS.',
        artifacts: []
      },
      {
        phase: 'Testing',
        description: 'Conducted performance and usability testing.',
        artifacts: []
      }
    ],
    results: [
      {
        metric: 'Timeline',
        value: '6 weeks',
        description: 'Total project duration'
      },
      {
        metric: 'Performance',
        value: '95/100',
        description: 'Lighthouse performance score'
      }
    ],
    links: [
      { type: 'Website', url: '#', icon: 'globe' },
      { type: 'GitHub', url: '#', icon: 'github' }
    ],
    type: 'Web'
  },
  {
    id: 4,
    slug: 'rr-miracle-events',
    title: 'RR Miracle Events',
    subtitle: 'Event Management Website',
    category: 'Event Website',
    timeline: 'August – September 2025',
    role: 'Web Developer',
    thumbnail: '/projects/thumbnail/rr-miracle-events.jpg',
    heroImage: '/projects/thumbnail/rr-miracle-events.jpg',
    summary: 'A comprehensive website for an event management company to showcase their services and allow clients to book events.',
    contribution: 'I developed a responsive website with booking functionality, gallery integration, and testimonial management.',
    techStack: [
      { name: 'React', icon: 'react' },
      { name: 'CSS', icon: 'css' },
      { name: 'Firebase', icon: 'firebase' }
    ],
    tools: ['Figma', 'VS Code', 'Firebase Console'],
    projectType: 'Event Website',
    problem: 'The event company needed a platform to showcase their past events and allow potential clients to easily request quotes.',
    solution: 'I built a feature-rich website with a user-friendly interface for event browsing, booking, and client testimonials.',
    features: [
      {
        title: 'Event Gallery',
        icon: 'camera',
        description: 'Showcase of past events with filtering capabilities.'
      },
      {
        title: 'Booking System',
        icon: 'calendar',
        description: 'Integrated booking form with date selection and service options.'
      },
      {
        title: 'Testimonials',
        icon: 'message-circle',
        description: 'Client testimonials with star ratings and feedback.'
      }
    ],
    images: [
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173544.png',
        alt: 'Event Homepage',
        caption: 'Landing page with featured events and hero banner.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173638.png',
        alt: 'Services Section',
        caption: 'Event services with pricing and package options.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173656.png',
        alt: 'Event Gallery',
        caption: 'Gallery of past events with category filters.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173726.png',
        alt: 'Testimonials',
        caption: 'Client testimonials with ratings and feedback.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173747.png',
        alt: 'Booking Form',
        caption: 'Event booking form with date selection and service options.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173804.png',
        alt: 'Contact Section',
        caption: 'Contact information with integrated messaging options.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173833.png',
        alt: 'FAQ Section',
        caption: 'Frequently asked questions in accordion style.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 173937.png',
        alt: 'Mobile View',
        caption: 'Responsive mobile design for event website.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 174222.png',
        alt: 'Admin Dashboard',
        caption: 'Admin panel for event management and booking control.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 174324.png',
        alt: 'Theme Options',
        caption: 'Color theme customization options for the site.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 174816.png',
        alt: 'Event Details',
        caption: 'Detailed event page with booking options.'
      },
      {
        url: '/projects/visual showcase/project4/Screenshot 2025-06-07 174900.png',
        alt: 'Analytics Dashboard',
        caption: 'Performance metrics and booking analytics.'
      }
    ],
    process: [
      {
        phase: 'Requirements',
        description: 'Gathered client requirements and analyzed user needs.',
        artifacts: []
      },
      {
        phase: 'Development',
        description: 'Built the website using React and integrated Firebase for backend functionality.',
        artifacts: []
      },
      {
        phase: 'Launch',
        description: 'Deployed the website and trained the client on content management.',
        artifacts: []
      }
    ],
    results: [
      {
        metric: 'Timeline',
        value: '8 weeks',
        description: 'Total project duration'
      },
      {
        metric: 'Booking Increase',
        value: '35%',
        description: 'Increase in event bookings after website launch'
      }
    ],
    links: [
      { type: 'Website', url: '#', icon: 'globe' },
      { type: 'Case Study', url: '#', icon: 'file-text' }
    ],
    type: 'Web'
  },
  {
    id: 5,
    slug: 'unisync',
    title: 'UniSync – Unified College Communication App',
    subtitle: 'One app. All roles. Total clarity in campus communication.',
    category: 'Mobile UX',
    timeline: 'March – April 2025',
    role: 'UI/UX Designer',
    thumbnail: '/projects/thumbnail/Unisync thumbnail.mp4',
    heroImage: '/projects/thumbnail/Unisync thumbnail.mp4',
    summary: 'UniSync is a mobile-first communication platform tailored for educational institutions. It consolidates all key interactions—announcements, leave requests, emergency alerts, placements, and event updates—into a single app with role-based access for Students, Staff, and Admins.',
    contribution: 'I led the UX research, designed high-fidelity UI screens, developed the design system, and mapped the entire product flow—resulting in a streamlined mobile experience adaptable for institutional scale.',
    techStack: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Figma', icon: 'figma' }
    ],
    tools: ['Figma', 'Lucide Icons', 'Material Icons'],
    projectType: 'Mobile UX Case Study',
    problem: 'Campus communications are chaotic—lost in WhatsApp, delayed by email, and scattered across physical notices. No centralized system exists to streamline leave, alerts, events, or student engagement.',
    solution: 'UniSync replaces these disconnected channels with a role-based app featuring real-time announcements, leave tracking, personalized dashboards, and emergency broadcast tools—all built with accessibility and minimalism in mind.',
    features: [
      {
        title: 'Role-Based Dashboards',
        icon: 'layout-dashboard',
        description: 'Personalized dashboards for Students, Staff, and Admin roles.'
      },
      {
        title: 'Real-Time Alerts',
        icon: 'bell',
        description: 'Instant notifications for announcements and updates.'
      },
      {
        title: 'Leave Management',
        icon: 'calendar',
        description: 'Digital leave application and approval workflow.'
      },
      {
        title: 'Event & Placement Board',
        icon: 'calendar-clock',
        description: 'Event management with RSVP functionality.'
      },
      {
        title: 'Emergency Alerts',
        icon: 'alert-triangle',
        description: 'Multi-channel emergency broadcast system.'
      },
      {
        title: 'Directory & Profiles',
        icon: 'users',
        description: 'Comprehensive student and staff directory.'
      },
      {
        title: 'Feedback System',
        icon: 'message-square',
        description: 'Structured complaints and feedback tracking.'
      },
      {
        title: 'Admin Analytics',
        icon: 'bar-chart',
        description: 'Detailed analytics and reporting dashboard.'
      }
    ],
    images: [
      {
        url: '/projects/unisync-1.svg',
        alt: 'Onboarding & Login Screens',
        caption: 'User onboarding flow with role selection.'
      },
      {
        url: '/projects/unisync-2.svg',
        alt: 'Role-Based Dashboards',
        caption: 'Personalized dashboards for different user roles.'
      },
      {
        url: '/projects/unisync-3.svg',
        alt: 'Leave Application Flow',
        caption: 'Digital leave request and approval system.'
      },
      {
        url: '/projects/unisync-4.svg',
        alt: 'Announcements Interface',
        caption: 'Real-time announcement and alert system.'
      },
      {
        url: '/projects/unisync-5.svg',
        alt: 'Admin Controls',
        caption: 'Administrative dashboard and controls.'
      }
    ],
    process: [
      {
        phase: 'User Research',
        description: 'Conducted interviews with 5 Students, 2 Staff, and 1 Admin to understand communication pain points.',
        artifacts: [
          { type: 'User Personas', url: '#' },
          { type: 'Research Insights', url: '#' }
        ]
      },
      {
        phase: 'Design System',
        description: 'Created a comprehensive design system with typography, color palette, and component library.',
        artifacts: [
          { type: 'Style Guide', url: '#' },
          { type: 'Component Library', url: '#' }
        ]
      },
      {
        phase: 'User Flows',
        description: 'Mapped detailed user journeys for key features like leave requests and announcements.',
        artifacts: [
          { type: 'User Flows', url: '#' },
          { type: 'Journey Maps', url: '#' }
        ]
      },
      {
        phase: 'UI Design',
        description: 'Designed high-fidelity screens with focus on accessibility and usability.',
        artifacts: [
          { type: 'UI Screens', url: '#' },
          { type: 'Interaction Specs', url: '#' }
        ]
      }
    ],
    results: [
      {
        metric: 'Task Completion',
        value: '80%',
        description: 'Reduction in steps for leave application'
      },
      {
        metric: 'User Success',
        value: '100%',
        description: 'Success rate in locating announcements'
      },
      {
        metric: 'User Preference',
        value: '90%',
        description: 'Preferred over existing communication channels'
      },
      {
        metric: 'Development',
        value: '3 weeks',
        description: 'Total design and prototyping time'
      }
    ],
    links: [
      { type: 'Figma', url: 'https://www.figma.com/design/7vjT18jEt1Yu9KemAklCjI', icon: 'figma' },
      { type: 'Case Study', url: '#', icon: 'file-text' },
      { type: 'Prototype', url: '#', icon: 'play' }
    ],
    type: 'UI/UX'
  }
];

// Function to get all projects
export const getAllProjects = () => {
  return mockProjects;
};

// Function to get a project by slug
export const getProjectBySlug = (slug: string) => {
  return mockProjects.find(project => project.slug === slug) || mockProjects[0];
};

// Function to get a project by ID
export const getProjectById = (id: number) => {
  return mockProjects.find(project => project.id === id) || null;
}; 