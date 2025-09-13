"use client";

import React from "react";
import Button from "./Button";

export default function ButtonShowcase() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-6 text-center">
        Button Examples
      </h3>
      
      <div className="space-y-4">
        {/* Primary button with flower icon */}
        <Button
          variant="primary"
          size="large"
          trailingIcon="/flower.svg"
          className="w-full"
        >
          Donate
        </Button>

        {/* Button Label with red flower icon - like your example */}
        <div className="text-center">
          <Button
            variant="tertiary"
            size="small"
            trailingIcon="/flower-red.svg"
            className="text-[var(--color-content-primary)] hover:text-[var(--color-brand-600)]"
          >
            Button Label
          </Button>
        </div>

        {/* Secondary button */}
        <Button
          variant="secondary"
          size="large"
          trailingIcon="/flower.svg"
          className="w-full"
        >
          Get Involved
        </Button>

        {/* Tertiary button */}
        <Button
          variant="tertiary"
          size="large"
          trailingIcon="/flower.svg"
        >
          Learn More
        </Button>

        {/* Primary inverse button */}
        <Button
          variant="primary-inverse"
          size="large"
          trailingIcon="/flower.svg"
          className="w-full"
        >
          About Us
        </Button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-[var(--color-content-secondary)]">
          Hover over buttons to see enhanced effects
        </p>
      </div>
    </div>
  );
}
