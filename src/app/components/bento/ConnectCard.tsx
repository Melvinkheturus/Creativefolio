"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import { ReactNode } from "react";

export default function ConnectCard() {
  return (
    <motion.div
      className="h-full bg-[#121212] p-6 rounded-3xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold">
          <span className="gradient-text">CONNECT</span>
        </h3>
        
        <div className="mt-6 flex flex-col space-y-4">
          <SocialLink 
            icon={<LinkedinIcon size={18} />} 
            text="LinkedIn" 
            href="https://linkedin.com/in/username" 
          />
          
          <SocialLink 
            icon={<GithubIcon size={18} />} 
            text="GitHub" 
            href="https://github.com/username" 
          />
          
          <SocialLink 
            icon={<ExternalLinkIcon size={18} />} 
            text="Behance" 
            href="https://behance.net/username" 
          />
          
          <SocialLink 
            icon={<MailIcon size={18} />} 
            text="Email" 
            href="mailto:smk.manikandan.dev@gmail.com" 
          />
          
          <SocialLink 
            icon={<MessageCircleIcon size={18} />} 
            text="WhatsApp" 
            href="https://wa.me/919940398023" 
          />
        </div>
      </div>
    </motion.div>
  );
}

interface SocialLinkProps {
  icon: ReactNode;
  text: string;
  href: string;
}

function SocialLink({ icon, text, href }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-gray-300 text-sm hover:text-[#B965FF] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <span className="gradient-text">{icon}</span>
      <span>{text}</span>
    </motion.a>
  );
} 