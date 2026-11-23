import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgServiceLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 90G datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-fortiwifi-90g-series.pdf
  href: `${FG_DATASHEETS}/fortigate-fortiwifi-90g-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-90g.html
export const fortigate90G: LogitechProductData = {
  slug: "fortigate-90g",
  seo: {
    title: "FortiGate 90G Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 90G from GS IT, a Fortinet Authorized Partner in Dubai. 2.2 Gbps threat protection, 28 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 90G Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "A desktop firewall for busy branches, with 10GE WAN ports and far more inspection headroom than the 80F it replaces.",
  },
  name: "FortiGate 90G",
  image: `${IMG}/fortigate-90g-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 90G"),
    gallery: [{ src: `${IMG}/fortigate-90g-card.webp`, alt: "FortiGate 90G next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet branch firewall",
    heading: "FortiGate\n 90G",
    highlightLast: 1,
    description: "A desktop firewall for busy branches, with 10GE WAN ports and far more inspection headroom than the 80F it replaces.",
    pills: ["SP5 security processor", "10GE WAN"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 90G" },
      { label: "Models", value: "90G, 91G" },
      { label: "Threat protection", value: "2.2 Gbps" },
      { label: "Firewall", value: "28 Gbps" },
      { label: "Interfaces", value: "8x GE RJ45, 2x 10GE shared WAN" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "2.2 Gbps on Fortinet's SP5 processor" },
      { label: "10GE WAN", text: "2x 10GE shared media ports, RJ45 or SFP+" },
      { label: "VPN", text: "25 Gbps IPsec VPN throughput" },
      { label: "Also as a service", text: "the 91G is available as FortiGate as a Service" },
    ],
    buttons: fgHeroButtons("FortiGate 90G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "FortiGate 90G models\n with and without storage",
    highlightLast: 4,
    subhead: "The models share the same performance and ports. Pick the one that matches how you keep logs.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "FortiGate 90G",
            desc: "No onboard storage",
            points: ["2.2 Gbps threat protection", "28 Gbps firewall", "25 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 90G"),
          },
          {
            tag: "Also as a service",
            name: "FortiGate 91G",
            desc: "120 GB SSD for local logs",
            points: ["2.2 Gbps threat protection", "28 Gbps firewall", "25 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 91G"),
            secondary: { label: "Ask about it as a service", href: fgServiceLink("FortiGate 91G") },
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 90G runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
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
    heading: "Where the 90G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 90G brings 10GE WAN to the branch. Its SP5 processor delivers 28 Gbps of firewall and 25 Gbps of IPsec VPN in a desktop unit, so a busy branch is no longer limited by its firewall.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "2.2 Gbps", label: "threat protection" },
      { value: "28 Gbps", label: "firewall throughput", dark: true },
      { value: "25 Gbps", label: "IPsec VPN throughput" },
      { value: "1.5 million", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 90G\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "4.5 Gbps" },
            { label: "NGFW throughput", value: "2.5 Gbps" },
            { label: "Threat protection throughput", value: "2.2 Gbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "28 / 28 / 27.9 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "3.23 μs" },
            { label: "Firewall throughput (packets per second)", value: "41.85 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "1.5 million" },
            { label: "New sessions per second (TCP)", value: "124,000" },
            { label: "Firewall policies", value: "5,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "25 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "200" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "2,500" },
            { label: "SSL-VPN throughput / users", value: "1.4 Gbps / 200" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "2.6 Gbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "1,400 / 300,000" },
            { label: "Application control throughput (HTTP 64K)", value: "6.7 Gbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "23.6 Gbps" },
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
            { label: "10/5/2.5/1 GE RJ45 or 10GE/GE SFP+/SFP shared media pairs", value: "2" },
            { label: "GE RJ45 internal ports", value: "8" },
            { label: "USB port", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "90G: none · 91G: 120 GB SSD" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.65 x 8.5 x 7.0 in (42 x 216 x 178 mm)" },
            { label: "Weight", value: "2.47 lbs (1.12 kg)" },
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "12 V DC, 5 A; optional redundant adapter" },
            { label: "Power consumption (average / maximum)", value: "90G: 19.9 / 20.53 W · 91G: 22.4 / 23.5 W" },
            { label: "Heat dissipation", value: "90G: 70.0 BTU/h · 91G: 80.1 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "21.73 dBA" },
            { label: "Certifications", value: "USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SP5.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 90G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 90G for?",
        answer: "It suits busy branches that need 10GE WAN. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
      },
      {
        question: "Does the FortiGate 90G replace the FortiGate 80F?",
        answer: "Yes. It is the current Fortinet model for sites that run the 80F today. We move your existing policies across and plan the switchover outside working hours.",
      },
      {
        question: "What is the difference between the 90G and 91G?",
        answer: "The 91G adds 120 GB SSD. Performance and ports are otherwise the same. Choose it if you want logs and reports kept on the firewall rather than in FortiAnalyzer or FortiGate Cloud.",
      },
      {
        question: "Which protection bundle does it need?",
        answer: "Most customers choose Unified Threat Protection (UTP) or Enterprise Protection, for 1 or 3 years. Without a FortiGuard bundle the firewall still passes traffic but stops receiving threat updates. We include the right bundle in the quote.",
      },
      {
        question: "Can we get it as a service?",
        answer: "Yes. The 91G is available as FortiGate as a Service, paid monthly or annually with FortiPoints. Fortinet supplies and maintains the hardware, and GS IT sets it up for you.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 90G, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 90G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 50G", text: "Small office and branch · 1.1 Gbps threat protection", image: `${IMG}/fortigate-50g-card.webp`, href: `${FG_STORE}/fortigate-50g` },
      { title: "FortiGate 70G", text: "Small office and branch · 1.3 Gbps threat protection", image: `${IMG}/fortigate-70g-card.webp`, href: `${FG_STORE}/fortigate-70g` },
      { title: "FortiGate 120G", text: "Campus and enterprise edge · 2.8 Gbps threat protection", image: `${IMG}/fortigate-120g-card.webp`, href: `${FG_STORE}/fortigate-120g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-90g",
    heading: "Get a quote\n for the FortiGate 90G",
    highlightLast: 4,
    models: ["FortiGate 90G", "FortiGate 91G"], fgaas: "FortiGate 91G",
  }),
  footNote: fgFootNote,
};
