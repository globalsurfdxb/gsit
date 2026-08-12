 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Digital Signage Solutions  ·  Dubai, UAE  ·  Since 2013",
  heading: "Capture Attention and Drive Results \n with Digital Signage Solutions  ",
  highlightLast: 4,
  description: "Trusted digital signage company in Dubai, delivers end-to-end display solutions for businesses of every size.",
  backgroundImage: "/assets/images/digitalsignage/banner.jpeg", 
  mobbanner: "/assets/images/digitalsignage/bannermob.jpeg", 
  points:[
   { value: `${portfolioData.years}+`, desc:"Years of Experience"},
   { value:"500+", desc:"Installation across UAE"},
   { value:"End to end ", desc:"digital signage services"},
   { value:"Certified", desc:"Technology Partners"}
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
      text: "Get a free consultation",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};     
export const techData = {
  tag: "Overview",
  heading: "Elevate Customer Experiences \n with Digital Signage Solutions in Dubai",
  highlightLast: 6,
  subhead: "Turn every screen into a powerful communication channel with GS IT's centrally managed digital signage that delivers engaging content and consistent brand messaging across all locations.",
  servicesData : [
  {
    icon: "Proportions",
    title: "Designed for Your Space",
    description: "Custom screen placement and layouts that match your space and audience.",
    href: "",
    featured: true,
  },
  {
    icon: "MonitorCloud",
    title: "Centrally Managed from Anywhere",
    description: "Update and control all screens remotely from one dashboard.",
    href: "",
    featured: true,
  },  
  {
    icon: "MonitorSmartphone",
    title: "Any Screen, Any Location",
    description: "Support indoor displays, kiosks, video walls, and outdoor signage.",
    href: "",
    featured: true,
  },  
  {
    icon: "Database",
    title: "Easy-to-Use CMS Platform",
    description: "Manage content scheduling, templates, and screen permissions with ease.",
    href: "",
    featured: true,
  },  
  {
    icon: "MonitorPlay",
    title: "High-Impact Visual Communication",
    description: "Deliver bright, attention-grabbing visuals that enhance customer engagement.",
    href: "",
    featured: true,
  },  
  {
    icon: "Clock5",
    title: "Built for 24/7 Operation",
    description: "Supports long operating hours with stable, consistent screen performance.",
    href: "",
    featured: true,
  },   
   
]
}; 
export const digitalsignageData = {
  tag: "Digital Signage Solutions ",
  heading: "Transform Spaces with \n Smart Digital Signage ",
  highlightLast: 3,
  subhead:
    "Improve business communication with digital signage solutions that make it easy to create, manage, schedule, and display engaging content across every screen. ",

  cardsitem: [
    {
      id: "1",
      titleLine1: "Display Screens",
      titleLine2: "",
      description:
        "High-brightness digital displays designed for attention grabbing business communication.",
      image: "/assets/images/digitalsignage/ds1.jpeg",
      highlighted: true,
      url: "",
    }, 
    {
      id: "2",
      titleLine1: "Media Players",
      titleLine2: "",
      description:
        "Dedicated media players deliver smooth and reliable content playback across all screens.",
      image: "/assets/images/digitalsignage/ds2.jpeg",
      highlighted: true,
      url: "",
    }, 
    {
      id: "3",
      titleLine1: "Content Management System",
      titleLine2: "",
      description:
        "Centralized Content Management System for scheduling and multi-screen management.",
      image: "/assets/images/digitalsignage/ds3.jpeg",
      highlighted: true,
      url: "",
    }, 
    
  ],
};
export const diffData = {
  tag: "The GS IT Difference",
  heading: "Built Different. \n Powered by Expertise. ",
  highlightLast: 3,  
  subhead: "Discover the capabilities that make GS IT a trusted digital signage partner for businesses across the UAE.",
  headers : {
    scenario: "Capability", 
    with: "What You Get with GS IT  ",
  },
   table: [ 
  {
    scenario: "Service scope ", 
    with: "End-to-end digital signage services, including consulting, design, supply, installation, configuration, and ongoing support. "
  },  
  {
    scenario: "AV & IT integration ", 
    with: "Dedicated in-house AV and IT specialists for smooth integration with your existing network and business infrastructure. "
  },  
  {
    scenario: "Technology Partnerships ", 
    with: "Authorized solution partner for leading brands such as Barco, Samsung, Sony, and Planar. "
  },  
  {
    scenario: "Post-installation support ", 
    with: "Remote diagnostics, on-site assistance, and optional Annual Maintenance Contract (AMC) for long-term reliability. "
  },  
  {
    scenario: "CMS Integration ", 
    with: "Custom integration with content management platforms, scheduling systems, and existing business applications. "
  },  
  {
    scenario: "Industry Experience ", 
    with: "Proven digital signage experience across industries in the UAE backed by 13+ years of industry expertise. "
  }, 
]
};
export const  longtermValueData = {
  tag: "Business Impact ",
  heading: "The Real Impact of \n Digital Signage on Business",
  highlightLast: 4, 
  image: "/assets/images/structured-cabling/main.jpeg", 
  subhead: "Digital signage delivers real, quantifiable results for businesses across every sector.",
  
  cards: [
    {
      id: "design",
      titleLine1: "Boost ",
      titleLine2: "Brand Visibility",
      description: "Digital signage displays make your brand impossible to ignore, reinforcing identity at every customer touchpoint.",
      highlighted: true,
    },
    {
      id: "spaces",
      titleLine1: "Increase ",
      titleLine2: "Sales and Revenue",
      description: "Promotional content on digital advertising screens drives impulse decisions and upsells at the point of purchase.",
    }, 
    {
      id: "spaces",
      titleLine1: "Reduce ",
      titleLine2: "Perceived Wait Times",
      description: "Engaging digital signage screens in queues and waiting areas reduce perceived wait time for customers.",
    }, 
    {
      id: "spaces",
      titleLine1: "Cut Printing and ",
      titleLine2: "Static Signage Costs",
      description: "Replace costly printed materials with a digital signage system that updates instantly at zero print cost.",
    }, 
    {
      id: "spaces",
      titleLine1: "Improve ",
      titleLine2: "Internal Communication",
      description: "Office digital signage keeps employees informed with real-time KPIs, announcements, and company news.",
    }, 
    {
      id: "spaces",
      titleLine1: "Enhance ",
      titleLine2: "Customer Experience",
      description: "Interactive digital signage solutions let customers self-serve, explore products, and find information independently.",
    }, 
    {
      id: "spaces",
      titleLine1: "Support Multi-",
      titleLine2: "Location Campaigns",
      description: "Manage content across multiple sites from one platform, ensuring brand consistency for digital signage companies operating at a scale.",
    }, 
    {
      id: "spaces",
      titleLine1: "Enable Real-Time ",
      titleLine2: "Content Updates",
      description: "Respond instantly to changing promotions, news, or emergencies without reprinting or manual intervention.",
    }, 
    {
      id: "spaces",
      titleLine1: "Increase ",
      titleLine2: "Audience Engagement",
      description: "Dynamic visuals and motion content on digital signs for businesses attract 400% more views than static displays.",
    }, 
  ],
};
   
