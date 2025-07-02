"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Cpu } from "lucide-react";

export default function StoryCard() {
  return (
    <motion.div
      className="bento-card h-full p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="card-title">
          <span className="text-white">The Story </span>
          <span className="gradient-text">So Far</span>
        </h3>
        
        <div className="space-y-5 mt-2">
          <TimelineItem
            icon={<Briefcase size={16} />}
            title="Internship (SAIC)"
            date="May–June 2024"
            description="Built & maintained websites using WordPress and no-code tools."
          />
          
          <TimelineItem
            icon={<Users size={16} />}
            title="Leadership"
            items={[
              "General Secretary, GNC (2024–2025)",
              "Event Head – Juno Fest (20+ member team)"
            ]}
          />
          
          <TimelineItem
            icon={<Cpu size={16} />}
            title="AI Development"
            items={[
              "Built 4 projects using AI-enhanced workflows",
              "Skilled in debugging, translating designs into products via prompting"
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ icon, title, date, description, items }) {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ x: 3 }}
    >
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1D1D1D] border border-[#A56CFF]/30">
            <span className="gradient-text">{icon}</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center">
            <h4 className="text-white text-sm font-medium">{title}</h4>
            {date && <span className="text-gray-500 text-xs ml-2">• {date}</span>}
          </div>
          
          {description && (
            <p className="text-gray-300 text-sm mt-1">{description}</p>
          )}
          
          {items && (
            <ul className="text-gray-300 text-sm mt-1 space-y-1 list-disc list-inside">
              {items.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="ml-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
} 