 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Managed Wi-Fi Service Providers · Dubai, UAE · Since 2013 ",
  heading: "Completely Managed \n Wi-Fi Solutions for Businesses in Dubai",
  highlightLast: 6,
  description: "Through managed Wi-Fi services in Dubai, GS IT gives businesses a fully operated wireless network, where design, deployment, security, and day-to-day monitoring are handled by certified engineers under a structured SLA.",
  backgroundImage: "/assets/images/managed-wifi/banner.jpeg", 
  mobbanner: "/assets/images/managed-wifi/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ `, desc:"Years In UAE IT Deployment"},
   { value: `24/7`, desc:"Remote Network Monitoring "},
   { value: `Wi-Fi 6/6E/7`, desc:"Ready Infrastructure"},
   { value: `SLA`, desc:"Backed Service Commitments"}, 
  ],
  buttons: [
    {
      text: "Talk to experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    }  
  ],
};    
 export const ITArchitectureData = {
  tag: "OVERVIEW",
  heading: "Expert Wireless Oversight & \n Optimization Services ",
  highlightLast: 2,
  subhead:
    "GS IT operates as one of the established managed Wi-Fi service providers in Dubai, running wireless networks for businesses across the UAE.",
  items: [
    {
      type: "image",
      image: "/assets/images/managed-wifi/overview1.jpeg",
      title: "",
    },
    {
      type: "card",
      icon: "Layers",
      title: "Design to delivery",
      description:  "From initial RF site surveys to cloud-configured deployment, we build your wireless connectivity end-to-end.",
    }, 
    {
      type: "card",
      icon: "ChartScatter",
      title: "Coverage that holds",
      description: "Heatmap-driven AP placement eliminates dead zones and ensures consistent signal quality across all areas.",
    }, 
    {
      type: "card",
      icon: "Headset",
      title: "Long-Term support",
      description: "GS IT's 24/7 remote monitoring and SLA-defined responses keep your network running without internal IT strain.",
    }, 
    {
      type: "card",
      icon: "Form",
      title: "Future-Ready Infrastructure",
      description: "Wi-Fi 6, 6E, and 7 handle high device density and scales as the demands of your business environment grow.",
    },  
     {
      type: "image",
      image: "/assets/images/managed-wifi/overview2.jpeg",
      title: "",
    },
  ],
};
 export const SectionHeaderData = {
  tag: "The Problem",
  heading: "Wi-Fi Management \n Challenges Faced by Businesses",
  highlightLast: 4,
  subhead: "Unmanaged wireless networks create friction long before they cause a full outage. These are the issues our managed Wi-Fi solutions in Dubai are built to resolve.",
  servicesData : [
  {
    icon: "ClockArrowDown",
    title: "Frequent Downtime",
    description: "Unexpected outages disrupt workflows, but GS IT counters them via proactive system monitoring.",
    href: "#",
    featured: true,
  },
  {
    icon: "Radar",
    title: "Dead Zones & Patchy Coverage",
    description: "Strategic AP placement and heatmap design eliminate poor RF planning that limits signal range.",
    href: "#",
    featured: false,
  },
  {
    icon: "ShieldUser",
    title: "Security Vulnerabilities",
    description: "Role-based access controls separate employee, guest, and IoT traffic to protect internal data.",
    href: "#",
    featured: false,
  },
  {
    icon: "/assets/images/icons/databaseplus.svg",
    title: "High-Density Congestion",
    description: "Proper capacity planning and Wi-Fi 6/7 maintain superior performance under heavy device loads.",
    href: "#",
    featured: false,
  },
  {
    icon: "ChartCandlestick",
    title: "Unpredictable IT Costs",
    description: "Subscription models turn surprise maintenance and aging hardware bills into fixed monthly expenses.",
    href: "#",
    featured: false,
  },
  {
    icon: "Cloudy",
    title: "Lack of Unified Control",
    description: "Cloud dashboards replace tedious individual AP management with a unified, high-visibility interface.",
    href: "#",
    featured: false,
  },
     
]
};
 export const industriesData = {
  tag: "INDUSTRIES WE SERVE ",
  heading: "Managed Wireless Networks \n Architecture for Diverse Sectors ",
  highlightLast: 4,
  subhead:
    "High-demand environments across the UAE trust GS IT for wireless networks that hold up under challenging operational conditions and growing device loads.",
 industriesData: [
  {
    icon: "Building",
    title: "Commercial",
    description:
      "Centralized IT controls drive density-based, multi-floor AP deployment.",
    href: "",
  },
  {
    icon: "Handshake",
    title: "Hospitality",
    description:
      "Property-wide roaming and automated guest portals reduce IT overhead.",
    href: "",
  },
  {
    icon: "Hospital",
    title: "Healthcare",
    description:
      "Isolated guest access protects clinical systems and telemetry equipment.",
    href: "",
  },
  {
    icon: "ShoppingCart",
    title: "Retail",
    description:
      "Dedicated branch Wi-Fi keeps POS terminals and inventory tools online.",
    href: "",
  },
  {
    icon: "GraduationCap",
    title: "Education",
    description:
      "Custom content controls and campus Wi-Fi handle high student density.",
    href: "",
  },
  {
    icon: "Warehouse",
    title: "Warehousing & Logistics",
    description:
      "Industrial APs maintain coverage through high metal racks and open bays.",
    href: "",
  },
  {
    icon: "Landmark",
    title: "Government & Public Sector",
    description:
      "Strict network segmentation and compliant AP policies isolate sensitive data.",
    href: "",
  },
],

industryCTA: {
  title: "Your Industry",
  description: "Don't see yours? 1500+ clients across every sector. Let's talk.",
  href: "/",
},
};
export const featuresData = {
  tag: "KEY FEATURES ",
  heading: "Maximize Uptime & Speed with \n Managed Wireless Networks ",
  highlightLast: 3,
  subhead:"These are the technical capabilities built into managed Wi-Fi services GS IT delivers across Dubai and the UAE. ",
 servicesData: [
  {
    icon: "Cloudy",
    title: "Cloud-Based Management",
    description: "One central dashboard provides total visibility across every site and deployment.",
    href: "",
    featured: true,
  },
  {
    icon: "Radar",
    title: "Complete Coverage Design",
    description: "Expert RF planning ensures strong, unified indoor and outdoor signal performance.",
    href: "",
    featured: true,
  },
  {
    icon: "Wifi",
    title: "Wi-Fi 6/6E/7 Ready",
    description: "Our managed wireless LAN supports Wi-Fi 6, 6E and 7 for high-speed connectivity.",
    href: "",
    featured: true,
  },
  {
    icon: "ShieldCheck",
    title: "Secure User Access",
    description: "Role-based controls and network isolation keep guests, users, and IoT data safe.",
    href: "",
    featured: true,
  },
  {
    icon: "ArrowUp01",
    title: "Smart Traffic Control",
    description: "Smart QoS policies tools prioritize video and voice calls over less critical activities.",
    href: "",
    featured: true,
  },
  {
    icon: "TrendingUp",
    title: "High-Density Performance",
    description: "Advanced Wi-Fi 6, 6E, and 7 manage hundreds of concurrent devices smoothly.",
    href: "",
    featured: true,
  },
  {
    icon: "HouseWifi",
    title: "Branded Guest Wi-Fi",
    description: "Custom portal setups offer secure guest logins, company branding, and insights.",
    href: "",
    featured: true,
  },
  {
    icon: "Binoculars",
    title: "24/7 Proactive Monitoring",
    description: "Constant digital tracking catches system errors and spikes before users notice.",
    href: "",
    featured: true,
  },
]
}; 
export const  longtermValueData = {
  tag: "Business Impact ",
  heading: "Zero Network Friction, \n Efficient Operations",
  highlightLast: 2, 
  image: "/assets/images/structured-cabling/main.jpeg", 
  subhead: "Moving to a professionally managed wireless network does more than fix connectivity. Here is the measurable difference it makes across your operations.",
  
 cards: [
  {
    id: "high-availability",
    titleLine1: "High",
    titleLine2: "Availability & Uptime",
    description: "SLA-backed commitments and proactive tracking minimize disruptions to keep you online.",
    highlighted: true,
  },
  {
    id: "improved-productivity",
    titleLine1: "Improved",
    titleLine2: "Team Productivity",
    description: "Stable, responsive Wi-Fi lets your staff work continuously without annoying network drops.",
  },
  {
    id: "reduced-workload",
    titleLine1: "Reduced",
    titleLine2: "IT Workload",
    description: "GS IT handles configurations and updates, so your internal team can focus on core priorities.",
  },
  {
    id: "predictable-expenses",
    titleLine1: "Predictable",
    titleLine2: "Monthly Expenses",
    description: "Managed Wi-Fi bundles your ongoing network needs into a single and reliable fixed monthly fee.",
  },
  {
    id: "scalable-locations",
    titleLine1: "Scalable",
    titleLine2: "Across Locations",
    description: "Centralized provisioning lets you easily add new sites or access points without re-engineering.",
  },
  {
    id: "stronger-security",
    titleLine1: "Stronger",
    titleLine2: "Network Security",
    description: "Smart segmentation and strict access policies completely shield your critical business data.",
  },
],
};
export const howweworkData = {
  tag: "Step-by-Step Delivery",
  heading: "From Assessment to \n Active Management",
  highlightLast: 2,
  subhead:
    "Our managed Wi-Fi Dubai strategy integrates precision site audits, custom heatmaps, and active 24/7 monitoring.",
  data: [
  {
    number: "01",
    title: "Site Survey & RF Mapping",
    description: "Engineers map signals and check interference to build precise coverage heatmaps.",
  },
  {
    number: "02",
    title: "Design & Capacity Planning",
    description: "The Wi-Fi architecture is customized to user density and actual bandwidth needs.",
  },
  {
    number: "03",
    title: "Cloud Dashboard Setup",
    description: "Centralized dashboards are configured for remote policy governance and full control.",
  },
  {
    number: "04",
    title: "Pilot Testing & Validation",
    description: "Wi-Fi performance is thoroughly tested under real conditions before the final rollout.",
  },
  {
    number: "05",
    title: "Full Deployment",
    description: "APs are installed at optimal spots to secure complete indoor and outdoor coverage.",
  },
  {
    number: "06",
    title: "Security & Segmentation",
    description: "VLAN segmentation and role-based access isolate employee data from guest zones.",
  },
  {
    number: "07",
    title: "Training & Documentation",
    description: "Handover sessions and documentation equip your staff to easily handle minor faults.",
  },
  {
    number: "08",
    title: "Monitoring & Optimization",
    description: "Post-installation support involves proactive monitoring and regular network optimization.",
  },
],
  };
