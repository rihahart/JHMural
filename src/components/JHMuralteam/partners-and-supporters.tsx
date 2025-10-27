"use client";

import React, { useEffect, useRef, useState } from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function PartnersAndSupporters() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const [hasPlayed, setHasPlayed] = useState(false);
  const componentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true);
            const video = entry.target.querySelector('video');
            if (video && video.paused) {
              video.play().catch((error) => {
                console.error("Video playback failed:", error);
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px' }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasPlayed]);

  if (isMobile) {
    return (
      <div ref={componentRef} className="flex flex-col items-center gap-[var(--spacing-2xl)]">
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
          <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
            Our Community Partners & Supporters
          </h2>
          <div className="w-full flex items-center justify-center">
            <video
              ref={videoRef}
              src="/MeetJHMuralTeam/SponsersMobile.mp4"
              className="w-full h-auto object-cover"
              loop={false}
              muted
              playsInline
              controls={false}
              preload="none"
            />
          </div>
            <div className="flex flex-col items-start gap-[var(--spacing-2xl)]">
              <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">
                We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood.
              </p>
              <BorderlessButton
                variant="primary"
                size="small"
                href="/get-involved/partner-with-us"
                trailingIcon="/arrow-right.svg"
                className="font-base translate-y-[-2px]">
                Sponsor a wall
              </BorderlessButton>
            </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div ref={componentRef} className=" flex flex-col items-center gap-[var(--spacing-8xl)]">
        <div className="web-heading-4xl-bold text-left text-[var(--color-content-primary)]">
          Our community partners & supporters
        </div>

        <div className="flex items-center justify-center">
          <video
            ref={videoRef}
            src="/MeetJHMuralTeam/Sponsers.mp4"
            className="w-full h-[auto] object-cover"
            loop={false}
            muted
          />
        </div>

        <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
          <p className="web-text-lg-regular text-[var(--color-content-primary)]">
            We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood.
          </p>
          <BorderlessButton
            variant="primary"
            size="large"
            href="/get-involved/partner-with-us"
            trailingIcon="/arrow-right.svg"
            className="font-black text-3xl">
            Sponsor a wall
          </BorderlessButton>
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div ref={componentRef} className="w-full">
        <div className="flex flex-col items-start gap-[var(--spacing-8xl)]">
        <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
              Our community partners & supporters
            </h2>
         <div className="flex items-start max-w-[1440px] gap-[var(--spacing-2xl)] mx-auto">
          <div className="w-[65%]">
            <video
              ref={videoRef}
              src="/MeetJHMuralTeam/Sponsers.mp4"
              className="w-full h-auto object-cover"
              loop={false}
              muted
            />
          </div>
          <div className="w-[35%] flex flex-col items-start align-stretch  px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
           
            <p className="web-text-lg-regular text-[var(--color-content-primary)]">
              We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood.
            </p>
            <BorderlessButton
              variant="primary"
              size="large"
              href="/get-involved/partner-with-us"
              trailingIcon="/arrow-right.svg"
              className="font-base translate-y-[-2px]">
              Sponsor a wall
            </BorderlessButton>
          </div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={componentRef} className="w-full">
      <div className="flex flex-col items-start gap-[var(--spacing-8xl)]">
        <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
          Our community partners & supporters
        </h2>
      <div className="flex items-start max-w-[1600px] gap-[var(--spacing-2xl)] mx-auto">
        <div className="w-[65%]">
          <video
            ref={videoRef}
            src="/MeetJHMuralTeam/Sponsers.mp4"
            className="w-full h-auto object-cover"
            loop={false}
            muted
            preload="none"
          />
        </div>
        <div className="w-[35%] flex flex-col items-start align-stretch px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
          
          <p className="web-text-lg-regular text-[var(--color-content-primary)]">
            We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood.
          </p>
          <BorderlessButton
            variant="primary"
            size="large"
            href="/get-involved/partner-with-us"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]">
            Sponsor a wall
          </BorderlessButton>
        </div>
      </div>
      </div>
    </div>
  );
}
