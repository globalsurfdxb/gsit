import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Room Kit EQX datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/room-kit-eqx-ds.pdf)
  href: "/assets/datasheets/cisco/room-kit-eqx-ds.pdf",
};

// Generated from vc_room-kit-eqx.html (Cisco pages dev pack)
export const roomKitEqx: LogitechProductData = {
  slug: "room-kit-eqx",
  seo: {
    title: "Buy Cisco Room Kit EQX in Dubai | GS IT",
    description:
      "Buy the Cisco Room Kit EQX in Dubai: integrated codec, Quad Camera, 6 loudspeakers and bass unit for dual 65\" to 75\" displays.",
    ogTitle: "Cisco Room Kit EQX in Dubai | GS IT",
    ogDescription:
      "Integrated Cisco front-of-room video system for large rooms, installed and supported by GS IT in the UAE.",
  },
  name: "Cisco Room Kit EQX",
  image: `${IMG}/cisco-room-kit-eqx-on-a-floor-stand-with-two-displays.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Room Kit EQX" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-room-kit-eqx-on-a-floor-stand-with-two-displays.webp`,
        alt: "Cisco Room Kit EQX on a floor stand with two displays",
      },
    ],
    tag: "Cisco integrated front-of-room system",
    heading: "Cisco\n Room Kit EQX",
    highlightLast: 3,
    description:
      "A complete front-of-room system with the Codec EQ, Quad Camera, six loudspeakers and a bass unit, built around two displays.",
    pills: ["Dual 65\" to 75\" displays", "Wall, wall stand or floor stand"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Room Series" },
      { label: "Codec", value: "Codec EQ" },
      { label: "Camera", value: "Quad Camera, integrated" },
      { label: "Audio", value: "6 loudspeakers and a bass unit" },
      { label: "Displays", value: "Dual 65\" to 75\", plus a third" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Everything in one frame", text: "codec, camera, amplifier and speakers built into the mount" },
      { label: "Room-filling sound", text: "six loudspeakers, a bass unit and a 200 W amplifier" },
      { label: "Three mounting options", text: "wall mount, wall stand or floor stand" },
      { label: "External microphones required", text: "plan Table or Ceiling Microphone Pro units for the seating" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Room Kit EQX\n mounting options",
    highlightLast: 2,
    subhead: "All options include the same codec, camera and audio. Displays are bought separately.",
    groups: [
      {
        label: "Mounting",
        title: "EQX mounting options",
        description: "Dimensions are without displays.",
        models: [
          {
            name: "Wall mount",
            desc: "The default option",
            points: ["123 × 280 × 13.8 cm, 120 kg", "First Light or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Wall stand",
            desc: "Floor-standing, fixed to the wall",
            points: ["189 × 280 × 15.2 cm, 135 kg", "Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Floor stand",
            desc: "Free-standing",
            points: ["191 × 280 × 92.4 cm, 172 kg", "Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Add-ons",
        title: "Microphones and cameras",
        description: "The EQX needs external microphones.",
        models: [
          {
            name: "Table Microphone Pro",
            desc: "For conference tables",
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
            name: "Room Vision PTZ",
            desc: "For presenter tracking",
            points: ["Arctic White or Carbon Black"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "A complete room\n in one install",
    highlightLast: 3,
    subhead: "What the Room Kit EQX brings to a large meeting room.",
    data: [
      {
        icon: vcIcons.display,
        title: "Dual displays",
        description: "Holds two 65-inch to 75-inch displays, with support for a third.",
        highlight: true,
      },
      {
        icon: vcIcons.speaker,
        title: "Integrated audio",
        description: "Six coaxial speakers and a bass unit, up to 105 dB.",
      },
      {
        icon: vcIcons.camera,
        title: "Quad Camera",
        description: "Integrated above the displays, with speaker tracking and Frames mode.",
      },
      {
        icon: vcIcons.mic,
        title: "IP microphones",
        description: "Up to 8 Cisco IP microphones, or AES67 third-party microphones.",
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
    heading: "A front-of-room system\n without a custom AV build",
    highlightLast: 5,
    paragraphs: [
      "The Room Kit EQX brings the camera, codec, amplifier and speakers into one engineered frame. Add two displays and microphones, and the room is ready for large meetings.",
      "GS IT checks the wall or floor, sources compatible displays, installs the system and supports it after go-live.",
    ],
    facts: [
      { value: "2", label: "main displays" },
      { value: "6", label: "loudspeakers", dark: true },
      { value: "105 dB", label: "max output" },
      { value: "8", label: "IP microphones" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Room Kit EQX\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Included",
          rows: [
            { label: "Components", value: "Codec EQ, Quad Camera, Natural Audio Module IV amplifier, 6 loudspeakers, bass unit, Room Navigator" },
          ],
        },
        {
          title: "Displays",
          rows: [
            { label: "Main displays", value: "2 × 65\" to 75\", certain 75\" to 85\" models qualify" },
            { label: "Extra display", value: "1 more screen" },
            { label: "Resolution", value: "4K60 recommended" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Amplifier", value: "16-channel, 200 W" },
            { label: "Output", value: "105 dB SPL max, 45 Hz to 20 kHz" },
            { label: "Microphones", value: "Up to 8 Cisco IP microphones, more than 3 needs the AV Integrator licence" },
          ],
        },
      ],
      [
        {
          title: "Camera",
          rows: [
            { label: "Quad Camera", value: "4 sensors up to 20 MP, 83° wide and 50° tele lenses, 7x zoom, 1080p60" },
          ],
        },
        {
          title: "Connectivity",
          rows: [
            { label: "PoE", value: "4 PoE++ ports, 90 W total" },
            { label: "Video", value: "3 HDMI outputs, 3 HDMI inputs, 1 USB-C input" },
            { label: "Wireless", value: "Wi-Fi and Bluetooth 5.2 on radio models" },
          ],
        },
        {
          title: "Platforms",
          rows: [
            { label: "Cisco Rooms", value: "Native Webex, with Teams, Zoom and Google Meet interop" },
            { label: "Microsoft Teams Rooms", value: "Supported" },
            { label: "Warranty", value: "Cisco 1-year limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Room Kit EQX\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Are the displays included?",
        answer: "No. You add two 65\" to 75\" displays, which we source to fit the frame.",
      },
      {
        question: "Do we need extra microphones?",
        answer: "Yes. The EQX needs external microphones, such as the Table or Ceiling Microphone Pro.",
      },
      {
        question: "Which mounting option do we need?",
        answer: "Wall mount, wall stand or floor stand. We check your wall or floor during the survey.",
      },
      {
        question: "What warranty does it have?",
        answer: "Cisco gives a 1-year limited liability warranty.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedVideoDevices("room-kit-eqx"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Room Kit EQX, model sizing and availability.",
  },
  footNote: vcFootNote,
};
