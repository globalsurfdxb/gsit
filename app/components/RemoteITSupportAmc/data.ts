import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Remote Only Support AMC · Dubai",
  heading: "Remote IT Support \n AMC in Dubai",
  highlightLast: 3,
  description: "A fully remote support model that keeps your business backed by responsive IT expertise, proactive checks and specialist escalation when needed.",
  backgroundImage: "/assets/images/remoteitsupport/banner.jpeg",
  mobbanner: "/assets/images/remoteitsupport/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "IT Service & Consulting" },
    { value: "0-15 Min", desc: "Target Initial Response" },
    { value: '24/7', desc: "Helpdesk Support" },
    { value: "L1 - L3", desc: "Remote Escalation Tiers" },
    { value: "360°", desc: "IT Solutions" }
  ],
  buttons: [ 
    {
      text: "Explore solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Talk to an expert",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};
 
export const servicesData = {
  tag: "Technical Capability",
  heading: "One Partner. \n Backed by Six Specialist Domains.",
  highlightLast: 5,
  subhead: "Your Remote AMC is supported by specialist teams across cybersecurity, cloud, ICT and network, managed IT, ELV, and AV, giving complex issues a clear path to the right expertise.",
servicesData: [
  {
    icon: "ShieldCheck",
    title: "Cybersecurity",
    description: "Proactive threat detection and response to keep your business secure",
    href: "#",
    featured: true,
  },
  {
    icon: "CloudCheck",
    title: "Cloud",
    description: "Flexible cloud infrastructure and migration support built for consistent performance.",
    href: "#",
    featured: true,
  },
  {
    icon: "Network",
    title: "Network & IT Infrastructure",
    description: "Thoughtful network design and IT infrastructure for seamless connectivity everywhere.",
    href: "#",
    featured: true,
  },
  {
    icon: "/assets/images/icons/squaretext.svg",
    title: "Managed IT",
    description: "End-to-end IT support and monitoring, so systems run smoothly.",
    href: "#",
    featured: true,
  },
  {
    icon: "Cctv",
    title: "ELV & Physical Security",
    description: "Extra-low voltage systems design, integration, and maintenance for smart buildings.",
    href: "#",
    featured: true,
  },
  {
    icon: "Cast",
    title: "AV & Meeting Room",
    description: "Audio-visual solutions engineered for immersive, seamless collaboration and communication spaces.",
    href: "#",
    featured: true,
  },
],
};


 





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
export const slaData = {
  tag: "SLA",
  heading: "Service {{Level Agreement}}",
  highlightLast: 2,
  subhead: "",
  note: "Response time refers to the initial remote acknowledgement of a ticket. Full resolution time depends on the nature of the issue, access availability, and any third-party dependencies involved.",
  ths: ['Priority','Impact','Target Initial Remote Response'],
  rows: [
    { priority: "high" as const, impact: "Total network/internet/server down", response: "0 – 10 mins" },
    { priority: "medium" as const, impact: "Partial system/shared device/key peripheral", response: "0 – 15 mins" },
    { priority: "low" as const, impact: "1 to 2 users or non-critical peripheral issue", response: "0 – 30 mins" },
  ], 
};


 
export const whychooseData = {
  tag: "Why GS IT",
  heading: "The Specialists Behind \n Your Remote AMC",
  highlightLast: 3,
  subhead:
    "Your remote AMC is backed by GS IT's wider technical team, bringing specialist expertise, structured escalation, and clear ownership when your IT needs more than first line support.",
  items: [
  {
    type: "card",
    title: "Qualified Helpdesk Engineers",
    description: "Get the right technical person on the issue, without having to explain the same problem repeatedly.",
  },
  {
    type: "card",
    title: "Cybersecurity & Compliance Team",
    description: "Security is handled alongside IT operations, so risks and compliance requirements don't become afterthoughts.",
  },
  {
    type: "card",
    title: "Cloud & Infrastructure Specialists",
    description: "Keep your core IT environment stable with specialists who understand how your systems work together.",
  },
  {
    type: "card",
    title: "ELV & SIRA-Certified Engineers",
    description: "Get ELV expertise backed by SIRA-certified engineers who understand both technical and regulatory requirements.",
  },
  {
    type: "card",
    title: "AV & Workplace Technology Team",
    description: "Keep meeting rooms and workplace technology ready to work when your teams need them.",
  },
  {
    type: "card",
    title: "Account Ownership",
    description: "One accountable team stays close to your business, tracks issues, and makes sure nothing gets lost between teams.",
  },
],
};
export const postdevelopmentData = {
  tag: "How Support Works ",
  heading: "Four Steps. \n One Clear Process.",
  highlightLast: 3,
  subhead:
    "From the first ticket to final closure, every request follows a clear path with defined ownership, escalation, and documented resolution.",
 data: [
  {
    number: "01",
    title: "Raise the Request",
    description: "Raise your issue through an approved channel and put support in motion.",
  },
  {
    number: "02",
    title: "Remote Diagnosis",
    description: "Our engineers assess the issue and work remotely toward a quick resolution.",
  },
  {
    number: "03",
    title: "Escalation",
    description: "Complex issues move to the right specialist without losing ownership or momentum.",
  },
  {
    number: "04",
    title: "Closure & Report",
    description: "The issue is closed with documented actions, resolution notes, and service visibility.",
  }, 
],
};

 

export const sixFeaturesGridData = {
    tag: "Overview ",
  heading: "Six Features. \n One Accountable Remote Desk.",
  highlightLast: 4,
  subhead:
    "Support through approved channels with priority based response targets, preventive portal checks, escalation, and a service desk for tracking and reporting. Everything works together as one accountable service, giving your team a clear path from request to resolution.",
 
  image: "/assets/images/remoteitsupport/main.jpeg",
  imageAlt: "Remote support team assisting customers",
  leftItems: [
    {
      icon: "Headset",
      title: "Remote Helpdesk Support",
      description: "Support through approved channels during plan coverage hours.",
    },
    {
      icon: "ArrowUp10",
      title: "Priority-Based Response",
      description: "Initial response targets based on issue priority, plan coverage and access availability.",
    },
    {
      icon: "MonitorCog",
      title: "Remote Issue Troubleshooting",
      description: "Remote diagnosis and troubleshooting for approved users, systems, devices, applications, and platforms.",
    },
  ],
  rightItems: [
    {
      icon: "CalendarCheck",
      title: "Preventive Health Checks",
      description: "Scheduled checks for backup, firewall, endpoint and security portals as per the selected plan.",
    },
    {
      icon: "/assets/images/icons/usershield.svg",
      title: "Escalation Support",
      description: "Access to L1–L3 technical escalation and specialist involvement where required.",
    },
    {
      icon: "TicketCheck",
      title: "Service Desk Portal",
      description: "Ticket creation, tracking, reporting and complete support history.",
    },
  ],
} ; 

export const supportLayerData = {
  tag: "THE VALUE OF REMOTE AMC",
  heading: "The Support \n {{Layer Behind Your IT Team}}",
  highlightLast: 5,
  subhead:
    "Give your IT team additional technical depth without adding headcount, while keeping support responsive, accountable, and easy to track. Designed to work alongside your existing IT setup rather than replace it, filling coverage gaps instead of duplicating effort already in place.",
  data: [
    {
      label: "Risk",
      title: "Controlled IT Risk",
      description: "Preventive checks and escalation discipline catch issues before they become downtime.",
    },
    {
      label: "Speed",
      title: "Faster Remote Response",
      description: "Defined response targets and clear channels replace ad-hoc, whoever's free troubleshooting.",
    },
    {
      label: "Visibility",
      title: "Better Accountability",
      description: "Ticket history and reporting give every issue a trail and every fix an owner.",
    },
    {
      label: "Team",
      title: "Stronger Internal IT",
      description: "L2/L3 remote support without duplicating or replacing your onsite team's duties.",
    },
  ],
};