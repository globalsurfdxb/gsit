import type { BarcoProductData } from "../Index";

const CDN = "https://cdn.gs-it.ae/images/products";
const HUB = `${CDN}/clickshare-hub`;
const DEMO_URL = "/barco-product-demo";

export const hubCoreData: BarcoProductData = {
  productShot: true,
  bannerData: {
    crumbs: [
      { label: "Barco", href: "/barco-partner-dubai" },
      { label: "ClickShare Hub", href: "/barco-clickshare-hub" },
      { label: "Hub Core" },
    ],
    tag: "ClickShare Hub · Small meeting rooms",
    heading: "Barco ClickShare Hub Core\nTeams Room System for Small Rooms",
    highlightLast: 6,
    description:
      "Hub Core gives a small meeting room the essentials of a Microsoft Teams Room: one-tap meetings from the Control Panel and wireless 4K sharing with the 5th-gen ClickShare Button.",
    backgroundImage: `${HUB}/hubcore_hero.webp`,
    mobbanner: `${HUB}/hubcore_hero.webp`,
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
    heading: "Hub Core\nkey specifications",
    highlightLast: 2,
    data: [
      { label: "Room type", value: "Small meeting rooms" },
      { label: "Buttons included", value: "1", sub: "ClickShare Button 5th gen" },
      { label: "Display output", value: "1 × HDMI", sub: "Up to 5120 × 2160 @30Hz" },
      { label: "Platform", value: "Microsoft Teams Rooms", sub: "Built on MDEP; licence required" },
    ],
    note: "See full specifications",
    noteHref: "#full-specs",
  },

  featuresData: {
    tag: "Features",
    heading: "Built for the\nsmall Teams room",
    highlightLast: 3,
    subhead: "Everything a small room needs to run Teams meetings and share content.",
    columns: 3,
    data: [
      {
        image: `/assets/images/clickshare-hub-images/panel.webp`,
        alt: "ClickShare Control Panel",
        title: "One-tap meetings",
        text: "Start scheduled Teams meetings with one tap on the ClickShare Control Panel, sold as a kit with the Hub.",
      },
      {
        image: `/assets/images/clickshare-hub-images/btnzoom.webp`,
        alt: "ClickShare Button 5th gen close-up",
        title: "4K wireless sharing",
        text: "The 5th-gen Button shares 4K content over Wi-Fi 6E. The USB-C DisplayPort connection needs no drivers, so guests can share too.",
      },
      {
        image: `/assets/images/clickshare-hub-images/coreback.webp`,
        alt: "Rear connections of the ClickShare Hub Core",
        title: "Room connections in one unit",
        text: "HDMI out and in, USB-A and USB-C for camera and audio, and gigabit Ethernet, in a 180 × 180 mm base unit.",
      },
    ],
  },

  problemsData: {
    tag: "Problems and solutions",
    heading: "What the Hub Core\nfixes in the room",
    highlightLast: 3,
    subhead: "",
    problemLabel: "Problem",
    solutionLabel: "With ClickShare",
    data: [
      {
        problem: { title: "Meetings start late", text: "Someone has to connect a laptop before every call." },
        solution: { title: "One tap to start", text: "Scheduled meetings start from the Control Panel." },
      },
      {
        problem: { title: "Client calls run on a laptop", text: "Zoom or Webex meetings can't use the room system." },
        solution: { title: "Wireless bring-your-own-device", text: "Run other platforms from a laptop on the room's AV." },
      },
      {
        problem: { title: "Guests can't present", text: "Visitors need adapters or software to share." },
        solution: { title: "Plug-and-play Button", text: "The USB-C Button shares with no drivers or installers." },
      },
    ],
  },

  fullSpecsData: {
    id: "full-specs",
    tag: "Specifications",
    heading: "Hub Core\nfull specifications",
    highlightLast: 2,
    subhead: "From Barco's Hub Core product page, checked November 2026.",
    groups: [
      {
        title: "General",
        rows: [
          { label: "Model", value: ["ClickShare Hub Core"] },
          { label: "Meeting room type", value: ["Small meeting rooms"] },
          { label: "Operating system", value: ["Android (Microsoft Device Ecosystem Platform, MDEP)"] },
          { label: "Microsoft Teams Rooms licence", value: ["Required"] },
          { label: "ClickShare Buttons", value: ["1 × ClickShare Button 5th generation"] },
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
              "HDMI: UW5K WUHD (5120 × 2160) @30Hz, HDMI 2.0",
              "eDP (Control Panel): HD (1280 × 800) @60Hz, DP 1.4",
            ],
          },
          { label: "Dual display", value: ["Not supported (single display)"] },
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
              "1 × HDMI 2.0 output",
              "1 × USB-A 2.0/3.0",
              "1 × USB-C 2.0/3.0",
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
            value: ["Operational: 140 W max", "Standby: under 7 W (ECO mode), under 0.5 W (Deep Sleep)"],
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
              "ClickShare Hub Core base unit, 1 ClickShare Hub Button 5th gen, mounting disc, safety manual, quick setup guide",
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
    heading: "Hub Core \n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Hub Core or Hub Pro?",
        answer:
          "Choose Hub Core for small rooms with one display. Hub Pro adds a second Button and a second display for medium rooms.",
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
        question: "Can we see a Hub Core before buying?",
        answer: "Yes. We demo it in your own room. Hardware is ordered only after you approve the proposal.",
      },
    ],
  },

  ctaData: {
    tag: "Get started",
    heading: "Book a Hub Core demo\nin your own meeting room",
    highlightLast: 5,
    image: `/assets/images/clickshare-hub-images/room1.webp`,
    steps: [
      "Tell us how many rooms and how they are used.",
      "We bring a working unit and demo it on your laptops.",
      "You get a per-room proposal. Nothing is ordered until you agree.",
    ],
    button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
  },

  footNote: "Barco and ClickShare are trademarks of Barco NV.",
};
