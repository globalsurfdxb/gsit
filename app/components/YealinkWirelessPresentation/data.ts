import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import { yealinkProducts } from "@/app/components/YealinkProduct/products";
import { STORE } from "@/app/components/YealinkProduct/shared";
import type { CataloguePhone } from "@/app/components/YealinkIpPhones/Sections/PhoneCatalogue";

const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Wireless presentation" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Wireless Presentation\nSystems in Dubai",
  highlightLast: 3,
  description:
    "Share a laptop or phone screen to the room display in one press, with up to four presenters on screen in 4K. GS IT supplies, installs and supports Yealink wireless presentation for meeting rooms and classrooms.",
  backgroundImage: "/assets/images/yealink-partner-dubai/banner.webp",
  mobbanner: "/assets/images/yealink-partner-dubai/banner.webp",
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
  tag: "Choose by room",
  heading: "Three ways to share\n wirelessly in a Yealink room",
  highlightLast: 5,
  subhead: "The right setup depends on what is already in the room: just a display, a Yealink video system, or a MeetingBoard.",
  data: [
    {
      kicker: "Rooms with just a display",
      title: "RoomCast E2 receiver",
      text: "A compact receiver behind the display. People share from the Yealink pod, YeaCast, Miracast or AirPlay, up to four at once.",
      points: ["No video system needed", "4K/60 HDMI output", "PoE, one cable"],
      link: { text: "View the RoomCast E2 →", href: `${STORE}/yealink-roomcast-e2` },
    },
    {
      dark: true,
      kicker: "Rooms with a Yealink video system",
      title: "WPP30 or PA20 pod",
      text: "Plug the pod into a laptop and press to share to a MeetingBar, MVC, MeetingBoard or RoomCast. No software or driver.",
      points: ["4K/30 hardware encoding", "PA20 adds IP-BYOD", "USB-C with USB-A adapter"],
      link: { text: "View the WPP30 →", href: `${STORE}/yealink-wpp30` },
    },
    {
      kicker: "MeetingBoard rooms",
      title: "MB-Remote presenter",
      text: "A pre-paired presenter remote for MeetingBoard and MeetingBoard Pro, alongside a pod for laptop sharing.",
      points: ["Page turning and air mouse", "Digital laser pointer", "Mute, camera and volume keys"],
      link: { text: "View the MB-Remote →", href: `${STORE}/yealink-mb-remote` },
    },
  ],
};

// Catalogue cards come from the product registry: presentation devices carry a `phoneListing` with a receiver, pod or remote series
const PRESENTATION_SERIES = ["receiver", "pod", "remote"];
const devices: CataloguePhone[] = Object.values(yealinkProducts)
  .filter((p) => p.phoneListing && !p.phoneListing.disable && [p.phoneListing.series].flat().some((s) => PRESENTATION_SERIES.includes(s)))
  .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
  .map((p) => {
    const l = p.phoneListing!;
    return { tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${STORE}/${p.slug}`, pills: l.pills, bestFor: l.bestFor, series: l.series, features: l.features };
  });

export const catalogueData = {
  tag: "Yealink wireless presentation range",
  heading: "Wireless presentation\n products",
  highlightLast: 1,
  subhead: "Every product below is available through GS IT. Not sure which fits? We confirm it during the room survey and demo.",
  filters: {
    seriesTitle: "Type",
    featuresTitle: "Works with",
    series: [
      { key: "receiver", label: "Receiver" },
      { key: "pod", label: "Presentation pod" },
      { key: "remote", label: "Presenter remote" },
    ],
    features: [
      { key: "display", label: "Any display" },
      { key: "meetingbar", label: "MeetingBar" },
      { key: "meetingboard", label: "MeetingBoard" },
      { key: "mvc", label: "MVC systems" },
      { key: "roomcast", label: "RoomCast" },
    ],
  },
  countLabel: "products",
  bestForLabel: "Works with",
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: devices,
};

export const featuresData = {
  tag: "Key features",
  heading: "Share in one press,\n up to four screens at once",
  highlightLast: 6,
  subhead: "What the Yealink wireless presentation range brings to a meeting room or classroom.",
  data: [
    { icon: "Cast", title: "Up to four presenters", description: "RoomCast E2 and MeetingBoard show up to four shared screens side by side." },
    { icon: "Monitor", title: "4K content", description: "Pods encode at up to 4K/30 in hardware; RoomCast E2 outputs 4K/60 to the display." },
    { icon: "Plug", title: "No software or driver", description: "The pod carries its own meeting assistant. Plug it in and press the button." },
    { icon: "Lock", title: "Secure sharing", description: "Self-built Wi-Fi between pod and receiver, AES and WPA encryption, and a PIN code on RoomCast." },
    { icon: "Usb", title: "Works with most laptops", description: "Full-featured USB-C with a USB-A adapter, for Windows and macOS." },
    { icon: "MonitorCog", title: "Central management", description: "RoomCast E2 is managed through Yealink Management Cloud Service and the Device Management Platform." },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "See it working in your room\n before you buy anything",
  highlightLast: 4,
  subhead: "Procurement starts only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Room survey", text: "Room size, displays, acoustics, network and how each space is used." },
    { title: "On-site demo", text: "Wireless sharing working in your room, with your own laptops and phones.", highlight: true },
    { title: "Proposal", text: "System per room, scope and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Mounting, cabling, room accounts, panels and network, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Yealink wireless presentation\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Do I need a RoomCast E2 or just a pod?",
      answer: "If the room has a Yealink MeetingBar, MVC system or MeetingBoard, a WPP30 or PA20 pod shares to it directly. If the room has only a display, the RoomCast E2 is the receiver that connects to it.",
    },
    {
      question: "What is the difference between the WPP30 and the PA20?",
      answer: "Both share 4K over Wi-Fi 6 from the same size pod. The PA20 adds IP-BYOD, so a meeting on the laptop can use the room camera and microphones. The WPP30 adds the whiteboard feature.",
    },
    {
      question: "Do presenters need to install an app?",
      answer: "No. The pods are plug and play. With the RoomCast E2, people can also use Miracast or AirPlay built into their device.",
    },
    {
      question: "Can several people share at the same time?",
      answer: "Yes. RoomCast E2 and MeetingBoard show up to four screens at once. A MeetingBar pairs up to four pods, with one sharing at a time.",
    },
    {
      question: "Can we see it working before we buy?",
      answer: "Yes. We demo it in your own room with your own laptops, and order only after you approve the proposal.",
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
  highlightLast: 5,
  image: "/assets/images/yealink/products/yealink-roomcast-e2/overview.webp",
  steps: [
    "Tell us what is in each room today: a display, a video system or a MeetingBoard.",
    "We demo wireless sharing in your room with your own laptops.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Yealink is a trademark of Yealink Network Technology Co., Ltd. AirPlay and Miracast are trademarks of their respective owners.";
