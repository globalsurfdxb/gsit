import { icons } from "lucide-react";
import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "IT Services · Dubai, UAE · Since 2011",
  heading: "Complete IT Services \nfor Dubai Businesses ",
  highlightLast: 3,
  description: `GS IT is a trusted IT service company in Dubai that delivers end-to-end IT services backed by ${portfolioData.years}+ years of experience, ${portfolioData.employees} certified engineers, and written SLAs.`,
  backgroundImage: "/assets/images/itservice/banner.jpeg", 
  mobbanner: "/assets/images/itservice/mobile-banner.jpeg", 
  keypoints: [""],
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
export const SectionHeaderData = {
  tag: "What We Offer ",
  heading: "Your Complete IT Service \nPartner in Dubai ",
  highlightLast: 3,
  subhead: "Every service is delivered by our in-house engineers. As an IT service provider in Dubai, we take full ownership of your technology environment from day one. ",
  servicesData : [
  {
    icon: "Toolbox",
    title: "Managed IT Services",
    description: "Complete management of your IT infrastructure by certified experts. ",
    href: "#",
    featured: true,
  },
  {
    icon: "Cpu",
    title: "IT AMC ",
    description: "Predictable IT support with fixed monthly costs and guaranteed response times. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "Headset",
    title: "IT Support ",
    description: "Fast, reliable technical assistance whenever you need it. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "MonitorSmartphone",
    title: "New Office IT Setup ",
    description: "Launch your new office with a fully ready and reliable IT environment. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "MapPinPen",
    title: "IT Relocation ",
    description: "Move your IT infrastructure safely with minimal disruption to business operations. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "Cloudy",
    title: "Cloud Migration ",
    description: "Seamlessly move your data and applications to the cloud with confidence. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "UserStar",
    title: "IT Consulting ",
    description: "Strategic guidance to align technology with your business goals. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "UserPlus",
    title: "IT Outsourcing ",
    description: "Let our specialists manage your IT while you focus on growing your business. ",
    href: "#",
    featured: false,
  }, 
  {
    icon: "Waypoints",
    title: "ICT Solutions ",
    description: "Integrated technology solutions designed to support modern business operations. ",
    href: "#",
    featured: false,
  }, 
]
};
export const rightFitData = {
  tag: "Who is this for?",
  heading: "Is GS IT the Right Fit for \nYour Business?",
  highlightLast: 2,
  subhead: "Our services are designed for specific business types and pain points. See if your situation matches before getting in touch. ",
};
// data/businessFitData.ts
export const businessFitData = {
  business: {
    title: "You are a Great Fit If... ",
    items: [
      {   description: "You are an SME with 5 to 200 users without a full-time internal IT team " },
      {   description: "You are a regional branch needing on-ground UAE IT services " },
      {   description: "You are scaling up and need an enterprise IT services partner that grows with your business " },
      {   description: "You need corporate IT services across multiple offices with consistent standards across locations " },
      {   description: "You want a single IT service contract covering IT, CCTV, AV systems, and cloud platforms " }, 
    ],
  },
  challenges: {
    title: "Common Challenges We Solve ",
    items: [
      { description: "Frequent downtime with slow IT response impacting productivity and revenue " }, 
      { description: "Working with multiple vendors without clear ownership often leads to delays " }, 
      { description: "Unpredictable IT service costs with no clarity on monthly spend or support scope " }, 
      { description: "Mixed IT, CCTV, AV and cloud environments managed by different providers " }, 
      { description: "Reactive firefighting rather than proactive infrastructure management " },  
    ],
  }, 
};
export const differenceData = {
  tag: "The GS IT difference",
  heading: "Typical IT Service Provider vs GS IT ",
  highlightLast: 2, 
  subhead: "Most IT Service providers handle only the basics and outsource the rest. GS IT manages every layer of your technology environment under one accountable team, so nothing slips between vendors, responsibilities stay clear, and issues get resolved faster.",
  headers : {
    scenario: "Area of Difference",
    without: "Typical IT Service Provider",
    with: "GS IT ",
  },
   table: [ 
  {
    scenario: "Breadth of Capability ",
    without: "Covers only core IT while outsourcing specialist services to third parties ",
    with: "Delivers IT, cybersecurity, AV, CCTV, and cloud under one fully managed team "
  }, 
  {
    scenario: "When Something Breaks & Cybersecurity Monitoring ",
    without: "Multiple vendors get involved, causing delays and confusion over ownership ",
    with: "Multiple vendors get involved, causing delays and confusion over ownership "
  }, 
  {
    scenario: "Problem Solving Approach ",
    without: "Reactive: Action starts only after the issue disrupts operations ",
    with: "Proactive: Risks are identified and addressed before they impact the business "
  }, 
  {
    scenario: "Response Commitment ",
    without: "Informal promises with inconsistent delivery and unclear accountability ",
    with: "Backed by a written SLA with defined response and resolution commitments "
  }, 
  {
    scenario: "On the Ground Support ",
    without: "Primarily remote support with limited local field presence ",
    with: "Local engineers in Dubai, with onsite support available whenever required "
  }, 
  {
    scenario: "Experience and Scale ",
    without: "Smaller bench, limited history, and narrower delivery capability ",
    with: `${portfolioData.years}+ years of experience, supporting 1,500+ UAE businesses with 150+ specialists`
  },  
]
};
export const whygsData = {
  tag: "Why GS IT",
  heading: "The Trusted Choice for \n Secure IT Services in Dubai",
  highlightLast: 5, 
  subhead: "Most providers react to problems. GS IT prevents them from proactive monitoring, in-house engineers, and a single point of accountability across every system.",
  table: [
   {
    icon: "User",
    title: "Single Point of Accountability",
    description: "One team manages your entire IT estate. No vendor confusion, no blame shifting, and no gaps in responsibility. You always know exactly who owns what.",
    href: "",
  },
   {
    icon: "ShieldCheck",
    title: "150+ In-House Certified Engineers",
    description: "We are Microsoft, Cisco, Sophos, Fortinet, and Huawei certified. The same team that quotes you delivers the work.",
    href: "",
  },
   {
    icon: "FilePenLine",
    title: "Written SLA. Not Verbal Promises",
    description: "Critical issues are handled with a remote response time of 0 to 2 minutes. Every commitment is in writing in your contract with penalties if we miss.",
    href: "",
  },
   {
    icon: "BriefcaseBusiness",
    title: `${portfolioData.years}+ Years in the UAE`,
    description: "Deep knowledge of UAE compliance requirements, local infrastructure, and the operational environment of Dubai businesses.",
    href: "",
  },
   {
    icon: "MonitorCloud",
    title: "360° IT, AV, ELV & Cloud Coverage",
    description: "From core IT systems to CCTV, access control, AV, and cloud, everything is managed under one contract and one invoice.",
    href: "",
  },
   {
    icon: "User",
    title: "Proactive, Not Reactive",
    description: "Quarterly audits, security system health checks, backup verification, and security monitoring. We catch issues before they cost you.",
    href: "",
  },  
],
 
};
export const partnersData = {
  tag: " Trusted Technology Alliances",
  heading: "Technology Partners",
  highlightLast: 1 ,
  subhead: "Technology partners whose solutions have proven themselves in real deployments and continue to earn our trust.Each accreditation means the technology leader behind it has formally assessed our teams and confirmed they meet the standard.",
 }; 
 export const logoData =[
  { src: "/assets/images/elv/pa1.svg", alt: "" },
  { src: "/assets/images/elv/pa2.svg", alt: "" },
  { src: "/assets/images/elv/pa3.svg", alt: "" },
  { src: "/assets/images/elv/pa4.svg", alt: "" },
  { src: "/assets/images/elv/pa5.svg", alt: "" },  
];
  export const ctabannermData = {
    backgroundImage: "/assets/images/itservice/ctabanner.jpeg", 
  mobbanner: "/assets/images/itservice/ctabanner.jpeg", 
  tag: "Get expert recommendations",
  heading: "Not Sure Which IT Service Fits \nYour Business? ",
  highlightLast: 8,
  description:"Tell us your requirements and get expert recommendations for the right solution within minutes.",
  cta: "Talk to an IT Consultant", 
}; 
export const faqHeaderData = {
  tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions About \nIT AMC in Dubai",
  highlightLast:1,
 faqData : [
  {
    question: "What are IT services and how can IT services be defined?",
    answer: 'IT services are based on information technology and support business processes in the company. They are defined by a combination of people, processes, and technologies and should be clearly defined using Service Level Agreements (SLAs). In this way, they define all hardware and software, cloud, and infrastructure components in the company - from the telephone system to the ERP system according to a specified IT service catalog. The IT services form the basis for comprehensive IT service management (ITSM), i.e., for all methods and measures that must be taken to provide the best possible support for business processes by IT.',
  },  
  {
    question: " What is the difference between Managed IT Services and an IT AMC?",
    answer: 'A Managed IT Service is a fully outsourced partnership where GS IT proactively monitors, manages, and operates your entire IT environment. An IT AMC (Annual Maintenance Contract) is a structured fixed-fee support agreement focused on maintenance, troubleshooting, and SLA-backed response for a defined set of devices. Both include dedicated engineers and predictable monthly pricing.',
  },  
  {
    question: "How quickly can GS IT respond to an IT issue?",
    answer: 'For critical issues with complete business outage or security incidents, we provide a 0 to 2minute remote response with immediate escalation to a senior engineer and priority onsite dispatch. High-priority issues (server or network down) receive a 0 to 5 minute remote response and 30 min to 1 hour onsite dispatch. All response times are written into your SLA, not verbal commitments.',
  },  
  {
    question: " Do you subcontract any IT work to third parties?",
    answer: 'No. All services are delivered by our in-house team of 150+ certified engineers based in Dubai. We never subcontract; you always have a single point of accountability with a consistent team that knows your environment and history.',
  },  
  {
    question: "Can GS IT manage IT, CCTV, AV, and cloud all under one contract?",
    answer: 'Yes, this is our core differentiator. GS IT is one of the very few UAE providers covering Core IT Infrastructure, ELV & Physical Security (CCTV, access control, biometrics), AV & Meeting Room Systems, and Managed Cloud Platforms, all under a single contract, one SLA, and one invoice. This eliminates vendor fragmentation entirely.',
  },  
  {
    question: " How much do IT services cost in Dubai?",
    answer: 'IT AMC plans start from AED 1,300/month for small teams (5 to 15 users), AED 1,600/month for growing businesses (15 to 40 users), and AED 4,650/month for complex or multi-site environments with 24/7 SLA. Final pricing is scoped after a free device audit based on your user count, SLA tier, compliance needs, and number of locations. All prices exclude 5% UAE VAT.',
  },  
  {
    question: " How long does onboarding take?",
    answer: 'Most clients go from first call to active IT service within 48 hours. The process is: a free 30-minute consultation call → scoped proposal within 24 hours → contract sign and onboarding, with portal access and your dedicated engineer active from day one.',
  },  
  {
    question: "What is the use of IT Services?",
    answer: "IT services map, manage, and secure a company's technology infrastructure, including cloud solutions, cybersecurity, and data management, to enhance productivity, enable digital transformation, and ensure business continuity. They provide expert support for daily operations like troubleshooting and facilitate long-term growth through customized software and infrastructure management.",
  },  
  {
    question: "How do I choose an IT provider?",
    answer: 'Choosing an IT provider involves assessing their security standards, proactive 24/7 monitoring, industry experience, and scalability. Define your specific needs (e.g., cloud, security, helpdesk) and prioritize providers offering clear Service Level Agreements (SLAs), good communication, and positive references. Evaluate providers based on value rather than just cost to ensure long-term, strategic partnership.',
  },  
  {
    question: "Do you offer IT services for small businesses and SMEs?",
    answer: 'Yes, we specialize in IT services for small businesses and SMEs that need reliable support without the cost of a full in-house IT department. Our services include remote support, network management, cybersecurity protection, cloud solutions, and ongoing IT service management. We design scalable solutions that grow with your business, making it easier to control costs while maintaining secure and efficient systems.',
  },  
  {
    question: "What is included in a typical IT service contract?",
    answer: 'A standard IT service contract typically includes help desk support, system monitoring, maintenance, cybersecurity protection, backup management, and regular performance checks. It also defines response times, service coverage, and responsibilities, ensuring clear accountability and predictable support. This structured approach helps businesses maintain stable IT operations while avoiding unexpected downtime and repair costs.',
  },  
]
};
export const diffData = {
  tag: "The GS IT Difference",
  heading: "From First Call to Live IT \n Service in Just 48 Hours",
  highlightLast: 5,
  description: "No lengthy procurement. No complex onboarding. Most clients are fully supported within two business days.",
  data:[
  {
    "number": "01",
    "title": "Free Consultation",
    "description": "Call or submit the form. We discuss your setup, team size, and goals. No obligation, no hard sell, no sales pitch.",
    "tag": "DAY 1 · 30 MINUTES"
  },
  {
    "number": "02",
    "title": "Custom Proposal",
    "description": "We send a scoped proposal with a device list, service plan recommendation, and a fixed monthly cost within 24 hours.",
    "tag": "WITHIN 24 HOURS"
  },
  {
    "number": "03",
    "title": "Go Live",
    "description": "Sign the contract, onboard your team, and your dedicated engineer begins supporting your business, and your portal access will be ready from day one.",
    "tag": "DAY ACTIVE WITHIN 48 HOURS"
  }
]
};