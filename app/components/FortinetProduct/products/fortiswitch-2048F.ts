import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Campus Core and Data Center Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiSwitch_Data_Center_Series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-data-center-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-2048F.html
export const fortiswitch2048F: LogitechProductData = {
  slug: "fortiswitch-2048F",
  seo: {
    title: "FortiSwitch 2048F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 2048F from GS IT in Dubai: 48x 25GE SFP28, 8x 100GE QSFP28 and 2x 10GE SFP+ for the data centre. Sizing, installation and support.",
    ogTitle: "FortiSwitch 2048F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port 25GE core switch with eight 100GE ports and 4 Tbps of switching. Front-to-back or back-to-front airflow.",
  },
  name: "FortiSwitch 2048F",
  image: `${IMG}/fortiswitch-2000-3000-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 2048F"),
    gallery: [{ src: `${IMG}/fortiswitch-2000-3000-series.webp`, alt: "FortiSwitch 2000 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet campus core switch",
    heading: "FortiSwitch\n 2048F",
    highlightLast: 1,
    description: "A 48-port 25GE core switch with eight 100GE ports and 4 Tbps of switching. Front-to-back or back-to-front airflow.",
    pills: ["48x 25GE", "8x 100GE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 2000 Series" },
      { label: "Models", value: "2048F, 2048F-B2F" },
      { label: "Ports", value: "48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+" },
      { label: "PoE budget", value: "Data only" },
      { label: "Switching", value: "4,000 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "25GE", text: "48x 25GE SFP28 ports" },
      { label: "100GE", text: "8x 100GE QSFP28, plus 2x 10GE SFP+" },
      { label: "Capacity", text: "4 Tbps switching" },
      { label: "Airflow choice", text: "standard or B2F back-to-front model" },
    ],
    buttons: fsHeroButtons("FortiSwitch 2048F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 2048F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-2048F",
            name: "FortiSwitch 2048F",
            desc: "Front-to-back airflow. Dual AC power supplies.",
            points: ["48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+", "No PoE", "4,000 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 2048F", "FS-2048F"),
          },
          {
            tag: "FS-2048F-B2F",
            name: "FortiSwitch 2048F-B2F",
            desc: "Back-to-front airflow. Dual AC power supplies.",
            points: ["48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+", "No PoE", "4,000 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 2048F-B2F", "FS-2048F-B2F"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 2048F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 2048F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 2048F aggregates high-speed access switches such as the 600 Series. It is the core of a large FortiSwitch campus.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "Data only", label: "no PoE on this family" },
      { value: "4,000 Gbps", label: "switching capacity", dark: true },
      { value: "4,000 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 2048F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-2048F", "FS-2048F-B2F"],
      rows: [
        { label: "Ports", values: ["48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+", "48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "None"] },
        { label: "PoE budget", values: ["None", "None"] },
        { label: "Switching capacity", values: ["4,000 Gbps", "4,000 Gbps"] },
        { label: "Forwarding rate", values: ["4,000 Mpps", "4,000 Mpps"] },
        { label: "MAC addresses", values: ["96 K", "96 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["43.5 x 460 x 438.5 mm", "43.5 x 460 x 438.5 mm"] },
        { label: "Weight", values: ["9.88 kg", "9.88 kg"] },
        { label: "Power supply", values: ["Dual hot-swappable AC", "Dual hot-swappable AC"] },
        { label: "Max power draw", values: ["175.7 W", "175.7 W"] },
        { label: "Operating temperature", values: ["0 to 40°C", "0 to 40°C"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Campus Core and Data Center Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 2048F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 2048F for?",
        answer: "It suits campus cores and data centre leaf layers. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 2048F version should we choose?",
        answer: "The 2048F: front-to-back airflow. Dual AC power supplies. The 2048F-B2F: back-to-front airflow. Dual AC power supplies. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 2048F need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 2048F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 2048F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch T1024E", text: "Data centre and core · Up to 1,440 W", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-T1024E` },
      { title: "FortiSwitch 1048G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1048G` },
      { title: "FortiSwitch 3032G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-2000-3000-series.webp`, href: `${FS_STORE}/fortiswitch-3032G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-2048f",
    product: "FortiSwitch 2048F",
    heading: "Get a quote\n for the FortiSwitch 2048F",
    highlightLast: 4,
    models: ["FortiSwitch 2048F", "FortiSwitch 2048F-B2F"],
  }),
  footNote: fsFootNote,
};
