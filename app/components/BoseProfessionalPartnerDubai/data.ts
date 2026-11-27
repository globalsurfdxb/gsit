import { portfolioData } from "@/app/components/common/data";

const IMG = "/assets/images/bose-professional-partner-dubai";
const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Bose Professional Partner Dubai | Authorized Bose Reseller UAE | GS IT",
  description:
    "GS IT is an authorized Bose Professional (802 LABS) reseller and certified partner in Dubai. We design, install and support Bose Professional loudspeakers, amplifiers, ControlSpace processing and videobars across the UAE.",
  image: `${IMG}/banner.webp`,
};

export const bannerData = {
  badge: { label: "Authorized reseller, UAE", logo: `${IMG}/badge.webp`, alt: "Bose Professional" },
  tag: "Authorized Bose Professional Reseller",
  heading: "Bose Professional (802 LABS) \n Partner Dubai for sound in every space",
  highlightLast: 7,
  description:
    "GS IT is an authorized Bose Professional (802 LABS) reseller and certified partner in the UAE. We design, install and support Bose Professional audio for offices, meeting rooms, hotels, restaurants, retail and venues. We size each space to the right system, let you hear it on site, and stay accountable after go-live.",
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
  tag: "Why Bose Professional",
  heading: "Even, clear sound,\n from lobby to boardroom",
  highlightLast: 4,
  subhead:
    "Bose Professional (802 LABS) makes installed loudspeakers, amplifiers, processors and conferencing devices that are designed to work as one system. Your guests, staff and remote callers hear the same quality in every zone.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/overview.webp`,
      alt: "Bose Music app showing channel controls for an L1 Pro16 system",
      title: "Simple for your staff",
      dim: "Zone control from a tablet or wall panel",
      text: ["Staff change music, volume and presets per zone without calling a technician. The system stays as you designed it."],
    },
    {
      variant: "light",
      big: "50+",
      title: "Years in pro audio",
      dim: "Since the 802 in 1978",
      text: [
        "The Bose 802 loudspeaker launched the professional range in 1978. Today the portfolio covers installed sound, amplification, processing and conferencing.",
      ],
    },
    {
      variant: "dark",
      title: "One ecosystem",
      dim: "Designed and run in ControlSpace",
      text: [
        "Loudspeakers, amplifiers, processors and wall controls are configured in one software suite, ControlSpace Designer.",
        "Your system is easier to change, monitor and extend as the business grows.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "Bose Professional products we offer",
  heading: "The full Bose Professional range,\n matched to each space",
  highlightLast: 4,
  subhead:
    "From one meeting room to a hotel, mall or stadium. Every product category, grouped by what it does, so you can see what each space needs.",
  imageFit: "contain",
  data: [
    {
      image: `${IMG}/loudspeakers.webp`,
      alt: "Bose Professional ShowMatch line-array loudspeakers with rigging",
      tag: "Installed sound",
      title: "Loudspeakers",
      lead: "Background music and clear speech for offices, hospitality, retail and venues.",
      categories: [
        { title: "Ceiling Loudspeakers", text: "EdgeMax, DesignMax and FreeSpace in-ceiling models for even coverage at any ceiling height." },
        { title: "Surface and Pendant", text: "DesignMax, FreeSpace and AMU models for open ceilings, walls and outdoor areas." },
        { title: "Arrayable and Line Arrays", text: "ArenaMatch and ShowMatch arrays plus steerable line columns for halls, worship and stadiums." },
        { title: "Multipurpose", text: "AMM and Forum loudspeakers for event spaces, ballrooms and performance venues." },
        { title: "Subwoofers", text: "DesignMax, FreeSpace, AMM and MB subwoofers to add low end where music matters." },
      ],
    },
    {
      image: `${IMG}/amplifiers.webp`,
      alt: "Bose Professional Veritas integrated zone amplifier",
      tag: "Amplification",
      title: "Power amplifiers",
      lead: "The right power for every zone, sized so nothing is wasted.",
      categories: [
        { title: "Mixer Amplifiers", text: "Veritas and IZA amplifiers combine mixing and power for restaurants, retail and smaller venues." },
        { title: "Multichannel DSP Amplifiers", text: "PowerShare and PowerSpace+ share power across channels, with built-in processing." },
        { title: "Non-DSP Amplifiers", text: "PowerSpace amplifiers for straightforward installed systems." },
      ],
    },
    {
      image: `${IMG}/processing.webp`,
      alt: "Bose Professional ControlSpace CSP-1248 commercial sound processor",
      tag: "Processing and control",
      title: "Signal processing and control",
      lead: "The system's brain, from fixed zone mixers to fully networked designs.",
      categories: [
        { title: "Open-Architecture Processors", text: "ControlSpace EX-1280 and ESP-880A for custom, networked audio systems." },
        { title: "Fixed-Architecture Processors", text: "ControlSpace CSP-1248 and CSP-428 for multi-zone music and paging." },
        { title: "Conferencing Processors", text: "EX-1280C, EX-12AEC and EX-440C with echo cancellation for boardrooms and training rooms." },
        { title: "Endpoints", text: "EX-4ML, EX-8ML and EX-UH for microphone, line and USB connections around the room." },
        { title: "Wall Controllers", text: "CC-16, CC-64 and CC-D controls so staff can change sources and volume per zone." },
      ],
    },
    {
      image: `${IMG}/conferencing.webp`,
      alt: "Bose Professional Videobar VB1 on a table stand",
      tag: "Meeting rooms",
      title: "Conferencing",
      lead: "Clear video calls from a focus booth to a full boardroom.",
      categories: [
        {
          title: "Videobars",
          text: "VB1 and VB-S all-in-one bars with a 4K camera, beam-steering microphones and Bose speakers over one USB cable.",
        },
        {
          title: "Conferencing System Packs",
          text: "Pre-matched ES1 and DS4 packs of processor, microphones and loudspeakers for medium and large rooms.",
        },
      ],
    },
    {
      image: `${IMG}/portable.webp`,
      alt: "Bose Professional F1 Model 812 portable loudspeaker",
      tag: "Portable",
      title: "Portable PA",
      lead: "Sound you can move between rooms, events and sites.",
      categories: [
        { title: "Portable Line Arrays", text: "L1 systems for presenters, live music and events up to mid-size audiences." },
        { title: "Portable Loudspeakers", text: "S1 and F1 loudspeakers for training, retail activations and smaller events." },
        { title: "Mixers", text: "ToneMatch mixers built to pair with L1 and S1 systems." },
      ],
    },
  ],
  platforms: {
    strong: "Works with",
    text: "the meeting platforms and networks you already run.",
    chips: ["Microsoft Teams", "Zoom", "Google Meet", "USB to any laptop", "Dante networking"],
  },
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From site survey\n to support after go-live",
  highlightLast: 4,
  subhead:
    "A networked audio system is also an IT project. One partner handles the design, the install, the network and the support.",
  data: [
    {
      icon: "House",
      title: "Site survey and on-site demo",
      description: "We assess each space's size, ceiling, acoustics and network, then let you hear Bose Professional in your own space.",
    },
    {
      icon: "TrendingUp",
      title: "Audio system design",
      description: "We model loudspeaker coverage and specify amplifiers and processing per zone, so sound is even without over-specifying.",
    },
    {
      icon: "Wrench",
      title: "Installation and programming",
      description:
        "Dedicated AV installers mount and cable the system. Specialist programmers configure ControlSpace, tune each zone and connect conferencing to Teams or Zoom.",
    },
    {
      icon: "Headphones",
      title: "Support after go-live",
      description: "Firmware updates, remote monitoring, user handover and a 15-minute response on critical issues for clients on a support agreement.",
    },
  ],
};

export const traitsData = {
  tag: "Bose Professional characteristics",
  heading: "Professional sound,\n simple to run every day",
  highlightLast: 5,
  subhead: "What the Bose Professional range has in common, from a single meeting room to a multi-zone venue.",
  data: [
    {
      icon: "AudioLines",
      title: "Even coverage, fewer speakers",
      description: "EdgeMax uses PhaseGuide technology to fill a room from the ceiling edge, which cuts speaker count in many spaces.",
      highlight: true,
    },
    {
      icon: "Palette",
      title: "Designed to blend in",
      description: "DesignMax loudspeakers suit premium interiors, and selected models are weatherized for terraces and outdoor dining.",
    },
    {
      icon: "Network",
      title: "One software platform",
      description: "ControlSpace Designer configures processors, amplifiers and controls together, so changes are made in one place.",
    },
    {
      icon: "Zap",
      title: "Power used efficiently",
      description: "PowerShare amplifiers share power across channels, so each zone gets what it needs from fewer units.",
    },
    {
      icon: "MonitorCheck",
      title: "Remote monitoring",
      description: "ControlSpace Cloud and Remote let us check system health and diagnose faults without a site visit.",
    },
    {
      icon: "Usb",
      title: "Plug-in conferencing",
      description: "Videobars connect to any laptop or room PC over USB and work with Teams, Zoom and Google Meet.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "Hear it in your space\n before work begins",
  highlightLast: 3,
  subhead: "Installation starts only after you have heard the demo and agreed the proposal.",
  data: [
    { title: "Site survey", text: "Space size, ceiling, acoustics, network and how each zone is used." },
    { title: "On-site demo", text: "A working Bose Professional setup in your own space.", highlight: true },
    { title: "Proposal", text: "System design per zone, scope and timeline, agreed with you first." },
    { title: "Install and programme", text: "Cabling, mounting, ControlSpace programming, network setup and tuning." },
    { title: "Handover and support", text: "System tests, user walkthrough, documentation and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\n Every layer of your IT.",
  highlightLast: 5,
  subhead:
    "A Bose Professional system depends on the network, the room, the meeting platform and the people using it. We support all four, so a fault has one owner.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "15 min", title: "Critical response", text: "Response time on critical issues under our support agreements." },
    { value: `${portfolioData.employees}+`, title: "Specialists in-house", text: "Separate teams for AV installation, programming and network." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Bose Professional\nquestions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Is GS IT an authorized Bose Professional reseller in Dubai?",
      answer:
        "Yes. GS IT is an authorized Bose Professional (802 LABS) reseller and certified partner in the UAE. We supply genuine Bose Professional products with manufacturer warranty, and we design, install, programme and support the systems we deliver.",
    },
    {
      question: "Which Bose Professional system is right for my space?",
      answer:
        "It depends on the space size, ceiling, acoustics and use. A Videobar VB-S suits small meeting rooms, VB1 suits small to medium rooms, and a ControlSpace conferencing processor with ceiling microphones suits boardrooms. For hospitality and retail, DesignMax or FreeSpace loudspeakers with a Veritas or PowerShare amplifier are a common starting point. We confirm the fit during the survey and demo.",
    },
    {
      question: "Do Bose Professional videobars work with Microsoft Teams and Zoom?",
      answer:
        "Yes. The Videobar VB1 is certified for Microsoft Teams and Zoom, and both VB1 and VB-S work with Teams, Zoom and Google Meet over a single USB connection to any laptop or room PC.",
    },
    {
      question: "Can you work with our existing Bose system?",
      answer:
        "Yes. We audit existing Bose Professional installations, update firmware, reprogramme and retune zones, replace end-of-life units and extend the system to new spaces.",
    },
    {
      question: "Is Bose Professional the same company as Bose?",
      answer:
        "No. Bose Professional became an independent company in 2023 and focuses on commercial and installed audio. Bose consumer products such as headphones and home speakers are a separate business.",
    },
    {
      question: "Bose Professional is becoming 802 LABS. What does that mean for us?",
      answer:
        "Bose Professional has announced a phased move to a new brand name, 802 LABS, starting in February 2027. The name changes; the product range and the team behind it carry on. GS IT continues to supply and support your system through the transition and after it.",
    },
    {
      question: "Can we hear Bose Professional before we commit?",
      answer: "Yes. We demo a working setup in your own space. Work begins only after you approve the proposal.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your Bose system\n with an AV engineer",
  highlightLast: 4,
  image: `${IMG}/cta.webp`,
  steps: [
    "Tell us which spaces you have and how they are used.",
    "We survey the site and demo Bose Professional on location.",
    "You get a per-zone proposal. Work starts only when you agree.",
  ],
  button: { text: "Talk to an AV engineer", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote =
  "Bose, Bose Professional and 802 LABS are trademarks of their respective owners. ControlSpace, DesignMax, EdgeMax, FreeSpace, ArenaMatch, ShowMatch, PowerShare and other product names are trademarks of Bose Professional. Microsoft Teams, Zoom and Google Meet are trademarks of their respective owners.";
