import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 200G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-200g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-200g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-200g.html
export const fortigate200G: LogitechProductData = {
  slug: "fortigate-200g",
  seo: {
    title: "FortiGate 200G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 200G from GS IT, a Fortinet Authorized Partner in Dubai. 6 Gbps threat protection, 39 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 200G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 1RU firewall for head offices that need deep SSL inspection and fibre connectivity. The successor to the 200F.",
  },
  name: "FortiGate 200G",
  image: `${IMG}/fortigate-200g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 200G"),
    gallery: [{ src: `${IMG}/fortigate-200g-card.webp`, alt: "FortiGate 200G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet enterprise firewall",
    heading: "FortiGate\n 200G",
    highlightLast: 1,
    description: "A 1RU firewall for head offices that need deep SSL inspection and fibre connectivity. The successor to the 200F.",
    pills: ["NP7Lite and CP10", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 200G" },
      { label: "Models", value: "200G, 201G" },
      { label: "Threat protection", value: "6 Gbps" },
      { label: "Firewall", value: "39 Gbps" },
      { label: "Interfaces", value: "8x 10GE SFP+, 8x 5GE RJ45, 10x GE RJ45, 4x GE SFP" },
      { label: "Form factor", value: "1RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "6 Gbps on NP7Lite and CP10 processors" },
      { label: "Fibre and multi-gig", text: "8x 10GE SFP+ and 8x 5GE RJ45" },
      { label: "Scale", text: "11 million concurrent sessions" },
      { label: "Local logs", text: "the 201G adds a 480 GB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 200G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 200G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 200G",
            desc: "No onboard storage",
            points: ["6 Gbps threat protection", "39 Gbps firewall", "36 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 200G"),
          },
          {
            name: "FortiGate 201G",
            desc: "480 GB SSD for local logs",
            points: ["6 Gbps threat protection", "39 Gbps firewall", "36 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 201G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 200G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "NP7Lite acceleration",
        description: "Fortinet's NP7Lite and CP10 processors take firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 200G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 200G pairs Fortinet's NP7Lite network processor with the CP10 content processor. It inspects encrypted traffic at head-office speeds and gives you 10GE fibre and 5GE copper in one 1RU unit.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "6 Gbps", label: "threat protection" },
      { value: "39 Gbps", label: "firewall throughput", dark: true },
      { value: "36 Gbps", label: "IPsec VPN throughput" },
      { value: "11 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 200G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "9 Gbps" },
            { label: "NGFW throughput", value: "7 Gbps" },
            { label: "Threat protection throughput", value: "6 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "39 / 39 / 26.5 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "4.36 μs" },
            { label: "Firewall throughput (packets per second)", value: "39.75 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "11 million" },
            { label: "New sessions per second (TCP)", value: "400,000" },
            { label: "Firewall policies", value: "10,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "36 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "2,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "16,000" },
            { label: "SSL-VPN throughput / users", value: "3 Gbps / 500" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "7 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "7,100 / 900,000" },
            { label: "Application control throughput (HTTP 64K)", value: "27.8 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "37.5 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 25" },
            { label: "Maximum FortiSwitches", value: "64" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "256 / 128" },
            { label: "Maximum FortiTokens", value: "5,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "GE RJ45 management / HA ports", value: "1 / 1" },
            { label: "GE RJ45 ports", value: "8" },
            { label: "5/2.5/1 GE RJ45 ports", value: "8" },
            { label: "GE SFP slots", value: "4" },
            { label: "10GE SFP+ / SFP FortiLink slots", value: "8" },
            { label: "USB port", value: "1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "200G: none · 201G: 480 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.75 x 17.0 x 15.0 in (44.45 x 432 x 380 mm)" },
            { label: "Weight", value: "200G: 6.4 kg · 201G: 6.5 kg" },
            { label: "Form factor", value: "Rack mount, 1RU" },
            { label: "Power supply", value: "Dual non-hot-swappable AC PSUs, 1+1 redundant; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "200G: 145 / 175 W · 201G: 145 / 176 W" },
            { label: "Heat dissipation", value: "200G: 597 BTU/h · 201G: 601 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "5% to 90% non-condensing" },
            { label: "Noise level", value: "48 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: NP7Lite and CP10.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 200G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 200G for?",
        answer: "It suits head offices and large branches. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 200G replace the FortiGate 200F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 200F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 200G and 201G?",
        answer: "The 201G adds 480 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 200G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 200G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 90G", text: "Small office and branch · 2.2 Gbps threat protection", image: `${IMG}/fortigate-90g-card.webp`, href: `${FG_STORE}/fortigate-90g` },
      { title: "FortiGate 120G", text: "Campus and enterprise edge · 2.8 Gbps threat protection", image: `${IMG}/fortigate-120g-card.webp`, href: `${FG_STORE}/fortigate-120g` },
      { title: "FortiGate 400G", text: "Campus and enterprise edge · 13 Gbps threat protection", image: `${IMG}/fortigate-400g-card.webp`, href: `${FG_STORE}/fortigate-400g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-200g",
    heading: "Get a quote\n for the FortiGate 200G",
    highlightLast: 4,
    models: ["FortiGate 200G", "FortiGate 201G"],
  }),
  footNote: fgFootNote,
};
