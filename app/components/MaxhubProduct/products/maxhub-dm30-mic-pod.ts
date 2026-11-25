import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_STORE, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-dm30-mic-pod/index.html
export const dm30MicPod: LogitechProductData = {
  slug: "dm30-mic-pod",
  seo: {
    title: "MAXHUB DM30 Mic Pod | GS IT",
    description: "MAXHUB DM30 Mic Pod from GS IT in Dubai. A 360° expansion microphone with eight silicon mics, one-touch mute, PoE over RJ45 and daisy-chaining for up to four pods.",
  },
  name: "MAXHUB DM30 Mic Pod",
  image: `${IMG}/maxhub-dm30-mic-pod-angled-view.webp`,
  heroData: {
    crumbs: mxCrumbs("DM30 Mic Pod"),
    gallery: [
      { src: `${IMG}/maxhub-dm30-mic-pod-angled-view.webp`, alt: "MAXHUB DM30 Mic Pod, a flat black round microphone with a green-lit mute button in the centre" },
      { src: `${IMG}/maxhub-dm30-mic-pod-top-view.webp`, alt: "Top view of the MAXHUB DM30 Mic Pod showing its fabric cover and centre button" },
    ],
    tag: "Expansion Microphone",
    heading: "MAXHUB\n DM30 Mic Pod",
    highlightLast: 3,
    description: "An expansion microphone that extends voice pickup from a MAXHUB XBar to people seated further along a long meeting table.",
    keys: [
      { label: "Microphones", value: "8 silicon mics" },
      { label: "Pickup", value: "360°, 3m optimal radius" },
      { label: "Cascade", value: "Up to 4 units" },
      { label: "Connection", value: "Dual RJ45 with PoE" },
      { label: "Mute", value: "One-touch, with LED" },
      { label: "Size", value: "Ø112.5 × 30.3mm" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Wider Pickup,\n Steady Clarity on Calls",
    highlightLast: 4,
    subhead: "The DM30 brings microphone coverage closer to people who sit away from the main video bar.",
    data: [
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "360° Omnidirectional Pickup",
        description: "Eight silicon microphones capture speech in every direction, with a 3m optimal radius.",
        highlight: true,
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "AI Audio Processing",
        description: "Automatic gain control, echo cancellation and ambient noise reduction run on the device.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 11 4.7M12 17.5V21M4 4l16 16\"/>",
        title: "One-Touch Mute",
        description: "A light touch on the top button turns the microphone on or off.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4\"/>",
        title: "Status Light",
        description: "Green means live, red means muted and white means standby.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14v-3M11 14V8M15 14v-5M3 21h18\"/>",
        title: "IP-Based Management",
        description: "Each pod can be monitored and adjusted on its own through management software.",
      },
      {
        icon: "<ellipse cx=\"12\" cy=\"10\" rx=\"8\" ry=\"3\"/><path d=\"M4 10v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3M3 20h18\"/>",
        title: "Non-Slip Base",
        description: "The non-slip base keeps the pod steady on the table during meetings.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Ready as Soon\n as It Is Plugged In",
    highlightLast: 5,
    paragraphs: ["When the DM30 connects to a MAXHUB XBar, the video bar recognises it automatically and adds its microphones to the room’s pickup. No settings need to be changed before a meeting."],
    checks: [
      "One network cable carries the connection and power through the RJ45 input.",
      "Through the output RJ45 port, the next pod joins the chain.",
      "Status, settings and updates can be handled remotely from one dashboard.",
      "The box includes a 7.5m network cable, a cable grommet and a screw kit.",
      "At 112.5mm across and 265g, the pod is small enough for most tables.",
    ],
    image: `${IMG}/maxhub-dm30-mic-pod-in-room.webp`,
    alt: "Four colleagues working on laptops around a table with a MAXHUB DM30 Mic Pod in the middle",
  },
  focusData: {
    tag: "Daisy-Chain Setup",
    heading: "Scale Up Pod by Pod",
    highlightLast: 3,
    subhead: "Pods link in a line with standard network cables, so coverage can follow the shape of the table.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"2.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"9.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"16.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><path d=\"M7.5 12h2M14.5 12h2\"/>",
        title: "Up to Four Pods",
        description: "A single cascade supports a maximum of four units.",
      },
      {
        icon: "<path d=\"M7 3v5M11 3v5M5 8h8v4a4 4 0 0 1-8 0zM9 16v2a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V6\"/>",
        title: "Standard Ethernet",
        description: "Pods link with regular network cables.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Input & Output Ports",
        description: "Dual RJ45 ports link the previous and next pods.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "MAXHUB XBar Ready",
        description: "The XBar series recognises pods with plug and play.",
      },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Power, Size\n & Package Contents",
    highlightLast: 3,
    subhead: "A light 265g body and simple RJ45 cabling keep the DM30 easy to place along a table.",
    datasheet: { text: "Download Datasheet", href: `${DS}/DM30_Product_Spec-V1_1-20251218.pdf` },
    columns: [
      [
        {
          title: "Microphone",
          open: true,
          rows: [
            { label: "Microphones", value: "8 silicon microphones" },
            { label: "Pickup pattern", value: "360° omnidirectional" },
            { label: "Pickup distance", value: "3m optimal radius" },
            { label: "Frequency range", value: "100Hz–20kHz" },
            { label: "Unit sensitivity", value: "−37dBFS" },
            { label: "Audio processing", value: "AGC, AEC, ambient noise reduction" },
          ],
        },
        {
          title: "Ports & Controls",
          rows: [
            { label: "Ports", value: "Dual RJ45" },
            { label: "RJ45 input", value: "52V, 0.24A" },
            { label: "RJ45 output", value: "52V, 0.18A" },
            { label: "Cascade", value: "Up to 4 units" },
            { label: "Touch button", value: "Mute and unmute" },
            { label: "Indicator", value: "Green: in meeting, mic active. Red: in meeting, mic muted. White: standby" },
            { label: "Compatibility", value: "Plug and play with the MAXHUB XBar series" },
            { label: "Management", value: "Standard IP-based protocol, with control of each device in management software" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          open: true,
          rows: [
            { label: "Dimensions (D × H)", value: "Ø112.5 × 30.3mm" },
            { label: "Net weight", value: "0.265kg" },
            { label: "Gross weight", value: "0.9kg" },
            { label: "Package (L × W × H)", value: "208 × 187 × 114mm" },
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
            { label: "Network cable, 7.5m (24.6ft)", value: "1" },
            { label: "Cable grommet", value: "1" },
            { label: "Screw kit", value: "1" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on DM30 Mic Pod",
    highlightLast: 3,
    faqData: [
      {
        question: "Which MAXHUB products does the DM30 work with?",
        answer: "It is plug-and-play with the MAXHUB XBar series, which recognises the pod automatically.",
      },
      {
        question: "How many DM30 pods can be linked?",
        answer: "Up to four pods can share one cascade, joined with standard network cables.",
      },
      {
        question: "How far does each pod pick up voices?",
        answer: "Each pod covers 360° with an optimal pickup radius of 3m.",
      },
      {
        question: "Does the DM30 need its own power supply?",
        answer: "It draws power over the network cable through the RJ45 input, which is rated at 52V and 0.24A.",
      },
      {
        question: "How do people mute the microphone?",
        answer: "A light touch on the top button mutes or unmutes it, and the light turns red while it is muted.",
      },
      {
        question: "What do the indicator colours mean?",
        answer: "Green shows the microphone is live in a meeting, red shows it is muted, and white shows standby.",
      },
      {
        question: "Can the pods be managed remotely?",
        answer: "Management software can monitor each pod, change its settings and deploy updates over the network.",
      },
      {
        question: "What comes in the box?",
        answer: "Inside are a 7.5m network cable, a cable grommet and a screw kit.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "XBar Kits & More Room Audio",
    highlightLast: 4,
    subhead: "Explore MAXHUB XBar kits and other audio products for meeting rooms.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-w70-kit" },
      { title: "XBar V70 Kit", image: `${IMG}/maxhub-xbar-v70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v70-kit" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: `${MX_STORE}/uc-bm45` },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Planning Coverage?\n We Can Map the Pod Layout",
    highlightLast: 6,
    text: "Send us the table size and seating plan, and we will suggest how many pods to use and where to place them.",
  }),
  footNote: "",
};
