"use client";

import { motion } from "framer-motion";
import { FiPenTool, FiCode, FiLayout, FiMonitor, FiTool } from "react-icons/fi";
import { SiFigma, SiCanva, SiAdobeillustrator, SiAdobephotoshop, SiFramer, SiWordpress, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiVite, SiFlutter, SiPython, SiNodedotjs, SiFirebase, SiSupabase, SiSanity, SiVercel, SiVsco, SiGithub, SiNotion } from "react-icons/si";
import { FaLaptopCode, FaRobot, FaCode, FaDatabase, FaJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

const SkillItem = ({ icon, name }: SkillItemProps) => (
  <motion.div 
    whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
    className="flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm transition-colors"
  >
    <span className="mr-1">{icon}</span> {name}
  </motion.div>
);

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { icon: React.ReactNode; name: string }[];
  delay?: number;
}

const SkillCategory = ({ title, icon, skills, delay = 0 }: SkillCategoryProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="mb-6"
  >
    <h3 className="inline-flex items-center px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full mb-4">
      <span className="mr-2">{icon}</span> {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillItem key={index} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  // Design & Prototyping skills
  const designSkills = [
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiFramer />, name: "Framer" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <FaLaptopCode />, name: "Spline" },
  ];

  // AI & No-Code Tools
  const aiNoCodeSkills = [
    { icon: <FaCode />, name: "Cursor AI" },
    { icon: <SiFramer />, name: "Framer (AI-assisted)" },
    { icon: <FaLaptopCode />, name: "FlutterFlow" },
    { icon: <SiWordpress />, name: "WordPress" },
  ];

  // Frontend Development
  const frontendSkills = [
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaJs />, name: "GSAP" },
  ];

  // Cross-Platform Development
  const crossPlatformSkills = [
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiPython />, name: "Python" },
  ];

  // Backend & Databases
  const backendSkills = [
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiSanity />, name: "Sanity" },
  ];

  // Platforms & Tools
  const platformsTools = [
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiNotion />, name: "Notion" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Skills
        </motion.h2>
        
        <div className="">
          <SkillCategory 
            title="Design & Prototyping" 
            icon={<FiPenTool />} 
            skills={designSkills} 
            delay={0.1} 
          />
          
          <SkillCategory 
            title="AI & No-Code Tools" 
            icon={<FaRobot />} 
            skills={aiNoCodeSkills} 
            delay={0.2} 
          />
          
          <SkillCategory 
            title="Frontend Development" 
            icon={<FiCode />} 
            skills={frontendSkills} 
            delay={0.3} 
          />
          
          <SkillCategory 
            title="Cross-Platform Development" 
            icon={<FaLaptopCode />} 
            skills={crossPlatformSkills} 
            delay={0.4} 
          />
          
          <SkillCategory 
            title="Backend & Databases" 
            icon={<FaDatabase />} 
            skills={backendSkills} 
            delay={0.5} 
          />
          
          <SkillCategory 
            title="Platforms & Tools" 
            icon={<FiTool />} 
            skills={platformsTools} 
            delay={0.6} 
          />
        </div>
      </div>
    </section>
  );
}