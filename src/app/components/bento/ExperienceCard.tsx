"use client";

import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";
import { BriefcaseIcon, TrophyIcon } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'achievement';
};

export default function ExperienceCard() {
  const experiences: Experience[] = [
    {
      title: "Web Development Intern",
      company: "SAIC",
      period: "May – June 2024",
      description: "Built and maintained websites using WordPress and no-code tools.",
      type: 'work'
    },
    {
      title: "General Secretary",
      company: "Dept. of BCA, Guru Nanak College",
      period: "2024–25",
      description: "Leading department initiatives and student activities.",
      type: 'achievement'
    },
    {
      title: "Event Head, Juno Fest",
      company: "College Event",
      period: "2024",
      description: "Led a 20-member team to conduct a college fest.",
      type: 'achievement'
    }
  ];

  return (
    <motion.div
      className="col-span-2 md:col-span-6 bg-gradient-to-br from-[#191919] to-[#2a2a2a] p-6 rounded-[30px] shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <SectionTitle 
        title="Experience & Achievements" 
        className="text-white"
        icon={<BriefcaseIcon size={24} />}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BriefcaseIcon size={16} className="text-[#7F5AF0]" />
            <h3 className="text-white font-medium">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {experiences
              .filter(exp => exp.type === 'work')
              .map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-6 border-l-2 border-[#7F5AF0]"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#7F5AF0] rounded-full" />
                  <h4 className="font-poppins font-medium text-lg text-white">{exp.title}</h4>
                  <p className="text-sm text-gray-300">{exp.company} • {exp.period}</p>
                  <p className="mt-1 text-sm text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <TrophyIcon size={16} className="text-[#FFB6C1]" />
            <h3 className="text-white font-medium">Achievements & Leadership</h3>
          </div>
          <div className="space-y-6">
            {experiences
              .filter(exp => exp.type === 'achievement')
              .map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-6 border-l-2 border-[#FFB6C1]"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#FFB6C1] rounded-full" />
                  <h4 className="font-poppins font-medium text-lg text-white">{exp.title}</h4>
                  <p className="text-sm text-gray-300">{exp.company} • {exp.period}</p>
                  <p className="mt-1 text-sm text-gray-400">{exp.description}</p>
                </motion.div>
              ))}
              
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-6 border-l-2 border-[#00F5D4]"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#00F5D4] rounded-full" />
              <h4 className="font-poppins font-medium text-lg text-white">AI Development Track</h4>
              <p className="mt-1 text-sm text-gray-400">
                Build and optimize real-world apps using Flutter, React, and more with AI tools. Skilled in translating designs to products via prompting, debugging, and iterative dev workflows.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 