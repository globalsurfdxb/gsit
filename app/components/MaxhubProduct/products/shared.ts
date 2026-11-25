import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";

// Content shared by the MAXHUB audio and room control product pages (/store/audio-room-control/maxhub/*)

export const MX_IMG = "/assets/images/maxhub/audio-room-control";
export const MX_STORE = "/store/audio-room-control/maxhub";
export const MX_CATEGORY = "/maxhub-audio-room-control-products";
// Datasheet PDFs for every MAXHUB product live in one folder
export const MX_DATASHEETS = "/assets/datasheets/maxhub";

export const mxCrumbs = (product: string) => [
  { label: "GS IT Store", href: "" },
  { label: "MAXHUB audio & room control", href: '' },
  { label: product },
];

export const mxHeroButtons = [
  { text: "View Specifications", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#specs" },
  { text: "Enquire Now", icon: "", bgButton: "bg-white", dark: false, href: "#enquiry" },
];

// Enquiry form: the page's own copy plus the shared "Room details" message field
type Enquiry = NonNullable<LogitechProductData["enquiry"]>;
export const mxEnquiry = (e: Pick<Enquiry, "tag" | "heading" | "highlightLast" | "text" | "select">): Enquiry => ({
  ...e,
  submitText: "Send Enquiry",
  messageLabel: "Room details",
  messagePlaceholder: "Room size, number of rooms, platform in use, timeline",
});

// Displays, capture & sharing pages (/store/displays-capture-sharing/maxhub/*)
export const DCS_IMG = "/assets/images/maxhub/displays-capture-sharing";
export const DCS_STORE = "/store/displays-capture-sharing/maxhub";
export const DCS_CATEGORY = "/maxhub-displays-capture-sharing-products";

export const dcsCrumbs = (product: string) => [
  { label: "GS IT Store", href: "" },
  { label: "MAXHUB Displays, Capture & Sharing", href: DCS_CATEGORY },
  { label: product },
];

// Interactive display pages (/store/interactive-displays/maxhub/*)
export const IFP_IMG = "/assets/images/maxhub/interactive-displays";
export const IFP_STORE = "/store/interactive-displays/maxhub";
export const IFP_CATEGORY = "/maxhub-interactive-display-products";

export const ifpCrumbs = (product: string) => [
  { label: "GS IT Store", href: "" },
  { label: "MAXHUB Interactive Displays", href: IFP_CATEGORY },
  { label: product },
];

// Video conferencing pages (/store/video-conferencing-devices/maxhub/*)
export const VC_IMG = "/assets/images/maxhub/video-conferencing";
export const VC_STORE = "/store/video-conferencing-devices/maxhub";
export const VC_CATEGORY = "/maxhub-video-conferencing-products";

export const vcCrumbs = (product: string) => [
  { label: "GS IT Store", href: "" },
  { label: "MAXHUB Video Conferencing", href: VC_CATEGORY },
  { label: product },
];
