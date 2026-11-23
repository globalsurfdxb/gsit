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
        [
        ["/store/next-generation-firewall-products/cisco/cisco-firepower-1200", "/store/next-generation-firewall-products/cisco/cisco-secure-firewall-1200"],
        ["/store/wireless-access-points/cisco/cisco-catalyst-9115-series", "/store/wireless-access-points/cisco/cisco-wireless-9174-series"],
        ["/store/wireless-access-points/cisco/cisco-meraki-mr36-series", "/store/wireless-access-points/cisco/cisco-catalyst-9172-series"],
        ["/store/wireless-access-points/cisco/cisco-meraki-mr44-series", "/store/wireless-access-points/cisco/cisco-wireless-9174-series"],
        ["/store/wireless-access-points/cisco/cisco-meraki-mr46-series", "/store/wireless-access-points/cisco/cisco-wireless-9176-series"],
        ["/store/network-routers/cisco/cisco-catalyst-113x-isrs", "/cisco-network-routers"],
        ["/store/network-routers/cisco/cisco-catalyst-116x-isrs", "/cisco-network-routers"],
        ["/store/ip-phones/cisco/cisco-ip-conference-phone-8832", "/cisco-ip-phones"],
      ].map(([source, destination]) => ({
        source,
        destination,
        statusCode: 301 as const,
      })),
    );
  },
};

export default nextConfig;
