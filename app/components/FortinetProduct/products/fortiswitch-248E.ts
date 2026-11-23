import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-248E.html
export const fortiswitch248E: LogitechProductData = {
  slug: "fortiswitch-248E",
  seo: {
    title: "FortiSwitch 248E Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 248E switch from GS IT, a Fortinet Authorized Partner in Dubai. 48x GE RJ45, 4x GE SFP, up to 740 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 248E Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port Layer 2 and 3 PoE+ office switch, with 370 W or 740 W of power.",
  },
  name: "FortiSwitch 248E",
  image: `${IMG}/fortiswitch-200-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 248E"),
    gallery: [{ src: `${IMG}/fortiswitch-200-series.webp`, alt: "FortiSwitch 200 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet office switch",
    heading: "FortiSwitch\n 248E",
    highlightLast: 1,
    description: "A 48-port Layer 2 and 3 PoE+ office switch, with 370 W or 740 W of power.",
    pills: ["Layer 2/3", "48 ports"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 200 Series" },
      { label: "Models", value: "248E-POE, 248E-FPOE" },
      { label: "Ports", value: "48x GE RJ45, 4x GE SFP" },
      { label: "PoE budget", value: "Up to 740 W" },
      { label: "Switching", value: "104 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Layer 3", text: "static routing on the switch itself" },
      { label: "Ports", text: "48x GE RJ45 and 4x GE SFP" },
      { label: "PoE+", text: "24 ports at 370 W, or all 48 at 740 W" },
      { label: "Managed centrally", text: "from your FortiGate or FortiEdge Cloud" },
    ],
    buttons: fsHeroButtons("FortiSwitch 248E-POE"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 248E version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-248E-POE",
            name: "FortiSwitch 248E-POE",
            desc: "PoE+ on 24 ports, 370 W budget.",
            points: ["48x GE RJ45, 4x GE SFP", "PoE budget 370 W", "104 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 248E-POE", "FS-248E-POE"),
          },
          {
            tag: "FS-248E-FPOE",
            name: "FortiSwitch 248E-FPOE",
            desc: "PoE+ on all 48 ports, 740 W budget.",
            points: ["48x GE RJ45, 4x GE SFP", "PoE budget 740 W", "104 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 248E-FPOE", "FS-248E-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 248E runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 248E\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 248E powers a full floor of phones, cameras and access points from one switch, with routing at the access layer.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "740 W", label: "maximum PoE budget" },
      { value: "104 Gbps", label: "switching capacity", dark: true },
      { value: "155 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 248E\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-248E-POE", "FS-248E-FPOE"],
      rows: [
        { label: "Ports", values: ["48x GE RJ45, 4x GE SFP", "48x GE RJ45, 4x GE SFP"] },
        { label: "PoE ports", values: ["24 (802.3af/at)", "48 (802.3af/at)"] },
        { label: "PoE budget", values: ["370 W", "740 W"] },
        { label: "Switching capacity", values: ["104 Gbps", "104 Gbps"] },
        { label: "Forwarding rate", values: ["155 Mpps", "155 Mpps"] },
        { label: "MAC addresses", values: ["16 K", "16 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 410 x 440 mm", "44 x 410 x 440 mm"] },
        { label: "Weight", values: ["5.5 kg", "6.1 kg"] },
        { label: "Power supply", values: ["Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["466.5 W", "855 W"] },
        { label: "Operating temperature", values: ["0 to 50°C", "0 to 50°C"] },
        { label: "Noise", values: ["34.2 dBA", "44.7 dBA"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 248E\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 248E for?",
        answer: "It suits office floors with many powered devices. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 248E version should we choose?",
        answer: "The 248E-POE: poE+ on 24 ports, 370 W budget. The 248E-FPOE: poE+ on all 48 ports, 740 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 248E need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 248E, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 248E in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 148F", text: "Branch access · Up to 740 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-148F` },
      { title: "FortiSwitch 224E", text: "Office access · Up to 180 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-224E` },
      { title: "FortiSwitch 324G", text: "Multi-gig campus · Up to 420 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-324G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-248e",
    product: "FortiSwitch 248E",
    heading: "Get a quote\n for the FortiSwitch 248E",
    highlightLast: 4,
    models: ["FortiSwitch 248E-POE", "FortiSwitch 248E-FPOE"],
  }),
  footNote: fsFootNote,
};
