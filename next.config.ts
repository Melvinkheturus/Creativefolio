/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Enable static optimization
  reactStrictMode: true,
  swcMinify: true,
  // Disable unused features
  poweredByHeader: false,
};

export default nextConfig;
