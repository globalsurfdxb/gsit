 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Structured Cabling Solutions  ·  Dubai, UAE ",
  heading: "Structured Cabling Solution to \n Meet All Your Infrastructure Demands",
  highlightLast: 5,
  description: "GS IT delivers ISO standard structured cabling solutions that create organized, high-performance network infrastructure for businesses across the UAE with every connection built to last. ",
  backgroundImage: "/assets/images/structured-cabling/banner.jpeg", 
  mobbanner: "/assets/images/structured-cabling/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ `, desc:"Years Serving UAE Business"},
   { value: `${portfolioData.clients}+ `, desc:"Clients Across UAE "},
   { value: `ISO/IEC `, desc:"11801 & TIA/EIA compliant "},
   { value: `${portfolioData.google_score} `, desc:"Google Review "}
  ],
  buttons: [
    {
      text: "Explore our solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,

    {
      text: "Talk to our experts ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};   
  export const elvOverviewData = {
  tag: "What is structured cabling?",
  heading: "The Backbone of \n Every Connected Building",
  highlightLast: 5,
  subhead:
    "A structured cabling system is a standardized, organized system of cables and hardware that creates a reliable physical network for voice, data cabling, video, and building management, all running through a single, coherent infrastructure. Each component works together to keep your network organized and easy to maintain. The diagram below illustrates how the structured cabling architecture from the entrance facility to the work area outlets creates one unified network infrastructure.",
  image : "/assets/images/structured-cabling/s-cabling.jpeg",
    networkStep: [
   {
     number: "01",
     title: "Entrance Facility (EF)",
     description:
       "Where carrier services enter the building the demarcation point and protection.",
   },
   {
     number: "02",
     title: "Equipment Room (MDF)",
     description: "Houses core switches and the main cross-connect for the whole site.",
   },
   {
     number: "03",
     title: "Backbone Cabling",
     description: "Fiber/copper risers linking the MDF to each floor's telecom room.",
   },
   {
     number: "04",
     title: "Telecom Room (IDF)",
     description: "Floor distributor the horizontal cross-connect and patch panels.",
   },
   {
     number: "05",
     title: "Horizontal Cabling",
     description: "Twisted-pair runs (<90 m) from the IDF to each work-area outlet.",
   },
   {
     number: "06",
     title: "Work Area",
     description: "The outlet and patch cord connecting the user's device to the network.",
   },
 ]
};
export const  longtermValueData = {
  tag: "LONG-TERM VALUE ",
  heading: "Built Once. Ready for Years.",
  highlightLast: 3, 
  image: "/assets/images/structured-cabling/main.jpeg",
  cards: [
    {
      id: "design",
      titleLine1: "Future-",
      titleLine2: "Ready Design",
      description: "A well designed cabling plant that supports technology upgrades without recabling, protecting your capital investment. ",
      highlighted: true,
    },
    {
      id: "spaces",
      titleLine1: "Vendor-",
      titleLine2: "Neutral Infrastructure",
      description: "Supports any network equipment brand, Cisco, Huawei, Ubiquiti, so you are never locked into a single vendor. ",
    },
    {
      id: "support",
      titleLine1: "Reduced Downtime & ",
      titleLine2: "Troubleshooting",
      description: "Labelled, documented, and tested runs make fault-finding fast, minutes instead of hours when network issues arise.",
    },
    {
      id: "future",
      titleLine1: "Supports Higher ",
      titleLine2: "Bandwidth Demands",
      description: "From 1G to 10G and beyond, the right cabling category ensures your infrastructure is ready for PoE, Wi-Fi 6, and beyond. ",
    },
  ],
};
export const cablingservicesData = {
  tag: "WHAT WE OFFER",
  heading: "Structured Cabling \n Solutions & Services We Provide",
  highlightLast: 5,
  subhead:
    "Each service is available as a standalone engagement or as part of a fully integrated cabling infrastructure setup. GS IT handles supply, installation, configuration, and ongoing support of structured cabling solutions from a single point of contact.",
  description: "",
  cardsitem: [
    {
      image: "/assets/images/structured-cabling/office-cabling.jpeg",
      titleLine1: "Office Cabling",
      titleLine2: "",
      description:
        "Structured Cat6/Cat6A cabling, patch panels, and labeling for zero-downtime workspaces.",
      highlighted: true,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/wifi-cabling.jpeg",
      titleLine1: "WiFi Cabling",
      titleLine2: "",
      description:
        "Access point cabling and network connectivity for floor-wide wireless coverage.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/cctv-cabling.jpeg",
      titleLine1: "CCTV Cabling",
      titleLine2: "",
      description:
        "CCTV camera cabling with power and network connections for reliable 24/7 surveillance.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/telephonic-cabling.jpeg",
      titleLine1: "Telephonic Cabling",
      titleLine2: "",
      description:
        "PBX and extension wiring designed for consistent, drop-free call performance.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/villa-cabling.jpeg",
      titleLine1: "Villa Cabling",
      titleLine2: "",
      description:
        "Concealed in-wall wiring for smart locks, lighting, and home-automation panels.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/optic-fiber-splicing.jpeg",
      titleLine1: "Optic Fiber Splicing",
      titleLine2: "",
      description:
        "Securely spliced single-mode/multi-mode fiber for low-loss, gigabit-speed transmission.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/audio-video-cabling.jpeg",
      titleLine1: "Audio/Video Cabling",
      titleLine2: "",
      description:
        "HDMI, speaker, and AV network cabling synced for lag-free presentations and playback.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/data-centers-cabling.jpeg",
      titleLine1: "Data Centers Cabling",
      titleLine2: "",
      description:
        "Rack-to-rack structured cabling built for high-density loads and future scaling.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/warehouse-cabling.jpeg",
      titleLine1: "Warehouse Cabling",
      titleLine2: "",
      description:
        "Conduit-protected cabling built for dust, heat, and heavy-machinery environments.",
      highlighted: false,
      href: "",
    },
    {
      image: "/assets/images/structured-cabling/cable-rearrangement.jpeg",
      titleLine1: "Cable Rearrangement",
      titleLine2: "",
      description:
        "Re-terminated, re-labeled, and re-routed cabling for audits and easy fault tracing.",
      highlighted: false,
      href: "",
    },
  ],
};// data/cablingUpgradeData.ts
 
export const cablingUpgradeData= {
  tag: "WHEN IT IS NEEDED",
  heading: "Common Reasons \n Businesses Upgrade Their Cabling",
  highlightLast: 4,
  reasons: [
    "Opening a new office, branch, warehouse or commercial facility",
    "Experiencing recurring connectivity or physical-layer faults",
    "Relocating an existing workplace",
    "Expanding network capacity or preparing for higher bandwidth",
    "Adding Wi-Fi access points, CCTV cameras or access control",
    "Reorganising network or server rooms",
    "Replacing undocumented or point-to-point cabling",
    "Preparing a building for fit-out, handover or technology upgrades",
  ],
  backgroundImage: "/assets/images/structured-cabling/ctabanner.jpeg",
};
export const technologyoptionsData = {
  tag: "ABOUT THIS SERVICE ",
  heading: "Upgrade to IP Telephony \n That Works the Way Your Business Does.  ",
  highlightLast: 7,  
  subhead: "At GS IT, IP phone deployment is a managed transition. We assess your existing infrastructure, design a telephony architecture that fits your team size and call volumes, supply certified hardware, and configure every extension. Businesses in Dubai get a working phone system on day one, backed by SLA response and ongoing management. ",
  headers : {
    scenario: "What GS IT Provides ", 
    with: "What It Does  ",
  },
   table: [ 
  {
    scenario: "IP Phone Installation ", 
    with: "Complete installation and configuration regardless of the scale of the infrastructure setup "
  }, 
  {
    scenario: "Call Routing and IVR ", 
    with: "Filters incoming calls with recorded voice prompts and automated information exchange "
  }, 
  {
    scenario: "PoE Support ", 
    with: "Both power and data delivered through a single Ethernet cable, reducing hardware requirements "
  }, 
  {
    scenario: "Secure Communication", 
    with: "SIP and SRTP protocols encrypting all voice and video transmissions."
  }, 
  {
    scenario: "Consultation and Support", 
    with: "Remote support, maintenance, and troubleshooting with thorough pre-deployment consultation."
  },  
]
};
 

export const technologyOptionsTableData = {
  tag: "TECHNOLOGY OPTIONS",
  heading: "Cat6, Cat6A and Fibre: \n Choosing the Right Medium",
  highlightLast: 4,
  subhead:
    "The correct choice depends on bandwidth, distance, device requirements, containment, interference conditions, project lifespan and budget. A site survey and approved design should determine the final specification.",
  columns: {
    media: "Media",
    maxSpeed: "Max Speed",
    bandwidth: "Bandwidth",
    maxDistance: "Max Distance",
    typicalUse: "Typical use",
  },
  rows: [
    {
      media: "Cat6",
      maxSpeed: "1 Gb (10 Gb ≤55 m)",
      bandwidth: "250 MHz",
      maxDistance: "100 m",
      typicalUse: "Standard desk drops",
    },
    {
      media: "Cat6A",
      maxSpeed: "10 Gb",
      bandwidth: "500 MHz",
      maxDistance: "100 m",
      typicalUse: "Wi-Fi APs, high-PoE, new builds",
    },
    {
      media: "Cat7 / 7A",
      maxSpeed: "10 Gb",
      bandwidth: "600-1000 MHz",
      maxDistance: "100 m",
      typicalUse: "Shielded, high-EMI environments",
    },
    {
      media: "OM4 MMF",
      maxSpeed: "100 Gb",
      bandwidth: "--",
      maxDistance: "150 m @100G",
      typicalUse: "In-building fiber backbone",
    },
    {
      media: "OS2 SMF",
      maxSpeed: "400 Gb+",
      bandwidth: "--",
      maxDistance: "up to 10 km",
      typicalUse: "Campus / building-to-building",
    },
  ],
};

 
export const StandardsComplianceData  = {
   
    tag: "TECHNOLOGY OPTIONS",
    heading: "Standards & Compliance",
    highlightLast: 1,
    subhead:
      "Structured cabling is defined by a small family of standards. Designing and certifying to them is what makes a plant vendor-neutral, warrantable and inspection-ready.",
 
  items: [
    {
      title: "ANSI/TIA-568",
      description:
        "The core commercial cabling standard — topology, media, distances, performance.",
    },
    {
      title: "ISO/IEC 11801",
      description: "The international equivalent — Class D-II links, global projects.",
    },
    {
      title: "TIA-569 / 606",
      description: "Pathways & spaces (569) and labelling / administration (606).",
    },
    {
      title: "TIA-942",
      description: "Data-center infrastructure — the Tier ratings for redundancy.",
    },
  ],
};
export const howweworkData = {
  tag: "HOW WE WORK",
  heading: "From Site Survey to \n Signed-Off Installation",
  highlightLast: 2,
  subhead:
    "A straightforward five-step process from your first call to a fully certified, documented cabling plant, with zero surprises.",
  data: [
    {
      number: "01",
      title: "Site Survey",
      description:
        "We visit your site to understand floor plans, cable routes, user density, equipment locations, and future growth plans.",
    },
    {
      number: "02",
      title: "Design & BOQ",
      description:
        "Our engineers produce a detailed design drawing, cable schedule, and bill of quantities with standard and premium material options.",
    },
    {
      number: "03",
      title: "Installation",
      description:
        "Our certified cabling team installs the approved design, neat, trunked, and labelled at every run. Work phased around business hours where needed.",
    },
    {
      number: "04",
      title: "Testing & Certification",
      description:
        "Every port is tested with Fluke Tier 2 equipment. OTDR traces for all fiber runs. Full pass/fail report generated for your records.",
    },
    {
      number: "05",
      title: "Handover & Docs",
      description:
        "As-built drawings, test reports, cable schedule, and warranty certificates handed over. We remain available for any post-installation queries.",
    },
  ],
};
export const IndustriesHeaderData = {
  tag: "INDUSTRIES WE SERVE",
  heading: "Cabling Solutions Across \nEvery Sector",
  highlightLast: 2,
  subhead:
    "From corporate headquarters to hospitality, healthcare, and logistics. GS IT's team brings deep expertise in structured cabling in Dubai, as one of the trusted networking cabling companies in Dubai, understanding the unique requirements of each environment.",
  industriesData: [
    {
      icon: "Hotel",
      title: "Corporate Offices",
      description:
        "Structured cabling services for modern office connectivity, communication, and network performance.",
      href: "",
    },
    {
      icon: "Handshake",
      title: "Hospitality & Hotels",
      description:
        "Reliable network cabling solutions for hotels, resorts, and guest connectivity requirements.",
      href: "",
    },
    {
      icon: "ShoppingCart",
      title: "Retail & Malls",
      description:
        "Scalable cabling infrastructure for retail operations, security systems, and wireless connectivity.",
      href: "",
    },
    {
      icon: "Hospital",
      title: "Healthcare",
      description:
        "Secure and efficient cabling solutions designed for healthcare facilities and critical communication networks.",
      href: "",
    },
    {
      icon: "Database",
      title: "Data Centers",
      description:
        "High-performance structured cabling systems for organized and reliable data center connectivity.",
      href: "",
    },
    {
      icon: "Warehouse",
      title: "Logistics & Warehousing",
      description:
        "Durable network cabling solutions supporting warehouse operations, connectivity, and surveillance systems.",
      href: "",
    },
    {
      icon: "Landmark",
      title: "Government & Public Sector",
      description:
        "High-security, standards-compliant cabling for government offices and public building network upgrades.",
      href: "",
    },
  ],
  industryCTA: {
    title: "Your Industry",
    description: "Don't you see yours ? 1500+ clients across every sector. Let's talk",
    href: "/",
  },
};
export const whyGsitData = {
  tag: "WHY GS IT",
  heading: "What Makes \nOur Cabling Different",
  highlightLast: 3,
  subhead:
    `GS IT has been installing network infrastructure across the UAE since 2011. Here is what ${portfolioData.years}+ years of field experience means for your project.`,
  servicesData: [
    {
      icon: "BookUser",
      title: "In-House Engineers Only",
      description:
        "No subcontracting. Every installation is completed by GS IT engineers, ensuring consistent quality, safety, and accountability.",
      href: "#",
      featured: true,
    },
    {
      icon: "Award",
      title: "Tier 2 Certified Testing",
      description:
        "Every installed network cable is professionally tested, certified, and delivered with performance verification reports.",
      href: "#",
      featured: false,
    },
    {
      icon: "CalendarCheck",
      title: "Delivered on Schedule",
      description:
        "Daily project coordination keeps cabling installations aligned with fit-out and construction timelines.",
      href: "#",
      featured: false,
    },
    {
      icon: "FileCheckCorner",
      title: "Full Documentation Handover",
      description:
        "Complete drawings, cable schedules, and test reports are provided after successful project completion.",
      href: "#",
      featured: false,
    },
    {
      icon: "/assets/images/structured-cabling/refresh.svg",
      title: "360° IT Infrastructure Partner",
      description:
        "GS IT delivers cabling, networking, CCTV, Wi-Fi, and IT infrastructure solutions under one partner.",
      href: "#",
      featured: false,
    },
    {
      icon: "CircleDollarSign",
      title: "Transparent Pricing",
      description:
        "Detailed BOQs with clear pricing ensure complete cost visibility without unexpected charges.",
      href: "#",
      featured: false,
    },
  ],
}; 

export const trackRecordData = {
  tag: "OUR PERFORMANCE",
  heading: "A Proven Track Record \nAcross the UAE",
  highlightLast: 3,
  subhead:
    "GS IT holds an extensive portfolio of network cabling in Dubai services and projects, serving businesses throughout Dubai and other Emirates of UAE. We pride ourselves on delivering structured cabling services in Dubai with high system uptime accuracy. Our team collaborates closely with clients to design custom structured wiring solutions, troubleshoot issues, and ensure a seamless operational environment.",
  stats: [
    {
      value: "150",
      suffix: "+",
      title: "Optic Fiber Cabling Projects",
      description:
        "Smart cabling solutions with round-the-clock management and support on optic fiber cabling, splicing, and termination.",
    },
    {
      value: "100",
      suffix: "+",
      title: "Network and Server Room Setup Projects",
      description:
        "Extensive experience with design and installation of network and server room setups across Dubai, UAE.",
    },
    {
      value: "200",
      suffix: "+",
      title: "Data Cabling Projects",
      description:
        "A leading structured cabling service provider with expertise in designing and installing high-performance data cabling systems.",
    },
  ],
};
  export const partnersData = {
  tag: " Technology Partnership",
  heading: "Trusted Brands. \n Proven Technology ",
  highlightLast: 2 , 
  };
  export const logoData= [
  { src: "/assets/images/structured-cabling/partner1.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner2.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner3.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner4.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner5.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner6.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner7.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner8.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner9.svg", alt: "" },
  { src: "/assets/images/structured-cabling/partner10.svg", alt: "" },   
]  ; 
export const recomData = {
    backgroundImage: "/assets/images/structured-cabling/footerbanner.jpeg", 
  mobbanner: "/assets/images/structured-cabling/footerbanner.jpeg", 
  tag: "",
  heading: "Ready to build a cabling system \n that lasts?",
    highlightLast: 9,
  description: "Get a free site assessment and no-obligation quotation from GS IT's structured cabling team. We will survey your premises, design the right system, and give you a detailed BOQ within 48 hours.",
 cta: "Get a free site assessment",
 }; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on \n Video Conferencing Solutions in Dubai ",
  highlightLast:9,
  faqData : [
  {
    question: "What is Structured Cabling?",
    answer:
      "A structured cabling system is a standardized, organized infrastructure of cables and hardware (such as copper and fiber) that supports multiple systems like data, voice, and security in a building. It uses a designed, \"structured\" approach with smaller, manageable subsystems to provide reliable, scalable performance, making it easier to manage, troubleshoot, and update network technology.",
  },
  {
    question: "What is the difference between structured and unstructured cabling?",
    answer:
      "Structured cabling is an organized, standardized, and scalable infrastructure designed for long-term reliability and easy maintenance, utilizing patch panels and labeled cables. Unstructured cabling (point-to-point) is an unmanaged, messy approach where cables are added as needed, leading to high maintenance costs and troubleshooting.",
  },
  {
    question: "Why use a structured cabling system?",
    answer:
      "A structured cabling system is used to provide an organized, standardized, and scalable telecommunications infrastructure that supports high-speed data, voice, and video systems. It minimizes network downtime, simplifies troubleshooting, and reduces long-term maintenance costs while offering flexibility for future technology upgrades.",
  },
  {
    question: "What is the difference between Cat6 and Cat6A?",
    answer:
      "Cat6 and Cat6A cables differ mainly in bandwidth frequency, maximum distance for 10 Gigabit speeds, and physical thickness. Cat6 supports 10 Gbps up to 55 meters at 250 MHz, while Cat6a supports 10 Gbps up to 100 meters at 500 MHz.",
  },
  {
    question: "How long does a structured cabling project take?",
    answer:
      "A typical 50-port single-floor structured cabling installation project in Dubai takes 2 to 3 days plus 1 day for testing and labelling. Larger or multi-floor projects are phased across days or weeks to work around your business hours. GS IT provides a project timeline before work begins.",
  },
  {
    question: "Will the work disrupt my office operations?",
    answer:
      "GS IT plans cabling works in phases and can schedule after hours or during weekends for occupied offices. Our engineers work cleanly with trunking and cable management, dust sheets are used and areas tidied after each session.",
  },
  {
    question: "Do I need structured cabling if I use Wi-Fi?",
    answer:
      "Yes, Wi-Fi access points are connected through structured cabling infrastructure, where network cables provide both data connectivity and electrical power using PoE (Power over Ethernet). Structured cabling serves as the backbone of an organization's entire IT network, supporting both wired and wireless devices including computers, IP phones, CCTV systems, printers, access control systems, and meeting room technologies. A properly designed cabling system improves network reliability and simplifies management.",
  },
  {
    question: "What warranty comes with a GS IT cabling installation?",
    answer:
      "GS IT provides workmanship warranty coverage on all structured cabling installations, ensuring reliable performance, professional installation quality, and compliance with industry standards. For qualifying projects using certified cabling components and approved infrastructure systems, extended manufacturer-backed warranties may also be available. Warranty coverage can vary depending on the project's scope, selected products, and certification requirements.",
  },
  {
    question: "Can GS IT audit or upgrade my existing cabling?",
    answer:
      "Absolutely. We carry out structured cabling audits for existing installations, testing, re-labelling, and documentation. Where upgrades are needed (e.g., from Cat5e to Cat6A), we can phase the work or run new cables alongside existing infrastructure. ",
  },
  {
    question: "What are the advantages of structured cabling?",
    answer:
      "Structured cabling offers a standardized, organized, and reliable infrastructure that supports high-speed data transmission, significantly reducing network downtime and maintenance costs. Its primary advantages include high flexibility for, moves, adds, and changes, enhanced scalability to support future technology upgrades, improved, cleaner, and more aesthetic organization of data centers and office spaces. ",
  },
]
};
export const BusinessImpactData = {
  tag: "Related services",
  heading: "Complete Your \n Network Infrastructure",
  highlightLast: 2, 
  subhead: "As a full-service structured cabling company in Dubai, GS IT goes beyond cabling to deliver complete IT infrastructure across the UAE. Our network cabling services in Dubai are complemented by a full suite of solutions to support your operations end to end.",
  table: [
   {
    icon: "Wifi",
    title: "Wi-Fi & Network Design",
    description: "Wireless survey, AP placement, and managed network infrastructure on top of your cabling plant.",
    href: "",
  }, 
   {
    icon: "ShieldCheck",
    title: "SIRA CCTV Systems",
    description: "IP CCTV design, installation, and SIRA compliance for Dubai running over your structured cabling backbone.",
    href: "",
  }, 
   {
    icon: "DoorClosedLocked",
    title: "Door Access Control",
    description: "IP based access control systems with card readers, biometrics, and remote management, cabled and commissioned by GS IT.",
    href: "",
  }, 
   {
    icon: "Toolbox",
    title: "IT AMC Services",
    description: "Annual maintenance contracts for your network and IT infrastructure, keeping your cabling plant and devices running at peak.",
    href: "",
  },   
],
 
};