import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, deskPhoneDatasheet, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

// Generated from ph_desk-phone-9861.html (Cisco pages dev pack)
export const deskPhone9861: LogitechProductData = {
  slug: "desk-phone-9861",
  seo: {
    title: "Buy Cisco Desk Phone 9861 in Dubai | GS IT",
    description:
      "Buy the Cisco Desk Phone 9861 in Dubai: 5\" colour display, 10 line keys, up to 130 with KEMs, Wi-Fi, Bluetooth and an Arabic keypad option.",
    ogTitle: "Cisco Desk Phone 9861 in Dubai | GS IT",
    ogDescription:
      "Cisco reception desk phone with Wi-Fi, Bluetooth and expansion modules, supplied and supported by GS IT in the UAE.",
  },
  name: "Cisco Desk Phone 9861",
  sku: "DP-9861-K9=",
  image: `${IP_PHONE_IMG}/cisco-desk-phone-9861-in-carbon-black.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "Desk Phone 9861" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-desk-phone-9861-in-carbon-black.webp`,
        alt: "Cisco Desk Phone 9861 in Carbon Black",
      },
    ],
    tag: "Cisco reception and manager desk phone",
    heading: "Cisco Desk Phone\n 9861",
    highlightLast: 1,
    description:
      "A 5-inch colour desk phone with ten line keys, Wi-Fi, Bluetooth and up to three key expansion modules, for reception desks and managers.",
    pills: ["Up to 130 line keys", "Arabic keypad available"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Desk Phone 9800" },
      { label: "Display", value: "5\" colour, backlit" },
      { label: "Line keys", value: "10, up to 130 with 3 KEMs" },
      { label: "Wireless", value: "Wi-Fi and Bluetooth 5.2" },
      { label: "Colours", value: "Carbon Black, First Light" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Built for reception", text: "ten line keys, or 130 with three key expansion modules" },
      { label: "Clearer calls both ways", text: "AI noise removal on incoming and outgoing audio" },
      { label: "Wi-Fi and Bluetooth", text: "connect without a cable run, and pair a wireless headset" },
      { label: "Arabic keypad", text: "an Arabic layout model is available" },
    ],
    buttons: heroButtons,
    datasheet: deskPhoneDatasheet,
  },
  modelsData: {
    tag: "Models",
    heading: "Desk Phone 9861\n models and add-ons",
    highlightLast: 3,
    subhead: "Choose a finish, keypad or no-radio model, and add expansion modules for reception.",
    groups: [
      {
        label: "9861 models and add-ons",
        title: "9861 models and add-ons",
        description: "All phone models have the same display and keys.",
        models: [
          {
            name: "DP-9861-K9= / DP-9861-L-K9=",
            desc: "Carbon Black or First Light, with Wi-Fi and Bluetooth",
            points: ["5\" colour display", "10 line keys"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9861-A-K9=",
            desc: "Arabic keypad layout",
            points: ["5\" colour display", "10 line keys"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9861NR-K9=",
            desc: "No-radio model, without Wi-Fi or Bluetooth",
            points: ["For sites that restrict wireless", "Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Desk Phone 9800 Key Expansion Module",
            desc: "Adds line keys for monitoring colleagues",
            points: ["20 keys over 2 pages", "Up to 3 modules with a power adapter"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "A reception phone\n with room to grow",
    highlightLast: 4,
    subhead: "What the Desk Phone 9861 brings to a front desk.",
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
        icon: phoneIcons.wifi,
        title: "Wi-Fi and Bluetooth",
        description: "Dual-band Wi-Fi where cabling is hard, and Bluetooth 5.2 for wireless headsets.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Built for reception\n and busy managers",
    highlightLast: 3,
    paragraphs: [
      "The 9861 handles high call volumes. Ten line keys, a 5-inch colour display and up to three expansion modules let a receptionist see and transfer calls across the building.",
      "GS IT supplies the phone and modules, registers them to your call platform and supports them after go-live.",
    ],
    facts: [
      { value: "10", label: "line keys" },
      { value: "130", label: "keys with 3 KEMs", dark: true },
      { value: "5\"", label: "colour display" },
      { value: "Wi-Fi", label: "and Bluetooth 5.2" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Desk Phone 9861\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and keys",
          rows: [
            { label: "Display", value: "5\" colour LCD, 800 × 480, backlit" },
            { label: "Line keys", value: "10, up to 130 with key expansion modules" },
            { label: "Key expansion", value: "1 module on PoE Class 3, up to 3 with a power adapter" },
          ],
        },
        {
          title: "Network and power",
          rows: [
            { label: "Ethernet", value: "2-port Gigabit switch (phone and PC)" },
            { label: "PoE", value: "IEEE PoE Class 3, or power adapter" },
            { label: "USB", value: "1 USB-A, 1 USB-C" },
            { label: "Wireless", value: "Wi-Fi 802.11a/b/g/n/ac (2.4 and 5 GHz), Bluetooth 5.2, except the no-radio model" },
          ],
        },
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Webex Calling, Cisco Unified CM, Webex Dedicated Instance, BroadWorks and Asterisk" },
            { label: "Lines", value: "Up to 130 line and programmable line keys with key expansion modules; Webex Calling and open SIP platforms support up to 16" },
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
            { label: "Dimensions (H × W × D)", value: "226 × 230 × 49.4 mm" },
            { label: "Weight", value: "1,095 g" },
            { label: "Power, display off", value: "3.26 W on PoE, 3.48 W on adapter" },
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
    heading: "Desk Phone 9861\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is there an Arabic keypad?",
        answer: "Yes, the DP-9861-A model.",
      },
      {
        question: "How many key expansion modules can it take?",
        answer: "One on PoE, or up to three with a power adapter, for up to 130 line keys.",
      },
      {
        question: "Can it connect over Wi-Fi?",
        answer: "Yes. The 9861NR model has no wireless, for sites that restrict it.",
      },
      {
        question: "Does noise removal work both ways?",
        answer: "Yes. The 9861 removes background noise from your side and from the caller’s side.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("desk-phone-9861"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Desk Phone 9861, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
