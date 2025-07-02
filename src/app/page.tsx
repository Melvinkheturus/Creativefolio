"use client";

import ProfileCard from "./components/bento/ProfileCard";
import AboutCard from "./components/bento/AboutCard";
import ToolkitCard from "./components/bento/ToolkitCard";
import ConnectBar from "./components/bento/ConnectBar";
import WhatIDoCard from "./components/bento/WhatIDoCard";
import StoryCard from "./components/bento/StoryCard";
import WorkCard from "./components/bento/WorkCard";
import LetsWorkCard from "./components/bento/LetsWorkCard";
import ResumeCard from "./components/bento/ResumeCard";
import QuoteCard from "./components/bento/QuoteCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Row 1: Profile + Connect Bar */}
          <div className="md:col-span-4">
            <ProfileCard />
          </div>
          
          <div className="md:col-span-8 flex flex-col gap-4">
            <ConnectBar />
            <AboutCard />
          </div>
          
          {/* Row 2: What I Do + Toolkit + Story */}
          <div className="md:col-span-4">
            <WhatIDoCard />
          </div>
          
          <div className="md:col-span-4">
            <ToolkitCard />
          </div>
          
          <div className="md:col-span-4">
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
