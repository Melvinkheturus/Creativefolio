"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaDribbble, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

// DEFAULT FALLBACK DATA
const DEFAULT_CONNECT = {
  _id: 'connect',
  _type: 'connect',
  email: 'your.email@example.com',
  copiedText: 'Copied!',
  socialLinks: [
    { platform: 'linkedin', url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { platform: 'dribbble', url: 'https://dribbble.com/yourprofile', label: 'Dribbble' },
    { platform: 'instagram', url: 'https://instagram.com/yourprofile', label: 'Instagram' },
    { platform: 'github', url: 'https://github.com/yourprofile', label: 'GitHub' },
    { platform: 'whatsapp', url: 'https://wa.me/yournumber', label: 'WhatsApp' },
  ],
};

type ConnectData = typeof DEFAULT_CONNECT;

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [connectData, setConnectData] = useState<ConnectData>(DEFAULT_CONNECT);

  useEffect(() => {
    async function fetchConnectData() {
      const query = `*[_type == "connect"][0]{
        email,
        copiedText,
        socialLinks[]{
          platform,
          url,
          label
        }
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <FaLinkedin size={18} />;
      case "dribbble":
        return <FaDribbble size={18} />;
      case "instagram":
        return <FaInstagram size={18} />;
      case "github":
        return <FaGithub size={18} />;
      case "whatsapp":
        return <FaWhatsapp size={18} />;
      default:
        return null;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return "hover:text-blue-500";
      case "dribbble":
        return "hover:text-pink-500";
      case "instagram":
        return "hover:text-purple-500";
      case "github":
        return "hover:text-gray-100";
      case "whatsapp":
        return "hover:text-green-500";
      default:
        return "";
    }
  };

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
                  {connectData.copiedText}
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
                  <span className="text-sm text-gray-300">{connectData.email}</span>
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
        <div className="flex items-center space-x-3 ml-auto">
          {connectData.socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${getSocialColor(social.platform)} transition-all duration-300`}
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {getSocialIcon(social.platform)}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}