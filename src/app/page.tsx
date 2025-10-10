"use client";

import ProfileCard from "@/components/section/Homepage/ProfileCard";
import AboutCard from "@/components/section/Homepage/AboutCard";
import ContactCard from "@/components/section/Homepage/ContactCard";
import SkillCard from "@/components/section/Homepage/SkillCard";
import ExperienceCard from "@/components/section/Homepage/ExperienceCard";
import TestimonialCard from "@/components/section/Homepage/TestimonialCard";
import ProjectsCard from "@/components/section/Homepage/ProjectsCard";
import Toolkit from "@/components/section/Homepage/Toolkit";
import LogoCard from "@/components/section/Homepage/LogoCard";
import Resume from "@/components/section/Homepage/Resume";
import Connect from "@/components/section/Homepage/Connect";
import MarqueeSection from "@/components/section/Homepage/MarqueeSection";
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator';

export default function HomePage() {
  // Define sections for scroll progress indicator
  const sections = [
    { id: 'profile', label: 'Profile' },
    { id: 'about', label: 'About' },
    { id: 'toolkit', label: 'Toolkit' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-[161515] p-4 md:p-6 lg:p-8 overflow-x-hidden" aria-label="Manikandan's Portfolio">
        {/* Scroll Progress Indicator */}
        <ScrollProgressIndicator sections={sections} />
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4">
            {/* First row */}
            <div id="profile" className="col-span-4 h-[450px]">
              <ProfileCard />
            </div>
            <div className="col-span-8">
              <div className="h-[70px] mb-4">
                <Connect />
              </div>
              <div id="about" className="h-[370px]">
                <AboutCard />
              </div>
            </div>
            {/* Second row */}
            <div className="col-span-5">
              <div id="toolkit" className="mb-4">
                <Toolkit />
              </div>
              <div id="skills" className="mb-4">
                <SkillCard />
              </div>
            </div>
            <div id="experience" className="col-span-7 mb-4">
              <ExperienceCard />
            </div>
          </div>
          {/* Third row - Projects (full width) */}
          <div className="grid grid-cols-12 gap-4">
            <div id="projects" className="col-span-12 mb-4">
              <ProjectsCard />
            </div>
            
            {/* Fourth row - Cards with different heights */}
            <div id="testimonials" className="col-span-4 h-[300px]">
              <TestimonialCard />
            </div>
            <div id="contact" className="col-span-4 h-[300px]">
              <ContactCard />
            </div>
            <div className="col-span-4">
              <div className="h-[150px] mb-4">
                <Resume />
              </div>
              <div className="h-[120px]">
                <LogoCard />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout - Stack components vertically */}
        <div className="md:hidden space-y-8">
          <div id="profile-mobile">
            <ProfileCard />
          </div>
          <div>
            <Connect />
          </div>
          <div id="about-mobile">
            <AboutCard />
          </div>
          <div id="toolkit-mobile">
            <Toolkit />
          </div>
          <div id="skills-mobile">
            <SkillCard />
          </div>
          <div id="experience-mobile">
            <ExperienceCard />
          </div>
          <div id="projects-mobile">
            <ProjectsCard />
          </div>
          <div id="testimonials-mobile">
            <TestimonialCard />
          </div>
          <div id="contact-mobile">
            <ContactCard />
          </div>
          <div className="h-[150px] mb-4">
            <Resume />
          </div>
          <div className="h-[110px]">
            <LogoCard />
          </div>
        </div>
        
        {/* Marquee Section - Full width at bottom */}
        <div className="mt-12">
          <MarqueeSection />
        </div>
    </main>
  );
}