import type { RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";

// Content shared by the Cisco IP phone product pages (/store/ip-phones/cisco/*)

export const IP_PHONE_IMG = "/assets/images/cisco/ip-phones";
export const IP_PHONE_STORE = "/store/ip-phones/cisco";

export const deskPhoneDatasheet = {
  text: "Cisco Desk Phone 9800 Series datasheet",
  // Local copy of Cisco's PDF (desk-phone-9800-series-ds.pdf, updated 25 March 2026)
  href: "/assets/datasheets/cisco/desk-phone-9800-series-ds.pdf",
};

// Feature icons (inner SVG markup) reused across the phone pages
export const phoneIcons = {
  mic: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5 11a7 7 0 0 0 14 0M12 18v3\"/>",
  alert: "<path d=\"M12 3l9 16H3z\"/><path d=\"M12 10v4M12 17h.01\"/>",
  desk: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
  cloud: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
  lock: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
  leaf: "<path d=\"M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8\"/>",
  wifi: "<path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
  switch: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"5\" rx=\"1.5\"/><rect x=\"3\" y=\"11\" width=\"18\" height=\"5\" rx=\"1.5\"/><path d=\"M7 18v2M17 18v2\"/>",
  plug: "<path d=\"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4\"/>",
  drop: "<path d=\"M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z\"/>",
  battery: "<rect x=\"3\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\"/><path d=\"M21 11v2M7 10v4M11 10v4\"/>",
  roam: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
  bolt: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
  grid: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
};

// Every phone in the "Compare with other Cisco phones" row, in display order
const allPhones = [
  { slug: "desk-phone-9841", title: "Cisco Desk Phone 9841" },
  { slug: "desk-phone-9851", title: "Cisco Desk Phone 9851" },
  { slug: "desk-phone-9861", title: "Cisco Desk Phone 9861" },
  { slug: "desk-phone-9871", title: "Cisco Desk Phone 9871" },
  { slug: "ip-phone-8800-series", title: "Cisco IP Phone 8800 Series" },
  { slug: "wireless-phone-9821", title: "Cisco Wireless Phone 9821" },
  { slug: "ip-dect-6800-series", title: "Cisco IP DECT 6800 Series" },
];

// Related-products section for a phone page: every other phone, using its -thumb image
export const relatedPhones = (currentSlug: string): RelatedDataType => ({
  tag: "Related products",
  heading: "Compare with\n other Cisco phones",
  highlightLast: 3,
  subhead: "Other Cisco desk, wireless and DECT phones.",
  linkLabel: "View product",
  items: allPhones
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      title: p.title,
      image: `${IP_PHONE_IMG}/cisco-${p.slug}-thumb.webp`,
      href: `${IP_PHONE_STORE}/${p.slug}`,
    })),
});

export const phoneFootNote = "Cisco and Webex are trademarks of Cisco Systems, Inc.";
