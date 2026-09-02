 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Switching and Routing Solutions in Dubai, UAE · Since 2013",
  heading: "Scale Confidently with \n Smarter Switching & Routing",
  highlightLast: 4,
  description: "Every switch and router we deploy is scoped, configured, and tested to carry your traffic reliably across every floor, site, and connection your business runs on.",
  backgroundImage: "/assets/images/switching-routing/banner.jpeg", 
  mobbanner: "/assets/images/switching-routing/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+`, desc:"Years in UAE IT infrastructure"},
   { value:"L2 to L3", desc:"Full switching stack covered"},
   { value:'24/7', desc:"Active remote assistance"},
   { value:"TDRA ", desc:"Compliant WAN deployments"}
  ],
  buttons: [
    {
      text: "Talk to a Network Expert",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    }  
  ],
};   
export const overviewData = {
    backgroundImage: "/assets/images/switching-routing/main.jpeg", 
  mobbanner: "/assets/images/switching-routing/main.jpeg", 
  tag: "Overview",
  heading: "Resilient Architectures for \n UAE Enterprises",
  highlightLast: 2,
  description: [`Switching solutions connect devices on the same network while routing solutions direct traffic between networks. GS IT handles both layers across Dubai and the UAE.`,
   `We assess your environment, design the full network architecture, and deploy switching and routing infrastructure matched to your site count, user density, and traffic requirements. Our switching and routing services also cover the device provisioning, performance testing, and full documentation delivery with no vendor handoffs mid-project.`]
 
};  
export const servicesData = {
  tag: "Our Solutions ",
  heading: "What We Deploy for You",
  highlightLast: 2,
  subhead: "From access layer switches to wide area routing across sites, a full scope of enterprise network switching and routing solutions.",
 servicesData: [
  {
    icon: "Layers",
    title: "Managed Layer 2 & Layer 3 Switching",
    description: "Access and distribution switches with full VLANs and QoS customized to your needs.",
    href: "#",
    featured: true,
  },
  {
    icon: "GlobeCheck",
    title: "Enterprise Router Deployment",
    description: "Deploying core routers in the UAE with internet breakout and multi-circuit redundancy.",
    href: "#",
    featured: true,
  },
  {
    icon: "Network",
    title: "VLAN Design & Segmentation",
    description: "Isolate your departments, guests, and IoT hardware logically on a single physical setup.",
    href: "#",
    featured: true,
  },
  {
    icon: "Waypoints",
    title: "Network Access Control",
    description: "Strict port-level authentication setup stops outside devices from joining your network.",
    href: "#",
    featured: true,
  },
  {
    icon: "LandPlot",
    title: "Multi-Site WAN Routing",
    description: "Link various UAE branches using smart routing that manages failover and load balancing.",
    href: "#",
    featured: true,
  },
  {
    icon: "LayoutPanelTop",
    title: "Core Network Infrastructure",
    description: "High-density switching delivers non-blocking throughput for data centers and campuses.",
    href: "#",
    featured: true,
  },
  {
    icon: "GlobeLock",
    title: "Routing Protocol Configuration",
    description: "Configuring OSPF, EIGRP, and BGP for dynamic path selection and automatic route failover.",
    href: "#",
    featured: true,
  },
  {
    icon: "ArrowUp01",
    title: "QoS & Traffic Prioritization",
    description: "Our QoS policies prioritize voice and real-time traffic over background office data streams.",
    href: "#",
    featured: true,
  },
  {
    icon: "Router",
    title: "SD-WAN Integration",
    description: "SD-WAN overlays over current routing give IT clear visibility to control traffic by application.",
    href: "#",
    featured: true,
  },
],
}; 
 
 
export const makingswichData = {
  tag: "THE DIFFERENCE",
  heading: "With GS IT vs. \n Without a Specialist",
  highlightLast: 3,  
  subhead: "See how working with dedicated network experts compares to going without them across every stage of deployment.",
  headers: {
  scenario: "Aspect",
  without: "Without a Specialist",
  with: "With GS IT",
},
table: [
  {
    scenario: "Network Design",
    without: "Pre-purchasing hardware may result in wrong port counts or zero redundancy.",
    with: "Experts map switch hierarchy, VLANs, and routing prior to hardware orders.",
  },
  {
    scenario: "VLAN Segmentation",
    without: "Un-segmented flat networks can expose sensitive staff data to guest traffic.",
    with: "Separate VLANs isolate department, guest, VoIP, and CCTV data securely.",
  },
  {
    scenario: "WAN Redundancy",
    without: "A single internet link may cause total downtime while waiting on the ISP.",
    with: "Dual WAN links feature automated failover to keep business online during outages.",
  },
  {
    scenario: "Hardware Specification",
    without: "Budget generic models can lack necessary PoE capacity or management tools.",
    with: "Access, distribution, and core switches match your required port throughput.",
  },
  {
    scenario: "Deployment Documentation",
    without: "Missing documentation often leaves teams guessing during critical fixes.",
    with: "Clients receive complete IP schemas, VLAN tables, and as-built topology maps.",
  },
  {
    scenario: "Post-Deployment Support",
    without: "Firmware may go unpatched, and minor unresolved network faults escalate.",
    with: "AMC coverage offers regular firmware updates, monitoring, and fast response.",
  },
],
};

