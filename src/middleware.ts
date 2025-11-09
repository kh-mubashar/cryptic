import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const response = NextResponse.next();

  // Add security headers
  const headers = response.headers;
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'origin-when-cross-origin');
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  );

  // Allow public access to dashboard
  if (path === '/dashboard') {
    return response;
  }

  // Protected routes logic will be handled by Auth0 middleware
  return response;
}

// Wrap middleware with Auth0's middleware for protected routes
export default withMiddlewareAuthRequired(middleware);

export const config = {
  matcher: [
    // Match all protected routes
    '/portfolio/:path*',
    '/alerts/:path*',
    // Don't match dashboard or API routes
    '/((?!api|_next/static|_next/image|favicon.ico|dashboard).*)',
  ],
};
