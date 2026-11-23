import type { RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";

// Content shared by the Cisco router pages (/store/network-routers/cisco/*)

export const RT_IMG = "/assets/images/cisco/network-routers";
export const RT_STORE = "/store/network-routers/cisco";

// Feature icons (inner SVG markup) reused across the router pages
export const rtIcons = {
  cloud: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
  network: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
  shieldLock: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><rect x=\"9\" y=\"10\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10V8.5a2 2 0 0 1 4 0V10\"/>",
  bars: "<path d=\"M5 18v-2M9 18v-5M13 18v-8M17 18V7\"/>",
  lock: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
  desktop: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
  bolt: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
  plug: "<path d=\"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4\"/>",
  pulse: "<path d=\"M4 12h4l2-6 4 12 2-6h4\"/>",
  leaf: "<path d=\"M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8\"/>",
};

// Every router in the "Compare with other Cisco routers" row, in display order.
// Thumbnail names don't always follow the slug (the ISR 112x page uses cisco-isr-112x-routers-thumb).
const allRouters = [
  { slug: "cisco-catalyst-112x-isrs", title: "Cisco ISR 112x Routers", thumb: "cisco-isr-112x-routers-thumb.webp" },
  { slug: "cisco-meraki-mx67", title: "Cisco Meraki MX67", thumb: "cisco-meraki-mx67-thumb.webp" },
  { slug: "cisco-meraki-mx75", title: "Cisco Meraki MX75", thumb: "cisco-meraki-mx75-thumb.webp" },
  { slug: "cisco-meraki-mx85", title: "Cisco Meraki MX85", thumb: "cisco-meraki-mx85-thumb.webp" },
  { slug: "cisco-meraki-mx95", title: "Cisco Meraki MX95", thumb: "cisco-meraki-mx95-thumb.webp" },
];

// Related-products section for a router page: every other router.
// Pass `order` (a list of slugs) when the source page lists them in a different order.
export const relatedRouters = (currentSlug: string, order?: string[]): RelatedDataType => ({
  tag: "Related products",
  heading: "Compare with\n other Cisco routers",
  highlightLast: 3,
  subhead: "Other Cisco Catalyst ISR and Meraki MX routers for branch networks.",
  linkLabel: "View product",
  items: (order ? order.map((s) => allRouters.find((r) => r.slug === s)!) : allRouters)
    .filter((r) => r.slug !== currentSlug)
    .map((r) => ({
      title: r.title,
      image: `${RT_IMG}/${r.thumb}`,
      href: `${RT_STORE}/${r.slug}`,
    })),
});

export const rtFootNote = "Cisco, Catalyst and Meraki are trademarks of Cisco Systems, Inc.";
