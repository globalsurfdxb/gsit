import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "GAMING ZONE AV & IT · DUBAI, UAE",
  heading: "Level Up Every Gaming Session.\n Bring the Action. Own the Game. ",
  highlightLast: 6,
  description: "GS IT designs and installs the display, audio, lighting, and network systems that keep high-density gaming venues stable under real player load, not just on launch day.",
  backgroundImage: "/assets/images/gaming-zone/banner.jpeg",
  mobbanner: "/assets/images/gaming-zone/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "IT Experience" },
    { value: "1 Team", desc: "Complete Setup" },
    { value: 'Multi-Station', desc: "Gaming Ready" },
    { value: "End-to-End", desc: "Support & AMC" }
  ],
  buttons: [
    {
      text: "Explore solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
    {
      text: "Talk to an expert",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-transparent border border-white",
      dark: true,
      href: "/",
    },
  ],
};
export const overviewData = {
  backgroundImage: "/assets/images/gaming-zone/main.jpeg",
  mobbanner: "/assets/images/gaming-zone/main.jpeg",
  tag: "Overview",
  heading: "Built for Every Match, \n Mission, and Tournament ",
  highlightLast: 3,
  description: [`A gaming zone is not a bigger living room. Dozens of stations pulling bandwidth at once, synchronized lighting cues, and displays that cannot drop a frame during a tournament all demand infrastructure that is planned as one system, not assembled from separate purchases.`,
    `GS IT handles the full path from technical design through installation, calibration, and long-term support, so the venue stays predictable under both a quiet Tuesday afternoon and a packed weekend tournament.`]

};
export const servicesData = {
  tag: "WHATS IS INSIDE THE SYSTEM ",
  heading: "Everything You Need for a \n Complete Gaming Experience",
  highlightLast: 4,
  subhead: "From immersive displays and powerful audio to reliable networking and dynamic lighting, every component works together to create an engaging, high-performance gaming environment.",
servicesData: [
  {
    icon: "Gauge",
    title: "High performance Displays",
    description: "Commercial 4K panels with high refresh rates for smooth, consistent visuals at every station.",
    href: "#",
    featured: true,
  },
  {
    icon: "AudioLines",
    title: "Immersive Audio",
    description: "Multi-channel systems with beamforming mic arrays and noise suppression for clear sound in loud rooms.",
    href: "#",
    featured: true,
  },
  {
    icon: "Network",
    title: "High-capacity Network",
    description: "Enterprise-grade, multi-gigabit backbone with low jitter and VLAN segmentation per zone.",
    href: "#",
    featured: true,
  },
  {
    icon: "AlignHorizontalJustifyCenter",
    title: "Centralized AV Control",
    description: "One touch interface governs IP, RS-232, IR, and relay devices across the whole venue.",
    href: "#",
    featured: true,
  },
  {
    icon: "Copy",
    title: "Multi-zone Architecture",
    description: "Independent audio and video per area, managed centrally from a single dashboard.",
    href: "#",
    featured: true,
  },
  {
    icon: "Spotlight",
    title: "AV Synchronized Lighting",
    description: "DMX/IP-controlled LED lighting that reacts in time with gameplay and scene changes.",
    href: "#",
    featured: true,
  },
],
};


export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Our Trusted Technology Alliances ",
  highlightLast: 2,
}
export const partnerslogoData = [
  { src: "/assets/images/gaming-zone/partner1.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner2.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner3.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner4.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner5.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner6.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner7.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner8.svg", alt: "" },
  { src: "/assets/images/gaming-zone/partner9.svg", alt: "" }, 
];





export const recomData = {
  backgroundImage: "/assets/images/gaming-zone/ctabanner.jpeg",
  mobbanner: "/assets/images/gaming-zone/ctabanner.jpeg",
  tag: "",
  heading: "Discuss your gaming zone \n requirements with GS IT ",
  highlightLast: 9,
  description: "Free consultation, no obligation. Walk us through your space.",

  cta: "Get a consultation ",
};

