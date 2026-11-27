import { portfolioData } from "@/app/components/common/data";

const IMG = "/assets/images/crestron-partner-dubai";
const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Crestron Partner Dubai | Certified Integrated Partner | GS IT",
  description:
    "GS IT is a Crestron Certified Integrated Partner in Dubai. We design, install and support Crestron meeting rooms: video conferencing, AirMedia wireless presentation, 4-Series control, DM NVX and room scheduling.",
  image: `${IMG}/banner.webp`,
};

export const bannerData = {
  badge: { logo: `${IMG}/badge.webp`, alt: "Crestron Certified Integrated Partner", wide: true },
  tag: "Crestron Certified Integrated Partner",
  heading: "Crestron Partner Dubai\n for meeting rooms that just work",
  highlightLast: 6,
  description:
    "GS IT is a Crestron Certified Integrated Partner in Dubai. We design, install, programme and support Crestron video conferencing, wireless presentation, room control and AV-over-IP for meeting rooms, boardrooms and training rooms. One touch starts the meeting. One partner owns the result.",
  backgroundImage: `${IMG}/banner.webp`,
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
  tag: "Why Crestron",
  heading: "Every meeting starts\n with one touch",
  highlightLast: 3,
  subhead:
    "Displays, cameras, microphones and laptops usually come from different makers. Crestron ties them into one meeting room your people can run without help, and your IT team can manage from one place.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/overview.webp`,
      alt: "Large meeting room with ultra-wide displays, front-of-room cameras and tabletop touch screens",
      title: "One platform",
      dim: "For every meeting in every room",
      text: ["Video calls, wireless sharing and room controls run from one touch screen. Your people learn it once and use it in any room."],
    },
    {
      variant: "light",
      big: "50+",
      title: "Years in control systems",
      dim: "Founded in New Jersey in 1972",
      text: [
        "Crestron has built control systems for more than 50 years. Today its meeting room range covers video conferencing, wireless presentation, control and AV-over-IP.",
      ],
    },
    {
      variant: "dark",
      title: "Managed from the cloud",
      dim: "Every room in XiO Cloud",
      text: [
        "Crestron XiO Cloud lets IT provision, update and monitor rooms from one dashboard.",
        "Faults are found and often fixed remotely, before the next meeting is affected.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "Crestron products we offer",
  heading: "Everything a meeting room needs,\n from one brand",
  highlightLast: 3,
  subhead:
    "From one huddle room to a full floor of boardrooms. Each group shows what it does in the room and the models we supply.",
  imageFit: "contain",
  data: [
    {
      image: `${IMG}/video-conferencing.webp`,
      alt: "Crestron Flex UC-B70-A-T kit: Videobar 70 and 10 in. tabletop touch screen",
      tag: "Video conferencing",
      title: "Video conferencing",
      lead: "Microsoft Teams Rooms and Zoom Rooms, from huddle rooms to boardrooms.",
      categories: [
        { title: "Crestron Videobar 70", text: "All-in-one camera, microphones and speakers for medium to large rooms, with a tabletop touch screen." },
        { title: "Collab Compute", text: "The room core for Microsoft Teams Rooms and Zoom Rooms, with on-board AI processing." },
        { title: "Intelligent Cameras", text: "1 Beyond cameras that frame the speaker and follow the conversation." },
        { title: "Meeting Touch Control", text: "80 Series tabletop touch screens to join, share and end each meeting." },
      ],
    },
    {
      image: `${IMG}/airmedia.webp`,
      alt: "Crestron AirMedia Series 3 kit: AM-3100-WF receiver and AM-TX3-100 Connect Adaptor",
      tag: "Wireless presentation",
      title: "AirMedia wireless presentation",
      lead: "Share any laptop or phone to the room display without cables.",
      categories: [
        { title: "AirMedia Series 3 Kits", text: "A receiver behind the display plus a USB-C Connect Adaptor for one-click sharing." },
        { title: "App or Adaptor", text: "Present from Windows, macOS, iOS, Android or Chromebook, by app or by adaptor." },
        { title: "Secure by Design", text: "AES encryption, 802.1X and Active Directory sign-in to meet IT policy." },
      ],
    },
    {
      image: `${IMG}/control.webp`,
      alt: "Crestron CP4 4-Series control processor",
      tag: "Room control",
      title: "Control processors",
      lead: "The brain of the room. One touch starts the meeting, switches the source and sets the lights.",
      categories: [
        { title: "CP4 Control Processor", text: "Rack-mount 4-Series processor for boardrooms and multi-room systems." },
        { title: "RMC4 Room Controller", text: "Compact 4-Series controller that mounts behind the display in standard rooms." },
      ],
    },
    {
      image: `${IMG}/touch-screens.webp`,
      alt: "Crestron 10 in. tabletop touch screen showing meeting controls",
      tag: "Interfaces",
      title: "Touch screens and room scheduling",
      lead: "Clear controls inside the room and live availability outside it.",
      categories: [
        { title: "Room Scheduling Panels", text: "TSS-1080 10.1 in. panels with light bars that show free or busy and allow booking on the spot." },
        { title: "80 Series Touch Screens", text: "Wall and tabletop screens for room control and Teams or Zoom meetings." },
        { title: "Mounting Accessories", text: "TSW-UMB-80-BBI back box for a clean, secure wall install." },
      ],
    },
    {
      image: `${IMG}/av-over-ip.webp`,
      alt: "Crestron DM-NVX-370 AV-over-IP endpoint, front panel with HDMI, USB-C and network ports",
      tag: "AV distribution",
      title: "AV-over-IP and connectivity",
      lead: "Route 4K video from any source to any display over your network.",
      categories: [
        { title: "DM NVX Encoders and Decoders", text: "DM-NVX-363 and DM-NVX-D30 move 4K60 4:4:4 HDR video over standard Gigabit Ethernet." },
        { title: "DM NVX Switcher", text: "DM-NVX-384 switches four inputs, including USB-C, at up to 5K." },
        { title: "Table and Wall Connections", text: "DM-TX-4KZ wall plate transmitters with FP-G1 faceplates for a presenter connection point." },
      ],
    },
  ],
  platforms: {
    strong: "Works with",
    text: "the platforms and systems you already run.",
    chips: ["Microsoft Teams Rooms", "Zoom Rooms", "XiO Cloud", "Windows, macOS, iOS and Android", "Standard IP networks"],
  },
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From site survey\n to support after go-live",
  highlightLast: 4,
  subhead:
    "A Crestron system runs on your network and your meeting platform. One partner handles the design, the install, the programming and the support.",
  data: [
    {
      icon: "House",
      title: "Site survey and on-site demo",
      description: "We review each room's use, equipment and network, then show you Crestron working in your own space.",
    },
    {
      icon: "TrendingUp",
      title: "System design",
      description: "We specify control, displays, audio and network per room, and standardise the design so every room works the same way.",
    },
    {
      icon: "Wrench",
      title: "Installation and programming",
      description: "Dedicated AV installers mount and cable the system. Specialist programmers build the touch-screen interface and room logic.",
    },
    {
      icon: "Headphones",
      title: "Support after go-live",
      description: "Firmware updates, XiO Cloud monitoring, user handover and a 15-minute response on critical issues for clients on a support agreement.",
    },
  ],
};

export const traitsData = {
  tag: "Crestron characteristics",
  heading: "Built for scale,\n simple to use every day",
  highlightLast: 5,
  subhead: "What the Crestron meeting room range has in common, from one huddle room to a full floor.",
  data: [
    {
      icon: "Workflow",
      title: "Works with other brands",
      description: "Crestron controls displays, cameras, microphones and lighting from many makers, so you are not locked to one vendor.",
      highlight: true,
    },
    {
      icon: "LayoutGrid",
      title: "Same experience in every room",
      description: "One standard interface across rooms, so staff know how to start a meeting anywhere in the building.",
    },
    {
      icon: "Zap",
      title: "Fast, current processors",
      description: "4-Series processors run up to 15 times faster than 3-Series, and existing 3-Series programs run on them.",
    },
    {
      icon: "MonitorCheck",
      title: "Remote management",
      description: "XiO Cloud provisions, updates and monitors devices centrally, which cuts site visits and downtime.",
    },
    {
      icon: "Network",
      title: "AV on your network",
      description: "DM NVX sends 4K video over standard network switches instead of dedicated AV cable runs.",
    },
    {
      icon: "ShieldCheck",
      title: "Secure wireless sharing",
      description: "AirMedia uses AES encryption, 802.1X and Active Directory sign-in, so guest sharing meets IT policy.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "See it in your room\n before work begins",
  highlightLast: 3,
  subhead: "Procurement and installation start only after you have seen the demo and agreed the proposal.",
  data: [
    { title: "Site survey", text: "Room use, existing equipment, network and integration points." },
    { title: "On-site demo", text: "A working Crestron setup in your own space.", highlight: true },
    { title: "Proposal", text: "Room-by-room design, scope and timeline, agreed with you first." },
    { title: "Install and programme", text: "Cabling, mounting, interface programming, network setup and testing." },
    { title: "Handover and support", text: "User walkthrough, documentation, XiO Cloud setup and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\n Every layer of your IT.",
  highlightLast: 5,
  subhead:
    "A Crestron room depends on the network, the meeting platform, the AV and the people using it. We support all four, so a fault has one owner.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "15 min", title: "Critical response", text: "Response time on critical issues under our support agreements." },
    { value: `${portfolioData.employees}+`, title: "Specialists in-house", text: "Separate teams for AV installation, programming and network." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Crestron\nquestions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Is GS IT a certified Crestron partner in Dubai?",
      answer:
        "Yes. GS IT is a Crestron Certified Integrated Partner in Dubai. We supply genuine Crestron products with manufacturer warranty, and we design, install, programme and support the systems we deliver across the UAE.",
    },
    {
      question: "What can a Crestron system control?",
      answer:
        "In a meeting room: displays, projectors, cameras, microphones, audio, video switching, lighting, blinds and room booking. Crestron works with equipment from many manufacturers, so it can bring your existing devices into one system.",
    },
    {
      question: "Does Crestron work with Microsoft Teams and Zoom?",
      answer:
        "Yes. Crestron Flex systems such as the Videobar 70 kit run Microsoft Teams Rooms or Zoom Rooms, and Collab Compute runs both platforms for larger custom rooms. We set up the room so a meeting starts with one touch.",
    },
    {
      question: "Can you work with our existing Crestron system?",
      answer:
        "Yes. We audit existing Crestron installations, update firmware, reprogramme interfaces, replace end-of-life processors with 4-Series and extend the system to new rooms.",
    },
    {
      question: "Which Crestron products do you supply most?",
      answer:
        "For meeting rooms, we most often supply AirMedia Series 3 kits (AM3-111 KIT and AM3-111-I KIT), DM NVX encoders, decoders and switchers (DM-NVX-363, DM-NVX-384, DM-NVX-D30), DM-TX-4KZ wall plate transmitters, 4-Series processors (CP4, RMC4) and TSS-1080 room scheduling panels, along with the mounting accessories each room needs.",
    },
    {
      question: "Can we see Crestron before we commit?",
      answer: "Yes. We demo a working setup in your own space. Procurement and installation begin only after you approve the proposal.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your Crestron rooms\n with an AV engineer",
  highlightLast: 4,
  image: `${IMG}/cta.webp`,
  steps: [
    "Tell us which rooms you have and how they are used.",
    "We survey the site and demo Crestron on location.",
    "You get a room-by-room proposal. Work starts only when you agree.",
  ],
  button: { text: "Talk to an AV engineer", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote =
  "Crestron, Crestron Flex, XiO Cloud, AirMedia, DM NVX, DM NAX, 4-Series, 1 Beyond and other product names are trademarks of Crestron Electronics, Inc. Microsoft Teams and Zoom are trademarks of their respective owners.";
