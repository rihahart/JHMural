"use client";

import React, { useEffect, useRef, useState } from "react";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function PartnersAndSupporters() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = componentRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true);
            const video = entry.target.querySelector("video");
            if (video && video.paused) {
              video.play().catch((error) => {
                console.error("Video playback failed:", error);
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px" }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div ref={componentRef} className="w-full">
      {/* Mobile + tablet: stacked */}
      <div className="flex flex-col items-center gap-[var(--spacing-2xl)] md:gap-[var(--spacing-8xl)] lg:hidden">
        <h2 className="mobile-heading-5xl-bold md:web-heading-4xl-bold w-full text-left text-[var(--color-content-primary)]">
          <span className="md:hidden">Our Community Partners & Supporters</span>
          <span className="hidden md:inline">Our community partners & supporters</span>
        </h2>

        <div className="w-full flex items-center justify-center">
          <video
            src="/MeetJHMuralTeam/SponsersMobile.mp4"
            className="w-full h-auto object-cover md:hidden"
            loop={false}
            muted
            playsInline
            controls={false}
            preload="none"
          />
          <video
            src="/MeetJHMuralTeam/Sponsers.mp4"
            className="hidden md:block w-full h-auto object-cover"
            loop={false}
            muted
            playsInline
            controls={false}
            preload="none"
          />
        </div>

        <div className="flex flex-col items-start gap-[var(--spacing-2xl)] md:gap-[var(--spacing-xl)] w-full">
          <p className="mobile-text-lg-medium md:web-text-lg-regular text-[var(--color-content-primary)]">
            We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood. If you are interested in sponsoring a wall, please reach out our team.
          </p>
          <BorderlessButton
            variant="primary"
            size="small"
            href="mailto:jhmuralproject@gmail.com?subject=Interested%20in%20Sponsoring%20a%20Wall"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px] md:hidden"
          >
            Email us
          </BorderlessButton>
          <BorderlessButton
            variant="primary"
            size="large"
            href="mailto:jhmuralproject@gmail.com?subject=Interested%20in%20Sponsoring%20a%20Wall"
            trailingIcon="/arrow-right.svg"
            className="hidden md:inline-flex font-black text-3xl"
          >
            Email us
          </BorderlessButton>
        </div>
      </div>

      {/* Desktop: side by side */}
      <div className="hidden lg:flex flex-col items-start gap-[var(--spacing-8xl)]">
        <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
          Our community partners & supporters
        </h2>
        <div className="flex items-start w-full max-w-[1600px] gap-[var(--spacing-2xl)] mx-auto">
          <div className="w-[65%]">
            <video
              src="/MeetJHMuralTeam/Sponsers.mp4"
              className="w-full h-auto object-cover"
              loop={false}
              muted
              playsInline
              controls={false}
              preload="none"
            />
          </div>
          <div className="w-[35%] flex flex-col items-start px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
            <p className="web-text-lg-regular text-[var(--color-content-primary)]">
              We are grateful to the community partners, sponsors, and supporters who make our work possible. Their generosity helps us bring color and connection to Jackson Heights. We&apos;re always looking to partner with local businesses, community programs, and organizations that care about Jackson Heights. Your support helps us create public art that uplifts our neighborhood. If you are interested in sponsoring a wall, please reach out our team.
            </p>
            <BorderlessButton
              variant="primary"
              size="large"
              href="mailto:jhmuralproject@gmail.com?subject=Interested%20in%20Sponsoring%20a%20Wall"
              trailingIcon="/arrow-right.svg"
              className="font-base translate-y-[-2px]"
            >
              Email us
            </BorderlessButton>
          </div>
        </div>
      </div>
    </div>
  );
}
