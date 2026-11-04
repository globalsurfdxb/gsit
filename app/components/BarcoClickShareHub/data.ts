import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
   
 import { portfolioData } from "@/app/components/common/data";

export const bannerData = {
  badge: barcoBadge,
  crumbs: [{ label: "Barco", href: "/barco-partner-dubai" }, { label: "ClickShare Hub" }],
  tag: "ClickShare Hub range",
  heading: "Barco ClickShare Hub\nMicrosoft Teams Room System",
  highlightLast: 4,
  description:
    "ClickShare Hub turns a meeting room into a Microsoft Teams Room. Start the call with one tap on the Control Panel and share content wirelessly with the ClickShare Button. GS IT supplies, installs and supports Hub Core and Hub Pro.",
  backgroundImage: `/assets/images/clickshare-hub-images/room1.webp`,
  mobbanner: `/assets/images/clickshare-hub-images/room1.webp`,
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
};

export const overviewData = {
  tag: "What is ClickShare Hub",
  heading: "One room system for\nTeams calls and wireless sharing",
  highlightLast: 4,
  subhead:
    "ClickShare Hub is a modular room system built on Microsoft's Device Ecosystem Platform (MDEP). Each system has a base unit, a Control Panel and one or two ClickShare Buttons, and works with certified cameras, speakers and video bars.",
  data: [
    {
      variant: "photo",
      image: `/assets/images/clickshare-hub-images/buttontray.webp`,
      alt: "ClickShare Buttons on their tray",
      title: "Share with a Button",
      dim: "5th-gen Button with Wi-Fi 6E",
      text: [
        "Plug in the Button and press it to share. The USB-C DisplayPort connection needs no software or drivers, so guests can share too.",
      ],
    },
    {
      variant: "dark",
      big: "1 tap",
      title: "Start the meeting",
      dim: "From the ClickShare Control Panel",
      text: ["Scheduled Teams meetings start with a tap on the Control Panel. No laptop is needed to run the call."],
    },
    {
      variant: "light",
      title: "Works with any platform",
      dim: "Teams Room or bring your own device",
      text: [
        "Run Microsoft Teams on the room system, or connect a laptop wirelessly to run Zoom, Webex or Google Meet on the room's camera and audio.",
        "IT manages every room remotely from XMS Cloud.",
      ],
    },
  ],
};

export const modelsData = {
  tag: "Compare models",
  heading: "Two ClickShare Hub models,\nsized by room",
  highlightLast: 3,
  subhead:
    "Hub Core covers small meeting rooms with one display. Hub Pro adds a second Button and a second display for medium rooms.",
  data: [
    {
      media: "shot",
      image: `/assets/images/clickshare-hub-images/hubcore.webp`,
      alt: "ClickShare Hub Core base unit with one ClickShare Button",
      tag: "Small meeting rooms",
      title: "ClickShare Hub Core",
      points: ["One 5th-gen ClickShare Button", "One display, up to 5120 × 2160", "Wireless 4K content sharing"],
      fitLabel: "Best for",
      fit: "small meeting rooms standardising on Microsoft Teams.",
      link: { text: "View ClickShare Hub Core", href: '' },
    },
    {
      media: "shot",
      image: `/assets/images/clickshare-hub-images/hubpro.webp`,
      alt: "ClickShare Hub Pro base unit with two ClickShare Buttons",
      tag: "Medium-sized rooms",
      title: "ClickShare Hub Pro",
      points: ["Two 5th-gen ClickShare Buttons", "Dual display support", "Extra USB-C connections for larger setups"],
      fitLabel: "Best for",
      fit: "medium meeting rooms that need two displays.",
      link: { text: "View ClickShare Hub Pro", href: '' },
    },
  ],
};

