"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import NavButton from "./NavButton";
import WebMenu from "./WebMenu";

const HOVER_CLOSE_DELAY = 150; // ms

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isInitialLoad, setIsInitialLoad] = useState(isHome);

  // ensure initial-load styling only for homepage and clear after a short delay
  useEffect(() => {
    if (!isInitialLoad) return;
    if (!isHome) {
      setIsInitialLoad(false);
      return;
    }
    const t = setTimeout(() => setIsInitialLoad(false), 1500);
    return () => clearTimeout(t);
  }, [isInitialLoad, isHome]);

  // Visual state (hero/scroll only for home)
  const [isVisible, setIsVisible] = useState(true);

  // Menus
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const lastYRef = useRef(0);
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const menuElRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hoverEnabled = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false;
  }, []);

  const navItems: Array<{
    name: "Projects" | "Get to know us" | "Get Involved";
    hasDropdown?: boolean;
    submenu: { name: string; href: string }[];
  }> = [
    {
      name: "Projects",
      hasDropdown: true,
      submenu: [{ name: "84th St Mural", href: "/projects/84th-street-mural" }],
    },
    {
      name: "Get to know us",
      hasDropdown: true,
      submenu: [
        { name: "What inspires us", href: "/get-to-know-us/what-inspires-us" },
        { name: "Meet JH Mural Team", href: "/get-to-know-us/meet-jh-mural-team" },
      ],
    },
    {
      name: "Get Involved",
      hasDropdown: true,
      submenu: [
        { name: "Make a donation", href: "/get-involved/make-a-donation" },
        { name: "Partners & Supporters", href: "/get-involved/partners-and-supporters" },
        { name: "Volunteer with us", href: "/get-involved/volunteer-with-us" },
      ],
    },
  ];

  const sectionIsActive = (item: { submenu?: { href: string }[] }) => {
    if (!pathname || typeof window === 'undefined') return false;
    return item.submenu?.some((s) => s.href && pathname.startsWith(s.href)) ?? false;
  };

  // Scroll show/hide + hero color: ONLY on home
  useEffect(() => {
    if (!isHome) {
      // Ensure regular navbar elsewhere
      setIsVisible(true);
      setIsInitialLoad(false);
      return;
    }

    const onScroll = () => {
      const y = window.scrollY;
      if (y === 0 || y < lastYRef.current) setIsVisible(true);
      else if (y > 80) setIsVisible(false);
      if (isInitialLoad && y > 80) setIsInitialLoad(false);
      lastYRef.current = y;
    };

    const opts: AddEventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, opts);
    const t = setTimeout(() => setIsInitialLoad(false), 2000);

    return () => {
      window.removeEventListener("scroll", onScroll, opts);
      clearTimeout(t);
    };
  }, [isHome, isInitialLoad]);

  // Close all menus on route change
  useEffect(() => {
    setIsProjectsDropdownOpen(false);
    setIsGetInvolvedDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  }, [pathname]);

  // Outside click: check triggers container AND dropdown menu
  useEffect(() => {
    const handleOutside = (ev: PointerEvent) => {
      const target = ev.target as Node | null;
      if (!target) return;
      if (desktopNavRef.current?.contains(target)) return;
      if (menuElRef.current?.contains(target)) return;

      setIsProjectsDropdownOpen(false);
      setIsGetInvolvedDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    };
    document.addEventListener("pointerdown", handleOutside, { passive: true });
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsProjectsDropdownOpen(false);
        setIsGetInvolvedDropdownOpen(false);
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Hover helpers
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
      setIsGetInvolvedDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }, HOVER_CLOSE_DELAY);
  };

  const openMenu = (name: "Projects" | "Get to know us" | "Get Involved") => {
    setIsProjectsDropdownOpen(name === "Projects");
    setIsGetInvolvedDropdownOpen(name === "Get Involved");
    setIsAboutDropdownOpen(name === "Get to know us");
  };

  const toggleMenu = (name: "Projects" | "Get to know us" | "Get Involved") => {
    if (name === "Projects") {
      setIsProjectsDropdownOpen((v) => !v);
      setIsGetInvolvedDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    } else if (name === "Get Involved") {
      setIsGetInvolvedDropdownOpen((v) => !v);
      setIsProjectsDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    } else {
      setIsAboutDropdownOpen((v) => !v);
      setIsProjectsDropdownOpen(false);
      setIsGetInvolvedDropdownOpen(false);
    }
  };

  // Check if any menu is open
  const isAnyMenuOpen = isProjectsDropdownOpen || isGetInvolvedDropdownOpen || isAboutDropdownOpen;

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0
        transition-all duration-300 ease-in-out
        ${isHome ? (isVisible ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}
        ${isAnyMenuOpen ? "bg-[var(--color-background-hover)]" : (isHome && isInitialLoad ? "bg-[var(--color-background-brand)]" : "bg-[var(--color-background-primary)]")}
        ${isHome && isInitialLoad && !isAnyMenuOpen ? "" : "shadow-lg"}
        z-50 hidden lg:block
      `}
    >
      <div className="w-full mx-auto flex items-center justify-between py-[var(--spacing-m)] px-[var(--spacing-xl)] lg:px-[var(--spacing-4xl)]" style={{ maxWidth: 'clamp(1000px, calc(1250px + (100vw - 1440px) * 0.7), 1600px)' }}>
        <div className="flex items-end gap-[var(--spacing-2xl)]">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Home">
            <Image
              src={isHome && isInitialLoad && !isAnyMenuOpen ? "/Secondary Logo.svg" : "/logo.svg"}
              alt="Logo"
              width={108}
              height={81}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>

          {/* Desktop Nav */}
          <div
            ref={desktopNavRef}
            className="hidden lg:flex items-center p-[var(--spacing-m)] gap-[var(--spacing-xl)]"
          >
            {navItems.map((item) => {
              const active = sectionIsActive(item);
              const isOpen =
                (item.name === "Projects" && isProjectsDropdownOpen) ||
                (item.name === "Get Involved" && isGetInvolvedDropdownOpen) ||
                (item.name === "Get to know us" && isAboutDropdownOpen);

              return (
                <div key={item.name} className="relative">
                  <NavButton
                    variant="tertiary"
                    isActive={active}
                    isInitialLoad={isHome && isInitialLoad && !isAnyMenuOpen}
                    trailingIcon="/flower.svg"
                    onClick={() => toggleMenu(item.name)}
                    onMouseEnter={() => {
                      if (!hoverEnabled) return;
                      clearCloseTimer();
                      openMenu(item.name);
                    }}
                    onMouseLeave={() => {
                      if (!hoverEnabled) return;
                      scheduleClose();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMenu(item.name);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    className="group"
                  >
                    {item.name}
                  </NavButton>

                  {/* Fixed, full-width dropdown */}
                  <WebMenu
                    ref={menuElRef}
                    isOpen={isOpen}
                    submenu={item.submenu}
                    onMenuEnter={() => {
                      if (!hoverEnabled) return;
                      clearCloseTimer();
                      openMenu(item.name);
                    }}
                    onMenuLeave={() => {
                      if (!hoverEnabled) return;
                      scheduleClose();
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex items-stretch gap-[var(--spacing-m)] h-full">
          <div className="hidden sm:block h-full">
            <Button
              href="https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="h-full px-[var(--spacing-lg)] text-xl flex items-center"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
