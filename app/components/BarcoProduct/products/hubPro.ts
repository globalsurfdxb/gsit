import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
import type { BarcoProductData } from "../Index";

const CDN = "/assets/images/barco"; 
const DEMO_URL = "/barco-product-demo";

export const hubProData: BarcoProductData = {
  productShot: true,
  bannerData: {
    badge: barcoBadge,
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "ClickShare Hub", href: "/barco-clickshare-hub" },
      { label: "Hub Pro" },
    ],
    tag: "ClickShare Hub · Medium-sized rooms",
    heading: "Barco ClickShare Hub Pro\nTeams Room System for Medium Rooms",
    highlightLast: 6,
    description:
      "Hub Pro is the premium ClickShare Hub. It adds dual display support, two 5th-gen ClickShare Buttons and extra connections, so medium rooms can show people and content on separate screens.",
    backgroundImage: `${CDN}/hubpro_hero.webp`,
    mobbanner: `${CDN}/hubpro_hero.webp`,
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
    heading: "Hub Pro\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Medium-sized meeting rooms" },
      { label: "Buttons included", value: "2", sub: "ClickShare Button 5th gen" },
      { label: "Display outputs", value: "2 × HDMI", sub: "Up to 5120 × 2160 and 4K" },
      { label: "Platform", value: "Microsoft Teams Rooms", sub: "Built on MDEP; licence required" },
    ],
    note: "See full specifications",
    noteHref: "#full-specs",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for the\nmedium Teams room",
    highlightLast: 3,
    subhead: "Everything in Hub Core, plus a second display and a second Button.",
    columns: 3,
    data: [
      {
        image: `/assets/images/clickshare-hub-images/room2.webp`,
        alt: "Meeting with content on the room display",
        title: "Dual display",
        text: "Show remote participants on one screen and content on the other, so nobody drops out of view during a presentation.",
      },
      {
        image: `/assets/images/clickshare-hub-images/buttons.webp`,
        alt: "Two ClickShare Buttons",
        title: "Two Buttons in the box",
        text: "Two 5th-gen Buttons with Wi-Fi 6E and USB-C DisplayPort, so two presenters are ready from the start.",
      },
      {
        image: `/assets/images/clickshare-hub-images/proback.webp`,
        alt: "Rear connections of the ClickShare Hub Pro",
        title: "Expanded connections",
        text: "Two HDMI outputs and extra USB-C ports for larger camera and audio setups, plus gigabit Ethernet.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the Hub Pro\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: {
          title: "Remote people disappear during slides",
          text: "With one screen, content pushes remote faces off the display.",
        },
        solution: { title: "People and content on separate screens", text: "Dual display keeps both in view." },
      },
      {
        problem: { title: "Only one presenter at a time", text: "Swapping presenters means passing one Button around." },
        solution: { title: "Two Buttons ready", text: "Two presenters can share without a handover." },
      },
      {
        problem: { title: "Larger rooms need more peripherals", text: "Medium rooms often need extra cameras or audio." },
        solution: { title: "More connections", text: "Extra USB-C ports support larger setups." },
      },
    ],
  },

  fullSpecsData: {
    id: "full-specs",
    tag: "Specifications",
    heading: "Hub Pro\nfull specifications",
    highlightLast: 2,
    subhead: "From Barco's Hub Pro product page, checked November 2026.",
    groups: [
      {
        title: "General",
        rows: [
          { label: "Model", value: ["ClickShare Hub Pro"] },
          { label: "Meeting room type", value: ["Medium-sized meeting rooms"] },
          { label: "Operating system", value: ["Android (Microsoft Device Ecosystem Platform, MDEP)"] },
          { label: "Microsoft Teams Rooms licence", value: ["Required"] },
          { label: "ClickShare Buttons", value: ["2 × ClickShare Button 5th generation"] },
          { label: "ClickShare App", value: ["Desktop"] },
          { label: "Management and reporting", value: ["XMS Cloud"] },
          { label: "Warranty", value: ["3 years standard"] },
        ],
      },
      {
        title: "Video and audio",
        rows: [
          {
            label: "Video outputs",
            value: [
              "HDMI-1: UW5K WUHD (5120 × 2160) @30Hz, HDMI 2.0",
              "HDMI-2: 4K UHD (3840 × 2160) @30Hz, HDMI 2.0",
              "eDP (Control Panel): HD (1280 × 800) @60Hz, DP 1.4",
            ],
          },
          { label: "Dual display", value: ["Supported"] },
          { label: "Video input", value: ["4K UHD (3840 × 2160) @30Hz, HDMI 2.0"] },
          { label: "Audio output", value: ["USB-A 2.0/3.0, USB-C 2.0/3.0, HDMI 2.0"] },
        ],
      },
      {
        title: "Wireless",
        rows: [
          { label: "Wireless protocol", value: ["IEEE 802.11 a/b/g/n/ac/ax/be; Bluetooth 5.3 (IEEE 802.15.1)"] },
          { label: "Frequency bands", value: ["2.4 GHz, 5 GHz and 6 GHz (DFS channels in selected countries)"] },
          { label: "Reach", value: ["Up to 30 m (100 ft) between Button and base unit"] },
          { label: "Network connection", value: ["LAN"] },
        ],
      },
      {
        title: "Connections",
        rows: [
          {
            label: "Back",
            value: [
              "1 × Ethernet LAN 1 Gbit",
              "1 × USB-C Power Delivery 3.1 EPR (power adapter)",
              "2 × HDMI 2.0 output",
              "2 × USB-C 2.0/3.0",
              "1 × USB-A 2.0/3.0",
              "1 × USB-C 2.0/3.0 device + USB-C DisplayPort output",
              "1 × USB-C 2.0 + USB-C DisplayPort output",
            ],
          },
          { label: "Front", value: ["1 × USB-C 2.0/3.0"] },
        ],
      },
      {
        title: "Physical and power",
        rows: [
          { label: "Dimensions (H × W × D)", value: ["37 × 180 × 180 mm"] },
          { label: "Weight", value: ["720 g"] },
          {
            label: "Power consumption",
            value: ["Operational: 160 W max", "Standby: under 7 W (ECO mode), under 0.5 W (Deep Sleep)"],
          },
          { label: "Power supply", value: ["External USB-C charger: 100 W (PD3.0 SPR) or 180 W (PD3.1 EPR)"] },
          { label: "Noise level", value: ["Max. 25 dBA below 30°C; max. 30 dBA above 30°C"] },
          { label: "Operating temperature", value: ["0°C to 40°C (max. 35°C at 3,000 m)"] },
          { label: "Storage temperature", value: ["−20°C to 60°C"] },
          { label: "Humidity", value: ["Operating: 0–85% RH; storage: 0–90% RH, non-condensing"] },
          { label: "Anti-theft", value: ["Kensington lock"] },
          { label: "Certifications", value: ["FCC / CE"] },
        ],
      },
      {
        title: "In the box",
        rows: [
          {
            label: "Box content",
            value: [
              "ClickShare Hub Pro base unit, 2 ClickShare Hub Buttons 5th gen, mounting disc, safety manual, quick setup guide",
            ],
          },
          {
            label: "Not included",
            value: [
              "ClickShare Control Panel, power cable and power cord (available as a Hub and Control Panel kit)",
            ],
          },
        ],
      },
    ],
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "Hub Pro \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Hub Pro or Hub Core?",
        answer:
          "Choose Hub Pro for medium rooms, two displays or two presenters. Hub Core covers small rooms with one display.",
      },
      {
        question: "Do we need a Microsoft Teams Rooms licence?",
        answer:
          "Yes. Barco lists a Microsoft Teams Rooms licence as a requirement for ClickShare Hub. We can include the licence in the proposal.",
      },
      {
        question: "Is the Control Panel included?",
        answer:
          "No. Barco's product package does not include the ClickShare Control Panel, power cable or power cord. Barco sells Hub and Control Panel kits, and we quote the complete set for each room.",
      },
      {
        question: "Can guests join Zoom or Webex meetings?",
        answer:
          "Yes. ClickShare Hub supports wireless bring-your-own-device, so a laptop can run Zoom, Webex, Google Meet or another platform on the room's camera, audio and display.",
      },
      {
        question: "Can we see a Hub Pro before buying?",
        answer: "Yes. We demo it in your own room. Hardware is ordered only after you approve the proposal.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a Hub Pro demo\nin your own meeting room",
    highlightLast: 5,
    image: `/assets/images/clickshare-hub-images/room2.webp`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