export const compareData = {
  columns: [
    { label: "Hub Core", href: '' },
    { label: "Hub Pro", href: '' },
  ],
  rows: [
    { label: "Meeting room type", values: ["Small meeting rooms", "Medium-sized meeting rooms"] },
    { label: "ClickShare Buttons in the box", values: ["1 × Button 5th gen", "2 × Button 5th gen"] },
    { label: "Displays", values: ["1 (HDMI, up to 5120 × 2160)", "2 (HDMI-1 up to 5120 × 2160, HDMI-2 4K)"] },
    { label: "Dual display support", values: [false, true] },
    { label: "Wired video input", values: ["HDMI, 4K @30Hz", "HDMI, 4K @30Hz"] },
    { label: "Wireless", values: ["Wi-Fi 6E, Bluetooth 5.3", "Wi-Fi 6E, Bluetooth 5.3"] },
    { label: "Max. power draw", values: ["140 W", "160 W"] },
    { label: "Teams Rooms licence required", values: ["Yes", "Yes"] },
    { label: "Warranty", values: ["3 years standard", "3 years standard"] },
  ],
  note: "Specifications from Barco's ClickShare Hub Core and Hub Pro product pages, checked November 2026.",
};

export const featuresData = {
  tag: "Features",
  heading: "Built for hybrid meetings\nin every room",
  highlightLast: 3,
  subhead: "",
  columns: 3,
  data: [
    {
      image: `/assets/images/clickshare-hub-images/panel.webp`,
      alt: "ClickShare Control Panel with cable",
      title: "One-tap Control Panel",
      text: "Join scheduled meetings and control the room from a touch panel. Sold as a kit with the Hub.",
    },
    {
      image: `/assets/images/clickshare-hub-images/buttons.webp`,
      alt: "Two ClickShare Buttons",
      title: "Next-gen ClickShare Button",
      text: "Wi-Fi 6E for faster, more stable sharing, and a deliberate press so nobody shares by accident.",
    },
    {
      image: `/assets/images/clickshare-hub-images/room2.webp`,
      alt: "Team meeting with content on the room display",
      title: "Certified for Microsoft Teams",
      text: "Bundled with selected cameras, speakers or video bars, ClickShare Hub is part of a Microsoft Teams Rooms certified solution.",
    },
  ],
};

export const problemsData = {
  tag: "Problems and solutions",
  heading: "Where Teams rooms fall short,\nand how ClickShare Hub solves it",
  highlightLast: 6,
  subhead: "",
  problemLabel: "Problem",
  solutionLabel: "With ClickShare",
  data: [
    {
      problem: {
        title: "Starting the call takes a laptop",
        text: "Someone has to bring a laptop and connect it before the meeting can begin.",
      },
      solution: {
        title: "One tap on the Control Panel",
        text: "Scheduled Teams meetings start from the panel, with no laptop needed.",
      },
    },
    {
      problem: {
        title: "The room only works with Teams",
        text: "Client meetings on Zoom or Webex end up on a laptop's camera and microphone.",
      },
      solution: {
        title: "Bring your own meeting",
        text: "Connect a laptop wirelessly and run any platform on the room's camera and audio.",
      },
    },
    {
      problem: {
        title: "Guests can't share content",
        text: "Visitors need drivers, adapters or network access to present.",
      },
      solution: {
        title: "Plug in the Button and share",
        text: "The USB-C Button works with Windows, Mac and Linux, with no drivers or installers.",
      },
    },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "ClickShare Hub \n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Hub Core or Hub Pro?",
      answer:
        "Hub Core suits small rooms with one display. Hub Pro suits medium rooms, adds a second Button and supports two displays. We confirm the fit during the on-site demo.",
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
      question: "Which camera and speakers work with it?",
      answer:
        "ClickShare Hub works with certified video bars, cameras and speakers. Barco keeps a list of tested devices, and we recommend the right peripherals for each room.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Book a ClickShare Hub demo\nin your own meeting room",
  highlightLast: 5,
  image: `/assets/images/clickshare-hub-images/room2.webp`,
  steps: [
    "Tell us how many rooms and how they are used.",
    "We bring a working unit and demo it on your laptops.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: '' },
};

export const footNote = "Barco and ClickShare are trademarks of Barco NV.";
