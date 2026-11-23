import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { ProductCardsData } from "@/app/components/FortinetFirewallProducts/Sections/ProductCards";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { MGA_IMG as IMG_DIR, MGA_STORE as STORE } from "@/app/components/FortinetProduct/products/management-analytics-shared";

// Generated from 07-Management-and-Analytics/fortinet-management-analytics.html (Fortinet pages pack)

const img = (file: string) => `${IMG_DIR}/${file}`;
const store = (slug: string) => `${STORE}/${slug}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

const BANNER = img("fortinet-management-analytics-hero.webp");

export const seo = {
  title: "Fortinet Management and Analytics in Dubai | GS IT",
  description: "FortiManager, FortiAnalyzer, FortiGate Cloud and FortiAI from GS IT in Dubai. Configure, log and report on every Fortinet device in one place.",
  ogTitle: "Fortinet Management and Analytics | GS IT",
  ogDescription: "Central management, logging and AI-assisted operations for Fortinet networks, from one partner in Dubai.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: img("fortinet-authorized-partner.webp"), alt: "Fortinet Authorized Partner", wide: true },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Security" }, { label: "Fortinet" }, { label: "Management and analytics" }],
  tag: "Fortinet Authorized Partner",
  heading: "Management and analytics\n in one console",
  highlightLast: 3,
  description: "Every FortiGate, switch and access point configured, logged and reported from one place. FortiManager, FortiAnalyzer, FortiGate Cloud and FortiAI cut the time your team spends on routine changes and investigations. GS IT designs, deploys and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore the products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#products" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "1", desc: "console for every Fortinet device" },
    { value: "1 year", desc: "hosted logs with FortiGate Cloud" },
    { value: "3", desc: "ways to deploy: cloud, VM or appliance" },
  ],
};

export const whyData: BentoData = {
  tag: "Why it matters",
  heading: "More devices,\n not more admin work",
  highlightLast: 4,
  subhead: "Every new site adds firewalls, switches and access points to configure, patch and watch. Managing them one by one costs time and lets mistakes slip through.",
  data: [
    {
      variant: "light",
      big: "Change",
      title: "Once, everywhere",
      dim: "FortiManager",
      text: [
        "Update a policy or firmware once and push it to every site, with a full history of who changed what.",
      ],
    },
    {
      variant: "light",
      title: "See every event",
      dim: "FortiAnalyzer",
      text: [
        "Logs from every device land in one place, so an incident can be traced across every site from one place.",
      ],
    },
    {
      variant: "dark",
      title: "Ask in plain language",
      dim: "FortiAI",
      text: [
        "Your team describes what it needs, and FortiAI writes the query, report or configuration.",
        "Less time on routine work, more on real threats.",
      ],
    },
  ],
};

export const productsData: ProductCardsData = {
  tag: "The products",
  heading: "Four tools,\n one view of your network",
  highlightLast: 5,
  subhead: "Small networks often start with FortiGate Cloud. Larger ones run FortiManager and FortiAnalyzer, with FortiAI on top.",
  data: [
    {
      id: "fortimanager",
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/><path d=\"M7 8h4M7 11h7\"/>",
      kicker: "Central management",
      title: "FortiManager",
      lead: "Configure, update and audit every FortiGate, FortiSwitch and FortiAP from one console, instead of logging in to each device.",
      points: ["Shared policies and objects pushed to many FortiGates at once", "Firmware upgrades scheduled across sites", "Revision history with rollback for every change", "Zero-touch provisioning for new branches", "Manages FortiSwitch and FortiAP through each FortiGate", "Runs in Fortinet’s cloud, as a VM or as an appliance"],
      licence: { label: "Licensing", text: "Licensed by managed devices: one FortiGate, or one VDOM when VDOMs are enabled. FortiManager Cloud is a subscription in tiers from 3 devices." },
      link: { text: "Learn more", href: store("fortimanager") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiManager", src: "Product: FortiManager" }) },
    },
    {
      id: "fortianalyzer",
      icon: "<path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/>",
      kicker: "Central logging and analytics",
      title: "FortiAnalyzer",
      lead: "Collects logs from your Fortinet devices into one place, then turns them into reports, alerts and incident timelines.",
      points: ["Central log storage and search across all devices", "Ready-made reports for security, compliance and usage", "FortiGuard outbreak detection with alerts and handlers", "Indicators of compromise and incident management", "SOC automation with event handlers and playbooks", "Runs in Fortinet’s cloud, as a VM or as an appliance"],
      licence: { label: "Licensing", text: "Licensed by log volume in GB per day. FortiAnalyzer Cloud is licensed per FortiGate, with add-ons of 5, 50 or 500 GB per day." },
      link: { text: "Learn more", href: store("fortianalyzer") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiAnalyzer", src: "Product: FortiAnalyzer" }) },
    },
    {
      id: "fortigate-cloud",
      icon: "<path d=\"M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5a4 4 0 0 1-1 9.5z\"/>",
      kicker: "Cloud management for smaller sites",
      title: "FortiGate Cloud",
      lead: "Simple cloud management, analytics and one year of hosted logs for FortiGates at smaller and branch sites.",
      points: ["Zero-touch provisioning from the cloud", "Remote access to each FortiGate", "Configuration backup, restore and central changes", "Security analytics and multiple pre-built reports", "One year of hosted log retention", "Covers FortiAP, FortiSwitch and FortiExtender behind the FortiGate"],
      licence: { label: "Licensing", text: "Per FortiGate subscription on 1, 3 or 5 year terms. Without one, devices get a basic tier with 7-day log retention." },
      link: { text: "Learn more", href: store("fortigate-cloud") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiGate Cloud", src: "Product: FortiGate Cloud" }) },
    },
    {
      id: "fortiai",
      icon: "<path d=\"M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z\"/><path d=\"M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z\"/>",
      kicker: "AI assistant",
      title: "FortiAI",
      lead: "A generative AI assistant inside FortiManager and FortiAnalyzer that helps your team investigate, configure and troubleshoot in plain language.",
      points: ["Summarises security events and suggests remediation", "Writes log queries, reports and event handler rules", "Helps build scripts and VPN configuration in FortiManager", "IoT device analysis and troubleshooting", "Uses FortiGuard Labs threat intelligence", "Available on cloud and on-premises FortiManager and FortiAnalyzer"],
      licence: { label: "Licensing", text: "Add-on licence for FortiManager or FortiAnalyzer, including a monthly token allowance shared by FortiAI users." },
      link: { text: "Learn more", href: store("fortiai") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiAI", src: "Product: FortiAI" }) },
    },
  ],
};

export const supportData: OptionCardsData = {
  tag: "Licences and support",
  heading: "Sized to your devices\n and log volume",
  highlightLast: 3,
  subhead: "Each tool is licensed differently. We size every licence from your device count and log volume, so you pay for what you use.",
  columns: 4,
  data: [
    {
      kicker: "FortiManager",
      title: "Per managed device",
      text: "One FortiGate or VDOM per licence. Cloud tiers start at 3 devices.",
    },
    {
      kicker: "FortiAnalyzer",
      title: "Per GB of logs a day",
      text: "Cloud is per FortiGate, with 5, 50 or 500 GB a day add-ons.",
    },
    {
      kicker: "FortiGate Cloud",
      title: "Per FortiGate",
      text: "1, 3 or 5 year terms, with one year of hosted logs.",
    },
    {
      kicker: "FortiAI",
      title: "Add-on",
      text: "Licence for FortiManager or FortiAnalyzer, with a monthly token allowance.",
    },
  ],
  buttons: [
    primary("Renew a licence", enq("renewal", { src: "Support: Renew a licence" })),
    outline("Add devices or log capacity", enq("expand", { src: "Support: Add devices or log capacity" })),
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "Where central management\n pays off first",
  highlightLast: 3,
  subhead: "Most projects start with one of these and extend from there.",
  data: [
    {
      icon: "<path d=\"M3 11l9-7 9 7v9H3z\"/>",
      title: "Multi-site rollouts",
      description: "Open a new branch with zero-touch provisioning and a ready policy package.",
    },
    {
      icon: "<path d=\"M4 4v16h16\"/><path d=\"M8 14l3-3 3 2 5-6\"/>",
      title: "Firmware at scale",
      description: "Schedule upgrades across every FortiGate instead of one site at a time.",
    },
    {
      icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
      title: "Audits and compliance",
      description: "Reports and retained logs show auditors what happened, and when.",
    },
    {
      icon: "<circle cx=\"11\" cy=\"11\" r=\"6\"/><path d=\"M20 20l-4.5-4.5\"/>",
      title: "Incident investigation",
      description: "Trace an attack across sites from one log store, with an incident timeline.",
    },
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/>",
      title: "Outbreak response",
      description: "FortiGuard outbreak alerts show if a new threat has reached your network.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8\"/>",
      title: "Managed service",
      description: "GS IT can run FortiManager and FortiAnalyzer for you as part of an AMC.",
    },
  ],
};

export const howData = {
  tag: "How it fits together",
  heading: "Configure, log,\n investigate, improve",
  highlightLast: 2,
  subhead: "FortiManager and FortiAnalyzer share the same device list, so changes and their effects are visible in one loop.",
  data: [
    { title: "Configure", text: "FortiManager pushes policies and firmware to every FortiGate." },
    { title: "Collect", text: "Every device sends its logs to FortiAnalyzer or FortiGate Cloud." },
    { title: "Detect", text: "Outbreak alerts and event handlers flag what needs attention." },
    { title: "Investigate", text: "FortiAI summarises the incident and suggests next steps." },
    { title: "Fix", text: "The change goes out through FortiManager, with an audit trail." },
  ],
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From scattered devices\n to one console",
  highlightLast: 3,
  subhead: "We onboard devices in stages, so nothing changes on your network until you approve it.",
  data: [
    { title: "Assess", text: "Devices, sites, log volume and retention needs." },
    { title: "Design", text: "Cloud or on-premises, licence sizes and policy structure." },
    { title: "Onboard", text: "Devices imported with their current configuration intact." },
    { title: "Standardise", text: "Shared policy packages, reports and alerts set up." },
    { title: "Support", text: "Monitoring, updates, policy changes and licence renewal tracking." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Management and analytics\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Do we need FortiManager and FortiAnalyzer, or is FortiGate Cloud enough?",
      answer: "For a few small sites, FortiGate Cloud covers management, reports and one year of logs per FortiGate. As you add sites, VDOMs or compliance needs, FortiManager and FortiAnalyzer give you deeper policy control, longer retention options and SOC features.",
    },
    {
      question: "Cloud or on-premises?",
      answer: "Both run the same software. FortiManager Cloud and FortiAnalyzer Cloud need no servers and are licensed per device. A VM or appliance suits organisations that must keep logs inside the UAE or need very large log volumes.",
    },
    {
      question: "How is FortiManager licensed?",
      answer: "By the number of managed devices. One FortiGate counts as one device, or one per VDOM when VDOMs are enabled. The secondary unit of an HA pair is not counted on the VM and appliance models.",
    },
    {
      question: "How is FortiAnalyzer licensed?",
      answer: "By log volume in GB per day. For FortiAnalyzer Cloud, each FortiGate subscription includes a daily allowance based on its size, and you add 5, 50 or 500 GB per day if you need more.",
    },
    {
      question: "How long are logs kept?",
      answer: "FortiGate Cloud keeps one year of logs with a subscription. FortiAnalyzer retention depends on the storage you license, and we size it to your audit and compliance needs.",
    },
    {
      question: "What does FortiAI add?",
      answer: "A plain-language assistant inside FortiManager and FortiAnalyzer. It can summarise incidents, write queries and reports, and help with configuration, so your team spends less time on routine work.",
    },
    {
      question: "Do you set it up and run it?",
      answer: "Yes. GS IT is a Fortinet Authorized Partner. We deploy FortiManager and FortiAnalyzer, onboard your devices, build policy packages and reports, and can monitor them for you. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "See and run your network\n from one place",
  highlightLast: 3,
  steps: [
    "Tell us how many FortiGates and sites you run, and your log needs.",
    "We match the products, licence sizes and policies to it.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Ask about it on a product, or one of the licence buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New deployment", title: "Request a management quote", pickName: "New deployment", doneName: "management quote", modelField: "model" },
    { value: "expand", label: "Add devices or log capacity", title: "Add devices or log capacity", pickName: "Add devices or log capacity", doneName: "licence expansion", modelField: "model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "model" },
  ],
  fields: [
    { name: "model", label: "Product", type: "select", show: ["quote", "expand", "renewal"], full: true, empty: "Not sure, help me choose", options: ["FortiManager", "FortiAnalyzer", "FortiGate Cloud", "FortiAI", "Several of these"] },
    { name: "fortigates", label: "Number of FortiGates", type: "number", show: ["quote", "expand"], placeholder: "e.g. 10" },
    { name: "logs_gb_per_day", label: "Logs per day (GB, if known)", type: "number", show: ["quote", "expand"], placeholder: "e.g. 5" },
    { name: "deployment", label: "Where should it run?", type: "select", show: ["quote"], empty: "Not sure", options: ["Fortinet cloud", "On-premises appliance", "VM in our data centre", "Public cloud VM"] },
    { name: "fortigate_on_site", label: "Using FortiGate Cloud today?", type: "select", show: ["quote"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "serial_numbers", label: "Serial or licence number(s)", type: "text", show: ["expand", "renewal"], placeholder: "e.g. FMG-VM…" },
    { name: "support_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "expand", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years", "5 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Sites, log retention needs, audit requirements, timeline",
  page: "fortinet-management-analytics",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "security engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiManager, FortiAnalyzer, FortiGate Cloud, FortiAI, FortiGate, FortiGuard, FortiCare and other product names are trademarks of Fortinet, Inc.";
