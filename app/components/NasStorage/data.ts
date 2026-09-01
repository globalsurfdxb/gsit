 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "NAS Storage Solutions · Dubai, UAE · Since 2013",
  heading: "High-Speed, Secure \n Data Access Via NAS in Dubai ",
  highlightLast: 6,
  description: "Every NAS storage installation GS IT handle is scoped on site, configured to your workload, and backed by on-demand dedicated support. ",
  backgroundImage: "/assets/images/nas-storage/banner.jpeg", 
  mobbanner: "/assets/images/nas-storage/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+`, desc:"Years deploying tech in \n the UAE"},
   { value:"1,500+", desc:"Clients from SMEs to \n enterprises"},
   { value:'24/7', desc:"Proactive NAS health \n monitoring"},
   { value:"Multi-Brand ", desc:"Certified NAS storage \n experts "}
  ],
  buttons: [
    {
      text: "See NAS storage solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,
    {
      text: "Get your <uppercase>NAS</uppercase> consultation",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};   
export const overviewData = {
    backgroundImage: "/assets/images/nas-storage/main.jpeg", 
  mobbanner: "/assets/images/nas-storage/main.jpeg", 
  tag: "Overview",
  heading: "Enterprise NAS Solutions for \n Critical Data Storage ",
  highlightLast: 3,
  description: [`As NAS storage providers in Dubai, GS IT supplies and deploys NAS (Network Attached Storage) solutions for businesses that need a reliable central location to store, access, and protect their data. We size and configure every system to match the actual usage requirements, providing NAS solutions for small businesses to enterprises.`,
   `From RAID configuration and network integration to user access controls and scheduled backups, our team handles every layer of the NAS storage installation and stays available for support once you are live. `]
 
};  
export const servicesData = {
  tag: "Our NAS Storage Solutions ",
  heading: "Storage Systems \n We Supply & Deploy",
  highlightLast: 4,
  subhead: "From a single-site shared drive to a multi-site replicated storage environment. ",
 servicesData: [
  {
    icon: "Building2",
    title: "Enterprise NAS",
    description: "Heavy-duty storage systems providing massive capacity and fail-safes for big corporate teams.",
    href: "#",
    featured: true,
  },
  {
    icon: "Building",
    title: "SMB & Midmarket NAS",
    description: "Small businesses use these user-friendly boxes for easy file sharing without hiring an IT expert.",
    href: "#",
    featured: true,
  },
  {
    icon: "Wifi",
    title: "All-Flash NAS",
    description: "Powered entirely by SSDs, this setup drives ultra-low latency for VMs and databases.",
    href: "#",
    featured: true,
  },
  {
    icon: "Cloudy",
    title: "Cloud NAS (Hybrid)",
    description: "Melding swift local hardware access with automated off-site cloud backups for disaster safety.",
    href: "#",
    featured: true,
  },
  {
    icon: "Server",
    title: "NAS Backup Solutions",
    description: "Scheduled snapshot tools regularly protect your workstations, servers, and cloud services.",
    href: "#",
    featured: true,
  },
  {
    icon: "SquareSquare",
    title: "NAS for Virtualization",
    description: "Centralizing VM storage via iSCSI or NFS volumes instead of relying on local host drives.",
    href: "#",
    featured: true,
  },
  {
    icon: "ArchiveRestore",
    title: "Data Archiving Storage",
    description: "Retain searchable compliance records long-term without cluttering daily production systems.",
    href: "#",
    featured: true,
  },
  {
    icon: "MonitorPlay",
    title: "Surveillance NAS",
    description: "Multiple incoming security video streams are handled smoothly without dropped frames.",
    href: "#",
    featured: true,
  },
  {
    icon: "ShieldCheck",
    title: "Managed NAS Support",
    description: "Proactive monitoring, firmware maintenance, and on-site assistance via an expert AMC plan.",
    href: "#",
    featured: true,
  },
],
}; 
 
 
export const makingswichData = {
  tag: "STORAGE COMPARISON  ",
  heading: "NAS Solution vs Cloud Storage: \n What Differs  ",
  highlightLast: 2,  
  subhead: "Understanding when NAS is the right fit and when a hybrid approach makes more sense. ",
  headers: {
  scenario: "Factor",
  without: "Cloud Storage Only",
  with: "On-Premises NAS",
},
table: [
  {
    scenario: "Primary Use",
    without: "Off-site storage and remote access via internet",
    with: "File sharing across users and departments",
  },
  {
    scenario: "Setup Complexity",
    without: "Low. No on-premises hardware required",
    with: "Low to moderate. Connects directly to existing LAN",
  },
  {
    scenario: "Ongoing Cost",
    without: "Monthly subscription that grows with data volume. Egress fees apply on most platforms",
    with: "Hardware is a one-time capital cost. Ongoing costs are power and AMC support",
  },
  {
    scenario: "Scalability",
    without: "Virtually unlimited. Scale immediately with no hardware lead time",
    with: "Add drives or expansion shelves. Physical limits apply and require planning ahead",
  },
  {
    scenario: "Offline Access",
    without: "Not accessible without an active internet connection",
    with: "Fully accessible on your local network even if the internet is down",
  },
  {
    scenario: "Performance",
    without: "Dependent on internet bandwidth and latency",
    with: "Good for file access. All-SSD NAS handles high throughput",
  },
  {
    scenario: "Data Sovereignty",
    without: "Data resides in provider data centers. Region varies by service and plan",
    with: "Data stays within your premises and your jurisdiction. Full control over where it is physically stored",
  },
  {
    scenario: "Best For",
    without: "Distributed teams requiring remote access, off-site backup copies, and long-term archiving of rarely retrieved data",
    with: "SMBs and enterprise teams requiring fast, shared access to high-volume data for their daily workflows",
  },
],
};

export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Our Technology Partners ",
  highlightLast: 1, 
}
  export const partnerslogoData= [
  { src: "/assets/images/nas-storage/partner1.svg", alt: "" },
  { src: "/assets/images/nas-storage/partner2.svg", alt: "" },
  { src: "/assets/images/nas-storage/partner3.svg", alt: "" },
  { src: "/assets/images/nas-storage/partner4.svg", alt: "" },
  { src: "/assets/images/nas-storage/partner5.svg", alt: "" },
  { src: "/assets/images/nas-storage/partner6.svg", alt: "" },  
]  ; 
 
 export const RaidLevelsData = {
  tag: "Storage Architecture",
  heading: "Choosing the Right \n RAID Level for Your Business",
  highlightLast: 5,
  subhead:
    "RAID configuration determines how your NAS balances storage capacity against data redundancy. GS IT selects the right level for each deployment.",
  items: [
    {
      badge: "RAID 0",
      title: "Maximum Velocity Storage",
      description: "Splits files across drives for raw speed, but a single failure wipes everything.",
    },
    {
      badge: "RAID 1",
      title: "Twin-Drive Safety Copy",
      description: "Every file mirrors onto a secondary drive, cutting your total capacity in half.",
    },
    {
      badge: "RAID 5",
      title: "Balanced Capacity & Protection",
      description: "Distributes safety parity data, so your system easily survives one dead drive.",
    },
    {
      badge: "RAID 6",
      title: "Double-Failure Shield",
      description: "Safely withstands two simultaneous drive crashes, ideal for large data pools.",
    },
  ],
};
 
 

export const recomData = {
    backgroundImage: "/assets/images/nas-storage/ctabanner.jpeg", 
  mobbanner: "/assets/images/nas-storage/ctabanner.jpeg", 
  tag: "",
  heading: "Centralize enterprise files securely with \n NAS in Dubai.",
    highlightLast: 9,
  description: "Connect with us to assess your current environment and recommend a storage configuration that fits your team's size and workload.",

  cta: "Book a free storage assessment", 
}; 
export const whychooseData = {
 tag: "Why Choose Us",
  heading: "The NAS Storage \n Expertise Your Business Needs",
  highlightLast: 4,
  subhead:`Over ${portfolioData.years}+ years of expert NAS storage installation and proactive maintenance across Dubai's IT infrastructure.`,
items: [
  {
    type: "01",
    image: "",
    icon: "",
    title: "Authorized UAE \n Procurement",
    description: "Every hardware comes from official distribution channels backed by full vendor warranties.",
    href: "",
  },
  {
    type: "02",
    image: "",
    icon: "",
    title: "Certified NAS Experts",
    description: "Our certified team uses deep, brand-specific training to optimize and protect your data.",
    href: "",
  },
  {
    type: "03",
    image: "",
    icon: "",
    title: "Customized \n Performance Profiles",
    description: "RAID levels and disk types are customized around your team's real operational workloads.",
    href: "",
  },
  {
    type: "04",
    image: "",
    icon: "",
    title: "Complete As-Built \n Handovers",
    description: "Your IT staff receives blueprints mapping out IP paths, permissions, and backup tasks.",
    href: "",
  },
  {
    type: "05",
    image: "",
    icon: "",
    title: "Simplified Storage \n Control",
    description: "Manage arrays effortlessly via streamlined web dashboards and companion mobile apps.",
    href: "",
  },
  {
    type: "06",
    image: "",
    icon: "",
    title: "Security-First NAS \n Deployment",
    description: "Data encryption, firewalls, and strict user access privileges are integrated from the start.",
    href: "",
  },
],
}; 
export const grayboxData = {
 tag: "What NAS Delivers",
  heading: "Why Businesses \n Deploy NAS Solutions",
  highlightLast: 3,
  subhead:`Discover why businesses use dedicated NAS in Dubai alongside cloud storage to replace scattered, slow local drives.`,
items: [
  {
    type: "01",
    image: "",
    icon: "",
    title: "Unified \n Business Storage",
    description: "Files stop living across scattered desktops; one single hub keeps everyone current.",
    href: "",
  },
  {
    type: "02",
    image: "",
    icon: "",
    title: "Zero \n Recurring Fees",
    description: "Skip the monthly per-gigabyte bill since you own the physical drive capacity forever.",
    href: "",
  }, 
  {
    type: "03",
    image: "",
    icon: "",
    title: "On-Premises \n Data Privacy",
    description: "Keep sensitive files inside your building to meet strict compliance obligations.",
    href: "",
  },
  {
    type: "04",
    image: "",
    icon: "",
    title: "Scalable \n Storage Space",
    description: "Avoid full unit replacements by simply inserting new drives as your data expands.",
    href: "",
  },
  {
    type: "05",
    image: "",
    icon: "",
    title: "Automated Backup Protection",
    description: "Set schedules at deployment so system snapshots run completely hands-free.",
    href: "",
  },
  {
    type: "06",
    image: "",
    icon: "",
    title: "High-Speed \n Local Access",
    description: "LAN setups outpace cloud retrieval speeds, especially when transfer volumes surge.",
    href: "",
  },
],
}; 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on NAS \n Storage Solutions ",
  highlightLast:7,
 faqData: [
  {
    question: "What are NAS storage solutions and how is it different from a regular external hard drive?",
    answer: "A NAS device is a dedicated storage server that connects to your business network and is accessible to multiple users simultaneously. An external hard drive connects only to a single computer via USB while NAS installation enables shared, always-on access to data for everyone on the network without tying storage to one machine.",
  },
  {
    question: "Is NAS storage secure enough for sensitive business data?",
    answer: "Enterprise NAS storage solutions support drive-level encryption, folder-level access permissions, two-factor authentication, and network-level isolation from guest traffic. GS IT, as experienced NAS storage providers configure these security layers during deployment so access to sensitive data is restricted to authorized users effectively.",
  },
  {
    question: "What happens to my data if a drive inside the NAS fails?",
    answer: "If the NAS is configured with a redundant RAID level such as RAID 5 or RAID 6, a failed drive does not cause data loss. The system continues operating while the failed drive is replaced. Data is rebuilt automatically onto the new drive once it is installed.",
  },
  {
    question: "Can a NAS device be accessed by staff working remotely?",
    answer: "Yes. GS IT configures secure remote access to the NAS, enabling only authorized users to reach files from outside the office. This is set up with appropriate authentication controls and ensure remote access does not create an open entry point to your internal network.",
  },
  {
    question: "What is the difference between NAS and SAN storage?",
    answer: "NAS solutions provide file-based storage accessed over a standard network connection and is suitable for shared file access across a team. SAN provides block-level storage over a dedicated high-speed fabric and is designed for databases and applications that require very high IOPS. NAS is the more practical and cost-effective choice for most UAE business environments.",
  },
  {
    question: "Can NAS be used as a backup target for servers and workstations?",
    answer: "Yes. NAS is widely used as a local backup destination for workstations, physical servers, and virtual machines. GS IT delivers NAS storage backup solutions, configuring automated backup schedules to run backups without any manual intervention. Our team carefully verifies that each NAS storage backup solution works before the project is handed over.",
  },
  {
    question: "How long does a NAS installation take for a small to mid-size business?",
    answer: "A straightforward single-site NAS installation typically takes one to three business days from hardware arrival to go-live. This covers physical installation, RAID setup, network integration, user provisioning, and backup configuration. GS IT provides a project timeline after the initial assessment, so you know the schedule in advance.",
  },
  {
    question: "Can my existing NAS be upgraded rather than replaced?",
    answer: "In many cases, existing NAS units can be expanded by adding larger drives or connecting an expansion unit rather than replacing the system entirely. GS IT assesses the current hardware during the scoping phase and recommends an upgrade path if the existing system is capable of meeting the target capacity and performance requirements.",
  },
  {
    question: "Does GS IT offer support after the NAS system is installed?",
    answer: "Yes. GS IT provides annual maintenance contracts for NAS in Dubai and the UAE covering firmware updates, access control changes, capacity reviews, and on-site fault response. Support is available from engineers based in Dubai who can attend sites when remote troubleshooting is not sufficient to resolve an issue.",
  },
  {
    question: "Do you provide NAS solutions for home use or only for businesses?",
    answer: "GS IT provides NAS solutions for home, villas, and residential buildings across the UAE. Home NAS setups focus on media storage and private file access across household devices. NAS solutions for enterprise go further with multi-user access controls and RAID redundancy built around a business network. Both are available.",
  },
],
};

 export const howweworkData = {
  tag: "How We Work",
  heading: "Our End-to-End \n NAS Deployment Process",
  highlightLast: 3,
  subhead:
    "Our NAS storage installation is clearly structured so businesses know what to expect at every stage before work begins on site.",
  data: [
  {
    number: "01",
    title: "Requirements Assessment",
    description: "We audit user counts, access patterns, and compliance rules.",
  },
  {
    number: "02",
    title: "Storage Design & Sizing",
    description: "Architects map out drive capacity, network links, and RAID levels.",
  },
  {
    number: "03",
    title: "Hardware Procurement",
    description: "Local UAE distributors supply the chosen hardware on tight schedules.",
  },
  {
    number: "04",
    title: "Installation & Configuration",
    description: "Engineers handle everything from physical deployment to backup tasks.",
  },
  {
    number: "05", 
    title: "Handover & Support",
    description: "Receive complete documentation alongside proactive maintenance plans.",
  }, 
],
  };

 

 