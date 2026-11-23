import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Cisco Catalyst 9200 datasheet",
  // Local copy of Cisco's PDF (nb-06-cat9200-ser-data-sheet-cte-en.pdf, updated 5 November 2026)
  href: "/assets/datasheets/cisco/catalyst-9200-series-ds.pdf",
};

const HERO_IMG = `${SWITCH_IMG}/cisco-catalyst-9200-and-9200cx-switches-stacked-beside-a-laptop-showin.webp`;

// Cards that cover several variants ("C9200-24PB / 48PB") label the button with the first one
const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name.split(" / ")[0]}`,
});

// Generated from cisco-catalyst-9200-series.html (Cisco pages dev pack)
export const catalyst9200: LogitechProductData = {
  slug: "cisco-catalyst-9200-series",
  seo: {
    title: "Get Cisco Catalyst 9200 Switch Series in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 9200 Series switches in Dubai: stackable enterprise access with PoE+, multigigabit and compact 9200CX models.",
    ogTitle: "Cisco Catalyst 9200 Series Switches in Dubai | GS IT",
    ogDescription:
      "Stackable Cisco Catalyst 9200 access switches for branch offices and midsize campuses in the UAE, supplied, installed and supported by GS IT.",
  },
  name: "Cisco Catalyst 9200 Series Switches",
  image: HERO_IMG,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Catalyst 9200 Series Switches" },
    ],
    gallery: [
      {
        src: HERO_IMG,
        alt: "Cisco Catalyst 9200 and 9200CX switches stacked beside a laptop showing a network dashboard",
      },
    ],
    tag: "Cisco enterprise access switch",
    heading: "Cisco Catalyst 9200\n Series Switches",
    highlightLast: 2,
    description:
      "Fixed, stackable access switches for branch offices and midsize campuses, with PoE+, multigigabit and compact fanless models.",
    pills: ["Stackable (9200 and 9200L)", "PoE+ and UPOE models"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Catalyst 9200, 9200L and 9200CX" },
      { label: "Switch type", value: "Fixed, stackable access switch" },
      { label: "Access ports", value: "8 to 48 (by model)" },
      { label: "Port types", value: "1G and multigigabit up to 10G, with 1G to 40G uplinks" },
      { label: "Stacking", value: "Up to 160 Gbps (80 Gbps on 9200L)" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Power for every device",
        text: "30 W PoE+ on up to 48 ports, and 60 W UPOE on select compact models.",
      },
      {
        label: "Built to stay up",
        text: "field-replaceable power supplies and fans on modular 9200 models.",
      },
      {
        label: "Room to grow",
        text: "modular uplinks up to 40G on multigigabit models, and stacking so several switches run as one.",
      },
      {
        label: "Managed your way",
        text: "Catalyst Center, the CLI, or the Meraki dashboard on 9200L-M models.",
      },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Catalyst 9200 models\n for every closet and corner",
    highlightLast: 5,
    subhead:
      "Choose by port speed, power and space. We confirm the exact model and uplinks during the network assessment.",
    groups: [
      {
        label: "Multigigabit",
        title: "Multigigabit PoE+ models",
        description:
          "For Wi-Fi 6 and 6E access points and busier branches that need more than 1G to the access point.",
        models: [
          model("C9200-24PXG", "24 PoE+ ports: 8 multigigabit up to 10G and 16 up to 1G", [
            "Modular uplinks: 1/10G, 25G or 40G",
            "Stacking up to 160 Gbps",
            "Field-replaceable power supply and fans",
          ]),
          model("C9200-48PXG", "48 PoE+ ports: 8 multigigabit up to 10G and 40 up to 1G", [
            "Modular uplinks: 1/10G, 25G or 40G",
            "Stacking up to 160 Gbps",
            "Field-replaceable power supply and fans",
          ]),
          model("C9200L-24PXG", "24 PoE+ ports: 8 multigigabit up to 10G and 16 up to 1G", [
            "Fixed uplinks: 4× 1/10G (-4X) or 2× 1/10/25G (-2Y)",
            "Stacking up to 80 Gbps",
          ]),
          model("C9200L-48PXG", "48 PoE+ ports with multigigabit up to 10G", [
            "Fixed uplinks: 4× 1/10G (-4X) or 2× 1/10/25G (-2Y)",
            "Stacking up to 80 Gbps",
          ]),
        ],
      },
      {
        label: "PoE+",
        title: "1G PoE+ models",
        description: "For phones, cameras and access points across a branch or floor, with modular uplinks.",
        models: [
          model("C9200-24P", "24× 1G, full 30 W PoE+", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
            "600 W AC power supply",
          ]),
          model("C9200-48P", "48× 1G, full 30 W PoE+", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
            "1 kW AC power supply",
          ]),
          model("C9200-48PL", "48× 1G, partial PoE+ for lighter loads", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
            "600 W AC power supply",
          ]),
          model("C9200-24PB / 48PB", "24 or 48× 1G, full PoE+, enhanced virtual networks for SD-Access", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
          ]),
        ],
      },
      {
        label: "Data",
        title: "Data-only models",
        description: "For desktops, servers and printers that need wired connectivity but no PoE.",
        models: [
          model("C9200-24T", "24× 1G, data only", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
            "Field-replaceable power supply and fans",
          ]),
          model("C9200-48T", "48× 1G, data only", [
            "Modular uplinks: 1G or 10G",
            "Stacking up to 160 Gbps",
            "Field-replaceable power supply and fans",
          ]),
        ],
      },
      {
        label: "9200L fixed uplink",
        title: "Catalyst 9200L",
        description:
          "Fixed-uplink models for secure branches and entry-level enterprise networks, at a lower cost than modular 9200.",
        models: [
          model("C9200L-24T / 48T", "24 or 48× 1G, data only", [
            "Fixed uplinks: 4× 1G (-4G) or 4× 1/10G (-4X)",
            "Stacking up to 80 Gbps",
            "Also available Meraki-managed (9200L-M)",
          ]),
          model("C9200L-24P / 48P", "24 or 48× 1G, full 30 W PoE+", [
            "Fixed uplinks: 4× 1G (-4G) or 4× 1/10G (-4X)",
            "Stacking up to 80 Gbps",
            "Also available Meraki-managed (9200L-M)",
          ]),
          model("C9200L-48PL", "48× 1G, partial PoE+", [
            "Fixed uplinks: 4× 1G (-4G) or 4× 1/10G (-4X)",
            "Stacking up to 80 Gbps",
          ]),
        ],
      },
      {
        label: "9200CX compact",
        title: "Catalyst 9200CX",
        description:
          "Compact, fanless switches for classrooms, retail counters, offices and other spaces without a wiring closet. Not stackable.",
        models: [
          model("C9200CX-8P-2X2G", "8× 1G, full 30 W PoE+", [
            "Uplinks: 2× 1G copper and 2× 10G SFP+",
            "AC power; HVDC/AC option (-2XGH)",
            "Fanless, compact chassis",
          ]),
          model("C9200CX-12P-2X2G", "12× 1G, 30 W PoE+", [
            "Uplinks: 2× 1G copper and 2× 10G SFP+",
            "AC power; HVDC/AC option (-2XGH)",
            "Fanless, compact chassis",
          ]),
          model("C9200CX-12T-2X2G", "12× 1G, data only", [
            "Uplinks: 2× 1G copper and 2× 10G SFP+",
            "Powered by PoE from an upstream switch, or an optional 80 W adapter",
            "Fanless, compact chassis",
          ]),
          model("C9200CX-8UXG-2X", "8 UPOE ports, including multigigabit", [
            "Uplinks: 2× 10G SFP+",
            "AC power; HVDC/AC option (-2XH)",
            "Fanless, compact chassis",
          ]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Enterprise switching,\n sized for the branch",
    highlightLast: 4,
    subhead: "What the Catalyst 9200 brings to a branch or midsize campus network.",
    data: [
      {
        icon: switchIcons.bolt,
        title: "Full PoE+ on PoE models",
        description:
          "30 W PoE+ on every port of full-PoE models powers phones, cameras and access points without separate power points.",
        highlight: true,
      },
      {
        icon: switchIcons.sliders,
        title: "Resilient hardware",
        description: "Field-replaceable power supplies and fans on modular models keep the closet running.",
      },
      {
        icon: switchIcons.stack,
        title: "Stacking",
        description:
          "Stack up to eight 9200 or 9200L switches and manage them as one, with up to 160 Gbps of stacking bandwidth.",
      },
      {
        icon: switchIcons.pulse,
        title: "Multigigabit ready",
        description: "Multigigabit models deliver up to 10G to Wi-Fi 6 and 6E access points over existing cabling.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "Built-in security",
        description: "AES-128 MACsec encryption on the wire, 802.1X access control and network segmentation.",
      },
      {
        icon: switchIcons.burst,
        title: "SD-Access ready",
        description:
          "Supports Cisco SD-Access for automated, policy-based networks managed from Catalyst Center (limited on 9200L).",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Access switching\n for networks of every size",
    highlightLast: 5,
    paragraphs: [
      "The Catalyst 9200 brings the Catalyst 9000 platform to branch offices and midsize campuses: the same operating system, security and management as larger Cisco networks, at a size and cost that suits a single floor or site.",
      "GS IT sizes the right models and uplinks for your network, then installs, configures and supports them after go-live.",
    ],
    facts: [
      { value: "8 to 48", label: "access ports per switch" },
      { value: "160 Gbps", label: "stacking bandwidth", dark: true },
      { value: "Up to 10G", label: "multigigabit ports" },
      { value: "60 W", label: "UPOE on 9200CX-8UXG models" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 9200\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from Cisco's datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the Cisco datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "8, 12, 24 or 48 ports of 1G; multigigabit (up to 10G) on PXG and 8UXG models" },
            { label: "Uplinks, 9200", value: "Modular: 1G or 10G; 25G and 40G modules on PXG models" },
            { label: "Uplinks, 9200L", value: "Fixed: 4× 1G, 4× 1/10G, or 2× 1/10/25G on PXG-2Y models" },
            { label: "Uplinks, 9200CX", value: "Fixed: 2× 1G copper and 2× 10G SFP+; 10G SFP+ only on 8UXG" },
          ],
        },
        {
          title: "Power over Ethernet and power",
          rows: [
            { label: "PoE+", value: "30 W per port, on up to 48 ports" },
            { label: "UPOE", value: "60 W on 9200CX-8UXG models" },
            { label: "9200CX power", value: "315 W internal AC; HVDC/AC on -2XGH and -2XH variants" },
            { label: "Partial PoE", value: "C9200-48PL and C9200L-48PL, for lighter PoE loads" },
          ],
        },
        {
          title: "Stacking and resilience",
          rows: [
            { label: "Stacking, 9200", value: "Up to 160 Gbps, up to 8 switches" },
            { label: "Stacking, 9200L", value: "Up to 80 Gbps, up to 8 switches" },
            { label: "Field-replaceable", value: "9200: power supply and fans; 9200L: power supply only" },
            { label: "9200CX", value: "Fanless; not stackable" },
          ],
        },
      ],
      [
        {
          title: "Software and licensing",
          rows: [
            { label: "Operating system", value: "Cisco IOS XE" },
            { label: "Network licence", value: "Network Essentials or Network Advantage (perpetual)" },
            {
              label: "Add-on licence",
              value:
                "Cisco DNA or Catalyst Essentials or Advantage subscription (3, 5 or 7 years), or a Cisco Switching subscription",
            },
            { label: "Routing, Essentials", value: "Static, RIP and OSPF for routed access" },
            { label: "Routing, Advantage", value: "Adds full OSPF, EIGRP and IS-IS" },
          ],
        },
        {
          title: "Security",
          rows: [
            { label: "Encryption", value: "AES-128 MACsec (AES-256 on 9200CX)" },
            { label: "Access control", value: "802.1X, access lists" },
            { label: "Segmentation", value: "VLANs and Cisco SD-Access (limited on 9200L)" },
          ],
        },
        {
          title: "Management",
          rows: [
            { label: "On-premises", value: "Cisco Catalyst Center, CLI, web UI" },
            { label: "Cloud", value: "Meraki dashboard on 9200L-M models" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 9200\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the Catalyst 9200, 9200L and 9200CX?",
        answer:
          "The 9200 has modular uplinks, field-replaceable power and fans, and stacking up to 160 Gbps. The 9200L has fixed uplinks and stacking up to 80 Gbps, at a lower cost. The 9200CX is a compact, fanless switch for spaces without a wiring closet, and it cannot be stacked.",
      },
      {
        question: "Should I choose the Catalyst 9200 or 9300?",
        answer:
          "The 9200 suits branch offices and midsize campuses. The 9300 suits larger or business-critical networks that need higher stacking bandwidth, more PoE power per port and more advanced features. We recommend one after assessing your users and devices.",
      },
      {
        question: "Can the Catalyst 9200 power access points and cameras?",
        answer:
          "Yes, on PoE models. Full-PoE models deliver 30 W PoE+ on every port, enough for most access points, phones and cameras. PL models power only some ports, and the 9200CX-8UXG delivers 60 W UPOE for higher-power devices.",
      },
      {
        question: "Does the Catalyst 9200 need a licence?",
        answer:
          "Yes. Every switch comes with a perpetual Network Essentials or Network Advantage licence, plus a Cisco DNA or Catalyst subscription, or a Cisco Switching subscription. We include the right combination in the proposal.",
      },
      {
        question: "Can the Catalyst 9200 be managed from the cloud?",
        answer:
          "Yes. Catalyst 9200L-M models run on the Meraki dashboard. Other models are managed on-premises with Catalyst Center or the CLI.",
      },
      {
        question: "Do you install and support the Catalyst 9200?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Catalyst 9200 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  // Order as listed in the approved HTML
  relatedData: relatedSwitches("cisco-catalyst-9200-series", [
    "cisco-catalyst-1300-series",
    "cisco-catalyst-9300-series",
    "cisco-catalyst-9500-series",
    "cisco-meraki-ms130-series",
    "cisco-catalyst-1200-series",
    "cisco-meraki-ms150-series",
  ]),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Catalyst 9200, model sizing and availability.",
  },
  footNote: switchFootNote,
};
