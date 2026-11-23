import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Cisco Catalyst 1300 datasheet",
  // Local copy of Cisco's PDF (nb-06-cat1300-ser-data-sheet-cte-en.pdf, updated 5 November 2026)
  href: "/assets/datasheets/cisco/catalyst-1300-series-ds.pdf",
};

// Cards that cover several variants ("C1300-24P-4G / 24FP-4G") label the button with the first one
const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name.split(" / ")[0]}`,
});

// Generated from sw_cisco-catalyst-1300-series.html (Cisco pages dev pack)
export const catalyst1300: LogitechProductData = {
  slug: "cisco-catalyst-1300-series",
  seo: {
    title: "Buy Cisco Catalyst 1300 Series Switches in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 1300 Series managed switches in Dubai, with stacking on 10G models, multigigabit ports and up to 60 W PoE++.",
    ogTitle: "Cisco Catalyst 1300 Series Switches in Dubai | GS IT",
    ogDescription:
      "Managed Cisco Catalyst 1300 and 1300X switches for growing businesses in the UAE, with stacking up to eight switches and Layer 3 routing.",
  },
  name: "Cisco Catalyst 1300 Series Switches",
  image: `${SWITCH_IMG}/cisco-catalyst-1300-series-switches-in-8-16-24-and-48-port-sizes.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Catalyst 1300 Series Switches" },
    ],
    gallery: [
      {
        src: `${SWITCH_IMG}/cisco-catalyst-1300-series-switches-in-8-16-24-and-48-port-sizes.webp`,
        alt: "Cisco Catalyst 1300 Series switches in 8, 16, 24 and 48-port sizes",
      },
    ],
    tag: "Cisco managed business switch",
    heading: "Cisco Catalyst 1300\n Series Switches",
    highlightLast: 2,
    description:
      "Managed Gigabit and multigigabit switches for small and midsize businesses, with stacking on 10G models and Layer 3 routing.",
    pills: ["Stackable (10G models)", "60 W PoE++ on 1300X models"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Catalyst 1300 and 1300X" },
      { label: "Switch type", value: "Managed, fixed configuration" },
      { label: "Access ports", value: "8 to 48 (1G, 2.5G, 5G or 10G by model)" },
      { label: "Uplinks", value: "1G SFP, 10G SFP+ or SFP28" },
      { label: "Stacking", value: "Up to 8 switches (selected models)" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Grow without rewiring",
        text: "stack up to eight switches over 10G links and manage them as one, with hardware failover",
      },
      {
        label: "Faster access ports",
        text: "2.5G and 5G multigigabit models for Wi-Fi 6 and Wi-Fi 7 access points",
      },
      {
        label: "Power for every device",
        text: "30 W PoE+ with budgets up to 740 W, and 60 W PoE++ on 1300X models",
      },
      {
        label: "Routing built in",
        text: "static and RIP routing, with OSPF on 1300X models",
      },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Catalyst 1300 models\n for growing networks",
    highlightLast: 3,
    subhead:
      "Choose by port speed, PoE budget and whether you need stacking. We confirm the exact model during the network assessment.",
    groups: [
      {
        label: "Gigabit",
        title: "Gigabit models with 1G uplinks",
        description: "Access switches for offices and branches with phones, cameras and access points.",
        models: [
          model("C1300-8P-E-2G / 8FP-2G", "8× 1G PoE+, 67 W or 120 W budget", ["2× 1G uplinks", "Compact chassis"]),
          model("C1300-16P-2G / 16FP-2G", "16× 1G PoE+, 120 W or 240 W budget", ["2× 1G uplinks"]),
          model("C1300-24P-4G / 24FP-4G", "24× 1G PoE+, 195 W or 375 W budget", ["4× 1G SFP uplinks", "Rack-mountable"]),
          model("C1300-48P-4G / 48FP-4G", "48× 1G PoE+, 375 W or 740 W budget", ["4× 1G SFP uplinks", "Rack-mountable"]),
        ],
      },
      {
        label: "10G uplinks",
        title: "Gigabit models with 10G uplinks",
        description: "Stackable access switches with 4× 10G SFP+ uplinks.",
        models: [
          model("C1300-16P-4X", "16× 1G PoE+, 120 W budget", ["4× 10G SFP+ uplinks", "Stackable up to 8"]),
          model("C1300-24T-4X / 24P-4X / 24FP-4X", "24× 1G, data only or PoE+ (195 W or 375 W)", [
            "4× 10G SFP+ uplinks",
            "Stackable up to 8",
          ]),
          model("C1300-48T-4X / 48P-4X / 48FP-4X", "48× 1G, data only or PoE+ (375 W or 740 W)", [
            "4× 10G SFP+ uplinks",
            "Stackable up to 8",
          ]),
        ],
      },
      {
        label: "Multigigabit",
        title: "2.5G multigigabit models",
        description: "For Wi-Fi 6 and 6E access points that need more than 1G over existing cabling.",
        models: [
          model("C1300-8MGP-2X", "8× 2.5G PoE+, 120 W budget", ["2× 10G SFP+ uplinks"]),
          model("C1300-24MGP-4X", "24 PoE+ ports with 2.5G, 375 W budget", ["4× 10G SFP+ uplinks"]),
          model("C1300-48MGP-4X", "32× 1G and 16× 2.5G PoE+, 740 W budget", ["4× 10G SFP+ uplinks"]),
        ],
      },
      {
        label: "10G aggregation",
        title: "10G aggregation models",
        description:
          "10G copper and fibre switches to connect access switches and servers. Stackable with each other.",
        models: [
          model("C1300-12XT-2X / 24XT", "12 or 24× 10G copper", ["C1300-12XT-2X adds 2× 10G SFP+", "Stackable up to 8"]),
          model("C1300-12XS / 24XS", "12 or 24× 10G SFP+ fibre", ["Stackable up to 8"]),
          model("C1300-16XTS / 24XTS", "Mix of 10G copper and 10G SFP+", ["Stackable up to 8"]),
        ],
      },
      {
        label: "1300X",
        title: "Catalyst 1300X models",
        description: "Higher-scale models with OSPF routing, SFP28 ports and 60 W PoE++ options.",
        models: [
          model("C1300X-24P-4X / 48P-4X", "24 or 48× 1G PoE+, 385 W or 740 W budget", [
            "4× SFP28: 10G uplinks, 25G for stacking",
          ]),
          model("C1300X-24MU-4X", "24× 2.5G, 8 of them 60 W PoE++, 740 W budget", [
            "4× SFP28: 10G uplinks, 25G for stacking",
          ]),
          model("C1300X-10NU-2X", "10× 5G, 60 W PoE++, 385 W budget", ["2× SFP28: 10G uplinks, 25G for stacking"]),
          model("C1300X-24NGU-4X / 48NGU-4X", "16 or 40× 1G plus 8× 5G, 740 W budget", [
            "4× SFP28: 10G uplinks, 25G for stacking",
          ]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Managed switching\n that scales with the business",
    highlightLast: 5,
    subhead: "What the Catalyst 1300 brings to a small or midsize network.",
    data: [
      {
        icon: switchIcons.stack,
        title: "Stacking up to eight",
        description:
          "10G models stack over front-panel ports and run as one switch with one IP address and hardware failover.",
        highlight: true,
      },
      {
        icon: switchIcons.pulse,
        title: "Multigigabit options",
        description: "2.5G and 5G ports give new access points more than 1G over the cabling you already have.",
      },
      {
        icon: switchIcons.bolt,
        title: "PoE+ and PoE++",
        description: "30 W PoE+ with budgets up to 740 W, and 60 W PoE++ on 1300X models for higher-power devices.",
      },
      {
        icon: switchIcons.route,
        title: "Layer 3 routing",
        description: "Static and RIP v2 routing on every model, and OSPF on 1300X models.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "Access security",
        description: "802.1X and web-based authentication to control which devices join the network.",
      },
      {
        icon: switchIcons.dashboard,
        title: "Flexible management",
        description: "Web interface or CLI, with Cisco Business Dashboard for multi-site visibility.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Business switching\n with room to grow",
    highlightLast: 4,
    paragraphs: [
      "The Catalyst 1300 is a fully managed business switch: stacking, routing and multigigabit options in a range that fits small and midsize organisations, without enterprise licensing.",
      "GS IT sizes the right models, uplinks and stack for your network, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "Up to 8", label: "switches per stack" },
      { value: "740 W", label: "maximum PoE budget", dark: true },
      { value: "60 W", label: "PoE++ on 1300X models" },
      { value: "7,168", label: "IPv4 routes on 10G and 1300X models" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 1300\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "8, 10, 16, 24 or 48 ports of 1G, 2.5G, 5G or 10G" },
            { label: "Uplinks", value: "1G SFP, 10G SFP+, or SFP28 on 1300X (10G uplink, 25G for stacking)" },
          ],
        },
        {
          title: "PoE and power",
          rows: [
            { label: "PoE standard", value: "802.3af and 802.3at PoE+, 30 W per port; 802.3bt PoE++ up to 60 W on 1300X" },
            { label: "PoE budgets", value: "67 W to 740 W by model" },
          ],
        },
        {
          title: "Stacking",
          rows: [
            { label: "Stack size", value: "Up to 8 switches, managed as one with hardware failover" },
            { label: "Stack links", value: "10G ports; 25G on 1300X" },
            { label: "Compatibility", value: "Only models from the same family stack together" },
          ],
        },
      ],
      [
        {
          title: "Layer 3",
          rows: [
            { label: "Routing", value: "Static, RIP v2; OSPF on 1300X" },
            { label: "Scale, 1G models", value: "Up to 990 IPv4 routes and 128 IP interfaces" },
            { label: "Scale, 10G and 1300X", value: "Up to 7,168 IPv4 routes and 256 IP interfaces" },
          ],
        },
        {
          title: "Security",
          rows: [
            { label: "Access control", value: "802.1X, web-based authentication" },
            { label: "Network", value: "VLANs, access lists" },
          ],
        },
        {
          title: "Management",
          rows: [
            { label: "Interfaces", value: "Web UI and CLI" },
            { label: "Tools", value: "Cisco Business Dashboard" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 1300\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the Catalyst 1300 and 1300X?",
        answer:
          "The 1300X adds OSPF routing, SFP28 ports that stack at 25G, and 5G multigigabit and 60 W PoE++ options. The standard 1300 routes with static and RIP v2.",
      },
      {
        question: "Which Catalyst 1300 models can be stacked?",
        answer:
          "Stacking is supported on 10G models. Switches stack only with models from the same family, for example 1G access models with 10G uplinks, or 10G aggregation models.",
      },
      {
        question: "Should I choose the Catalyst 1300 or 9200?",
        answer:
          "The 1300 suits small and midsize businesses that want managed switching without licences. The 9200 runs Cisco IOS XE, connects to Catalyst Center and SD-Access, and suits networks that follow enterprise standards.",
      },
      {
        question: "Can the Catalyst 1300 power Wi-Fi 7 access points?",
        answer:
          "Yes on the right models. Multigigabit models give access points more than 1G, and 1300X models deliver up to 60 W PoE++.",
      },
      {
        question: "Does the Catalyst 1300 need a licence?",
        answer: "No software licence is listed in Cisco’s datasheet. Routing and stacking come with the switch.",
      },
      {
        question: "Do you install and support the Catalyst 1300?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Catalyst 1300 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-catalyst-1300-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Catalyst 1300, model sizing and availability.",
  },
  footNote: switchFootNote,
};
