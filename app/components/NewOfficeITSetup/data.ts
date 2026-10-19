 import { portfolioData } from "../common/data";

    
 
export const BannerFormItem = {
  tag: "Plan · Build · Integrate · Go-Live",
  heading: "New Office IT Setup in Dubai",
  highlightLast: 3, // "Setup in Dubai" highlighted
  description:
    "Turn your empty floor plan into a connected workspace. GS IT executes your new office setup in Dubai, deploying network, cabling, security, AV, ELV, and cloud as one unified system, so your team can log in and work without delay.",
  backgroundImage: "/assets/images/new-office-it-setup/banner1.jpeg",
  mobbanner: "/assets/images/new-office-it-setup/mobbanner.jpg",
  buttons: [
    {
      text: "Explore our solutions",
      icon: "ArrowRight",
      bgButton: "bg-primary",
      dark: true,
      href: "#solutions",
    },
    {
      text: "See How We Deliver",
      icon: "ArrowRight",
      bgButton: "bg-transparent",
      dark: false,
      href: "#how-we-work",
      hoverScroll: true,
    },
  ],
  points: [
    { value: "Since 2013", desc: "Operating in Dubai" },
    { value: "75+", desc: "IT & AV engineers" },
    { value: "SIRA-approved", desc: "CCTV & ELV engineers" },
    { value: "IT · AV · ELV", desc: "One project team" },
  ],
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    submitText: "Request Call Back",
    userOptions: ["1 - 10", "11 - 25", "26 - 50", "51 - 100", "100+"],
  },
};
 
 export const officeSetupData = {
  tag: "360° Technology Services for Your New Office",
  heading: "One Plan. One Partner.\nEvery Technology Your Office Needs.",
  highlightLast: 5,
  paragraphs: [
    "GS IT delivers the entire IT setup for new offices under one coordinated team. We combine IT infrastructure, networking, cloud, cybersecurity, AV, and ELV systems, including CCTV, access control, and communication, into a single integrated setup.",
    "From structured cabling and endpoint security to meeting room AV, we precisely manage every project phase through planning, supply, installation, testing, and handover. Once live, our ongoing AMC plans protect your workplace with uninterrupted IT operations.",
  ],
  image: "/assets/images/new-office-it-setup/main.jpeg",
  imageAlt: "Modern open-plan office with workstations and greenery",
};
export const servicesGridData = {
  tag: "Our Services",
  heading: "Complete IT Services\nfor Your New Office",
  highlightLast: 4,
  subhead:
    "Everything required to transform raw office space into a connected, fully operational workspace, managed by a single partner.",
  cards: [
    {
      title: "Office IT Planning & Design",
      description:
        "We assess your office layout, business needs, and move-in schedule to create a coordinated technology plan.",
      items: [
        "Site Survey & Floor-Plan Review",
        "User & Technology Requirements",
        "IT Infrastructure & System Design",
        "Internet & ISP Coordination",
        "Equipment Selection & Bill of Quantities (BOQ)",
        "Fit-Out Coordination & Project Timeline",
      ],
    },
    {
      title: "Cabling, Racks & Power Infrastructure",
      description:
        "Physical network pathways, server racks, and backup power units are installed in direct coordination with fit-out timelines.",
      items: [
        "Structured Data & Fiber Cabling",
        "Data Outlets & Floor Boxes",
        "Network Racks & Patch Panels",
        "Cable Management & Labeling",
        "UPS & Power Protection",
        "Power & Cooling Coordination",
      ],
    },
    {
      title: "Network, Cloud & Cybersecurity",
      description:
        "Secure access protocols, wireless coverage, and cloud accounts are configured to keep staff connected across all systems.",
      items: [
        "Internet & Network Configuration",
        "Switching & Business Wi-Fi",
        "Firewall & Secure Remote Access",
        "Microsoft 365 & Business Email",
        "User Identity & Access Management",
        "Servers, Storage & Backup",
      ],
    },
    {
      title: "Workplace Devices & Physical Security",
      description:
        "We prepare employee devices, business calling and physical security around your daily office operations.",
      items: [
        "Computers & Laptops",
        "Printers & Shared Devices",
        "Device Management",
        "IP Phones & Business Calling",
        "Biometric Attendance & Intercom",
        "CCTV & Access Control",
      ],
    },
    {
      title: "Meeting Rooms & AV Systems",
      description:
        "Conference rooms are equipped with advanced AV, displays, and wireless sharing setups for seamless media playback and daily board meetings.",
      items: [
        "Meeting Rooms & Boardrooms",
        "Video Conferencing Systems",
        "Displays & Interactive Screens",
        "Microphones, Speakers & Audio Systems",
        "Room Control & Booking Systems",
        "Digital Signage",
      ],
    },
    {
      title: "System Testing & Office Readiness",
      description:
        "Rigorous operational testing across wireless, voice, and security platforms ensure complete functional readiness for your staff.",
      items: [
        "Network & Wi-Fi Coverage Checks",
        "User Login & Application Testing",
        "Phone & Video Conferencing Tests",
        "CCTV & Access Control Validation",
        "Backup & Recovery Testing",
        "Issue Resolution & Acceptance Checks",
      ],
    },
    {
      title: "Training, Handover & Go-Live",
      description:
        "Authorized staff receive system documentation, admin access credentials, and hands-on guidance before official site move-in.",
      items: [
        "Remote & Onsite IT Support",
        "Preventive Maintenance",
        "Network & System Monitoring",
        "Backup & Security Reviews",
        "SLA-Based Support & Escalation",
        "Service Reporting & Account Management",
      ],
    },
    {
      title: "IT AMC & Ongoing Maintenance",
      description:
        "Keep your office supported with maintenance and technical assistance under an agreed scope and SLA.",
      items: [
        "Remote & Onsite IT Support",
        "Preventive Maintenance",
        "Network & System Monitoring",
        "Backup & Security Reviews",
        "SLA-Based Support & Escalation",
        "Service Reporting & Account Management",
      ],
      highlight: true,
      cta: { text: "Explore IT AMC Plans", href: "/it-amc" }, // update href
    },
  ],
};
export const businessEnvironmentsData = {
  tag: "Business Environments",
  heading: "Office IT Setup for Every\nBusiness Size and Structure",
  highlightLast: 4,
  subhead:
    "Whether establishing a standalone workplace or setting up a branch office in Dubai, GS IT delivers technology structured for your scale.",
  data: [
    {
      icon: "Building2",
      title: "Corporate Offices",
      description:
        "Reliable networks, secure Wi-Fi, employee devices, and meeting rooms for everyday productivity.",
    },
    {
      icon: "Globe",
      title: "Regional Offices",
      description:
        "Local office technology aligned with head-office network, cloud, and security standards.",
    },
    {
      icon: "ChartNoAxesCombined",
      title: "Growing Businesses",
      description:
        "Flexible infrastructure with room for additional users, devices, and workspaces as you grow.",
    },
    {
      icon: "Map",
      title: "Multi-Location Businesses",
      description:
        "Consistent IT standards, secure connectivity, and centralized management across offices.",
    },
  ],
};
export const deliveryProcessData = {
  tag: "Our Delivery Process",
  heading: "From Planning\nto Ongoing Support",
  highlightLast: 3,
  subhead:
    "Complete transparency at every phase of our new office IT setup gives leadership total control over launch timelines.",
  data: [
    { icon: "LandPlot", title: "Site Survey", description: "Assess your space and needs",url:""},
    { icon: "PanelsTopLeft", title: "IT Planning & Design", description: "Define systems and layout",url:"" },
    { icon: "Box", title: "Procurement", description: "Source approved equipment",url:"" },
    { icon: "Wrench", title: "Installation", description: "Install cabling and systems",url:"" },
    { icon: "SlidersHorizontal", title: "Configuration & Integration", description: "Connect systems to work together",url:"" },
    { icon: "TextSearch", title: "Testing & Validation", description: "Verify performance and readiness",url:"" },
    { icon: "Handshake", title: "Training, Handover & Go-Live", description: "Prepare your team and launch" ,url:""},
    { icon: "Toolbox", title: "IT AMC & Ongoing Support", description: "Maintain and support your office",url:"#" },
  ],
};
export const whyGsitDeliversData = {
  tag: "Why GS IT",
  heading: "How GS IT Delivers\na Complete Office IT Setup",
  highlightLast: 5,
  subhead:
    "GS IT, GS AV, GS IT Security, and GS Digital operate as a unified team to bring your new office to life. We handle the planning, deployment, and integration of core network infrastructure, AV systems, cybersecurity, ELV, physical security, and business software under a single project plan, coordinated delivery, and one point of contact.",
  cards: [
    {
      logo: "/assets/images/new-office-it-setup/1.svg", // update paths
      logoAlt: "GS.IT",
      title: "IT Infrastructure, Cloud &\nCybersecurity",
      description:
        "Cabling, networks, Wi-Fi, servers, computers, Microsoft 365, firewalls and endpoint protection, configured for your team.",
      gradient: "from-[#E8ECF5]",
    },
    {
      logo: "/assets/images/new-office-it-setup/2.svg",
      logoAlt: "GS.AV",
      title: "Enterprise\nAudio-Visual",
      description:
        "Meeting rooms, boardrooms, conferencing, displays and room controls, integrated for everyday collaboration.",
      gradient: "from-[#E6F5F1]",
    },
    {
      logo: "/assets/images/new-office-it-setup/3.svg",
      logoAlt: "GS.IT Security",
      title: "ELV &\nPhysical Security",
      description:
        "SIRA-approved CCTV, access control and communication systems, planned around your office and security requirements.",
      gradient: "from-[#F4F8E8]",
    },
    {
      logo: "/assets/images/new-office-it-setup/4.svg",
      logoAlt: "GS.Digital",
      title: "Business Apps &\nDigital Solutions",
      description:
        "Business applications, workflow automation, AI tools and digital assets, customized to your organizational requirements.",
      gradient: "from-[#FCE9E9]",
    },
  ],
  footer:
    "From the first floor plan to go-live and ongoing support, our specialists work together to deliver a {{connected workplace}}.",
};
export const clientSuccessData = {
  bgImage: `/assets/images/structured-handover/slider-banner.jpeg`,
  quoteIcon: `/assets/images/structured-handover/invertedcomma.svg`,
 slides: [
  {
    tags: ["Client Success", "Food Retail", "UAE"],
    number: "360°",
    numberLabel: "FULL-SCOPE COVERAGE",
    title: "One Partner.\nFull 360° Service",
    desc: "A leading international food company has trusted GS IT for over 7 years — a dedicated team delivering full 360° coverage across their Dubai offices and warehouse, spanning IT infrastructure, AV, ELV and SIRA-approved support, all under one accountable AMC.",
  },
  {
    tags: ["Client Success", "Government", "UAE"],
    number: "24/7",
    numberLabel: "COMMAND & CONTROL AV",
    title: "Complex AV.\nExperience center",
    desc: "For a UAE government client, GS IT maintains a complete, mission-critical AV environment — including a full command-and-control centre — kept operational around the clock.",
  },
  {
    tags: ["Client Success", "Real estate", "UAE"],
    number: "13",
    numberLabel: "Years | Zero downtime",
    title: "13 Years of IT AMC.\nZero Critical Downtime.",
    desc: "A leading UAE real-estate company has trusted GS IT with their IT AMC for 13 consecutive years — we keep their entire IT environment running with zero critical downtime across every site.",
  },
  {
    tags: ["Client Success", "Retail outlet", "UAE"],
    number: "20+",
    numberLabel: "Outlets Managed",
    title: "20+ Outlets.\nOne IT & ELV Partner",
    desc: "For 5 years, GS IT has run the complete IT and ELV stack for a leading UAE bakery-retail brand — full IT infrastructure and SIRA-approved ELV across the head office and 20+ outlets in Dubai and across the UAE, backed by a dedicated",
  },
],
};
  
   
 
