import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_STORE, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-tcp30m-console/index.html
export const tcp30mConsole: LogitechProductData = {
  slug: "tcp30m-console",
  seo: {
    title: "MAXHUB TCP30M Console | GS IT",
    description: "MAXHUB TCP30M Console from GS IT in Dubai. An 11.6-inch touch console for the MAXHUB XBoard V7 Series with one-tap meeting join, device control and 65W USB-C charging.",
  },
  name: "MAXHUB TCP30M Console",
  image: `${IMG}/maxhub-tcp30m-console-angled-view.webp`,
  heroData: {
    crumbs: mxCrumbs("TCP30M Console"),
    gallery: [
      { src: `${IMG}/maxhub-tcp30m-console-angled-view.webp`, alt: "MAXHUB TCP30M Console seen at an angle on its stand, showing the meeting home screen" },
      { src: `${IMG}/maxhub-tcp30m-console-front-view.webp`, alt: "Front view of the MAXHUB TCP30M Console showing microphone and camera controls" },
    ],
    tag: "Meeting Room Touch Controller",
    heading: "MAXHUB\n TCP30M Console",
    highlightLast: 2,
    description: "A tabletop touch controller that starts meetings and adjusts the room’s camera, microphones and display from one screen.",
    keys: [
      { label: "Display", value: "11.6″, 1920 × 1080" },
      { label: "Touch", value: "Capacitive, anti-glare" },
      { label: "Wake-up", value: "PIR motion sensor" },
      { label: "Laptop charging", value: "USB-C PD, up to 65W" },
      { label: "Network", value: "2 × RJ45" },
      { label: "Mounting", value: "Table or wall" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Start on Time,\n Run the Room From the Table",
    highlightLast: 6,
    subhead: "The TCP30M puts everyday meeting tasks within reach of the person sitting at the table.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "One-Tap Join",
        description: "Synced schedules let users join Microsoft Teams, Zoom, Google Meet and Webex meetings with a single tap.",
        highlight: true,
      },
      {
        icon: "<path d=\"M5 20V10M5 6V4M12 20v-4M12 12V4M19 20v-8M19 8V4\"/><circle cx=\"5\" cy=\"8\" r=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/><circle cx=\"19\" cy=\"10\" r=\"2\"/>",
        title: "Room Device Control",
        description: "The camera, microphones, volume and screen brightness can be adjusted from the console.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14v-3M11 14V8M15 14v-5M3 21h18\"/>",
        title: "Live Preview & Annotation",
        description: "Users see the main screen on the console in real time, for whiteboard writing and annotation.",
      },
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\"/><path d=\"M21 10.5v3M7 10v4M10.5 10v4\"/>",
        title: "65W USB-C Charging",
        description: "Up to 65W of USB-C Power Delivery keeps a laptop charged during the meeting.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4\"/>",
        title: "Motion Wake-Up",
        description: "A PIR sensor wakes the console automatically.",
      },
      {
        icon: "<rect x=\"7\" y=\"3\" width=\"10\" height=\"18\" rx=\"2\"/><path d=\"M11 18h2\"/>",
        title: "Anti-Glare Touch Glass",
        description: "Capacitive touch with an anti-fingerprint, anti-glare surface reduces glare and smudges.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "On the Desk or on the Wall",
    highlightLast: 4,
    paragraphs: ["The TCP30M can sit on the meeting table or be mounted on a wall to suit the room layout. Its 11.6-inch Full HD screen keeps controls clear and easy to read."],
    checks: [
      "Screen brightness is 250 nits minimum and 300 nits maximum.",
      "Rated display life is 20,000 hours or more.",
      "A 19V 4.5A power adapter is included.",
      "Cables for Ethernet (7.5m) and USB-C (1.5m) come in the box.",
      "The console runs on the Android operating system.",
    ],
    image: `${IMG}/maxhub-tcp30m-console-in-room.webp`,
    alt: "A MAXHUB TCP30M Console on a white table below a MAXHUB XBoard display in a meeting room",
    imagePosition: "center 70%",
  },
  focusData: {
    tag: "Compatibility",
    heading: "A Console Paired\n With Your MAXHUB XBoard",
    highlightLast: 4,
    subhead: "The TCP30M is designed for the MAXHUB XBoard V7 Series running MAXHUB OS.",
    columns: 4,
    data: [
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Wireless Pairing",
        description: "The console can pair with an XBoard wirelessly.",
      },
      {
        icon: "<path d=\"M7 3v5M11 3v5M5 8h8v4a4 4 0 0 1-8 0zM9 16v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V6\"/>",
        title: "LAN Pairing",
        description: "A wired network link is also supported.",
      },
      {
        icon: "<rect x=\"3\" y=\"8\" width=\"18\" height=\"8\" rx=\"2\"/><path d=\"M7 12h.01M11 12h.01M15 12h.01M7 16v3M17 16v3\"/>",
        title: "Two RJ45 Ports",
        description: "RJ45 INTERNET and RJ45 EXT ports are provided.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "MAXHUB OS Versions",
        description: "It works with XBoard models running MAXHUB OS.",
      },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Screen, Power\n & Connection Details",
    highlightLast: 3,
    subhead: "At 278mm wide and 1.16kg, the TCP30M fits on most meeting tables without taking much space.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_Touch_Console_TCP30M_Datasheet_V1_1__20251211_.pdf` },
    columns: [
      [
        {
          title: "Display",
          open: true,
          rows: [
            { label: "Size", value: "11.6″" },
            { label: "Resolution", value: "1920 × 1080" },
            { label: "Refresh rate", value: "60Hz" },
            { label: "Backlight", value: "ELED" },
            { label: "Brightness with glass", value: "250 nits minimum, 300 nits maximum" },
            { label: "Life", value: "≥ 20,000 hours" },
          ],
        },
        {
          title: "Touch & Sensor",
          rows: [
            { label: "Touch type", value: "Capacitive" },
            { label: "Surface treatment", value: "Anti-fingerprint, anti-glare" },
            { label: "Motion sensor", value: "PIR sensor for automatic wake-up" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Power input", value: "19V DC, 4.5A" },
            { label: "Power output", value: "USB-C PD, 65W maximum" },
          ],
        },
        {
          title: "Operating System",
          rows: [
            { label: "OS", value: "Android" },
          ],
        },
      ],
      [
        {
          title: "Ports",
          open: true,
          rows: [
            { label: "RJ45 (INTERNET)", value: "1" },
            { label: "RJ45 (EXT)", value: "1" },
            { label: "DC in", value: "1" },
            { label: "USB-C", value: "1" },
            { label: "USB 2.0", value: "1" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (L × W × H)", value: "278 × 164 × 82mm" },
            { label: "Weight", value: "1.16kg" },
            { label: "Package (L × W × H)", value: "570 × 246 × 101mm" },
            { label: "Package weight", value: "3.12kg" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "USB-C cable, 1.5m", value: "1" },
            { label: "Ethernet cable, 7.5m", value: "1" },
            { label: "Screwdriver", value: "1" },
            { label: "Power adapter", value: "1" },
            { label: "AC cable, 1.5m", value: "1" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on TCP30M Console",
    highlightLast: 2,
    faqData: [
      {
        question: "Which displays does the TCP30M work with?",
        answer: "It is designed for the MAXHUB XBoard V7 Series running MAXHUB OS, and it pairs wirelessly or over LAN.",
      },
      {
        question: "Which meeting platforms can it join?",
        answer: "One-tap join works for Microsoft Teams, Zoom, Google Meet and Webex meetings.",
      },
      {
        question: "Can it charge a laptop?",
        answer: "Yes. The USB-C port supplies up to 65W of Power Delivery, and a 1.5m USB-C cable is included.",
      },
      {
        question: "Can it be mounted on a wall?",
        answer: "Both table and wall mounting are possible, depending on the room layout.",
      },
      {
        question: "Does the screen turn on by itself?",
        answer: "A PIR motion sensor wakes the console automatically when movement is detected.",
      },
      {
        question: "What can users control from it?",
        answer: "Users can turn on the camera, mute microphones, change the volume and adjust screen brightness.",
      },
      {
        question: "What does the console use for power?",
        answer: "The included 19V 4.5A adapter connects to the DC input.",
      },
      {
        question: "What comes in the box?",
        answer: "Inside are a 1.5m USB-C cable, a 7.5m Ethernet cable, a screwdriver, a power adapter and a 1.5m AC cable.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Displays & Room Companions",
    highlightLast: 2,
    subhead: "Start with the XBoard V7 Series, which the TCP30M is designed to work with.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-series" },
      { title: "TCP33T Universal Console", image: `${IMG}/maxhub-tcp33t-universal-console-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/tcp33t-universal-console" },
      { title: "Panel SP10", image: `${IMG}/maxhub-panel-sp10-thumb.webp`, href: `${MX_STORE}/panel-sp10` },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: `${MX_STORE}/uc-bm45` },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Need Room Control?\n Our Team Can Set It Up",
    highlightLast: 6,
    text: "Tell us which displays and rooms you have, and we will confirm compatibility and plan the console setup.",
  }),
  footNote: "",
};
