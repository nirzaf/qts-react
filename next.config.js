/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['ik.imagekit.io'],
    unoptimized: false,
  },
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Enable static optimization
  trailingSlash: false,
  // Configure redirects if needed
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },
  // Configure rewrites if needed
  async rewrites() {
    return [
      // Add any rewrites here if needed
    ];
  },
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
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
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add any custom webpack configuration here
    return config;
  },
};

export default nextConfig;