export const featuresData = {
      
  tag: "VENUE TYPES",
  heading: "Built for Every Kind of Gaming Venue", 
  highlightLast: 2,
  subhead:
    "From competitive esports arenas to casual gaming lounges, GS IT brings together the technology, connectivity, and control needed to keep every gaming environment running smoothly.",
items:[ 
  {
    id: "ptz-cameras",
    title: "Esports Arenas",
    description:"Coordinated AV, lighting, and network to keep every station in sync during live competition.",
    image: "/assets/images/gaming-zone/venue1.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Gaming Lounges & Cafes",
    description:"Stable multi-device connectivity that is simple for staff to operate day to day.",
    image: "/assets/images/gaming-zone/venue2.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Entertainment Zones",
    description:"AR/VR-ready capacity for malls and resorts with high foot traffic.",
    image: "/assets/images/gaming-zone/venue3.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Training & Simulation",
    description:"Precise, low-latency visuals for realistic, repeatable simulation sessions.",
    image: "/assets/images/gaming-zone/venue4.jpeg",
  }, 
]
  };

 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Frequently Asked Questions",
  highlightLast: 3,
  faqData: [
  {
    question: "What are Gaming Zone Solutions?",
    answer: "Gaming Zone Solutions combine displays, audio, lighting, networking, and other technology into a professionally integrated gaming environment. GS IT designs these solutions for gaming lounges, esports arenas, entertainment venues, hotels, resorts, and other commercial spaces.",
  },
  {
    question: "Can GS IT design a gaming zone based on my space?",
    answer: "Yes. GS IT plans the gaming zone around your available space, layout, number of users, gaming requirements, and business objectives. The setup can also be aligned with your venue's overall design and brand identity.",
  },
  {
    question: "What is included in a Gaming Zone Solution?",
    answer: "Depending on the project, the solution can include commercial displays, projection systems, professional audio, programmable lighting, network infrastructure, system integration, installation, calibration, and centralized management. GS IT can also provide ongoing maintenance and technical support.",
  },
  {
    question: "Can Gaming Zone Solutions support multiple gaming devices?",
    answer: "Yes. The infrastructure can be designed to support multiple gaming PCs, consoles, displays, and other connected devices simultaneously. Network capacity and equipment are planned according to the expected number of users and devices.",
  },
  {
    question: "How important is networking for a gaming zone?",
    answer: "A reliable network is essential for online and multiplayer gaming. GS IT designs the network infrastructure to support high device density, stable connectivity, and low-latency performance while allowing room for future expansion.",
  },
  {
    question: "Can the gaming zone be expanded in the future?",
    answer: "Yes. GS IT can design the infrastructure with scalability in mind, allowing businesses to add gaming stations, displays, networking equipment, or other technologies as their requirements grow.",
  },
  {
    question: "Does GS IT provide installation and system integration?",
    answer: "Yes. GS IT manages professional installation, system integration, configuration, calibration, and testing to ensure the different components work together as intended.",
  },
  {
    question: "Do you provide maintenance and technical support after installation?",
    answer: "Yes. GS IT provides ongoing technical support and maintenance services, including troubleshooting, updates, preventive maintenance, and AMC options to help keep the gaming environment operational.",
  },
  {
    question: "Which businesses can benefit from Gaming Zone Solutions?",
    answer: "Gaming Zone Solutions are suitable for gaming lounges, esports arenas, entertainment centers, malls, hotels, resorts, corporate campuses, simulation centers, and other venues looking to create an engaging gaming experience.",
  },
  {
    question: "Can GS IT help plan the complete gaming zone from the beginning?",
    answer: "Yes. GS IT can support the project from initial planning and infrastructure design through equipment integration, installation, testing, and ongoing support, providing a coordinated approach to the complete gaming environment.",
  },
],
};


