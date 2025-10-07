"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { urlFor } from "@/sanity/lib/image";

// Default fallback data
const DEFAULT_LOGO = {
  logoImage: null,
  altText: 'MK Logo',
  width: 150,
  height: 150
};

interface LogoData {
  logoImage: any;
  altText: string;
  width: number;
  height: number;
}

export default function LogoCard() {
  const [logoData, setLogoData] = useState<LogoData>(DEFAULT_LOGO);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchLogoData() {
      const query = `*[_type == "logo"][0]{
        _id,
        _type,
        logoImage,
        altText,
        width,
        height
      }`;
      const result = await sanityFetch<LogoData>(query, DEFAULT_LOGO);
      setLogoData(result.data);
    }
    fetchLogoData();
  }, []);

  const logoSrc = logoData.logoImage ? urlFor(logoData.logoImage).url() : '/Logo_MK.png';
  const logoWidth = logoData.width || DEFAULT_LOGO.width;
  const logoHeight = logoData.height || DEFAULT_LOGO.height;
  const logoAlt = logoData.altText || DEFAULT_LOGO.altText;

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
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <Image 
            src={logoSrc} 
            alt={logoAlt} 
            width={logoWidth} 
            height={logoHeight} 
            className="object-contain w-auto h-auto max-w-[350%] max-h-[350%]" 
            priority
          />
        </div>
      </motion.div>
  );
}