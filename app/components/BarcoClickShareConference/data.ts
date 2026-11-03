import { barcoBadge } from "@/app/components/BarcoPartnerDubai/data";
const CDN = "/assets/images/barco"; 
const CX20_URL = "/barco/wireless-conferencing/clickshare-cx-20";
const CX30_URL = "/barco/wireless-conferencing/clickshare-cx-30";
const CX50_URL = "/barco/wireless-conferencing/clickshare-cx-50";
const DEMO_URL = "/barco-product-demo";
export const bannerData = {
  badge: barcoBadge,
  crumbs: [{ label: "Barco", href: "/barco-partner-dubai" }, { label: "Wireless conferencing" }],
  tag: "ClickShare Conference range",
  heading: "Barco ClickShare\nWireless Conferencing System",
  highlightLast: 3,
  description:
    "ClickShare Conference lets anyone start a Teams, Zoom or Webex call on their own laptop and run it through the room camera, microphones and display. GS IT supplies, installs and supports the CX-20, CX-30 and CX-50.",
  backgroundImage: `${CDN}/wcs.jpg`,
  mobbanner: `${CDN}/wcs.jpg`,
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
};

export const overviewData = {
  tag: "How ClickShare Conference works",
  heading: "Bring your own meeting,\n use the room's AV",
  highlightLast:4,
  subhead:
    "Plug in the Button and the laptop picks up the room camera, microphones, speakers and display. The call stays on whatever platform the organiser uses.",
  data: [
    {
      variant: "photo",
      image: `${CDN}/efficient-content-sharing.jpg`,
      alt: "Hybrid meeting with remote participants on the room display",
      title: "Any conferencing platform",
      dim: "Teams, Zoom, Webex and others",
      text: ["The call runs on the laptop, so visitors can join meetings on their own company's platform."],
    },
    {
      variant: "dark",
      big: "1 Button",
      title: "Room AV in one click",
      dim: "Camera, mics, speakers, display",
      text: ["The Button connects the laptop to the room peripherals wirelessly. No USB hub on the table."],
    },
    {
      variant: "light",
      title: "Guided meetings",
      dim: "Calendar join and meeting flows",
      text: [
        "ClickShare joins scheduled meetings from the calendar and guides hosts through starting and sharing.",
        "Conference View keeps remote participants visible while content is shared.",
      ],
    },
  ],
};

export const modelsData = {
  tag: "Compare models",
  heading: "Three ClickShare Conference models,\nfrom huddle room to boardroom",
  highlightLast: 5,
  subhead: "Each step up adds Buttons, simultaneous sources and room integration.",
  data: [
    {
      media: "shot",
      image: `${CDN}/cx-20.jpg`,
      alt: "ClickShare CX-20 base unit with one Button",
      tag: "Small meeting spaces",
      title: "ClickShare CX-20",
      points: [
        "One Button, one source on screen",
        "Bring-your-own-meeting on the room camera and audio",
        "Calendar join and meeting flows",
      ],
      fitLabel: "Best for",
      fit: "huddle spaces and small rooms.",
      link: { text: "View ClickShare CX-20", href: CX20_URL },
    },
    {
      media: "shot",
      image: `${CDN}/cx-30.jpg`,
      alt: "ClickShare CX-30 base unit with two Buttons",
      tag: "Medium-sized spaces",
      title: "ClickShare CX-30",
      points: [
        "Two Buttons, two sources on screen",
        "Touchback, blackboarding and annotation",
        "Bring-your-own-meeting on any platform",
      ],
      fitLabel: "Best for",
      fit: "medium meeting rooms where several people contribute.",
      link: { text: "View ClickShare CX-30", href: CX30_URL },
    },
    {
      media: "shot",
      image: `${CDN}/cx-50.jpg`,
      alt: "ClickShare CX-50 Gen 2 base unit with two Buttons and room dock",
      tag: "Boardrooms",
      title: "ClickShare CX-50 Gen 2",
      points: [
        "Dual screen: people and content on separate displays",
        "Wired room dock and wired video input",
        "Switches between a Teams or Zoom Room system and BYOD",
      ],
      fitLabel: "Best for",
      fit: "boardrooms and high-impact meeting spaces.",
      link: { text: "View ClickShare CX-50 Gen 2", href: CX50_URL },
    },
  ],
};

