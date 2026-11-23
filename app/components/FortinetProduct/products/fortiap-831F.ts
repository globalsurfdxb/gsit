import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FAP_IMG as IMG, FAP_STORE, fapCrumbs, fapBadge, fapHeroButtons, fapQuals, fapIcons, fapOptionLink, fapEnquiry, fapFootNote } from "./fortiap-shared";

// Generated from 04-FortiAP-Wireless/product-pages/fortiap-831F.html
export const fortiap831F: LogitechProductData = {
  slug: "fortiap-831F",
  seo: {
    title: "FortiAP 831F in Dubai | Fortinet Partner | GS IT",
    description: "FortiAP 831F from GS IT in Dubai: very high-density Wi-Fi 6 with 8x8 on 5 GHz, for lecture halls and arenas. Deployment and support.",
    ogTitle: "FortiAP 831F in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Very high-density Wi-Fi 6 with 8x8 on 5 GHz, for lecture halls and arenas. Managed from your FortiGate, FortiEdge Cloud.",
  },
  name: "FortiAP 831F",
  image: `${IMG}/fortiap-831f.webp`,
  quals: fapQuals,
  heroData: {
    crumbs: fapCrumbs("FortiAP 831F"),
    gallery: [{ src: `${IMG}/fortiap-831f.webp`, alt: "FortiAP 831F, Fortinet wi-fi 6 indoor access point" }],
    badge: fapBadge,
    tag: "Wi-Fi 6 indoor access point",
    heading: "FortiAP\n 831F",
    highlightLast: 1,
    description: "Very high-density Wi-Fi 6 with 8x8 on 5 GHz, for lecture halls and arenas. Managed from your FortiGate, FortiEdge Cloud.",
    pills: ["Wi-Fi 6", "8x8 MIMO", "802.3at or 802.3bt PoE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Model", value: "FAP-831F" },
      { label: "Wi-Fi standard", value: "Wi-Fi 6" },
      { label: "Form factor", value: "Indoor ceiling" },
      { label: "Radios", value: "3, 8x8 on 5 GHz" },
      { label: "Max data rate", value: "1.15 Gbps + 4.8 Gbps" },
      { label: "Ethernet", value: "1x 5GE multi-gig, 1x GE" },
      { label: "PoE", value: "802.3at or 802.3bt" },
      { label: "Managed from", value: "FortiGate, FortiEdge Cloud" },
    ],
    aboutTitle: "About FortiAP 831F",
    about: [
      { label: "Radios", text: "3, 8x8 on 5 GHz" },
      { label: "Speed", text: "1.15 Gbps + 4.8 Gbps" },
      { label: "Uplink", text: "1x 5GE multi-gig, 1x GE" },
      { label: "Power", text: "802.3at or 802.3bt PoE" },
    ],
    buttons: fapHeroButtons("FortiAP 831F"),
  },
  modelsData: {
    tag: "What you order",
    heading: "How to buy\n FortiAP 831F",
    highlightLast: 2,
    subhead: "Each access point is ordered with FortiCare support. Add FortiGuard or cloud licences only if you need them.",
    groups: [
      {
        label: "What you order",
        models: [
          {
            tag: "FAP-831F",
            name: "FortiAP 831F",
            desc: "The access point hardware, set to the UAE regulatory domain.",
            points: ["Wi-Fi 6, 8x8", "1x 5GE multi-gig, 1x GE", "802.3at or 802.3bt"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 831F", "FortiAP 831F"),
          },
          {
            tag: "FortiCare",
            name: "FortiCare support",
            desc: "Firmware updates and Fortinet technical support for each access point.",
            points: ["1, 3 or 5 year terms", "Hardware replacement", "Required per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 831F", "FortiCare support"),
          },
          {
            tag: "FortiEdge Cloud",
            name: "FortiEdge Cloud licence",
            desc: "Only needed if you manage the access point from the cloud.",
            points: ["Optional", "Per access point", "Not needed with FortiGate"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 831F", "FortiEdge Cloud licence"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAP 831F\n does for you",
    highlightLast: 3,
    subhead: "FortiAP 831F is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: fapIcons.fortigate,
        title: "Managed from your FortiGate",
        description: "The wireless controller is built into every FortiGate, with no separate controller licence.",
      },
      {
        icon: fapIcons.secure,
        title: "Secure by design",
        description: "Wi-Fi traffic follows the same FortiGate security policy as your wired network.",
      },
      {
        icon: fapIcons.scan,
        title: "Rogue AP detection",
        description: "Detects rogue and neighbouring access points so they can be investigated.",
      },
      {
        icon: fapIcons.fortiswitch,
        title: "One view with FortiSwitch",
        description: "Access points, switches and firewall managed from one console.",
      },
      {
        icon: fapIcons.zeroTouch,
        title: "Zero-touch deployment",
        description: "New access points pick up their profile from the FortiGate when they connect.",
      },
      {
        icon: fapIcons.cloud,
        title: "Cloud management option",
        description: "Can also be managed from FortiEdge Cloud.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiAP 831F\n fits best",
    highlightLast: 2,
    paragraphs: [
      "Indoor ceiling access points suit offices, schools, clinics and retail floors. We plan placement from a wireless survey so every area gets strong, even coverage.",
      "GS IT sizes the licence, designs the policies, deploys FortiAP 831F with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Wi-Fi 6", label: "standard" },
      { value: "8x8", label: "MIMO", dark: true },
      { value: "5GE multi-gig", label: "uplink" },
      { value: "802.3at or 802.3bt", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAP 831F\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Key specifications",
        columns: ["Specification", "FortiAP 831F"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6"] },
          { label: "Form factor", values: ["Indoor ceiling"] },
          { label: "Radios", values: ["3, 8x8 on 5 GHz"] },
          { label: "Max data rate", values: ["1.15 Gbps + 4.8 Gbps"] },
          { label: "Ethernet", values: ["1x 5GE multi-gig, 1x GE"] },
          { label: "PoE", values: ["802.3at or 802.3bt"] },
          { label: "Managed from", values: ["FortiGate, FortiEdge Cloud"] },
        ],
      },
      {
        title: "Compare with similar models",
        columns: ["Specification", "FortiAP 831F", "FortiAP 221K", "FortiAP 231K", "FortiAP 241K"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6", "Wi-Fi 7", "Wi-Fi 7", "Wi-Fi 7"] },
          { label: "Form factor", values: ["Indoor ceiling", "Indoor ceiling", "Indoor ceiling", "Indoor ceiling"] },
          { label: "Radios", values: ["3, 8x8 on 5 GHz", "2 (2.4 and 5 GHz), 2x2", "3 (2.4, 5 and 6 GHz), 2x2", "4 (2.4, 5, 6 GHz and scan), 2x2"] },
          { label: "Max data rate", values: ["1.15 Gbps + 4.8 Gbps", "688 Mbps + 2.88 Gbps", "Up to 5.76 Gbps on 6 GHz", "Up to 5.77 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x 5GE multi-gig, 1x GE", "1x 2.5GE", "1x 5GE multi-gig", "1x 10GE multi-gig, 1x GE"] },
          { label: "PoE", values: ["802.3at or 802.3bt", "802.3at", "802.3at", "802.3bt"] },
        ],
      },
    ],
    source: "Source: FortiAP Series data sheet (July 2026 edition). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAP 831F\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What PoE does the FortiAP 831F need?",
        answer: "The FortiAP 831F is powered by 802.3at or 802.3bt PoE. We check that your switches can supply it, and FortiSwitch models with the right PoE are managed from the same FortiGate.",
      },
      {
        question: "Does the FortiAP 831F need a FortiGate?",
        answer: "No, but most customers use one, because every FortiGate has a built-in wireless controller with no extra licence. The FortiAP 831F can also be managed from FortiEdge Cloud.",
      },
      {
        question: "What licences does the FortiAP 831F need?",
        answer: "Each access point needs FortiCare support. A FortiEdge Cloud licence is only needed if you manage it from the cloud.",
      },
      {
        question: "How many access points do we need?",
        answer: "It depends on your floor plan, wall materials and how many people connect at once. We run a wireless survey and give you a placement plan before you buy.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We survey the site, install and configure the access points, then support the Wi-Fi after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Complete your\n Wi-Fi network",
    highlightLast: 2,
    subhead: "Similar FortiAP models to compare.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiAP 221K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-221k.webp`, href: `${FAP_STORE}/fortiap-221K` },
      { title: "FortiAP 231K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-231k.webp`, href: `${FAP_STORE}/fortiap-231K` },
      { title: "FortiAP 241K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-241k.webp`, href: `${FAP_STORE}/fortiap-241K` },
    ],
  },
  enquiryTabs: fapEnquiry({
    page: "fortiap-831F",
    model: "FortiAP 831F",
    heading: "Get a quote\n for FortiAP 831F",
    highlightLast: 3,
  }),
  footNote: fapFootNote("FortiAP 831F"),
};
