import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "ENTERPRISE IPTV SOLUTION PROVIDER · DUBAI & UAE · SINCE 2013",
  heading: "Enterprise \n IPTV Solutions in Dubai",
  highlightLast: 4,
  description: "GS IT integrates site-wide IPTV systems for hospitality and healthcare facilities in the UAE, centralizing live broadcasting and on-demand media control across the whole property.",
  backgroundImage: "/assets/images/iptvsolutions/banner.jpeg",
  mobbanner: "/assets/images/iptvsolutions/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "delivering technology across the UAE" },
    { value: "4K Live TV", desc: "and on-demand video at  \n  full resolution" },
    { value: 'H.265', desc: "compression for more \n channels per link" },
    { value: "Licensed", desc: "feeds sourced via \n authorized distributors" }
  ],
  buttons: [
    {
      text: "Explore our solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },{
      text: "Connect with <uppercase>IPTV</uppercase> experts",
      icon: "/assets/images/icons/fullarrow.svg",
      hovericon: true,
      bgButton: "bg-white",
      dark: false,
      href: "#whatwedo",
    }
  ],
};
 
export const servicesData = {
  tag: "BUSINESS OUTCOMES",
  heading: "Turn Every Room \n Screen into a Guest Service Hub",
  highlightLast: 6,
  subhead: "Deliver clear video streams and responsive on-screen services across every display in your property.",
servicesData: [
  {
    icon: "ShieldCheck",
    title: "Licensed Channel Delivery",
    description: "Broadcast regional and international TV channels consistently across all screens.",
    href: "#",
    featured: true,
  },
  {
    icon: "SquarePlay",
    title: "Video on Demand",
    description: "Users can browse a central library to stream movies or internal videos on demand.",
    href: "#",
    featured: true,
  },
  {
    icon: "FileCog",
    title: "In-Room Information",
    description: "Display customized welcome messages, venue guides, and local facility highlights.",
    href: "#",
    featured: true,
  },
  {
    icon: "/assets/images/icons/target.svg",
    title: "Targeted Promotions",
    description: "Run promotional offers by floor, by wing, or property-wide from a central dashboard.",
    href: "#",
    featured: true,
  },
  {
    icon: "TicketCheck",
    title: "On-Screen Service Request",
    description: "F&B, housekeeping, and maintenance requests reach staff ticketed and timestamped.",
    href: "#",
    featured: true,
  },
  {
    icon: "TabletSmartphone",
    title: "Personal Device Casting",
    description: "Securely stream content from personal phones or tablets straight to the room screen.",
    href: "#",
    featured: true,
  },
],
};


 
 

 
export const licensingComplianceData = {
  tag: "LICENSING & COMPLIANCE",
  heading: "How Content Reaches \n {{Your Screens Legally in the UAE}}",
  highlightLast: 6,
  subhead: "Running IPTV in UAE properties means the paperwork behind each channel matters as much as the hardware.",
  points: [
    {
      icon: "Shield",
      title: "Regulatory Alignment",
      description: "System setups follow official broadcast rules set by UAE media authorities.",
    },
    {
      icon: "/assets/images/icons/dbtick.svg",
      title: "Guest Data Handling",
      description: "Keep viewing activity and user logs secure under local data privacy laws.",
    },
    {
      icon: "FileCheck",
      title: "Content Standards",
      description: "Channel packages are reviewed first to align fully with local cultural norms.",
    },
    {
      icon: "ShieldCheck",
      title: "Documentation Handover",
      description: "Receive full licensing rights and complete equipment lists upon sign-off.",
    },
  ],
  image: "/assets/images/iptvsolutions/main.jpeg",
  imageAlt: "Children watching TV in a hotel room at night",
  note: "A licensed build keeps a property clear of the enforcement action aimed at pirate feeds. Broadcast licensing here runs through the UAE Media Council with approval from the TDRA. Final terms for each channel are confirmed with the distributor for your site.",
} 

 
 

export const recomData = {
  backgroundImage: "/assets/images/iptvsolutions/ctabanner.jpeg",
  mobbanner: "/assets/images/iptvsolutions/ctabanner.jpeg",
  tag: "",
  heading: "Planning an IPTV rollout across your \n property or fleet in the UAE? ",
  highlightLast: 13,
  description: "Talk to us about your property layout to schedule a site survey and scope for your IPTV installation in Dubai.",
points:['One Accountable Scope','Engineer-Led Initial Survey','Cutover Around Occupancy','Growth Without a Full Rebuild'],
  cta: "Get your <uppercase>IPTV</uppercase> consultation ",
};

