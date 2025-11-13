"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import Button from "../ButtonCollection/Button";

export default function OurWallsOurStories() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full bg-[var(--color-orange-500)]">
      <div className="flex flex-col items-center gap-[var(--spacing-2xl)] py-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
          <h2 className="logo-mobile-heading-5xl text-[var(--color-yellow-300)]">
            Our Walls. Our Stories. Our Home.
          </h2>
          <div className=" w-full h-full overflow-hidden">
            <Image
              src="/MeetJHMuralTeam/ArtFundRecipient.png"
              alt="Art Fund Recipient"
              width={600}
              height={750}
              className="w-full h-full object-cover"
            />
          </div>
          <p className=" mobile-text-2xl-semibold text-[var(--color-yellow-300)]">Join us in bringing color and creativity to Jackson Heights!
      </p>
      <Button
        variant="secondary"
        size="small"
        href="https://www.instagram.com/jhmuralproject"
        target="_blank"
        rel="noopener noreferrer"
        trailingIcon="/arrow-right.svg"
        className="font-base translate-y-[-2px]">
        Connect with us
      </Button>
      </div>
      </div>
    </div>
  );
       
  }

  if (isTablet) {
    return (
      <div className="w-full bg-[var(--color-orange-500)]">
        <div className="flex flex-col items-center py-[var(--spacing-4xl)] px-[var(--spacing-4xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-4xl)]">
            <h2 className="logo-web-heading-3xl text-[var(--color-yellow-300)]">
              Our Walls. Our Stories. Our Home.
            </h2>
            <div className=" w-full h-full overflow-hidden">
              <Image
                src="/MeetJHMuralTeam/ArtFundRecipient.png"
                alt="Art Fund Recipient"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
        <p className=" web-text-xl-semibold text-[var(--color-yellow-300)]">Join us in bringing color and creativity to Jackson Heights!
        </p>
        <Button
          variant="secondary"
          size="small"
          href="https://www.instagram.com/jhmuralproject"
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon="/arrow-right.svg"
          className="font-base translate-y-[-2px]">
          Connect with us
        </Button>

        </div>

        </div>
          
        </div>
      </div>
    );
  }

  


  if (isDesktop1440px) {
    const isSmallDesktop = typeof window !== 'undefined' && window.innerWidth <= 1180;
    
    return (
      <div className=" flex items-center w-full max-w-[1400px] mx-auto bg-[var(--color-orange-500)] gap-[var(--spacing-6xl)] py-[var(--spacing-6xl)] px-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
      <div className="flex flex-col items-start w-1/2 h-full gap-[var(--spacing-2xl)]">
        <div className={`flex flex-col items-start ${isSmallDesktop ? 'logo-web-heading-3xl' : 'logo-web-heading-5xl'} text-[var(--color-yellow-300)] gap-[var(--spacing-2xl)]`}>
        <h1>
          Our Walls.
        </h1>
        <h1>
          Our Stories.
        </h1>
        <h1>
          our home.
        </h1>
        </div>
        <div className="flex flex-col align-stretch items-start gap-[var(--spacing-2xl)]">
        <p className=" web-text-2xl-semibold text-[var(--color-yellow-300)]">
        Join us in bringing color and creativity to Jackson Heights!
        </p>
        <Button
          variant="secondary"
          size="small"
          href="https://www.instagram.com/jhmuralproject"
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon="/arrow-right.svg"
          className="font-base translate-y-[-2px]">
          Connect with us
        </Button>
        </div>
      </div>
      
      <div className="w-1/2 h-full overflow-hidden">
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

  return (
    <div className=" flex items-center w-full max-w-[1600px] mx-auto bg-[var(--color-orange-500)] gap-[var(--spacing-6xl)] py-[var(--spacing-6xl)] px-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
      <div className="flex flex-col items-start w-1/2 gap-[var(--spacing-6xl)]">
        <div className="flex flex-col items-start logo-hero-xs  text-[var(--color-yellow-300)] gap-[var(--spacing-6xl)]">
        <h1>
          Our Walls.
        </h1>
        <h1>
          Our Stories.
        </h1>
        <h1>
          our home.
        </h1>
        </div>
        <div className="flex flex-col items-start gap-[var(--spacing-2xl)]">
        <p className="web-text-3xl-semibold text-[var(--color-yellow-300)]">
        Join us in bringing color and creativity to Jackson Heights!
        </p>
        <Button
          variant="secondary"
          size="small"
          href="https://www.instagram.com/jhmuralproject"
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon="/arrow-right.svg"
          className="font-base translate-y-[-2px]">
          Connect with us
        </Button>
        </div>
      </div>
      
      <div className="w-1/2 overflow-hidden">
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
