import { portfolioData } from "@/app/components/common/data";
import { yealinkBadge } from "@/app/components/YealinkVideoConferencing/data";

const IMG = "/assets/images/yealink-partner-dubai";
const DEMO_URL = "/yealink-product-demo";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: yealinkBadge,
  tag: "Authorized Yealink Reseller in Dubai",
  heading: "Yealink Partner Dubai\n for video conferencing",
  highlightLast: 3,
  description:
    "GS IT is a Yealink Gold Video Conferencing Partner. We supply, install and support Yealink meeting room systems, room devices, headsets and IP phones. We demo the kit in your own room first, size each room to the right system, and order only once you agree.",
  backgroundImage: `${IMG}/banner.jpeg`,
  mobbanner: `${IMG}/banner.webp`,
  buttons: [
    { text: "Explore products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    { text: "Contact us", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT and AV in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const overviewData = {
  tag: "Why Yealink",
  heading: "One Brand from the Desk\nto the Boardroom",
  highlightLast: 3,
  subhead:
    "Yealink devices are used in more than 140 countries. Choosing one brand for rooms and desks gives your IT team a single support path for most devices.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/overview.jpg`,
      alt: "Colleagues on a video call from a Yealink desk phone",
      title: "Same Experience in Every Room",
      dim: "Huddle spaces and boardrooms",
      text: ["One Yealink system per room size means people join meetings the same way."],
    },
    {
      variant: "dark",
      big: "No.1",
      title: "In SIP Phone Shipments",
      dim: "Worldwide market share",
      text: ["Yealink ranks first in global SIP phone shipments, according to the Frost & Sullivan report Yealink cites (2023)."],
    },
    {
      variant: "light",
      title: "Used in 140+ Countries",
      dim: "Voice, video and collaboration",
      text: [
        "Yealink devices work with Microsoft Teams, Zoom and most SIP phone platforms, so businesses in many countries can use the same hardware on their systems.",
        "Yealink says one in every 500 people on earth owns or uses one of its products.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "The Yealink Range We Supply",
  heading: "Four Yealink families,\n matched to each space",
  highlightLast: 4,
  subhead: "Meeting rooms come first, but most offices need all four: video in the rooms, panels and casting around them, and headsets and phones at the desks.",
  data: [
    {
      media: "photo",
      image: `${IMG}/room-systems1.jpg`,
      alt: "Boardroom with dual displays, touch panel and table microphones",
      tag: "Video conferencing",
      title: "MeetingBar and MVC room systems",
      points: [
        "MeetingBar: camera, microphones, speakers and compute in one Android bar, from huddle to medium rooms",
"MVC (Teams) and ZVC (Zoom) kits on Windows for medium rooms, boardrooms and training rooms",
"Expansion microphones and touch panels for larger tables",
      ],
      fitLabel: "Best for",
      fit: "any room that runs Teams or Zoom calls every day.",
      links: [{ text: "Video conferencing systems", href: "/yealink-video-conferencing-systems" }],
    },
    {
      media: "product",
      image: `${IMG}/room-panel1.jpg`,
      alt: "Yealink room scheduling panel showing a booked meeting",
      tag: "Room devices",
      title: "Room control, sharing and booking",
      points: [
        "Touch consoles: CTP25, MTouch Plus and MTouch Plus-MB for one-tap join and meeting control",
"CT200 and CT300 navigators to run displays, signal routing and AV equipment",
"RoomCast E2, WPP30 and PA20: share up to four screens in 4K, no software needed",
"RoomPanel booking panels at the door, with LED room status",
      ],
      fitLabel: "Best for",
      fit: "offices where rooms are hard to find, slow to start or hard to share in.",
      links: [
        { text: "Touch consoles", href: "/yealink-touch-consoles" },
        { text: "Wireless presentation", href: "/yealink-wireless-presentation-system" },
        { text: "Room scheduling", href: "/yealink-room-scheduling" },  ],
    },
    {
      media: "product",
      image: `${IMG}/headset1.jpg`,
      alt: "Yealink wireless headset on its charging stand",
      tag: "Personal audio",
      title: "Headsets & Speakerphones",
      points: [
        "Bluetooth and DECT headsets for open-plan desks and calls on the move",
"Portable speakerphones for small rooms without a fixed system",
"Teams and Zoom certified models available",
      ],
      fitLabel: "Best for",
      fit: "hybrid staff who take calls from the desk, home and huddle rooms.",
      links: [{ text: "Headsets and speakerphones", href: "/yealink-headsets-and-speakerphones" }],
    },
    {
      media: "product",
      image: `${IMG}/ip-phone1.jpg`,
      alt: "Yealink colour touchscreen IP desk phone",
      tag: "Desk telephony",
      title: "IP & DECT Phones",
      points: [
        "SIP desk phones cover reception, executive and general staff needs.",
"Teams phones and DECT cordless phones are also available.",
"The phones work with most IP PBX and cloud phone systems.",
      ],
      fitLabel: "Best for",
      fit: "receptions, front desks and roles that live on the phone.",
      links: [
        { text: "IP phones", href: "/yealink-ip-phones" },
        { text: "Accessories", href: "/yealink-accessories" },
      ],
    },
  ],
  platforms: {
    strong: "Yealink works with",
    text: "the major meeting, calling and calendar platforms.",
    chips: ["Microsoft Teams", "Zoom", "SIP and IP PBX", "Microsoft 365 calendars", "Google Calendar"],
  },
};

export const servicesData = {
  tag: "What GS IT Delivers",
  heading: "Yealink Integration\nwith Your Current Systems",
  highlightLast: 4,
  subhead: "GS IT bridges Yealink technologies with your existing workplace platforms for smooth scheduling and calls.",
  data: [
    { icon: "Monitor", title: "Teams & Zoom Room Setup", description: "Each room runs on its own Teams or Zoom room account." },
    { icon: "CalendarDays", title: "Room Booking & Calendars", description: "We sync panels with Microsoft 365, Exchange or Google." },
    { icon: "Phone", title: "Phone System Integration", description: "Desk phones connect to Teams or your current IP PBX." },
    { icon: "MonitorCheck", title: "Device Management Setup", description: "Device status is tracked in Yealink, Teams or Zoom tools." },
  ],
};

export const traitsData = {
  tag: "Yealink Product Characteristics",
  heading: "Enterprise Features\nat Value-for-Money Pricing",
  highlightLast: 3,
  subhead: "Yealink offers cost-effective unified communications features that support your dynamic office environments.",
  data: [
    {
      icon: "CircleDollarSign",
      title: "Built to Fit the Budget",
      description: "Certified room systems feature reasonable prices to equip most rooms in an office.",
      highlight: true,
    },
    { icon: "Webcam", title: "All-in-One Design", description: "Each MeetingBar holds the camera, microphones, speakers and compute in one unit." },
    { icon: "ShieldCheck", title: "Certified for Teams & Zoom", description: "Many room systems, headsets and phones come in Teams or Zoom certified versions." },
    { icon: "ScanFace", title: "AI Video & Audio", description: "On supported models, auto-framing keeps speakers in shot and AI cuts room noise." },
    { icon: "SlidersHorizontal", title: "Open SIP & Easy Setup", description: "Yealink SIP phones work with most IP PBX and cloud platforms and set up in bulk." },
    { icon: "MonitorCheck", title: "Central Device Management", description: "Admins track firmware, status and faults in Yealink cloud, Teams admin or Zoom." },
  ],
};

export const procedureData = {
  tag: "Deployment Procedure",
  heading: "Our Deployment Process\nfor Yealink Rooms & Devices",
  highlightLast: 5,
  subhead: "Clear, methodical execution brings Yealink solutions into your rooms while ensuring operational readiness.",
  data: [
    { title: "Room Survey", text: "We record each room's size, displays, acoustics and network." },
    { title: "On-Site Demo", text: "Experience a live system working inside your preferred platform space.", highlight: true },
    { title: "Proposal & Approval", text: "You sign off on the detailed scope and timeline before hardware is supplied." },
    { title: "Installation & Testing", text: "Technicians mount gear, route cabling, and complete call quality checks." },
    { title: "Handover", text: "Receive complete system documentation, user training, and support options." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One Partner\nfor Every Layer of Your IT",
  highlightLast: 6,
  subhead:
    "A Yealink room relies on the display, network, calendar and meeting platform. We cover all four, so you work with one partner for the whole setup.",
  data: [
    { icon: "Layers", title: "One Partner for All Room Technology", text: "In-house teams cover IT, AV, ELV, cyber security and physical security." },
    { icon: "ShieldCheck", title: "Official Supply & Warranty Claims", text: "While units are under warranty, we raise claims and arrange replacements." },
    { icon: "ClipboardList", title: "Licensing & Renewals", text: "We track licence dates, send reminders before expiry and handle renewals." },
  ],
  stats: [
    { value: "98%", text: "of clients return after their first project" },
    { value: "15 min", text: "response on critical issues under an AMC" },
    { value: `${portfolioData.employees}+`, text: "in-house specialists in IT, AV, ELV and security" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Frequently Asked\nQuestions on Yealink",
  highlightLast: 3,
  faqData: [
    {
      question: "Is GS IT an authorized Yealink partner in Dubai?",
      answer:
        "Yes. GS IT is a Yealink Gold Video Conferencing Partner for 2026 and an authorized Yealink reseller in Dubai. We supply genuine Yealink products with the full manufacturer warranty and install them across the UAE.",
    },
    {
      question: "How do you handle warranty claims?",
      answer:
        "During the manufacturer warranty period, GS IT manages claims and replacements with Yealink on your behalf. After the warranty ends, support for faulty units can be covered under an optional Annual Maintenance Contract (AMC).",
    },
    {
      question: "Is Yealink stock available in the UAE?",
      answer:
        "Availability depends on the model and quantity. We confirm availability and delivery timelines in the proposal, and hardware is supplied only after you approve it.",
    },
    {
      question: "Do you offer pricing for multi-site projects?",
      answer: "Yes. We supply Yealink at official channel pricing and prepare volume quotes for projects that cover several offices or sites.",
    },
    {
      question: "Should we choose a MeetingBar or an MVC room kit?",
      answer:
        "MeetingBars combine the camera, audio and compute in one Android device and suit huddle, small and medium rooms. MVC and ZVC kits run on Windows with separate cameras and microphones. They come in kits for small, medium and large rooms, and they suit boardrooms and spaces that need extra cameras or microphones. We confirm the right fit during the room survey and demo.",
    },
    {
      question: "Does Yealink work with Microsoft Teams and Zoom?",
      answer:
        "Yes. MeetingBars are certified for Microsoft Teams Rooms and Zoom Rooms. MVC kits run Microsoft Teams Rooms on Windows, and ZVC kits run Zoom Rooms. Many Yealink headsets and desk phones also have Teams or Zoom certified versions.",
    },
    {
      question: "Do you supply room booking panels and wireless presentation systems?",
      answer:
        "Yes. We supply and install Yealink RoomPanel booking panels and RoomCast wireless presentation systems. We connect the panels to your Microsoft 365, Exchange or Google calendar, depending on the panel version.",
    },
    {
      question: "Do you also supply Yealink phones and headsets?",
      answer:
        "Yes. We supply Yealink IP and DECT phones, headsets and speakerphones. We connect the phones to Teams or to most existing IP PBX and cloud phone systems, and we set up headsets and speakerphones for Teams, Zoom and other calling apps.",
    },
    {
      question: "Can we see Yealink before we buy?",
      answer: "Yes. We bring a working system to your office and demo it in your own meeting room. Hardware is supplied only after you approve the proposal.",
    },
    {
      question: "Is ongoing support included?",
      answer:
        "Ongoing support is available under an optional Annual Maintenance Contract (AMC). The AMC covers firmware updates, user queries and fault resolution, with a 15-minute response on critical issues. We also track licence and warranty dates and handle renewals for you.",
    },
  ],
};

export const ctaData = {
  tag: "Get Started",
  heading: "Find the Right Yealink\nSolution for Your Space",
  highlightLast: 4,
  image: `${IMG}/cta.jpg`,
  steps: [
    "Tell us how many rooms you have and how they are used.",
    "We bring a working system and demo it on your Teams or Zoom account.",
    "You receive a per-room proposal, and no hardware is supplied until you approve it.",
  ],
  button: { text: "Book demo", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: DEMO_URL },
};

export const footNote = "Yealink is a trademark of Yealink Network Technology Co., Ltd. Microsoft Teams and Zoom are trademarks of their respective owners.";
