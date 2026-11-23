import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Cisco Catalyst 9500 datasheet",
  // Local copy of Cisco's PDF (nb-06-cat9500-ser-data-sheet-cte-en.pdf, updated 6 October 2026)
  href: "/assets/datasheets/cisco/catalyst-9500-series-ds.pdf",
};

const HERO_IMG = `${SWITCH_IMG}/three-cisco-catalyst-9500-switches-stacked.webp`;

const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name}`,
});

// Generated from sw_cisco-catalyst-9500-series.html (Cisco pages dev pack)
export const catalyst9500: LogitechProductData = {
  slug: "cisco-catalyst-9500-series",
  seo: {
    title: "Buy Cisco Catalyst 9500 Switch Series in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 9500 Series core and aggregation switches in Dubai, with 25G to 400G ports and StackWise Virtual for redundancy.",
    ogTitle: "Cisco Catalyst 9500 Series Switches in Dubai | GS IT",
    ogDescription:
      "Cisco Catalyst 9500 and 9500X core switches for enterprise campuses in the UAE, with redundant power and StackWise Virtual, from GS IT.",
  },
  name: "Cisco Catalyst 9500 Series Switches",
  image: HERO_IMG,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Catalyst 9500 Series Switches" },
    ],
    gallery: [{ src: HERO_IMG, alt: "Three Cisco Catalyst 9500 switches stacked" }],
    tag: "Cisco core and aggregation switch",
    heading: "Cisco Catalyst 9500\n Series Switches",
    highlightLast: 2,
    description:
      "Fixed core and aggregation switches for enterprise campuses, with 10G to 400G ports and StackWise Virtual for redundancy.",
    pills: ["StackWise Virtual", "Redundant power and fans"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Catalyst 9500 and 9500X" },
      { label: "Switch type", value: "Fixed core and aggregation" },
      { label: "Port speeds", value: "1G to 400G (by model)" },
      { label: "Switching capacity", value: "Up to 12 Tbps (C9500X-28C8D)" },
      { label: "High availability", value: "StackWise Virtual, 1+1 power supplies" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Built for the core",
        text: "25G, 40G, 100G and 400G ports for campus aggregation and core layers",
      },
      {
        label: "No single point of failure",
        text: "pair two switches with StackWise Virtual, with dual power supplies and redundant fans",
      },
      {
        label: "Encryption on every link",
        text: "256-bit AES MACsec, and WAN MACsec on 9500X models",
      },
      {
        label: "Full routing",
        text: "OSPF, BGP, EIGRP, IS-IS, MPLS and VXLAN EVPN",
      },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Catalyst 9500 models\n for the campus core",
    highlightLast: 4,
    subhead: "Choose by port speed and density. We confirm the model, optics and power during the network design.",
    groups: [
      {
        label: "25G and 100G",
        title: "Catalyst 9500 high performance",
        description: "Fixed switches for campus aggregation and core, with 25G, 40G and 100G ports.",
        models: [
          model("C9500-24Y4C", "24× 1/10/25G SFP28 and 4× 40/100G", [
            "Up to 2 Tbps switching",
            "650 W AC or 930 W DC supplies, 1+1",
          ]),
          model("C9500-48Y4C", "48× 1/10/25G SFP28 and 4× 40/100G", [
            "Up to 3.2 Tbps switching",
            "650 W AC or 930 W DC supplies, 1+1",
          ]),
          model("C9500-32QC", "32× 40G, or 16× 100G", ["Up to 3.2 Tbps switching", "650 W AC or 930 W DC supplies, 1+1"]),
          model("C9500-32C", "32× 40/100G QSFP28", ["Up to 6.4 Tbps switching", "1600 W AC or DC supplies, 1+1"]),
        ],
      },
      {
        label: "9500X 400G",
        title: "Catalyst 9500X",
        description: "400G-ready switches for large campus cores and high-density aggregation.",
        models: [
          model("C9500X-28C8D", "28× 40/100G and 8× 40G to 400G", [
            "Up to 12 Tbps switching",
            "1500 W AC or DC supplies, 1+1",
            "Six fans, N+1",
          ]),
          model("C9500X-60L4D", "60× 10/25/50G and 4× 40G to 400G", [
            "Up to 9.2 Tbps switching",
            "1500 W AC or DC supplies, 1+1",
            "Six fans, N+1",
          ]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Core switching\n built for uptime",
    highlightLast: 3,
    subhead: "What the Catalyst 9500 brings to a campus core or aggregation layer.",
    data: [
      {
        icon: switchIcons.stack,
        title: "StackWise Virtual",
        description:
          "Two switches run as one, with multichassis EtherChannel, stateful switchover and in-service upgrades.",
        highlight: true,
      },
      {
        icon: switchIcons.pulse,
        title: "10G to 400G",
        description: "SFP28, QSFP28 and QSFP-DD ports for aggregation and core links, by model.",
      },
      {
        icon: switchIcons.plug,
        title: "Redundant hardware",
        description: "1+1 power supplies and redundant fans keep the core running through a component failure.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "256-bit MACsec",
        description: "AES-GCM encryption on every link, with WAN MACsec on 9500X models.",
      },
      {
        icon: switchIcons.route,
        title: "Advanced routing",
        description: "OSPF, BGP, EIGRP, IS-IS, MPLS and VXLAN EVPN for campus and data centre edge designs.",
      },
      {
        icon: switchIcons.chip,
        title: "Application hosting",
        description: "An x86 CPU with SSD storage runs containerised apps on the switch.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "The core of\n an enterprise campus",
    highlightLast: 3,
    paragraphs: [
      "The Catalyst 9500 is Cisco’s fixed core and aggregation switch. It connects access stacks, servers and the WAN edge, with the speed and redundancy the centre of the network needs.",
      "GS IT designs the core, pairs the switches with StackWise Virtual, then installs, configures and supports them after go-live.",
    ],
    facts: [
      { value: "12 Tbps", label: "switching on C9500X-28C8D" },
      { value: "400G", label: "ports on 9500X", dark: true },
      { value: "2", label: "switches in a StackWise Virtual pair" },
      { value: "1+1", label: "redundant power supplies" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 9500\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports",
          rows: [
            { label: "9500 high performance", value: "1/10/25G SFP28, 40G QSFP+ and 40/100G QSFP28" },
            { label: "9500X", value: "10/25/50G SFP56, 40/100G QSFP28, and 40G to 400G QSFP-DD" },
          ],
        },
        {
          title: "Performance",
          rows: [
            { label: "C9500X-28C8D", value: "Up to 12 Tbps" },
            { label: "C9500X-60L4D", value: "Up to 9.2 Tbps" },
            { label: "C9500-32C", value: "Up to 6.4 Tbps" },
            { label: "C9500-32QC and 48Y4C", value: "Up to 3.2 Tbps" },
            { label: "C9500-24Y4C", value: "Up to 2 Tbps" },
          ],
        },
        {
          title: "Power and cooling",
          rows: [
            { label: "Power supplies", value: "Dual 1+1 AC or DC; one ships by default" },
            { label: "Fans", value: "Up to five variable-speed fans; six N+1 fans on 9500X" },
          ],
        },
      ],
      [
        {
          title: "High availability",
          rows: [
            { label: "StackWise Virtual", value: "All current models" },
            { label: "Upgrades", value: "SSO and ISSU over StackWise Virtual" },
          ],
        },
        {
          title: "Software and licensing",
          rows: [
            { label: "Operating system", value: "Cisco IOS XE" },
            { label: "Network licence", value: "Network Essentials or Network Advantage (perpetual)" },
            {
              label: "Subscription",
              value:
                "Cisco DNA Essentials or Advantage, 3, 5 or 7 years; or Cisco Switching Essentials or Advantage, 36-month minimum",
            },
          ],
        },
        {
          title: "Security and routing",
          rows: [
            { label: "MACsec", value: "256-bit AES-GCM; WAN MACsec on 9500X with HSEC key" },
            { label: "Routing", value: "OSPF, BGP, EIGRP, IS-IS, MPLS, VXLAN EVPN" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 9500\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Where does the Catalyst 9500 fit in a network?",
        answer:
          "In the core or aggregation layer. It connects access switches such as the Catalyst 9200 and 9300, servers and the WAN edge.",
      },
      {
        question: "What is StackWise Virtual?",
        answer:
          "It pairs two Catalyst 9500 switches into one logical switch. Devices connect to both with a single EtherChannel, so the network keeps running if one switch fails.",
      },
      {
        question: "Should I choose the 9500 or 9500X?",
        answer:
          "The 9500 suits campuses with 10G and 25G access uplinks and 100G in the core. The 9500X adds 400G ports and higher switching capacity for large campuses.",
      },
      {
        question: "Are older 9500 models still available?",
        answer:
          "No. The C9500-12Q, 24Q and 40X stopped selling on 30 April 2024, and the C9500-16X on 30 April 2026. Cisco lists the C9500-48Y4C as the replacement for the 40X and the C9500-32C for the 24Q. We support existing units and plan replacements.",
      },
      {
        question: "What licences does the Catalyst 9500 need?",
        answer:
          "A perpetual Network Essentials or Network Advantage licence with a matching Cisco DNA subscription, or a Cisco Switching subscription. We include the right combination in the proposal.",
      },
      {
        question: "Do you install and support the Catalyst 9500?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Catalyst 9500 switches, then design, install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-catalyst-9500-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Catalyst 9500, model sizing and availability.",
  },
  footNote: switchFootNote,
};
