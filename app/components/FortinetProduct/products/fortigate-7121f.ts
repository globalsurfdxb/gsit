import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 7121F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-7000f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-7000f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-7121f.html
export const fortigate7121F: LogitechProductData = {
  slug: "fortigate-7121f",
  seo: {
    title: "FortiGate 7121F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 7121F from GS IT, a Fortinet Authorized Partner in Dubai. 520 Gbps threat protection, 1.89 Tbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 7121F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "The 12-slot chassis in Fortinet's 7000F range, for the heaviest inspection loads in service provider and hyperscale networks.",
  },
  name: "FortiGate 7121F",
  image: `${IMG}/fortigate-7121f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 7121F"),
    gallery: [{ src: `${IMG}/fortigate-7121f-card.webp`, alt: "FortiGate 7121F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet chassis firewall",
    heading: "FortiGate\n 7121F",
    highlightLast: 1,
    description: "The 12-slot chassis in Fortinet's 7000F range, for the heaviest inspection loads in service provider and hyperscale networks.",
    pills: ["12-slot chassis", "NP7 and CP9"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 7121F" },
      { label: "Models", value: "7121F" },
      { label: "Threat protection", value: "520 Gbps" },
      { label: "Firewall", value: "1.89 Tbps" },
      { label: "Interfaces", value: "Blade-based, high port density" },
      { label: "Form factor", value: "Chassis (16RU)" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "up to 520 Gbps with 10 processing modules" },
      { label: "Scale", text: "up to 1 billion sessions" },
      { label: "VPN", text: "630 Gbps IPsec VPN" },
      { label: "Resilient", text: "hot-swappable redundant power supplies" },
    ],
    buttons: fgHeroButtons("FortiGate 7121F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Configuration",
    heading: "FortiGate 7121F configuration\n sized to your traffic",
    highlightLast: 4,
    subhead: "We confirm the configuration during a short security review.",
    groups: [
      {
        label: "Configuration",
        columns: 2,
        models: [
          {
            name: "FortiGate 7121F",
            desc: "Default 2x FPM-7620F and 2x FIM-7921F",
            points: ["Up to 520 Gbps threat protection", "Up to 1.89 Tbps firewall", "Up to 630 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 7121F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 7121F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 7121F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 7121F holds up to 10 processing blades. It is built for networks where full inspection has to run across hundreds of gigabits of traffic.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "520 Gbps", label: "threat protection" },
      { value: "1.89 Tbps", label: "firewall throughput", dark: true },
      { value: "630 Gbps", label: "IPsec VPN throughput" },
      { value: "1 billion", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 7121F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures assume a chassis with 10 FPM-7620F processing modules. Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "675 Gbps" },
            { label: "NGFW throughput", value: "550 Gbps" },
            { label: "Threat protection throughput", value: "520 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "1.89 / 1.88 / 1.129 Tbps" },
            { label: "Concurrent sessions (TCP)", value: "1 billion" },
            { label: "New sessions per second (TCP)", value: "9 million" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "630 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "260,000" },
            { label: "SSL inspection throughput", value: "540 Gbps" },
            { label: "Application control throughput", value: "1.5 Tbps" },
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
            { label: "Chassis", value: "12 slots: 10 for FPM processing modules, 2 for FIM interface modules" },
            { label: "Default configuration", value: "2x FPM-7620F, 2x FIM-7921F" },
            { label: "Interface modules", value: "FIM-7921F / FIM-7941F: 400GE QSFP-DD, 100GE QSFP28 and 25GE SFP28 ports, NP7 accelerated" },
            { label: "Processing module", value: "FPM-7620F: NP7 and CP9 accelerated" },
            { label: "Onboard storage", value: "4x 4 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "28.63 x 17.33 x 26.6 in (727.2 x 440 x 675.5 mm)" },
            { label: "Weight", value: "Up to 203.1 kg" },
            { label: "Form factor", value: "Chassis, 16RU" },
            { label: "Power supply", value: "8x hot-swappable redundant 2 kW AC PSUs" },
            { label: "Power consumption (average / maximum)", value: "8,296 W / 9,754 W" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Certifications", value: "FCC, ICES, CE, RCM, VCCI, BSMI, UL/cUL, CB" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-7000F-DAT-R12-20240607. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 7121F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 7121F for?",
        answer: "It suits service providers and hyperscale networks. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "How does the chassis scale?",
        answer: "The 7121F has 10 slots for FPM-7620F processing modules and 2 for interface modules. It ships with 2 processing modules, and you add more as traffic grows. The figures on this page assume 10 modules.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 7121F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 7121F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 4400F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4400f-card.webp`, href: `${FG_STORE}/fortigate-4400f` },
      { title: "FortiGate 4800F", text: "Data centre · 75 Gbps threat protection", image: `${IMG}/fortigate-4800f-card.webp`, href: `${FG_STORE}/fortigate-4800f` },
      { title: "FortiGate 7081F", text: "Data centre · 312 Gbps threat protection", image: `${IMG}/fortigate-7081f-card.webp`, href: `${FG_STORE}/fortigate-7081f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-7121f",
    heading: "Get a quote\n for the FortiGate 7121F",
    highlightLast: 4,
    models: ["FortiGate 7121F"],
  }),
  footNote: fgFootNote,
};
