import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Resident IT Engineer · AMC · Dubai · UAE",
  heading: "Resident {{IT Engineer AMC in Dubai}}",
  highlightLast: 3,
  description: "GS IT places a qualified, dedicated engineer at your office to manage daily IT support, preventive maintenance, and hands on infrastructure tasks.",
  backgroundImage: "/assets/images/remoteitsupport/banner.jpeg",
  mobbanner: "/assets/images/remoteitsupport/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "Serving UAE" },
    { value: "Ticket Ownership", desc: "End to end" },
    { value: 'Specialist', desc: "Escalation" },
    { value: "Zero Response", desc: "Delay" }
  ],
  buttons: [
    {
      text: "Talk to experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    }, 
  ],
};

export const knowwhenData = {
  tag: "Know When You Need It",
  heading: "When Do You \n Need an Onsite IT Engineer?",
  highlightLast: 5,
  subhead: "Not every IT issue can be solved remotely. Here's how to recognize when your business needs a physical presence, not just a session.",

  servicesData: [
    {
      icon: "History",
      title: "Recurring IT Issues",
      description: "Hardware, network, cabling, or connectivity problems keep returning and need hands-on attention at your location.",
      href: "#",
      featured: true,
    },
    {
      icon: "Headset",
      title: "Frequent User Support",
      description: "Employees regularly need help with devices, applications, access, peripherals, and other IT issues.",
      href: "#",
      featured: true,
    },
    {
      icon: "Handshake",
      title: "Business-Critical Operations",
      description: "IT problems can quickly disrupt employees, meetings, operations, or customer-facing services.",
      href: "#",
      featured: true,
    },
    {
      icon: "Layers",
      title: "Growing IT Workload",
      description: "IT problems can quickly disrupt employees, meetings, operations, or customer-facing services.",
      href: "#",
      featured: true,
    },
    {
      icon: "MapPinned",
      title: "Multiple Business Locations",
      description: "Distributed offices need reliable onsite coverage and consistent IT support across different locations.",
      href: "#",
      featured: true,
    },
    {
      icon: "MapPinned",
      title: "Regular Hands-On Maintenance",
      description: "Servers, network equipment, workstations, and other infrastructure need inspections, maintenance, and physical checks.",
      href: "#",
      featured: true,
    },
  ]
};
export const servicesData = {
  tag: "CONTINUITY ",
  heading: "No Single Person. \n No single Point of Failure. ",
  highlightLast: 5,
  subhead: "The engineer remains a GS IT employee throughout, works to your daily coordination, and is covered whenever they are away. ",
  servicesData: [
  {
    icon: "UserRound",
    title: "Employment Stays with Us",
    description: "The engineer remains a GS IT employee throughout the engagement. Employment, supervision, HR management, and related responsibilities remain fully with GS IT.",
    href: "#",
    featured: true,
  },
  {
    icon: "Calendar1",
    title: "Leave & Absence Coverage",
    description: "During planned leave, a suitable replacement is arranged with prior notice. For unplanned absence, appropriate support is provided to maintain service continuity.",
    href: "#",
    featured: true,
  },
  {
    icon: "UserCheck",
    title: "Engineer Replacement",
    description: "If you are not satisfied with the assigned engineer, written notice initiates a review. A minimum three-month transition period ensures continuity while a suitable replacement is arranged.",
    href: "#",
    featured: true,
  },
],
};
export const whyChooseUsData = {
  tag: "WHY CHOOSE US",
  heading: "Why Operators Rely on \n Our Marine IPTV Solutions",
  highlightLast: 4,
  subhead: `Working with an accountable regional integration team keeps your onboard entertainment project on budget and schedule.`,
  points: [
    {
      title: "Yard & Port Access in the UAE",
      description: "Onsite technical teams mobilize to major regional ports without extended travel delays.",
    },  
    {
      title: "Cross-Discipline In-House Teams",
      description: "No third-party handoffs, as we have a dedicated team of network, AV, and cabling specialists.",
    }, 
    {
      title: "UAE Regulatory Familiarity",
      description: `${portfolioData.years}+ years of regional projects have strengthened UAE media and telecom understanding.`,
    }, 
    {
      title: "Vendor Neutral Specification",
      description: "Hardware and platform choice follows the vessel requirement without a supplier tie in.",
    }, 
    {
      title: "Documented Handover",
      description: "As built drawings and configuration records go to the operator at project completion.",
    }, 
    {
      title: "Ongoing AMC Support",
      description: "Remote diagnostics and regular updates under AMC keeps IPTV operations smooth.",
    },  
  ],
} 
export const recomData = {
  backgroundImage: "/assets/images/remoteitsupport/ctabanner.jpeg",
  mobbanner: "/assets/images/remoteitsupport/ctabanner.jpeg",
  tag: "",
  heading: "Ready to give your IT team a remote \n backline?",
  highlightLast: 10,
  description: "Share your current setup and where support falls short. GS IT will assess your environment, identify the coverage gaps, and recommend a remote AMC plan built around your actual needs.",

  cta: "Get a consultation ",
};


