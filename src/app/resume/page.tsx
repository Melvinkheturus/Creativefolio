"use client";

import { motion } from "framer-motion";
import { FiDownload, FiMail, FiPenTool, FiLayout, FiMonitor, FiCode, FiMessageSquare, FiUsers, FiTrendingUp, FiTool } from "react-icons/fi";
import { SiFigma, SiCanva, SiAdobeillustrator, SiAdobephotoshop, SiFramer, SiWebflow, SiAirtable, SiReact, SiTailwindcss, SiGit, SiNotion, SiSlack, SiTrello, SiJira, SiAdobexd, SiVercel } from "react-icons/si";
import { FaLaptopCode, FaPuzzlePiece, FaRobot, FaCode, FaLightbulb, FaComments, FaSearch, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Skills from '@/components/section/resume/Skills';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      {/* Hero / Header Section */}
      <section className="w-full py-16 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-100">MANIKANDAN S</h1>
              <p className="mt-3 text-lg text-gray-400 max-w-2xl">
                UI/UX Designer & Creative Technologist — shaping intuitive digital experiences with AI-powered workflows.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Chennai, India</span>
                <span>•</span>
                <a href="mailto:contact@manikandan.dev" className="hover:text-purple-400 transition-colors">contact@manikandan.dev</a>
              </div>
              <div className="flex gap-3 mt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
                <a href="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              </div>
              
              <div className="flex gap-4 mt-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf" 
                  target="_blank"
                  className="inline-flex items-center px-5 py-2 bg-purple-600 text-white rounded-lg shadow hover:shadow-md transition-colors"
                >
                  <FiDownload className="mr-2" />
                  Download Resume
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@manikandan.dev"
                  className="inline-flex items-center px-5 py-2 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-900 transition-colors"
                >
                  <FiMail className="mr-2" />
                  Contact
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Professional Summary
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-sm"
          >
            <p className="text-gray-400 leading-relaxed">
              Creative technologist with a passion for designing intuitive digital experiences. Specializing in UI/UX design and frontend development, I combine design thinking with technical skills to create user-centered solutions. Proficient in leveraging AI tools to enhance workflows and productivity. Currently pursuing BCA at Guru Nanak College with a focus on modern web technologies and design systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Imported from component */}
<section className="py-12 bg-black">
  <div className="container mx-auto px-4 md:px-8">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-6 text-gray-100"
    >
      Design & Dev Stack
    </motion.h2>
    <Skills />
  </div>
</section>

      {/* Projects Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-purple-600 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-100">Personal Portfolio Website</h3>
                  <div className="text-xs text-gray-400">UI/UX Designer & Developer</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Next.js</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Framer Motion</span>
                </div>
                
                <p className="text-gray-400 mb-4">Designed and developed a modern portfolio website with a unique bento grid layout, smooth animations, and responsive design.</p>
                
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="/projects/portfolio" 
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-purple-600 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-100">E-commerce UI Redesign</h3>
                  <div className="text-xs text-gray-400">UI/UX Designer</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Figma</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Prototyping</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">User Research</span>
                </div>
                
                <p className="text-gray-400 mb-4">Redesigned the user interface for an e-commerce platform, focusing on improving user experience and conversion rates.</p>
                
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="/projects/ecommerce" 
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <div className="h-48 bg-gray-800 relative">
                <div className="absolute inset-0 bg-purple-600 opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-purple-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-100">AI-Powered Task Manager</h3>
                  <div className="text-xs text-gray-400">Frontend Developer</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">React</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">OpenAI API</span>
                  <span className="px-2 py-1 bg-purple-900 text-xs text-purple-300 rounded">Tailwind CSS</span>
                </div>
                
                <p className="text-gray-400 mb-4">Developed a task management application that uses AI to prioritize and categorize tasks, enhancing productivity.</p>
                
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="/projects/task-manager" 
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Internship */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Education & Experience
          </motion.h2>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-purple-500 before:to-purple-200">
            
            {/* Education */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-purple-400">Guru Nanak College</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                    2022 - 2025
                  </div>
                </div>
                <p className="mt-2 text-gray-400">CGPA: 8.4</p>
              </div>
            </div>
            
            {/* Internship */}
            <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">Web Development Intern</h3>
                    <p className="text-purple-400">SAIC</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                    May - Jun 2024
                  </div>
                </div>
                <p className="mt-2 text-gray-400">Developed responsive web interfaces and collaborated with the design team to implement UI/UX improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Achievements */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Leadership & Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-5 rounded-lg shadow-sm border-l-4 border-purple-600 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-2xl text-gray-100">👔</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">General Secretary</h3>
                  <p className="text-purple-400">Guru Nanak College</p>
                  <p className="mt-2 text-gray-400">Led student initiatives and organized campus events, representing student interests to college administration.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-5 rounded-lg shadow-sm border-l-4 border-purple-600 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4 text-2xl text-gray-100">🎤</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">Event Head, Juno Fest</h3>
                  <p className="text-purple-400">College Cultural Festival</p>
                  <p className="mt-2 text-gray-400">Led a 20-member team to organize and execute the college's annual cultural festival, managing logistics, promotions, and coordination.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-gray-100"
          >
            Additional Information
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-3 text-purple-400">AI Programming & Automation</h3>
              <p className="text-gray-400">
                Passionate about leveraging AI tools to enhance productivity and streamline workflows. Experienced in using AI-powered coding assistants and design tools to accelerate development processes while maintaining high-quality output.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-3 text-purple-400">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">English</span>
                  <div className="w-2/3 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Tamil</span>
                  <div className="w-2/3 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Hindi</span>
                  <div className="w-2/3 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-xl italic text-gray-400">
              "Always exploring. Always creating. Always future-ready."
            </blockquote>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              <FiDownload className="mr-2" />
              Download Resume
            </a>
            <a 
              href="mailto:contact@manikandan.dev"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 text-purple-400 rounded-md hover:bg-purple-900 transition-colors"
            >
              <FiMail className="mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}