import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "BGM System Integrators · Dubai, UAE · Since 2013",
  heading: "Multi-Zone Audio & \n Background Music Solutions in Dubai",
  highlightLast: 5,
  description: "GS IT designs and installs multi-zone BGM solutions for all commercial sites in the UAE with speaker coverage planned area by area from a measured site survey.",
  backgroundImage: "/assets/images/bgm-solutions/banner.jpeg",
  mobbanner: "/assets/images/bgm-solutions/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "Delivering AV & IT projects in the UAE" },
    { value: "100V Line", desc: "Distribution for long speaker runs across floors" },
    { value: 'Multi-Zone', desc: "Independent source & volume control per area" },
    { value: "IP66 Rated", desc: "Weather options for terrace & poolside units" }
  ],
  buttons: [
    {
      text: "Explore the solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Talk to BGM experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};
export const servicesData = {
  tag: "OUR SOLUTIONS",
  heading: "Site-Wide BGM Solutions \n Integrated Across All Premises",
  highlightLast: 4,
  subhead: "As a background music service provider, we maintain clear sound distribution across indoor and outdoor spaces from a central system.",
 servicesData: [
  {
    icon: "Grid2x2",
    title: "Multi-Zone BGM Setup",
    description: "Each designated zone supports separate volume levels and custom playlist options.",
    href: "#",
    featured: true,
  },
  {
    icon: "RadioTower",
    title: "Networked Audio Distribution",
    description: "IP networks transport digital audio signals directly to amplifiers across every floor.",
    href: "#",
    featured: true,
  },
  {
    icon: "ClockArrowUp",
    title: "Scheduled Music Programming",
    description: "Playback schedules adjust automatically, removing the need for manual site checks.",
    href: "#",
    featured: true,
  },
  {
    icon: "Speaker",
    title: "Outdoor & Terrace Audio",
    description: "Weatherproof gear delivers steady background sound across patios and open areas.",
    href: "#",
    featured: true,
  },
  {
    icon: "Megaphone",
    title: "Paging & Announcement Priority",
    description: "Live announcements override background music, which resumes smoothly right after.",
    href: "#",
    featured: true,
  },
  {
    icon: "SlidersHorizontal",
    title: "System Upgrades & Retrofits",
    description: "Control units update to modern specs without altering functional speaker networks.",
    href: "#",
    featured: true,
  },
],
};
  export const overviewData = {
  tag: "Overview",
  heading: "Background Music Layout \n Shaped Around Site Architecture",
  highlightLast: 4 ,
  subhead:
    "Custom speaker placement delivers consistent background audio while matching the aesthetic details of the venue interior.",
 items: [
  {
    type: "card",
    icon: "Palette",
    title: "Even Coverage\nWithout Hot Spots",
    description: "Speaker spacing is calibrated to hold volume steady as guests move across different areas of the venue.",
  },
  {
    type: "card",
    icon: "SquareDashedMousePointer",
    title: "Speaker Finishes \nMatched to the Interior",
    description: "Grilles and mounts align directly with the interior design plan, helping hardware blend into the ceiling.",
  },
  {
    type: "image",
    image: "/assets/images/bgm-solutions/overview1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/bgm-solutions/overview2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "Fullscreen",
    title: "Spill Controlled \nBetween Adjacent Zones",
    description: "Boundary tuning keeps a quiet lounge distinct and peaceful right next to a high-energy bar environment.",
  },
  {
    type: "card",
    icon: "ThermometerSun",
    title: "Expansion Kept \nOpen at the Design Stage",
    description: "Amplifier capacity and cable paths accommodate extra speaker zones when the business grows down the line.",
  },
],
};
export const whyChooseUsData = {
  tag: "WHY CHOOSE US",
  heading: "Measured Acoustic Precision \n Executed by Certified AV Experts",
  highlightLast: 5,
  subhead: `GS IT's engineering discipline and site-specific planning ensure background music for streaming performs reliably for every business across the UAE.`,
  points: [
    {
      title: "Peak Occupancy Calibration",
      description: "System settings account for high-occupancy hours to keep music clear and relaxing.",
    },
    {
      title: "Off-Site Rack Staging",
      description: "Equipment racks are wired and signal-tested off-site before arriving at your venue.",
    },
    {
      title: "Surface-Safe Speaker Mounting",
      description: "Exact ceiling layouts guide every cutout, preserving high-end decorative finishes.",
    },

    {
      title: "Dedicated Zone Routing",
      description: "Individual signal feeds are mapped directly to each venue zone to prevent overlap.",
    },
    {
      title: "Complete As-Built Documentation",
      description: "Handover packages include updated zone layouts, cable schedules, and DSP records.",
    },
    {
      title: "Ongoing AMC Coverage",
      description: "Dedicated support contracts cover routine preventive visits and rapid fault response.",
    },
  ],
}


export const throwDistanceData = {
  tag: "Zone Planning",
  heading: "Site-Specific \n BGM Architecture",
  highlightLast: 2 ,
  subhead:
    "Our background music services balance coverage requirements and input routing to match the operational demands of each space.",
  tablecolumn: [
  { key: "key1", label: "Space Type" },
  { key: "key2", label: "Typical Zones" },
  { key: "key3", label: "Distance for 6 m Wide Image" },
  { key: "key4", label: "Source Setup" },
],
items: [
  {
    key1: "Five-star hotel public areas",
    key2: "10 to 16",
    key3: "Pendant units across the atrium with in-ceiling coverage along guest corridors",
    key4: "Dedicated audio streams per restaurant outlet and lounge area",
  },
  {
    key1: "Shopping mall trading floor",
    key2: "12 and above",
    key3: "Pendant or ceiling coverage across concourses with horn units in parking decks",
    key4: "Central matrix system with local input overrides per anchor tenant",
  },
  {
    key1: "Hypermarket or department store",
    key2: "8 to 12",
    key3: "Uniform ceiling grid with pendant speakers beneath exposed service ceilings",
    key4: "Single central audio feed managed by automated schedule changes",
  },
  {
    key1: "Fine dining restaurant in a hotel",
    key2: "5 to 8",
    key3: "Discreet in-ceiling coverage over dining with weather-rated units on the terrace",
    key4: "Independent audio feeds for the bar, dining room, and private spaces",
  },
  {
    key1: "IT park or corporate campus",
    key2: "8 to 14",
    key3: "Low-level ceiling coverage across lift lobbies, typical office floors, and cafeterias",
    key4: "Central building source paired with reception desk level controls",
  },
  {
    key1: "Automotive or retail showroom",
    key2: "6 to 10",
    key3: "Column speakers in double-height display halls with ceiling units in handover bays",
    key4: "Primary system feed with high-output preset modes for launch events",
  },
],
cta: { 
  title: "Need a custom BGM layout for your commercial space?",
  description:"Every property demands a distinct zone configuration; our engineers build specialized BGM sound system customized to your exact layout.",
  button:'Book a consultation',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] text-primary max-w-[50ch]',
   classdesc:"max-w-[66ch]"
}
};

export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Brands We Integrate ",
  highlightLast: 1,
}
export const partnerslogoData = [
  { src: "/assets/images/bgm-solutions/partner1.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner2.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner3.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner4.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner5.svg", alt: "" },  
  { src: "/assets/images/bgm-solutions/partner6.svg", alt: "" },  
  { src: "/assets/images/bgm-solutions/partner7.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner8.svg", alt: "" },
  { src: "/assets/images/bgm-solutions/partner9.svg", alt: "" },   
];





