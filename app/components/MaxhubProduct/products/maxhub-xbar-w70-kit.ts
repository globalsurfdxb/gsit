import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XBar W70 Kit _ GS IT/index.html
export const xbarW70Kit: LogitechProductData = {
  slug: "xbar-w70-kit",
  seo: {
    title: "MAXHUB XBar W70 Kit | GS IT",
    description: "MAXHUB XBar W70 Kit from GS IT. A Windows-based Microsoft Teams Rooms video bar with four 50MP cameras, a 16-mic array and a TCP31T touch console for medium to large rooms.",
  },
  name: "MAXHUB XBar W70 Kit",
  image: `${IMG}/maxhub-xbar-w70-kit-full-kit.webp`,
  heroData: {
    crumbs: vcCrumbs("XBar W70 Kit"),
    gallery: [
      { src: `${IMG}/maxhub-xbar-w70-kit-full-kit.webp`, alt: "MAXHUB XBar W70 video bar with the TCP31T touch console" },
      { src: `${IMG}/maxhub-xbar-w70-kit-video-bar.webp`, alt: "Front view of the MAXHUB XBar W70 video bar" },
      { src: `${IMG}/maxhub-xbar-w70-kit-touch-console.webp`, alt: "MAXHUB TCP31T touch console showing the Teams Rooms home screen" },
    ],
    tag: "Teams Rooms Video Bar Kit",
    heading: "MAXHUB\n XBar W70 Kit",
    highlightLast: 3,
    description: "A Microsoft Teams Rooms kit for medium to large meeting rooms, with the room PC housed inside the video bar.",
    keys: [
      { label: "Platform", value: "Windows 11 IoT Enterprise" },
      { label: "Cameras", value: "Four 50MP, 8x hybrid zoom" },
      { label: "Field of view", value: "125° horizontal" },
      { label: "Microphones", value: "16-mic array, 10m pickup" },
      { label: "Speakers", value: "Dual 20W stereo" },
      { label: "Touch console", value: "TCP31T, 11.6″" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Clear Pictures & Sound\n For Larger Meeting Rooms",
    highlightLast: 4,
    subhead: "Remote participants can see and hear everyone in the room clearly, even in larger spaces.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "200MP Quad Camera System",
        description: "Four 50MP cameras with 1/1.55 inch sensors capture the room at up to 3840 × 2160.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "Wide & Telephoto Lenses",
        description: "The wide lens covers 125° horizontally, and the telephoto lenses give close-up shots with 8x hybrid zoom.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "AI Framing & Tracking",
        description: "Auto framing, speaker tracking, smart gathering and intelligent focus adjust the shot as people speak.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "16-Mic Array Pickup",
        description: "Up to four expansion microphones can be added to the 16-mic array, which picks up voices at up to 10m.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "Noise & Echo Control",
        description: "Noise reduction, echo cancellation, anti-reverberation and an audio fence help remote callers hear speech clearly.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Dual 20W Stereo Speakers",
        description: "Two full-frequency speakers with four passive radiators play call audio across the room.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Meetings Start at the Table",
    highlightLast: 3,
    paragraphs: ["Windows 11 IoT Enterprise SAC and Microsoft Teams Rooms run on an Intel Core i5-1240P inside the bar. People start and control calls on the TCP31T console, which wakes when its motion sensor detects someone nearby."],
    checks: [
      "Wired sharing over HDMI reaches up to 4K at 30fps.",
      "A USB-C cable to the console shares a laptop screen at 1080p.",
      "Three HDMI outputs support 4K at 60Hz with CEC control.",
      "An automatic electric shutter covers the camera lenses for privacy.",
      "MAXHUB Pivot monitors device status remotely over the internet.",
    ],
    image: `${IMG}/maxhub-xbar-w70-kit-in-room.webp`,
    alt: "A team in a meeting room on a Teams call, with the XBar W70 under the displays and the TCP31T console on the table",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "Bar & Console,\n Packed With Their Own Cables",
    highlightLast: 5,
    subhead: "The XBar W70 comes paired with a TCP31T touch console. Each unit ships with its own cables.",
    columns: 2,
    data: [
      {
        image: `${IMG}/maxhub-xbar-w70-kit-xbar-w70-video-bar.webp`,
        alt: "MAXHUB XBar W70 video bar",
        title: "XBar W70 Video Bar",
        description: "The 840.6mm bar holds the cameras, microphones, speakers and room PC, and weighs 5kg.",
        list: { label: "In its box", items: ["Power adapter and 1.5m AC cable", "Two 3m HDMI cables", "One 3m and one 7.5m Ethernet cable", "Mounting components"] },
      },
      {
        image: `${IMG}/maxhub-xbar-w70-kit-tcp31t-touch-console.webp`,
        alt: "MAXHUB TCP31T touch console",
        title: "TCP31T Touch Console",
        description: "An 11.6 inch capacitive screen with an anti-glare, anti-fingerprint surface controls each meeting.",
        list: { label: "In its box", items: ["1.8m USB-C cable", "7.5m Ethernet cable", "Screwdriver"] },
      },
    ],
    note: { title: "Optional Add-Ons", text: "A WT13M or WT13S wireless dongle and the TCP30WM wall-mount bracket for the console are available as optional extras." },
  },
  specsData: {
    tag: "Specifications",
    heading: "The Full Kit, Unit by Unit",
    highlightLast: 3,
    subhead: "Full technical details to help plan mounting, cabling and network connections for the room.",
    panes: [
      {
        label: "Kit",
        sub: "W70 + TCP31T",
        note: "These values apply to the XBar W70 Kit as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_W70_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XBar W70 (with standard accessories)", value: "1" },
                { label: "TCP31T touch console (with standard accessories)", value: "1" },
              ],
            },
            {
              title: "Content Sharing",
              rows: [
                { label: "Teams (in meeting)", value: "1080p at 30fps" },
                { label: "Local sharing (USB-C)", value: "1080p at 30fps" },
                { label: "Local sharing (HDMI)", value: "4K at 30fps" },
              ],
            },
            {
              title: "Device Management",
              rows: [
                { label: "Control and management", value: "MAXHUB Pivot" },
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
                { label: "Package dimensions (L × W × H)", value: "985 × 290 × 275mm" },
                { label: "Gross weight", value: "14kg" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Wireless dongle", value: "WT13M or WT13S (optional)" },
                { label: "Console wall mount", value: "TCP30WM bracket (optional)" },
              ],
            },
          ],
        ],
      },
      {
        label: "XBar W70",
        sub: "Video bar",
        note: "These values apply to the XBar W70 video bar.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_W70_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Camera",
              open: true,
              rows: [
                { label: "Cameras", value: "4 × 50MP" },
                { label: "Sensor", value: "1/1.55 inch" },
                { label: "Aperture", value: "f/2.4" },
                { label: "Resolutions (H.264 / MJPEG)", value: "3840 × 2160, 2560 × 1440, 1920 × 1080, 1280 × 720, 1024 × 576, 960 × 540, 800 × 600, 640 × 360" },
                { label: "Resolutions (YUY2)", value: "1920 × 1080, 1280 × 720, 640 × 360" },
                { label: "Zoom", value: "8x hybrid" },
                { label: "Wide camera", value: "130° diagonal, 125° horizontal, 50° vertical" },
                { label: "Telephoto camera", value: "52° diagonal, 42° horizontal, 32° vertical" },
                { label: "Privacy shutter", value: "Automatic electric lens shutter" },
                { label: "AI features", value: "Auto framing, speaker tracking, intelligent focus, smart gathering, video fence" },
              ],
            },
            {
              title: "Speakers",
              rows: [
                { label: "Speakers", value: "2" },
                { label: "Sound channel", value: "2.0" },
                { label: "Total power (maximum)", value: "20W + 20W" },
                { label: "Frequency range", value: "80Hz–20kHz" },
              ],
            },
            {
              title: "Microphones & Processing",
              rows: [
                { label: "Microphones", value: "16-mic array" },
                { label: "Pickup range", value: "10m" },
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
              title: "Room PC & Software",
              open: true,
              rows: [
                { label: "Processor", value: "Intel Core i5-1240P" },
                { label: "Memory", value: "16GB" },
                { label: "Storage", value: "256GB" },
                { label: "Graphics", value: "Intel UHD Graphics for 12th Gen Intel processors" },
                { label: "Operating system", value: "Windows 11 IoT Enterprise SAC" },
                { label: "Application", value: "Microsoft Teams Rooms" },
              ],
            },
            {
              title: "Network",
              rows: [
                { label: "Wi-Fi", value: "Wi-Fi 6, 2 × 2 MIMO" },
                { label: "Wi-Fi protocol", value: "802.11 a/b/g/n/ac/ax" },
                { label: "Working band", value: "2.4GHz and 5GHz" },
                { label: "Working mode", value: "STA" },
                { label: "Bluetooth", value: "5.2 + BLE" },
                { label: "Ethernet", value: "1000Mbps" },
              ],
            },
            {
              title: "Ports",
              rows: [
                { label: "USB 3.0 Type-A", value: "1 (third-party audio input device)" },
                { label: "USB 2.0 Type-A", value: "1 (firmware update and debug)" },
                { label: "HDMI out", value: "3 (up to 4K at 60Hz, CEC supported)" },
                { label: "HDMI in", value: "1 (up to 4K at 60Hz)" },
                { label: "RJ45 (Internet)", value: "1 (network connection)" },
                { label: "RJ45 (M Link)", value: "1 (BYOD wired connection)" },
                { label: "RJ45 (Console)", value: "1 (touch console)" },
                { label: "RJ45 (Ext)", value: "1 (MAXHUB accessories such as microphones and cameras)" },
                { label: "DC in", value: "1 (19V power input)" },
              ],
            },
            {
              title: "Power & Physical",
              rows: [
                { label: "Power adapter", value: "AC 100–240V input, DC 19V 10A output" },
                { label: "Dimensions (L × W × H)", value: "840.6 × 117.6 × 104mm" },
                { label: "Net weight", value: "5.0kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Power adapter", value: "1" },
                { label: "AC cable, 1.5m", value: "1" },
                { label: "HDMI cable, 3m", value: "2" },
                { label: "Ethernet cable, 3m", value: "1" },
                { label: "Ethernet cable, 7.5m", value: "1" },
                { label: "Mounting components", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "TCP31T",
        sub: "Touch console",
        note: "These values apply to the TCP31T touch console.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_W70_Kit_Datasheet_V2.0.pdf` },
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
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "RJ45 (to bar)", value: "1" },
                { label: "RJ45 (M Link)", value: "1" },
                { label: "USB-C (ingest)", value: "1" },
                { label: "USB-A 2.0", value: "1 (USB audio accessories)" },
                { label: "USB 2.0", value: "1 (wireless dongle pairing)" },
                { label: "Audio out (3.5mm)", value: "1" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × W × H)", value: "278 × 164 × 82.4mm" },
                { label: "Weight", value: "1.16kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "USB-C cable, 1.8m", value: "1" },
                { label: "Ethernet cable, 7.5m", value: "1" },
                { label: "Screwdriver", value: "1" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Wall-mount kit", value: "TCP30WM bracket (optional)" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XBar W70 Kit",
    highlightLast: 3,
    faqData: [
      {
        question: "What does the XBar W70 Kit include?",
        answer: "The kit contains the XBar W70 video bar and the TCP31T touch console. The bar comes with a power adapter, an AC cable, two 3m HDMI cables, a 3m and a 7.5m Ethernet cable and mounting components. The console comes with a 1.8m USB-C cable, a 7.5m Ethernet cable and a screwdriver.",
      },
      {
        question: "Which operating system does it run?",
        answer: "Windows 11 IoT Enterprise SAC runs on the bar’s Intel Core i5-1240P with 16GB of memory and 256GB of storage. Microsoft Teams Rooms is the meeting application.",
      },
      {
        question: "What room sizes is it suited to?",
        answer: "It suits medium to large meeting rooms. The 16-mic array picks up voices at up to 10m, and the wide camera covers 125° horizontally.",
      },
      {
        question: "How can presenters share content?",
        answer: "Content shared in a Teams meeting runs at 1080p and 30fps. For local sharing, the HDMI input supports 4K at 30fps and the console’s USB-C port supports 1080p at 30fps.",
      },
      {
        question: "Can a laptop use the kit for BYOD meetings?",
        answer: "Yes. In BYOD mode, a laptop connects to the kit with a single USB cable.",
      },
      {
        question: "Can more microphones be added?",
        answer: "Up to four expansion microphones are supported. The RJ45 Ext port connects MAXHUB accessories, such as microphones and cameras.",
      },
      {
        question: "Do the cameras follow the person speaking?",
        answer: "Yes. Speaker tracking moves the shot to the active speaker, and auto framing, smart gathering and intelligent focus adjust the view of the group. An automatic electric shutter covers the lenses for privacy.",
      },
      {
        question: "Can the touch console be wall mounted?",
        answer: "It can, with the optional TCP30WM wall-mount bracket. The console also has a PIR motion sensor that wakes it when someone approaches.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Browse Similar Options",
    highlightLast: 2,
    subhead: "These MAXHUB products suit other room sizes and platforms.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBar V70 Kit", image: `${IMG}/maxhub-xbar-v70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v70-kit" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
      { title: "XBar U50", image: `${IMG}/maxhub-xbar-u50-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-u50" },
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Questions on This Kit?\n Our Team Can Help You Choose",
    highlightLast: 6,
    text: "Send us the room size and seating plan, and our AV team will suggest a layout and handle installation and programming.",
  }),
  footNote: "",
};
