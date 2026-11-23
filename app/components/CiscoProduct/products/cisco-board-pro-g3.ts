import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { VC_IMG as IMG, vcIcons, relatedVideoDevices, vcFootNote } from "./video-conferencing-shared";

const DATASHEET = {
  text: "Cisco Board Pro G3 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/webex-board/board-pro-g3-ds.pdf)
  href: "/assets/datasheets/cisco/board-pro-g3-ds.pdf",
};

// Generated from vc_board-pro-g3.html (Cisco pages dev pack)
export const boardProG3: LogitechProductData = {
  slug: "board-pro-g3",
  seo: {
    title: "Buy Cisco Board Pro G3 in Dubai | GS IT",
    description:
      "Buy the Cisco Board Pro G3 in Dubai: 55\" or 75\" 4K touch board with dual 48 MP cameras, two active pens and whiteboarding.",
    ogTitle: "Cisco Board Pro G3 in Dubai | GS IT",
    ogDescription:
      "All-in-one Cisco collaboration board for meetings and whiteboarding, installed and supported by GS IT.",
  },
  name: "Cisco Board Pro G3",
  image: `${IMG}/cisco-board-pro-g3-55-on-a-floor-stand.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Video Conferencing" },
      { label: "Cisco", href: "/cisco-video-conferencing" },
      { label: "Board Pro G3" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-board-pro-g3-55-on-a-floor-stand.webp`,
        alt: "Cisco Board Pro G3 55 on a floor stand",
      },
    ],
    tag: "Cisco all-in-one collaboration board",
    heading: "Cisco Board\n Pro G3",
    highlightLast: 2,
    description:
      "An all-in-one 4K touch board with dual 48 MP cameras, two active pens and digital whiteboarding, in 55 and 75-inch sizes.",
    pills: ["55\" or 75\" 4K touch", "Two active pens"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Board Series" },
      { label: "Display", value: "55\" or 75\" 4K touch" },
      { label: "Cameras", value: "Dual 48 MP, 112° wide, 70° main" },
      { label: "Microphones", value: "14-element array" },
      { label: "Wireless", value: "Wi-Fi 6E, Bluetooth 5.2" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Meet and whiteboard", text: "video meetings and a shared whiteboard on one screen" },
      { label: "Two people can draw", text: "two active pens work at the same time" },
      { label: "Frames the whole room", text: "optimal framing up to 7 m from the board" },
      { label: "Mount it your way", text: "wall mount, wall stand, floor stand or wheels" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Board Pro G3\n sizes and mounting",
    highlightLast: 3,
    subhead: "Choose a size for the room, then a mounting option.",
    groups: [
      {
        label: "Sizes",
        title: "Board Pro G3 sizes",
        description: "Both sizes share the same cameras, audio and features.",
        models: [
          {
            name: "Board Pro 55 G3",
            desc: "For small and medium rooms",
            points: ["55\" 4K touch", "40.5 kg, board only"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Board Pro 75 G3",
            desc: "For medium and large rooms",
            points: ["75\" 4K touch", "64.5 kg, board only"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
      {
        label: "Mounting",
        title: "Mounting options",
        description: "The wall mount is included unless you choose a stand.",
        models: [
          {
            name: "Wall mount",
            desc: "Included by default",
            points: ["Fixed to a solid wall"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Wall stand",
            desc: "Rests on the floor, fixed to the wall",
            points: ["For walls that cannot take the full weight"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Floor stand",
            desc: "Free-standing",
            points: ["Add the wheel kit to move it between rooms"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "One board for\n meetings and ideas",
    highlightLast: 3,
    subhead: "What the Board Pro G3 brings to a team space.",
    data: [
      {
        icon: vcIcons.pen,
        title: "Digital whiteboarding",
        description: "Webex Whiteboard or Microsoft Whiteboard, with Miro and Mural apps.",
        highlight: true,
      },
      {
        icon: vcIcons.camera,
        title: "Dual 48 MP cameras",
        description: "A 112° wide lens and a 70° main lens, with framing up to 7 m.",
      },
      {
        icon: vcIcons.mic,
        title: "14-element microphones",
        description: "Optimised for people within 4 m, with up to 8 IP microphones for more.",
      },
      {
        icon: vcIcons.share,
        title: "Content sharing",
        description: "HDMI and USB-C inputs, plus video over IP and RTSP streams.",
      },
      {
        icon: vcIcons.cloud,
        title: "Webex, Teams or Zoom",
        description: "Run Cisco RoomOS for native Webex, with Teams, Zoom and Google Meet interop, or run Microsoft Teams Rooms.",
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
    heading: "A meeting room\n on one wall",
    highlightLast: 3,
    paragraphs: [
      "The Board Pro G3 combines a 4K touchscreen, cameras, microphones and speakers in one unit, so a team space needs nothing else to hold video meetings and whiteboard sessions.",
      "GS IT checks the wall or floor, installs the board and supports it after go-live.",
    ],
    facts: [
      { value: "4K", label: "touch display" },
      { value: "2 × 48 MP", label: "cameras", dark: true },
      { value: "14", label: "microphone elements" },
      { value: "2", label: "active pens" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Board Pro G3\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Display",
          rows: [
            { label: "Sizes", value: "55\" or 75\", 3840 × 2160" },
            { label: "Touch", value: "10 fingers plus 2 styluses, palm rejection" },
            { label: "Pens", value: "2 active pens" },
          ],
        },
        {
          title: "Cameras",
          rows: [
            { label: "Sensors", value: "Two 48 MP" },
            { label: "Main lens", value: "70° horizontal, autofocus" },
            { label: "Wide lens", value: "112° horizontal" },
            { label: "Zoom", value: "5x digital" },
            { label: "Framing", value: "Up to 7 m from the board" },
          ],
        },
        {
          title: "Audio",
          rows: [
            { label: "Microphones", value: "14-element array, for people within 4 m" },
            { label: "External", value: "2 analog inputs, up to 8 Cisco IP microphones, AES67" },
            { label: "Speakers", value: "Multi-channel, 94 dB SPL max" },
          ],
        },
      ],
      [
        {
          title: "Inputs and outputs",
          rows: [
            { label: "Video in", value: "HDMI up to 4K30, USB-C up to 4K60" },
            { label: "Video out", value: "1 HDMI up to 4K60" },
          ],
        },
        {
          title: "Network and wireless",
          rows: [
            { label: "Ethernet", value: "1 Gigabit LAN, 1 PoE port for the Room Navigator, 1 port for an external camera" },
            { label: "Wireless", value: "Wi-Fi 6E and Bluetooth 5.2, except no-radio models" },
          ],
        },
        {
          title: "Platforms and weight",
          rows: [
            { label: "Platforms", value: "Webex, Microsoft Teams Rooms, Zoom, Unified CM 15 SU5 or later" },
            { label: "Board weight", value: "40.5 kg (55\"), 64.5 kg (75\")" },
            { label: "Warranty", value: "Cisco 1-year limited liability warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Board Pro G3\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "55-inch or 75-inch?",
        answer: "The 55-inch suits small and medium rooms. The 75-inch suits medium and large rooms.",
      },
      {
        question: "Can two people write at once?",
        answer: "Yes. It comes with two active pens.",
      },
      {
        question: "Which whiteboard apps does it support?",
        answer: "Webex Whiteboard, Microsoft Whiteboard, plus Miro and Mural.",
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
  relatedData: relatedVideoDevices("board-pro-g3"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT collaboration specialist will contact you about the Board Pro G3, model sizing and availability.",
  },
  footNote: vcFootNote,
};
