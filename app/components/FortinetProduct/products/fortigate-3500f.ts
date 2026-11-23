import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgServiceLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 3500F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-3500f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-3500f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-3500f.html
export const fortigate3500F: LogitechProductData = {
  slug: "fortigate-3500f",
  seo: {
    title: "FortiGate 3500F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 3500F from GS IT, a Fortinet Authorized Partner in Dubai. 63 Gbps threat protection, 595 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 3500F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 2RU firewall for high-throughput data centre edges and segmentation, with 32 25GE ports.",
  },
  name: "FortiGate 3500F",
  image: `${IMG}/fortigate-3500f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 3500F"),
    gallery: [{ src: `${IMG}/fortigate-3500f-card.webp`, alt: "FortiGate 3500F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet data centre firewall",
    heading: "FortiGate\n 3500F",
    highlightLast: 1,
    description: "A 2RU firewall for high-throughput data centre edges and segmentation, with 32 25GE ports.",
    pills: ["NP7 and CP9", "2RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 3500F" },
      { label: "Models", value: "3500F, 3501F" },
      { label: "Threat protection", value: "63 Gbps" },
      { label: "Firewall", value: "595 Gbps" },
      { label: "Interfaces", value: "6x 100GE QSFP28, 32x 25GE SFP28" },
      { label: "Form factor", value: "2RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Firewall", text: "595 Gbps with NP7 acceleration" },
      { label: "Ports", text: "6x 100GE QSFP28 and 32x 25GE SFP28" },
      { label: "Threat protection", text: "63 Gbps with all protection enabled" },
      { label: "Also as a service", text: "the 3501F is available as FortiGate as a Service" },
    ],
    buttons: fgHeroButtons("FortiGate 3500F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 3500F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 3500F",
            desc: "No onboard storage",
            points: ["63 Gbps threat protection", "595 Gbps firewall", "165 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3500F"),
          },
          {
            tag: "Also as a service",
            name: "FortiGate 3501F",
            desc: "2x 2 TB SSD for local logs",
            points: ["63 Gbps threat protection", "595 Gbps firewall", "165 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3501F"),
            secondary: { label: "Ask about it as a service", href: fgServiceLink("FortiGate 3501F") },
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 3500F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
        icon: fgIcons.segments,
        title: "Internal segmentation",
        description: "Separate server zones and business units inside the data centre, so one breach cannot spread freely.",
      },
      {
        icon: fgIcons.bars,
        title: "Hyperscale firewall",
        description: "An optional Hyperscale licence raises session capacity and connection rates for service provider scale.",
      },
      {
        icon: fgIcons.fabric,
        title: "Security Fabric",
        description: "Shares threat data with FortiAnalyzer, FortiManager and other Fortinet products for one view of your network.",
      },
      {
        icon: fgIcons.ha,
        title: "High availability",
        description: "Run two units as an active-passive or active-active cluster, so a hardware fault does not stop traffic.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where the 3500F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 3500F gives you close to 600 Gbps of firewall and dense 25GE connectivity in 2RU. It suits data centre edges and segmentation where many servers connect at 25GE.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "63 Gbps", label: "threat protection" },
      { value: "595 Gbps", label: "firewall throughput", dark: true },
      { value: "165 Gbps", label: "IPsec VPN throughput" },
      { value: "140 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 3500F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "72 Gbps" },
            { label: "NGFW throughput", value: "65 Gbps" },
            { label: "Threat protection throughput", value: "63 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "595 / 590 / 420 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.98 μs" },
            { label: "Firewall throughput (packets per second)", value: "630 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "140 million (348 million with Hyperscale licence)" },
            { label: "New sessions per second (TCP)", value: "1 million (5 million with Hyperscale licence)" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "165 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "200,000" },
            { label: "SSL-VPN throughput / users", value: "16 Gbps / 30,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "63 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "60,000 / 15 million" },
            { label: "Application control throughput (HTTP 64K)", value: "135 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "65 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 500" },
            { label: "Maximum FortiSwitches", value: "300" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "4,096 / 2,048" },
            { label: "Maximum FortiTokens", value: "20,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "100GE QSFP28 / 40GE QSFP+ slots", value: "6" },
            { label: "25GE SFP28 / 10GE SFP+ / GE SFP slots", value: "32" },
            { label: "10GE / GE RJ45 management ports", value: "2" },
            { label: "USB ports (client / server)", value: "1 / 1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "3500F: none · 3501F: 2x 2 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "3.5 x 17.4 x 21.9 in (89 x 443 x 556 mm)" },
            { label: "Weight", value: "3500F: 19.9 kg · 3501F: 20.6 kg" },
            { label: "Form factor", value: "Rack mount, 2RU" },
            { label: "Power supply", value: "Dual hot-swappable AC PSUs, 1+1 redundant; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "3500F: 760 / 1,174 W · 3501F: 765 / 1,181 W" },
            { label: "Heat dissipation", value: "3500F: 4,006 BTU/h · 3501F: 4,030 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "20% to 90% non-condensing" },
            { label: "Noise level", value: "53.5 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-3500F-DAT-R10-20230602. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 3500F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 3500F for?",
        answer: "It suits high-throughput data centre edges. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 3500F and 3501F?",
        answer: "The 3501F adds 2x 2 TB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
      },
      {
        question: "Which protection bundle does it need?",
        answer: "Most customers choose Unified Threat Protection (UTP) or Enterprise Protection, for 1 or 3 years. Without a FortiGuard bundle the firewall still passes traffic but stops receiving threat updates. We include the right bundle in the quote.",
      },
      {
        question: "Can we get it as a service?",
        answer: "Yes. The 3501F is available as FortiGate as a Service, paid monthly or annually with FortiPoints. Fortinet supplies and maintains the hardware, and GS IT sets it up for you.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 3500F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 3500F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 3000F", text: "Data centre · 33 Gbps threat protection", image: `${IMG}/fortigate-3000f-card.webp`, href: `${FG_STORE}/fortigate-3000f` },
      { title: "FortiGate 3200F", text: "Data centre · 45 Gbps threat protection", image: `${IMG}/fortigate-3200f-card.webp`, href: `${FG_STORE}/fortigate-3200f` },
      { title: "FortiGate 3700F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-3700f-card.webp`, href: `${FG_STORE}/fortigate-3700f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-3500f",
    heading: "Get a quote\n for the FortiGate 3500F",
    highlightLast: 4,
    models: ["FortiGate 3500F", "FortiGate 3501F"], fgaas: "FortiGate 3501F",
  }),
  footNote: fgFootNote,
};
