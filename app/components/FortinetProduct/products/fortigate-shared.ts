import type { QualItem } from "@/app/components/YealinkProduct/Sections/Quals";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";

// Content shared by the FortiGate firewall pages (/store/next-generation-firewall-products/fortinet/*)

export const FG_IMG = "/assets/images/fortinet/fortigate-firewalls";
export const FG_STORE = "/store/next-generation-firewall-products/fortinet";
export const FG_CATEGORY = "/fortinet-firewall-products";
export const FG_DATASHEETS = "/assets/datasheets/fortinet";

export const fgCrumbs = (model: string) => [
  { label: "GS IT Store", href: "/store" },
  { label: "Firewalls" },
  { label: "Fortinet", href: FG_CATEGORY },
  { label: model },
];

// Fortinet partner badge under the hero image
export const fgBadge = {
  src: `${FG_IMG}/fortinet-authorized-partner.webp`,
  alt: "Fortinet Authorized Partner",
  text: "Supplied, installed and supported by GS IT in Dubai.",
};

// Hero buttons open the quote form at the bottom of the page (prefilled with this model) or its "Talk to an expert" tab
export const fgHeroButtons = (model: string) => [
  { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: enq("quote", { model, src: "Hero: Get a quote" }) },
  { text: "Talk to an expert", icon: "", bgButton: "bg-white", dark: false, href: enq("expert", { src: "Hero: Talk to an expert" }) },
];

// "Why buy from GS IT" strip under the hero
export const fgQuals: QualItem[] = [
  { icon: "ShieldCheck", title: "Genuine Fortinet products" },
  { icon: "RefreshCw", title: "FortiGuard licensing and renewals" },
  { icon: "Gauge", title: "Sizing by a security engineer" },
  { icon: "Wrench", title: "Installation, maintenance and support" },
];

// Feature icons (inner SVG markup from the page design) reused across the FortiGate pages
export const fgIcons = {
  chip: "<rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4\"/>",
  shield: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
  sdwan: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
  lock: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
  wifi: "<path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
  desktop: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
  segments: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
  bars: "<path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/>",
  fabric: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
  ha: "<rect x=\"3\" y=\"5\" width=\"8\" height=\"14\" rx=\"1.5\"/><rect x=\"13\" y=\"5\" width=\"8\" height=\"14\" rx=\"1.5\"/><path d=\"M11 12h2\"/>",
};

// Every FortiGate a customer might already own (upgrade and renewal tabs), shared with the category page form
export const FG_CURRENT_MODELS = [
  "FortiGate 30G", "FortiGate 40F", "FortiGate 50G", "FortiGate 60F", "FortiGate 70F", "FortiGate 70G", "FortiGate 80F", "FortiGate 90G",
  "FortiGate 91G", "FortiGate 100F", "FortiGate 120G", "FortiGate 200F", "FortiGate 200G", "FortiGate 400F", "FortiGate 600F",
  "FortiGate 900G", "FortiGate 1000F", "FortiGate 1800F", "FortiGate 2600F", "FortiGate 3000F", "FortiGate 3200F", "FortiGate 3500F",
  "FortiGate 3700F", "FortiGate 4200F", "FortiGate 4400F", "FortiGate 4800F", "FortiGate 6001F", "FortiGate 6300F", "FortiGate 6500F",
  "FortiGate 7081F", "FortiGate 7121F", "Other or not sure",
];

// Links for the model cards: enquire about a model, or about its "as a service" version
export const fgModelLink = (model: string) => enq("quote", { model, src: `Model card: ${model}` });
export const fgServiceLink = (model: string) =>
  enq("fgaas", { model, src: `Model card: ${model.replace("FortiGate ", "")} as a service` });

