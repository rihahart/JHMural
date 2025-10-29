"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import artistInfoData from "@/data/84thStreetMural/artistInfo";

export default function ArtistInfo() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, subtitle, artistStatement, image } = artistInfoData;

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex flex-col items-center gap-[var(--spacing-2xl)]">
          <div className="w-full h-full overflow-hidden">
            <Image 
              src={image} 
              alt="Noah Bassman, artist behind the Jackson Heights Mural" 
              width={768} 
              height={400} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[4px] bg-[var(--color-content-primary)]"></div>
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">{title}</h2>
            <p className="mobile-text-lg-semibold text-[var(--color-content-primary)]">{subtitle}</p>
            <p className="mobile-text-lg-black text-[var(--color-content-primary)]">&ldquo;{artistStatement}&rdquo;</p>
          </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full">
        <div className="flex flex-col items-center py-[var(--spacing-4xl)] px-[var(--spacing-4xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <div className="w-full h-full overflow-hidden">
              <Image
                src={image}
                alt="Noah Bassman, artist behind the Jackson Heights Mural"
                width={768}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[4px] min-h-[4px] bg-[var(--color-content-primary)]"></div>
            <div className="flex flex-col items-start gap-[var(--spacing-2xl)]">
              <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{title}</h2>
              <p className="web-text-lg-regular text-[var(--color-content-primary)]">{subtitle}</p>
              <p className="web-text-lg-black text-[var(--color-content-primary)]">&ldquo;{artistStatement}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full">
        <div className="flex items-center w-full max-w-[1400px] mx-auto gap-[var(--spacing-2xl)]">
          <div className="w-1/2 flex flex-col overflow-hidden">
            <Image 
              src={image} 
              alt="Noah Bassman, artist behind the Jackson Heights Mural" 
              width={600} 
              height={750} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-[4px] min-w-[4px] flex-shrink-0 bg-[var(--color-content-primary)]" style={{ alignSelf: 'stretch' }}></div>
          <div className="flex flex-col items-start w-1/2 gap-[var(--spacing-xl)] px-[var(--spacing-md)] py-[var(--spacing-xl)]">
            <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{title}</h2>
            <p className="web-text-lg-regular text-[var(--color-content-primary)]">{subtitle}</p>
            <p className="web-text-lg-black text-[var(--color-content-primary)]">&ldquo;{artistStatement}&rdquo;</p>
          </div>
        </div>
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full">
      <div className="flex items-center w-full max-w-[1600px] mx-auto gap-[var(--spacing-2xl)]">
        <div className="w-1/2 flex flex-col overflow-hidden">
          <Image 
            src={image} 
            alt="Noah Bassman, artist behind the Jackson Heights Mural" 
            width={600} 
            height={750} 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-[4px]  flex-shrink-0 bg-[var(--color-content-primary)]" style={{ alignSelf: 'stretch' }}></div>
        <div className="flex flex-col items-center w-1/2 gap-[var(--spacing-2xl)] py-[var(--spacing-xl)] px-[var(--spacing-xl)]">
          <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{title}</h2>
          <p className="web-text-2xl-regular text-[var(--color-content-primary)]">{subtitle}</p>
          <p className="web-text-2xl-black text-[var(--color-content-primary)]">&ldquo;{artistStatement}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

