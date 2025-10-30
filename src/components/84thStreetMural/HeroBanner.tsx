"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import eightyFourthStreetMuralHeroData from "@/data/eightyFourthStreetMuralHeroData";

export default function HeroBanner() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { topTitle, title, subtitle, image } = eightyFourthStreetMuralHeroData;

  if (isMobile) {
    return (
      <div className="w-full bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-center gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
        
            <h2 className="mobile-heading-3xl-bold text-[var(--color-content-primary)]">{topTitle}</h2>
            <h2 className="hero-xs text-[var(--color-content-primary)]">{title}</h2>
        
            <p className="mobile-text-m-semibold text-[var(--color-content-primary)]">{subtitle}</p>
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
        <div className="flex flex-col items-center py-[var(--spacing-4xl)] px-[var(--spacing-4xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-4xl)]">
              <h2 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{topTitle}</h2>
              <h2 className="hero-lg text-[var(--color-content-primary)]">{title}</h2>
              <p className="web-text-2xl-regular text-[var(--color-content-primary)]">{subtitle}</p>
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
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full bg-[var(--color-yellow-500)]">
        <div className="flex items-stretch w-full max-w-[1400px] mx-auto gap-[var(--spacing-6xl)] py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
         
          
            <h2 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{topTitle}</h2>
            <h2 className="hero-lg text-[var(--color-content-primary)]">{title}</h2>
            
            <p className="web-text-2xl-regular text-[var(--color-content-primary)]">{subtitle}</p>
      
          <div className="w-1/2 flex flex-col overflow-hidden">
            <Image 
              src={image} 
              alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue" 
              width={600} 
              height={750} 
              className="w-full h-full object-cover flex-1"
            />
          </div>
        </div>
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full bg-[var(--color-yellow-500)]">
      <div className="flex items-stretch w-full max-w-[1600px] mx-auto gap-[var(--spacing-6xl)] py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
          <h2 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{topTitle}</h2>
          <h2 className="hero-2xl text-[var(--color-content-primary)]">{title}</h2>
          <p className="web-text-2xl-regular text-[var(--color-content-primary)]">{subtitle}</p> 
      <div className="w-1/2 flex flex-col overflow-hidden">
          <Image 
            src={image} 
            alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue" 
            width={600} 
            height={750} 
            className="w-full h-full object-cover flex-1"
          />
        </div>
      </div>
    </div>
  );
}

