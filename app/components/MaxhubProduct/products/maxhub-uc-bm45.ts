import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_STORE, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-uc-bm45/index.html
export const ucBm45: LogitechProductData = {
  slug: "uc-bm45",
  seo: {
    title: "MAXHUB UC BM45 | GS IT",
    description: "MAXHUB UC BM45 from GS IT in Dubai. A Microsoft Teams Rooms certified speakerphone with an 8-mic array, PoE cascading for up to six units and USB-C plug-and-play.",
  },
  name: "MAXHUB UC BM45",
  image: `${IMG}/maxhub-uc-bm45-front-view.webp`,
  heroData: {
    crumbs: mxCrumbs("UC BM45"),
    gallery: [
      { src: `${IMG}/maxhub-uc-bm45-front-view.webp`, alt: "Front view of the MAXHUB UC BM45 speakerphone with its grey body and top speaker grille" },
      { src: `${IMG}/maxhub-uc-bm45-angled-top-view.webp`, alt: "MAXHUB UC BM45 seen from above at an angle, showing the hot keys around the grille" },
    ],
    tag: "Meeting Room Speakerphone",
    heading: "MAXHUB\n UC BM45",
    highlightLast: 2,
    description: "A wired speakerphone for meeting rooms that plugs into a room PC or laptop and brings clear two-way audio to the table.",
    keys: [
      { label: "Microphones", value: "8-mic array" },
      { label: "Pickup", value: "4m best, 8m maximum" },
      { label: "Speaker", value: "5W, 100Hz–20kHz" },
      { label: "Connection", value: "USB-C, RJ45 PoE in & out" },
      { label: "Cascading", value: "Up to 6 units" },
      { label: "Certification", value: "Microsoft Teams Rooms" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Clear Speech From Every Seat",
    highlightLast: 3,
    subhead: "The UC BM45 picks up voices around the table clearly, so remote participants can follow the discussion without asking people to repeat themselves.",
    data: [
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "8-Mic Array, 360° Pickup",
        description: "Eight beamforming microphones pick up voices all around the unit, best within 4m and up to 8m.",
        highlight: true,
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "AI Noise Suppression",
        description: "Keyboard clicks and air conditioning hum are reduced so the system focuses on speech.",
      },
      {
        icon: "<path d=\"M4 8h13l-3-3M20 16H7l3 3\"/>",
        title: "Two-Way Conversation",
        description: "People in the room and on the call can speak at the same time without cutting each other off.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v4M12 18v4M2 12h4M18 12h4\"/>",
        title: "Centred Loudspeaker",
        description: "A full-range speaker in the middle of the unit gives each seat a similar sound level.",
      },
      {
        icon: "<path d=\"M5 20V10M5 6V4M12 20v-4M12 12V4M19 20v-8M19 8V4\"/><circle cx=\"5\" cy=\"8\" r=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/><circle cx=\"19\" cy=\"10\" r=\"2\"/>",
        title: "Echo & Gain Control",
        description: "Automatic echo cancellation stops the far end hearing itself, and automatic gain control evens out voice levels.",
      },
      {
        icon: "<path d=\"M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4\"/>",
        title: "Plug-and-Play USB",
        description: "One USB cable connects the unit to a room PC or laptop, with no drivers to install.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Simple Controls\n & Central Device Management",
    highlightLast: 4,
    paragraphs: ["Hot keys on the top ring handle calls, mute and volume, and the unit has an LED indicator. MAXHUB Align and MAXHUB Pivot are supported for setup and remote management."],
    checks: [
      "Five hot keys cover answer, hang up, mute, and volume up and down.",
      "Power comes from a PoE switch or the included 54V adapter.",
      "MAXHUB Pivot supports remote device management.",
      "Super-wideband audio and advanced echo suppression support clear calls.",
      "A 3-year hot swap warranty applies to each unit.",
    ],
    image: `${IMG}/maxhub-uc-bm45-in-room.webp`,
    alt: "A video meeting in a conference room with a MAXHUB UC BM45 on the table and remote participants on the wall display",
    imagePosition: "center 60%",
  },
  focusData: {
    tag: "Expansion & Cabling",
    heading: "Start Small,\n Add Units as Tables Grow",
    highlightLast: 5,
    subhead: "Several UC BM45 units can share one chain, which keeps pickup even along a long meeting table.",
    columns: 4,
    data: [
      {
        icon: "<rect x=\"2.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"9.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><rect x=\"16.5\" y=\"9\" width=\"5\" height=\"6\" rx=\"1.5\"/><path d=\"M7.5 12h2M14.5 12h2\"/>",
        title: "Up to Six Units",
        description: "Units daisy-chain through Cat5e or Cat6a cables.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "PoE In & PoE Out",
        description: "RJ45 PoE out connects the next unit in the chain.",
      },
      {
        icon: "<rect x=\"3\" y=\"8\" width=\"18\" height=\"8\" rx=\"2\"/><path d=\"M7 12h.01M11 12h.01M15 12h.01M7 16v3M17 16v3\"/>",
        title: "PoE Switch Option",
        description: "A PoE switch can power the unit through RJ45 PoE in.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "XBoard V7 Mic In",
        description: "The PoE in port also links to an XBoard V7 Mic In.",
      },
    ],
    note: { title: "USB-C for Laptops & Room PCs", text: "The included 3m USB-C to USB-A cable connects the speakerphone to a room PC or laptop." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Ratings & Box Contents",
    highlightLast: 3,
    subhead: "The UC BM45 measures 122mm across and weighs 472g.",
    datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_UC_BM45_Datasheet_V1_3.pdf` },
    columns: [
      [
        {
          title: "Audio",
          open: true,
          rows: [
            { label: "Microphones", value: "8-mic array" },
            { label: "Voice pickup range", value: "Best 4m (13.1ft), maximum 8m (26.2ft)" },
            { label: "Speaker output power", value: "5W maximum" },
            { label: "Speaker bandwidth", value: "100Hz–20kHz" },
            { label: "AI noise reduction", value: "Yes" },
            { label: "Full-duplex communication", value: "Yes" },
            { label: "Automatic gain control (AGC)", value: "Yes" },
            { label: "Automatic echo cancellation (AEC)", value: "Yes" },
          ],
        },
        {
          title: "Controls",
          rows: [
            { label: "Hot keys", value: "Mute/unmute, volume +, volume −, answer, hang up" },
            { label: "LED indicator", value: "Yes" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions", value: "122mm diameter × 65mm" },
            { label: "Weight", value: "472g" },
            { label: "Package (L × W × H)", value: "226 × 187 × 91mm" },
          ],
        },
      ],
      [
        {
          title: "Connectivity",
          open: true,
          rows: [
            { label: "USB-C", value: "1" },
            { label: "RJ45 (PoE in)", value: "1, for a PoE switch, the previous UC BM45 in a chain, or the Mic In port on a MAXHUB XBoard V7" },
            { label: "RJ45 (PoE out)", value: "1, for the next UC BM45 in a chain" },
            { label: "DC in", value: "54V, 0.925A" },
            { label: "Cascading", value: "Up to 6 units over Cat5e or Cat6a cables" },
          ],
        },
        {
          title: "Software",
          rows: [
            { label: "Compatible software", value: "MAXHUB Align, MAXHUB Pivot" },
          ],
        },
        {
          title: "Package Content",
          rows: [
            { label: "UC BM45 unit", value: "1" },
            { label: "Table bracket", value: "1" },
            { label: "Power adapter", value: "1" },
            { label: "USB-C to USB-A cable, 3m", value: "1" },
            { label: "Ethernet cable, 3m", value: "1" },
          ],
        },
        {
          title: "Compliance & Warranty",
          rows: [
            { label: "Room certification", value: "Microsoft Teams Rooms certified" },
            { label: "Warranty", value: "3-year hot swap" },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on UC BM45",
    highlightLast: 2,
    faqData: [
      {
        question: "How many UC BM45 units can be linked?",
        answer: "Up to six units can be daisy-chained with Cat5e or Cat6a cables, from the PoE out port on one unit to the PoE in port on the next.",
      },
      {
        question: "Is the UC BM45 certified for Microsoft Teams Rooms?",
        answer: "Yes, it is a certified Microsoft Teams Rooms device.",
      },
      {
        question: "How does it connect to a room PC or laptop?",
        answer: "A single USB-C to USB-A cable handles the connection, and no driver installation is needed.",
      },
      {
        question: "Can it connect to a MAXHUB XBoard V7?",
        answer: "The RJ45 PoE in port connects to the Mic In port on a MAXHUB XBoard V7.",
      },
      {
        question: "What is the voice pickup range?",
        answer: "Voices are picked up best within 4m, and the range extends to 8m.",
      },
      {
        question: "What are the power options?",
        answer: "A PoE switch can supply power through the RJ45 PoE in port, or the included power adapter can be used.",
      },
      {
        question: "Which management software does it support?",
        answer: "MAXHUB Align and MAXHUB Pivot are both supported, and Pivot allows remote device management.",
      },
      {
        question: "What warranty does the UC BM45 carry?",
        answer: "The UC BM45 comes with a 3-year hot swap warranty.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Displays & Audio\n for Meeting Spaces",
    highlightLast: 3,
    subhead: "The XBoard V7 MTR can connect UC BM45 units through its Mic In port.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBoard V7 MTR", image: `${IMG}/maxhub-xboard-v7-mtr-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-mtr" },
      { title: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-series" },
      { title: "UC BM35", image: `${IMG}/maxhub-uc-bm35-thumb.webp`, href: `${MX_STORE}/uc-bm35` },
      { title: "DM30 Mic Pod", image: `${IMG}/maxhub-dm30-mic-pod-thumb.webp`, href: `${MX_STORE}/dm30-mic-pod` },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Need Audio for a Room?\n Let’s Plan the Setup Together",
    highlightLast: 5,
    text: "Share your room layout and seating, and we will work out how many units the space needs and how to cable them.",
  }),
  footNote: "",
};
