"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ButtonCollection/Button";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

export default function MobileNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Initial load state for homepage
  const [isInitialLoad, setIsInitialLoad] = useState(isHome);

  // Scroll show/hide: all pages
  const [isVisible, setIsVisible] = useState(true);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMuralsExpanded, setIsMobileMuralsExpanded] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const lastYRef = useRef(0);

  // Scroll show/hide (all pages) + initial-load state (home only)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) {
        if (y > 80) setIsInitialLoad(false);
        else setIsInitialLoad(true);
      }
      if (y === 0 || y < lastYRef.current) setIsVisible(true);
      else if (y > 80) setIsVisible(false);
      lastYRef.current = y;
    };

    const opts: AddEventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, opts);

    return () => {
      window.removeEventListener("scroll", onScroll, opts);
    };
  }, [isHome]);

  const handleToggleExpanded = (itemName: "Projects" | "About us") => {
    const isCurrentlyOpen =
      (itemName === "Projects" && isMobileMuralsExpanded) ||
      (itemName === "About us" && isMobileAboutExpanded);

    setIsMobileMuralsExpanded(false);
    setIsMobileAboutExpanded(false);

    if (!isCurrentlyOpen) {
      if (itemName === "Projects") setIsMobileMuralsExpanded(true);
      else if (itemName === "About us") setIsMobileAboutExpanded(true);
    }
  };

  const handleCloseAll = () => {
    setIsMobileMenuOpen(false);
    setIsMobileMuralsExpanded(false);
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
        className={`
          w-full fixed top-0 left-0 right-0
          transition-all duration-300 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isHome && isInitialLoad ? "bg-[var(--color-background-brand)]" : "bg-[var(--color-background-primary)]"}
          ${isHome && isInitialLoad ? "" : "shadow-xs"}
          z-50 block lg:hidden
        `}
      >
        <div className="w-full flex justify-between items-center self-stretch py-[var(--spacing-s)] px-[var(--spacing-lg)]">
          <Link href="/" aria-label="Home">
            <Image
              src={isHome && isInitialLoad ? "/Secondary Logo.svg" : "/logo.svg"}
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
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                target="_blank"
                rel="noopener noreferrer"
                variant={isHome && isInitialLoad ? "primary-on-brand" : "primary"}
                size="small"
                trailingIcon="/flower.svg"
                className="py-[var(--spacing-lg)] px-[var(--spacing-lg)] text-xl flex items-center "
              >
                Donate
              </Button>
            </div>
            <div className="flex-shrink-0 scale-115">
              <HamburgerMenu
                onClick={() => setIsMobileMenuOpen(v => !v)}
                initialWhite={isHome && isInitialLoad}
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
            isMobileMuralsExpanded,
            isMobileAboutExpanded,
          }}
          onToggleExpanded={handleToggleExpanded}
          onCloseAll={handleCloseAll}
        />
    </>
  );
}
