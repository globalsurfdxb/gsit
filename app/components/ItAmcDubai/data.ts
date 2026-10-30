import { portfolioData } from "../common/data";

export interface ComparisonRow {
  id: string;
  coverageArea: string;
  typicalITAMC: {
    status: string;
    text: string;
  };
  specialistAVELV: {
    status: string;
    text: string;
  };
  gsIt360: {
    status: string;
    text: string;
  };
}

export const BannerFormItem = {
  tag: "One partner. complete it care",
  heading: "IT AMC Services in Dubai",
  highlightLast: 3, // "Setup in Dubai" highlighted
  description:
    "GS IT delivers a 360° IT AMC covering IT infrastructure, cybersecurity, cloud platforms, AV systems, and SIRA-approved ELV solutions under one accountable support framework, helping businesses across Dubai and the UAE maintain secure, reliable, and high-performing technology environments through fixed monthly pricing and SLA-backed support.",
  backgroundImage: "/assets/images/itamc/banner.jpeg",
  mobbanner: "/assets/images/itamc/banner-mob.jpg",
  buttons: [
    {
      text: "Get a Quote",
      icon: "ArrowRight",
      bgButton: "bg-primary",
      dark: true,
      href: "#solutions",
    },
    {
      text: "30 Minutes IT consultation",
      icon: "ArrowRight",
      bgButton: "bg-transparent",
      dark: false,
      href: "#how-we-work",
      hoverScroll: true,
    },
  ],
  points: [
    { value: "24/7", desc: "Remote Support" },
    { value: "0-10 Min", desc: "Remote Response" },
    { value: "1-4 Hours", desc: "Critical Onsite Support" },
    { value: "360°", desc: "Service Coverage" },
  ],
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    submitText: "Request Call Back",
    userOptions: ["1 - 10", "11 - 25", "26 - 50", "51 - 100", "100+"],
  },
};
export const sectionthreeData = {
  tag: "Understanding 360° IT AMC Dubai",
  heading: "One Contract One Partner.\n Complete Peace of Mind.",
  highlightLast: 4,
  description:
    "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure running smoothly. Servers, networking, end-user devices, firewalls, and cloud platforms are maintained, monitored, and supported year around for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
  image: "/assets/images/itamc/uit.jpg",
  imageAlt: "GS IT team member at work",
  stats: [
    {
      id: 1,
      type: "image" as const,
      image: "/assets/images/itamc/amc-team.jpg",
      alt: "Global Surf IT team",
    },
    {
      id: 2,
      type: "stat" as const,
      value: `${portfolioData.years}+`,
      label: "Years Serving the UAE businesses",
    },
    {
      id: 3,
      type: "stat" as const,
      value: "99.9%",
      label: "Success rate",
    },
    {
      id: 4,
      type: "stat" as const,
      value: "150+",
      label: "Active AMC clients",
    },
    {
      id: 5,
      type: "stat" as const,
      value: "30+",
      label: "Dedicated IT AMC Engineers",
    },
    {
      id: 6,
      type: "image" as const,
      image: "/assets/images/itamc/amc-team-2.jpg",
      alt: "Global Surf IT engineers",
    },
  ],
};

export const AMC_DOMAINS_DATA = {
  tag: "   Beyond Basic IT.\nA Complete 360° AMC.",
  heading:
    "GS IT's 360° IT AMC covers four domains under one contract — core IT infrastructure, ELV and physical security, AV, and managed cloud platforms.",
  highlightLast: 4,
  description: "",
  data: [
    {
      id: "service-delivery",
      number: "01",
      title: "Service Delivery & Support",
      description:
        "The operational layer of your AMC — covering support access, onsite service delivery and structured service management.",
      cards: [
        {
          title: "Remote Helpdesk Support",
          description:
            "Fast day-to-day technical support for users, devices and common IT issues through a central helpdesk.",
          features: [
            "8x5 to 24x7 Support Coverage",
            "Remote Troubleshooting & Resolution",
            "User Assistance",
            "Issue Escalation",
          ],
        },
        {
          title: "Onsite & Preventive Support",
          description:
            "Scheduled and as-required onsite support combined with preventive maintenance to identify issues early and keep systems stable and operational.",
          features: [
            "Preventive Maintenance",
            "System Health Checks",
            "Planned Onsite Visits",
            "Device & Infrastructure Checks",
            "Patch & Update Coordination",
            "Onsite Troubleshooting",
          ],
        },
        {
          title: "SLA & Service Management",
          description:
            "Structured service delivery with defined response handling, priority-based escalation and clear ownership throughout the support lifecycle.",
          features: [
            "0–10 Minute Remote Response",
            "Priority-Based SLA",
            "Escalation Matrix",
            "Account Coordination",
            "Service Reviews",
            "Performance Tracking",
          ],
          note: "*Response applies within the agreed support window and AMC scope.",
        },
      ],
    },
    {
      id: "core-it-operations",
      number: "02",
      title: "Core IT Operations",
      description:
        "The essential IT layer that keeps your users productive, systems available and business operations running smoothly.",
      cards: [
        {
          title: "End-User & Device Support",
          description:
            "Support for everyday workplace technology to help employees stay productive and reduce disruption from common device and software issues.",
          features: [
            "Desktops & Laptops",
            "Printers & Peripherals",
            "Software Support",
            "User Access Support",
            "Device Setup & Configuration",
            "End-User Troubleshooting",
          ],
        },
        {
          title: "IT Infrastructure & Networking",
          description:
            "Management and support for the core infrastructure that keeps your business connected, available and operational.",
          features: [
            "Servers & Storage",
            "Switches & Routers",
            "Wi-Fi & VPN",
            "Network Troubleshooting",
            "Rack & Network Equipment",
            "Backup & Recovery",
          ],
        },
        {
          title: "Monitoring & Reporting",
          description:
            "Ongoing monitoring and structured reporting provide visibility into system health, recurring issues, backup status, security events and support activity.",
          features: [
            "System Monitoring",
            "Network Monitoring",
            "Backup Verification",
            "Security Monitoring",
            "Monthly Service Reports",
            "Recommendations & Improvement Actions",
          ],
        },
      ],
    },
    {
      id: "platforms-collaboration",
      number: "03",
      title: "Platforms, Collaboration & Security Systems",
      description:
        "The extended technology layer covering cloud platforms, collaboration spaces and physical security systems under one AMC structure.",
      cards: [
        {
          title: "Cloud & Cybersecurity",
          description:
            "Administration and protection of cloud platforms, identities, endpoints, email and core cybersecurity controls under one managed framework.",
          features: [
            "Microsoft 365",
            "Cloud Services",
            "Identity & MDM",
            "Firewall & Network Security",
            "Endpoint & Email Security",
            "Cloud Backup",
          ],
        },
        {
          title: "AV & Collaboration Systems",
          description:
            "Support and maintenance for meeting, conferencing and presentation technologies to keep collaboration spaces operating reliably.",
          features: [
            "Smart Meeting Rooms",
            "Boardrooms",
            "Video Conferencing",
            "Interactive Displays",
            "Digital Signage",
            "Room Scheduling & Audio Systems",
          ],
        },
        {
          title: "ELV & Physical Security",
          description:
            "Maintenance and support for essential ELV and physical security systems within the agreed AMC scope, including SIRA-related systems where applicable.",
          features: [
            "CCTV & SIRA Support",
            "Access Control",
            "Biometrics",
            "Intercom",
            "Security Device Checks",
            "ELV System Support",
          ],
        },
      ],
    },
  ],
};

