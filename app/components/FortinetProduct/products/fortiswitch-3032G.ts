import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Campus Core and Data Center Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiSwitch_Data_Center_Series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-data-center-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-3032G.html
export const fortiswitch3032G: LogitechProductData = {
  slug: "fortiswitch-3032G",
  seo: {
    title: "FortiSwitch 3032G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 3032G switch from GS IT, a Fortinet Authorized Partner in Dubai. 32x 100GE QSFP28, 2x 10GE SFP+, data only PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 3032G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 32-port 100GE spine switch with 6.4 Tbps of switching and dual power. The replacement for the 3032E.",
  },
  name: "FortiSwitch 3032G",
  image: `${IMG}/fortiswitch-2000-3000-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 3032G"),
    gallery: [{ src: `${IMG}/fortiswitch-2000-3000-series.webp`, alt: "FortiSwitch 3000 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet data centre switch",
    heading: "FortiSwitch\n 3032G",
    highlightLast: 1,
    description: "A 32-port 100GE spine switch with 6.4 Tbps of switching and dual power. The replacement for the 3032E.",
    pills: ["32x 100GE", "6.4 Tbps"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 3000 Series" },
      { label: "Models", value: "3032G" },
      { label: "Ports", value: "32x 100GE QSFP28, 2x 10GE SFP+" },
      { label: "PoE budget", value: "Data only" },
      { label: "Switching", value: "6,440 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this model",
    about: [
      { label: "100GE", text: "32x 100GE QSFP28 ports" },
      { label: "Capacity", text: "6.44 Tbps switching" },
      { label: "Extra ports", text: "2x 10GE SFP+" },
      { label: "Resilient", text: "dual hot-swappable AC power supplies" },
    ],
    buttons: fsHeroButtons("FortiSwitch 3032G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Model",
    heading: "The\n FortiSwitch 3032G",
    highlightLast: 2,
    subhead: "We confirm the fit during a short network review.",
    groups: [
      {
        label: "Model",
        columns: 2,
        models: [
          {
            tag: "FS-3032G",
            name: "FortiSwitch 3032G",
            desc: "Dual AC power supplies.",
            points: ["32x 100GE QSFP28, 2x 10GE SFP+", "No PoE", "6,440 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 3032G", "FS-3032G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 3032G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 3032G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 3032G is the spine of a FortiSwitch data centre, connecting leaf switches such as the 2048F at 100GE.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "Data only", label: "no PoE on this family" },
      { value: "6,440 Gbps", label: "switching capacity", dark: true },
      { value: "4,000 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 3032G\n technical specifications",
    highlightLast: 2,
    subhead: "Key hardware specifications. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-3032G"],
      rows: [
        { label: "Ports", values: ["32x 100GE QSFP28, 2x 10GE SFP+"] },
        { label: "PoE ports", values: ["None"] },
        { label: "PoE budget", values: ["None"] },
        { label: "Switching capacity", values: ["6,440 Gbps"] },
        { label: "Forwarding rate", values: ["4,000 Mpps"] },
        { label: "MAC addresses", values: ["65 K"] },
        { label: "Form factor", values: ["1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["43 x 460 x 438.5 mm"] },
        { label: "Weight", values: ["8.37 kg"] },
        { label: "Power supply", values: ["Dual hot-swappable AC"] },
        { label: "Max power draw", values: ["548.9 W"] },
        { label: "Operating temperature", values: ["0 to 40°C"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Campus Core and Data Center Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 3032G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 3032G for?",
        answer: "It suits data centre spines and 100GE cores. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 3032G replace the FortiSwitch 3032E?",
        answer: "Yes. Fortinet lists the 3032G as the replacement for the 3032E, which has reached end of order. Existing 3032E switches stay supported, and we can plan the swap.",
      },
      {
        question: "Does the FortiSwitch 3032G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 3032G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 3032G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 1048G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1048G` },
      { title: "FortiSwitch 2048F", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-2000-3000-series.webp`, href: `${FS_STORE}/fortiswitch-2048F` },
      { title: "FortiSwitch Rugged", text: "Rugged · Up to 421 W", image: `${IMG}/fortiswitch-rugged-series.webp`, href: `${FS_STORE}/fortiswitch-rugged` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-3032g",
    product: "FortiSwitch 3032G",
    heading: "Get a quote\n for the FortiSwitch 3032G",
    highlightLast: 4,
    models: ["FortiSwitch 3032G"],
  }),
  footNote: fsFootNote,
};
