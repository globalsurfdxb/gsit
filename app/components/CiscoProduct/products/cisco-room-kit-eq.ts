import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Room Kit EQ datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/room-kit-eq-ds.pdf)
  href: "/assets/datasheets/cisco/room-kit-eq-ds.pdf",
};

// Generated from vc_room-kit-eq.html (Cisco pages dev pack)
export const roomKitEq: LogitechProductData = {
  slug: "room-kit-eq",
  seo: {
    title: "Buy Cisco Room Kit EQ in Dubai | GS IT",
    description:
      "Buy the Cisco Room Kit EQ in Dubai: Codec EQ, Quad Camera and Room Navigator for conference rooms, boardrooms and training rooms.",
    ogTitle: "Cisco Room Kit EQ in Dubai | GS IT",
    ogDescription:
      "Modular Cisco video kit for large rooms, designed, installed and supported by GS IT in the UAE.",
  },
  name: "Cisco Room Kit EQ",
  image: `${IMG}/cisco-room-kit-eq-with-codec-eq-quad-camera-and-room-navigator.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Room Kit EQ" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-room-kit-eq-with-codec-eq-quad-camera-and-room-navigator.webp`,
        alt: "Cisco Room Kit EQ with Codec EQ, Quad Camera and Room Navigator",
      },
    ],
    tag: "Cisco modular kit for large rooms",
    heading: "Cisco\n Room Kit EQ",
    highlightLast: 3,
    description:
      "A modular kit with the Codec EQ, Quad Camera and Room Navigator, for conference rooms, boardrooms and training rooms.",
    pills: ["Quad Camera or PTZ 4K", "Up to 8 IP microphones"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Room Series" },
      { label: "Codec", value: "Codec EQ" },
      { label: "Camera", value: "Quad Camera, 4 × 20 MP" },
      { label: "Displays", value: "Up to 3 at 4K" },
      { label: "PoE", value: "4 PoE++ ports, 90 W" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Built to scale", text: "add cameras, microphones and displays as the room needs them" },
      { label: "Three video inputs", text: "three HDMI and one USB-C for laptops and room PCs" },
      { label: "AV over IP", text: "four PoE++ ports power microphones and cameras" },
      { label: "Presenter tracking", text: "with the PTZ 4K camera option" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Room Kit EQ\n bundles and add-ons",
    highlightLast: 3,
    subhead: "Choose a camera for the room, then add microphones.",
    groups: [
      {
        label: "Bundles",
        title: "Room Kit EQ bundles",
        description: "Every bundle includes the Codec EQ and a Room Navigator.",
        models: [
          {
            name: "Room Kit EQ with Quad Camera",
            desc: "For conference rooms and boardrooms",
            points: ["4 × 20 MP sensors, 83° wide", "Built-in microphones and speakers"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Kit EQ with PTZ 4K",
            desc: "For training rooms with a presenter",
            points: ["20x optical zoom", "Presenter tracking"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Kit EQ, non-radio",
            desc: "For sites that restrict wireless",
            points: ["No Wi-Fi or Miracast", "Quad Camera"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Add-ons",
        title: "Microphones",
        description: "Plan microphones from the seating layout.",
        models: [
          {
            name: "Table Microphone Pro",
            desc: "For conference tables",
            points: ["Up to 8 Cisco IP microphones", "Powered over PoE"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Ceiling Microphone Pro",
            desc: "For a clear table",
            points: ["Ceiling mounted", "Powered over PoE"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "AV Integrator licence",
            desc: "For third-party audio",
            points: ["AES67 microphones and DSPs"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "A modular kit\n for large rooms",
    highlightLast: 3,
    subhead: "What the Room Kit EQ brings to a conference room.",
    data: [
      {
        icon: vcIcons.camera,
        title: "Quad Camera",
        description: "Four sensors with 83° wide and 50° telephoto lenses, and 7x zoom.",
        highlight: true,
      },
      {
        icon: vcIcons.framing,
        title: "AI framing",
        description: "Frames mode, speaker tracking, group view and People Focus.",
      },
      {
        icon: vcIcons.mic,
        title: "Room-wide audio",
        description: "Up to 8 Cisco IP microphones, plus AES67 for third-party audio.",
      },
      {
        icon: vcIcons.share,
        title: "Wireless sharing",
        description: "Miracast, Apple AirPlay and the Webex App, plus three HDMI inputs.",
      },
      {
        icon: vcIcons.cloud,
        title: "Webex, Teams or Zoom",
        description: "Run Cisco RoomOS for native Webex, with Teams, Zoom and Google Meet interop, or run Microsoft Teams Rooms.",
      },
      {
        icon: vcIcons.wrench,
        title: "Managed from Control Hub",
        description: "Configure, update and monitor the device remotely from Cisco Control Hub.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A flexible kit\n for conference rooms",
    highlightLast: 3,
    paragraphs: [
      "The Room Kit EQ separates the codec, camera and touch panel, so each room gets the camera, microphones and displays it needs. It suits conference rooms, boardrooms and training rooms.",
      "GS IT designs the room, installs the kit and supports it after go-live.",
    ],
    facts: [
      { value: "80 MP", label: "Quad Camera" },
      { value: "3", label: "4K displays", dark: true },
      { value: "8", label: "IP microphones" },
      { value: "90 W", label: "PoE++ budget" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Room Kit EQ\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Codec EQ",
          rows: [
            { label: "Video outputs", value: "3 HDMI, up to 4K60" },
            { label: "Video inputs", value: "3 HDMI up to 4K30, 1 USB-C" },
            { label: "Network", value: "1 Gigabit LAN, 4 PoE++ ports with 90 W total" },
            { label: "Wi-Fi", value: "802.11ax, except non-radio" },
          ],
        },
        {
          title: "Quad Camera",
          rows: [
            { label: "Sensors", value: "4 × 20 MP" },
            { label: "Field of view", value: "83° wide lens, 50° tele lenses" },
            { label: "Zoom", value: "7x" },
            { label: "Output", value: "1080p, up to 60 fps" },
            { label: "Audio", value: "8-element microphone array, built-in speakers" },
          ],
        },
        {
          title: "PTZ 4K Camera",
          rows: [
            { label: "Video", value: "1080p60 or 4K30" },
            { label: "Zoom", value: "20x optical" },
            { label: "Pan and tilt", value: "±170° pan, -20° to +90° tilt" },
          ],
        },
      ],
      [
        {
          title: "Audio",
          rows: [
            { label: "Microphone inputs", value: "3 analog, up to 8 Cisco IP microphones" },
            { label: "Third-party audio", value: "AES67, with AV Integrator licence" },
            { label: "Outputs", value: "Analog line out, HDMI, USB" },
          ],
        },
        {
          title: "Platforms",
          rows: [
            { label: "Cisco Rooms", value: "Native Webex, with Teams, Zoom and Google Meet interop" },
            { label: "Microsoft Teams Rooms", value: "On Android" },
          ],
        },
        {
          title: "Wireless sharing",
          rows: [
            { label: "Options", value: "Miracast, Apple AirPlay, Webex App" },
            { label: "Warranty", value: "Cisco 90-day limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Room Kit EQ\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Quad Camera or PTZ 4K?",
        answer: "The Quad Camera suits conference rooms. The PTZ 4K suits training rooms with a presenter.",
      },
      {
        question: "How many displays can it drive?",
        answer: "Up to three 4K displays.",
      },
      {
        question: "Can it use third-party microphones?",
        answer: "Yes, over AES67 with the AV Integrator licence.",
      },
      {
        question: "What warranty does it have?",
        answer: "Cisco gives a 90-day limited liability warranty.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedVideoDevices("room-kit-eq"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Room Kit EQ, model sizing and availability.",
  },
  footNote: vcFootNote,
};
