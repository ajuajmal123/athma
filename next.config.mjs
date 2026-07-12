/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disables Next.js image optimization service so it runs smoothly out of the box without sharp dependency issues
  },
};

export default nextConfig;
