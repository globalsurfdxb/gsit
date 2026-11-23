import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Meraki MS130 datasheet",
  // Local copy of Meraki's PDF export of the MS130 Datasheet page (documentation.meraki.com, page modified 5 October 2026)
  href: "/assets/datasheets/cisco/meraki-ms130-series-ds.pdf",
};

const HERO_IMG = `${SWITCH_IMG}/cisco-meraki-ms130-switches-from-compact-8-port-to-48-port-models.webp`;

const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name}`,
});

// Generated from sw_cisco-meraki-ms130-series.html (Cisco pages dev pack)
export const merakiMs130: LogitechProductData = {
  slug: "cisco-meraki-ms130-series",
  seo: {
    title: "Shop Cisco Meraki MS130 Series Switches in Dubai | GS IT",
    description:
      "Buy Cisco Meraki MS130 cloud-managed switches in Dubai, from compact 8-port to 48-port models with PoE+ and 2.5G options.",
    ogTitle: "Cisco Meraki MS130 Series Switches in Dubai | GS IT",
    ogDescription:
      "Cloud-managed Cisco Meraki MS130 switches for branches, retail and small offices in the UAE, run from the Meraki dashboard. Supplied by GS IT.",
  },
  name: "Cisco Meraki MS130 Series Switches",
  image: HERO_IMG,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Meraki MS130 Series Switches" },
    ],
    gallery: [{ src: HERO_IMG, alt: "Cisco Meraki MS130 switches, from compact 8-port to 48-port models" }],
    tag: "Cisco Meraki cloud-managed switch",
    heading: "Cisco Meraki MS130\n Series Switches",
    highlightLast: 2,
    description:
      "Cloud-managed Layer 2 access switches for branches, retail and small offices, from compact 8-port models to 48-port rack switches.",
    pills: ["Cloud-managed", "Compact and rack models"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Series", value: "MS130" },
      { label: "Switch type", value: "Layer 2 access, cloud-managed" },
      { label: "Access ports", value: "8 to 48 (1G, with 2.5G on X models)" },
      { label: "Uplinks", value: "1G SFP or 10G SFP+" },
      { label: "PoE budget", value: "120 W to 740 W (PoE models)" },
    ],
    aboutTitle: "About this series",
    about: [
      {
        label: "Managed from anywhere",
        text: "set up, monitor and troubleshoot every switch from the Meraki dashboard",
      },
      { label: "Fits small spaces", text: "compact 8 and 12-port models mount on a desk or wall" },
      { label: "Power for devices", text: "30 W PoE+ per port, with budgets up to 740 W on 48-port models" },
      { label: "Faster access ports", text: "2.5G multigigabit and 10G SFP+ uplinks on X models" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Meraki MS130 models\n for branches and small sites",
    highlightLast: 5,
    subhead:
      "Choose by port count, PoE and uplink speed. We confirm the exact model during the network assessment.",
    groups: [
      {
        label: "Compact",
        title: "Compact models",
        description: "Desktop or wall-mount switches for shops, small offices and meeting rooms.",
        models: [
          model("MS130-8", "8× 1G, data only", ["2× 1G SFP uplinks", "Fanless, external power supply"]),
          model("MS130-8P", "8× 1G PoE+, 120 W budget", ["2× 1G SFP uplinks", "Fanless, external power supply"]),
          model("MS130-8P-I", "8× 1G PoE+, 120 W budget", ["2× 1G SFP uplinks", "Fanless, internal power supply"]),
          model("MS130-8X", "6× 1G and 2× 2.5G PoE+, 120 W budget", ["2× 10G SFP+ uplinks", "External power supply"]),
          model("MS130-12X", "8× 1G and 4× 2.5G PoE+, 240 W budget", ["2× 10G SFP+ uplinks", "External power supply"]),
        ],
      },
      {
        label: "24 and 48-port",
        title: "24 and 48-port models",
        description: "1U rack switches with a dedicated management port.",
        models: [
          model("MS130-24", "24× 1G, data only", ["4× 1G SFP uplinks", "Fanless"]),
          model("MS130-24P", "24× 1G PoE+, 370 W budget", ["4× 1G SFP uplinks"]),
          model("MS130-24X", "18× 1G and 6× 2.5G PoE+, 370 W budget", ["4× 10G SFP+ uplinks"]),
          model("MS130-48", "48× 1G, data only", ["4× 1G SFP uplinks", "Fanless"]),
          model("MS130-48P", "48× 1G PoE+, 740 W budget", ["4× 1G SFP uplinks"]),
          model("MS130-48X", "40× 1G and 8× 2.5G PoE+, 740 W budget", ["4× 10G SFP+ uplinks"]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Cloud-managed switching\n for every branch",
    highlightLast: 3,
    subhead: "What the Meraki MS130 brings to branch and small-site networks.",
    data: [
      {
        icon: switchIcons.cloud,
        title: "Meraki dashboard",
        description: "Zero-touch setup, network-wide visibility and remote troubleshooting from one dashboard.",
        highlight: true,
      },
      {
        icon: switchIcons.bolt,
        title: "PoE+ on every PoE port",
        description: "30 W PoE+ per port powers phones, cameras and access points.",
      },
      {
        icon: switchIcons.pulse,
        title: "2.5G multigigabit",
        description: "X models add 2.5G ports and 10G SFP+ uplinks for Wi-Fi 6 and newer access points.",
      },
      {
        icon: switchIcons.leaf,
        title: "Fanless options",
        description: "MS130-8, 8P, 8P-I, 24 and 48 run without fans, for quiet spaces.",
      },
      {
        icon: switchIcons.dashboard,
        title: "Compact form factors",
        description: "8 and 12-port models mount on a desk or wall where there is no rack.",
      },
      {
        icon: switchIcons.wrench,
        title: "Lifetime warranty",
        description: "Meraki MS switches include a limited lifetime hardware warranty.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Simple switching\n for distributed sites",
    highlightLast: 3,
    paragraphs: [
      "The MS130 brings Meraki cloud management to branches, shops and small offices. Every switch is configured and monitored from the dashboard, so remote sites need no local IT staff.",
      "GS IT sizes the right models and licences for each site, then installs, configures and supports them after go-live.",
    ],
    facts: [
      { value: "8 to 48", label: "ports per switch" },
      { value: "740 W", label: "PoE budget on 48P and 48X", dark: true },
      { value: "2.5G", label: "multigigabit on X models" },
      { value: "Lifetime", label: "limited hardware warranty" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MS130\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco Meraki datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "8, 12, 24 or 48 × 1G; 2.5G multigigabit on X models" },
            { label: "Uplinks", value: "2× or 4× 1G SFP; 2× or 4× 10G SFP+ on X models" },
            { label: "Management port", value: "Dedicated on 24 and 48-port models" },
          ],
        },
        {
          title: "PoE and power",
          rows: [
            { label: "PoE", value: "30 W per port" },
            { label: "PoE budgets", value: "120 W, 240 W, 370 W or 740 W by model" },
            { label: "Power supply", value: "External on MS130-8, 8P, 8X and 12X; internal on all others" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Mounting", value: "Desktop or wall (compact models); 1U rack (24 and 48-port)" },
            { label: "Fanless models", value: "MS130-8, 8P, 8P-I, 24 and 48" },
            { label: "Operating temperature", value: "0 to 45 °C" },
          ],
        },
      ],
      [
        {
          title: "Switching",
          rows: [
            { label: "Layer", value: "Layer 2, with DHCP relay" },
            { label: "Stacking", value: "Not supported" },
            { label: "Switching capacity", value: "20 Gbps to 200 Gbps by model" },
          ],
        },
        {
          title: "Licensing",
          rows: [
            { label: "Per device", value: "Enterprise or Advanced licence, by switch size" },
            { label: "Cisco Networking Subscription", value: "MS100 Small, Medium or Large, Essentials or Advantage" },
          ],
        },
        {
          title: "Management and warranty",
          rows: [
            { label: "Management", value: "Meraki dashboard" },
            { label: "Warranty", value: "Limited lifetime hardware warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Meraki MS130\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does the Meraki MS130 replace the MS120?",
        answer: "Yes. The MS120 reached end of sale in March 2025, and the MS130 is its replacement.",
      },
      {
        question: "Can MS130 switches be stacked?",
        answer: "No. The MS130 does not support stacking. For stacking, choose the Meraki MS150.",
      },
      {
        question: "Does the MS130 need a licence?",
        answer:
          "Yes. Every Meraki switch needs an active Meraki licence to run from the dashboard. We include the right licence term in the proposal.",
      },
      {
        question: "Which models suit a shop or small office with no rack?",
        answer: "The compact MS130-8, 8P, 8P-I, 8X and 12X mount on a desk or wall.",
      },
      {
        question: "Should I choose the MS130 or MS150?",
        answer:
          "The MS130 suits small sites that need simple Layer 2 switching. The MS150 adds stacking, static routing, 60 W PoE++ and 5G multigigabit models.",
      },
      {
        question: "Do you install and support Meraki switches?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Meraki MS130 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-meraki-ms130-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MS130, model sizing and availability.",
  },
  footNote: switchFootNote,
};
