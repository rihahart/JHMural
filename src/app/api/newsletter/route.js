import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

export async function POST(request) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      console.error('Missing Mailchimp environment variables');
      return NextResponse.json(
        { error: 'Server configuration error. Please check environment variables.' },
        { status: 500 }
      );
    }

    mailchimp.setConfig({
      apiKey: MAILCHIMP_API_KEY,
      server: MAILCHIMP_SERVER_PREFIX,
    });

    await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName || '',
        LNAME: lastName || '',
      },
      tags: ['Website Signup'],
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    const body = error?.response?.body;

    // Check if user is already subscribed
    if (body?.title === 'Member Exists') {
      return NextResponse.json(
        { message: 'You are already subscribed to our newsletter!' },
        { status: 200 }
      );
    }

    if (body) {
      console.error('Mailchimp API error:', body);
      return NextResponse.json(
        { error: body.detail || 'Failed to subscribe' },
        { status: error.status || 500 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
