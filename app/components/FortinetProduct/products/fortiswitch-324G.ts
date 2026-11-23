import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Campus Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-campus-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-campus-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-324G.html
export const fortiswitch324G: LogitechProductData = {
  slug: "fortiswitch-324G",
  seo: {
    title: "FortiSwitch 324G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 324G switch from GS IT, a Fortinet Authorized Partner in Dubai. 24x 2.5GE RJ45, 4x 10GE SFP+, up to 420 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 324G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port 2.5GE campus switch with MACsec and 10GE uplinks. The 324G-FPOE powers every port at up to 90 W. The replacement for the 424E.",
  },
  name: "FortiSwitch 324G",
  image: `${IMG}/fortiswitch-300-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 324G"),
    gallery: [{ src: `${IMG}/fortiswitch-300-series.webp`, alt: "FortiSwitch 300 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet multi-gig campus switch",
    heading: "FortiSwitch\n 324G",
    highlightLast: 1,
    description: "A 24-port 2.5GE campus switch with MACsec and 10GE uplinks. The 324G-FPOE powers every port at up to 90 W. The replacement for the 424E.",
    pills: ["2.5GE multi-gig", "MACsec"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 300 Series" },
      { label: "Models", value: "324G, 324G-FPOE" },
      { label: "Ports", value: "24x 2.5GE RJ45, 4x 10GE SFP+" },
      { label: "PoE budget", value: "Up to 420 W" },
      { label: "Switching", value: "200 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Multi-gig", text: "24x 2.5GE RJ45 ports" },
      { label: "802.3bt", text: "all 24 ports on the 324G-FPOE, 420 W total" },
      { label: "MACsec", text: "encrypts traffic on the wire between switches" },
      { label: "Successor", text: "Fortinet's replacement for the 424E" },
    ],
    buttons: fsHeroButtons("FortiSwitch 324G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 324G version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-324G",
            name: "FortiSwitch 324G",
            desc: "Data only.",
            points: ["24x 2.5GE RJ45, 4x 10GE SFP+", "No PoE", "200 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 324G", "FS-324G"),
          },
          {
            tag: "FS-324G-FPOE",
            name: "FortiSwitch 324G-FPOE",
            desc: "802.3bt on all 24 ports, 420 W budget.",
            points: ["24x 2.5GE RJ45, 4x 10GE SFP+", "PoE budget 420 W", "200 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 324G-FPOE", "FS-324G-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 324G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 324G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 324G is Fortinet's current 24-port campus access switch. It replaces the 400 Series with 2.5GE ports, link encryption and redundant power supplies.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "420 W", label: "maximum PoE budget" },
      { value: "200 Gbps", label: "switching capacity", dark: true },
      { value: "297 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 324G\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-324G", "FS-324G-FPOE"],
      rows: [
        { label: "Ports", values: ["24x 2.5GE RJ45, 4x 10GE SFP+", "24x 2.5GE RJ45, 4x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "24 (802.3af/at/bt type 4)"] },
        { label: "PoE budget", values: ["None", "420 W"] },
        { label: "Switching capacity", values: ["200 Gbps", "200 Gbps"] },
        { label: "Forwarding rate", values: ["297 Mpps", "297 Mpps"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Power supply", values: ["Redundant AC", "Redundant AC"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Campus Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 324G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 324G for?",
        answer: "It suits campus floors with Wi-Fi 6E and Wi-Fi 7. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 324G replace the FortiSwitch 424E?",
        answer: "Yes. Fortinet lists the 324G as the replacement for the 424E, which has reached end of order. Existing 424E switches stay supported, and we can plan the swap.",
      },
      {
        question: "Which FortiSwitch 324G version should we choose?",
        answer: "The 324G: data only. The 324G-FPOE: 802.3bt on all 24 ports, 420 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 324G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 324G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 324G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 224E", text: "Office access · Up to 180 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-224E` },
      { title: "FortiSwitch 248E", text: "Office access · Up to 740 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-248E` },
      { title: "FortiSwitch 348G", text: "Multi-gig campus · Up to 1,560 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-348G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-324g",
    product: "FortiSwitch 324G",
    heading: "Get a quote\n for the FortiSwitch 324G",
    highlightLast: 4,
    models: ["FortiSwitch 324G", "FortiSwitch 324G-FPOE"],
  }),
  footNote: fsFootNote,
};
