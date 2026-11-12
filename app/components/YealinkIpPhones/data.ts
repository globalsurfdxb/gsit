import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";
import { ipPhoneProducts } from "@/app/components/YealinkProduct/products/ip-phones";
import type { CataloguePhone } from "./Sections/PhoneCatalogue";

const IMG = "/assets/images/yealink/ip-phones";
const STORE = "/yealink/ip-phone";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  crumbs: [{ label: "Yealink", href: "/yealink-partner-dubai" }, { label: "IP phones" }],
  tag: "Yealink Gold Video Conferencing Partner",
  heading: "Yealink IP Phones\nin Dubai",
  highlightLast: 2,
  description:
    "The new Yealink T8 and T7 series desk phones, the Wi-Fi SIP-T31W and ruggedized DECT, for executives, everyday desks and busy sites. GS IT supplies, configures and supports them on your phone system.",
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
  tag: "Choose by user",
  heading: "Which Yealink phone\n fits each desk",
  highlightLast: 3,
  subhead:
    "Most offices mix two or three models: a premium phone for executives, a standard phone for every desk, and cordless handsets for people who move.",
  data: [
    {
      kicker: "Executives and assistants",
      title: "T88 and T87W",
      text: "Android 13 or 7-inch touch phones with Wi-Fi 6 and Bluetooth. The SIP-T88V Pro adds a 5 MP camera; the T88W Pro adds a Bluetooth handset.",
      points: ["7-inch adjustable touch screens", "Up to 16 VoIP accounts", "Up to three expansion modules"],
      link: { text: "View the SIP-T88V Pro →", href: `${STORE}/sip-t88v-pro` },
    },
    {
      dark: true,
      kicker: "Every desk",
      title: "T7 series and T85W",
      text: "Slim colour-screen SIP phones with Ultra-HD voice and TEE encryption. W models have Wi-Fi 6 and Bluetooth built in; U models add them by USB dongle.",
      points: ["2.8 to 7-inch screens", "Unified firmware across T7X and T8X", "Gigabit PoE"],
      link: { text: "View the SIP-T74W →", href: `${STORE}/sip-t74w` },
    },
    {
      kicker: "Mobile and harsh sites",
      title: "DECT and Wi-Fi",
      text: "The W79P Pro DECT system and W59R Pro handset are IP67 rugged, with safety alarms. The SIP-T31W adds a phone anywhere there is Wi-Fi.",
      points: ["IP67 handsets, 2 m drop", "Up to 10 handsets per base", "Man-down and no-movement alarms"],
      link: { text: "View the W79P Pro →", href: `${STORE}/w79p-pro` },
    },
  ],
};

// Catalogue cards come from the IP phone registry: each phone's `phoneListing` sets its card
const phones: CataloguePhone[] = Object.values(ipPhoneProducts)
  .filter((p) => p.phoneListing && !p.phoneListing.disable)
  .sort((a, b) => a.phoneListing!.order - b.phoneListing!.order)
  .map((p) => {
    const l = p.phoneListing!;
    return { tag: l.tag, title: p.name, text: l.text, image: p.image, href: `${STORE}/${p.slug}`, pills: l.pills, bestFor: l.bestFor, series: l.series, features: l.features };
  });

export const catalogueData = {
  tag: "New in the Yealink range",
  heading: "New Yealink\n IP phones",
  highlightLast: 2,
  subhead: "Phones Yealink has launched most recently. Not sure which fits? We help you choose per user type.",
  filters: {
    series: [
      { key: "t8", label: "T8 series" },
      { key: "t7", label: "T7 series" },
      { key: "t3", label: "T3 series" },
      { key: "dect", label: "DECT" },
    ],
    features: [
      { key: "touch", label: "Touch screen" },
      { key: "wifi", label: "Built-in Wi-Fi" },
      { key: "bt", label: "Built-in Bluetooth" },
      { key: "cordless", label: "Cordless handset" },
    ],
  },
  empty: { text: "No product matches these filters.", link: "Ask us", href: CONTACT_URL },
  data: phones,
};

