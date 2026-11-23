import type { QualItem } from "@/app/components/YealinkProduct/Sections/Quals";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";

// Content shared by the FortiSwitch product pages (/store/network-switches/fortinet/*)

export const FS_IMG = "/assets/images/fortinet/fortiswitch";
export const FS_STORE = "/store/network-switches/fortinet";
export const FS_CATEGORY = "/fortinet-fortiswitch-products";
export const FS_DATASHEETS = "/assets/datasheets/fortinet";

export const fsCrumbs = (model: string) => [
  { label: "GS IT Store", href: "/store" },
  { label: "Switches" },
  { label: "Fortinet", href: FS_CATEGORY },
  { label: model },
];

// Fortinet partner badge under the hero image
export const fsBadge = {
  src: `${FS_IMG}/fortinet-authorized-partner.webp`,
  alt: "Fortinet Authorized Partner",
  text: "Supplied, installed and supported by GS IT in Dubai.",
};

// Hero buttons open the quote form at the bottom of the page (prefilled with this model) or its "Talk to an expert" tab
export const fsHeroButtons = (model: string) => [
  { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: enq("quote", { model, src: "Hero: Get a quote" }) },
  { text: "Talk to an expert", icon: "", bgButton: "bg-white", dark: false, href: enq("expert", { src: "Hero: Talk to an expert" }) },
];

// Model card link: enquire about one version (sku: part number, e.g. "FS-124G-FPOE")
export const fsModelLink = (model: string, sku: string) => enq("quote", { model, src: `Model card: ${sku}` });

// "Why buy from GS IT" strip under the hero
export const fsQuals: QualItem[] = [
  { icon: "ShieldCheck", title: "Genuine Fortinet products" },
  { icon: "RefreshCw", title: "FortiCare support and renewals" },
  { icon: "Gauge", title: "Sizing by a network engineer" },
  { icon: "Wrench", title: "Installation, migration and support" },
];

// Feature icons (inner SVG markup from the page design) reused across the FortiSwitch pages
export const fsIcons = {
  fortilink: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
  nac: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
  uptime: "<rect x=\"3\" y=\"5\" width=\"8\" height=\"14\" rx=\"1.5\"/><rect x=\"13\" y=\"5\" width=\"8\" height=\"14\" rx=\"1.5\"/><path d=\"M11 12h2\"/>",
  zeroTouch: "<path d=\"M4 12h16M14 6l6 6-6 6\"/><circle cx=\"6\" cy=\"12\" r=\"2\"/>",
  fabric: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
  support: "<path d=\"M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z\"/>",
  macsec: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
  poe: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
  cloud: "<path d=\"M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z\"/>",
  rugged: "<path d=\"M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z\"/>",
};

// CTA copy and tabbed quote form for a FortiSwitch product page.
// models: the page's own versions (the first is preselected); page / product: hidden fields sent with the form
export const fsEnquiry = (o: { page: string; product: string; heading: string; highlightLast: number; models: string[] }): EnquiryTabsData => {
  const models = o.models;
  return {
    tag: "Get started",
    heading: o.heading,
    highlightLast: o.highlightLast,
    steps: ["Tell us your sites, devices, PoE needs and current switches.", "We size the switches, uplinks, transceivers and support.", "You get a proposal with the design, bill of materials, timeline and quote."],
    note: "Clicked Enquire on a model? The form is already filled in with your choice.",
    legend: "What do you need?",
    tabs: [
      { value: "quote", label: "New switches", title: "Request a FortiSwitch quote", pickName: "New switches", doneName: "FortiSwitch quote", modelField: "model" },
      { value: "replace", label: "Replace existing switches", title: "Plan your switch replacement", pickName: "Replace existing switches", doneName: "switch replacement", modelField: "model" },
      { value: "renewal", label: "FortiCare renewal", title: "Renew FortiCare for your switches", pickName: "FortiCare renewal", doneName: "FortiCare renewal" },
      { value: "expert", label: "Talk to an expert", title: "Talk to an expert", pickName: "Talk to an expert", doneName: "expert consultation" },
    ],
    fields: [
      { name: "model", label: "FortiSwitch model or series", type: "select", show: ["quote", "replace"], full: true, empty: "Not sure, help me choose", options: models },
      { name: "current_switches", label: "Current switches", type: "select", show: ["replace"], options: ["FortiSwitch 400 Series", "Other older FortiSwitch", "Cisco", "HPE Aruba", "Other brand", "Not sure"] },
      { name: "units", label: "Number of switches", type: "number", show: ["quote", "replace", "renewal"], placeholder: "1" },
      { name: "poe", label: "Devices to power", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["None", "Phones and cameras (PoE+)", "Wi-Fi 6E / 7 access points (802.3bt)", "A mix"] },
      { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
      { name: "sites", label: "Number of sites", type: "number", show: ["quote", "replace"], placeholder: "1" },
      { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. S148FF…" },
      { name: "support_expiry", label: "Current support expiry", type: "month", show: ["renewal"] },
      { name: "support_level", label: "Support level", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure, recommend one", options: ["FortiCare Premium", "FortiCare Elite", "FortiEdge Cloud licence"] },
      { name: "term", label: "Term", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years"] },
    ],
    detailsTitle: "Your details",
    messageLabel: "Anything else we should know?",
    messagePlaceholder: "Floors, device counts, cabling, timeline",
    initial: { model: models[0] },
    page: o.page,
    hidden: { product_page: o.product },
    endpoint: "/api/lets-talk", // same handler as the other enquiry forms
    submitText: "Send request",
    sendingText: "Sending…",
    smallText: "A GS IT network engineer will review your request and reply with next steps.",
    errorText: "Sorry, your request did not send. Please try again, or call us.",
    doneTitle: "Thank you. Your request is in.",
    engineer: "network engineer",
    againText: "Send another request",
  };
};

export const fsFootNote = "Fortinet, FortiSwitch, FortiGate, FortiLink, FortiCare and the Fortinet logo are trademarks of Fortinet, Inc.";
