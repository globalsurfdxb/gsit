import { portfolioData } from "@/app/components/common/data";
import type { FirewallCatalogueData } from "@/app/components/CiscoFirewallProducts/Sections/FirewallCatalogue";
import { VC_IMG, VC_STORE } from "@/app/components/CiscoProduct/products/video-conferencing-shared";

// Generated from cisco-video-conferencing.html (Cisco pages dev pack)

const BANNER = `${VC_IMG}/training-room-with-cisco-video-conferencing-dual-displays-and-ceiling-.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Cisco Video Conferencing in Dubai | Rooms, Boards, Desk | GS IT",
  description:
    "Buy Cisco video conferencing in Dubai: Room Bar, Room Bar Pro, Room Kit EQ, EQX, Room Kit Pro G2, Board Pro G3 and Desk Pro G2.",
  ogTitle: "Cisco Video Conferencing in Dubai | GS IT",
  ogDescription:
    "Cisco room systems, boards and desk devices for Webex, Teams and Zoom, designed, installed and supported by GS IT in the UAE.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Video Conferencing" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Video Conferencing\n in Dubai",
  highlightLast: 2,
  description:
    "Cisco room systems, boards and desk devices for Webex, Microsoft Teams and Zoom meetings. GS IT designs, installs and supports them, from a two-person huddle room to the boardroom.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore systems", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "Choosing a Cisco system",
  heading: "The right Cisco system\n for every room",
  highlightLast: 3,
  subhead: "Room size, seating and how people present decide the system. We confirm it with a room survey.",
  data: [
    {
      kicker: "Huddle and focus rooms",
      title: "Room Bar and Desk Pro G2",
      text: "All-in-one devices for two to five people, set up on a single display or a desk.",
      points: [
        "Camera, microphones and speakers in one unit",
        "One-touch join from the Room Navigator",
        "Desk Pro G2 doubles as a 4K monitor",
      ],
    },
    {
      dark: true,
      kicker: "Meeting and training rooms",
      title: "Room Bar Pro, Room Kit EQ and EQX",
      text: "Systems for medium and large rooms, with up to three displays and extra microphones.",
      points: ["Up to 8 Cisco IP microphones", "Speaker tracking and people framing", "Presenter tracking with a PTZ camera"],
    },
    {
      kicker: "Boardrooms and auditoriums",
      title: "Room Kit Pro G2",
      text: "An NVIDIA-powered codec for the largest rooms and custom AV designs.",
      points: ["5 HDMI inputs and 3 outputs", "AV over IP with 8 PoE ports", "Up to 16 Ceiling Speaker Pro units"],
    },
  ],
};

export const catalogueData: FirewallCatalogueData = {
  tag: "Cisco video range",
  heading: "Popular Cisco\n video conferencing systems",
  highlightLast: 3,
  subhead: "Not sure which fits? We confirm the system after surveying the room and reviewing your meeting platform.",
  groups: [
    {
      title: "Meeting room systems",
      text: "From huddle rooms to boardrooms.",
      products: [
        {
          tag: "Huddle rooms",
          title: "Cisco Room Bar",
          description:
            "An all-in-one video bar for huddle and focus rooms, with the camera, microphones and speakers in one unit.",
          image: `${VC_IMG}/cisco-room-bar-card.webp`,
          href: `${VC_STORE}/room-bar`,
          specs: [
            { label: "Camera", value: "12 MP, 120° field of view" },
            { label: "Built-in mics", value: "Up to 5 people within 3 m" },
            { label: "Displays", value: "Up to 2" },
          ],
        },
        {
          tag: "Medium rooms",
          title: "Cisco Room Bar Pro",
          description:
            "A video bar with a dual 48 MP camera system and a 16-element microphone array, for meeting and training rooms.",
          image: `${VC_IMG}/cisco-room-bar-pro-card.webp`,
          href: `${VC_STORE}/room-bar-pro`,
          specs: [
            { label: "Camera", value: "Dual 48 MP, 112° wide lens" },
            { label: "Microphones", value: "16-element array, up to 8 IP mics" },
            { label: "Displays", value: "Up to 3" },
          ],
        },
        {
          tag: "Large rooms",
          title: "Cisco Room Kit EQ",
          description:
            "A modular kit with the Codec EQ, Quad Camera and Room Navigator, for conference rooms, boardrooms and training rooms.",
          image: `${VC_IMG}/cisco-room-kit-eq-card.webp`,
          href: `${VC_STORE}/room-kit-eq`,
          specs: [
            { label: "Camera", value: "Quad Camera or PTZ 4K" },
            { label: "Microphones", value: "Up to 8 Cisco IP mics" },
            { label: "Displays", value: "Up to 3" },
          ],
        },
        {
          tag: "Integrated large rooms",
          title: "Cisco Room Kit EQX",
          description:
            "A complete front-of-room system with the Codec EQ, Quad Camera, six loudspeakers and a bass unit, built around two displays.",
          image: `${VC_IMG}/cisco-room-kit-eqx-card.webp`,
          href: `${VC_STORE}/room-kit-eqx`,
          specs: [
            { label: "Displays", value: "Dual 65\" to 75\", plus a third" },
            { label: "Audio", value: "6 loudspeakers and a bass unit" },
            { label: "Mounting", value: "Wall, wall stand or floor stand" },
          ],
        },
        {
          tag: "Boardrooms and auditoriums",
          title: "Cisco Room Kit Pro G2",
          description:
            "The NVIDIA-powered Codec Pro G2 for the most demanding rooms, with five HDMI inputs and AV over IP.",
          image: `${VC_IMG}/cisco-room-kit-pro-g2-card.webp`,
          href: `${VC_STORE}/room-kit-pro-g2`,
          specs: [
            { label: "Camera", value: "Quad Camera or Room Vision PTZ" },
            { label: "Video inputs", value: "5 HDMI, up to 5 IP streams" },
            { label: "PoE", value: "8 ports, 120 W budget" },
          ],
        },
      ],
    },
    {
      title: "Boards and desk devices",
      text: "For whiteboarding, executive desks and small spaces.",
      products: [
        {
          tag: "Collaboration boards",
          title: "Cisco Board Pro G3",
          description:
            "An all-in-one 4K touch board with dual 48 MP cameras and digital whiteboarding, in 55 and 75-inch sizes.",
          image: `${VC_IMG}/cisco-board-pro-g3-card.webp`,
          href: `${VC_STORE}/board-pro-g3`,
          specs: [
            { label: "Sizes", value: "55\" or 75\" 4K touch" },
            { label: "Camera", value: "Dual 48 MP" },
            { label: "Microphones", value: "14-element array" },
          ],
        },
        {
          tag: "Executive desks",
          title: "Cisco Desk Pro G2",
          description: "A 27-inch 4K touchscreen collaboration device for executive desks and small huddle spaces.",
          image: `${VC_IMG}/cisco-desk-pro-g2-card.webp`,
          href: `${VC_STORE}/desk-pro-g2`,
          specs: [
            { label: "Display", value: "27\" 4K touch" },
            { label: "Camera", value: "48 MP main, 105° wide lens" },
            { label: "Huddle use", value: "Up to 5 people" },
          ],
        },
      ],
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Meetings that work,\n on any platform",
  highlightLast: 3,
  subhead: "What Cisco video systems bring to a meeting room.",
  data: [
    {
      icon: "MonitorSmartphone",
      title: "Webex, Teams or Zoom",
      description: "Run Cisco RoomOS for Webex, with Zoom and Teams interop, or Microsoft Teams Rooms natively.",
      highlight: true,
    },
    {
      icon: "ScanFace",
      title: "AI camera framing",
      description:
        "Speaker tracking, group framing and Frames mode keep every person in the room visible to remote attendees.",
    },
    {
      icon: "Mic",
      title: "Clear room audio",
      description: "Beamforming microphone arrays, with Table and Ceiling Microphone Pro for larger rooms.",
    },
    {
      icon: "Cast",
      title: "Wireless sharing",
      description:
        "Share a laptop screen with Miracast, Apple AirPlay or the Webex App, or plug in over HDMI or USB-C.",
    },
    {
      icon: "TabletSmartphone",
      title: "Room Navigator",
      description: "A touch panel for one-touch join, room booking and in-room controls, on the table or the wall.",
    },
    {
      icon: "Cloud",
      title: "Central management",
      description: "Manage, update and monitor every room from Cisco Control Hub.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From room survey\n to the first meeting",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, from the first review to a documented handover.",
  data: [
    { title: "Room survey", text: "Room size, seating, acoustics, displays, network and meeting platform." },
    { title: "Design and proposal", text: "Systems, cameras, microphones and mounting in one document.", highlight: true },
    { title: "Supply", text: "Genuine Cisco devices and accessories with manufacturer warranty." },
    { title: "Install and configure", text: "Mounting, cabling, registration and test calls." },
    { title: "Handover and support", text: "User guides, admin training and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco video conferencing\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which system is right for our room size?",
      answer:
        "Room Bar suits huddle rooms, Room Bar Pro suits medium rooms, Room Kit EQ or EQX suits large rooms, and Room Kit Pro G2 suits boardrooms and auditoriums. We confirm the choice with a room survey.",
    },
    {
      question: "Do they work with Microsoft Teams and Zoom?",
      answer:
        "Yes. They run Microsoft Teams Rooms natively, or Cisco RoomOS for Webex, which can also join Teams and Zoom meetings.",
    },
    {
      question: "Do we need a subscription or licence?",
      answer:
        "Each device needs to be registered to a meeting platform. We include the right licences for your platform in the quote.",
    },
    {
      question: "Can we reuse our existing displays?",
      answer: "Usually, yes. We check the size, resolution and connections during the survey.",
    },
    {
      question: "Will people at the far end of the table be heard?",
      answer:
        "Built-in microphones cover a set distance from the device. For larger rooms, we add Table or Ceiling Microphone Pro units.",
    },
    {
      question: "Can visitors share their laptop screen?",
      answer: "Yes, wirelessly or over HDMI or USB-C.",
    },
    {
      question: "We have older Cisco Room Kits. Should we upgrade?",
      answer:
        "The Room Kit, Room Kit Mini and Room Kit Plus are no longer sold. We can review your rooms and recommend current replacements.",
    },
    {
      question: "Do you install and support the systems?",
      answer:
        "Yes. GS IT is a Cisco partner. We survey the room, install the system and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your meeting rooms\n with a collaboration specialist",
  highlightLast: 4,
  image: BANNER,
  steps: [
    "Tell us your rooms, seating and meeting platform.",
    "We survey the rooms, then recommend systems, cameras and microphones.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote = "Cisco and Webex are trademarks of Cisco Systems, Inc.";