// Established range: linked where a product page is planned, otherwise "Ask for availability"
const R = `${IMG}/range`;
export const rangeData = {
  tag: "Current range",
  heading: "More Yealink IP phones\n supplied by GS IT",
  highlightLast: 4,
  subhead: "The established T5, T4, T3 and T2 series and the VP59 video phone, for adding to existing deployments.",
  linkLabel: "View product",
  askLabel: "Ask for availability",
  data: [
    { title: "Yealink VP59", text: "Flagship smart video phone", image: `${R}/t58a.png`, href: `${STORE}/vp59` },
    { title: "Yealink SIP-T58W (Pro) with Camera", text: "Elite video desk phone", image: `${R}/t58w-pro-camera.png`, href: `${STORE}/sip-t58w-with-camera` },
    { title: "Yealink SIP-T58W (Pro)", text: "Elite desk phone", image: `${R}/t58w-pro.png`, href: `${STORE}/t58w-pro` },
    { title: "Yealink SIP-T58A with Camera", text: "Smart video phone", image: `${R}/t58a-camera.png` },
    { title: "Yealink SIP-T58A", text: "Smart business phone", image: `${R}/t58a.png` },
    { title: "Yealink SIP-T57W", text: "Prime business phone", image: `${R}/t57w.png` },
    { title: "Yealink SIP-T54W", text: "Prime business phone", image: `${R}/t54w.png` },
    { title: "Yealink SIP-T53W", text: "Prime business phone", image: `${R}/t53w.png` },
    { title: "Yealink SIP-T53", text: "Prime business phone", image: `${R}/t53.png` },
    { title: "Yealink SIP-T48U", text: "Advanced SIP office phone", image: `${R}/t48u.png` },
    { title: "Yealink SIP-T46U", text: "SIP office phone", image: `${R}/t46u.png` },
    { title: "Yealink SIP-T43U", text: "Feature-rich SIP office phone", image: `${R}/t43u.png`, href: `${STORE}/sip-t43u` },
    { title: "Yealink SIP-T42U", text: "SIP office phone", image: `${R}/t42u.png` },
    { title: "Yealink SIP-T48S", text: "Touch screen SIP phone", image: `${R}/t48s.png`, href: `${STORE}/sip-t48s` },
    { title: "Yealink SIP-T46S", text: "Colour screen SIP phone", image: `${R}/t46s.png`, href: `${STORE}/sip-t46s` },
    { title: "Yealink SIP-T42S", text: "SIP office phone", image: `${R}/t42s.png` },
    { title: "Yealink SIP-T41S", text: "SIP office phone", image: `${R}/t41s.png` },
    { title: "Yealink SIP-T33G", text: "Colour screen entry phone", image: `${R}/t33g.png`, href: `${STORE}/sip-t33g` },
    { title: "Yealink SIP-T33P", text: "Colour screen entry phone", image: `${R}/t33p.png` },
    { title: "Yealink SIP-T31G", text: "Dual-line entry phone", image: `${R}/t31g.png`, href: `${STORE}/sip-t31g` },
    { title: "Yealink SIP-T31P", text: "Dual-line entry phone", image: `${R}/t31p.png`, href: `${STORE}/sip-t31p` },
    { title: "Yealink SIP-T31", text: "Dual-line entry phone", image: `${R}/t31.png` },
    { title: "Yealink SIP-T30P", text: "Single-line entry phone", image: `${R}/t30p.png` },
    { title: "Yealink SIP-T30", text: "Single-line entry phone", image: `${R}/t30.png` },
    { title: "Yealink SIP-T23P", text: "Entry-level phone", image: `${R}/t23p.png` },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Clear calls,\n secure by design",
  highlightLast: 3,
  subhead: "What the new Yealink phones have in common, from the SIP-T31W to the SIP-T88V Pro.",
  data: [
    { icon: "AudioLines", title: "HD and Ultra-HD voice", description: "Yealink Optimal HD Voice with Acoustic Shield, and AI noise cancellation on the T7X and T8X phones." },
    { icon: "Lock", title: "TEE hardware encryption", description: "T7 and T8 phones store data in a Trusted Execution Environment, with dual firmware images against failed upgrades." },
    { icon: "Wifi", title: "Wi-Fi 6 and Bluetooth", description: "W models have dual-band Wi-Fi 6 and Bluetooth 5.0 built in, for headsets and desks without cabling." },
    { icon: "Monitor", title: "Large, adjustable screens", description: "From a 2.8-inch colour display to 7-inch adjustable touch screens." },
    { icon: "Cable", title: "Gigabit PoE", description: "Dual-port Gigabit Ethernet with PoE on the T7 and T8 series: one cable to the desk." },
    { icon: "MonitorCog", title: "Zero-touch deployment", description: "Yealink RPS zero-touch provisioning and unified firmware across the T7X and T8X range." },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "Try it on your phone system\n before you buy anything",
  highlightLast: 4,
  subhead: "Procurement starts only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Requirements", text: "Users, roles, phone system, network, PoE and cabling at each desk." },
    { title: "On-site demo", text: "Sample phones registered to your own phone system.", highlight: true },
    { title: "Proposal", text: "Phone model per user type, scope and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Provisioning, line keys, directories and network, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Yealink IP phones\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which Yealink phones work with our phone system?",
      answer: "Yealink desk phones are SIP phones, so they register to standard SIP IP PBX and cloud phone systems. We confirm compatibility with your platform and firmware before ordering.",
    },
    {
      question: "What is the difference between W and U models?",
      answer: "W models, such as the SIP-T74W and SIP-T73W, have Wi-Fi 6 and Bluetooth built in. U models, such as the SIP-T74U and SIP-T73U, add Wi-Fi and Bluetooth through Yealink USB dongles.",
    },
    {
      question: "Which Yealink phone has a camera?",
      answer: "Among the new phones, the SIP-T88V Pro, with a built-in 5 MP camera and privacy shutter. The VP59 and SIP-T58W (Pro) with Camera are also available.",
    },
    {
      question: "What do you recommend for warehouses and factories?",
      answer: "The W79P Pro DECT system with IP67 W59R Pro handsets, which survive 2 m drops and include man-down and no-movement alarms.",
    },
    {
      question: "Do you configure the phones?",
      answer: "Yes. We provision the phones on your phone system, set up line keys and directories, and support them after go-live.",
    },
    {
      question: "Is GS IT an authorized Yealink partner in Dubai?",
      answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner for 2026. We supply genuine Yealink products with manufacturer warranty, and install and support them across the UAE.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Try Yealink phones\n on your own phone system",
  highlightLast: 5,
  image: `${IMG}/sip-t88v-pro/overview.webp`,
  steps: [
    "Tell us how many users and which phone system you use.",
    "We register sample phones to your system so your team can try them.",
    "You get a proposal per user type. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Yealink is a trademark of Yealink Network Technology Co., Ltd. Android is a trademark of Google LLC.";
