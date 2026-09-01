  import { portfolioData } from "../common/data";
 
export const bannerData = {
  tag: "Trusted by UAE Organizations Since 2013",
  heading: "IT AMC Services in Dubai",
  highlightLast: 2,
  description:
    "IT annual maintenance contracts built for stability and scale. Fixed pricing. No surprises. Delivered with consistent support.",
  backgroundImage: "/assets/images/itamc/banner.jpeg", 
  mobbanner: "/assets/images/itamc/banner-mob.jpg", 
  keypoints: ["24/7 Remote Monitoring", "0–5 Min Response", "360° Service"],
  buttons: [
    {
      text: "Explore our plans",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Talk to <uppercase>AMC</uppercase> experts",
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
  heading: "Is This IT AMC Right for You?",
  highlightLast: 3,
  subhead: "Review your business setup and current IT challenges to see if this is the right fit. ",
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
  heading: "Beyond Basic IT. \n A Complete 360° AMC",
  highlightLast: 2,
  subhead: "Most AMC contracts stop at desktops and firewalls. GS IT goes further and maintains every system in your office under a single contract. One team. Four domains. Zero blind spots.",
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
          description: "AV control systems programming and fault resolution",
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
          description: "SSO, MFA, user provisioning, Active Directory",
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
    title: "Book a Free Audit",
    description: "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure — servers, networking, end-user devices, firewalls, and cloud platforms maintained, monitored, and supported year-round for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
    button:'Get a Free Consultation',
  background:"bg-white",
  classtitle:'text-primary text-32 mb-4 lg:mb-5 tracking-[-1%]',
  classdesc:"max-w-[80ch] lg:max-w-[65ch] 2xl:max-w-[79ch]  3xl:max-w-[96ch]"
  },
};
export const sectionSixData = {
  tag: "UNDERSTANDING IT AMC COSTS",
  heading: "How Much Does IT AMC \nCost in Dubai? (2026)",
  highlightLast: 2,
  subhead: "IT AMC pricing depends on your team size, device count, SLA tier, and compliance needs. Here's what to expect — and what to watch out for.",
  
};
 export const statsData = [
  { value: `${portfolioData.years}+`, label: "", description: "Years Serving the UAE businesses " },
  { value: `150+`, label: "", description: "Active AMC clients" },
  { value: `99.9%`, label: "", description: "Uptime SLA maintained" },
  { value: `30+`, label: "", description: "Dedicated IT AMC Engineers" },
]; 
// data/pricingData.ts
export const pricingData = [
  {
    plan: "Essential 360 AMC",
    subtitle:"For small offices",
    tags: ["Up to 20 users"],
    dark: false,
    features: [
      { label: "Remote support", value: "8/5" }, 
      { label: "Onsite visits", value: "Quarterly or monthly" }, 
      { label: "Ticketing portal", value: "" }, 
      { label: "ICT infrastructure support", value: "" }, 
      { label: "Network support", value: "" }, 
      { label: "Account coordination", value: "" }, 
      { label: "Monthly support summary", value: "Basic" }, 
      { label: "AV / ELV / SIRA", value: "Optional" },  
    ],
  }, 
  {
    plan: "Business 360 AMC",
    subtitle:"For growing businesses",
    tags: ["20 to 100 users"],
    dark: false,
    features: [
      { label: "Remote support", value: "8/7" }, 
      { label: "Onsite visits", value: "Monthly" }, 
      { label: "Ticketing portal", value: "" }, 
      { label: "ICT and cloud support", value: "" }, 
      { label: "Network and platform support", value: "" }, 
      { label: "Account manager coordination", value: "" }, 
      { label: "Monthly IT health report", value: "" }, 
      { label: "AV / ELV / SIRA", value: "Add-on or bundled" }, 
    ],
  }, 
  {
    plan: "Enterprise 360 AMC",
    subtitle:"For large or multi-site organisations",
    tags: ["100+ users"],
    dark: false,
    features: [
      { label: "Remote support", value: "24/7 critical" }, 
      { label: "Onsite visits", value: "Custom schedule" }, 
      { label: "Ticketing portal", value: "" }, 
      { label: "Full ICT, cloud and infrastructure support", value: "" }, 
      { label: "Advanced infrastructure support", value: "" }, 
      { label: "Senior service coordination", value: "" }, 
      { label: "Monthly service review report", value: "" }, 
      { label: "AV / ELV / SIRA", value: "Included where scoped" }, 
    ],
  }
 
  
];
export const TrustedbyData = [
  { src: "/assets/images/itamc/partner1.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner2.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner3.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner4.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner5.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner6.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner7.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner8.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner9.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner10.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner11.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner12.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner14.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner15.svg", alt: "" }, 
  { src: "/assets/images/itamc/partner16.svg", alt: "" },      
  
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
   
     Cta:{
  title: "Not sure which plan fits your business?",
  description:"Tell us your team size and we'll scope an exact monthly cost — free, no commitment, reply within 30 minutes.",
  button:'Get a Free Consultation',
  background:"bg-[#F5F9FC]",
  classtitle:'text-primary text-32 mb-4 !leading-[1.3] tracking-[-1%]',
  classdesc:"max-w-[66ch]"
} 
};

export const sectionSevenData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Guaranteed Response Times",
  highlightLast: 1,
  subhead: "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
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
  subhead: "Not every business needs the same support structure. Choose the coverage model that fits your team, budget, and operational requirements.",
  items: [
          {
    label:"Most comprehensive",
    dark:false,
    title: "Comprehensive AMC",
    description: "Full coverage including hardware, software, labor, and parts, with one flat monthly cost and zero surprise bills.",
    url:''
  },
  {
    label:"Good for newer setups",
    dark:false,
    title: "Non-Comprehensive AMC",
    description: "Covers labor and preventive maintenance, while parts and hardware are replaced at cost, ideal for newer environments.",
    url:''
  },
  {
    label:"Pay per incident",
    dark:false,
    title: "Demand/Issue based Support",
    description: "Pay only when you need support, with no contract commitment, and on call assistance billed per incident or visit.",
     url:'#'
  },
  {
    label:"On-premise",
    dark:false,
    title: "Resident Engineer AMC",
    description: "A dedicated GS IT engineer is stationed at your premises full time, giving your own IT department without the hiring cost.",
     url:'#'
  },
  {
    label:"Zero-downtime",
    dark:false,
    title: "Remote Only Support",
    description: "Designed for zero downtime environments with a rapid response engineer available around the clock.",
     url:'#'
  },
  {
    label:"Switching provider?",
    dark:true,
    title: "Structured Handover",
    description: "Already under AMC elsewhere? GS IT runs the handover in 3 business days with no gap in coverage. <a class='font-medium text-primary'>How switching works.</a>",
     url:'#'
  },
      ], 
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
 
  escalationLevelsData : [
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
]}; 
export const gettingStartedHeaderData = {
  tag: "GETTING STARTED",
  heading: "Start Your IT AMC in 3 Simple Steps",
  highlightLast: 3,
  subhead: "No long process. Most clients go from first call to active IT AMC in Dubai within 48 hours.",

  stepsData : [
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
]};
export const amcTestimonialsHeader = {
  tag: "Client Reviews",
  heading: "Trusted by \n 1,500+ Dubai Businesses",
  highlightLast: 3,
};

