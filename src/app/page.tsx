"use client";

import ProfileCard from "./components/bento/ProfileCard";
import AboutCard from "./components/bento/AboutCard";
import ToolkitCard from "./components/bento/ToolkitCard";
import ConnectBar from "./components/bento/ConnectBar";
import WhatIDoCard from "./components/WhatIDoCard";
import StoryCard from "./components/bento/StoryCard";
import WorkCard from "./components/bento/WorkCard";
import LetsWorkCard from "./components/bento/LetsWorkCard";
import ResumeCard from "./components/bento/ResumeCard";
import QuoteCard from "./components/bento/QuoteCard";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0912] to-[#0b0e15] p-4 md:p-6">
      <StructuredData type="Person" />
      {/* Subtle radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(147,51,234,0.03),_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.03),_transparent_60%)] pointer-events-none"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none mix-blend-soft-light"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1: Profile + Toolkit + Connect Bar + About */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <ProfileCard />
            <div className="h-[150px]">
              <ToolkitCard />
            </div>
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-6">
            <ConnectBar />
            <AboutCard />
          </div>
          
          {/* Row 2: What I Do + Story */}
          <div className="md:col-span-4">
            <WhatIDoCard />
          </div>
          
          <div className="md:col-span-8">
            <StoryCard />
          </div>
          
          {/* Row 3: Work */}
          <div className="md:col-span-12">
            <WorkCard />
          </div>
          
          {/* Row 4: Resume + Let's Work + Quote */}
          <div className="md:col-span-4">
            <ResumeCard />
          </div>
          
          <div className="md:col-span-4">
            <LetsWorkCard />
          </div>
          
          <div className="md:col-span-4">
            <QuoteCard />
          </div>
        </div>
      </div>
    </main>
  );
}
