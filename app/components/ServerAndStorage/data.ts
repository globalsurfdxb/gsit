 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Server and Storage Solutions · Dubai, UAE · Since 2013",
  heading: "Secure Server & Storage \n Infrastructure in the UAE",
  highlightLast: 4,
  description: "The right server and storage solutions for your business, assessed, delivered, and supported on-site by certified engineers across the UAE.",
  backgroundImage: "/assets/images/server-and-storage/banner.jpeg", 
  mobbanner: "/assets/images/server-and-storage/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+`, desc:"Years in UAE IT Infrastructure"},
   { value:"Certified", desc:"Server & Storage Expertise"},
   { value:'UAE', desc:"Compliant Infrastructure"},
   { value:"AMC", desc:"Post-Deployment Support"}
  ],
  buttons: [
    {
      text: "Book a free audit",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,
    {
      text: "Connect with <uppercase>W</uppercase>i-<uppercase>F</uppercase>i experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};   
export const overviewData = {
    backgroundImage: "/assets/images/server-and-storage/main.jpeg", 
  mobbanner: "/assets/images/server-and-storage/main.jpeg", 
  tag: "Overview",
  heading: "Reliable Data Foundations \n for Modern Businesses ",
  highlightLast: 3,
  description: [`Whether you need a dedicated server installation for core applications or enterprise server storage for a multi-site environment, GS IT provides both with end-to-end commitment.`,
   `From small business server solutions to dedicated server services for larger organizations, our certified engineers handle the full engagement on-site for businesses across the UAE. We assess your workload requirements and size the right hardware before handling installation, network integration, and ongoing support.`]
 
};  
export const servicesData = {
  tag: "WHAT WE OFFER ",
  heading: "Server & Storage \n Setups Built to Your Needs",
  highlightLast: 5,
  subhead: "Minimize your hardware overhead with server services and storage engagements designed around actual operational demands.",
  servicesData: [
  {
    icon: "HardDriveDownload",
    title: "Server Procurement & Installation",
    description: "Source hardware via authorized channels, handling full OS setups on-site.",
    href: "#",
    featured: true,
  },
  {
    icon: "/assets/images/icons/serverplus.svg",
    title: "Server Migration",
    description: "Your active workloads move to upgraded infrastructure with minimum downtime.",
    href: "#",
    featured: true,
  },
  {
    icon: "View",
    title: "Virtualization Setup",
    description: "Consolidate hardware by configuring multiple isolated workloads on one system.",
    href: "#",
    featured: true,
  },
  {
    icon: "Users",
    title: "User Access & Server Security",
    description: "Configure domain controllers and user permissions to protect internal files.",
    href: "#",
    featured: true,
  },
  {
    icon: "Layers",
    title: "Backup & Recovery Configuration",
    description: "Automated schedules protect your files, backed by verified restore protocols.",
    href: "#",
    featured: true,
  },
  {
    icon: "Cast",
    title: "Server Failover Solutions",
    description: "High-availability setups keep operations online if a main unit drops offline.",
    href: "#",
    featured: true,
  },
],
cta:{
  title: "Ongoing AMC Support  ",
  description:"Annual support agreement covering routine health checks and resolutions.",
  button:'Connect with experts',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] mb-3 text-primary',
   classdesc:"max-w-[66ch]"
}
}; 
 
 
export const makingswichData = {
  tag: "ServervsServerStorage ",
  heading: "Understanding \n Server & Storage ",
  highlightLast: 3,  
  subhead: "Most businesses need both servers and storage to work together. Understanding what each one does makes it easier to plan the right solution.",
  headers: {
  scenario: "Factor",
  without: "Server Solutions",
  with: "Server Storage Solutions",
},
table: [
  {
    scenario: "Primary Function",
    without: "Processes requests and runs applications for users and devices on your network",
    with: "Holds and organizes data so applications and users can access it when needed",
  },
  {
    scenario: "What It Contains",
    without: "CPU, RAM, and local drives optimized for compute performance",
    with: "High-capacity drives arranged for safe and fast data read and write operations",
  },
  {
    scenario: "Role in the Business",
    without: "Runs your ERP, email, databases, virtual machines, and internal services",
    with: "Stores files, backups, databases, and structured data your applications depend on",
  },
  {
    scenario: "Failure Impact",
    without: "Applications and services go down. Users cannot access systems or work",
    with: "Data becomes inaccessible. Applications relying on that data also stop functioning",
  },
  {
    scenario: "Scalability",
    without: "Scale by adding server nodes or upgrading CPU and memory per unit",
    with: "Scale by adding drives or expansion shelves to an existing storage system",
  },
],
};

export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Our Technology Partners ",
  highlightLast: 1, 
}
  export const partnerslogoData= [
  { src: "/assets/images/server-and-storage/partner1.svg", alt: "" },
  { src: "/assets/images/server-and-storage/partner2.svg", alt: "" },
  { src: "/assets/images/server-and-storage/partner3.svg", alt: "" },
  { src: "/assets/images/server-and-storage/partner4.svg", alt: "" },
  { src: "/assets/images/server-and-storage/partner5.svg", alt: "" },
  { src: "/assets/images/server-and-storage/partner6.svg", alt: "" }, 
  { src: "/assets/images/server-and-storage/partner7.svg", alt: "" }, 
  { src: "/assets/images/server-and-storage/partner8.svg", alt: "" }, 
  { src: "/assets/images/server-and-storage/partner9.svg", alt: "" }, 
]  ; 
export const  longtermValueData = {
  tag: "Business Benefits ",
  heading: "What Your \n Server & Storage Setup Delivers",
  highlightLast: 5, 
  image: "/assets/images/server-and-storage/main.jpeg", 
  subhead: "Server and storage infrastructure designed well keeps applications running and data accessible when it matters.",
  
 cards: [
  {
    id: "uninterrupted-applications",
    titleLine1: "Uninterrupted",
    titleLine2: "Applications",
    description: "Your software stays consistently fast even during sudden corporate peak usage spikes.",
  },
  {
    id: "fast-data-recovery",
    titleLine1: "Fast",
    titleLine2: "Data Recovery",
    description: "Pull heavy multimedia files at max LAN speeds without draining external internet lines.",
  },
  {
    id: "complete-data-control",
    titleLine1: "Complete",
    titleLine2: "Data Control",
    description: "Meet strict local data compliance laws by retaining sensitive files entirely on-premises.",
  },
  {
    id: "scalable-business-storage",
    titleLine1: "Scalable",
    titleLine2: "Business Storage",
    description: "Pop extra drives easily into your current hardware pool whenever company files stack up.",
  },
  {
    id: "unified-infrastructure",
    titleLine1: "One",
    titleLine2: "Unified Infrastructure",
    description: "Run files, business apps, and backups together on a single shared setup without lagging.",
  },
  {
    id: "lower-it-costs",
    titleLine1: "Lower",
    titleLine2: "Long-Term IT Costs",
    description: "Proactive AMC coverage blocks costly emergency repair fees and early device upgrades.",
  },
],
};
 export const serverChoicesData = {
  tag: "Data Management",
  heading: "Custom Server \n Storage Solutions for Business ",
  highlightLast: 4 ,
  subhead:
    "The technologies that define every installation of Wi-Fi solution in Dubai.",
 items: [
  {
    type: "image",
    image: "/assets/images/server-and-storage/data1.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "Network",
    label: "Small Offices Sharing Local Files",
    title: "Network-Attached Storage (NAS)",
    description: "Let multiple office devices open shared company files instantly.",
  },
  {
    type: "card",
    icon: "Database",
    label: "Large Enterprises Prioritizing Speed",
    title: "Storage Area Network (SAN)",
    description: "Give multiple heavy servers high-speed access to data pools. ",
  },
  {
    type: "card",
    icon: "PlugZap",
    label: "Single Servers Handling Isolated Workloads",
    title: "Direct-Attached Storage (DAS)",
    description: "Plug storage straight into one machine for fast, simple access.",
  },
  {
    type: "card",
    icon: "FolderLock",
    label: "Blending Local Speed with Cloud Space",
    title: "Hybrid Cloud Storage",
    description: "Keep local file access fast while securing copies in the cloud.",
  },
  {
    type: "image",
    image: "/assets/images/server-and-storage/data2.jpeg",
    title: "",
  },
],
};
 
 

export const recomData = {
    backgroundImage: "/assets/images/server-and-storage/ctabanner.jpeg", 
  mobbanner: "/assets/images/server-and-storage/ctabanner.jpeg", 
  tag: "",
  heading: "Not sure what server or storage solution \n your business needs?",
    highlightLast: 11,
  description: "Tell us about your environment and what you need your servers and storage to do. We'll get back with a server and storage solution sized to your actual workload.",

  cta: "Book a free Audit", 
}; 
export const grayboxData = {
 tag: "Why Choose Us",
  heading: "One Partner for Servers, \n Storage & Support ",
  highlightLast: 3,
  subhead:
    "Over thirteen years of on-ground technology delivery with specialized expertise. Here is what separates GS IT from the rest of server storage companies in the UAE.",
 items: [
  {
    type: "01",
    image: "",
    icon: "",
    title: "Customized Server & Storage Solutions",
    description: "We assess your actual software demands first, buying only the exact capacity your apps need.",
    href: "",
  },
  {
    type: "02",
    image: "",
    icon: "",
    title: "Vendor-Authorized Technologies",
    description: "Every component comes from licensed UAE distributors backed by manufacturer warranties.",
    href: "",
  },
  {
    type: "03",
    image: "",
    icon: "",
    title: "End-to-End Server Installation",
    description: "We handle procurement, physical rack installation, OS configuration, integration, and user access.",
    href: "",
  },
  {
    type: "04",
    image: "",
    icon: "",
    title: "Certified Engineering Team",
    description: "Brand-certified specialists handle your infrastructure build rather than general technicians.",
    href: "",
  },
  {
    type: "05",
    image: "",
    icon: "",
    title: "Post-Installation Support",
    description: "Ongoing AMC ensures firmware updates, hardware swaps, and system optimizations.",
    href: "",
  },
  {
    type: "06",
    image: "",
    icon: "",
    title: "UAE Data Residency Compliance",
    description: "Easily meet strict UAE Federal PDPL rules by keeping records safely inside local borders.",
    href: "",
  },
],
}; 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Server & \n Storage Solutions ",
  highlightLast:8,
 faqData: [
  {
    question: "What is the difference between a server and a storage system?",
    answer: "A server processes requests and runs your applications while a storage system holds and organizes the data those applications depend on. Whether you need to upgrade your data capacity or deploy new computing power, GS IT delivers both server and storage systems as independent or fully integrated solutions for businesses across the UAE.",
  },
  {
    question: "What server installation services does GS IT provide?",
    answer: "Our server installation services cover hardware procurement through authorized UAE distributors as well as physical rack installation, OS configuration, network integration, and user provisioning. The system is handed over fully operational with documentation provided to your team.",
  },
  {
    question: "Can GS IT help choose the right server storage solutions?",
    answer: "Yes. We assess data volumes and access patterns before recommending NAS, SAN, DAS, or a hybrid configuration. The recommendation comes from your actual requirement rather than a product catalogue, making sure the server data storage solution fits from the start.",
  },
  {
    question: "Do you offer small business server solutions?",
    answer: "Yes. Small business server solutions are a significant part of what we do. Tower servers and entry-level NAS systems are sized and configured for smaller environments, so you are not paying for enterprise-grade hardware your workload does not need.",
  },
  {
    question: "How do I determine how much server and storage capacity I need?",
    answer: "We run a workload assessment covering application demands and projected data growth before sizing anything. The output is a hardware recommendation with headroom built in which makes it easier for future expansions.",
  },
  {
    question: "Can existing servers or storage be upgraded without downtime?",
    answer: "Most upgrades are planned to avoid interrupting live operations. Where brief maintenance windows are required, we coordinate timing with your team before any work begins so the impact on your business is defined and agreed in advance.",
  },
  {
    question: "Do you provide dedicated server services for larger organizations?",
    answer: "Yes. Our dedicated server services cover enterprise environments where specific workloads require isolated hardware. This includes dedicated server solutions for ERP systems, database hosting, and high-availability applications where resource contention is not acceptable.",
  },
  {
    question: "Does GS IT provide server failover solutions?",
    answer: "Yes. Server failover solutions are part of our delivery for businesses with high-availability requirements. We configure redundant setups, so that critical systems stay online when a primary server encounters a fault, reducing unplanned downtime to a minimum.",
  },
  {
    question: "Can on-premises storage be connected to a cloud backup target?",
    answer: "Yes. We configure hybrid setups that link your storage system to a cloud destination, running backups automatically. Your business gets an off-site copy of critical data without separate backup software or manual intervention from your IT team.",
  },
  {
    question: "What industries does GS IT serve with server and storage solutions in the UAE?",
    answer: "We serve education, hospitality, finance and healthcare as well as commercial, logistics and public sector across the UAE. Our business server solutions are scoped to each industry's specific data volumes and uptime requirements rather than a generic approach.",
  },
],
};

 

 

