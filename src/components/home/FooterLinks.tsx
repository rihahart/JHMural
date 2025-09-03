"use client";

import React from "react";

export default function FooterLinks() {
  const links = [
    { 
      text: "Artists: Lets Collaborate", 
      variant: "primary",
      href: "/getinvolved"
    },
    { 
      text: "Got a wall to paint? Let us know!", 
      variant: "primary",
      href: "mailto:jhmuralproject@gmail.com"
    },
    { 
      text: "Hear us", 
      variant: "secondary",
      href: "/about"
    },
    { 
      text: "Subscribe to Our Newsletter", 
      variant: "secondary",
      href: "#newsletter"
    },
    { 
      text: "Volunteer with us", 
      variant: "outline",
      href: "/getinvolved"
    },
    { 
      text: "Slack Us: Join the conversation", 
      variant: "outline",
      href: "#slack"
    },
    { 
      text: "Support Our Mission", 
      variant: "ghost",
      href: "https://www.gofundme.com/f/JHmuralproject"
    },
    { 
      text: "Follow on Instagram", 
      variant: "ghost",
      href: "https://www.instagram.com/jhmuralproject"
    },
    { 
      text: "Connect with Us", 
      variant: "text",
      href: "/supporters"
    },
    { 
      text: "Learn More", 
      variant: "text",
      href: "/about"
    }
  ];

  const getButtonClasses = (variant: string) => {
    const baseClasses = "group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg";
    
    switch (variant) {
      case "primary":
        return `${baseClasses} bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] shadow-md`;
      case "secondary":
        return `${baseClasses} bg-[var(--color-neutral-800)] text-white hover:bg-[var(--color-neutral-900)] shadow-md`;
      case "outline":
        return `${baseClasses} border-2 border-[var(--color-brand-600)] text-[var(--color-brand-600)] hover:bg-[var(--color-brand-600)] hover:text-white`;
      case "ghost":
        return `${baseClasses} bg-[var(--color-neutral-200)] text-[var(--color-content-primary)] hover:bg-[var(--color-neutral-300)] border border-[var(--color-neutral-400)]`;
      case "text":
        return `${baseClasses} text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] hover:bg-[var(--color-brand-50)]`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="bg-[var(--color-neutral-100)] px-6 py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-content-primary)] mb-4">
            Get Involved with Jackson Heights
          </h2>
          <p className="text-lg text-[var(--color-content-secondary)] max-w-2xl mx-auto">
            Join our community of artists, supporters, and volunteers working to bring beautiful murals to Jackson Heights
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={getButtonClasses(link.variant)}
            >
              <span className="flex-1 text-center">{link.text}</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>
        
        {/* Additional Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-brand-600)] text-white rounded-full text-lg font-semibold hover:bg-[var(--color-brand-700)] transition-all duration-300 hover:scale-105 cursor-pointer group">
            <span>Join the Jackson Heights Mural Project</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
