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
    })).concat(
      // Touch consoles moved from the video conferencing store to /yealink-touch-consoles/<slug>
      ["ctp25", "mtouch-plus", "mtouch-plus-ext", "mtouch-plus-mb", "ct200", "ct300"].map((model) => ({
        source: `/store/video-conferencing-devices/yealink/yealink-${model}`,
        destination: `/yealink-touch-consoles/yealink-${model}`,
        statusCode: 301 as const,
      })),
      // Wireless presentation devices moved to /yealink-wireless-presentation-system/<slug>
      ["roomcast-e2", "pa20", "wpp30", "mb-remote"].map((model) => ({
        source: `/store/video-conferencing-devices/yealink/yealink-${model}`,
        destination: `/yealink-wireless-presentation-system/yealink-${model}`,
        statusCode: 301 as const,
      })),
    );
  },
};

export default nextConfig;
