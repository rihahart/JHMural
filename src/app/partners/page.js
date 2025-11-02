"use client";

import React from "react";
import IndividualSupporters from "@/components/supporters/IndividualSupporters";

export default function Supporters() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[var(--color-content-primary)] mb-8">
          Partners & Supporters
        </h1>
        <p className="text-lg text-[var(--color-content-secondary)] mb-8">
          Thank you to all our partners and supporters who make our work possible.
        </p>
      </div>
      <IndividualSupporters />
    </div>
  );
}