export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Our Technology Partners ",
  highlightLast: 1, 
}
  export const partnerslogoData= [
  { src: "/assets/images/switching-routing/partner1.svg", alt: "" },
  { src: "/assets/images/switching-routing/partner2.svg", alt: "" },
  { src: "/assets/images/switching-routing/partner3.svg", alt: "" },
  { src: "/assets/images/switching-routing/partner4.svg", alt: "" },
  { src: "/assets/images/switching-routing/partner5.svg", alt: "" },   
]  ; 
 
 
 
 

export const recomData = {
    backgroundImage: "/assets/images/switching-routing/ctabanner.jpeg", 
  mobbanner: "/assets/images/switching-routing/ctabanner.jpeg", 
  tag: "",
  heading: "Is your network from edge to core \n architected for the future? ",
    highlightLast: 12,
  description: "We assess your environment to deliver the right switching and routing services for both new setups and infrastructure upgrades. ",

  cta: "Book a Free Network Assessment ", 
}; 
 
export const  longtermValueData = {
  tag: "Before You Start ",
  heading: "Switching & Routing: \n What Businesses Need to Know",
  highlightLast: 5, 
  image: "/assets/images/server-and-storage/main.jpeg", 
  subhead: "Core technical concepts that dictate how your network is scoped and what infrastructure you actually need.",
  
 cards: [
  {
    id: "uninterrupted-applications",
    titleLine1: "What",
    titleLine2: "Switching Handles",
    description: "Fast ASIC hardware keeps your internal team connected without stalling collaborative workflows.",
  },
  {
    id: "fast-data-recovery",
    titleLine1: "What",
    titleLine2: "Routing Handles ",
    description: "IP-path selection determines how securely and efficiently your staff accesses cloud-based tools.",
  },
  {
    id: "complete-data-control",
    titleLine1: "Managed vs.",
    titleLine2: "Unmanaged Switches ",
    description: "Deploy managed units for core office data protection and restrict unmanaged to basic tools.",
  },
  {
    id: "scalable-business-storage",
    titleLine1: "When You",
    titleLine2: "Need a Layer 3 Switch",
    description: "This upgrade allows departments to share huge files instantly without slowing your main router.",
  },
  {
    id: "unified-infrastructure",
    titleLine1: "VLANs in a",
    titleLine2: "Business Network",
    description: "Logical segmentation safely isolates your different departments using a single physical switch.",
  },
  {
    id: "lower-it-costs",
    titleLine1: "When",
    titleLine2: "SD-WAN Makes Sense",
    description: "Multi-site firms use this to combine multiple internet lines and prioritize critical business apps.",
  },
],
};
export const SectionHeaderData = {
  tag: "Core Infrastructure Risks",
  heading: "Signs Your Switching & Routing Setup \n Needs Attention",
  highlightLast: 2,
  subhead: "These are the signals businesses typically notice before a network upgrade becomes urgent.",
  servicesData: [
  {
    icon: "ClockArrowDown",
    title: "Frequent Slowdowns at Peak Hours",
    description: "Heavy traffic spikes cause network drops when your switches lack adequate capacity.",
    href: "#",
    featured: true,
  },
  {
    icon: "ArrowDownUp",
    title: "No Traffic Separation by Department",
    description: "A flat switch setup exposes sensitive payroll and HR data to unauthorized internal staff.",
    href: "#",
    featured: false,
  },
  {
    icon: "GlobeOff",
    title: "Single WAN Link with No Failover",
    description: "Your entire office goes offline if a single router circuit suffers an unexpected outage.",
    href: "#",
    featured: false,
  },
  {
    icon: "DatabaseZap",
    title: "Guest Devices on Business Network",
    description: "Malware from visitor hardware easily spreads to main servers without a guest VLAN.",
    href: "#",
    featured: false,
  },
  {
    icon: "UserPlus",
    title: "Office Expansion & Downtime Risks",
    description: "Adding staff causes massive connection drops without a scalable switch architecture.",
    href: "#",
    featured: false,
  },
  {
    icon: "FileX",
    title: "No Current Network Documentation",
    description: "Fixing hardware issues takes longer without routing diagrams and active switch configs.",
    href: "#",
    featured: false,
  },
],
};
 export const industriesData = {
  tag: "VERTICALS WE COVER  ",
  heading: "Networks Built for \n Your Business Environment  ",
  highlightLast: 3,
  subhead:
    "GS IT has deployed switching and routing in network infrastructures across these industries in the UAE. ",
industriesData: [
  {
    icon: "Handshake",
    title: "Hospitality",
    description: "Fast guest Wi-Fi isolated from hotel reservation data.",
    href: "",
  },
  {
    icon: "Database",
    title: "Data Centers",
    description: "Non-blocking high-density fabric for heavy workloads.",
    href: "",
  },
  {
    icon: "Building",
    title: "Corporate Offices",
    description: "Floor switches linked via high-speed layer 3 routing.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare",
    description: "Secure medical file transfers with high network uptime.",
    href: "",
  },
  {
    icon: "ShoppingCart",
    title: "Retail",
    description: "PCI-safe checkout lanes split from your guest Wi-Fi.",
    href: "",
  },
  {
    icon: "WalletMinimal",
    title: "Finance",
    description: "Compliant routing and fast switching for UAE finance.",
    href: "",
  },
  {
    icon: "Landmark",
    title: "Government",
    description: "Secure agency routing and isolated state databases.",
    href: "",
  },
],

industryCTA: {
  title: "Your Industry",
  description: "Don't you see yours ? 1500+ clients across every sector. Let's talk.",
  href: "/",
},
};
export const grayboxData = {
 tag: "Why Choose Us",
  heading: "Powering Enterprise \n Connectivity Across UAE",
  highlightLast: 3,
  subhead:`Our certified engineers deploy resilient, fully compliant switching and routing solutions in Dubai.`,
items: [
  {
    type: "01",
    image: "",
    icon: "",
    title: "Certified Engineers on Every Project",
    description: "Certified networking specialists run every switch deployment under strict vendor guidelines.",
    href: "",
  },
  {
    type: "02",
    image: "",
    icon: "",
    title: `${portfolioData.years}+ Years Deploying Networks in Dubai`,
    description: "This background ensures we navigate Dubai building layouts and local ISP handovers smoothly.",
    href: "",
  }, 
  {
    type: "03",
    image: "",
    icon: "",
    title: "Full Project Scope Under One Contract",
    description: "An SLA-backed contract covers your entire network lifecycle, from initial design to final paperwork.",
    href: "",
  },
  {
    type: "04",
    image: "",
    icon: "",
    title: "Deployment Built Around Your Operations",
    description: "Custom switch routing plans are engineered around your specific premises and workflow needs.",
    href: "",
  },
  {
    type: "05",
    image: "",
    icon: "",
    title: "24/7 Helpdesk & On-Site Maintenance",
    description: "Round-the-clock helpdesk support pairs with scheduled physical maintenance to protect uptime.",
    href: "",
  },
  {
    type: "06",
    image: "",
    icon: "",
    title: "UAE Compliance Alignment",
    description: "TDRA-compliant WAN routing and NESA network segmentation customized for vital UAE sectors.",
    href: "",
  },
],
}; 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions \n on Switching & Routing",
  highlightLast:7,
