import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

const DATASHEET = {
  text: "Cisco IP Phone 8861 datasheet",
  // Local copy of Cisco's PDF (datasheet-c78-731668.pdf, updated 6 June 2025)
  href: "/assets/datasheets/cisco/ip-phone-8861-ds.pdf",
};

// Generated from ph_ip-phone-8800-series.html (Cisco pages dev pack)
export const ipPhone8800: LogitechProductData = {
  slug: "ip-phone-8800-series",
  seo: {
    title: "Buy Cisco IP Phone 8800 Series in Dubai | GS IT",
    description:
      "Buy Cisco IP Phone 8841, 8851 and 8861 in Dubai: 5\" colour desk phones with Gigabit switch, Bluetooth, Wi-Fi and key expansion options.",
    ogTitle: "Cisco IP Phone 8800 Series in Dubai | GS IT",
    ogDescription:
      "Cisco 8841, 8851 and 8861 desk phones to match existing 8800 fleets, supplied and supported by GS IT in the UAE.",
  },
  name: "Cisco IP Phone 8800 Series",
  image: `${IP_PHONE_IMG}/cisco-ip-phone-8861.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "IP Phone 8800 Series" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-ip-phone-8861.webp`,
        alt: "Cisco IP Phone 8861",
      },
    ],
    tag: "Cisco established desk phone range",
    heading: "Cisco IP Phone\n 8800 Series",
    highlightLast: 2,
    description:
      "Cisco’s established 5-inch colour desk phones: the 8841, 8851 and 8861, for networks that already run the 8800 range.",
    pills: ["Webex Calling or Unified CM", "Matches existing 8800 fleets"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Models", value: "8841, 8851, 8861" },
      { label: "Display", value: "5\" colour, 800 × 480" },
      { label: "Line keys", value: "5 on every model" },
      { label: "Network", value: "2-port Gigabit, PoE" },
      { label: "Call control", value: "Webex Calling or Unified CM" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Same look as your fleet", text: "add phones that match the 8800s already on your desks" },
      { label: "Expand on 8851 and 8861", text: "key expansion modules for reception and assistants" },
      { label: "Wi-Fi on the 8861", text: "with Bluetooth on the 8851 and 8861" },
      { label: "Unified CM licence", text: "8800 phones on Unified CM need an Enhanced User Connect Licence" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "IP Phone 8800 models\n for every desk",
    highlightLast: 3,
    subhead:
      "All three share the 5-inch colour display and Gigabit switch. They differ in USB, Bluetooth, Wi-Fi and expansion.",
    groups: [
      {
        label: "8800 Series models",
        title: "8800 Series models",
        description: "All three have a 5-inch colour display and a Gigabit switch.",
        models: [
          {
            name: "IP Phone 8841",
            desc: "The everyday 8800 model",
            points: ["5 line keys", "No USB, Bluetooth or KEM"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "IP Phone 8851",
            desc: "For busier desks",
            points: ["1 USB port, Bluetooth", "Up to 2 key expansion modules"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "IP Phone 8861",
            desc: "For reception and managers",
            points: ["2 USB ports, Bluetooth, Wi-Fi", "Up to 3 key expansion modules"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "A proven range\n for existing networks",
    highlightLast: 3,
    subhead: "What the IP Phone 8800 Series brings to an office.",
    data: [
      {
        icon: phoneIcons.desk,
        title: "5-inch colour display",
        description: "A wide 800 × 480 screen on every model, with four soft keys and a five-way navigator.",
        highlight: true,
      },
      {
        icon: phoneIcons.switch,
        title: "Gigabit switch",
        description: "A built-in 2-port Gigabit switch lets a PC share the phone’s network cable.",
      },
      {
        icon: phoneIcons.grid,
        title: "Key expansion",
        description: "The 8851 takes up to two modules and the 8861 up to three, for reception desks.",
      },
      {
        icon: phoneIcons.wifi,
        title: "Wireless options",
        description: "Bluetooth on the 8851 and 8861, and dual-band Wi-Fi on the 8861.",
      },
      {
        icon: phoneIcons.cloud,
        title: "Webex Calling or Unified CM",
        description: "All three models are on Cisco’s supported list for Webex Calling and run on Unified CM.",
      },
      {
        icon: phoneIcons.plug,
        title: "USB charging",
        description: "The 8861 can charge a mobile from its rear USB port at up to 10.5 W.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Matching phones\n for an established fleet",
    highlightLast: 4,
    paragraphs: [
      "Many UAE offices already run the IP Phone 8800 Series. Adding 8841, 8851 or 8861 phones keeps desks consistent and users on a layout they know.",
      "For new projects, we usually compare the 8800 Series with the current Desk Phone 9800 range first. GS IT supplies, configures and supports both.",
    ],
    facts: [
      { value: "5\"", label: "colour display" },
      { value: "3", label: "models", dark: true },
      { value: "Up to 3", label: "KEMs on the 8861" },
      { value: "Gigabit", label: "2-port switch" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "IP Phone 8800\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and keys",
          rows: [
            { label: "Display", value: "5\" colour, 800 × 480, backlit" },
            { label: "Line keys", value: "5 on every model" },
            { label: "Key expansion", value: "8851: up to 2 modules. 8861: up to 3 modules" },
          ],
        },
        {
          title: "Connectivity",
          rows: [
            { label: "Ethernet", value: "2-port 10/100/1000 switch" },
            { label: "USB", value: "8841: none. 8851: 1 port. 8861: 2 ports" },
            { label: "Bluetooth", value: "8851 and 8861" },
            { label: "Wi-Fi", value: "8861 only, 802.11a/b/g/n/ac" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "PoE", value: "IEEE PoE or power adapter on every model" },
            { label: "8861", value: "PoE Class 4, 802.3af and 802.3at compatible" },
          ],
        },
      ],
      [
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Cisco Unified CM, Webex Calling and approved third-party SIP platforms" },
            { label: "Licensing", value: "Enhanced User Connect Licence on Unified CM" },
          ],
        },
        {
          title: "8861 physical",
          rows: [
            { label: "Dimensions (H × W × D)", value: "229.1 × 257.3 × 40 mm, without stand" },
            { label: "Weight", value: "1.19 kg" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "IP Phone 8800\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Should we choose the 8800 or the 9800?",
        answer: "Choose the 8800 to match phones already on your desks. For new projects, we usually start with the 9800.",
      },
      {
        question: "Do 8800 phones need a licence on Unified CM?",
        answer: "Yes. Cisco requires an Enhanced User Connect Licence.",
      },
      {
        question: "Which models take key expansion modules?",
        answer: "The 8851 takes up to two and the 8861 up to three.",
      },
      {
        question: "Can we still buy the 8845 video phone?",
        answer: "No. Cisco stopped selling it in July 2024.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("ip-phone-8800-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the IP Phone 8800, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
