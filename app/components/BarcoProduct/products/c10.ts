import type { BarcoProductData } from "../Index";
import { compareData as presentCompare } from "@/app/components/BarcoClickSharePresent/data";

const CDN = "https://cdn.gs-it.ae/images/products";
const DEMO_URL = "/barco-product-demo";
// TODO: the source HTML uses the CX-20 photo for the C-10; swap in a C-10 image when one is on the CDN
const HERO = `${CDN}/main-pro/cx-20.jpg`;

export const c10Data: BarcoProductData = {
  bannerData: {
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "Wireless presentation", href: "/barco-clickshare-wireless-presentation-system" },
      { label: "C-10" },
    ],
    tag: "ClickShare Present · Medium to large rooms",
    heading: "Barco ClickShare C-10\nWireless Presentation for Larger Rooms",
    highlightLast: 5,
    description:
      "The C-10 brings two sources to the screen at once and adds touchback, blackboarding and annotation, so medium and large rooms can present and work on content together.",
    backgroundImage: HERO,
    mobbanner: HERO,
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
    heading: "C-10\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Medium to large meeting rooms" },
      { label: "Buttons included", value: "1 or 2", sub: "Depends on the kit" },
      { label: "Sources on screen", value: "2", sub: "Side by side" },
      { label: "Interactivity", value: "Touchback, blackboarding, annotation" },
    ],
    note: "Specifications from Barco's ClickShare comparison, checked October 2026.",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for rooms where\npeople present together",
    highlightLast: 3,
    subhead: "Two sources on screen and interactive tools.",
    columns: 3,
    data: [
      {
        image: `${CDN}/c10/support-byod.jpg`,
        alt: "Presenters sharing from laptops to the display",
        title: "Share from any laptop",
        text: "Windows or Mac, staff or guest. Press the Button and share, with no downloads or training needed.",
      },
      {
        image: `${CDN}/c10/if.jpg`,
        alt: "Laptop sharing with the ClickShare Button",
        title: "Interactive features",
        text: "Touchback, annotation and blackboarding turn brainstorms and reviews into working sessions.",
      },
      {
        image: `${CDN}/c10/es.jpg`,
        alt: "Barco XMS Cloud management dashboard",
        title: "Managed and secure",
        text: "XMS Cloud lets IT manage, update and report on every unit remotely.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the C-10\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: { title: "One presenter at a time", text: "In larger rooms, handovers between presenters stall the meeting." },
        solution: { title: "Two sources side by side", text: "Two people share at once for comparisons and joint reviews." },
      },
      {
        problem: { title: "Passive audiences", text: "People watch slides instead of working on them." },
        solution: { title: "Annotate and blackboard", text: "The room marks up content together on the display." },
      },
      {
        problem: { title: "Cable clutter at a long table", text: "Long tables mean long cables and lost adapters." },
        solution: { title: "Wireless from every seat", text: "Each presenter shares from where they sit." },
      },
    ],
  },

  compareData: {
    tag: "Compare",
    heading: "Is the C-10\nthe right fit?",
    highlightLast: 3,
    subhead: "Huddle or small room? The C-5 may be enough.",
    // Same rows as the Present range page, with the C-10 column tinted
    table: { columns: presentCompare.columns, rows: presentCompare.rows, highlight: 1 },
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "C-10 \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "C-10 or C-5?",
        answer:
          "Choose the C-10 for medium to large rooms, two presenters at once, or touchback and annotation. The C-5 suits small rooms.",
      },
      {
        question: "How many Buttons come with the C-10?",
        answer: "Barco offers the C-10 with one or two Buttons. We recommend the count during the survey.",
      },
      {
        question: "Can it run video calls?",
        answer:
          "The C-10 is for in-room presenting. For calls on the room camera and audio, see the ClickShare Conference range.",
      },
      {
        question: "Can we see a C-10 before buying?",
        answer: "Yes. We demo it in your own room before anything is ordered.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a C-10 demo\nin your own meeting room",
    highlightLast: 5,
    image: HERO,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
