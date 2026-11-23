import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Cisco Catalyst 9300 datasheet",
  // Local copy of Cisco's PDF (nb-06-cat9300-ser-data-sheet-cte-en.pdf, updated 21 October 2026, ~11 MB)
  href: "/assets/datasheets/cisco/catalyst-9300-series-ds.pdf",
};

const HERO_IMG = `${SWITCH_IMG}/a-stack-of-four-cisco-catalyst-9300-switches.webp`;

// Cards that cover several variants ("C9300-24T / 48T") label the button with the first one
const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name.split(" / ")[0]}`,
});

// Generated from sw_cisco-catalyst-9300-series.html (Cisco pages dev pack)
export const catalyst9300: LogitechProductData = {
  slug: "cisco-catalyst-9300-series",
  seo: {
    title: "Buy Cisco Catalyst 9300 Switch Series in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 9300 Series switches in Dubai: stackable enterprise access with UPOE+ up to 90 W, multigigabit and Meraki-managed 9300-M models.",
    ogTitle: "Cisco Catalyst 9300 Series Switches in Dubai | GS IT",
    ogDescription:
      "Cisco Catalyst 9300, 9300X, 9300L and 9300-M switches for business-critical campus networks in the UAE, supplied and supported by GS IT.",
  },
  name: "Cisco Catalyst 9300 Series Switches",
  image: HERO_IMG,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Catalyst 9300 Series Switches" },
    ],
    gallery: [{ src: HERO_IMG, alt: "A stack of four Cisco Catalyst 9300 switches" }],
    tag: "Cisco enterprise access switch",
    heading: "Cisco Catalyst 9300\n Series Switches",
    highlightLast: 2,
    description:
      "Stackable enterprise access switches for business-critical campus networks, with up to 90 W UPOE+, multigigabit ports and uplinks up to 100G.",
    pills: ["StackWise up to 1 Tbps", "Meraki-managed models"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Catalyst 9300, 9300X, 9300L and 9300LM" },
      { label: "Switch type", value: "Stackable enterprise access" },
      { label: "Access ports", value: "24 or 48 (1G, multigigabit up to 10G, or SFP/SFP28)" },
      { label: "Uplinks", value: "Modular up to 100G; fixed on 9300L and 9300LM" },
      { label: "PoE", value: "PoE+, UPOE 60 W and UPOE+ 90 W" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Power for demanding devices",
        text: "up to 90 W UPOE+ per port, and up to 384 PoE ports in one stack",
      },
      {
        label: "Stacking at scale",
        text: "StackWise-1T, 480 or 320 by model, with up to eight switches per stack",
      },
      {
        label: "Encryption on the wire",
        text: "256-bit MACsec, and line-rate IPsec on 9300X models",
      },
      {
        label: "Managed your way",
        text: "Catalyst Center and the CLI, or the Meraki dashboard on -M models",
      },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Catalyst 9300 models\n for every campus closet",
    highlightLast: 4,
    subhead:
      "Choose by port speed, power and uplinks. We confirm the exact model and network modules during the network assessment.",
    groups: [
      {
        label: "9300",
        title: "Catalyst 9300",
        description: "Modular-uplink access switches with StackWise-480 and StackPower.",
        models: [
          model("C9300-24T / 48T", "24 or 48× 1G, data only", ["Modular uplinks", "StackWise-480 and StackPower"]),
          model("C9300-24P / 48P", "24 or 48× 1G, PoE+", ["Modular uplinks", "StackWise-480 and StackPower"]),
          model("C9300-24U / 48U", "24 or 48× 1G, UPOE 60 W", ["Modular uplinks", "StackWise-480 and StackPower"]),
          model("C9300-24H / 48H", "24 or 48× 1G, UPOE+ 90 W", ["Modular uplinks", "StackWise-480 and StackPower"]),
          model("C9300-24UX / 48UXM / 48UN", "Multigigabit UPOE: 24× 10G, 12× 10G of 48, or 48× 5G", [
            "Modular uplinks",
            "StackWise-480 and StackPower",
          ]),
          model("C9300-24S / 48S", "24 or 48× 1G SFP fibre", ["Modular uplinks", "StackWise-480"]),
        ],
      },
      {
        label: "9300X",
        title: "Catalyst 9300X",
        description: "Higher-performance models with StackWise-1T, uplinks up to 100G and hardware IPsec.",
        models: [
          model("C9300X-24HX / 48HX", "24 or 48× multigigabit up to 10G, UPOE+ 90 W", [
            "Uplink modules up to 100G",
            "StackWise-1T",
          ]),
          model("C9300X-48HXN", "40× 5G and 8× 10G multigigabit, UPOE+ 90 W", [
            "Uplink modules up to 100G",
            "StackWise-1T",
          ]),
          model("C9300X-48TX", "48× multigigabit up to 10G, data only", ["Uplink modules up to 100G", "StackWise-1T"]),
          model("C9300X-12Y / 24Y", "12 or 24× 25G/10G/1G SFP28 fibre", ["Uplink modules up to 100G", "StackWise-1T"]),
        ],
      },
      {
        label: "9300L",
        title: "Catalyst 9300L",
        description: "Fixed-uplink models at a lower cost, with StackWise-320.",
        models: [
          model("C9300L-24T / 24P", "24× 1G, data only or PoE+", [
            "4× 1G SFP (-4G) or 4× 10G SFP+ (-4X)",
            "StackWise-320 with stack kit",
          ]),
          model("C9300L-48T / 48P / 48PF", "48× 1G, data only, PoE+ or full PoE+", [
            "4× 1G SFP (-4G) or 4× 10G SFP+ (-4X)",
            "StackWise-320 with stack kit",
          ]),
          model("C9300L-24UXG / 48UXG", "8 or 12 multigigabit ports plus 1G, UPOE", [
            "4× 10G SFP+ (-4X) or 2× 40G QSFP (-2Q)",
            "StackWise-320 with stack kit",
          ]),
        ],
      },
      {
        label: "9300LM",
        title: "Catalyst 9300LM",
        description: "Fixed-uplink models with 4× 25G uplinks on every model.",
        models: [
          model("C9300LM-24U-4Y / 48U-4Y", "24 or 48× 1G, UPOE", ["4× 25G uplinks", "StackWise-320"]),
          model("C9300LM-48T-4Y", "48× 1G, data only", ["4× 25G uplinks", "StackWise-320"]),
          model("C9300LM-48UX-4Y", "8× 10G multigigabit and 40× 1G, UPOE", ["4× 25G uplinks", "StackWise-320"]),
        ],
      },
      {
        label: "Meraki-managed",
        title: "Catalyst 9300-M",
        description:
          "Selected Catalyst 9300 and 9300L models ship for the Meraki dashboard. Cisco lists the 9300-M as the successor to the Meraki MS350.",
        models: [
          model(
            "Catalyst 9300-M",
            "Selected 9300 models, including multigigabit UPOE models such as C9300-24UX-M and C9300-48UN-M",
            ["Managed in the Meraki dashboard", "Separate Meraki licence term", "Layer 3 switching"],
          ),
          model("Catalyst 9300L-M", "Fixed-uplink 9300L models, such as C9300L-48PF-4X-M", [
            "Managed in the Meraki dashboard",
            "Separate Meraki licence term",
          ]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Enterprise access switching\n for business-critical networks",
    highlightLast: 3,
    subhead: "What the Catalyst 9300 brings to a campus or large office network.",
    data: [
      {
        icon: switchIcons.bolt,
        title: "Up to 90 W UPOE+",
        description:
          "Power access points, displays, lighting and building systems from the switch, with up to 90 W per port.",
        highlight: true,
      },
      {
        icon: switchIcons.stack,
        title: "Stacking and StackPower",
        description:
          "Up to eight switches per stack at up to 1 Tbps, with StackPower sharing power supplies across modular models.",
      },
      {
        icon: switchIcons.pulse,
        title: "Multigigabit and 25G",
        description: "Multigigabit access up to 10G and uplinks from 1G to 100G, by model and network module.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "MACsec and IPsec",
        description: "256-bit MACsec on the wire, and line-rate hardware IPsec up to 100G on 9300X models.",
      },
      {
        icon: switchIcons.route,
        title: "Full Layer 3",
        description:
          "Static, RIP and OSPF on Network Essentials; full OSPF, EIGRP, BGP and IS-IS on Network Advantage.",
      },
      {
        icon: switchIcons.chip,
        title: "Application hosting",
        description: "Run containerised apps on the switch, with external SSD storage up to 240 GB.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "The access layer\n for business-critical networks",
    highlightLast: 3,
    paragraphs: [
      "The Catalyst 9300 is Cisco’s stackable enterprise access switch. It suits large offices, campuses and networks where downtime is costly, with redundant power, high PoE budgets and full routing.",
      "GS IT sizes the right models, network modules and licences for your network, then installs, configures and supports them after go-live.",
    ],
    facts: [
      { value: "1 Tbps", label: "StackWise-1T on 9300X" },
      { value: "90 W", label: "UPOE+ per port", dark: true },
      { value: "Up to 8", label: "switches per stack" },
      { value: "384", label: "PoE ports per stack" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 9300\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "24 or 48 ports of 1G, multigigabit up to 10G, 1G SFP or 25G SFP28" },
            {
              label: "Uplinks, 9300 and 9300X",
              value: "Network modules: 4× 1G, 4× multigigabit, 8× 10G, 2× 25G, 2× 40G; 8× 25G and 2× or 4× 100G on 9300X",
            },
            { label: "Uplinks, 9300L", value: "Fixed: 4× 1G, 4× 10G or 2× 40G" },
            { label: "Uplinks, 9300LM", value: "Fixed: 4× 25G" },
          ],
        },
        {
          title: "PoE and power",
          rows: [
            { label: "PoE types", value: "PoE+, UPOE 60 W, UPOE+ 90 W" },
            { label: "Power supplies", value: "350 W, 715 W, 1100 W and 1900 W AC; DC options; dual redundant" },
            { label: "9300LM", value: "600 W and 1000 W supplies" },
            { label: "StackPower", value: "Modular-uplink models only" },
          ],
        },
        {
          title: "Stacking",
          rows: [
            { label: "9300X", value: "StackWise-1T" },
            { label: "9300", value: "StackWise-480" },
            { label: "9300L and 9300LM", value: "StackWise-320" },
            { label: "Stack size", value: "Up to 8 switches" },
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
              label: "Subscription",
              value:
                "Cisco DNA or Catalyst subscription, 3, 5 or 7 years; or Cisco Switching Essentials or Advantage, 36-month minimum",
            },
            { label: "9300-M", value: "Meraki licence term" },
          ],
        },
        {
          title: "Routing",
          rows: [
            { label: "Network Essentials", value: "Static, RIP, limited OSPF, policy-based routing" },
            { label: "Network Advantage", value: "Full OSPF, EIGRP, BGP, IS-IS, advanced multicast" },
          ],
        },
        {
          title: "Security",
          rows: [
            { label: "MACsec", value: "AES-256 (Network Advantage)" },
            { label: "IPsec", value: "Line rate up to 100G on 9300X, with HSEC licence" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 9300\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the 9300, 9300X, 9300L and 9300LM?",
        answer:
          "The 9300 has modular uplinks, StackWise-480 and StackPower. The 9300X adds StackWise-1T, uplinks up to 100G and hardware IPsec. The 9300L and 9300LM have fixed uplinks and StackWise-320 at a lower cost; the 9300LM has 4× 25G uplinks on every model.",
      },
      {
        question: "Should I choose the Catalyst 9300 or 9200?",
        answer:
          "The 9200 suits branch offices and midsize campuses. The 9300 suits larger or business-critical networks that need more PoE per port, higher stacking bandwidth, StackPower and full routing.",
      },
      {
        question: "Can the Catalyst 9300 be managed from the Meraki dashboard?",
        answer:
          "Yes. The Catalyst 9300-M and 9300L-M models are managed in the Meraki dashboard with a Meraki licence. Cisco lists the 9300-M as the successor to the Meraki MS350.",
      },
      {
        question: "What licences does the Catalyst 9300 need?",
        answer:
          "A perpetual Network Essentials or Network Advantage licence, plus a Cisco DNA or Catalyst subscription, or a Cisco Switching subscription. Meraki-managed models use a Meraki licence. We include the right combination in the proposal.",
      },
      {
        question: "Which models deliver 90 W UPOE+?",
        answer: "The C9300-24H and 48H, and the C9300X-24HX, 48HX and 48HXN.",
      },
      {
        question: "Do you install and support the Catalyst 9300?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Catalyst 9300 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-catalyst-9300-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Catalyst 9300, model sizing and availability.",
  },
  footNote: switchFootNote,
};
