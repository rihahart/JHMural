"use client";

import React from "react";
import EmployeeInfo from "@/components/JHMuralteam/employeeInfo";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import BorderlessButton from "@/components/ButtonCollection/BorderlessButton";
import OurWallsOurStories from "@/components/JHMuralteam/ourwallsourstories";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

export default function MeetJHMuralTeam() {
  return (
    <div className="w-full min-h-screen">
      <MobileOnly>
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-xs text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
            <p className="mobile-text-lg-semibold text-[var(--color-content-primary)]">We are deeply grateful to the partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to the communities we serve. We&apos;re always looking to partner with businesses, community programs, and organizations who care about public art and the neighborhoods it touches. What to support our work? </p>
            <BorderlessButton
              variant="primary"
              size="small"
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon="/arrow-right.svg"
              className="font-base translate-y-[-2px]"
            >
              Donate
            </BorderlessButton>
          </div>
          <EmployeeInfo />
          <DecorativeDivider />
          <OurWallsOurStories />
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="hero-2xl text-[var(--color-content-primary)]">Meet JH Mural Team</h1>
            <p className="web-text-2xl-semibold text-[var(--color-content-primary)]">We are deeply grateful to the partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to the communities we serve. We&apos;re always looking to partner with businesses, community programs, and organizations who care about public art and the neighborhoods it touches. What to support our work? </p>
            <BorderlessButton
              variant="primary"
              size="large"
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon="/arrow-right.svg"
              className="font-base translate-y-[-2px]"
            >
              Donate
            </BorderlessButton>
          </div>
          <EmployeeInfo />
          <DecorativeDivider />
          <OurWallsOurStories />
        </div>
      </DesktopOnly>
    </div>
  );
}

