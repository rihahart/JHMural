"use client";

import React from "react";
import Image from "next/image";
import NavButton from "./ButtonCollection/NavButton";
import Button from "./ButtonCollection/Button";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <MobileOnly>
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
                  href="/newsletter"
                  trailingIcon={<FaEnvelope className="w-6 h-6" />}
                  className="w-full"
                >
                  Join our newsletter
                </NavButton>
                <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                <NavButton
                  variant="secondary"
                  href="https://www.instagram.com/jhmuralproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={<FaInstagram className="w-6 h-6" />}
                  className="w-full"
                >
                  Follow us on Instagram
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
                  Follow us on Facebook
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
          <p className="text-sm text-[var(--color-content-primary)] pt-[var(--spacing-lg)] pb-[var(--spacing-2xl)] px-[var(--spacing-lg)]">
            Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
          </p>
        </footer>
      </MobileOnly>

      <DesktopOnly>
        <footer className="bg-[var(--color-border-tertiary)]">
          <div className="max-w-[1600px] mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
            <div className="flex items-start justify-between gap-[var(--spacing-8xl)] h-full">
              <div className="flex-1 h-full">
                <Image
                  src="/Footer/Donate.png"
                  alt="Donate to JH Mural Project"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col items-end py-[var(--spacing-xl)] px-[var(--spacing-xl)] gap-[var(--spacing-6xl)] border-[var(--color-content-secondary)] flex-1 min-w-0 h-full">
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
                <div className="flex flex-col border-t-[4px] border-[var(--color-content-secondary)] w-full">
                  <NavButton
                    variant="secondary"
                    href="/newsletter"
                    trailingIcon={<FaEnvelope className="w-6 h-6" />}
                    className="w-full"
                  >
                    Join our newsletter
                  </NavButton>
                  <div className="border-t border-[var(--color-border-primary)] my-0"></div>
                  <NavButton
                    variant="secondary"
                    href="https://www.instagram.com/jhmuralproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    trailingIcon={<FaInstagram className="w-6 h-6" />}
                    className="w-full"
                  >
                    Follow us on Instagram
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
                    Follow us on Facebook
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
          <p className="text-center text-[18px] text-[var(--color-content-primary)] pt-[var(--spacing-lg)] pb-[var(--spacing-6xl)] px-[var(--spacing-6xl)]">
            Jackson Heights Mural Project Inc. is a federally recognized 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent permitted by law. EIN: 39-4461083.
          </p>
        </footer>
      </DesktopOnly>
    </>
  );
}
