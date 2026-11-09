import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import type { YealinkProductData } from "@/app/components/YealinkProduct/Index";
import { wirelessHeadsetProducts, wiredHeadsetProducts } from "@/app/components/YealinkProduct/products/headsets";
import { speakerphoneProducts } from "@/app/components/YealinkProduct/products/speakerphones";
import type { CataloguePhone } from "@/app/components/YealinkIpPhones/Sections/PhoneCatalogue";

const STORE = "/yealink/headset";
const SPEAKERPHONE_STORE = "/yealink/speakerphone";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "Headsets and speakerphones" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink Headsets and\nSpeakerphones in Dubai",
  highlightLast: 3,
  description:
    "Wireless and wired headsets for every desk, and portable speakerphones for small meetings. GS IT supplies, sets up and supports Yealink personal audio across the UAE.",
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
  heading: "Which Yealink device\n fits the job",
  highlightLast: 3,
  subhead: "Fifteen devices, three ways of working. Start with where the calls happen.",
  data: [
    {
      kicker: "On the move and hybrid",
      title: "Bluetooth headsets",
      text: "BH78, BH74, BH70, ZenOffice32 and BH71 connect to the PC by USB dongle and to the mobile by Bluetooth.",
      points: ["Active noise cancellation on BH78 and BH74", "Up to 38 hours talk (BH78)", "Mono or Dual on BH70 and ZenOffice32"],
      link: { text: "View the BH78 →", href: `${STORE}/bh78` },
    },
    {
      dark: true,
      kicker: "Fixed desks and contact centres",
      title: "Wired and DECT headsets",
      text: "UH42, UH44 and UH46 plug into the PC; YHS36 E2 into a Yealink phone; WH64 and WH68 add a touch-screen workstation.",
      points: ["No charging on wired models", "UH44 certified for Teams and Zoom", "DECT up to 185 m (WH64, WH68)"],
      link: { text: "View the UH44 →", href: `${STORE}/uh44` },
    },
    {
      kicker: "Small meetings and huddles",
      title: "Speakerphones",
      text: "SP96, SP92, CP900 and CP700 turn a laptop or phone into a hands-free conference unit.",
      points: ["Up to 5 m pickup (SP96)", "Daisy chain two SP96 units", "USB and Bluetooth on every model"],
      link: { text: "View the SP96 →", href: `${SPEAKERPHONE_STORE}/sp96` },
    },
  ],
};

// Catalogue cards come from the product registries: each product's `phoneListing` sets its card.
// The "Type" filter is the registry a product sits in; the "Features" filter is derived from its listing.
const toCards = (products: Record<string, YealinkProductData>, type: string, store = STORE): CataloguePhone[] =>
  Object.values(products)
    .filter((p) => p.phoneListing && !p.phoneListing.disable)
    .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
    .map((p) => {
      const l = p.phoneListing!;
      const features = [
        ...(l.features.includes("anc") ? ["anc"] : []),
        ...([l.series].flat().includes("mono") ? ["mono"] : []),
        ...(l.features.includes("hub") ? ["hub"] : []),
      ];
      return { tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${store}/${p.slug}`, pills: l.pills, bestFor: l.bestFor, series: type, features };
    });
const products: CataloguePhone[] = [
  ...toCards(wirelessHeadsetProducts, "wireless"),
  ...toCards(wiredHeadsetProducts, "wired"),
  ...toCards(speakerphoneProducts, "speakerphone", SPEAKERPHONE_STORE),
];

export const catalogueData = {
  tag: "Yealink personal audio",
  heading: "Headsets and\n speakerphones",
  highlightLast: 1,
  subhead: "Everything below is available through GS IT. Not sure which fits? Try them at your office.",
  filters: {
    seriesTitle: "Type",
    series: [
      { key: "wireless", label: "Wireless headsets" },
      { key: "wired", label: "Wired headsets" },
      { key: "speakerphone", label: "Speakerphones" },
    ],
    features: [
      { key: "anc", label: "Active noise cancellation" },
      { key: "mono", label: "Mono version" },
      { key: "hub", label: "Desk workstation" },
    ],
  },
  countLabel: "products",
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: products,
};

export const featuresData = {
  tag: "Key features",
  heading: "Personal audio\n for every call",
  highlightLast: 3,
  subhead: "What you get across the Yealink headset and speakerphone range. Model details are on each product page.",
  data: [
    { icon: "Bluetooth", title: "Bluetooth to the mobile", description: "Every wireless headset and speakerphone pairs with a mobile phone over Bluetooth." },
    { icon: "Usb", title: "USB for the PC", description: "USB dongles, cables or plugs connect every model except the YHS36 E2 (desk phones only) to a laptop or PC." },
    { icon: "AudioLines", title: "Clear voice pickup", description: "Multi-microphone arrays and noise reduction on headsets and speakerphones keep calls clean." },
    { icon: "Headphones", title: "Mono or Dual", description: "BH70, ZenOffice32, WH64 and all four wired headsets come in a one-ear version; BH71 is a one-ear earpiece." },
    { icon: "MonitorCog", title: "Central management", description: "Most models are managed through Yealink USB Connect and Yealink cloud management." },
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
    { title: "Demo units", text: "Headsets and speakerphones for your team to try on their own phones and PCs.", highlight: true },
    { title: "Proposal", text: "Model per user type, quantities and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Pairing, phone and softphone setup, busylights and firmware, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Yealink headsets and speakerphones\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which Yealink headsets have active noise cancellation?",
      answer: "The BH78 (adaptive ANC), BH74 (hybrid ANC) and WH68 Workstation (hybrid ANC). The other headsets reduce noise for the caller with their microphones, but do not have ANC.",
    },
    {
      question: "Wireless or wired: which should we choose?",
      answer: "Wireless for people who move around or take calls on their mobile. Wired for fixed desks, contact centres and shared workstations: no batteries, no pairing and a lower cost per user.",
    },
    {
      question: "Which headset works with our Yealink desk phones?",
      answer: "The YHS36 E2 plugs straight into Yealink IP phones with a QD to RJ9 cable. The WH64, WH68 and BH71 Workstation also connect to desk phones through their workstation.",
    },
    {
      question: "Which speakerphone fits a small meeting room?",
      answer: "The SP96: six microphones pick up voices up to 5 m away, and a second unit can be linked wirelessly for a longer table. For one or two people, the SP92, CP900 or CP700 is enough.",
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
  heading: "Try Yealink headsets\n and speakerphones at your office",
  highlightLast: 5,
  image: "/assets/images/yealink/speakerphones/sp96/overview.webp",
  steps: [
    "Tell us how many users, which phones and which softphone you use.",
    "We bring demo units for your team to try.",
    "You get a proposal per user type. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote =
  "Yealink is a trademark of Yealink Network Technology Co., Ltd. The Bluetooth word mark is owned by Bluetooth SIG, Inc. Microsoft Teams and Zoom are trademarks of their respective owners.";
