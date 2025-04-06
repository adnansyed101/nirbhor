import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //added just for check card design, will modify
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'houseandhome.com' },
      { protocol: 'https', hostname: 'www.kingliving.com.sg' },
      { protocol: 'https', hostname: 'www.organicswings.com' },
      { protocol: 'https', hostname: 'houses.eyrc.com' },
    ],
  },
};

export default nextConfig;
