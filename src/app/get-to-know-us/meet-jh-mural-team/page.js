"use client";

import useMobileDetection from "@/app/_utilities/useMobileDetection";

export default function MeetJHMuralTeam() {
  const { isMobile, isTablet } = useMobileDetection();

  if (isMobile) {
    return 
  }

  if (isTablet) {
    return 
  }

  return (
    <div className="flex flex-col align-center self-stretch max-w-[1600px] mx-auto py-[var(--spacing-7xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-7xl)]">
       <h1 className="text-[clamp(var(--font-size-heading-2xl),calc(var(--font-size-heading-2xl)+(var(--font-size-hero-heading)-var(--font-size-heading-2xl))*(100vw-768px)/512),var(--font-size-hero-heading))] self-stretch">
        Meet our founders
        </h1>

       
     
      </div>
  
  );
}