export const comparisonData = {
  header: {
    tag: "THE REAL COMPARISON",
    heading: "One Contract,\nor Four Vendors and a Phone Tree.",
    highlightLast: 4, // e.g., highlights "Phone Tree." or adjust as needed
    subhead:
      "What most Dubai businesses actually run today, next to what a 360° AMC replaces.",
  },
  columns: [
    "COVERAGE AREA",
    "TYPICAL IT AMC PROVIDER",
    "SPECIALIST AV OR ELV CONTRACTOR",
    "GS IT 360° AMC",
  ],
  badge: "ALL-IN-ONE",
  rows: [
    {
      id: "core-it",
      coverageArea: "Core IT and network",
      typicalITAMC: { status: "covered", text: "Covered" },
      specialistAVELV: { status: "not-covered", text: "Not covered" },
      gsIt360: { status: "covered", text: "Covered" },
    },
    {
      id: "cctv",
      coverageArea: "CCTV, access control, biometrics",
      typicalITAMC: { status: "not-covered", text: "Not covered" },
      specialistAVELV: {
        status: "separate",
        text: "Covered, separate contract",
      },
      gsIt360: { status: "covered", text: "Covered" },
    },
    {
      id: "boardroom",
      coverageArea: "Boardroom AV and video conferencing",
      typicalITAMC: { status: "not-covered", text: "Not covered" },
      specialistAVELV: {
        status: "separate",
        text: "Covered, separate contract",
      },
      gsIt360: { status: "covered", text: "Covered" },
    },
    {
      id: "m365",
      coverageArea: "Microsoft 365, backup, MDM portals",
      typicalITAMC: { status: "unmanaged", text: "Usually unmanaged" },
      specialistAVELV: { status: "not-covered", text: "Not covered" },
      gsIt360: { status: "covered", text: "Covered" },
    },
    {
      id: "sira",
      coverageArea: "SIRA compliance for CCTV",
      typicalITAMC: { status: "not-offered", text: "Not offered" },
      specialistAVELV: { status: "varies", text: "Varies by contractor" },
      gsIt360: { status: "included", text: "Included where scoped" },
    },
    {
      id: "two-systems",
      coverageArea: "When two systems interact",
      typicalITAMC: {
        status: "other-vendor",
        text: "That is the other vendor",
      },
      specialistAVELV: {
        status: "other-vendor",
        text: "That is the other vendor",
      },
      gsIt360: { status: "one-team", text: "One team owns the outcome" },
    },
    {
      id: "contracts",
      coverageArea: "Contracts to renew each year",
      typicalITAMC: { status: "count", text: "One" },
      specialistAVELV: { status: "count", text: "2 to 3" },
      gsIt360: { status: "count", text: "One" },
    },
    {
      id: "invoices",
      coverageArea: "Invoices to reconcile",
      typicalITAMC: { status: "count", text: "One" },
      specialistAVELV: { status: "count", text: "2 to 3" },
      gsIt360: { status: "count", text: "One" },
    },
    {
      id: "escalation",
      coverageArea: "Escalation when it is not fixed",
      typicalITAMC: { status: "queue", text: "Helpdesk queue" },
      specialistAVELV: { status: "queue", text: "Project manager" },
      gsIt360: {
        status: "head",
        text: "Named engineer, account manager, department head",
      },
    },
  ] as ComparisonRow[],
  footers: {
    left: {
      value: "2–3",
      title: "The multi-vendor reality",
      description:
        "Separate contracts & invoices - gaps between vendors coordination fall on you.",
    },
    right: {
      value: "",
      title: "GS IT 360° AMC",
      description:
        "One contract, one invoice, one accountable team - every layer owned end to end.",
    },
  },
};

