import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB UW Series (UW105NA) _ GS IT/index.html
export const uwSeries: LogitechProductData = {
  slug: "uw-series-uw105na",
  seo: {
    title: "MAXHUB UW Series (UW105NA) | GS IT",
    description: "MAXHUB UW Series UW105NA from GS IT. A 105″ 21:9 commercial display with 5K resolution, an Android 13 internal player, an OPS slot and MAXHUB Share.",
  },
  name: "MAXHUB UW Series (UW105NA)",
  image: `${IMG}/maxhub-uw-series-front-view.webp`,
  heroData: {
    crumbs: dcsCrumbs("UW Series (UW105NA)"),
    gallery: [
      { src: `${IMG}/maxhub-uw-series-front-view.webp`, alt: "Front view of the MAXHUB UW105NA ultra-wide display" },
      { src: `${IMG}/maxhub-uw-series-wider-screen.webp`, alt: "The UW105NA showing a sketch and a finished building side by side, with a 33% wider screen area marked" },
      { src: `${IMG}/maxhub-uw-series-5k-comparison.webp`, alt: "Comparison of a 5K display and a normal display showing the same image" },
    ],
    tag: "Ultra-Wide Commercial Display",
    heading: "MAXHUB\n UW Series (UW105NA)",
    highlightLast: 3,
    description: "An ultra-wide commercial display that gives meeting rooms and public spaces more room for content and video calls.",
    keys: [
      { label: "Screen", value: "105″, 21:9" },
      { label: "Resolution", value: "5120 × 2160 (5K)" },
      { label: "Brightness", value: "400 nits, 25% haze" },
      { label: "Processor", value: "A76 × 4 + A55 × 4" },
      { label: "Operating system", value: "Android 13" },
      { label: "Speakers", value: "2 × 16W + 15W" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Wider Picture,\n Simple Sharing & Control",
    highlightLast: 4,
    subhead: "Teams can see shared content and remote participants together on one wide screen.",
    data: [
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "5K Ultra-Wide Screen",
        description: "A 5120 × 2160 VA panel in a 21:9 format shows more content without splitting the picture.",
        highlight: true,
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Anti-Glare Finish",
        description: "Its 25% haze surface and 4000:1 contrast keep the picture readable in bright rooms.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Wireless Sharing",
        description: "MAXHUB Share lets up to nine devices share content at the same time.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "DisplayPort & HDMI 2.1",
        description: "DisplayPort and HDMI 2.1 inputs accept 5120 × 2160 at 60Hz from a PC.",
      },
      {
        icon: "<path d=\"M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z\"/>",
        title: "Motion Sensor",
        description: "The display powers on when people are detected and powers off when the room is empty.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Built-In Speakers",
        description: "Two 16W speakers and a 15W speaker provide sound for presentations and calls.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "One Screen\n for Meetings & Signage",
    highlightLast: 4,
    paragraphs: ["The UW105NA has an internal player with an octa-core processor, 8GB of memory and 64GB of storage running Android 13. Its OPS slot accepts an optional OPS62A or OPS72A module to add a Windows computer."],
    checks: [
      "Microsoft Teams Rooms Signature certification applies to the display.",
      "Crestron, Q-SYS and Extron systems can control it over RS232 or IP.",
      "MAXHUB Pivot handles remote device management from the cloud.",
      "A USB-C port with 100W power delivery connects and charges a laptop.",
      "Conformal coating protects the internal electronics.",
    ],
    image: `${IMG}/maxhub-uw-series-in-room.webp`,
    alt: "A team in a Teams meeting in front of the MAXHUB UW105NA ultra-wide display",
  },
  focusData: {
    tag: "Connectivity",
    heading: "Wide Range of Inputs",
    highlightLast: 2,
    subhead: "The display connects to PCs, media players, network systems and audio equipment through a wide set of ports.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "Four Video Inputs",
        description: "Three HDMI 2.0 ports and one HDMI 2.1 port are included.",
      },
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "USB Connections",
        description: "Four USB-A 3.0 ports and one USB-A 2.0 port are fitted.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Network & Control",
        description: "RJ45 in, RJ45 out, RS232 and an IR receiver are provided.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Audio Outputs",
        description: "SPDIF optical and 3.5mm audio outputs are available.",
      },
    ],
    note: { title: "Removable Wi-Fi Module", text: "The included Wi-Fi 6 module supports 2.4GHz and 5GHz networks." },
  },
  specsData: {
    tag: "Specifications",
    heading: "The UW105NA in Detail",
    highlightLast: 2,
    subhead: "Physical, power and connection details for planning a 2.5m-wide installation.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_Commercial_Display_UW105NA_Datasheet_V2.3_20240731.pdf` },
    columns: [
      [
        {
          title: "Display",
          open: true,
          rows: [
            { label: "Screen size", value: "105″ (266.7cm)" },
            { label: "Panel type", value: "VA" },
            { label: "NTSC colour gamut", value: "90%" },
            { label: "Haze", value: "25% (anti-glare)" },
            { label: "Aspect ratio", value: "21:9" },
            { label: "Native resolution", value: "5120 × 2160" },
            { label: "Refresh rate", value: "60Hz" },
            { label: "Brightness (typical)", value: "400 nits" },
            { label: "Backlight", value: "Direct lit" },
            { label: "Contrast ratio", value: "4000:1" },
            { label: "Viewing angle", value: "178° (H / V)" },
            { label: "Response time", value: "6.5ms" },
            { label: "Lifetime", value: "50,000 hours or more" },
            { label: "Operation hours", value: "16 hours a day, 7 days a week" },
          ],
        },
        {
          title: "Internal Player",
          rows: [
            { label: "Processor", value: "A76 × 4 + A55 × 4" },
            { label: "Graphics", value: "Mali-G610 MP4" },
            { label: "Memory", value: "8GB" },
            { label: "Storage", value: "64GB" },
            { label: "Operating system", value: "Android 13.0" },
            { label: "UI resolution", value: "5K" },
          ],
        },
        {
          title: "Features",
          rows: [
            { label: "Built-in media player", value: "Yes" },
            { label: "Device management", value: "MAXHUB Pivot" },
            { label: "Screen share", value: "MAXHUB Share" },
          ],
        },
        {
          title: "Sensors & Sound",
          rows: [
            { label: "Motion sensor", value: "Yes" },
            { label: "Light sensor", value: "Yes" },
            { label: "Speaker power", value: "2 × 16W + 15W" },
          ],
        },
      ],
      [
        {
          title: "Connectivity",
          open: true,
          rows: [
            { label: "HDMI 2.0 in", value: "3 (up to 3840 × 2160 at 60Hz)" },
            { label: "HDMI 2.1 in", value: "1 (up to 5120 × 2160 at 60Hz)" },
            { label: "DisplayPort in", value: "1 (up to 5120 × 2160 at 60Hz)" },
            { label: "USB Type-C", value: "1 (100W power delivery)" },
            { label: "USB-A 3.0", value: "4" },
            { label: "USB-A 2.0", value: "1" },
            { label: "RJ45 in", value: "1" },
            { label: "HDMI 2.0 out", value: "1" },
            { label: "SPDIF", value: "1 (optical)" },
            { label: "Audio out", value: "1 (3.5mm jack)" },
            { label: "RJ45 out", value: "1" },
            { label: "External control", value: "RS232 × 1, IR receiver" },
            { label: "Wi-Fi", value: "Removable Wi-Fi 6 module, 2.4GHz and 5GHz, 802.11 a/b/g/n/ac/ax" },
            { label: "OPS slot", value: "Yes" },
          ],
        },
        {
          title: "Mechanical",
          rows: [
            { label: "Dimensions (W × H × D)", value: "2511 × 1124 × 97mm" },
            { label: "Package dimensions (W × H × D)", value: "2668 × 1305 × 280mm" },
            { label: "Net weight", value: "89.4kg" },
            { label: "Gross weight", value: "119.5kg" },
            { label: "VESA", value: "1000 × 400mm" },
            { label: "Handles", value: "Yes" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Power supply", value: "100–240V, 50/60Hz" },
            { label: "Typical", value: "550W" },
            { label: "Maximum", value: "665W" },
          ],
        },
        {
          title: "Environment",
          rows: [
            { label: "Operating temperature", value: "0 to 40 °C" },
            { label: "Operating humidity", value: "10% to 90% RH" },
            { label: "Storage temperature", value: "−20 to 60 °C" },
            { label: "Storage humidity", value: "10% to 90% RH" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "Power cord", value: "1" },
            { label: "Wi-Fi module", value: "1" },
            { label: "HDMI cable, 2m", value: "1" },
            { label: "Remote control", value: "1" },
            { label: "Wall mount", value: "1" },
            { label: "USB-C cable, 1.8m", value: "1" },
          ],
        },
        {
          title: "Optional Accessories",
          rows: [
            { label: "OPS module", value: "OPS62A or OPS72A (optional)" },
          ],
        },
        {
          title: "Compliance & Warranty",
          rows: [
            { label: "Safety", value: "IEC 62368-1" },
            { label: "EMC", value: "Class B" },
            { label: "ErP", value: "Yes" },
            { label: "Energy Star", value: "Yes" },
            { label: "Warranty", value: "3 years (display)" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on UW Series (UW105NA)",
    highlightLast: 3,
    faqData: [
      {
        question: "What resolution does the UW105NA offer?",
        answer: "It has a native resolution of 5120 × 2160 in a 21:9 ultra-wide format.",
      },
      {
        question: "Can it run Windows?",
        answer: "Yes, with an optional OPS62A or OPS72A module fitted in the OPS slot.",
      },
      {
        question: "Is it suitable for Microsoft Teams Rooms?",
        answer: "The display holds Microsoft Teams Rooms Signature certification.",
      },
      {
        question: "How many devices can share at once?",
        answer: "MAXHUB Share allows up to nine devices to share content at the same time.",
      },
      {
        question: "Which inputs support full 5K?",
        answer: "HDMI 2.1 and DisplayPort accept 5120 × 2160 at 60Hz. The three HDMI 2.0 inputs support up to 3840 × 2160 at 60Hz.",
      },
      {
        question: "How many hours a day can it run?",
        answer: "It is rated for 16 hours a day, 7 days a week.",
      },
      {
        question: "How large and heavy is the display?",
        answer: "It measures 2511 × 1124 × 97mm and weighs 89.4kg, with a 1000 × 400mm VESA pattern and built-in handles.",
      },
      {
        question: "What is included in the box?",
        answer: "The package contains a power cord, a Wi-Fi module, a 2m HDMI cable, a remote control, a wall mount and a 1.8m USB-C cable.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Other Large Displays & Kits",
    highlightLast: 3,
    subhead: "Explore other MAXHUB displays and room solutions.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
      { title: "Raptor Series V3 Lite", image: `${IMG}/maxhub-raptor-series-v3-lite-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3-lite" },
      { title: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-w70-kit" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Your Wide Display",
    highlightLast: 2,
    text: "Send us the wall size and seating layout, and our AV team will check the fit and plan the installation.",
  }),
  footNote: "",
};
