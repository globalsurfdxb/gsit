import type { BarcoProductData } from "../Index";
import { compareData as conferenceCompare } from "@/app/components/BarcoClickShareConference/data";

const CDN = "https://cdn.gs-it.ae/images/products";
const DEMO_URL = "/barco-product-demo";

export const cx50Data: BarcoProductData = {
  bannerData: {
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "Wireless conferencing", href: "/barco-clickshare-wireless-conferencing-systems" },
      { label: "CX-50 Gen 2" },
    ],
    tag: "ClickShare Conference · Boardrooms",
    heading: "Barco ClickShare CX-50 Gen 2\nWireless Conferencing for Boardrooms",
    highlightLast: 4,
    description:
      "The CX-50 Gen 2 is Barco's top ClickShare Conference model. It drives two displays, adds a wired room dock, and switches between an installed Teams or Zoom Room system and bring-your-own-meeting.",
    backgroundImage: `${CDN}/main-pro/cx-50.jpg`,
    mobbanner: `${CDN}/main-pro/cx-50.jpg`,
    buttons: [
      { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
      { text: "Contact us", icon: "", bgButton: "bg-white", dark: false, href: "/contact-it-services-dubai" },
    ],
    points: [
      { value: "13+ years", desc: "delivering IT and AV in the UAE" },
      { value: "1,500+", desc: "clients served" },
      { value: "150+", desc: "in-house specialists" },
      { value: "4.8/5", desc: "Google rating" },
    ],
  },

  specsData: {
    tag: "At a glance",
    heading: "CX-50 Gen 2\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Boardrooms and high-impact spaces" },
      { label: "Buttons included", value: "2", sub: "Plus wired room dock" },
      { label: "Sources on screen", value: "2", sub: "Dual-screen support" },
      { label: "Room integration", value: "Room system and BYOD switching", sub: "Teams Rooms or Zoom Rooms" },
    ],
    note: "Specifications from Barco's ClickShare comparison, checked October 2026.",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for the\nboardroom",
    highlightLast: 1,
    subhead: "Every CX-30 feature, plus dual screen, a wired room dock and room-system integration.",
    data: [
      {
        image: `${CDN}/cx50/excellent-wireless-conferencing.jpg`,
        alt: "Video call on the boardroom display",
        title: "Wireless conferencing",
        text: "Plug in the Button and run the call on the room camera, microphones and displays. Wired input over USB-C, or HDMI via a converter, is there as a backup.",
      },
      {
        image: `${CDN}/cx50/smart-meeting-flows.jpg`,
        alt: "Lounge meeting area with content on screen",
        title: "Smart meeting flows",
        text: "Room availability, PresentSense and host flows guide people from walking in to wrapping up.",
      },
      {
        image: `${CDN}/cx50/content-sharing.jpg`,
        alt: "Boardroom with content shared to the display",
        title: "Dual-screen content sharing",
        text: "Show people on one display and content on the other, so remote participants never drop off the screen.",
      },
      {
        image: `${CDN}/cx50/interactivity-features.jpg`,
        alt: "Board discussion around shared content",
        title: "Interactivity",
        text: "Touchback, annotation and blackboarding keep boardroom discussions on the shared content.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the CX-50 Gen 2\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: {
          title: "Remote attendees lose the room",
          text: "In a large room, remote participants can't see who is speaking once slides appear.",
        },
        solution: {
          title: "People and content on separate screens",
          text: "Dual-screen support keeps faces on one display and content on the other.",
        },
      },
      {
        problem: {
          title: "The room system and laptops compete",
          text: "A Teams Room handles internal calls, but client calls on Zoom or Webex need a laptop.",
        },
        solution: {
          title: "Switch between room system and BYOD",
          text: "The CX-50 Gen 2 moves between the installed room system and a laptop's meeting.",
        },
      },
      {
        problem: {
          title: "Wireless isn't allowed for every source",
          text: "Some devices or policies need a wired connection.",
        },
        solution: {
          title: "Wired input and room dock",
          text: "A wired room dock and USB-C or HDMI input cover the cases wireless can't.",
        },
      },
    ],
  },

  compareData: {
    tag: "Compare",
    heading: "Is the CX-50 Gen 2\nthe right fit?",
    highlightLast: 3,
    subhead: "Medium room? See the CX-30. Small room? See the CX-20.",
    // Same rows as the Conference range page, with the CX-50 column tinted
    table: { columns: conferenceCompare.columns, rows: conferenceCompare.rows, highlight: 2 },
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "CX-50 Gen 2 \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What does Gen 2 mean?",
        answer:
          "Barco now lists the CX-50 as CX-50 Gen 2. Its comparison table includes dual-screen support, a wired room dock and room-system/BYOD switching.",
      },
      {
        question: "CX-50 Gen 2 or CX-30?",
        answer:
          "Choose the CX-50 Gen 2 for boardrooms, two displays, a wired fallback or an existing Teams/Zoom Room. The CX-30 covers medium rooms.",
      },
      {
        question: "Does it replace our Teams Room?",
        answer: "No. It works alongside it, switching between the room system and a laptop's meeting on another platform.",
      },
      {
        question: "Can we see a CX-50 Gen 2 before buying?",
        answer: "Yes. We demo it in your own room before anything is ordered.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a CX-50 Gen 2 demo\nin your own meeting room",
    highlightLast: 5,
    image: `${CDN}/main-pro/cx-50.jpg`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
