"use client";

import { motion } from "framer-motion";
import { FiFileText, FiDownload, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import SectionHeader from "../../ui/SectionHeader";
import { useState, useEffect } from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

const DEFAULT_RESUME = {
  _id: 'resume',
  _type: 'resume',
  downloadLink: '/resume.pdf',
  viewLink: '/resume',
};

type ResumeData = typeof DEFAULT_RESUME;

export default function Resume() {
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_RESUME);

  useEffect(() => {
    async function fetchResumeData() {
      const query = `*[_type == "resume"][0]{
        _id,
        _type,
        downloadLink,
        viewLink
      }`;
      const result = await sanityFetch<ResumeData>(query, DEFAULT_RESUME);
      setResumeData(result.data);
    }
    fetchResumeData();
  }, []);

  return (
    <motion.div
        className="h-full p-6 rounded-2xl bg-[#040406] border-#1c0333 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Top-left corner glow */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />
        
        {/* Bottom-right corner glow */}
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full items-center justify-center">
          {/* Header */}
          <div className="mb-1">
            <SectionHeader title="Resume" />
          </div>
          
          {/* CTA Zone */}
          <div className="flex flex-col space-y-2 mt-auto">
            <a 
              href={resumeData.downloadLink} 
              target="_blank"
              className="text-white text-sm hover:text-purple-400 transition-colors duration-300 flex items-center group"
            >
              <FiDownload className="mr-2 text-purple-400 group-hover:text-white transition-colors duration-300" />
              Download Resume
              <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <Link 
              href={resumeData.viewLink}
              className="text-white text-sm hover:text-purple-400 transition-colors duration-300 flex items-center group"
            >
              <FiFileText className="mr-2 text-purple-400 group-hover:text-white transition-colors duration-300" />
              View Full Resume
              <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>
  );
}