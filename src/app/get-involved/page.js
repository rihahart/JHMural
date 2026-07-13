"use client";

import React from "react";
import HeroBanner from "@/components/getInvolved/HeroBanner";
import JobDescription from "@/components/getInvolved/JobDescription";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

export default function GetInvolved() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
      <HeroBanner />
      <MobileOnly>
        <div className="flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]">
          <JobDescription />
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex max-w-[1600px] mx-auto px-[var(--spacing-6xl)] py-[var(--spacing-8xl)] gap-[var(--spacing-8xl)]">
          <div className="w-1/2">
            <JobDescription />
          </div>
        </div>
      </DesktopOnly>
    </div>
  );
}
