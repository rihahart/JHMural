"use client";

import React from "react";

export default function FooterLinks() {
  const links = [
    "Artists: Lets Collaborate",
    "Got a wall to paint? Let us know!",
    "Hear us",
    "Subscribe to Our Newsletter",
    "Volunteer with us",
    "Slack Us: Join the conversation"
  ];

  return (
    <div className="bg-[var(--color-neutral-300)] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-4 text-center lg:text-left">
          {links.map((link, index) => (
            <div key={index} className="flex items-center justify-center lg:justify-start gap-2 text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)] transition-colors duration-200 cursor-pointer">
              <span>{link}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