export const partnersData = {
  tag: " Technology partners",
  heading: "Genuine Products, \n From the Industry’s Best",
  highlightLast: 4,
};
export const logoData = [
  { src: "/assets/images/itamc/pdt1.svg", alt: "Partner 2" },
  { src: "/assets/images/itamc/pdt3.svg", alt: "Partner 3" },
  { src: "/assets/images/itamc/pdt5.svg", alt: "Partner 5" },
  { src: "/assets/images/itamc/pdt4.svg", alt: "Partner 4" },
  { src: "/assets/images/itamc/pdt2.svg", alt: "Partner 1" },
];

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
    title: "Compatible Technology ",
    description: "Hardware selected to match your existing tech stack. ",
  },
  {
    title: "Faster Procurement ",
    description: "Direct partner ties skip delays and speed up delivery. ",
  },
  {
    title: "Vendor-Agnostic ",
    description: "We pick the best brands to suit your exact needs. ",
  },
];

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Frequently Asked Questions",
  highlightLast: 3,
  faqData: [
    {
      question: "What is included in a Remote IT Support AMC?",
      answer: "GS IT's remote AMC includes helpdesk support, L1–L3 escalation, preventive checks on backup/firewall/antivirus, and monthly reporting, all delivered remotely through approved channels within the agreed scope.",
    },
    {
      question: "What IT issues can be resolved remotely?",
      answer: "Remote engineers troubleshoot approved users, systems, devices, applications, and platforms, software errors, access issues, and network problems within the scope of GS IT and the client agree upon.",
    },
    {
      question: "Is remote IT support secure?",
      answer: "Yes. Remote troubleshooting depends on secure, permissioned access to approved systems and portals, with GS IT's team working only within the access and tool permissions the client grants.",
    },
    {
      question: "Can remote IT support monitor our systems?",
      answer: "Yes. GS IT runs scheduled checks on backup, firewall, antivirus, and security portals, frequency scales by plan, from monthly on Basic to weekly on Premium.",
    },
    {
      question: "Can a Remote IT AMC support multiple users and devices?",
      answer: "Yes. GS IT's AMC covers an agreed number of approved end-users, devices, and network infrastructure, all routed through one centralized remote helpdesk and ticketing system.",
    },
    {
      question: "Can remote engineers support Microsoft 365 and cloud services?",
      answer: "Cloud and infrastructure specialists support cloud, server, and network platforms remotely where applicable. Coverage depends on what is listed in the approved scope of work.",
    },
    {
      question: "Does a Remote IT AMC include proactive IT maintenance?",
      answer: "Yes. GS IT runs scheduled preventive checks and, on Standard/Premium, adds IT audits, gap assessments, and quarterly reviews to catch issues before they disrupt operations.",
    },
    {
      question: "How quickly will remote IT support respond to an issue?",
      answer: "Response depends on priority and plan. GS IT targets 0–15 minutes for initial remote acknowledgement, with Premium adding 24/7 coverage for critical issues.",
    },
    {
      question: "Can remote IT support help prevent recurring IT problems?",
      answer: "Yes. Engineers can review recurring incidents, identify underlying causes, recommend corrective actions, and apply preventive measures to reduce repeated disruptions.",
    },
    {
      question: "How are remote IT support requests tracked?",
      answer: "Support requests can be logged and tracked through a centralized service desk, giving your business visibility into reported issues, actions taken, and resolution status.",
    },
  ],
}; 
 
