import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 120G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-120g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-120g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-120g.html
export const fortigate120G: LogitechProductData = {
  slug: "fortigate-120g",
  seo: {
    title: "FortiGate 120G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 120G from GS IT, a Fortinet Authorized Partner in Dubai. 2.8 Gbps threat protection, 39 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 120G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 1RU firewall for mid-size offices and SD-WAN hubs, with dual power supplies. The successor to the 100F.",
  },
  name: "FortiGate 120G",
  image: `${IMG}/fortigate-120g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 120G"),
    gallery: [{ src: `${IMG}/fortigate-120g-card.webp`, alt: "FortiGate 120G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet mid-size firewall",
    heading: "FortiGate\n 120G",
    highlightLast: 1,
    description: "A 1RU firewall for mid-size offices and SD-WAN hubs, with dual power supplies. The successor to the 100F.",
    pills: ["SP5 security processor", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 120G" },
      { label: "Models", value: "120G, 121G" },
      { label: "Threat protection", value: "2.8 Gbps" },
      { label: "Firewall", value: "39 Gbps" },
      { label: "Interfaces", value: "18x GE RJ45, 8x GE SFP, 4x 10GE SFP+" },
      { label: "Form factor", value: "1RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "2.8 Gbps on Fortinet's SP5 processor" },
      { label: "Ports", text: "18x GE RJ45, 8x GE SFP and 4x 10GE SFP+" },
      { label: "Resilience", text: "dual power supplies, 1+1 redundant" },
      { label: "Local logs", text: "the 121G adds a 480 GB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 120G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 120G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 120G",
            desc: "No onboard storage",
            points: ["2.8 Gbps threat protection", "39 Gbps firewall", "35 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 120G"),
          },
          {
            name: "FortiGate 121G",
            desc: "480 GB SSD for local logs",
            points: ["2.8 Gbps threat protection", "39 Gbps firewall", "35 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 121G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 120G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "SP5 acceleration",
        description: "Fortinet's SP5 processor takes firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 120G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 120G replaces the 100F in mid-size offices. It moves to a 1RU chassis with dual power supplies and adds 10GE SFP+ uplinks, so it can also act as the SD-WAN hub for your branches.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "2.8 Gbps", label: "threat protection" },
      { value: "39 Gbps", label: "firewall throughput", dark: true },
      { value: "35 Gbps", label: "IPsec VPN throughput" },
      { value: "3 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 120G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "5.3 Gbps" },
            { label: "NGFW throughput", value: "3.1 Gbps" },
            { label: "Threat protection throughput", value: "2.8 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "39 / 39 / 28 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.17 μs" },
            { label: "Firewall throughput (packets per second)", value: "42 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "3 million" },
            { label: "New sessions per second (TCP)", value: "140,000" },
            { label: "Firewall policies", value: "10,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "35 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "2,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "16,000" },
            { label: "SSL-VPN throughput / users", value: "1.5 Gbps / 500" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "3 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "2,100 / 315,000" },
            { label: "Application control throughput (HTTP 64K)", value: "6.7 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "35 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 10" },
            { label: "Maximum FortiSwitches", value: "48 (FortiOS 7.6.1+)" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "128 / 64" },
            { label: "Maximum FortiTokens", value: "5,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "GE RJ45 ports", value: "16" },
            { label: "GE RJ45 management / HA ports", value: "1 / 1" },
            { label: "GE SFP slots", value: "8" },
            { label: "10GE SFP+ FortiLink slots", value: "4" },
            { label: "USB port", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "120G: none · 121G: 480 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.73 x 17 x 10 in (44 x 432 x 254 mm)" },
            { label: "Weight", value: "12.17 lbs (5.52 kg)" },
            { label: "Form factor", value: "Rack mount, 1RU" },
            { label: "Power supply", value: "Dual non-swappable AC PSUs, 1+1 redundant" },
            { label: "Power consumption (average / maximum)", value: "120G: 38 / 40 W · 121G: 43 / 47 W" },
            { label: "Heat dissipation", value: "120G: 138 BTU/h · 121G: 159 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Noise level", value: "49 dBA" },
            { label: "Certifications", value: "USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SP5.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 120G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 120G for?",
        answer: "It suits mid-size offices and SD-WAN hubs. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 120G replace the FortiGate 100F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 100F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 120G and 121G?",
        answer: "The 121G adds 480 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 120G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 120G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 70G", text: "Small office and branch · 1.3 Gbps threat protection", image: `${IMG}/fortigate-70g-card.webp`, href: `${FG_STORE}/fortigate-70g` },
      { title: "FortiGate 90G", text: "Small office and branch · 2.2 Gbps threat protection", image: `${IMG}/fortigate-90g-card.webp`, href: `${FG_STORE}/fortigate-90g` },
      { title: "FortiGate 200G", text: "Campus and enterprise edge · 6 Gbps threat protection", image: `${IMG}/fortigate-200g-card.webp`, href: `${FG_STORE}/fortigate-200g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-120g",
    heading: "Get a quote\n for the FortiGate 120G",
    highlightLast: 4,
    models: ["FortiGate 120G", "FortiGate 121G"],
  }),
  footNote: fgFootNote,
};
