import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "AUDITORIUM AV SOLUTIONS · DUBAI, UAE · SINCE 2013",
  heading: "Custom Auditorium Solutions \n Built for Long-Term Reliability",
  highlightLast: 4,
  description: "GS IT customizes each audio video system for auditoriums to its seating capacity and layout, delivering clear audio and sharp visuals.",
  backgroundImage: "/assets/images/auditorium-solutions/banner.jpg",
  mobbanner: "/assets/images/auditorium-solutions/banner.jpg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "Designing the Right AV Infrastructure" },
    { value: "Wall to Wall", desc: "Speaker Coverage Reaching Every Corner" },
    { value: 'One Panel', desc: "Sound, Screens and Lighting Run Together" },
    { value: "Any Hall Size", desc: "Lecture Halls Through Main Auditoriums" }
  ],
  buttons: [
    {
      text: "Book a site visit",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "What we offer",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};
export const overviewData = {
  backgroundImage: "/assets/images/auditorium-solutions/main.jpg",
  mobbanner: "/assets/images/auditorium-solutions/main.jpg",
  tag: "Overview",
  heading: "Reimagine Your Space with \n Auditorium AV Solutions ",
  highlightLast: 3,
  description: [`Auditorium AV solutions integrate speaker layouts, screen placements, and stage controls into a single, coordinated system that function seamlessly regardless of the venue size.  GS IT provides AV design and integration services for businesses and institutions across the UAE.`,
    `Our role covers the full path from studying seating layout and ceiling height to selecting the right equipment optimized for the unique characteristics of the space. After installation and calibration, you are equipped with a fully optimized system that your staff can confidently run without any technical AV training. `]

};
export const servicesData = {
  tag: "WHAT WE OFFER ",
  heading: "Auditorium \n AV Design & Equipment",
  highlightLast: 4,
  subhead: "Our auditorium AV solutions designed to deliver seamless listener and presenter experience.",
servicesData: [
  {
    icon: "AudioLines",
    title: "Professional Sound & Acoustic Design",
    description: "Acoustics and speaker layouts mapped to the hall shape and seating depth for clear audio.",
    href: "#",
    featured: true,
  },
  {
    icon: "Volume2",
    title: "Speaker System Calibration & Installation",
    description: "Precision tuning of line array and point source systems to match every seat in the hall.",
    href: "#",
    featured: true,
  },
  {
    icon: "MicVocal",
    title: "Stage Audio & Microphone Systems",
    description: "Handheld, lapel and hanging mics configured for speech, performances and multi-mic events.",
    href: "#",
    featured: true,
  },
  {
    icon: "Columns3",
    title: "Projection, LED & Video Walls",
    description: "Visual displays and projectors scaled to ensure readability from the back of the room.",
    href: "#",
    featured: true,
  },
  {
    icon: "Spotlight",
    title: "Smart Control & Performance Lighting",
    description: "Automated stage lighting and room controls integrated into one interface for easy shifts.",
    href: "#",
    featured: true,
  },
  {
    icon: "MonitorPlay",
    title: "Live Streaming & Camera Tracking",
    description: "Broadcast-ready camera and streaming setups configured to capture and share live sessions.",
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
  { src: "/assets/images/auditorium-solutions/partner1.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner2.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner3.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner4.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner5.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner6.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner7.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner8.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner9.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner10.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner11.svg", alt: "" },
  { src: "/assets/images/auditorium-solutions/partner12.svg", alt: "" }, 
];





export const recomData = {
  backgroundImage: "/assets/images/auditorium-solutions/ctabanner.jpg",
  mobbanner: "/assets/images/auditorium-solutions/ctabanner.jpg",
  tag: "",
  heading: "Looking forward to having an engaging \n experience with the auditorium AV \n solutions? ",
  highlightLast: 14,
  description: "",

  cta: "Get a free consultation ",
};



export const industriesData = {
  tag: "INDUSTRIES WE SERVE ",
  heading: "Auditorium AV Solutions \n Optimized for Your Sector  ",
  highlightLast: 4,
  subhead:
    "We configure display dimensions and microphone ranges to suit corporate, academic, and civic halls.",
  industriesData: [
  {
    icon: "GraduationCap",
    title: "Educational Institutions",
    description: "Schools/universities running lecture sessions, graduation or assembly ceremonies.",
    href: "",
  },
  {
    icon: "Building",
    title: "Corporate & Business Centers",
    description: "Townhalls and briefings held across single or multi floor office campuses in the UAE.",
    href: "",
  },
  {
    icon: "Landmark",
    title: "Government & Community Halls",
    description: "Public sessions and community gatherings that need even coverage across every seat.",
    href: "",
  },
  {
    icon: "University",
    title: "Hotels & Convention Centers",
    description: "Conferences and banquets moving between event formats inside the same multipurpose hall.",
    href: "",
  },
  {
    icon: "/assets/images/icons/mosque.svg",
    title: "Religious & Cultural Venues",
    description: "Sermons and gatherings that depend on clear speech reinforcement across a full hall.",
    href: "",
  },
  {
    icon: "/assets/images/icons/hall.svg",
    title: "Performance & Cultural Halls",
    description: "Theatres and auditoriums hosting live music and drama under one integrated AV system.",
    href: "",
  },
],

industryCTA: {
  title: "Your Industry",
  description: "Don't you see yours ? 1500+ clients across every sector. Let's talk",
  href: "/",
},
};
export const grayboxData = {
  tag: "Why Choose Us",
  heading: "Certified Integration & \n Technical Precision in Dubai",
  highlightLast: 4,
  subhead: `We focus on reliable hardware and clean wiring to prevent technical failures during live events.`,
  items: [
  {
    type: "01",
    image: "",
    icon: "",
    title: "Backed by Global AV Partners",
    description: "Equipment is sourced through certified partners to secure long-term component support.",
    href: "",
  },
  {
    type: "02",
    image: "",
    icon: "",
    title: "Measured Before Specification",
    description: "Acoustic sweeps and spatial models get completed before selecting any technical system.",
    href: "",
  },
  {
    type: "03",
    image: "",
    icon: "",
    title: "Acoustic Precision for Any \n Capacity",
    description: "The same sound and video quality carry through whether a hall seats fifty or a thousand.",
    href: "",
  },
  {
    type: "04",
    image: "",
    icon: "",
    title: "Existing Hardware Kept in Use",
    description: "Existing displays, speakers, and control gear get reused wherever they still meet the job.",
    href: "",
  },
  {
    type: "05",
    image: "",
    icon: "",
    title: "User-Aligned System Controls",
    description: "Control interfaces are built around how your internal staff already manage live events.",
    href: "",
  },
  {
    type: "06",
    image: "",
    icon: "",
    title: "Ready for Seamless Upgrades",
    description: "Systems are planned with spare capacity to add new equipment without a full rebuild.",
    href: "",
  },
],
}; export const serverChoicesData = {
  tag: "Data Management",
  heading: "Custom Server \n Storage Solutions for Business ",
  highlightLast: 4 ,
  subhead:
    "The technologies that define every installation of Wi-Fi solution in Dubai.",
 items: [
  {
    type: "card",
    icon: "Network",
     
    title: "Network-Attached Storage (NAS)",
    description: "Let multiple office devices open shared company files instantly.",
  },
  {
    type: "card",
    icon: "Database",
    
    title: "Storage Area Network (SAN)",
    description: "Give multiple heavy servers high-speed access to data pools. ",
  },
  {
    type: "image",
    image: "/assets/images/server-and-storage/data1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/server-and-storage/data2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "PlugZap", 
    title: "Direct-Attached Storage (DAS)",
    description: "Plug storage straight into one machine for fast, simple access.",
  },
  {
    type: "card",
    icon: "FolderLock",
    
    title: "Hybrid Cloud Storage",
    description: "Keep local file access fast while securing copies in the cloud.",
  },
],
};
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on \n Auditorium Solutions ",
  highlightLast: 6,
  faqData: [
  {
    question: "How much does an auditorium sound system cost in the UAE?",
    answer: "Auditorium sound system cost shifts mainly with hall size and the speaker technology chosen for the space. A small lecture hall needs far less amplification than a five hundred seat hall with a balcony. GS IT provides a cost estimate after reviewing seating capacity and stage use during a site visit.",
  },
  {
    question: "What does an auditorium sound system installation project usually include?",
    answer: "An auditorium sound system installation usually brings together speakers, a digital mixer and stage microphones under one control interface built for the room. Mounting hardware and cable routing get scoped into the same project instead of showing up as a later add-on. Lighting and projection get added only when a hall needs a combined AV build.",
  },
  {
    question: "How long does an auditorium AV system design project take from start to finish?",
    answer: "Timeline depends on hall size and how much of the space needs new wiring versus reused infrastructure. A single hall auditorium AV system design project typically moves from design to handover within a few weeks once scope gets confirmed. Larger multipurpose halls with lighting and stage integration take longer to plan and test.",
  },
  {
    question: "Can an existing audio system for auditorium use be upgraded instead of replaced?",
    answer: "Yes in many cases. An audio system for auditorium use with speakers and microphones still within their working life can often stay in place while outdated processing or control equipment gets replaced. GS IT evaluates existing hardware on the first site visit before recommending what stays.",
  },
  {
    question: "What is the best sound system for auditorium halls that include a balcony?",
    answer: "The best sound system for auditorium halls with a balcony usually pairs a main line array with dedicated delay speakers under the overhang. Without delay speakers the rear floor and balcony seats often experience uneven volume and timing. Exact placement gets set through on-site measurement since a floor plan alone won't reveal real balcony behavior.",
  },
  {
    question: "Does auditorium AV design account for hybrid or streamed events?",
    answer: "Yes. Camera placement, microphone pickup pattern and available network bandwidth all factor into an auditorium AV design meant for streaming. This differs from a system built only for an in-room audience since remote viewers depend entirely on captured audio quality. GS IT scopes this requirement separately during planning.",
  },
  {
    question: "Why does auditorium sound system price vary between similarly sized halls?",
    answer: "Auditorium sound system price moves with the acoustic conditions found inside each hall more than with seating count alone. A hall with hard parallel walls needs more acoustic treatment and processing power than one already built with absorbing surfaces. Existing wiring and available mounting positions also affect the final number.",
  },
  {
    question: "Is a music system for auditorium performances different from a speech focused setup?",
    answer: "Yes. A music system for auditorium performances carries a wider frequency range and higher headroom because live instruments push differently than a speaking voice. Subwoofers and extra stage monitoring usually get added when performance use is part of the brief. GS IT designs around the primary use case identified during the needs assessment.",
  },
  {
    question: "Does GS IT provide ongoing monitoring after an auditorium AV system goes live?",
    answer: "Ongoing monitoring is not part of a standard project and gets offered separately through a managed services or AMC agreement. Standard projects include hands-on training, so in-house staff can run the system daily without outside help. Businesses that want continued oversight can add this as a separate arrangement.",
  },
  {
    question: "Can more than one control panel operate the same auditorium AV system at once?",
    answer: "Yes. A properly configured system allows control from a stage podium, a control room, and a portable panel without conflict. Priority settings decide which panel takes precedence once a session is live. GS IT sets these permissions during the control system configuration stage.",
  },
],
};

export const WifiServicesData = {
  tag: "Our Services",  
  heading: "Advanced Wi-Fi Connectivity \n for Large Enterprises & Campuses ",
  highlightLast: 5 ,
  subhead:
    "Supporting Wi-Fi 6, 6E, and 7 standards, GS IT's campus Wi-Fi services enable long-term network stability across high-density sites.",
  items: [
    {
      image: "/assets/images/campus-wi-fi-solutions/ser1.jpeg",
      title: "Campus Wi-Fi Network Design",
      description: "Our team maps radio signal behavior across campus floors to plan AP layout.",
    },
    {
      image: "/assets/images/campus-wi-fi-solutions/ser2.jpeg",
      title: "Outdoor & Perimeter Coverage",
      description: "Weatherproof access points keep yards and open walkways connected to Wi-Fi.",
    },
    {
      image: "/assets/images/campus-wi-fi-solutions/ser3.jpeg",
      title: "Controller & Cloud Setup",
      description: "Every access point connects to one central cloud console for unified control.",
    },
    {
      image: "/assets/images/campus-wi-fi-solutions/ser4.jpeg",
      title: "Multi-Building Interconnectivity",
      description: "We run certified fiber and copper lines to link distributed switch rooms together.",
    },
    {
      image: "/assets/images/campus-wi-fi-solutions/ser5.jpeg",
      title: "Secure Access Configuration",
      description: "User groups receive custom security settings, network isolation, and logins.",
    },
    {
      image: "/assets/images/campus-wi-fi-solutions/ser6.jpeg",
      title: "Managed Wi-Fi Solutions",
      description: "Our technical team manages daily network monitoring, fixes, and updates for you.",
      href: "#",
    },
  ],
};
export const ITArchitectureData = {
  tag: "ACOUSTIC PLANNING",
  heading: "Auditorium Sound System Planning",
  highlightLast: 3,
  subhead:
    "Factors that decide how an auditorium AV design actually performs once seats fill up. ",
  items: [
  {
    type: "card",
    icon: "Server",
    title: "Room Shape & Reflections",
    description: "Non-parallel walls and angled ceilings scatter reflections to prevent harsh echoes.",
  },
  {
    type: "card",
    icon: "ShieldCheck",
    title: "Reverberation Time",
    description: "We measure sound decay times first to inform all speaker and material selections.",
  },
  {
    type: "card",
    icon: "Network",
    title: "Doors & Buffer Zones",
    description: "Acoustic lobbies and sealed entryways isolate the main hall from corridor noise.",
  },
  {
    type: "card",
    icon: "/assets/images/icons/refresh.svg",
    title: "Seating & Sightlines",
    description: "Designing sightlines seat by seat ensures clear stage views from every vantage point.",
  },
  {
    type: "card",
    icon: "CloudDownload",
    title: "Balcony & Overhang Depth",
    description: "Detailed planning accounts for hidden acoustic shadow zones beneath the balconies.",
  },
  {
    type: "card",
    icon: "Headset",
    title: "Surface Materials",
    description: "We match wall, floor, and ceiling finishes to absorb sound and prevent reverberation.",
  },
],
};
export const postdevelopmentData = {
  tag: "PROJECT EXECUTION ",
  heading: "The Path to a \n Reliable Auditorium Setup ",
  highlightLast: 3,
  subhead:
    "Every stage we navigate to deliver a fully calibrated auditorium space.",
 data: [
  {
    number: "01",
    title: "Requirements Review",
    description: "Analyzing the events your hall hosts and identifying the target audience.",
  },
  {
    number: "02",
    title: "Acoustic Assessment",
    description: "Studying room structure, reverberation metrics, and spatial audio behaviors.",
  },
  {
    number: "03",
    title: "System Design",
    description: "Mapping out hardware placements and signal paths to match the hall layout.",
  },
  {
    number: "04",
    title: "Installation & Rigging",
    description: "Fitting structural hardware and running hidden cable paths through the hall.",
  },
  {
    number: "05",
    title: "Calibration & Testing",
    description: "Tuning speaker frequencies and validating performance across seating zones.",
  },
  {
    number: "06",
    title: "Handover & Training",
    description: "Guiding your operational staff through daily management of the unified system.",
  },
],
};


