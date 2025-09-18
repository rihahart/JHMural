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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileProjectsExpanded, setIsMobileProjectsExpanded] = useState(false);
  const [isMobileGetInvolvedExpanded, setIsMobileGetInvolvedExpanded] = useState(false);
  const [isMobileAboutExpanded, setIsMobileAboutExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY === 0) {
        // At the very top - always show navbar
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > 80) {
        // Scrolling down past navbar height
        setIsVisible(false);
      }

      // Switch to original styling after auto-scroll (around 85px)
      if (isInitialLoad && currentScrollY > 80) {
        setIsInitialLoad(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Set a timer to switch to original styling after the Hero's auto-scroll
    const switchTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000); // After Hero's 1550ms auto-scroll + buffer

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(switchTimer);
    };
  }, [lastScrollY, isInitialLoad]);

  const navItems = [
    { 
      name: "Projects", 
      hasDropdown: true,
      submenu: [
        { name: "84th St Mural", href: "/projects/84th-street-mural" }
      ]
    },
    { 
      name: "Get to know us", 
      href: "/get-to-know-us",
      hasDropdown: true,
      submenu: [
        { name: "What inspires us", href: "/get-to-know-us/what-inspires-us" },
        { name: "Meet JH Mural Team", href: "/get-to-know-us/meet-jh-mural-team" }
      ]
    },
    { 
      name: "Get Involved", 
      hasDropdown: true,
      submenu: [
        { name: "Make a donation", href: "/get-involved/make-a-donation" },
      { name: "Partners & Supporters", href: "/get-involved/partners-and-supporters" },
      { name: "Volunteer with us", href: "/get-involved/volunteer-with-us" },
      ]
    }
   
  ];

  return (
    <div
      className={`
        w-full
        fixed top-0 left-0 right-0
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isInitialLoad ? "bg-[var(--color-brand-700)]" : "bg-[#f9fbfc]"}
        z-50`}
    >
      <div className="w-full mx-auto flex items-center justify-between py-[var(--spacing-lg)] px-6 lg:px-[var(--spacing-8xl)] max-w-[1600px]">
        <div className="flex items-center gap-[var(--spacing-2xl)]">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Home">
            <Image
              src={isInitialLoad ? "/Secondary Logo.svg" : "/logo.svg"}
              alt="Logo"
              width={88}
              height={66}
              className="cursor-pointer transition-opacity duration-300 p-[var(--spacing-2xs)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center p-[var(--spacing-lg)] gap-[var(--spacing-4xl)]">
            {navItems.map((item) => {
              const isActive = item.href ? (pathname === item.href || (pathname === '/' && item.href === '/')) : false;
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name}
                    className="relative group/dropdown"
                    onMouseEnter={() => {
                      if (item.name === "Projects") {
                        setIsProjectsDropdownOpen(true);
                      } else if (item.name === "Get Involved") {
                        setIsGetInvolvedDropdownOpen(true);
                      } else if (item.name === "Get to know us") {
                        setIsAboutDropdownOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === "Projects") {
                        setIsProjectsDropdownOpen(false);
                      } else if (item.name === "Get Involved") {
                        setIsGetInvolvedDropdownOpen(false);
                      } else if (item.name === "Get to know us") {
                        setIsAboutDropdownOpen(false);
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
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
                      
                      {item.href ? (
                        <Link
                          href={item.href!}
                          className={`group flex items-center gap-2 transition-all duration-200 text-lg font-semibold relative ${
                            isInitialLoad 
                              ? 'text-white hover:text-white' 
                              : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                          }`}
                        >
                          <span>{item.name}</span>
                          
                          {/* Dropdown Arrow */}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              (item.name === "Projects" && isProjectsDropdownOpen) || (item.name === "Get Involved" && isGetInvolvedDropdownOpen) || (item.name === "Get to know us" && isAboutDropdownOpen) ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Link>
                      ) : (
                        <div className={`group flex items-center gap-2 transition-all duration-200 text-lg font-semibold relative cursor-pointer ${
                          isInitialLoad 
                            ? 'text-white hover:text-white' 
                            : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                        }`}>
                          <span>{item.name}</span>
                          
                          {/* Dropdown Arrow */}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              (item.name === "Projects" && isProjectsDropdownOpen) || (item.name === "Get Involved" && isGetInvolvedDropdownOpen) || (item.name === "Get to know us" && isAboutDropdownOpen) ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Dropdown Menu */}
                    {((item.name === "Projects" && isProjectsDropdownOpen) || (item.name === "Get Involved" && isGetInvolvedDropdownOpen) || (item.name === "Get to know us" && isAboutDropdownOpen)) && (
                      <div className={`absolute top-full left-[12px] mt-0 w-56 rounded-md shadow-lg py-1 z-50 ${
                        isInitialLoad 
                          ? 'bg-[var(--color-brand-600)] border border-[var(--color-brand-500)]' 
                          : 'bg-white border border-[var(--color-neutral-300)]'
                      }`}>
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-3 text-base font-normal transition-all duration-200 ${
                              isInitialLoad 
                                ? 'text-white hover:bg-[var(--color-brand-500)] hover:text-white' 
                                : 'text-[var(--color-content-primary)] hover:bg-[var(--color-neutral-200)] hover:text-[var(--color-brand-600)]'
                            }`}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <div key={item.name} className="flex items-center gap-2">
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
                  
                  {item.href ? (
                    <Link
                      href={item.href!}
                      className={`group flex items-center transition-all duration-200 text-lg font-semibold relative ${
                        isInitialLoad 
                          ? 'text-white hover:text-white' 
                          : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <div className={`group flex items-center transition-all duration-200 text-lg font-semibold relative cursor-pointer ${
                      isInitialLoad 
                        ? 'text-white hover:text-white' 
                        : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                    }`}>
                      <span>{item.name}</span>
                    </div>
                  )}
                </div>
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
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isMobileMenuOpen) {
                  setIsMobileProjectsExpanded(false);
                  setIsMobileGetInvolvedExpanded(false);
                  setIsMobileAboutExpanded(false);
                }
              }}
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
              ${isInitialLoad ? "bg-[var(--color-brand-700)]" : "bg-white"}
              py-[var(--spacing-m)]
              px-[var(--spacing-lg)] sm:px-[var(--spacing-xl)] md:px-[var(--spacing-2xl)] lg:px-[var(--spacing-4xl)]
              flex flex-col gap-[var(--spacing-m)]
              shadow-md
            `}
          >
            {navItems.map((item) => {
              const isActive = item.href ? (pathname === item.href || (pathname === '/' && item.href === '/')) : false;
              
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="flex flex-col">
                    <div className="flex items-center gap-2">
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
                      
                      {item.href ? (
                        <Link
                          href={item.href!}
                          className={`group flex-1 transition-all duration-200 text-lg font-semibold ${
                            isInitialLoad 
                              ? 'text-white hover:text-white' 
                              : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <div className={`group flex-1 transition-all duration-200 text-lg font-semibold cursor-pointer ${
                          isInitialLoad 
                            ? 'text-white hover:text-white' 
                            : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                        }`}>
                          <span>{item.name}</span>
                        </div>
                      )}
                      
                      {/* Expand/Collapse Button */}
                      <button
                        onClick={() => {
                          if (item.name === "Projects") {
                            setIsMobileProjectsExpanded(!isMobileProjectsExpanded);
                          } else if (item.name === "Get Involved") {
                            setIsMobileGetInvolvedExpanded(!isMobileGetInvolvedExpanded);
                          } else if (item.name === "Get to know us") {
                            setIsMobileAboutExpanded(!isMobileAboutExpanded);
                          }
                        }}
                        className={`p-2 rounded-md transition-colors duration-200 flex-shrink-0 ${
                          isInitialLoad 
                            ? 'hover:bg-[var(--color-brand-600)]' 
                            : 'hover:bg-[var(--color-neutral-200)]'
                        }`}
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isInitialLoad 
                              ? 'text-white' 
                              : 'text-[var(--color-content-secondary)]'
                          } ${
                            (item.name === "Projects" && isMobileProjectsExpanded) || (item.name === "Get Involved" && isMobileGetInvolvedExpanded) || (item.name === "Get to know us" && isMobileAboutExpanded) ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Mobile Submenu - Only show when expanded */}
                    {((item.name === "Projects" && isMobileProjectsExpanded) || (item.name === "Get Involved" && isMobileGetInvolvedExpanded) || (item.name === "Get to know us" && isMobileAboutExpanded)) && (
                      <div className={`ml-8 mt-2 flex flex-col gap-1 pl-4 border-l-2 ${
                        isInitialLoad 
                          ? 'border-[var(--color-brand-500)]' 
                          : 'border-[var(--color-neutral-300)]'
                      }`}>
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block py-3 text-base font-normal transition-all duration-200 ${
                              isInitialLoad 
                                ? 'text-white hover:text-white' 
                                : 'text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)]'
                            }`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProjectsExpanded(false);
                              setIsMobileGetInvolvedExpanded(false);
                              setIsMobileAboutExpanded(false);
                            }}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <div key={item.name} className="flex items-center gap-2">
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
                  
                  {item.href ? (
                    <Link
                      href={item.href!}
                      className={`group transition-all duration-200 text-lg font-semibold ${
                        isInitialLoad 
                          ? 'text-white hover:text-white' 
                          : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <div className={`group transition-all duration-200 text-lg font-semibold cursor-pointer ${
                      isInitialLoad 
                        ? 'text-white hover:text-white' 
                        : `hover:text-[var(--color-brand-600)] ${isActive ? 'text-[var(--color-brand-600)]' : 'text-[var(--color-content-primary)]'}`
                    }`}>
                      <span>{item.name}</span>
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