export const featuresData = {
  tag: "Features",
  heading: "Smart Features for \n Better Digital Displays",
  highlightLast: 3,
  servicesData: [
  {
    icon: "MonitorSmartphone",
    title: "Remote Multi-screen Control",
    description: "Update and manage all your screens from anywhere, without visiting each location.",
    href: "",
    featured: true,
  },
  {
    icon: "/assets/images/icons/touchfinger.svg",
    title: "Interactive Touch Experience",
    description: "Let customers browse, explore, and engage directly with your content.",
    href: "",
    featured: true,
  },
  {
    icon: "Radar",
    title: "Real-time Engagement Tracking",
    description: "See exactly how people respond to your content, as it happens.",
    href: "",
    featured: true,
  },
  {
    icon: "UserStar",
    title: "Audience Demographic Insights",
    description: "Understand who is actually watching with age, gender, and behavior patterns.",
    href: "",
    featured: true,
  },
  {
    icon: "RadioOff",
    title: "Works Without Internet",
    description: "Your screens keep running and collecting data even if the connection drops.",
    href: "",
    featured: true,
  },
  {
    icon: "ShieldCheck",
    title: "Privacy-safe Data Collection",
    description: "Get audience insights without storing personal information or compliance headaches.",
    href: "",
    featured: true,
  },
  {
    icon: "FileText",
    title: "Personalized Content Targeting",
    description: "Show different content to different audiences, automatically matched to who is watching.",
    href: "",
    featured: true,
  },
  {
    icon: "CalendarSync",
    title: "Automated Ad Scheduling",
    description: "Set your campaigns once and let the system handle timing and rotation.",
    href: "",
    featured: true,
  },
  {
    icon: "ThermometerSun",
    title: "Smart Weather-based Content",
    description: "Automatically switch content based on real-time weather conditions.",
    href: "",
    featured: true,
  },
  {
    icon: "/assets/images/icons/ad.svg",
    title: "Automated Campaign Optimization",
    description: "Let the system fine-tune your campaigns for better results, with less manual work.",
    href: "",
    featured: true,
  },
  {
    icon: "UserSearch",
    title: "Personalized Product Recommendations",
    description: "Show customers products they're more likely to want, based on real data.",
    href: "",
    featured: true,
  },
  {
    icon: "FileText",
    title: "Data-driven Ad Buying",
    description: "Buy and place ads more efficiently using real audience data instead of guesswork.",
    href: "",
    featured: true,
  },
]
}; 
export const usecaseData = {
  tag: "Use case",
  heading: "Digital Signage Solutions \n for Every Industry",
  highlightLast: 2,
  subhead:
    "GS IT offers digital signage solutions for a wide range of industries and business environments, helping organizations improve communication and customer engagement through effective visual display systems.",
  industriesData: [
  {
    icon: "ShoppingCart",
    title: "Retail Stores & Shopping Malls",
    description: "Drives in-store engagement through dynamic promotions and product showcases.",
    href: "",
  },
  {
    icon: "Hotel",
    title: "Corporate Offices",
    description: "Helps share internal communication, meeting information, and company updates.",
    href: "",
  },
  {
    icon: "HeartHandshake",
    title: "Restaurants & Hospitality",
    description: "Commonly used for digital menu boards, promotions, and guest information.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare Facilities",
    description: "Displays patient information, directions, and important announcements.",
    href: "",
  },
  {
    icon: "Truck",
    title: "Airports & Transportation Hubs",
    description: "Used for schedules, directions, and real-time travel updates.",
    href: "",
  },
  {
    icon: "CalendarCheck2",
    title: "Events & Exhibitions",
    description: "Displays event schedules, announcements, and live visitor updates.",
    href: "",
  },
  {
    icon: "Landmark",
    title: "Banking & Financial Services",
    description: "Displays queue tokens, exchange rates, and promotional content.",
    href: "",
  },
],
  industryCTA: {
    title: "Your Industry",
    description: "Let’s discuss digital signage solutions for your industry and business needs.",
    href: "/",
  },
};
export const howweworkData = {
  tag: "HOW WE WORK",
  heading: "Our Proven Digital Signage \n Installation Process",
  highlightLast: 2,
  subhead:
    "From first consultation to post-installation support, GS IT handles every step of your digital signage project.",
  data: [
      {
        number: "01",
        title: "Consultation and Requirements",
        description: "We begin with a detailed discussion of your goals, environment, and audience to recommend the most suitable digital signage system for your business.",
      },
      {
        number: "02",
        title: "Design and Planning",
        description: "Our AV design team creates a layout plan, specifying screen sizes, placement, mounting, and cabling for your digital signage installation.",
      },
      {
        number: "03",
        title: "Hardware and Software Selection",
        description: "We source the right digital signage screens, media players, and CMS software from our certified technology partners to match your content needs and budget.",
      },
      {
        number: "04",
        title: "Professional Installation",
        description: "Our certified digital signage installation team handles the full on-site installation, ensuring clean cable management, secure mounting, and network connectivity.",
      },
      {
        number: "05",
        title: "Content Setup and Training",
        description: "We configure your CMS, upload initial content, and train your team so you can manage and schedule digital signage content independently from day one.",
      },
      {
        number: "06",
        title: "Annual Maintenance Contract (AMC)",
        description: "Optional AMC provides preventive maintenance, remote troubleshooting, software updates, and on-site support for uninterrupted digital signage performance.",
      },
    ],
  };
 export const partnersData = {
  tag: " Technology Partnership",
  heading: "Certified Digital Signage \n Partner for Leading Brands ",
  highlightLast: 4 , 
  subhead: "We partner with the world's most trusted manufacturers to deliver premium digital signage solutions in Dubai.",
  
  };
  export const logoData= [
  { src: "/assets/images/digitalsignage/partner1.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner2.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner3.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner4.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner5.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner6.svg", alt: "" },
  { src: "/assets/images/digitalsignage/partner7.svg", alt: "" },   
]  ; 
export const whygsData = {
  tag: "Why GS IT",
  heading: "The Expertise \n Behind Every Display",
  highlightLast:3,  
  subhead: "GS IT has been a trusted name among digital signage companies in Dubai since 2013. With a team of certified AV professionals and a track record of 500+ deployments across the UAE, we deliver digital signage solutions that are built to perform, easy to manage, and designed to grow with your business.",
  whygs: [
  {
    title: "End-to-End \n Expertise",
    description: "From concept to commissioning, we handle consulting, design, supply, digital signage installation, and ongoing support in-house. No third-party handoffs, no gaps in accountability.",
    url: "",
  },
  {
    title: "Certified \n Technology Partners",
    description: "As an authorized partner for Barco, Samsung, Sony, and Planar, GS IT provides genuine digital signage products backed by official manufacturer warranties and dedicated technical support.",
    url: "",
  },
  {
    title: "Custom CMS and \n Systems Integration",
    description: "Our digital signage system implementations include full CMS configuration and integration with your existing marketing platforms, ERP, or data feeds for automated, always-relevant content.",
    url: "",
  },
  {
    title: "Interactive and \n Touch Solutions",
    description: "Beyond standard displays, we deliver interactive digital signage solutions including digital signage touch screen kiosks and self-service units that elevate the customer experience.",
    url: "",
  },
  {
    title: "Scalable for \n Any Business Size",
    description: "Whether you are deploying one digital advertising screen or a network of hundreds of digital signage screens across multiple locations, our solutions scale without complexity.",
    url: "",
  },
  {
    title: "Ongoing Support and \n Maintenance",
    description: "GS IT provides dedicated post-installation support, remote diagnostics, and on-site support to ensure your digital signage display network performs at its best.",
    url: "",
  },
]
};  




