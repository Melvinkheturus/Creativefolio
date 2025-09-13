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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[161515] p-4 md:p-6 lg:p-8 overflow-x-hidden" aria-label="Manikandan's Portfolio">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4">
            {/* First row */}
            <div className="col-span-4 h-[450px]">
              <ProfileCard />
            </div>
            <div className="col-span-8">
              <div className="h-[70px] mb-4">
                <Connect />
              </div>
              <div className="h-[370px]">
                <AboutCard />
              </div>
            </div>
            {/* Second row */}
            <div className="col-span-5">
              <div className="mb-4">
                <Toolkit />
              </div>
              <div className="mb-4">
                <SkillCard />
              </div>
            </div>
            <div className="col-span-7 mb-4">
              <ExperienceCard />
            </div>
          </div>
          {/* Third row - Projects (full width) */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 mb-4">
              <ProjectsCard />
            </div>
            
            {/* Fourth row - Cards with different heights */}
            <div className="col-span-4 h-[300px]">
              <TestimonialCard />
            </div>
            <div className="col-span-4 h-[300px]">
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
          <div>
            <ProfileCard />
          </div>
          <div>
            <Connect />
          </div>
          <div>
            <AboutCard />
          </div>
          <div>
            <Toolkit />
          </div>
          <div>
            <SkillCard />
          </div>
          <div>
            <ExperienceCard />
          </div>
          <div>
            <ProjectsCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
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