import type { YealinkProductData } from "../../Index";
import { headsetCrumbs, heroButtons } from "../../shared";

const IMG = "/assets/images/yealink/speakerphones/sp92";
const DATASHEET = "/assets/datasheets/yealink/sp92.pdf";

// Generated from sp92.html
export const sp92: YealinkProductData = {
  slug: "sp92",
  seo: {
    title: "Yealink SP92 Bluetooth Speakerphone Dubai | GS IT",
    description: "A compact Bluetooth 5.3 speakerphone with AI noise cancellation, a 50 mm speaker and up to 20 hours of talk time. Plug it in by USB-C, use the dongle, or pair",
  },
  name: "Yealink SP92",
  image: `${IMG}/gallery-1.webp`,
  phoneListing: { disable: false, order: 20, series: ["speakerphone"], features: [], tag: "Bluetooth 5.3 + USB", text: "Compact speakerphone with AI noise cancellation, a 50 mm speaker, 4 m pickup and up to 20 hours of talk time.", pills: ["AI noise cancellation", "20 h talk"], bestFor: "desk calls and small huddles" },
  heroData: {
    crumbs: [...headsetCrumbs, { label: "SP92" }],
    gallery: [
      { src: `${IMG}/gallery-1.webp`, alt: "Yealink SP92, image 1" },
      { src: `${IMG}/gallery-2.webp`, alt: "Yealink SP92, image 2" },
      { src: `${IMG}/gallery-3.webp`, alt: "Yealink SP92, image 3" },
      { src: `${IMG}/gallery-4.webp`, alt: "Yealink SP92, image 4" },
    ],
    tag: "Bluetooth speakerphone",
    heading: "Yealink SP92\n Portable speakerphone for desks and huddles",
    highlightLast: 6,
    description: "A compact Bluetooth 5.3 speakerphone with AI noise cancellation, a 50 mm speaker and up to 20 hours of talk time. Plug it in by USB-C, use the dongle, or pair it with your phone.",
    pills: ["In stock", "Bluetooth 5.3", "AI noise cancellation"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "SP92 or SP92 with dongle" },
      { label: "Warranty", value: "Yealink manufacturer warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Pickup", text: "up to 4 m with AI noise cancellation." },
      { label: "Sound", text: "50 mm speaker with virtual bass." },
      { label: "Battery", text: "up to 20 hours talk and 20 hours music." },
      { label: "Portable", text: "276 g, carrying case included." },
    ],
    buttons: heroButtons, 
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n SP92",
    highlightLast: 1,
    subhead: "What the SP92 brings to your meetings.",
    data: [
      { icon: "AudioLines", title: "AI noise cancellation", description: "Filters background noise from every direction so your voice comes through clearly." },
      { icon: "Volume2", title: "50 mm speaker with virtual bass", description: "A wider sound field for calls and fuller sound for music." },
      { icon: "Mic", title: "Up to 4 m pickup", description: "Enough for a desk call or a small huddle around the table." },
      { icon: "Bluetooth", title: "Three ways to connect", description: "USB-C cable, BT51C dongle with USB-C/A adapter, or Bluetooth 5.3." },
      { icon: "BatteryFull", title: "Up to 20 hours talk time", description: "Up to 20 hours of music and 20 days standby from a 2500 mAh battery." },
      { icon: "Usb", title: "Plug and play", description: "Powers on automatically when you plug it in." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "Calls on the desk\n or on the road",
    highlightLast: 4,
    paragraphs: [
      "The SP92 is the Yealink speakerphone for one person or a small group. It turns a laptop or phone into a hands-free conference unit, and it is light enough to carry between the desk, a huddle room and a hotel room.",
      "GS IT lets your team try it at your office first, then installs, configures and supports it after go-live.",
    ],
    image: `${IMG}/overview.webp`,
    alt: "Yealink SP92",
  },
  specsData: {
    tag: "Specifications",
    heading: "SP92\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "Connectivity",
          rows: [
            { label: "Bluetooth version", value: "Bluetooth 5.3" },
            { label: "Wireless range", value: "up to 30 m/100 ft" },
            { label: "Connects via", value: "USB-C/A adapter with BT51C dongle, USB cable, Bluetooth" },
            { label: "USB cable length", value: "1.2 m" },
            { label: "Simultaneous Bluetooth connections", value: "2" },
            { label: "Multiple device pairing", value: "up to 8 devices" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Pickup range", value: "up to 4 m" },
            { label: "AI noise cancellation", value: "Yes" },
            { label: "Speaker", value: "Ø 50 mm" },
            { label: "Full duplex", value: "Yes" },
            { label: "Acoustic echo cancellation", value: "Yes" },
            { label: "Reverberation cancellation", value: "Yes" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Battery capacity", value: "2500 mAh" },
            { label: "Talk time", value: "up to 20 hours" },
            { label: "Music time", value: "up to 20 hours" },
            { label: "Charging time", value: "up to 2.5 hours" },
            { label: "Standby time", value: "up to 20 days" },
          ],
        },
        {
          title: "Controls",
          rows: [
            { value: "Answer, end and reject calls" },
            { value: "Volume up and down" },
            { value: "Mute and unmute" },
            { value: "Power on and off" },
            { value: "Pairing mode" },
            { value: "Play and pause" },
          ],
        },
      ],
      [
        { title: "Management", rows: [{ value: "Yealink USB Connect (PC)" }, { value: "Yealink Management Cloud Service" }] },
        {
          title: "Package contents",
          rows: [
            { label: "SP92", value: "speakerphone, carrying case, USB-C to USB-C cable, USB-C/A adapter, quick start guide" },
            { label: "SP92 with dongle", value: "the same, plus the BT51C dongle" },
          ],
        },
        {
          title: "Weight and size",
          rows: [
            { label: "SP92", value: "276 g" },
            { label: "Gift box", value: "162 × 175 × 45 mm" },
          ],
        },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "SP92\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Who is the SP92 for?",
        answer: "One person or a small group taking calls from a laptop or phone, at the desk, in a huddle room or while travelling. Its pickup range is up to 4 m.",
      },
      {
        question: "What is the battery life of the SP92?",
        answer: "Up to 20 hours talk time, up to 20 hours of music and up to 20 days standby. A full charge takes up to 2.5 hours.",
      },
      {
        question: "How does the SP92 connect?",
        answer: "By USB-C cable, by the BT51C dongle (included in the SP92 with dongle version) or by Bluetooth 5.3. It holds two Bluetooth connections at once and remembers up to eight devices.",
      },
      { question: "Does the SP92 support full duplex?", answer: "Yes. It has full duplex, acoustic echo cancellation and reverberation cancellation." },
      {
        question: "How is the SP92 different from the SP96?",
        answer: "The SP96 adds six microphones with 5 m pickup, a 65 mm speaker, an LCD display, wireless daisy chain and a longer battery.",
      },
      {
        question: "Can I see the SP92 before buying?",
        answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner and brings demo units to your office. We order only after you approve the proposal.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n other Yealink devices",
    highlightLast: 3,
    subhead: "Other headsets and speakerphones in the Yealink range.",
    linkLabel: "View product",
    items: [
      { title: "CP900", image: "/assets/images/yealink/speakerphones/cp900/gallery-1.webp", href: "/yealink/speakerphone/cp900" },
      { title: "SP96", image: "/assets/images/yealink/speakerphones/sp96/gallery-1.webp", href: "/yealink/speakerphone/sp96" },
      { title: "CP700", image: "/assets/images/yealink/speakerphones/cp700/gallery-1.webp", href: "/yealink/speakerphone/cp700" },
      { title: "YHS36 E2", image: "/assets/images/yealink/headsets/yhs36-e2/gallery-1.webp", href: "/yealink/headset/yhs36-e2" },
      { title: "UH42", image: "/assets/images/yealink/headsets/uh42/gallery-1.webp", href: "/yealink/headset/uh42" },
      { title: "UH44", image: "/assets/images/yealink/headsets/uh44/gallery-1.webp", href: "/yealink/headset/uh44" },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the SP92, availability and a demo at your office." },
  footNote: "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc.",
};
