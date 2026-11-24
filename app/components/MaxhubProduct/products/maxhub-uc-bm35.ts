import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_STORE, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-uc-bm35/index.html
export const ucBm35: LogitechProductData = {
  slug: "uc-bm35",
  seo: {
    title: "MAXHUB UC BM35 | GS IT",
    description: "MAXHUB UC BM35 from GS IT in Dubai. A portable Bluetooth speakerphone with an 8-mic array, tweeter and woofer speaker, NFC pairing and up to 15 hours of talk time.",
  },
  name: "MAXHUB UC BM35",
  image: `${IMG}/maxhub-uc-bm35-top-view.webp`,
  heroData: {
    crumbs: mxCrumbs("UC BM35"),
    gallery: [
      { src: `${IMG}/maxhub-uc-bm35-top-view.webp`, alt: "Top view of the MAXHUB UC BM35 speakerphone with its metal speaker grille and touch controls" },
      { src: `${IMG}/maxhub-uc-bm35-angled-view.webp`, alt: "MAXHUB UC BM35 seen at an angle, showing its square body and side edges" },
    ],
    tag: "Bluetooth Speakerphone",
    heading: "MAXHUB\n UC BM35",
    highlightLast: 2,
    description: "A portable speakerphone for video calls that connects to a laptop or smartphone and keeps voices clear in small and mid-sized meeting spaces.",
    keys: [
      { label: "Microphones", value: "8 digital, 6m pickup" },
      { label: "Speaker", value: "Tweeter + woofer, 5W + 3W" },
      { label: "Bluetooth", value: "5.3, dual channel" },
      { label: "Battery", value: "4400mAh, up to 15h talk" },
      { label: "Wired", value: "USB-A to USB-C cable" },
      { label: "Warranty", value: "3-year hot swap" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Clear Voices\n On Both Sides of the Call",
    highlightLast: 6,
    subhead: "The UC BM35 helps people on the far end of a call hear each speaker in the room clearly.",
    data: [
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "8-Mic Array, 6m Pickup",
        description: "Eight digital microphones pick up voices from up to 6m away, with 360° coverage around the unit.",
        highlight: true,
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "AI Noise Reduction",
        description: "Background sounds such as typing, moving chairs and road noise are filtered out during calls.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
        title: "DOA Voice Tracking",
        description: "Direction-of-arrival tracking focuses pickup on the person who is speaking.",
      },
      {
        icon: "<path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11\"/>",
        title: "Tweeter & Woofer Speaker",
        description: "A 1.1-channel speaker with 5W and 3W drivers covers 80Hz to 18kHz for voice and media playback.",
      },
      {
        icon: "<path d=\"M4 8h13l-3-3M20 16H7l3 3\"/>",
        title: "Full-Duplex Audio",
        description: "Both sides can talk at the same time, while echo cancellation and automatic gain control keep levels steady.",
      },
      {
        icon: "<rect x=\"2.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"9.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"16.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><path d=\"M7.5 12h2M14.5 12h2\"/>",
        title: "Wireless Cascading",
        description: "Two UC BM35 units can link wirelessly to cover a larger table.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Compact Audio, Easy to Move",
    highlightLast: 3,
    paragraphs: ["The UC BM35 runs on a built-in battery, so it can move between rooms and desks without a power cable. Reverberation suppression helps keep speech clear in glass-walled meeting rooms."],
    checks: [
      "The 4400mAh battery supports up to 15 hours of talk time and 8 hours of music.",
      "A full charge takes about 4 hours 40 minutes at 5V 1A.",
      "Physical buttons handle power and Bluetooth pairing.",
      "Touch controls cover call answer and hang-up, mute and volume.",
      "An annular LED ring acts as the indicator light.",
    ],
    image: `${IMG}/maxhub-uc-bm35-in-room.webp`,
    alt: "A hybrid meeting in a glass-walled room with a MAXHUB UC BM35 on the table and a remote speaker on the wall screen",
    imagePosition: "45% center",
  },
  focusData: {
    tag: "Connection Options",
    heading: "Plug In or Pair Up,\n Depending on the Device",
    highlightLast: 4,
    subhead: "The UC BM35 has two Bluetooth channels, so a computer and a phone can each keep their own link.",
    columns: 4,
    data: [
      {
        icon: "<path d=\"M12 3v14M9 6l3-3 3 3M7 11v2l5 3M17 9v3l-5 3\"/><circle cx=\"12\" cy=\"19\" r=\"2\"/>",
        title: "USB Bluetooth Dongle",
        description: "The included USB-A dongle links wirelessly to a PC.",
      },
      {
        icon: "<path d=\"M7 3v5M11 3v5M5 8h8v4a4 4 0 0 1-8 0zM9 16v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V6\"/>",
        title: "USB-C Cable",
        description: "A USB-A to USB-C cable gives a wired PC connection.",
      },
      {
        icon: "<rect x=\"7\" y=\"3\" width=\"10\" height=\"18\" rx=\"2\"/><path d=\"M11 18h2\"/>",
        title: "Smartphone Bluetooth",
        description: "Phones and tablets pair through the second channel.",
      },
      {
        icon: "<path d=\"M6 8.5a5 5 0 0 1 0 7M9 6a9 9 0 0 1 0 12M12.5 4a12 12 0 0 1 0 16\"/><circle cx=\"17\" cy=\"12\" r=\"1.5\"/>",
        title: "NFC Tap to Pair",
        description: "Android devices with NFC pair with a single tap.",
      },
    ],
    note: { title: "Zoom Certified & Widely Supported", text: "The UC BM35 is Zoom certified and works with Microsoft Teams, Google Meet, Cisco Webex and RingCentral on Windows and macOS computers." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Sizes, Ratings\n & What Comes in the Box",
    highlightLast: 6,
    subhead: "Key ratings for audio, wireless use, battery life and size help match the UC BM35 to each space.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_UC_BM35_Datasheet_20221101.pdf` },
    columns: [
      [
        {
          title: "Microphones",
          open: true,
          rows: [
            { label: "Microphones", value: "8 digital microphones" },
            { label: "Voice pickup range", value: "6m" },
            { label: "Frequency range", value: "100Hz–12kHz over USB, 100Hz–7.5kHz over Bluetooth" },
            { label: "Noise reduction", value: "AI noise reduction for keyboard, furniture and road noise" },
            { label: "Other processing", value: "Echo cancellation, reverberation suppression, DOA voice tracking" },
          ],
        },
        {
          title: "Speaker",
          rows: [
            { label: "Sound channel", value: "1.1" },
            { label: "Output power", value: "5W + 3W" },
            { label: "Maximum sound pressure", value: "80dB SPL at 1m" },
            { label: "Frequency range", value: "80Hz–18kHz" },
            { label: "Signal-to-noise ratio", value: "More than 75dB" },
            { label: "Distortion", value: "Below 7% (80–350Hz), below 3% (351Hz–4kHz), below 5% (4.1–18kHz)" },
            { label: "Design", value: "Tweeter and woofer combination" },
          ],
        },
        {
          title: "Controls",
          rows: [
            { label: "Physical buttons", value: "Power on/off, Bluetooth pairing" },
            { label: "Touch buttons", value: "Call and hang up, mute, volume + and −" },
            { label: "Indicator", value: "Annular LED" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "USB Type-C cable, 1.0m", value: "1" },
            { label: "USB dongle", value: "1" },
          ],
        },
      ],
      [
        {
          title: "Wireless & Connection",
          open: true,
          rows: [
            { label: "Bluetooth version", value: "5.3" },
            { label: "Operating frequency", value: "2.4GHz" },
            { label: "Operating distance", value: "10m" },
            { label: "Bluetooth audio", value: "Audio playback, HD audio input" },
            { label: "Dual Bluetooth", value: "One channel for the MAXHUB Bluetooth dongle, one for smartphones and other devices" },
            { label: "NFC", value: "Android devices" },
            { label: "PC connection", value: "USB-A dongle (wireless) or USB-A to USB-C cable (wired)" },
            { label: "Wireless cascading", value: "Up to 2 units" },
            { label: "Computer support", value: "Windows 7, 8, 8.1, 10 and 11, macOS 10.10 and later" },
            { label: "Software", value: "MAXHUB Align for Windows and Mac" },
            { label: "Meeting platforms", value: "Zoom, Microsoft Teams, Google Meet, Cisco Webex, RingCentral" },
          ],
        },
        {
          title: "Battery",
          rows: [
            { label: "Type", value: "Lithium-ion" },
            { label: "Capacity", value: "4400mAh" },
            { label: "Talk time", value: "Up to 15 hours" },
            { label: "Music time", value: "Up to 8 hours" },
            { label: "Charge time", value: "4h 40min at 5V 1A" },
          ],
        },
        {
          title: "Physical & Environment",
          rows: [
            { label: "Dimensions (L × W × H)", value: "126.7 × 126.7 × 35.3mm" },
            { label: "Net weight", value: "0.47kg" },
            { label: "Gross weight", value: "0.71kg" },
            { label: "Package (L × W × H)", value: "225 × 158 × 50mm" },
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Operating humidity", value: "10% to 90% RH" },
            { label: "Storage temperature", value: "−20 to 60°C" },
            { label: "Storage humidity", value: "10% to 90% RH" },
            { label: "Altitude", value: "Below 5000m" },
          ],
        },
        {
          title: "Compliance & Warranty",
          rows: [
            { label: "Platform certification", value: "Zoom certified" },
            { label: "Warranty", value: "3-year hot swap" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on UC BM35",
    highlightLast: 2,
    faqData: [
      {
        question: "How do I connect the UC BM35 to a laptop?",
        answer: "Plug the included USB dongle into a USB-A port for a wireless link, or use a USB-A to USB-C cable for a wired connection. Windows 7 to 11 and macOS 10.10 or later are supported.",
      },
      {
        question: "How does it pair with both a phone and a computer?",
        answer: "It has two Bluetooth channels. One is reserved for the MAXHUB dongle on the computer, and the other pairs with a smartphone or tablet.",
      },
      {
        question: "Which meeting platforms does it work with?",
        answer: "Zoom certification is in place, and Microsoft Teams, Google Meet, Cisco Webex and RingCentral are also supported.",
      },
      {
        question: "How long does the battery last?",
        answer: "The 4400mAh battery gives up to 15 hours of talk time or 8 hours of music playback, and charging takes about 4 hours 40 minutes at 5V 1A.",
      },
      {
        question: "What room size does it suit?",
        answer: "Eight microphones pick up voices within a 6m radius, which suits small and mid-sized meeting spaces.",
      },
      {
        question: "Can two units be used together?",
        answer: "Two UC BM35 speakerphones can be linked wirelessly to extend coverage in a larger room.",
      },
      {
        question: "Does NFC pairing work with iPhones?",
        answer: "NFC pairing works with Android devices. Other phones can pair over Bluetooth as normal.",
      },
      {
        question: "What warranty comes with the UC BM35?",
        answer: "A 3-year hot swap warranty covers the UC BM35.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "More From MAXHUB\n for Calls & Collaboration",
    highlightLast: 4,
    subhead: "MAXHUB also has room audio, cameras and video bars for other meeting spaces.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: `${MX_STORE}/uc-bm45` },
      { title: "DM30 Mic Pod", image: `${IMG}/maxhub-dm30-mic-pod-thumb.webp`, href: `${MX_STORE}/dm30-mic-pod` },
      { title: "UC P30", image: `${IMG}/maxhub-uc-p30-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/uc-p30" },
      { title: "XBar U50", image: `${IMG}/maxhub-xbar-u50-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-u50" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Talk to Us About Your Rooms",
    highlightLast: 3,
    text: "Tell us about the spaces you are equipping, and our team will recommend suitable audio and prepare a proposal.",
  }),
  footNote: "",
};
