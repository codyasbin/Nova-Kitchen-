/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Keep this if you're not using Next.js Image Optimization
  },
};

module.exports = nextConfig;
