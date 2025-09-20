"use client";
import Link from "next/link";
import React, { forwardRef } from "react";
import Image from "next/image";       
import NavButton from "./NavButton";
import ExitButton from "./ExitButton";


interface MobileMenuProps {
  isOpen: boolean;
  expandedStates: { isMobileProjectsExpanded: boolean; isMobileGetInvolvedExpanded: boolean; isMobileAboutExpanded: boolean };
  onToggleExpanded: (itemName: "Projects" | "Get to know us" | "Get Involved") => void;
  onCloseAll: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, expandedStates, onToggleExpanded, onCloseAll }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-[60] bg-[var(--color-background-primary)]"
      >
        <div className="flex flex-col py-[var(--spacing-m)] px-[var(--spacing-lg)] gap-[var(--spacing-xl)]">
          {/* Header aligned with navbar */}
          <div className="w-full flex justify-between items-center self-stretch">
            <Link href="/" aria-label="Home" onClick={onCloseAll}>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={90}
                height={68}
                className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
              />
            </Link>
            <ExitButton onClick={onCloseAll} />
          </div>
          
          {/* Menu content */}
          <div className="flex flex-col items-start gap-[var(--spacing-m)] border-t-4 border-t-[var(--color-content-secondary)]">
            {/* Projects container */}
            <div className="flex flex-col items-start gap-[var(--spacing-m)] border-b border-b-[var(--color-border-disabled)] w-full">
              <NavButton
                variant="primary"
                onClick={() => onToggleExpanded("Projects")}
                isActive={expandedStates.isMobileProjectsExpanded}
                trailingIcon="/flower.svg"
                aria-expanded={expandedStates.isMobileProjectsExpanded}
                className="w-full"
              >
                Projects
              </NavButton>
              <div className={`ml-4 space-y-2 ${expandedStates.isMobileProjectsExpanded ? 'block' : 'hidden'}`}>
                <a
                  href="/projects/84th-street-mural"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  84th St Mural
                </a>
              </div>
            </div>

            {/* Get to know us container */}
            <div className="flex flex-col items-start gap-[var(--spacing-m)] border-b border-b-[var(--color-border-disabled)] w-full">
              <NavButton
                variant="primary"
                onClick={() => onToggleExpanded("Get to know us")}
                isActive={expandedStates.isMobileAboutExpanded}
                trailingIcon="/flower.svg"
                aria-expanded={expandedStates.isMobileAboutExpanded}
                className="w-full"
              >
                Get to know us
              </NavButton>
              <div className={`ml-4 space-y-2 ${expandedStates.isMobileAboutExpanded ? 'block' : 'hidden'}`}>
                <a
                  href="/get-to-know-us/what-inspires-us"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  What inspires us
                </a>
                <a
                  href="/get-to-know-us/meet-jh-mural-team"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  Meet JH Mural Team
                </a>
              </div>
            </div>

            {/* Get Involved container */}
            <div className="flex flex-col items-start gap-[var(--spacing-m)] border-b border-b-[var(--color-border-disabled)] w-full">
              <NavButton
                variant="primary"
                onClick={() => onToggleExpanded("Get Involved")}
                isActive={expandedStates.isMobileGetInvolvedExpanded}
                trailingIcon="/flower.svg"
                aria-expanded={expandedStates.isMobileGetInvolvedExpanded}
                className="w-full"
              >
                Get Involved
              </NavButton>
              <div className={`ml-4 space-y-2 ${expandedStates.isMobileGetInvolvedExpanded ? 'block' : 'hidden'}`}>
                <a
                  href="/get-involved/make-a-donation"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  Make a donation
                </a>
                <a
                  href="/get-involved/partners-and-supporters"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  Partners & Supporters
                </a>
                <a
                  href="/get-involved/volunteer-with-us"
                  onClick={onCloseAll}
                  className="block py-1 text-gray-600 hover:text-gray-900"
                >
                  Volunteer with us
                </a>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
