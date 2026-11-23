import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 7081F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-7000f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-7000f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-7081f.html
export const fortigate7081F: LogitechProductData = {
  slug: "fortigate-7081f",
  seo: {
    title: "FortiGate 7081F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 7081F from GS IT, a Fortinet Authorized Partner in Dubai. 312 Gbps threat protection, 1.89 Tbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 7081F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A chassis firewall that scales by adding blades, for large SD-WAN hubs, data centres and service providers.",
  },
  name: "FortiGate 7081F",
  image: `${IMG}/fortigate-7081f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 7081F"),
    gallery: [{ src: `${IMG}/fortigate-7081f-card.webp`, alt: "FortiGate 7081F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet chassis firewall",
    heading: "FortiGate\n 7081F",
    highlightLast: 1,
    description: "A chassis firewall that scales by adding blades, for large SD-WAN hubs, data centres and service providers.",
    pills: ["8-slot chassis", "NP7 and CP9"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 7081F" },
      { label: "Models", value: "7081F, 7081F-2" },
      { label: "Threat protection", value: "312 Gbps" },
      { label: "Firewall", value: "1.89 Tbps" },
      { label: "Interfaces", value: "Blade-based, high port density" },
      { label: "Form factor", value: "Chassis (12RU)" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Scales with blades", text: "add processing modules as traffic grows" },
      { label: "Threat protection", text: "up to 312 Gbps with 6 processing modules" },
      { label: "Scale", text: "up to 600 million sessions" },
      { label: "Resilient", text: "hot-swappable redundant power supplies" },
    ],
    buttons: fgHeroButtons("FortiGate 7081F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 7081F models\n sized to your traffic",
    highlightLast: 4,
    subhead: "We confirm the configuration during a short security review.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 7081F",
            desc: "Default FIM-7921F interface module",
            points: ["Up to 312 Gbps threat protection", "Up to 1.89 Tbps firewall", "Up to 378 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 7081F"),
          },
          {
            name: "FortiGate 7081F-2",
            desc: "Default FIM-7941F interface module",
            points: ["Up to 312 Gbps threat protection", "Up to 1.89 Tbps firewall", "Up to 378 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 7081F-2"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 7081F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
        icon: fgIcons.lock,
        title: "Zero trust access",
        description: "ZTNA in FortiOS checks every user and device before granting access to an application.",
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
    heading: "Where the 7081F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 7081F is an 8-slot chassis. You start with the processing capacity you need today and add FPM blades as traffic grows, without replacing the firewall.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "312 Gbps", label: "threat protection" },
      { value: "1.89 Tbps", label: "firewall throughput", dark: true },
      { value: "378 Gbps", label: "IPsec VPN throughput" },
      { value: "600 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 7081F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures assume a chassis with 6 FPM-7620F processing modules. Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "405 Gbps" },
            { label: "NGFW throughput", value: "330 Gbps" },
            { label: "Threat protection throughput", value: "312 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "1.89 / 1.88 / 1.129 Tbps" },
            { label: "Concurrent sessions (TCP)", value: "600 million" },
            { label: "New sessions per second (TCP)", value: "5.4 million" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "378 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "260,000" },
            { label: "SSL inspection throughput", value: "324 Gbps" },
            { label: "Application control throughput", value: "900 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 500" },
            { label: "High availability", value: "Active-active (FGSP), active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "Chassis", value: "8-slot chassis for interface (FIM) and processing (FPM) modules" },
            { label: "Default configuration", value: "1x FPM-7620F processing module, 1x FIM-7921F interface module (FIM-7941F on the 7081F-2)" },
            { label: "Interface modules", value: "FIM-7921F / FIM-7941F: 400GE QSFP-DD, 100GE QSFP28 and 25GE SFP28 ports, NP7 accelerated" },
            { label: "Processing module", value: "FPM-7620F: NP7 and CP9 accelerated" },
            { label: "Onboard storage", value: "4x 4 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "21.41 x 17.33 x 26.6 in (543.9 x 440 x 675.5 mm)" },
            { label: "Form factor", value: "Chassis, 12RU" },
            { label: "Power supply", value: "6x hot-swappable redundant 2,500 W AC PSUs" },
            { label: "Power consumption (average / maximum)", value: "6,100 W / 7,300 W" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-7000F-DAT-R12-20240607. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 7081F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 7081F for?",
        answer: "It suits large SD-WAN hubs and service providers. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 7081F and 7081F-2?",
        answer: "Both are the same 8-slot chassis. They ship with different default interface modules: the FIM-7921F on the 7081F and the FIM-7941F on the 7081F-2. We help you choose based on the ports you need.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 7081F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 7081F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 4400F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4400f-card.webp`, href: `${FG_STORE}/fortigate-4400f` },
      { title: "FortiGate 4800F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4800f-card.webp`, href: `${FG_STORE}/fortigate-4800f` },
      { title: "FortiGate 7121F", text: "Data centre · 520 Gbps threat protection", image: `${IMG}/fortigate-7121f-card.webp`, href: `${FG_STORE}/fortigate-7121f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-7081f",
    heading: "Get a quote\n for the FortiGate 7081F",
    highlightLast: 4,
    models: ["FortiGate 7081F", "FortiGate 7081F-2"],
  }),
  footNote: fgFootNote,
};
