import type { LogitechProductData } from "../Index";
import type { ModelItem } from "../Sections/ModelsTabs";
import { storeCrumbs, heroButtons } from "../shared";
import { SWITCH_IMG, SWITCH_CATEGORY_URL, switchIcons, relatedSwitches, switchFootNote } from "./switches-shared";

const DATASHEET = {
  text: "Meraki MS150 datasheet",
  // Local copy of Meraki's PDF export of the MS150 Datasheet page (documentation.meraki.com, page modified 16 September 2026)
  href: "/assets/datasheets/cisco/meraki-ms150-series-ds.pdf",
};

const HERO_IMG = `${SWITCH_IMG}/two-cisco-meraki-ms150-switches-24-and-48-port.webp`;

const model = (name: string, desc: string, points: string[]): ModelItem => ({
  name,
  desc,
  points,
  enquireLabel: `Enquire about ${name}`,
});

// Generated from sw_cisco-meraki-ms150-series.html (Cisco pages dev pack)
export const merakiMs150: LogitechProductData = {
  slug: "cisco-meraki-ms150-series",
  seo: {
    title: "Buy Cisco Meraki MS150 Series Switches in Dubai | GS IT",
    description:
      "Buy Cisco Meraki MS150 stackable, cloud-managed switches in Dubai, with up to 740 W PoE and 5G multigigabit models.",
    ogTitle: "Cisco Meraki MS150 Series Switches in Dubai | GS IT",
    ogDescription:
      "Stackable, cloud-managed Cisco Meraki MS150 switches for branches and campuses in the UAE, the replacement for the MS210. Supplied by GS IT.",
  },
  name: "Cisco Meraki MS150 Series Switches",
  image: HERO_IMG,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Switches" },
      { label: "Cisco", href: SWITCH_CATEGORY_URL },
      { label: "Meraki MS150 Series Switches" },
    ],
    gallery: [{ src: HERO_IMG, alt: "Two Cisco Meraki MS150 switches, 24 and 48-port" }],
    tag: "Cisco Meraki cloud-managed switch",
    heading: "Cisco Meraki MS150\n Series Switches",
    highlightLast: 2,
    description:
      "Stackable, cloud-managed access switches for branches and campuses, with up to 740 W of PoE and 5G multigigabit models.",
    pills: ["Stackable", "60 W PoE++ on MP models"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Series", value: "MS150" },
      { label: "Switch type", value: "Stackable access, cloud-managed" },
      { label: "Access ports", value: "24 or 48 (1G, with 5G on MP models)" },
      { label: "Uplinks", value: "4× 1G SFP or 4× 10G SFP+" },
      { label: "Stacking", value: "80 Gbps, 2 dedicated stacking ports" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Stack and manage as one", text: "two dedicated stacking ports with 80 Gbps of stacking bandwidth" },
      {
        label: "Power for Wi-Fi 7 and IoT",
        text: "up to 740 W PoE, and 60 W PoE++ on multigigabit ports of MP models",
      },
      { label: "Fits shallow racks", text: "24-port models are 25 cm deep; 48-port models 34 cm" },
      { label: "Managed from anywhere", text: "set up, monitor and troubleshoot from the Meraki dashboard" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Meraki MS150 models\n for branches and campuses",
    highlightLast: 4,
    subhead:
      "Choose by port count, PoE budget and uplink speed. We confirm the exact model during the network assessment.",
    groups: [
      {
        label: "1G uplinks",
        title: "Models with 1G uplinks",
        description: "Stackable access switches with 4× 1G SFP uplinks.",
        models: [
          model("MS150-24T-4G", "24× 1G, data only", ["4× 1G SFP uplinks", "80 Gbps stacking"]),
          model("MS150-24P-4G", "24× 1G PoE+, 370 W budget", ["4× 1G SFP uplinks", "80 Gbps stacking"]),
          model("MS150-48T-4G", "48× 1G, data only", ["4× 1G SFP uplinks", "80 Gbps stacking"]),
          model("MS150-48LP-4G", "48× 1G PoE+, 370 W budget", ["4× 1G SFP uplinks", "80 Gbps stacking"]),
          model("MS150-48FP-4G", "48× 1G PoE+, 740 W budget", ["4× 1G SFP uplinks", "80 Gbps stacking"]),
        ],
      },
      {
        label: "10G uplinks",
        title: "Models with 10G uplinks",
        description: "The same access ports with 4× 10G SFP+ uplinks.",
        models: [
          model("MS150-24T-4X", "24× 1G, data only", ["4× 10G SFP+ uplinks", "80 Gbps stacking"]),
          model("MS150-24P-4X", "24× 1G PoE+, 370 W budget", ["4× 10G SFP+ uplinks", "80 Gbps stacking"]),
          model("MS150-48T-4X", "48× 1G, data only", ["4× 10G SFP+ uplinks", "80 Gbps stacking"]),
          model("MS150-48LP-4X", "48× 1G PoE+, 370 W budget", ["4× 10G SFP+ uplinks", "80 Gbps stacking"]),
          model("MS150-48FP-4X", "48× 1G PoE+, 740 W budget", ["4× 10G SFP+ uplinks", "80 Gbps stacking"]),
        ],
      },
      {
        label: "Multigigabit",
        title: "Multigigabit models",
        description: "For Wi-Fi 6E and Wi-Fi 7 access points that need more than 1G and higher PoE.",
        models: [
          model("MS150-24MP-4X", "16× 1G and 8× 5G, 370 W budget", [
            "60 W PoE++ on the 5G ports",
            "4× 10G SFP+ uplinks",
            "80 Gbps stacking",
          ]),
          model("MS150-48MP-4X", "32× 1G and 16× 5G, 740 W budget", [
            "60 W PoE++ on the 5G ports",
            "4× 10G SFP+ uplinks",
            "80 Gbps stacking",
          ]),
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Stackable cloud switching\n for growing sites",
    highlightLast: 3,
    subhead: "What the Meraki MS150 brings to branch and campus access networks.",
    data: [
      {
        icon: switchIcons.stack,
        title: "Physical stacking",
        description:
          "Two dedicated stacking ports with 80 Gbps of stacking bandwidth, so a closet runs as one switch.",
        highlight: true,
      },
      {
        icon: switchIcons.bolt,
        title: "Up to 740 W PoE",
        description: "30 W per port, and 60 W PoE++ on the 5G ports of MP models.",
      },
      {
        icon: switchIcons.pulse,
        title: "5G multigigabit",
        description: "MP models give Wi-Fi 6E and Wi-Fi 7 access points more than 1G over existing cabling.",
      },
      {
        icon: switchIcons.route,
        title: "Static routing",
        description: "Layer 3 static routing for simple routed designs at the access layer.",
      },
      {
        icon: switchIcons.shieldLock,
        title: "Access security",
        description:
          "802.1X, access lists, Dynamic ARP Inspection and DHCP snooping, with Adaptive Policy on the Advanced licence.",
      },
      {
        icon: switchIcons.cloud,
        title: "Meraki dashboard",
        description: "Zero-touch setup, network-wide visibility and remote troubleshooting from one dashboard.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Stackable switching\n from the cloud",
    highlightLast: 3,
    paragraphs: [
      "The MS150 brings stacking and higher PoE to Meraki access switching. It replaces the MS210 and suits branches and campus floors that want cloud management with room to grow.",
      "GS IT sizes the right models, stacks and licences for each site, then installs, configures and supports them after go-live.",
    ],
    facts: [
      { value: "80 Gbps", label: "stacking bandwidth" },
      { value: "740 W", label: "PoE budget on FP and 48MP", dark: true },
      { value: "60 W", label: "PoE++ on MP models" },
      { value: "25 cm", label: "depth of 24-port models" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MS150\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco Meraki datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Ports and uplinks",
          rows: [
            { label: "Access ports", value: "24 or 48 × 1G; 8 or 16 × 5G on MP models" },
            { label: "Uplinks", value: "4× 1G SFP (-4G) or 4× 10G SFP+ (-4X)" },
            { label: "Management port", value: "1 dedicated" },
          ],
        },
        {
          title: "PoE and power",
          rows: [
            { label: "PoE", value: "802.3bt, 30 W per port; 60 W PoE++ on 5G ports of MP models" },
            { label: "PoE budgets", value: "370 W or 740 W by model" },
            { label: "Power", value: "100 to 240 V AC, fixed internal supply" },
          ],
        },
        {
          title: "Stacking and switching",
          rows: [
            { label: "Stacking", value: "2 dedicated ports, 80 Gbps" },
            { label: "Switching capacity", value: "56 Gbps to 304 Gbps by model" },
            { label: "Layer 3", value: "Static routing" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          rows: [
            { label: "Mounting", value: "1U rack" },
            { label: "Depth", value: "25 cm (24-port), 34 cm (48-port)" },
            { label: "Cooling", value: "Fixed internal fan on all models" },
          ],
        },
        {
          title: "Security",
          rows: [
            { label: "Access control", value: "802.1X, IPv4 and IPv6 access lists" },
            { label: "Protection", value: "Dynamic ARP Inspection, DHCP snooping, storm control" },
            { label: "Adaptive Policy", value: "With Advanced licence" },
          ],
        },
        {
          title: "Licensing",
          rows: [
            { label: "Per device", value: "Enterprise or Advanced, 1, 3, 5, 7 or 10 years" },
            { label: "Cisco Networking Subscription", value: "MS100 Medium or Large, Essentials or Advantage" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Meraki MS150\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does the Meraki MS150 replace the MS210?",
        answer: "Yes. The MS210 reached end of sale on 30 April 2026, and the MS150 is its replacement.",
      },
      {
        question: "Should I choose the MS150 or MS130?",
        answer:
          "The MS150 adds stacking, static routing, 60 W PoE++ and 5G multigigabit models. The MS130 suits small sites that need simple Layer 2 switching.",
      },
      {
        question: "Should I choose the MS150 or Catalyst 9300-M?",
        answer:
          "The MS150 suits branch and campus access with static routing. The Catalyst 9300-M adds full Layer 3, UPOE up to 90 W and higher stacking bandwidth.",
      },
      {
        question: "Does the MS150 need a licence?",
        answer:
          "Yes. Choose an Enterprise or Advanced licence for 1 to 10 years, or a Cisco Networking Subscription. Adaptive Policy needs the Advanced licence.",
      },
      {
        question: "Will the MS150 fit a shallow rack?",
        answer:
          "The 24-port models are 25 cm deep and the 48-port models 34 cm. We check rack depth during the site survey.",
      },
      {
        question: "Do you install and support Meraki switches?",
        answer:
          "Yes. GS IT is a Cisco partner. We supply genuine Meraki MS150 switches, then install, configure and support them across the UAE.",
      },
    ],
  },
  relatedData: relatedSwitches("cisco-meraki-ms150-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MS150, model sizing and availability.",
  },
  footNote: switchFootNote,
};
