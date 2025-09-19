"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import NavButton from "./NavButton";
import HamburgerMenu from "./HamburgerMenu";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileProjectsExpanded, setIsMobileProjectsExpanded] = useState(false);
  const [isMobileGetInvolvedExpanded, setIsMobileGetInvolvedExpanded] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);

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

  const sectionIsActive = (item: { submenu?: { href: string }[] }) =>
    item.submenu?.some((s) => pathname?.startsWith(s.href)) ?? false;

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
    setIsMobileMenuOpen(false);
    setIsMobileProjectsExpanded(false);
    setIsMobileGetInvolvedExpanded(false);
    setIsMobileAboutExpanded(false);
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
        setIsMobileMenuOpen(false);
        setIsMobileProjectsExpanded(false);
        setIsMobileGetInvolvedExpanded(false);
        setIsMobileAboutExpanded(false);
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

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0
        transition-transform duration-300 ease-in-out
        ${isHome ? (isVisible ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}
        ${isHome && isInitialLoad ? "bg-[var(--color-background-brand)]" : "bg-[var(--color-background-primary)]"}
        z-50
      `}
    >
      <div className="w-full mx-auto flex items-center justify-between py-[var(--spacing-lg)] px-6 lg:px-[var(--spacing-8xl)] max-w-[1600px]">
        <div className="flex items-center gap-[var(--spacing-2xl)]">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Home">
            <Image
              src={isHome && isInitialLoad ? "/Secondary Logo.svg" : "/logo.svg"}
              alt="Logo"
              width={88}
              height={66}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>

          {/* Desktop Nav */}
          <div
            ref={desktopNavRef}
            className="hidden lg:flex items-center p-[var(--spacing-lg)] gap-[var(--spacing-2xl)]"
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
                    isInitialLoad={isHome && isInitialLoad}
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
        <div className="flex items-center gap-3 lg:gap-[var(--spacing-m)]">
          <div className="hidden sm:block">
            <Button
              href="https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
            >
              Donate
            </Button>
          </div>
          <div className="sm:hidden">
            <Button
              href="https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="small"
              trailingIcon="/flower.svg"
            >
              Donate
            </Button>
          </div>
          <div className="lg:hidden flex-shrink-0">
            <HamburgerMenu
              onClick={() => setIsMobileMenuOpen(v => !v)}
              initialWhite={isHome && isInitialLoad} // <-- pass prop here
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`
              lg:hidden absolute top-full left-0 right-0
              ${isHome && isInitialLoad ? "bg-[var(--color-background-brand)]" : "bg-[var(--color-background-primary)]"}
              py-[var(--spacing-m)]
              px-[var(--spacing-lg)] sm:px-[var(--spacing-xl)] md:px-[var(--spacing-2xl)] lg:px-[var(--spacing-4xl)]
              flex flex-col gap-[var(--spacing-m)] shadow-md
            `}
          >
            {navItems.map((item) => {
              const active = sectionIsActive(item);
              const expanded =
                (item.name === "Projects" && isMobileProjectsExpanded) ||
                (item.name === "Get Involved" && isMobileGetInvolvedExpanded) ||
                (item.name === "Get to know us" && isMobileAboutExpanded);

              return (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/flower-red.svg"
                      alt=""
                      width={24}
                      height={24}
                      className={`w-6 h-6 transition-all duration-200 ${
                        active ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    />
                    <div
                      className={`group flex-1 transition-all duration-200 text-lg font-semibold cursor-pointer ${
                        isHome && isInitialLoad
                          ? "text-white hover:text-white"
                          : `hover:text-[var(--color-content-brand)] ${
                              active ? "text-[var(--color-content-brand)]" : "text-[var(--color-content-primary)]"
                            }`
                      }`}
                    >
                      <span>{item.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        if (item.name === "Projects") setIsMobileProjectsExpanded((v) => !v);
                        else if (item.name === "Get Involved") setIsMobileGetInvolvedExpanded((v) => !v);
                        else if (item.name === "Get to know us") setIsMobileAboutExpanded((v) => !v);
                      }}
                      className={`p-2 rounded-md transition-colors duration-200 flex-shrink-0 ${
                        isHome && isInitialLoad ? "hover:bg-[var(--color-background-brand-hover)]" : "hover:bg-[var(--color-background-hover)]"
                      }`}
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isHome && isInitialLoad ? "text-white" : "text-[var(--color-content-secondary)]"
                        } ${expanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {expanded && (
                    <div
                      className={`ml-8 mt-2 flex flex-col gap-1 pl-4 border-l-2 ${
                        isHome && isInitialLoad ? "border-[var(--color-background-brand)]" : "border-[var(--color-neutral-300)]"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block py-3 text-base font-normal transition-all duration-200 ${
                            isHome && isInitialLoad
                              ? "text-white hover:text-white"
                              : "text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)]"
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileProjectsExpanded(false);
                            setIsMobileGetInvolvedExpanded(false);
                            setIsMobileAboutExpanded(false);
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
