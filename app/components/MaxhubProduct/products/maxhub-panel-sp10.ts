import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-panel-sp10/index.html
export const panelSp10: LogitechProductData = {
  slug: "panel-sp10",
  seo: {
    title: "MAXHUB Panel SP10 | GS IT",
    description: "MAXHUB Panel SP10 from GS IT in Dubai. A 10.95-inch room scheduling panel with native Microsoft Teams booking on MDEP, LED status bars, PoE power and four mounting options.",
  },
  name: "MAXHUB Panel SP10",
  image: `${IMG}/maxhub-panel-sp10-available-screen.webp`,
  heroData: {
    crumbs: mxCrumbs("Panel SP10"),
    gallery: [
      { src: `${IMG}/maxhub-panel-sp10-available-screen.webp`, alt: "MAXHUB Panel SP10 showing an Available screen with green LED bars on its side" },
      { src: `${IMG}/maxhub-panel-sp10-front-view.webp`, alt: "Front view of the MAXHUB Panel SP10 with a dark frame and slim bezel" },
      { src: `${IMG}/maxhub-panel-sp10-booking-screen.webp`, alt: "MAXHUB Panel SP10 seen from the other side, showing a booking screen and red LED bar" },
    ],
    tag: "Room Scheduling Display",
    heading: "MAXHUB\n Panel SP10",
    highlightLast: 2,
    description: "A booking screen for outside meeting rooms that shows availability at a glance and lets people reserve a space on the spot.",
    keys: [
      { label: "Screen", value: "10.95″, 1920 × 1200" },
      { label: "Touch", value: "10-point capacitive" },
      { label: "Platform", value: "MDEP, Microsoft Teams" },
      { label: "Power", value: "PoE or 12V DC" },
      { label: "Wireless", value: "Wi-Fi 6, Bluetooth 5.3" },
      { label: "Size", value: "266.6 × 180.8 × 28mm" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Room Status at a Glance",
    highlightLast: 3,
    subhead: "The Panel SP10 helps people find a free meeting room and reserve it without going back to their desk.",
    data: [
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4\"/>",
        title: "LED Status Bars",
        description: "High-visibility LED bars show room occupancy from a distance.",
        highlight: true,
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "One-Tap Booking",
        description: "Ad hoc meetings can be reserved with a single tap, and schedules sync in real time.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Native Teams Experience",
        description: "Native Microsoft Teams scheduling runs on the Microsoft Device Ecosystem Platform.",
      },
      {
        icon: "<rect x=\"7\" y=\"3\" width=\"10\" height=\"18\" rx=\"2\"/><path d=\"M11 18h2\"/>",
        title: "10-Point Touch Screen",
        description: "The 1920 × 1200 screen uses capacitive touch with ±1mm accuracy.",
      },
      {
        icon: "<path d=\"M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4\"/>",
        title: "PoE Power",
        description: "One network cable can power the panel, with a DC input as an alternative.",
      },
      {
        icon: "<path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Enterprise-Grade Security",
        description: "Enterprise-grade security supports data protection and device management.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Clear Room Status\n for Everyone Walking By",
    highlightLast: 4,
    paragraphs: ["Placed beside a meeting room, the Panel SP10 shows whether the space is available. Calendar bookings sync in real time, so the status stays current."],
    checks: [
      "The panel runs Android 15 with MDEP support.",
      "Ports include USB 2.0, USB-C, DC and RJ45.",
      "Its display is rated for at least 30,000 hours.",
      "Brightness reaches a typical 350 nits through the glass.",
      "A 3-year warranty applies to each panel.",
    ],
    image: `${IMG}/maxhub-panel-sp10-in-room.webp`,
    alt: "A glass-walled meeting room with a MAXHUB Panel SP10 on the wall outside and a person working inside",
  },
  focusData: {
    tag: "Mounting Options",
    heading: "Fits Solid Walls,\n Glass & Narrow Door Frames",
    highlightLast: 5,
    subhead: "The panel can be installed in four ways to suit solid walls, glass partitions, slim door frames or recessed boxes.",
    columns: 4,
    data: [
      {
        icon: "<ellipse cx=\"12\" cy=\"10\" rx=\"8\" ry=\"3\"/><path d=\"M4 10v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3M3 20h18\"/>",
        title: "Wall Mount",
        description: "A standard bracket fixes the panel to a solid wall.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "Glass Wall Mount",
        description: "The panel can be fixed to a glass partition.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Mullion Mount",
        description: "Narrow door frames and mullions take a slim mount.",
      },
      {
        icon: "<rect x=\"3\" y=\"8\" width=\"18\" height=\"8\" rx=\"2\"/><path d=\"M7 12h.01M11 12h.01M15 12h.01M7 16v3M17 16v3\"/>",
        title: "Backbox Mount",
        description: "Recessed fitting into a backbox gives a flush finish.",
      },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Screen, Power & Size",
    highlightLast: 2,
    subhead: "Weighing 0.73kg and 28mm deep, the Panel SP10 stays close to the wall once mounted.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_SP10_Panel_Datasheet-V1_2-20260115.pdf` },
    columns: [
      [
        {
          title: "Display",
          open: true,
          rows: [
            { label: "Size", value: "10.95″" },
            { label: "Resolution", value: "1920 × 1200" },
            { label: "Refresh rate", value: "60Hz" },
            { label: "Colour gamut", value: "72% NTSC (typical)" },
            { label: "Backlight", value: "ELED" },
            { label: "Brightness with glass", value: "350 nits (typical)" },
            { label: "Life", value: "≥ 30,000 hours" },
          ],
        },
        {
          title: "Touch",
          rows: [
            { label: "Sensing type", value: "Capacitive" },
            { label: "Touch tool", value: "Finger" },
            { label: "Touch points", value: "10" },
            { label: "Accuracy", value: "±1mm" },
            { label: "Minimum object size", value: "6mm" },
          ],
        },
        {
          title: "System & Connectivity",
          rows: [
            { label: "Operating system", value: "Android 15" },
            { label: "MDEP", value: "Supported" },
            { label: "Wi-Fi", value: "Wi-Fi 6, 802.11ax" },
            { label: "Bluetooth", value: "5.3" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "DC in", value: "12V, 3A" },
            { label: "PoE in", value: "52V, 0.49A" },
          ],
        },
      ],
      [
        {
          title: "Ports",
          open: true,
          rows: [
            { label: "USB 2.0", value: "1" },
            { label: "USB-C", value: "1" },
            { label: "DC 2.0", value: "1" },
            { label: "RJ45", value: "1" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (L × H × D)", value: "266.6 × 180.8 × 28mm" },
            { label: "Net weight", value: "0.73kg" },
            { label: "Package (L × W × H)", value: "368 × 246 × 99mm" },
            { label: "Gross weight", value: "2.36kg" },
          ],
        },
        {
          title: "Environment",
          rows: [
            { label: "Operating temperature", value: "0 to 40°C" },
            { label: "Operating humidity", value: "10% to 90% RH" },
            { label: "Storage temperature", value: "−20 to 60°C" },
            { label: "Storage humidity", value: "10% to 90% RH" },
            { label: "Altitude", value: "Below 5000m" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "Network cable", value: "1" },
            { label: "Wall mount kit", value: "1" },
          ],
        },
        {
          title: "Compliance & Warranty",
          rows: [
            { label: "Warranty", value: "3 years" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on Panel SP10",
    highlightLast: 2,
    faqData: [
      {
        question: "Does the Panel SP10 work with Microsoft Teams?",
        answer: "Yes. It runs on MDEP and offers native Microsoft Teams room scheduling.",
      },
      {
        question: "How do people book a room at the panel?",
        answer: "One tap reserves the room for an ad hoc meeting, and the schedule syncs in real time.",
      },
      {
        question: "How can people tell if a room is free?",
        answer: "LED bars on the panel show room occupancy at a glance.",
      },
      {
        question: "Can the panel run on PoE?",
        answer: "Yes. It can draw PoE through the RJ45 port or use a 12V DC supply. Power adapters are not included.",
      },
      {
        question: "What mounting options are there?",
        answer: "It can be installed on a solid wall, a glass partition, a slim door frame or a backbox.",
      },
      {
        question: "Which wireless standards does it support?",
        answer: "Wi-Fi 6 (802.11ax) and Bluetooth 5.3 are supported.",
      },
      {
        question: "What is the screen resolution?",
        answer: "The 10.95-inch screen shows 1920 × 1200 at 60Hz, with 10-point capacitive touch.",
      },
      {
        question: "What warranty comes with the Panel SP10?",
        answer: "A 3-year warranty applies to the Panel SP10.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "In-Room Control,\n Displays & Video Bars",
    highlightLast: 4,
    subhead: "Inside the room, MAXHUB offers a touch console, an interactive display and video bar kits.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "TCP33T Universal Console", image: `${IMG}/maxhub-tcp33t-universal-console-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/tcp33t-universal-console" },
      { title: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-w70-kit" },
      { title: "XBoard V7 MTR", image: `${IMG}/maxhub-xboard-v7-mtr-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-mtr" },
      { title: "XBar V70 Kit", image: `${IMG}/maxhub-xbar-v70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v70-kit" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Rolling Out Panels?\n We Can Plan Each Floor",
    highlightLast: 5,
    text: "Tell us how many rooms need a panel and how their doors and walls are built, and we will suggest the right mounting for each.",
  }),
  footNote: "",
};
