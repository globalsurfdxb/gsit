import { portfolioData } from "@/app/components/common/data";

const IMG = "/assets/images/biamp-partner-dubai";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: { label: "Authorised dealer, UAE", logo: `${IMG}/badge-logo.webp`, alt: "Biamp" },
  tag: "Authorised Biamp Dealer in the UAE",
  heading: "Biamp Partner Dubai\n for meeting room audio",
  highlightLast: 3,
  description:
    "GS IT is an authorised Biamp dealer in the UAE. We design, install and support Biamp audio systems across the country, from a single meeting room to a full building. We size each space to the right Biamp system, show it working in your room, and stay accountable after go-live.",
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
  tag: "Why Biamp",
  heading: "Audio built for meetings,\n from huddle room to hall",
  highlightLast: 4,
  subhead:
    "Biamp is a professional audio brand. Its processors, microphones, loudspeakers and paging run on one platform, so every room in your building sounds the same and is managed the same way.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/overview.webp`,
      alt: "Team on a video call in a glass-walled meeting room",
      title: "Every voice heard",
      dim: "At any seat in the room",
      text: ["Remote attendees hear the far end of the table as clearly as the head of it. That is the problem Biamp is built to solve."],
    },
    {
      variant: "light",
      logo: { src: `${IMG}/lockup-50-years.png`, alt: "Biamp 50 years" },
      title: "50 years in pro audio",
      dim: "Founded 1976",
      text: ["Biamp marks 50 years in 2026. Its range covers conferencing, sound reinforcement, paging and sound masking."],
    },
    {
      variant: "dark",
      title: "Certified for your platform",
      dim: "Teams, Zoom and Cisco",
      text: [
        "Biamp conferencing processors and room bundles are certified for Microsoft Teams and Zoom Rooms, and key bundles for Cisco.",
        "Your meetings start on the platform you already use.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "Biamp products we offer",
  heading: "The full Biamp range,\n matched to each space",
  highlightLast: 4,
  subhead:
    "From a single meeting room to a whole building. Every Biamp product category, grouped by where it is used, so you can see what each space needs.",
  data: [
    {
      image: `${IMG}/meeting-rooms.avif`,
      alt: "Lecture-style meeting room with a gooseneck microphone at the lectern",
      tag: "Meeting rooms",
      title: "Conferencing and collaboration",
      lead: "Everything a meeting room needs to be heard, seen and easy to start.",
      categories: [
        { title: "Complete Room Solutions", text: "Pre-matched processor, microphone, speaker and control bundles for each room size." },
        { title: "Conferencing Bars", text: "All-in-one Parlé bars with camera, microphones and speakers in one device." },
        { title: "Conferencing Cameras", text: "Vidi cameras with auto-framing for clear video at any table length." },
        { title: "UC Compute", text: "Devio UCX compute for native Microsoft Teams Rooms." },
        { title: "Microphones", text: "Parlé Beamtracking ceiling and tabletop microphones, plus gooseneck options." },
        { title: "Controls", text: "Touch panels and wall controllers to start meetings and adjust the room." },
        { title: "Scheduling", text: "Room booking panels that show availability at the door." },
      ],
    },
    {
      image: `${IMG}/processing.webp`,
      alt: "Biamp Tesira audio DSP",
      tag: "Processing",
      title: "Audio and video processing",
      lead: "The engine behind every Biamp system, from one room to a whole building.",
      categories: [
        { title: "Audio DSPs", text: "Tesira, TesiraFORTÉ X and Devio SCX processors with echo cancellation and noise reduction." },
        { title: "Video Processors", text: "Presentation switching and video distribution for meeting rooms and UC." },
        { title: "Preamplifiers", text: "Microphone and line preamps that bring sources cleanly into the system." },
      ],
    },
    {
      image: `${IMG}/loudspeakers.webp`,
      alt: "Biamp wall-mounted loudspeaker",
      tag: "Sound reinforcement",
      title: "Loudspeakers and amplification",
      lead: "Clear speech and background music at an even level, in every zone.",
      categories: [
        { title: "Loudspeakers", text: "Ceiling, surface, pendant and venue loudspeakers for offices, retail and events." },
        { title: "Loudspeaker Controllers", text: "Voltera amplified controllers that drive and manage loudspeakers." },
        { title: "Amplifiers", text: "Networked and installation amplifiers for single rooms or multi-zone systems." },
        { title: "Mixing Amplifiers", text: "Mixer and amplifier in one unit for smaller venues and retail." },
        { title: "Music Sources", text: "Background music players for retail, hospitality and public spaces." },
      ],
    },
    {
      image: `${IMG}/paging.webp`,
      alt: "Biamp networked paging station",
      tag: "Building-wide",
      title: "Paging and sound masking",
      lead: "Announcements where they are needed and speech privacy in open offices.",
      categories: [
        { title: "Paging Stations", text: "Desktop, gooseneck and wall-mounted stations with zone selection." },
        { title: "Sound Masking Generators", text: "Cambridge sound masking for speech privacy and focus in open-plan offices." },
      ],
    },
  ],
  platforms: {
    strong: "Works with",
    text: "the meeting platforms and networks you already run.",
    chips: ["Microsoft Teams Rooms", "Zoom Rooms", "Cisco", "USB to any laptop", "SIP / VoIP"],
  },
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From room survey\n to support after go-live",
  highlightLast: 4,
  subhead:
    "Biamp runs on your network, so an audio project is also an IT project. One partner handles the design, the install, the network and the support.",
  data: [
    {
      icon: "House",
      title: "Room assessment and on-site demo",
      description: "We survey each room's size, ceiling, acoustics and network, then run a working Biamp demo in your own space.",
    },
    {
      icon: "TrendingUp",
      title: "Audio system design",
      description: "We specify the processor, microphone count and speaker layout per room, so coverage is right without over-specifying.",
    },
    {
      icon: "Wrench",
      title: "Installation and programming",
      description:
        "Dedicated AV installers mount and cable the room. Specialist programmers configure and tune the Biamp system and connect it to Teams or Zoom.",
    },
    {
      icon: "Headphones",
      title: "Support after go-live",
      description: "Firmware updates, remote monitoring, user handover and a 15-minute response on critical issues for clients on a support agreement.",
    },
  ],
};

export const traitsData = {
  tag: "Biamp product characteristics",
  heading: "Professional audio,\n simple to run every day",
  highlightLast: 4,
  subhead: "What the Biamp range has in common, from a single meeting room to a networked building.",
  data: [
    {
      icon: "AudioLines",
      title: "Beamtracking microphones",
      description: "Parlé microphones follow whoever is speaking, so people are heard without leaning toward a mic.",
      highlight: true,
    },
    {
      icon: "SlidersHorizontal",
      title: "Automatic room tuning",
      description: "Biamp Launch discovers connected devices and tunes the room, which shortens setup and keeps rooms consistent.",
    },
    {
      icon: "ShieldCheck",
      title: "Certified for Teams and Zoom",
      description: "TesiraFORTÉ X, Devio SCX and Parlé VBC 2800 are certified for Microsoft Teams and Zoom Rooms.",
    },
    {
      icon: "Network",
      title: "Scales on one platform",
      description: "Tesira grows from one room to a whole building, with zones and paging over the network.",
    },
    {
      icon: "MonitorCheck",
      title: "Central device management",
      description: "Biamp Workplace monitors devices remotely, so faults are caught before a meeting starts.",
    },
    {
      icon: "Mic",
      title: "Voice lift for large rooms",
      description: "Parlé Voice Lift reinforces presenters in training rooms and halls using ceiling microphones, with no handheld mics to manage.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "Hear it in your room\n before work begins",
  highlightLast: 3,
  subhead: "Installation starts only after you have heard the demo and agreed the proposal.",
  data: [
    { title: "Room survey", text: "Room size, ceiling, acoustics, network and how each space is used." },
    { title: "On-site demo", text: "A working Biamp setup in your room, on your Teams or Zoom account.", highlight: true },
    { title: "Proposal", text: "System design per room, scope and timeline, agreed with you first." },
    { title: "Install and programme", text: "Cabling, mounting, DSP programming, network setup and room tuning." },
    { title: "Handover and support", text: "Test calls, user walkthrough, documentation and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\n Every layer of your IT.",
  highlightLast: 5,
  subhead:
    "A Biamp room depends on the network, the display, the meeting platform and the room itself. We support all four, so a fault has one owner.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "15 min", title: "Critical response", text: "Response time on critical issues under our support agreements." },
    { value: `${portfolioData.employees}+`, title: "Specialists in-house", text: "Separate teams for AV installation, programming and network." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Biamp\nquestions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Is GS IT an authorised Biamp dealer in Dubai?",
      answer:
        "Yes. GS IT is an authorised Biamp dealer in the UAE. We design, install, programme and support Biamp audio systems for meeting rooms, training spaces and whole buildings, with genuine Biamp products and manufacturer warranty.",
    },
    {
      question: "Which Biamp system is right for my meeting room?",
      answer:
        "It depends on room size, ceiling height and how the room is used. A Parlé video bar suits small rooms, Devio SCX with ceiling microphones suits medium rooms, and TesiraFORTÉ X suits boardrooms and larger spaces. We confirm the fit during the room survey and demo.",
    },
    {
      question: "Does Biamp work with Microsoft Teams and Zoom?",
      answer:
        "Yes. TesiraFORTÉ X, Devio SCX and Parlé VBC 2800 rooms are certified for Microsoft Teams and Zoom Rooms, and key TesiraFORTÉ X and Devio SCX bundles are Cisco certified. Biamp also connects over USB to any laptop or room PC.",
    },
    {
      question: "Can you work with our existing Biamp system?",
      answer:
        "Yes. We audit existing Tesira, Devio and Parlé installations, update firmware, reprogramme and retune rooms, and extend the system to new spaces.",
    },
    {
      question: "Can we hear Biamp before we commit?",
      answer: "Yes. We demo a working setup in your own room. Work begins only after you approve the proposal.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your Biamp room\n with an AV engineer",
  highlightLast: 3,
  image: `${IMG}/cta.webp`,
  steps: [
    "Tell us how many rooms you have and how they are used.",
    "We survey the space and demo Biamp on site.",
    "You get a per-room proposal. Work starts only when you agree.",
  ],
  button: { text: "Talk to an AV engineer", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote =
  "Biamp, Tesira, Parlé and Devio are trademarks of Biamp Systems, LLC. Microsoft Teams, Zoom and Cisco are trademarks of their respective owners.";
