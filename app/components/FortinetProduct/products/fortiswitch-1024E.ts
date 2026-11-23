import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Campus Core and Data Center Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiSwitch_Data_Center_Series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-data-center-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-1024E.html
export const fortiswitch1024E: LogitechProductData = {
  slug: "fortiswitch-1024E",
  seo: {
    title: "FortiSwitch 1024E Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 1024E switch from GS IT, a Fortinet Authorized Partner in Dubai. 24x 10GE SFP+, 2x 100GE QSFP28, data only PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 1024E Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port 10GE fibre switch with two 100GE uplinks and dual hot-swappable power supplies.",
  },
  name: "FortiSwitch 1024E",
  image: `${IMG}/fortiswitch-1000-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 1024E"),
    gallery: [{ src: `${IMG}/fortiswitch-1000-series.webp`, alt: "FortiSwitch 1000 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet aggregation switch",
    heading: "FortiSwitch\n 1024E",
    highlightLast: 1,
    description: "A 24-port 10GE fibre switch with two 100GE uplinks and dual hot-swappable power supplies.",
    pills: ["10GE fibre", "100GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 1000 Series" },
      { label: "Models", value: "1024E" },
      { label: "Ports", value: "24x 10GE SFP+, 2x 100GE QSFP28" },
      { label: "PoE budget", value: "Data only" },
      { label: "Switching", value: "880 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this model",
    about: [
      { label: "10GE fibre", text: "24x 10GE SFP+ ports" },
      { label: "100GE uplinks", text: "2x 100GE QSFP28" },
      { label: "Capacity", text: "880 Gbps switching" },
      { label: "Resilient", text: "dual hot-swappable AC power supplies" },
    ],
    buttons: fsHeroButtons("FortiSwitch 1024E"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Model",
    heading: "The\n FortiSwitch 1024E",
    highlightLast: 2,
    subhead: "We confirm the fit during a short network review.",
    groups: [
      {
        label: "Model",
        columns: 2,
        models: [
          {
            tag: "FS-1024E",
            name: "FortiSwitch 1024E",
            desc: "Dual AC power supplies.",
            points: ["24x 10GE SFP+, 2x 100GE QSFP28", "No PoE", "880 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 1024E", "FS-1024E"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 1024E runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
        icon: fsIcons.uptime,
        title: "Built for uptime",
        description: "Redundant power and link aggregation across switches keep traffic flowing through a hardware fault.",
      },
      {
        icon: fsIcons.zeroTouch,
        title: "Zero-touch deployment",
        description: "Connect the switch to the FortiGate and it is provisioned automatically, which keeps branch roll-outs fast.",
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
    heading: "Where the 1024E\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 1024E aggregates your access switches and connects servers at 10GE. It sits between your access switches and the FortiGate.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "Data only", label: "no PoE on this family" },
      { value: "880 Gbps", label: "switching capacity", dark: true },
      { value: "1,309 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 1024E\n technical specifications",
    highlightLast: 2,
    subhead: "Key hardware specifications. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-1024E"],
      rows: [
        { label: "Ports", values: ["24x 10GE SFP+, 2x 100GE QSFP28"] },
        { label: "PoE ports", values: ["None"] },
        { label: "PoE budget", values: ["None"] },
        { label: "Switching capacity", values: ["880 Gbps"] },
        { label: "Forwarding rate", values: ["1,309 Mpps"] },
        { label: "MAC addresses", values: ["64 K"] },
        { label: "Form factor", values: ["1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 410 x 440 mm"] },
        { label: "Weight", values: ["6.58 kg"] },
        { label: "Power supply", values: ["Dual hot-swappable AC"] },
        { label: "Max power draw", values: ["176 W"] },
        { label: "Operating temperature", values: ["0 to 45°C"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Campus Core and Data Center Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 1024E\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 1024E for?",
        answer: "It suits aggregation layers and server rooms. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 1024E need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 1024E, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 1024E in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 624F", text: "High-speed campus · Up to 1,440 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-624F` },
      { title: "FortiSwitch 648F", text: "High-speed campus · Up to 1,800 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-648F` },
      { title: "FortiSwitch T1024E", text: "Data centre and core · Up to 1,440 W", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-T1024E` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-1024e",
    product: "FortiSwitch 1024E",
    heading: "Get a quote\n for the FortiSwitch 1024E",
    highlightLast: 4,
    models: ["FortiSwitch 1024E"],
  }),
  footNote: fsFootNote,
};