export const recomData = {
    backgroundImage: "/assets/images/digitalsignage/ctabanner.jpeg", 
  mobbanner: "/assets/images/digitalsignage/ctabanner.jpeg", 
  tag: "",
  heading: "Build a Smarter Display Experience \n with GS IT Digital Signage Solutions.",
    highlightLast: 10,
  description: "Connect with the GS IT team to design and deploy the right digital signage solution for your business. From selecting the ideal display technology to seamless installation and support, we help you create engaging digital experiences that improve communication and customer engagement.",

  cta: "Get a free Consultatrion",
}; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions & Answers on \n Cloud Solutions",
  highlightLast:8,
 faqData : [
  {
    question: "We have five meeting rooms of different sizes. Can GS IT design a consistent experience across all of them? ",
    answer: 'Yes. GS IT produces a tiered hardware specification, one bill of materials per room category, so each space gets equipment scaled to its size while the control interface looks and behaves the same in every room. With our meeting room solutions in Dubai, users are trained on one system, not five. ',
  },   
  {
    question: "Our organization runs Microsoft Teams. Does it matter whether the hardware we choose is Teams-certified? ",
    answer: 'It matters considerably. MTR-certified conference room equipment unlocks one-touch calendar join, device management through the Teams Admin Center, and consistent call behavior. Uncertified meeting room systems often work initially but introduce inconsistencies over time that support teams cannot resolve remotely. ',
  },   
  {
    question: "What is the practical difference between a video bar and a complete conference room equipment setup?",
    answer: 'A video bar is an integrated unit combining camera, speaker, and microphone in one device, well-suited to rooms up to approximately eight seats. Larger rooms require separate PTZ cameras and dedicated ceiling or tabletop microphone arrays to achieve adequate coverage for all participants in the space. ',
  },   
  {
    question: "How does GS IT handle cabling in an occupied office without disrupting staff? ",
    answer: 'Our engineers survey the room before any work starts and plan cabling routes that minimize disruption to existing finishes and adjacent spaces. Our technicians handle structured cabling, conduit, and any wall or ceiling penetrations and complete the conference room installation on the agreed schedule. ',
  },   
  {
    question: "Can the room scheduler panel work with Google Workspace instead of Microsoft Exchange? ",
    answer: 'Yes. Scheduler panels from the brands we supply are compatible with Google Workspace, Microsoft 365, and Exchange on premises. Configuration is handled during commissioning and once set up, the panel requires no ongoing management from your IT team. ',
  },   
  {
    question: "A critical board meeting is scheduled. What happens if hardware fails that morning? ",
    answer: 'Clients on an AMC contract receive priority on-site response. GS IT engineers are Dubai-based, so same-day or next-business-morning attendance is the standard for critical failures. Quarterly preventive maintenance visits under AMC also reduce the likelihood of faults occurring close to high-priority events. ',
  },   
  {
    question: "Should I go with an interactive display or a standard screen?  ",
    answer: "If the room is used for whiteboarding, training, or multi-presenter sessions, go with interactive conference room display solutions. If it's purely for video calls and content viewing, a standard commercial display is sharper and cheaper. We'll tell you which fits based on how the room actually runs. ",
  },   
  {
    question: "Can GS IT take responsibility for rooms that a different company originally installed?",
    answer: 'Yes. GS IT conducts a technical audit of the existing installation, documents all hardware and configuration, and brings the room under our AMC. Where meeting room technology is outdated or incorrectly configured, we provide remediation options and costs before assuming ongoing responsibility for the system. ',
  },   
  {
    question: "Is wireless presentation secure enough for a boardroom where confidential content is shared? ",
    answer: 'Enterprise wireless meeting room solutions like presentation systems from Barco and comparable vendors support network segmentation, guest isolation, and encrypted transmission. GS IT configures them on a dedicated VLAN to ensure presentation traffic does not travel across the corporate network. ',
  },   
  {
    question: "How long does a typical single-room installation take from design approval to a usable room?",
    answer: 'A single room with an approved design typically takes three to seven business days, covering hardware delivery, installation, and full commissioning. Multi-room projects are phased and scheduled to avoid affecting adjacent spaces or business operations during working hours wherever possible. ',
  }
]
};
 