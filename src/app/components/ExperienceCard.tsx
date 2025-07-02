"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { BriefcaseIcon } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard() {
  const experiences: Experience[] = [
    {
      title: "Senior Front-end Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Lead the development of responsive web applications using React and Next.js.",
    },
    {
      title: "UI Designer",
      company: "Design Studio",
      period: "2018 - 2020",
      description: "Created user interfaces for mobile and web applications.",
    },
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-2" glassy={true}>
      <div className="flex items-center gap-2 mb-5">
        <BriefcaseIcon className="text-[#7F5AF0]" size={24} />
        <h3 className="text-xl font-poppins font-semibold">Experience</h3>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-6 border-l-2 border-[#7F5AF0]"
          >
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-[#7F5AF0] rounded-full" />
            <h4 className="font-poppins font-medium text-lg">{exp.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} • {exp.period}</p>
            <p className="mt-1 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
} 