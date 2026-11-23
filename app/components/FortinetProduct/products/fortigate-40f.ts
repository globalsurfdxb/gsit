import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FG_IMG as IMG, FG_STORE, FG_DATASHEETS, fgCrumbs, fgBadge, fgHeroButtons, fgQuals, fgIcons, fgEnquiry, fgModelLink, fgFootNote } from "./fortigate-shared";

const DATASHEET = {
  text: "FortiGate 40F datasheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/fortigate-fortiwifi-40f-series.pdf
  href: `${FG_DATASHEETS}/fortigate-fortiwifi-40f-series.pdf`,
};

// Generated from 01-FortiGate-Firewalls/product-pages/fortigate-40f.html
export const fortigate40F: LogitechProductData = {
  slug: "fortigate-40f",
  seo: {
    title: "FortiGate 40F Next-Generation Firewall in Dubai | GS IT",
    description: "FortiGate 40F from GS IT, a Fortinet Authorized Partner in Dubai. 600 Mbps threat protection, 5 Gbps firewall. Get sizing, installation and support.",
    ogTitle: "FortiGate 40F Next-Generation Firewall in Dubai | GS IT",
    ogDescription: "An entry-level desktop firewall for small offices, with SD-WAN, VPN and threat protection in one device.",
  },
  name: "FortiGate 40F",
  image: `${IMG}/fortigate-40f-card.webp`,
  quals: fgQuals,
  heroData: {
    crumbs: fgCrumbs("FortiGate 40F"),
    gallery: [{ src: `${IMG}/fortigate-40f-card.webp`, alt: "FortiGate 40F next-generation firewall" }],
    badge: fgBadge,
    tag: "Fortinet small office firewall",
    heading: "FortiGate\n 40F",
    highlightLast: 1,
    description: "An entry-level desktop firewall for small offices, with SD-WAN, VPN and threat protection in one device.",
    pills: ["FortiOS with SD-WAN", "Desktop"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiGate 40F" },
      { label: "Models", value: "40F" },
      { label: "Threat protection", value: "600 Mbps" },
      { label: "Firewall", value: "5 Gbps" },
      { label: "Interfaces", value: "5x GE RJ45" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Threat protection", text: "600 Mbps with the full FortiGuard bundle running" },
      { label: "Ports", text: "5x GE RJ45 for WAN and LAN" },
      { label: "Secure SD-WAN", text: "steers traffic across two internet links by application" },
      { label: "Branch ready", text: "IPsec VPN and ZTNA for remote staff" },
    ],
    buttons: fgHeroButtons("FortiGate 40F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Configuration",
    heading: "FortiGate 40F configuration\n sized to your traffic",
    highlightLast: 4,
    subhead: "We confirm the configuration during a short security review.",
    groups: [
      {
        label: "Configuration",
        columns: 2,
        models: [
          {
            name: "FortiGate 40F",
            desc: "No onboard storage",
            points: ["600 Mbps threat protection", "5 Gbps firewall", "4.4 Gbps IPsec VPN"],
            enquireLabel: "Enquire about this model",
            href: fgModelLink("FortiGate 40F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Security that keeps pace\n with your network",
    highlightLast: 3,
    subhead: "The 40F runs FortiOS, the same operating system as every FortiGate, so you get one set of features from branch to data centre.",
    data: [
      {
        icon: fgIcons.chip,
        title: "SoC4 acceleration",
        description: "Fortinet's SoC4 processor takes firewall and VPN work off the CPU, so throughput holds up with security switched on.",
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
    heading: "Where the 40F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 40F has been Fortinet's entry branch firewall for several years. It suits a small office that needs a proper firewall, VPN for remote staff and SD-WAN across two internet links.",
      "GS IT sizes the right model and FortiGuard bundle, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "600 Mbps", label: "threat protection" },
      { value: "5 Gbps", label: "firewall throughput", dark: true },
      { value: "4.4 Gbps", label: "IPsec VPN throughput" },
      { value: "700,000", label: "concurrent sessions" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate 40F\n technical specifications",
    highlightLast: 2,
    subhead: "Performance figures are Fortinet's lab results with all protection enabled where stated.",
    note: "Need a side-by-side with another model? Ask us.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPS throughput", value: "1 Gbps" },
            { label: "NGFW throughput", value: "800 Mbps" },
            { label: "Threat protection throughput", value: "600 Mbps" },
            { label: "Firewall throughput (1518 / 512 / 64 byte UDP)", value: "5 / 5 / 5 Gbps" },
            { label: "Firewall latency (64 byte UDP)", value: "2.97 μs" },
            { label: "Firewall throughput (packets per second)", value: "7.5 Mpps" },
            { label: "Concurrent sessions (TCP)", value: "700,000" },
            { label: "New sessions per second (TCP)", value: "35,000" },
            { label: "Firewall policies", value: "2,000" },
            { label: "IPsec VPN throughput (512 byte)", value: "4.4 Gbps" },
            { label: "Gateway-to-gateway IPsec VPN tunnels", value: "200" },
            { label: "Client-to-gateway IPsec VPN tunnels", value: "250" },
            { label: "SSL inspection throughput (IPS, avg. HTTPS)", value: "310 Mbps" },
            { label: "SSL inspection CPS / concurrent sessions", value: "320 / 55,000" },
            { label: "Application control throughput (HTTP 64K)", value: "990 Mbps" },
            { label: "CAPWAP throughput (HTTP 64K)", value: "3.5 Gbps" },
          ],
        },
        {
          title: "System",
          rows: [
            { label: "Virtual domains (default / maximum)", value: "10 / 10" },
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
            { label: "GE RJ45 WAN / DMZ ports", value: "1" },
            { label: "GE RJ45 internal ports", value: "3" },
            { label: "GE RJ45 FortiLink ports", value: "1" },
            { label: "USB ports", value: "1" },
            { label: "Console port (RJ45)", value: "1" },
            { label: "Onboard storage", value: "None" },
          ],
        },
        {
          title: "Physical and power",
          rows: [
            { label: "Dimensions (H x W x L)", value: "1.5 x 8.5 x 6.3 in (38.5 x 216 x 160 mm)" },
            { label: "Weight", value: "2.2 lbs (1 kg)" },
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "External DC adapter, 12 V DC 3 A; 100–240 V AC, 50/60 Hz" },
            { label: "Power consumption (average / maximum)", value: "7.74 W / 9.46 W" },
            { label: "Heat dissipation", value: "52.55 BTU/h" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Storage temperature", value: "-35 to 70°C" },
            { label: "Humidity", value: "10% to 90% non-condensing" },
            { label: "Noise level", value: "Fanless, 0 dBA" },
            { label: "Certifications", value: "FCC, ICES, CE, RCM, VCCI, BSMI, UL/cUL, CB; USGv6/IPv6" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
    source: "Source: Fortinet published specifications. ASIC: SoC4.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate 40F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiGate 40F for?",
        answer: "It suits small offices. We confirm the model after reviewing your internet links, user numbers and the traffic you need to inspect.",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure and install the FortiGate 40F, migrate your rules, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiGate models",
    highlightLast: 3,
    subhead: "The models either side of the 40F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiGate 30G", text: "Small office and branch · 500 Mbps threat protection", image: `${IMG}/fortigate-30g-card.webp`, href: `${FG_STORE}/fortigate-30g` },
      { title: "FortiGate 50G", text: "Small office and branch · 1.1 Gbps threat protection", image: `${IMG}/fortigate-50g-card.webp`, href: `${FG_STORE}/fortigate-50g` },
      { title: "FortiGate 70G", text: "Small office and branch · 1.3 Gbps threat protection", image: `${IMG}/fortigate-70g-card.webp`, href: `${FG_STORE}/fortigate-70g` },
    ],
  },
  enquiryTabs: fgEnquiry({
    page: "fortigate-40f",
    heading: "Get a quote\n for the FortiGate 40F",
    highlightLast: 4,
    models: ["FortiGate 40F"],
  }),
  footNote: fgFootNote,
};
