export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  slug: string;
  description: string;
  technologies: string[];
  features?: string[];
  problem?: string;
  solution?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    thumbnail: "/images/projects/portfolio.jpg",
    category: "Web Development",
    slug: "portfolio",
    description: "Personal portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive design", "Dark mode", "Animations", "Project showcase"],
    problem: "Needed a modern portfolio to showcase my work and skills",
    solution: "Created a clean, responsive portfolio with Next.js and Tailwind CSS",
    link: "https://portfolio.example.com",
    github: "https://github.com/username/portfolio"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    thumbnail: "/images/projects/ecommerce.jpg",
    category: "Full Stack",
    slug: "ecommerce",
    description: "Full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    features: ["Product catalog", "Shopping cart", "User authentication", "Payment processing"],
    problem: "Building a scalable e-commerce platform with modern technologies",
    solution: "Implemented a full-stack solution with React frontend and Node.js backend",
    link: "https://ecommerce.example.com",
    github: "https://github.com/username/ecommerce"
  },
  {
    id: 3,
    title: "Dashboard UI",
    thumbnail: "/images/projects/dashboard.jpg",
    category: "UI/UX Design",
    slug: "dashboard",
    description: "Admin dashboard with data visualization",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    features: ["Interactive charts", "Real-time data", "Responsive layout", "Dark/light theme"],
    problem: "Creating an intuitive dashboard for data visualization",
    solution: "Designed a clean, user-friendly interface with interactive charts",
    link: "https://dashboard.example.com",
    github: "https://github.com/username/dashboard"
  },
  {
    id: 4,
    title: "Mobile App Redesign",
    thumbnail: "/images/projects/mobile-app.jpg",
    category: "Mobile Development",
    slug: "mobile-app",
    description: "Redesign of an existing mobile application for improved UX",
    technologies: ["React Native", "Figma", "TypeScript", "Firebase"],
    features: ["Modern UI", "Improved navigation", "Performance optimization", "Offline support"],
    problem: "Outdated UI and poor user experience in an existing mobile app",
    solution: "Completely redesigned the app with a focus on modern UI/UX principles",
    link: "https://mobileapp.example.com",
    github: "https://github.com/username/mobileapp"
  },
  {
    id: 5,
    title: "AI Chatbot Integration",
    thumbnail: "/images/projects/chatbot.jpg",
    category: "AI/ML",
    slug: "chatbot",
    description: "Integration of an AI-powered chatbot into a customer service platform",
    technologies: ["Python", "TensorFlow", "Dialogflow", "React"],
    features: ["Natural language processing", "Automated responses", "Sentiment analysis", "Seamless integration"],
    problem: "Automating customer support to reduce response times",
    solution: "Integrated an AI chatbot to handle common queries and provide instant support",
    link: "https://chatbot.example.com",
    github: "https://github.com/username/chatbot"
  },
  {
    id: 6,
    title: "Data Visualization Tool",
    thumbnail: "/images/projects/data-viz.jpg",
    category: "Data Science",
    slug: "data-viz",
    description: "Interactive web-based tool for visualizing complex datasets",
    technologies: ["D3.js", "React", "Python (Flask)", "PostgreSQL"],
    features: ["Dynamic charts", "Customizable dashboards", "Data filtering", "Export options"],
    problem: "Making large datasets understandable and accessible to non-technical users",
    solution: "Developed an interactive data visualization tool with D3.js and React",
    link: "https://dataviz.example.com",
    github: "https://github.com/username/dataviz"
  },
  {
    id: 7,
    title: "Blockchain Voting System",
    thumbnail: "/images/projects/blockchain.jpg",
    category: "Blockchain",
    slug: "blockchain-voting",
    description: "Secure and transparent voting system built on blockchain technology",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    features: ["Immutable records", "Decentralized", "Anonymous voting", "Real-time results"],
    problem: "Ensuring transparency and security in voting processes",
    solution: "Created a blockchain-based voting system to provide verifiable and secure elections",
    link: "https://blockchainvoting.example.com",
    github: "https://github.com/username/blockchainvoting"
  },
  {
    id: 8,
    title: "IoT Smart Home Hub",
    thumbnail: "/images/projects/iot.jpg",
    category: "IoT",
    slug: "iot-hub",
    description: "Centralized hub for managing smart home devices",
    technologies: ["Node.js", "Raspberry Pi", "MQTT", "React Native"],
    features: ["Device control", "Automation rules", "Real-time monitoring", "Voice assistant integration"],
    problem: "Managing various smart home devices from a single interface",
    solution: "Developed an IoT smart home hub for seamless control and automation of devices",
    link: "https://iothub.example.com",
    github: "https://github.com/username/iothub"
  }
];