export const recomData = {
  backgroundImage: "/assets/images/bgm-solutions/ctabanner.jpeg",
  mobbanner: "/assets/images/bgm-solutions/ctabanner.jpeg",
  tag: "",
  heading: "Start your BGM project with \n complete engineering support and \n custom design.",
  highlightLast: 13,
  description: "Talk to our technical specialists to align zone requirements, coverage needs, and installation schedules.",
  points:["Site Walkthrough at No Cost","Existing Cabling Assessed for Reuse","Room Left for Future Upgrades","Extended Support through AMC"],
  cta: "Book a consultaton ",
};

 

 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on BGM Solutions",
  highlightLast: 6,
  faqData: [
  {
    question: "How many BGM zones does our building actually need?",
    answer: "The total number of BGM zones is determined by how many areas require independent volume controls and distinct music sources. Small retail floors typically operate on two or three zones, whereas hotels may require ten or more. We confirm this count during our floor plan walkthrough to set the precise amplifier channel requirements for your background music & multi-zone audio solutions.",
  },
  {
    question: "Can a BGM system be installed in a building that is already trading?",
    answer: "Yes, a BGM system can be installed while your building remains fully operational. Cable runs and ceiling work are scheduled outside business hours or completed in phased sections to keep trading active. If ceilings are fully sealed, surface or pendant units are specified to preserve finished interiors without disruption.",
  },
  {
    question: "Do you supply music content or handle licensing?",
    answer: "No, we function solely as a background music service provider focused on hardware supply, installation, and system configuration. Licensing duties and content subscriptions remain the client's responsibility. We make sure your BGM sound system easily accepts inputs from local media devices, radio tuners, or dedicated hardware for streaming.",
  },
  {
    question: "Can maximum and minimum volume limits be set per zone?",
    answer: "Yes, volume limits can be locked within a predefined range on each control panel to prevent accidental adjustments. Source selection is restricted per zone, so staff cannot pull audio from adjacent areas. Our BGM solutions are delivered with these boundary controls already programmed into your presets.",
  },
  {
    question: "Will the BGM systems run over our existing office network?",
    answer: "Yes, a background music system for office use typically runs over standard IT cabling alongside existing network traffic. We review switch capacity and PoE availability during the initial survey to set up required VLAN and QoS parameters. If your current network handles heavy data traffic, the audio distribution is separated into its own network segment.",
  },
  {
    question: "Which manufacturers do you work with?",
    answer: "As an experienced background music provider, GS IT partners with leading brands like Biamp, Bose, QSC, Crestron, and Yamaha to supply reliable BGM systems. Selection depends on your specific acoustic needs and physical mounting space. Equipment choices are finalized only after the coverage design is fully approved.",
  },
  {
    question: "How long does an installation usually take?",
    answer: "Single-zone installations are completed within a few days of hardware delivery. Larger multi-floor projects typically span several weeks to align with broader fit-out schedules. You receive a structured timetable once coverage plans are finalized, with every major milestone confirmed in advance.",
  },
  {
    question: "What happens if a speaker or amplifier fails after a handover?",
    answer: "Hardware issues fall under the standard manufacturer warranty. On-site labor and hardware replacement by our engineers are included for clients with an active GS IT AMC contract. Non-contract sites can request pay-as-you-go service calls, though remote monitoring is only provided under the AMC.",
  },
  {
    question: "Can we add zones later without replacing the system?",
    answer: "Yes, future expansion is simple when the headroom is factored into the initial design. We provision extra amplifier channels and cable pathways from the start, so new zones connect smoothly. Networked systems make adding coverage straightforward via your existing cabling following a brief site assessment.",
  },
  {
    question: "Do you deliver BGM projects outside Dubai?",
    answer: "Yes, we provide background music services across the entire UAE, including Abu Dhabi, Sharjah, and the Northern Emirates. Headquartered in Dubai Silicon Oasis, our team handles commercial installations for all business background music setups. Mobilization timelines are outlined clearly during the quotation phase.",
  },
],
};


 
 
