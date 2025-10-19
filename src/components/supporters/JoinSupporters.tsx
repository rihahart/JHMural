"use client";

import React from "react";
import Button from "../ButtonCollection/Button";

export default function JoinSupporters() {
  return (
    <div className="bg-[var(--color-brand-600)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Join our list of supporters.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Help us bring more beautiful murals to Jackson Heights. Every contribution, big or small, makes a difference in our community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary-inverse"
            size="large"
            trailingIcon="/flower.svg"
            href="https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support Our Mission
          </Button>
          
          <Button
            variant="tertiary"
            size="large"
            href="/getinvolved"
          >
            Get Involved
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Want to see your name or organization listed here? Contact us to learn about different ways to support the Jackson Heights Mural Project.
          </p>
        </div>
      </div>
    </div>
  );
}
