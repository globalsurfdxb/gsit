import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG as IMG, deskPhoneDatasheet as DATASHEET, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

// Generated from ph_desk-phone-9841.html (Cisco pages dev pack)
export const deskPhone9841: LogitechProductData = {
  slug: "desk-phone-9841",
  seo: {
    title: "Buy Cisco Desk Phone 9841 in Dubai | GS IT",
    description:
      "Buy the Cisco Desk Phone 9841 in Dubai: 3.5\" backlit display, 4 line keys and AI noise removal. The successor to the IP Phone 7841.",
    ogTitle: "Cisco Desk Phone 9841 in Dubai | GS IT",
    ogDescription:
      "Entry Cisco desk phone for Webex Calling and Unified CM, supplied, configured and supported by GS IT across the UAE.",
  },
  name: "Cisco Desk Phone 9841",
  sku: "DP-9841-K9=",
  image: `${IMG}/cisco-desk-phone-9841-in-carbon-black.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "Desk Phone 9841" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-desk-phone-9841-in-carbon-black.webp`,
        alt: "Cisco Desk Phone 9841 in Carbon Black",
      },
    ],
    tag: "Cisco everyday desk phone",
    heading: "Cisco Desk Phone\n 9841",
    highlightLast: 1,
    description:
      "An entry desk phone with a 3.5-inch backlit display, four line keys and AI noise removal, for everyday office desks.",
    pills: ["Webex Calling or Unified CM", "Replaces the IP Phone 7841"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Desk Phone 9800" },
      { label: "Display", value: "3.5\" grayscale, backlit" },
      { label: "Line keys", value: "4" },
      { label: "Network", value: "2-port Gigabit, PoE Class 2" },
      { label: "Colours", value: "Carbon Black, First Light" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Built for open offices", text: "AI noise removal cleans up your side of every call" },
      { label: "Ready for shared desks", text: "hot desking lets any user sign in at any desk" },
      { label: "Safety at hand", text: "the action button can raise an alert or call a help desk" },
      { label: "The 7841 replacement", text: "Cisco lists the 9841 as the successor to the IP Phone 7841" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Desk Phone 9841\n colour options",
    highlightLast: 2,
    subhead: "Same hardware in two finishes. Choose the colour that suits your office.",
    groups: [
      {
        label: "9841 models",
        title: "9841 models",
        description: "Both models have the same display, keys and features.",
        models: [
          {
            name: "DP-9841-K9=",
            desc: "Carbon Black finish",
            points: ["3.5\" grayscale display", "4 line keys"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DP-9841-L-K9=",
            desc: "First Light finish",
            points: ["3.5\" grayscale display", "4 line keys"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Everyday calling\n done well",
    highlightLast: 2,
    subhead: "What the Desk Phone 9841 brings to an office desk.",
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
        icon: phoneIcons.leaf,
        title: "Low power",
        description: "Draws under 2 W on PoE with the display off, and supports deep sleep outside working hours.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "The everyday desk phone\n for Webex and Unified CM",
    highlightLast: 5,
    paragraphs: [
      "The 9841 is the entry model in Cisco’s current desk phone range. It covers the essentials for most office users, with clear audio, four line keys and a backlit display.",
      "GS IT supplies the phone, registers it to your call platform and supports it after go-live.",
    ],
    facts: [
      { value: "4", label: "line keys" },
      { value: "3.5\"", label: "backlit display", dark: true },
      { value: "Class 2", label: "PoE" },
      { value: "1 year", label: "Cisco warranty" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Desk Phone 9841\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display and keys",
          rows: [
            { label: "Display", value: "3.5\" grayscale LCD, 384 × 160, backlit" },
            { label: "Line keys", value: "4" },
            { label: "Key expansion", value: "Not supported" },
          ],
        },
        {
          title: "Network and power",
          rows: [
            { label: "Ethernet", value: "2-port Gigabit switch (phone and PC)" },
            { label: "PoE", value: "IEEE PoE Class 2, or power adapter" },
            { label: "USB", value: "1 USB-A" },
            { label: "Wireless", value: "Not built in" },
          ],
        },
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Webex Calling, Cisco Unified CM, Webex Dedicated Instance, BroadWorks and Asterisk" },
            { label: "Lines", value: "Up to 4 line and programmable line keys" },
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
            { label: "Dimensions (H × W × D)", value: "214 × 214 × 49.4 mm" },
            { label: "Weight", value: "954 g" },
            { label: "Power, display off", value: "1.95 W on PoE, 2.35 W on adapter" },
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
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Desk Phone 9841\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does it replace the IP Phone 7841?",
        answer: "Yes. Cisco lists the 9841 as the replacement for the 7841.",
      },
      {
        question: "Can we add a key expansion module?",
        answer: "No. The 9841 supports up to 4 lines. For more, choose the 9851 or above.",
      },
      {
        question: "Does it work with our system?",
        answer: "Yes. It works with Webex Calling, and with Cisco Unified CM 12.5 or later. Some Unified CM versions need a device package.",
      },
      {
        question: "How is it powered?",
        answer: "PoE Class 2 from your switch, or a power adapter.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("desk-phone-9841"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Desk Phone 9841, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
