import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB WT15 Dongle (WT15M _ WT15S) _ GS IT/index.html
export const wt15Dongle: LogitechProductData = {
  slug: "wt15-dongle-wt15m-wt15s",
  seo: {
    title: "MAXHUB WT15 Dongle (WT15M / WT15S) | GS IT",
    description: "MAXHUB WT15 wireless screen sharing dongle from GS IT. WT15M and WT15S models with 4K sharing, touchback, USB-C with a USB-A adapter and wireless BYOD on the WT15M.",
  },
  name: "MAXHUB WT15 Dongle (WT15M / WT15S)",
  image: `${IMG}/maxhub-wt15-dongle-dongle.webp`,
  heroData: {
    crumbs: dcsCrumbs("WT15 Dongle"),
    gallery: [
      { src: `${IMG}/maxhub-wt15-dongle-dongle.webp`, alt: "MAXHUB WT15 wireless screen sharing dongle with its cable and lanyard loop" },
      { src: `${IMG}/maxhub-wt15-dongle-plugged-in.webp`, alt: "MAXHUB WT15 dongle plugged into a laptop" },
    ],
    tag: "Wireless Screen Sharing Dongle",
    heading: "MAXHUB\n WT15 Dongle (WT15M / WT15S)",
    highlightLast: 5,
    description: "A plug-in dongle that shares a laptop screen to the room display, with no software to install on a PC.",
    keys: [
      { label: "Model", value: "WT15M" },
      { label: "Screen sharing", value: "Up to 3840 × 2160 at 30Hz" },
      { label: "Wireless BYOD", value: "Up to 1920 × 1080 at 30Hz" },
      { label: "Range", value: "Up to 12m" },
      { label: "Wi-Fi", value: "5GHz, 802.11 a/n/ac" },
      { label: "Connector", value: "USB-C, USB-A adapter" },
    ],
    models: {
      label: "Models",
      aria: "Choose a model",
      options: [
        { value: "WT15M", text: "WT15M", aria: "WT15M, with wireless BYOD" },
        { value: "WT15S", text: "WT15S", aria: "WT15S, screen sharing" },
      ],
      keys: {
        "WT15M": { "Model": "WT15M", "Wireless BYOD": "Up to 1920 × 1080 at 30Hz" },
        "WT15S": { "Model": "WT15S", "Wireless BYOD": "Not supported" },
      },
    },
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Share in 4K,\n Straight From the Laptop",
    highlightLast: 4,
    subhead: "Presenters can put their screen on the room display quickly, with no cables across the table.",
    data: [
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "4K Screen Sharing",
        description: "Content is shared at up to 3840 × 2160 at 30Hz for clear slides and video.",
        highlight: true,
      },
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "Driver-Free on PC",
        description: "The dongle works as soon as it is plugged in, with no software to install.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Multi-Screen Sharing",
        description: "Several participants can cast at the same time or in a split-screen layout.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Wireless Touchback",
        description: "People can control their laptop directly from an interactive display.",
      },
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Wireless BYOD",
        description: "On the WT15M, a laptop can use the room camera, microphone and speakers wirelessly.",
      },
      {
        icon: "<path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Secure Connection",
        description: "AES 128-bit encryption, dynamic key negotiation and multi-factor authentication protect each link.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Cable-Free Meeting Tables",
    highlightLast: 2,
    paragraphs: ["The WT15 plugs into a USB-C port, and a USB-A adapter covers laptops without one. It connects over 5GHz Wi-Fi from up to 12m away."],
    checks: [
      "Windows 7, 10 and 11 and macOS 10.12 or later are supported.",
      "Power use stays at 2.5W or less.",
      "The cable has passed over 20,000 bending tests.",
      "A lanyard hole helps keep the dongle from going missing.",
      "Each dongle weighs 73g.",
    ],
    image: `${IMG}/maxhub-wt15-dongle-in-room.webp`,
    alt: "A team in a video meeting around a table with a MAXHUB WT15 dongle plugged into a laptop",
  },
  focusData: {
    tag: "Indicator Light",
    heading: "Clear Status\n at Each Step",
    highlightLast: 3,
    subhead: "The light on the dongle shows what it is doing, so presenters know when they are ready to share.",
    columns: 4,
    data: [
      {
        icon: "<path d=\"M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "Starting Up",
        description: "A flashing white light shows the dongle is starting.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Pairing With the Room",
        description: "Blue flashes while pairing and turns solid once paired, and red means pairing failed.",
      },
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "Pairing With the Laptop",
        description: "White flashes during pairing and stays solid when the laptop is paired.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Sharing the Screen",
        description: "A solid green light confirms the screen is being shared.",
      },
    ],
    note: { title: "Firmware Updates", text: "A flashing blue light also appears while the dongle is updating." },
  },
  compareData: {
    tag: "Compare Models",
    heading: "WT15M or WT15S?\n Pick by Meeting Type",
    highlightLast: 4,
    subhead: "The two models share the same hardware and differ only in wireless BYOD support.",
    columns: [
      { model: "WT15M", label: "WT15M", sub: "With wireless BYOD" },
      { model: "WT15S", label: "WT15S", sub: "Screen sharing" },
    ],
    rows: [
      { label: "Wireless BYOD", values: ["Supported (camera, microphone and speakers)", "Not supported"] },
      { label: "Wireless BYOD resolution (max.)", values: ["1920 × 1080 at 30Hz", "Not applicable"] },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Full Figures by Model",
    highlightLast: 2,
    subhead: "Range, power and size values for planning sharing in each room.",
    panes: [
      {
        label: "WT15M",
        model: "WT15M",
        sub: "With wireless BYOD",
        note: "These values apply to the WT15M.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_WT15M_Wireless_Screen_Sharing_Dongle_Datasheet_V1.2pdf.pdf` },
        columns: [
          [
            {
              title: "Interface",
              open: true,
              rows: [
                { label: "USB Type-C", value: "1" },
                { label: "USB Type-A (adapter)", value: "1" },
              ],
            },
            {
              title: "Performance",
              rows: [
                { label: "Wireless connection range (max.)", value: "12m / 39ft" },
                { label: "Supported operating systems", value: "Windows 7, 10 and 11; macOS 10.12 or later" },
                { label: "Wireless screen sharing resolution (max.)", value: "3840 × 2160 at 30Hz" },
                { label: "Wireless BYOD resolution (max.)", value: "1920 × 1080 at 30Hz" },
                { label: "Touchback control", value: "Supported" },
              ],
            },
            {
              title: "Wi-Fi",
              rows: [
                { label: "Wi-Fi standard", value: "802.11 a/n/ac" },
                { label: "Wi-Fi frequency", value: "5GHz" },
              ],
            },
          ],
          [
            {
              title: "Power",
              open: true,
              rows: [
                { label: "Power supply", value: "5V, 500mA" },
                { label: "Power consumption", value: "2.5W or less" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × H × D)", value: "182.5 × 15.4 × 76.1mm" },
                { label: "Shipping dimensions (L × H × D)", value: "1 pc: 196 × 28 × 110mm; 60 pcs: 420 × 350 × 360mm" },
                { label: "Net weight", value: "73g" },
                { label: "Gross weight", value: "1 pc: 230g; 60 pcs: 15.4kg" },
              ],
            },
            {
              title: "Indicator Light",
              rows: [
                { label: "Flashing white (endpoint)", value: "Starting up" },
                { label: "Flashing blue (endpoint)", value: "Pairing or updating" },
                { label: "Solid blue (endpoint)", value: "Paired" },
                { label: "Solid red (endpoint)", value: "Pairing failed" },
                { label: "Flashing white (laptop)", value: "Pairing" },
                { label: "Solid white (laptop)", value: "Paired" },
                { label: "Solid green (laptop)", value: "Sharing the screen" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
          ],
        ],
      },
      {
        label: "WT15S",
        model: "WT15S",
        sub: "Screen sharing",
        note: "These values apply to the WT15S.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_WT15S_Wireless_Screen_Sharing_Dongle_Datasheet_V1.2pdf.pdf` },
        columns: [
          [
            {
              title: "Interface",
              open: true,
              rows: [
                { label: "USB Type-C", value: "1" },
                { label: "USB Type-A (adapter)", value: "1" },
              ],
            },
            {
              title: "Performance",
              rows: [
                { label: "Wireless connection range (max.)", value: "12m / 39ft" },
                { label: "Supported operating systems", value: "Windows 7, 10 and 11; macOS 10.12 or later" },
                { label: "Wireless screen sharing resolution (max.)", value: "3840 × 2160 at 30Hz" },
                { label: "Touchback control", value: "Supported" },
              ],
            },
            {
              title: "Wi-Fi",
              rows: [
                { label: "Wi-Fi standard", value: "802.11 a/n/ac" },
                { label: "Wi-Fi frequency", value: "5GHz" },
              ],
            },
          ],
          [
            {
              title: "Power",
              open: true,
              rows: [
                { label: "Power supply", value: "5V, 500mA" },
                { label: "Power consumption", value: "2.5W or less" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × H × D)", value: "182.5 × 15.4 × 76.1mm" },
                { label: "Shipping dimensions (L × H × D)", value: "1 pc: 196 × 28 × 110mm; 60 pcs: 420 × 350 × 360mm" },
                { label: "Net weight", value: "73g" },
                { label: "Gross weight", value: "1 pc: 230g; 60 pcs: 15.4kg" },
              ],
            },
            {
              title: "Indicator Light",
              rows: [
                { label: "Flashing white (endpoint)", value: "Starting up" },
                { label: "Flashing blue (endpoint)", value: "Pairing or updating" },
                { label: "Solid blue (endpoint)", value: "Paired" },
                { label: "Solid red (endpoint)", value: "Pairing failed" },
                { label: "Flashing white (laptop)", value: "Pairing" },
                { label: "Solid white (laptop)", value: "Paired" },
                { label: "Solid green (laptop)", value: "Sharing the screen" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on WT15 Dongle",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the WT15M and WT15S?",
        answer: "The WT15M supports wireless BYOD, so a laptop can use the room camera, microphone and speakers. The WT15S handles screen sharing and touchback only.",
      },
      {
        question: "Does the dongle need software or drivers?",
        answer: "No. It is plug-and-play on a PC, with no software installation.",
      },
      {
        question: "Which operating systems are supported?",
        answer: "Windows 7, 10 and 11, and macOS 10.12 or later.",
      },
      {
        question: "How far can the laptop be from the room system?",
        answer: "The wireless connection reaches up to 12m (39ft).",
      },
      {
        question: "Can more than one person share at a time?",
        answer: "Yes. Several participants can cast at the same time or use a split-screen layout.",
      },
      {
        question: "Can the laptop be controlled from the display?",
        answer: "Yes. Touchback lets people control their laptop directly from an interactive display.",
      },
      {
        question: "Which laptop ports does it fit?",
        answer: "It plugs into USB-C and works with a USB-A adapter on laptops that have USB-A ports.",
      },
      {
        question: "How is the wireless connection secured?",
        answer: "It uses AES 128-bit multi-layered encryption, dynamic key negotiation and multi-factor authentication.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "More Ways\n to Share & Meet",
    highlightLast: 4,
    subhead: "Explore other MAXHUB products for meeting rooms.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-series" },
      { title: "UW Series", image: `${IMG}/maxhub-uw-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/uw-series-uw105na" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Wireless\n Sharing for Your Rooms",
    highlightLast: 4,
    text: "Tell us how many rooms and laptops you need to cover, and our AV team will advise on the right model.",
    select: {
      name: "Model",
      label: "Model of interest",
      options: [
        { value: "WT15M", label: "WT15M (with wireless BYOD)" },
        { value: "WT15S", label: "WT15S (screen sharing)" },
      ],
    },
  }),
  footNote: "",
};
