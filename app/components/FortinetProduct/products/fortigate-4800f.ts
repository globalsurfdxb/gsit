import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 4800F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-4800f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-4800f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-4800f.html
export const fortigate4800F: LogitechProductData = {
  slug: "fortigate-4800f",
  seo: {
    title: "FortiGate 4800F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 4800F from GS IT, a Fortinet Authorized Partner in Dubai. 75 Gbps threat protection, 3.1 Tbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 4800F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 4RU firewall for data centre routing and segmentation at multi-terabit scale, with 400GE ports.",
  },
  name: "FortiGate 4800F",
  image: `${IMG}/fortigate-4800f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 4800F"),
    gallery: [{ src: `${IMG}/fortigate-4800f-card.webp`, alt: "FortiGate 4800F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet hyperscale firewall",
    heading: "FortiGate\n 4800F",
    highlightLast: 1,
    description: "A 4RU firewall for data centre routing and segmentation at multi-terabit scale, with 400GE ports.",
    pills: ["NP7 and CP9", "400GE ports"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 4800F" },
      { label: "Models", value: "4800F, 4801F" },
      { label: "Threat protection", value: "75 Gbps" },
      { label: "Firewall", value: "3.1 Tbps" },
      { label: "Interfaces", value: "8x 400GE, 12x 200GE QSFP56, 12x 50GE SFP56" },
      { label: "Form factor", value: "4RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Firewall", text: "3.1 Tbps with NP7 acceleration" },
      { label: "400GE", text: "8x 400GE QSFP-DD and 12x 200GE QSFP56" },
      { label: "VPN", text: "800 Gbps IPsec VPN" },
      { label: "Hyperscale", text: "up to 1.8 billion sessions with the Hyperscale licence" },
    ],
    buttons: fgHeroButtons("FortiGate 4800F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 4800F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 4800F",
            desc: "No onboard storage",
            points: ["75 Gbps threat protection", "3.1 Tbps firewall", "800 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 4800F"),
          },
          {
            name: "FortiGate 4801F",
            desc: "2x 2 TB SSD for local logs",
            points: ["75 Gbps threat protection", "3.1 Tbps firewall", "800 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 4801F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 4800F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 4800F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 4800F has the highest firewall throughput of any appliance in this range. It segments and routes traffic at multi-terabit speeds, so security keeps pace with a 400GE data centre.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "75 Gbps", label: "threat protection" },
      { value: "3.1 Tbps", label: "firewall throughput", dark: true },
      { value: "800 Gbps", label: "IPsec VPN throughput" },
      { value: "280 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 4800F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "87 Gbps" },
            { label: "NGFW throughput", value: "77 Gbps" },
            { label: "Threat protection throughput", value: "75 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "3.1 / 3.1 / 0.93 Tbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.6 μs" },
            { label: "Firewall throughput (packets per second)", value: "1,396 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "280 million (1.8 billion with Hyperscale licence)" },
            { label: "New sessions per second (TCP)", value: "915,000 (25 million with Hyperscale licence)" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "800 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "200,000" },
            { label: "SSL-VPN throughput / users", value: "18 Gbps / 30,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "63 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "60,000 / 30 million" },
            { label: "Application control throughput (HTTP 64K)", value: "180 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "112 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 500" },
            { label: "Maximum FortiSwitches", value: "300" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "8,192 / 4,096" },
            { label: "Maximum FortiTokens", value: "20,000" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "400GE / 200GE QSFP-DD slots", value: "8" },
            { label: "200GE / 100GE / 40GE QSFP56 / QSFP28 slots", value: "12" },
            { label: "50GE / 25GE / 10GE SFP56 / SFP28 / SFP+ slots", value: "8" },
            { label: "50GE SFP56 HA / AUX slots", value: "4" },
            { label: "10GE / GE RJ45 management ports", value: "2" },
            { label: "USB 3.0 port", value: "1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "4800F: none · 4801F: 2x 2 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "6.89 x 17.13 x 26.10 in (175 x 435 x 663 mm)" },
            { label: "Weight", value: "41.2 kg" },
            { label: "Form factor", value: "Rack mount, 4RU" },
            { label: "Power supply", value: "Redundant hot-swappable AC PSUs, 2+2; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "4800F: 1,602 / 1,918 W · 4801F: 1,622 / 1,938 W" },
            { label: "Heat dissipation", value: "4800F: 6,545 BTU/h · 4801F: 6,613 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "20% to 90% non-condensing" },
            { label: "Noise level", value: "68.9 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-4800F-DAT-R02-20230126. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 4800F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 4800F for?",
        answer: "It suits multi-terabit data centres. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 4800F and 4801F?",
        answer: "The 4801F adds 2x 2 TB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 4800F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 4800F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 4200F", text: "Data centre · 45 Gbps threat protection", image: `${IMG}/fortigate-4200f-card.webp`, href: `${FG_STORE}/fortigate-4200f` },
      { title: "FortiGate 4400F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4400f-card.webp`, href: `${FG_STORE}/fortigate-4400f` },
      { title: "FortiGate 7081F", text: "Data centre · 312 Gbps threat protection", image: `${IMG}/fortigate-7081f-card.webp`, href: `${FG_STORE}/fortigate-7081f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-4800f",
    heading: "Get a quote\n for the FortiGate 4800F",
    highlightLast: 4,
    models: ["FortiGate 4800F", "FortiGate 4801F"],
  }),
  footNote: fgFootNote,
};
