"use client";

import React from "react";
import Image from "next/image";
import Button from "../ButtonCollection/Button";

export default function OurWallsOurStories() {
  return (
    <div className="flex flex-col md:flex-row items-center w-full max-w-[1600px] mx-auto bg-[var(--color-orange-500)] gap-[var(--spacing-2xl)] md:gap-[var(--spacing-6xl)] py-[var(--spacing-2xl)] md:py-[var(--spacing-6xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-6xl)]">
      <div className="flex flex-col items-start w-full md:w-1/2 gap-[var(--spacing-2xl)] md:gap-[var(--spacing-6xl)]">
        <div className="flex flex-col items-start text-[var(--color-yellow-300)] gap-[var(--spacing-2xl)] md:gap-[var(--spacing-6xl)]">
          <h2 className="logo-mobile-heading-5xl md:logo-hero-xs">
            <span className="md:block">Our Walls.</span>
            <span className="md:block">Our Stories.</span>
            <span className="md:block">Our Home.</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-2xl)]">
          <p className="mobile-text-2xl-semibold md:web-text-3xl-semibold text-[var(--color-yellow-300)]">
            Join us in bringing color and creativity to Jackson Heights!
          </p>
          <Button
            variant="secondary"
            size="small"
            href="https://www.instagram.com/jhmuralproject"
            target="_blank"
            rel="noopener noreferrer"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]"
          >
            Connect with us
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
          src="/MeetJHMuralTeam/ArtFundRecipient.png"
          alt="Art Fund Recipient"
          width={600}
          height={750}  
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
