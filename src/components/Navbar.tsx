"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Mural", href: "/mural" },
    { name: "About us", href: "/about" },
    { name: "Support us", href: "/supportus" },
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
      <div className="w-full mx-auto flex items-center justify-between py-[var(--spacing-lg)] px-[var(--spacing-8xl)] max-w-[1600px]">
        <div className="flex items-center gap-[var(--spacing-2xl)]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={50}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center p-[var(--spacing-lg)] gap-[var(--spacing-4xl)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-300 text-lg-medium text-[var(--color-content-primary)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-[var(--spacing-m)]">
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

          <div className="lg:hidden">
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors duration-300 heading-s text-[var(--color-content-primary)] hover:text-[var(--color-content-link-hover)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}