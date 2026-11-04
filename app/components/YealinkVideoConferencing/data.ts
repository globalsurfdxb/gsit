import { portfolioData } from "@/app/components/common/data";
import type { CatalogueProduct } from "./Sections/ProductCatalogue";

const IMG = "/assets/images/yealink";
const STORE = "/store/video-conferencing-devices/yealink";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const yealinkBadge = {
  logo: `/assets/images/yealink-video-conferencing/gold-partner.jpg`,
  alt: "Yealink Gold Video Conferencing Partner 2026",
};

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Video conferencing" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Video Conferencing\nSolutions in Dubai",
  highlightLast: 3,
  description:
    "Video bars, Teams Rooms and Zoom Rooms kits, USB cameras and collaboration displays for every room size. GS IT supplies, installs and supports the full Yealink video range, and demos it in your own room before you buy.",
  backgroundImage: `/assets/images/yealink-video-conferencing/banner.jpeg`,
  mobbanner: `/assets/images/yealink-video-conferencing/banner.jpeg`,
  buttons: [
    { text: "Explore products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    { text: "Contact us", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT and AV in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "How Yealink rooms work",
  heading: "Three ways to run\n a Yealink meeting room",
  highlightLast: 4,
  subhead:
    "The right setup depends on how the room meets: one platform every day, a large room that needs separate cameras and microphones, or guests who bring their own meetings.",
  data: [
    {
      kicker: "Simplest",
      title: "All-in-one bar or display",
      text: "Camera, microphones, speakers and compute in one device, running Microsoft Teams Rooms or Zoom Rooms natively: a MeetingBar under your screen, or a MeetingBoard Pro with the screen and whiteboard built in.",
      points: ["One device to mount and cable", "One-tap join from the touch panel", "Huddle rooms to large rooms"],
    },
    {
      dark: true,
      kicker: "Most scalable",
      title: "Teams or Zoom Rooms kit",
      text: "MVC (Teams) and ZVC (Zoom) kits pair a Windows mini-PC with cameras, microphones and a touch panel chosen for the room.",
      points: ["Multiple cameras and ceiling or table mics", "Medium rooms to boardrooms", "Managed like any Teams or Zoom room"],
    },
    {
      kicker: "Most flexible",
      title: "BYOD from your laptop",
      text: "A laptop runs the call on any platform and uses the room camera, microphones and display over USB.",
      points: [
        "Works with Teams, Zoom, Webex and others",
        "Lower cost per room",
        "Huddle rooms and shared spaces",
        "MeetingBoard C BYOD: an interactive display your laptop drives",
      ],
    },
  ],
};

const BAR = "Android video bar";
const MTR = "Teams Rooms on Windows";
const ZR = "Zoom Rooms kit";
const USB = "USB camera and BYOD";
const AIO = "All-in-one display";
const teamsOnly = [{ key: "teams" as const }];
const zoomOnly = [{ key: "zoom" as const }];
const byodOnly = [{ key: "byod" as const }];

const products: CatalogueProduct[] = [
  {
    tag: BAR, title: "Yealink MeetingBar A10", text: "All-in-one Android video bar for small rooms.",
    image: `${IMG}/meetingbar-a10.png`, href: `${STORE}/yealink-meetingbar-a10-2`, rooms: ["small"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingbar-a10-teams` }, { key: "zoom", href: `${STORE}/yealink-meetingbar-a10-zoom` }, { key: "byod", href: `${STORE}/yealink-meetingbar-a10` }],
  },
  {
    tag: BAR, title: "Yealink MeetingBar A25", text: "All-in-one Android video bar for small to medium rooms.",
    image: `${IMG}/meetingbar-a25.jpg`, href: `${STORE}/yealink-meetingbar-a25`, rooms: ["small", "medium"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingbar-a25` }, { key: "zoom", href: `${STORE}/yealink-meetingbar-a25-zoom` }, { key: "byod", href: `${STORE}/yealink-meetingbar-a25-byom` }],
  },
  {
    tag: BAR, title: "Yealink MeetingBar A30", text: "Dual-camera Android video bar for medium rooms.",
    image: `${IMG}/meetingbar-a30.png`, href: `${STORE}/yealink-meetingbar-a30-teams`, rooms: ["medium"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingbar-a30-teams` }, { key: "zoom", href: `${STORE}/yealink-meetingbar-a30-zoom` }, { key: "byod", href: `${STORE}/yealink-meetingbar-a30` }],
  },
  {
    tag: BAR, title: "Yealink MeetingBar A40", text: "All-in-one Android video bar for small to medium rooms.",
    image: `${IMG}/meetingbar-a40.png`, href: `${STORE}/yealink-meetingbar-a40`, rooms: ["small", "medium"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingbar-a40` }, { key: "zoom", href: `${STORE}/yealink-meetingbar-a40-zoom` }],
  },
  {
    tag: BAR, title: "Yealink MeetingBar A50", text: "All-in-one video bar for medium and large rooms.",
    image: `${IMG}/meetingbar-a50.png`, href: `${STORE}/yealink-meetingbar-a50`, rooms: ["medium", "large"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingbar-a50` }, { key: "zoom", href: `${STORE}/yealink-meetingbar-a50-zoom` }],
  },
  { tag: MTR, title: "Yealink MVC340", text: "Teams Rooms kit for huddle and small rooms.", image: `${IMG}/mvc340.png`, href: `${STORE}/yealink-mvc340`, rooms: ["huddle", "small"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S40", text: "Teams Rooms system for small to medium rooms.", image: `${IMG}/mvc-s40.jpg`, href: `${STORE}/yealink-mvcs40`, rooms: ["small", "medium"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink SmartVision 40 Teams Rooms System", text: "SmartVision 40 camera bar as a complete Teams Rooms system.", image: `${IMG}/smartvision40-teams.png`, href: `${STORE}/yealink-smartvision40`, rooms: ["small", "medium"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S50", text: "AI-driven Teams Rooms system for small and medium rooms.", image: `${IMG}/mvc-s50.png`, href: `${STORE}/yealink-mvc-s50-microsoft-teams-system`, rooms: ["small", "medium"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S60", text: "Teams Rooms system with a 360° SmartVision 60 camera.", image: `${IMG}/mvc-s60.png`, href: `${STORE}/yealink-mvcs60`, rooms: ["small", "medium"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC640", text: "Teams Rooms kit for medium rooms.", image: `${IMG}/mvc640.png`, href: `${STORE}/yealink-mvc640`, rooms: ["medium"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC860", text: "Teams Rooms kit for medium and large rooms.", image: `${IMG}/mvc860.png`, href: `${STORE}/yealink-mvc860`, rooms: ["medium", "large"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S80", text: "Teams Rooms system for large meeting spaces.", image: `${IMG}/mvc-s80.png`, href: `${STORE}/yealink-mvc-s80-microsoft-teams-system`, rooms: ["large"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC940", text: "Dual-camera Teams Rooms kit for large rooms.", image: `${IMG}/mvc940.png`, href: `${STORE}/yealink-mvc940`, rooms: ["large"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S90", text: "Teams Rooms system for boardrooms and large rooms.", image: `${IMG}/mvc-s90.png`, href: `${STORE}/yealink-mvcs90`, rooms: ["large"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MVC S98", text: "Multi-camera Teams Rooms system for large rooms.", image: `${IMG}/mvc-s98.png`, href: `${STORE}/yealink-mvc-s98-microsoft-teams-system`, rooms: ["large"], platforms: teamsOnly },
  { tag: MTR, title: "Yealink MCore Teams Room Kit", text: "Mini-PC and touch panel to build a Teams Room around your chosen camera and audio.", image: `${IMG}/mcore.png`, href: `${STORE}/yealink-mcore-microsoft-teams-room-kit`, rooms: [], platforms: teamsOnly },
  { tag: ZR, title: "Yealink ZVC860", text: "Zoom Rooms kit for medium and large rooms, as a full or base kit.", image: `${IMG}/zvc860.png`, href: `${STORE}/yealink-zvc860-zoom-rooms-kit`, rooms: ["medium", "large"], platforms: zoomOnly },
  { tag: ZR, title: "Yealink ZVC S90", text: "Zoom Rooms system for boardrooms and large rooms.", image: `${IMG}/zvc-s90.png`, href: `${STORE}/yealink-zvcs90`, rooms: ["large"], platforms: zoomOnly },
  { tag: USB, title: "Yealink UVC30-Room", text: "4K USB camera for huddle and small rooms.", image: `${IMG}/uvc30-room.png`, href: `${STORE}/yealink-uvc30-room`, rooms: ["huddle", "small"], platforms: byodOnly },
  { tag: USB, title: "Yealink UVC30 + CP900 kit", text: "USB camera and speakerphone kit for huddle rooms and travel.", image: `${IMG}/uvc30-cp900.png`, href: `${STORE}/yealink-uvc30-cp900`, rooms: ["huddle", "small"], platforms: byodOnly },
  { tag: USB, title: "Yealink UVC34", text: "All-in-one USB video bar for huddle and small rooms.", image: `${IMG}/uvc34.png`, href: `${STORE}/yealink-uvc34`, rooms: ["huddle", "small"], platforms: byodOnly },
  { tag: USB, title: "Yealink UVC40 E2", text: "All-in-one USB video bar for small and huddle rooms.", image: `${IMG}/uvc40-e2.png`, href: `${STORE}/yealink-uvc40-e2`, rooms: ["huddle", "small"], platforms: byodOnly },
  { tag: USB, title: "Yealink SmartVision 40", text: "AI conference camera bar with dual lenses.", image: `${IMG}/smartvision-40.png`, href: `${STORE}/yealink-smartvision-40`, rooms: ["small", "medium"], platforms: byodOnly },
  { tag: USB, title: "Yealink SmartVision 60", text: "360° all-in-one camera for the centre of the table.", image: `${IMG}/smartvision-60.png`, href: `${STORE}/yealink-smartvision-60`, rooms: ["small", "medium"], platforms: byodOnly },
  { tag: USB, title: "Yealink SmartVision 80", text: "Premium camera with adaptive framing and a privacy mode.", image: `${IMG}/smartvision-80.png`, href: `${STORE}/yealink-smartvision-80`, rooms: [], platforms: byodOnly },
  { tag: USB, title: "Yealink UVC85-BYOD", text: "PTZ camera and audio kit for laptop-led meetings.", image: `${IMG}/uvc85-byod.png`, href: `${STORE}/uvc85-byod`, rooms: [], platforms: byodOnly },
  { tag: USB, title: "Yealink UVC86", text: "Dual-eye 4K PTZ camera for medium and large rooms.", image: `${IMG}/uvc86.png`, href: `${STORE}/yealink-uvc86`, rooms: ["medium", "large"], platforms: byodOnly },
  {
    tag: AIO, title: "Yealink MeetingBoard Pro", text: "All-in-one interactive display with built-in camera, audio and whiteboard, in 65, 75 and 86 inch sizes.",
    image: `${IMG}/meetingboard-pro.png`, href: `${STORE}/yealink-meetingboard-pro`, rooms: ["small", "medium", "large"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-meetingboard-pro` }, { key: "zoom", href: `${STORE}/yealink-meetingboard-pro-zoom` }, { key: "byod" }],
  },
  { tag: AIO, title: "Yealink MeetingBoard C BYOD", text: "Interactive collaboration display for laptop-led meetings.", image: `${IMG}/meetingboard-c-byod.png`, href: `${STORE}/yealink-meetingboard-c-byod`, rooms: [], platforms: byodOnly },
  {
    tag: AIO, title: "Yealink DeskVision A24", text: "24-inch all-in-one display for focus rooms and desks.",
    image: `${IMG}/deskvision-a24.png`, href: `${STORE}/yealink-deskvision-a24`, rooms: ["huddle"],
    platforms: [{ key: "teams", href: `${STORE}/yealink-deskvision-a24` }, { key: "zoom", href: `${STORE}/yealink-deskvision-a24-zoom` }],
  },
];

