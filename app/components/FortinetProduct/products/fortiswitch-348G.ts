import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Campus Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-campus-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-campus-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-348G.html
export const fortiswitch348G: LogitechProductData = {
  slug: "fortiswitch-348G",
  seo: {
    title: "FortiSwitch 348G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 348G from GS IT in Dubai: 24x GE, 24x 2.5GE and 4x 10GE SFP+, with up to 1,560 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 348G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port campus switch with 24 multi-gig ports, MACsec and 10GE uplinks. The 348G-FPOE delivers up to 1,560 W of 802.3bt power. The replacement for the 448E.",
  },
  name: "FortiSwitch 348G",
  image: `${IMG}/fortiswitch-300-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 348G"),
    gallery: [{ src: `${IMG}/fortiswitch-300-series.webp`, alt: "FortiSwitch 300 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet multi-gig campus switch",
    heading: "FortiSwitch\n 348G",
    highlightLast: 1,
    description: "A 48-port campus switch with 24 multi-gig ports, MACsec and 10GE uplinks. The 348G-FPOE delivers up to 1,560 W of 802.3bt power. The replacement for the 448E.",
    pills: ["24x 2.5GE + 24x GE", "MACsec"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 300 Series" },
      { label: "Models", value: "348G, 348G-FPOE" },
      { label: "Ports", value: "24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+" },
      { label: "PoE budget", value: "Up to 1,560 W" },
      { label: "Switching", value: "248 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Ports", text: "24x GE and 24x 2.5GE RJ45, 4x 10GE SFP+" },
      { label: "802.3bt", text: "up to 1,560 W on the 348G-FPOE" },
      { label: "MACsec", text: "encrypts traffic on the wire between switches" },
      { label: "Successor", text: "Fortinet's replacement for the 448E" },
    ],
    buttons: fsHeroButtons("FortiSwitch 348G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 348G version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-348G",
            name: "FortiSwitch 348G",
            desc: "Data only.",
            points: ["24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+", "No PoE", "248 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 348G", "FS-348G"),
          },
          {
            tag: "FS-348G-FPOE",
            name: "FortiSwitch 348G-FPOE",
            desc: "802.3bt PoE, up to 1,560 W.",
            points: ["24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+", "PoE budget Up to 1,560 W", "248 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 348G-FPOE", "FS-348G-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 348G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 348G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 348G mixes 1GE ports for desks and phones with 2.5GE ports for access points, so you pay for multi-gig only where it is needed.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "1,560 W", label: "maximum PoE budget" },
      { value: "248 Gbps", label: "switching capacity", dark: true },
      { value: "369 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 348G\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-348G", "FS-348G-FPOE"],
      rows: [
        { label: "Ports", values: ["24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+", "24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "802.3af/at/bt"] },
        { label: "PoE budget", values: ["None", "Up to 1,560 W"] },
        { label: "Switching capacity", values: ["248 Gbps", "248 Gbps"] },
        { label: "Forwarding rate", values: ["369 Mpps", "369 Mpps"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Campus Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 348G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 348G for?",
        answer: "It suits dense campus floors. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 348G replace the FortiSwitch 448E?",
        answer: "Yes. Fortinet lists the 348G as the replacement for the 448E, which has reached end of order. Existing 448E switches stay supported, and we can plan the swap.",
      },
      {
        question: "Which FortiSwitch 348G version should we choose?",
        answer: "The 348G: data only. The 348G-FPOE: 802.3bt PoE, up to 1,560 W. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 348G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 348G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 348G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 248E", text: "Office access · Up to 740 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-248E` },
      { title: "FortiSwitch 324G", text: "Multi-gig campus · Up to 420 W", image: `${IMG}/fortiswitch-300-series.webp`, href: `${FS_STORE}/fortiswitch-324G` },
      { title: "FortiSwitch 624F", text: "High-speed campus · Up to 1,440 W", image: `${IMG}/fortiswitch-600-series.webp`, href: `${FS_STORE}/fortiswitch-624F` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-348g",
    product: "FortiSwitch 348G",
    heading: "Get a quote\n for the FortiSwitch 348G",
    highlightLast: 4,
    models: ["FortiSwitch 348G", "FortiSwitch 348G-FPOE"],
  }),
  footNote: fsFootNote,
};
