import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XT20-VB Kit _ GS IT/index.html
export const xt20VbKit: LogitechProductData = {
  slug: "xt20-vb-kit",
  seo: {
    title: "MAXHUB XT20-VB Kit | GS IT",
    description: "MAXHUB XT20-VB Kit from GS IT. A Microsoft Teams certified kit with the XBar U50 video bar, XC25T mini-PC and TCP30T touch console for small to medium rooms.",
  },
  name: "MAXHUB XT20-VB Kit",
  image: `${IMG}/maxhub-xt20-vb-kit-full-kit.webp`,
  heroData: {
    crumbs: vcCrumbs("XT20-VB Kit"),
    gallery: [
      { src: `${IMG}/maxhub-xt20-vb-kit-full-kit.webp`, alt: "MAXHUB XBar U50, TCP30T touch console and XC25T mini-PC" },
      { src: `${IMG}/maxhub-xt20-vb-kit-video-bar.webp`, alt: "MAXHUB XBar U50 video bar" },
      { src: `${IMG}/maxhub-xt20-vb-kit-console-mini-pc.webp`, alt: "MAXHUB TCP30T touch console with the XC25T mini-PC" },
    ],
    tag: "Windows Teams Rooms Kit",
    heading: "MAXHUB\n XT20-VB Kit",
    highlightLast: 2,
    description: "A certified Microsoft Teams Rooms kit for small to medium rooms, with wired 4K and wireless content sharing.",
    keys: [
      { label: "Video bar", value: "XBar U50, two 50MP cameras" },
      { label: "Room PC", value: "XC25T, Core i5-1240P" },
      { label: "Operating system", value: "Windows 11 IoT Enterprise" },
      { label: "Microphones", value: "12-mic array" },
      { label: "Speakers", value: "Dual 15W stereo" },
      { label: "Touch console", value: "TCP30T, 11.6″" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Clear Calls,\n Easy Content Sharing",
    highlightLast: 3,
    subhead: "Small and medium meeting rooms get video, audio and content sharing in a single certified kit.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Two 50MP Cameras",
        description: "The XBar U50’s dual cameras deliver video at up to 3840 × 2160 with a 125° horizontal view.",
        highlight: true,
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "AI Framing Tools",
        description: "Auto framing, speaker tracking, smart gathering and intelligent focus follow the conversation.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "12-Mic Array",
        description: "Built-in MEMS microphones apply AI noise reduction, echo cancellation and gain control.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Dual 15W Speakers",
        description: "Stereo, full-frequency speakers in the bar play remote participants’ voices.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "4K Wired Sharing",
        description: "Content shared through the XC25T HDMI input reaches up to 4K.",
      },
      {
        icon: "<path d=\"M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "Wireless Sharing",
        description: "Presenters can share in Teams Rooms from the MAXHUB Share app.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Fewer Cables,\n Simpler Installation",
    highlightLast: 2,
    paragraphs: ["A single Ethernet cable links the XC25T mini-PC to the TCP30T console, and the XBar U50 connects to the mini-PC with a USB A-B cable. The mini-PC’s HDMI outputs support up to two room displays."],
    checks: [
      "Windows 11 IoT Enterprise SAC and Microsoft Teams Rooms run on the mini-PC.",
      "Laptops can share through the USB-C port on the console.",
      "Pre-installed MAXHUB Pivot lets IT managers maintain and update the kit remotely.",
      "An electric lens shutter on the XBar U50 closes automatically.",
      "A PIR sensor on the console wakes it when people arrive.",
    ],
    image: `${IMG}/maxhub-xt20-vb-kit-in-room.webp`,
    alt: "A team in a Teams meeting, with the XBar U50 under the display and the touch console on the table",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "Bar, Console & Compute Box",
    highlightLast: 3,
    subhead: "Each part ships in its own package with the cables it needs.",
    data: [
      {
        image: `${IMG}/maxhub-xt20-vb-kit-xbar-u50-video-bar.webp`,
        alt: "MAXHUB XBar U50 video bar",
        title: "XBar U50 Video Bar",
        description: "The 650.8mm bar weighs 2.68kg and carries the cameras, microphones and speakers.",
        list: { label: "In its box", items: ["Power adapter and 1.5m AC cable", "3m USB B-A cable", "Remote control", "Mounting components (ADA standard)", "Positioning card"] },
      },
      {
        image: `${IMG}/maxhub-xt20-vb-kit-xc25t-mini-pc.webp`,
        alt: "MAXHUB XC25T mini-PC",
        title: "XC25T Mini-PC",
        description: "This 1.12kg mini-PC runs Teams Rooms and outputs to the room displays over HDMI.",
        list: { label: "In its box", items: ["Wall mount kit", "Two 3m HDMI cables", "Power adapter", "Power cable"] },
      },
      {
        image: `${IMG}/maxhub-xt20-vb-kit-tcp30t-touch-console.webp`,
        alt: "MAXHUB TCP30T touch console",
        title: "TCP30T Touch Console",
        description: "People join, call and share from an 11.6 inch capacitive touch screen.",
        list: { label: "In its box", items: ["1.8m USB-C cable", "7.5m Ethernet cable"] },
      },
    ],
    note: { title: "Room for a Second Console", text: "The TCP30T has an RJ45 port for adding an optional second touch console." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Full Details\n for Each Part of the Kit",
    highlightLast: 6,
    subhead: "Technical details for planning displays, cabling and power across the room.",
    panes: [
      {
        label: "Kit",
        sub: "U50 + XC25T + TCP30T",
        note: "These values apply to the XT20-VB Kit as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-VB_Kit_Datasheet_V2.10.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XBar U50 package", value: "1" },
                { label: "XC25T mini-PC package", value: "1" },
                { label: "TCP30T touch console package", value: "1" },
              ],
            },
            {
              title: "Connections",
              rows: [
                { label: "XBar U50 to mini-PC", value: "USB A-B cable" },
                { label: "Console to mini-PC", value: "Ethernet cable" },
                { label: "Room displays", value: "Up to 2, over HDMI" },
                { label: "Laptop", value: "USB-C cable to the console" },
              ],
            },
          ],
          [
            {
              title: "Device Management",
              open: true,
              rows: [
                { label: "Remote management", value: "MAXHUB Pivot (pre-installed)" },
                { label: "XBar U50 control", value: "MAXHUB Align" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "Certification", value: "Microsoft Teams certified" },
              ],
            },
            {
              title: "Kit Packaging",
              rows: [
                { label: "Package dimensions (L × H × D)", value: "770 × 295 × 275mm" },
                { label: "Gross weight", value: "10.05kg" },
              ],
            },
          ],
        ],
      },
      {
        label: "XBar U50",
        sub: "Video bar",
        note: "These values apply to the XBar U50 in this kit.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-VB_Kit_Datasheet_V2.10.pdf` },
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
              title: "Physical",
              rows: [
                { label: "Dimensions (L × H × D)", value: "650.8 × 76.6 × 95.7mm" },
                { label: "Net weight", value: "2.68kg" },
                { label: "Package dimensions (L × H × D)", value: "750 × 136 × 246mm" },
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
      {
        label: "XC25T",
        sub: "Mini-PC",
        note: "These values apply to the XC25T mini-PC.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-VB_Kit_Datasheet_V2.10.pdf` },
        columns: [
          [
            {
              title: "General",
              open: true,
              rows: [
                { label: "Device type", value: "Mini-PC" },
                { label: "Processor", value: "Intel Core i5-1240P" },
                { label: "Memory", value: "16GB DDR4" },
                { label: "Storage", value: "256GB" },
                { label: "Graphics", value: "Intel UHD Graphics for 12th Gen Intel processors" },
                { label: "Operating system", value: "Windows 11 IoT Enterprise SAC" },
                { label: "Application", value: "Microsoft Teams Rooms" },
              ],
            },
            {
              title: "Network",
              rows: [
                { label: "Ethernet", value: "1000Mbps RJ45" },
                { label: "Wi-Fi", value: "Wi-Fi 6" },
                { label: "Bluetooth", value: "5.1" },
              ],
            },
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "USB-A 3.0", value: "4" },
                { label: "RJ45 (LAN)", value: "1" },
                { label: "RJ45 (touch console)", value: "1" },
                { label: "HDMI out", value: "3" },
                { label: "HDMI in (content share)", value: "1" },
                { label: "Kensington slot", value: "1" },
              ],
            },
            {
              title: "Power",
              rows: [
                { label: "Power supply mode", value: "DC power in" },
                { label: "Power requirement", value: "19.5V, 6.15A" },
                { label: "Maximum power consumption", value: "120W" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions", value: "196 × 196 × 40mm" },
                { label: "Net weight", value: "1.12kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Wall mount kit", value: "1" },
                { label: "HDMI cable, 3m", value: "2" },
                { label: "Power adapter", value: "1" },
                { label: "Power cable", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "TCP30T",
        sub: "Touch console",
        note: "These values apply to the TCP30T touch console.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-VB_Kit_Datasheet_V2.10.pdf` },
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
                { label: "Brightness with glass", value: "250 cd/m² minimum, 300 cd/m² typical" },
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
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "USB-C", value: "1 (content sharing)" },
                { label: "USB-A 2.0", value: "1 (USB audio peripherals, keyboard and mouse only)" },
                { label: "RJ45", value: "1 (connects the XC25T mini-PC)" },
                { label: "RJ45", value: "1 (optional second touch console)" },
                { label: "Audio out", value: "1 (headphones, without microphone)" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × W × H)", value: "278 × 164 × 82mm" },
                { label: "Net weight", value: "1.16kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "USB-C cable, 1.8m", value: "1" },
                { label: "Ethernet cable, 7.5m", value: "1" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XT20-VB Kit",
    highlightLast: 2,
    faqData: [
      {
        question: "What are the three parts of the XT20-VB Kit?",
        answer: "The kit is made up of the XBar U50 video bar, the XC25T mini-PC and the TCP30T touch console, each in its own package.",
      },
      {
        question: "Which room sizes is it designed for?",
        answer: "It is designed for small to medium meeting rooms.",
      },
      {
        question: "Is the kit certified for Microsoft Teams?",
        answer: "Yes. It is Microsoft Teams certified, and Teams Rooms runs on Windows 11 IoT Enterprise SAC on the mini-PC.",
      },
      {
        question: "How are the units connected?",
        answer: "The XBar U50 plugs into the mini-PC with a USB A-B cable, and one Ethernet cable links the console to the mini-PC. Room displays connect over HDMI.",
      },
      {
        question: "How many displays can be connected?",
        answer: "The mini-PC supports up to two room displays.",
      },
      {
        question: "How can people share content?",
        answer: "Content can be shared at up to 4K through the HDMI input on the mini-PC, from a laptop on the console’s USB-C port, or wirelessly with the MAXHUB Share app.",
      },
      {
        question: "Can a second console be added?",
        answer: "The TCP30T has an RJ45 port set aside for an optional second touch console.",
      },
      {
        question: "Which tools handle remote management?",
        answer: "MAXHUB Pivot is pre-installed for remote maintenance and updates, and the XBar U50 is controlled through MAXHUB Align.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Parts & Alternatives\n From the Same Product Line",
    highlightLast: 5,
    subhead: "Explore the parts of this kit and other MAXHUB Teams Rooms kits.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
      { title: "XBar U50", image: `${IMG}/maxhub-xbar-u50-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-u50" },
      { title: "XT20-PS Kit", image: `${IMG}/maxhub-xt20-ps-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-ps-kit" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Request a Consultation",
    highlightLast: 1,
    text: "Share your room details and our team will prepare a proposal, with installation and programming handled by our AV team.",
  }),
  footNote: "",
};
