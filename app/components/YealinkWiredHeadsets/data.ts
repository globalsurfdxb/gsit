import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import { wiredHeadsetProducts } from "@/app/components/YealinkProduct/products/headsets";
import type { CataloguePhone } from "@/app/components/YealinkIpPhones/Sections/PhoneCatalogue";

const IMG = "/assets/images/yealink/headsets";
const STORE = "/yealink/headset";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Wired headsets" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Wired\nHeadsets in Dubai",
  highlightLast: 3,
  description:
    "Plug-and-play USB headsets for PCs and softphones, and a QD headset for Yealink desk phones. No pairing, no charging. GS IT supplies and supports Yealink headsets across the UAE.",
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
  tag: "Choose by how you work",
  heading: "Which wired headset\n fits the job",
  highlightLast: 3,
  subhead: "Pick by what the headset plugs into, then by how noisy the room is.",
  data: [
    {
      kicker: "PC and softphone calls",
      title: "UH42",
      text: "A light USB headset with one AI noise-cancelling microphone, for everyday calls on a PC.",
      points: ["USB-C with USB-A adapter", "Inline call control", "Mono 116 g, Dual 160 g"],
      link: { text: "View the UH42 →", href: `${STORE}/uh42` },
    },
    {
      dark: true,
      kicker: "Teams, Zoom and busy offices",
      title: "UH44 or UH46",
      text: "Two or three microphones, lift-to-mute boom and busylight for open-plan offices and contact centres.",
      points: ["UH44 certified for Teams and Zoom", "UH46 has three microphones", "Busylight on both models"],
      link: { text: "View the UH44 →", href: `${STORE}/uh44` },
    },
    {
      kicker: "Yealink desk phones",
      title: "YHS36 E2",
      text: "An analog headset that plugs into Yealink IP phones through a QD to RJ9 cable.",
      points: ["Wideband HD voice", "Quick Disconnect", "Mono 81 g, Dual 129 g"],
      link: { text: "View the YHS36 E2 →", href: `${STORE}/yhs36-e2` },
    },
  ],
};

// Catalogue cards come from the headset registry. Every wired model is Mono or Dual, so the first filter group
// is what the headset connects to (taken from its `usb` / `phone` feature) instead of wearing style
const CONNECTION = ["usb", "phone"];
const headsets: CataloguePhone[] = Object.values(wiredHeadsetProducts)
  .filter((p) => p.phoneListing && !p.phoneListing.disable)
  .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
  .map((p) => {
    const l = p.phoneListing!;
    return {
      tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${STORE}/${p.slug}`, pills: l.pills, bestFor: l.bestFor,
      series: l.features.filter((f) => CONNECTION.includes(f)),
      features: l.features.filter((f) => !CONNECTION.includes(f)),
    };
  });

export const catalogueData = {
  tag: "Yealink wired headsets",
  heading: "USB and desk phone\n headsets",
  highlightLast: 1,
  subhead: "All four are available through GS IT. Not sure which fits? Try them at your office.",
  filters: {
    seriesTitle: "Connects to",
    series: [
      { key: "usb", label: "PC by USB" },
      { key: "phone", label: "Yealink IP phone (QD to RJ9)" },
    ],
    features: [
      { key: "busylight", label: "Busylight" },
      { key: "certified", label: "Teams and Zoom certified" },
    ],
  },
  countLabel: "headsets",
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: headsets,
};

export const featuresData = {
  tag: "Key features",
  heading: "Plug in\n and take the call",
  highlightLast: 3,
  subhead: "What the Yealink wired headsets have in common.",
  data: [
    { icon: "Plug", title: "No pairing, no charging", description: "Powered by the PC or the phone, so the headset is ready whenever the call is." },
    { icon: "Headphones", title: "Mono or Dual", description: "Every model comes in a one-ear and a two-ear version." },
    { icon: "AudioLines", title: "35 mm speakers on UH models", description: "UH42, UH44 and UH46 use 35 mm speakers with dynamic EQ for calls and music." },
    { icon: "SlidersHorizontal", title: "Inline call control", description: "UH models have a control unit on the cable for answer, end, volume and mute." },
    { icon: "Ear", title: "Hearing protection", description: "UH models include Peak Block, AU G616 and daily noise exposure protection." },
    { icon: "MonitorCog", title: "Central management", description: "UH models are managed through Yealink USB Connect and Yealink Management Cloud Service." },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "Try it at your own desks\n before you buy anything",
  highlightLast: 4,
  subhead: "Procurement starts only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Requirements", text: "Users, roles, desk phones, softphones and how noisy each area is." },
    { title: "Demo units", text: "Headsets for your team to try on their own phones and PCs.", highlight: true },
    { title: "Proposal", text: "Model per user type, quantities and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Pairing, phone and softphone setup, busylights and firmware, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Yealink wired headsets\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is the difference between the UH42, UH44 and UH46?",
      answer: "The number of microphones and the extras. The UH42 has one microphone; the UH44 has two, a busylight, lift-to-mute and Teams and Zoom certification; the UH46 has three microphones and dual busylights.",
    },
    {
      question: "Can the YHS36 E2 be used with a PC?",
      answer: "No. It is an analog headset with a QD to RJ9 cable for Yealink IP phones. For a PC, choose the UH42, UH44 or UH46.",
    },
    {
      question: "Do the USB headsets work with Microsoft Teams and Zoom?",
      answer: "The UH44 is certified for both. All UH models are plug-and-play USB headsets for Windows and macOS; we confirm your platform before ordering.",
    },
    {
      question: "Why choose wired over wireless?",
      answer: "No batteries to charge, no pairing, and a lower cost per user. Wired suits fixed desks, contact centres and shared workstations.",
    },
    {
      question: "Can we try them before we buy?",
      answer: "Yes. We bring demo units to your office so your team can try the models on their own phones and PCs, and order only after you approve the proposal.",
    },
    {
      question: "Is GS IT an authorized Yealink partner in Dubai?",
      answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner for 2026. We supply genuine Yealink products with manufacturer warranty, and support them across the UAE.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Try Yealink headsets\n at your own desks",
  highlightLast: 4,
  image: `${IMG}/uh46/overview.webp`,
  steps: [
    "Tell us how many users, which phones and which softphone you use.",
    "We bring demo units for your team to try.",
    "You get a proposal per user type. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Yealink is a trademark of Yealink Network Technology Co., Ltd. Microsoft Teams and Zoom are trademarks of their respective owners.";
