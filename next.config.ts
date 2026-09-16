import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    dangerouslyAllowSVG: true,
    domains: ["dl.dropboxusercontent.com"],
  },
};

export default nextConfig;
