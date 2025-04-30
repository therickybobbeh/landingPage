import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to enforce HTTPS in production environments
 */
export function middleware(request: NextRequest) {
  // Only redirect in production
  const isProduction = process.env.NODE_ENV === 'production';
  const shouldEnforceHttps = process.env.NEXT_PUBLIC_HTTPS_ENABLED === 'true';
  
  if (isProduction && shouldEnforceHttps) {
    // Check if the request is using HTTP
    const url = request.nextUrl.clone();
    
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return NextResponse.redirect(url);
    }
    
    // Add security headers
    const response = NextResponse.next();
    
    // Strict-Transport-Security header tells browsers to always use HTTPS
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
    
    return response;
  }
  
  return NextResponse.next();
}

/**
 * Configure which paths the middleware runs on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};