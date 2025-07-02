"use client";

import { motion } from "framer-motion";
import { XIcon } from "lucide-react";

type DrawerPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function DrawerPanel({ 
  isOpen, 
  onClose, 
  children 
}: DrawerPanelProps) {
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
      />
      
      {/* Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed right-0 top-0 h-full w-full md:w-[40%] bg-white dark:bg-zinc-900 p-6 rounded-l-card shadow-2xl z-50 overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <XIcon size={20} />
        </button>
        {children}
      </motion.div>
    </>
  );
} 