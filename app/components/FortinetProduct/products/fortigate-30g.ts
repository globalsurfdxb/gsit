import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 30G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-fortiwifi-30g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-fortiwifi-30g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-30g.html
export const fortigate30G: LogitechProductData = {
  slug: "fortigate-30g",
  seo: {
    title: "FortiGate 30G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 30G from GS IT, a Fortinet Authorized Partner in Dubai. 500 Mbps threat protection, 4 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 30G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A compact desktop firewall for home offices, pop-up sites and very small branches, with SD-WAN and VPN built in.",
  },
  name: "FortiGate 30G",
  image: `${IMG}/fortigate-30g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 30G"),
    gallery: [{ src: `${IMG}/fortigate-30g-card.webp`, alt: "FortiGate 30G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet small office firewall",
    heading: "FortiGate\n 30G",
    highlightLast: 1,
    description: "A compact desktop firewall for home offices, pop-up sites and very small branches, with SD-WAN and VPN built in.",
    pills: ["FortiOS with SD-WAN", "Desktop"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 30G" },
      { label: "Models", value: "30G" },
      { label: "Threat protection", value: "500 Mbps" },
      { label: "Firewall", value: "4 Gbps" },
      { label: "Interfaces", value: "4x GE RJ45" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Small-site protection", text: "500 Mbps of threat protection for a handful of users" },
      { label: "Simple cabling", text: "4x GE RJ45 ports, one of them WAN" },
      { label: "Branch ready", text: "SD-WAN, IPsec VPN and ZTNA in the same box" },
      { label: "Central control", text: "managed alone or from FortiManager and FortiGate Cloud" },
    ],
    buttons: fgHeroButtons("FortiGate 30G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Configuration",
    heading: "FortiGate 30G configuration\n sized to your traffic",
    highlightLast: 4,
    subhead: "We confirm the configuration during a short security review.",
    groups: [
      {
        label: "Configuration",
        columns: 2,
        models: [
          {
            name: "FortiGate 30G",
            desc: "No onboard storage",
            points: ["500 Mbps threat protection", "4 Gbps firewall", "3.5 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 30G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 30G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "SoC4 acceleration",
        description: "Fortinet's SoC4 processor takes firewall and VPN work off the CPU, so throughput holds up with security switched on.",
      },
      {
        icon: fgIcons.shield,
        title: "FortiGuard AI security",
        description: "Intrusion prevention, malware protection, web filtering and application control, updated by FortiGuard Labs.",
      },
      {
        icon: fgIcons.sdwan,
        title: "Secure SD-WAN",
        description: "Steers each application across your internet links by performance, with the firewall in the same box.",
      },
      {
        icon: fgIcons.lock,
        title: "Zero trust access",
        description: "ZTNA in FortiOS checks every user and device before granting access to an application.",
      },
      {
        icon: fgIcons.wifi,
        title: "Switch and Wi-Fi control",
        description: "Manages FortiSwitch and FortiAP from the firewall, so one policy covers the wired and wireless network.",
      },
      {
        icon: fgIcons.desktop,
        title: "Central management",
        description: "Manage one unit on the box, or many from FortiManager or FortiGate Cloud.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where the 30G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 30G brings the same FortiOS that runs on Fortinet's data centre firewalls to the smallest sites you have. It replaces a consumer router with a managed security gateway, so a remote office follows the same policy as head office.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "500 Mbps", label: "threat protection" },
      { value: "4 Gbps", label: "firewall throughput", dark: true },
      { value: "3.5 Gbps", label: "IPsec VPN throughput" },
      { value: "600,000", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 30G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "800 Mbps" },
            { label: "NGFW throughput", value: "570 Mbps" },
            { label: "Threat protection throughput", value: "500 Mbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "4 / 4 / 3.9 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.87 μs" },
            { label: "Firewall throughput (packets per second)", value: "5.85 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "600,000" },
            { label: "New sessions per second (TCP)", value: "30,000" },
            { label: "Firewall policies", value: "2,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "3.5 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "200" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "250" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "400 Mbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "260 / 55,000" },
            { label: "Application control throughput (HTTP 64K)", value: "830 Mbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains", value: "Not supported" },
            { label: "Maximum FortiSwitches", value: "8" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "16 / 8" },
            { label: "Maximum FortiTokens", value: "500" },
            { label: "High availability", value: "Active-passive, active-active" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "GE RJ45 WAN port", value: "1" },
            { label: "GE RJ45 ports", value: "2" },
            { label: "GE RJ45 FortiLink port", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "None" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.6 x 5.6 x 6.3 in (40.5 x 142 x 160 mm)" },
            { label: "Weight", value: "1.3 lbs (0.6 kg)" },
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "External DC adapter, 12 V DC 2 A" },
            { label: "Power consumption (average / maximum)", value: "6.8 W / 8.2 W" },
            { label: "Heat dissipation", value: "28 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "20% to 90% non-condensing" },
            { label: "Compliance", value: "FCC, IC, CE, UL/cUL, CB, VCCI, BSMI, RCM, UKCA; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SoC4.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 30G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 30G for?",
        answer: "It suits home offices and very small branches. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Which protection bundle does it need?",
        answer: "Most customers choose Unified Threat Protection (UTP) or Enterprise Protection, for 1 or 3 years. Without a FortiGuard bundle the firewall still passes traffic but stops receiving threat updates. We include the right bundle in the quote.",
      },
      {
        question: "Can it run in high availability?",
        answer: "Yes. Two units can run as an active-passive or active-active cluster, so a hardware fault does not take your site offline.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 30G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 30G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 40F", text: "Small office and branch · 600 Mbps threat protection", image: `${IMG}/fortigate-40f-card.webp`, href: `${FG_STORE}/fortigate-40f` },
      { title: "FortiGate 50G", text: "Small office and branch · 1.1 Gbps threat protection", image: `${IMG}/fortigate-50g-card.webp`, href: `${FG_STORE}/fortigate-50g` },
      { title: "FortiGate 70G", text: "Small office and branch · 1.3 Gbps threat protection", image: `${IMG}/fortigate-70g-card.webp`, href: `${FG_STORE}/fortigate-70g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-30g",
    heading: "Get a quote\n for the FortiGate 30G",
    highlightLast: 4,
    models: ["FortiGate 30G"],
  }),
  footNote: fgFootNote,
};
