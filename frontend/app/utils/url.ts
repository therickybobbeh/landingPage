/**
 * URL utilities for handling secure connections
 */

/**
 * Creates an absolute URL with the appropriate protocol based on environment
 * 
 * @param path The relative path (without leading slash)
 * @returns Full URL with proper protocol
 */
export const createUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'localhost:3000';
  const useHttps = process.env.NEXT_PUBLIC_HTTPS_ENABLED === 'true';
  const protocol = useHttps ? 'https' : 'http';
  
  // Ensure path starts without a slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${protocol}://${baseUrl}/${cleanPath}`;
};

/**
 * Redirects to HTTPS if we're in production and on HTTP
 * Can be used in middleware or page components
 */
export const ensureHttps = (): boolean => {
  // Only run on the client
  if (typeof window !== 'undefined') {
    const isHttps = window.location.protocol === 'https:';
    const shouldBeHttps = process.env.NEXT_PUBLIC_HTTPS_ENABLED === 'true';
    
    if (shouldBeHttps && !isHttps) {
      window.location.href = window.location.href.replace('http:', 'https:');
      return false;
    }
  }
  return true;
};