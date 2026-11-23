import type { RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";

// Content shared by the Cisco wireless access point pages (/store/wireless-access-points/cisco/*)

export const AP_IMG = "/assets/images/cisco/wireless-access-points";
export const AP_STORE = "/store/wireless-access-points/cisco";

// Feature icons (inner SVG markup) reused across the access point pages
export const apIcons = {
  bars: "<path d=\"M4 18h16M6 18V9M10 18V6M14 18v-7M18 18V4\"/>",
  wifi: "<path d=\"M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0\"/><circle cx=\"12\" cy=\"19.5\" r=\"1\"/>",
  pulse: "<path d=\"M4 12h4l2-6 4 12 2-6h4\"/>",
  leaf: "<path d=\"M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8\"/>",
  eye: "<path d=\"M3 12c2.5-4.5 5.5-7 9-7s6.5 2.5 9 7c-2.5 4.5-5.5 7-9 7s-6.5-2.5-9-7z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  pin: "<circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z\"/>",
  cloud: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
  shield: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/>",
  plug: "<path d=\"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4\"/>",
  sun: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5\"/>",
  layers: "<path d=\"M12 3l9 5-9 5-9-5z\"/><path d=\"M3 13l9 5 9-5\"/>",
};

// Every access point in the "Compare with other Cisco access points" row, in display order.
// Thumbnail names don't always follow the slug (e.g. the 9172 page lives at cisco-catalyst-9172-series).
const allAccessPoints = [
  { slug: "cisco-catalyst-9136-series", title: "Cisco Catalyst 9136 Series", thumb: "cisco-catalyst-9136-series-thumb.webp" },
  { slug: "cisco-catalyst-9172-series", title: "Cisco Wireless 9172 Series", thumb: "cisco-wireless-9172-series-thumb.webp" },
  { slug: "cisco-wireless-9174-series", title: "Cisco Wireless 9174 Series", thumb: "cisco-wireless-9174-series-thumb.webp" },
  { slug: "cisco-wireless-9176-series", title: "Cisco Wireless 9176 Series", thumb: "cisco-wireless-9176-series-thumb.webp" },
  { slug: "cisco-meraki-mr76-series", title: "Cisco Meraki MR76", thumb: "cisco-meraki-mr76-thumb.webp" },
];

// Related-products section for an access point page: every other access point.
// Pass `order` (a list of slugs) when the source page lists them in a different order.
export const relatedAccessPoints = (currentSlug: string, order?: string[]): RelatedDataType => ({
  tag: "Related products",
  heading: "Compare with\n other Cisco access points",
  highlightLast: 4,
  subhead: "Other models from the Cisco Catalyst, Cisco Wireless and Meraki range.",
  linkLabel: "View product",
  items: (order ? order.map((s) => allAccessPoints.find((p) => p.slug === s)!) : allAccessPoints)
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      title: p.title,
      image: `${AP_IMG}/${p.thumb}`,
      href: `${AP_STORE}/${p.slug}`,
    })),
});

export const apFootNote = "Cisco, Catalyst and Meraki are trademarks of Cisco Systems, Inc.";
