import type { QualItem } from "@/app/components/YealinkProduct/Sections/Quals";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";

// Content shared by the Fortinet endpoint, data and SASE product pages (/store/network-security/fortinet/*)

export const EPS_IMG = "/assets/images/fortinet/endpoint-sase";
export const EPS_STORE = "/store/network-security/fortinet";
export const EPS_CATEGORY = "/fortinet-endpoint-sase";

export const epsCrumbs = (product: string) => [
  { label: "GS IT Store", href: "/store" },
  { label: "Security" },
  { label: "Fortinet", href: EPS_CATEGORY },
  { label: product },
];

// Fortinet partner badge under the hero image
export const epsBadge = {
  src: `${EPS_IMG}/fortinet-authorized-partner.webp`,
  alt: "Fortinet Authorized Partner",
  text: "Supplied, deployed and supported by GS IT in Dubai.",
};

// Hero buttons open the quote form at the bottom of the page (prefilled with this product) or its "Talk to an expert" tab
export const epsHeroButtons = (product: string) => [
  { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: enq("quote", { model: product, src: "Hero: Get a quote" }) },
  { text: "Talk to an expert", icon: "", bgButton: "bg-white", dark: false, href: enq("expert", { src: "Hero: Talk to an expert" }) },
];

// Licensing option card link: selects that option in the form (sku: the part number on the card)
export const epsOptionLink = (option: string, sku: string) => enq("quote", { model: option, src: `Option card: ${sku}` });

// "Why buy from GS IT" strip under the hero
export const epsQuals: QualItem[] = [
  { icon: "ShieldCheck", title: "Genuine Fortinet licences" },
  { icon: "RefreshCw", title: "FortiCare support and renewals" },
  { icon: "Gauge", title: "Sizing by a security engineer" },
  { icon: "Wrench", title: "Deployment, enrolment and support" },
];

// CTA copy and tabbed quote form for an endpoint or SASE product page.
// products: this product first (preselected), then its licensing options; page / product: hidden fields sent with the form
export const epsEnquiry = (o: { page: string; product: string; heading: string; highlightLast: number; products: string[] }): EnquiryTabsData => ({
  tag: "Get started",
  heading: o.heading,
  highlightLast: o.highlightLast,
  steps: ["Tell us your users, devices, directory and the risk you need to close.", "We match the products, licence sizes and policies to it.", "You get a proposal with the design, bill of materials, timeline and quote."],
  note: "Clicked Enquire on an option? The form is already filled in with your choice.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New deployment", title: "Request an endpoint or SASE quote", pickName: "New deployment", doneName: "endpoint or SASE quote", modelField: "model" },
    { value: "expand", label: "Add users or devices", title: "Add users or devices", pickName: "Add users or devices", doneName: "licence expansion", modelField: "model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "model" },
    { value: "expert", label: "Talk to an expert", title: "Talk to an expert", pickName: "Talk to an expert", doneName: "expert consultation" },
  ],
  fields: [
    { name: "model", label: "Product", type: "select", show: ["quote", "expand", "renewal"], full: true, empty: "Not sure, help me choose", options: o.products },
    { name: "users", label: "Number of users", type: "number", show: ["quote", "expand"], placeholder: "e.g. 100" },
    { name: "devices", label: "Number of devices", type: "number", show: ["quote", "expand"], placeholder: "e.g. 500" },
    { name: "directory", label: "Identity provider", type: "select", show: ["quote"], empty: "Not sure", options: ["Active Directory", "Microsoft Entra ID", "Both", "LDAP or other", "None yet"] },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "serial_numbers", label: "Serial or licence number(s)", type: "text", show: ["expand", "renewal"], placeholder: "e.g. FAC-VM…" },
    { name: "support_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "expand", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years", "5 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "VPN in use, cloud apps, admin accounts, audit deadlines, timeline",
  initial: { model: o.product },
  page: o.page,
  hidden: { product_page: o.product },
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "security engineer",
  againText: "Send another request",
});

// Trademark line, naming the page's product
export const epsFootNote = (product: string) => `Fortinet, ${product}, FortiGate, FortiCare and the Fortinet logo are trademarks of Fortinet, Inc.`;
