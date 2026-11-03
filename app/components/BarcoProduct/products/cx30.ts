import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
import type { BarcoProductData } from "../Index";
import { compareData as conferenceCompare } from "@/app/components/BarcoClickShareConference/data";

const CDN = "/assets/images/barco"; 

export const cx30Data: BarcoProductData = {
  bannerData: {
    badge: barcoBadge,
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "Wireless conferencing", href: "/barco-clickshare-wireless-conferencing-systems" },
      { label: "CX-30" },
    ],
    tag: "ClickShare Conference · Medium rooms",
    heading: "Barco ClickShare CX-30\nWireless Conferencing for Medium Rooms",
    highlightLast: 5,
    description:
      "The CX-30 ships with two Buttons and shows two sources side by side, so two people can present in the same call. Touchback, blackboarding and annotation make it a working room, not just a screen.",
    backgroundImage: `${CDN}/cx-30.jpg`,
    mobbanner: `${CDN}/cx-30.jpg`,
    buttons: [
      { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: '' },
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
    heading: "CX-30\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Medium-sized meeting spaces" },
      { label: "Buttons included", value: "2", sub: "Two presenters ready out of the box" },
      { label: "Sources on screen", value: "2", sub: "Side by side" },
      { label: "Interactivity", value: "Touchback, blackboarding, annotation" },
    ],
    note: "Specifications from Barco's ClickShare comparison, checked October 2026.",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for rooms where\neveryone contributes",
    highlightLast: 2,
    subhead: "Two Buttons in the box, two sources on screen.",
    data: [
      {
        image: `${CDN}/cx30/supports-both-byod-and-byom.jpg`,
        alt: "Team in a hybrid meeting with remote participants on screen",
        title: "BYOD and bring your own meeting",
        text: "Start the call on any platform from your laptop and switch platforms between meetings without touching the room setup.",
      },
      {
        image: `${CDN}/cx30/one-tap-meeting-join.jpg`,
        alt: "Hand pressing a lit ClickShare Button",
        title: "One-tap meeting join",
        text: "Join from your calendar with one tap, or connect as you walk in with PresentSense proximity detection.",
      },
      {
        image: `${CDN}/cx30/smart-meeting-flow.jpg`,
        alt: "Meeting in progress with content on the display",
        title: "Guided meeting flow",
        text: "The ClickShare app guides hosts and attendees. When the room is idle, the display shows room availability or signage.",
      },
      {
        image: `${CDN}/cx30/interactivity-features.jpg`,
        alt: "Presenter annotating shared content",
        title: "Interactivity",
        text: "Touchback lets you control your laptop from the touch display. Annotation and blackboarding let the room mark up content together.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the CX-30\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: {
          title: "Only one person can share",
          text: "Switching presenters means disconnecting and reconnecting in front of the room.",
        },
        solution: {
          title: "Two sources side by side",
          text: "Two people share at once, so comparisons and handovers happen without a pause.",
        },
      },
      {
        problem: {
          title: "Remote people drift off",
          text: "Remote attendees only watch; they can't see the discussion on the board.",
        },
        solution: {
          title: "Annotate and blackboard together",
          text: "The room marks up content live, and remote attendees see it in the call.",
        },
      },
      {
        problem: {
          title: "Setup takes the first ten minutes",
          text: "Cables, adapters and platform settings delay every meeting.",
        },
        solution: {
          title: "Join in one tap",
          text: "Calendar join and PresentSense connect the laptop to the room automatically.",
        },
      },
    ],
  },

  compareData: {
    tag: "Compare",
    heading: "Is the CX-30\nthe right fit?",
    highlightLast: 3,
    subhead: "Small room with one presenter? See the CX-20. Boardroom with two displays? See the CX-50 Gen 2.",
    // Same rows as the Conference range page, with the CX-30 column tinted
    table: { columns: conferenceCompare.columns, rows: conferenceCompare.rows, highlight: 1 },
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "CX-30 \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "CX-30 or CX-20?",
        answer:
          "Choose the CX-30 when two people need to share at once or you want touchback and annotation. The CX-20 suits small rooms with one presenter.",
      },
      {
        question: "CX-30 or CX-50 Gen 2?",
        answer:
          "The CX-50 Gen 2 adds dual-screen support, a wired room dock and switching between a Teams or Zoom Room system and BYOD. It is aimed at boardrooms.",
      },
      {
        question: "Does touchback need a touch display?",
        answer:
          "Yes. Touchback and annotation from the display need a touch-enabled screen. We check this during the room survey.",
      },
      {
        question: "Can we see a CX-30 before buying?",
        answer: "Yes. We demo it in your own room before anything is ordered.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a CX-30 demo\nin your own meeting room",
    highlightLast: 5,
    image: `${CDN}/cx-30.jpg`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: '' },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
