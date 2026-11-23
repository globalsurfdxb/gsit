import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

const DATASHEET = {
  text: "Cisco Wireless Phone 9821 datasheet",
  // Local copy of Cisco's PDF (wireless-phone-9821-ds.pdf, updated 2 June 2026)
  href: "/assets/datasheets/cisco/wireless-phone-9821-ds.pdf",
};

// Generated from ph_wireless-phone-9821.html (Cisco pages dev pack)
export const wirelessPhone9821: LogitechProductData = {
  slug: "wireless-phone-9821",
  seo: {
    title: "Buy Cisco Wireless Phone 9821 in Dubai | GS IT",
    description:
      "Buy the Cisco Wireless Phone 9821 in Dubai: rugged Wi-Fi 6E handset, IP54, push-to-talk, action button and up to 11.5 hours talk time.",
    ogTitle: "Cisco Wireless Phone 9821 in Dubai | GS IT",
    ogDescription:
      "Rugged Cisco Wi-Fi 6E handset for hospitals, hotels and warehouses, supplied, configured and supported by GS IT.",
  },
  name: "Cisco Wireless Phone 9821",
  sku: "WP-9821-K9=",
  image: `${IP_PHONE_IMG}/cisco-wireless-phone-9821-handset.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "Wireless Phone 9821" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-wireless-phone-9821-handset.webp`,
        alt: "Cisco Wireless Phone 9821 handset",
      },
    ],
    tag: "Cisco rugged Wi-Fi handset",
    heading: "Cisco Wireless Phone\n 9821",
    highlightLast: 1,
    description:
      "A rugged Wi-Fi 6E handset with push-to-talk, an action button and up to 11.5 hours of talk time, for frontline teams.",
    pills: ["Wi-Fi 6E", "IP54, MIL-STD-810G"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Display", value: "2.4\" colour" },
      { label: "Wi-Fi", value: "Wi-Fi 6E (2.4, 5 and 6 GHz)" },
      { label: "Battery", value: "Up to 11.5 h talk, 145 h standby" },
      { label: "Durability", value: "IP54, MIL-STD-810G" },
      { label: "Weight", value: "168 g with battery" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Made for the floor", text: "IP54 sealing, MIL-STD-810G shock testing and 12 drops onto concrete" },
      { label: "Safety built in", text: "action button, push-to-talk and man-down detection" },
      { label: "Lasts a shift", text: "up to 11.5 hours of talk time on a swappable battery" },
      { label: "Wipe it clean", text: "built for cleaning with high-concentration alcohol in healthcare" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Wireless Phone 9821\n handsets and chargers",
    highlightLast: 3,
    subhead: "Order the handset bundle, then add chargers and spare batteries for each shift.",
    groups: [
      {
        label: "Handsets",
        title: "9821 handsets",
        description: "Both options are the same Carbon Black handset.",
        models: [
          {
            name: "WP-9821-BUN-K9",
            desc: "Handset bundle",
            points: ["Wi-Fi 6E handset", "Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "WP-9821-K9=",
            desc: "Spare handset",
            points: ["Wi-Fi 6E handset", "Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Chargers and batteries",
        title: "Chargers and batteries",
        description: "Plan one spare battery per handset for round-the-clock teams.",
        models: [
          {
            name: "WP-9821-DCHGR+PWR",
            desc: "Desk charger with power supply",
            points: ["Charges a handset at a desk or station"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "WP-9821-MCHGR+PWR",
            desc: "Multi-charger with power supply",
            points: ["Charges several handsets at once"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "WP-9821-BATT=",
            desc: "Spare battery",
            points: ["2060 mAh lithium-ion", "Swappable"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "A handset\n for frontline teams",
    highlightLast: 3,
    subhead: "What the Wireless Phone 9821 brings to hospitals, hotels and warehouses.",
    data: [
      {
        icon: phoneIcons.wifi,
        title: "Wi-Fi 6E",
        description: "Connects on 2.4, 5 and 6 GHz, with fast roaming between access points.",
        highlight: true,
      },
      {
        icon: phoneIcons.alert,
        title: "Action button and man-down",
        description: "A configurable emergency button, plus fall and man-down detection for lone workers.",
      },
      {
        icon: phoneIcons.mic,
        title: "Push-to-talk",
        description: "Reach a whole team at once from a dedicated application button.",
      },
      {
        icon: phoneIcons.drop,
        title: "Rugged and cleanable",
        description: "IP54, MIL-STD-810G shock and vibration, and safe to wipe with strong alcohol solutions.",
      },
      {
        icon: phoneIcons.battery,
        title: "Swappable battery",
        description: "Up to 11.5 hours of talk time and 145 hours of standby on one charge.",
      },
      {
        icon: phoneIcons.cloud,
        title: "Webex Calling or Unified CM",
        description: "Registers to Webex Calling, Unified CM 15 and above, Dedicated Instance or BroadWorks.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A phone in every pocket\n on the frontline",
    highlightLast: 3,
    paragraphs: [
      "The 9821 gives nurses, hotel staff and warehouse teams a phone that survives drops, spills and cleaning, with safety features for staff who work alone.",
      "Voice over Wi-Fi depends on good coverage. GS IT checks your wireless network before deployment, then configures and supports the handsets.",
    ],
    facts: [
      { value: "Wi-Fi 6E", label: "2.4, 5 and 6 GHz" },
      { value: "11.5 h", label: "talk time", dark: true },
      { value: "IP54", label: "dust and water" },
      { value: "168 g", label: "with battery" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Wireless Phone 9821\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and controls",
          rows: [
            { label: "Display", value: "2.4\" IPS colour, 240 × 320" },
            { label: "Buttons", value: "Action button, application button for push-to-talk, glove-friendly keys" },
          ],
        },
        {
          title: "Wireless",
          rows: [
            { label: "Wi-Fi", value: "802.11a/b/g/n/ac/ax (Wi-Fi 6E)" },
            { label: "Bands", value: "2.4, 5 and 6 GHz" },
            { label: "Bluetooth", value: "5.4 for headsets, with BLE Audio" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Type", value: "Lithium-ion, 2060 mAh, swappable" },
            { label: "Talk time", value: "Up to 11.5 hours" },
            { label: "Standby", value: "Up to 145 hours" },
          ],
        },
      ],
      [
        {
          title: "Durability",
          rows: [
            { label: "Sealing", value: "IP54" },
            { label: "Shock and vibration", value: "MIL-STD-810G" },
            { label: "Drops", value: "12 drops onto concrete" },
            { label: "Operating temperature", value: "-10 to 50 °C" },
          ],
        },
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Webex Calling, Unified CM 15 and above, Unified SRST, Dedicated Instance, BroadWorks and third-party platforms" },
          ],
        },
        {
          title: "Physical and warranty",
          rows: [
            { label: "Dimensions", value: "132 × 56 × 17 mm" },
            { label: "Weight", value: "168 g with battery" },
            { label: "Warranty", value: "1 year, battery 90 days" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Wireless Phone 9821\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Do we need good Wi-Fi?",
        answer: "Yes. Voice needs strong coverage, so we survey your Wi-Fi before deployment.",
      },
      {
        question: "How long does the battery last?",
        answer: "Up to 11.5 hours of talk time, and the battery is swappable.",
      },
      {
        question: "Can it be cleaned in a hospital?",
        answer: "Yes. It is built for cleaning with high-concentration alcohol solutions.",
      },
      {
        question: "Does it work with Unified CM?",
        answer: "Yes, Unified CM 15 or later, as well as Webex Calling.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("wireless-phone-9821"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Wireless Phone 9821, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
