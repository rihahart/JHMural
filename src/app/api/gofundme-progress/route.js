// GoFundMe Pro API Integration
// This API route fetches real-time data from GoFundMe Pro

import { NextResponse } from 'next/server';

// You would get these from your GoFundMe Pro dashboard
const GOFUNDME_CLIENT_ID = process.env.GOFUNDME_CLIENT_ID;
const GOFUNDME_CLIENT_SECRET = process.env.GOFUNDME_CLIENT_SECRET;
const GOFUNDME_CAMPAIGN_ID = process.env.GOFUNDME_CAMPAIGN_ID;

export async function GET() {
  try {
    // Step 1: Get access token
    const authResponse = await fetch('https://api.gofundme.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: GOFUNDME_CLIENT_ID,
        client_secret: GOFUNDME_CLIENT_SECRET,
        grant_type: 'client_credentials'
      })
    });

    if (!authResponse.ok) {
      throw new Error('Failed to authenticate with GoFundMe');
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Step 2: Get campaign data
    const campaignResponse = await fetch(`https://api.gofundme.com/v1/campaigns/${GOFUNDME_CAMPAIGN_ID}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });

    if (!campaignResponse.ok) {
      throw new Error('Failed to fetch campaign data');
    }

    const campaignData = await campaignResponse.json();

    // Step 3: Format response
    const responseData = {
      current_amount: campaignData.current_amount,
      goal_amount: campaignData.goal_amount,
      donation_count: campaignData.donation_count,
      campaign_url: campaignData.url,
      last_updated: new Date().toISOString(),
      success: true
    };

    return NextResponse.json(responseData);
    
  } catch (error) {
    console.error('GoFundMe API Error:', error);
    
    return NextResponse.json(
      { 
        error: error.message,
        success: false,
        // Return fallback data
        current_amount: 1270,
        goal_amount: 5000,
        donation_count: 19,
        campaign_url: "https://www.gofundme.com/f/donate-to-help-us-put-a-beautiful-mural-in-jackson-heights"
      },
      { status: 500 }
    );
  }
}
