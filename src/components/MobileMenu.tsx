"use client";
import React, { forwardRef, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import NavButton from "./NavButton";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{
    name: "Projects" | "Get to know us" | "Get Involved";
    hasDropdown?: boolean;
    submenu: { name: string; href: string }[];
  }>;
  expandedStates: {
    isMobileProjectsExpanded: boolean;
    isMobileGetInvolvedExpanded: boolean;
    isMobileAboutExpanded: boolean;
  };
  onToggleExpanded: (itemName: "Projects" | "Get to know us" | "Get Involved") => void;
  onCloseAll: () => void;
  isInitialLoad: boolean;
  isHome: boolean;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(function MobileMenu(
  { 
    isOpen, 
    navItems, 
    expandedStates, 
    onToggleExpanded, 
    onCloseAll,
    isInitialLoad,
    isHome
  },
  ref
) {
  const pathname = usePathname();
  const localRef = useRef<HTMLDivElement | null>(null);

  // forward the ref
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") ref(localRef.current);
    else (ref as React.RefObject<HTMLDivElement | null>).current =
      localRef.current;
  }, [ref, isOpen]);

  const sectionIsActive = (item: { submenu?: { href: string }[] }) => {
    if (!pathname || typeof window === 'undefined') return false;
    return item.submenu?.some((s) => s.href && pathname.startsWith(s.href)) ?? false;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={localRef}
      role="menu"
      aria-label="Mobile navigation menu"
      className={`
        fixed top-0 left-0 right-0 w-screen h-screen z-50
        bg-[var(--color-background-hover)] shadow-lg
        py-[var(--spacing-m)]
        px-6 lg:px-[var(--spacing-4xl)]
        flex flex-col gap-[var(--spacing-m)]
        ${isOpen ? 'animate-down-in' : 'animate-down-out'}
      `}
      style={{
        transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)'
      }}
    >
      {/* Mobile Navbar inside menu */}
      <div className="flex justify-between items-center self-stretch py-[var(--spacing-m)] px-6 lg:px-[var(--spacing-4xl)] mb-4">
        <Link href="/" aria-label="Home">
            <Image
              src={isHome && isInitialLoad ? "/Secondary Logo.svg" : "/logo.svg"}
              alt="Logo"
              width={108}
              height={81}
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
          <div className="flex-shrink-0">
            <button
              onClick={onCloseAll}
              className="p-[var(--spacing-s)] rounded-md transition-colors duration-200 hover:bg-[var(--color-background-hover)]"
              aria-label="Close menu"
            >
              <svg
                className="w-[var(--spacing-2xl)] h-[var(--spacing-2xl)] text-[var(--color-content-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>


      {navItems.map((item) => {
        const active = sectionIsActive(item);
        const expanded =
          (item.name === "Projects" && expandedStates.isMobileProjectsExpanded) ||
          (item.name === "Get Involved" && expandedStates.isMobileGetInvolvedExpanded) ||
          (item.name === "Get to know us" && expandedStates.isMobileAboutExpanded);

        return (
          <div key={item.name} className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <NavButton
                  variant="primary"
                  onClick={() => onToggleExpanded(item.name)}
                  className="w-full justify-start"
                  isActive={active}
                  trailingIcon="/flower.svg"
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onToggleExpanded(item.name);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="menu"
                  aria-expanded={expanded}
                >
                  {item.name}
                </NavButton>
              </div>
            </div>

            {expanded && (
              <div
                className="ml-8 mt-2 flex flex-col gap-1 pl-4 border-l-2 border-[var(--color-neutral-300)]"
              >
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="block py-3 text-base font-normal transition-all duration-200 text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)]"
                    onClick={onCloseAll}
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
  );
});

export default MobileMenu;
