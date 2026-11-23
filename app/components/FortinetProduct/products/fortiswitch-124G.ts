import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-124G.html
export const fortiswitch124G: LogitechProductData = {
  slug: "fortiswitch-124G",
  seo: {
    title: "FortiSwitch 124G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 124G switch from GS IT, a Fortinet Authorized Partner in Dubai. 24x 2.5GE RJ45, 6x 10GE SFP+, up to 780 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 124G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A 24-port 2.5GE branch switch with six 10GE uplinks. The FPOE version powers eight ports at 90 W.",
  },
  name: "FortiSwitch 124G",
  image: `${IMG}/fortiswitch-100-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 124G"),
    gallery: [{ src: `${IMG}/fortiswitch-100-series.webp`, alt: "FortiSwitch 100 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet multi-gig branch switch",
    heading: "FortiSwitch\n 124G",
    highlightLast: 1,
    description: "A 24-port 2.5GE branch switch with six 10GE uplinks. The FPOE version powers eight ports at 90 W.",
    pills: ["2.5GE multi-gig", "1RU rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 100 Series" },
      { label: "Models", value: "124G, 124G-FPOE" },
      { label: "Ports", value: "24x 2.5GE RJ45, 6x 10GE SFP+" },
      { label: "PoE budget", value: "Up to 780 W" },
      { label: "Switching", value: "240 Gbps" },
      { label: "Form factor", value: "1RU rack" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Multi-gig", text: "24x 2.5GE RJ45 ports" },
      { label: "Uplinks", text: "6x 10GE SFP+" },
      { label: "PoE", text: "8x 802.3bt and 16x PoE+ on the 124G-FPOE, 780 W" },
      { label: "Quiet", text: "the data-only 124G is fanless" },
    ],
    buttons: fsHeroButtons("FortiSwitch 124G"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch 124G version",
    highlightLast: 3,
    subhead: "The versions share the same ports and switching. They differ in how many ports deliver power, and how much.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            tag: "FS-124G",
            name: "FortiSwitch 124G",
            desc: "Data only. Fanless.",
            points: ["24x 2.5GE RJ45, 6x 10GE SFP+", "No PoE", "240 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 124G", "FS-124G"),
          },
          {
            tag: "FS-124G-FPOE",
            name: "FortiSwitch 124G-FPOE",
            desc: "8 ports at 90 W (802.3bt), 16 at 30 W, 780 W budget.",
            points: ["24x 2.5GE RJ45, 6x 10GE SFP+", "PoE budget 780 W", "240 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 124G-FPOE", "FS-124G-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 124G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 124G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 124G brings 2.5GE to every port of a branch switch. It suits sites where new access points and workstations need more than 1 Gbps, at a branch price point.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "780 W", label: "maximum PoE budget" },
      { value: "240 Gbps", label: "switching capacity", dark: true },
      { value: "355 Mpps", label: "forwarding rate" },
      { value: "1RU rack", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 124G\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-124G", "FS-124G-FPOE"],
      rows: [
        { label: "Ports", values: ["24x 2.5GE RJ45, 6x 10GE SFP+", "24x 2.5GE RJ45, 6x 10GE SFP+"] },
        { label: "PoE ports", values: ["None", "8x 802.3bt, 16x 802.3af/at"] },
        { label: "PoE budget", values: ["None", "780 W"] },
        { label: "Switching capacity", values: ["240 Gbps", "240 Gbps"] },
        { label: "Forwarding rate", values: ["355 Mpps", "355 Mpps"] },
        { label: "MAC addresses", values: ["32 K", "32 K"] },
        { label: "Form factor", values: ["1RU rack", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 310 x 440 mm", "44 x 310 x 440 mm"] },
        { label: "Weight", values: ["3.97 kg", "4.86 kg"] },
        { label: "Power supply", values: ["Internal AC", "Internal AC"] },
        { label: "Max power draw", values: ["43.5 W", "880 W"] },
        { label: "Operating temperature", values: ["-5 to 45°C", "-5 to 45°C"] },
        { label: "Noise", values: ["Fanless", "48.2 dBA"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 124G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 124G for?",
        answer: "It suits branches upgrading to Wi-Fi 6E or Wi-Fi 7. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch 124G version should we choose?",
        answer: "The 124G: data only. Fanless. The 124G-FPOE: 8 ports at 90 W (802.3bt), 16 at 30 W, 780 W budget. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch 124G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 124G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 124G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 110G", text: "Branch access · 200 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-110G` },
      { title: "FortiSwitch 124F", text: "Branch access · Up to 370 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124F` },
      { title: "FortiSwitch 148F", text: "Branch access · Up to 740 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-148F` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-124g",
    product: "FortiSwitch 124G",
    heading: "Get a quote\n for the FortiSwitch 124G",
    highlightLast: 4,
    models: ["FortiSwitch 124G", "FortiSwitch 124G-FPOE"],
  }),
  footNote: fsFootNote,
};
