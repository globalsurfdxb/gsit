import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Campus Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-campus-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-campus-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-624F.html
export const fortiswitch624F: LogitechProductData = {
  slug: "fortiswitch-624F",
  seo: {
    title: "FortiSwitch 624F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 624F from GS IT in Dubai: 24x 1/2.5/5GE RJ45, 4x 25GE SFP28 and up to 1,440 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 624F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port 5GE campus switch with 25GE uplinks and MACsec. The 624F-FPOE delivers 90 W on every port.",
  },
  name: "FortiSwitch 624F",
  image: `${IMG}/fortiswitch-600-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 624F"),
    gallery: [{ src: `${IMG}/fortiswitch-600-series.webp`, alt: "FortiSwitch 600 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet high-speed campus switch",
    heading: "FortiSwitch\n 624F",
    highlightLast: 1,
    description: "A 24-port 5GE campus switch with 25GE uplinks and MACsec. The 624F-FPOE delivers 90 W on every port.",
    pills: ["5GE multi-gig", "25GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 600 Series" },
      { label: "Models", value: "624F, 624F-FPOE" },
      { label: "Ports", value: "24x 1/2.5/5GE RJ45, 4x 25GE SFP28" },
      { label: "PoE budget", value: "Up to 1,440 W" },
      { label: "Switching", value: "440 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "5GE access", text: "24x 1/2.5/5GE RJ45 ports" },
      { label: "25GE uplinks", text: "4x 25GE SFP28" },
      { label: "802.3bt", text: "1,440 W across all 24 ports with dual power supplies" },
      { label: "MACsec", text: "encrypts traffic on the wire between switches" },
    ],
    buttons: fsHeroButtons("FortiSwitch 624F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 624F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-624F",
            name: "FortiSwitch 624F",
            desc: "Data only.",
            points: ["24x 1/2.5/5GE RJ45, 4x 25GE SFP28", "No PoE", "440 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 624F", "FS-624F"),
          },
          {
            tag: "FS-624F-FPOE",
            name: "FortiSwitch 624F-FPOE",
            desc: "802.3bt type 4 on all 24 ports.",
            points: ["24x 1/2.5/5GE RJ45, 4x 25GE SFP28", "PoE budget 1,440 W with dual PSU (780 W with one)", "440 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 624F-FPOE", "FS-624F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 624F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 624F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 624F is built for the heaviest access loads: Wi-Fi 7 access points, PTZ cameras and high-power devices, with 25GE uplinks so the access layer is never the limit.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "1,440 W", label: "maximum PoE budget" },
      { value: "440 Gbps", label: "switching capacity", dark: true },
      { value: "654 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 624F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-624F", "FS-624F-FPOE"],
      rows: [
        { label: "Ports", values: ["24x 1/2.5/5GE RJ45, 4x 25GE SFP28", "24x 1/2.5/5GE RJ45, 4x 25GE SFP28"] },
        { label: "PoE ports", values: ["None", "24 (802.3af/at/bt type 4)"] },
        { label: "PoE budget", values: ["None", "1,440 W with dual PSU (780 W with one)"] },
        { label: "Switching capacity", values: ["440 Gbps", "440 Gbps"] },
        { label: "Forwarding rate", values: ["654 Mpps", "654 Mpps"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Power supply", values: ["Dual AC", "Dual AC"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Campus Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 624F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 624F for?",
        answer: "It suits high-density Wi-Fi 7 and campus access. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 624F version should we choose?",
        answer: "The 624F: data only. The 624F-FPOE: 802.3bt type 4 on all 24 ports. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 624F need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 624F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 624F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 324G", text: "Multi-gig campus · Up to 420 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-324G` },
      { title: "FortiSwitch 348G", text: "Multi-gig campus · Up to 1,560 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-348G` },
      { title: "FortiSwitch 648F", text: "High-speed campus · Up to 1,800 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-648F` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-624f",
    product: "FortiSwitch 624F",
    heading: "Get a quote\n for the FortiSwitch 624F",
    highlightLast: 4,
    models: ["FortiSwitch 624F", "FortiSwitch 624F-FPOE"],
  }),
  footNote: fsFootNote,
};
