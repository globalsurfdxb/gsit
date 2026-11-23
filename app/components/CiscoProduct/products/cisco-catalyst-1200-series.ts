import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Cisco Catalyst 1200 datasheet",
  // Local copy of Cisco's PDF (nb-06-cat1200-ser-data-sheet-cte-en.pdf, updated 7 August 2026)
  href: "/assets/datasheets/cisco/catalyst-1200-series-ds.pdf",
};

const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name}`,
});

// Generated from sw_cisco-catalyst-1200-series.html (Cisco pages dev pack)
export const catalyst1200: LogitechProductData = {
  slug: "cisco-catalyst-1200-series",
  seo: {
    title: "Get Cisco Catalyst 1200 Switch Series in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 1200 Series smart managed switches in Dubai, with 8 to 48 Gigabit ports, PoE+ up to 740 W and 10G uplinks.",
    ogTitle: "Cisco Catalyst 1200 Series Switches in Dubai | GS IT",
    ogDescription:
      "Smart managed Cisco Catalyst 1200 switches for small offices and branches in the UAE, with PoE+, fanless models and a limited lifetime warranty.",
  },
  name: "Cisco Catalyst 1200 Series Switches",
  image: `${SWITCH_IMG}/cisco-catalyst-1200-series-switches-in-8-16-24-and-48-port-sizes.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Catalyst 1200 Series Switches" },
    ],
    gallery: [
      {
        src: `${SWITCH_IMG}/cisco-catalyst-1200-series-switches-in-8-16-24-and-48-port-sizes.webp`,
        alt: "Cisco Catalyst 1200 Series switches in 8, 16, 24 and 48-port sizes",
      },
    ],
    tag: "Cisco smart managed switch",
    heading: "Cisco Catalyst 1200\n Series Switches",
    highlightLast: 2,
    description:
      "Smart managed Gigabit switches for small businesses and branch offices, with PoE+ models and 1G or 10G uplinks.",
    pills: ["No licence to buy", "Limited lifetime warranty"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Catalyst 1200" },
      { label: "Switch type", value: "Smart managed, fixed configuration" },
      { label: "Access ports", value: "8 to 48 × 1G (by model)" },
      { label: "Uplinks", value: "1G combo, 1G SFP or 10G SFP+" },
      { label: "PoE budget", value: "67 W to 740 W (PoE models)" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Power for every device",
        text: "30 W PoE+ per port, with budgets from 67 W on 8-port models to 740 W on 48FP models",
      },
      {
        label: "Quiet where people work",
        text: "fanless 8, 16 and most 24-port models suit offices and shop floors",
      },
      {
        label: "Simple to run",
        text: "web interface, CLI, Cisco Business Dashboard and the Cisco Business mobile app",
      },
      {
        label: "Secure access",
        text: "802.1X, port security, access lists and DoS prevention",
      },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Catalyst 1200 models\n for small offices and branches",
    highlightLast: 5,
    subhead:
      "Choose by port count, PoE budget and uplink speed. We confirm the exact model during the network assessment.",
    groups: [
      {
        label: "8 and 16-port",
        title: "8 and 16-port models",
        description:
          "Desktop and small rack switches for small offices, shops and meeting rooms. All are fanless.",
        models: [
          model("C1200-8T-D", "8× 1G, data only", ["No uplink ports", "Desktop, fanless"]),
          model("C1200-8T-E-2G", "8× 1G, data only", ["2× 1G combo uplinks", "Fanless"]),
          model("C1200-8P-E-2G", "8× 1G PoE+, 67 W budget", ["2× 1G combo uplinks", "Fanless"]),
          model("C1200-8FP-2G", "8× 1G PoE+, 120 W budget", ["2× 1G combo uplinks", "Fanless"]),
          model("C1200-16T-2G", "16× 1G, data only", ["2× 1G SFP uplinks", "Fanless"]),
          model("C1200-16P-2G", "16× 1G PoE+, 120 W budget", ["2× 1G SFP uplinks", "Fanless"]),
        ],
      },
      {
        label: "1G uplinks",
        title: "24 and 48-port models with 1G uplinks",
        description: "Rack switches for a floor or small office, with 4× 1G SFP uplinks.",
        models: [
          model("C1200-24T-4G", "24× 1G, data only", ["4× 1G SFP uplinks", "Fanless"]),
          model("C1200-24P-4G", "24× 1G PoE+, 195 W budget", ["4× 1G SFP uplinks", "Fanless"]),
          model("C1200-24FP-4G", "24× 1G PoE+, 375 W budget", ["4× 1G SFP uplinks", "One fan"]),
          model("C1200-48T-4G", "48× 1G, data only", ["4× 1G SFP uplinks", "One fan"]),
          model("C1200-48P-4G", "48× 1G PoE+, 375 W budget", ["4× 1G SFP uplinks", "One fan"]),
          model("C1200-48FP-4G", "48× 1G PoE+, 740 W budget", ["4× 1G SFP uplinks", "One fan"]),
        ],
      },
      {
        label: "10G uplinks",
        title: "24 and 48-port models with 10G uplinks",
        description:
          "The same access ports with 4× 10G SFP+ uplinks, for faster links to the core or to a server.",
        models: [
          model("C1200-24T-4X", "24× 1G, data only", ["4× 10G SFP+ uplinks", "Fanless"]),
          model("C1200-24P-4X", "24× 1G PoE+, 195 W budget", ["4× 10G SFP+ uplinks", "Fanless"]),
          model("C1200-24FP-4X", "24× 1G PoE+, 375 W budget", ["4× 10G SFP+ uplinks", "One fan"]),
          model("C1200-48T-4X", "48× 1G, data only", ["4× 10G SFP+ uplinks", "One fan"]),
          model("C1200-48P-4X", "48× 1G PoE+, 375 W budget", ["4× 10G SFP+ uplinks", "One fan"]),
          model("C1200-48FP-4X", "48× 1G PoE+, 740 W budget", ["4× 10G SFP+ uplinks", "One fan"]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Business-grade switching,\n without the complexity",
    highlightLast: 3,
    subhead: "What the Catalyst 1200 brings to a small office or branch network.",
    data: [
      {
        icon: switchIcons.bolt,
        title: "PoE+ for phones, cameras and access points",
        description:
          "30 W PoE+ per port, with time-based PoE to switch devices off outside working hours.",
        highlight: true,
      },
      {
        icon: switchIcons.leaf,
        title: "Fanless and efficient",
        description:
          "Fanless designs on smaller models, plus Energy Efficient Ethernet and port power-off when a link is down.",
      },
      {
        icon: switchIcons.route,
        title: "Static routing",
        description: "Up to 32 static routes and 16 IP interfaces, with IPv4 and IPv6 routing at wire speed.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "Access security",
        description: "802.1X, port security, RADIUS, SSH, access lists of up to 512 rules and DoS prevention.",
      },
      {
        icon: switchIcons.dashboard,
        title: "Easy management",
        description: "Web interface, CLI, Cisco Business Dashboard and the Cisco Business mobile app.",
      },
      {
        icon: switchIcons.wrench,
        title: "Lifetime warranty",
        description: "Limited lifetime hardware warranty with return-to-factory replacement.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Reliable switching\n for small businesses",
    highlightLast: 3,
    paragraphs: [
      "The Catalyst 1200 gives small offices, shops and branches a managed network without enterprise licensing: VLANs, PoE+, security and static routing in a switch that is quick to set up.",
      "GS IT sizes the right model and PoE budget for your devices, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "8 to 48", label: "Gigabit ports per switch" },
      { value: "740 W", label: "PoE budget on 48FP models", dark: true },
      { value: "32", label: "static routes" },
      { value: "Lifetime", label: "limited hardware warranty" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 1200\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "8, 16, 24 or 48 × 1G copper" },
            { label: "Uplinks", value: "2× 1G combo (8-port), 2× or 4× 1G SFP, or 4× 10G SFP+ (-4X models)" },
            { label: "Combo ports", value: "One active port at a time: copper or SFP" },
          ],
        },
        {
          title: "PoE and power",
          rows: [
            { label: "PoE standard", value: "802.3af PoE and 802.3at PoE+, 30 W per port" },
            { label: "PoE budgets", value: "67 W, 120 W, 195 W, 375 W or 740 W by model" },
            { label: "Energy", value: "Energy Efficient Ethernet, energy detect, time-based PoE and port scheduling" },
          ],
        },
        {
          title: "Layer 3",
          rows: [
            { label: "Routing", value: "Static routing only" },
            { label: "Scale", value: "Up to 32 static routes and 16 IP interfaces" },
            { label: "Other", value: "DHCP relay, UDP relay, CIDR" },
          ],
        },
      ],
      [
        {
          title: "Security",
          rows: [
            { label: "Access control", value: "802.1X, port security, RADIUS" },
            { label: "Access lists", value: "Up to 512 rules, ingress and egress" },
            { label: "Protection", value: "Storm control, DoS prevention, SSH and HTTPS management" },
          ],
        },
        {
          title: "Management",
          rows: [
            { label: "Interfaces", value: "Web UI, CLI, SNMP" },
            { label: "Tools", value: "Cisco Business Dashboard, Cisco Business mobile app, PnP agent" },
            { label: "Stacking", value: "Not supported" },
          ],
        },
        {
          title: "Warranty",
          rows: [
            { label: "Hardware", value: "Limited lifetime, return to factory" },
            { label: "Support", value: "One year of Small Business Support Center access included" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 1200\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the Catalyst 1200 and 1300?",
        answer:
          "The 1200 is smart managed, with static routing only and no stacking. The 1300 is fully managed, adds dynamic routing and multigigabit models, and stacks up to eight switches on 10G models.",
      },
      {
        question: "Can the Catalyst 1200 be stacked?",
        answer: "No. If you need several switches managed as one, the Catalyst 1300 or Meraki MS150 is the better fit.",
      },
      {
        question: "Which models are silent?",
        answer: "The 8-port, 16-port and most 24-port models are fanless. The 24FP and all 48-port models have one fan.",
      },
      {
        question: "Does the Catalyst 1200 need a licence?",
        answer: "No software licence is listed in Cisco’s datasheet. The features come with the switch.",
      },
      {
        question: "Can it power access points and cameras?",
        answer: "Yes, on P and FP models. Every PoE port delivers up to 30 W PoE+. We size the PoE budget to your devices.",
      },
      {
        question: "Do you install and support the Catalyst 1200?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Catalyst 1200 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-catalyst-1200-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Catalyst 1200, model sizing and availability.",
  },
  footNote: switchFootNote,
};
