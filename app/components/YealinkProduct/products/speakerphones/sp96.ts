import type { YealinkProductData } from "../../Index";
import { headsetCrumbs, heroButtons } from "../../shared";

const IMG = "/assets/images/yealink/speakerphones/sp96";
const DATASHEET = "https://support.yealink.com/document-detail/64e99adb22f348788846a7a074cbf585";

// Generated from sp96.html
export const sp96: YealinkProductData = {
  slug: "sp96",
  seo: {
    title: "Yealink SP96 Bluetooth Speakerphone Dubai | GS IT",
    description: "A Bluetooth 5.3 speakerphone with six microphones, AI noise reduction, a 65 mm speaker and an LCD status display. Link two units wirelessly to cover a larger ",
  },
  name: "Yealink SP96",
  image: `${IMG}/gallery-1.webp`,
  phoneListing: { disable: false, order: 10, series: ["speakerphone"], features: [], tag: "Bluetooth 5.3 + USB", text: "Speakerphone with six microphones, 5 m pickup, a 65 mm speaker, LCD display and wireless daisy chain.", pills: ["6 mics", "26 h talk"], bestFor: "small meeting rooms and huddles" },
  heroData: {
    crumbs: [...headsetCrumbs, { label: "SP96" }],
    gallery: [
      { src: `${IMG}/gallery-1.webp`, alt: "Yealink SP96, image 1" },
      { src: `${IMG}/gallery-2.webp`, alt: "Yealink SP96, image 2" },
      { src: `${IMG}/gallery-3.webp`, alt: "Yealink SP96, image 3" },
      { src: `${IMG}/gallery-4.webp`, alt: "Yealink SP96, image 4" },
    ],
    tag: "Bluetooth speakerphone",
    heading: "Yealink SP96\n Speakerphone for small meeting rooms",
    highlightLast: 5,
    description: "A Bluetooth 5.3 speakerphone with six microphones, AI noise reduction, a 65 mm speaker and an LCD status display. Link two units wirelessly to cover a larger table.",
    pills: ["In stock", "Bluetooth 5.3", "6 microphones"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "SP96" },
      { label: "Warranty", value: "Yealink manufacturer warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Pickup", text: "six microphones, up to 5 m." },
      { label: "Sound", text: "65 mm speaker with virtual bass." },
      { label: "Daisy chain", text: "link two units wirelessly." },
      { label: "Battery", text: "up to 26 hours talk and 35 hours music." },
    ],
    buttons: heroButtons,
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n SP96",
    highlightLast: 1,
    subhead: "What the SP96 brings to your meetings.",
    data: [
      { icon: "Mic", title: "6 microphones, 5 m pickup", description: "Picks up voices from any angle around the table, up to 5 m away." },
      { icon: "AudioLines", title: "AI noise reduction", description: "Yealink's AI algorithm removes background noise so remote participants hear voices." },
      { icon: "MessagesSquare", title: "Full duplex", description: "Both sides can talk at the same time without cutting each other off." },
      { icon: "Volume2", title: "65 mm speaker with virtual bass", description: "Ultra-wideband audio for calls and fuller sound for music." },
      { icon: "Link", title: "Wireless daisy chain", description: "Place two SP96 units together and press the cascade button to cover a larger room." },
      { icon: "Monitor", title: "LCD status display", description: "Shows connection and working status at a glance." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "A meeting room\n that fits in a bag",
    highlightLast: 4,
    paragraphs: [
      "The SP96 is the Yealink speakerphone for small meeting rooms and huddle spaces without a fixed audio system. Six microphones cover the table, the 65 mm speaker fills the room, and a second unit can be chained in wirelessly when the meeting is bigger.",
      "GS IT lets your team try it at your office first, then installs, configures and supports it after go-live.",
    ],
    image: `${IMG}/overview.webp`,
    alt: "Yealink SP96",
  },
  specsData: {
    tag: "Specifications",
    heading: "SP96\n technical specifications",
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
        { title: "Daisy chain", rows: [{ label: "Wireless daisy chain", value: "up to 2 devices" }] },
        {
          title: "Audio",
          rows: [
            { label: "Microphones", value: "6" },
            { label: "Pickup range", value: "up to 5 m" },
            { label: "AI noise cancellation", value: "Yes" },
            { label: "Speaker", value: "Ø 65 mm" },
            { label: "Full duplex", value: "Yes" },
            { label: "Virtual bass", value: "Yes" },
            { label: "Acoustic echo cancellation", value: "Yes" },
            { label: "Reverberation cancellation", value: "Yes" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Battery capacity", value: "6000 mAh" },
            { label: "Talk time", value: "up to 26 hours" },
            { label: "Music time", value: "up to 35 hours" },
            { label: "Standby time", value: "up to 230 hours" },
          ],
        },
      ],
      [
        {
          title: "Controls and display",
          rows: [
            { value: "Answer, end and reject calls" },
            { value: "Volume up and down" },
            { value: "Mute and unmute" },
            { value: "Power on and off" },
            { value: "Bluetooth pairing" },
            { value: "Daisy chain pairing mode" },
            { value: "Play and pause" },
            { value: "LCD display" },
          ],
        },
        { title: "Management", rows: [{ value: "Yealink USB Connect (PC)" }, { value: "Yealink Management Cloud Service" }] },
        {
          title: "Package contents",
          rows: [
            { value: "Speakerphone, carrying case, USB-C to USB-C cable, USB-C/A adapter, quick start guide" },
            { label: "Optional", value: "BT51C dongle" },
          ],
        },
        {
          title: "Weight and size",
          rows: [
            { label: "SP96", value: "400 g" },
            { label: "Gift box", value: "162 × 175 × 59 mm" },
          ],
        },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: DATASHEET },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "SP96\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How big a room can the SP96 cover?",
        answer: "Its six microphones pick up voices up to 5 m away. For a longer table, link a second SP96 wirelessly with the daisy chain button.",
      },
      { question: "What is the battery life of the SP96?", answer: "Up to 26 hours talk time, up to 35 hours of music and up to 230 hours standby, from a 6000 mAh battery." },
      {
        question: "How does the SP96 connect?",
        answer: "By USB-C cable, by the BT51C USB dongle (optional, with a USB-C/A adapter) or by Bluetooth 5.3 to a phone or tablet. It holds two Bluetooth connections at once.",
      },
      {
        question: "How is the SP96 different from the SP92?",
        answer: "The SP96 adds six microphones with 5 m pickup, a 65 mm speaker, an LCD display, wireless daisy chain and a longer battery. The SP92 has a 50 mm speaker and 4 m pickup.",
      },
      { question: "Can we manage SP96 units centrally?", answer: "Yes, through Yealink USB Connect on the PC and Yealink Management Cloud Service." },
      {
        question: "Can I see the SP96 before buying?",
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
      { title: "SP92", image: "/assets/images/yealink/speakerphones/sp92/gallery-1.webp", href: "/yealink/speakerphone/sp92" },
      { title: "YHS36 E2", image: "/assets/images/yealink/headsets/yhs36-e2/gallery-1.webp", href: "/yealink/headset/yhs36-e2" },
      { title: "CP900", image: "/assets/images/yealink/speakerphones/cp900/gallery-1.webp", href: "/yealink/speakerphone/cp900" },
      { title: "UH42", image: "/assets/images/yealink/headsets/uh42/gallery-1.webp", href: "/yealink/headset/uh42" },
      { title: "CP700", image: "/assets/images/yealink/speakerphones/cp700/gallery-1.webp", href: "/yealink/speakerphone/cp700" },
      { title: "UH44", image: "/assets/images/yealink/headsets/uh44/gallery-1.webp", href: "/yealink/headset/uh44" },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the SP96, availability and a demo at your office." },
  footNote: "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc.",
};
