import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 50G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-fortiwifi-50g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-fortiwifi-50g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-50g.html
export const fortigate50G: LogitechProductData = {
  slug: "fortigate-50g",
  seo: {
    title: "FortiGate 50G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 50G from GS IT, a Fortinet Authorized Partner in Dubai. 1.1 Gbps threat protection, 5 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 50G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A desktop firewall for small offices of up to about 50 users, with SD-WAN, VPN and an optional onboard SSD.",
  },
  name: "FortiGate 50G",
  image: `${IMG}/fortigate-50g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 50G"),
    gallery: [{ src: `${IMG}/fortigate-50g-card.webp`, alt: "FortiGate 50G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet small office firewall",
    heading: "FortiGate\n 50G",
    highlightLast: 1,
    description: "A desktop firewall for small offices of up to about 50 users, with SD-WAN, VPN and an optional onboard SSD.",
    pills: ["SP5 security processor", "Desktop"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 50G" },
      { label: "Models", value: "50G, 51G" },
      { label: "Threat protection", value: "1.1 Gbps" },
      { label: "Firewall", value: "5 Gbps" },
      { label: "Interfaces", value: "5x GE RJ45" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "1.1 Gbps on Fortinet's SP5 security processor" },
      { label: "Ports", text: "5x GE RJ45 for WAN and LAN" },
      { label: "Local logs", text: "the 51G adds a 64 GB SSD for logs and reports" },
      { label: "Branch ready", text: "SD-WAN, IPsec VPN and ZTNA built in" },
    ],
    buttons: fgHeroButtons("FortiGate 50G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 50G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 50G",
            desc: "No onboard storage",
            points: ["1.1 Gbps threat protection", "5 Gbps firewall", "4.5 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 50G"),
          },
          {
            name: "FortiGate 51G",
            desc: "64 GB SSD for local logs",
            points: ["1.1 Gbps threat protection", "5 Gbps firewall", "4.5 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 51G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 50G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "SP5 acceleration",
        description: "Fortinet's SP5 processor takes firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 50G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 50G moves small offices onto Fortinet's SP5 processor, which almost doubles threat protection compared with the 40F. Choose the 51G if you want logs kept on the device.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "1.1 Gbps", label: "threat protection" },
      { value: "5 Gbps", label: "firewall throughput", dark: true },
      { value: "4.5 Gbps", label: "IPsec VPN throughput" },
      { value: "720,000", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 50G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "2.25 Gbps" },
            { label: "NGFW throughput", value: "1.25 Gbps" },
            { label: "Threat protection throughput", value: "1.1 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "5 / 5 / 4 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.42 μs" },
            { label: "Firewall throughput (packets per second)", value: "6 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "720,000" },
            { label: "New sessions per second (TCP)", value: "85,000" },
            { label: "Firewall policies", value: "2,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "4.5 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "200" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "250" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "1.3 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "699 / 74,000" },
            { label: "Application control throughput (HTTP 64K)", value: "2.8 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "3.8 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "5 / 5" },
            { label: "Maximum FortiSwitches", value: "8" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "16 / 8" },
            { label: "Maximum FortiTokens", value: "500" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "GE RJ45 WAN port", value: "1" },
            { label: "GE RJ45 FortiLink port", value: "1" },
            { label: "GE RJ45 ports", value: "3" },
            { label: "USB port", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "50G: none · 51G: 64 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.6 x 8.5 x 6.3 in (40.5 x 216 x 160 mm)" },
            { label: "Weight", value: "2.2 lbs (1.0 kg)" },
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "External DC adapter, 12 V DC 3 A; 100–240 V AC" },
            { label: "Power consumption (average / maximum)", value: "8.3 W / 8.9 W" },
            { label: "Heat dissipation", value: "30.35 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "Fanless, 0 dBA" },
            { label: "Certifications", value: "FCC, ISED, CE, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SP5.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 50G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 50G for?",
        answer: "It suits small offices of up to about 50 users. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "What is the difference between the 50G and 51G?",
        answer: "The 51G adds 64 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 50G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 50G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 30G", text: "Small office and branch · 500 Mbps threat protection", image: `${IMG}/fortigate-30g-card.webp`, href: `${FG_STORE}/fortigate-30g` },
      { title: "FortiGate 40F", text: "Small office and branch · 600 Mbps threat protection", image: `${IMG}/fortigate-40f-card.webp`, href: `${FG_STORE}/fortigate-40f` },
      { title: "FortiGate 70G", text: "Small office and branch · 1.3 Gbps threat protection", image: `${IMG}/fortigate-70g-card.webp`, href: `${FG_STORE}/fortigate-70g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-50g",
    heading: "Get a quote\n for the FortiGate 50G",
    highlightLast: 4,
    models: ["FortiGate 50G", "FortiGate 51G"],
  }),
  footNote: fgFootNote,
};