export const recomData = {
    backgroundImage: "/assets/images/new-office-it-setup/ctabanner.jpeg", 
  mobbanner: "/assets/images/new-office-it-setup/mobctabanner.jpg", 
  tag: "",
  heading: "Your team should walk into a new \n office and start working, not wait for \n the IT to catch up.",
  highlightLast: 21,
  description:"Share your floor plan, headcount and move-in date. We will review the space and come back with a scoped plan for the whole technology environment.",
  points:["Floor plan or drawings","Target move-in date","Headcount and growth plan","Equipment you want to reuse"],
  cta: "Plan My office IT setup",
  ctaHref:"#",
  secondaryCta:"See how we Deliver",
  secondaryCtaHref:"#"
 }; 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Frequently Asked Questions ",
  highlightLast:3,
faqData: [
  {
    question: "What does a new office IT setup include?",
    answer:
      "A new office IT setup in Dubai typically includes structured cabling, secure Wi-Fi, network infrastructure, workstation installation, firewall protection, cloud or server integration, IP telephony, CCTV, and access control systems. GS IT also covers planning, implementation, testing, and ongoing support, helping businesses build a reliable and scalable IT environment from day one.",
  },
  {
    question: "Does GS IT help relocate our existing office IT setup?",
    answer:
      "Yes, GS IT provides office IT relocation services in Dubai for businesses moving to a new workspace. This includes safely disconnecting systems, relocating servers and network equipment, reinstalling hardware, reconfiguring networks, and testing performance. The focus is on minimizing downtime and ensuring business continuity during the office move.",
  },
  {
    question: "What industries do you serve for office IT setup?",
    answer:
      "GS IT delivers office IT setup services for a wide range of industries, including healthcare, education, hospitality, banking, retail, real estate, warehousing, and manufacturing. Each business IT setup is designed to industry-specific needs, ensuring secure connectivity, smooth communication, regulatory compliance, and dependable day-to-day operations.",
  },
  {
    question: "Can you help relocate or upgrade an existing office IT system?",
    answer:
      "Yes, GS IT helps businesses relocate, modernize, or upgrade their existing office IT infrastructure. Services may include server upgrades, Wi-Fi optimization, network enhancements, cybersecurity improvements, and cloud integration. Whether expanding or moving offices, GS IT ensures your IT systems remain efficient, secure, and ready for future growth.",
  },
  {
    question: "How long does a new office IT setup take in Dubai?",
    answer:
      "The timeline for a new office IT setup in Dubai depends on the office size, number of employees, and technical requirements. Small office installations may take only a few days, while larger setups require more planning and deployment time. GS IT evaluates your requirements to provide a realistic project timeline.",
  },
  {
    question: "Do you provide end-to-end office IT setup services?",
    answer:
      "Yes, GS IT offers end-to-end office IT setup services in Dubai, covering everything from consultation and infrastructure planning to networking, structured cabling, cybersecurity, cloud solutions, and post-installation support. Businesses benefit from a single IT partner that manages the complete setup process efficiently and professionally.",
  },
  {
    question: "Can you set up Wi-Fi and network security for a new office?",
    answer:
      "Absolutely. GS IT provides secure Wi-Fi setup and network security solutions for new offices in Dubai. Services include wireless network planning, firewall configuration, secure authentication, encryption, and threat prevention. This helps businesses maintain fast, reliable internet access while protecting sensitive company data from cyber threats.",
  },
  {
    question: "How often should office IT systems be upgraded?",
    answer:
      "Most office IT systems should be reviewed every 3–5 years, depending on business growth and technology demands. Hardware upgrades, software updates, and cybersecurity improvements should happen regularly to maintain performance and security. A proactive IT infrastructure upgrade helps reduce downtime and supports long-term productivity.",
  },
  {
    question: "Does GS IT provide setups for small offices and startups?",
    answer:
      "Yes, GS IT offers office IT setup solutions for small businesses and startups in Dubai. Services are scalable and designed to match your budget, covering networking, secure Wi-Fi, communication systems, cybersecurity, and IT infrastructure. The setup can also grow alongside your business as operational needs expand.",
  },
  {
    question: "Is cybersecurity included in GS IT office setup IT packages?",
    answer:
      "Yes, cybersecurity is an important part of GS IT’s office IT setup services. Packages may include firewall installation, secure Wi-Fi, access controls, antivirus protection, and data security measures. Businesses can also choose advanced cybersecurity solutions to strengthen protection against evolving digital threats and operational risks.",
  },
],
};
export const comparisonPartnerData = {
  tag: "Why One Partner",
  heading: "Multiple Vendors vs\nOne Coordinated Partner",
  highlightLast: 3,
  subhead:
    "Specialists across IT, AV, security and business applications, brought together by one project lead.",
  headers: {
    area: "Project Area",
    typical: "Typical IT service provider",
    gsitTitle: "With GS IT",
    gsitSub: "One coordinated team",
    badge: "Recommended",
  },
  rows: [
    { area: "Planning", typical: "Each vendor plans its own scope from its own drawings", gsit: "One architecture for every system, agreed before ordering" },
    { area: "Vendor coordination", typical: "Your team or the fit-out contractor chases each trade", gsit: "One project lead sequences cabling, network, AV and ELV" },
    { area: "Infrastructure", typical: "Racks, power and containment sized for one package", gsit: "Space, power, cooling and containment sized for all systems and growth" },
    { area: "Network", typical: "Configured without knowing what AV, voice or CCTV needs", gsit: "Network designed around every connected device: phones, cameras, AV and Wi-Fi" },
    { area: "AV", typical: "Rooms installed, then found to lack network points or platform integration", gsit: "Rooms designed with network, calendar and video platform from the start" },
    { area: "Security", typical: "Firewall, CCTV and access control treated as unrelated jobs", gsit: "Segmentation, firewall policy, CCTV and access control designed together" },
    { area: "Configuration", typical: "Default settings, mixed naming, scattered credentials", gsit: "One standard for naming, addressing and admin access across systems" },
    { area: "Testing", typical: "Each vendor tests its own equipment", gsit: "End-to-end tests of how people will actually use the office" },
    { area: "Documentation", typical: "Partial, in different formats, sometimes missing", gsit: "One as-built pack: drawings, IP plan, asset register, credentials" },
    { area: "Handover", typical: "Several handovers and unclear ownership of issues", gsit: "One handover, one sign-off, one contact after go-live" },
  ],
  footer:
    "From the first floor plan to go-live and ongoing support, our specialists work together to deliver a {{connected workplace}}.",
};
export const handoverCardsData = {
  tag: "Project Handover",
  heading: "A Complete Handover. A Confident Start.",
  highlightLast: 3,
  subhead:
    "Receive the documentation, secure access and practical guidance to manage your new office.",
  cards: [
    {
      title: "Know Your Office",
      items: [
        {
          title: "As-Built Drawings",
          description: "Cable routes, outlet numbering and rack layouts.",
        },
        {
          title: "IP & Network Plan",
          description: "VLANs, IP ranges, Wi-Fi networks and firewall zones.",
        },
      ],
    },
    {
      title: "Keep Your Records",
      items: [
        {
          title: "Asset Register",
          description: "Device details, serial numbers and warranty dates.",
        },
        {
          title: "Configuration Records",
          description: "Firewall, switching and Microsoft 365 settings.",
        },
      ],
    },
    {
      title: "Take Control",
      items: [
        {
          title: "Secure Admin Access",
          description: "Administrator credentials transferred securely.",
        },
        {
          title: "Test Results",
          description: "Cabling, Wi-Fi, phone and video-meeting checks.",
        },
      ],
    },
    {
      title: "Ready to Operate",
      items: [
        {
          title: "User Training & Guides",
          description: "Staff walkthrough and meeting-room quick guides.",
        },
        {
          title: "Support & Escalation",
          description: "Who to contact and how to escalate an issue.",
        },
      ],
    },
  ],
};