export const featuresData = {
      
  tag: "Server Choices",
  heading: "Know Your \n Server Options", 
  highlightLast: 2,
  subhead:
    "Finding the right server shouldn't be stressful. We build infrastructure customized directly to your workload.", 
 tabData: [
    {
      id: "retail",
      label: "On-Premises Deployment",
      items: [
        { id: "1", label:"Small Offices with No Dedicated Server Room", title: "Tower", 
          description: "Cut upfront hardware costs and skip expensive cooling hardware.",
               image: "/assets/images/server-and-storage/choice1.jpeg", },
        { id: "2", label:"Growing Businesses with Built-In IT Racks", title: "Rack", 
          description: "Stack systems centrally to save your workspace as teams expand.",
               image: "/assets/images/server-and-storage/choice2.jpeg", },
        { id: "3", label:"High-Density Enterprise Operations", title: "Blade", 
          description: "Run hundreds of staff profiles smoothly from one central system.",
               image: "/assets/images/server-and-storage/choice3.jpeg", },
      ],
    },
    {
      id: "industrial",
      label: "Growing Businesses with Built-In IT Racks",
      items: [
        { id: "1", label:"Startups with No On-Premises Hardware", title: "Public Cloud",
           description: "Pay only for what you lease online, avoiding hardware maintenance.",     
           image: "/assets/images/server-and-storage/choice6.jpeg",}, 
        { id: "2 ", label:"Regulated Firms Requiring Isolated Networks", title: "Private Cloud",
           description: "Gain ultimate control over sensitive data assets and compliance.",     
           image: "/assets/images/server-and-storage/choice4.jpeg",},
        { id: "3 ", label:"Complex Infrastructure with Local & Remote Assets", title: "Hybrid Cloud",
           description: "Balance cloud versatility with local security for top performance.",     
           image: "/assets/images/server-and-storage/choice5.jpeg",},
      ],
    },
  ],
  };