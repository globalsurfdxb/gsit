 
export const bannerData = {
  tag: "Trusted by UAE Organizations Since 2011",
  heading: "IT AMC Services in Dubai",
  highlightLast: 2,
  description:
    "IT annual maintenance contracts built for stability and scale. Fixed pricing. No surprises. Delivered with consistent support.",
  backgroundImage: "/assets/images/itamc/banner.jpeg", 
  mobbanner: "/assets/images/itamc/banner-mob.jpg", 
  keypoints: ["24/7 Remote Monitoring", "0–5 Min Response", "360° Service"],
  buttons: [
    {
      text: "View Plans",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Get a Free Quote",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
}; 
export const sectionthreeData = {
  tag: "Understanding IT AMC Dubai",
  heading: "One Contract.\n Complete Peace of Mind.",
  highlightLast: 4,
  description:
    "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure running smoothly. Servers, networking, end-user devices, firewalls, and cloud platforms are maintained, monitored, and supported year around for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
};
export const videoData = {
  thumbnail: "/assets/images/itamc/video-thumb.jpeg",
  mobthumbnail: "/assets/images/itamc/mob-video-thumb.jpg",
videoUrl: "/assets/videos/itamcmain.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  label: "Watch The IT AMC Overview",
};
export const rightFitData = {
  tag: "The right fit",
  heading: "Is this IT AMC right for you?",
  highlightLast: 3,
  description: "Review your business setup and current IT challenges to see if this is the right fit. ",
};
// data/businessFitData.ts
export const businessFitData = {
  business: {
    title: "Business Fit",
    items: [
      { title: "SMEs with 5-200 users", description: "Without a fulltime internal IT team" },
      { title: "Regional branches of international companies", description: "Operating in the UAE with limited on ground IT sources" },
      { title: "Growing companies", description: "Scaling operations and needing structured IT support" },
      { title: "Multi-location businesses", description: "Requiring consistent IT across offices" },
    ],
  },
  challenges: {
    title: "Operational Challenges",
    items: [
      { title: "Frequent downtime or slow IT response", description: "Impacting productivity and business continuity" },
      { title: "Multiple vendors with no clear ownership", description: "Leading to delays, confusion, and accountability gaps" },
      { title: "Unpredictable IT costs", description: "No clarity on monthly spend or support scope" },
      { title: "Mixed environments (IT, CCTV, AV, Cloud)", description: "With fragmented management and no unified control" },
    ],
  },
  note: {
    title: "Reactive IT vs. AMC — the real cost",
    description: "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure — servers, networking, end-user devices, firewalls, and cloud platforms — maintained, monitored, and supported year-round for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
  },
};

 
export const sectionFiveData = {
  tag: "The GS IT Difference",
  heading: "Beyond Basic IT. \nA Complete 360° AMC",
  highlightLast: 2,
  description: "Most AMC contracts stop at desktops and firewalls. GS IT goes further and maintains every system in your office under a single contract. One team. Four domains. Zero blind spots.",
  domains: [
    {
      domainNumber: 1,
      badge: "Covered By All Plans",
      title: "Core IT Infrastructure",
      description: "The foundation of every GS IT AMC — your full IT stack is proactively maintained with SLA-backed support.",
      bordercolor: "#F0F0F0", // right gridborder
      bgcolor: "#F5F9FC", // right background
      leftbg:"linear-gradient(180deg, #FFFFFF 0%, #F5F9FC 100%)",
      leftborder:"#114A9F",
      items: [
        {
          icon: "User",
          title: "End-User Devices",
          description: "Desktops, laptops, workstations-setup, OS updates, fault management",
        },
        {
          icon: "Network",
          title: "Network Infrastructure",
          description: "Switches, WAPs, routers monitoring, firmware, uptime",
        },
        {
          icon: "Boxes",
          title: "Firewall & Security",
          description: "Rule reviews, health checks, threat log monitoring",
        },
        {
          icon: "Server",
          title: "Servers & Virtualization",
          description: "Physical & virtual servers patching, backup verification, monitoring",
        },
        {
          icon: "Package",
          title: "Storage & Backup",
          description: "NAS, SAN, and backup systems capacity and data integrity checks",
        },
        {
          icon: "AudioLines",
          title: "Voice & PBX",
          description: "IP phones, PBX, and UC platforms maintenance and fault response",
        },
      ],
    },
    {
      domainNumber: 2,
      badge: "Add-On Or Bundled",
      title: "ELV & Physical Security Systems",
      description: "Your building’s security infrastructure CCTV, access control, biometrics and intercoms – fully maintained under the same AMC. No separate vendor, no gaps.",
     
      bordercolor: "#E3EED3", // right gridborder
      bgcolor: "#FDFFFA", // right background
      leftbg:"linear-gradient(180.44deg, #FFFFFF -8.58%, #FDFFFA 99.62%)",
      leftborder:"#9CCB3B",
        items: [
        {
          icon: "Cctv",
          title: "CCTV & IP Cameras",
          description: "Recording health, camera faults, footage verification ",
        },
        {
          icon: "HardDrive",
          title: "NVR / DVR Management",
          description: "Storage capacity, firmware, remote access setup",
        },
        {
          icon: "FingerprintPattern",
          title: "Biometric Systems",
          description: "Attendance devices, fingerprint readers, maintenance",
        },
        {
          icon: "KeySquare",
          title: "Access Control",
          description: "Door controllers, card readers, user management",
        },
        {
          icon: "Workflow",
          title: "Intercom Systems",
          description: "Video door stations, wiring checks, fault response",
        },
      ],
    },
    {
      domainNumber: 3,
      badge: "Add-On Or Bundled",
      title: "AV & Meeting Room Systems",
      description: "From board rooms to lobbies, projectors, interactive displays, video conferencing systems, and digital signage, all kept working and updated.",
     
      bordercolor: "#E2EFED", // right gridborder
      bgcolor: "#F5FCFB", // right background
      leftbg:"linear-gradient(180.62deg, #FFFFFF 0.54%, #F5FCFB 99.46%)",
      leftborder:"#21A98F",
        items: [
        {
          icon: "TvMinimal", 
          title: "Interactive Displays",
          description: "Touchscreen and smart panels firmware updates and calibration",
        }, 
        {
          icon: "Video", 
          title: "Video Conferencing",
          description: "VC systems, cameras, and codecs setup and fault response",
        }, 
        {
          icon: "MonitorCog", 
          title: "Digital Signage",
          description: "Media players, display health, content scheduling",
        }, 
        {
          icon: "Touchpad", 
          title: "Control Touch Panels",
          description: "Video door stations, wiring checks, fault response",
        }, 
        {
          icon: "CalendarClock", 
          title: "Room Booking Schedulers",
          description: "Panel displays, calendar integration, uptime",
        }, 
      ],
    },
    {
      domainNumber: 4,
      badge: "Add-On Or Bundled",
      title: "Managed Platforms & Cloud Portals",
      description: "Email security portals, backup platform, identity management, and MDM, your cloud and SaaS stack, fully administered and monitored by our team.",
   
      bordercolor: "#E5E7F3", // right gridborder
      bgcolor: "#F4F5FF", // right background
      leftbg:"linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 100%)",
      leftborder:"#2776FF",
      items: [ 
        {
          icon: "Mail", 
          title: "Email Platform Management",
          description: "Microsoft 365 / Google Workspace admin & support",
        }, 
        {
          icon: "Cctv", 
          title: "Identity & Access (IAM)",
          description: "VC systems, cameras, and codecs setup and fault response",
        }, 
        {
          icon: "ShieldPlus", 
          title: "Antivirus & Endpoint Portals",
          description: "Policy management, alerts, threat response",
        }, 
        {
          icon: "HardDriveDownload", 
          title: "Backup & DR Portals",
          description: "Backup monitoring, recovery testing, DR management",
        }, 
        {
          icon: "MonitorSmartphone", 
          title: "MDM & Mobile Management",
          description: "Device enrolment, policy enforcement, remote wipe",
        }
      ],
    },
  ],
};

export const auditData = {
  business: {
    title: "Typical IT AMC Provider",
    items: [
      { title: "Core IT (desktops, network)", active:true},
      { title: "ELV/ Physical Security not covered", active:false},
      { title: "AV systems handled by separate vendor", active:false},
      { title: "Cloud portals unmanaged or handled separately", active:false},
    ],
  },
  challenges: {
    title: "GS-IT 360° AMC",
    items: [
      { title: "Core IT (desktops, network)", active:true},
      { title: "ELV including CCTV, access control, and biometrics", active:true},
      { title: "AV including displays, VC rooms, digital signage", active:true},
      { title: "Cloud portals fully managed & monitored", active:true}, 
    ],
  },
  note: {
    title: "Book a free audit",
    description: "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure — servers, networking, end-user devices, firewalls, and cloud platforms maintained, monitored, and supported year-round for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
  },
};
export const sectionSixData = {
  tag: "UNDERSTANDING IT AMC COSTS",
  heading: "How Much Does IT AMC \nCost in Dubai? (2026)",
  highlightLast: 2,
  description: "IT AMC pricing depends on your team size, device count, SLA tier, and compliance needs. Here's what to expect — and what to watch out for.",
  
};

// data/pricingData.ts
export const pricingData = [
  {
    plan: "Basic",
    tags: ["SMALL TEAMS", "5-15 USERS"],
    dark: false,
    features: [
      { label: "Preventive onsite visit", value: "1/M" },
      { label: "Remote helpdesk", value: "8 / 5" },
      { label: "Firewall & backup checks", value: "Monthly" },
      { label: "Helpdesk portal + tickets", value: "" },
      { label: "Account manager", value: "" },
      { label: "Monthly IT report", value: "" },
    ],
  },
  {
    plan: "Standard",
    tags: ["GROWING TEAMS", "15-40 USERS"],
    dark: true,
    features: [
      { label: "Onsite visits included", value: "2 / month" },
      { label: "Remote helpdesk", value: "8 / 5" },
      { label: "Firewall & backup checks", value: "2/Month" },
      { label: "Dedicated IT engineer", value: "" },
      { label: "IT inventory & asset labelling", value: "" },
      { label: "Full monthly IT audit", value: "" },
      { label: "User satisfaction survey", value: "" },
    ],
  },
  {
    plan: "Premium",
    tags: ["COMPLEX OR MULTI-SITE ENVIRONMENTS"],
    dark: false,
    features: [
      { label: "Onsite visits", value: "2+/M" },
      { label: "Remote helpdesk", value: "24 / 7" },
      { label: "Firewall & backup checks", value: "Weekly" },
      { label: "Dedicated engineer + team lead", value: "" },
      { label: "Advanced cybersecurity monitoring", value: "" },
      { label: "DR portal management", value: "" },
      { label: "Priority SLA response", value: "" },
    ],
  },
];

export const costScopeData = {
  title: "Why your final cost is scoped",
  description: "We don't publish fixed list prices — every estate is different. After a free device audit, your monthly cost is shaped by:",
  factors: [
    "Number of users & devices",
    "Onsite vs remote support ratio",
    "Industry compliance needs",
    "SLA response tier required",
    "Cybersecurity coverage level",
    "Number of office locations",
  ],
};

export const sectionSevenData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Guaranteed Response Times",
  highlightLast: 1,
  description: "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
  items: [
         {
    value: "5 Min",
    title: "Remote Support",
    description: "Engineer connects remotely and begins diagnosis within 5 minutes any time, any day.",
  },
  {
    value: "4 Hr",
    title: "Onsite Engineer Arrival",
    description: "Certified engineer physically onsite within 4 hours across Dubai.",
  },
  {
    value: "24/7",
    title: "Helpdesk Availability",
    description: "Our support centre is open 365 days including UAE public holidays and weekends.",
  },
  {
    value: "1 Day",
    title: "Critical Issue Resolution",
    description: "Infrastructure failures escalated to senior engineers with same day resolution target.",
  },
      ],
      sect: { 
  title: "Coverage Across UAE",
  emirates: ["Dubai", "Sharjah", "Abu Dhabi", "All Emirates"], 
 
      },
};
export const sectionEightData = {
  tag: "OUR COVERAGE TYPES",
  heading: "The Right Model for \nYour Business",
  highlightLast: 2,
  description: "Not every business needs the same support structure. Choose the coverage model that fits your team, budget, and operational requirements.",
  items: [
          {
    title: "Comprehensive AMC",
    description: "Full coverage including hardware, software, labor, and parts, with one flat monthly cost and zero surprise bills.",
  },
  {
    title: "Non-Comprehensive AMC",
    description: "Covers labor and preventive maintenance, while parts and hardware are replaced at cost, ideal for newer environments.",
  },
  {
    title: "Demand/Issue based Support",
    description: "Pay only when you need support, with no contract commitment, and on call assistance billed per incident or visit.",
  },
  {
    title: "Resident Engineer AMC",
    description: "A dedicated GS IT engineer is stationed at your premises full time, giving your own IT department without the hiring cost.",
  },
  {
    title: "Remote Only Support",
    description: "Designed for zero downtime environments with a rapid response engineer available around the clock and guaranteed onsite within 4 hours.",
  },
      ], 
};
export const IndustriesHeaderData = {
  tag: "Industries we serve",
  heading: "IT That Understands Your Sector",
  highlightLast: 2, 
  subhead: "As an active presence on the ground, we know the IT realities of Dubai's key industries including compliance pressures, operational demands, and the things that can't go wrong. "
};

 
export const industriesData = [
  {
    icon: "Landmark",
    title: "Government & Public Sector",
    description: "Secure infrastructure built to UAE compliance standards.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare",
    description: "Continuous connectivity and strict data residency.",
    href: "",
  },
  {
    icon: "GraduationCap",
    title: "Education",
    description: "High-density campus networks and device management.",
    href: "",
  },
  {
    icon: "Handshake",
    title: "Hospitality",
    description: "Secure guest Wi-Fi and SIRA-compliant CCTV solutions.",
    href: "",
  },
  {
    icon: "HandCoins",
    title: "Retail",
    description: "Multi-branch syncing and secure POS architecture.",
    href: "",
  },
  {
    icon: "Van",
    title: "Logistics",
    description: "High-availability networks for 24/7 operations centers.",
    href: "",
  },
  {
    icon: "Factory",
    title: "Industrial",
    description: "Rugged infrastructure bridging OT and corporate IT.",
    href: "",
  },
];

export const industryCTA = {
  title: "Your Industry",
  description: "Don't you see yours? 1500+ clients across every sector. Let's talk",
  href: "/",
};
 export const SectionNineData = {
  tag: "See it in action",
  heading: "Watch How GS-IT AMC \n Works in Practice",
  highlightLast: 3,
  description:
    "See the GS IT platform, how we manage your IT infrastructure, and what your team experiences from day one of your IT AMC Dubai contract.",
 
  items: [
      { icon: "Headset", value: "Live helpdesk portal and ticket management" }, 
      { icon: "CalendarCheck2", value: "Monthly IT health and asset reporting" }, 
      { icon: "ShieldCheck", value: "Security monitoring and backup verification" }, 
    ],
}; 
export const seeITData = {
  thumbnail: "/assets/images/itamc/itamcthumb2.jpg",
  mobthumbnail: "/assets/images/itamc/itamcthumb2mob.jpg",
videoUrl: "/assets/videos/itamc.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  label: "See Our IT AMC in Action",
};

// data/escalationData.ts
export const escalationHeaderData = {
  tag: "ISSUE RESOLUTION",
  heading: "A Clear Path to Every Fix",
  highlightLast: 2,
};

export const escalationLevelsData = [
  {
    level: "Level 1 — First Contact",
    title: "Technical Support Team",
    description: "Assigned engineer handles initial diagnosis. Available via all channels.",
  },
  {
    level: "Level 2 — Escalation",
    title: "Dedicated Account Manager",
    description: "Senior engineer takes ownership if SLA is at risk or issue is unresolved.",
  },
  {
    level: "Level 3 — Management",
    title: "Department Head",
    description: "GS-IT management engaged directly for critical or unresolved cases.",
  },
]; 
export const gettingStartedHeaderData = {
  tag: "GETTING STARTED",
  heading: "Start Your IT AMC in 3 Simple Steps",
  highlightLast: 3,
  description: "No long process. Most clients go from first call to active IT AMC in Dubai within 48 hours.",
};

export const stepsData = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Call or submit the form. We discuss your setup, team size and goals",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description: "We send a scoped proposal with device list, plan recommendation, and fixed monthly cost within 24 hours.",
  },
  {
    number: "03",
    title: "Start IT AMC",
    description: "Sign, onboard, and your dedicated engineer begins supporting your business. Portal access from day one.",
  },
];
export const amcTestimonialsHeader = {
  tag: "Client Reviews",
  heading: "Trusted by \n 1,500+ Dubai Businesses",
  highlightLast: 3,
};

