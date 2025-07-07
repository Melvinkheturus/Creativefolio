export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  results: {
    title: string;
    value: string;
    prefix?: string;
    suffix?: string;
  }[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "creativefolio",
    title: "Creativefolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    coverImage: "/projects/creativefolio/cover.png",
    category: "Web Development",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      {
        title: "Modern Design",
        description: "Clean and modern UI with smooth animations and transitions",
        icon: "✨"
      },
      {
        title: "Responsive",
        description: "Fully responsive design that works on all devices",
        icon: "📱"
      },
      {
        title: "Performance",
        description: "Optimized for speed and performance",
        icon: "⚡"
      }
    ],
    results: [
      {
        title: "Performance Score",
        value: "98",
        suffix: "%"
      },
      {
        title: "Build Time",
        value: "2.5",
        suffix: "s"
      },
      {
        title: "Size",
        value: "150",
        suffix: "KB"
      }
    ],
    links: {
      github: "https://github.com/yourusername/creativefolio",
      live: "https://creativefolio.vercel.app"
    }
  }
]; 