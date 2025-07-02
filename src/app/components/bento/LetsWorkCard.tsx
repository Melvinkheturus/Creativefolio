"use client";

import { motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { useState } from "react";

export default function LetsWorkCard() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openContactModal = () => {
    setIsOpen(true);
  };
  
  const closeContactModal = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <motion.div
        className="bento-card h-full p-6 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <span className="badge flex items-center space-x-1.5 text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
              <span>Open to opportunities</span>
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-3">
            LET'S WORK <span className="gradient-text">TOGETHER</span>
          </h3>
          
          <p className="text-gray-400 text-sm mb-5 max-w-[200px]">
            Open to freelance, collaborations & full-time roles
          </p>
          
          <motion.button
            onClick={openContactModal}
            className="relative px-6 py-3 overflow-hidden rounded-full group bg-[#1D1D1D]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Background gradient that animates on hover */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#A56CFF] to-[#C278FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Content that stays on top */}
            <span className="relative flex items-center justify-center space-x-2 z-10 text-white">
              <Mail size={18} />
              <span>Let's Talk</span>
            </span>
          </motion.button>
        </div>
      </motion.div>
      
      {isOpen && (
        <ContactModal onClose={closeContactModal} />
      )}
    </>
  );
}

function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    onClose();
  };
  
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        // Close modal when clicking outside
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        className="bento-card w-full max-w-md p-6 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <motion.button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#252525] hover:bg-[#333] transition-colors"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <X size={16} className="text-gray-400" />
          </motion.button>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">Get in Touch</h3>
        <p className="text-gray-400 text-sm mb-5">
          I'd love to hear about your project or opportunity
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1D1D1D] text-white rounded-lg p-3 border border-[#333] focus:border-[#A56CFF] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1D1D1D] text-white rounded-lg p-3 border border-[#333] focus:border-[#A56CFF] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-[#1D1D1D] text-white rounded-lg p-3 border border-[#333] focus:border-[#A56CFF] focus:outline-none resize-none"
              required
            />
          </div>
          
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#A56CFF] to-[#C278FF] text-white rounded-lg hover:from-[#9D4EDA] hover:to-[#B56AE8] transition-all duration-300 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}