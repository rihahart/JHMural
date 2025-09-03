"use client";

// SOLUTION 2: Automated GoFundMe Pro API Integration
// This requires a GoFundMe Pro account and API credentials

import React, { useState, useEffect } from "react";
import { donationConfig as fallbackConfig, formatCurrency } from "../../config/donations";

export default function DonationSectionAuto() {
  const [donationData, setDonationData] = useState(fallbackConfig);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGoFundMeData();
  }, []);

  const fetchGoFundMeData = async () => {
    try {
      setLoading(true);
      
      // This would be your actual GoFundMe Pro API call
      // Replace with your actual API endpoint
      const response = await fetch('/api/gofundme-progress');
      
      if (!response.ok) {
        throw new Error('Failed to fetch donation data');
      }
      
      const data = await response.json();
      
      setDonationData({
        currentAmount: data.current_amount || fallbackConfig.currentAmount,
        goalAmount: data.goal_amount || fallbackConfig.goalAmount,
        donationCount: data.donation_count || fallbackConfig.donationCount,
        campaignUrl: data.campaign_url || fallbackConfig.campaignUrl,
        lastUpdated: new Date().toISOString()
      });
      
      setError(null);
    } catch (err) {
      console.error('Error fetching GoFundMe data:', err);
      setError((err as Error).message);
      // Fall back to manual config if API fails
      setDonationData(fallbackConfig);
    } finally {
      setLoading(false);
    }
  };

  const getProgressPercentage = () => {
    return Math.round((donationData.currentAmount / donationData.goalAmount) * 100 * 10) / 10;
  };

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
              {loading ? (
                <span className="animate-pulse bg-gray-200 rounded px-2 py-1">Loading...</span>
              ) : (
                formatCurrency(donationData.currentAmount)
              )}
            </span>
            <span className="text-sm text-gray-600">
              raised of {formatCurrency(donationData.goalAmount)} goal
              {error && <span className="text-red-500 block text-xs">(Using cached data)</span>}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-[var(--color-brand-600)] h-3 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: loading ? '0%' : `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {loading ? 'Loading...' : `${donationData.donationCount} Donation${donationData.donationCount !== 1 ? 's' : ''}`}
          </p>
          
          {/* Refresh button for manual updates */}
          <button 
            onClick={fetchGoFundMeData}
            disabled={loading}
            className="text-xs text-gray-500 hover:text-gray-700 mt-2 disabled:opacity-50"
          >
            🔄 {loading ? 'Updating...' : 'Refresh data'}
          </button>
        </div>

        <a 
          href={donationData.campaignUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[var(--color-brand-600)] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[var(--color-brand-700)] transition-colors duration-200 text-center"
        >
          Donate
        </a>
      </div>
    </div>
  );
}
