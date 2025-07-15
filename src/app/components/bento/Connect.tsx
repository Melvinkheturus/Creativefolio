"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaDribbble, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";

export default function Connect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const email = "smk.manikandan.dev";

  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const socialLinks = [
    { icon: <FaLinkedin size={18} />, url: "https://linkedin.com", color: "hover:text-blue-500" },
    { icon: <FaDribbble size={18} />, url: "https://dribbble.com", color: "hover:text-pink-500" },
    { icon: <FaInstagram size={18} />, url: "https://instagram.com", color: "hover:text-purple-500" },
    { icon: <FaGithub size={18} />, url: "https://github.com", color: "hover:text-gray-100" },
    { icon: <FaWhatsapp size={18} />, url: "https://wa.me/yournumber", color: "hover:text-green-500" }
  ];

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-4 shadow-lg relative h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <div className="relative z-10 h-full flex items-center justify-between">
        {/* Email section with copy button */}
        <div className="flex items-center space-x-2">
          <div 
            className="flex items-center space-x-2 bg-[#1a1a1a]/70 px-3 py-1.5 rounded-full cursor-pointer"
            onClick={copyToClipboard}
          >
            <span className="text-sm text-gray-300">{email}</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {copied ? (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-green-400 text-xs font-medium"
                >
                  Copied!
                </motion.span>
              ) : (
                <HiOutlineClipboardCopy className="text-gray-400 hover:text-white transition-colors" />
              )}
            </motion.div>
          </div>
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
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 