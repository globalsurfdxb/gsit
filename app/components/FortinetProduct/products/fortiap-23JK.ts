import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FAP_IMG as IMG, FAP_STORE, fapCrumbs, fapBadge, fapHeroButtons, fapQuals, fapIcons, fapOptionLink, fapEnquiry, fapFootNote } from "./fortiap-shared";

// Generated from 04-FortiAP-Wireless/product-pages/fortiap-23JK.html
export const fortiap23JK: LogitechProductData = {
  slug: "fortiap-23JK",
  seo: {
    title: "FortiAP 23JK in Dubai | Fortinet Partner | GS IT",
    description: "FortiAP 23JK from GS IT in Dubai: Wi-Fi 7 wall-plate access point with three wired ports for hotels, dorms and home offices.",
    ogTitle: "FortiAP 23JK in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Wi-Fi 7 wall-plate access point with three wired ports, for hotel rooms, dorms and home offices. Managed from your FortiGate, FortiEdge Cloud or FortiSASE.",
  },
  name: "FortiAP 23JK",
  image: `${IMG}/fortiap-23jk.webp`,
  quals: fapQuals,
  heroData: {
    crumbs: fapCrumbs("FortiAP 23JK"),
    gallery: [{ src: `${IMG}/fortiap-23jk.webp`, alt: "FortiAP 23JK, Fortinet wi-fi 7 wall-plate access point" }],
    badge: fapBadge,
    tag: "Wi-Fi 7 wall-plate access point",
    heading: "FortiAP\n 23JK",
    highlightLast: 1,
    description: "Wi-Fi 7 wall-plate access point with three wired ports, for hotel rooms, dorms and home offices. Managed from your FortiGate, FortiEdge Cloud or FortiSASE.",
    pills: ["Wi-Fi 7", "2x2 MIMO", "802.3bt PoE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Model", value: "FAP-23JK" },
      { label: "Wi-Fi standard", value: "Wi-Fi 7" },
      { label: "Form factor", value: "Wall plate or desk" },
      { label: "Radios", value: "3 (2.4, 5 and 6 GHz), 2x2" },
      { label: "Max data rate", value: "Up to 5.76 Gbps on 6 GHz" },
      { label: "Ethernet", value: "1x 10GE uplink, 3x GE LAN" },
      { label: "PoE", value: "802.3bt" },
      { label: "Managed from", value: "FortiGate, FortiEdge Cloud or FortiSASE" },
    ],
    aboutTitle: "About FortiAP 23JK",
    about: [
      { label: "Radios", text: "3 (2.4, 5 and 6 GHz), 2x2" },
      { label: "Speed", text: "Up to 5.76 Gbps on 6 GHz" },
      { label: "Uplink", text: "1x 10GE uplink, 3x GE LAN" },
      { label: "Power", text: "802.3bt PoE" },
    ],
    buttons: fapHeroButtons("FortiAP 23JK"),
  },
  modelsData: {
    tag: "What you order",
    heading: "How to buy\n FortiAP 23JK",
    highlightLast: 2,
    subhead: "Each access point is ordered with FortiCare support. Add FortiGuard or cloud licences only if you need them.",
    groups: [
      {
        label: "What you order",
        models: [
          {
            tag: "FAP-23JK",
            name: "FortiAP 23JK",
            desc: "The access point hardware, set to the UAE regulatory domain.",
            points: ["Wi-Fi 7, 2x2", "1x 10GE uplink, 3x GE LAN", "802.3bt"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JK", "FortiAP 23JK"),
          },
          {
            tag: "FortiCare",
            name: "FortiCare support",
            desc: "Firmware updates and Fortinet technical support for each access point.",
            points: ["1, 3 or 5 year terms", "Hardware replacement", "Required per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JK", "FortiCare support"),
          },
          {
            tag: "FortiGuard UTP",
            name: "FortiGuard UTP for FortiAP",
            desc: "Application control and web filtering on the access point itself.",
            points: ["Supported G and K models", "Optional", "Sized per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JK", "FortiGuard UTP for FortiAP"),
          },
          {
            tag: "FortiEdge Cloud",
            name: "FortiEdge Cloud licence",
            desc: "Only needed if you manage the access point from the cloud.",
            points: ["Optional", "Per access point", "Not needed with FortiGate"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JK", "FortiEdge Cloud licence"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAP 23JK\n does for you",
    highlightLast: 3,
    subhead: "FortiAP 23JK is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
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
        title: "Cloud and SASE options",
        description: "Can also be managed from FortiEdge Cloud or FortiSASE.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiAP 23JK\n fits best",
    highlightLast: 2,
    paragraphs: [
      "Wall-plate access points mount over a standard network outlet, giving each room its own Wi-Fi plus wired ports for TVs, phones or desks. They suit hotels, dorms, clinics and home offices.",
      "GS IT sizes the licence, designs the policies, deploys FortiAP 23JK with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Wi-Fi 7", label: "standard" },
      { value: "2x2", label: "MIMO", dark: true },
      { value: "10GE uplink", label: "uplink" },
      { value: "802.3bt", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAP 23JK\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Key specifications",
        columns: ["Specification", "FortiAP 23JK"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 7"] },
          { label: "Form factor", values: ["Wall plate or desk"] },
          { label: "Radios", values: ["3 (2.4, 5 and 6 GHz), 2x2"] },
          { label: "Max data rate", values: ["Up to 5.76 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x 10GE uplink, 3x GE LAN"] },
          { label: "PoE", values: ["802.3bt"] },
          { label: "Managed from", values: ["FortiGate, FortiEdge Cloud or FortiSASE"] },
        ],
      },
      {
        title: "Compare with similar models",
        columns: ["Specification", "FortiAP 23JK", "FortiAP 23JF", "FortiAP 221K", "FortiAP 231K"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 7", "Wi-Fi 6", "Wi-Fi 7", "Wi-Fi 7"] },
          { label: "Form factor", values: ["Wall plate or desk", "Wall plate or desk", "Indoor ceiling", "Indoor ceiling"] },
          { label: "Radios", values: ["3 (2.4, 5 and 6 GHz), 2x2", "3, 2x2", "2 (2.4 and 5 GHz), 2x2", "3 (2.4, 5 and 6 GHz), 2x2"] },
          { label: "Max data rate", values: ["Up to 5.76 Gbps on 6 GHz", "574 Mbps + 1.2 Gbps", "688 Mbps + 2.88 Gbps", "Up to 5.76 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x 10GE uplink, 3x GE LAN", "4x GE (PoE in and PoE out)", "1x 2.5GE", "1x 5GE multi-gig"] },
          { label: "PoE", values: ["802.3bt", "802.3at", "802.3at", "802.3at"] },
        ],
      },
    ],
    source: "Source: FortiAP Series data sheet (July 2026 edition). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAP 23JK\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What PoE does the FortiAP 23JK need?",
        answer: "The FortiAP 23JK is powered by 802.3bt PoE. We check that your switches can supply it, and FortiSwitch models with the right PoE are managed from the same FortiGate.",
      },
      {
        question: "Does the FortiAP 23JK need a FortiGate?",
        answer: "No, but most customers use one, because every FortiGate has a built-in wireless controller with no extra licence. The FortiAP 23JK can also be managed from FortiEdge Cloud or FortiSASE.",
      },
      {
        question: "Can we use the 6 GHz band in the UAE?",
        answer: "Use of the 6 GHz band depends on approval from the local regulator, as Fortinet notes in its data sheet. We set each access point to the UAE regulatory domain and confirm the channels available at installation.",
      },
      {
        question: "What licences does the FortiAP 23JK need?",
        answer: "Each access point needs FortiCare support. FortiGuard UTP is optional and adds application control and web filtering on the access point. A FortiEdge Cloud licence is only needed if you manage it from the cloud.",
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
      { title: "FortiAP 23JF", text: "Wi-Fi 6 wall-plate access point", image: `${IMG}/fortiap-23jf.webp`, href: `${FAP_STORE}/fortiap-23JF` },
      { title: "FortiAP 221K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-221k.webp`, href: `${FAP_STORE}/fortiap-221K` },
      { title: "FortiAP 231K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-231k.webp`, href: `${FAP_STORE}/fortiap-231K` },
    ],
  },
  enquiryTabs: fapEnquiry({
    page: "fortiap-23JK",
    model: "FortiAP 23JK",
    heading: "Get a quote\n for FortiAP 23JK",
    highlightLast: 3,
  }),
  footNote: fapFootNote("FortiAP 23JK"),
};
