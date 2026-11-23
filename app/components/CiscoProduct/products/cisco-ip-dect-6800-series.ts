import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { IP_PHONE_IMG, phoneIcons, relatedPhones, phoneFootNote } from "./ip-phones-shared";

const DATASHEET = {
  text: "Cisco IP DECT 6800 Series datasheet",
  // Local copy of Cisco's PDF (ip-dect-6800-series-ds.pdf)
  href: "/assets/datasheets/cisco/ip-dect-6800-series-ds.pdf",
};

// Generated from ph_ip-dect-6800-series.html (Cisco pages dev pack)
export const ipDect6800: LogitechProductData = {
  slug: "ip-dect-6800-series",
  seo: {
    title: "Buy Cisco IP DECT 6800 Series in Dubai | GS IT",
    description:
      "Buy Cisco IP DECT 6800 handsets and base stations in Dubai: 6823, 6825 and rugged IP65 6825, with up to 254 bases per site.",
    ogTitle: "Cisco IP DECT 6800 Series in Dubai | GS IT",
    ogDescription:
      "Cisco cordless DECT handsets, base stations and repeaters, surveyed, installed and supported by GS IT in the UAE.",
  },
  name: "Cisco IP DECT 6800 Series",
  image: `${IP_PHONE_IMG}/cisco-ip-dect-6825-ruggedized-handset-in-its-charger.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "IP Phones" },
      { label: "Cisco", href: "/cisco-ip-phones" },
      { label: "IP DECT 6800 Series" },
    ],
    gallery: [
      {
        src: `${IP_PHONE_IMG}/cisco-ip-dect-6825-ruggedized-handset-in-its-charger.webp`,
        alt: "Cisco IP DECT 6825 Ruggedized handset in its charger",
      },
    ],
    tag: "Cisco cordless DECT system",
    heading: "Cisco IP DECT\n 6800 Series",
    highlightLast: 2,
    description:
      "Cordless DECT handsets, base stations and repeaters for clinics, hotels and warehouses, from one base to large multi-cell sites.",
    pills: ["Up to 254 base stations", "Rugged IP65 handset"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Handsets", value: "6823, 6825, 6825 Ruggedized" },
      { label: "Base stations", value: "DBS-110, DBS-210" },
      { label: "Scale", value: "Up to 254 bases, 1,000 registrations" },
      { label: "Range", value: "50 m radius per base or repeater" },
      { label: "Platforms", value: "Webex Calling, BroadWorks and SIP" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Grows with the site", text: "start with one base and add bases and repeaters as coverage needs grow" },
      { label: "Long talk time", text: "up to 17 hours narrowband and 12 hours wideband" },
      { label: "Rugged option", text: "the 6825 Ruggedized is rated IP65" },
      { label: "Separate from Wi-Fi", text: "DECT runs on its own radio band, away from busy Wi-Fi" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "IP DECT 6800\n handsets and base stations",
    highlightLast: 4,
    subhead:
      "Every system needs at least one base station and one handset. We size bases and repeaters from a site survey.",
    groups: [
      {
        label: "Handsets",
        title: "DECT handsets",
        description: "All handsets give up to 17 hours of talk time and 200 hours idle.",
        models: [
          {
            name: "IP DECT 6823",
            desc: "Essential handset",
            points: ["1.7\" colour display", "3.5 mm headset jack"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "IP DECT 6825",
            desc: "Advanced handset",
            points: ["2\" colour display, backlit keypad", "Bluetooth LE 4.1"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "IP DECT 6825 Ruggedized",
            desc: "For harsh environments",
            points: ["IP65 rated", "Emergency button"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Base stations",
        title: "Base stations and repeaters",
        description: "Each base station and repeater covers a 50-metre radius.",
        models: [
          {
            name: "DBS-110",
            desc: "Single-cell base station",
            points: ["Up to 30 SIP registrations", "10 calls, or 20 with two bases"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "DBS-210",
            desc: "Multi-cell base station",
            points: ["Up to 254 bases", "Up to 1,000 SIP registrations"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "RPT-110 repeater",
            desc: "Extends coverage without cabling",
            points: ["50 m radius", "Up to 100 on a DBS-210 multi-cell system"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Cordless coverage\n across the whole site",
    highlightLast: 4,
    subhead: "What the IP DECT 6800 Series brings to a large site.",
    data: [
      {
        icon: phoneIcons.roam,
        title: "Multi-cell roaming",
        description: "Up to 254 DBS-210 base stations let staff walk the whole site on one call.",
        highlight: true,
      },
      {
        icon: phoneIcons.wifi,
        title: "Repeaters for reach",
        description: "RPT-110 repeaters extend coverage into stairwells and car parks without new cabling.",
      },
      {
        icon: phoneIcons.alert,
        title: "Alarm key",
        description: "An alarm key on every handset, and an emergency button on the 6825.",
      },
      {
        icon: phoneIcons.drop,
        title: "Rugged handset",
        description: "The 6825 Ruggedized is rated IP65 for dust and water.",
      },
      {
        icon: phoneIcons.lock,
        title: "Encrypted calls",
        description: "SRTP media, TLS signalling and secure provisioning on the base stations.",
      },
      {
        icon: phoneIcons.bolt,
        title: "PoE base stations",
        description: "Bases and repeaters run on PoE Class 2, so one cable carries data and power.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Cordless phones\n for big buildings",
    highlightLast: 3,
    paragraphs: [
      "DECT suits sites where staff move around but Wi-Fi was not designed for voice, such as clinics, hotels and warehouses. It runs on its own frequency band, so calls stay clear of busy Wi-Fi.",
      "GS IT surveys the site, places base stations and repeaters, and registers the handsets to your call platform.",
    ],
    facts: [
      { value: "254", label: "base stations" },
      { value: "1,000", label: "SIP registrations", dark: true },
      { value: "17 h", label: "talk time" },
      { value: "50 m", label: "radius per base" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "IP DECT 6800\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Handsets",
          rows: [
            { label: "6823 display", value: "1.7\" colour, 128 × 160" },
            { label: "6825 display", value: "2\" colour, 240 × 320" },
            { label: "Talk time", value: "17 h narrowband, 12 h wideband" },
            { label: "Idle time", value: "200 hours" },
            { label: "Rugged model", value: "6825 Ruggedized, IP65" },
          ],
        },
        {
          title: "Base stations",
          rows: [
            { label: "DBS-110", value: "Up to 30 registrations, 10 calls, or 20 calls with 2 bases" },
            { label: "DBS-210", value: "Up to 254 bases, 1,000 registrations and 2,000 calls" },
          ],
        },
        {
          title: "Repeaters",
          rows: [
            { label: "RPT-110", value: "Up to 6 per DBS-110, up to 100 on a DBS-210 multi-cell system" },
            { label: "Range", value: "50 m radius per base or repeater" },
          ],
        },
      ],
      [
        {
          title: "Network and power",
          rows: [
            { label: "Ethernet", value: "10/100 port on base stations" },
            { label: "PoE", value: "IEEE 802.3, Class 2" },
            { label: "DECT band", value: "1880 to 1900 MHz (EU and APAC)" },
          ],
        },
        {
          title: "Call control",
          rows: [
            { label: "Platforms", value: "Webex Calling, Webex Calling Carrier, BroadWorks, Asterisk and Metaswitch" },
            { label: "Unified CM", value: "Not listed by Cisco for this series" },
          ],
        },
        {
          title: "Security",
          rows: [
            { label: "Base stations", value: "TLS, SRTP, HTTPS provisioning, encrypted configuration" },
            { label: "Handsets", value: "CAT-iq 2.1 security" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "IP DECT 6800\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How many handsets can one base support?",
        answer: "The DBS-110 supports up to 30 registrations. For larger sites, the DBS-210 scales to 254 bases and 1,000 registrations.",
      },
      {
        question: "Does it work with Cisco Unified CM?",
        answer: "Cisco does not list Unified CM for this series. It works with Webex Calling, BroadWorks, Asterisk and Metaswitch.",
      },
      {
        question: "How far does one base reach?",
        answer: "About a 50-metre radius. Repeaters extend coverage without new cabling.",
      },
      {
        question: "Is there a rugged handset?",
        answer: "Yes. The 6825 Ruggedized is rated IP65.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedPhones("ip-dect-6800-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the IP DECT 6800, model sizing and availability.",
  },
  footNote: phoneFootNote,
};
