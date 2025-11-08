"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import eightyFourthStreetMuralHeroData from "@/data/eightyFourthStreetMuralHeroData";

export default function HeroBanner() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, subtitle, image } = eightyFourthStreetMuralHeroData;

  if (isMobile) {
    return (
      <div className="w-full bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-center gap-[var(--spacing-3xl)] py-[var(--spacing-3xl)] px-[var(--spacing-lg)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-lg)]">        
               <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">{title}</h1>
               <h2 className="mobile-heading-2xl-semibold text-[var(--color-content-primary)]">{subtitle}</h2>
           </div>
            <div className="w-full h-full overflow-hidden">
            <Image 
              src={image} 
              alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue" 
              width={768} 
              height={400} 
              className="w-full h-full object-cover"
            />
          </div>
          </div>
        </div>
      
    );
  }

  if (isTablet) {
    return (
      <div className="w-full bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-4xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="web-heading-5xl-bold text-[var(--color-content-primary)]">{title}</h1>
            <h2 className="web-heading-m-semibold text-[var(--color-content-primary)]">{subtitle}</h2>  
          </div>
          <div className="w-full h-[400px] overflow-hidden">
            <Image
              src={image}
              alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue"
              width={768}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full bg-[var(--color-yellow-500)]">
        <div className="flex items-stretch w-full max-w-[1400px] mx-auto gap-[var(--spacing-5xl)] py-[var(--spacing-7xl)] px-[var(--spacing-5xl)]">
          <div className="flex flex-col items-start w-1/2 gap-[var(--spacing-2xl)]">
                <h1 className="hero-xs text-[var(--color-content-primary)]">{title}</h1>
                <h2 className="web-heading-m-semibold text-[var(--color-content-primary)]">{subtitle}</h2>
          </div>
          <div className="w-1/2 self-stretch overflow-hidden">
            <Image 
              src={image} 
              alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue" 
              width={600} 
              height={750} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full bg-[var(--color-yellow-500)]">
      <div className="flex items-stretch w-full max-w-[1600px] mx-auto gap-[var(--spacing-6xl)] py-[var(--spacing-10xl)] px-[var(--spacing-6xl)]">
        <div className="flex flex-col items-start w-1/2 gap-[var(--spacing-4xl)]">
          <h1 className="hero-lg text-[var(--color-content-primary)]">{title}</h1>
          <h2 className="web-heading-lg-semibold text-[var(--color-content-primary)]">{subtitle}</h2>
        </div>
        <div className="w-1/2 self-stretch overflow-hidden">
          <Image 
            src={image} 
            alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue" 
            width={600} 
            height={750} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