export const grayboxData = {
  tag: "Why Choose Us",
  heading: "Proactive Wireless Management \n for UAE Enterprises ",
  highlightLast: 3,
  subhead:
    "Backed by 13+ years of UAE network expertise, GS IT provides managed wireless network solutions that align with your financial and operational preferences. ",
  items: [
    {
      type: "01",
      image: "",
      icon: "",
      title: "Multi-Sector Deployments ",
      description:
        "GS IT brings proven local field expertise to meet the unique structural demands of complex sectors. ",
      href: "",
    },
    {
      type: "02",
      image: "",
      icon: "",
      title: "SLA-Backed Network Support ",
      description: "Receive real-time monitoring and swift fault remediation with guaranteed resolution times in your SLA. ",
      href: "",
    },
    {
      type: "03",
      image: "",
      icon: "",
      title: "TDRA-Compliant Wi-Fi Deployment ",
      description: "Certified engineers ensure TDRA-compliant Wi-Fi deployments with built-in logging and audit readiness.",
      href: "",
    },
    {
      type: "04",
      image: "",
      icon: "",
      title: "Customized Wi-Fi Design",
      description: "Every setup is customized around your actual workspace, user count, and data needs with zero guesswork.",
      href: "",
    },
    {
      type: "05",
      image: "",
      icon: "",
      title: "Future-Ready Wi-Fi Standards",
      description: "Round-the-clock helpdesk support pairs with scheduled physical maintenance to protect uptime.",
      href: "",
    },
    {
      type: "06",
      image: "",
      icon: "",
      title: "Flexible OPEX Plans",
      description: "Our predictable pricing adapts to your operational budget and scales smoothly alongside your growth.",
      href: "",
    },
  ],
}; 