export const onePartnerData = {
  header: {
    tag: "",
    heading: "How the\nOne-Partner Concept Works",
    highlightLast: 3, // Highlights "Concept Works" or matching your heading highlight rules
    subhead: `Four specialist companies <strong class="text-black font-normal">— GS.IT, GS.AV, GS.IT Security and GS.Digital — </strong> work as a single team. Managed IT, enterprise AV, cybersecurity and SIRA-approved ELV all come together under <strong class="text-black font-normal">one AMC — one contract, one SLA, one point of contact</strong> for every layer of your technology.`,
  },
  cards: [
    {
      id: "gs-it",
      logo: "/assets/images/gs-logos/gs-it.svg",
      title: "Managed IT Services",
      description: "Helpdesk, infrastructure, servers and day-to-day support",
      gradient:
        "linear-gradient(179.92deg, rgba(17, 73, 158, 0.1) 0.07%, rgba(255, 255, 255, 0.1) 109.21%)",
    },
    {
      id: "gs-av",
      logo: "/assets/images/gs-logos/gs-av.svg",
      title: "Enterprise Audio-Visual",
      description: "Meeting rooms, displays and conferencing systems",
      gradient:
        "linear-gradient(179.93deg, rgba(33, 169, 143, 0.1) 0.06%, rgba(255, 255, 255, 0.1) 110.92%)",
    },
    {
      id: "gs-security",
      logo: "/assets/images/gs-logos/gs-it-security.svg",
      title: "ELV & Physical Security",
      description: "Network security and SIRA-approved ELV systems.",
      gradient:
        "linear-gradient(179.93deg, rgba(156, 203, 59, 0.1) 0.06%, rgba(255, 255, 255, 0.1) 116.15%)",
    },
    {
      id: "gs-digital",
      logo: "/assets/images/gs-logos/gs-digital.svg",
      title: "Digital Transformation",
      description: "Digital assets, business application and AI",
      gradient:
        "linear-gradient(179.93deg, rgba(230, 62, 49, 0.1) 0.06%, rgba(255, 255, 255, 0.1) 110.4%)",
    },
  ],
  resultBox: {
    tag: "The Result",
    title: "360° IT AMC",
    description:
      "Every layer of your technology, covered by one accountable partner",
    badges: ["One contract", "One SLA", "One Point of contract"],
  },
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
  subhead:
    "Our IT AMC support in Dubai is designed for specific business types and pain points. See if your situation matches before getting in touch. ",
};
// data/businessFitData.ts
export const businessFitData = {
  business: {
    title: "Who We Support",
    items: [
      {
        title: "Growing businesses, SMEs, and large enterprises",
        description: "Coverage scaled to the size of your environment",
      },
      {
        title: "Regional offices of international companies",
        description: "Local operational support meeting global IT standards",
      },
      {
        title: "Multi-location businesses in the UAE",
        description: "One consistent support standard across all offices",
      },
      {
        title: "Regulated and compliance-driven sectors",
        description: "Infrastructure held to UAE data and security standards",
      },
    ],
  },
  challenges: {
    title: "What We Solve",
    items: [
      {
        title: "Frequent downtime or slow IT response",
        description: "Impacting productivity and business continuity",
      },
      {
        title: "Multiple vendors with no clear ownership",
        description: "Leading to delays, confusion, and accountability gaps",
      },
      {
        title: "Unpredictable IT costs",
        description: "No clarity on monthly spend or support scope",
      },
      {
        title: "Mixed Environments (ICT, ELV, AV, Cloud)",
        description: "With fragmented management and no unified control",
      },
    ],
  },
  note: {
    title: "How We Scope Your AMC",
    description:
      "As an IT AMC company in Dubai, GS IT has worked with businesses across the UAE since 2013, covering single offices and multi-site operations. We scope each contract against your user count, endpoint volume, and locations covered, which is why a single-site office and a distributed enterprise will run on entirely different models under one agreement structure.",
  },
};

export const sectionFiveData = {
  tag: "The GS IT Difference",
  heading: "Beyond Basic IT. \n A Complete 360° AMC",
  highlightLast: 2,
  subhead:
    "Most AMC contracts stop at desktops and firewalls. GS IT goes further and maintains every system in your office under a single contract. One team. Four domains. Zero blind spots.",
  domains: [
    {
      domainNumber: 1,
      badge: "Covered By All Plans",
      title: "Core IT Infrastructure",
      description:
        "The foundation of every GS IT AMC — your full IT stack is proactively maintained with SLA-backed support.",
      bordercolor: "#F0F0F0", // right gridborder
      bgcolor: "#F5F9FC", // right background
      leftbg: "linear-gradient(180deg, #FFFFFF 0%, #F5F9FC 100%)",
      leftborder: "#114A9F",
      items: [
        {
          icon: "User",
          title: "End-User Devices",
          description:
            "Desktops, laptops, workstations-setup, OS updates, fault management",
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
          description:
            "Physical & virtual servers patching, backup verification, monitoring",
        },
        {
          icon: "Package",
          title: "Storage & Backup",
          description:
            "NAS, SAN, and backup systems capacity and data integrity checks",
        },
        {
          icon: "AudioLines",
          title: "Voice & PBX",
          description:
            "IP phones, PBX, and UC platforms maintenance and fault response",
        },
      ],
    },
    {
      domainNumber: 2,
      badge: "Add-On Or Bundled",
      title: "ELV & Physical Security Systems",
      description:
        "Your building’s security infrastructure CCTV, access control, biometrics and intercoms – fully maintained under the same AMC. No separate vendor, no gaps.",

      bordercolor: "#E3EED3", // right gridborder
      bgcolor: "#FDFFFA", // right background
      leftbg: "linear-gradient(180.44deg, #FFFFFF -8.58%, #FDFFFA 99.62%)",
      leftborder: "#9CCB3B",
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
      description:
        "From board rooms to lobbies, projectors, interactive displays, video conferencing systems, and digital signage, all kept working and updated.",

      bordercolor: "#E2EFED", // right gridborder
      bgcolor: "#F5FCFB", // right background
      leftbg: "linear-gradient(180.62deg, #FFFFFF 0.54%, #F5FCFB 99.46%)",
      leftborder: "#21A98F",
      items: [
        {
          icon: "TvMinimal",
          title: "Interactive Displays",
          description:
            "Touchscreen and smart panels firmware updates and calibration",
        },
        {
          icon: "Video",
          title: "Video Conferencing",
          description:
            "VC systems, cameras, and codecs setup and fault response",
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
      description:
        "Email security portals, backup platform, identity management, and MDM, your cloud and SaaS stack, fully administered and monitored by our team.",

      bordercolor: "#E5E7F3", // right gridborder
      bgcolor: "#F4F5FF", // right background
      leftbg: "linear-gradient(180deg, #FFFFFF 0%, #F4F5FF 100%)",
      leftborder: "#2776FF",
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
        },
      ],
    },
  ],
};

