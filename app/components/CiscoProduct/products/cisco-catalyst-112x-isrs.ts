import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { RT_IMG as IMG, rtIcons, relatedRouters, rtFootNote } from "./routers-shared";

const DATASHEET = {
  text: "Cisco ISR 1000 Series datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/routers/1000-series-integrated-services-routers-isr/datasheet-c78-739512.pdf)
  href: "/assets/datasheets/cisco/isr-1000-series-ds.pdf",
};

// Generated from rt_cisco-catalyst-112x-isrs.html (Cisco pages dev pack).
// The hero uses a general ISR 1100 Series photo until a 112x-specific one arrives (see the pack README).
export const isr112x: LogitechProductData = {
  slug: "cisco-catalyst-112x-isrs",
  seo: {
    title: "Get Cisco ISR 112x Routers in Dubai | GS IT",
    description:
      "Buy Cisco ISR 112x branch routers in Dubai, with Ethernet, DSL or G.SHDSL WAN, pluggable LTE or 5G, and SD-WAN options.",
    ogTitle: "Cisco ISR 112x Routers in Dubai | GS IT",
    ogDescription:
      "Cisco C1121, C1126, C1127 and C1128 branch routers for offices across the UAE, supplied, installed and supported by GS IT.",
  },
  name: "Cisco ISR 112x Routers",
  image: `${IMG}/cisco-isr-1100-series-branch-routers.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Routers" },
      { label: "Cisco", href: "/cisco-network-routers" },
      { label: "ISR 112x Routers" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-isr-1100-series-branch-routers.webp`,
        alt: "Cisco ISR 1100 Series branch routers",
      },
    ],
    tag: "Cisco branch router",
    heading: "Cisco ISR 112x\n Routers",
    highlightLast: 1,
    description:
      "ISR 1100 branch routers with Ethernet, DSL or G.SHDSL WAN, pluggable LTE or 5G, and optional PoE.",
    pills: ["IOS XE or Catalyst SD-WAN", "LTE and 5G options"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "ISR 1100 (C1121, C1126, C1127, C1128)" },
      { label: "WAN", value: "GE copper or SFP, plus DSL or G.SHDSL by model" },
      { label: "LAN", value: "4 or 8 GE ports, PoE optional" },
      { label: "IPsec", value: "Up to 600 Mbps (8-port, autonomous mode)" },
      { label: "Memory", value: "4 GB, or 8 GB on X models" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "WAN for any line",
        text: "Ethernet and SFP on every model, with DSL on the C1126 and C1127 and G.SHDSL on the C1128",
      },
      { label: "Cellular backup", text: "pluggable LTE and 5G modules on -LTEP models" },
      { label: "Room for more", text: "X models double memory and flash to 8 GB" },
      { label: "Still on sale", text: "the C1126 is Cisco’s listed migration product for the end-of-sale C1116" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "ISR 112x models\n for every WAN connection",
    highlightLast: 4,
    subhead: "Choose by WAN type, ports and cellular needs. We confirm the model during the site review.",
    groups: [
      {
        label: "Ethernet WAN",
        title: "Ethernet WAN models",
        description: "For fibre or Ethernet internet lines.",
        models: [
          {
            name: "C1121-4P",
            desc: "4 GE LAN, GE copper and SFP WAN",
            points: ["500 Mbps IPsec", "4 GB memory"],
          },
          {
            name: "C1121-8P / C1121X-8P",
            desc: "8 GE LAN, GE copper and SFP WAN",
            points: ["600 Mbps IPsec", "4 GB, or 8 GB on the X model"],
          },
          {
            name: "C1121-8PLTEP / C1121X-8PLTEP",
            desc: "8 GE LAN, Ethernet WAN and a pluggable cellular slot",
            points: ["LTE or 5G module", "600 Mbps IPsec"],
          },
        ],
      },
      {
        label: "DSL WAN",
        title: "DSL and G.SHDSL models",
        description: "For sites on copper broadband lines, with cellular backup.",
        models: [
          {
            name: "C1126-8PLTEP",
            desc: "8 GE LAN, GE and ADSL2/VDSL2+ WAN with vectoring",
            points: ["LTE or 5G module", "PoE optional"],
          },
          {
            name: "C1127-8PLTEP",
            desc: "8 GE LAN, GE and ADSL/VDSL2+ WAN",
            points: ["Annex M variant available", "LTE module"],
          },
          {
            name: "C1128-8PLTEP",
            desc: "8 GE LAN, GE and G.SHDSL WAN",
            points: ["LTE or 5G module"],
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Branch routing\n for any internet line",
    highlightLast: 4,
    subhead: "What the ISR 112x brings to a branch office.",
    data: [
      {
        icon: rtIcons.network,
        title: "SD-WAN ready",
        description:
          "Run as a traditional IOS XE router, or join Cisco Catalyst SD-WAN for application-aware routing across sites.",
        highlight: true,
      },
      {
        icon: rtIcons.shieldLock,
        title: "On-box security",
        description:
          "Zone-based firewall, IPsec VPN and optional next-generation firewall features protect the branch edge.",
      },
      {
        icon: rtIcons.bars,
        title: "Cellular backup",
        description: "Pluggable LTE and 5G modules keep the site online if the fixed line drops.",
      },
      {
        icon: rtIcons.bolt,
        title: "PoE on LAN ports",
        description: "Optional PoE powers phones, cameras and access points from the router.",
      },
      {
        icon: rtIcons.desktop,
        title: "Flexible management",
        description: "Web UI and CLI on the box, or Catalyst SD-WAN Manager and Catalyst Center for many sites.",
      },
      {
        icon: rtIcons.leaf,
        title: "Compact and fanless",
        description: "Small, fanless designs fit offices, shops and kiosks without a rack.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Flexible branch routers\n that are still on sale",
    highlightLast: 5,
    paragraphs: [
      "The ISR 112x covers the widest range of WAN connections in the ISR 1100 family, from fibre and Ethernet to DSL and G.SHDSL, with cellular backup on -LTEP models.",
      "GS IT sizes the right model, modules and subscriptions, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "1.6 Gbps", label: "IPv4 forwarding on 8-port models" },
      { value: "600 Mbps", label: "IPsec on 8-port models", dark: true },
      { value: "5G", label: "pluggable on selected models" },
      { value: "8 GB", label: "memory on X models" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "ISR 112x\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "IPv4 forwarding", value: "Up to 1,600 Mbps" },
            { label: "IPsec, autonomous mode", value: "Up to 600 Mbps (8-port), 500 Mbps (4-port)" },
            { label: "IPsec, SD-WAN mode", value: "Up to 700 Mbps (8-port), 450 Mbps (4-port)" },
          ],
        },
        {
          title: "WAN",
          rows: [
            { label: "Ethernet", value: "GE copper or SFP, plus a second copper GE port" },
            { label: "DSL", value: "ADSL2/VDSL2+ on C1126 and C1127" },
            { label: "G.SHDSL", value: "On C1128" },
            { label: "Cellular", value: "Pluggable LTE or 5G on -LTEP models" },
          ],
        },
        {
          title: "LAN",
          rows: [
            { label: "Ports", value: "4 or 8 GE" },
            { label: "PoE", value: "Optional" },
          ],
        },
      ],
      [
        {
          title: "Memory",
          rows: [
            { label: "Standard", value: "4 GB DRAM, 4 GB flash" },
            { label: "X models", value: "8 GB DRAM, 8 GB flash" },
          ],
        },
        {
          title: "Software and management",
          rows: [
            { label: "Software", value: "Cisco IOS XE, autonomous or SD-WAN mode" },
            { label: "Management", value: "Web UI, CLI, Catalyst SD-WAN Manager, Catalyst Center" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "ISR 112x\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Which model fits our internet line?",
        answer:
          "For fibre or Ethernet, the C1121. For ADSL or VDSL, the C1126 or C1127. For G.SHDSL, the C1128. We check your line type during the site review.",
      },
      {
        question: "Can it keep us online if the line fails?",
        answer:
          "Yes, on -LTEP models. A pluggable LTE or 5G module takes over automatically when the fixed line drops.",
      },
      {
        question: "Is the ISR 112x still on sale?",
        answer:
          "Yes. It isn’t in Cisco’s latest ISR 1100 end-of-sale notice, and Cisco lists the C1126 as the migration product for the end-of-sale C1116.",
      },
      {
        question: "Do we need a subscription?",
        answer:
          "The router runs as a standard IOS XE router out of the box. Catalyst SD-WAN and advanced features need a Cisco subscription, which we include in the quote.",
      },
      {
        question: "Should we choose an ISR or a Meraki MX?",
        answer:
          "Choose the ISR for DSL or 5G WAN, full routing control or Catalyst SD-WAN. Choose Meraki MX if you want every site managed from one cloud dashboard.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We stage and configure the router, cut over outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedRouters("cisco-catalyst-112x-isrs"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the ISR 112x, model sizing and availability.",
  },
  footNote: rtFootNote,
};
