import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 70G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortigate-fortiwifi-70g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-fortiwifi-70g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-70g.html
export const fortigate70G: LogitechProductData = {
  slug: "fortigate-70g",
  seo: {
    title: "FortiGate 70G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 70G from GS IT, a Fortinet Authorized Partner in Dubai. 1.3 Gbps threat protection, 10 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 70G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A desktop firewall for offices of up to about 100 users. The current successor to the 60F and 70F.",
  },
  name: "FortiGate 70G",
  image: `${IMG}/fortigate-70g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 70G"),
    gallery: [{ src: `${IMG}/fortigate-70g-card.webp`, alt: "FortiGate 70G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet branch firewall",
    heading: "FortiGate\n 70G",
    highlightLast: 1,
    description: "A desktop firewall for offices of up to about 100 users. The current successor to the 60F and 70F.",
    pills: ["SP5 security processor", "Desktop"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 70G" },
      { label: "Models", value: "70G, 71G" },
      { label: "Threat protection", value: "1.3 Gbps" },
      { label: "Firewall", value: "10 Gbps" },
      { label: "Interfaces", value: "10x GE RJ45" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "1.3 Gbps on Fortinet's SP5 processor" },
      { label: "Ports", text: "10x GE RJ45 for WAN, LAN and DMZ" },
      { label: "Local logs", text: "the 71G adds a 64 GB SSD" },
      { label: "Successor model", text: "replaces the 60F and 70F as they reach end of order" },
    ],
    buttons: fgHeroButtons("FortiGate 70G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 70G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 70G",
            desc: "No onboard storage",
            points: ["1.3 Gbps threat protection", "10 Gbps firewall", "7.1 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 70G"),
          },
          {
            name: "FortiGate 71G",
            desc: "64 GB SSD for local logs",
            points: ["1.3 Gbps threat protection", "10 Gbps firewall", "7.1 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 71G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 70G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 70G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 70G is the model most branch offices move to as the 60F and 70F reach end of order. It keeps the desktop form factor and adds headroom for SSL inspection and SD-WAN.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "1.3 Gbps", label: "threat protection" },
      { value: "10 Gbps", label: "firewall throughput", dark: true },
      { value: "7.1 Gbps", label: "IPsec VPN throughput" },
      { value: "1.4 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 70G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "2.5 Gbps" },
            { label: "NGFW throughput", value: "1.5 Gbps" },
            { label: "Threat protection throughput", value: "1.3 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "10 / 10 / 10 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.46 μs" },
            { label: "Firewall throughput (packets per second)", value: "15 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "1.4 million" },
            { label: "New sessions per second (TCP)", value: "100,000" },
            { label: "Firewall policies", value: "5,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "7.1 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "200" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "500" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "1.4 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "715 / 140,000" },
            { label: "Application control throughput (HTTP 64K)", value: "3.6 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "6.8 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 10" },
            { label: "Maximum FortiSwitches", value: "24" },
            { label: "Maximum FortiAPs (total / tunnel)", value: "96 / 48" },
            { label: "Maximum FortiTokens", value: "500" },
            { label: "High availability", value: "Active-active, active-passive, clustering" },
          ],
        },
      ],
      [
        {
          title: "Interfaces and storage",
          rows: [
            { label: "GE RJ45 WAN ports", value: "2" },
            { label: "GE RJ45 ports", value: "6" },
            { label: "GE RJ45 FortiLink ports", value: "2" },
            { label: "USB ports", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "70G: none · 71G: 64 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.6 x 8.5 x 6.3 in (40.5 x 216 x 160 mm)" },
            { label: "Weight", value: "70G: 0.91 kg · 71G: 0.93 kg" },
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "12 V DC, 3 A external adapter" },
            { label: "Power consumption (average / maximum)", value: "70G: 12.3 / 12.8 W · 71G: 13.4 / 14.1 W" },
            { label: "Heat dissipation", value: "70G: 43.65 BTU/h · 71G: 48.08 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "Fanless" },
            { label: "Certifications", value: "FCC, ICES, CE, RCM, VCCI, BSMI, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SP5.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 70G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 70G for?",
        answer: "It suits offices of up to about 100 users. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 70G replace the FortiGate 60F and 70F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 60F and 70F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 70G and 71G?",
        answer: "The 71G adds 64 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 70G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 70G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 40F", text: "Small office and branch · 600 Mbps threat protection", image: `${IMG}/fortigate-40f-card.webp`, href: `${FG_STORE}/fortigate-40f` },
      { title: "FortiGate 50G", text: "Small office and branch · 1.1 Gbps threat protection", image: `${IMG}/fortigate-50g-card.webp`, href: `${FG_STORE}/fortigate-50g` },
      { title: "FortiGate 90G", text: "Small office and branch · 2.2 Gbps threat protection", image: `${IMG}/fortigate-90g-card.webp`, href: `${FG_STORE}/fortigate-90g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-70g",
    heading: "Get a quote\n for the FortiGate 70G",
    highlightLast: 4,
    models: ["FortiGate 70G", "FortiGate 71G"],
  }),
  footNote: fgFootNote,
};
