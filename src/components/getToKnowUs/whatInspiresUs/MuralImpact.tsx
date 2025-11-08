"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import muralImpactData from "@/data/muralImpactData";

export default function MuralImpact() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-xl)] gap-[var(--spacing-4xl)] justify-center">
          {muralImpactData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[var(--spacing-xl)]">
               <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
                <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">{item.title}</h2>
                <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">{item.description}</p>
               </div>

              <div className="w-full">
                <Image 
                  src={item.photo.src} 
                  alt={item.photo.alt} 
                  width={768} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
                 <div className="flex justify-between w-full">
                  <span className="mobile-text-s-regular text-[var(--color-content-secondary)]">{item.photoCredit}</span>
                  <span className="mobile-text-s-regular text-[var(--color-content-secondary)]">{item.artistCredit}</span>
                </div>
              </div>
              
               
          
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-xl)] gap-[var(--spacing-6xl)] justify-center">
          {muralImpactData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[var(--spacing-2xl)]">
              <div className="flex flex-col items-start py-[var(--spacing-2xl)] px-[var(--spacing-lg)] gap-[var(--spacing-lg)]">
                <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{item.title}</h2>
                <p className="web-text-lg-regular text-[var(--color-content-primary)]">{item.description}</p>
              </div>
              <div className="w-full">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  width={768}
                  height={400}
                  className="w-full h-full object-cover"
                />
                  <div className="flex justify-between w-full">
                  <span className="mobile-text-s-regular text-[var(--color-content-secondary)]">{item.photoCredit}</span>
                  <span className="mobile-text-s-regular text-[var(--color-content-secondary)]">{item.artistCredit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-8xl)] [var(--spacing-6xl)] gap-[var(--spacing-8xl)] justify-center">
          {muralImpactData.map((item, index) => (
            <div key={index} className="flex items-start gap-[var(--spacing-2xl)] max-w-[1440px]">
              <div className="w-[55%]">
                <Image 
                  src={item.photo.src} 
                  alt={item.photo.alt} 
                  width={720} 
                  height={500} 
                  className="w-full h-auto object-cover"
                />
                 <div className="flex justify-between w-full">
                  <span className="web-text-m-regular text-[var(--color-content-secondary)]">{item.photoCredit}</span>
                  <span className="web-text-m-regular text-[var(--color-content-secondary)]">{item.artistCredit}</span>
                </div>
              </div>
              <div className="w-[45%] flex flex-col items-start gap-[var(--spacing-xl)]">
                <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{item.title}</h2>
                <p className="web-text-xl-regular text-[var(--color-content-primary)]">{item.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center py-[var(--spacing-xl)] gap-[var(--spacing-6xl)] justify-center">
        {muralImpactData.map((item, index) => (
            <div key={index} className="flex items-start gap-[var(--spacing-8xl)] max-w-[1600px]">
            <div className="w-[65%]">
              <Image 
                src={item.photo.src} 
                alt={item.photo.alt} 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between w-full">
                <span className="web-text-lg-regular text-[var(--color-content-secondary)]">{item.photoCredit}</span>
                <span className="web-text-lg-regular text-[var(--color-content-secondary)]">{item.artistCredit}</span>
              </div>
            </div>
            <div className="w-[35%] flex flex-col items-start align-stretch py-[var(--spacing-lg)] px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
              <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">{item.title}</h2>
              <p className="web-text-2xl-regular text-[var(--color-content-primary)]">{item.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
