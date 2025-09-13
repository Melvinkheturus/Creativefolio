"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaDribbble, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const email = "smk.manikandan.dev";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const socialLinks = [
    { icon: <FaLinkedin size={18} />, url: "https://linkedin.com", color: "hover:text-blue-500", label: "LinkedIn Profile" },
    { icon: <FaDribbble size={18} />, url: "https://dribbble.com", color: "hover:text-pink-500", label: "Dribbble Portfolio" },
    { icon: <FaInstagram size={18} />, url: "https://instagram.com", color: "hover:text-purple-500", label: "Instagram Profile" },
    { icon: <FaGithub size={18} />, url: "https://github.com", color: "hover:text-gray-100", label: "GitHub Profile" },
    { icon: <FaWhatsapp size={18} />, url: "https://wa.me/yournumber", color: "hover:text-green-500", label: "WhatsApp Contact" }
  ];

  return (
    <motion.div
      ref={cardRef}
      className="p-6 rounded-2xl bg-[#040406] border-[#1c0333] relative h-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      role="region"
      aria-label="Connect with Manikandan"
    >
      
      {/* Top-left corner glow */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      
      {/* Bottom-right corner glow */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 h-full flex items-center justify-between">
        {/* Email section with copy button */}
        <div className="flex items-center space-x-2">
          <motion.div 
            className={`flex items-center justify-center px-3 py-1.5 rounded-full cursor-pointer transition-all duration-300 ${copied ? 'bg-purple-600/70' : 'bg-[#1a1a1a]/70'}`}
            onClick={copyToClipboard}
            whileTap={{ scale: 0.95 }}
            role="button"
            tabIndex={0}
            aria-label="Copy email address"
            onKeyDown={(e) => e.key === 'Enter' && copyToClipboard()}
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span 
                  key="copied-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium text-white"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.div
                  key="email-content"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-sm text-gray-300">{email}</span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiOutlineClipboardCopy className="text-gray-400 hover:text-white transition-colors" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Social icons */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transition-all duration-300`}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}