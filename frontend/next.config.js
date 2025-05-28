/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_PUBLIC_AZURE_STATIC_WEB_APPS === 'true' ? 'export' : 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  images: {
    unoptimized: true, // Always use unoptimized for Azure Static Web Apps
    domains: [
      process.env.NEXT_PUBLIC_APP_DOMAIN || 'localhost',
      // Add any other domains you need to serve images from
    ],
    formats: ['image/webp'], // Only webp is supported alongside default formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add webpack configuration for PDF handling
  webpack: (config) => {
    // Handle PDF.js worker
    config.resolve.alias.canvas = false;
    
    // This is needed for react-pdf to work properly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      canvas: false,
      path: false,
      os: false,
    };
    
    return config;
  },
  // Asset prefix for production environment
  assetPrefix: process.env.NEXT_PUBLIC_AZURE_STATIC_WEB_APPS === 'true' ? '/' : '',
  basePath: '',
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Add any rewrites you need here
      ],
    };
  },
}

module.exports = nextConfig