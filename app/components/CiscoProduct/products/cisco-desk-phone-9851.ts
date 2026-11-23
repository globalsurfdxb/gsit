import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, deskPhoneDatasheet, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

// Generated from ph_desk-phone-9851.html (Cisco pages dev pack)
export const deskPhone9851: LogitechProductData = {
  slug: "desk-phone-9851",
  seo: {
    title: "Buy Cisco Desk Phone 9851 in Dubai | GS IT",
    description:
      "Buy the Cisco Desk Phone 9851 in Dubai: 3.7\" colour display, 6 line keys and up to 46 with a key expansion module. Replaces the 7861.",
    ogTitle: "Cisco Desk Phone 9851 in Dubai | GS IT",
    ogDescription:
      "Colour Cisco desk phone for busy users on Webex Calling or Unified CM, supplied and supported by GS IT in the UAE.",
  },
  name: "Cisco Desk Phone 9851",
  sku: "DP-9851-K9=",
  image: `${IP_PHONE_IMG}/cisco-desk-phone-9851-in-first-light.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "Desk Phone 9851" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-desk-phone-9851-in-first-light.webp`,
        alt: "Cisco Desk Phone 9851 in First Light",
      },
    ],
    tag: "Cisco colour desk phone",
    heading: "Cisco Desk Phone\n 9851",
    highlightLast: 1,
    description:
      "A colour desk phone with six line keys and support for one key expansion module, for users who handle several lines.",
    pills: ["Up to 46 line keys", "Replaces the IP Phone 7861"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Desk Phone 9800" },
      { label: "Display", value: "3.7\" colour, backlit" },
      { label: "Line keys", value: "6, up to 46 with 1 KEM" },
      { label: "Network", value: "2-port Gigabit, PoE Class 3" },
      { label: "Colours", value: "Carbon Black, First Light" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "More lines", text: "six line keys, or 46 with one key expansion module" },
      { label: "Colour display", text: "3.7-inch colour screen for call status and contacts" },
      { label: "USB-A and USB-C", text: "for a headset or charging a mobile" },
      { label: "The 7861 replacement", text: "Cisco lists the 9851 as the successor to the IP Phone 7861" },
    ],
    buttons: heroButtons,
    datasheet: deskPhoneDatasheet,
  },
  modelsData: {
    tag: "Models",
    heading: "Desk Phone 9851\n models and add-ons",
    highlightLast: 3,
    subhead: "Choose a finish, and add a key expansion module for busy lines.",
    groups: [
      {
        label: "9851 models and add-ons",
        title: "9851 models and add-ons",
        description: "Both phone models have the same display, keys and features.",
        models: [
          {
            name: "DP-9851-K9=",
            desc: "Carbon Black finish",
            points: ["3.7\" colour display", "6 line keys"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9851-L-K9=",
            desc: "First Light finish",
            points: ["3.7\" colour display", "6 line keys"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Desk Phone 9800 Key Expansion Module",
            desc: "Adds line keys for monitoring colleagues",
            points: ["20 keys over 2 pages", "1 module on the 9851"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "More lines\n on a colour screen",
    highlightLast: 4,
    subhead: "What the Desk Phone 9851 brings to a busy desk.",
    data: [
      {
        icon: phoneIcons.mic,
        title: "AI noise removal",
        description: "Removes background noise from your side of the call, so open-plan offices stay clear.",
        highlight: true,
      },
      {
        icon: phoneIcons.alert,
        title: "Action button",
        description: "A configurable button that can raise a safety alert or call a help desk.",
      },
      {
        icon: phoneIcons.desk,
        title: "Hot desking",
        description: "Staff sign in at any free desk and get their own lines and settings.",
      },
      {
        icon: phoneIcons.cloud,
        title: "One phone, two platforms",
        description: "Registers to Webex Calling or Cisco Unified CM, so a later move to the cloud keeps the same hardware.",
      },
      {
        icon: phoneIcons.lock,
        title: "Built-in security",
        description: "Secure boot, TLS 1.3 signalling and encrypted media on every model.",
      },
      {
        icon: phoneIcons.grid,
        title: "Room to grow",
        description: "Add one key expansion module for up to 46 line and feature keys.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A colour desk phone\n for busier users",
    highlightLast: 3,
    paragraphs: [
      "The 9851 suits team leads, assistants and anyone who answers more than one line. It adds a colour display, six line keys and support for a key expansion module.",
      "GS IT supplies the phone, registers it to your call platform and supports it after go-live.",
    ],
    facts: [
      { value: "6", label: "line keys" },
      { value: "46", label: "keys with 1 KEM", dark: true },
      { value: "3.7\"", label: "colour display" },
      { value: "Class 3", label: "PoE" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Desk Phone 9851\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and keys",
          rows: [
            { label: "Display", value: "3.7\" colour LCD, 480 × 240, backlit" },
            { label: "Line keys", value: "6, up to 46 with a key expansion module" },
            { label: "Key expansion", value: "1 module (PoE Class 3 or power adapter)" },
          ],
        },
        {
          title: "Network and power",
          rows: [
            { label: "Ethernet", value: "2-port Gigabit switch (phone and PC)" },
            { label: "PoE", value: "IEEE PoE Class 3, or power adapter" },
            { label: "USB", value: "1 USB-A, 1 USB-C" },
            { label: "Wireless", value: "Not built in" },
          ],
        },
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Webex Calling, Cisco Unified CM, Webex Dedicated Instance, BroadWorks and Asterisk" },
            { label: "Lines", value: "Up to 46 line and programmable line keys with a key expansion module; Webex Calling and open SIP platforms support up to 16" },
          ],
        },
      ],
      [
        {
          title: "Security",
          rows: [
            { label: "Features", value: "Secure boot, TLS 1.3, SRTP, 802.1X, TPM 2.0, FIPS 140-2/140-3" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (H × W × D)", value: "226 × 214 × 49.4 mm" },
            { label: "Weight", value: "968 g" },
            { label: "Power, display off", value: "2.69 W on PoE, 2.82 W on adapter" },
            { label: "Operating temperature", value: "0 to 40 °C" },
          ],
        },
        {
          title: "Warranty and accessories",
          rows: [
            { label: "Warranty", value: "Cisco 1-year limited hardware warranty" },
            { label: "Wall mount", value: "Optional 9800 wall mount kit" },
          ],
        },
      ],
    ],
    datasheet: deskPhoneDatasheet,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Desk Phone 9851\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does it replace the IP Phone 7861?",
        answer: "Yes. Cisco lists the 9851 as the replacement for the 7861.",
      },
      {
        question: "How many lines can it handle?",
        answer: "6 line keys, or up to 46 with one key expansion module.",
      },
      {
        question: "Does it have Wi-Fi or Bluetooth?",
        answer: "No. For Wi-Fi and Bluetooth, choose the 9861 or 9871.",
      },
      {
        question: "Can we use a USB headset?",
        answer: "Yes. It has USB-A and USB-C ports.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("desk-phone-9851"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Desk Phone 9851, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
