"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "./ButtonCollection/Button";
import DesktopNavItem from "./navbar/DesktopNavItem";
import type { NavItem, NavName } from "./navbar/types";

const HOVER_CLOSE_DELAY = 150; // ms

const navItems: NavItem[] = [
  {
    name: "Projects",
    hasDropdown: true,
    submenu: [{ name: "84th st mural", href: "/projects/84th-street-mural" }],
  },
  {
    name: "About us",
    hasDropdown: true,
    submenu: [
      { name: "What inspires us", href: "/get-to-know-us/what-inspires-us" },
      { name: "Meet JH mural team", href: "/get-to-know-us/meet-jh-mural-team" },
    ],
  },
  {
    name: "Get involved",
    hasDropdown: false,
    submenu: [{ name: "Get involved", href: "/get-involved" }],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const [isInitialLoad, setIsInitialLoad] = useState(isHome);
  const [isAtTop, setIsAtTop] = useState(true);

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
  const [isMuralsDropdownOpen, setIsMuralsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavName | null>(null);

  const lastYRef = useRef(0);
  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const menuElRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hoverEnabled = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ??
      false
    );
  }, []);

  const sectionIsActive = (item: { submenu?: { href: string }[]; hasDropdown?: boolean }) => {
    if (!pathname) return false;
    // For items without dropdown, check if pathname exactly matches the submenu href
    if (item.hasDropdown === false && item.submenu && item.submenu.length > 0) {
      const href = item.submenu[0].href;
      return pathname === href || pathname === `${href}/`;
    }
    // For dropdown items, check if pathname starts with any submenu href
    return (
      item.submenu?.some((s) => s.href && pathname.startsWith(s.href)) ?? false
    );
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
      setIsAtTop(y === 0);
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
    setIsMuralsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  }, [pathname]);

  // Outside click: check triggers container AND dropdown menu
  useEffect(() => {
    const handleOutside = (ev: PointerEvent) => {
      const target = ev.target as Node | null;
      if (!target) return;
      if (desktopNavRef.current?.contains(target)) return;
      if (menuElRef.current?.contains(target)) return;

      setIsMuralsDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    };
    document.addEventListener("pointerdown", handleOutside, { passive: true });
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMuralsDropdownOpen(false);
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
      setIsMuralsDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }, HOVER_CLOSE_DELAY);
  };

  const openMenu = (name: NavName) => {
    setIsMuralsDropdownOpen(name === "Projects");
    setIsAboutDropdownOpen(name === "About us");
  };

  const toggleMenu = (name: NavName) => {
    if (name === "Projects") {
      setIsMuralsDropdownOpen((v) => !v);
      setIsAboutDropdownOpen(false);
    } else {
      setIsAboutDropdownOpen((v) => !v);
      setIsMuralsDropdownOpen(false);
    }
  };

  // Check if any menu is open
  const isAnyMenuOpen = isMuralsDropdownOpen || isAboutDropdownOpen;

  return (
    <div
      className={`
        w-full fixed top-0 left-0 right-0
        transition-all duration-300 ease-in-out
        ${isHome
          ? isVisible
            ? "translate-y-0"
            : "-translate-y-full"
          : "translate-y-0"
        }
        ${isAnyMenuOpen
          ? "bg-[var(--color-background-hover)]"
          : isHome && isAtTop
            ? "bg-[var(--color-background-brand)]"
            : "bg-[var(--color-background-primary)]"
        }
        ${isHome && isAtTop && !isAnyMenuOpen ? "" : "shadow-xs"}
        z-50 hidden lg:block
      `}
    >
      <div
        className="w-full mx-auto flex items-center justify-between py-[var(--spacing-m)]"
        style={{
          maxWidth:
            "clamp(1000px, calc(1250px + (100vw - 1440px) * 0.7), 1600px)",
        }}
      >
        <div className="flex items-center gap-[var(--spacing-2xl)]">
          <Link
            href="/"
            className="flex items-end flex-shrink-0"
            aria-label="Home"
          >
            <Image
              src={
                isHome && isAtTop && !isAnyMenuOpen
                  ? "/Secondary Logo.svg"
                  : "/logo.svg"
              }
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
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.name}
                item={item}
                active={sectionIsActive(item)}
                isOpen={
                  (item.name === "Projects" && isMuralsDropdownOpen) ||
                  (item.name === "About us" && isAboutDropdownOpen)
                }
                isInitialLoad={isHome && isAtTop && !isAnyMenuOpen}
                isHovered={hoveredItem === item.name}
                hoverEnabled={hoverEnabled}
                menuRef={menuElRef}
                onNavigate={(href) => router.push(href)}
                onToggleMenu={toggleMenu}
                onOpenMenu={openMenu}
                onClearCloseTimer={clearCloseTimer}
                onScheduleClose={scheduleClose}
                onHoverChange={(value) => setHoveredItem(value ? item.name : null)}
              />
            ))}
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex items-stretch gap-[var(--spacing-m)] h-full">
          <div className="hidden sm:block h-full">
            {/* TODO: Add Stripe checkout URL from environment variable hardcoded for now */}
            <Button
              href={process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant={isHome && isAtTop && !isAnyMenuOpen ? "primary-on-brand" : "primary"}
              size="large"
              trailingIcon="/flower.svg"
              className="h-full px-[var(--spacing-lg)] text-xl flex items-center !rounded-none"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}