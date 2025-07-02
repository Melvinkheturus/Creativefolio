"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { ArrowUpIcon } from "lucide-react";

export default function FooterCard() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-3" glassy>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Manikandan. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Built with Next.js and Tailwind CSS
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-gray-200 dark:bg-zinc-800 rounded-full hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon size={16} />
          </motion.button>
        </div>
      </div>
    </BentoCard>
  );
} 