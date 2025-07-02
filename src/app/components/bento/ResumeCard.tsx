"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, Download, Briefcase, Users } from "lucide-react";

export default function ResumeCard() {
  return (
    <motion.div
      className="bento-card h-full p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
    >
      <div className="flex flex-col h-full">
        <motion.a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center space-x-3 mb-5 p-3 bg-[#1D1D1D] rounded-xl hover:bg-[#252525] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#252525] group-hover:bg-[#2a2a2a]">
            <FileText className="text-[#A56CFF] group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-white text-sm font-medium">Download Resume</h4>
            <p className="text-gray-400 text-xs">Updated June 2024</p>
          </div>
          
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <Download size={18} className="text-[#A56CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.a>
        
        <h4 className="text-sm text-gray-300 mb-3 font-medium">Current status:</h4>
        
        <div className="space-y-3">
          <StatusBadge 
            text="Open to Freelance" 
            icon={<Briefcase size={14} />} 
          />
          <StatusBadge 
            text="Open for Collaborations" 
            icon={<Users size={14} />}
          />
          <StatusBadge 
            text="Actively Looking for Opportunities" 
            icon={<CheckCircle size={14} />}
          />
        </div>
      </div>
    </motion.div>
  );
}

function StatusBadge({ text, icon }) {
  return (
    <motion.div 
      className="badge hover-glow"
      whileHover={{ x: 3, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <span className="gradient-text">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
} 