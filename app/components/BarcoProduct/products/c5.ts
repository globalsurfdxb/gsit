import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
import type { BarcoProductData } from "../Index";
 import { portfolioData } from "@/app/components/common/data";
import { compareData as presentCompare } from "@/app/components/BarcoClickSharePresent/data";

const CDN = "/assets/images/barco";
const DEMO_URL = "/barco-product-demo";

export const c5Data: BarcoProductData = {
  bannerData: {
    badge: barcoBadge,
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "Wireless presentation", href: "/barco-clickshare-wireless-presentation-system" },
      { label: "C-5" },
    ],
    tag: "ClickShare Present · Huddle and small rooms",
    heading: "Barco ClickShare C-5\nWireless Presentation for Small Rooms",
    highlightLast: 5,
    description:
      "The C-5 is the entry point to ClickShare. It connects laptops, phones and tablets to the room display wirelessly, so any small room becomes a sharing space.",
    backgroundImage: `${CDN}/c-5.jpg`,
    mobbanner: `${CDN}/c-5.jpg`,
    buttons: [
      { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
      { text: "Contact us", icon: "", bgButton: "bg-white", dark: false, href: "/contact-it-services-dubai" },
    ], 
    points: [
                  { value: `${portfolioData.years}+ years`, desc: "delivering IT and AV in the UAE" },
                  { value: `${portfolioData.clients}+`, desc: "clients served" },
                  { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
                  { value: `${portfolioData.google_score}`, desc: "Google rating" },
            ],
  },

  specsData: {
    tag: "At a glance",
    heading: "C-5\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Huddle and small meeting rooms" },
      { label: "Buttons included", value: "None", sub: "Share from the app, or add a Button" },
      { label: "Sources on screen", value: "1", sub: "One presenter at a time" },
      { label: "Management", value: "Barco XMS Cloud", sub: "Remote updates and analytics" },
    ],
    note: "Specifications from Barco's ClickShare comparison, checked October 2026.",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for\nhuddle spaces",
    highlightLast: 2,
    subhead: "The simplest way to add wireless sharing to a small room.",
    columns: 3,
    data: [
      {
        image: `${CDN}/c5/byod.jpg`,
        alt: "Person sharing from a phone to the room display",
        title: "Share from any device",
        text: "Share from Windows or Mac laptops with the ClickShare app, or from phones and tablets by screen mirroring. Add a ClickShare Button for one-click sharing.",
      },
      {
        image: `${CDN}/c5/ce.jpg`,
        alt: "Small meeting with content on the display",
        title: "Easy collaboration",
        text: "Choose to share a single window or the whole screen, and keep notes private on your own device.",
      },
      {
        image: `${CDN}/c5/es.jpg`,
        alt: "Barco XMS Cloud management dashboard",
        title: "Managed and secure",
        text: "XMS Cloud lets IT update, monitor and report on every unit remotely. When idle, the display shows room availability or signage.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the C-5\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: { title: "Confusing cable setups", text: "Small rooms collect adapters and loose HDMI cables." },
        solution: { title: "Wireless from the app", text: "The ClickShare app shares to the display with no cable." },
      },
      {
        problem: { title: "Only laptops can present", text: "Phones and tablets can't connect to the screen." },
        solution: { title: "Phones and tablets too", text: "Mirror from mobile devices as well as laptops." },
      },
      {
        problem: { title: "No view of how rooms are used", text: "IT can't see which rooms work or need updates." },
        solution: { title: "Managed from the cloud", text: "XMS Cloud handles updates and usage reporting remotely." },
      },
    ],
  },

  compareData: {
    tag: "Compare",
    heading: "Is the C-5\nthe right fit?",
    highlightLast: 3,
    subhead: "Medium or large room, or two presenters at once? See the C-10.",
    // Same rows as the Present range page, with the C-5 column tinted
    table: { columns: presentCompare.columns, rows: presentCompare.rows, highlight: 0 },
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "C-5 \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does the C-5 come with a Button?",
        answer: "No. Barco ships the C-5 without a Button. You share from the ClickShare app, or add a Button separately.",
      },
      {
        question: "C-5 or C-10?",
        answer:
          "The C-5 suits huddle and small rooms with one presenter. The C-10 shows two sources and adds touchback and annotation for medium to large rooms.",
      },
      {
        question: "Can it run video calls?",
        answer:
          "The C-5 is for in-room presenting. For calls on the room camera and audio, see the ClickShare Conference range.",
      },
      {
        question: "Can we see a C-5 before buying?",
        answer: "Yes. We demo it in your own room before anything is ordered.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a C-5 demo\nin your own meeting room",
    highlightLast: 5,
    image: `${CDN}/c-5.jpg`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
