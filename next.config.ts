import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
      },
      {
        protocol: "https",
        hostname: "www.gimbot.com",
      },
      {
        protocol: "https",
        hostname: "image.ggwp.id",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

export default nextConfig;
