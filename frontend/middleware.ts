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
    
    // Add comprehensive security headers
    const response = NextResponse.next();
    
    // Strict-Transport-Security header tells browsers to always use HTTPS
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
    
    // Content Security Policy - Protect against XSS attacks
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.openai.com https://*.azure.com; object-src 'none'; base-uri 'self'; form-action 'self';"
    );
    
    // X-Frame-Options - Prevent clickjacking
    response.headers.set(
      'X-Frame-Options',
      'DENY'
    );
    
    // X-Content-Type-Options - Prevent MIME type sniffing
    response.headers.set(
      'X-Content-Type-Options',
      'nosniff'
    );
    
    // Referrer-Policy - Control referrer information
    response.headers.set(
      'Referrer-Policy',
      'strict-origin-when-cross-origin'
    );
    
    // Permissions-Policy - Control browser features
    response.headers.set(
      'Permissions-Policy',
      'geolocation=(), microphone=(), camera=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()'
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