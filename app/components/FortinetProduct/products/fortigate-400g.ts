import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 400G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-400g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-400g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-400g.html
export const fortigate400G: LogitechProductData = {
  slug: "fortigate-400g",
  seo: {
    title: "FortiGate 400G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 400G from GS IT, a Fortinet Authorized Partner in Dubai. 13 Gbps threat protection, 164 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 400G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 1RU firewall for the campus edge, with 25GE uplinks and NP7 hardware acceleration.",
  },
  name: "FortiGate 400G",
  image: `${IMG}/fortigate-400g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 400G"),
    gallery: [{ src: `${IMG}/fortigate-400g-card.webp`, alt: "FortiGate 400G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet enterprise firewall",
    heading: "FortiGate\n 400G",
    highlightLast: 1,
    description: "A 1RU firewall for the campus edge, with 25GE uplinks and NP7 hardware acceleration.",
    pills: ["NP7 and CP10", "25GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 400G" },
      { label: "Models", value: "400G, 401G" },
      { label: "Threat protection", value: "13 Gbps" },
      { label: "Firewall", value: "164 Gbps" },
      { label: "Interfaces", value: "4x 25GE SFP28, 4x 10GE SFP+, 16x GE SFP, 8x 5GE RJ45" },
      { label: "Form factor", value: "1RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "13 Gbps on NP7 and CP10 processors" },
      { label: "25GE uplinks", text: "4x 25GE SFP28 plus 4x 10GE SFP+" },
      { label: "Scale", text: "164 Gbps firewall and 28 million sessions" },
      { label: "Local logs", text: "the 401G adds 2x 480 GB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 400G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 400G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 400G",
            desc: "No onboard storage",
            points: ["13 Gbps threat protection", "164 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 400G"),
          },
          {
            name: "FortiGate 401G",
            desc: "2x 480 GB SSD for local logs",
            points: ["13 Gbps threat protection", "164 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 401G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 400G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "NP7 acceleration",
        description: "Fortinet's NP7 and CP10 processors take firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 400G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 400G is Fortinet's current model in the 400 range. It adds 25GE ports and the CP10 processor, so a campus edge can inspect far more encrypted traffic without moving to a 2RU appliance.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "13 Gbps", label: "threat protection" },
      { value: "164 Gbps", label: "firewall throughput", dark: true },
      { value: "55 Gbps", label: "IPsec VPN throughput" },
      { value: "28 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 400G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "25 Gbps" },
            { label: "NGFW throughput", value: "14 Gbps" },
            { label: "Threat protection throughput", value: "13 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "164 / 164 / 145 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.51 μs" },
            { label: "Firewall throughput (packets per second)", value: "217.5 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "28 million" },
            { label: "New sessions per second (TCP)", value: "580,000" },
            { label: "Firewall policies", value: "30,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "55 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "2,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "50,000" },
            { label: "SSL-VPN throughput / users", value: "6.1 Gbps / 5,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "11.5 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "9,700 / 3 million" },
            { label: "Application control throughput (HTTP 64K)", value: "50 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "131 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 50" },
            { label: "Maximum FortiSwitches", value: "96" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "512 / 256" },
            { label: "Maximum FortiTokens", value: "5,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "25/10 GE SFP28 / SFP+ slots", value: "4" },
            { label: "10GE SFP+ / SFP FortiLink slots", value: "4" },
            { label: "GE SFP slots", value: "16" },
            { label: "5/2.5/1 GE RJ45 ports", value: "8" },
            { label: "2.5GE RJ45 HA port / GE RJ45 management port", value: "1 / 1" },
            { label: "USB ports", value: "2" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "400G: none · 401G: 2x 480 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.75 x 17.0 x 13.5 in (44.45 x 432 x 342 mm)" },
            { label: "Weight", value: "7.72 lbs (3.5 kg)" },
            { label: "Form factor", value: "Rack mount, 1RU" },
            { label: "Power supply", value: "Dual non-swappable AC PSUs, 1+1 redundant; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "400G: 230 / 283 W · 401G: 240 / 295 W" },
            { label: "Heat dissipation", value: "400G: 965 BTU/h · 401G: 1,006 BTU/h" },
            { label: "Operating temperature", value: "0 to 45°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "59 dBA" },
            { label: "Certifications", value: "USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: NP7 and CP10.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 400G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 400G for?",
        answer: "It suits campus edges and large enterprise offices. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 400G replace the FortiGate 400F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 400F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 400G and 401G?",
        answer: "The 401G adds 2x 480 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 400G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 400G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 120G", text: "Campus and enterprise edge · 2.8 Gbps threat protection", image: `${IMG}/fortigate-120g-card.webp`, href: `${FG_STORE}/fortigate-120g` },
      { title: "FortiGate 200G", text: "Campus and enterprise edge · 6 Gbps threat protection", image: `${IMG}/fortigate-200g-card.webp`, href: `${FG_STORE}/fortigate-200g` },
      { title: "FortiGate 900G", text: "Campus and enterprise edge · 30 Gbps threat protection", image: `${IMG}/fortigate-900g-card.webp`, href: `${FG_STORE}/fortigate-900g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-400g",
    heading: "Get a quote\n for the FortiGate 400G",
    highlightLast: 4,
    models: ["FortiGate 400G", "FortiGate 401G"],
  }),
  footNote: fgFootNote,
};
