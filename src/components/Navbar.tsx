"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        // Scrolling down past a threshold
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Supporters", href: "/supporters" },
    { name: "Get involved", href: "/getinvolved" },
  ];

  return (
    <div
      className={`
        w-full
        fixed top-0 left-0 right-0
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-[#f9fbfc]" : ""}
        z-50`}
    >
      <div className="w-full mx-auto flex items-center justify-between py-[var(--spacing-lg)] px-6 lg:px-[var(--spacing-8xl)] max-w-[1600px]">
        <div className="flex items-center gap-[var(--spacing-2xl)]">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Home">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={60}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center p-[var(--spacing-lg)] gap-[var(--spacing-4xl)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 transition-all duration-200 text-lg-medium text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)] relative"
                >
                  <span>{item.name}</span>
                  
                  {/* Flower icon - always visible when active, shows on hover when inactive */}
                  <div className={`transition-all duration-200 ease-in-out ${
                    isActive 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    <Image
                      src="/flower-red.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:brightness-[1.2] group-hover:saturate-150"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-[var(--spacing-m)]">
          {/* Desktop Donate Button */}
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

          {/* Mobile Donate Button - Smaller */}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isScrolled={isScrolled}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`
              lg:hidden
              absolute top-full left-0 right-0
              bg-white
              py-[var(--spacing-m)]
              px-[var(--spacing-lg)] sm:px-[var(--spacing-xl)] md:px-[var(--spacing-2xl)] lg:px-[var(--spacing-4xl)]
              flex flex-col gap-[var(--spacing-m)]
              shadow-md
            `}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/');
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between transition-all duration-200 heading-s text-[var(--color-content-primary)] hover:text-[var(--color-content-link-hover)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  
                  {/* Flower icon - always visible when active, shows on hover when inactive */}
                  <div className={`transition-all duration-200 ease-in-out ${
                    isActive 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    <Image
                      src="/flower-red.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:brightness-[1.2] group-hover:saturate-150"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}