export const compareData = {
  columns: [
    { label: "CX-20", href: CX20_URL },
    { label: "CX-30", href: CX30_URL },
    { label: "CX-50 Gen 2", href: CX50_URL },
  ],
  rows: [
    {
      label: "Meeting room type",
      values: ["Small meeting spaces", "Medium-sized meeting spaces", "High-impact spaces and boardrooms"],
    },
    { label: "Buttons included", values: ["1", "2", "2"] },
    { label: "Sources on screen at once", values: ["1", "2", "2"] },
    { label: "Touchback, blackboarding, annotation", values: [false, true, true] },
    { label: "Dual screen", values: [false, false, true] },
    { label: "Wired video input", values: [false, false, "USB-C, or HDMI via converter"] },
    { label: "Wired room dock", values: [false, false, true] },
    { label: "Switch between room system and BYOD", values: [false, false, true] },
  ],
  note: "Source: Barco ClickShare Conference comparison, checked October 2026.",
};

export const problemsData = {
  tag: "Problems and solutions",
  heading: "Where hybrid meetings break,\nand how ClickShare solves it",
  highlightLast: 5,
  subhead: "",
  problemLabel: "Problem",
  solutionLabel: "With ClickShare",
  data: [
    {
      problem: {
        title: "Calls run on a laptop microphone",
        text: "Remote attendees hear one person clearly and the rest of the room faintly.",
      },
      solution: {
        title: "The call moves onto the room's AV",
        text: "ClickShare routes the laptop's call through the room camera, microphones and speakers.",
      },
    },
    {
      problem: {
        title: "The room only works with one platform",
        text: "A Teams room cannot join a client's Zoom or Webex meeting.",
      },
      solution: {
        title: "Join on whatever platform the meeting uses",
        text: "The call runs on the laptop, so the room works with any platform.",
      },
    },
    {
      problem: {
        title: "Remote people disappear during slides",
        text: "Once content is shared, remote faces drop off the screen.",
      },
      solution: {
        title: "Keep faces and content together",
        text: "Conference View keeps remote participants on screen while content is shared; CX-50 Gen 2 can split them across two displays.",
      },
    },
  ],
};

 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "ClickShare Conference \n questions answered",
  highlightLast: 2,
  faqData: [
  {
    question: "Which ClickShare Conference model do I need?",
    answer: "Small rooms suit the CX-20, medium rooms the CX-30, and boardrooms the CX-50 Gen 2. We confirm the fit with an on-site demo.",
  }, 
  {
    question: "Does ClickShare Conference work with Teams and Zoom?",
    answer: "Yes. The meeting runs on the laptop, so it works with Teams, Zoom, Webex and other platforms. The CX-50 Gen 2 can also switch between an installed Teams or Zoom Room system and BYOD.",
  }, 
  {
    question: "What room hardware does it need?",
    answer: "A display plus a USB camera and audio, or a video bar. We check what is already in the room during the survey and quote only what is missing.",
  }, 
  {
    question: "Can we see it before buying?",
    answer: "Yes. We demo it in your own room, on your laptops, before anything is ordered.",
  }, 
],
};

export const ctaData = {
  tag: "Get started",
  heading: "Book a ClickShare demo\nin your own meeting room",
  highlightLast: 5,
  image: `${CDN}/wcs.jpg`,
  steps: [
    "Tell us how many rooms and how they are used.",
    "We bring a working unit and demo it on your laptops.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Barco and ClickShare are trademarks of Barco NV.";
