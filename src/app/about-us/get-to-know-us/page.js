"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import MuralImpact from "@/components/getToKnowUs/whatInspiresUs/MuralImpact";
import OurVision from "@/components/getToKnowUs/whatInspiresUs/OurVision";

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

export default function WhatInspiresUs() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center pt-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] px-[var(--spacing-lg)] gap-[var(--spacing-5xl)] justify-center">
            <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
                <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
                  About Us
                </h1>
                <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                JH Mural Project is a non-profit based in Jackson Heights, Queens that partners with local artists to paint murals and turn neighborhoods into open air galleries. We identify neighborhoods that need support and bring together local artists, community members, businesses, and city officials to create a series of murals that brighten the neighborhood, bring art and beauty to the community, and contribute to the economic growth of local businesses.
                </p>
                <div className="relative w-full overflow-hidden h-[130px]">
                  <Image
                    src="/WhatInspiresUs.jpg"
                    alt="MuralOpeningPic"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
            </div>
         
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center pt-[var(--spacing-5xl)] pb-[var(--spacing-10xl)] px-[var(--spacing-2xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
             About Us
            </h1>
            <p className="web-text-m-medium text-[var(--color-content-primary)]">
             JH Mural Project is a non-profit based in Jackson Heights, Queens that partners with local artists to paint murals and turn neighborhoods into open air galleries. We identify neighborhoods that need support and bring together local artists, community members, businesses, and city officials to create a series of murals that brighten the neighborhood, bring art and beauty to the community, and contribute to the economic growth of local businesses.
            </p>
              <div className="relative w-full overflow-hidden h-[250px]">
            <Image
              src="/WhatInspiresUs.jpg"
              alt="MuralOpeningPic"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          </div>
        
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col mx-auto items-center justify-center pt-[var(--spacing-7xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
              About Us
            </h1>
            <p className="web-text-m-medium text-[var(--color-content-primary)]">
              JH Mural Project is a non-profit based in Jackson Heights, Queens that partners with local artists to paint murals and turn neighborhoods into open air galleries. We identify neighborhoods that need support and bring together local artists, community members, businesses, and city officials to create a series of murals that brighten the neighborhood, bring art and beauty to the community, and contribute to the economic growth of local businesses.
            </p>
          </div>
          <div className="relative w-full overflow-hidden h-[350px]">
            <Image
              src="/WhatInspiresUs.jpg"
              alt="MuralOpeningPic"
              fill
              sizes="(max-width: 1800px) 100vw, 1800px"
              className="object-cover object-center"
            />
          </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-dvh">
      <div className="flex flex-col max-w-[2000px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
          <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
            About Us
          </h1>
          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
           JH Mural Project is a non-profit based in Jackson Heights, Queens that partners with local artists to paint murals and turn neighborhoods into open air galleries. We identify neighborhoods that need support and bring together local artists, community members, businesses, and city officials to create a series of murals that brighten the neighborhood, bring art and beauty to the community, and contribute to the economic growth of local businesses.
          </p>
        </div>
        <div className="relative w-full overflow-hidden h-[450px]">
          <Image
            src="/WhatInspiresUs.jpg"
            alt="MuralOpeningPic"
            fill
            sizes="(max-width: 2000px) 100vw, 2000px"
            className="object-cover object-center"
          />
        </div>
        <OurVision />
        <DecorativeDivider />
        <MuralImpact />
      </div>
    </div>
  );
}