export const auditData = {
  business: {
    title: "Typical IT AMC Provider",
    items: [
      { title: "Core IT (desktops, network)", active: true },
      { title: "ELV/ Physical Security not covered", active: false },
      { title: "AV systems handled by separate vendor", active: false },
      { title: "Cloud portals unmanaged or handled separately", active: false },
    ],
  },
  challenges: {
    title: "GS-IT 360° AMC",
    items: [
      { title: "Core IT (desktops, network)", active: true },
      {
        title: "ELV including CCTV, access control, and biometrics",
        active: true,
      },
      {
        title: "AV including displays, VC rooms, digital signage",
        active: true,
      },
      { title: "Cloud portals fully managed & monitored", active: true },
    ],
  },
  note: {
    title: "Book a Free Audit",
    description:
      "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure — servers, networking, end-user devices, firewalls, and cloud platforms maintained, monitored, and supported year-round for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
    button: "Get a Free Consultation",
    background: "bg-white",
  },
};
export const sectionSixData = {
  tag: "UNDERSTANDING IT AMC COSTS",
  heading: "How Much Does IT AMC \nCost in Dubai? (2026)",
  highlightLast: 2,
  subhead:
    "IT AMC pricing depends on your team size, device count, SLA tier, and compliance needs. Here's what to expect — and what to watch out for.",
};
export const statsData = [
  {
    value: `${portfolioData.years}+`,
    label: "",
    description: "Years Serving the UAE businesses ",
  },
  { value: `150+`, label: "", description: "Active AMC clients" },
  { value: `99.9%`, label: "", description: "Uptime SLA maintained" },
  { value: `30+`, label: "", description: "Dedicated IT AMC Engineers" },
];
// data/pricingData.ts
export const pricingData = [
  {
    plan: "Essential 360 AMC",
    subtitle: "For small offices",
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
    subtitle: "For growing businesses",
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
    subtitle: "For large or multi-site organisations",
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
  },
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
  description:
    "We don't publish fixed list prices — every estate is different. After a free device audit, your monthly cost is shaped by:",
  factors: [
    "Number of users & devices",
    "Onsite vs remote support ratio",
    "Industry compliance needs",
    "SLA response tier required",
    "Cybersecurity coverage level",
    "Number of office locations",
  ],

  Cta: {
    title: "Not sure which plan fits your business?",
    description:
      "Tell us your team size and we'll scope an exact monthly cost — free, no commitment, reply within 30 minutes.",
    button: "Get a Free Consultation",
    background: "bg-[#F5F9FC]",
  },
};

