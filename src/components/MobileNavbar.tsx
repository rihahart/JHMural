"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

export default function MobileNavbar() {
  const pathname = usePathname();

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsExpanded, setIsMobileProjectsExpanded] = useState(false);
  const [isMobileGetInvolvedExpanded, setIsMobileGetInvolvedExpanded] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);


  const handleToggleExpanded = (itemName: "Projects" | "Get to know us" | "Get Involved") => {
    // Check if the clicked section is already open
    const isCurrentlyOpen = 
      (itemName === "Projects" && isMobileProjectsExpanded) ||
      (itemName === "Get Involved" && isMobileGetInvolvedExpanded) ||
      (itemName === "Get to know us" && isMobileAboutExpanded);
    
    // Close all sections first
    setIsMobileProjectsExpanded(false);
    setIsMobileGetInvolvedExpanded(false);
    setIsMobileAboutExpanded(false);
    
    // If the clicked section was not open, open it
    if (!isCurrentlyOpen) {
      if (itemName === "Projects") setIsMobileProjectsExpanded(true);
      else if (itemName === "Get Involved") setIsMobileGetInvolvedExpanded(true);
      else if (itemName === "Get to know us") setIsMobileAboutExpanded(true);
    }
  };

  const handleCloseAll = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsExpanded(false);
    setIsMobileGetInvolvedExpanded(false);
    setIsMobileAboutExpanded(false);
  };

  // Close on route change
  useEffect(() => {
    handleCloseAll();
  }, [pathname]);

  // ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Navbar shell */}
      <div
        className="
          w-full fixed top-0 left-0 right-0
          transition-all duration-300 ease-in-out
          translate-y-0
          bg-[var(--color-background-primary)]
          shadow-lg
          z-50 block lg:hidden
        "
      >
        <div className="w-full flex justify-between items-center self-stretch py-[var(--spacing-s)] px-[var(--spacing-lg)]">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={90}
              height={68}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>
          

          {/* Right cluster */}
          <div className="flex items-center gap-[var(--spacing-xl)]">
            <div className="h-fill">
              <Button
                href="https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="small"
                trailingIcon="/flower.svg"
                className="py-[var(--spacing-xl)] px-[var(--spacing-xl)] text-xl flex items-center"
              >
                Donate
              </Button>
            </div>
            <div className="flex-shrink-0 scale-115">
              <HamburgerMenu
                onClick={() => setIsMobileMenuOpen(v => !v)}
                initialWhite={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen mobile menu overlay (sibling, sits above navbar) */}
        <MobileMenu
          ref={mobileMenuRef}
          isOpen={isMobileMenuOpen}
          expandedStates={{
            isMobileProjectsExpanded,
            isMobileGetInvolvedExpanded,
            isMobileAboutExpanded,
          }}
          onToggleExpanded={handleToggleExpanded}
          onCloseAll={handleCloseAll}
        />
    </>
  );
}
