import type { RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";

// Content shared by the Cisco switch product pages (/store/network-switches/cisco/*)

export const SWITCH_IMG = "/assets/images/cisco/network-switches";
export const SWITCH_STORE = "/store/network-switches/cisco";
export const SWITCH_CATEGORY_URL = "/cisco-network-switches";

// Feature icons (inner SVG markup) reused across the switch pages
export const switchIcons = {
  bolt: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
  leaf: "<path d=\"M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8\"/>",
  route: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
  shieldLock: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><rect x=\"9\" y=\"10\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10V8.5a2 2 0 0 1 4 0V10\"/>",
  dashboard: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
  wrench: "<path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z\"/>",
  stack: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"5\" rx=\"1.5\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"5\" rx=\"1.5\"/><path d=\"M7 18v2M17 18v2\"/>",
  pulse: "<path d=\"M4 12h4l2-6 4 12 2-6h4\"/>",
  sliders: "<path d=\"M4 7h16M4 12h16M4 17h16\"/><circle cx=\"8\" cy=\"7\" r=\"1.5\"/><circle cx=\"16\" cy=\"12\" r=\"1.5\"/><circle cx=\"10\" cy=\"17\" r=\"1.5\"/>",
  chip: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4\"/>",
  plug: "<path d=\"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4\"/>",
  cloud: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
  burst: "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1\"/>",
};

// Every switch series in the "Compare with other Cisco switches" row, in display order
const allSwitches = [
  { slug: "cisco-catalyst-1200-series", title: "Cisco Catalyst 1200 Series" },
  { slug: "cisco-catalyst-1300-series", title: "Cisco Catalyst 1300 Series" },
  { slug: "cisco-catalyst-9200-series", title: "Cisco Catalyst 9200 Series" },
  { slug: "cisco-catalyst-9300-series", title: "Cisco Catalyst 9300 Series" },
  { slug: "cisco-catalyst-9500-series", title: "Cisco Catalyst 9500 Series" },
  { slug: "cisco-meraki-ms130-series", title: "Cisco Meraki MS130 Series" },
  { slug: "cisco-meraki-ms150-series", title: "Cisco Meraki MS150 Series" },
];

// Related-products section for a switch page: every other series, using its -thumb image.
// Pass `order` (slugs) when the page's approved HTML lists them in a different order.
export const relatedSwitches = (currentSlug: string, order?: string[]): RelatedDataType => ({
  tag: "Related products",
  heading: "Compare with\n other Cisco switches",
  highlightLast: 3,
  subhead: "Other switch series from the Cisco Catalyst and Meraki range.",
  linkLabel: "View product",
  items: (order ? order.map((slug) => allSwitches.find((s) => s.slug === slug)!) : allSwitches)
    .filter((s) => s.slug !== currentSlug)
    .map((s) => ({
      title: s.title,
      image: `${SWITCH_IMG}/${s.slug}-thumb.webp`,
      href: `${SWITCH_STORE}/${s.slug}`,
    })),
});

export const switchFootNote = "Cisco, Catalyst and Meraki are trademarks of Cisco Systems, Inc.";