export const usecaseData = {
  tag: "OUR SOLUTIONS",
  heading: "Six Features. \n {{One Accountable Remote Desk.}}",
  highlightLast: 4,
  subhead:
    "Support through approved channels with priority based response targets, preventive portal checks, escalation, and a service desk for tracking and reporting. Everything works together as one accountable service, giving your team a clear path from request to resolution.",

  cardsitem: [
    {
      id: "hotels-hospital-iptv",
      titleLine1: "Hotels & Hospital IPTV Systems",
      titleLine2: "",
      description: "Interactive room portals pair hotel guest services or patient care info with live TV.",
      image: "/assets/images/iptvsolutions/solution1.jpeg",
      highlighted: true,
      url: "",
    },
    {
      id: "commercial-buildings",
      titleLine1: "Commercial Buildings",
      titleLine2: "",
      description: "Guarantee the right integration of high-definition cameras and NVR/DVR recording systems with maintenance.",
      image: "/assets/images/iptvsolutions/solution2.jpeg",
      highlighted: false,
      url: "",
    },
  ],

  cta: {
    title: "Not sure which IPTV setup your site needs?",
    description: "Start by talking to our engineers about the property and schedule a site survey.",
    buttonText: "Book a Consultation",
    href: "#",
  },
};
export const learningEnvironmentsData = {
  tag: "LEARNING ENVIRONMENTS",
  heading: "We Design Around Learning \n {{Outcomes, Not Equipment Lists.}}",
  highlightLast: 4,
  subhead:
    "Each teaching space has its own demands. Here is how we approach the five most common, and what goes into each.",
  data: [
    {
      icon: "SatelliteDish",
      title: "Lecture Theaters & Auditoriums",
      description:
        "Large-format AV built for clarity at scale. Every student receives the same quality of sight and sound, wherever they sit, with the lecture captured for later revision.",
    },
    {
      icon: "Merge",
      title: "Middleware",
      description: "Centralized software builds the channel guide and manages on-demand catalogues.",
    },
    {
      icon: "GlobeLock",
      title: "Encryption Control",
      description: "DRM stream encryption and device pairing keep channel lineups on approved screens.",
    },
    {
      icon: "Network",
      title: "Distribution Network",
      description: "Switching and cabling move multicast video to each room without saturating links.",
    },
    {
      icon: "TvMinimal",
      title: "Room Endpoints",
      description:
        "Large-format AV built for clarity at scale. Every student receives the same quality of sight and sound, wherever they sit, with the lecture captured for later revision.",
    },
    {
      icon: "Columns2",
      title: "Management Console",
      description: "A single dashboard controls channel line-ups and screen groups across properties.",
    },
  ],
} 

 
  export const serverChoicesData = {
  tag: "Overview",
  heading: "IPTV Solutions & Network \n Integration Across Your Property",
  highlightLast: 4 ,
  subhead:
    "Standardize and improve your guest experience with GS IT’s reliable, enterprise-grade IPTV in Dubai.",
 items: [
  {
    type: "card",
    icon: "Route",
    title: "One Contract Across the Build",
    description: "We supply the headend and the endpoints under one contract that can also cover licensing and support.",
  },
  {
    type: "card",
    icon: "Files",
    title: "Channel Rights Cleared Early",
    description: "Content sourcing is agreed with authorized distributors well before final project sign-off and launch.",
  },
  {
    type: "image",
    image: "/assets/images/iptvsolutions/overview1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/iptvsolutions/overview2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "/assets/images/icons/dbtick.svg",
    title: "Integrated with Systems You Run",
    description: "Real-time data from your PMS, POS, and HIS flows to each screen, keeping information always updated.",
  },
  {
    type: "card",
    icon: "LandPlot",
    title: "New Sites on the Same Platform",
    description: "A second site can be registered against the existing platform, inheriting the interface profile already set.",
  },
],
};
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on IPTV \n Solutions",
  highlightLast: 6,
  faqData: [
  {
    question: "Can we keep our existing televisions when moving to IPTV?",
    answer: "In many cases, yes. Screens with a network port and hospitality mode usually run the client software directly. Older sets without that support work through a set-top box placed behind the screen. As an IPTV provider in Dubai, we list which units carry over and which need replacing before any budget is signed off.",
  },
  {
    question: "Is an enterprise IPTV system the same as an IPTV subscription in Dubai?",
    answer: "No. A consumer IPTV subscription in Dubai streams single home connections over public internet. Enterprise setups run locally across your dedicated network, offering centralized management, custom branding, and interactive guest services that residential plans cannot support.",
  },
  {
    question: "How long does IPTV installation in Dubai take for a mid-sized property?",
    answer: "For a mid-sized property, deployment generally spans a few weeks. Headend setup and platform branding occur off-site while physical cabling checks take place on-site. Room transitions proceed floor by floor for a smooth launch. Timelines for IPTV in Dubai stretch primarily when underlying network cabling requires full replacement.",
  },
  {
    question: "Can we start with one wing and expand the system later?",
    answer: "Yes. We size the central headend for your whole facility upfront while activating initial phases by floor. Additional rooms connect easily down the line without changing software or guest menus. Licensing simply scales per display as new sections launch.",
  },
  {
    question: "What happens to the system if the internet connection drops?",
    answer: "Live television feeds continue without interruption because local headend process the broadcast on-site. Local on-demand media stay accessible too; only external apps lose connectivity. That resilience explains why hospitality IPTV solutions outperform app-only setups during network drops.",
  },
  {
    question: "Can one platform manage several properties from a single console?",
    answer: "Yes. Centralized software lets operators push global updates while preserving individual channel lineups and local property branding. Groups running IPTV systems across multiple sites use this structure to streamline administration and standardize licensing control.",
  },
  {
    question: "What happens to our existing satellite dishes and coaxial cabling?",
    answer: "The satellite intake usually stays and only the distribution layer changes. Dishes and amplifiers keep feeding the new encoders, so the source side needs little rework. Most IPTV systems we install reuse that intake and retire the coaxial runs floor by floor as the IP path goes live. Our survey confirms which parts of the existing plant hold value before any replacement is quoted.",
  },
  {
    question: "What should a business compare when shortlisting IPTV providers?",
    answer: "Start with who owns the headend configuration and who manages content sourcing. A commercial IPTV system integrator in the UAE should carry a single accountable scope from supply through to handover. Ask which parts of delivery are outsourced and how post-handover support is handled if a channel drops.",
  },
  {
    question: "Who updates the content after the system is handed over?",
    answer: "Your team manages daily updates through a simple browser dashboard. We provide complete training at handover, so marketing staff can adjust menus easily. If you prefer offloading routine maintenance, our IPTV services team handles updates through a managed agreement.",
  },
  {
    question: "Can guest rooms and public area screens run from the same platform?",
    answer: "Yes. One platform drives in-room television and lobby signage from a single content library. Displays are grouped by location: hallway screens play scheduled playlists, and guest room TVs display the interactive menu. Facilities operating IPTV in Dubai can also manage these mixed screens from one central screen.",
  },
],
};
 
 
 
