import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
 import { portfolioData } from "@/app/components/common/data";
import type { BarcoProductData } from "../Index";
import { compareData as conferenceCompare } from "@/app/components/BarcoClickShareConference/data";

const CDN = "/assets/images/barco"; 

export const cx20Data: BarcoProductData = {
  bannerData: {
    badge: barcoBadge,
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "Wireless conferencing", href: "/barco-clickshare-wireless-conferencing-systems" },
      { label: "CX-20" },
    ],
    tag: "ClickShare Conference · Small rooms",
    heading: "Barco ClickShare CX-20\nWireless Conferencing for Small Rooms",
    highlightLast: 5,
    description:
      "The CX-20 turns a huddle space or small room into a video meeting room. Plug in the Button, and your laptop's Teams, Zoom or Webex call runs on the room camera, microphones and display.",
    backgroundImage: `${CDN}/cx-20.jpg`,
    mobbanner: `${CDN}/cx-20.jpg`,
    buttons: [
      { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: '' },
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
    heading: "CX-20\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Small meeting spaces", sub: "Huddle spaces and small rooms" },
      { label: "Buttons included", value: "1" },
      { label: "Sources on screen", value: "1", sub: "One presenter at a time" },
      { label: "Conferencing", value: "Bring your own meeting", sub: "Any platform running on the laptop" },
    ],
    note: "Specifications from Barco's ClickShare comparison, checked October 2026.",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for the\nsmall room hybrid meeting",
    highlightLast: 4,
    subhead: "Everything below works with the Button or the ClickShare desktop app.",
    data: [
      {
        image: `${CDN}/cx20/easy-meeting-join.jpg`,
        alt: "Hand pressing the ClickShare Button",
        title: "Easy meeting join",
        text: "Join the scheduled meeting from your calendar in one click, or connect automatically as you walk in with PresentSense proximity detection.",
      },
      {
        image: `${CDN}/cx20/smart-meeting-flow.jpg`,
        alt: "ClickShare welcome screen on the room display",
        title: "Guided meeting flow",
        text: "The ClickShare app guides hosts and attendees through starting, sharing and ending a meeting. When the room is idle, the display shows signage.",
      },
      {
        image: `${CDN}/cx20/eliminating-cable-clutter.jpg`,
        alt: "Small meeting room with no cables on the table",
        title: "No cables on the table",
        text: "The base unit holds the display, camera, audio and power connections behind the screen, so the table stays clear.",
      },
      {
        image: `${CDN}/cx20/efficient-content-sharing.jpg`,
        alt: "Team sharing content during a hybrid meeting",
        title: "Share content and see people",
        text: "Conference View keeps remote participants visible while you present, and XMS Cloud gives IT remote management of every unit.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the CX-20\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: {
          title: "Fussy room connections",
          text: "Every meeting starts with someone hunting for the right cable or USB hub.",
        },
        solution: {
          title: "One Button connects everything",
          text: "The Button links the laptop to the room camera, audio and display wirelessly.",
        },
      },
      {
        problem: {
          title: "Platform compatibility issues",
          text: "The room system only joins one platform, so client calls run on a laptop.",
        },
        solution: {
          title: "Any platform, room-quality AV",
          text: "The call stays on the laptop's own platform and uses the room's camera and audio.",
        },
      },
      {
        problem: {
          title: "Learning every room's setup",
          text: "Each room is wired differently, so people avoid the ones they don't know.",
        },
        solution: {
          title: "Same experience in every room",
          text: "Plug in, press, share. It works the same in every ClickShare room.",
        },
      },
    ],
  },

  compareData: {
    tag: "Compare",
    heading: "Is the CX-20\nthe right fit?",
    highlightLast: 3,
    subhead: "Step up to the CX-30 for two sources and interactivity, or the CX-50 Gen 2 for boardrooms.",
    // Same rows as the Conference range page, with the CX-20 column tinted
    table: { columns: conferenceCompare.columns, rows: conferenceCompare.rows, highlight: 0 },
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "CX-20 \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is the CX-20 enough for a meeting room?",
        answer:
          "For huddle spaces and small rooms, yes. If two people need to share at once, or you want touchback and annotation, choose the CX-30.",
      },
      {
        question: "What else does the room need?",
        answer: "A display, plus a USB camera and audio or a video bar. We check what you already have during the survey.",
      },
      {
        question: "Does it work with Teams and Zoom?",
        answer: "Yes. The meeting runs on your laptop, so it works with Teams, Zoom, Webex and other platforms.",
      },
      {
        question: "Can we see a CX-20 before buying?",
        answer: "Yes. We demo it in your own room. Hardware is ordered only after you approve the proposal.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a CX-20 demo\nin your own meeting room",
    highlightLast: 5,
    image: `${CDN}/cx-20.jpg`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: '' },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
