import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Campus Core and Data Center Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/FortiSwitch_Data_Center_Series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-data-center-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-T1024E.html
export const fortiswitchT1024E: LogitechProductData = {
  slug: "fortiswitch-T1024E",
  seo: {
    title: "FortiSwitch T1024E Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch T1024E from GS IT in Dubai: 24x 10G multi-gig RJ45, 2x 100GE QSFP28 and up to 1,440 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch T1024E Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port 10GBASE-T copper switch with two 100GE uplinks. The T1024F-FPOE adds 1,440 W of 802.3bt power.",
  },
  name: "FortiSwitch T1024E",
  image: `${IMG}/fortiswitch-1000-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch T1024E"),
    gallery: [{ src: `${IMG}/fortiswitch-1000-series.webp`, alt: "FortiSwitch 1000 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet 10GE copper switch",
    heading: "FortiSwitch\n T1024E",
    highlightLast: 1,
    description: "A 24-port 10GBASE-T copper switch with two 100GE uplinks. The T1024F-FPOE adds 1,440 W of 802.3bt power.",
    pills: ["10GE copper", "100GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 1000 Series" },
      { label: "Models", value: "T1024E, T1024F-FPOE" },
      { label: "Ports", value: "24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28" },
      { label: "PoE budget", value: "Up to 1,440 W" },
      { label: "Switching", value: "880 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "10GE copper", text: "24x 10G/5G/2.5G/1G RJ45 ports" },
      { label: "100GE uplinks", text: "2x 100GE QSFP28" },
      { label: "802.3bt option", text: "1,440 W on the T1024F-FPOE" },
      { label: "Resilient", text: "dual hot-swappable AC power supplies" },
    ],
    buttons: fsHeroButtons("FortiSwitch T1024E"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch T1024E version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-T1024E",
            name: "FortiSwitch T1024E",
            desc: "Data only. Dual AC power supplies.",
            points: ["24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28", "No PoE", "880 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch T1024E", "FS-T1024E"),
          },
          {
            tag: "FS-T1024F-FPOE",
            name: "FortiSwitch T1024F-FPOE",
            desc: "802.3bt type 4 on all 24 ports, 1,440 W budget.",
            points: ["24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28", "PoE budget 1,440 W", "880 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch T1024F-FPOE", "FS-T1024F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The T1024E runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the T1024E\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The T1024E gives you 10GE over standard copper cabling, so servers and high-end access points connect at full speed without fibre runs.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "1,440 W", label: "maximum PoE budget" },
      { value: "880 Gbps", label: "switching capacity", dark: true },
      { value: "1,309 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch T1024E\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-T1024E", "FS-T1024F-FPOE"],
      rows: [
        { label: "Ports", values: ["24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28", "24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28"] },
        { label: "PoE ports", values: ["None", "24 (802.3af/at/bt type 4)"] },
        { label: "PoE budget", values: ["None", "1,440 W"] },
        { label: "Switching capacity", values: ["880 Gbps", "880 Gbps"] },
        { label: "Forwarding rate", values: ["1,309 Mpps", "1,309 Mpps"] },
        { label: "MAC addresses", values: ["64 K", "64 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 410 x 440 mm", "44 x 410 x 440 mm"] },
        { label: "Weight", values: ["6.54 kg", "7.5 kg"] },
        { label: "Power supply", values: ["Dual hot-swappable AC", "Dual hot-swappable AC"] },
        { label: "Max power draw", values: ["128 W", "1,660 W"] },
        { label: "Operating temperature", values: ["0 to 45°C", "0 to 45°C"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Campus Core and Data Center Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch T1024E\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch T1024E for?",
        answer: "It suits server rooms and high-speed copper links. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch T1024E version should we choose?",
        answer: "The T1024E: data only. Dual AC power supplies. The T1024F-FPOE: 802.3bt type 4 on all 24 ports, 1,440 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch T1024E need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch T1024E, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the T1024E in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 648F", text: "High-speed campus · Up to 1,800 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-648F` },
      { title: "FortiSwitch 1024E", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1024E` },
      { title: "FortiSwitch 1048G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1048G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-t1024e",
    product: "FortiSwitch T1024E",
    heading: "Get a quote\n for the FortiSwitch T1024E",
    highlightLast: 4,
    models: ["FortiSwitch T1024E", "FortiSwitch T1024F-FPOE"],
  }),
  footNote: fsFootNote,
};
