import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import { wirelessHeadsetProducts } from "@/app/components/YealinkProduct/products/headsets";
import type { CataloguePhone } from "@/app/components/YealinkIpPhones/Sections/PhoneCatalogue";

const IMG = "/assets/images/yealink/headsets";
const STORE = "/yealink/headset";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Wireless headsets" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Bluetooth Wireless\nHeadsets in Dubai",
  highlightLast: 3,
  description:
    "Bluetooth headsets for the office, home and travel, and DECT workstation headsets for the desk. GS IT supplies, sets up and supports Yealink headsets across the UAE.",
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
  heading: "Which wireless headset\n fits the job",
  highlightLast: 3,
  subhead: "Seven headsets, three kinds of user. Start with how noisy the room is and where the calls happen.",
  data: [
    {
      kicker: "Noise around you",
      title: "BH78 or BH74",
      text: "Stereo Bluetooth headsets with active noise cancellation for open offices, the commute and travel.",
      points: ["Adaptive ANC on BH78, hybrid ANC on BH74", "Up to 38 hours talk (BH78)", "PC and mobile connected at once"],
      link: { text: "View the BH78 →", href: `${STORE}/bh78` },
    },
    {
      dark: true,
      kicker: "Equipping the whole office",
      title: "ZenOffice32 or BH70",
      text: "Cost-efficient Bluetooth headsets in Mono or Dual for company-wide rollouts.",
      points: ["Up to 35 hours talk", "Busylight on both", "Mono or Dual"],
      link: { text: "View the ZenOffice32 →", href: `${STORE}/zenoffice32` },
    },
    {
      kicker: "Desk phone, PC and mobile",
      title: "WH64, WH68 or BH71 Workstation",
      text: "Headsets with a touch-screen workstation that brings every call to one place on the desk.",
      points: ["DECT up to 185 m (WH64, WH68)", "USB hub and speakerphone in the base", "BH71 Workstation adds a Qi phone charger"],
      link: { text: "View the WH68 Workstation →", href: `${STORE}/wh68-workstation` },
    },
  ],
};

// Catalogue cards come from the headset registry: each headset's `phoneListing` sets its card
const headsets: CataloguePhone[] = Object.values(wirelessHeadsetProducts)
  .filter((p) => p.phoneListing && !p.phoneListing.disable)
  .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
  .map((p) => {
    const l = p.phoneListing!;
    return { tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${STORE}/${p.slug}`, pills: l.pills, bestFor: l.bestFor, series: l.series, features: l.features };
  });

export const catalogueData = {
  tag: "Yealink wireless headsets",
  heading: "Bluetooth and DECT\n headsets",
  highlightLast: 1,
  subhead: "All seven are available through GS IT. Not sure which fits? Try them at your office.",
  filters: {
    seriesTitle: "Wearing style",
    series: [
      { key: "mono", label: "Mono (one ear)" },
      { key: "dual", label: "Dual (two ears)" },
    ],
    features: [
      { key: "anc", label: "Active noise cancellation" },
      { key: "hub", label: "Desk workstation" },
    ],
  },
  countLabel: "headsets",
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: headsets,
};

export const featuresData = {
  tag: "Key features",
  heading: "Built for\n a day of calls",
  highlightLast: 3,
  subhead: "What you get across the Yealink wireless range. Model details are on each product page.",
  data: [
    { icon: "Bluetooth", title: "Bluetooth to the mobile", description: "Every model pairs with a mobile phone over Bluetooth. BH70, BH74, BH78 and ZenOffice32 also include a BT51C USB dongle for the PC." },
    { icon: "Lightbulb", title: "Busylights", description: "BH70, BH74, BH78, ZenOffice32, WH64 and WH68 have a busylight that tells colleagues you are on a call." },
    { icon: "Usb", title: "USB-C with USB-A adapter", description: "The BT51C dongle comes with a USB-C/A adapter, so it fits newer and older PCs." },
    { icon: "MonitorCog", title: "Central management", description: "BH70, BH74, BH78 and ZenOffice32 are managed through Yealink USB Connect, the Yealink Connect app and Yealink cloud management." },
    { icon: "Ear", title: "Hearing protection", description: "BH70, BH74, BH78 and ZenOffice32 include Peak Block, AU G616 and daily noise exposure protection." },
    { icon: "MonitorSmartphone", title: "Desk workstations", description: "WH64, WH68 and BH71 Workstation add a touch-screen station with speakerphone and USB hub." },
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
  heading: "Yealink wireless headsets\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which Yealink wireless headsets have active noise cancellation?",
      answer: "The BH78 (adaptive ANC), BH74 (hybrid ANC) and WH68 Workstation (hybrid ANC). The BH70, ZenOffice32, BH71 and WH64 reduce noise for the caller with their microphones, but do not have ANC.",
    },
    {
      question: "Are these Bluetooth or DECT headsets?",
      answer: "The BH78, BH74, BH70, BH71 and ZenOffice32 are Bluetooth headsets. The WH64 and WH68 Workstation connect to their workstation over DECT and pair with a mobile over Bluetooth.",
    },
    {
      question: "Which one is best for a company-wide rollout?",
      answer: "The ZenOffice32, which Yealink designed for cost-efficient large-scale deployment, or the BH70. Both come in Mono or Dual with up to 35 hours of talk time.",
    },
    {
      question: "Will they work with our desk phones and softphone?",
      answer: "The BH and ZenOffice models connect to the PC through a USB dongle and to the mobile over Bluetooth. For desk phones, the WH64, WH68 and BH71 Workstation are the better fit. We confirm compatibility with your phones and platform before ordering.",
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
  image: `${IMG}/bh78/overview.webp`,
  steps: [
    "Tell us how many users, which phones and which softphone you use.",
    "We bring demo units for your team to try.",
    "You get a proposal per user type. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc.";
