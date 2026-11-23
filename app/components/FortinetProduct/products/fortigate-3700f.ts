import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 3700F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-3700f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-3700f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-3700f.html
export const fortigate3700F: LogitechProductData = {
  slug: "fortigate-3700f",
  seo: {
    title: "FortiGate 3700F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 3700F from GS IT, a Fortinet Authorized Partner in Dubai. 75 Gbps threat protection, 589 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 3700F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A 2RU firewall for data centres and latency-sensitive networks, with 400GE and ultra-low-latency ports.",
  },
  name: "FortiGate 3700F",
  image: `${IMG}/fortigate-3700f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 3700F"),
    gallery: [{ src: `${IMG}/fortigate-3700f-card.webp`, alt: "FortiGate 3700F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet data centre firewall",
    heading: "FortiGate\n 3700F",
    highlightLast: 1,
    description: "A 2RU firewall for data centres and latency-sensitive networks, with 400GE and ultra-low-latency ports.",
    pills: ["NP7 and CP9", "Ultra-low latency"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 3700F" },
      { label: "Models", value: "3700F, 3701F" },
      { label: "Threat protection", value: "75 Gbps" },
      { label: "Firewall", value: "589 Gbps" },
      { label: "Interfaces", value: "4x 400GE QSFP-DD, 20x 50GE SFP56, 4x ULL 25GE SFP28" },
      { label: "Form factor", value: "2RU" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "75 Gbps with all protection enabled" },
      { label: "400GE", text: "4x 400GE QSFP-DD and 20x 50GE SFP56" },
      { label: "Low latency", text: "4x ultra-low-latency 25GE SFP28 ports" },
      { label: "Local logs", text: "the 3701F adds 2x 2 TB SSD" },
    ],
    buttons: fgHeroButtons("FortiGate 3700F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 3700F models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 3700F",
            desc: "No onboard storage",
            points: ["75 Gbps threat protection", "589 Gbps firewall", "160 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3700F"),
          },
          {
            name: "FortiGate 3701F",
            desc: "2x 2 TB SSD for local logs",
            points: ["75 Gbps threat protection", "589 Gbps firewall", "160 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 3701F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 3700F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 3700F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 3700F is built for networks where microseconds matter, such as financial trading. Its ultra-low-latency ports sit beside 400GE ports for the data centre spine.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "75 Gbps", label: "threat protection" },
      { value: "589 Gbps", label: "firewall throughput", dark: true },
      { value: "160 Gbps", label: "IPsec VPN throughput" },
      { value: "140 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 3700F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "86 Gbps" },
            { label: "NGFW throughput", value: "80 Gbps" },
            { label: "Threat protection throughput", value: "75 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "589 / 589 / 420 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.56 μs (1.45 μs on ULL ports)" },
            { label: "Firewall throughput (packets per second)", value: "630 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "140 million" },
            { label: "New sessions per second (TCP)", value: "930,000" },
            { label: "Firewall policies", value: "200,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "160 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "40,000" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "200,000" },
            { label: "SSL-VPN throughput / users", value: "16 Gbps / 30,000" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "55 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "57,000 / 15 million" },
            { label: "Application control throughput (HTTP 64K)", value: "190 Gbps" },
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
            { label: "400GE QSFP-DD / 200GE / 100GE / 40GE ports", value: "4" },
            { label: "50GE SFP56 / 25GE SFP28 / 10GE SFP+ ports", value: "18" },
            { label: "25GE SFP28 / 10GE SFP+ / GE SFP ultra-low-latency ports", value: "4" },
            { label: "50GE SFP56 HA ports", value: "2" },
            { label: "10GE / GE RJ45 management ports", value: "2" },
            { label: "USB ports (client / server)", value: "1 / 1" },
            { label: "Console port", value: "1" },
            { label: "Onboard storage", value: "3700F: none · 3701F: 2x 2 TB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "3.5 x 17.44 x 23.9 in (88.9 x 443 x 607.1 mm)" },
            { label: "Weight", value: "3700F: 21.4 kg · 3701F: 22.1 kg" },
            { label: "Form factor", value: "Rack mount, 2RU" },
            { label: "Power supply", value: "Dual hot-swappable AC PSUs; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "3700F: 590 / 1,140 W · 3701F: 600 / 1,150 W" },
            { label: "Heat dissipation", value: "3700F: 3,887 BTU/h · 3701F: 3,921 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "5% to 90% non-condensing" },
            { label: "Noise level", value: "70.4 dBA" },
            { label: "Certifications", value: "FCC Part 15 Class A, RCM, VCCI, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet datasheet FG-3700F-DAT-R06-20230731. ASIC: NP7 and CP9.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 3700F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 3700F for?",
        answer: "It suits latency-sensitive and 400GE data centres. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 3700F and 3701F?",
        answer: "The 3701F adds 2x 2 TB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 3700F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 3700F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 3200F", text: "Data centre · 45 Gbps threat protection", image: `${IMG}/fortigate-3200f-card.webp`, href: `${FG_STORE}/fortigate-3200f` },
      { title: "FortiGate 3500F", text: "Data centre · 63 Gbps threat protection", image: `${IMG}/fortigate-3500f-card.webp`, href: `${FG_STORE}/fortigate-3500f` },
      { title: "FortiGate 4200F", text: "Data centre · 45 Gbps threat protection", image: `${IMG}/fortigate-4200f-card.webp`, href: `${FG_STORE}/fortigate-4200f` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-3700f",
    heading: "Get a quote\n for the FortiGate 3700F",
    highlightLast: 4,
    models: ["FortiGate 3700F", "FortiGate 3701F"],
  }),
  footNote: fgFootNote,
};
