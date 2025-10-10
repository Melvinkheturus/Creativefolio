"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Ripple } from "@/components/ui/ripple";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Check } from "lucide-react";

// Default fallback data
const DEFAULT_CONTACT = {
  title: {
    firstLine: 'LETS WORK',
    secondLine: 'TOGETHER.'
  },
  formFields: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    submitButtonText: 'Send Message'
  }
};

interface ContactData {
  title: {
    firstLine: string;
    secondLine: string;
  };
  formFields: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButtonText: string;
  };
}

export default function ContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [contactData, setContactData] = useState<ContactData>(DEFAULT_CONTACT);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch data from Sanity CMS
  useEffect(() => {
    async function fetchContactData() {
      const query = `*[_type == "contact"][0]{
        _id,
        _type,
        title,
        formFields
      }`;
      const result = await sanityFetch<ContactData>(query, DEFAULT_CONTACT);
      setContactData(result.data);
    }
    fetchContactData();
  }, []);
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success animation
        setShowSuccess(true);
        setIsFormOpen(false);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success animation after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        // Handle error
        console.error('Failed to send message');
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Success Animation Overlay */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="absolute inset-0 bg-purple-600/95 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* Animated Check Circle */}
                <motion.div
                  className="relative mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.6, 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15 
                  }}
                >
                  {/* Outer ring animation */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Main check circle */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      <Check size={32} className="text-purple-600" strokeWidth={3} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Success Text */}
                <motion.div
                  className="text-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <h3 className="text-white text-xl font-bold mb-1">Message Sent!</h3>
                  <p className="text-purple-100 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        
        {/* Card header with toggle button */}
        <div 
          className={`flex justify-between items-center cursor-pointer mb-1 md:mb-2 ${isFormOpen ? '' : 'h-full'}`} 
          onClick={handleClick}
        >
          <h3 className="text-2xl font-bold tracking-wide">
            <span className="text-white">{contactData.title?.firstLine || DEFAULT_CONTACT.title.firstLine}<br /></span>
            <span className="text-purple-500">{contactData.title?.secondLine || DEFAULT_CONTACT.title.secondLine}</span>
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
                    placeholder={contactData.formFields?.namePlaceholder || DEFAULT_CONTACT.formFields.namePlaceholder}
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
                    placeholder={contactData.formFields?.emailPlaceholder || DEFAULT_CONTACT.formFields.emailPlaceholder}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>
                <div className="mb-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={contactData.formFields?.messagePlaceholder || DEFAULT_CONTACT.formFields.messagePlaceholder}
                    rows={2}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 resize-none"
                    style={{ height: '40px' }}
                    required
                  ></textarea>
                </div>
              <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-medium py-1 px-4 rounded transition-colors duration-300 text-xs mt-1"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : (contactData.formFields?.submitButtonText || DEFAULT_CONTACT.formFields.submitButtonText)}
                </motion.button>
            </form>
          )}
        </motion.div>
        

      </motion.div>
    </div>
  );
}