export const KnowledgeHeaderData = {
  tag: "Latest Insights",
  heading: "Practical IT & Security Knowledge",
  highlightLast: 1, 
  subhead: "Guidance from our engineers on keeping your business secure, stable, and future-ready.",
 blogData : [
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
]};

// data/faqData.ts
export const faqHeaderData = {
  tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions About \n IT AMC in Dubai",
  highlightLast: 2,
faqData: [
  {
    question: "What is an IT AMC?",
    answer: "An IT Annual Maintenance Contract (AMC) is a service agreement between a business and an IT service provider like GS IT for maintaining and supporting its IT infrastructure. IT AMC contracts typically last for 12 months and can be renewed based on the agreement. It helps businesses manage IT issues, reduce unexpected disruptions, and maintain systems regularly within a predictable budget.",
  },
  {
    question: "What is included in GS IT's IT AMC support?",
    answer: "GS IT AMC support can cover remote helpdesk assistance, onsite support, ticketing portal access, user support, desktop and laptop support, network and infrastructure support, escalation, reporting, and account coordination. The services provided depend on the AMC plan you choose and the systems included in the agreed scope.",
  },
  {
    question: "What does 360° AMC support mean?",
    answer: "In this context, 360° AMC support means covering almost all technology areas under one AMC. GS IT's 360° AMC can cover core IT infrastructure, ELV and physical security, AV and meeting room systems, and managed cloud platforms. The exact coverage depends on the contract terms. With 360° AMC, businesses can manage their technology through one support partner instead of coordinating with multiple contractors.",
  },
  {
    question: "Can AV, ELV, CCTV, and SIRA systems be included in AMC?",
    answer: "Yes. Systems like AV, ELV, CCTV, NVR/DVR setups, access control, biometrics, intercoms, and conference equipment fall under our coverage when scoped into the contract. SIRA-approved CCTV maintenance is also available where required. You can add these services to specific tiers or get them as part of a comprehensive AMC.",
  },
  {
    question: "What remote and on-site support options are available?",
    answer: "Remote support tiers include 8/5, 8/7, or 24/7 coverage for critical incidents, based on your selected plan. Onsite visits are scheduled according to your contract level and facility locations. For organizations needing dedicated on-premises assistance, we offer a Resident Engineer option.",
  },
  {
    question: "What happens when I report an IT issue?",
    answer: "Submitting a ticket through your designated channel logs the request and assigns an initial priority level. Engineers immediately start troubleshooting to resolve the matter remotely, schedule an onsite technician, or escalate the case as needed.",
  },
  {
    question: "What is the IT AMC response and resolution SLA?",
    answer: "GS IT uses different response times based on the priority of an issue. High-priority issues can have a 0–5 minute response time, while medium-priority issues can have a 15–30 minute response time and low-priority issues 30–45 minutes. The time needed for final resolution can vary based on technical complexity, replacement part availability, vendor or ISP dependencies, and access permissions.",
  },
  {
    question: "Does GS IT provide a ticketing portal and support reports?",
    answer: "Yes. Clients receive access to a central portal to submit tickets, track live progress, and review past service history. Depending on your tier, we provide monthly support summaries, system health audits, and service review reports.",
  },
  {
    question: "Can the IT AMC plan be customized for my business?",
    answer: "Yes, IT Annual Maintenance Contracts (AMCs) can be configured around your user count, hardware inventory, office locations, required support hours, SLAs, and technical environment. Additional coverage for cybersecurity, AV, ELV, or cloud management can be integrated following an initial technical assessment.",
  },
  {
    question: "Is IT AMC better than hiring an in-house IT engineer in Dubai?",
    answer: "An IT AMC provides broader technical coverage at lower operational costs compared to a single full-time hire. While an internal employee offers dedicated on-site availability, an AMC grants access to a full team of certified specialists, SLA-backed responses, and continuous operational coverage without recruitment or management overhead.",
  },
  {
    question: "What is not included in an IT AMC contract?",
    answer: "Out-of-scope items include unscheduled project work, new infrastructure installations, structural cabling, software licensing costs, and unmanaged third-party systems. Hardware replacement and spare part procurement limits depend directly on whether you select a comprehensive or non-comprehensive agreement.",
  },
  {
    question: "How much does IT AMC cost in Dubai?",
    answer: "Pricing varies based on scale and technical complexity. Key variables include total endpoints, site locations, support hours, SLA response tiers, and added services like ELV or cloud management. We issue customized proposals following a review of your environment.",
  },
  {
    question: "Can GS IT help with IT hardware procurement?",
    answer: "Yes. GS IT can assist AMC clients with IT hardware sourcing, upgrades, replacements, and lifecycle planning through its brand and vendor network. This can include laptops, desktops, servers, switches, firewalls, wireless access points, storage, backup devices, AV equipment, ELV equipment, cybersecurity products, and cloud-related solutions. Hardware pricing and availability are confirmed through formal quotation and approval.",
  },
  {
    question: "Does GS IT keep our information private?",
    answer: "Client privacy and security are prioritized in all our IT support AMC services. As part of our IT AMC agreement, we prepare and sign confidentiality forms to guarantee the safety of your critical data and assets.",
  },
  {
    question: "Can we switch to GS IT if we already have an IT provider?",
    answer: "Yes. We handle the transition through a structured 3-day handover with no gap in coverage. Our team audits your setup, transfers credentials and documentation, configures administrative access, and runs a parallel support period to execute a seamless switch.",
  },
],
};


