 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "IP Telephony · Dubai, UAE",
  heading: "IP Phone Solutions in Dubai. \n Stay Connected. Work Without Limits.",
  highlightLast: 5,
  description: "Expert IP phone installation and IP telephony solutions for businesses in Dubai. Whether you need an IP phone in Dubai for a small office or enterprise, GS IT delivers reliable IP phone systems across the UAE.",
  backgroundImage: "/assets/images/ip-phone/banner.jpeg", 
  mobbanner: "/assets/images/ip-phone/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ `, desc:"Years of Experience"},
   { value: `${portfolioData.clients}+ `, desc:"Active Clients"},
   { value: `${portfolioData.employees}+ `, desc:"Certified Engineers"},
   { value: `${portfolioData.google_score} `, desc:"Google Reviews"}
  ],
  buttons: [
    {
      text: "Get a free Consultation",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } 
  ],
};   
 
 export const checklistData = {
  tag: "Core Benefits",
  heading: "What Changes with the Right \n IP Phone System ",
  highlightLast: 3,
  description:
    "Our team at GS IT reviews these practical factors to keep your deployment efficient.",
  checklistItems: [
    {
      id: "image-1",
      type: "image",
      image: "/assets/images/ip-phone/case1.jpeg",
    },
    {
      id: "",
      type: "text",
      icon: "Handshake",
      title: "Enhanced Collaboration",
      description:
        "Improve team communication with conferencing, extensions, and quick call transfers.",
    }, 
    {
      id: "",
      type: "text",
      icon: "Unplug",
      title: "Flexible Work Connectivity",
      description:
        "Stay connected across offices, branches, and remote work locations.",
    }, 
    {
      id: "",
      type: "text",
      icon: "HandHeart",
      title: "Better Customer Service",
      description:
        "Handle customer calls efficiently with smart routing and faster response times.",
    }, 
    {
      id: "",
      type: "text",
      icon: "ChartNoAxesCombined",
      title: "Improved Business Continuity",
      description:
        "Maintain uninterrupted communication during unexpected disruptions.",
    }, 
    {
      id: "",
      type: "text",
      icon: "MessagesSquare",
      title: "Scalable Communication Setup",
      description:
        "Expand users and features easily as your business grows.",
    }, 
    {
      id: "",
      type: "text",
      icon: "BanknoteArrowUp",
      title: "Cost Efficiency",
      description:
        "Reduce communication costs with flexible internet-based calling.",
    }, 
    {
      id: "image-2",
      type: "image",
      image: "/assets/images/ip-phone/case2.jpeg",
    },
  ],
};
export const installationData = {
  tag: "IP Phone Deployment Process ",
  heading: "How GS IT Deploys \n Your IP Phone System ",
  highlightLast: 4, 
  
 data: [
  {
    "number": "01",
    "title": "Consultation",
    "description": "GS IT begins with a detailed consultation to understand your communication requirements, team size, locations, and any existing infrastructure. This ensures the recommended solution fits your business exactly."
  }, 
   {
    "number": "02",
    "title": "Solution Design",
    "description": "Based on the consultation, GS IT recommends the right IP phone system for your business, whether that is an on-premise IP PBX, a cloud-hosted IP telephone system, or a UC Client plan. Handset models, features like IVR and call routing, and PoE requirements are all confirmed at this stage."
  }, 
   {
    "number": "03",
    "title": "Installation and Configuration",
    "description": "GS IT handles the complete installation and configuration of your IP phones and PBX system. This includes setting up extensions, voicemail, auto-attendant, call routing rules, and integrating with your existing network."
  }, 
   {
    "number": "04",
    "title": "Number Porting",
    "description": "If you are keeping your existing phone numbers, GS IT manages the full porting process, coordinating with your current provider to ensure no disruption to incoming calls during the transition."
  }, 
   {
    "number": "05",
    "title": "Testing and Handover",
    "description": "Before handover, the entire system is tested to confirm call quality, routing, IVR flows, and all configured features are working correctly. Your team is guided through using the system."
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
export const ipTelephoneData = {
  tag: "Overview",
  heading: "The Right \n IP Telephone System for Your Business",
  highlightLast: 6,
  subhead:
    "GS IT's IP phone Dubai services cover three core elements that work together to deliver a complete IP telephony solution for your business, whether you need a business IP phone system for a large office or an IP phone system for small business. Our IP phone systems are built to support every type of organization across Dubai and the UAE.",
  items: [
    {
      id: "ip-phones",
      component: "IP Phones",
      description:
        "Sleek handsets deliver high-quality communication and intuitive interfaces for secure internet-based calling. GS IT supplies IP phones in Dubai, ranging from desktop models to multi-line touch-screen phones with video conferencing features, ideal for office phone systems and smaller teams.",
      image: "/assets/images/ip-phone/overview1.jpeg",
    },
    {
      id: "ip-pbx",
      component: "IP PBX",
      description:
        "Manages all functions of the entire IP-based phone system. Hosted on-site or in the cloud to handle calls, voicemail, conferencing, and other features. Flexible and scalable to support addition of features and users as your business grows.",
      image: "/assets/images/ip-phone/overview2.jpeg"    },
    {
      id: "uc-clients",
      component: "UC Clients",
      description:
        "Unified Communications software applications offering video conferencing, file sharing, and integrations with other business applications. Accessible through various subscription plans for any IP phone service for business.",
      image: "/assets/images/ip-phone/overview3.jpeg",
    },
  ],
};
export const partnersHeaderData = {
  tag: "Technology Partnership",
  heading: "Trusted Brands.  \n Proven Technology ",
  highlightLast: 2 , 
  logo: [
  { src: "/assets/images/ip-phone/partner1.svg", alt: "" },
  { src: "/assets/images/ip-phone/partner2.svg", alt: "" },
  { src: "/assets/images/ip-phone/partner3.svg", alt: "" },
  { src: "/assets/images/ip-phone/partner4.svg", alt: "" },
  { src: "/assets/images/ip-phone/partner5.svg", alt: "" },
  { src: "/assets/images/ip-phone/partner6.svg", alt: "" }, 
]  }; 

export const whygsData = {
  tag: "Why Choose Us",
  heading: "Why Businesses in \n Dubai Choose GS IT for IP Telephony Solutions ",
  highlightLast:8,  
  subhead: "Choosing the right IP telephone system in Dubai is not just about making calls. It is about having a communication setup that works reliably every day, supports your team, and grows with your business. At GS IT, we help businesses in Dubai move to smarter communication systems without unnecessary complexity.",
  whygs:[
  {
    "title": "Solutions Designed Around Your Business",
    "description": "Every business has different communication needs. We recommend the right IP telephone setup based on your team size, office structure, call flow, and future growth plans.",
    "url":""
  },   
  {
    "title": "Complete Installation & Configuration",
    "description": "From IP phone setup and extension management to IVR configuration and call routing, our team handles the full deployment process to ensure a smooth transition.",
    "url":""
  }, 
  {
    "title": "Cloud & On-Premise IP PBX Expertise",
    "description": "Whether you prefer a cloud-based phone system or an on-premise IP PBX, we help you choose a setup that fits your operations, budget, and long-term requirements.",
    "url":""
  }, 
  {
    "title": "Scalable Communication Systems",
    "description": "As your business grows, your phone system grows with you. Easily add users, departments, locations, and advanced calling features without major infrastructure changes.",
    "url":""
  }, 
  {
    "title": "Advanced Calling Features for Better Communication",
    "description": "Make daily communication easier with features such as auto attendant, voicemail, call forwarding, conferencing, extension dialing, and multi-location connectivity.",
    "url":""
  }, 
  {
    "title": "Annual Maintenance Contract (AMC) ",
    "description": "Optional IT AMC plans provide ongoing maintenance, troubleshooting, upgrades, and technical assistance to keep communication systems operating efficiently.",
    "url":"#"
  }, 
]
};  
 

export const recomData = {
    backgroundImage: "/assets/images/ip-phone/cta.jpeg", 
  mobbanner: "/assets/images/ip-phone/cta.jpeg", 
  tag: "",
  heading: "Get the Right Phone System for \n Your Business ",
    highlightLast: 9,
  description: "Ready to upgrade to a reliable IP phone system in Dubai? Whether you need IP phone solutions for small business or an enterprise IP telephone system, contact GS IT to discuss your requirements and get a free consultation.",

  cta: "Get a free site assessment",
 
}; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Wireless \n Presentation Systems  ",
  highlightLast:7,
 faqData : [
  {
    question: "What are IP telephony solutions? ",
    answer: "IP telephony solutions offer a modern approach to business communication in which voice conversations are sent via Internet Protocol (IP) networks rather than traditional telephone lines. GS IT's IP telephony solution comprises IP phones in Dubai, cloud-based or on-premise IP PBX systems, and unified communications clients that combine many communication tools into a single platform, handling voice calls, video conferencing, instant messaging, and file sharing all from the same network infrastructure. ",
  },  
  {
    question: "How does IP PBX enhance communication systems? ",
    answer: "IP PBX provides advanced call management capabilities including conference calls, call routing, voicemail, auto-attendant, and video conferencing. It is a versatile and scalable system hosted on-site or in the cloud, allowing businesses to expand services and users as needed. It connects with unified communications systems, enabling teams to access different communication tools from a single interface. ",
  },  
  {
    question: "Can we keep existing phone numbers? ",
    answer: "Yes. GS IT provides options to port your existing phone numbers to the IP phone system, supporting business continuity and consistent customer communications. GS IT manages the entire porting process while integrating new features such as call routing, queuing, and detailed call logs. ",
  },  
  {
    question: "What is SIP and why is it important for IP phones? ",
    answer: "Session Initiation Protocol (SIP) is a core technology that controls communication sessions across IP networks, initiating, maintaining, and ending phone, video, and message sessions. SIP allows the IP phone system to integrate with various communication platforms and services. GS IT uses SRTP alongside SIP to deliver encrypted communications that protect business conversations from unauthorized access. ",
  },  
  {
    question: "What are the business benefits of IP telephony? ",
    answer: "GS IT's IP phones for business deliver multiple advantages: reduced communication costs by removing traditional phone line and long-distance charges, advanced capabilities like group calling, call forwarding, and voicemail-to-email, improved team collaboration through unified communications platforms, scalability to add users and services as the business grows, and IVR with detailed call logging to improve customer service. These benefits apply equally to a large corporate IP phone system for business and to IP phones for small business deployments. ",
  },  
  {
    question: "What is the difference between IP phones and traditional landlines? ",
    answer: "Traditional phones rely on dedicated copper lines and are limited to voice calls. GS IT's IP telephone systems in Dubai use internet connectivity to provide video conferencing, instant messaging, and integration with business applications. IP phones enable remote work via mobile apps and remote access gateways. They are also more scalable, allowing features to be added or changed without physical infrastructure upgrades, making an IP based phone system a practical long-term investment for any business size. ",
  },  
  {
    question: "Do I need special hardware for IP phone solutions? ",
    answer: "GS IT's IP phone solutions are designed for easy installation with minimal hardware requirements. The main requirement is the IP phone handset, available in various designs from basic desktop versions to touch-screen handsets with video capabilities. IP phone price in Dubai varies by model and feature set, and GS IT will advise on the most suitable option during consultation. PoE-supported systems use a single Ethernet cable for both power and data. Systems can be hardware-based for on-premise deployment or cloud-hosted, requiring no additional physical infrastructure. ",
  },  
  {
    question: "How secure are GS IT's IP phone solutions? ",
    answer: "GS IT uses industry-standard secure protocols for SIP and SRTP to encrypt and protect all conversations. These protocols keep business communications private while ensuring high-quality audio and video transmission over the network. ",
  },  
  {
    question: "What kind of support does GS IT provide? ",
    answer: "GS IT provides comprehensive assistance ranging from remote support and maintenance to troubleshooting. The team conducts thorough consultations to understand your specific communication requirements before recommending and deploying a solution. ",
  },  
  {
    question: "How do I choose the right IP telephone system for my business?",
    answer: "Choosing the right IP telephone system depends on factors such as business size, number of users, call volume, remote work requirements, and future expansion plans. Businesses should consider whether a cloud-based or on-premise solution best suits their operations. GS IT helps businesses in Dubai assess their communication needs and recommend the most suitable IP telephony solution for long-term efficiency and scalability. ",
  },  
   
]
};

 



 