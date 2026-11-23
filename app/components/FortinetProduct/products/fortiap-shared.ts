import type { QualItem } from "@/app/components/YealinkProduct/Sections/Quals";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";

// Content shared by the FortiAP product pages (/store/wireless-access-points/fortinet/*)

export const FAP_IMG = "/assets/images/fortinet/fortiap";
export const FAP_STORE = "/store/wireless-access-points/fortinet";
export const FAP_CATEGORY = "/fortinet-fortiap-products";

// Every FortiAP with a product page, in the order the quote form lists them
export const FAP_MODELS = ["FortiAP 221K", "FortiAP 231K", "FortiAP 241K", "FortiAP 243K", "FortiAP 441K", "FortiAP 443K", "FortiAP 23JK", "FortiAP 244K", "FortiAP 222KL", "FortiAP 234G", "FortiAP 432G", "FortiAP 23JF", "FortiAP 432FR", "FortiAP 831F"];

export const fapCrumbs = (model: string) => [
  { label: "GS IT Store", href: "/store" },
  { label: "Wireless" },
  { label: "Fortinet", href: FAP_CATEGORY },
  { label: model },
];

// Fortinet partner badge under the hero image
export const fapBadge = {
  src: `${FAP_IMG}/fortinet-authorized-partner.webp`,
  alt: "Fortinet Authorized Partner",
  text: "Supplied, deployed and supported by GS IT in Dubai.",
};

// Hero buttons open the quote form at the bottom of the page (prefilled with this model) or its "Talk to an expert" tab
export const fapHeroButtons = (model: string) => [
  { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: enq("quote", { model, src: "Hero: Get a quote" }) },
  { text: "Talk to an expert", icon: "", bgButton: "bg-white", dark: false, href: enq("expert", { src: "Hero: Talk to an expert" }) },
];

// "What you order" card link: enquire about this access point, noting which option was clicked
export const fapOptionLink = (model: string, option: string) => enq("quote", { model, src: `Option card: ${option}` });

// "Why buy from GS IT" strip under the hero
export const fapQuals: QualItem[] = [
  { icon: "ShieldCheck", title: "Genuine Fortinet hardware" },
  { icon: "RefreshCw", title: "FortiCare support and renewals" },
  { icon: "Wifi", title: "Wi-Fi survey by an engineer" },
  { icon: "Wrench", title: "Installation and support" },
];

// Feature icons (inner SVG markup from the page design) reused across the FortiAP pages
export const fapIcons = {
  fortigate: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
  secure: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
  scan: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  fortiswitch: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
  zeroTouch: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
  cloud: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
};

// CTA copy and tabbed quote form for a FortiAP product page (this page's model is preselected)
export const fapEnquiry = (o: { page: string; model: string; heading: string; highlightLast: number }): EnquiryTabsData => ({
  tag: "Get started",
  heading: o.heading,
  highlightLast: o.highlightLast,
  steps: ["Tell us your floors, users, coverage areas and current Wi-Fi.", "We plan access point models and placement, PoE and support.", "You get a proposal with the design, bill of materials, timeline and quote."],
  note: "Clicked Enquire on an option? The form is already filled in with your choice.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New access points", title: "Request a FortiAP quote", pickName: "New access points", doneName: "FortiAP quote", modelField: "model" },
    { value: "replace", label: "Upgrade existing Wi-Fi", title: "Plan your Wi-Fi upgrade", pickName: "Upgrade existing Wi-Fi", doneName: "Wi-Fi upgrade", modelField: "model" },
    { value: "renewal", label: "FortiCare renewal", title: "Renew FortiCare for your access points", pickName: "FortiCare renewal", doneName: "FortiCare renewal" },
    { value: "expert", label: "Talk to an expert", title: "Talk to an expert", pickName: "Talk to an expert", doneName: "expert consultation" },
  ],
  fields: [
    { name: "model", label: "FortiAP model", type: "select", show: ["quote", "replace"], full: true, empty: "Not sure, help me choose", options: FAP_MODELS },
    { name: "current_aps", label: "Current access points", type: "select", show: ["replace"], options: ["Older FortiAP", "Cisco or Meraki", "HPE Aruba", "Ubiquiti", "Other brand", "Not sure"] },
    { name: "units", label: "Number of access points", type: "number", show: ["quote", "replace", "renewal"], placeholder: "1" },
    { name: "coverage", label: "Coverage area", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Indoor offices", "Indoor, high density", "Outdoor", "Hotel rooms or residences", "Warehouse or industrial", "A mix"] },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "sites", label: "Number of floors or buildings", type: "number", show: ["quote", "replace"], placeholder: "1" },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FP231K…" },
    { name: "support_expiry", label: "Current support expiry", type: "month", show: ["renewal"] },
    { name: "support_level", label: "Support level", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure, recommend one", options: ["FortiCare Premium", "FortiCare Elite", "FortiEdge Cloud licence", "FortiGuard UTP on the AP"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Floor area, users, PoE switches in place, timeline",
  initial: { model: o.model },
  page: o.page,
  hidden: { product_page: o.model },
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT wireless engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "wireless engineer",
  againText: "Send another request",
});

// Trademark line, naming the page's model
export const fapFootNote = (model: string) => `Fortinet, ${model}, FortiGate, FortiCare and the Fortinet logo are trademarks of Fortinet, Inc.`;
