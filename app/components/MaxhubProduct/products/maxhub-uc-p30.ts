import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB UC P30 _ GS IT/index.html
export const ucP30: LogitechProductData = {
  slug: "uc-p30",
  seo: {
    title: "MAXHUB UC P30 | GS IT",
    description: "MAXHUB UC P30 from GS IT. A 4K dual-lens PTZ camera with 12x optical zoom, a 120° panoramic camera and AI tracking for medium and large meeting rooms.",
  },
  name: "MAXHUB UC P30",
  image: `${IMG}/maxhub-uc-p30-front-view.webp`,
  heroData: {
    crumbs: vcCrumbs("UC P30"),
    gallery: [
      { src: `${IMG}/maxhub-uc-p30-front-view.webp`, alt: "Front view of the MAXHUB UC P30 PTZ camera" },
      { src: `${IMG}/maxhub-uc-p30-angled-view.webp`, alt: "Angled side view of the MAXHUB UC P30 PTZ camera" },
    ],
    tag: "4K PTZ Camera",
    heading: "MAXHUB\n UC P30",
    highlightLast: 2,
    description: "A dual-lens tracking camera that frames, follows and zooms in on participants in medium and large meeting rooms.",
    keys: [
      { label: "PTZ camera", value: "Sony 4K, 8.42MP" },
      { label: "Optical zoom", value: "12x" },
      { label: "Panoramic camera", value: "8MP, 120° diagonal" },
      { label: "Pan & tilt", value: "±170° pan, ±90° tilt" },
      { label: "Video output", value: "Up to 4K at 30fps" },
      { label: "Power", value: "PoE+ or 12V DC" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Wide Coverage,\n Close Detail on Demand",
    highlightLast: 4,
    subhead: "Remote participants get a well-framed view of whoever is speaking, wherever they are seated.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Dual-Lens Design",
        description: "A 120° panoramic camera detects people in real time and directs the PTZ camera to the best view.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "12x Optical Zoom",
        description: "The 8.42MP Sony sensor and 4.8–57.8mm lens keep distant faces sharp.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "AI Tracking Modes",
        description: "Auto framing, speaker tracking, presenter tracking and intelligent focus adjust the shot automatically.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Wide Pan & Tilt",
        description: "Motorized movement covers ±170° of pan and ±90° of tilt.",
      },
      {
        icon: "<path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Privacy When Idle",
        description: "When the camera is not in use, the PTZ lens tilts downward and the electric privacy cover stays closed.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "Presets & Control",
        description: "Up to 10 presets can be stored with the IR remote, and up to 128 through RS232.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Sharp Faces Across the Room",
    highlightLast: 3,
    paragraphs: ["The UC P30 pairs a PTZ camera with an 8MP panoramic camera, so the wide lens finds participants while the PTZ lens frames them. It can be managed remotely in MAXHUB Pivot, set up over USB in MAXHUB Align, or controlled from MAXHUB Teams Rooms products."],
    checks: [
      "Video reaches 4K at 30fps over USB 3.0 and IP.",
      "A security lock slot helps protect the camera in shared spaces.",
      "The housing is made from high-strength aluminium alloy with an anodised finish.",
      "Image flip and mirror settings suit inverted mounting positions.",
      "Pro AV integration covers MAXHUB displays, Extron controls and Shure audio.",
    ],
    image: `${IMG}/maxhub-uc-p30-in-room.webp`,
    alt: "Four colleagues at a table, each framed by the camera’s AI tracking boxes",
  },
  focusData: {
    tag: "Connection Options",
    heading: "Connect by USB,\n HDMI or the Network",
    highlightLast: 4,
    subhead: "The UC P30 connects over USB, HDMI or IP, so it can be used with a PC, a display or an IP video system.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "USB 3.0 Type-C",
        description: "H.264 and MJPEG reach 2160p at 30fps over USB 3.0.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "HDMI 1.4 Output",
        description: "One HDMI 1.4 output provides a wired video feed.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "IP Streaming & PoE+",
        description: "The RJ45 port carries two IP streams and PoE+ power.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "RS232 Control",
        description: "VISCA, Pelco-D and Pelco-P protocols are supported.",
      },
    ],
    note: { title: "Single-Cable Installation", text: "With PoE+, one Cat5e or Cat6 cable supplies power and IP streaming." },
  },
  specsData: {
    tag: "Specifications",
    heading: "In Full Detail\n Lens, Video & Power Values",
    highlightLast: 5,
    subhead: "Key values for planning camera placement, cabling and power at the front of the room.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_UC_P30_Datasheet_V3.0.pdf` },
    columns: [
      [
        {
          title: "PTZ Camera",
          open: true,
          rows: [
            { label: "Image sensor", value: "Sony 4K, 8.42MP" },
            { label: "Aperture", value: "f/1.8" },
            { label: "Lens focal length", value: "4.8–57.8mm" },
            { label: "Lens F-number", value: "f/1.8–3.6" },
            { label: "Optical zoom", value: "12x" },
            { label: "Field of view", value: "90° diagonal, 80° horizontal, 49.2° vertical" },
            { label: "Motorized pan & tilt", value: "Pan ±170°, tilt ±90°" },
            { label: "Image flip & mirror", value: "Supported" },
            { label: "Presets", value: "10 via IR remote, 128 via RS232" },
          ],
        },
        {
          title: "Video Output",
          rows: [
            { label: "USB 3.0", value: "H.264 / MJPEG up to 2160p at 30fps; YUV up to 1080p at 30fps" },
            { label: "USB 2.0", value: "H.264 / MJPEG up to 1080p at 30fps" },
            { label: "IP", value: "H.264 / MJPEG up to 2160p at 30fps (first stream); up to 720p at 30fps (second stream)" },
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
            { label: "USB 2.0 Type-A (host)", value: "1 (local recording to a USB flash drive)" },
            { label: "HDMI 1.4 out", value: "1" },
            { label: "RJ45", value: "1 (IP stream, PoE+)" },
            { label: "RS232", value: "1 (VISCA, Pelco-D and Pelco-P protocols)" },
            { label: "Security lock slot", value: "1" },
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
          title: "Device Management",
          rows: [
            { label: "Remote management", value: "MAXHUB Pivot" },
            { label: "On-site setup", value: "MAXHUB Align over USB" },
            { label: "Room control", value: "MAXHUB Microsoft Teams Rooms products" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions", value: "181 × 151.5 × 178.4mm" },
            { label: "Net weight", value: "2.3kg" },
            { label: "Package dimensions", value: "1 unit: 295 × 245 × 243mm; 4 units: 610 × 510 × 265mm" },
            { label: "Gross weight", value: "1 unit: 3.95kg; 4 units: 16.9kg" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "UC P30", value: "1" },
            { label: "USB C-A cable, 2m", value: "1" },
            { label: "Power adapter", value: "1" },
            { label: "Remote control", value: "1" },
            { label: "Mounting kits", value: "1" },
            { label: "Quick start guide", value: "1" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on UC P30",
    highlightLast: 2,
    faqData: [
      {
        question: "What rooms is the UC P30 designed for?",
        answer: "It is designed for medium and large meeting rooms.",
      },
      {
        question: "How do the two cameras work together?",
        answer: "The 120° panoramic camera detects participants in real time and directs the PTZ camera to frame the best view.",
      },
      {
        question: "How much zoom does it offer?",
        answer: "The PTZ camera has 12x optical zoom with a 4.8–57.8mm lens.",
      },
      {
        question: "Which connections are available?",
        answer: "Video can be sent over USB 3.0 Type-C, HDMI 1.4 or IP through the RJ45 port, and an RS232 port supports VISCA, Pelco-D and Pelco-P control.",
      },
      {
        question: "Can the camera run on PoE?",
        answer: "Yes. It accepts PoE+ up to 25W or a 12V 2A DC supply, and it uses 22W or less.",
      },
      {
        question: "How is privacy handled?",
        answer: "When the camera is not in use, the PTZ camera tilts downward and the electric privacy cover remains closed.",
      },
      {
        question: "Which software manages the camera?",
        answer: "MAXHUB Pivot handles remote management, MAXHUB Align handles on-site setup over USB, and MAXHUB Teams Rooms products offer room control.",
      },
      {
        question: "Can the camera be mounted upside down?",
        answer: "Image flip and mirror settings correct the picture when the camera is mounted upside down.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Complete the Setup",
    highlightLast: 2,
    subhead: "The UC P30 is included in the XT20-PS Kit and is an optional camera for the XCore Kit Pro.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XT20-PS Kit", image: `${IMG}/maxhub-xt20-ps-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xt20-ps-kit" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: "/store/audio-room-control/maxhub/uc-bm45" },
      { title: "CMB Series", image: `${IMG}/maxhub-cmb-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/cmb-series" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Choosing a Camera?\n Talk to Our AV Specialists",
    highlightLast: 5,
    text: "Tell us the room size and where the display is mounted, and our AV team will advise on placement and set up the camera presets.",
  }),
  footNote: "",
};
