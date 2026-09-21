import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Resident IT Engineer · AMC · Dubai · UAE",
  heading: "Resident {{IT Engineer AMC in Dubai}}",
  highlightLast: 3,
  description: "GS IT places a qualified, dedicated engineer at your office to manage daily IT support, preventive maintenance, and hands on infrastructure tasks.",
  backgroundImage: "/assets/images/resident-it-engineer/banner.jpeg",
  mobbanner: "/assets/images/resident-it-engineer/banner.jpeg",
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
      icon: "Toolbox",
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
  tag: "WHY GS IT",
  heading: "One Engineer. \n A Full IT Team Behind Them.",
  highlightLast: 6,
  subhead: `A consistent, onsite point of IT ownership, without the cost, hiring risk, and continuity gaps of a direct employee.`,
  points: [
    {
      title: "Onsite Ownership",
      description: "One engineer who knows your people and environment, present every business day for hands-on support.",
    },
    {
      title: "Depth Without Headcount",
      description: "Central IT and L2 / L3 specialists step in the moment an issue outgrows onsite L1 support.",
    },
    {
      title: "Guaranteed Continuity",
      description: "Leave, sickness, and replacement are ours to manage. A single person is never a single point of failure.",
    },
    {
      title: "Predictable Monthly Cost",
      description: "A fixed fee for your IT resident engineer covers recruitment, payroll, training, and retention overhead, keeping costs predictable.",
    },
    {
      title: "Complete Ticket Visibility",
      description: "Every incident, request, maintenance task, and visit is documented, tracked, and accessible for complete support activity visibility.",
    },
    {
      title: "Faster Onsite Issue Resolution",
      description: "Hardware, network, device, and infrastructure issues are addressed onsite, reducing delays and accelerating resolution for your business.",
    },
  ],
}
export const recomData = {
  backgroundImage: "/assets/images/resident-it-engineer/ctabanner.jpeg",
  mobbanner: "/assets/images/resident-it-engineer/ctabanner.jpeg",
  tag: "",
  heading: "Give your business an onsite IT \n expert with a full support team \n behind them.",
  highlightLast: 16,
  description: "Tell us about your environment and business days. We will scope the right resident engineer and get them onsite, backed by the full team from day one.",

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
    question: "What is an onsite IT engineer?",
    answer: "An onsite IT engineer provides hands-on technical support at your location, managing IT issues, maintenance, infrastructure, devices, and user requirements.",
  },
  {
    question: "What does an onsite IT support engineer do?",
    answer: "An onsite IT support engineer troubleshoots hardware, software, networks, connectivity, devices, and user issues while performing maintenance and infrastructure support.",
  },
  {
    question: "Do GS IT provide onsite IT support in Dubai?",
    answer: "Yes. GS IT provides onsite IT support in Dubai through dedicated onsite IT engineers who work from your premises and are backed by GS IT's technical specialists when additional expertise is required.",
  },
  {
    question: "Can I get a dedicated IT engineer for my office?",
    answer: "Yes. GS IT can provide a dedicated onsite IT engineer to manage daily support, user issues, infrastructure, maintenance, and technical requirements.",
  },
  {
    question: "What systems can an onsite IT engineer support?",
    answer: "Our engineers support computers, servers, networks, Wi-Fi, meeting room technology, peripherals, operating systems, and other workplace IT infrastructure.",
  },
  {
    question: "Can an onsite engineer work with our internal IT team?",
    answer: "Yes. Our onsite engineers can work alongside your internal IT team, handling local support while coordinating specialist assistance and technical escalations.",
  },
  {
    question: "How do I choose the right onsite IT support model?",
    answer: "Choose based on your workload, location, business hours, response requirements, and whether you need resident, scheduled, or on-demand onsite support.",
  },
  {
    question: "Can an IT onsite engineer support multiple locations?",
    answer: "Yes, depending on your requirements. GS IT can provide onsite IT coverage across multiple locations through dedicated engineers and coordinated support, with specialist teams available when additional expertise is required.",
  },
  {
    question: "What happens when an onsite engineer cannot resolve an issue?",
    answer: "The engineer escalates complex issues to the appropriate GS IT specialist or technology partner while maintaining ticket ownership, communication, and follow-up.",
  },
  {
    question: "How quickly can an onsite IT engineer start?",
    answer: "After assessing your requirements, GS IT prepares access, documentation, responsibilities, contacts, and site information before transitioning the engineer into active service.",
  },
],
}; 
 
export const overviewData = {
  backgroundImage: "/assets/images/resident-it-engineer/main.jpeg",
  mobbanner: "/assets/images/resident-it-engineer/main.jpeg",
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

  image: "/assets/images/resident-it-engineer/main2.jpeg",
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