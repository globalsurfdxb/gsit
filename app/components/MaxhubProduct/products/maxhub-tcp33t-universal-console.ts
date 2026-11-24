import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB TCP33T Universal Console _ GS IT/index.html
export const tcp33tUniversalConsole: LogitechProductData = {
  slug: "tcp33t-universal-console",
  seo: {
    title: "MAXHUB TCP33T Universal Console | GS IT",
    description: "MAXHUB TCP33T Universal Console from GS IT. An 11.6 inch Microsoft Teams Rooms touch console for Surface Hub and MAXHUB XBoard V7 Teams Room, with USB-C sharing and PoE.",
  },
  name: "MAXHUB TCP33T Universal Console",
  image: `${IMG}/maxhub-tcp33t-universal-console-console.webp`,
  heroData: {
    crumbs: vcCrumbs("TCP33T Universal Console"),
    gallery: [
      { src: `${IMG}/maxhub-tcp33t-universal-console-console.webp`, alt: "MAXHUB TCP33T Universal Console on its stand" },
      { src: `${IMG}/maxhub-tcp33t-universal-console-meeting-controls.webp`, alt: "MAXHUB TCP33T Universal Console with icons for joining meetings, camera and microphone mute, and admitting participants" },
    ],
    tag: "Universal Touch Console",
    heading: "MAXHUB\n TCP33T Universal Console",
    highlightLast: 3,
    description: "A touch console that brings Teams Rooms meeting controls to the table or the wall.",
    keys: [
      { label: "Display", value: "11.6″, 1920 × 1080" },
      { label: "Touch", value: "Capacitive, anti-glare" },
      { label: "Content sharing", value: "USB-C" },
      { label: "Power", value: "PoE" },
      { label: "Sensor", value: "PIR motion wake-up" },
      { label: "Weight", value: "1.16kg" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Easy to Use,\n Simple to Install & Power",
    highlightLast: 5,
    subhead: "People can join and run Teams meetings from their seat with a few taps.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "11.6-Inch Touch Screen",
        description: "A 1920 × 1080 capacitive display with anti-glare, anti-fingerprint glass stays easy to read and keep clean.",
        highlight: true,
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "One-Cable XBoard Link",
        description: "A single RJ45 cable connects the console to an XBoard V7 Teams Room.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "USB-C Content Sharing",
        description: "Laptops connect over USB-C to share content on the room screen.",
      },
      {
        icon: "<path d=\"M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z\"/>",
        title: "Motion Wake-Up",
        description: "Its PIR sensor wakes the console when someone approaches.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "PoE Power",
        description: "Power and data run over standard PoE through the included PoE adapter.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "In-Meeting Controls",
        description: "Joining, inviting participants, muting, camera and volume control are all handled on screen.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A Certified Console\n for Flexible Room Setups",
    highlightLast: 4,
    paragraphs: ["The TCP33T works with Surface Hub and the MAXHUB XBoard V7 Teams Room. It connects to the XBoard with a single RJ45 cable, and to a Surface Hub through the included PoE adapter and an interface converter."],
    checks: [
      "The console is certified for Microsoft Teams Rooms.",
      "The display is rated for 20,000 hours or more of use.",
      "Screen brightness reaches up to 300 nits through the glass.",
      "A Kensington slot allows the console to be secured with a lock.",
      "Operating conditions cover 0 to 40 °C and 10% to 90% humidity.",
    ],
    image: `${IMG}/maxhub-tcp33t-universal-console-in-room.webp`,
    alt: "Colleagues in a Teams meeting with the TCP33T console on the table",
  },
  focusData: {
    tag: "Room Setup",
    heading: "Works With XBoard & Surface Hub",
    highlightLast: 4,
    subhead: "The cabling depends on which Teams Rooms system the console is paired with.",
    columns: 4,
    data: [
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "XBoard V7 Teams Room",
        description: "No adapter or converter is needed between the console and the board.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Surface Hub",
        description: "The included PoE adapter and UD20A interface converter complete the link.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Display Sleep & Wake",
        description: "Room displays sleep and wake with the HDMI video signal to save energy.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "Included Converter",
        description: "The UD20A interface converter for Surface Hub comes in the box.",
      },
    ],
    note: { title: "In the Box", text: "Two 7.5m Ethernet cables, a 1.8m USB-C cable, a PoE adapter, a UD20A interface converter, three power cords, a screwdriver and a quick start guide are included." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Full Console Details",
    highlightLast: 1,
    subhead: "Physical, power and port details for planning table or wall placement.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_Universal_Console_TCP33T_Datasheet_V1.1_20250728.pdf` },
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
            { label: "Lifespan", value: "20,000 hours or more" },
          ],
        },
        {
          title: "Touch System",
          rows: [
            { label: "Type", value: "Capacitive touch" },
            { label: "Surface treatment", value: "Anti-fingerprint, anti-glare" },
          ],
        },
        {
          title: "Sensors",
          rows: [
            { label: "Motion sensor", value: "PIR sensor for automatic wake-up" },
            { label: "Ultrasound emitter", value: "Supported" },
          ],
        },
        {
          title: "Compatibility",
          rows: [
            { label: "MAXHUB XBoard V7 Teams Room", value: "Direct RJ45 connection" },
            { label: "Surface Hub Teams Room", value: "Through the PoE adapter and interface converter" },
          ],
        },
      ],
      [
        {
          title: "Ports",
          open: true,
          rows: [
            { label: "USB-C", value: "1 (content sharing)" },
            { label: "RJ45", value: "1 (PoE adapter or MAXHUB XBoard V7 Teams Room)" },
            { label: "Kensington slot", value: "1" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions", value: "278 × 164 × 82mm" },
            { label: "Weight", value: "1.16kg" },
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
          title: "Compliance & Warranty",
          rows: [
            { label: "Certification", value: "Microsoft Teams Rooms certified" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "Ethernet cable, 7.5m", value: "2" },
            { label: "Type-C cable, 1.8m", value: "1" },
            { label: "PoE adapter", value: "1" },
            { label: "UD20A interface converter", value: "1" },
            { label: "Power cord", value: "3" },
            { label: "Quick start guide", value: "1" },
            { label: "Screwdriver", value: "1" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on TCP33T Universal Console",
    highlightLast: 3,
    faqData: [
      {
        question: "Which systems does the TCP33T work with?",
        answer: "It works with Surface Hub Teams Rooms and the MAXHUB XBoard V7 Teams Room.",
      },
      {
        question: "How does it connect to an XBoard?",
        answer: "One RJ45 cable runs directly between the console and the board.",
      },
      {
        question: "How is it connected to a Surface Hub?",
        answer: "It links through the included PoE adapter and UD20A interface converter.",
      },
      {
        question: "Can laptops share content through it?",
        answer: "Yes. A laptop connected to the USB-C port can share its screen in the meeting.",
      },
      {
        question: "Does it need a separate power supply?",
        answer: "It is powered over PoE, and a PoE adapter is included in the box.",
      },
      {
        question: "Can the console be wall mounted?",
        answer: "Yes. It can be placed on a table or mounted on a wall.",
      },
      {
        question: "How does the console wake up?",
        answer: "A PIR motion sensor wakes it automatically when someone approaches.",
      },
      {
        question: "What is included with the console?",
        answer: "The package holds two 7.5m Ethernet cables, a 1.8m USB-C cable, a PoE adapter, a UD20A interface converter, three power cords, a screwdriver and a quick start guide.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Pairs & Alternatives\n Across the MAXHUB Range",
    highlightLast: 4,
    subhead: "Explore other MAXHUB products for Microsoft Teams Rooms.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBoard V7 MTR", image: `${IMG}/maxhub-xboard-v7-mtr-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-mtr" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
      { title: "XT20-PS Kit", image: `${IMG}/maxhub-xt20-ps-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-ps-kit" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: "/store/audio-room-control/maxhub/uc-bm45" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Get in Touch With GS IT",
    highlightLast: 3,
    text: "Tell us which room system you use and how many consoles you need, and we will put together a proposal.",
  }),
  footNote: "",
};
