/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'ik.imagekit.io'],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  webpack: (config) => {
    // Ignore src directory completely
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/src/**', '**/node_modules/**'],
    };
    return config;
  },
};

module.exports = nextConfig;