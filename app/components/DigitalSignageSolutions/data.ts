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
  highlightLast: 3,
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
 faqData: [
  {
    question: "What is a digital signage solution?",
    answer: "A digital signage solution is a network of digital screens, media players, and content management software that allows businesses to display dynamic visual content in real time. It replaces static posters and printed materials with digital signage displays that can be updated instantly from a central system. A complete digital signage system includes display hardware such as LED or LCD screens, a media player or digital signage screen controller, network connectivity, and a CMS platform for scheduling and managing content across single or multiple locations.",
  },
  {
    question: "Why is digital signage display important for businesses?",
    answer: "Digital signage for business is important because it communicates more effectively than printed materials. Dynamic content on digital signage screens captures attention faster, allows real-time updates without printing costs, and can be tailored to specific audiences, times of day, or locations. Studies show that digital signs for businesses increase brand recall, improve customer experience, and contribute directly to revenue growth by promoting offers at the right moment and place.",
  },
  {
    question: "Does GS IT offer commercial digital signage displays?",
    answer: "Yes. GS IT, as one of the established digital signage companies in Dubai, offers commercial-grade digital signage display solutions for businesses of all sizes. Our digital signage services cover everything from a single digital advertising screen to enterprise-wide deployments across multiple sites. We supply, install, and support LED digital signage screens, LCD digital signage displays, digital kiosks, and interactive digital signage solutions across retail, corporate, hospitality, healthcare, education, and transportation sectors in the UAE.",
  },
  {
    question: "What factors to be considered when choosing a digital signage solution?",
    answer: "Key factors include viewing environment (indoor versus outdoor), screen size and resolution, content type (static, video, interactive), network connectivity requirements, ease of content management, scalability, and total cost of ownership. For outdoor digital signage displays, brightness ratings, IP-rated protection, and operating temperature range are critical. For interactive digital signage solutions, touch technology, durability, and software compatibility should be evaluated. GS IT helps assess all these factors during the consultation phase to recommend the most suitable digital signage system for your specific needs.",
  },
  {
    question: "How do environmental factors like sunlight and temperature affect screen performance?",
    answer: "Environmental conditions play a critical role in digital signage performance. Direct sunlight can wash out colors and reduce readability, while extreme heat or cold can affect response and component longevity. Outdoor displays must also withstand rain, dust, and humidity. Proper selection of display technology ensures consistent visibility, durability, and audience impact regardless of environmental challenges.",
  },
  {
    question: "What are the primary uses of digital signage screens?",
    answer: "Digital signage screens are used for wayfinding, advertising, menu boards, internal communication, queue management, emergency notifications, and customer information. In retail environments, digital signage displays drive product awareness and promotions. In corporate offices, they share live data, KPIs, and company news. In healthcare, they guide patients and share important information. In transportation hubs, they deliver real-time schedules and alerts. Interactive digital signage solutions extend these uses further with self-service, product exploration, and customer engagement applications.",
  },
  {
    question: "How user-friendly is the content management system (CMS)?",
    answer: "The CMS is built to be straightforward and easy to use, even for teams without technical backgrounds. Users can create and update content using a simple drag-and-drop interface and ready-made templates. Scheduling tools allow messages to run automatically at set times, saving time and manual work. Role-based access controls also make it easier to manage responsibilities across teams while keeping content organized and consistent.",
  },
  {
    question: "Can GS IT integrate signage with our existing marketing systems?",
    answer: "Yes, digital signage can be integrated with existing marketing and business systems to keep communication aligned across platforms. Using standard APIs, the signage can pull data from tools such as marketing platforms, social media feeds, or internal business software. This helps ensure that updates happen automatically, and messaging stays consistent across locations. Before implementation, technical checks are usually carried out to confirm compatibility and smooth data flow.",
  },
  {
    question: "What security features are included in the digital signage system?",
    answer: "Security is built into both the software and hardware components of digital signage systems. Data is typically protected through encrypted transmission and secure cloud storage, while login controls such as multi-factor authentication help prevent unauthorized access. Displays can also be fitted with tamper-resistant casings to protect the physical equipment. Regular updates and security testing help maintain system stability and support compliance with current data protection practices.",
  },
  {
    question: "Which digital signage option drives better audience engagement?",
    answer: "The most effective option depends on where the display is installed and how far viewers are from the screen. LED displays are more suitable for large areas or outdoor environments where visibility from a distance is important. LCD displays work best indoors where viewers are closer and need clear, detailed visuals. In many cases, using a mix of both technologies provides the strongest results by matching the display type to each specific location.",
  },
]
};
 