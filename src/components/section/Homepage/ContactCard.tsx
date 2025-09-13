"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Ripple } from "@/components/ui/ripple";

export default function ContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, we'll just close the form and reset it
    setIsFormOpen(false);
    setFormData({ name: '', email: '', message: '' });
    // You could also show a success message
  };

  return (
    <div className="col-span-1 h-full">
      <motion.div 
        ref={cardRef}
        className="p-6 rounded-2xl bg-[#040406] border-#1c0333 relative h-full flex flex-col overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Purple gradient corners - reduced size and blur */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

        <Ripple />

        
        {/* Card header with toggle button */}
        <div 
          className={`flex justify-between items-center cursor-pointer mb-1 md:mb-2 ${isFormOpen ? '' : 'h-full'}`} 
          onClick={handleClick}
        >
          <h3 className="text-2xl font-bold tracking-wide">
            <span className="text-white">LETS<br />WORK </span>
            <span className="text-purple-500">TOGETHER.</span>
          </h3>
          
          <motion.div
            className="text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isFormOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </motion.div>
        </div>
        
        {/* Contact Form */}
        <motion.div 
          className="mt-1 overflow-visible flex-grow"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isFormOpen ? 'auto' : 0,
            opacity: isFormOpen ? 1 : 0,
            marginBottom: isFormOpen ? '0.5rem' : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ minHeight: isFormOpen ? '180px' : '0px', maxHeight: isFormOpen ? '220px' : '0px' }}
        >
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="space-y-1 flex flex-col">
              <div className="mb-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="mb-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={2}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 resize-none"
                    style={{ height: '40px' }}
                    required
                  ></textarea>
                </div>
              <motion.button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-1 px-4 rounded transition-colors duration-300 text-xs mt-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
            </form>
          )}
        </motion.div>
        

      </motion.div>
    </div>
  );
}