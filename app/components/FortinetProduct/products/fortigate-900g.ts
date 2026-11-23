import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgServiceLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 900G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-900g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-900g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-900g.html
export const fortigate900G: LogitechProductData = {
  slug: "fortigate-900g",
  seo: {
    title: "FortiGate 900G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 900G from GS IT, a Fortinet Authorized Partner in Dubai. 30 Gbps threat protection, 164 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 900G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 1RU firewall for large campuses and enterprise edges, with 30 Gbps of threat protection. A current replacement for the 600F.",
  },
  name: "FortiGate 900G",
  image: `${IMG}/fortigate-900g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 900G"),
    gallery: [{ src: `${IMG}/fortigate-900g-card.webp`, alt: "FortiGate 900G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet enterprise firewall",
    heading: "FortiGate\n 900G",
    highlightLast: 1,
    description: "A 1RU firewall for large campuses and enterprise edges, with 30 Gbps of threat protection. A current replacement for the 600F.",
    pills: ["NP7 and CP9", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 900G" },
      { label: "Models", value: "900G, 901G" },
      { label: "Threat protection", value: "30 Gbps" },
      { label: "Firewall", value: "164 Gbps" },
      { label: "Interfaces", value: "4x 25GE SFP28, 4x 10GE SFP+, 8x GE SFP, 17x GE RJ45" },
      { label: "Form factor", value: "1RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "30 Gbps on NP7 and CP9 processors" },
      { label: "Ports", text: "4x 25GE SFP28, 4x 10GE SFP+, GE SFP and RJ45" },
      { label: "Scale", text: "164 Gbps firewall and 28 million sessions" },
      { label: "Also as a service", text: "the 901G is available as FortiGate as a Service" },
    ],
    buttons: fgHeroButtons("FortiGate 900G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 900G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 900G",
            desc: "No onboard storage",
            points: ["30 Gbps threat protection", "164 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 900G"),
          },
          {
            tag: "Also as a service",
            name: "FortiGate 901G",
            desc: "2x 480 GB SSD for local logs",
            points: ["30 Gbps threat protection", "164 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 901G"),
            secondary: { label: "Ask about it as a service", href: fgServiceLink("FortiGate 901G") },
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 900G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "NP7 acceleration",
        description: "Fortinet's NP7 and CP9 processors take firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 900G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 900G puts data centre class inspection into a 1RU unit. It suits large campuses that need high threat protection at the edge without the rack space of a 2RU firewall.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "30 Gbps", label: "threat protection" },
      { value: "164 Gbps", label: "firewall throughput", dark: true },
      { value: "55 Gbps", label: "IPsec VPN throughput" },
      { value: "28 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 900G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "42 Gbps" },
            { label: "NGFW throughput", value: "31 Gbps" },
            { label: "Threat protection throughput", value: "30 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "164 / 163 / 153 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.78 μs (2.5 μs on ULL ports)" },
            { label: "Firewall throughput (packets per second)", value: "229.5 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "28 million" },
            { label: "New sessions per second (TCP)", value: "720,000" },
            { label: "Firewall policies", value: "50,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "55 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "2,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "50,000" },
            { label: "SSL-VPN throughput / users", value: "10 Gbps / 10,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "16.7 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "18,000 / 1.6 million" },
            { label: "Application control throughput (HTTP 64K)", value: "74.8 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "133 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 50" },
            { label: "Maximum FortiSwitches", value: "196 (FortiOS 7.6.1+)" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "2,048 / 1,024" },
            { label: "Maximum FortiTokens", value: "5,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "25GE SFP28 / 10GE SFP+ ultra-low-latency slots", value: "4" },
            { label: "10GE SFP+ / GE SFP slots", value: "4" },
            { label: "GE SFP slots", value: "8" },
            { label: "GE RJ45 ports", value: "16" },
            { label: "2.5GE HA port / GE management port", value: "1 / 1" },
            { label: "USB ports", value: "2" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "900G: none · 901G: 2x 480 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.5 x 17.0 x 15.0 in (44.45 x 432 x 380 mm)" },
            { label: "Weight", value: "15.98 lbs (7.25 kg)" },
            { label: "Form factor", value: "Rack mount, 1RU" },
            { label: "Power supply", value: "Dual hot-swappable AC PSUs; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "170 W / 313 W" },
            { label: "Heat dissipation", value: "1,069 BTU/h" },
            { label: "Operating temperature", value: "0 to 45°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "58 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-900G-DAT-R23-20260929. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 900G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 900G for?",
        answer: "It suits large campuses and enterprise edges. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 900G replace the FortiGate 600F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 600F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 900G and 901G?",
        answer: "The 901G adds 2x 480 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
      },
      {
        question: "Which protection bundle does it need?",
        answer: "Most customers choose Unified Threat Protection (UTP) or Enterprise Protection, for 1 or 3 years. Without a FortiGuard bundle the firewall still passes traffic but stops receiving threat updates. We include the right bundle in the quote.",
      },
      {
        question: "Can we get it as a service?",
        answer: "Yes. The 901G is available as FortiGate as a Service, paid monthly or annually with FortiPoints. Fortinet supplies and maintains the hardware, and GS IT sets it up for you.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 900G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 900G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 200G", text: "Campus and enterprise edge · 6 Gbps threat protection", image: `${IMG}/fortigate-200g-card.webp`, href: `${FG_STORE}/fortigate-200g` },
      { title: "FortiGate 400G", text: "Campus and enterprise edge · 13 Gbps threat protection", image: `${IMG}/fortigate-400g-card.webp`, href: `${FG_STORE}/fortigate-400g` },
      { title: "FortiGate 1800F", text: "Data centre · 15 Gbps threat protection", image: `${IMG}/fortigate-1800f-card.webp`, href: `${FG_STORE}/fortigate-1800f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-900g",
    heading: "Get a quote\n for the FortiGate 900G",
    highlightLast: 4,
    models: ["FortiGate 900G", "FortiGate 901G"], fgaas: "FortiGate 901G",
  }),
  footNote: fgFootNote,
};
