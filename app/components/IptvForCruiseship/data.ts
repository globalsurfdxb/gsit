 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "VIDEO WALL DISPLAYS · DUBAI & UAE · SINCE 2013 ",
  heading: "Video Wall Solutions: \n Panels That Read as One Screen",
  highlightLast: 6,
  description: "GS IT delivers video wall solutions for indoor spaces and outdoor facades across the UAE, handling display sourcing, signal processing, and full installation under a single contract.",
  backgroundImage: "/assets/images/videowall-solutions/banner.jpeg", 
  mobbanner: "/assets/images/videowall-solutions/mobbanner.jpg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"of AV & IT delivery across the UAE"},
   { value: `0.7mm`, desc:"Fine pitch options for close viewing"},
   { value: `24/7`, desc:"Panel grades rated for continuous use"},
   { value: `4K/8K`, desc:"Playback driven by the processing layer "}
  ],
  buttons: [
    {
      text: "See what we offer",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,

    {
      text: "Book a consultation ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};   
 
 export const makingswichData = {
  tag: "ABOUT THIS SERVICE ",
  heading: "Upgrade to IP Telephony \n That Works the Way Your Business Does.  ",
  highlightLast: 7,  
  subhead: "At GS IT, IP phone deployment is a managed transition. We assess your existing infrastructure, design a telephony architecture that fits your team size and call volumes, supply certified hardware, and configure every extension. Businesses in Dubai get a working phone system on day one, backed by SLA response and ongoing management. ",
  headers : {
    scenario: "What GS IT Provides ", 
    with: "What It Does  ",
  },
   table: [ 
  {
    scenario: "IP Phone Installation ", 
    with: "Complete installation and configuration regardless of the scale of the infrastructure setup "
  }, 
  {
    scenario: "Call Routing and IVR ", 
    with: "Filters incoming calls with recorded voice prompts and automated information exchange "
  }, 
  {
    scenario: "PoE Support ", 
    with: "Both power and data delivered through a single Ethernet cable, reducing hardware requirements "
  }, 
  {
    scenario: "Secure Communication", 
    with: "SIP and SRTP protocols encrypting all voice and video transmissions."
  }, 
  {
    scenario: "Consultation and Support", 
    with: "Remote support, maintenance, and troubleshooting with thorough pre-deployment consultation."
  },  
]
};
 
export const videoData = {
  tag: "VIDEO WALLS IN THE UAE",
  heading: "Regulatory Clearance & Site Prep \n for UAE Displays",
  highlightLast: 3,
  subhead:
    "Installing LCD panels or an outdoor LED screen in the UAE requires early compliance and power checks.",
  data: [
    {
      label: "",
      title: "Municipality Approval",
      description: "Displays visible from public roads require clearance via Dubai Municipality.",
    }, 
    {
      label: "",
      title: "Road-Facing Screens",
      description: "Traffic-facing locations need RTA review to evaluate driver distraction risk.",
    }, 
    {
      label: "",
      title: "Free Zone Sites",
      description: "Projects within free zones submit directly to Trakhees or local authorities.",
    }, 
    {
      label: "",
      title: "Bilingual Content Rules",
      description: "Public displays feature Arabic text at equal or higher priority than English.",
    }, 
    {
      label: "",
      title: "Heat & Dust Load",
      description: "Cabinets call for IP-rated ingress protection and active summer cooling.",
    }, 
    {
      label: "",
      title: "Power & Wall Capacity",
      description: "Structural load capacity and dedicated power supply needs are set early.",
    }, 
  ],
};
 
export const howweworkData = {
  tag: "DELIVERY PROCESS",
  heading: "Video Wall Installation: \n A Structured Framework",
  highlightLast: 3,
  subhead:
    "GS IT follows a step-by-step workflow covering site checks, mounting, and system setup.",
  data: [
    {
      number: "01",
      title: "Site Survey",
      description:
        "We inspect wall strength, measure room light, and map electrical connection points.",
    },
    {
      number: "02",
      title: "Design & Specification",
      description: "Our team matches screen sizes and display resolutions to your specific site plan.",
    },
    {
      number: "03",
      title: "Site Preparation",
      description: "Technicians mount structural frames, route network cables, and manage permits.", },
    {
      number: "04",
      title: "Panel Installation",
      description: "Display panels align precisely on supporting mounts to achieve a flat, unified surface.", },
    {
      number: "05",
      title: "Source Integration",
      description: "Connecting central control hardware enables smooth switching between media feeds.", },
    {
      number: "06",
      title: "Calibration & Handover",
      description: "Final screen brightness gets balanced, and we guide your team through daily usage.", },
  ],
};

export const servicesData = {
  tag: "What We Fix",
  heading: "Major Wi-Fi \n Challenges We Solve",
  highlightLast: 3,
  subhead: "Dubai's complex buildings, dense commercial environments, and extreme heat make basic consumer routers unreliable. These are the issues our professional Wi-Fi setup resolves.",
servicesData: [
  {
    icon: "AlignHorizontalSpaceAround",
    title: "Patchy Coverage & Dead Zones",
    description: "Consumer APs fail in large spaces, so we provide complete signal coverage across all areas.",
    href: "#",
    featured: true,
  },
  {
    icon: "SignalHigh",
    title: "Network Instability Under Load",
    description: "We build networks that stay stable during peak usage, preventing crashes when traffic spikes.",
    href: "#",
    featured: true,
  },
  {
    icon: "ShieldQuestion",
    title: "Weak Security Controls",
    description: "Our teams deliver isolated, policy-driven segments that successfully protect every user type.",
    href: "#",
    featured: true,
  },
  {
    icon: "Users",
    title: "Fragmented Management",
    description: "We consolidate multiple configurations into a unified, easy-to-control operational framework.",
    href: "#",
    featured: true,
  },
  {
    icon: "Layers",
    title: "Limited Multi-Service Support",
    description: "Modern operations need networks that handle data, CCTVs, and IoT devices without congestion.",
    href: "#",
    featured: true,
  },
  {
    icon: "Cast",
    title: "Roaming Drops Across APs",
    description: "We steer devices to the nearest signal dynamically, preventing drops as people walk.",
    href: "#",
    featured: true,
  },
],
};
export const IndustriesHeaderData = {
  tag: "ENVIRONMENTS WE SERVE",
  heading: "Where Our Video Wall Solutions Fit",
  highlightLast: 5,
  subhead:
    "From LCD setups to an LED display screen, optimal visual technology transforms every venue's dynamic needs.",
data: [
  {
    icon: "Handshake",
    title: "Hospitality",
    description: "Reception display walls highlight promotional content and hotel notices.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare",
    description: "Diagnostic review suites rely on sharp visual walls for medical imaging.",
    href: "",
  },
  {
    icon: "ShoppingCart",
    title: "Retail & Malls",
    description: "Storefront LED screen display units present scheduled marketing loops.",
    href: "",
  },
  {
    icon: "Headphones",
    title: "Command Centers",
    description: "Operators monitor dozens of live camera streams across a single canvas.",
    href: "",
  },
  {
    icon: "Building",
    title: "Corporate Offices",
    description: "Boardrooms share large display arrays during meetings and data reviews.",
    href: "",
  },
  {
    icon: "GraduationCap",
    title: "Education",
    description: "Lecture halls feature an interactive video wall for dynamic, long sessions.",
    href: "",
  },
  {
    icon: "Clapperboard",
    title: "Broadcast Studios",
    description: "Camera-safe refresh rates keep digital backdrop screens sharp on live air.",
    href: "",
  },
],
industryCTA: {
  title: "Your Environment",
  description: "Trusted by 1,500+ clients, we adapt video wall setups to your environment.",
  href: "/",
},
};
 
  export const partnersData = {
  tag: " Our Partnership",
  heading: "Brands We Integrate ",
  highlightLast: 1 , 
  };
  export const logoData= [
  { src: "/assets/images/videowall-solutions/partner1.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner2.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner3.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner4.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner5.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner6.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner7.svg", alt: "" },
  { src: "/assets/images/videowall-solutions/partner8.svg", alt: "" },   
  { src: "/assets/images/videowall-solutions/partner4.svg", alt: "" },   
  { src: "/assets/images/videowall-solutions/partner2.svg", alt: "" },
]  ; 
export const whyChooseUsData = {
  tag: "WHY CHOOSE GS IT",
  heading: "Dedicated Expertise for Your \n Video Wall Installation in the UAE",
  highlightLast: 6,
  subhead: `Our video wall solutions are characterized by direct hardware sourcing, custom site engineering, and ongoing system support.`,
  points: [
    {
      title: "Direct Sourcing & Escalation",
      description: "Direct vendor partnerships provide fast technical escalation for replacement modules.",
    },  
    {
      title: "In-House Network Planning",
      description: "In-house network specialists configure switches to maintain stable IP video feeds.",
    },  
    {
      title: "Batch-Matched Panel Supply",
      description: "Sourcing panels from a single factory batch maintain color uniformity across tiles.",
    },  
    {
      title: "Permit & Design Drawings",
      description: "Technical teams supply elevation schematics and brightness stats for permit review.",
    },  
    {
      title: "Fit-Out Site Coordination",
      description: "Aligning with interior contractors early resolves wall depth and cabling pathways.",
    },  
    {
      title: "Ongoing Support Contract",
      description: "Our AMCs cover proactive monitoring, system maintenance, and SLA-backed support.",
    },  
  ],
}  
export const recomData = {
    backgroundImage: "/assets/images/videowall-solutions/ctabanner.jpeg", 
  mobbanner: "/assets/images/videowall-solutions/mobctabanner.jpg", 
  tag: "",
  heading: "Ready to discuss your video wall \n project?",
    highlightLast: 8,
  description: "Speak with our technical team to compare panel choices, review site conditions, and get precise estimates.",
 cta: "Book a consultaton",
 points:["End-to-End Site Assessment","Pitch & Panel Recommendation","Layout & Load Drawings","Calibration Before Handover"]
 }; 
 export const overviewData = {
  tag: "Overview",
  heading: "Advanced Video Walls \n Precision-Fitted to Your Venue ",
  highlightLast: 4 ,
  subhead:
    "GS IT provides video wall solutions focused on precise planning, complete accountability, and easy maintenance.",
 items: [
  {
    type: "card",
    icon: "Palette",
    title: "Custom Survey-Led Design",
    description: "Multi-window processors manage canvas sizing and real-time source switching.",
  },
  {
    type: "card",
    icon: "/assets/images/icons/usershield.svg",
    title: "Same Engineers, End-to-End",
    description: "The same engineers who survey your site mount the displays and configure the video processing systems.",
  },
  {
    type: "image",
    image: "/assets/images/videowall-solutions/overview1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/videowall-solutions/overview2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "HardDrive",
    title: "Displays & Network with One Team",
    description: "GS IT handles both display hardware and network routing, preventing vendor conflict across your setup.",
  },
  {
    type: "card",
    icon: "Columns3Cog",
    title: "Maintenance-First Panel Setup",
    description: "Built-in service clearance lets engineers swap individual panels easily without dismantling the whole array.",
  },
],
};
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Video Wall Solutions",
  highlightLast:6,
  faqData: [
  {
    question: "Can a video wall be expanded after it is installed?",
    answer: "Yes, expanding a video wall is possible if the initial setup accounts for future growth. Adding LED video wall panels requires extra mounting frame space and available processor outputs. Walls built strictly to their current dimensions require frame modifications and control upgrades. We map potential expansion routes during design.",
  },
  {
    question: "What determines the LCD video wall price for a project?",
    answer: "The overall LCD video wall price depends primarily on panel specifications and total display count. Commercial tiles rated for continuous use with thin bezels carry higher costs than standard displays. Beyond the physical screens, project quotes include mounting hardware, processors, cabling, and site installation labor.",
  },
  {
    question: "How long does a video wall installation take in the UAE?",
    answer: "A typical video wall installation takes two to four weeks from project launch to final handover. Sourcing fine-pitch panels affects initial lead times, while an outdoor LED screen requires civil permits before mounting begins. Custom structural modifications or electrical upgrades can extend this timeframe further.",
  },
  {
    question: "What happens when one panel in the array fails?",
    answer: "When a single tile fails, only that unit goes dark while the remaining display stays active. Choosing a modular LED display screen array prevents full system downtime. Panels with front-access mounts swap out directly without disturbing neighboring units, whereas rear-access models require dedicated space behind the wall.",
  },
  {
    question: "Does an interactive video wall need different hardware?",
    answer: "Yes, an interactive video wall relies on overlay sensors rather than standard panel hardware. Integrated frame sensors add touch capability across the visual canvas. Protective glass shields the panels in busy spaces, while dedicated touch controllers enable multiple people to interact at the same time.",
  },
  {
    question: "Can content be scheduled across walls at several sites?",
    answer: "Yes, central media software distributes schedules to any connected LED screen display over the network. Networked players allow head offices to broadcast unified campaigns across regional locations or assign unique media to specific sites. System logs track playback history to confirm when content runs.",
  },
  {
    question: "Which display brands does GS IT supply for video walls?",
    answer: "We supply video wall solutions using hardware from Barco, Planar, Samsung, and Sony. These manufacturers offer options ranging from control room cubes to fine-pitch indoor panels. Our team recommends specific brands based on your site conditions, daily operating hours, and spatial requirements.",
  },
  {
    question: "Do you provide maintenance after the wall is handed over?",
    answer: "Yes, ongoing video wall maintenance is available through an annual maintenance contract (AMC). Our AMC plans include scheduled servicing, proactive system health checks, and priority technical response. Standard manufacturer warranties cover individual hardware components regardless of AMC status.",
  },
  {
    question: "Can a wall display Arabic and English content together?",
    answer: "Yes, our LED video wall systems support dual-language layouts on a single screen layout. Modern media players render right-to-left Arabic text alongside English content smoothly. This layout capability aligns with UAE public-facing display guidelines, and our team configures these language templates during commissioning.",
  },
  {
    question: "How much power does a large LED wall draw?",
    answer: "Power usage for an LED display screen varies based on panel brightness, pixel pitch, and on-screen content. Displaying bright white graphics consumes more energy than dark data dashboards. Our team calculates peak power loads during design to specify the necessary circuit requirements before installation.",
  },
],
};
 