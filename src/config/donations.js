// Donation Progress Configuration
// Update these values manually to match your GoFundMe campaign

export const donationConfig = {
  // Current amount raised (in dollars)
  currentAmount: 1270,
  
  // Goal amount (in dollars)  
  goalAmount: 5000,
  
  // Number of donations
  donationCount: 19,
  
  // GoFundMe campaign URL
  campaignUrl: "https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights",
  
  // Last updated (for reference)
  lastUpdated: "2025-01-03"
};

// Calculate percentage automatically
export const getProgressPercentage = () => {
  return Math.round((donationConfig.currentAmount / donationConfig.goalAmount) * 100 * 10) / 10;
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
};