// CTA copy and tabbed quote form for a FortiGate product page.
// models: the page's own models (the first is preselected); fgaas: the model also sold as a service, which adds the "As a service" tab
export const fgEnquiry = (o: { page: string; heading: string; highlightLast: number; models: string[]; fgaas?: string }): EnquiryTabsData => {
  const tab = (value: string, label: string, title: string, pickName: string, doneName: string, modelField?: string) => ({
    value, label, title, pickName, doneName, modelField,
  });
  return {
    tag: "Get started",
    heading: o.heading,
    highlightLast: o.highlightLast,
    steps: [
      "Tell us your sites, internet links, users and remote access needs.",
      "We review your current security and size the model and protection bundle.",
      "You get a proposal with the design, bill of materials, timeline and quote.",
    ],
    note: "Clicked Enquire on a model? The form is already filled in with your choice.",
    legend: "What do you need?",
    tabs: [
      tab("quote", "New firewall", "Request a FortiGate quote", "New firewall", "firewall quote", "model"),
      tab("upgrade", "Upgrade", "Plan your FortiGate upgrade", "Upgrade", "upgrade", "current_model"),
      tab("renewal", "Licence renewal", "Renew your Fortinet licence", "Licence renewal", "licence renewal", "current_model"),
      tab("bundle", "Protection bundle", "Get a protection bundle quote", "Protection bundle", "protection bundle", "model"),
      ...(o.fgaas ? [tab("fgaas", "As a service", "Ask about FortiGate as a Service", "FortiGate as a Service", "FortiGate as a Service", "model")] : []),
      tab("expert", "Talk to an expert", "Talk to an expert", "Talk to an expert", "expert consultation"),
    ],
    fields: [
      {
        name: "model",
        label: "FortiGate model",
        type: "select",
        show: ["quote", "bundle", "fgaas"],
        full: true,
        empty: "Not sure, help me choose",
        options: o.models.map((m) => (m === o.fgaas ? m : { label: m, hideIn: ["fgaas"] })),
      },
      { name: "current_model", label: "Current FortiGate model", type: "select", show: ["upgrade", "renewal"], options: FG_CURRENT_MODELS },
      { name: "units", label: "Number of units", type: "number", show: ["upgrade"], placeholder: "1" },
      { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FGT60FTK…" },
      { name: "licence_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
      {
        name: "bundle",
        label: "Protection bundle",
        type: "select",
        show: ["quote", "upgrade", "renewal", "bundle"],
        empty: "Not sure, recommend one",
        options: ["Unified Threat Protection (UTP)", "Enterprise Protection", "FortiCare only"],
      },
      {
        name: "term",
        label: "Term",
        type: "select",
        show: ["quote", "upgrade", "renewal", "bundle", "fgaas"],
        empty: "Not sure yet",
        options: [{ label: "1 year", hideIn: ["fgaas"] }, "3 years", { label: "Monthly", onlyIn: ["fgaas"] }, { label: "5 years", onlyIn: ["fgaas"] }],
      },
      {
        name: "users",
        label: "Users at the site",
        type: "select",
        show: ["quote", "upgrade"],
        options: ["Up to 25", "26 to 100", "101 to 500", "501 to 2,000", "Over 2,000"],
      },
      { name: "sites", label: "Number of sites", type: "number", show: ["quote", "upgrade", "fgaas"], placeholder: "1" },
      { name: "high_availability", label: "High availability", type: "select", show: ["quote", "upgrade"], empty: "Not sure", options: ["Single unit", "HA pair"] },
      { name: "bandwidth", label: "Bandwidth needed", type: "select", show: ["fgaas"], empty: "Not sure", options: ["100 Mbps", "500 Mbps", "1 Gbps", "Over 1 Gbps"] },
      {
        name: "fgaas_use",
        label: "Main use",
        type: "select",
        show: ["fgaas"],
        options: ["SD-WAN hub", "Wireless controller", "Central web proxy and inspection", "OT security", "Other"],
      },
    ],
    detailsTitle: "Your details",
    messageLabel: "Anything else we should know?",
    messagePlaceholder: "Internet speed, VPN users, current firewall, timeline",
    initial: { model: o.models[0] },
    page: o.page,
    endpoint: "/api/lets-talk", // same handler as the other enquiry forms
    submitText: "Send request",
    sendingText: "Sending…",
    smallText: "A GS IT security engineer will review your request and reply with next steps.",
    errorText: "Sorry, your request did not send. Please try again, or call us.",
    doneTitle: "Thank you. Your request is in.",
    againText: "Send another request",
  };
};

export const fgFootNote = "Fortinet, FortiGate, FortiGuard, FortiOS and the Fortinet logo are trademarks of Fortinet, Inc.";
