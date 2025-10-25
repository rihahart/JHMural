"use client";

import CoFounderInfo from "@/components/JHMuralteam/coFounderInfo";
import OurWallsOurStories from "@/components/JHMuralteam/ourwallsourstories";

export default function MeetTheTeam() {
  return (
    <div className="flex w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-12 lg:gap-20 min-h-screen mx-auto">
      <OurWallsOurStories />
      <CoFounderInfo />
    </div>
  );
}
