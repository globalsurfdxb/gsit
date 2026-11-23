import type { RelatedDataType } from "@/app/components/YealinkProduct/Sections/RelatedProducts";

// Content shared by the Cisco video conferencing product pages (/store/video-conferencing-devices/cisco/*)

export const VC_IMG = "/assets/images/cisco/video-conferencing";
export const VC_STORE = "/store/video-conferencing-devices/cisco";

// Feature icons (inner SVG markup) reused across the video conferencing pages
export const vcIcons = {
  framing: "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M3 9V5h4M21 9V5h-4M3 15v4h4M21 15v4h-4\"/>",
  mic: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5 11a7 7 0 0 0 14 0M12 18v3\"/>",
  share: "<path d=\"M12 3v12M8 7l4-4 4 4\"/><rect x=\"3\" y=\"15\" width=\"18\" height=\"6\" rx=\"1\"/>",
  navigator: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 7h6M9 11h6M9 15h3\"/>",
  cloud: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
  camera: "<rect x=\"2\" y=\"7\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M16 11l6-3v8l-6-3\"/>",
  speaker: "<path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11\"/>",
  display: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
  chip: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4\"/>",
  network: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
  pen: "<path d=\"M4 20l4-1 11-11-3-3L5 16z\"/><path d=\"M14 6l3 3\"/>",
  plug: "<path d=\"M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4\"/>",
  wrench:"<path d=\"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z\"/>",
};

// Every device in the "Compare with other Cisco video systems" row, in display order
const allVideoDevices = [
  { slug: "room-bar", title: "Cisco Room Bar" },
  { slug: "room-bar-pro", title: "Cisco Room Bar Pro" },
  { slug: "room-kit-eq", title: "Cisco Room Kit EQ" },
  { slug: "room-kit-eqx", title: "Cisco Room Kit EQX" },
  { slug: "room-kit-pro-g2", title: "Cisco Room Kit Pro G2" },
  { slug: "board-pro-g3", title: "Cisco Board Pro G3" },
  { slug: "desk-pro-g2", title: "Cisco Desk Pro G2" },
];

// Related-products section for a video device page: every other device, using its -thumb image
export const relatedVideoDevices = (currentSlug: string): RelatedDataType => ({
  tag: "Related products",
  heading: "Compare with\n other Cisco video systems",
  highlightLast: 4,
  subhead: "Other Cisco room systems, boards and desk devices.",
  linkLabel: "View product",
  items: allVideoDevices
    .filter((d) => d.slug !== currentSlug)
    .map((d) => ({
      title: d.title,
      image: `${VC_IMG}/cisco-${d.slug}-thumb.webp`,
      href: `${VC_STORE}/${d.slug}`,
    })),
});

export const vcFootNote = "Cisco, Webex and RoomOS are trademarks of Cisco Systems, Inc.";
