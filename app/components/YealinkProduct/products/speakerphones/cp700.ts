import type { YealinkProductData } from "../../Index";
import { headsetCrumbs, heroButtons } from "../../shared";

const IMG = "/assets/images/yealink/speakerphones/cp700";
const DATASHEET = "https://support.yealink.com/document-detail/54714bf6128e4cf2a12890ecc7df6d40";

// Generated from cp700.html
export const cp700: YealinkProductData = {
  slug: "cp700",
  seo: {
    title: "Yealink CP700 Portable Speakerphone Dubai | GS IT",
    description: "A 220 g USB and Bluetooth speakerphone with two omnidirectional microphones, 360° pickup, HD voice and 9 hours of talk time, for one person or a very small gr",
  },
  name: "Yealink CP700",
  image: `${IMG}/gallery-1.webp`,
  phoneListing: { disable: false, order: 40, series: ["speakerphone"], features: [], tag: "Bluetooth + USB", text: "Ultra-compact 220 g speakerphone with two microphones, 360° pickup and 9 hours of talk time.", pills: ["220 g", "9 h talk"], bestFor: "one or two people on a call" },
  heroData: {
    crumbs: [...headsetCrumbs, { label: "CP700" }],
    gallery: [
      { src: `${IMG}/gallery-1.webp`, alt: "Yealink CP700, image 1" },
      { src: `${IMG}/gallery-2.webp`, alt: "Yealink CP700, image 2" },
      { src: `${IMG}/gallery-3.webp`, alt: "Yealink CP700, image 3" },
      { src: `${IMG}/gallery-4.webp`, alt: "Yealink CP700, image 4" },
    ],
    tag: "Portable speakerphone",
    heading: "Yealink CP700\n Ultra-compact personal speakerphone",
    highlightLast: 3,
    description: "A 220 g USB and Bluetooth speakerphone with two omnidirectional microphones, 360° pickup, HD voice and 9 hours of talk time, for one person or a very small group.",
    pills: ["In stock", "USB + Bluetooth", "220 g"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "CP700" },
      { label: "Warranty", value: "Yealink manufacturer warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Pickup", text: "2 omnidirectional microphones, 360°, up to 1.5 m." },
      { label: "Battery", text: "9 hours talk time." },
      { label: "Portable", text: "220 g, zipper bag included." },
      { label: "Audio", text: "HD voice with echo cancellation." },
    ],
    buttons: heroButtons,
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n CP700",
    highlightLast: 1,
    subhead: "What the CP700 brings to your meetings.",
    data: [
      { icon: "Mic", title: "360° pickup", description: "Two omnidirectional microphones pick up voices up to 1.5 m away." },
      { icon: "AudioLines", title: "Echo cancellation", description: "Acoustic echo cancellation and noise suppression keep the call clear." },
      { icon: "Bluetooth", title: "USB and Bluetooth", description: "Plug into a PC by USB, or pair a phone or tablet over Bluetooth." },
      { icon: "BatteryFull", title: "9 hours talk time", description: "A 1420 mAh battery and 230 days standby." },
      { icon: "Hand", title: "Touch controls", description: "Answer, hang up, volume, mute and a voice assistant/Teams button on the unit." },
      { icon: "Minimize2", title: "Ultra-compact", description: "120 mm across, 28 mm high and 220 g, with a zipper bag." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "Hands-free calls\n wherever you work",
    highlightLast: 3,
    paragraphs: [
      "The CP700 is the smallest Yealink speakerphone, for one person or two taking calls from a laptop, tablet or phone. It fits in a laptop bag and keeps the controls on the unit itself.",
      "GS IT lets your team try it at your office first, then installs, configures and supports it after go-live.",
    ],
    image: `${IMG}/overview.webp`,
    alt: "Yealink CP700",
  },
  specsData: {
    tag: "Specifications",
    heading: "CP700\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "General",
          rows: [
            { label: "Size", value: "Ø 120 × 28 mm" },
            { label: "Weight", value: "220 g" },
            { label: "Connectivity", value: "USB 2.0 plug and play, Bluetooth" },
            { label: "USB cable length", value: "0.8 m" },
            { label: "Touch buttons", value: "power, Bluetooth, answer, hang up, volume up and down, mute, voice assistant/Teams" },
          ],
        },
        {
          title: "Bluetooth",
          rows: [
            { label: "Bluetooth version", value: "Bluetooth 4.2" },
            { label: "Wireless range", value: "30 m/100 ft" },
            { label: "Profiles", value: "HFP v1.7, A2DP v1.2, AVRCP v1.3" },
            { label: "PC dongle", value: "Yealink BT50, Bluetooth 5.0, optional" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Type", value: "lithium polymer" },
            { label: "Capacity", value: "1420 mAh" },
            { label: "Charging time", value: "3 hours, 5 V/500 mA" },
            { label: "Talk time", value: "9 hours" },
            { label: "Standby time", value: "230 days, power saving after 30 min" },
          ],
        },
        {
          title: "Microphone",
          rows: [
            { label: "Type", value: "omnidirectional" },
            { label: "Pickup range", value: "1.5 m" },
            { label: "Signal to noise ratio", value: "+58 dB" },
            { label: "Frequency range, conference mode", value: "100 Hz to 8 kHz" },
          ],
        },
      ],
      [
        {
          title: "Speaker",
          rows: [
            { label: "Peak output power", value: "5 W" },
            { label: "RMS", value: "3 W" },
            { label: "Sensitivity", value: "81 dB SPL ±3 dB at 1 m, 1 W" },
            { label: "Frequency range, conference mode", value: "150 Hz to 8 kHz" },
            { label: "Frequency range, music mode", value: "150 Hz to 16 kHz" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { value: "Optima HD voice" },
            { value: "Wideband audio" },
            { value: "Audio duplex" },
            { value: "Noise suppression" },
            { value: "Digital signal processing" },
            { value: "Acoustic echo cancellation" },
          ],
        },
        {
          title: "Package contents",
          rows: [{ value: "CP700 speakerphone, zipper bag, quick start guide" }, { label: "Optional", value: "BT50 dongle" }],
        },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "CP700\n questions answered",
    highlightLast: 2,
    faqData: [
      { question: "Who is the CP700 for?", answer: "One person, or two sitting close together, taking calls from a laptop, tablet or phone. Its pickup range is 1.5 m." },
      { question: "What is the battery life of the CP700?", answer: "9 hours talk time and 230 days standby. A full charge takes 3 hours." },
      { question: "How does the CP700 connect?", answer: "By USB to a PC, or by Bluetooth 4.2 to a phone or tablet. The BT50 dongle for a PC is optional." },
      { question: "How much does the CP700 weigh?", answer: "220 g. It measures 120 mm across and 28 mm high." },
      { question: "How is the CP700 different from the CP900?", answer: "The CP900 has six microphones, 2 m pickup, a 7 W speaker and 12 hours talk time. The CP700 is smaller and lighter." },
      {
        question: "Can I see the CP700 before buying?",
        answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner and brings demo units to your office. We order only after you approve the proposal.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n other Yealink devices",
    highlightLast: 3,
    subhead: "Other headsets and speakerphones in the Yealink range.",
    linkLabel: "View product →",
    items: [
      { title: "CP900", image: "/assets/images/yealink/speakerphones/cp900/gallery-1.webp", href: "/yealink/speakerphone/cp900" },
      { title: "SP92", image: "/assets/images/yealink/speakerphones/sp92/gallery-1.webp", href: "/yealink/speakerphone/sp92" },
      { title: "SP96", image: "/assets/images/yealink/speakerphones/sp96/gallery-1.webp", href: "/yealink/speakerphone/sp96" },
      { title: "YHS36 E2", image: "/assets/images/yealink/headsets/yhs36-e2/gallery-1.webp", href: "/yealink/headset/yhs36-e2" },
      { title: "UH42", image: "/assets/images/yealink/headsets/uh42/gallery-1.webp", href: "/yealink/headset/uh42" },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the CP700, availability and a demo at your office." },
  footNote: "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc.",
};