export const compData = {
  tag: "Operational Comparison",
  heading: "Managed Wi-Fi vs. \n Self-Managed Wi-Fi",
  highlightLast: 2, 
  subhead: "Internal Wi-Fi management carries hidden operational risks. See how fully managed infrastructure compares.",
  headers: {
  scenario: "Aspect",
  without: "Self-Managed Wi-Fi",
  with: "Managed Wi-Fi (GS IT)",
},
table: [
  {
    scenario: "Fault Response",
    without: "Depends on internal IT availability. Faults outside office hours typically wait until the next working day.",
    with: "24/7 NOC monitoring detects and resolves faults under a written SLA, including outside business hours.",
  },
  {
    scenario: "Compliance",
    without: "The business is fully responsible for meeting requirements and maintaining compliance records.",
    with: "Content filtering, user identity logging, and data retention are built in and documented for audit purposes.",
  },
  {
    scenario: "Vendor Relationships",
    without: "Hardware is typically sourced through resellers. Warranty claims and manufacturer support escalations are handled by the business itself.",
    with: "GS IT holds direct vendor relationships with wireless hardware manufacturers, covering warranty, support escalation, and hardware replacement without reseller delays.",
  },
  {
    scenario: "Downtime Accountability",
    without: "Resolution depends on who is available at the time. There is no external obligation attached to how quickly the fault gets fixed.",
    with: "When the network fails, GS IT is contractually obligated to resolve it within defined SLA timeframes regardless of when the fault occurs.",
  },
  {
    scenario: "Policy Maintenance Over Time",
    without: "Without a dedicated owner for policy reviews, access rules and guest configurations can go unchanged for long periods even as staff, devices, and usage patterns shift.",
    with: "Access policies, guest configurations, and segmentation rules are actively reviewed and updated by GS IT as the business and its network usage evolve.",
  },
  {
    scenario: "Cost Visibility",
    without: "Costs include engineer salaries, hardware replacement, downtime losses, and support",
    with: "A single predictable monthly fee covers monitoring, support, and management with no unplanned billing.",
  },
  {
    scenario: "Visibility and Reporting",
    without: "Visibility exists only if someone internally builds and maintains a monitoring setup. In practice, most self-managed networks have no structured reporting in place.",
    with: "GS IT provides regular network health reports, usage analytics, and performance summaries so the business always has a clear picture of its wireless estate.",
  },
  {
    scenario: "Network Expertise Required",
    without: "Requires a qualified network engineer in-house, which is a significant and ongoing salary commitment in Dubai.",
    with: "None on the client side. GS IT's certified engineers handle all technical decisions and ongoing tuning.",
  },
],
cta:{
  title: "Have an existing wireless setup that needs professional oversight?  ",
  description:"Our team can assess your current network, identify gaps, and recommend the right managed approach. ",
  button:'Connect with us',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] mb-3 text-primary',
   classdesc:"max-w-[66ch]"
}
 
};
 
 
  export const partnersData = {
  tag: " Our Partners",
  heading: "Our Technology Partners",
  highlightLast: 1, 
   };
  export const logoData= [
  { src: "/assets/images/managed-wifi/partner1.svg", alt: "Partner 1" },
  { src: "/assets/images/managed-wifi/partner2.svg", alt: "Partner 2" },
  { src: "/assets/images/managed-wifi/partner3.svg", alt: "Partner 3" },
  { src: "/assets/images/managed-wifi/partner4.svg", alt: "Partner 4" },
  { src: "/assets/images/managed-wifi/partner5.svg", alt: "Partner 5" },
  { src: "/assets/images/managed-wifi/partner6.svg", alt: "Partner 6" },
  { src: "/assets/images/managed-wifi/partner7.svg", alt: "Partner 7" },
  { src: "/assets/images/managed-wifi/partner8.svg", alt: "Partner 8" }, 
 
]  ; 
 
