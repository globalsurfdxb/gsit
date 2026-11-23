import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Desk Pro G2 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-desk-series/desk-pro-g2.pdf)
  href: "/assets/datasheets/cisco/desk-pro-g2-ds.pdf",
};

// Generated from vc_desk-pro-g2.html (Cisco pages dev pack)
export const deskProG2: LogitechProductData = {
  slug: "desk-pro-g2",
  seo: {
    title: "Buy Cisco Desk Pro G2 in Dubai | GS IT",
    description:
      "Buy the Cisco Desk Pro G2 in Dubai: 27\" 4K touchscreen with dual-lens camera, 4K monitor mode and 80 W laptop charging.",
    ogTitle: "Cisco Desk Pro G2 in Dubai | GS IT",
    ogDescription:
      "Cisco executive desk device for meetings and everyday work, supplied and supported by GS IT in the UAE.",
  },
  name: "Cisco Desk Pro G2",
  image: `${IMG}/cisco-desk-pro-g2-27-inch-touchscreen.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Desk Pro G2" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-desk-pro-g2-27-inch-touchscreen.webp`,
        alt: "Cisco Desk Pro G2 27-inch touchscreen",
      },
    ],
    tag: "Cisco executive desk device",
    heading: "Cisco Desk\n Pro G2",
    highlightLast: 2,
    description:
      "A 27-inch 4K touchscreen collaboration device for executive desks, focus rooms and huddle spaces of up to five people.",
    pills: ["27\" 4K touchscreen", "Doubles as a 4K monitor"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Desk Series" },
      { label: "Display", value: "27\" 4K touch" },
      { label: "Camera", value: "48 MP main, 14.5 MP 105° wide" },
      { label: "Microphones", value: "8-element array" },
      { label: "Colour", value: "Carbon Black" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "One screen for work and meetings", text: "connect a laptop over USB-C and use it as a 4K monitor" },
      { label: "Charges your laptop", text: "USB-C delivers up to 80 W" },
      { label: "Privacy shutter", text: "a physical camera cover with an LED indicator" },
      { label: "From desk to huddle", text: "the wide lens frames up to five people" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Desk Pro G2\n models and add-ons",
    highlightLast: 3,
    subhead: "The desk stand is included. Add a pen, VESA adapter or wall mount if needed.",
    groups: [
      {
        label: "Models",
        title: "Desk Pro G2 models",
        description: "Both models are Carbon Black.",
        models: [
          {
            name: "Desk Pro G2",
            desc: "With Wi-Fi 6E and Bluetooth",
            points: ["27\" 4K touch", "Desk stand included"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Desk Pro G2, no radio",
            desc: "For sites that restrict wireless",
            points: ["No Wi-Fi or Bluetooth", "Desk stand included"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Add-ons",
        title: "Accessories",
        description: "Optional extras for the Desk Pro G2.",
        models: [
          {
            name: "Active stylus",
            desc: "For whiteboarding and annotation",
            points: ["Optional"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "VESA adapter",
            desc: "For a monitor arm",
            points: ["Optional"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Wall mount kit",
            desc: "For focus rooms",
            points: ["Optional"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "An executive desk,\n meeting-ready",
    highlightLast: 1,
    subhead: "What the Desk Pro G2 brings to a desk or small room.",
    data: [
      {
        icon: vcIcons.display,
        title: "27-inch 4K touch",
        description: "A 4K display with 98% DCI-P3 colour, for meetings and everyday work.",
        highlight: true,
      },
      {
        icon: vcIcons.camera,
        title: "Dual-lens camera",
        description: "A 48 MP main lens and a 105° wide lens, with 2x optical zoom.",
      },
      {
        icon: vcIcons.mic,
        title: "Clear audio",
        description: "An 8-element microphone array and three-channel speakers with dual woofers.",
      },
      {
        icon: vcIcons.plug,
        title: "Laptop dock",
        description: "USB-C monitor mode at 4K60, with up to 80 W charging.",
      },
      {
        icon: vcIcons.cloud,
        title: "Webex, Teams or Zoom",
        description: "Webex, Microsoft Teams Rooms and Zoom Rooms, plus Unified CM 14 or later.",
      },
      {
        icon: vcIcons.wrench,
        title: "Managed from Control Hub",
        description: "Configure, update and monitor the device remotely from Cisco Control Hub.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A desk device\n that replaces a monitor",
    highlightLast: 4,
    paragraphs: [
      "The Desk Pro G2 sits on an executive desk as a 4K monitor and dock, and becomes a video system when a meeting starts. In a focus room or huddle space, its wide lens frames up to five people.",
      "GS IT supplies, sets up and supports the Desk Pro G2. It replaces the first-generation Desk Pro, which Cisco no longer sells.",
    ],
    facts: [
      { value: "27\"", label: "4K touchscreen" },
      { value: "48 MP", label: "main camera", dark: true },
      { value: "80 W", label: "laptop charging" },
      { value: "5", label: "people in frame" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Desk Pro G2\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display",
          rows: [
            { label: "Panel", value: "27\", 3840 × 2160, 350 nits" },
            { label: "Colour", value: "98% DCI-P3, 10-bit" },
            { label: "Touch", value: "Multi-touch with palm rejection, optional stylus" },
          ],
        },
        {
          title: "Camera",
          rows: [
            { label: "Main lens", value: "48 MP, 70° horizontal" },
            { label: "Wide lens", value: "14.5 MP, 105° horizontal" },
            { label: "Zoom", value: "2x optical, 5x digital" },
            { label: "Privacy", value: "Shutter with LED indicator" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Microphones", value: "8-element beamforming array" },
            { label: "Speakers", value: "Left, centre and right channels with dual woofers" },
          ],
        },
      ],
      [
        {
          title: "Connectivity",
          rows: [
            { label: "Video in", value: "HDMI and USB-C, up to 4K60" },
            { label: "Monitor mode", value: "USB-C, 3840 × 2160 at 60 fps" },
            { label: "Laptop charging", value: "Up to 80 W over USB-C" },
            { label: "USB", value: "2 USB-C and 4 USB-A" },
          ],
        },
        {
          title: "Network and wireless",
          rows: [
            { label: "Ethernet", value: "2-port Gigabit switch for a shared PC" },
            { label: "Wi-Fi", value: "Wi-Fi 6E, except no-radio model" },
            { label: "Bluetooth", value: "5.1" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Size without stand", value: "63 × 50 × 8.1 cm" },
            { label: "Weight", value: "11.9 kg" },
            { label: "Mounting", value: "Desk stand included, VESA and wall mount optional" },
            { label: "Warranty", value: "Cisco 1-year limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Desk Pro G2\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Can it replace my monitor?",
        answer: "Yes. Connect a laptop over USB-C and use it as a 4K monitor, with up to 80 W charging.",
      },
      {
        question: "Can it be used for small meetings?",
        answer: "Yes. The wide lens frames up to five people.",
      },
      {
        question: "Does it work with Teams and Zoom?",
        answer: "Yes, as well as Webex.",
      },
      {
        question: "What warranty does it have?",
        answer: "Cisco gives a 1-year limited liability warranty.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We supply, install and configure it, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedVideoDevices("desk-pro-g2"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Desk Pro G2, model sizing and availability.",
  },
  footNote: vcFootNote,
};
