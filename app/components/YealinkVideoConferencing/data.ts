import { portfolioData } from "@/app/components/common/data";
import type { CatalogueProduct, Platform } from "./Sections/ProductCatalogue";
import { yealinkProducts } from "@/app/components/YealinkProduct/products";
import { touchConsoleProducts } from "@/app/components/YealinkProduct/products/touch-consoles";
import { presentationProducts } from "@/app/components/YealinkProduct/products/wireless-presentation";
import { CONSOLE_STORE, PRESENTATION_STORE } from "@/app/components/YealinkProduct/shared";

const IMG = "/assets/images/yealink";
const STORE = "/store/video-conferencing-devices/yealink";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const yealinkBadge = {
  logo: `/assets/images/yealink-video-conferencing/gold-partner.webp`,
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

// Catalogue cards come from the product registry: each product's `listing` sets its card.
// Editions (editionOf) add their platform as a link on the main card; a disabled edition drops that link.
// A disabled main card hides its editions too.
const PLATFORM_ORDER: Platform[] = ["teams", "zoom", "byod"];
// Touch consoles and wireless presentation devices also appear here, but their pages live under their own categories
const hrefOf = (slug: string) =>
  `${slug in touchConsoleProducts ? CONSOLE_STORE : slug in presentationProducts ? PRESENTATION_STORE : STORE}/${slug}`;
const listed = Object.values({ ...yealinkProducts, ...touchConsoleProducts, ...presentationProducts }).filter((p) => p.listing && !p.listing.disable);

const products: CatalogueProduct[] = listed
  .filter((p) => !p.listing!.editionOf)
  .sort((a, b) => (a.listing!.order ?? 999) - (b.listing!.order ?? 999))
  .map((p) => {
    const l = p.listing!;
    const pages = [p, ...listed.filter((e) => e.listing!.editionOf === p.slug)];
    // Link each platform to its page only when the card covers more than one page
    const linkOf = (key: Platform) => {
      const page = pages.find((pg) => pg.listing!.platforms.includes(key));
      return pages.length > 1 && page ? hrefOf(page.slug) : undefined;
    };
    return {
      tag: l.tag ?? "",
      title: l.title ?? p.name,
      text: l.text ?? "",
      image: l.image ?? p.image,
      href: hrefOf(p.slug),
      rooms: l.rooms ?? [],
      platforms: PLATFORM_ORDER.filter((k) => pages.some((pg) => pg.listing!.platforms.includes(k))).map((key) => ({ key, href: linkOf(key) })),
    };
  });

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