export const recomData = {
    backgroundImage: "/assets/images/managed-wifi/ctabanner.jpeg", 
  mobbanner: "/assets/images/managed-wifi/ctabanner.jpeg", 
  tag: "",
  heading: "Is Your Business Network Managed or \n Just Connected?",
  highlightLast: 9,
  description:"GS IT's managed Wi-Fi services give you a fully operated wireless network with defined support and continuous monitoring. Tell us about your space and we will scope the right approach.",
  cta: "Get a free <uppercase>W</uppercase>i-<uppercase>F</uppercase>i consultation ",
 }; 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Managed \n Wi-Fi Services  ",
  highlightLast:7,
faqData: [
  {
    question: "How do managed Wi-Fi services in Dubai work for businesses?",
    answer: "With managed Wi-Fi services in Dubai, a certified managed Wi-Fi provider takes over your entire wireless network. They handle the complete design, deployment, security, and ongoing monitoring, so your internal team never has to. For businesses, this means fewer IT escalations, no surprise infrastructure costs, and a managed wireless network that stays optimized without internal intervention. Connectivity becomes a reliable business utility rather than an ongoing IT responsibility.",
  },
  {
    question: "What is Wi-Fi as a Service and how is it different from managed Wi-Fi?",
    answer: "With Wi-Fi as a Service, you do not buy equipment. You rent the hardware and software under a monthly subscription, and the provider handles everything, including managed wireless WAN setups. With managed Wi-Fi services, your business owns the equipment, but you hire one of the managed Wi-Fi service providers to install, secure, and look after it for you.",
  },
  {
    question: "How secure are managed wireless network solutions?",
    answer: "Security in managed WLAN services is highly reliable. We set up separate networks to keep guest traffic away from sensitive company files. Our cloud managed Wi-Fi tools track the network in real time, automatically flagging suspicious devices and stopping cyber threats before they can cause any disruption to your business.",
  },
  {
    question: "Does GS IT manage both indoor and outdoor Wi-Fi coverage in Dubai?",
    answer: "Yes. GS IT designs managed Wi-Fi solutions in Dubai for both indoor and outdoor business spaces. We map out your layout to enable a strong, seamless signal across offices, courtyards, and open areas. Our team uses cloud tools to spot weak signal zones and fix them remotely before your employees or guests even notice.",
  },
  {
    question: "Can the network support many users and devices simultaneously?",
    answer: "Yes. GS IT builds managed wireless network solutions using advanced Wi-Fi 6 and Wi-Fi 7 hardware. We plan for your maximum capacity and use smart load balancing to prevent slow speeds. This ensures hundreds of laptops, phones, and office devices stay connected smoothly at the same time without any drop in performance.",
  },
  {
    question: "What does the cloud managed Wi-Fi dashboard let me do?",
    answer: "The dashboard gives your team a clear view of your entire network, including user traffic and bandwidth use across all office locations. As your managed Wi-Fi provider, GS IT handles all the complex backend updates and security settings; your team only needs to check the dashboard for a simple overview.",
  },
  {
    question: "Is the managed Wi-Fi service scalable as my business grows?",
    answer: "A managed Wi-Fi solution is built to grow alongside your business. If you add new employees, open another floor, or expand to a new branch, we can add new access points remotely without disrupting your daily work. Managed wireless services make it easy to keep your internet fast and uniform across multiple business locations.",
  },
  {
    question: "Which industries benefit most from managed Wi-Fi?",
    answer: "Any business with high connectivity demands benefits from managed wireless services. Hotels need seamless guest internet, healthcare centers require secure mobile access, and retail shops depend on active wireless POS systems. Offices and co-working spaces also rely on managed Wi-Fi companies like GS IT to keep large teams online without interruptions.",
  },
  {
    question: "What happens when the network goes down or runs slowly?",
    answer: "With a standard setup, your team wastes hours troubleshooting drops and slow speeds. With managed wireless services, our team usually spots and fixes connectivity issues before you even notice them. We monitor your network 24/7 to resolve bugs remotely, ensuring your business maintains a fast, stable, and best managed Wi-Fi system without interrupting your daily operations.",
  },
  {
    question: "How does GS IT guarantee our business internet stay reliable?",
    answer: "We back your network with continuous 24/7 monitoring and strict, SLA-backed response times. Our team handles everything from automated security patches to emergency onsite fixes without your staff needing to ask.",
  },
]
};