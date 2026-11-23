import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Campus Core and Data Center Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiSwitch_Data_Center_Series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-data-center-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-1048G.html
export const fortiswitch1048G: LogitechProductData = {
  slug: "fortiswitch-1048G",
  seo: {
    title: "FortiSwitch 1048G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 1048G switch from GS IT, a Fortinet Authorized Partner in Dubai. 48x 10GE SFP+, 6x 100GE QSFP28, data only PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 1048G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port 10GE switch with six 100GE uplinks, MACsec and dual power. The replacement for the 1048E.",
  },
  name: "FortiSwitch 1048G",
  image: `${IMG}/fortiswitch-1000-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 1048G"),
    gallery: [{ src: `${IMG}/fortiswitch-1000-series.webp`, alt: "FortiSwitch 1000 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet data centre switch",
    heading: "FortiSwitch\n 1048G",
    highlightLast: 1,
    description: "A 48-port 10GE switch with six 100GE uplinks, MACsec and dual power. The replacement for the 1048E.",
    pills: ["48x 10GE", "6x 100GE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 1000 Series" },
      { label: "Models", value: "1048G" },
      { label: "Ports", value: "48x 10GE SFP+, 6x 100GE QSFP28" },
      { label: "PoE budget", value: "Data only" },
      { label: "Switching", value: "2,160 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this model",
    about: [
      { label: "10GE fibre", text: "48x 10GE SFP+ ports" },
      { label: "100GE uplinks", text: "6x 100GE QSFP28" },
      { label: "Capacity", text: "2.16 Tbps switching" },
      { label: "MACsec", text: "with dual hot-swappable AC power" },
    ],
    buttons: fsHeroButtons("FortiSwitch 1048G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Model",
    heading: "The\n FortiSwitch 1048G",
    highlightLast: 2,
    subhead: "We confirm the fit during a short network review.",
    groups: [
      {
        label: "Model",
        columns: 2,
        models: [
          {
            tag: "FS-1048G",
            name: "FortiSwitch 1048G",
            desc: "MACsec. Dual AC power supplies.",
            points: ["48x 10GE SFP+, 6x 100GE QSFP28", "No PoE", "2,160 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 1048G", "FS-1048G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 1048G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 1048G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 1048G connects a full rack of servers at 10GE and uplinks at 100GE. It replaces the 1048E with more uplinks and link encryption.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "Data only", label: "no PoE on this family" },
      { value: "2,160 Gbps", label: "switching capacity", dark: true },
      { value: "2,000 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 1048G\n technical specifications",
    highlightLast: 2,
    subhead: "Key hardware specifications. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-1048G"],
      rows: [
        { label: "Ports", values: ["48x 10GE SFP+, 6x 100GE QSFP28"] },
        { label: "PoE ports", values: ["None"] },
        { label: "PoE budget", values: ["None"] },
        { label: "Switching capacity", values: ["2,160 Gbps"] },
        { label: "Forwarding rate", values: ["2,000 Mpps"] },
        { label: "MAC addresses", values: ["64 K"] },
        { label: "Form factor", values: ["1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["43 x 460 x 438.5 mm"] },
        { label: "Weight", values: ["9.1 kg"] },
        { label: "Power supply", values: ["Dual hot-swappable AC"] },
        { label: "Max power draw", values: ["585.8 W"] },
        { label: "Operating temperature", values: ["0 to 40°C"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Campus Core and Data Center Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 1048G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 1048G for?",
        answer: "It suits data centre top-of-rack and aggregation. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 1048G replace the FortiSwitch 1048E?",
        answer: "Yes. Fortinet lists the 1048G as the replacement for the 1048E, which has reached end of order. Existing 1048E switches stay supported, and we can plan the swap.",
      },
      {
        question: "Does the FortiSwitch 1048G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 1048G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 1048G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 1024E", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1024E` },
      { title: "FortiSwitch T1024E", text: "Data centre and core · Up to 1,440 W", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-T1024E` },
      { title: "FortiSwitch 2048F", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-2000-3000-series.webp`, href: `${FS_STORE}/fortiswitch-2048F` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-1048g",
    product: "FortiSwitch 1048G",
    heading: "Get a quote\n for the FortiSwitch 1048G",
    highlightLast: 4,
    models: ["FortiSwitch 1048G"],
  }),
  footNote: fsFootNote,
};
