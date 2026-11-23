import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FAP_IMG as IMG, FAP_STORE, fapCrumbs, fapBadge, fapHeroButtons, fapQuals, fapIcons, fapOptionLink, fapEnquiry, fapFootNote } from "./fortiap-shared";

// Generated from 04-FortiAP-Wireless/product-pages/fortiap-432FR.html
export const fortiap432FR: LogitechProductData = {
  slug: "fortiap-432FR",
  seo: {
    title: "FortiAP 432FR in Dubai | Fortinet Partner | GS IT",
    description: "FortiAP 432FR from GS IT in Dubai: hardened Wi-Fi 6 for industrial and C1D2 hazardous locations, with external N-type antennas.",
    ogTitle: "FortiAP 432FR in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Hardened Wi-Fi 6 for industrial and hazardous (C1D2) locations, with external N-type antennas. Managed from your FortiGate, FortiEdge Cloud.",
  },
  name: "FortiAP 432FR",
  image: `${IMG}/fortiap-432fr.webp`,
  quals: fapQuals,
  heroData: {
    crumbs: fapCrumbs("FortiAP 432FR"),
    gallery: [{ src: `${IMG}/fortiap-432fr.webp`, alt: "FortiAP 432FR, Fortinet wi-fi 6 industrial access point" }],
    badge: fapBadge,
    tag: "Wi-Fi 6 industrial access point",
    heading: "FortiAP\n 432FR",
    highlightLast: 1,
    description: "Hardened Wi-Fi 6 for industrial and hazardous (C1D2) locations, with external N-type antennas. Managed from your FortiGate, FortiEdge Cloud.",
    pills: ["Wi-Fi 6", "4x4 MIMO", "802.3bt (injector included) PoE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Model", value: "FAP-432FR" },
      { label: "Wi-Fi standard", value: "Wi-Fi 6" },
      { label: "Form factor", value: "Industrial" },
      { label: "Radios", value: "3, 4x4" },
      { label: "Max data rate", value: "1.15 Gbps + 2.4 Gbps" },
      { label: "Ethernet", value: "1x 2.5GE, 1x GE with PoE out" },
      { label: "PoE", value: "802.3bt (injector included)" },
      { label: "Managed from", value: "FortiGate, FortiEdge Cloud" },
    ],
    aboutTitle: "About FortiAP 432FR",
    about: [
      { label: "Radios", text: "3, 4x4" },
      { label: "Speed", text: "1.15 Gbps + 2.4 Gbps" },
      { label: "Uplink", text: "1x 2.5GE, 1x GE with PoE out" },
      { label: "Power", text: "802.3bt (injector included) PoE" },
    ],
    buttons: fapHeroButtons("FortiAP 432FR"),
  },
  modelsData: {
    tag: "What you order",
    heading: "How to buy\n FortiAP 432FR",
    highlightLast: 2,
    subhead: "Each access point is ordered with FortiCare support. Add FortiGuard or cloud licences only if you need them.",
    groups: [
      {
        label: "What you order",
        models: [
          {
            tag: "FAP-432FR",
            name: "FortiAP 432FR",
            desc: "The access point hardware, set to the UAE regulatory domain.",
            points: ["Wi-Fi 6, 4x4", "1x 2.5GE, 1x GE with PoE out", "802.3bt (injector included)"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 432FR", "FortiAP 432FR"),
          },
          {
            tag: "FortiCare",
            name: "FortiCare support",
            desc: "Firmware updates and Fortinet technical support for each access point.",
            points: ["1, 3 or 5 year terms", "Hardware replacement", "Required per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 432FR", "FortiCare support"),
          },
          {
            tag: "FortiEdge Cloud",
            name: "FortiEdge Cloud licence",
            desc: "Only needed if you manage the access point from the cloud.",
            points: ["Optional", "Per access point", "Not needed with FortiGate"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 432FR", "FortiEdge Cloud licence"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAP 432FR\n does for you",
    highlightLast: 3,
    subhead: "FortiAP 432FR is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
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
    heading: "Where FortiAP 432FR\n fits best",
    highlightLast: 2,
    paragraphs: [
      "Industrial access points are built for harsh and hazardous locations such as plants, oil and gas sites and warehouses. We plan coverage around the site’s safety and access rules.",
      "GS IT sizes the licence, designs the policies, deploys FortiAP 432FR with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Wi-Fi 6", label: "standard" },
      { value: "4x4", label: "MIMO", dark: true },
      { value: "2.5GE", label: "uplink" },
      { value: "802.3bt", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAP 432FR\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Key specifications",
        columns: ["Specification", "FortiAP 432FR"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6"] },
          { label: "Form factor", values: ["Industrial"] },
          { label: "Radios", values: ["3, 4x4"] },
          { label: "Max data rate", values: ["1.15 Gbps + 2.4 Gbps"] },
          { label: "Ethernet", values: ["1x 2.5GE, 1x GE with PoE out"] },
          { label: "PoE", values: ["802.3bt (injector included)"] },
          { label: "Managed from", values: ["FortiGate, FortiEdge Cloud"] },
        ],
      },
      {
        title: "Compare with similar models",
        columns: ["Specification", "FortiAP 432FR", "FortiAP 23JF", "FortiAP 831F", "FortiAP 441K"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 6", "Wi-Fi 6", "Wi-Fi 6", "Wi-Fi 7"] },
          { label: "Form factor", values: ["Industrial", "Wall plate or desk", "Indoor ceiling", "Indoor ceiling"] },
          { label: "Radios", values: ["3, 4x4", "3, 2x2", "3, 8x8 on 5 GHz", "4 (2.4, 5, 6 GHz and scan), 4x4"] },
          { label: "Max data rate", values: ["1.15 Gbps + 2.4 Gbps", "574 Mbps + 1.2 Gbps", "1.15 Gbps + 4.8 Gbps", "Up to 11.53 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x 2.5GE, 1x GE with PoE out", "4x GE (PoE in and PoE out)", "1x 5GE multi-gig, 1x GE", "2x 10GE multi-gig"] },
          { label: "PoE", values: ["802.3bt (injector included)", "802.3at", "802.3at or 802.3bt", "802.3bt"] },
        ],
      },
    ],
    source: "Source: FortiAP Series data sheet (July 2026 edition). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAP 432FR\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What PoE does the FortiAP 432FR need?",
        answer: "The FortiAP 432FR is powered by 802.3bt (injector included) PoE. We check that your switches can supply it, and FortiSwitch models with the right PoE are managed from the same FortiGate.",
      },
      {
        question: "Does the FortiAP 432FR need a FortiGate?",
        answer: "No, but most customers use one, because every FortiGate has a built-in wireless controller with no extra licence. The FortiAP 432FR can also be managed from FortiEdge Cloud.",
      },
      {
        question: "What licences does the FortiAP 432FR need?",
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
      { title: "FortiAP 23JF", text: "Wi-Fi 6 wall-plate access point", image: `${IMG}/fortiap-23jf.webp`, href: `${FAP_STORE}/fortiap-23JF` },
      { title: "FortiAP 831F", text: "Wi-Fi 6 indoor access point", image: `${IMG}/fortiap-831f.webp`, href: `${FAP_STORE}/fortiap-831F` },
      { title: "FortiAP 441K", text: "Wi-Fi 7 indoor access point", image: `${IMG}/fortiap-441k.webp`, href: `${FAP_STORE}/fortiap-441K` },
    ],
  },
  enquiryTabs: fapEnquiry({
    page: "fortiap-432FR",
    model: "FortiAP 432FR",
    heading: "Get a quote\n for FortiAP 432FR",
    highlightLast: 3,
  }),
  footNote: fapFootNote("FortiAP 432FR"),
};
