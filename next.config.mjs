/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vipshuttle-24.de',
      },
    ],
  },
};

export default nextConfig;
