'use client'
import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import { coFounderData } from "@/data/coFounderData";

export default function CoFounderInfo() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center gap-[var(--spacing-4xl)] w-full">
        <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)] text-left w-full">
          Behind the scenes team
        </h2>
        {coFounderData.map((founder) => (
          <div key={founder.id} className="flex flex-col w-full gap-[var(--spacing-s)] overflow-hidden">
            <div className="relative w-full h-[200px]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-[var(--spacing-lg)] py-[var(--spacing-lg)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className=" mobile-heading-4xl-bold text-[var(--color-content-primary)]">{founder.name}</h3>
                <p className="mobile-text-lg-semibold text-[var(--color-content-secondary)]">{founder.title}</p>
              </div>
              <p className="mobile-text-lg-medium  text-[var(--color-content-primary)]">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col items-center gap-[var(--spacing-6xl)] w-full h-auto">
        <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)] text-left w-full px-[var(--spacing-4xl)]">
          Behind the scenes team
        </h2>
        {coFounderData.map((founder) => (
          <div key={founder.id} className="flex flex-col w-full py-[var(--spacing-xl)] gap-[var(--spacing-m)] overflow-hidden h-auto">
            <div className="relative w-full h-[300px]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col px-[var(--spacing-lg)] items-start  py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{founder.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{founder.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {founder.description}
                  </p>
                </div>
          </div>
        ))}
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="flex flex-col items-center gap-[var(--spacing-6xl)] w-full">
      <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
        Behind the scenes team
      </h2>  
      <div className="flex items-start gap-[var(--spacing-6xl)] w-full h-[600px]">
        <>
          {coFounderData.map((founder, index) => (
            <React.Fragment key={founder.id}>
              <div className="flex items-start gap-[var(--spacing-2xl)] flex-1">
                <div className="flex flex-col w-full align-center px-[var(--spacing-s)] align-start py-[var(--spacing-lg)] gap-[var(--spacing-s)]">
                <div className="relative w-full h-[250px] ">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{founder.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{founder.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {founder.description}
                  </p>
                </div>
                </div>
              </div>
              {index < coFounderData.length - 1 && (
                <div className="border-l-4 border-[var(--color-content-primary)] h-[650px]" />
              )}
            </React.Fragment>
          ))}
        </>
      </div>
    </div>
    );
  }

  // Large Desktop
  return (
    <div className="flex flex-col items-start gap-[var(--spacing-8xl)] w-full">
      <h2 className="hero-xs text-[var(--color-content-primary)]">
        Behind the scenes team
      </h2>  
      <div className="flex items-start gap-[var(--spacing-6xl)] w-full h-[650px]">
        <>
          {coFounderData.map((founder, index) => (
            <React.Fragment key={founder.id}>
              <div className="flex items-start gap-[var(--spacing-6xl)] flex-1">
                <div className="flex flex-col w-full align-center px-[var(--spacing-xl)] align-start py-[var(--spacing-xl)] gap-[var(--spacing-m)]">
                <div className="relative w-full h-[300px] ">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{founder.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{founder.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {founder.description}
                  </p>
                </div>
                </div>
              </div>
              {index < coFounderData.length - 1 && (
                <div className="border-l-4 border-[var(--color-content-primary)] h-[650px]" />
              )}
            </React.Fragment>
          ))}
        </>
      </div>
    </div>
  );
}