export const KnowledgeHeaderData = {
  tag: "Getting Started",
  heading: "Practical IT & Security Knowledge",
  highlightLast: 1, 
  description: "Guidance from our engineers on keeping your business secure, stable, and future-ready."
};
 
export const blogData = [
  {
    image: "/assets/images/itamc/itser1.jpg",
    category: "Blog",
    date: "21-01-2025",
    title: "Improving Your Workplace Network Security Strategy Efficiently.",
    href: "#",
  },
  {
    image: "/assets/images/itamc/itser2.jpg",
    category: "INDUSTRY UPDATES",
    date: "21-01-2025",
    title: "Guide to Switching Your Existing IT AMC Service Provider.",
    href: "#",
  },
  {
    image: "/assets/images/itamc/itser3.jpg",
    category: "INDUSTRY UPDATES",
    date: "21-01-2025",
    title: "Optimizing Your Business IT Infrastructure Performance for Growth.",
    href: "#",
  },
];

// data/faqData.ts
export const faqHeaderData = {
  tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions About \n IT AMC in Dubai",
  highlightLast: 2,
};

export const faqData = [
  {
    question: "What is the difference between IT AMC and Managed IT Services?",
    answer: 'IT Annual Maintenance Contracts (AMC) and Managed IT Services differ primarily in approach: AMC is reactive "break-fix" support focused on fixing issues after they occur, while Managed IT Services are proactive, 24/7 monitoring aimed at preventing problems. AMC provides routine maintenance, whereas Managed Services offer comprehensive infrastructure management, strategic planning, and, often, predictable, flat-fee pricing. GS IT’s IT AMC services combine the best of both, offering proactive monitoring alongside structured IT AMC support for complete peace of mind. ',
  },
  {
    question: "How much does IT AMC cost in Dubai in 2026?",
    answer: "IT AMC costs in Dubai range from AED 1,300 to AED 4,650+ per month for most businesses, depending on users, devices, and service tier. GS IT's Basic plan starts at AED 1,300/month for small teams. The Standard plan is AED 1,600/month with 2 onsite visits. The Premium plan is AED 4,650/month for 24/7 support and complex environments. All prices exclude 5% UAE VAT.",
  },
  {
    question: "Is IT AMC better than hiring an in-house IT engineer in Dubai?",
    answer: "For most small to mid-sized businesses (SMEs) and growing companies in Dubai, an IT Annual Maintenance Contract (AMC) is better and more cost-effective than hiring a full-time in-house IT engineer. While an in-house engineer offers immediate, on-site, and dedicated support. An IT AMC provides access to a team of experts for a fraction of the cost, making it ideal for managing IT infrastructure, security, and maintenance without high HR overheads. Partnering with a trusted IT AMC company in Dubai like GS IT means you get an entire support team, not just one engineer. ",
  }, 
  {
    question: "What happens when I report an IT issue?",
    answer: "Reporting an IT issue initiates a structured, multi-step process known as incident management, designed to restore normal service as quickly as possible. Whether in a corporate environment or dealing with a technical problem, the process involves logging, prioritizing, investigating, and resolving the problem. If the issue cannot be resolved remotely, a GS IT engineer arrives onsite within 4 hours, ensuring minimal disruption to your operations under our IT AMC contract. ",
  },
  {
    question: "Can the IT AMC plan be customized for my business? ",
    answer: "Yes, IT Annual Maintenance Contract (AMC) plans can be fully customized to match your specific business requirements, budget, and infrastructure. Tailored plans allow you to select, add, or remove services such as server maintenance, networking, cybersecurity, and on-demand support to ensure you only pay for what you need. Our IT AMC services are flexible enough to scale as your business grows, without restrictive contracts. ",
  },
  {
    question: "How long is the IT AMC contract? ",
    answer: "IT Annual Maintenance Contracts (AMCs) typically last for 12 months (one year) from the date of signing or acceptance. While one year is standard, contracts can be negotiated for longer periods, such as 2 or 3 years. Many agreements also include options for renewal. Longer IT maintenance contracts often come with better pricing, making an annual maintenance contract for IT services a cost-efficient choice for growing business. ",
  },
  {
    question: "How can GS IT’s IT AMC future-proof businesses? ",
    answer: "GS IT's IT Annual Maintenance Contract (AMC) services future-proof businesses by providing 24/7 expert support, minimizing operational downtime, and ensuring regular software/hardware updates to tackle security challenges. We offer proactive maintenance and, as a trusted technology partner, GS IT help businesses adopt modern digital solutions, improving security, efficiency, and adaptability. As a leading provider of IT AMC in Dubai, GS IT ensures your infrastructure evolves alongside your business needs. ",
  },
  {
    question: "What are the devices included in GS IT’s IT AMC support? ",
    answer: "GS IT provides professionally managed IT support for all your office IT infrastructure. PC, Laptop, Server, Switch, Router, Printer IP Phone, CCTV, and Biometrics devices among other IT peripherals. Our IT AMC services in Dubai cover both physical and cloud-connected assets, ensuring that every device in your environment is monitored, maintained, and supported under one contract. ",
  },
  {
    question: "Why do businesses need IT AMC? ",
    answer: "Businesses rely on IT AMC support and services for an IT infrastructure that runs smoothly without unexpected disruptions. Companies using GS-IT's IT AMC benefit from proactive assistance, minimum downtime, and predictable maintenance expenses. It aids in the detection and resolution of issues before they escalate, guarantees data security, and improves system performance. Businesses can feel at ease that their IT is being managed by proven IT AMC services providers, enabling them to focus on development. ",
  },
  {
    question: "Does GS IT keep our information private? ",
    answer: "Client privacy and security are prioritized in all our IT support AMC services. As part of our agreement, we prepare and sign confidentiality forms to guarantee the safety of your critical data and assets. Every IT annual maintenance contract in Dubai that GS IT manages includes strict data handling protocols, giving your business the security and compliance assurance it needs. ",
  },
];


export const relatedServicesHeaderData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Related Services",
  highlightLast: 1,
  description: "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
};

export const relatedServicesData = [
  {
    icon: "HandCoins",
    title: "Managed IT Services",
    href: "/services/managed-it",
    featured: true,
  },
  {
    icon: "Lock",
    title: "Cybersecurity Solutions",
    href: "/services/cybersecurity",
    featured: false,
  },
  {
    icon: "MonitorCheck",
    title: "IT Infrastructure",
    href: "/services/it-infrastructure",
    featured: false,
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    href: "/services/cloud",
    featured: false,
  },
];