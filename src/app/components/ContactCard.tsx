"use client";

import { motion } from "framer-motion";
import BentoCard from "./BentoCard";
import { MailIcon, SendIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function ContactCard() {
  return (
    <BentoCard className="col-span-1 lg:col-span-2" gradient>
      <h3 className="text-xl font-poppins font-semibold text-white mb-6">Let's Connect</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-white/90">
          <p className="mb-6">Have a project in mind or just want to chat? Feel free to reach out through the form or directly via email.</p>
          
          <div className="flex flex-col gap-4 mt-8">
            <motion.a 
              href="mailto:your-email@example.com"
              className="flex items-center gap-3 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <MailIcon size={18} />
              your-email@example.com
            </motion.a>
            
            <div className="flex gap-4 mt-2">
              <motion.a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ y: -3 }}
              >
                <GithubIcon size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ y: -3 }}
              >
                <LinkedinIcon size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          
          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          
          <motion.button 
            type="submit"
            className="px-6 py-2 bg-white text-[#7F5AF0] rounded-full flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SendIcon size={16} />
            Send Message
          </motion.button>
        </form>
      </div>
    </BentoCard>
  );
} 