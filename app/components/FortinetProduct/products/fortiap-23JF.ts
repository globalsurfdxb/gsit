import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FAP_IMG as IMG, FAP_STORE, fapCrumbs, fapBadge, fapHeroButtons, fapQuals, fapIcons, fapOptionLink, fapEnquiry, fapFootNote } from "./fortiap-shared";

// Generated from 04-FortiAP-Wireless/product-pages/fortiap-23JF.html
export const fortiap23JF: LogitechProductData = {
  slug: "fortiap-23JF",
  seo: {
    title: "FortiAP 23JF in Dubai | Fortinet Partner | GS IT",
    description: "FortiAP 23JF from GS IT in Dubai: Wi-Fi 6 wall-plate access point with four wired ports for rooms and desks. Deployment and support.",
    ogTitle: "FortiAP 23JF in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Wi-Fi 6 wall-plate access point with four wired ports, for rooms that need Wi-Fi and wired desks. Managed from your FortiGate, FortiEdge Cloud.",
  },
  name: "FortiAP 23JF",
  image: `${IMG}/fortiap-23jf.webp`,
  quals: fapQuals,
  heroData: {
    crumbs: fapCrumbs("FortiAP 23JF"),
    gallery: [{ src: `${IMG}/fortiap-23jf.webp`, alt: "FortiAP 23JF, Fortinet wi-fi 6 wall-plate access point" }],
    badge: fapBadge,
    tag: "Wi-Fi 6 wall-plate access point",
    heading: "FortiAP\n 23JF",
    highlightLast: 1,
    description: "Wi-Fi 6 wall-plate access point with four wired ports, for rooms that need Wi-Fi and wired desks. Managed from your FortiGate, FortiEdge Cloud.",
    pills: ["Wi-Fi 6", "2x2 MIMO", "802.3at PoE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Model", value: "FAP-23JF" },
      { label: "Wi-Fi standard", value: "Wi-Fi 6" },
      { label: "Form factor", value: "Wall plate or desk" },
      { label: "Radios", value: "3, 2x2" },
      { label: "Max data rate", value: "574 Mbps + 1.2 Gbps" },
      { label: "Ethernet", value: "4x GE (PoE in and PoE out)" },
      { label: "PoE", value: "802.3at" },
      { label: "Managed from", value: "FortiGate, FortiEdge Cloud" },
    ],
    aboutTitle: "About FortiAP 23JF",
    about: [
      { label: "Radios", text: "3, 2x2" },
      { label: "Speed", text: "574 Mbps + 1.2 Gbps" },
      { label: "Uplink", text: "4x GE (PoE in and PoE out)" },
      { label: "Power", text: "802.3at PoE" },
    ],
    buttons: fapHeroButtons("FortiAP 23JF"),
  },
  modelsData: {
    tag: "What you order",
    heading: "How to buy\n FortiAP 23JF",
    highlightLast: 2,
    subhead: "Each access point is ordered with FortiCare support. Add FortiGuard or cloud licences only if you need them.",
    groups: [
      {
        label: "What you order",
        models: [
          {
            tag: "FAP-23JF",
            name: "FortiAP 23JF",
            desc: "The access point hardware, set to the UAE regulatory domain.",
            points: ["Wi-Fi 6, 2x2", "4x GE (PoE in and PoE out)", "802.3at"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JF", "FortiAP 23JF"),
          },
          {
            tag: "FortiCare",
            name: "FortiCare support",
            desc: "Firmware updates and Fortinet technical support for each access point.",
            points: ["1, 3 or 5 year terms", "Hardware replacement", "Required per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JF", "FortiCare support"),
          },
          {
            tag: "FortiEdge Cloud",
            name: "FortiEdge Cloud licence",
            desc: "Only needed if you manage the access point from the cloud.",
            points: ["Optional", "Per access point", "Not needed with FortiGate"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 23JF", "FortiEdge Cloud licence"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAP 23JF\n does for you",
    highlightLast: 3,
    subhead: "FortiAP 23JF is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
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
    heading: "Where FortiAP 23JF\n fits best",
    highlightLast: 2,
    paragraphs: [
      "Wall-plate access points mount over a standard network outlet, giving each room its own Wi-Fi plus wired ports for TVs, phones or desks. They suit hotels, dorms, clinics and home offices.",
      "GS IT sizes the licence, designs the policies, deploys FortiAP 23JF with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Wi-Fi 6", label: "standard" },
      { value: "2x2", label: "MIMO", dark: true },
      { value: "4x GE", label: "uplink" },
      { value: "802.3at", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAP 23JF\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Key specifications",
        columns: ["Specification", "FortiAP 23JF"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6"] },
          { label: "Form factor", values: ["Wall plate or desk"] },
          { label: "Radios", values: ["3, 2x2"] },
          { label: "Max data rate", values: ["574 Mbps + 1.2 Gbps"] },
          { label: "Ethernet", values: ["4x GE (PoE in and PoE out)"] },
          { label: "PoE", values: ["802.3at"] },
          { label: "Managed from", values: ["FortiGate, FortiEdge Cloud"] },
        ],
      },
      {
        title: "Compare with similar models",
        columns: ["Specification", "FortiAP 23JF", "FortiAP 23JK", "FortiAP 432FR", "FortiAP 831F"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6", "Wi-Fi 7", "Wi-Fi 6", "Wi-Fi 6"] },
          { label: "Form factor", values: ["Wall plate or desk", "Wall plate or desk", "Industrial", "Indoor ceiling"] },
          { label: "Radios", values: ["3, 2x2", "3 (2.4, 5 and 6 GHz), 2x2", "3, 4x4", "3, 8x8 on 5 GHz"] },
          { label: "Max data rate", values: ["574 Mbps + 1.2 Gbps", "Up to 5.76 Gbps on 6 GHz", "1.15 Gbps + 2.4 Gbps", "1.15 Gbps + 4.8 Gbps"] },
          { label: "Ethernet", values: ["4x GE (PoE in and PoE out)", "1x 10GE uplink, 3x GE LAN", "1x 2.5GE, 1x GE with PoE out", "1x 5GE multi-gig, 1x GE"] },
          { label: "PoE", values: ["802.3at", "802.3bt", "802.3bt (injector included)", "802.3at or 802.3bt"] },
        ],
      },
    ],
    source: "Source: FortiAP Series data sheet (July 2026 edition). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAP 23JF\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What PoE does the FortiAP 23JF need?",
        answer: "The FortiAP 23JF is powered by 802.3at PoE. We check that your switches can supply it, and FortiSwitch models with the right PoE are managed from the same FortiGate.",
      },
      {
        question: "Does the FortiAP 23JF need a FortiGate?",
        answer: "No, but most customers use one, because every FortiGate has a built-in wireless controller with no extra licence. The FortiAP 23JF can also be managed from FortiEdge Cloud.",
      },
      {
        question: "What licences does the FortiAP 23JF need?",
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
      { title: "FortiAP 23JK", text: "Wi-Fi 7 wall-plate access point", image: `${IMG}/fortiap-23jk.webp`, href: `${FAP_STORE}/fortiap-23JK` },
      { title: "FortiAP 432FR", text: "Wi-Fi 6 industrial access point", image: `${IMG}/fortiap-432fr.webp`, href: `${FAP_STORE}/fortiap-432FR` },
      { title: "FortiAP 831F", text: "Wi-Fi 6 indoor access point", image: `${IMG}/fortiap-831f.webp`, href: `${FAP_STORE}/fortiap-831F` },
    ],
  },
  enquiryTabs: fapEnquiry({
    page: "fortiap-23JF",
    model: "FortiAP 23JF",
    heading: "Get a quote\n for FortiAP 23JF",
    highlightLast: 3,
  }),
  footNote: fapFootNote("FortiAP 23JF"),
};