export const WifiServicesData = {
  tag: "Speaker Types",  
  heading: "Versatile Speaker Options",
  highlightLast: 2 ,
  subhead:
    "BGM system design incorporates specialized speaker profiles to handle varying ceiling heights and room acoustics.",
 items: [
  {
    image: "/assets/images/bgm-solutions/speaker1.jpeg",
    title: "In-Ceiling Audio Systems",
    description: "Flush-mounted units install cleanly into suspended or plastered ceiling surfaces.",
  },
  {
    image: "/assets/images/bgm-solutions/speaker2.jpeg",
    title: "Surface-Mount Wall Speakers",
    description: "Slim indoor models attach directly to walls where ceiling access is restricted.",
  },
  {
    image: "/assets/images/bgm-solutions/speaker3.jpeg",
    title: "Weatherproof Wall Speakers",
    description: "Sealed wall enclosures provide full-range music across outdoor patios and decks.",
  },
  {
    image: "/assets/images/bgm-solutions/speaker4.jpeg",
    title: "Pendant & Open-Ceiling Loudspeakers",
    description: "Suspended hardware projects audio downward via high, open plenum structures.",
  },
  {
    image: "/assets/images/bgm-solutions/speaker5.jpeg",
    title: "Column & Slim Line-Array Speakers",
    description: "Narrow sound beams reduce echo across tall, hard-surfaced lobby environments.",
  },
  {
    image: "/assets/images/bgm-solutions/speaker6.jpeg",
    title: "Weatherproof & High-Output Horns",
    description: "Durable enclosures carry voice and audio across wide outdoor service areas.",
  },
],
};
export const IndustriesHeaderData = {
  tag: "Who We Support",
  heading: "BGM Solutions \n Adapted to Your Space",
  highlightLast: 4,
  subhead:
    "Unique room acoustics and occupancy patterns decide how each BGM system is laid out on site.",
  data: [
  {
    icon: "HouseHeart",
    title: "Hotels & Resorts",
    description: "Balanced audio streams adjust sound across lobbies, bars, and pools.",
    href: "",
  },
  {
    icon: "Building2",
    title: "Shopping Malls",
    description: "Central amplifier racks power concourses, dining, and parking zones.",
    href: "",
  },
  {
    icon: "ShoppingCart",
    title: "Supermarkets & Hypermarkets",
    description: "Wide-dispersion ceiling units project even sound down high-shelf aisles.",
    href: "",
  },
  {
    icon: "Building",
    title: "Corporate Offices & IT Parks",
    description: "Lobbies play ambient music while open desk spaces remain undisturbed.",
    href: "",
  },
  {
    icon: "Warehouse",
    title: "Showrooms & Galleries",
    description: "Discreet wall speakers integrate seamlessly into tall exhibition spaces.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare Facilities",
    description: "Soft music calms waiting areas without bleeding into clinical rooms.",
    href: "",
  },
  {
    icon: "Landmark",
    title: "Theme Parks & Attractions",
    description: "Targeted outdoor and indoor zones run distinct themed music profiles.",
    href: "",
  },
],
industryCTA: {
  title: "Your Environment",
  description: "Trusted by 1500+ clients, we can adapt the BGM setups to your venue.",
  href: "/",
},
};
export const postdevelopmentData = {
  tag: "Deployment Procedure ",
  heading: "BGM System Rollout: \n Executed Across Stages",
  highlightLast: 3,
  subhead:
    "System implementation follows an organized process, aligning hardware rollouts with venue operating schedules.",
 data: [
  {
    number: "01",
    title: "Site Survey",
    description: "Assess ceiling construction, structural access, and room volume on location.",
  },
  {
    number: "02",
    title: "Zone & Coverage Design",
    description: "Map speaker coordinates and zone boundaries directly onto floor CAD layouts.",
  },
  {
    number: "03",
    title: "Equipment Specification",
    description: "Calculate the load capacity to specify matching amp channels and speaker models.",
  },
  {
    number: "04",
    title: "Infrastructure Pre-Wiring",
    description: "Pull plenum-rated speaker wire and Cat6 network runs through open ceiling voids.",
  },
  {
    number: "05",
    title: "Installation & Tuning",
    description: "Mount hardware, set gain staging, and program DSP curves to match ambient SPL.",
  },
  {
    number: "06",
    title: "Handover & Training",
    description: "Save control presets on local touch panels and train the staff in daily operation.",
  },
],
};


