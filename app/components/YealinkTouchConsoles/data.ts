import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import { touchConsoleProducts } from "@/app/components/YealinkProduct/products/touch-consoles";
import { CONSOLE_STORE } from "@/app/components/YealinkProduct/shared";
import type { CataloguePhone } from "@/app/components/YealinkIpPhones/Sections/PhoneCatalogue";

const IMG = "/assets/images/yealink-touch-consoles";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Touch consoles and room control" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Touch Consoles\nand Room Control in Dubai",
  highlightLast: 4,
  description:
    "Touch consoles that put Teams and Zoom meetings one tap away, and device navigators that run the displays, cameras and AV equipment in the room. GS IT supplies, installs and programs the full range.",
  backgroundImage: `${IMG}/banner.webp`,
  mobbanner: `${IMG}/banner.webp`,
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
  tag: "Choose by system",
  heading: "Which console\n goes with your room",
  highlightLast: 4,
  subhead:
    "The console depends on the video system in the room. Bars, Windows-based Teams Rooms and MeetingBoards each use their own panel, and AV-over-IP rooms add a device navigator.",
  data: [
    {
      kicker: "MeetingBar rooms",
      title: "CTP25 touch console",
      text: "A 10.1-inch Android console for the MeetingBar A25, A40 and A50, connected to the bar with one network cable.",
      points: ["One-touch join for Teams and Zoom", "USB-C sharing and laptop charging", "Table or wall mount"],
      link: { text: "View the CTP25 →", href: `${CONSOLE_STORE}/yealink-ctp25` },
    },
    {
      dark: true,
      kicker: "Teams Rooms on Windows",
      title: "MTouch Plus family",
      text: "An 11.6-inch 1080p panel for MVC Teams Rooms systems, with up to four EXT screens. MeetingBoard MTRoW rooms use the MTouch Plus-MB.",
      points: ["MVC S50, S80, S90, S98: MTouch Plus", "Extra seats: MTouch Plus-EXT", "MeetingBoard, MeetingBoard Pro: MTouch Plus-MB"],
      link: { text: "View the MTouch Plus →", href: `${CONSOLE_STORE}/yealink-mtouch-plus` },
    },
    {
      kicker: "AV-over-IP and Pro AV rooms",
      title: "CT200 and CT300 navigators",
      text: "Room controllers that route AV signals, switch displays and manage Yealink and third-party devices from one interface.",
      points: ["CT200: AV-over-IP management", "CT300: adds RS232, RS422/485, relay, GPIO and IR", "Open APIs, rack or flat mount"],
      link: { text: "View the CT300 →", href: `${CONSOLE_STORE}/yealink-ct300` },
    },
  ],
};

// Catalogue cards come from the product registry: touch consoles carry a `phoneListing` with a console or navigator series
const CONSOLE_SERIES = ["console", "navigator"];
const consoles: CataloguePhone[] = Object.values(touchConsoleProducts)
  .filter((p) => p.phoneListing && !p.phoneListing.disable && [p.phoneListing.series].flat().some((s) => CONSOLE_SERIES.includes(s)))
  .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
  .map((p) => {
    const l = p.phoneListing!;
    return { tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${CONSOLE_STORE}/${p.slug}`, pills: l.pills, bestFor: l.bestFor, series: l.series, features: l.features };
  });

export const catalogueData = {
  tag: "Yealink room control range",
  heading: "Touch consoles and\n room controllers",
  highlightLast: 2,
  subhead: "Every product below is available through GS IT. Not sure which fits? We confirm it during the room survey and demo.",
  filters: {
    seriesTitle: "Type",
    featuresTitle: "Works with",
    series: [
      { key: "console", label: "Touch console" },
      { key: "navigator", label: "Device navigator" },
    ],
    features: [
      { key: "meetingbar", label: "MeetingBar" },
      { key: "mvc", label: "MVC Teams Rooms" },
      { key: "meetingboard", label: "MeetingBoard" },
      { key: "avoip", label: "AV-over-IP rooms" },
    ],
  },
  countLabel: "products",
  bestForLabel: "Works with",
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: consoles,
};

export const featuresData = {
  tag: "Key features",
  heading: "Meeting control,\n without the remote controls",
  highlightLast: 4,
  subhead: "What the Yealink consoles and navigators bring to a meeting room.",
  data: [
    { icon: "MonitorPlay", title: "One-tap join", description: "The day's meetings on the panel. Tap once to join a Teams or Zoom call, share content or move the camera." },
    { icon: "Tablet", title: "Large, clear screens", description: "10.1-inch and 11.6-inch IPS touch screens with anti-glare, anti-fingerprint coating." },
    { icon: "Usb", title: "Share and charge over USB-C", description: "The CTP25, MTouch Plus and MTouch Plus-MB share a laptop screen and charge the laptop over one USB-C cable." },
    { icon: "MonitorSmartphone", title: "Control from more than one seat", description: "Add up to four MTouch Plus-EXT screens so people around a long table can run the meeting." },
    { icon: "Waypoints", title: "Room automation", description: "CT200 and CT300 navigators switch displays, route signals and drive serial, relay and IR equipment." },
    { icon: "MonitorCog", title: "Central management", description: "Yealink Device Management Platform, Teams Admin Center or Zoom Device Management, depending on the device." },
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
  heading: "Yealink touch consoles\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is the difference between a touch console and a device navigator?",
      answer: "A touch console sits on the table and controls the meeting: join, share, camera and layouts. A device navigator, the CT200 or CT300, is a controller box that manages the room's AV devices, such as displays, signal routing and serial or IR equipment.",
    },
    {
      question: "Which console works with my Yealink system?",
      answer: "The CTP25 works with the MeetingBar A25, A40 and A50. The MTouch Plus works with MVC Teams Rooms systems such as the MVC S50, S80, S90 and S98. The MTouch Plus-MB works with MeetingBoard and MeetingBoard Pro on Teams Rooms on Windows. The MeetingBar A10, A20 and A30 use the CTP18.",
    },
    {
      question: "Can a room have more than one touch panel?",
      answer: "Yes, with the MTouch Plus. Add up to four MTouch Plus-EXT screens, five panels in total.",
    },
    {
      question: "Can the CT300 control non-Yealink equipment?",
      answer: "Yes. It has RS232, RS422/485, relay, GPIO and IR ports, and Yealink open APIs for third-party integration.",
    },
    {
      question: "Can we see a console before we buy?",
      answer: "Yes. We demo the system in your own meeting room and order only after you approve the proposal.",
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
  image: "/assets/images/yealink/products/yealink-mtouch-plus/overview.webp",
  steps: [
    "Tell us which video system each room uses.",
    "We demo the right console in your room, on your Teams or Zoom account.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote =
  "Yealink is a trademark of Yealink Network Technology Co., Ltd. Microsoft Teams, Zoom, AirPlay and Miracast are trademarks of their respective owners.";
