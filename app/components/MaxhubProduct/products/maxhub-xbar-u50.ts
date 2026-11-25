import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XBar U50 _ GS IT/index.html
export const xbarU50: LogitechProductData = {
  slug: "xbar-u50",
  seo: {
    title: "MAXHUB XBar U50 | GS IT",
    description: "MAXHUB XBar U50 from GS IT. A USB video bar with two 50MP cameras, a 12-mic array and dual 15W speakers that connects to a laptop with one cable.",
  },
  name: "MAXHUB XBar U50",
  image: `${IMG}/maxhub-xbar-u50-angled-view.webp`,
  heroData: {
    crumbs: vcCrumbs("XBar U50"),
    gallery: [
      { src: `${IMG}/maxhub-xbar-u50-angled-view.webp`, alt: "Angled view of the MAXHUB XBar U50 video bar" },
      { src: `${IMG}/maxhub-xbar-u50-front-view.webp`, alt: "Front view of the MAXHUB XBar U50 video bar" },
    ],
    tag: "USB Video Bar",
    heading: "MAXHUB\n XBar U50",
    highlightLast: 2,
    description: "A USB video bar for small to medium rooms that gives a connected laptop a wide-angle camera, room microphones and stereo speakers.",
    keys: [
      { label: "Connection", value: "USB 3.0 Type-B" },
      { label: "Cameras", value: "Two 50MP, 6x digital zoom" },
      { label: "Field of view", value: "125° horizontal" },
      { label: "Microphones", value: "12-mic MEMS array" },
      { label: "Speakers", value: "Dual 15W stereo" },
      { label: "Power", value: "85W maximum" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Video & Audio in One Bar",
    highlightLast: 3,
    subhead: "Laptop meetings gain room-quality video and audio through a single connection.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Dual 50MP Cameras",
        description: "Two 1/1.55 inch sensors with f/2.4 lenses capture video at up to 3840 × 2160.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "Wide 125° Coverage",
        description: "Horizontal coverage reaches 125°, and 6x digital zoom brings distant faces closer.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "AI Camera Direction",
        description: "Speaker tracking, auto framing, smart gathering and intelligent focus keep the right people in shot.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "12 MEMS Microphones",
        description: "A built-in MEMS array with AI noise reduction picks up voices around the table.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "Clear Two-Way Audio",
        description: "Full-duplex audio with echo cancellation and automatic gain control lets people speak and listen at once.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Stereo 15W Speakers",
        description: "Each of the two full-frequency speakers delivers up to 15W of stereo sound.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A Room Upgrade\n for Laptop-Led Meetings",
    highlightLast: 3,
    paragraphs: ["XBar U50 connects to a laptop with one USB cable and acts as its wide-angle camera, full-frequency speaker and noise-reduction microphone. Setup and control settings are managed in MAXHUB Align."],
    checks: [
      "An electric shutter closes over the lenses automatically.",
      "Video and audio fences help keep the focus on the meeting area.",
      "Echo cancellation and anti-reverberation reduce room echo.",
      "The bar measures 650.8 × 76.6 × 95.7mm and weighs 2.68kg.",
      "Maximum power draw is 85W from a 19V DC supply.",
    ],
    image: `${IMG}/maxhub-xbar-u50-in-room.webp`,
    alt: "Four colleagues in a video meeting, with the XBar U50 mounted under the wall display",
  },
  focusData: {
    tag: "Laptop Connection",
    heading: "One USB Cable\n Carries Picture & Sound",
    highlightLast: 4,
    subhead: "A single USB connection gives a laptop a complete room camera and audio system.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "4K Over USB 3.0",
        description: "4K picture reaches laptops over the USB 3.0 Type-B port.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "USB 2.0 Laptops",
        description: "Laptops with only USB 2.0 ports can still use the bar.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Room Audio Included",
        description: "The same cable carries the microphones and speakers.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "Expansion Microphones",
        description: "Up to four extra microphones connect through the RJ45 port.",
      },
    ],
    note: { title: "In the Box", text: "A remote control, ADA-standard mounting components, a positioning card, a power adapter and a 3m USB B-A cable are included." },
  },
  specsData: {
    tag: "Specifications",
    heading: "The U50 in Detail",
    highlightLast: 2,
    subhead: "Technical values to confirm laptop connection, mounting and power needs before the bar is installed.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_U50_Datasheet_V2.0.pdf` },
    columns: [
      [
        {
          title: "Camera",
          open: true,
          rows: [
            { label: "Cameras", value: "2 × 50MP" },
            { label: "Sensor", value: "1/1.55 inch" },
            { label: "Aperture", value: "f/2.4" },
            { label: "USB 3.0 output (H.264 / MJPEG)", value: "3840 × 2160, 2560 × 1440, 1920 × 1080, 1280 × 720, 1024 × 576, 960 × 540, 800 × 600, 640 × 360" },
            { label: "USB 3.0 output (NV12 / YUY2)", value: "1920 × 1080, 1280 × 720, 640 × 360" },
            { label: "USB 2.0 output (H.264 / MJPEG)", value: "3840 × 2160, 2560 × 1440, 1920 × 1080, 1280 × 720, 1024 × 576, 960 × 540, 800 × 600, 640 × 360" },
            { label: "USB 2.0 output (NV12)", value: "1280 × 720, 640 × 360" },
            { label: "USB 2.0 output (YUY2)", value: "640 × 360" },
            { label: "Zoom", value: "6x digital" },
            { label: "Wide camera", value: "130° diagonal, 125° horizontal, 50° vertical" },
            { label: "Privacy cover", value: "Automatic electric lens shutter" },
            { label: "AI features", value: "Auto framing, speaker tracking, intelligent focus, smart gathering, video fence" },
          ],
        },
        {
          title: "Speakers",
          rows: [
            { label: "Speakers", value: "2" },
            { label: "Sound channel", value: "2.0" },
            { label: "Total power (maximum)", value: "15W + 15W" },
            { label: "Frequency range", value: "80Hz–20kHz" },
          ],
        },
        {
          title: "Microphones & Processing",
          rows: [
            { label: "Microphones", value: "12-mic MEMS array" },
            { label: "Frequency range", value: "20Hz–16kHz" },
            { label: "Sensitivity", value: "−36 ± 1 dBFS" },
            { label: "Sampling rate", value: "48kHz" },
            { label: "Expansion", value: "Expansion microphones through the RJ45 port" },
            { label: "Audio processing", value: "Noise reduction, echo cancellation (AEC), anti-reverberation, automatic noise suppression (ANS), automatic gain control (AGC)" },
            { label: "Duplex", value: "Full duplex" },
          ],
        },
      ],
      [
        {
          title: "Ports",
          open: true,
          rows: [
            { label: "USB 3.0 Type-B", value: "1 (connects to your PC)" },
            { label: "DC in", value: "1 (19V power supply)" },
            { label: "RJ45", value: "1 (expansion microphones)" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Power requirement", value: "DC 19V" },
            { label: "Overall power (maximum)", value: "85W" },
          ],
        },
        {
          title: "Device Management",
          rows: [
            { label: "Control and management", value: "MAXHUB Align" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (L × H × D)", value: "650.8 × 76.6 × 95.7mm" },
            { label: "Net weight", value: "2.68kg" },
            { label: "Package dimensions (L × H × D)", value: "1 unit: 750 × 136 × 246mm; 2 units: 790 × 290 × 295mm" },
            { label: "Gross weight", value: "1 unit: 5.4kg; 2 units: 12.4kg" },
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
        {
          title: "Package Content",
          rows: [
            { label: "Power adapter", value: "1" },
            { label: "AC cable, 1.5m", value: "1" },
            { label: "USB B-A cable, 3m", value: "1" },
            { label: "Remote control", value: "1" },
            { label: "Mounting components (ADA standard)", value: "1" },
            { label: "Positioning card", value: "1" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XBar U50",
    highlightLast: 2,
    faqData: [
      {
        question: "How does the XBar U50 connect to a computer?",
        answer: "It connects through its USB 3.0 Type-B port with a single cable, and a 3m USB B-A cable is included.",
      },
      {
        question: "Does it work with a USB 2.0 port?",
        answer: "Yes. The bar also works over USB 2.0 and can still send 4K video.",
      },
      {
        question: "Which room sizes does it suit?",
        answer: "The bar is intended for small to medium rooms, with a 125° horizontal view and a 12-mic array.",
      },
      {
        question: "Do the cameras follow whoever is talking?",
        answer: "Yes. Speaker tracking follows the active speaker, and auto framing, smart gathering and intelligent focus adjust the group shot.",
      },
      {
        question: "Can extra microphones be added?",
        answer: "Expansion microphones connect through the bar’s RJ45 port.",
      },
      {
        question: "How is the bar configured?",
        answer: "Control and management settings are handled in MAXHUB Align. Audio fence needs commissioning software to set up.",
      },
      {
        question: "What comes in the box?",
        answer: "The box holds a power adapter, a 1.5m AC cable, a 3m USB B-A cable, a remote control, ADA-standard mounting components and a positioning card.",
      },
      {
        question: "How much power does it use?",
        answer: "It runs on a 19V DC supply and draws up to 85W. The power adapter and AC cable are included.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Kits & Displays\n From the Same MAXHUB Range",
    highlightLast: 5,
    subhead: "The XT20-VB Kit pairs this bar with a Teams Rooms mini-PC and touch console.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XT20-VB Kit", image: `${IMG}/maxhub-xt20-vb-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-vb-kit" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
      { title: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-w70-kit" },
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Need Advice\n on Mounting & Setup?",
    highlightLast: 4,
    text: "Tell us about the laptops and rooms you work with, and we will suggest a mounting position and arrange installation.",
  }),
  footNote: "",
};
