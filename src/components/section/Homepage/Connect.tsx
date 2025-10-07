"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaDribbble, FaInstagram, FaGithub, FaWhatsapp, FaTwitter, FaFacebook, FaYoutube, FaBehance, FaMedium } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

// Default fallback data
const DEFAULT_CONNECT = {
  email: 'smk.manikandan.dev@gmail.com',
  copiedText: 'Copied!',
  socialLinks: [
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn Profile' },
    { platform: 'dribbble', url: 'https://dribbble.com', label: 'Dribbble Portfolio' },
    { platform: 'instagram', url: 'https://instagram.com', label: 'Instagram Profile' },
    { platform: 'github', url: 'https://github.com', label: 'GitHub Profile' },
    { platform: 'whatsapp', url: 'https://wa.me/yournumber', label: 'WhatsApp Contact' },
  ]
};

interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

interface ConnectData {
  email: string;
  copiedText: string;
  socialLinks: SocialLink[];
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  linkedin: <FaLinkedin size={18} />,
  dribbble: <FaDribbble size={18} />,
  instagram: <FaInstagram size={18} />,
  github: <FaGithub size={18} />,
  whatsapp: <FaWhatsapp size={18} />,
  twitter: <FaTwitter size={18} />,
  facebook: <FaFacebook size={18} />,
  youtube: <FaYoutube size={18} />,
  behance: <FaBehance size={18} />,
  medium: <FaMedium size={18} />,
};

const colorMap: Record<string, string> = {
  linkedin: 'hover:text-blue-500',
  dribbble: 'hover:text-pink-500',
  instagram: 'hover:text-purple-500',
  github: 'hover:text-gray-100',
  whatsapp: 'hover:text-green-500',
  twitter: 'hover:text-blue-400',
  facebook: 'hover:text-blue-600',
  youtube: 'hover:text-red-500',
  behance: 'hover:text-blue-400',
  medium: 'hover:text-gray-100',
};

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [connectData, setConnectData] = useState<ConnectData>(DEFAULT_CONNECT);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchConnectData() {
      const query = `*[_type == "connect"][0]{
        _id,
        _type,
        email,
        copiedText,
        socialLinks
      }`;
      const result = await sanityFetch<ConnectData>(query, DEFAULT_CONNECT);
      setConnectData(result.data);
    }
    fetchConnectData();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(connectData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const socialLinks = (connectData.socialLinks || DEFAULT_CONNECT.socialLinks).map(link => ({
    icon: iconMap[link.platform] || iconMap.github,
    url: link.url,
    color: colorMap[link.platform] || 'hover:text-gray-100',
    label: link.label
  }));

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

      <div className="relative z-10 h-full flex items-center justify-between gap-2 md:gap-4">
        {/* Email section with copy button */}
        <div className="flex items-center min-w-0 flex-1">
          <motion.div
            className={`flex items-center justify-center px-2 py-1.5 md:px-4 md:py-2 rounded-full cursor-pointer transition-all duration-300 ${copied ? 'bg-purple-600/70' : 'bg-[#1a1a1a]/70'} backdrop-blur-sm min-w-0 max-w-full`}
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
                  className="text-xs md:text-sm font-medium text-white whitespace-nowrap"
                >
                  {connectData.copiedText}
                </motion.span>
              ) : (
                <motion.div
                  key="email-content"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5 md:gap-2 min-w-0"
                >
                  <span className="text-xs md:text-sm text-white font-medium truncate">{connectData.email}</span>
                  <HiOutlineClipboardCopy className="text-gray-300 hover:text-white transition-colors flex-shrink-0" size={14} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
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