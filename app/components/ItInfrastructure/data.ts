 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "IT INFRASTRUCTURE DUBAI, UAE · SINCE 2013 ",
  heading: "Reliable & Ready to Scale \n IT Infrastructure Services in Dubai ",
  highlightLast: 5,
  description: "GS IT deploys and supports the network, cabling and server systems that keep a growing business in the UAE connected. We build these setups for daily reliability and steady performance. ",
  backgroundImage: "/assets/images/it-infrastructure/banner.jpeg", 
  mobbanner: "/assets/images/it-infrastructure/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ Years `, desc:"Hands-on infrastructure experience"},
   { value: `Full Coverage`, desc:"From cabling to servers and storage "},
   { value: `Multi-Sector`, desc:"Spanning offices, healthcare, retail, etc. "},
   { value: `UAE Wide`, desc:"Projects delivered across the Emirates "}
  ],
  buttons: [
    {
      text: "View our solutions ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,

    {
      text: "Connect with experts ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};    
 
export const strugglingIssuesData= {
  heading: "Struggling \n with these issues?",
  highlightLast: 1,
  ctaText: "Solve them with GS IT",
  ctaHref: "/contact",
  issues: [
    {
      icon: "/assets/images/it-infrastructure/icon1.svg",
      text: "Network outages your users discover before the IT team does",
    },
    {
      icon: "/assets/images/it-infrastructure/icon2.svg",
      text: "Infrastructure designed years ago but never properly reassessed",
    },
    {
      icon: "/assets/images/it-infrastructure/icon3.svg",
      text: "Legacy cabling limiting the performance of modern systems",
    },
    {
      icon: "/assets/images/it-infrastructure/icon4.svg",
      text: "Servers struggling under workloads they were never sized for",
    },
    {
      icon: "/assets/images/it-infrastructure/icon5.svg",
      text: "Cloud apps running slowly due to unoptimized WAN architecture",
    },
    {
      icon: "/assets/images/it-infrastructure/icon6.svg",
      text: "Juggling multiple vendors while core issues remain unresolved",
    },
  ],
};
 

export const ITArchitectureData = {
  tag: "OVERVIEW",
  heading: "Advanced IT Architecture for \n Modern Businesses",
  highlightLast: 2,
  subhead:
    "GS IT has spent over 13 years supporting IT infrastructure in Dubai, working with businesses across the UAE on projects of different sizes. Our IT infrastructure solutions and services span core networking and cabling to server, cloud and security systems.",
  items: [
    {
      type: "image",
      image: "/assets/images/it-infrastructure/mains.jpeg",
      title: "",
    },
    {
      type: "card",
      icon: "ShieldCheck",
      title: "Certified Across \nLeading Platforms",
      description:
        "Engineers carry certifications across major networking, cloud, and security platforms used worldwide.",
    },
    {
      type: "card",
      icon: "HeartHandshake",
      title: "Long-Standing \nPresence in the UAE",
      description:
        `${portfolioData.years}+ years of IT expertise in the UAE comes with supplier ties, permit familiarity, and compliance awareness.`,
    },
    {
      type: "card",
      icon: "HeartHandshake",
      title: "One Team from \nScoping to Handover",
      description:
        "The engineers who scope your project remain responsible throughout installation, testing, and final delivery.",
    },
    {
      type: "card",
      icon: "BriefcaseBusiness",
      title: "Confidentiality on \nEach Engagement",
      description:
        "Business systems, credentials, and internal data are handled under strict confidentiality on each engagement.",
    },
    {
      type: "cta",
      title: "Explore IT \nInfrastructure Consulting",
      description:
        "Strategic guidance on network design, capacity planning, and infrastructure optimization as your business grows.",
      href: "/it-infrastructure-consulting",
    },
  ],
};
export const whyGsitData = {
  tag: "The Problem",
  heading: "When Your Infrastructure \n Needs a Closer Review",
  highlightLast: 4,
  subhead: "Signs that often point toward the need for professional IT infrastructure services in Dubai.",
  servicesData : [
  {
    icon: "TriangleAlert",
    title: "Frequent Downtime",
    description: "Repeated outages usually trace back to aging switches or overloaded cabling runs.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "/assets/images/it-infrastructure/load.svg",
    title: "Slow File Access",
    description: "Delayed access to shared drives often signals a storage issue or local pipe congestion.",
    href: "#",
    featured: false,
  }, 
  {
    icon: "Cable",
    title: "Patchwork Cabling",
    description: "Unlabeled wires and mixed cable types turn simple troubleshooting into total chaos.",
    href: "#",
    featured: false,
  },  
  {
    icon: "WifiSync",
    title: "Weak Wi-Fi Signals",
    description: "Weak signal in certain parts of the office usually points to poor access point placement.",
    href: "#",
    featured: false,
  },  
  {
    icon: "/assets/images/it-infrastructure/charge.svg",
    title: "App Crashes & Lag",
    description: "Legacy server gear struggles under the weight of modern, resource-heavy applications.",
    href: "#",
    featured: false,
  },  
  {
    icon: "ChartColumnIncreasing",
    title: "Scaling Bottlenecks",
    description: "Adding new staff or devices without a proper plan strains network capacity over time.",
    href: "#",
    featured: false,
  },  
]
};
export const infrastructureData = {
  tag: "Our IT Infrastructure Solutions ",
  heading: "The Core Layers \n We Design, Deploy & Support",
  highlightLast: 5,
  subhead:
    "Our IT infrastructure services cover core network, cabling, and storage systems critical for running business operations.",
  cta:{
  title: "Looking for a specific IT infrastructure solution? ",
  description:"Our scope extends beyond the services featured here. Reach out today to evaluate how we can support your specific infrastructure needs. ",
  button:'Get in touch',
  background:"bg-[#F5F9FC]",
  classtitle:'text-primary text-32 mb-3 !leading-[1.3] tracking-[-1%]',
  classdesc:"max-w-[66ch]"
} ,
  cardData: [
    {
      id: "1",
      label: "Networking & Connectivity",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Enterprise Networking",
          titleLine2: "",
          description: "LAN/WAN builds engineered to keep multi-office traffic flowing continuously.",
          image: "/assets/images/it-infrastructure/networking1.jpeg",
          highlighted: true,
          url: "",
        }, 
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Switching & Routing",
          titleLine2: "",
          description: "Core switches and edge routers configured for maximum uptime and speed.",
          image: "/assets/images/it-infrastructure/networking2.jpeg",
          highlighted: true,
          url: "",
        }, 
        {
          id: "cctv-installation-maintenance",
          titleLine1: "VPN & SD-WAN",
          titleLine2: "",
          description: "Secure remote access and smart traffic routing set up across office branches.",
          image: "/assets/images/it-infrastructure/networking3.jpeg",
          highlighted: true,
          url: "",
        }, 
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Managed Wi-Fi Solutions",
          titleLine2: "",
          description: "Strategic access point layouts ensure total coverage across all office floors.",
          image: "/assets/images/it-infrastructure/networking4.jpeg",
          highlighted: true,
          url: "",
        },  
      ],
    },
    {
      id: "2",
      label: "Cabling Architecture",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Structured Cabling",
          titleLine2: "",
          description: "Cat6 and Cat6A copper runs, fully tested and labeled for easy maintenance.",
          image: "/assets/images/it-infrastructure/cabling1.jpeg",
          highlighted: true,
          url: "",
        }, 
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Racks & Enclosures",
          titleLine2: "",
          description: "Airflow-first cabinet organization keeps server equipment cool and accessible.",
          image: "/assets/images/it-infrastructure/cabling2.jpeg",
          highlighted: true,
          url: "",
        }, 
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Fiber Optic Cabling",
          titleLine2: "",
          description: "Inter-floor and cross-building connections powered by high-speed fiber optics.",
          image: "/assets/images/it-infrastructure/cabling3.jpeg",
          highlighted: true,
          url: "",
        },   
      ],
    },
    {
      id: "3",
      label: "Server & Storage",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "NAS Storage",
          titleLine2: "",
          description: "Centralized storage pools allow fast file access and simple automated backups.",
          image: "/assets/images/it-infrastructure/server1.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Synchronized Data Storage",
          titleLine2: "",
          description: "Mirrored data storage nodes protect active data from local hardware failures.",
          image: "/assets/images/it-infrastructure/server2.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Server & Storage Solutions",
          titleLine2: "",
          description: "Hardware and virtual hosts customized strictly to your business requirements.",
          image: "/assets/images/it-infrastructure/server3.jpeg",
          highlighted: true,
          url: "",
        },  
      ],
    },
    {
      id: "4",
      label: "Cloud Infrastructure",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Microsoft Azure Cloud Solutions",
          titleLine2: "",
          description: "Custom infrastructure and managed services configured to protect key workloads.",
          image: "/assets/images/it-infrastructure/cloud1.jpeg",
          highlighted: true,
          url: "",
        },   
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Microsoft 365 Cloud Solutions",
          titleLine2: "",
          description: "Smooth licensing, migration, and Teams setup backed by rigid security policies.",
          image: "/assets/images/it-infrastructure/cloud2.jpeg",
          highlighted: true,
          url: "",
        },   
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Desktop as a Service (DaaS)",
          titleLine2: "",
          description: "Virtual workstations grant secure Windows access from any location on any device.",
          image: "/assets/images/it-infrastructure/cloud3.jpeg",
          highlighted: true,
          url: "",
        },   
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Cloud Migration & Assessment",
          titleLine2: "",
          description: "We assess infrastructure, evaluate readiness, and execute phased migrations.",
          image: "/assets/images/it-infrastructure/cloud04.jpeg",
          highlighted: true,
          url: "",
        },   
      ],
    },
    {
      id: "5",
      label: "Cybersecurity Infrastructure",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Next Generation Firewalls",
          titleLine2: "",
          description: "Advanced security filtering that blocks modern threats from business networks. ",
          image: "/assets/images/it-infrastructure/cybersecurity01.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Endpoint & Device Security",
          titleLine2: "",
          description: "Protection applied across laptops, desktops, and mobile devices in daily use.",
          image: "/assets/images/it-infrastructure/cybersecurity02.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Data Loss Prevention (DLP)",
          titleLine2: "",
          description: " Stops confidential business files from being shared outside approved channels. ",
          image: "/assets/images/it-infrastructure/cybersecurity03.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Disaster Recovery",
          titleLine2: "",
          description: "Managed systems designed to quickly restore critical data after major outages. ",
          image: "/assets/images/it-infrastructure/cybersecurity04.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Business Continuity",
          titleLine2: "",
          description: "Operational strategies aimed at keeping key services active during disruptions. ",
          image: "/assets/images/it-infrastructure/cybersecurity05.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Email Security",
          titleLine2: "",
          description: "Suspicious emails get flagged and blocked well before reaching a staff inbox.",
          image: "/assets/images/it-infrastructure/cybersecurity06.jpeg",
          highlighted: true,
          url: "",
        },     
      ],
    },
    {
      id: "6",
      label: "Physical Security & Communication",
      cards: [
        {
          id: "cctv-installation-maintenance",
          titleLine1: "CCTV Surveillance",
          titleLine2: "",
          description: "Cameras positioned to monitor entry points and key areas across the whole site.",
          image: "/assets/images/it-infrastructure/physical1.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Access Control Solutions",
          titleLine2: "",
          description: "Card and biometric systems manage who can enter specific building locations.",
          image: "/assets/images/it-infrastructure/physical2.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "Enterprise Voice & Telephony",
          titleLine2: "",
          description: "Calls happen smoothly between desks, departments, and outside business lines.",
          image: "/assets/images/it-infrastructure/physical3.jpeg",
          highlighted: true,
          url: "",
        },  
        {
          id: "cctv-installation-maintenance",
          titleLine1: "IoT & Smart Building Connectivity",
          titleLine2: "",
          description: "Devices and systems stay connected, allowing automatic monitoring and control.",
          image: "/assets/images/it-infrastructure/physical04.jpeg",
          highlighted: true,
          url: "",
        },   
      ],
    },
   
  ],
};
export const BridgingData = {
  tag: "Bridging the Gaps",
  heading: "Common Infrastructure \n Gaps & How We Fixes Them",
  highlightLast: 6, 
  subhead: "Most infrastructure problems start small and go unaddressed. This is where an experienced IT infrastructure management company like GS IT makes a measurable difference.",
  headers : {
    scenario: "Common Gap",
    without: "What It Leads To",
    with: "How GS IT Approaches It ",
  },
   table: [ 
  {
    scenario: "Cabling installed in phases with no single plan",
    without: "Runs become hard to trace and slow to repair",
    with: "A structured cabling plan mapped before installation starts"
  },  
  {
    scenario: "Network sized for an old headcount",
    without: "Congestion grows as staff and devices increase",
    with: "Capacity planned around current and expected usage"
  },  
  {
    scenario: "Equipment sourced without a documented spec",
    without: "Mixed hardware makes future upgrades harder",
    with: "Equipment selected against a clear written project scope"
  },  
  {
    scenario: "Storage with no backup or mirroring plan",
    without: "A single failure can mean permanent data loss",
    with: "Synchronized storage set up across separate locations"
  },  
  {
    scenario: "Wi-Fi access points added only after complaints",
    without: "Coverage gaps appear in meeting rooms and corners",
    with: "Wireless coverage planned across the full floor plan"
  },  
  {
    scenario: "No rack labeling or as-built documentation",
    without: "Troubleshooting takes longer with every technician change",
    with: "Rack layouts and cable maps handed over at project close"
  },  
  {
    scenario: "Server room without a cooling or power plan",
    without: "Hardware runs hotter and fails sooner than expected",
    with: "Physical space assessed for airflow, power and rack fit"
  },  
  {
    scenario: "Office expansion planned without infrastructure input",
    without: "Moves get delayed waiting on cabling and network work ",
    with: "Cabling and network work planned ahead of the move date "
  }  
]
};
export const approachData = {
  tag: "Our Approach",
  heading: "Structured Site Engineering & \n Infrastructure Delivery",
  highlightLast: 2,
  subhead:
    "As one of the leading IT infrastructure companies in Dubai, we plan structured setups that protect daily work hours. ",
  data: [
    {
      number: "01",
      title: "Site Assessment",
      description:
        "A walkthrough helps assess the space and clarifies what the business needs.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "A detailed layout is drafted covering cable paths, rack space, and equipment.",
    },
    {
      number: "03",
      title: "Procurement & Sourcing",
      description:
        "We source authentic hardware and materials based on approved blueprints.",
    }, 
    {
      number: "04",
      title: "Installation & Testing",
      description:
        "Racks, switches, and cabling are set up on site, followed by speed testing.",
    }, 
    {
      number: "05",
      title: "Handover & Documentation",
      description:
        "Final cable maps, network configs, and warranty paperwork go to your team.",
    }, 
    {
      number: "06",
      title: "Ongoing Support & Maintenance ",
      description:
        "An AMC maintains the IT infrastructure and resolves issues as they arise. ",
    }, 
  ],
};
export const trackRecordData = {
  tag: "Built for UAE",
  heading: "Compliance with \n UAE Infrastructure Realities",
  highlightLast: 3,
  subhead:
    "Key local standards and conditions that guide how we design and deploy IT infrastructure in Dubai.",
  stats: [
    {  
      title: "ISO/IEC 11801 Cabling Standards",
      description:
        "Cabling layouts follow ISO/IEC 11801 cabling standards used across the UAE.",
    },
    { 
      title: "TDRA Data Residency Awareness",
      description:
        "Data center and cloud links are planned with TDRA data residency rules in mind.",
    },
    { 
      title: "SIRA-Certified CCTV Installations",
      description:
        "We are SIRA-licensed for the installation of CCTV systems across Dubai.",
    },
    { 
      title: "Du & Etisalat Aligned Designs",
      description:
        "Connectivity design accounts for reliance on du and Etisalat as primary carriers.",
    },
  ],
};
  export const partnersData = {
  tag: " Our Partners",
  heading: "Trusted \n Technology Alliances",
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
export const whygsData = {
  tag: "Why Choose Us",
  heading: "Custom Engineering & \n Execution for Modern IT Networks ",
  highlightLast:5,  
  subhead: "As an IT infrastructure solutions provider in Dubai, we focus on precise site surveys, clean physical execution, and long-term support, enabling efficient business operations.",
  whygs:[
  {
    "title": "Planning Before Purchase",
    "description": "Thorough site walkthroughs and cable mapping happen prior to hardware procurement.",
    "url":""
  },   
  {
    "title": "Vendor-Neutral Approach",
    "description": "Hardware recommendations strictly reflect technical fit and exact workplace necessities.",
    "url":""
  },  
  {
    "title": "One Team from End to End",
    "description": "Dedicated project engineers oversee initial design, physical setup, and ultimate testing.",
    "url":""
  },  
  {
    "title": "UAE Standards & Site Knowledge",
    "description": "UAE regulations and on-site realities influence every engineering decision on the project.",
    "url":""
  },  
  {
    "title": "Complete Handover Documentation",
    "description": "Final handovers feature full rack diagrams, detailed cable schematics, and access details.",
    "url":""
  },  
  {
    "title": "AMC-Backed Expert Assistance",
    "description": "Ongoing support and maintenance available via SLA-backed AMC and managed services.",
    "url":""
  },   
]
};  
export const recomData = {
    backgroundImage: "/assets/images/it-infrastructure/ctabanner.jpeg", 
  mobbanner: "/assets/images/it-infrastructure/ctabanner.jpeg", 
  tag: "",
  heading: "Let's Discuss \n What Your Infrastructure Needs. ",
  highlightLast: 7,
  description:"Connect with GS IT to walk through your setup and figure out where to begin. ",
  cta: "Connect with experts ",
  points:['No Cost Site Evaluation  ','Room to Scale as You Grow ','Initial Scope-Aligned Pricing','Configs and Cable Maps Provided  '  ]
}; 
export const BusinessImpactData = {
  tag: "Related services",
  heading: "Beyond Core \n IT Infrastructure Services",
  highlightLast: 3, 
  subhead: "From regular maintenance to office moves, these services support continuous business operations and connectivity. ",
  table: [
   {
    icon: "Toolbox",
    title: "IT AMC Services",
    description: "A fixed annual contract covers preventive maintenance and issue resolution. ",
    href: "",
  }, 
   {
    icon: "/assets/images/icons/grid.svg",
    title: "Managed IT Services",
    description: "GS IT manages daily IT operations and resolves issues before they escalate.",
    href: "",
  }, 
   {
    icon: "Handshake",
    title: "IT Outsourcing Solutions",
    description: "IT operations are handled entirely by GS IT as an outsourced technical partner.",
    href: "",
  }, 
   {
    icon: "MapPinSearch",
    title: "IT Infrastructure Relocation",
    description: "Complete IT hardware, cable, and network deployment for new business spaces. ",
    href: "#",
  },   
],
 
};
export const faqHeaderData = {
  tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions About \nIT AMC in Dubai",
  highlightLast:1,
 faqData : [
  {
    question: "How long do IT infrastructure services in Dubai typically take for an office cabling project? ",
    answer: 'Timelines depend on office size and existing cable runs. A single floor usually takes three to five working days from installation to testing. Larger IT infrastructure solutions in Dubai covering multiple floors or buildings can extend over several weeks. ',
  },   
  {
    question: "Can GS IT redesign an existing network without replacing everything? ",
    answer: 'Yes, most existing hardware can stay in place. GS IT reviews what is still functional and rebuilds only the parts causing performance issues. This keeps IT infrastructure optimization practical without unnecessary hardware expenses. ',
  },   
  {
    question: "Do you provide IT infrastructure support services after installation is complete?",
    answer: 'Ongoing support is available as managed services for IT infrastructure under a separate AMC arrangement. Standard installation projects include testing and a handover period only. Businesses that need continuous IT infrastructure support services can add that coverage separately. ',
  },   
  {
    question: "What is included in an IT infrastructure consulting engagement? ",
    answer: 'An IT infrastructure consulting services engagement typically starts with an assessment of the current network to identify inefficiencies and areas for optimization. Most IT infrastructure consulting firms like GS IT then provide guidance on network design, implementation and ongoing management as the business expands. This covers capacity planning, layout and equipment choices that extend well beyond the first installation. ',
  },   
  {
    question: "How do you decide between structured cabling and wireless setups for an office?",
    answer: 'The choice depends on device density, building layout, and the kind of flexibility the space needs. Wired connections generally suit fixed desks and heavy data transfer. Wireless setups work well for shared spaces and areas where running cable is difficult. ',
  },   
  {
    question: "Can a small business benefit from IT infrastructure outsourcing services? ",
    answer: 'It can be, depending on the size of the internal team already in place. Businesses without dedicated IT staff often rely on IT infrastructure outsourcing services for network setup and cabling work. Larger teams may only need support for specific projects. ',
  },   
  {
    question: "What happens during a site assessment before a project starts? ",
    answer: 'A site assessment covers existing cabling, available rack space and current network performance. The findings help decide the design plan and equipment list for the project. This step applies to most IT infrastructure management services regardless of project size. ',
  },   
  {
    question: "Can existing servers be integrated into a new network design?",
    answer: 'In most cases, yes. Existing servers are assessed for compatibility with new switching and storage components. Older hardware nearing end of life is flagged during the review with a clear reason noted. ',
  },    
  {
    question: "Do you work with businesses moving to a new office space?  ",
    answer: 'Yes, office relocation is one of the more common project types handled. Many IT infrastructure companies in Dubai plan cabling and network equipment before the move date to avoid delays. This keeps IT infrastructure solutions in Dubai on schedule during a relocation.  ',
  },   
  {
    question: "How is IT infrastructure management different from basic IT support? ",
    answer: 'Basic IT support usually covers day to day user issues like devices and software. IT infrastructure management solutions focus on the underlying network, cabling, and server systems those devices depend on. Understanding this distinction helps businesses partner with the right IT infrastructure management companies for their specific operational needs ',
  },   
]
};