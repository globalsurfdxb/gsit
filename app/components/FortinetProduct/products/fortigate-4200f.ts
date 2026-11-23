import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 4200F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-4200f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-4200f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-4200f.html
export const fortigate4200F: LogitechProductData = {
  slug: "fortigate-4200f",
  seo: {
    title: "FortiGate 4200F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 4200F from GS IT, a Fortinet Authorized Partner in Dubai. 45 Gbps threat protection, 800 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 4200F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 3RU hyperscale firewall for service providers and very large data centres.",
  },
  name: "FortiGate 4200F",
  image: `${IMG}/fortigate-4200f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 4200F"),
    gallery: [{ src: `${IMG}/fortigate-4200f-card.webp`, alt: "FortiGate 4200F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet hyperscale firewall",
    heading: "FortiGate\n 4200F",
    highlightLast: 1,
    description: "A 3RU hyperscale firewall for service providers and very large data centres.",
    pills: ["NP7 and CP9", "Hyperscale ready"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 4200F" },
      { label: "Models", value: "4200F, 4201F" },
      { label: "Threat protection", value: "45 Gbps" },
      { label: "Firewall", value: "800 Gbps" },
      { label: "Interfaces", value: "8x 100GE QSFP28, 18x 25GE SFP28" },
      { label: "Form factor", value: "3RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Firewall", text: "800 Gbps with NP7 acceleration" },
      { label: "Scale", text: "220 million sessions, 450 million with Hyperscale" },
      { label: "Ports", text: "8x 100GE QSFP28 and 16x 25GE SFP28" },
      { label: "Local logs", text: "the 4201F adds 2x 2 TB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 4200F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 4200F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 4200F",
            desc: "No onboard storage",
            points: ["45 Gbps threat protection", "800 Gbps firewall", "210 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 4200F"),
          },
          {
            name: "FortiGate 4201F",
            desc: "2x 2 TB SSD for local logs",
            points: ["45 Gbps threat protection", "800 Gbps firewall", "210 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 4201F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 4200F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 4200F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 4200F handles the session counts of service providers and hyperscale data centres. With the Hyperscale licence it sets up 7 million new sessions a second.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "45 Gbps", label: "threat protection" },
      { value: "800 Gbps", label: "firewall throughput", dark: true },
      { value: "210 Gbps", label: "IPsec VPN throughput" },
      { value: "220 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 4200F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "52 Gbps" },
            { label: "NGFW throughput", value: "47 Gbps" },
            { label: "Threat protection throughput", value: "45 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "800 / 788 / 400 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "4 μs" },
            { label: "Firewall throughput (packets per second)", value: "600 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "220 million (450 million with Hyperscale licence)" },
            { label: "New sessions per second (TCP)", value: "1.1 million (7 million with Hyperscale licence)" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "210 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "200,000" },
            { label: "SSL-VPN throughput / users", value: "16 Gbps / 30,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "50 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "23,000 / 9 million" },
            { label: "Application control throughput (HTTP 64K)", value: "135 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "47 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 500" },
            { label: "Maximum FortiSwitches", value: "256" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "4,096 / 1,024" },
            { label: "Maximum FortiTokens", value: "20,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "100GE QSFP28 / 40GE QSFP+ slots", value: "8" },
            { label: "25GE SFP28 / 10GE SFP+ / GE SFP slots", value: "16" },
            { label: "25GE SFP28 HA slots", value: "2" },
            { label: "25GE SFP28 AUX slots", value: "2" },
            { label: "GE RJ45 management ports", value: "2" },
            { label: "USB port", value: "1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "4200F: none · 4201F: 2x 2 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "5.22 x 17.20 x 26.17 in (132.5 x 437 x 664.8 mm)" },
            { label: "Weight", value: "27.1 kg" },
            { label: "Form factor", value: "Rack mount, 3RU" },
            { label: "Power supply", value: "Redundant hot-swappable AC PSUs; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "931 W / 1,291 W" },
            { label: "Heat dissipation", value: "4,405 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "20% to 90% non-condensing" },
            { label: "Noise level", value: "57 dBA" },
            { label: "Certifications", value: "USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-4200F-DAT-R2-202006. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 4200F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 4200F for?",
        answer: "It suits service providers and hyperscale data centres. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 4200F and 4201F?",
        answer: "The 4201F adds 2x 2 TB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 4200F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 4200F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 3500F", text: "Data centre · 63 Gbps threat protection", image: `${IMG}/fortigate-3500f-card.webp`, href: `${FG_STORE}/fortigate-3500f` },
      { title: "FortiGate 3700F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-3700f-card.webp`, href: `${FG_STORE}/fortigate-3700f` },
      { title: "FortiGate 4400F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4400f-card.webp`, href: `${FG_STORE}/fortigate-4400f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-4200f",
    heading: "Get a quote\n for the FortiGate 4200F",
    highlightLast: 4,
    models: ["FortiGate 4200F", "FortiGate 4201F"],
  }),
  footNote: fgFootNote,
};
