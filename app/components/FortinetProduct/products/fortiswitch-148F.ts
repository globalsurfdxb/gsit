import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-148F.html
export const fortiswitch148F: LogitechProductData = {
  slug: "fortiswitch-148F",
  seo: {
    title: "FortiSwitch 148F Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 148F switch from GS IT, a Fortinet Authorized Partner in Dubai. 48x GE RJ45, 4x 10GE SFP+, up to 740 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 148F Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 48-port branch switch with 10GE uplinks. The 148F-FPOE powers all 48 ports from a 740 W budget.",
  },
  name: "FortiSwitch 148F",
  image: `${IMG}/fortiswitch-100-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 148F"),
    gallery: [{ src: `${IMG}/fortiswitch-100-series.webp`, alt: "FortiSwitch 100 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet branch switch",
    heading: "FortiSwitch\n 148F",
    highlightLast: 1,
    description: "A 48-port branch switch with 10GE uplinks. The 148F-FPOE powers all 48 ports from a 740 W budget.",
    pills: ["48 ports", "10GE uplinks"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 100 Series" },
      { label: "Models", value: "148F, 148F-POE, 148F-FPOE" },
      { label: "Ports", value: "48x GE RJ45, 4x 10GE SFP+" },
      { label: "PoE budget", value: "Up to 740 W" },
      { label: "Switching", value: "176 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Ports", text: "48x GE RJ45 and 4x 10GE SFP+ uplinks" },
      { label: "PoE+ options", text: "370 W on 24 ports, or 740 W on all 48" },
      { label: "Density", text: "48 ports in 1RU" },
      { label: "Managed centrally", text: "from your FortiGate or FortiEdge Cloud" },
    ],
    buttons: fsHeroButtons("FortiSwitch 148F"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 148F version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        models: [
          {
            tag: "FS-148F",
            name: "FortiSwitch 148F",
            desc: "Data only.",
            points: ["48x GE RJ45, 4x 10GE SFP+", "No PoE", "176 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 148F", "FS-148F"),
          },
          {
            tag: "FS-148F-POE",
            name: "FortiSwitch 148F-POE",
            desc: "PoE+ on 24 ports, 370 W budget.",
            points: ["48x GE RJ45, 4x 10GE SFP+", "PoE budget 370 W", "176 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 148F-POE", "FS-148F-POE"),
          },
          {
            tag: "FS-148F-FPOE",
            name: "FortiSwitch 148F-FPOE",
            desc: "PoE+ on all 48 ports, 740 W budget.",
            points: ["48x GE RJ45, 4x 10GE SFP+", "PoE budget 740 W", "176 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 148F-FPOE", "FS-148F-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 148F runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 148F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 148F covers a full office floor of phones, cameras and access points from one rack unit. Choose the 148F-FPOE when every port needs to power a device.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "740 W", label: "maximum PoE budget" },
      { value: "176 Gbps", label: "switching capacity", dark: true },
      { value: "260 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 148F\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-148F", "FS-148F-POE", "FS-148F-FPOE"],
      rows: [
        { label: "Ports", values: ["48x GE RJ45, 4x 10GE SFP+", "48x GE RJ45, 4x 10GE SFP+", "48x GE RJ45, 4x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "24 (802.3af/at)", "48 (802.3af/at)"] },
        { label: "PoE budget", values: ["None", "370 W", "740 W"] },
        { label: "Switching capacity", values: ["176 Gbps", "176 Gbps", "176 Gbps"] },
        { label: "Forwarding rate", values: ["260 Mpps", "260 Mpps", "260 Mpps"] },
        { label: "MAC addresses", values: ["32 K", "32 K", "32 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 260 x 440 mm", "44 x 310 x 440 mm", "44 x 310 x 440 mm"] },
        { label: "Weight", values: ["3.46 kg", "4.68 kg", "4.68 kg"] },
        { label: "Power supply", values: ["Internal AC", "Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["57 W", "476.3 W", "895.7 W"] },
        { label: "Operating temperature", values: ["0 to 45°C", "0 to 45°C", "0 to 45°C"] },
        { label: "Noise", values: ["42.8 dBA", "46.9 dBA", "46.5 dBA"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 148F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 148F for?",
        answer: "It suits larger branches and office floors. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 148F version should we choose?",
        answer: "The 148F: data only. The 148F-POE: poE+ on 24 ports, 370 W budget. The 148F-FPOE: poE+ on all 48 ports, 740 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 148F need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 148F, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 148F in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 124F", text: "Branch access · Up to 370 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124F` },
      { title: "FortiSwitch 124G", text: "Branch access · Up to 780 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124G` },
      { title: "FortiSwitch 224E", text: "Office access · Up to 180 W", image: `${IMG}/fortiswitch-200-series.webp`, href: `${FS_STORE}/fortiswitch-224E` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-148f",
    product: "FortiSwitch 148F",
    heading: "Get a quote\n for the FortiSwitch 148F",
    highlightLast: 4,
    models: ["FortiSwitch 148F", "FortiSwitch 148F-POE", "FortiSwitch 148F-FPOE"],
  }),
  footNote: fsFootNote,
};
