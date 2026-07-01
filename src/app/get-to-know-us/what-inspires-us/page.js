"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import MuralImpact from "@/components/getToKnowUs/whatInspiresUs/MuralImpact";
import OurVision from "@/components/getToKnowUs/whatInspiresUs/OurVision";

export default function WhatInspiresUs() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className= "hero-xs text-[var(--color-content-primary)]">What inspires us</h1>
            <p className="mobile-text-lg-semibold text-[var(--color-content-primary)]">JH Mural Project was born out of Jackson Heights, the most diverse community on earth. Here, every blank wall is an opportunity to change the world. That's why we picked up our brushes. This is our chance to add color to the concrete. To turn blight into beauty. Apathy into pride. And turn walls into windows that show the world what unity looks like. We paint because we believe in this place. Because our children deserve a more colorful future. Because art reminds us who we are and who we can be. We want to carry this diversity, unity, and love far beyond these walls, to all of Queens, and all of New York.</p>
          </div>
          <div className="relative w-full overflow-hidden h-[250px]">
            <Image src="/WhatInspiresUs.jpg" alt="Suzanne Riha" fill className="object-cover object-center" />
          </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-s text-[var(--color-content-primary)]">What inspires us</h1>
            <p className="web-text-m-semibold text-[var(--color-content-primary)]">JH Mural Project was born out of Jackson Heights, the most diverse community on earth. Here, every blank wall is an opportunity to change the world. That's why we picked up our brushes. This is our chance to add color to the concrete. To turn blight into beauty. Apathy into pride. And turn walls into windows that show the world what unity looks like. We paint because we believe in this place. Because our children deserve a more colorful future. Because art reminds us who we are and who we can be. We want to carry this diversity, unity, and love far beyond these walls, to all of Queens, and all of New York.</p>
          </div>
          <div className="relative w-full overflow-hidden h-[400px]">
            <Image src="/WhatInspiresUs.jpg" alt="Suzanne Riha" fill className="object-cover object-center" />
          </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col mx-auto items-start justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start  align-stretch gap-[var(--spacing-xl)]">
          <h1 className="hero-lg text-[var(--color-content-primary)]">What inspires us</h1>
          <p className="web-text-xl-semibold text-[var(--color-content-primary)]">JH Mural Project was born out of Jackson Heights, the most diverse community on earth. Here, every blank wall is an opportunity to change the world. That's why we picked up our brushes. This is our chance to add color to the concrete. To turn blight into beauty. Apathy into pride. And turn walls into windows that show the world what unity looks like. We paint because we believe in this place. Because our children deserve a more colorful future. Because art reminds us who we are and who we can be. We want to carry this diversity, unity, and love far beyond these walls, to all of Queens, and all of New York.</p>
          </div>
          <div className="relative w-full overflow-hidden h-[500px]">
            <Image src="/WhatInspiresUs.jpg" alt="Suzanne Riha" fill className="object-cover object-center" />
           </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
       <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
        <h1 className="hero-2xl text-[var(--color-content-primary)]">What inspires us</h1>
        <p className="web-text-2xl-semibold text-[var(--color-content-primary)]">JH Mural Project was born out of Jackson Heights, the most diverse community on earth. Here, every blank wall is an opportunity to change the world. That's why we picked up our brushes. This is our chance to add color to the concrete. To turn blight into beauty. Apathy into pride. And turn walls into windows that show the world what unity looks like. We paint because we believe in this place. Because our children deserve a more colorful future. Because art reminds us who we are and who we can be. We want to carry this diversity, unity, and love far beyond these walls, to all of Queens, and all of New York.</p>
       </div>
       <div className="relative w-full overflow-hidden h-[600px]">
        <Image src="/WhatInspiresUs.jpg" alt="Suzanne Riha" fill className="object-cover object-center" />
       </div>
       <OurVision />
       <DecorativeDivider />
       <MuralImpact />
      </div>
    </div>
  );
}
