import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Room Kit Pro G2 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-room-series/room-kit-pro-g2-ds.pdf)
  href: "/assets/datasheets/cisco/room-kit-pro-g2-ds.pdf",
};

// Generated from vc_room-kit-pro-g2.html (Cisco pages dev pack)
export const roomKitProG2: LogitechProductData = {
  slug: "room-kit-pro-g2",
  seo: {
    title: "Buy Cisco Room Kit Pro G2 in Dubai | GS IT",
    description:
      "Buy the Cisco Room Kit Pro G2 in Dubai: NVIDIA-powered codec with 5 HDMI inputs, up to 9 cameras and AV over IP for boardrooms.",
    ogTitle: "Cisco Room Kit Pro G2 in Dubai | GS IT",
    ogDescription:
      "Cisco codec for boardrooms, training rooms and auditoriums, designed, installed and supported by GS IT.",
  },
  name: "Cisco Room Kit Pro G2",
  image: `${IMG}/cisco-room-kit-pro-g2-with-quad-camera-codec-pro-g2-and-room-navigator.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Room Kit Pro G2" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-room-kit-pro-g2-with-quad-camera-codec-pro-g2-and-room-navigator.webp`,
        alt: "Cisco Room Kit Pro G2 with Quad Camera, Codec Pro G2 and Room Navigator",
      },
    ],
    tag: "Cisco codec for boardrooms and auditoriums",
    heading: "Cisco Room Kit\n Pro G2",
    highlightLast: 2,
    description:
      "The NVIDIA-powered Codec Pro G2 for boardrooms, training rooms, auditoriums and divisible rooms, with five HDMI inputs and AV over IP.",
    pills: ["Up to 9 cameras", "Replaces the Room Kit Pro"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Room Series" },
      { label: "Codec", value: "Codec Pro G2" },
      { label: "Camera", value: "Quad Camera or Room Vision PTZ" },
      { label: "Video inputs", value: "5 HDMI, 1 USB-C" },
      { label: "PoE", value: "8 ports, 120 W" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Multi-camera rooms", text: "control up to 9 cameras and show up to 4 at once" },
      { label: "Five HDMI inputs", text: "plus up to 5 video streams over IP" },
      { label: "Professional audio", text: "4 analog inputs, 8 IP microphones and AES67" },
      { label: "The Room Kit Pro successor", text: "the first-generation Room Kit Pro reached end of sale in May 2026" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Room Kit Pro G2\n bundles",
    highlightLast: 1,
    subhead: "Choose a bundle by camera, or the codec alone for a custom AV design.",
    groups: [
      {
        label: "Bundles",
        title: "Room Kit Pro G2 bundles",
        description: "Bundles include the Codec Pro G2 and a Room Navigator.",
        models: [
          {
            name: "Room Kit Pro G2",
            desc: "With Quad Camera",
            points: ["4 × 20 MP, 83° wide", "Speaker tracking and Frames"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Room Kit Pro G2 Vision PTZ",
            desc: "With Room Vision PTZ",
            points: ["12x optical zoom", "Presenter tracking"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Codec Pro G2",
            desc: "Codec only, for custom designs",
            points: ["Choose your own cameras and audio", "Wall, rack or table placement"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Built for\n the most demanding rooms",
    highlightLast: 4,
    subhead: "What the Room Kit Pro G2 brings to boardrooms and auditoriums.",
    data: [
      {
        icon: vcIcons.chip,
        title: "NVIDIA AI engine",
        description: "Runs the multi-camera director, AI noise removal and presenter tracking.",
        highlight: true,
      },
      {
        icon: vcIcons.camera,
        title: "Multi-camera director",
        description: "Up to 9 cameras, with cross-view and up to 4 live in a call.",
      },
      {
        icon: vcIcons.network,
        title: "AV over IP",
        description: "8 PoE ports with 120 W, a 10G port and up to 5 IP video streams.",
      },
      {
        icon: vcIcons.speaker,
        title: "Expandable audio",
        description: "Up to 8 Table or Ceiling Microphone Pro units and 16 Ceiling Speaker Pro units.",
      },
      {
        icon: vcIcons.cloud,
        title: "Webex, Teams or Zoom",
        description: "Webex, Microsoft Teams Rooms on MDEP and Zoom, plus Unified CM registration.",
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
    heading: "A codec for\n every large room",
    highlightLast: 3,
    paragraphs: [
      "The Room Kit Pro G2 handles rooms that a video bar cannot, such as boardrooms with several cameras, training rooms with a presenter, auditoriums and divisible rooms.",
      "GS IT designs the AV system around it, installs and programs it, and supports it after go-live.",
    ],
    facts: [
      { value: "5", label: "HDMI inputs" },
      { value: "9", label: "cameras", dark: true },
      { value: "120 W", label: "PoE budget" },
      { value: "16", label: "Ceiling Speaker Pro" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Room Kit Pro G2\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Video inputs",
          rows: [
            { label: "HDMI", value: "5 × HDMI 2.0, up to 4K30 on all, 5K30 on inputs 1 to 4" },
            { label: "USB-C", value: "1, up to 5K30" },
            { label: "Video over IP", value: "Up to 5 streams" },
          ],
        },
        {
          title: "Video outputs",
          rows: [
            { label: "HDMI", value: "3 × HDMI 2.0, outputs 2 and 3 up to 4K60" },
          ],
        },
        {
          title: "Network and power",
          rows: [
            { label: "PoE", value: "8 ports, PoE to PoE++, 120 W total" },
            { label: "Ethernet", value: "1 Gigabit LAN, 1 × 10G" },
          ],
        },
      ],
      [
        {
          title: "Audio",
          rows: [
            { label: "Analog", value: "4 phantom-powered inputs, 2 balanced outputs" },
            { label: "IP microphones", value: "Up to 8 Table or Ceiling Microphone Pro" },
            { label: "AES67", value: "8 streams of 8 channels" },
            { label: "Speakers", value: "Up to 16 Ceiling Speaker Pro" },
          ],
        },
        {
          title: "Cameras",
          rows: [
            { label: "Quad Camera", value: "4 × 20 MP, 83° wide, 50° tele, 1080p60" },
            { label: "Room Vision PTZ", value: "4K30, 12x optical zoom" },
            { label: "Capacity", value: "Up to 9 cameras, 4 in a live composition" },
          ],
        },
        {
          title: "Platforms and physical",
          rows: [
            { label: "Platforms", value: "Webex, Microsoft Teams Rooms (MDEP), Zoom, Unified CM 15 SU4 or later" },
            { label: "Codec size", value: "43.4 × 6.6 × 25.2 cm, 2.8 kg" },
            { label: "Placement", value: "Wall, rack or free-standing" },
            { label: "Warranty", value: "Cisco 1-year limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Room Kit Pro G2\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does it replace the Room Kit Pro?",
        answer: "Yes. The first-generation Room Kit Pro reached end of sale in May 2026.",
      },
      {
        question: "How many cameras can it run?",
        answer: "Up to 9, with up to 4 shown at once in a call.",
      },
      {
        question: "Does it work with Microsoft Teams Rooms?",
        answer: "Yes. It is certified for Microsoft Teams Rooms (MDEP).",
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
  relatedData: relatedVideoDevices("room-kit-pro-g2"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Room Kit Pro G2, model sizing and availability.",
  },
  footNote: vcFootNote,
};
