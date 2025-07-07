"use client";

import ProfileCard from "./ProfileCard";
import ToolkitCard from "./ToolkitCard";
import WhatIDoCard from "./WhatIDoCard";
import StoryCard from "./StoryCard";

export default function BentoGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Profile + Toolkit + Skills */}
        <div className="flex flex-col gap-6">
          <ProfileCard />
          <ToolkitCard />
          <WhatIDoCard />
        </div>

        {/* Right Side: Timeline */}
        <div className="h-full">
          <StoryCard />
        </div>
      </div>
    </div>
  );
} 