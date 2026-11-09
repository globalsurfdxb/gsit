import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    dangerouslyAllowSVG: true,
    domains: ["dl.dropboxusercontent.com"],
  },
  async redirects() {
    return [
      "/yealink-speakerphones",
     "/yealink-wired-headsets",
      "/yealink-dect-wireless-headsets",
      "/yealink-bluetooth-wireless-headsets",
    ].map((source) => ({
      source,
      destination: "/yealink-headsets-and-speakerphones",
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
