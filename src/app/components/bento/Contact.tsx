"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { IoArrowForward, IoSend } from "react-icons/io5";
import BentoCard from "../BentoCard";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form and close drawer after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
        setIsOpen(false);
      }, 3000);
    }, 1500);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BentoCard
      className="col-span-1 h-full"
      glow="indigo"
      spotlightEnabled={true}
      glassy={false}
    >
      <div 
        ref={cardRef}
        className="h-full flex flex-col relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card header with toggle button */}
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleOpen}
        >
          <h3 className="text-lg font-semibold">
            <span className="text-white">CONTACT </span>
            <span className="text-indigo-400">ME</span>
          </h3>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
        
        {/* Card content */}
        <div className={`flex items-center justify-center overflow-hidden ${isOpen ? 'flex-grow' : 'h-[calc(100%-2rem)]'}`}>
          {!isOpen ? (
            <div className="flex flex-col items-center justify-center text-center p-4">
              <p className="text-gray-300 mb-2">Have a project or idea?</p>
              <p className="text-indigo-300 text-sm">Click to open contact form</p>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div 
                className="w-full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <h4 className="text-lg font-medium text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col mt-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-[#121212]/70 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-[#121212]/70 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows={3}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full bg-[#121212]/70 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    <div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-2.5 px-6 rounded-lg font-medium text-sm shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 disabled:opacity-70"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <IoSend />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </BentoCard>
  );
} 