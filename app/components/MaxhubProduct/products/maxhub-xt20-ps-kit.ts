import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XT20-PS Kit _ GS IT/index.html
export const xt20PsKit: LogitechProductData = {
  slug: "xt20-ps-kit",
  seo: {
    title: "MAXHUB XT20-PS Kit | GS IT",
    description: "MAXHUB XT20-PS Kit from GS IT. A Microsoft Teams certified kit with the UC P30 PTZ camera, UC BM45 speakerphone, TCP30T console and XC25T mini-PC for medium to large rooms.",
  },
  name: "MAXHUB XT20-PS Kit",
  image: `${IMG}/maxhub-xt20-ps-kit-full-kit.webp`,
  heroData: {
    crumbs: vcCrumbs("XT20-PS Kit"),
    gallery: [
      { src: `${IMG}/maxhub-xt20-ps-kit-full-kit.webp`, alt: "MAXHUB UC P30 camera, UC BM45 speakerphone, TCP30T console and XC25T mini-PC" },
      { src: `${IMG}/maxhub-xt20-ps-kit-ptz-camera.webp`, alt: "MAXHUB UC P30 PTZ camera" },
      { src: `${IMG}/maxhub-xt20-ps-kit-speakerphone.webp`, alt: "MAXHUB UC BM45 speakerphone" },
    ],
    tag: "PTZ Teams Rooms Kit",
    heading: "MAXHUB\n XT20-PS Kit",
    highlightLast: 2,
    description: "A certified Microsoft Teams Rooms kit for medium to large rooms that works with Crestron, Extron, Q-SYS and Kramer control systems.",
    keys: [
      { label: "Room PC", value: "XC25T, Core i5-1240P" },
      { label: "Camera", value: "UC P30, 12x optical zoom" },
      { label: "Speakerphone", value: "UC BM45, 8 microphones" },
      { label: "Touch console", value: "TCP30T, 11.6″" },
      { label: "Operating system", value: "Windows 11 IoT Enterprise" },
      { label: "Room displays", value: "Dual display support" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Heard & Seen Across the Table",
    highlightLast: 3,
    subhead: "The kit delivers clear video and audio for larger meeting rooms.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Tracking PTZ Camera",
        description: "Auto framing, speaker tracking, presenter tracking and camera presets keep the right view on screen.",
        highlight: true,
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "8-Mic Speakerphone",
        description: "The UC BM45 picks up voices best within 4m and up to 8m away.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Daisy-Chain Audio",
        description: "Extra UC BM45 speakerphones can be linked as optional add-ons to extend audio coverage.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "4K Wired Sharing",
        description: "Presenters share at up to 4K through the HDMI input on the XC25T.",
      },
      {
        icon: "<path d=\"M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "Cable-Free Sharing",
        description: "Content reaches the room through an optional WT13M or WT13S dongle or the MAXHUB Share app.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Control System Ready",
        description: "Crestron, Extron, Q-SYS and Kramer control systems can be integrated with the kit.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Run From the Table,\n Maintained From the Desk",
    highlightLast: 4,
    paragraphs: ["Teams Rooms runs on the XC25T mini-PC, and people start calls, share content and adjust the room from the TCP30T console. MAXHUB Pivot comes pre-installed, so IT managers can maintain and update the kit remotely."],
    checks: [
      "The UC P30 connects to the mini-PC with a USB-C to USB-A cable.",
      "One network cable carries the console connection back to the mini-PC.",
      "A laptop plugged into the console’s USB-C port shares at 1080p.",
      "Up to two touch consoles can control the room together.",
      "AI noise reduction in the UC BM45 reduces background sound.",
    ],
    image: `${IMG}/maxhub-xt20-ps-kit-in-room.webp`,
    alt: "A team in a meeting, each person framed by AI camera tracking",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "Matched Units\n for Video, Audio & Control",
    highlightLast: 5,
    subhead: "The camera, speakerphone, console and mini-PC each come with their own cables and accessories.",
    columns: 2,
    data: [
      {
        image: `${IMG}/maxhub-xt20-ps-kit-uc-p30-camera.webp`,
        alt: "MAXHUB UC P30 PTZ camera",
        title: "UC P30 Camera",
        description: "Dual lenses and 12x optical zoom let the camera follow speakers and presenters.",
        list: { label: "In its box", items: ["5m USB C-A cable", "Power adapter", "Remote control", "Mounting kits", "Quick start guide"] },
      },
      {
        image: `${IMG}/maxhub-xt20-ps-kit-uc-bm45-speakerphone.webp`,
        alt: "MAXHUB UC BM45 speakerphone",
        title: "UC BM45 Speakerphone",
        description: "Eight microphones and a 5W speaker are housed in a 122mm table unit.",
        list: { label: "In its box", items: ["Table bracket", "Power adapter", "USB-C to USB-A cable", "Ethernet cable"] },
      },
      {
        image: `${IMG}/maxhub-xt20-ps-kit-tcp30t-touch-console.webp`,
        alt: "MAXHUB TCP30T touch console",
        title: "TCP30T Touch Console",
        description: "An 11.6 inch capacitive screen with a PIR sensor wakes as people approach.",
        list: { label: "In its box", items: ["1.8m USB-C cable", "7.5m Ethernet cable"] },
      },
      {
        image: `${IMG}/maxhub-xt20-ps-kit-xc25t-mini-pc.webp`,
        alt: "MAXHUB XC25T mini-PC",
        title: "XC25T Mini-PC",
        description: "Teams Rooms runs on this 1.12kg mini-PC with an Intel Core i5-1240P.",
        list: { label: "In its box", items: ["Wall mount kit", "Two 3m HDMI cables", "Power adapter", "Power cable"] },
      },
    ],
    note: { title: "Optional Add-Ons", text: "A WT13M or WT13S wireless dongle, the TCP30WM wall mount bracket and extra UC BM45 speakerphones for daisy chaining are optional." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Figures for Each Kit Component",
    highlightLast: 3,
    subhead: "Key details for planning camera placement, audio coverage and network points.",
    panes: [
      {
        label: "Kit",
        sub: "All four units",
        note: "These values apply to the XT20-PS Kit as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-PS_Kit_Datasheet_V1.2.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XC25T mini-PC", value: "1" },
                { label: "TCP30T touch console", value: "1" },
                { label: "UC P30 camera", value: "1" },
                { label: "UC BM45 speakerphone", value: "1" },
              ],
            },
            {
              title: "Connections",
              rows: [
                { label: "UC P30 to mini-PC", value: "USB-C to USB-A cable" },
                { label: "UC BM45 to console", value: "USB-C to USB-A cable" },
                { label: "Console to mini-PC", value: "Ethernet cable" },
                { label: "Room displays", value: "HDMI (displays not included)" },
                { label: "Laptop", value: "USB-C to the console (1080p)" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Wireless dongle (content share)", value: "WT13M or WT13S (optional)" },
                { label: "Wall mount bracket", value: "TCP30WM (optional)" },
                { label: "Speakerphone (daisy chain)", value: "UC BM45 (optional)" },
              ],
            },
          ],
          [
            {
              title: "Compliance & Warranty",
              open: true,
              rows: [
                { label: "Certification", value: "Microsoft Teams certified" },
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
              title: "Kit Packaging",
              rows: [
                { label: "Package dimensions (W × H × D)", value: "660 × 360 × 325mm" },
                { label: "Gross weight", value: "10.8kg" },
              ],
            },
          ],
        ],
      },
      {
        label: "UC P30",
        sub: "Camera",
        note: "These values apply to the UC P30 in this kit.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-PS_Kit_Datasheet_V1.2.pdf` },
        columns: [
          [
            {
              title: "PTZ Camera",
              open: true,
              rows: [
                { label: "Image sensor", value: "Sony 4K, 8.42MP" },
                { label: "Optical zoom", value: "12x" },
                { label: "Field of view", value: "90° diagonal, 80° horizontal, 49.2° vertical" },
                { label: "Motorized pan & tilt", value: "Pan ±170°, tilt ±90°" },
              ],
            },
            {
              title: "Video Output",
              rows: [
                { label: "USB 3.0", value: "H.264 / MJPEG up to 2160p at 30fps; YUV up to 1080p at 30fps" },
                { label: "USB 2.0", value: "H.264 / MJPEG up to 1080p at 30fps" },
              ],
            },
            {
              title: "Panoramic Camera",
              rows: [
                { label: "Image sensor", value: "8MP Sony sensor" },
                { label: "Field of view", value: "120° diagonal" },
                { label: "Manual tilt", value: "±10°" },
                { label: "Privacy cover", value: "Electric privacy cover" },
                { label: "Camera LED indicator", value: "Yes" },
              ],
            },
            {
              title: "AI Features",
              rows: [
                { label: "AI features", value: "Auto framing, speaker tracking, presenter tracking, intelligent focus" },
              ],
            },
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "USB 3.0 Type-C (device)", value: "1" },
                { label: "HDMI 1.4 out", value: "1" },
                { label: "RJ45", value: "1 (IP stream, PoE+)" },
                { label: "RS232", value: "1 (VISCA, Pelco-D and Pelco-P protocols)" },
                { label: "Security lock slot", value: "1" },
                { label: "USB 2.0 Type-A (host)", value: "1" },
              ],
            },
            {
              title: "Power",
              rows: [
                { label: "Power supply", value: "DC in 12V, 2A, or PoE+ in (25W maximum)" },
                { label: "Power consumption", value: "22W or less" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "USB C-A cable, 5m", value: "1" },
                { label: "Power adapter", value: "1" },
                { label: "Remote control", value: "1" },
                { label: "Mounting kits", value: "1" },
                { label: "Quick start guide", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "UC BM45",
        sub: "Speakerphone",
        note: "These values apply to the UC BM45 in this kit.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-PS_Kit_Datasheet_V1.2.pdf` },
        columns: [
          [
            {
              title: "Audio",
              open: true,
              rows: [
                { label: "Microphones", value: "8" },
                { label: "Voice pickup range", value: "Best within 4m, up to 8m" },
                { label: "Microphone frequency range", value: "100Hz–10kHz" },
                { label: "Speaker output (maximum)", value: "5W" },
                { label: "Sound pressure level", value: "82dB at 1m" },
                { label: "Speaker bandwidth", value: "100Hz–20kHz" },
                { label: "Processing", value: "AI noise reduction, full duplex, automatic gain control (AGC), acoustic echo cancellation (AEC)" },
              ],
            },
            {
              title: "Connectivity",
              rows: [
                { label: "USB-C", value: "1" },
                { label: "RJ45 (PoE in)", value: "1 (PoE switch, previous UC BM45 in a cascade, or MAXHUB XBoard V7 mic in)" },
                { label: "RJ45 (PoE out)", value: "1 (next UC BM45 in a cascade)" },
                { label: "DC in", value: "54V, 0.925A" },
              ],
            },
          ],
          [
            {
              title: "Ease of Use",
              open: true,
              rows: [
                { label: "Hot keys", value: "Mute / unmute, volume up, volume down, answer" },
                { label: "LED indicator", value: "Yes" },
              ],
            },
            {
              title: "Software & Certification",
              rows: [
                { label: "Compatible software", value: "MAXHUB Align, MAXHUB Pivot" },
                { label: "Certification", value: "Microsoft Teams Rooms certified" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions", value: "122mm diameter × 65mm" },
                { label: "Weight", value: "472g" },
                { label: "Package dimensions", value: "226 × 187 × 91mm" },
                { label: "Package weight", value: "1.2kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Table bracket", value: "1" },
                { label: "Power adapter", value: "1" },
                { label: "USB-C to USB-A cable", value: "1" },
                { label: "Ethernet cable", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "TCP30T",
        sub: "Touch console",
        note: "These values apply to the TCP30T touch console.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-PS_Kit_Datasheet_V1.2.pdf` },
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
      {
        label: "XC25T",
        sub: "Mini-PC",
        note: "These values apply to the XC25T mini-PC.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XT20-PS_Kit_Datasheet_V1.2.pdf` },
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
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XT20-PS Kit",
    highlightLast: 2,
    faqData: [
      {
        question: "What is included in the XT20-PS Kit?",
        answer: "The kit contains the XC25T mini-PC, the TCP30T touch console, the UC P30 camera and the UC BM45 speakerphone, each with its own cables and accessories.",
      },
      {
        question: "Which room sizes is it intended for?",
        answer: "The kit is intended for medium to large meeting rooms.",
      },
      {
        question: "Is the kit certified for Microsoft Teams?",
        answer: "Yes. It is a Microsoft Teams certified solution, and Teams Rooms runs on Windows 11 IoT Enterprise SAC on the mini-PC.",
      },
      {
        question: "How far does the speakerphone pick up voices?",
        answer: "The UC BM45 picks up voices best within 4m, with a maximum range of 8m.",
      },
      {
        question: "Can more speakerphones be added?",
        answer: "Additional UC BM45 units are optional and connect in a cascade through the RJ45 PoE ports.",
      },
      {
        question: "Does the kit work with room control systems?",
        answer: "It integrates with third-party control systems from Crestron, Extron, Q-SYS and Kramer.",
      },
      {
        question: "How can content be shared?",
        answer: "Presenters can share at up to 4K through the mini-PC’s HDMI input or at 1080p from a laptop on the console’s USB-C port. Wireless sharing uses an optional WT13M or WT13S dongle or the MAXHUB Share app.",
      },
      {
        question: "How is the kit kept up to date?",
        answer: "MAXHUB Pivot is pre-installed, so IT managers can maintain and update the kit remotely.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Individual Units\n & Related MAXHUB Kits",
    highlightLast: 4,
    subhead: "Explore the camera and speakerphone in this kit, along with other MAXHUB Teams Rooms kits.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "UC P30", image: `${IMG}/maxhub-uc-p30-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/uc-p30" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: "/store/audio-room-control/maxhub/uc-bm45" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
      { title: "XT20-VB Kit", image: `${IMG}/maxhub-xt20-vb-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-vb-kit" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Fitting Out a Larger Room?\n Request a Detailed Proposal",
    highlightLast: 4,
    text: "Send us the room layout and seating count, and we will prepare a proposal. Our AV team handles installation and programming, and our IT team sets up the network.",
  }),
  footNote: "",
};
