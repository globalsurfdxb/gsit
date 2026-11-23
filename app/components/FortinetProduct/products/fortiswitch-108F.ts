import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-108F.html
export const fortiswitch108F: LogitechProductData = {
  slug: "fortiswitch-108F",
  seo: {
    title: "FortiSwitch 108F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 108F switch from GS IT, a Fortinet Authorized Partner in Dubai. 8x GE RJ45, 2x GE SFP, up to 130 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 108F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A fanless 8-port desktop switch for small offices and branch sites, managed from your FortiGate.",
  },
  name: "FortiSwitch 108F",
  image: `${IMG}/fortiswitch-100-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 108F"),
    gallery: [{ src: `${IMG}/fortiswitch-100-series.webp`, alt: "FortiSwitch 100 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet desktop switch",
    heading: "FortiSwitch\n 108F",
    highlightLast: 1,
    description: "A fanless 8-port desktop switch for small offices and branch sites, managed from your FortiGate.",
    pills: ["Fanless", "Desktop"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 100 Series" },
      { label: "Models", value: "108F, 108F-POE, 108F-FPOE" },
      { label: "Ports", value: "8x GE RJ45, 2x GE SFP" },
      { label: "PoE budget", value: "Up to 130 W" },
      { label: "Switching", value: "20 Gbps" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Silent", text: "fanless design for desks and open offices" },
      { label: "Ports", text: "8x GE RJ45 and 2x GE SFP uplinks" },
      { label: "PoE+ options", text: "65 W on the 108F-POE, 130 W on the 108F-FPOE" },
      { label: "Managed centrally", text: "from your FortiGate with FortiLink or from FortiEdge Cloud" },
    ],
    buttons: fsHeroButtons("FortiSwitch 108F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 108F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        models: [
          {
            tag: "FS-108F",
            name: "FortiSwitch 108F",
            desc: "Data only. Can be powered by PoE from another switch.",
            points: ["7x GE RJ45, 1x GE PoE-powered RJ45, 2x GE SFP", "No PoE", "20 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 108F", "FS-108F"),
          },
          {
            tag: "FS-108F-POE",
            name: "FortiSwitch 108F-POE",
            desc: "PoE+ on all 8 ports, 65 W budget.",
            points: ["8x GE RJ45, 2x GE SFP", "PoE budget 65 W", "20 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 108F-POE", "FS-108F-POE"),
          },
          {
            tag: "FS-108F-FPOE",
            name: "FortiSwitch 108F-FPOE",
            desc: "PoE+ on all 8 ports, 130 W budget.",
            points: ["8x GE RJ45, 2x GE SFP", "PoE budget 130 W", "20 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 108F-FPOE", "FS-108F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 108F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 108F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 108F brings managed, secure switching to sites too small for a rack. Plug it into the branch FortiGate and it appears in the same console as your firewall policy.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "130 W", label: "maximum PoE budget" },
      { value: "20 Gbps", label: "switching capacity", dark: true },
      { value: "30 Mpps", label: "forwarding rate" },
      { value: "Desktop", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 108F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-108F", "FS-108F-POE", "FS-108F-FPOE"],
      rows: [
        { label: "Ports", values: ["7x GE RJ45, 1x GE PoE-powered RJ45, 2x GE SFP", "8x GE RJ45, 2x GE SFP", "8x GE RJ45, 2x GE SFP"] },
        { label: "PoE ports", values: ["None", "8 (802.3af/at)", "8 (802.3af/at)"] },
        { label: "PoE budget", values: ["None", "65 W", "130 W"] },
        { label: "Switching capacity", values: ["20 Gbps", "20 Gbps", "20 Gbps"] },
        { label: "Forwarding rate", values: ["30 Mpps", "30 Mpps", "30 Mpps"] },
        { label: "MAC addresses", values: ["8 K", "8 K", "8 K"] },
        { label: "Form factor", values: ["Desktop", "Desktop, rack bracket available", "Desktop, rack bracket available"] },
        { label: "Dimensions (H x D x W)", values: ["30 x 120 x 180 mm", "44 x 209 x 250 mm", "44 x 209 x 250 mm"] },
        { label: "Weight", values: ["0.62 kg", "1.70 kg", "1.84 kg"] },
        { label: "Power supply", values: ["12V DC adapter included, or PoE powered", "Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["6.2 W", "74.4 W", "139.2 W"] },
        { label: "Operating temperature", values: ["0 to 45°C", "0 to 45°C", "0 to 45°C"] },
        { label: "Noise", values: ["Fanless", "Fanless", "Fanless"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 108F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 108F for?",
        answer: "It suits small offices, shops and meeting rooms. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 108F version should we choose?",
        answer: "The 108F: data only. Can be powered by PoE from another switch. The 108F-POE: poE+ on all 8 ports, 65 W budget. The 108F-FPOE: poE+ on all 8 ports, 130 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 108F need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 108F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 108F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 110G", text: "Branch access · 200 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-110G` },
      { title: "FortiSwitch 124F", text: "Branch access · Up to 370 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124F` },
      { title: "FortiSwitch 124G", text: "Branch access · Up to 780 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-108f",
    product: "FortiSwitch 108F",
    heading: "Get a quote\n for the FortiSwitch 108F",
    highlightLast: 4,
    models: ["FortiSwitch 108F", "FortiSwitch 108F-POE", "FortiSwitch 108F-FPOE"],
  }),
  footNote: fsFootNote,
};
