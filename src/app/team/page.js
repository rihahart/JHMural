"use client";

import MeetOurFounders from "@/components/JHMuralteam/meetOurFounders";
import CoFounderInfo from "@/components/JHMuralteam/coFounderInfo";

export default function MeetTheTeam() {
  return (
    <div className="flex w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-12 lg:gap-20 min-h-screen mx-auto">
      <MeetOurFounders />
      <CoFounderInfo />
    </div>
  );
}
