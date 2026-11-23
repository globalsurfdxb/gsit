import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-124F.html
export const fortiswitch124F: LogitechProductData = {
  slug: "fortiswitch-124F",
  seo: {
    title: "FortiSwitch 124F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 124F switch from GS IT, a Fortinet Authorized Partner in Dubai. 24x GE RJ45, 4x 10GE SFP+, up to 370 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 124F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port branch switch with 10GE uplinks, managed from your FortiGate. Data-only, half-PoE and full-PoE versions.",
  },
  name: "FortiSwitch 124F",
  image: `${IMG}/fortiswitch-100-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 124F"),
    gallery: [{ src: `${IMG}/fortiswitch-100-series.webp`, alt: "FortiSwitch 100 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet branch switch",
    heading: "FortiSwitch\n 124F",
    highlightLast: 1,
    description: "A 24-port branch switch with 10GE uplinks, managed from your FortiGate. Data-only, half-PoE and full-PoE versions.",
    pills: ["10GE uplinks", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 100 Series" },
      { label: "Models", value: "124F, 124F-POE, 124F-FPOE" },
      { label: "Ports", value: "24x GE RJ45, 4x 10GE SFP+" },
      { label: "PoE budget", value: "Up to 370 W" },
      { label: "Switching", value: "128 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Ports", text: "24x GE RJ45 and 4x 10GE SFP+ uplinks" },
      { label: "PoE+ options", text: "185 W on 12 ports, or 370 W on all 24" },
      { label: "Quiet", text: "the data-only 124F is fanless" },
      { label: "Managed centrally", text: "from your FortiGate or FortiEdge Cloud" },
    ],
    buttons: fsHeroButtons("FortiSwitch 124F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 124F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        models: [
          {
            tag: "FS-124F",
            name: "FortiSwitch 124F",
            desc: "Data only. Fanless.",
            points: ["24x GE RJ45, 4x 10GE SFP+", "No PoE", "128 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 124F", "FS-124F"),
          },
          {
            tag: "FS-124F-POE",
            name: "FortiSwitch 124F-POE",
            desc: "PoE+ on 12 ports, 185 W budget.",
            points: ["24x GE RJ45, 4x 10GE SFP+", "PoE budget 185 W", "128 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 124F-POE", "FS-124F-POE"),
          },
          {
            tag: "FS-124F-FPOE",
            name: "FortiSwitch 124F-FPOE",
            desc: "PoE+ on all 24 ports, 370 W budget.",
            points: ["24x GE RJ45, 4x 10GE SFP+", "PoE budget 370 W", "128 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 124F-FPOE", "FS-124F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 124F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 124F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 124F is a common choice for the branch wiring closet. Its 10GE uplinks keep the link to the FortiGate from becoming the bottleneck as more devices connect.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "370 W", label: "maximum PoE budget" },
      { value: "128 Gbps", label: "switching capacity", dark: true },
      { value: "190 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 124F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-124F", "FS-124F-POE", "FS-124F-FPOE"],
      rows: [
        { label: "Ports", values: ["24x GE RJ45, 4x 10GE SFP+", "24x GE RJ45, 4x 10GE SFP+", "24x GE RJ45, 4x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "12 (802.3af/at)", "24 (802.3af/at)"] },
        { label: "PoE budget", values: ["None", "185 W", "370 W"] },
        { label: "Switching capacity", values: ["128 Gbps", "128 Gbps", "128 Gbps"] },
        { label: "Forwarding rate", values: ["190 Mpps", "190 Mpps", "190 Mpps"] },
        { label: "MAC addresses", values: ["32 K", "32 K", "32 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 230 x 330 mm", "44 x 260 x 440 mm", "44 x 260 x 440 mm"] },
        { label: "Weight", values: ["2.03 kg", "3.56 kg", "3.82 kg"] },
        { label: "Power supply", values: ["Internal AC", "Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["26.3 W", "237.4 W", "451.3 W"] },
        { label: "Operating temperature", values: ["0 to 45°C", "0 to 45°C", "0 to 45°C"] },
        { label: "Noise", values: ["Fanless", "46.3 dBA", "45.8 dBA"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 124F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 124F for?",
        answer: "It suits branch offices of up to about 24 devices per switch. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 124F version should we choose?",
        answer: "The 124F: data only. Fanless. The 124F-POE: poE+ on 12 ports, 185 W budget. The 124F-FPOE: poE+ on all 24 ports, 370 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 124F need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 124F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 124F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 108F", text: "Branch access · Up to 130 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-108F` },
      { title: "FortiSwitch 110G", text: "Branch access · 200 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-110G` },
      { title: "FortiSwitch 124G", text: "Branch access · Up to 780 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-124f",
    product: "FortiSwitch 124F",
    heading: "Get a quote\n for the FortiSwitch 124F",
    highlightLast: 4,
    models: ["FortiSwitch 124F", "FortiSwitch 124F-POE", "FortiSwitch 124F-FPOE"],
  }),
  footNote: fsFootNote,
};
