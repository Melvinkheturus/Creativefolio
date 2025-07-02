"use client";

import { motion } from "framer-motion";
import { 
  Copy, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function ConnectBar() {
  const [copied, setCopied] = useState(false);
  const email = "smk.manikandan.dev@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <motion.div
      className="bento-card px-6 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Email section */}
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={copyEmail}>
          <Mail size={18} className="gradient-text" />
          <span className="text-gray-300 text-sm hidden md:inline">{email}</span>
          <span className="text-gray-300 text-sm md:hidden">Email</span>
          {copied ? (
            <CheckCircle size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-gray-400 group-hover:text-gray-200" />
          )}
          {copied && (
            <motion.span 
              className="text-xs text-green-400 absolute -bottom-4"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Copied!
            </motion.span>
          )}
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <SocialIcon href="https://linkedin.com/in/username" icon={<Linkedin size={18} />} tooltip="LinkedIn" />
          <SocialIcon href="https://github.com/username" icon={<Github size={18} />} tooltip="GitHub" />
          <SocialIcon href="https://behance.net/username" icon={<ExternalLink size={18} />} tooltip="Behance" />
          <SocialIcon href="https://wa.me/919940398023" icon={<MessageCircle size={18} />} tooltip="WhatsApp" />
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon, tooltip }) {
  return (
    <div className="relative group">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1D1D1D] hover:bg-[#252525] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <span className="gradient-text">{icon}</span>
      </motion.a>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-xs text-gray-400 whitespace-nowrap">{tooltip}</span>
      </div>
    </div>
  );
} 