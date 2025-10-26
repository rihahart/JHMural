"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import CoFounderInfo from "@/components/JHMuralteam/coFounderInfo";
import DecorativeDivider from "@/components/getToKnowUs/DecorativeDivider";
import BorderlessButton from "@/components/ButtonCollection/BorderlessButton";
import OurWallsOurStories from "@/components/JHMuralteam/ourwallsourstories";
import PartnersAndSupporters from "@/components/JHMuralteam/partners-and-supporters";


export default function MeetJHMuralTeam() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-xs text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
            <p className="web-text-m-semibold text-[var(--color-content-primary)]">The Jackson Heights Mural Project is a local, community-led nonprofit built on the support of people who love Jackson Heights. Our work is made possible through the collective efforts of local artists, nonprofits, sponsors, and neighbors who share a love for our neighborhood and a belief in the power of public art.</p>
              <BorderlessButton
           variant="primary"
           size="small"
           href="/getinvolved/partners-and-supporters"
           trailingIcon="/arrow-right.svg"
           className="font-base translate-y-[-2px]">
           Get involved
         </BorderlessButton>
          </div>
          <OurWallsOurStories />
          <DecorativeDivider />
          <PartnersAndSupporters />
          <DecorativeDivider />
          <CoFounderInfo />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-s text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
            <p className="web-text-m-semibold text-[var(--color-content-primary)]">The Jackson Heights Mural Project is a local, community-led nonprofit built on the support of people who love Jackson Heights. Our work is made possible through the collective efforts of local artists, nonprofits, sponsors, and neighbors who share a love for our neighborhood and a belief in the power of public art.</p>
            <BorderlessButton
           variant="primary"
           size="large"
           href="/get-involved/partners-and-supporters"
           trailingIcon="/arrow-right.svg"
           className="font-base translate-y-[-2px]">
           Get involved
         </BorderlessButton>
          </div>
          <OurWallsOurStories />
          <DecorativeDivider />
          <PartnersAndSupporters />
          <DecorativeDivider />
          <CoFounderInfo />
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col mx-auto items-start justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-lg text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
            <p className="web-text-xl-semibold text-[var(--color-content-primary)]">The Jackson Heights Mural Project is a local, community-led nonprofit built on the support of people who love Jackson Heights. Our work is made possible through the collective efforts of local artists, nonprofits, sponsors, and neighbors who share a love for our neighborhood and a belief in the power of public art.</p>
            <BorderlessButton
           variant="primary"
           size="large"
           href="/get-involved/partners-and-supporters"
           trailingIcon="/arrow-right.svg"
           className="font-base translate-y-[-2px]">
           Get involved
         </BorderlessButton>
          </div>
          <OurWallsOurStories />
          <DecorativeDivider />
          <PartnersAndSupporters />
          <DecorativeDivider />
          <CoFounderInfo />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
          <h1 className="hero-2xl text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
          <p className="web-text-2xl-semibold text-[var(--color-content-primary)]">The Jackson Heights Mural Project is a local, community-led nonprofit built on the support of people who love Jackson Heights. Our work is made possible through the collective efforts of local artists, nonprofits, sponsors, and neighbors who share a love for our neighborhood and a belief in the power of public art.</p>
          <BorderlessButton
           variant="primary"
           size="large"
           href="/get-involved/partners-and-supporters"
           trailingIcon="/arrow-right.svg"
           className="font-base translate-y-[-2px]">
           Get involved
         </BorderlessButton>
        </div>
        <OurWallsOurStories />
        <DecorativeDivider />
        <PartnersAndSupporters />
        <DecorativeDivider />
        <CoFounderInfo />
      </div>
    </div>
  );
}


