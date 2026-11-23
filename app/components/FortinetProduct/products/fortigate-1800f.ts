import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 1800F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-1800f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-1800f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-1800f.html
export const fortigate1800F: LogitechProductData = {
  slug: "fortigate-1800f",
  seo: {
    title: "FortiGate 1800F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 1800F from GS IT, a Fortinet Authorized Partner in Dubai. 15 Gbps threat protection, 198 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 1800F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 2RU firewall for the data centre edge and internal segmentation, with 100GE ports.",
  },
  name: "FortiGate 1800F",
  image: `${IMG}/fortigate-1800f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 1800F"),
    gallery: [{ src: `${IMG}/fortigate-1800f-card.webp`, alt: "FortiGate 1800F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet data centre firewall",
    heading: "FortiGate\n 1800F",
    highlightLast: 1,
    description: "A 2RU firewall for the data centre edge and internal segmentation, with 100GE ports.",
    pills: ["NP7 and CP9", "100GE ports"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 1800F" },
      { label: "Models", value: "1800F, 1801F" },
      { label: "Threat protection", value: "15 Gbps" },
      { label: "Firewall", value: "198 Gbps" },
      { label: "Interfaces", value: "4x 100GE QSFP28, 12x 25GE SFP28, 18x GE RJ45" },
      { label: "Form factor", value: "2RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Firewall", text: "198 Gbps with NP7 acceleration" },
      { label: "100GE", text: "4x 100GE QSFP28 and 12x 25GE SFP28" },
      { label: "Hyperscale option", text: "up to 40 million sessions with the Hyperscale licence" },
      { label: "Local logs", text: "the 1801F adds 2x 960 GB NVMe SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 1800F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 1800F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 1800F",
            desc: "No onboard storage",
            points: ["15 Gbps threat protection", "198 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 1800F"),
          },
          {
            name: "FortiGate 1801F",
            desc: "2x 960 GB NVMe SSD for local logs",
            points: ["15 Gbps threat protection", "198 Gbps firewall", "55 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 1801F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 1800F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 1800F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 1800F is the entry point to Fortinet's data centre range. It separates server zones and protects the data centre edge, with 100GE ports for a modern spine.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "15 Gbps", label: "threat protection" },
      { value: "198 Gbps", label: "firewall throughput", dark: true },
      { value: "55 Gbps", label: "IPsec VPN throughput" },
      { value: "12 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 1800F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "22 Gbps" },
            { label: "NGFW throughput", value: "17 Gbps" },
            { label: "Threat protection throughput", value: "15 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "198 / 197 / 140 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.22 μs" },
            { label: "Firewall throughput (packets per second)", value: "210 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "12 million (40 million with Hyperscale licence)" },
            { label: "New sessions per second (TCP)", value: "750,000 (2 million with Hyperscale licence)" },
            { label: "Firewall policies", value: "100,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "55 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "20,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "100,000" },
            { label: "SSL-VPN throughput / users", value: "11 Gbps / 10,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "12 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "9,500 / 1.3 million" },
            { label: "Application control throughput (HTTP 64K)", value: "34 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "65 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 250" },
            { label: "Maximum FortiSwitches", value: "196" },
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
            { label: "100GE QSFP28 / 40GE QSFP+ slots", value: "4" },
            { label: "25GE SFP28 / 10GE SFP+ / GE SFP slots", value: "12" },
            { label: "GE SFP slots", value: "8" },
            { label: "GE RJ45 ports", value: "16" },
            { label: "GE RJ45 management ports", value: "2" },
            { label: "10GE SFP+ HA slots", value: "2" },
            { label: "USB 3.0 port", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "1800F: none · 1801F: 2x 960 GB NVMe SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "3.5 x 17.25 x 21.1 in (88.4 x 438 x 536 mm)" },
            { label: "Weight", value: "1800F: 13.7 kg · 1801F: 13.8 kg" },
            { label: "Form factor", value: "Rack mount, 2RU" },
            { label: "Power supply", value: "Dual hot-swappable AC PSUs, 1+1 redundant; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "1800F: 411 / 459 W · 1801F: 415 / 463 W" },
            { label: "Heat dissipation", value: "1800F: 1,566 BTU/h · 1801F: 1,579 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "62.74 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-1800F-DAT-R47-20260929. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 1800F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 1800F for?",
        answer: "It suits data centre edges and internal segmentation. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 1800F replace the FortiGate 1000F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 1000F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 1800F and 1801F?",
        answer: "The 1801F adds 2x 960 GB NVMe SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 1800F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 1800F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 400G", text: "Campus and enterprise edge · 13 Gbps threat protection", image: `${IMG}/fortigate-400g-card.webp`, href: `${FG_STORE}/fortigate-400g` },
      { title: "FortiGate 900G", text: "Campus and enterprise edge · 30 Gbps threat protection", image: `${IMG}/fortigate-900g-card.webp`, href: `${FG_STORE}/fortigate-900g` },
      { title: "FortiGate 2600F", text: "Data centre · 25 Gbps threat protection", image: `${IMG}/fortigate-2600f-card.webp`, href: `${FG_STORE}/fortigate-2600f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-1800f",
    heading: "Get a quote\n for the FortiGate 1800F",
    highlightLast: 4,
    models: ["FortiGate 1800F", "FortiGate 1801F"],
  }),
  footNote: fgFootNote,
};