export const sectionSevenData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Guaranteed Response Times",
  highlightLast: 1,
  subhead:
    "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
  items: [
    {
      value: "5 Min",
      title: "Remote Support",
      description:
        "Engineer connects remotely and begins diagnosis within 5 minutes any time, any day.",
    },
    {
      value: "4 Hr",
      title: "Onsite Engineer Arrival",
      description:
        "Certified engineer physically onsite within 4 hours across Dubai.",
    },
    {
      value: "24/7",
      title: "Helpdesk Availability",
      description:
        "Our support centre is open 365 days including UAE public holidays and weekends.",
    },
    {
      value: "1 Day",
      title: "Critical Issue Resolution",
      description:
        "Infrastructure failures escalated to senior engineers with same day resolution target.",
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
  subhead:
    "Not every business needs the same support structure. Choose the coverage model that fits your team, budget, and operational requirements.",
  items: [
    {
      label: "Most comprehensive",
      dark: false,
      title: "Comprehensive AMC",
      description:
        "Full coverage including hardware, software, labor, and parts, with one flat monthly cost and zero surprise bills.",
      url: "",
    },
    {
      label: "Good for newer setups",
      dark: false,
      title: "Non-Comprehensive AMC",
      description:
        "Covers labor and preventive maintenance, while parts and hardware are replaced at cost, ideal for newer environments.",
      url: "",
    },
    {
      label: "Pay per incident",
      dark: false,
      title: "Demand/Issue based Support",
      description:
        "Pay only when you need support, with no contract commitment, and on call assistance billed per incident or visit.",
      url: "#",
    },
    {
      label: "On-premise",
      dark: false,
      title: "Resident Engineer AMC",
      description:
        "A dedicated GS IT engineer is stationed at your premises full time, giving your own IT department without the hiring cost.",
      url: "#",
    },
    {
      label: "Zero-downtime",
      dark: false,
      title: "Remote Only Support",
      description:
        "Designed for zero downtime environments with a rapid response engineer available around the clock.",
      url: "#",
    },
    {
      label: "Switching provider?",
      dark: true,
      title: "Structured Handover",
      description:
        "Already under AMC elsewhere? GS IT runs the handover in 3 business days with no gap in coverage. <a class='font-medium text-primary'>How switching works.</a>",
      url: "#",
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
    {
      icon: "ShieldCheck",
      value: "Security monitoring and backup verification",
    },
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

  escalationLevelsData: [
    {
      level: "Level 1 — First Contact",
      title: "Technical Support Team",
      description:
        "Assigned engineer handles initial diagnosis. Available via all channels.",
    },
    {
      level: "Level 2 — Escalation",
      title: "Dedicated Account Manager",
      description:
        "Senior engineer takes ownership if SLA is at risk or issue is unresolved.",
    },
    {
      level: "Level 3 — Management",
      title: "Department Head",
      description:
        "GS-IT management engaged directly for critical or unresolved cases.",
    },
  ],
};
export const gettingStartedHeaderData = {
  tag: "GETTING STARTED",
  heading: "Start Your IT AMC in 3 Simple Steps",
  highlightLast: 3,
  subhead:
    "No long process. Most clients go from first call to active IT AMC in Dubai within 48 hours.",

  stepsData: [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "Call or submit the form. We discuss your setup, team size and goals",
    },
    {
      number: "02",
      title: "Custom Proposal",
      description:
        "We send a scoped proposal with device list, plan recommendation, and fixed monthly cost within 24 hours.",
    },
    {
      number: "03",
      title: "Start IT AMC",
      description:
        "Sign, onboard, and your dedicated engineer begins supporting your business. Portal access from day one.",
    },
  ],
};
export const amcTestimonialsHeader = {
  tag: "Client Reviews",
  heading: "Trusted by \n 1,500+ Dubai Businesses",
  highlightLast: 3,
};

export const KnowledgeHeaderData = {
  tag: "Latest Insights",
  heading: "Practical IT & Security Knowledge",
  highlightLast: 1,
  subhead:
    "Guidance from our engineers on keeping your business secure, stable, and future-ready.",
  blogData: [
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
      title:
        "Optimizing Your Business IT Infrastructure Performance for Growth.",
      href: "#",
    },
  ],
};

// data/faqData.ts
export const faqHeaderData = {
  tag: "FAQs",
  // tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions ",
  // heading: "Frequently Asked Questions About \n IT AMC in Dubai",
  highlightLast: 3,
  faqData: [
    {
      question: "What is an IT AMC?",
      answer:
        "An IT Annual Maintenance Contract (AMC) is a service agreement between a business and an IT service provider like GS IT for maintaining and supporting its IT infrastructure. IT AMC contracts typically last for 12 months and can be renewed based on the agreement. It helps businesses manage IT issues, reduce unexpected disruptions, and maintain systems regularly within a predictable budget.",
    },
    {
      question: "What is included in GS IT's IT AMC support?",
      answer:
        "GS IT AMC support can cover remote helpdesk assistance, onsite support, ticketing portal access, user support, desktop and laptop support, network and infrastructure support, escalation, reporting, and account coordination. The services provided depend on the AMC plan you choose and the systems included in the agreed scope.",
    },
    {
      question: "What does 360° AMC support mean?",
      answer:
        "In this context, 360° AMC support means covering almost all technology areas under one AMC. GS IT's 360° AMC can cover core IT infrastructure, ELV and physical security, AV and meeting room systems, and managed cloud platforms. The exact coverage depends on the contract terms. With 360° AMC, businesses can manage their technology through one support partner instead of coordinating with multiple contractors.",
    },
    {
      question: "Can AV, ELV, CCTV, and SIRA systems be included in AMC?",
      answer:
        "Yes. Systems like AV, ELV, CCTV, NVR/DVR setups, access control, biometrics, intercoms, and conference equipment fall under our coverage when scoped into the contract. SIRA-approved CCTV maintenance is also available where required. You can add these services to specific tiers or get them as part of a comprehensive AMC.",
    },
    {
      question: "What remote and on-site support options are available?",
      answer:
        "Remote support tiers include 8/5, 8/7, or 24/7 coverage for critical incidents, based on your selected plan. Onsite visits are scheduled according to your contract level and facility locations. For organizations needing dedicated on-premises assistance, we offer a Resident Engineer option.",
    },
    {
      question: "What happens when I report an IT issue?",
      answer:
        "Submitting a ticket through your designated channel logs the request and assigns an initial priority level. Engineers immediately start troubleshooting to resolve the matter remotely, schedule an onsite technician, or escalate the case as needed.",
    },
    {
      question: "What is the IT AMC response and resolution SLA?",
      answer:
        "GS IT uses different response times based on the priority of an issue. High-priority issues can have a 0–5 minute response time, while medium-priority issues can have a 15–30 minute response time and low-priority issues 30–45 minutes. The time needed for final resolution can vary based on technical complexity, replacement part availability, vendor or ISP dependencies, and access permissions.",
    },
    {
      question: "Does GS IT provide a ticketing portal and support reports?",
      answer:
        "Yes. Clients receive access to a central portal to submit tickets, track live progress, and review past service history. Depending on your tier, we provide monthly support summaries, system health audits, and service review reports.",
    },
    {
      question: "Can the IT AMC plan be customized for my business?",
      answer:
        "Yes, IT Annual Maintenance Contracts (AMCs) can be configured around your user count, hardware inventory, office locations, required support hours, SLAs, and technical environment. Additional coverage for cybersecurity, AV, ELV, or cloud management can be integrated following an initial technical assessment.",
    },
    {
      question:
        "Is IT AMC better than hiring an in-house IT engineer in Dubai?",
      answer:
        "An IT AMC provides broader technical coverage at lower operational costs compared to a single full-time hire. While an internal employee offers dedicated on-site availability, an AMC grants access to a full team of certified specialists, SLA-backed responses, and continuous operational coverage without recruitment or management overhead.",
    },
    {
      question: "What is not included in an IT AMC contract?",
      answer:
        "Out-of-scope items include unscheduled project work, new infrastructure installations, structural cabling, software licensing costs, and unmanaged third-party systems. Hardware replacement and spare part procurement limits depend directly on whether you select a comprehensive or non-comprehensive agreement.",
    },
    {
      question: "How much does IT AMC cost in Dubai?",
      answer:
        "Pricing varies based on scale and technical complexity. Key variables include total endpoints, site locations, support hours, SLA response tiers, and added services like ELV or cloud management. We issue customized proposals following a review of your environment.",
    },
    {
      question: "Can GS IT help with IT hardware procurement?",
      answer:
        "Yes. GS IT can assist AMC clients with IT hardware sourcing, upgrades, replacements, and lifecycle planning through its brand and vendor network. This can include laptops, desktops, servers, switches, firewalls, wireless access points, storage, backup devices, AV equipment, ELV equipment, cybersecurity products, and cloud-related solutions. Hardware pricing and availability are confirmed through formal quotation and approval.",
    },
    {
      question: "Does GS IT keep our information private?",
      answer:
        "Client privacy and security are prioritized in all our IT support AMC services. As part of our IT AMC agreement, we prepare and sign confidentiality forms to guarantee the safety of your critical data and assets.",
    },
    {
      question: "Can we switch to GS IT if we already have an IT provider?",
      answer:
        "Yes. We handle the transition through a structured 3-day handover with no gap in coverage. Our team audits your setup, transfers credentials and documentation, configures administrative access, and runs a parallel support period to execute a seamless switch.",
    },
  ],
};

export const relatedServicesHeaderData = {
  tag: "SERVICE LEVEL AGREEMENT",
  heading: "Related Services",
  highlightLast: 1,
  subhead:
    "Every IT AMC solutions comes with a formal SLA. When something breaks, you know exactly how fast we respond, in writing, not promises.",
  relatedServicesData: [
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
  ],
};

export const partnersData = {
  tag: " Technology partners",
  heading: "Genuine Products, \n From the Industry’s Best",
  highlightLast: 4,
};
export const logoData = [
  { src: "/assets/images/itamc/pdt1.svg", alt: "Partner 1" },
  { src: "/assets/images/itamc/pdt3.svg", alt: "Partner 3" },
  { src: "/assets/images/itamc/pdt5.svg", alt: "Partner 5" },
  { src: "/assets/images/itamc/pdt4.svg", alt: "Partner 4" },
  { src: "/assets/images/itamc/pdt2.svg", alt: "Partner 2" },
];
export const recomData = {
  backgroundImage: "/assets/images/itamc/ftbanner.jpeg",
  mobbanner: "/assets/images/itamc/mobftbanner.jpg",
  tag: "Get Started Today",
  heading: "Ready to Fix Your IT \n Permanently? ",
  highlightLast: 7,
  cta: "Get a free <uppercase>IT AMC</uppercase> quote",
  description:
    "Free infrastructure audit · Custom proposal in 24hrs · No lock-in commitment",
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    submitText: "Request Call Back",
    userOptions: ["1 - 10", "11 - 25", "26 - 50", "51 - 100", "100+"],
  },
};
export const parnerpoints = [
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
  subhead:
    "Results from live GS IT AMC accounts. Full references available to qualified prospects on request.",
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

export const teamAccreditationData = {
  header: {
    tag: "OUR TEAM AND ACCREDITATION",
    heading:
      "75+ engineers and a 25+ remote desk,\nacross every layer of your tech.",
    highlightLast: 6, // Or adjust based on your heading highlight rules
    subhead:
      "One accountable partner, staffed by named specialists in IT, networking, AV, cybersecurity, SIRA-approved security and AI, backed by a 25+ remote support team.",
  },
  teams: [
    {
      id: "it-engineers",
      title: "IT Engineers",
      description: "Infrastructure, servers, networks and endpoints",
    },
    {
      id: "network-engineers",
      title: "Network Engineers",
      description: "Switching, routing, Wi-Fi and connectivity",
    },
    {
      id: "av-engineers",
      title: "AV Engineers",
      description: "Meeting rooms, displays and conferencing",
    },
    {
      id: "av-programmers",
      title: "AV Programmers",
      description: "Control systems and AV automation",
    },
    {
      id: "cybersecurity-experts",
      title: "Cybersecurity Experts",
      description:
        "Firewalls, endpoint security, email security, threat monitoring and vulnerability management.",
    },
    {
      id: "sira-engineers",
      title: "SIRA-Approved Engineers",
      description: "CCTV and ELV compliance",
    },
    {
      id: "ai-engineers",
      title: "AI Engineers",
      description: "Automation and intelligent workflows",
    },
    {
      id: "remote-support",
      title: "Remote Support Team",
      description: "24/7 helpdesk & proactive monitoring",
    },
  ],
  accreditationSection: {
    title: "Key accreditation",
    subtitle:
      "Authorised partner and certified across the platforms we maintain for you.",
    partners: [
      {
        id: "p-1",
        name: "Microsoft Certified Professional",
        imageSrc: "/assets/images/itamc/certificates/Frame 7.svg",
      },
      {
        id: "p-2",
        name: "Cisco Certified",
        imageSrc: "/assets/images/itamc/certificates/Frame 5.svg",
      },
      {
        id: "p-3",
        name: "Dell Technologies Partner",
        imageSrc: "/assets/images/itamc/certificates/Frame 16.svg",
      },
      {
        id: "p-4",
        name: "SIRA Approved",
        imageSrc: "/assets/images/itamc/certificates/Frame 3.svg",
      },
      {
        id: "p-5",
        name: "Huawei HCIE",
        imageSrc: "/assets/images/itamc/certificates/Frame 8.svg",
      },
      {
        id: "p-6",
        name: "Cisco CCNA",
        imageSrc: "/assets/images/itamc/certificates/Frame 12.svg",
      },
      {
        id: "p-7",
        name: "Sophos Endpoint & SASE Partner",
        imageSrc: "/assets/images/itamc/certificates/Frame 13.svg",
      },
      {
        id: "p-8",
        name: "Q-SYS Certified",
        imageSrc: "/assets/images/itamc/certificates/Frame 14.svg",
      },
      {
        id: "p-9",
        name: "Crestron Certified Programmer",
        imageSrc: "/assets/images/itamc/certificates/Frame 1.svg",
      },
      {
        id: "p-10",
        name: "Partner Badge 10",
        imageSrc: "/assets/images/itamc/certificates/Frame 4.svg",
      },
      {
        id: "p-11",
        name: "Partner Badge 11",
        imageSrc: "/assets/images/itamc/certificates/Frame 9.svg",
      },
      {
        id: "p-12",
        name: "Sophos Platform Partner",
        imageSrc: "/assets/images/itamc/certificates/Frame 10.svg",
      },
      {
        id: "p-13",
        name: "Partner Badge 13",
        imageSrc: "/assets/images/itamc/certificates/Frame 2.svg",
      },
      {
        id: "p-14",
        name: "Partner Badge 14",
        imageSrc: "/assets/images/itamc/certificates/Frame 6.svg",
      },
      {
        id: "p-15",
        name: "Sophos Firewall Architect",
        imageSrc: "/assets/images/itamc/certificates/Frame 11.svg",
      },
      {
        id: "p-16",
        name: "Fortinet Certified Professional",
        imageSrc: "/assets/images/itamc/certificates/Frame-18.svg",
      },
      {
        id: "p-17",
        name: "Partner Badge 17",
        imageSrc: "/assets/images/itamc/certificates/Frame 17.svg",
      },
      {
        id: "p-18",
        name: "Microsoft Azure Certified",
        imageSrc: "/assets/images/itamc/certificates/Frame 15.svg",
      },
    ],
  },
};

export const coverageModelsData = {
  header: {
    tag: "OUR COVERAGE TYPES",
    heading: "The Right Model for \nYour Business",
    highlightLast: 2, // Highlights "Your Business" or as per your pattern
    subhead:
      "Not every business needs the same support structure. Choose the coverage model that fits your team, budget, and operational requirements.",
  },
  models: [
    {
      id: "comprehensive-amc",
      tag: "Most comprehensive",
      title: "Comprehensive AMC",
      description:
        "Full coverage including hardware, software, labor, and parts, with one flat monthly cost and zero surprise bills.",
    },
    {
      id: "non-comprehensive-amc",
      tag: "Good for newer setups",
      title: "Non-Comprehensive AMC",
      description:
        "Covers labor and preventive maintenance, while parts and hardware are replaced at cost, ideal for newer environments.",
    },
    {
      id: "demand-support",
      tag: "Pay per incident",
      title: "Demand / Issue Based Support",
      description:
        "Pay only when you need support, with no contract commitment, and on call assistance billed per incident or visit.",
    },
    {
      id: "resident-engineer",
      tag: "On-premise",
      title: "Resident Engineer AMC",
      description:
        "A dedicated GS IT engineer is stationed at your premises full time, giving your own IT department without the hiring cost.",
    },
    {
      id: "remote-only",
      tag: "24/7 HELP DESK",
      title: "Remote Only Support",
      description:
        "Reliable off-site technical assistance with expert IT engineers available around the clock for support.",
    },
    {
      id: "structured-handover",
      tag: "Switching provider?",
      title: "Structured Handover",
      description:
        "Already under AMC elsewhere? Upgrade to GS IT in 3 days with no service gaps. Learn more.",
      isDarkTag: true, // Matches the dark blue tag badge style in the design
    },
  ],
};

export interface PriorityLevelItem {
  id: string;
  priorityLabel: string; // e.g., "High Priority"
  title: string; // e.g., "Total outage"
  description: string; // e.g., "Core network, server or firewall failure..."
  onsiteSupportTime: string; // e.g., "1 - 4 hr"
  resolutionApproachTitle: string; // e.g., "Same-day restoration"
  resolutionApproachDesc: string; // e.g., "Uninterrupted support until service is restored..."
}

export interface EscalationLevelItem {
  id: string;
  level: string; // e.g., "LEVEL 1"
  role: string; // e.g., "First Contact"
  title: string; // e.g., "Technical Support Team / Assigned Engineer"
  description: string; // e.g., "Assigned engineer handles initial diagnosis..."
}

export const slaEscalationData = {
  header: {
    tag: "OUR COMMITMENT",
    heading: "IT AMC Service Level Agreement",
    subhead: "Clear priorities. Defined response. Accountable support.",
    highlightLast: 2,
  },
  topBanner: {
    time: "0–10 minutes",
    description:
      "Remote support for all priorities | Ticket acknowledgement and troubleshooting begins.",
  },
  priorityLevels: [
    {
      id: "high-priority",
      priorityLabel: "High Priority",
      title: "Total outage",
      description:
        "Core network, server or firewall failure. A business-critical system is offline.",
      onsiteSupportTime: "1 – 4 hr",
      resolutionApproachTitle: "Same-day restoration",
      resolutionApproachDesc:
        "Uninterrupted support until service is restored or a workaround is live. Vendor escalation if needed.",
    },
    {
      id: "medium-priority",
      priorityLabel: "Medium Priority",
      title: "Partial outage",
      description:
        "A shared device, team or department is affected, or performance is degraded.",
      onsiteSupportTime: "4 – 8 hr",
      resolutionApproachTitle: "Same day or next business day",
      resolutionApproachDesc:
        "Timeline depends on access, approvals and third-party dependencies.",
    },
    {
      id: "low-priority",
      priorityLabel: "Low Priority",
      title: "Minor / single-user issue",
      description:
        "A non-critical application, email or peripheral issue affecting one or two users.",
      onsiteSupportTime: "8 – 36 hr",
      resolutionApproachTitle: "Queue-based resolution",
      resolutionApproachDesc:
        "Handled according to the ticket queue, support availability and agreed AMC scope.",
    },
  ],
  disclaimer:
    "Support timings apply within the hours and locations covered by your AMC. Resolution targets depend on issue complexity, parts availability, vendor or ISP support, access and client approvals.",
  escalationHeader: {
    tag: "ESCALATION MATRIX",
    heading: "A Clear Path to Every Fix",
    subhead:
      "Every issue you raise is automatically triaged, assigned, and escalated",
  },
  escalationLevels: [
    {
      id: "level-1",
      level: "LEVEL 1",
      role: "First Contact",
      title: "Technical Support Team / Assigned Engineer",
      description:
        "Assigned engineer handles initial diagnosis. Available via all channels",
    },
    {
      id: "level-2",
      level: "LEVEL 2",
      role: "Escalation",
      title: "IT Team Lead",
      description:
        "Coordinates and communicates updates and ensures timely issue resolution.",
    },
    {
      id: "level-3",
      level: "LEVEL 3",
      role: "Management",
      title: "Department Head / Management",
      description:
        "GS IT management engage directly for critical or unresolved cases",
    },
  ],
};

export const pricingPlansData = {
  tag: "OUR IT AMC PLANS",
  heading: "How Much Does IT AMC \nCost in Dubai? (2026)",
  highlightLast: 2,
  subhead:
    "IT AMC pricing depends on your team size, device count, SLA tier, and compliance needs. Here's what to expect — and what to watch out for.",
  bannerText:
    "Every plan : priority-based SLA (High 0-10 min · Med · Low) · support hours & AV / ELV / SIRA scoped to your needs",

  plans: [
    {
      id: "essential-360",
      name: "Essential 360 AMC",
      tagline: "For Small Offices",
      isPopular: false,
      features: [
        { label: "Remote support", value: "8x5 to 24x7" },
        { label: "Onsite Support", value: "As Required" },
        { label: "Preventive Maintenance", value: "As Required" },
        { label: "Standard Monitoring", value: "Standard" },
        { label: "Assigned Technical Lead", value: "Included" },
        { label: "Dedicated Account Manager", value: "Included" },
        { label: "Monthly Service Summary", value: "Included" },
        {
          label: "360° Service Coverage",
          value: "IT / Cloud / Cybersecurity / AV / ELV / SIRA.",
        },
      ],
      buttonText: "Get Custom Quote",
      buttonHref: "#quote",
    },
    {
      id: "business-360",
      name: "Business 360 AMC",
      tagline: "For Small Offices",
      isPopular: true,
      features: [
        { label: "Remote support", value: "8x5 to 24x7" },
        { label: "Onsite Support", value: "As Required" },
        { label: "Preventive Maintenance", value: "As Required" },
        { label: "Proactive Monitoring", value: "Proactive" },
        { label: "Assigned Technical Lead", value: "Included" },
        { label: "Dedicated Account Manager", value: "Included" },
        { label: "Monthly IT Health Report", value: "Included" },
        {
          label: "360° Service Coverage",
          value: "IT / Cloud / Cybersecurity / AV / ELV / SIRA.",
        },
      ],
      buttonText: "Get Custom Quote",
      buttonHref: "#quote",
    },
    {
      id: "enterprise-360",
      name: "Enterprise 360 AMC",
      tagline: "For large & multi-site organisations",
      isPopular: false,
      features: [
        { label: "Remote support", value: "8x5 to 24x7" },
        { label: "Onsite Support", value: "As Required" },
        { label: "Preventive Maintenance", value: "As Required" },
        { label: "Advanced / Multi-Site Monitoring", value: "Advanced" },
        { label: "Senior Technical Oversight", value: "Included" },
        { label: "Senior Service Manager", value: "Included" },
        { label: "Executive Service Report", value: "Included" },
        {
          label: "360° Service Coverage",
          value: "IT / Cloud / Cybersecurity / AV / ELV / SIRA.",
        },
      ],
      buttonText: "Get Custom Quote",
      buttonHref: "#quote",
    },
  ],
  scopedCostSection: {
    title: "Why your final cost is scoped",
    description:
      "We don't publish fixed list prices — every estate is different. After a free device audit, your monthly cost is shaped by:",
    costFactors: [
      "Number of users & devices",
      "Support Hours Required",
      "Industry & Compliance Requirements",
      "Number of Office Locations",
      "Onsite Support Requirements",
      "Infrastructure Size & Complexity",
      "360° Service Coverage Required",
    ],
  },
  bottomBanner: {
    title: "Not sure which plan fits your business?",
    description:
      "Tell us your team size and we'll scope an exact monthly cost — free, no commitment, reply within 30 minutes.",
    buttonText: "Get A Free consultation",
    buttonHref: "#consultation",
  },
};

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  phoneLink?: string; // For handling clickable phone numbers like +971 4 578 6518
}

