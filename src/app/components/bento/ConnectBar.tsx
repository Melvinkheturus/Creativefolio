"use client";

import { motion } from "framer-motion";
import { 
  Copy, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { useState, ReactNode, useRef } from "react";

export default function ConnectBar() {
  const [copied, setCopied] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const email = "smk.manikandan.dev@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
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
  
  return (
    <motion.div
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl px-6 py-4 shadow-lg relative shimmer-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        {/* Email section with glow effect */}
        <motion.div 
          className="flex items-center space-x-2 group cursor-pointer relative shimmer-wrapper"
          onClick={copyEmail}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-md blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Mail size={18} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300" />
          </div>
          <span className="text-gray-300 text-sm mr-1 group-hover:text-white transition-colors truncate max-w-[220px]">{email}</span>
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
        </motion.div>
        
        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <SocialIcon 
            href="https://linkedin.com/in/username" 
            icon={<Linkedin size={18} />} 
            tooltip="LinkedIn" 
            colorClass="#0A66C2"
            onHover={() => setHoveredIcon("linkedin")}
            onLeave={() => setHoveredIcon(null)}
            isHovered={hoveredIcon === "linkedin"}
          />
          <SocialIcon 
            href="https://instagram.com/username" 
            icon={<Instagram size={18} />} 
            tooltip="Instagram"
            colorClass="#E1306C"
            onHover={() => setHoveredIcon("instagram")}
            onLeave={() => setHoveredIcon(null)}
            isHovered={hoveredIcon === "instagram"}
          />
          <SocialIcon 
            href="https://dribbble.com/username" 
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.13 5.09C15.41 9.44 10.19 10.75 2.25 10.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.75 12.84C16.54 11.69 13.79 12.08 7.26 16.32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            } 
            tooltip="Dribbble"
            colorClass="#EA4C89"
            onHover={() => setHoveredIcon("dribbble")}
            onLeave={() => setHoveredIcon(null)}
            isHovered={hoveredIcon === "dribbble"}
          />
          <SocialIcon 
            href="https://wa.me/919940398023" 
            icon={<MessageCircle size={18} />} 
            tooltip="WhatsApp"
            colorClass="#25D366"
            onHover={() => setHoveredIcon("whatsapp")}
            onLeave={() => setHoveredIcon(null)}
            isHovered={hoveredIcon === "whatsapp"}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  tooltip: string;
  colorClass: string;
  onHover?: () => void;
  onLeave?: () => void;
  isHovered?: boolean;
}

function SocialIcon({ href, icon, tooltip, colorClass, onHover, onLeave, isHovered }: SocialIconProps) {
  return (
    <div 
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1D1D1D]/60 backdrop-blur-sm transition-all duration-300 relative shimmer-wrapper"
        whileHover={{ scale: 1.1 }}
        style={{
          boxShadow: isHovered ? `0 0 15px ${colorClass}20` : 'none'
        }}
        data-cursor="icons"
      >
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{backgroundColor: colorClass}}
            layoutId="hoverBg"
          />
        )}
        <div className="relative z-10 transition-colors duration-200" style={{ color: isHovered ? '#fff' : '#9ca3af' }}>
          {icon}
        </div>
      </motion.a>
      <motion.div 
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -5
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-xs text-gray-300 whitespace-nowrap bg-[#0a0912]/80 backdrop-blur-sm px-2 py-1 rounded-md">
          {tooltip}
        </span>
      </motion.div>
    </div>
  );
} 