import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { FAP_IMG as IMG, FAP_STORE, fapCrumbs, fapBadge, fapHeroButtons, fapQuals, fapIcons, fapOptionLink, fapEnquiry, fapFootNote } from "./fortiap-shared";

// Generated from 04-FortiAP-Wireless/product-pages/fortiap-244K.html
export const fortiap244K: LogitechProductData = {
  slug: "fortiap-244K",
  seo: {
    title: "FortiAP 244K in Dubai | Fortinet Partner | GS IT",
    description: "FortiAP 244K from GS IT in Dubai: ruggedised IP67 Wi-Fi 7 for outdoor areas, with multi-gig and SFP+ uplinks. Deployment and support.",
    ogTitle: "FortiAP 244K in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Ruggedised IP67 Wi-Fi 7 for outdoor areas, with multi-gig and SFP+ uplinks. Managed from your FortiGate, FortiEdge Cloud.",
  },
  name: "FortiAP 244K",
  image: `${IMG}/fortiap-244k.webp`,
  quals: fapQuals,
  heroData: {
    crumbs: fapCrumbs("FortiAP 244K"),
    gallery: [{ src: `${IMG}/fortiap-244k.webp`, alt: "FortiAP 244K, Fortinet wi-fi 7 outdoor access point" }],
    badge: fapBadge,
    tag: "Wi-Fi 7 outdoor access point",
    heading: "FortiAP\n 244K",
    highlightLast: 1,
    description: "Ruggedised IP67 Wi-Fi 7 for outdoor areas, with multi-gig and SFP+ uplinks. Managed from your FortiGate, FortiEdge Cloud.",
    pills: ["Wi-Fi 7", "2x2 MIMO", "802.3bt PoE"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Model", value: "FAP-244K" },
      { label: "Wi-Fi standard", value: "Wi-Fi 7" },
      { label: "Form factor", value: "Outdoor" },
      { label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 2x2" },
      { label: "Max data rate", value: "Up to 5.77 Gbps on 6 GHz" },
      { label: "Ethernet", value: "1x multi-gig RJ45, 1x SFP+" },
      { label: "PoE", value: "802.3bt" },
      { label: "Managed from", value: "FortiGate, FortiEdge Cloud" },
    ],
    aboutTitle: "About FortiAP 244K",
    about: [
      { label: "Radios", text: "4 (2.4, 5, 6 GHz and scan), 2x2" },
      { label: "Speed", text: "Up to 5.77 Gbps on 6 GHz" },
      { label: "Uplink", text: "1x multi-gig RJ45, 1x SFP+" },
      { label: "Power", text: "802.3bt PoE" },
    ],
    buttons: fapHeroButtons("FortiAP 244K"),
  },
  modelsData: {
    tag: "What you order",
    heading: "How to buy\n FortiAP 244K",
    highlightLast: 2,
    subhead: "Each access point is ordered with FortiCare support. Add FortiGuard or cloud licences only if you need them.",
    groups: [
      {
        label: "What you order",
        models: [
          {
            tag: "FAP-244K",
            name: "FortiAP 244K",
            desc: "The access point hardware, set to the UAE regulatory domain.",
            points: ["Wi-Fi 7, 2x2", "1x multi-gig RJ45, 1x SFP+", "802.3bt"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 244K", "FortiAP 244K"),
          },
          {
            tag: "FortiCare",
            name: "FortiCare support",
            desc: "Firmware updates and Fortinet technical support for each access point.",
            points: ["1, 3 or 5 year terms", "Hardware replacement", "Required per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 244K", "FortiCare support"),
          },
          {
            tag: "FortiGuard UTP",
            name: "FortiGuard UTP for FortiAP",
            desc: "Application control and web filtering on the access point itself.",
            points: ["Supported G and K models", "Optional", "Sized per access point"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 244K", "FortiGuard UTP for FortiAP"),
          },
          {
            tag: "FortiEdge Cloud",
            name: "FortiEdge Cloud licence",
            desc: "Only needed if you manage the access point from the cloud.",
            points: ["Optional", "Per access point", "Not needed with FortiGate"],
            enquireLabel: "Enquire about this option",
            href: fapOptionLink("FortiAP 244K", "FortiEdge Cloud licence"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAP 244K\n does for you",
    highlightLast: 3,
    subhead: "FortiAP 244K is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
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
        title: "Dedicated scanning radio",
        description: "A fourth radio scans the airwaves full time for rogue devices and interference.",
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
    heading: "Where FortiAP 244K\n fits best",
    highlightLast: 2,
    paragraphs: [
      "Outdoor access points extend secure Wi-Fi to courtyards, car parks, campuses and remote areas. We plan mounting, cabling and power to suit the site.",
      "GS IT sizes the licence, designs the policies, deploys FortiAP 244K with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Wi-Fi 7", label: "standard" },
      { value: "2x2", label: "MIMO", dark: true },
      { value: "multi-gig RJ45", label: "uplink" },
      { value: "802.3bt", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAP 244K\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Key specifications",
        columns: ["Specification", "FortiAP 244K"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 7"] },
          { label: "Form factor", values: ["Outdoor"] },
          { label: "Radios", values: ["4 (2.4, 5, 6 GHz and scan), 2x2"] },
          { label: "Max data rate", values: ["Up to 5.77 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x multi-gig RJ45, 1x SFP+"] },
          { label: "PoE", values: ["802.3bt"] },
          { label: "Managed from", values: ["FortiGate, FortiEdge Cloud"] },
        ],
      },
      {
        title: "Compare with similar models",
        columns: ["Specification", "FortiAP 244K", "FortiAP 222KL", "FortiAP 234G", "FortiAP 432G"],
        rows: [
          { label: "Wi-Fi standard", values: ["Wi-Fi 7", "Wi-Fi 7", "Wi-Fi 6E", "Wi-Fi 6E"] },
          { label: "Form factor", values: ["Outdoor", "Outdoor", "Outdoor", "Outdoor"] },
          { label: "Radios", values: ["4 (2.4, 5, 6 GHz and scan), 2x2", "2 Wi-Fi + LoRaWAN, LTE, GNSS", "3 (2.4, 5 and 6 GHz), 2x2", "3 (2.4, 5 and 6 GHz), 4x4"] },
          { label: "Max data rate", values: ["Up to 5.77 Gbps on 6 GHz", "688 Mbps + 4.32 Gbps", "Up to 2.4 Gbps on 6 GHz", "Up to 4.8 Gbps on 6 GHz"] },
          { label: "Ethernet", values: ["1x multi-gig RJ45, 1x SFP+", "1x 2.5GE, 1x GE with PoE out", "1x 2.5GE, 1x GE", "1x 10GE multi-gig, 1x GE with PoE out"] },
          { label: "PoE", values: ["802.3bt", "802.3bt", "802.3at", "802.3bt"] },
        ],
      },
    ],
    source: "Source: FortiAP Series data sheet (July 2026 edition). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAP 244K\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What PoE does the FortiAP 244K need?",
        answer: "The FortiAP 244K is powered by 802.3bt PoE. We check that your switches can supply it, and FortiSwitch models with the right PoE are managed from the same FortiGate.",
      },
      {
        question: "Does the FortiAP 244K need a FortiGate?",
        answer: "No, but most customers use one, because every FortiGate has a built-in wireless controller with no extra licence. The FortiAP 244K can also be managed from FortiEdge Cloud.",
      },
      {
        question: "Can we use the 6 GHz band in the UAE?",
        answer: "Use of the 6 GHz band depends on approval from the local regulator, as Fortinet notes in its data sheet. We set each access point to the UAE regulatory domain and confirm the channels available at installation.",
      },
      {
        question: "What licences does the FortiAP 244K need?",
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
      { title: "FortiAP 222KL", text: "Wi-Fi 7 outdoor access point", image: `${IMG}/fortiap-222kl.webp`, href: `${FAP_STORE}/fortiap-222KL` },
      { title: "FortiAP 234G", text: "Wi-Fi 6E outdoor access point", image: `${IMG}/fortiap-234g.webp`, href: `${FAP_STORE}/fortiap-234G` },
      { title: "FortiAP 432G", text: "Wi-Fi 6E outdoor access point", image: `${IMG}/fortiap-432g.webp`, href: `${FAP_STORE}/fortiap-432G` },
    ],
  },
  enquiryTabs: fapEnquiry({
    page: "fortiap-244K",
    model: "FortiAP 244K",
    heading: "Get a quote\n for FortiAP 244K",
    highlightLast: 3,
  }),
  footNote: fapFootNote("FortiAP 244K"),
};
