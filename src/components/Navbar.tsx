"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
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
    `}
  >
    
      <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between py-[var(--spacing-m)]">
        {/* Logo and Nav Links */}
        <div className="flex items-center gap-[var(--spacing-3xl)]">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo.svg" : "/Secondary Logo.svg"}
              alt="Logo"
              width={95}
              height={66}
              className="cursor-pointer transition-opacity duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center gap-[var(--spacing-4xl)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 text-xl ${
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
      </div>
    </div>
  );
}