faqData: [
  {
    question: "What is the difference between a switch and a router in a business network?",
    answer: "A switch connects devices on the same network segment using MAC addresses, while a router directs traffic between different networks using IP addresses. Most business environments need both, network switching for internal connectivity and network routing for internet or WAN access.",
  },
  {
    question: "Does my business in Dubai need a managed switch or will an unmanaged one work?",
    answer: "Managed switches are strongly recommended for any business with more than a handful of users. They allow VLAN configuration, QoS settings, port security, and remote monitoring. Unmanaged switching solutions have no configuration options and are unsuitable for environments where traffic segmentation or security policies matter.",
  },
  {
    question: "What is a VLAN and why would my business need one?",
    answer: "A VLAN (Virtual Local Area Network) logically separates traffic on the same physical network. Businesses use VLANs to isolate departments, keep guest Wi-Fi traffic away from internal systems, and separate IoT devices from corporate data. This reduces broadcast traffic and improves security without additional hardware.",
  },
  {
    question: "How many switches does a typical office deployment require?",
    answer: "It depends on the number of users, floors, and network zones. A single-floor SMB office may need one or two access switches. A multi-floor corporate environment typically follows a three-tier architecture with core, distribution, and access layer switches at each level. GS IT determines this through a site survey before recommending hardware.",
  },
  {
    question: "What routing protocols does GS IT configure?",
    answer: "GS IT configures OSPF, EIGRP, and BGP depending on the network design. OSPF is commonly used for internal routing between sites. BGP is used where a business has multiple ISP connections or needs to control outbound routing policy. Static routes are applied in simpler or fixed-path environments.",
  },
  {
    question: "Can GS IT connect multiple office locations across the UAE?",
    answer: "Yes. GS IT designs and deploys multi-site WAN routing using dedicated circuits or broadband with SD-WAN overlays. Routing is configured between sites with failover paths so that if a primary link goes down, traffic switches automatically to the backup connection without manual intervention.",
  },
  {
    question: "What is the difference between a Layer 2 and Layer 3 switch?",
    answer: "A Layer 2 switch forwards frames within a single VLAN using MAC addresses. A Layer 3 switch can also route traffic between VLANs using IP addresses, removing the need for a separate router for inter-VLAN traffic. Layer 3 switches are commonly used at the distribution or core layer in larger enterprise deployments.",
  },
  {
    question: "How long does a typical switching and routing deployment take?",
    answer: "A single-site office deployment typically takes two to five business days from survey to live handover. Multi-site or data centre projects run longer depending on scope and site readiness. GS IT produces a project schedule after the site survey so businesses have a clear timeline before work begins.",
  },
  {
    question: "Does GS IT offer support after the network is deployed?",
    answer: "Yes. GS IT provides annual maintenance contracts that cover configuration changes, firmware updates, fault diagnosis, and scheduled network reviews. Support is available from engineers in Dubai who can respond on-site when remote troubleshooting is not sufficient.",
  },
  {
    question: "How do I know which switching hardware is right for my business?",
    answer: "The right switch depends on your site size, number of users, required VLAN complexity, and whether you need PoE for devices like IP phones or cameras. A site survey gives a clear picture before any hardware is specified or purchased.",
  },
],
};

 export const howweworkData = {
  tag: "How We Work",
  heading: "Our Strategic Approach to \n Switching & Routing ",
  highlightLast: 3,
  subhead:
    "By assessing your exact traffic needs upfront, we build and customize the switching and routing services.",
  data: [
  {
    number: "01",
    title: "Site Survey & Assessment",
    description: "We audit existing infrastructure, map cable runs, and document your current setup.",
  },
  {
    number: "02",
    title: "Network Architecture Design",
    description: "Engineers draft a custom topology covering switch hierarchy, VLANs, and redundancy.",
  },
  {
    number: "03",
    title: "Hardware Procurement",
    description: "Devices are sourced via certified partners, choosing exact models for every need.",
  },
  {
    number: "04",
    title: "Configuration & Deployment",
    description: "We pre-stage configurations off-site, then install hardware with minimal downtime.",
  }
],
  };
 export const postdevelopmentData = {
  tag: "POST-DEPLOYMENT ",
  heading: "What Happens \n After Go-Live ",
  highlightLast: 2,
  subhead:
    "Deployment is not the end. GS IT stays engaged to ensure the network performs as designed over time.",
  data: [
  {
    number: "01",
    title: "Documentation Handover",
    description: "Get complete as-built diagrams and exact configuration data at the project end.",
  },
  {
    number: "02",
    title: "Engineer Walkthrough",
    description: "Our deployment engineer gives your IT team a direct, on-site tour of the setup.",
  },
  {
    number: "03",
    title: "Monitoring Setup",
    description: "Set up monitoring tools to alert you on connectivity issues and interface errors.",
  },
  {
    number: "04",
    title: "AMC Coverage Option",
    description: "Annual contracts provide ongoing support, firmware updates, and site visits.",
  },
  {
    number: "05",
    title: "Periodic Network Review",
    description: "Scheduled audits adjust your setup to match shifting operational requirements.",
  },
],
  };
 

 