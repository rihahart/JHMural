"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for color changes - make this more sensitive
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle navbar visibility on mobile
      if (window.innerWidth < 768) {
        // md breakpoint
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past threshold
          setIsVisible(false);
        } else {
          // Scrolling up or near top
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
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
    <nav
      className={`w-full absolute top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-background-brand"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center justify-between h-full m-[var(--spacing-lg)]">
        {/* Left side - Logo and Nav Items */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo.svg" : "/Secondary Logo.svg"}
              alt="Logo"
              width={120}
              height={40}
              className="cursor-pointer transition-opacity duration-300"
            />
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-[48px]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300  text-2xl ${
                  isScrolled
                    ? "text-primary hover:text-primary-dark"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - Donate Button */}
        <Link
          href="/donate"
          className={`btn text-lg px-3 py-2 rounded-[8px] transition-colors duration-300 flex items-center gap-2 ${
            isScrolled
              ? "bg-primary text-[var(--color-primary-inverse)] hover:bg-primary-dark "
              : "bg-[var(--color-background)] text-[var(--color-content-secondary)] hover:bg-[var(--color-background-hover)] hover:text-[var(--color-content-primary)]"
          }`}
        >
          Donate
          <Image
            src="/flower.svg"
            alt="Logo"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
}
