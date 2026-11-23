import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

// Generated from 03-FortiSwitch/product-pages/fortiswitch-rugged.html
export const fortiswitchRugged: LogitechProductData = {
  slug: "fortiswitch-rugged",
  seo: {
    title: "FortiSwitch Rugged Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch Rugged switch from GS IT, a Fortinet Authorized Partner in Dubai. 6 to 30 ports, GE to 40GE, up to 421 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch Rugged Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Fanless, hardened switches for OT and outdoor sites, from 8-port DIN-rail units to a 30-port rack switch, all managed with FortiLink.",
  },
  name: "FortiSwitch Rugged",
  image: `${IMG}/fortiswitch-rugged-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch Rugged"),
    gallery: [{ src: `${IMG}/fortiswitch-rugged-series.webp`, alt: "FortiSwitch Rugged switches" }],
    badge: fsBadge,
    tag: "Fortinet industrial switch",
    heading: "FortiSwitch\n Rugged",
    highlightLast: 1,
    description: "Fanless, hardened switches for OT and outdoor sites, from 8-port DIN-rail units to a 30-port rack switch, all managed with FortiLink.",
    pills: ["-40 to 75°C", "DIN rail or rack"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch Rugged" },
      { label: "Models", value: "FSR-108F, FSR-112F-POE, FSR-216F-POE, FSR-424F-POE" },
      { label: "Ports", value: "6 to 30 ports, GE to 40GE" },
      { label: "PoE budget", value: "Up to 421 W" },
      { label: "Switching", value: "Up to 360 Gbps" },
      { label: "Form factor", value: "1RU rack or DIN rail" },
    ],
    aboutTitle: "About this family",
    about: [
      { label: "Harsh conditions", text: "rated from -40°C, IP40 enclosures" },
      { label: "PoE", text: "up to 802.3bt on the 112F-POE and 216F-POE" },
      { label: "Mounting", text: "DIN rail, or rack on the 424F-POE" },
      { label: "Same management", text: "FortiLink from your FortiGate, like any FortiSwitch" },
    ],
    buttons: fsHeroButtons("FortiSwitch Rugged 108F"),
  },
  modelsData: {
    tag: "Models",
    heading: "Choose your\n FortiSwitch Rugged version",
    highlightLast: 3,
    subhead: "Pick by port count, PoE and mounting.",
    groups: [
      {
        label: "Models",
        models: [
          {
            tag: "FSR-108F",
            name: "FortiSwitch Rugged 108F",
            desc: "8 ports, no PoE, DIN rail.",
            points: ["6x GE RJ45, 2x GE SFP", "No PoE", "16 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch Rugged 108F", "FSR-108F"),
          },
          {
            tag: "FSR-112F-POE",
            name: "FortiSwitch Rugged 112F-POE",
            desc: "8 PoE ports up to 90 W, DIN rail.",
            points: ["8x GE RJ45, 4x GE SFP", "PoE budget 240 W", "24 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch Rugged 112F-POE", "FSR-112F-POE"),
          },
          {
            tag: "FSR-216F-POE",
            name: "FortiSwitch Rugged 216F-POE",
            desc: "16 PoE ports up to 90 W, 10GE uplinks, DIN rail.",
            points: ["16x GE RJ45, 4x 10GE SFP+", "PoE budget 360 W", "112 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch Rugged 216F-POE", "FSR-216F-POE"),
          },
          {
            tag: "FSR-424F-POE",
            name: "FortiSwitch Rugged 424F-POE",
            desc: "30 ports with 2.5GE, 10GE and 40GE, rack mount.",
            points: ["12x 2.5GE RJ45, 12x 2.5GE SFP, 4x 10GE SFP+, 2x 40GE QSFP+", "PoE budget 421 W", "360 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch Rugged 424F-POE", "FSR-424F-POE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The Rugged runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
        icon: fsIcons.rugged,
        title: "Hardened for the field",
        description: "Fanless, IP40-rated enclosures rated from -40°C for plants, substations and outdoor cabinets.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where the Rugged\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiSwitch Rugged brings the same FortiLink management and network access control to plants, substations and outdoor cabinets, so OT devices sit inside your security policy.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "421 W", label: "maximum PoE budget" },
      { value: "360 Gbps", label: "switching capacity", dark: true },
      { value: "4", label: "models to choose from" },
      { value: "1RU rack or DIN rail", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch Rugged\n technical specifications",
    highlightLast: 2,
    subhead: "Every version side by side. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FSR-108F", "FSR-112F-POE", "FSR-216F-POE", "FSR-424F-POE"],
      rows: [
        { label: "Ports", values: ["6x GE RJ45, 2x GE SFP", "8x GE RJ45, 4x GE SFP", "16x GE RJ45, 4x 10GE SFP+", "12x 2.5GE RJ45, 12x 2.5GE SFP, 4x 10GE SFP+, 2x 40GE QSFP+"] },
        { label: "PoE ports", values: ["None", "8 (802.3af/at/bt)", "16 (802.3af/at/bt)", "12 (802.3af/at, UPOE 60 W)"] },
        { label: "PoE budget", values: ["None", "240 W", "360 W", "421 W"] },
        { label: "Switching capacity", values: ["16 Gbps", "24 Gbps", "112 Gbps", "360 Gbps"] },
        { label: "Form factor", values: ["DIN rail", "DIN rail", "DIN rail", "1RU rack"] },
        { label: "Dimensions (H x D x W)", values: ["-", "-", "180 x 170 x 116 mm", "44 x 410 x 440 mm"] },
        { label: "Weight", values: ["-", "-", "3.0 kg", "6.29 kg"] },
        { label: "Power supply", values: ["Dual DC inputs", "Dual DC inputs", "Redundant DC inputs", "Redundant DC inputs"] },
        { label: "Max power draw", values: ["17 W", "264 W with PoE", "-", "-"] },
        { label: "Operating temperature", values: ["-40 to 75°C", "-40 to 75°C", "-40 to 75°C", "-40 to 70°C"] },
        { label: "Ingress rating", values: ["IP40", "IP40", "IP40", "IP40"] },
      ],
    },
    source: "Source: FortiSwitch Rugged Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch Rugged\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch Rugged for?",
        answer: "It suits industrial sites, utilities and outdoor cabinets. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Which FortiSwitch Rugged version should we choose?",
        answer: "The 108F: 8 ports, no PoE, DIN rail. The 112F-POE: 8 PoE ports up to 90 W, DIN rail. The 216F-POE: 16 PoE ports up to 90 W, 10GE uplinks, DIN rail. The 424F-POE: 30 ports with 2.5GE, 10GE and 40GE, rack mount. We match the version to the devices you need to power.",
      },
      {
        question: "Does the FortiSwitch Rugged need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch Rugged, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the Rugged in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 1048G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-1000-series.webp`, href: `${FS_STORE}/fortiswitch-1048G` },
      { title: "FortiSwitch 2048F", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-2000-3000-series.webp`, href: `${FS_STORE}/fortiswitch-2048F` },
      { title: "FortiSwitch 3032G", text: "Data centre and core · Data only", image: `${IMG}/fortiswitch-2000-3000-series.webp`, href: `${FS_STORE}/fortiswitch-3032G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-rugged",
    product: "FortiSwitch Rugged",
    heading: "Get a quote\n for the FortiSwitch Rugged",
    highlightLast: 4,
    models: ["FortiSwitch Rugged 108F", "FortiSwitch Rugged 112F-POE", "FortiSwitch Rugged 216F-POE", "FortiSwitch Rugged 424F-POE"],
  }),
  footNote: fsFootNote,
};