export const postdevelopmentData = {
  tag: "EXECUTION WORKFLOW ",
  heading: "Structured IPTV Integration: \n From Survey to Complete Handover",
  highlightLast: 5,
  subhead:
    "Our enterprise IPTV installation in Dubai protects operational continuity throughout every deployment phase.",
data: [
  {
    number: "01",
    title: "Site Survey",
    description: "Technicians audit existing cabling, screen locations, and required channel lineups.",
  },
  {
    number: "02",
    title: "System Design",
    description: "Engineers map headend hardware and middleware licensing to total screen counts.",
  },
  {
    number: "03",
    title: "Network Preparation",
    description: "Infrastructure upgrades and switch configurations are finalized across the property.",
  },
  {
    number: "04",
    title: "Staging & Build",
    description: "Server racks are assembled, and custom branding is applied offsite before rollout.",
  },
  {
    number: "05",
    title: "Phased Cutover",
    description: "Migrating rooms in small blocks minimizes television downtime for active users.",
  },
  {
    number: "06",
    title: "Testing & Handover",
    description: "Our teams verify interface speeds and live channels across rooms before sign-off.",
  },
],
cta:{
  title: "Building from the ground up? Let us talk pre-construction.",
  description:"We coordinate with MEP teams during the planning phase to design IPTV network risers well before fit-outs.",
  button:'Talk to <uppercase>IPTV</uppercase> experts ',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] text-primary',
   classdesc:"max-w-[68ch]"
}
};
 
export const whyChooseUsData = {
  tag: "WHY GS IT",
  heading: "Choosing GS IT as \n {{Your IPTV Service Provider in Dubai}}",
  highlightLast: 6,
  subhead: "As a trusted enterprise IPTV system provider in Dubai, we deliver reliable video systems with structured execution and full support.",
  points: [
    {
      title: "Single-Source Accountability",
      description: "Our in-house engineers manage everything from headend setup to switching and cabling.",
    },
    {
      title: "Vendor-Neutral Solutions",
      description: "Free from single-vendor ties, we choose the middleware that fits your operational needs.",
    },
    {
      title: "Customized Interface Design",
      description: "System layouts and screen menus are customized around your site's operational needs.",
    },
    {
      title: "Transparent Project Quotes",
      description: "Detailed site surveys let us deliver precise project quotes without mid-work extra charges.",
    },
    {
      title: "Flexible Project Scheduling",
      description: "We adjust our fit-out schedules around your operations to keep site disruption minimal.",
    },
    {
      title: "Continuous Support Through AMC",
      description: "Post-handover maintenance and responses are covered under our SLA-backed AMC.",
    },
  ],
}  

