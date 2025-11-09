import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    auth0BaseUrl: process.env.AUTH0_BASE_URL,
    bitqueryUrl: process.env.NEXT_PUBLIC_BITQUERY_URL,
    // Don't include sensitive variables like secrets!
    hasAuth0Config: !!process.env.AUTH0_CLIENT_ID,
    hasBitqueryConfig: !!process.env.NEXT_PUBLIC_BITQUERY_KEY,
    hasContentfulConfig: !!process.env.CONTENTFUL_SPACE_ID,
  });
}
