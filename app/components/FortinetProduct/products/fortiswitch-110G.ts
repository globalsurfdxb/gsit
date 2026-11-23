import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FS_IMG as IMG, FS_STORE, FS_DATASHEETS, fsCrumbs, fsBadge, fsHeroButtons, fsQuals, fsIcons, fsModelLink, fsEnquiry, fsFootNote } from "./fortiswitch-shared";

const DATASHEET = {
  text: "FortiSwitch Secure Access Series data sheet (PDF)",
  // Local copy of https://www.fortinet.com/content/dam/fortinet/assets/data-sheets/pdf/fortiswitch-secure-access-series.pdf
  href: `${FS_DATASHEETS}/fortiswitch-secure-access-series.pdf`,
};

// Generated from 03-FortiSwitch/product-pages/fortiswitch-110G.html
export const fortiswitch110G: LogitechProductData = {
  slug: "fortiswitch-110G",
  seo: {
    title: "FortiSwitch 110G Switch in Dubai | Fortinet Partner | GS IT",
    description: "FortiSwitch 110G from GS IT in Dubai: 2x 5GE RJ45, 8x 2.5GE RJ45, 4x 10GE SFP+ and 200 W PoE. Sizing, installation and support.",
    ogTitle: "FortiSwitch 110G Switch in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A fanless desktop switch with 5GE and 2.5GE ports, 802.3bt power and 10GE uplinks, for small sites with fast access points.",
  },
  name: "FortiSwitch 110G",
  image: `${IMG}/fortiswitch-100-series.webp`,
  quals: fsQuals,
  heroData: {
    crumbs: fsCrumbs("FortiSwitch 110G"),
    gallery: [{ src: `${IMG}/fortiswitch-100-series.webp`, alt: "FortiSwitch 100 Series switches" }],
    badge: fsBadge,
    tag: "Fortinet multi-gig desktop switch",
    heading: "FortiSwitch\n 110G",
    highlightLast: 1,
    description: "A fanless desktop switch with 5GE and 2.5GE ports, 802.3bt power and 10GE uplinks, for small sites with fast access points.",
    pills: ["Multi-gig", "Fanless"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Series", value: "FortiSwitch 100 Series" },
      { label: "Models", value: "110G-FPOE" },
      { label: "Ports", value: "2x 5GE RJ45, 8x 2.5GE RJ45, 4x 10GE SFP+" },
      { label: "PoE budget", value: "200 W" },
      { label: "Switching", value: "140 Gbps" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this model",
    about: [
      { label: "Multi-gig", text: "2x 5GE and 8x 2.5GE RJ45 ports" },
      { label: "Power for Wi-Fi 7", text: "802.3bt on both 5GE ports, 200 W total" },
      { label: "10GE uplinks", text: "4x 10GE SFP+" },
      { label: "Silent", text: "fanless desktop design" },
    ],
    buttons: fsHeroButtons("FortiSwitch 110G-FPOE"),
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Model",
    heading: "The\n FortiSwitch 110G",
    highlightLast: 2,
    subhead: "We confirm the fit during a short network review.",
    groups: [
      {
        label: "Model",
        columns: 2,
        models: [
          {
            tag: "FS-110G-FPOE",
            name: "FortiSwitch 110G-FPOE",
            desc: "PoE on all 10 copper ports, 200 W budget.",
            points: ["2x 5GE RJ45, 8x 2.5GE RJ45, 4x 10GE SFP+", "PoE budget 200 W", "140 Gbps switching"],
            enquireLabel: "Enquire about this model",
            href: fsModelLink("FortiSwitch 110G-FPOE", "FS-110G-FPOE"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Switching that works\n with your security",
    highlightLast: 3,
    subhead: "The 110G runs FortiSwitchOS and joins your FortiGate through FortiLink, so the switch is part of your security policy, not separate from it.",
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
    heading: "Where the 110G\n fits best",
    highlightLast: 2,
    paragraphs: [
      "The 110G gives a small office the port speeds and power that new access points expect, without a noisy rack switch. Its two 5GE ports deliver 802.3bt power for the fastest Wi-Fi 7 access points.",
      "GS IT sizes the right version and support, maps your ports and VLANs, then installs and supports the switch after go-live.",
    ],
    facts: [
      { value: "200 W", label: "maximum PoE budget" },
      { value: "140 Gbps", label: "switching capacity", dark: true },
      { value: "208 Mpps", label: "forwarding rate" },
      { value: "Desktop", label: "form factor" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSwitch 110G\n technical specifications",
    highlightLast: 2,
    subhead: "Key hardware specifications. Need a comparison with another model? Ask us.",
    table: {
      columns: ["Specification", "FS-110G-FPOE"],
      rows: [
        { label: "Ports", values: ["2x 5GE RJ45, 8x 2.5GE RJ45, 4x 10GE SFP+"] },
        { label: "PoE ports", values: ["2x 802.3bt (5GE), 8x 802.3af/at (2.5GE)"] },
        { label: "PoE budget", values: ["200 W"] },
        { label: "Switching capacity", values: ["140 Gbps"] },
        { label: "Forwarding rate", values: ["208 Mpps"] },
        { label: "MAC addresses", values: ["32 K"] },
        { label: "Form factor", values: ["Desktop"] },
        { label: "Dimensions (H x D x W)", values: ["44 x 270 x 228 mm"] },
        { label: "Weight", values: ["1.84 kg"] },
        { label: "Power supply", values: ["External 54V DC adapter included"] },
        { label: "Max power draw", values: ["250 W"] },
        { label: "Operating temperature", values: ["0 to 45°C"] },
        { label: "Noise", values: ["Fanless"] },
      ],
    },
    datasheet: DATASHEET,
    source: "Source: FortiSwitch Secure Access Series data sheet. A dash means the figure is not published for that version.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSwitch 110G\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the FortiSwitch 110G for?",
        answer: "It suits small offices with Wi-Fi 6E or Wi-Fi 7. We confirm the model after reviewing your device count, power needs and uplinks.",
      },
      {
        question: "Does the FortiSwitch 110G need a FortiGate?",
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
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure the FortiSwitch 110G, migrate your VLANs from the old switches, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n nearby FortiSwitch models",
    highlightLast: 3,
    subhead: "The models either side of the 110G in Fortinet's range.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiSwitch 108F", text: "Branch access · Up to 130 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-108F` },
      { title: "FortiSwitch 124F", text: "Branch access · Up to 370 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124F` },
      { title: "FortiSwitch 124G", text: "Branch access · Up to 780 W", image: `${IMG}/fortiswitch-100-series.webp`, href: `${FS_STORE}/fortiswitch-124G` },
    ],
  },
  enquiryTabs: fsEnquiry({
    page: "fortiswitch-110g",
    product: "FortiSwitch 110G",
    heading: "Get a quote\n for the FortiSwitch 110G",
    highlightLast: 4,
    models: ["FortiSwitch 110G-FPOE"],
  }),
  footNote: fsFootNote,
};