export const gettingStartedData = {
  header: {
    tag: "GETTING STARTED",
    heading: "Start Your IT AMC in 3 Simple Steps",
    highlightLast: 3, // Highlights "3 Simple Steps"
    subhead:
      "No long process. Most clients go from first call to active IT AMC in Dubai within 48 hours.",
  },
  steps: [
    {
      id: "step-1",
      number: "01",
      title: "Free Consultation",
      description:
        "Call +971 4 578 6518 or submit the form. We discuss your setup, team size, and goals, then map what your business needs.",
      phoneLink: "+97145786518",
    },
    {
      id: "step-2",
      number: "02",
      title: "Custom Proposal",
      description:
        "We send a scoped proposal with device list, plan recommendation, and fixed monthly cost within 24 hours.",
    },
    {
      id: "step-3",
      number: "03",
      title: "Start IT AMC",
      description:
        "Sign, onboard, and our dedicated engineer begins supporting your business. Portal access from day one.",
    },
  ] as StepItem[],
  switchBanner: {
    title: "Already have an AMC?",
    description:
      "Most of our clients switched from another provider. We plan the move so your business is never without support.",
    buttonText: "Contact Us",
    buttonHref: "#contact",
    benefits: [
      "The audit is free, before you commit to anything.",
      "Go-live aligned to your existing contract's end date.",
      "We collect documentation from your current provider.",
      "Single point of contact throughout your onboarding",
    ],
  },
};

