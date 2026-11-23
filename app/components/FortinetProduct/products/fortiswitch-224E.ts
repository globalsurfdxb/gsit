import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-224E.html
export const fortiswitch224E: LogitechProductData = {
  slug: "fortiswitch-224E",
  seo: {
    title: "FortiSwitch 224E Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 224E switch from GS IT, a Fortinet Authorized Partner in Dubai. 24x GE RJ45, 4x GE SFP, up to 180 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 224E Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port Layer 2 and 3 office switch with GE SFP uplinks. The 224E-POE powers 12 ports.",
  },
  name: "FortiSwitch 224E",
  image: `${IMG}/fortiswitch-200-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 224E"),
    gallery: [{ src: `${IMG}/fortiswitch-200-series.webp`, alt: "FortiSwitch 200 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet office switch",
    heading: "FortiSwitch\n 224E",
    highlightLast: 1,
    description: "A 24-port Layer 2 and 3 office switch with GE SFP uplinks. The 224E-POE powers 12 ports.",
    pills: ["Layer 2/3", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 200 Series" },
      { label: "Models", value: "224E, 224E-POE" },
      { label: "Ports", value: "24x GE RJ45, 4x GE SFP" },
      { label: "PoE budget", value: "Up to 180 W" },
      { label: "Switching", value: "56 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Layer 3", text: "static routing on the switch itself" },
      { label: "Ports", text: "24x GE RJ45 and 4x GE SFP" },
      { label: "PoE+ option", text: "12 ports, 180 W on the 224E-POE" },
      { label: "Quiet", text: "the data-only 224E is fanless" },
    ],
    buttons: fsHeroButtons("FortiSwitch 224E"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 224E version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-224E",
            name: "FortiSwitch 224E",
            desc: "Data only. Fanless.",
            points: ["24x GE RJ45, 4x GE SFP", "No PoE", "56 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 224E", "FS-224E"),
          },
          {
            tag: "FS-224E-POE",
            name: "FortiSwitch 224E-POE",
            desc: "PoE+ on 12 ports, 180 W budget.",
            points: ["24x GE RJ45, 4x GE SFP", "PoE budget 180 W", "56 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 224E-POE", "FS-224E-POE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 224E runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
        description: "PoE+ up to 30 W per port for phones, cameras and access points, with no separate power adapters.",
      },
      {
        icon: fsIcons.zeroTouch,
        title: "Zero-touch deployment",
        description: "Connect the switch to the FortiGate and it is provisioned automatically, which keeps branch roll-outs fast.",
      },
      {
        icon: fsIcons.cloud,
        title: "FortiEdge Cloud option",
        description: "Manage the switch from Fortinet's cloud instead, useful for many small sites without a FortiGate.",
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
    heading: "Where the 224E\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 224E suits offices that want some routing at the access layer and a dedicated management port, in a compact 1RU switch.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "180 W", label: "maximum PoE budget" },
      { value: "56 Gbps", label: "switching capacity", dark: true },
      { value: "83 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 224E\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-224E", "FS-224E-POE"],
      rows: [
        { label: "Ports", values: ["24x GE RJ45, 4x GE SFP", "24x GE RJ45, 4x GE SFP"] },
        { label: "PoE ports", values: ["None", "12 (802.3af/at)"] },
        { label: "PoE budget", values: ["None", "180 W"] },
        { label: "Switching capacity", values: ["56 Gbps", "56 Gbps"] },
        { label: "Forwarding rate", values: ["83 Mpps", "83 Mpps"] },
        { label: "MAC addresses", values: ["16 K", "16 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 230 x 330 mm", "44 x 230 x 330 mm"] },
        { label: "Weight", values: ["2.17 kg", "2.44 kg"] },
        { label: "Power supply", values: ["Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["17.3 W", "223.6 W"] },
        { label: "Operating temperature", values: ["0 to 50°C", "0 to 50°C"] },
        { label: "Noise", values: ["Fanless", "30.6 dBA"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 224E\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 224E for?",
        answer: "It suits office wiring closets that need Layer 3. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 224E version should we choose?",
        answer: "The 224E: data only. Fanless. The 224E-POE: poE+ on 12 ports, 180 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 224E need a FortiGate?",
        answer: "No, but most customers use one. With FortiLink, the FortiGate manages the switch from its own console. It can also be managed with FortiEdge Cloud, or standalone.",
      },
      {
        question: "Which transceivers do the uplinks need?",
        answer: "Fortinet FN-TRAN transceivers that match the uplink speed and the fibre or copper run. We include the right transceivers in the quote.",
      },
      {
        question: "What support does it need?",
        answer: "FortiCare Premium or Elite, for 1 or 3 years, which covers firmware updates, Fortinet technical support and hardware replacement. If you manage it from FortiEdge Cloud, the cloud licence includes FortiCare Premium.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 224E, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 224E in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 124G", text: "Branch access · Up to 780 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124G` },
      { title: "FortiSwitch 148F", text: "Branch access · Up to 740 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-148F` },
      { title: "FortiSwitch 248E", text: "Office access · Up to 740 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-248E` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-224e",
    product: "FortiSwitch 224E",
    heading: "Get a quote\n for the FortiSwitch 224E",
    highlightLast: 4,
    models: ["FortiSwitch 224E", "FortiSwitch 224E-POE"],
  }),
  footNote: fsFootNote,
};