export const overviewData = {
  backgroundImage: "/assets/images/server-and-storage/main.jpeg",
  mobbanner: "/assets/images/server-and-storage/mobmain.jpeg",
  tag: "Resident IT Support",
  heading: "When IT Breaks, {{The Day Stops}} ",
  highlightLast: 3,
  description: [`Most IT problems stay invisible until they cost you a working day, whether it's an email outage, a frozen boardroom, or a laptop that will not boot before a client meeting. When your only option is a remote ticket in a queue, small issues turn into lost hours.`,
    `A resident IT engineer closes that gap by being in the room before the queue forms, and by knowing your environment well enough to fix it fast.`],
  button: {
    title: "Contact us",
    link: "#",
  }
};
 
export const sixFeaturesGridData = {
  tag: "Day to Day ",
  heading: "What Our \n IT Engineer Delivers",
  highlightLast: 3,
  subhead:
    "End to end onsite support across users and infrastructure, preventive checks, audits, and advisory. Delivered by the engineer, backed by the central team.",

  image: "/assets/images/remoteitsupport/main.jpeg",
  imageAlt: "Remote support team assisting customers",
  leftItems: [
    {
       
      title: "End-to-end User & \n Infra Support",
      description: "Complete support for user-side and infrastructure-side issues, onsite and hands-on.",
    },
    { 
      title: "Preventive \n Checks",
      description: "Backup, antivirus, and firewall checks with notifications, so problems surface early.",
    },
    { 
      title: "Central IT & L2 / L3 Escalation",
      description: "Coordination with the central team the moment a problem needs specialist depth.",
    },
  ],
  rightItems: [
    { 
      title: "Infrastructure \n Setup & Upkeep",
      description: "Maintenance of your current infrastructure and IT peripherals, kept running day to day.",
    },
    { 
      title: "IT Audit, Inventory &\n  Asset Labelling",
      description: "Complete IT auditing, inventory register, and asset tagging you can rely on.",
    },
    { 
      title: "Consultation & \n Awareness",
      description: "Backup, security, DR and BC advisory, plus user awareness sessions for your team.",
    },
  ],
};
 export const serverChoicesData = {
  tag: "360° Coverage",
  heading: "One Partner. \n Every Layer of Your IT.",
  highlightLast: 5 ,
  subhead:
    "Most providers cover core IT, leaving you to coordinate multiple vendors. We manage IT, AV, ELV, cloud, and security through one accountable partner, backed by in-house specialists supporting your onsite engineer. Your dedicated engineer is one person but never working alone. GS IT is available for escalation, implementation, and advisory support.",
 items: [
  {
    type: "card",
    label: "Core",
    title: "Managed IT",
    description: "Helpdesk, ticket ownership, and day-to-day operations.",
  },
  {
    type: "card",
    label: "L3",
    title: "Networks & Infrastructure",
    description: "Servers, networks, and infrastructure specialists.",
  },
  {
    type: "card",
    label: "Platforms",
    title: "Cloud",
    description: "Cloud platforms, migration, and managed operations.",
  },
  {
    type: "card",
    label: "Security",
    title: "Cyber Security",
    description: "Security checks, compliance guidance, and escalation.",
  },
  {
    type: "card",
    label: "ELV",
    title: "ELV & Physical Security",
    description: "Access control, CCTV, and intercom expertise.",
  },
  {
    type: "card",
    label: "AV",
    title: "AV & workplace",
    description: "Video conferencing and meeting room support.",
  },
],
};
export const supportLayerData = {
  tag: "HOW IT WORKS",
  heading: "Every Issue {{Has a Path.}}",
  highlightLast: 5,
  subhead:
    "Your engineer owns onsite L1. When an issue needs more, it flows through the team, without you having to manage the handoff. ",
  data: [
    {
      label: "STEP 01 · ONSITE L1 ",
      title: "Engineer handles it ",
      description: "Resolved directly at your premises, hands-on. ",
    },
    {
      label: "STEP 02 · HELPDESK / L2 ",
      title: "Shared team support ",
      description: "Extra hands from the helpdesk when needed. ",
    },
    {
      label: "STEP 03 · L3 / CENTRAL IT ",
      title: "Specialist depth ",
      description: "Central specialists take on complex problems. ",
    },
    {
      label: "STEP 04 · REPORT ",
      title: "Back to your POC ",
      description: "Resolution notes and reporting to your point of contact. ",
    }, 
  ],
};