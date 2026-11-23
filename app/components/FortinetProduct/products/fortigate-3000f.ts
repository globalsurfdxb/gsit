import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 3000F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-3000f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-3000f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-3000f.html
export const fortigate3000F: LogitechProductData = {
  slug: "fortigate-3000f",
  seo: {
    title: "FortiGate 3000F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 3000F from GS IT, a Fortinet Authorized Partner in Dubai. 33 Gbps threat protection, 397 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 3000F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 2RU firewall for large enterprise and data centre networks, with high 100GE and 25GE port density.",
  },
  name: "FortiGate 3000F",
  image: `${IMG}/fortigate-3000f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 3000F"),
    gallery: [{ src: `${IMG}/fortigate-3000f-card.webp`, alt: "FortiGate 3000F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet data centre firewall",
    heading: "FortiGate\n 3000F",
    highlightLast: 1,
    description: "A 2RU firewall for large enterprise and data centre networks, with high 100GE and 25GE port density.",
    pills: ["NP7 and CP9", "2RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 3000F" },
      { label: "Models", value: "3000F, 3001F" },
      { label: "Threat protection", value: "33 Gbps" },
      { label: "Firewall", value: "397 Gbps" },
      { label: "Interfaces", value: "6x 100GE QSFP28, 16x 25GE SFP28, 18x 10GE RJ45" },
      { label: "Form factor", value: "2RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Firewall", text: "397 Gbps with NP7 acceleration" },
      { label: "Ports", text: "6x 100GE QSFP28, 16x 25GE SFP28 and 16x 10GE RJ45" },
      { label: "Scale", text: "70 million sessions, 230 million with Hyperscale" },
      { label: "Local logs", text: "the 3001F adds 2x 960 GB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 3000F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 3000F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 3000F",
            desc: "No onboard storage",
            points: ["33 Gbps threat protection", "397 Gbps firewall", "105 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3000F"),
          },
          {
            name: "FortiGate 3001F",
            desc: "2x 960 GB SSD for local logs",
            points: ["33 Gbps threat protection", "397 Gbps firewall", "105 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3001F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 3000F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 3000F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 3000F doubles the firewall throughput of the 1800F and 2600F in the same 2RU space. It suits large enterprise cores where many 25GE and 10GE links meet.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "33 Gbps", label: "threat protection" },
      { value: "397 Gbps", label: "firewall throughput", dark: true },
      { value: "105 Gbps", label: "IPsec VPN throughput" },
      { value: "70 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 3000F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "36 Gbps" },
            { label: "NGFW throughput", value: "34 Gbps" },
            { label: "Threat protection throughput", value: "33 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "397 / 389 / 221 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.92 μs" },
            { label: "Concurrent sessions (TCP)", value: "70 million (230 million with Hyperscale licence)" },
            { label: "New sessions per second (TCP)", value: "870,000 (3 million with Hyperscale licence)" },
            { label: "IPsec VPN throughput (512 byte)", value: "105 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "200,000" },
            { label: "SSL-VPN throughput / users", value: "11 Gbps / 30,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "29 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "High availability", value: "Active-active, active-passive, clustering" },
            { label: "Trusted Platform Module", value: "Yes" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "100GE QSFP28 / 40GE QSFP+ slots", value: "6" },
            { label: "25GE SFP28 / 10GE SFP+ / GE SFP slots", value: "16 (includes 2x HA)" },
            { label: "10GE / 5GE / 2.5GE / GE RJ45 ports", value: "16" },
            { label: "10GE / GE RJ45 management ports", value: "2" },
            { label: "USB ports (client / server)", value: "1 / 1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "3000F: none · 3001F: 2x 960 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "3.5 x 17.44 x 21.89 in (88.9 x 443 x 556 mm)" },
            { label: "Weight", value: "17.3 kg" },
            { label: "Form factor", value: "Rack mount, 2RU" },
            { label: "Power supply", value: "Dual AC PSUs, 1+1 redundant; 100–240 V AC, 50/60 Hz" },
            { label: "Power consumption (average / maximum)", value: "420 W / 690 W" },
            { label: "Current (maximum)", value: "12 A at 100 V, 9 A at 240 V" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 3000F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 3000F for?",
        answer: "It suits large enterprise cores and data centres. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 3000F and 3001F?",
        answer: "The 3001F adds 2x 960 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 3000F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 3000F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 1800F", text: "Data centre · 15 Gbps threat protection", image: `${IMG}/fortigate-1800f-card.webp`, href: `${FG_STORE}/fortigate-1800f` },
      { title: "FortiGate 2600F", text: "Data centre · 25 Gbps threat protection", image: `${IMG}/fortigate-2600f-card.webp`, href: `${FG_STORE}/fortigate-2600f` },
      { title: "FortiGate 3200F", text: "Data centre · 45 Gbps threat protection", image: `${IMG}/fortigate-3200f-card.webp`, href: `${FG_STORE}/fortigate-3200f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-3000f",
    heading: "Get a quote\n for the FortiGate 3000F",
    highlightLast: 4,
    models: ["FortiGate 3000F", "FortiGate 3001F"],
  }),
  footNote: fgFootNote,
};
