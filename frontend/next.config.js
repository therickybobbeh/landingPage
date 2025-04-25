/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Provide default values for environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  // Configure webpack to handle canvas properly
  webpack: (config) => {
    // Handle canvas binary files
    config.resolve.alias.canvas = false;
    
    return config;
  },
  // Allow importing from these domains
  images: {
    domains: ['localhost'],
  },
  // Disable standalone mode to use standard Next.js deployment
  // output: 'standalone',
  // Set to development mode to bypass some strict checks
  // experimental: {
  //   // Disable static page generation to avoid server component issues
  //   appDir: true,
  // },
}

module.exports = nextConfig;