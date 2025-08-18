"use client";

import React from "react";
import Button from "../Button";
import { donationConfig, getProgressPercentage, formatCurrency } from "../../config/donations";

export default function DonationSection() {
  return (
    <div className="bg-white px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-content-primary)] mb-4">
            Help us paint a mural on
          </h3>
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-content-primary)] mb-6">
            84th and Roosevelt.
          </h3>
          <button className="text-[var(--color-brand-600)] text-lg font-medium hover:text-[var(--color-brand-700)] transition-colors duration-200 flex items-center gap-2 mx-auto mb-8">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12L15 12M15 12L12 9M15 12L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Before and after animation</p>
            <div className="bg-gray-300 h-32 rounded flex items-center justify-center">
              <span className="text-gray-500">Animation placeholder</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-bold text-[var(--color-brand-600)]">
              {formatCurrency(donationConfig.currentAmount)}
            </span>
            <span className="text-sm text-gray-600">
              raised of {formatCurrency(donationConfig.goalAmount)} goal
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-[var(--color-brand-600)] h-3 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {donationConfig.donationCount} Donation{donationConfig.donationCount !== 1 ? 's' : ''}
          </p>
        </div>

        <Button
          href={donationConfig.campaignUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="large"
          trailingIcon="/flower.svg"
          className="w-full"
        >
          Donate
        </Button>
      </div>
    </div>
  );
}
