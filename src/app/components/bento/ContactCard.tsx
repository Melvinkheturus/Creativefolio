"use client";

import { motion } from "framer-motion";
import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon } from "lucide-react";

export default function ContactCard() {
  return (
    <motion.div
      className="col-span-2 md:col-span-6 bg-gradient-to-br from-[#7F5AF0] to-[#2CB67D] p-6 rounded-[30px] shadow-xl overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="text-white">
          <h2 className="text-2xl font-poppins font-semibold mb-3">Let's Work Together</h2>
          <p className="text-white/80 mb-6">
            Open to full-time, freelance, and collaborative work.
            Let's build something amazing together.
          </p>
          
          <div className="space-y-4 mt-8">
            <motion.a 
              href="mailto:smk.manikandan.dev@gmail.com" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <MailIcon size={18} />
              smk.manikandan.dev@gmail.com
            </motion.a>
            
            <motion.a 
              href="tel:+919940398023" 
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <PhoneIcon size={18} />
              +91 99403 98023
            </motion.a>
            
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ y: -5 }}
              >
                <GithubIcon size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ y: -5 }}
              >
                <LinkedinIcon size={20} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-xl focus:outline-none focus:border-white/50"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-xl focus:outline-none focus:border-white/50"
              />
            </div>
            
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-xl focus:outline-none focus:border-white/50"
              />
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-white text-[#7F5AF0] font-poppins font-medium rounded-xl flex justify-center items-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
    </motion.div>
  );
} 