import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB Smart Lectern (SL22MC) _ GS IT/index.html
export const smartLectern: LogitechProductData = {
  slug: "smart-lectern-sl22mc",
  seo: {
    title: "MAXHUB Smart Lectern (SL22MC) | GS IT",
    description: "MAXHUB Smart Lectern SL22MC from GS IT. A mobile lectern with a 21.5″ touch screen, built-in PC, two gooseneck microphones and electric height adjustment.",
  },
  name: "MAXHUB Smart Lectern (SL22MC)",
  image: `${IMG}/maxhub-smart-lectern-front-view.webp`,
  heroData: {
    crumbs: dcsCrumbs("Smart Lectern (SL22MC)"),
    gallery: [
      { src: `${IMG}/maxhub-smart-lectern-front-view.webp`, alt: "Front view of the MAXHUB Smart Lectern with two gooseneck microphones" },
      { src: `${IMG}/maxhub-smart-lectern-angled-view.webp`, alt: "Angled view of the MAXHUB Smart Lectern with its touch screen switched on" },
      { src: `${IMG}/maxhub-smart-lectern-side-view.webp`, alt: "Side view of the MAXHUB Smart Lectern showing its slim column" },
    ],
    tag: "Smart Presentation Lectern",
    heading: "MAXHUB\n Smart Lectern (SL22MC)",
    highlightLast: 3,
    description: "A mobile lectern that lets presenters share, annotate and speak from one place on stage.",
    keys: [
      { label: "Touch screen", value: "21.5″, 1920 × 1080" },
      { label: "Touch", value: "10-point capacitive" },
      { label: "Microphones", value: "2 gooseneck" },
      { label: "Height range", value: "1.0–1.2m, electric" },
      { label: "PC module", value: "OPS72C, Core i5-1240P" },
      { label: "Warranty", value: "3 years" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Write, Share\n & Speak From One Place",
    highlightLast: 5,
    subhead: "Presenters can run a complete session from the lectern with no extra equipment on stage.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Laminated Touch Screen",
        description: "The 21.5″ full HD screen uses full lamination and capacitive touch with palm rejection.",
        highlight: true,
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Wireless Screen Sharing",
        description: "Laptops and mobile devices can share to the lectern, with up to eight connected at once.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Electric Height Control",
        description: "Buttons raise or lower the lectern between 1.0m and 1.2m at 0.9cm per second.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "Gooseneck Microphones",
        description: "Two microphones pick up the presenter at distances of up to 0.3m.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Windows PC Inside",
        description: "An OPS72C module with 16GB of RAM and 256GB of storage runs Windows 10 IoT Enterprise.",
      },
      {
        icon: "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"3.5\"/><circle cx=\"12\" cy=\"7.5\" r=\"1.2\"/>",
        title: "Several Audio Outputs",
        description: "XLR, 6.5mm and 3.5mm outputs connect to a room sound system.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Present & Write\n While Facing the Audience",
    highlightLast: 4,
    paragraphs: ["The SL22MC combines the screen, computer and microphones in a single lectern. Two casters let staff move it between rooms."],
    checks: [
      "Dual-band Wi-Fi connects on 2.4GHz and 5GHz networks.",
      "An HDMI output sends the lectern screen to an LED wall or display.",
      "Two side USB 2.0 ports accept presenter drives and devices.",
      "A gigabit RJ45 port links the lectern to the wired network.",
      "Physical buttons control power, height and microphone mute.",
    ],
    image: `${IMG}/maxhub-smart-lectern-in-room.webp`,
    alt: "A presenter annotating on the MAXHUB Smart Lectern screen in front of a large audience",
  },
  focusData: {
    tag: "Screen Sharing",
    heading: "From Any Device\n to the Main Display",
    highlightLast: 4,
    subhead: "Content can move from a presenter device to the lectern and then onto the main screen.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Device to Lectern",
        description: "Windows, macOS, iOS and Android devices share through the MAXHUB Share app.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "Lectern to Display",
        description: "The lectern screen reaches the main display over HDMI or a wireless connection.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Notes on Shared Content",
        description: "Presenters can annotate a shared device screen while it is relayed to the display.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Quick Switching",
        description: "Up to eight devices stay connected, and the presenter switches between them instantly.",
      },
    ],
    note: { title: "MAXHUB LED Walls", text: "On the same WLAN, a MAXHUB integrated LED wall receives the lectern screen with no extra apps." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Key Values for the SL22MC",
    highlightLast: 3,
    subhead: "Screen, audio, power and size figures for planning the stage layout.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_SL22MC_20240517.pdf` },
    columns: [
      [
        {
          title: "Display",
          open: true,
          rows: [
            { label: "Screen size", value: "21.5″" },
            { label: "Aspect ratio", value: "16:9" },
            { label: "Resolution", value: "1920 × 1080" },
            { label: "Display area (H × V)", value: "476.064 × 267.786mm" },
            { label: "Pixel pitch", value: "0.24795 × 0.24795mm" },
            { label: "Refresh rate", value: "60Hz" },
            { label: "Response time", value: "14ms" },
            { label: "Display colour", value: "16.7M (8-bit)" },
            { label: "NTSC colour gamut", value: "72%" },
            { label: "Contrast ratio", value: "1000:1" },
            { label: "Viewing angle", value: "178° (H / V)" },
            { label: "Backlight", value: "ELED" },
            { label: "Brightness with glass (typical)", value: "450 nits" },
            { label: "Lifetime", value: "30,000 hours or more" },
          ],
        },
        {
          title: "Touch",
          rows: [
            { label: "Sensing type", value: "Capacitive" },
            { label: "Touch tool", value: "Finger, active capacitive pen" },
            { label: "Accuracy", value: "±1.5mm" },
            { label: "Minimum object size", value: "6mm" },
            { label: "Touch points", value: "10" },
            { label: "Palm rejection", value: "Supported" },
          ],
        },
        {
          title: "Microphones",
          rows: [
            { label: "Quantity", value: "2 (gooseneck)" },
            { label: "Pickup distance", value: "0–0.3m" },
          ],
        },
        {
          title: "Wireless",
          rows: [
            { label: "Wi-Fi", value: "802.11 a/b/g/n/ac, 2.4GHz and 5GHz, 0–10m" },
            { label: "Wireless screen share", value: "AP mode, 5GHz" },
          ],
        },
        {
          title: "PC Module",
          rows: [
            { label: "Model", value: "OPS72C" },
            { label: "Operating system", value: "Windows 10 IoT Enterprise" },
            { label: "CPU", value: "Intel Core i5-1240P (1.7GHz)" },
            { label: "RAM + storage", value: "16GB + 256GB" },
            { label: "Wireless module", value: "SI04B" },
          ],
        },
      ],
      [
        {
          title: "Connectivity",
          open: true,
          rows: [
            { label: "HDMI out", value: "1 (base of the column)" },
            { label: "HDMI bridge", value: "1 (top of the column, links the panel and column)" },
            { label: "USB 2.0", value: "3 (2 on the side, 1 hidden for upgrades)" },
            { label: "RJ45", value: "1 (10/100/1000Mbps)" },
            { label: "AC in", value: "1" },
            { label: "DC in", value: "1 (19V / 6.31A)" },
            { label: "Mic in", value: "2 (gooseneck microphones)" },
            { label: "Audio out, 6.5mm", value: "1" },
            { label: "Audio out, 3.5mm", value: "2 (1 on the screen, 1 on the column)" },
            { label: "Audio out, XLR", value: "1" },
            { label: "Audio bridge", value: "1 (3.5mm, links the panel and column)" },
            { label: "Physical buttons", value: "4 (power, up, down, mute)" },
          ],
        },
        {
          title: "Height Adjustment",
          rows: [
            { label: "Lifting", value: "Electric" },
            { label: "Speed", value: "0.9cm/s up and down" },
            { label: "Range", value: "1.0m minimum, 1.2m maximum" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Power requirements", value: "100–240V, 50/60Hz, 2.0A / 19V DC, 6.3A" },
            { label: "Maximum power", value: "120W" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions (L × H × D)", value: "786.3 × 420 × 1010.4mm" },
            { label: "Package dimensions (L × W × H)", value: "898 × 562 × 1148mm" },
            { label: "Wheels", value: "2" },
            { label: "Net weight", value: "29.9kg" },
            { label: "Gross weight", value: "43.0kg" },
          ],
        },
        {
          title: "Environment",
          rows: [
            { label: "Operating temperature", value: "0 to 40 °C" },
            { label: "Operating humidity", value: "10% to 90% RH" },
            { label: "Storage temperature", value: "−20 to 60 °C" },
            { label: "Storage humidity", value: "10% to 90% RH" },
            { label: "Altitude", value: "Below 5000m" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "Power cord", value: "1" },
            { label: "HDMI cable", value: "1" },
            { label: "HDMI bridge cable", value: "1" },
            { label: "Audio bridge cable", value: "1" },
            { label: "Smart pen", value: "1" },
            { label: "Gooseneck microphone", value: "2" },
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
    heading: "Common Questions on Smart Lectern (SL22MC)",
    highlightLast: 3,
    faqData: [
      {
        question: "What computer is built into the SL22MC?",
        answer: "It uses an OPS72C module with an Intel Core i5-1240P, 16GB of RAM and 256GB of storage, running Windows 10 IoT Enterprise.",
      },
      {
        question: "How does the height adjustment work?",
        answer: "Two buttons drive an electric lift that moves the top between 1.0m and 1.2m at 0.9cm per second.",
      },
      {
        question: "Which devices can share to the lectern?",
        answer: "Devices running Windows 7, macOS 10.10, iOS 9.0, Android 5.0 or later can share once the MAXHUB Share app is installed.",
      },
      {
        question: "How many devices can connect at the same time?",
        answer: "Up to eight devices can stay connected, and the presenter can switch between them instantly.",
      },
      {
        question: "Which displays can it connect to?",
        answer: "It works with MAXHUB LED walls and commercial displays, and any display with an HDMI input can take the lectern screen by cable.",
      },
      {
        question: "Can it connect to a room sound system?",
        answer: "Yes. It has XLR, 6.5mm and 3.5mm audio outputs for amplifiers and mixers.",
      },
      {
        question: "Can the lectern be moved between spaces?",
        answer: "Yes. Two casters let it be rolled into position, and it weighs 29.9kg.",
      },
      {
        question: "What warranty applies to the lectern?",
        answer: "The SL22MC carries a 3-year warranty.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Displays for\n Stages & Auditoriums",
    highlightLast: 3,
    subhead: "Explore MAXHUB displays that suit lecture and presentation spaces.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "Raptor Series V3", image: `${IMG}/maxhub-raptor-series-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3" },
      { title: "Raptor Series V3 Lite", image: `${IMG}/maxhub-raptor-series-v3-lite-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3-lite" },
      { title: "UW Series", image: `${IMG}/maxhub-uw-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/uw-series-uw105na" },
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Talk to Our AV Team",
    highlightLast: 3,
    text: "Share the room size and display you plan to use, and our AV team will advise on the lectern setup.",
  }),
  footNote: "",
};
