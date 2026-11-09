import type { YealinkProductData } from "../../Index";
import { headsetCrumbs, heroButtons } from "../../shared";

const IMG = "/assets/images/yealink/speakerphones/cp900";
const DATASHEET = "https://support.yealink.com/document-detail/cf5e797f9f654fe481e21ab9ecab3589";

// Generated from cp900.html
export const cp900: YealinkProductData = {
  slug: "cp900",
  seo: {
    title: "Yealink CP900 Portable Speakerphone Dubai | GS IT",
    description: "A portable USB and Bluetooth speakerphone with a six-microphone beamforming array, full-duplex audio, 360° pickup and 12 hours of talk time.",
  },
  name: "Yealink CP900",
  image: `${IMG}/gallery-1.webp`,
  phoneListing: { disable: false, order: 30, series: ["speakerphone"], features: [], tag: "Bluetooth + USB", text: "Portable speakerphone with a six-microphone array, full duplex, 2 m pickup and 12 hours of talk time.", pills: ["6 mics", "12 h talk"], bestFor: "small meetings on the go" },
  heroData: {
    crumbs: [...headsetCrumbs, { label: "CP900" }],
    gallery: [
      { src: `${IMG}/gallery-1.webp`, alt: "Yealink CP900, image 1" },
      { src: `${IMG}/gallery-2.webp`, alt: "Yealink CP900, image 2" },
      { src: `${IMG}/gallery-3.webp`, alt: "Yealink CP900, image 3" },
      { src: `${IMG}/gallery-4.webp`, alt: "Yealink CP900, image 4" },
    ],
    tag: "Portable speakerphone",
    heading: "Yealink CP900\n Personal speakerphone with 6-mic array",
    highlightLast: 5,
    description: "A portable USB and Bluetooth speakerphone with a six-microphone beamforming array, full-duplex audio, 360° pickup and 12 hours of talk time.",
    pills: ["In stock", "USB + Bluetooth", "6 microphones"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "CP900" },
      { label: "Warranty", value: "Yealink manufacturer warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Pickup", text: "6 MEMS microphones, 360°, up to 2 m." },
      { label: "Full duplex", text: "both sides can talk at once." },
      { label: "Battery", text: "12 hours talk time." },
      { label: "Speaker", text: "7 W peak output." },
    ],
    buttons: heroButtons,
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n CP900",
    highlightLast: 1,
    subhead: "What the CP900 brings to your meetings.",
    data: [
      { icon: "AudioLines", title: "6-mic beamforming array", description: "Six MEMS microphones pick up voices from all around the table." },
      { icon: "Mic", title: "Full duplex", description: "Both sides can talk at the same time without cutting each other off." },
      { icon: "AudioLines", title: "Echo cancellation and noise suppression", description: "Yealink audio algorithms keep the call clean." },
      { icon: "Bluetooth", title: "USB and Bluetooth", description: "Plug into a PC by USB, or pair a phone or tablet over Bluetooth." },
      { icon: "BatteryFull", title: "12 hours talk time", description: "A 2450 mAh battery for a full day of meetings away from a charger." },
      { icon: "Music", title: "Calls and music", description: "Separate conference and music modes on a 7 W peak speaker." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "Every voice\n around the table",
    highlightLast: 3,
    paragraphs: [
      "The CP900 is a proven Yealink speakerphone for small meetings. Six microphones and full duplex keep the conversation natural, and it is small enough to carry from room to room in its zipper bag.",
      "GS IT lets your team try it at your office first, then installs, configures and supports it after go-live.",
    ],
    image: `${IMG}/overview.webp`,
    alt: "Yealink CP900",
  },
  specsData: {
    tag: "Specifications",
    heading: "CP900\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "General",
          rows: [
            { label: "Size", value: "Ø 132.5 × 35.5 mm" },
            { label: "Weight", value: "320 g" },
            { label: "Controls", value: "8 touch buttons" },
            { label: "Connectivity", value: "USB 2.0 plug and play, Bluetooth" },
            { label: "USB cable length", value: "0.9 m" },
            { label: "Power", value: "USB or lithium polymer battery" },
          ],
        },
        {
          title: "Bluetooth",
          rows: [
            { label: "Bluetooth version", value: "Bluetooth 4.2" },
            { label: "Wireless range", value: "30 m/100 ft" },
            { label: "PC dongle", value: "Yealink BT50, optional" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Capacity", value: "2450 mAh" },
            { label: "Charging time", value: "3 hours, 5 V/1 A" },
            { label: "Talk time", value: "12 hours" },
            { label: "Standby time", value: "400 days, power saving after 30 minutes" },
          ],
        },
        {
          title: "Microphone",
          rows: [
            { label: "Type", value: "six MEMS microphone array" },
            { label: "Pickup range", value: "up to 2 m" },
            { label: "Sensitivity", value: "-42 dB re 1 V/Pa" },
            { label: "Signal to noise ratio", value: "+59 dB" },
            { label: "Frequency range, conference mode", value: "115 Hz to 7 kHz" },
          ],
        },
      ],
      [
        {
          title: "Speaker",
          rows: [
            { label: "Peak output power", value: "7 W" },
            { label: "Sensitivity", value: "82 dB SPL ±3 dB at 1 m, 1 W" },
            { label: "Frequency range, conference mode", value: "150 Hz to 8 kHz" },
            { label: "Frequency range, music mode", value: "150 Hz to 16 kHz" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { value: "Optima HD voice" },
            { value: "Full-duplex technology" },
            { value: "Noise suppression" },
            { value: "Digital signal processing" },
            { value: "Acoustic echo cancellation" },
          ],
        },
        {
          title: "Package contents",
          rows: [{ value: "CP900 speakerphone, zipper bag, quick start guide" }, { label: "Optional", value: "BT50 dongle" }],
        },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "CP900\n questions answered",
    highlightLast: 2,
    faqData: [
      { question: "How far does the CP900 pick up voices?", answer: "Up to 2 m, in 360°, from its six-microphone array." },
      { question: "What is the battery life of the CP900?", answer: "12 hours talk time from a 2450 mAh battery. A full charge takes 3 hours." },
      { question: "How does the CP900 connect?", answer: "By USB to a PC, or by Bluetooth 4.2 to a phone or tablet. The BT50 Bluetooth dongle for a PC is optional." },
      {
        question: "How is the CP900 different from the CP700?",
        answer: "The CP900 has six microphones against two, a 2 m pickup range against 1.5 m, a 7 W speaker against 5 W, and 12 hours talk time against 9.",
      },
      {
        question: "Should we choose the CP900 or the newer SP96?",
        answer: "The SP96 adds Bluetooth 5.3, AI noise reduction, 5 m pickup, a 65 mm speaker, an LCD display and wireless daisy chain. We help you choose during the demo.",
      },
      {
        question: "Can I see the CP900 before buying?",
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
      { title: "CP700", image: "/assets/images/yealink/speakerphones/cp700/gallery-1.webp", href: "/yealink/speakerphone/cp700" },
      { title: "SP92", image: "/assets/images/yealink/speakerphones/sp92/gallery-1.webp", href: "/yealink/speakerphone/sp92" },
      { title: "SP96", image: "/assets/images/yealink/speakerphones/sp96/gallery-1.webp", href: "/yealink/speakerphone/sp96" },
      { title: "YHS36 E2", image: "/assets/images/yealink/headsets/yhs36-e2/gallery-1.webp", href: "/yealink/headset/yhs36-e2" },
      { title: "UH42", image: "/assets/images/yealink/headsets/uh42/gallery-1.webp", href: "/yealink/headset/uh42" },
      { title: "UH44", image: "/assets/images/yealink/headsets/uh44/gallery-1.webp", href: "/yealink/headset/uh44" },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the CP900, availability and a demo at your office." },
  footNote: "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc.",
};
