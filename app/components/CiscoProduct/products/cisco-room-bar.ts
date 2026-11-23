import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Room Bar datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/webex-room-bar-ds.pdf)
  href: "/assets/datasheets/cisco/room-bar-ds.pdf",
};

// Generated from vc_room-bar.html (Cisco pages dev pack)
export const roomBar: LogitechProductData = {
  slug: "room-bar",
  seo: {
    title: "Buy Cisco Room Bar in Dubai | GS IT",
    description:
      "Buy the Cisco Room Bar in Dubai: all-in-one video bar with a 12 MP camera, for huddle rooms of up to 5 people. Webex, Teams or Zoom.",
    ogTitle: "Cisco Room Bar in Dubai | GS IT",
    ogDescription:
      "All-in-one Cisco video bar for huddle and focus rooms, installed and supported by GS IT across the UAE.",
  },
  name: "Cisco Room Bar",
  image: `${IMG}/cisco-room-bar-video-bar.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Room Bar" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-room-bar-video-bar.webp`,
        alt: "Cisco Room Bar video bar",
      },
    ],
    tag: "Cisco video bar for huddle rooms",
    heading: "Cisco\n Room Bar",
    highlightLast: 2,
    description:
      "An all-in-one video bar for huddle and focus rooms, with a 12 MP camera, microphones, speakers and a Room Navigator touch panel.",
    pills: ["Up to 5 people within 3 m", "Webex, Teams or Zoom"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Room Series" },
      { label: "Camera", value: "12 MP, 120° field of view" },
      { label: "Microphones", value: "4-element beamforming array" },
      { label: "Displays", value: "Up to 2 at 4K" },
      { label: "Colours", value: "First Light, Carbon" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "One device, one cable", text: "camera, microphones and speakers in a single bar" },
      { label: "Everyone in frame", text: "speaker tracking, group framing and Frames mode" },
      { label: "Bring your own laptop", text: "USB-C passthrough uses the bar’s camera and audio for any meeting app" },
      { label: "Knows the room", text: "ultrasound and presence sensors count people for Control Hub analytics" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Room Bar\n models and add-ons",
    highlightLast: 3,
    subhead: "Choose a colour, then add microphones if people sit more than 3 m from the bar.",
    groups: [
      {
        label: "Models",
        title: "Room Bar models",
        description: "Every model includes the Room Navigator touch panel.",
        models: [
          {
            name: "Room Bar, First Light",
            desc: "Light grey finish",
            points: ["12 MP camera", "Wi-Fi and Bluetooth"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Bar, Carbon",
            desc: "Dark finish",
            points: ["12 MP camera", "Wi-Fi and Bluetooth"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Bar, non-radio",
            desc: "For sites that restrict wireless",
            points: ["No Wi-Fi, Bluetooth or Miracast", "Wired sharing and AirPlay over the network"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Add-ons",
        title: "Microphones and mounting",
        description: "Add a microphone when seating goes beyond 3 m from the bar.",
        models: [
          {
            name: "Table Microphone Pro",
            desc: "For longer tables",
            points: ["Connects over the network", "First Light or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Ceiling Microphone Pro",
            desc: "For a clear table",
            points: ["Ceiling mounted", "Arctic White or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Wall and screen mount",
            desc: "Mount above or below the display",
            points: ["Included", "Gap bar option"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Small rooms,\n big-room meetings",
    highlightLast: 2,
    subhead: "What the Room Bar brings to a huddle or focus room.",
    data: [
      {
        icon: vcIcons.framing,
        title: "AI camera framing",
        description: "Speaker tracking, group framing and Frames mode keep everyone in view.",
        highlight: true,
      },
      {
        icon: vcIcons.mic,
        title: "AI noise removal",
        description: "A beamforming microphone array with noise removal for clear voices.",
      },
      {
        icon: vcIcons.share,
        title: "Wireless sharing",
        description: "Share up to 4K content with the Webex App, Miracast or Apple AirPlay.",
      },
      {
        icon: vcIcons.navigator,
        title: "Room Navigator included",
        description: "A 10-inch touch panel for one-tap join, room booking and controls.",
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
    heading: "A complete video room\n in one bar",
    highlightLast: 3,
    paragraphs: [
      "The Room Bar turns a huddle room or focus room into a video room with one device. It works best for up to five people seated within 3 metres, and larger rooms can add a Table or Ceiling Microphone Pro.",
      "GS IT surveys the room, mounts the bar, registers it to your meeting platform and supports it after go-live.",
    ],
    facts: [
      { value: "12 MP", label: "camera" },
      { value: "120°", label: "field of view", dark: true },
      { value: "5", label: "people within 3 m" },
      { value: "2", label: "4K displays" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Room Bar\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Camera",
          rows: [
            { label: "Sensor", value: "12 MP, 30 fps" },
            { label: "Field of view", value: "120° horizontal, 95° vertical" },
            { label: "Zoom", value: "5x digital" },
            { label: "Framing", value: "Speaker tracking, best overview, Frames, People Focus" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Microphones", value: "4-element beamforming array, for up to 5 people within 3 m" },
            { label: "External microphones", value: "Table Microphone Pro, Ceiling Microphone Pro, analog input" },
            { label: "Speakers", value: "Stereo, 2 full-range drivers, 93 dB SPL max" },
          ],
        },
        {
          title: "Video",
          rows: [
            { label: "Inputs", value: "1 HDMI and 1 USB-C, up to 4K30" },
            { label: "Outputs", value: "2 HDMI, up to 4K60" },
            { label: "USB-C passthrough", value: "Camera, microphones and speakers for your laptop over one cable" },
          ],
        },
      ],
      [
        {
          title: "Network and wireless",
          rows: [
            { label: "Ethernet", value: "1 Gigabit LAN, 1 PoE port for the Room Navigator" },
            { label: "Wi-Fi", value: "802.11ac, 2.4 and 5 GHz" },
            { label: "Wireless sharing", value: "Webex App, Miracast, Apple AirPlay" },
          ],
        },
        {
          title: "Platforms",
          rows: [
            { label: "Cisco Rooms", value: "Native Webex, with Teams, Zoom and Google Meet interop" },
            { label: "Microsoft Teams Rooms", value: "On Android" },
            { label: "Standards", value: "SIP, H.323" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (W × H × D)", value: "53.4 × 8.2 × 6.4 cm" },
            { label: "Weight", value: "1.5 kg" },
            { label: "Power", value: "20 W average" },
            { label: "Warranty", value: "Cisco 90-day limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Room Bar\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How many people does it suit?",
        answer: "Up to 5 people seated within 3 metres. For more, add a Table or Ceiling Microphone Pro.",
      },
      {
        question: "Does it work with Microsoft Teams?",
        answer: "Yes. It can run Microsoft Teams Rooms, or join Teams meetings from Webex.",
      },
      {
        question: "Can visitors use it with their laptop?",
        answer: "Yes. One USB-C cable gives their laptop the bar’s camera, microphones and speakers.",
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
  relatedData: relatedVideoDevices("room-bar"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Room Bar, model sizing and availability.",
  },
  footNote: vcFootNote,
};