export interface InsightCardItem {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
  isHighlighted?: boolean; // dark-blue filled action button + blue title (card 1)
}

export const latestInsightsData = {
  header: {
    tag: "LATEST INSIGHTS",
    heading: "Practical IT &\nSecurity Knowledge",
    highlightLast: 2, // highlights the last 2 words: "Security Knowledge"
    subhead:
      "Guidance from our engineers on keeping your business secure, stable, and future-ready.",
  },
  insights: [
    {
      id: "insight-1",
      category: "CYBER SECURITY",
      date: "13 APR 2026",
      title:
        "Overcoming Common Video Conferencing Challenges with Advanced Technologies",
      description:
        "How AI, 4K video, and advanced security features solve common video conferencing problems and boost hybrid team productivity.",
      imageSrc: "/assets/images/itamc/knowledge-1.jpg",
      linkHref: "#insight-1",
      isHighlighted: true,
    },
    {
      id: "insight-2",
      category: "IT AMC",
      date: "13 APR 2026",
      title: "Why Choose IT AMC Instead of On-Demand IT Support in Dubai?",
      description:
        "Tired of IT downtime? How an IT AMC in Dubai delivers proactive monitoring and costs to keep your systems stable 24/7.",
      imageSrc: "/assets/images/itamc/knowledge-2.jpg",
      linkHref: "#insight-2",
    },
    {
      id: "insight-3",
      category: "AUDIO VISUAL",
      date: "13 APR 2026",
      title:
        "Overcoming Common Video Conferencing Challenges with Advanced Technologies",
      description:
        "How AI, 4K video, and advanced security features solve common video conferencing problems and boost hybrid team productivity.",
      imageSrc: "/assets/images/itamc/knowledge-3.jpg",
      linkHref: "#insight-3",
    },
  ] as InsightCardItem[],
};

// import type { FeatureItem } from

export const itAmcCtaForm = {
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    submitLabel: "Request Call Back",
    action: "/api/callback",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      {
        name: "email",
        label: "Work email",
        type: "email",
        required: true,
        half: true,
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        required: true,
        half: true,
      },
      {
        name: "users",
        label: "Number of users",
        type: "select",
        placeholder: "Select number of users",
        required: true,
        options: ["1-10", "11-50", "51-100", "100+"],
      },
    ],
  },
};
