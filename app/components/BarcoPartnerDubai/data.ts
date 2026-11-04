const CDN = "/assets/images/barco"; 
const DEMO_URL = "/barco-product-demo";
 import { portfolioData } from "@/app/components/common/data";

// "Authorized Barco partner" badge shown in the banner of every Barco page
export const barcoBadge = {
  label: "Authorized Barco partner",
  logo: `${CDN}/barco.png`,
  alt: "Barco",
};

export const bannerData = {
  badge: barcoBadge,
  tag: "Barco Authorized Supplier and Reseller",
  heading: "Barco Meeting Room Devices\nPartner in Dubai",
  highlightLast: 3,
  description:
    "GS IT supplies, installs and supports Barco ClickShare across the UAE. We demo it in your own room first, recommend the ClickShare model that fits how that room meets, and order only once you agree.",
  backgroundImage: `${CDN}/barco.jpg`,
  mobbanner: `${CDN}/barco.jpg`,
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
};

export const overviewData = {
  tag: "Why Barco ClickShare",
  heading: "Meetings start when\nsomeone clicks a button",
  highlightLast: 4,
  subhead:
    "ClickShare replaces the HDMI cable and adapter box with a wireless link from any laptop to the room display. Guests share without installing software or joining your network settings.",
  data: [
    {
      variant: "photo",
      image: `${CDN}/pre2.jpg`,
      alt: "Meeting room with content shared wirelessly to the wall display",
      title: "Share from any laptop",
      dim: "Button, app or screen mirroring",
      text: [
        "Plug in the ClickShare Button, use the ClickShare app, or mirror from a phone or tablet. Whoever presents next takes over in one click.",
      ],
    },
    {
      variant: "dark",
      big: "0 cables",
      title: "A clear meeting table",
      dim: "Base unit sits behind the display",
      text: [
        "The base unit mounts out of sight and holds the room connections, so the table carries laptops and nothing else.",
      ],
    },
    {
      variant: "light",
      title: "Fits the room you have",
      dim: "Teams, Zoom, Webex and more",
      text: [
        "ClickShare Conference connects your laptop to the room's existing camera, microphones and speakers, so a call on any platform uses the room's AV instead of the laptop's.",
        "When no one is presenting, the display can show room information or digital signage.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "The ClickShare range we supply",
  heading: "Four ClickShare families,\nmatched to how each room meets",
  highlightLast: 6,
  subhead:
    "The right family depends on how the room meets: presenting to people inside it, running calls from laptops, needing camera and audio in one device, or standardising on a certified Teams room.",
  data: [
    {
      media: "photo",
      image: `${CDN}/pre2.jpg`,
      alt: "Team presenting in a meeting room using ClickShare",
      tag: "Wireless presentation",
      title: "ClickShare Present",
      points: [
        "Wireless content sharing from laptops, phones and tablets",
        "Runs on its own or alongside an existing Teams Rooms or Zoom Rooms setup",
        "Display shows signage when no meeting is live",
      ],
      fitLabel: "Best for",
      fit: "huddle rooms, training rooms and boardrooms that present in-room.",
    },
    {
      media: "photo",
      image: `${CDN}/conf1.jpg`,
      alt: "Hybrid meeting using the room camera and display through ClickShare",
      tag: "Wireless conferencing",
      title: "ClickShare Conference",
      points: [
        "Bring-your-own-meeting: start the call on your laptop, run it on the room camera, mics and speakers",
        "Works with any conferencing platform and most room AV peripherals",
        "Guided room experience and room-status display",
      ],
      fitLabel: "Best for",
      fit: "hybrid rooms where people join calls on whatever platform the client uses.",
    },
    {
      media: "product",
      image: `${CDN}/conf1.jpg`,
      alt: "Barco ClickShare Bar Pro video bar with two ClickShare Buttons",
      tag: "All-in-one video bar",
      title: "ClickShare Bar",
      points: [
        "Camera, speakers and microphones in one bar, with ClickShare wireless sharing built in",
        "Bring-your-own-meeting: run Teams or Zoom from your laptop on the bar's camera and audio",
        "Bar Core: single screen, one Button. Bar Pro: dual screen, two Buttons, wired room dock for 4K, touchback and annotation",
      ],
      fitLabel: "Best for",
      fit: "small meeting rooms that need video calls without a separate camera and speaker setup.",
    },
    {
      media: "product",
      image: `${CDN}/conf1.jpg`,
      alt: "Barco ClickShare Hub Core base unit with a ClickShare Button",
      tag: "Room system",
      title: "ClickShare Hub",
      points: [
        "Hub Core and Hub Pro, offered by Barco as Teams-certified bundles with Sennheiser TeamConnect Bar S and Bar M",
        "Built on Microsoft's Device Ecosystem Platform (MDEP)",
        "One system for Teams calls and in-room presenting, including by guests",
      ],
      fitLabel: "Best for",
      fit: "small and medium rooms standardising on Microsoft Teams.",
    },
  ],
  platforms: {
    strong: "Works alongside",
    text: "the meeting platforms and room hardware you already run.",
    logos: [
      { src: `${CDN}/teams.png`, alt: "Microsoft Teams" },
      { src: `${CDN}/zoom.png`, alt: "Zoom" },
      { src: `${CDN}/webex.png`, alt: "Webex" },
      { src: `${CDN}/poly.png`, alt: "Poly" },
      { src: `${CDN}/logitech.png`, alt: "Logitech" },
    ],
  },
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From the first demo\nto support after go-live",
  highlightLast: 4,
  subhead: "One partner handles the ClickShare hardware, the room it plugs into, and the network it runs on.",
  data: [
    {
      icon: "House",
      title: "Room assessment and on-site demo",
      description:
        "We survey each room, check display inputs and network, and run a live ClickShare demo on your own laptops.",
    },
    {
      icon: "ShieldCheck",
      title: "Genuine Barco supply",
      description: "ClickShare units sourced through Barco's official channel, with manufacturer warranty intact.",
    },
    {
      icon: "Wrench",
      title: "Installation and configuration",
      description:
        "Dedicated AV installers mount and cable the base unit; our programmers handle network, security settings and peripherals.",
    },
    {
      icon: "Headset",
      title: "Support after go-live",
      description:
        "Firmware updates, user handover and a 15-minute response on critical issues for clients on a support agreement.",
    },
  ],
};

export const problemsData = {
  tag: "Problems and solutions",
  heading: "Where meetings lose time,\nand how ClickShare solves it",
  highlightLast: 5,
  subhead: "The issues we hear most when a client first calls about their meeting rooms.",
  problemLabel: "Problem",
  solutionLabel: "With ClickShare",
  data: [
    {
      problem: {
        title: "The first ten minutes go to cables and adapters",
        text: "USB-C, HDMI and DisplayPort laptops in one room, with the right adapter always missing.",
      },
      solution: {
        title: "One wireless connection for every laptop",
        text: "The Button or app works the same on any laptop, so the meeting starts on time.",
      },
    },
    {
      problem: {
        title: "Visitors cannot present without IT",
        text: "Guest laptops are blocked from the corporate network, and someone has to fetch IT.",
      },
      solution: {
        title: "Guests share without touching your network",
        text: "Visitors share through the Button or guest connection, kept separate from corporate access.",
      },
    },
    {
      problem: {
        title: "Hybrid calls run on a laptop microphone",
        text: "Remote attendees hear one person clearly and the rest of the room faintly.",
      },
      solution: {
        title: "The call moves onto the room's AV",
        text: "ClickShare Conference routes the laptop's call through the room camera, mics and speakers.",
      },
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "See it working in your room\nbefore you buy anything",
  highlightLast: 4,
  subhead: "Procurement starts only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Room survey", text: "Displays, inputs, network and how each room is used." },
    { title: "On-site demo", text: "A working ClickShare unit in your room, on your laptops.", highlight: true },
    { title: "Proposal", text: "Model per room, scope and timeline. Procurement begins only on your approval." },
    { title: "Installation", text: "Mounting, cabling, network and security configuration, then testing." },
    { title: "Handover and support", text: "User walkthrough, documentation and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\nEvery layer of your IT.",
  highlightLast: 5,
  subhead:
    "ClickShare depends on the display, the network and the meeting platform. We support all three, so a fault has one owner.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "15 min", title: "Critical response", text: "Response time on critical issues under our support agreements." },
    { value: "150+", title: "Specialists in-house", text: "Separate teams for AV installation, programming and network." },
  ],
};
 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Barco ClickShare \n questions answered",
  highlightLast: 2,
  faqData: [
  {
    question: "Is GS IT an authorized Barco partner in Dubai?",
    answer: "Yes. GS IT is a Barco partner in Dubai and supplies genuine Barco ClickShare products with full manufacturer warranty, along with installation and support.",
  },
  {
    question: "Which ClickShare model is right for my room?",
    answer: "Rooms that mainly present in person suit ClickShare Present. Rooms that run calls from laptops on Teams, Zoom or Webex suit ClickShare Conference. Rooms standardising on Microsoft Teams can use a ClickShare Hub bundle. We confirm the fit during the on-site demo.",
  },
  {
    question: "Does ClickShare work with Microsoft Teams and Zoom?",
    answer: "Yes. ClickShare Conference works with any conferencing platform running on the laptop, and ClickShare Present can sit alongside an existing Teams Rooms or Zoom Rooms system.",
  },
  {
    question: "Can we see ClickShare before we buy?",
    answer: "Yes. We bring a working unit to your office and demo it in your own meeting room with your laptops. We order hardware only after you approve the proposal.",
  },
  {
    question: "Do you support ClickShare after installation?",
    answer: "Yes. We handle firmware updates, user questions and faults. Clients on a support agreement get a 15-minute response on critical issues.",
  }, 
],
};

export const ctaData = {
  tag: "Get started",
  heading: "Book a ClickShare demo\nin your own meeting room",
  highlightLast: 5,
  image: `${CDN}/conf1.jpg`,
  steps: [
    "Tell us how many rooms and how they are used.",
    "We bring a working unit and demo it on your laptops.",
    "You get a per-room proposal. Nothing is ordered until you agree.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Barco and ClickShare are trademarks of Barco NV.";