export const ITArchitectureData = {
  tag: "BUILT TO PERFORM",
  heading: "Make Every \n Gaming Session Count",
  highlightLast: 3,
  subhead:
    "Create a gaming environment that attracts more players, encourages repeat visits, supports new revenue opportunities, and keeps your venue running smoothly during every session.",
  items: [
  {
    type: "card",
    icon: "Rocket",
    title: "Zero Lag Performance",
    description: "Provide instantaneous system response for critical applications, reducing latency, and enhancing operational efficiency.",
  },
  {
    type: "card",
    icon: "Cast",
    title: "Flawless Streaming",
    description: "Enable uninterrupted high-definition content delivery for seamless presentations, demonstrations, and media operations.",
  },
  {
    type: "card",
    icon: "ShieldCheck",
    title: "Pro-Level AV Experience",
    description: "Elevate audio-visual output to industry-leading standards, creating immersive and engaging environments.",
  },
  {
    type: "card",
    icon: "Wifi",
    title: "Uninterrupted Multiplayer Experience",
    description: "Reliable connections for collaborative or competitive setups, minimizing downtime.",
  },
  {
    type: "card",
    icon: "Gauge",
    title: "Stable High-Speed Connectivity",
    description: "Support consistent, high-performance network access to support demanding applications, large-scale deployments.",
  },
  {
    type: "card",
    icon: "Wallpaper",
    title: "Consistent Visual Comfort",
    description: "Deliver clear, easy-on-the-eyes visuals for prolonged gaming sessions, boosting performance and user satisfaction.",
  },
],
};
export const whychooseData = {
  tag: "WHY CHOOSE GS IT",
  heading: "Why Gaming \n Venues Choose GS IT",
  highlightLast: 4,
  subhead:
    "GS IT brings AV, networking, infrastructure, and technical support together under one team, giving your gaming zone the right foundation from setup to long-term operation.",
  items: [
  {
    type: "card",
    title: "360-Degree Technology Capability",
    description: "Integrated expertise across AV, networking, collaboration, and infrastructure enables cohesive solutions across complex environments.",
  },
  {
    type: "card",
    title: "Proven Trust Across the UAE",
    description: "Long-standing partnerships across Dubai and the UAE reflect consistent delivery of enterprise AV, networking, and gaming zone solutions.",
  },
  {
    type: "card",
    title: "End-to-End Ownership with AMC",
    description: "Complete lifecycle management from design and deployment to structured AMC ensures continuity, stability, and controlled system upkeep.",
  },
  {
    type: "card",
    title: "In-House Technical Teams",
    description: "Certified engineers and technicians manage deployment and support directly, ensuring controlled execution and faster issue resolution.",
  },
  {
    type: "card",
    title: "All-in-One Technology Partner",
    description: "A single accountable partner simplifies coordination, delivering unified planning, implementation, and ongoing support.",
  },
  {
    type: "card",
    title: "Business and IT Alignment",
    description: "Technology solutions are designed to align operational workflows with IT frameworks, supporting measurable outcomes and long-term adaptability.",
  },
],
};
export const postdevelopmentData = {
  tag: "HOW A PROJECT RUNS ",
  heading: "From Setup to Game On",
  highlightLast: 2,
  subhead:
    "We take your gaming zone from the first site check to final testing and ongoing support, making sure every system is ready for smooth, reliable play.",
 data: [
  {
    number: "01",
    title: "Assess",
    description: "Site survey, player density, and layout review.",
  },
  {
    number: "02",
    title: "Design",
    description: "System architecture sized to the venue and use case.",
  },
  {
    number: "03",
    title: "Install",
    description: "Certified engineers handle wiring, mounting, and integration.",
  },
  {
    number: "04",
    title: "Calibrate",
    description: "Testing and tuning under real load before handover.",
  },
  {
    number: "05",
    title: "Support",
    description: "Structured AMC for firmware, monitoring, and repairs.",
  }, 
],
};


