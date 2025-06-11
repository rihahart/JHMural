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
    { name: "About", href: "/about" },
    { name: "Support us", href: "/supportus" },
  ];

  return (
    <div
      className={`
        w-full
        sticky top-0
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "shadow-md bg-white" : "bg-[var(--color-background-brand)]"}
        z-50
        px-[var(--spacing-lg)] sm:px-[var(--spacing-xl)] md:px-[var(--spacing-2xl)] lg:px-[var(--spacing-4xl)]
      `}
    >
      <div className="w-full max-w-[1000px] mx-auto flex items-center justify-between py-[var(--spacing-m)]">
        <div className="flex items-center gap-[var(--spacing-xl)]">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo.svg" : "/Secondary Logo.svg"}
              alt="Logo"
              width={70}
              height={50}
              className="cursor-pointer transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-[var(--spacing-xl)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 heading-s ${
                  isScrolled
                    ? "text-[var(--color-content-primary)] hover:text-[var(--color-content-link-hover)]"
                    : "text-[var(--color-content-primary-inverse)]"
                }`}
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
            variant={isScrolled ? "primary" : "tertiary"}
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