export const catalogueData = {
  tag: "Yealink video conferencing range",
  heading: "Yealink video conferencing\n product range",
  highlightLast: 2,
  subhead: "Every system below is available through GS IT. Not sure which fits? We confirm it during the room survey and demo.",
  filters: {
    platform: [
      { key: "byod", label: "BYOD" },
      { key: "teams", label: "Microsoft Teams" },
      { key: "zoom", label: "Zoom" },
    ],
    room: [
      { key: "huddle", label: "Huddle room" },
      { key: "small", label: "Small room" },
      { key: "medium", label: "Medium room" },
      { key: "large", label: "Large room" },
    ],
  },
  empty: { text: "No system matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: products,
};

export const featuresData = {
  tag: "Key features",
  heading: "Enterprise features,\n at value-for-money pricing",
  highlightLast: 3,
  subhead: "What Yealink video systems have in common, from a USB camera in a huddle room to a multi-camera boardroom.",
  data: [
    { icon: "Video", title: "Sharp video, up to 4K", description: "4K cameras across the range, with wide-angle lenses for small rooms and optical zoom for longer tables." },
    { icon: "ScanFace", title: "AI framing and speaker tracking", description: "Cameras frame the group automatically and follow whoever is speaking, so remote attendees see faces, not an empty table." },
    { icon: "AudioLines", title: "AI noise reduction", description: "Microphone arrays with AI noise suppression cut keyboard, paper and room noise, and full-duplex audio keeps conversation natural." },
    { icon: "MonitorPlay", title: "One-tap join", description: "A touch panel on the table shows the day's meetings. Tap once to join a Teams or Zoom call, share content or control the camera." },
    { icon: "Laptop", title: "Bring your own meeting", description: "BYOD models and editions let a laptop use the room camera and audio for any platform, including a client's Webex or Google Meet." },
    { icon: "MonitorCog", title: "Central device management", description: "Firmware, room status and diagnostics through Yealink's management platform, the Teams admin center or Zoom device management." },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "See it working in your room\n before you buy anything",
  highlightLast: 4,
  subhead: "Procurement starts only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Room survey", text: "Room size, displays, acoustics, network and how each space is used." },
    { title: "On-site demo", text: "A working Yealink system in your room, on your Teams or Zoom account.", highlight: true },
    { title: "Proposal", text: "System per room, scope and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Mounting, cabling, room accounts, panels and network, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Yealink video conferencing\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is the difference between a MeetingBar, an MVC kit and a BYOD setup?",
      answer: "A MeetingBar puts the camera, audio and compute in one Android device and runs Teams Rooms or Zoom Rooms natively. MVC (Teams) and ZVC (Zoom) kits run on a Windows mini-PC with separate cameras and microphones, for larger rooms. A BYOD setup uses a USB camera and audio, and the meeting runs on the presenter's laptop.",
    },
    {
      question: "Which Yealink system is right for my room size?",
      answer: "Huddle rooms usually suit a USB video bar or an MVC340. Small and medium rooms suit a MeetingBar or an MVC S40 to S60. Large rooms and boardrooms suit the MVC S80, S90, S98 or MVC940, or the ZVC S90 for Zoom. Use the filters above, and we confirm the fit during the room survey.",
    },
    {
      question: "Can Yealink rooms join calls on platforms other than Teams and Zoom?",
      answer: "Yes, through BYOD. BYOD models and editions let a laptop run Webex, Google Meet or any other platform on the room's camera and audio.",
    },
    {
      question: "Can you upgrade our existing meeting rooms?",
      answer: "Yes. We survey each room and reuse displays, cabling and network where they are suitable, then quote only what is missing.",
    },
    {
      question: "Can we see a Yealink system before we buy?",
      answer: "Yes. We bring a working system to your office and demo it in your own meeting room. We order hardware only after you approve the proposal.",
    },
    {
      question: "Is GS IT an authorized Yealink partner in Dubai?",
      answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner for 2026. We supply genuine Yealink products with manufacturer warranty, and install and support them across the UAE.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Book a Yealink demo\n in your own meeting room",
  highlightLast: 4,
  image: `${IMG}/mvc-s90.png`,
  steps: [
    "Tell us how many rooms you have and how they are used.",
    "We bring a working system and demo it on your Teams or Zoom account.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote =
  "Yealink is a trademark of Yealink Network Technology Co., Ltd. Microsoft Teams, Zoom, Webex and Google Meet are trademarks of their respective owners.";
