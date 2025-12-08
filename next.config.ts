import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fdac182-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.destinsparks.com',
      },
    ],
  },
};

export default nextConfig;