export const relatedServicesHeaderData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Related Services",
  highlightLast: 1,
  subhead: "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
 relatedServicesData : [
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
    icon: "LaptopMinimalCheck",
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
]};

  export const partnersData = {
  tag: " Technology partners",
  heading: "Genuine Products, \n From the Industry’s Best",
  highlightLast: 4, 
   };
  export const logoData= [
  { src: "/assets/images/itamc/pdt1.svg", alt: "Partner 1" }, 
  { src: "/assets/images/itamc/pdt3.svg", alt: "Partner 3" },
  { src: "/assets/images/itamc/pdt5.svg", alt: "Partner 5" }, 
  { src: "/assets/images/itamc/pdt4.svg", alt: "Partner 4" },
  { src: "/assets/images/itamc/pdt2.svg", alt: "Partner 2" },
] ; 
 export const parnerpoints= [
    {
      title: "No Middleman Margins",
      description: "Direct factory sourcing without any reseller margins.",
    },
    {
      title: "Authentic Sourcing",
      description: "100% genuine products with factory warranty.",
    },
    {
      title: "One Accountable Team",
      description: "One team handles both procurement and support.",
    },
    {
      title: "Compatible Technology ",
      description: "Hardware selected to match your existing tech stack. ",
    },
    {
      title: "Faster Procurement ",
      description: "Direct partner ties skip delays and speed up delivery. ",
    },
    {
      title: "Vendor-Agnostic ",
      description: "We pick the best brands to suit your exact needs. ",
    },
  ];
  
  export const ClientOutcomesData = {   
  tag: "Client Outcomes",
  heading: "How Reliability Looks in Practice",
  highlightLast: 3,
  subhead: "Results from live GS IT AMC accounts. Full references available to qualified prospects on request.", 
  cards: [
    {
      category: "Retail · Retail Chain",
      stat: "68%",
      statLabel: "Faster ticket resolution",
      metricLabel: "Average time to resolve an IT ticket",
      beforeLabel: "Before",
      beforeValue: "16 hrs",
      afterLabel: "After",
      afterValue: "05 hrs",
      clientTitle: "Retail Chain, 20+ Stores",
      description:
        "Tickets took an average of 16 hours to close across stores. A proactive AMC cut that to 5, with far fewer disruptions to billing and inventory.",
    },
    {
      category: "Industrial · Manufacturing",
      stat: "AED 350K",
      statLabel: "Annual IT support saving",
      metricLabel: "How they staffed IT for the new office",
      beforeLabel: "Planned",
      beforeValue: "In-House",
      afterLabel: "Choose",
      afterValue: "Managed AMC",
      clientTitle: "Global Manufacturer, New UAE Office",
      description:
        "The plan was to hire and run an in-house IT team. A managed AMC covered the same scope for roughly AED 350K less each year.",
    },
    {
      category: "Logistics · Distribution",
      stat: "ONE",
      statLabel: "Point of IT accountability",
      metricLabel: "Who handled daily IT support",
      beforeLabel: "Before",
      beforeValue: "Many vendors",
      afterLabel: "Choose",
      afterValue: "One contract",
      clientTitle: "Multi-Branch Logistics Company",
      description:
        "Daily support was split across several vendors. One AMC replaced them, simplifying management and tightening service coordination.",
    },
  ],
  quote:
    "Figures taken from GS IT ticketing and contract records. Client identities withheld or used with written permission.",
};