"use client";
import Link from "next/link";
import React, { forwardRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavButton from "./ButtonCollection/NavButton";
import ExitButton from "./ExitButton";


interface MobileMenuProps {
  isOpen: boolean;
  expandedStates: { isMobileProjectsExpanded: boolean; isMobileAboutExpanded: boolean };
  onToggleExpanded: (itemName: "Projects" | "Get to know us") => void;
  onCloseAll: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, expandedStates, onToggleExpanded, onCloseAll }, ref) => {
    const pathname = usePathname();
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
              <div className={`${expandedStates.isMobileProjectsExpanded ? 'block' : 'hidden'} space-y-[var(--spacing-m)]`}>
                <NavButton
                  variant="secondary"
                  href="/projects/84th-street-mural"
                  onClick={onCloseAll}
                  className="font-normal"
                  isActive={pathname === "/projects/84th-street-mural"}
                >
                  84th St Mural
                </NavButton>
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
              <div className={`${expandedStates.isMobileAboutExpanded ? 'block' : 'hidden'} space-y-[var(--spacing-m)]`}>
                <NavButton
                  variant="secondary"
                  href="/get-to-know-us/what-inspires-us"
                  onClick={onCloseAll}
                  className="font-normal"
                  isActive={pathname === "/get-to-know-us/what-inspires-us"}
                >
                  What inspires us
                </NavButton>
                <NavButton
                  variant="secondary"
                  href="/get-to-know-us/meet-jh-mural-team"
                  onClick={onCloseAll}
                  className="font-normal"
                  isActive={pathname === "/get-to-know-us/meet-jh-mural-team"}
                >
                  Meet JH Mural Team
                </NavButton>
              </div>
            </div>

            {/* Get Involved container */}
            <div className="flex flex-col items-start gap-[var(--spacing-m)] border-b border-b-[var(--color-border-disabled)] w-full">
              <NavButton
                variant="primary"
                href="/get-involved"
                onClick={onCloseAll}
                trailingIcon="/flower.svg"
                isActive={pathname === "/get-involved"}
                className="w-full"
              >
                Get Involved
              </NavButton>
            </div>
          </div>
      </div>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
