"use client";

import React from "react";
import Image from "next/image";
import NavButton from "./ButtonCollection/NavButton";
import Button from "./ButtonCollection/Button";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
        <div className="mx-auto py-[var(--spacing-xl)] px-[var(--spacing-lg)]">
          <div className="flex flex-col items-start justify-between gap-[var(--spacing-xl)] h-full">
            <Button
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
            >
              Donate
            </Button>
            <div className="flex-1 h-full">
              <Image
                src="/Footer/Donate.png"
                alt="Donate to JH Mural Project"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
              <NavButton
                variant="secondary"
                href="https://www.instagram.com/jhmuralproject"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaInstagram className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on instagram
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] my-0"></div>
              <NavButton
                variant="secondary"
                href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaFacebook className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on facebook
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] "></div>
              <NavButton
                variant="secondary"
                href="/get-involved"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Get involved
              </NavButton>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (isTablet) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
        <div className="mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
          <div className="flex flex-col items-center justify-between gap-[var(--spacing-2xl)] h-full">
            <div className="flex items-start gap-[var(--spacing-2xl)]">
              <div className="w-[60%]">
                <Image
                  src="/Footer/Donate.png"
                  alt="Donate to JH Mural Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <Button
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                trailingIcon="/flower.svg"
                className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit ml-auto"
              >
                Donate
              </Button>
            </div>

            <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
              <NavButton
                variant="secondary"
                href="https://www.instagram.com/jhmuralproject"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaInstagram className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on instagram
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] my-0"></div>
              <NavButton
                variant="secondary"
                href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaFacebook className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on facebook
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] "></div>
              <NavButton
                variant="secondary"
                href="/get-involved"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Get involved
              </NavButton>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Desktop (1440px+) - Two column layout with Donate image and links
  if (isDesktop1440px) {
    return (
      <footer className="bg-[var(--color-border-tertiary)]">
        <div className="max-w-[1600px] mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
          <div className="flex items-start justify-between gap-[var(--spacing-8xl)] h-full">
            {/* Left Section - Donate Image */}
            <div className="flex-1 h-full">
              <Image
                src="/Footer/Donate.png"
                alt="Donate to JH Mural Project"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col items-end py-[var(--spacing-xl)] px-[var(--spacing-xl)] gap-[var(--spacing-6xl)] border-[var(--color-content-secondary)] flex-1 min-w-0 h-full">
              {/* Donate Button */}
              <Button
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                trailingIcon="/flower.svg"
                className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
              >
                Donate
              </Button>

              {/* Social Links with NavButton secondary */}
              <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
                <NavButton
                  variant="secondary"
                  href="https://www.instagram.com/jhmuralproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={<FaInstagram className="w-6 h-6" />}
                  className="w-full"
                >
                  Follow us on instagram
                </NavButton>
                <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                <NavButton
                  variant="secondary"
                  href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={<FaFacebook className="w-6 h-6" />}
                  className="w-full"
                >
                  Follow us on facebook
                </NavButton>
                <div className="border-t border-[var(--color-border-primary)] "></div>
                <NavButton
                  variant="secondary"
                  href="/get-involved"
                  trailingIcon="/arrow-right.svg"
                  className="w-full"
                >
                  Get involved
                </NavButton>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Desktop (1440px+)
  return (
    <footer className="bg-[var(--color-border-tertiary)]">
      <div className="max-w-[1600px] mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
        <div className="flex items-start justify-between gap-[var(--spacing-8xl)] h-full">
          {/* Left Section - Donate Image */}
          <div className="flex-1 h-full">
            <Image
              src="/Footer/Donate.png"
              alt="Donate to JH Mural Project"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Section - Links */}
          <div className="flex flex-col items-end py-[var(--spacing-xl)] px-[var(--spacing-xl)] gap-[var(--spacing-6xl)] border-[var(--color-content-secondary)] flex-1 min-w-0 h-full">
            {/* Donate Button */}
            <Button
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
            >
              Donate
            </Button>

            {/* Social Links with NavButton secondary */}
            <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
              <NavButton
                variant="secondary"
                href="https://www.instagram.com/jhmuralproject"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaInstagram className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on instagram
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] my-0"></div>
              <NavButton
                variant="secondary"
                href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon={<FaFacebook className="w-6 h-6" />}
                className="w-full"
              >
                Follow us on facebook
              </NavButton>
              <div className="border-t border-[var(--color-border-primary)] "></div>
              <NavButton
                variant="secondary"
                href="/get-involved"
                trailingIcon="/arrow-right.svg"
                className="w-full"
              >
                Get involved
              </NavButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
