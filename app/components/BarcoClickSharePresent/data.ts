const CDN = "https://cdn.gs-it.ae/images/products";
const DEMO_URL = "/barco-product-demo";
const C5_URL = "/barco/wireless-presentation/clickshare-c-5";
const C10_URL = "/barco/wireless-presentation/clickshare-c-10";

export const bannerData = {
  crumbs: [{ label: "Barco", href: "/barco-partner-dubai" }, { label: "Wireless presentation" }],
  tag: "ClickShare Present range",
  heading: "Barco ClickShare\nWireless Presentation System",
  highlightLast: 3,
  description:
    "ClickShare Present connects any laptop to the meeting room display without cables, adapters or software installs. GS IT supplies, installs and supports the C-5 and C-10, and demos them in your own room first.",
  backgroundImage: `${CDN}/main-pro/wps.jpg`,
  mobbanner: `${CDN}/main-pro/wps.jpg`,
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
  tag: "How ClickShare Present works",
  heading: "Plug in the Button,\npress it, and share",
  highlightLast: 4,
  subhead:
    "The base unit sits behind the display and holds the room connections. Presenters share from the ClickShare Button or app; guests use it the same way as staff.",
  data: [
    {
      variant: "photo",
      image: `${CDN}/cx20/easy-meeting-join.jpg`,
      alt: "ClickShare Button plugged into a laptop",
      title: "Share from any laptop",
      dim: "Button or ClickShare app",
      text: ["Windows or Mac, staff or visitor. No drivers to install and no cable to find."],
    },
    {
      variant: "dark",
      big: "1 click",
      title: "Fast start",
      dim: "Barco states under 7 seconds",
      text: ["Barco rates a ClickShare Present meeting start at under seven seconds from walking in to sharing."],
    },
    {
      variant: "light",
      title: "A clear meeting table",
      dim: "Base unit behind the display",
      text: [
        "All display and power connections live in the base unit, so the table carries laptops and nothing else.",
        "When nobody is sharing, the display can show room information or signage.",
      ],
    },
  ],
};

export const modelsData = {
  tag: "Compare models",
  heading: "Two ClickShare Present models,\nsized by room",
  highlightLast: 3,
  subhead:
    "The C-5 covers huddle and small rooms with one source on screen. The C-10 adds a second source and interactive tools for medium to large rooms.",
  data: [
    {
      media: "shot",
      image: `${CDN}/main-pro/c-5.jpg`,
      alt: "ClickShare C-5 base unit",
      tag: "Huddle and small rooms",
      title: "ClickShare C-5",
      points: [
        "One source on screen at a time",
        "Share from the ClickShare app; a Button is sold separately",
        "Cloud management through Barco XMS",
      ],
      fitLabel: "Best for",
      fit: "huddle spaces and small meeting rooms.",
      link: { text: "View ClickShare C-5", href: C5_URL },
    },
    {
      media: "shot",
      // TODO: the source HTML reuses the CX-20 photo here; swap in a C-10 image when one is on the CDN
      image: `${CDN}/main-pro/cx-20.jpg`,
      alt: "ClickShare C-10 base unit with ClickShare Button",
      tag: "Medium to large rooms",
      title: "ClickShare C-10",
      points: [
        "Two sources on screen side by side",
        "Ships with one or two Buttons",
        "Touchback, blackboarding and annotation",
      ],
      fitLabel: "Best for",
      fit: "medium to large meeting rooms where people present together.",
      link: { text: "View ClickShare C-10", href: C10_URL },
    },
  ],
};

export const compareData = {
  columns: [
    { label: "C-5", href: C5_URL },
    { label: "C-10", href: C10_URL },
  ],
  rows: [
    { label: "Meeting room type", values: ["Huddle space and small meeting room", "Medium to large meeting room"] },
    { label: "Buttons included", values: ["None (app, or Button bought separately)", "1 or 2"] },
    { label: "Sources on screen at once", values: ["1", "2"] },
    { label: "Touchback, blackboarding, annotation", values: [false, true] },
  ],
  note: "Source: Barco ClickShare Present comparison, checked October 2026.",
};

export const problemsData = {
  tag: "Problems and solutions",
  heading: "Where presentations lose time,\nand how ClickShare solves it",
  highlightLast: 5,
  subhead: "",
  problemLabel: "Problem",
  solutionLabel: "With ClickShare",
  data: [
    {
      problem: {
        title: "Hunting for the right cable",
        text: "USB-C, HDMI and DisplayPort laptops in one room, and the right adapter is always missing.",
      },
      solution: {
        title: "One wireless connection for every laptop",
        text: "The Button or app works the same on any laptop, so the meeting starts on time.",
      },
    },
    {
      problem: {
        title: "Only one person can present",
        text: "Switching presenters means unplugging and replugging in front of the room.",
      },
      solution: {
        title: "Hand over with a click",
        text: "The next presenter clicks and takes over. On the C-10, two people can share side by side.",
      },
    },
    {
      problem: {
        title: "Visitors need IT to present",
        text: "Guest laptops are kept off the corporate network.",
      },
      solution: {
        title: "Guests share without network access",
        text: "Visitors present through the Button or app without joining your network.",
      },
    },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "ClickShare Present \n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which ClickShare Present model do I need?",
      answer:
        "Huddle spaces and small rooms suit the C-5. Medium to large rooms, or rooms where two people present together, suit the C-10. We confirm the fit during the on-site demo.",
    },
    {
      question: "Does the C-5 come with a ClickShare Button?",
      answer:
        "No. Barco ships the C-5 without a Button; you share from the ClickShare app, or add a Button separately. The C-10 ships with one or two Buttons.",
    },
    {
      question: "Can ClickShare Present run video calls?",
      answer:
        "ClickShare Present is for in-room presenting. For calls run from a laptop on the room camera and speakers, look at the ClickShare Conference range (CX-20, CX-30, CX-50).",
    },
    {
      question: "Can we see it before buying?",
      answer:
        "Yes. We bring a working unit to your office and demo it in your own room. Hardware is ordered only after you approve the proposal.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Book a ClickShare demo\nin your own meeting room",
  highlightLast: 5,
  image: `${CDN}/main-pro/wps.jpg`,
  steps: [
    "Tell us how many rooms and how they are used.",
    "We bring a working unit and demo it on your laptops.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Barco and ClickShare are trademarks of Barco NV.";
