import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //added just for check card design, will modify
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
