import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Campus Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-campus-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-campus-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-648F.html
export const fortiswitch648F: LogitechProductData = {
  slug: "fortiswitch-648F",
  seo: {
    title: "FortiSwitch 648F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 648F from GS IT in Dubai: 48 multi-gig RJ45 ports, 8x 25GE SFP28 and up to 1,800 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 648F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port multi-gig campus switch with eight 25GE uplinks and MACsec. The 648F-FPOE delivers up to 1,800 W of 802.3bt power.",
  },
  name: "FortiSwitch 648F",
  image: `${IMG}/fortiswitch-600-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 648F"),
    gallery: [{ src: `${IMG}/fortiswitch-600-series.webp`, alt: "FortiSwitch 600 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet high-speed campus switch",
    heading: "FortiSwitch\n 648F",
    highlightLast: 1,
    description: "A 48-port multi-gig campus switch with eight 25GE uplinks and MACsec. The 648F-FPOE delivers up to 1,800 W of 802.3bt power.",
    pills: ["2.5GE and 5GE", "8x 25GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 600 Series" },
      { label: "Models", value: "648F, 648F-FPOE" },
      { label: "Ports", value: "32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28" },
      { label: "PoE budget", value: "Up to 1,800 W" },
      { label: "Switching", value: "720 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Multi-gig", text: "32x 2.5GE and 16x 5GE RJ45 ports" },
      { label: "25GE uplinks", text: "8x 25GE SFP28" },
      { label: "802.3bt", text: "up to 1,800 W on all 48 ports" },
      { label: "MACsec", text: "encrypts traffic on the wire between switches" },
    ],
    buttons: fsHeroButtons("FortiSwitch 648F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 648F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-648F",
            name: "FortiSwitch 648F",
            desc: "Data only.",
            points: ["32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28", "No PoE", "720 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 648F", "FS-648F"),
          },
          {
            tag: "FS-648F-FPOE",
            name: "FortiSwitch 648F-FPOE",
            desc: "802.3bt type 4 on all 48 ports.",
            points: ["32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28", "PoE budget 1,800 W with dual PSU (200 to 240V)", "720 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 648F-FPOE", "FS-648F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 648F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
    data: [
      {
        icon: fsIcons.fortilink,
        title: "FortiLink management",
        description: "Your FortiGate discovers the switch, pushes its configuration and shows every port in the same console as your security policy.",
      },
      {
        icon: fsIcons.nac,
        title: "Network access control",
        description: "Devices are identified as they connect and placed in the right segment, so unknown devices stay off your main network.",
      },
      {
        icon: fsIcons.poe,
        title: "Power over Ethernet",
        description: "802.3bt power up to 90 W per port for Wi-Fi 7 access points, PTZ cameras and other high-draw devices.",
      },
      {
        icon: fsIcons.macsec,
        title: "MACsec encryption",
        description: "Encrypts traffic on the links between switches, so data cannot be read even with physical access to the cable.",
      },
      {
        icon: fsIcons.fabric,
        title: "Security Fabric visibility",
        description: "Switch ports, connected devices and events appear alongside your FortiGate and FortiAnalyzer data.",
      },
      {
        icon: fsIcons.support,
        title: "FortiCare support",
        description: "Firmware updates, Fortinet technical support and hardware replacement, renewed by GS IT.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where the 648F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 648F is the 48-port model of Fortinet's high-speed campus range. Its 5GE ports serve the fastest access points, and eight 25GE uplinks connect it to the core with room to spare.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "1,800 W", label: "maximum PoE budget" },
      { value: "720 Gbps", label: "switching capacity", dark: true },
      { value: "2", label: "models to choose from" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 648F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-648F", "FS-648F-FPOE"],
      rows: [
        { label: "Ports", values: ["32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28", "32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28"] },
        { label: "PoE ports", values: ["None", "48 (802.3af/at/bt type 4)"] },
        { label: "PoE budget", values: ["None", "1,800 W with dual PSU (200 to 240V)"] },
        { label: "Switching capacity", values: ["720 Gbps", "720 Gbps"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Power supply", values: ["Dual AC", "Dual AC"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Campus Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 648F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 648F for?",
        answer: "It suits dense, high-performance campus floors. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 648F version should we choose?",
        answer: "The 648F: data only. The 648F-FPOE: 802.3bt type 4 on all 48 ports. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 648F need a FortiGate?",
        answer: "No, but most customers use one. With FortiLink, the FortiGate manages the switch from its own console. It can also be managed standalone.",
      },
      {
        question: "Which transceivers do the uplinks need?",
        answer: "Fortinet FN-TRAN transceivers that match the uplink speed and the fibre or copper run. We include the right transceivers in the quote.",
      },
      {
        question: "What support does it need?",
        answer: "FortiCare Premium or Elite, for 1 or 3 years, which covers firmware updates, Fortinet technical support and hardware replacement.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 648F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 648F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 348G", text: "Multi-gig campus · Up to 1,560 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-348G` },
      { title: "FortiSwitch 624F", text: "High-speed campus · Up to 1,440 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-624F` },
      { title: "FortiSwitch 1024E", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1024E` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-648f",
    product: "FortiSwitch 648F",
    heading: "Get a quote\n for the FortiSwitch 648F",
    highlightLast: 4,
    models: ["FortiSwitch 648F", "FortiSwitch 648F-FPOE"],
  }),
  footNote: fsFootNote,
};
