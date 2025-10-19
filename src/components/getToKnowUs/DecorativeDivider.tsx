"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

export default function DecorativeDivider() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
        <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-sm)]">
        {/* left line */}
        <div className="flex-1 h-1 bg-[var(--color-content-positive)]" />
      
         {/* tulip centered */}
         <div className="flex-shrink-0 px-[var(--spacing-m)]">
           <Image
             src="/Tulip64.svg"
             alt="Tulip decoration"
             width={34}
             height={34}
             aria-hidden
             style={{ transform: 'rotate(-50.972deg)' }}
           />
         </div>
      
        {/* right line */}
        <div className="flex-1 h-1 bg-[var(--color-border-positive)]" />
      </div>
    );
  }

  if (isTablet) {
    return (
        <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-m)]">
        {/* left line */}
        <div className="flex-1 h-1.5 bg-[var(--color-content-positive)]" />
      
         {/* tulip centered */}
         <div className="flex-shrink-0 px-[var(--spacing-m)]">
           <Image
             src="/Tulip64.svg"
             alt="Tulip decoration"
             width={54}
             height={54}
             aria-hidden
             style={{ transform: 'rotate(-50.972deg)' }}
           />
         </div>
      
        {/* right line */}
        <div className="flex-1 h-1.5 bg-[var(--color-border-positive)]" />
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
        <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-lg)]">
        {/* left line */}
        <div className="flex-1 h-2 bg-[var(--color-content-positive)]" />
      
         {/* tulip centered */}
         <div className="flex-shrink-0 px-[var(--spacing-m)]">
           <Image
             src="/Tulip64.svg"
             alt="Tulip decoration"
             width={64}
             height={64}
             aria-hidden
             style={{ transform: 'rotate(-50.972deg)' }}
           />
         </div>
      
        {/* right line */}
        <div className="flex-1 h-2 bg-[var(--color-border-positive)]" />
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-lg)]">
    {/* left line */}
    <div className="flex-1 h-2 bg-[var(--color-content-positive)]" />
  
     {/* tulip centered */}
     <div className="flex-shrink-0 px-[var(--spacing-m)]">
       <Image
         src="/Tulip64.svg"
         alt="Tulip decoration"
         width={64}
         height={64}
         aria-hidden
         style={{ transform: 'rotate(-50.972deg)' }}
       />
     </div>
  
    {/* right line */}
    <div className="flex-1 h-2 bg-[var(--color-border-positive)]" />
  </div>
  
  );
}
