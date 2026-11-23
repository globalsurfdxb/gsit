import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Room Bar Pro datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/room-bar-pro-ds.pdf)
  href: "/assets/datasheets/cisco/room-bar-pro-ds.pdf",
};

// Generated from vc_room-bar-pro.html (Cisco pages dev pack)
export const roomBarPro: LogitechProductData = {
  slug: "room-bar-pro",
  seo: {
    title: "Buy Cisco Room Bar Pro in Dubai | GS IT",
    description:
      "Buy the Cisco Room Bar Pro in Dubai: dual 48 MP cameras, 16-element mic array and 3 displays, for medium meeting and training rooms.",
    ogTitle: "Cisco Room Bar Pro in Dubai | GS IT",
    ogDescription:
      "Cisco video bar for medium meeting rooms, designed, installed and supported by GS IT in the UAE.",
  },
  name: "Cisco Room Bar Pro",
  image: `${IMG}/cisco-room-bar-pro-in-first-light.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Room Bar Pro" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-room-bar-pro-in-first-light.webp`,
        alt: "Cisco Room Bar Pro in First Light",
      },
    ],
    tag: "Cisco video bar for medium rooms",
    heading: "Cisco\n Room Bar Pro",
    highlightLast: 3,
    description:
      "A video bar with a dual 48 MP camera system, a 16-element microphone array and support for three displays, for medium meeting and training rooms.",
    pills: ["Dual 48 MP cameras", "Up to 8 IP microphones"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Room Series" },
      { label: "Camera", value: "Dual 48 MP, 112° wide, 70° tele" },
      { label: "Microphones", value: "16-element array" },
      { label: "Displays", value: "Up to 3 at 4K" },
      { label: "Colours", value: "First Light, Carbon Black" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Sharp at the back of the room", text: "a telephoto lens frames people up to 7 m away" },
      { label: "Room for more people", text: "add up to 8 Cisco IP microphones over the bar’s PoE ports" },
      { label: "Three displays", text: "for people, content and a whiteboard at the same time" },
      { label: "Meeting zones", text: "set a virtual boundary to ignore people outside glass walls" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Room Bar Pro\n models and add-ons",
    highlightLast: 3,
    subhead: "Choose a colour, then add microphones and a tracking camera to suit the room.",
    groups: [
      {
        label: "Models",
        title: "Room Bar Pro models",
        description: "All models have the same cameras, microphones and speakers.",
        models: [
          {
            name: "Room Bar Pro, First Light",
            desc: "Light grey finish",
            points: ["Dual 48 MP cameras", "Wi-Fi 6E"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Bar Pro, Carbon Black",
            desc: "Dark finish",
            points: ["Dual 48 MP cameras", "Wi-Fi 6E"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Bar Pro, non-radio",
            desc: "For sites that restrict wireless",
            points: ["No Wi-Fi or Miracast", "Wired and network sharing"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Add-ons",
        title: "Microphones and cameras",
        description: "For seating beyond 4 m, or a presenter at the front.",
        models: [
          {
            name: "Table Microphone Pro",
            desc: "For longer tables",
            points: ["Up to 8 Cisco IP microphones", "First Light or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Ceiling Microphone Pro",
            desc: "For a clear table",
            points: ["Ceiling mounted", "Arctic White or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "PTZ 4K Camera",
            desc: "For presenter tracking",
            points: ["Connects over Ethernet and HDMI", "Follows a presenter at the front"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Medium rooms,\n every face in frame",
    highlightLast: 4,
    subhead: "What the Room Bar Pro brings to a meeting or training room.",
    data: [
      {
        icon: vcIcons.camera,
        title: "Dual camera system",
        description: "A 112° wide lens and a 70° telephoto lens, with 5x digital zoom.",
        highlight: true,
      },
      {
        icon: vcIcons.framing,
        title: "AI framing",
        description: "Speaker tracking, Frames mode and group and speaker views.",
      },
      {
        icon: vcIcons.mic,
        title: "16-element microphone array",
        description: "Optimised for people within 4 m, with AI noise removal.",
      },
      {
        icon: vcIcons.speaker,
        title: "Three-channel audio",
        description: "Three full-range drivers and dual woofers, up to 97 dB.",
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
    heading: "A video bar\n for medium rooms",
    highlightLast: 3,
    paragraphs: [
      "The Room Bar Pro covers meeting and training rooms that outgrow a huddle bar. Its telephoto lens keeps people at the far end of the table sharp, and its PoE ports power extra microphones and AV over IP devices.",
      "GS IT surveys the room, plans microphones and displays, installs the system and supports it after go-live.",
    ],
    facts: [
      { value: "2 × 48 MP", label: "cameras" },
      { value: "16", label: "microphone elements", dark: true },
      { value: "3", label: "4K displays" },
      { value: "8", label: "IP microphones" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Room Bar Pro\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Cameras",
          rows: [
            { label: "Sensors", value: "Two 48 MP sensors, 30 fps" },
            { label: "Wide lens", value: "112° horizontal" },
            { label: "Tele lens", value: "70° horizontal" },
            { label: "Zoom", value: "5x digital" },
            { label: "Reach", value: "Up to 4 m single-person frame, 7 m two-person frame" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Microphones", value: "16-element beamforming array, for people within 4 m" },
            { label: "External microphones", value: "Up to 8 Cisco IP or 8 AES67 microphones" },
            { label: "Speakers", value: "3-channel, 3 full-range drivers and dual woofers, 97 dB SPL max" },
          ],
        },
        {
          title: "Video",
          rows: [
            { label: "Inputs", value: "1 HDMI and 1 USB-C, up to 4K30" },
            { label: "Outputs", value: "3 HDMI, up to 4K60" },
          ],
        },
      ],
      [
        {
          title: "Network and wireless",
          rows: [
            { label: "Ethernet", value: "1 Gigabit LAN" },
            { label: "PoE", value: "1 port for the Room Navigator, 2 ports for AV over IP" },
            { label: "Wi-Fi", value: "Wi-Fi 6E, 2.4, 5 and 6 GHz" },
            { label: "Wireless sharing", value: "Miracast, Apple AirPlay, Webex App" },
          ],
        },
        {
          title: "Platforms",
          rows: [
            { label: "Cisco Rooms", value: "Native Webex, with Zoom and Google Meet" },
            { label: "Microsoft Teams Rooms", value: "Native on Android" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (W × H × D)", value: "96 × 11 × 9 cm" },
            { label: "Weight", value: "4.47 kg" },
            { label: "Mounting", value: "Above or below the display, gap bar available" },
            { label: "Warranty", value: "Cisco 90-day limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Room Bar Pro\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What room size does it suit?",
        answer: "Medium rooms with people seated within 4 metres. Beyond that, we add microphones.",
      },
      {
        question: "How many extra microphones can it take?",
        answer: "Up to 8 Cisco IP microphones.",
      },
      {
        question: "Can it follow a presenter?",
        answer: "Yes, with a Cisco PTZ 4K camera added.",
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
  relatedData: relatedVideoDevices("room-bar-pro"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Room Bar Pro, model sizing and availability.",
  },
  footNote: vcFootNote,
};
