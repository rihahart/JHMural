"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import ourVisionData from "@/data/whatInspiresUs/ourVisionData";
import NavButton from "@/components/ButtonCollection/NavButton";

export default function OurVision() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, description, subtitle } = ourVisionData;

  if (isMobile) {
    return (
      <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
        <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">{title}</h1>
        <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">{description}</p>
        <div className="flex flex-col w-full">
          <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
            <NavButton
              variant="primary"
              href="/get-involved"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Join us
            </NavButton>
            </div>
            <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://www.instagram.com/jhmuralproject"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Share our story
              </NavButton>
              </div>
              <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Donate to us
              </NavButton>
              </div>  
          </div>
          <h2 className="mobile-text-lg-black sparkle-text">{subtitle}</h2>
        </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col items-start align-stretch justify-center gap-[var(--spacing-2xl)]">
        <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)] w-1/2 ">{title}</h1>
        <p className="web-text-lg-medium text-[var(--color-content-primary)]">{description}</p>
        <div className="flex flex-col w-full">
             <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="secondary"
                href="/get-involved"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Join us
              </NavButton>
              </div>
              <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
                <NavButton
                variant="secondary"
                href="https://www.instagram.com/jhmuralproject"
                trailingIcon="/arrow-right.svg"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share our story
              </NavButton>
              </div>
              <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
                <NavButton
                variant="secondary"
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Donate to us
              </NavButton>
              </div>
            </div>
            <h2 className="web-text-2xl-black sparkle-text">{subtitle}</h2>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="flex items-start align-stretch justify-center max-w-[1400px] gap-[var(--spacing-8xl)]">
        <h1 className="hero-xs text-[var(--color-content-primary)] w-[40%]">{title}</h1>
        <div className="flex flex-col items-start w-[60%] gap-[var(--spacing-2xl)]">
        <p className="web-text-xl-medium text-[var(--color-content-primary)]">{description}</p>
        <div className="flex flex-col w-full">
          <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
            <NavButton
              variant="primary"
              href="/get-involved"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Join us
            </NavButton>
            </div>
            <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://www.instagram.com/jhmuralproject"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Share our story
              </NavButton>
            </div>
            <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Donate to us
              </NavButton>
            </div>
          
          </div>
          <h2 className="web-text-2xl-black sparkle-text">{subtitle}</h2>
          </div>
          
        </div>
    );
  }

  return (
    <div className="flex justify-center align-stretch items-start max-w-[1600px] gap-[var(--spacing-8xl)]">
      <h1 className="hero-s text-[var(--color-content-primary)] w-[40%]">{title}</h1>
    <div className="flex flex-col items-start w-[60%] gap-[var(--spacing-2xl)]">
      <p className="web-text-2xl-medium text-[var(--color-content-primary)]">{description}</p>
      <div className="flex flex-col w-full">
             <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="/get-involved"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Join us
              </NavButton>
              </div>
              <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://www.instagram.com/jhmuralproject"
                trailingIcon="/arrow-right.svg"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share our story
              </NavButton>
              </div>
              <div className="border-b-[2px] border-[var(--color-content-secondary)] ">
              <NavButton
                variant="primary"
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Donate to us
              </NavButton>
              </div>
            </div>
      <h2 className="web-text-2xl-black sparkle-text">{subtitle}</h2>
      </div>
    </div>
  );
}

