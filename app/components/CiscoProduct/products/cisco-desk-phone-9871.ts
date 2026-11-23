import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, deskPhoneDatasheet, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

// Generated from ph_desk-phone-9871.html (Cisco pages dev pack)
export const deskPhone9871: LogitechProductData = {
  slug: "desk-phone-9871",
  seo: {
    title: "Buy Cisco Desk Phone 9871 in Dubai | GS IT",
    description:
      "Buy the Cisco Desk Phone 9871 in Dubai: 5\" HD touchscreen, up to 128 lines, Wi-Fi, Bluetooth and an Arabic keypad option.",
    ogTitle: "Cisco Desk Phone 9871 in Dubai | GS IT",
    ogDescription:
      "Cisco touchscreen desk phone for executives on Webex Calling or Unified CM, supplied and supported by GS IT.",
  },
  name: "Cisco Desk Phone 9871",
  sku: "DP-9871-K9=",
  image: `${IP_PHONE_IMG}/cisco-desk-phone-9871-with-touchscreen.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "Desk Phone 9871" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-desk-phone-9871-with-touchscreen.webp`,
        alt: "Cisco Desk Phone 9871 with touchscreen",
      },
    ],
    tag: "Cisco touchscreen desk phone",
    heading: "Cisco Desk Phone\n 9871",
    highlightLast: 1,
    description:
      "A 5-inch HD touchscreen desk phone with Wi-Fi, Bluetooth and up to 128 lines, for executives and power users.",
    pills: ["5\" HD touchscreen", "Arabic keypad available"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Desk Phone 9800" },
      { label: "Display", value: "5\" colour touchscreen, 1280 × 720" },
      { label: "Lines", value: "32 on screen, up to 128 with KEMs" },
      { label: "Wireless", value: "Wi-Fi and Bluetooth 5.2" },
      { label: "Colours", value: "Carbon Black, First Light" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Touchscreen control", text: "a 5-inch HD touchscreen replaces physical line keys" },
      { label: "Clearer calls both ways", text: "AI noise removal on incoming and outgoing audio" },
      { label: "Wi-Fi and Bluetooth", text: "connect without a cable run, and pair a wireless headset" },
      { label: "Arabic keypad", text: "an Arabic layout model is available" },
    ],
    buttons: heroButtons,
    datasheet: deskPhoneDatasheet,
  },
  modelsData: {
    tag: "Models",
    heading: "Desk Phone 9871\n models and add-ons",
    highlightLast: 3,
    subhead: "Choose a finish, keypad or no-radio model.",
    groups: [
      {
        label: "9871 models and add-ons",
        title: "9871 models and add-ons",
        description: "All phone models have the same touchscreen and features.",
        models: [
          {
            name: "DP-9871-K9= / DP-9871-L-K9=",
            desc: "Carbon Black or First Light, with Wi-Fi and Bluetooth",
            points: ["5\" HD touchscreen", "32 lines on screen"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9871-A-K9=",
            desc: "Arabic keypad layout",
            points: ["5\" HD touchscreen", "32 lines on screen"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9871NR-K9=",
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
    heading: "The flagship\n Cisco desk phone",
    highlightLast: 3,
    subhead: "What the Desk Phone 9871 brings to an executive desk.",
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
    heading: "A touchscreen phone\n for executives",
    highlightLast: 2,
    paragraphs: [
      "The 9871 is the top model in Cisco’s desk phone range. Its 5-inch HD touchscreen shows up to 32 lines, and expansion modules take it to 128.",
      "GS IT supplies the phone, registers it to your call platform and supports it after go-live.",
    ],
    facts: [
      { value: "5\"", label: "HD touchscreen" },
      { value: "128", label: "lines with KEMs", dark: true },
      { value: "Wi-Fi", label: "and Bluetooth 5.2" },
      { value: "1 year", label: "Cisco warranty" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Desk Phone 9871\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and keys",
          rows: [
            { label: "Display", value: "5\" colour touch LCD, 1280 × 720, backlit" },
            { label: "Line keys", value: "No physical line keys, 32 lines on screen, up to 128 with key expansion modules" },
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
            { label: "Lines", value: "Up to 128 lines with key expansion modules; Webex Calling and open SIP platforms support up to 16" },
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
            { label: "Weight", value: "1,055 g" },
            { label: "Power, display off", value: "3.6 W on PoE, 4.03 W on adapter" },
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
    heading: "Desk Phone 9871\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How many lines does the touchscreen show?",
        answer: "32 on screen, or up to 128 with key expansion modules.",
      },
      {
        question: "What is the action button for?",
        answer: "It can raise a safety alert or call a help desk, depending on how it is set up.",
      },
      {
        question: "Is there an Arabic keypad?",
        answer: "Yes, the DP-9871-A model.",
      },
      {
        question: "Can it connect over Wi-Fi and Bluetooth?",
        answer: "Yes, except the 9871NR no-radio model.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("desk-phone-9871"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Desk Phone 9871, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
