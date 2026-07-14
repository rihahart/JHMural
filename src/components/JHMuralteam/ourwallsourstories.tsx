"use client";

import React from "react";
import Image from "next/image";
import Button from "../ButtonCollection/Button";

export default function OurWallsOurStories() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-[1600px] mx-auto bg-[var(--color-orange-500)] gap-[var(--spacing-2xl)] md:gap-[var(--spacing-4xl)] lg:gap-[var(--spacing-6xl)] py-[var(--spacing-2xl)] md:py-[var(--spacing-4xl)] lg:py-[var(--spacing-6xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-4xl)] lg:px-[var(--spacing-6xl)]">
      <div className="flex flex-col items-start w-full lg:w-1/2 gap-[var(--spacing-2xl)] lg:gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-6xl)]">
        <h2 className="logo-mobile-heading-5xl md:logo-web-heading-3xl lg:logo-web-heading-5xl xl:logo-hero-xs text-[var(--color-yellow-300)] flex flex-col gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-6xl)]">
          <span className="lg:hidden">Our Walls. Our Stories. Our Home.</span>
          <span className="hidden lg:block">Our Walls.</span>
          <span className="hidden lg:block">Our Stories.</span>
          <span className="hidden lg:block">Our Home.</span>
        </h2>

        <div className="w-full overflow-hidden lg:hidden">
          <Image
            src="/MeetJHMuralTeam/ArtFundRecipient.png"
            alt="Art Fund Recipient"
            width={600}
            height={750}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]">
          <p className="mobile-text-2xl-semibold md:web-text-xl-semibold lg:web-text-2xl-semibold xl:web-text-3xl-semibold text-[var(--color-yellow-300)]">
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

      <div className="hidden lg:block w-1/2 overflow-hidden">
        <Image
          src="/MeetJHMuralTeam/ArtFundRecipient.png"
          alt="Art Fund Recipient"
          width={600}
          height={750}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
