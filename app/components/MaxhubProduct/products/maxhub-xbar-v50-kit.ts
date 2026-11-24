import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XBar V50 Kit _ GS IT/index.html
export const xbarV50Kit: LogitechProductData = {
  slug: "xbar-v50-kit",
  seo: {
    title: "MAXHUB XBar V50 Kit | GS IT",
    description: "MAXHUB XBar V50 Kit from GS IT. An Android video bar with two 50MP cameras, a 12-mic array, dual 15W speakers and Panel AP30, for small to medium meeting rooms.",
  },
  name: "MAXHUB XBar V50 Kit",
  image: `${IMG}/maxhub-xbar-v50-kit-video-bar.webp`,
  heroData: {
    crumbs: vcCrumbs("XBar V50 Kit"),
    gallery: [
      { src: `${IMG}/maxhub-xbar-v50-kit-video-bar.webp`, alt: "Front view of the MAXHUB XBar V50 video bar" },
      { src: `${IMG}/maxhub-xbar-v50-kit-touch-panel.webp`, alt: "MAXHUB Panel AP30 touch panel" },
    ],
    tag: "Compact Video Bar Kit",
    heading: "MAXHUB\n XBar V50 Kit",
    highlightLast: 3,
    description: "A video bar kit for small to medium meeting rooms that shares HDMI and USB-C content at up to 4K.",
    keys: [
      { label: "Platform", value: "Android 13 with MDEP" },
      { label: "Cameras", value: "Two 50MP, 6x digital zoom" },
      { label: "Field of view", value: "125° horizontal" },
      { label: "Microphones", value: "12-mic array" },
      { label: "Speakers", value: "Dual 15W stereo" },
      { label: "Bar length", value: "650.8mm" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Sharp Video\n For Small & Medium Rooms",
    highlightLast: 5,
    subhead: "Remote participants see a detailed picture and hear natural-sounding audio.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "100MP Dual Camera",
        description: "Each of the two 50MP cameras has a 1/1.55 inch sensor, and video reaches 3840 × 2160.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "125° Field of View",
        description: "The lenses cover 130° diagonally and 125° horizontally, with 6x digital zoom for closer shots.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "Framing That Follows",
        description: "Auto framing and speaker tracking move the shot, and smart gathering and intelligent focus keep the group in view.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "12-Mic MEMS Array",
        description: "Twelve MEMS microphones are built in, and up to four expansion microphones can be added.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "Noise & Echo Removal",
        description: "AI noise reduction, echo cancellation and anti-reverberation cut background sounds such as keyboard clicks.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Dual 15W Speakers",
        description: "Two 15W full-frequency speakers play stereo call audio with an 80Hz–20kHz response.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Bring Your Laptop,\n Connect With One USB Cable",
    highlightLast: 5,
    paragraphs: ["The bar runs Android 13 with Microsoft Device Ecosystem Platform support and connects to Panel AP30 for touch control. A single USB cable to its USB 3.0 Type-B port connects a laptop for BYOD meetings."],
    checks: [
      "Content shared in Teams meetings reaches 1080p at 30fps.",
      "Two HDMI outputs support 4K at 60Hz with CEC.",
      "Audio in and audio out ports connect third-party sound equipment.",
      "Microsoft Teams Admin Center, Intune and the Pro management portal can manage the kit.",
      "An electric shutter closes over the lenses automatically for privacy.",
    ],
    image: `${IMG}/maxhub-xbar-v50-kit-in-room.webp`,
    alt: "Four colleagues on a video call, with the XBar V50 under the display and Panel AP30 on the table",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "A Bar & a Touch Panel",
    highlightLast: 3,
    subhead: "The XBar V50 and Panel AP30 each arrive with their own power and network cables.",
    columns: 2,
    data: [
      {
        image: `${IMG}/maxhub-xbar-v50-kit-xbar-v50-video-bar.webp`,
        alt: "MAXHUB XBar V50 video bar",
        title: "XBar V50 Video Bar",
        description: "At 650.8mm wide and 2.8kg, the bar ships with ADA-standard mounting components.",
        list: { label: "In its box", items: ["Power adapter and 1.5m AC cable", "Two 3m HDMI cables", "3m Ethernet cable", "Mounting components (ADA standard)"] },
      },
      {
        image: `${IMG}/maxhub-xbar-v50-kit-panel-ap30-touch-panel.webp`,
        alt: "MAXHUB Panel AP30 touch panel",
        title: "Panel AP30 Touch Panel",
        description: "A 1920 × 1080 capacitive screen gives people touch control, and its USB-C port accepts laptop content.",
        list: { label: "In its box", items: ["1.5m USB-C cable", "7.5m Ethernet cable", "Screwdriver", "Power adapter and 1.5m AC cable"] },
      },
    ],
    note: { title: "USB-C Power for Laptops", text: "Panel AP30 can supply up to 65W over USB-C Power Delivery to a connected laptop." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Detailed Figures\n For the Bar, Panel & Kit",
    highlightLast: 6,
    subhead: "Technical values for planning mounting, power and connections.",
    panes: [
      {
        label: "Kit",
        sub: "V50 + AP30",
        note: "These values apply to the XBar V50 Kit as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V50_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XBar V50 (with standard accessories)", value: "1" },
                { label: "Panel AP30 (with accessories)", value: "1" },
              ],
            },
            {
              title: "Content Sharing",
              rows: [
                { label: "Teams (in meeting)", value: "1080p at 30fps" },
                { label: "Local sharing (USB-C)", value: "4K at 30fps" },
                { label: "Local sharing (HDMI)", value: "4K at 30fps" },
              ],
            },
            {
              title: "Device Management",
              rows: [
                { label: "Microsoft Device Management Platform", value: "Microsoft Teams Admin Center, Intune, Pro management portal" },
                { label: "MAXHUB", value: "MAXHUB Pivot" },
              ],
            },
          ],
          [
            {
              title: "Environment",
              open: true,
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Kit Packaging",
              rows: [
                { label: "Package dimensions (L × W × H)", value: "770 × 257 × 275mm" },
                { label: "Gross weight", value: "9.98kg" },
              ],
            },
          ],
        ],
      },
      {
        label: "XBar V50",
        sub: "Video bar",
        note: "These values apply to the XBar V50 video bar.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V50_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Camera",
              open: true,
              rows: [
                { label: "Cameras", value: "2 × 50MP" },
                { label: "Sensor", value: "1/1.55 inch" },
                { label: "Aperture", value: "f/2.4" },
                { label: "Resolutions (H.264 / MJPEG)", value: "3840 × 2160, 2560 × 1440, 1920 × 1080, 1280 × 720, 1024 × 576, 960 × 540, 800 × 600, 640 × 360" },
                { label: "Resolutions (YUY2)", value: "1920 × 1080, 1280 × 720, 640 × 360" },
                { label: "Zoom", value: "6x digital" },
                { label: "Field of view", value: "130° diagonal, 125° horizontal, 50° vertical" },
                { label: "Privacy shutter", value: "Automatic electric lens shutter" },
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
                { label: "Microphones", value: "12-mic array" },
                { label: "Frequency range", value: "20Hz–16kHz" },
                { label: "Sensitivity", value: "−36 ± 1 dBFS" },
                { label: "Sampling rate", value: "48kHz" },
                { label: "Expansion", value: "Up to 4 expansion microphones" },
                { label: "Audio processing", value: "Noise reduction, echo cancellation (AEC), anti-reverberation, automatic noise suppression (ANS), automatic gain control (AGC), audio fence" },
                { label: "Duplex", value: "Full duplex" },
              ],
            },
          ],
          [
            {
              title: "Software",
              open: true,
              rows: [
                { label: "Operating system", value: "Android 13" },
                { label: "MDEP", value: "Supported" },
              ],
            },
            {
              title: "Network",
              rows: [
                { label: "Wi-Fi", value: "Wi-Fi 6, 2 × 2 MIMO" },
                { label: "Wi-Fi protocol", value: "802.11 a/b/g/n/ac/ax" },
                { label: "Working band", value: "2.4GHz and 5GHz" },
                { label: "Bluetooth", value: "5.2 + BLE" },
                { label: "Ethernet", value: "1000Mbps" },
              ],
            },
            {
              title: "Ports",
              rows: [
                { label: "USB 3.0 Type-B", value: "1 (connects to your PC)" },
                { label: "USB 2.0 Type-A", value: "1 (debug and update)" },
                { label: "HDMI out", value: "2 (up to 4K at 60Hz, CEC supported)" },
                { label: "HDMI in", value: "1 (up to 4K at 60Hz)" },
                { label: "Audio in", value: "1 (third-party audio input)" },
                { label: "Audio out", value: "1 (third-party audio output)" },
                { label: "RJ45 (Internet)", value: "1 (internet connection)" },
                { label: "RJ45 (M Link)", value: "1 (expansion device)" },
                { label: "DC in", value: "1 (19V power supply)" },
              ],
            },
            {
              title: "Power & Physical",
              rows: [
                { label: "Power adapter", value: "AC 100–240V input, DC 19V 4.5A output" },
                { label: "Dimensions (L × W × H)", value: "650.8 × 76.6 × 95.7mm" },
                { label: "Package dimensions (L × W × H)", value: "750 × 136 × 246mm" },
                { label: "Net weight", value: "2.8kg" },
                { label: "Gross weight", value: "6.0kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Power adapter", value: "1" },
                { label: "AC cable, 1.5m", value: "1" },
                { label: "HDMI cable, 3m", value: "2" },
                { label: "Ethernet cable, 3m", value: "1" },
                { label: "Mounting components (ADA standard)", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "Panel AP30",
        sub: "Touch panel",
        note: "These values apply to Panel AP30.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V50_Kit_Datasheet_V2.0.pdf` },
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
                { label: "Lifetime", value: "20,000 hours or more" },
              ],
            },
            {
              title: "Touch & Sensor",
              rows: [
                { label: "Type", value: "Capacitive touch" },
                { label: "Surface treatment", value: "Anti-fingerprint, anti-glare" },
                { label: "Motion sensor", value: "PIR sensor for automatic wake-up" },
              ],
            },
            {
              title: "Software",
              rows: [
                { label: "Operating system", value: "Android 13" },
                { label: "MDEP", value: "Supported" },
              ],
            },
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "RJ45 (Internet)", value: "1" },
                { label: "RJ45 (Ext)", value: "1" },
                { label: "DC in", value: "1" },
                { label: "USB-C (ingest)", value: "1" },
                { label: "USB 2.0", value: "1 (wireless dongle pairing)" },
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
              title: "Physical",
              rows: [
                { label: "Weight", value: "1.16kg" },
                { label: "Package dimensions (L × W × H)", value: "1 unit: 570 × 246 × 101mm; 4 units: 590 × 440 × 280mm" },
                { label: "Package weight", value: "1 unit: 3.12kg" },
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
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XBar V50 Kit",
    highlightLast: 3,
    faqData: [
      {
        question: "Which items are in the XBar V50 Kit?",
        answer: "The kit holds the XBar V50 video bar and Panel AP30. The bar includes a power adapter, an AC cable, two 3m HDMI cables, a 3m Ethernet cable and ADA-standard mounting components. Panel AP30 includes a USB-C cable, a 7.5m Ethernet cable, a screwdriver, a power adapter and an AC cable.",
      },
      {
        question: "What size of room does it suit?",
        answer: "It is designed for small to medium meeting rooms, and the cameras cover 125° horizontally.",
      },
      {
        question: "Does it work with Microsoft Teams?",
        answer: "Content can be shared in Teams meetings at 1080p and 30fps. The kit can be managed in the Microsoft Teams Admin Center, Intune or the Pro management portal.",
      },
      {
        question: "What zoom do the cameras offer?",
        answer: "The two 50MP cameras offer 6x digital zoom, and AI framing and speaker tracking adjust the shot automatically.",
      },
      {
        question: "Can I use the bar with my own laptop?",
        answer: "Yes. Connect the laptop to the USB 3.0 Type-B port with a single USB cable for BYOD meetings.",
      },
      {
        question: "How many displays can the bar connect to?",
        answer: "Two HDMI outputs connect room displays at up to 4K and 60Hz, with CEC support.",
      },
      {
        question: "How big and heavy is the bar?",
        answer: "The bar measures 650.8 × 76.6 × 95.7mm and weighs 2.8kg. Packed, it measures 750 × 136 × 246mm and weighs 6.0kg.",
      },
      {
        question: "What operating conditions does it need?",
        answer: "It runs at temperatures between 0 and 40 °C with 10% to 90% relative humidity, at altitudes below 5000m.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Compare Similar Products",
    highlightLast: 2,
    subhead: "Explore other MAXHUB video bars, room kits and displays.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBar V70 Kit", image: `${IMG}/maxhub-xbar-v70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v70-kit" },
      { title: "XBar U50", image: `${IMG}/maxhub-xbar-u50-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-u50" },
      { title: "XT20-VB Kit", image: `${IMG}/maxhub-xt20-vb-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-vb-kit" },
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Ready to Get Started?\n Share Your Requirements",
    highlightLast: 3,
    text: "Let us know how the room is used and how many people join each meeting, and our team will put together a proposal for you.",
  }),
  footNote: "",
};
