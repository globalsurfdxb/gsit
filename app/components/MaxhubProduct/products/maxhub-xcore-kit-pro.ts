import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XCore Kit Pro _ GS IT/index.html
export const xcoreKitPro: LogitechProductData = {
  slug: "xcore-kit-pro",
  seo: {
    title: "MAXHUB XCore Kit Pro | GS IT",
    description: "MAXHUB XCore Kit Pro from GS IT. A Microsoft Teams certified kit with the XC25T mini-PC and TCP30T touch console, dual display support and 4K content sharing.",
  },
  name: "MAXHUB XCore Kit Pro",
  image: `${IMG}/maxhub-xcore-kit-pro-full-kit.webp`,
  heroData: {
    crumbs: vcCrumbs("XCore Kit Pro"),
    gallery: [
      { src: `${IMG}/maxhub-xcore-kit-pro-full-kit.webp`, alt: "MAXHUB TCP30T touch console with the XC25T mini-PC" },
      { src: `${IMG}/maxhub-xcore-kit-pro-touch-console.webp`, alt: "MAXHUB TCP30T touch console" },
      { src: `${IMG}/maxhub-xcore-kit-pro-mini-pc.webp`, alt: "MAXHUB XC25T mini-PC" },
    ],
    tag: "Teams Rooms Compute Kit",
    heading: "MAXHUB\n XCore Kit Pro",
    highlightLast: 3,
    description: "A certified Microsoft Teams Rooms kit that runs meetings through the room’s own displays, cameras and audio devices.",
    keys: [
      { label: "Processor", value: "Intel Core i5-1240P" },
      { label: "Memory & storage", value: "16GB DDR4, 256GB" },
      { label: "Operating system", value: "Windows 11 IoT Enterprise" },
      { label: "Room displays", value: "Dual display support" },
      { label: "Touch console", value: "TCP30T, 11.6″" },
      { label: "Warranty", value: "3 years" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Meeting Tools\n Housed in a Compact Mini-PC",
    highlightLast: 5,
    subhead: "People can start meetings, share content and control the room with ease.",
    data: [
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "One-Cable Console Link",
        description: "A single Ethernet cable connects the TCP30T console to the mini-PC, which keeps installation simple.",
        highlight: true,
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Dual Room Displays",
        description: "Two room displays can show shared content and the camera feed at the same time.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "4K Wired Sharing",
        description: "The HDMI input on the XC25T shares content at up to 4K resolution.",
      },
      {
        icon: "<path d=\"M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "Wireless Sharing",
        description: "Content can be shared in Teams Rooms with an optional MAXHUB wireless dongle or the MAXHUB Share app.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Second Console Option",
        description: "Up to two consoles can control the room together, which helps in larger spaces.",
      },
      {
        icon: "<path d=\"M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z\"/>",
        title: "Display Sleep & Wake",
        description: "Room displays sleep and wake automatically with the HDMI video signal to save energy.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Start Meetings With One Touch",
    highlightLast: 3,
    paragraphs: ["Windows 11 IoT Enterprise SAC and Microsoft Teams Rooms run on the XC25T, which has a 12th gen Intel Core i5-1240P, 16GB of DDR4 memory and 256GB of storage. Cameras, microphones and speakers connect to the mini-PC."],
    checks: [
      "MAXHUB Pivot comes pre-installed for remote maintenance and updates.",
      "A PIR sensor wakes the TCP30T when someone approaches.",
      "Laptops share at 1080p through the console’s USB-C port.",
      "Three HDMI outputs and Wi-Fi 6 are built into the mini-PC.",
      "The mini-PC also has a Kensington slot for a security lock.",
    ],
    image: `${IMG}/maxhub-xcore-kit-pro-in-room.webp`,
    alt: "A hand tapping the Teams Rooms home screen on a MAXHUB touch console",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "Compute & Control\n Designed to Work Together",
    highlightLast: 4,
    subhead: "The XC25T runs the meeting software, and the TCP30T gives people touch control at the table.",
    columns: 2,
    data: [
      {
        image: `${IMG}/maxhub-xcore-kit-pro-xc25t-mini-pc.webp`,
        alt: "MAXHUB XC25T mini-PC",
        title: "XC25T Mini-PC",
        description: "The 196 × 196 × 40mm mini-PC weighs 1.12kg and comes with a wall mount kit.",
        list: { label: "In its box", items: ["Wall mount kit", "Two 3m HDMI cables", "Power adapter", "Power cable"] },
      },
      {
        image: `${IMG}/maxhub-xcore-kit-pro-tcp30t-touch-console.webp`,
        alt: "MAXHUB TCP30T touch console",
        title: "TCP30T Touch Console",
        description: "An 11.6 inch, 1920 × 1080 capacitive screen with an anti-glare surface runs each meeting.",
        list: { label: "In its box", items: ["1.8m USB-C cable", "7.5m Ethernet cable"] },
      },
    ],
    note: { title: "Optional Add-Ons", text: "The UC P30 PTZ camera, UC BM45 table speakerphone, WT13M or WT13S wireless dongle and TCP30WM wall-mount bracket are optional." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Check Each Unit\n Before Planning the Layout",
    highlightLast: 4,
    subhead: "Specifications to help plan displays, peripherals and network connections.",
    panes: [
      {
        label: "Kit",
        sub: "XC25T + TCP30T",
        note: "These values apply to the XCore Kit Pro as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XCore_Kit_Pro_Datasheet_V1.2.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XC25T mini-PC", value: "1" },
                { label: "TCP30T touch console", value: "1" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Wireless dongle (content share)", value: "WT13M or WT13S (optional)" },
                { label: "PTZ camera", value: "UC P30 (optional)" },
                { label: "Table speakerphone", value: "UC BM45 (optional)" },
                { label: "Wall mount bracket", value: "TCP30WM (optional)" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "Certification", value: "Microsoft Teams certified" },
                { label: "Warranty", value: "3 years (standard)" },
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
                { label: "Package dimensions (L × W × H)", value: "365 × 270 × 305mm" },
                { label: "Gross weight", value: "6.1kg" },
              ],
            },
          ],
        ],
      },
      {
        label: "XC25T",
        sub: "Mini-PC",
        note: "These values apply to the XC25T mini-PC.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XCore_Kit_Pro_Datasheet_V1.2.pdf` },
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
                { label: "Weight", value: "1.12kg" },
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
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XCore_Kit_Pro_Datasheet_V1.2.pdf` },
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
                { label: "USB-A 2.0", value: "1 (wireless dongle pairing)" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × W × H)", value: "278 × 164 × 82mm" },
                { label: "Weight", value: "1.16kg" },
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
    heading: "Common Questions on XCore Kit Pro",
    highlightLast: 3,
    faqData: [
      {
        question: "What is included in the XCore Kit Pro?",
        answer: "The kit includes the XC25T mini-PC and the TCP30T touch console. The mini-PC comes with a wall mount kit, two 3m HDMI cables, a power adapter and a power cable, and the console comes with a 1.8m USB-C cable and a 7.5m Ethernet cable.",
      },
      {
        question: "Does the kit include a camera or speakerphone?",
        answer: "No. The UC P30 PTZ camera and the UC BM45 table speakerphone are optional accessories, and cameras, microphones and speakers connect to the mini-PC.",
      },
      {
        question: "Is it certified for Microsoft Teams Rooms?",
        answer: "Yes. It is a Microsoft Teams certified kit, and Teams Rooms runs on Windows 11 IoT Enterprise SAC on the XC25T.",
      },
      {
        question: "How many displays can it drive?",
        answer: "It supports dual room displays, so content and the camera stream can be viewed together. The mini-PC has three HDMI outputs.",
      },
      {
        question: "How can people share content?",
        answer: "The HDMI input on the mini-PC shares at up to 4K, and the console’s USB-C port shares a laptop at 1080p. Wireless sharing works with an optional WT13M or WT13S dongle or the MAXHUB Share app.",
      },
      {
        question: "Can a second console be added?",
        answer: "Yes. The TCP30T has an RJ45 port for an optional second console, and up to two consoles can control the room at once.",
      },
      {
        question: "How is the kit managed remotely?",
        answer: "MAXHUB Pivot comes pre-installed, so IT managers can maintain and update the kit without visiting the room.",
      },
      {
        question: "What warranty does the XCore Kit Pro come with?",
        answer: "It comes with a standard 3-year warranty. Our team can confirm the terms for your project.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Expand the Room Setup",
    highlightLast: 3,
    subhead: "The UC P30 camera and UC BM45 speakerphone are optional add-ons for this kit.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "UC P30", image: `${IMG}/maxhub-uc-p30-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/uc-p30" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: "/store/audio-room-control/maxhub/uc-bm45" },
      { title: "XT20-VB Kit", image: `${IMG}/maxhub-xt20-vb-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-vb-kit" },
      { title: "XT20-PS Kit", image: `${IMG}/maxhub-xt20-ps-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-ps-kit" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Planning a Teams Setup?\n Get Advice on Your Layout",
    highlightLast: 5,
    text: "Tell us about the displays, cameras and audio you plan to use. Our AV team handles installation and programming, and our IT team covers the network setup.",
  }),
  footNote: "",
};
