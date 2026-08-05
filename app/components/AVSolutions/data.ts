import { portfolioData } from "../common/data";
export const bannerData = {
  tag: " Custom AV Solutions since 2013",
  heading: "Audio Video Solutions \n Company in Dubai.  ",
  highlightLast: 3,
  description: "GS IT delivers advanced AV solutions in Dubai designed for modern workspaces, meeting rooms, learning environments, and enterprise communication. ",
 bannercta:"Total Ownership from Design to Delivery",
  backgroundImage: "/assets/images/avsolution/banner.jpeg", 
  mobbanner: "/assets/images/avsolution/bannerav.jpg", 
   points:[
   { value: `${portfolioData.years}+`, desc:"Years in UAE",icon:""},
   { value:`${portfolioData.projects}+`, desc:"Projects completed",icon:""},
   { value:`${portfolioData.employees}+`, desc:"Certified engineers",icon:""},
   { value:`${portfolioData.google_score}`, desc:"Google rating",icon:"/assets/images/icons/stars.svg"}
  ],
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

export const statsData = [
  { value: `${portfolioData.years}+`,  description: "Years in UAE" ,icon:""}, 
  { value: `${portfolioData.clients}+`,  description: "Active Clients" ,icon:""}, 
  { value: `${portfolioData.employees}+`,  description: "Certified engineers" ,icon:""}, 
  { value: `${portfolioData.google_score}`,  description: "Google Rating" ,icon:"/assets/images/icons/star.svg"}, 
]; 


export const solutionstitleData = {
  tag: "Our Audio Video Solutions",
  heading: "Everything AV. \n All in One Place",
  highlightLast: 4,
  subhead:
    "GS IT is a full-service AV solutions company delivering commercial AV solutions, corporate AV solutions, and commercial audio visual solutions across Dubai and the UAE. Our complete range of audio and video solutions covers every environment, from huddle rooms to enterprise campuses.",
  cardData: [
    {
      id: "Meeting",
      label: "Meeting Rooms & Collaboration",
      cards: [
        {
          id: "meeting-room-solutions",
          titleLine1: "Meeting Room Solutions",
          titleLine2: "",
          description:
            "Modern meeting spaces for smarter teamwork and better communication. ",
          image: "/assets/images/avsolution/tab1.jpg",
          highlighted: true,
        },
        {
          id: "video-conferencing-solutions",
          titleLine1: "Video Conferencing Solutions",
          titleLine2: "",
          description:
            "High quality virtual collaboration for connected and productive business meetings.",
          image: "/assets/images/avsolution/tab2.jpg",
          highlighted: true,
        },
        {
          id: "crisis-room-solution",
          titleLine1: "Crisis Room Solution",
          titleLine2: "",
          description:
            " Advanced communication systems supporting rapid response and operational decision making.",
          image: "/assets/images/avsolution/tab3.jpg",
          highlighted: true,
        },
        {
          id: "auditorium-solutions",
          titleLine1: "Auditorium Solutions",
          titleLine2: "",
          description:
            "Dynamic audio-video setups for presentations and live events.",
          image: "/assets/images/avsolution/tab4.jpg",
          highlighted: true,
        },
        {
          id: "smart-classroom-solutions",
          titleLine1: "Smart Classroom Solutions",
          titleLine2: "",
          description:
            "Technology-driven classrooms supporting interactive learning and student participation. ",
          image: "/assets/images/avsolution/tab5.jpg",
          highlighted: true,
        },
        {
          id: "command-control-centers",
          titleLine1: "Command & Control Centers",
          titleLine2: "",
          description:
            "Centralized control environments for monitoring operations and managing critical activities. ",
          image: "/assets/images/avsolution/tab6.jpg",
          highlighted: true,
        },
      ],
    },
    {
      id: "display",
      label: "Display & Digital Signanace",
      cards: [
        {
          id: "interactive-displays",
          titleLine1: "Interactive Displays",
          titleLine2: "",
          description:
            "Smart touch displays designed for collaboration presentations and audience engagement. ",
          image: "/assets/images/avsolution/tab7.jpg",
          highlighted: true,
        },
        {
          id: "video-wall-solutions",
          titleLine1: "Video Wall Solutions",
          titleLine2: "",
          description:
            "Large scale display solutions delivering powerful and captivating visual experiences. ",
          image: "/assets/images/avsolution/tab8.jpg",
          highlighted: false,
        },
        {
          id: "digital-signage-solutions",
          titleLine1: "Digital Signage Solutions",
          titleLine2: "",
          description:
            "Digital communication platforms for promotions announcements and real time updates. ",
          image: "/assets/images/avsolution/tab9.jpg",
          highlighted: false,
        },
      ],
    },
    {
      id: "audio",
      label: "Audio Video Systems",
      cards: [
        {
          id: "pa-va-systems",
          titleLine1: "PA & VA Systems",
          titleLine2: "",
          description:
            "Professional announcement systems for effective communication across multiple facilities.",
          image: "/assets/images/avsolution/tab10.jpg",
          highlighted: true,
        },
        {
          id: "bgm-systems",
          titleLine1: "BGM Systems",
          titleLine2: "",
          description:
            "Background music solutions create comfortable and engaging business environments.",
          image: "/assets/images/avsolution/tab11.jpg",
          highlighted: false,
        },
      ],
    },
    {
      id: "avspace",
      label: "AV By Space",
      cards: [
        {
          id: "ballroom-townhall",
          titleLine1: "Ballroom & Townhall",
          titleLine2: "",
          description:
            "Advanced AV setups for conferences, events, and corporate communication spaces.",
          image: "/assets/images/avsolution/tab12.jpg",
          highlighted: true,
        },
        {
          id: "home-cinema-solutions",
          titleLine1: "Home Cinema Solutions",
          titleLine2: "",
          description:
            "Premium home theater systems deliver cinematic entertainment and powerful sound.",
          image: "/assets/images/avsolution/tab13.jpg",
          highlighted: true,
        },
        {
          id: "immersive-room-solutions",
          titleLine1: "Immersive Room Solutions",
          titleLine2: "",
          description:
            "Interactive AV spaces designed for engaging and technology focused experiences.",
          image: "/assets/images/avsolution/tab14.jpg",
          highlighted: true,
        },
        {
          id: "gaming-zone-solutions",
          titleLine1: "Gaming Zone Solutions",
          titleLine2: "",
          description:
            "High performance AV environments built for modern gaming and entertainment.",
          image: "/assets/images/avsolution/tab15.jpg",
          highlighted: true,
        },
        {
          id: "podcast-room",
          titleLine1: "Podcast Room",
          titleLine2: "",
          description:
            "Professional recording spaces supporting content creation and high-quality production.",
          image: "/assets/images/avsolution/tab16.jpg",
          highlighted: true,
        },
        {
          id: "av-control-systems",
          titleLine1: "AV Control Systems",
          titleLine2: "",
          description:
            "Centralized platforms simplify audio visual device monitoring and system control.",
          image: "/assets/images/avsolution/tab17.jpg",
          highlighted: true,
        },
        {
          id: "projection-mapping",
          titleLine1: "Projection Mapping",
          titleLine2: "",
          description:
            "Creative projection technology transforming surfaces into engaging visual experiences. ",
          image: "/assets/images/avsolution/tab18.jpg",
          highlighted: true,
        },
      ],
    },
  ],
};

export const businessData = {
  tag: "OUR COVERAGE TYPES",
  heading: "Smart AV. One Solution. \n Flawless Communication.",
  highlightLast: 2, 
  subhead: "GS IT is a leading AV solution provider delivering complete audio and visual solutions for businesses of every size across the UAE. Every AV solution we design is built around your space, your workflow, and your communication goals.",
  table: [
   {
    icon: "Route",
    title: "Design to Delivery",
    description: "End-to-end AV execution from concept to setup.",
    href: "",
  }, 
   {
    icon: "HardDrive",
    title: "Spaces that Perform",
    description: "AV setups that improve communication and collaboration.",
    href: "",
  }, 
   {
    icon: "BrainCircuit",
    title: "Future Ready Innovation",
    description: "Scalable AV tech built for future needs.",
    href: "",
  }, 
   {
    icon: "CalendarCheck",
    title: "Long Term Support",
    description: "SLA-backed maintenance post-installation.",
    href: "",
  }, 
],
 
};
export const AvProfessionalData = {
  tag: "AV Professional Services ",
  heading: "AV Solutions that \n Elevate Engagement ",
  highlightLast: 3,  
    offerData : [
  {
    "icon": "BriefcaseBusiness",
    "title": "AV Consulting ",
    "description": "Expert evaluation of AV requirements to enhance communication and system efficiency.",
    "href": "#"
  }, 
  {
    "icon": "/assets/images/avsolution/avicon1.svg",
    "title": "AV Design Services ",
    "description": " Smart, customized AV designs built for optimal performance and usability.",
    "href": "#"
  }, 
  {
    "icon": "HardDriveDownload",
    "title": "AV Installation ",
    "description": "Precise installation of Audio Video systems ensuring reliability and flawless setup.",
    "href": "#"
  }, 
  {
    "icon": "CodeXml",
    "title": "AV Programming",
    "description": "Intelligent control system programming for simple and efficient AV operations.",
    "href": "#"
  }, 
  {
    "icon": "/assets/images/avsolution/avicon2.svg",
    "title": "AV Integration ",
    "description": " Unified integration of AV technologies for smooth and connected experiences.",
    "href": "#"
  }, 
  {
    "icon": "Wrench",
    "title": "AV Support & Maintenance ",
    "description": "Continuous support and maintenance to ensure uninterrupted system performance.",
    "href": "#"
  },  
]
   
};
export const CompetitorData = {
  tag: "Competitor Comparison",
  heading: "Why GS IT vs Other AV \n Companies in Dubai? ",
  highlightLast: 7, 
  highlight_first:true,
  subhead: "When evaluating audio visual companies in Dubai, GS IT stands apart from other audio visual companies with a structured, space-specific, and fully integrated approach. As a dedicated AV company in Dubai, we deliver more than any general solutions listing, we deliver precision-built environments.",
  headers : {
    scenario: "Scenario",
    without: "Other AV Vendors",
    with: "GS IT ",
  },
   table: [ 
  {
    scenario: "Solution Categorization ",
    without: "Generalized service listings  ",
    with: "Well structures and detailed solution categories  "
  }, 
  {
    scenario: "AV by Space Solutions",
    without: "Limited or unavailable",
    with: "Dedicated space-based AV solutions available"
  },  
  {
    scenario: "Meeting & Collaboration Solutions",
    without: "Basic meeting room offerings",
    with: "Comprehensive collaboration and conferencing solutions"
  },  
  {
    scenario: "Digital Signage Solutions",
    without: "Often briefly mentioned",
    with: "Dedicated digital signage solution section"
  },  
  {
    scenario: "User Experience & Navigation",
    without: "Standard website structure",
    with: "Organized layout with easy navigation"
  },  
  {
    scenario: "Industry Focused Solutions",
    without: "Limited industry-specific focus",
    with: "Solutions tailored for multiple industries"
  }, 
]
};
export const  OverviewData = {
  tag: "Understanding Audio Video Solutions",
  heading: "Smart AV. One Solution. \n Flawless Communication.",
  highlightLast: 2,
  subhead:
    "GS IT is a leading AV solution provider delivering complete audio and visual solutions for businesses of every size across the UAE. Every AV solution we design is built around your space, your workflow, and your communication goals.",
  image: "/assets/images/avsolution/smartav.jpeg",
  cards: [
    {
      id: "design",
      titleLine1: "Design",
      titleLine2: "to Delivery",
      description: "End-to-end AV execution from concept to setup.",
    },
    {
      id: "spaces",
      titleLine1: "Spaces",
      titleLine2: "that Perform",
      description: "Wide-angle cameras engineered to frame everyone in the room.",
      highlighted: true,
    },
    {
      id: "support",
      titleLine1: "Long",
      titleLine2: "Term Support",
      description: "SLA-backed maintenance post-installation.",
    },
    {
      id: "future",
      titleLine1: "Future",
      titleLine2: "Ready Innovation",
      description: "Scalable AV tech built for future needs.",
    },
  ],
};
export const workData = {
  tag: "The GS IT Difference ",
  heading: "Beyond Basic AV ",
  highlightLast: 1, 
  subhead: "GS IT as a leading ELV system integrator in Dubai, follows a structured, delivery approach that ensures every ELV and physical security project is executed cleanly and handed over with full regulatory documentation. ",
 data: [
  {
    "number": "01",
    "title": "AV Consulting",
    "description": "Expert evaluation of AV requirements to enhance communication and system efficiency."
  }, 
   {
    "number": "02",
    "title": "Solution Design",
    "description": "Create detailed AV system design with layout and planning process."
  }, 
   {
    "number": "03", 
    "title": "Estimation",
    "description": "Provide accurate cost estimates and project timelines for the approval of clients"
  }, 
   {
    "number": "04",
    "title": "Project Execution",
    "description": "Install and deploy AV systems according to approved design plan"
  }, 
   {
    "number": "05",
    "title": "Quality Check",
    "description": "Test and evaluate AV systems to ensure reliability standards."
  }, 
   {
    "number": "06",
    "title": "Documentation & Training",
    "description": "Provide manuals and training for effective AV system usage support."
  }, 
   {
    "number": "07",
    "title": "Maintenance",
    "description": "Offer ongoing support updates for system efficiency and stability."
  }, 
], 
};
 
export const partnersHeaderData = {
  tag: "  Technology Partners",
  heading: "Trusted Technology Alliances",
  highlightLast: 1 ,
  };
   export const TechnologyAlliancesData = [
  { src: "/assets/images/avsolution/partner1.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner2.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner3.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner4.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner5.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner6.svg", alt: "" },    
  { src: "/assets/images/avsolution/partner8.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner9.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner10.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner11.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner12.svg", alt: "" },  
  { src: "/assets/images/avsolution/partner13.svg", alt: "" },  
];
    export const ClienteleHeaderData = {
  tag: "Clients",
  heading: "Trusted Across the UAE",
  highlightLast: 0, 
  };
  export const ctabannermData = {
    backgroundImage: "/assets/images/avsolution/cta.jpeg", 
  mobbanner: "/assets/images/avsolution/cta.jpeg", 
  tag: "Get expert recommendations",
  heading: "Transform Your Spaces with \n Intelligent AV Solutions from GS IT ",
  highlightLast: 6,
  description:"Better meetings, clearer communication, and effortless collaboration across every environment.",
  cta: "Get Started", 
}; 

export const faqHeaderData = {
  tag: "QUESTIONS WE GET ASKED",
  heading: "Frequently Asked Questions",
  highlightLast:8,
 faqData : [
  {
    question: "What are audio video solutions?",
    answer: "Audio and video solutions, also known as AV solutions, are integrated technologies combining displays, microphones, speakers, and cameras designed to capture, process, and distribute high-quality audio and visual content. They remove communication barriers in professional settings, improving collaboration and engagement through seamless video conferencing, interactive displays, and automation, making distance less noticeable.",
  },   
  {
    question: ". What is Audio Video Technology?",
    answer: "AV technology refers to electronic systems that combine sound and visual components to enhance communication, collaboration, and entertainment. It encompasses hardware like microphones, projectors, cameras, and displays, as well as software used for video conferencing and streaming. Common uses include corporate video conferencing, educational smartboards, live stage performances, and digital signage.",
  },   
  {
    question: "What industries commonly use AV technology solutions in Dubai?",
    answer: "Audio visual technology in Dubai is widely used across hospitality, corporate, education, real estate, and events sectors. It enhances guest experiences, improves communication, supports smart learning, enables home automation, and powers large events. These industries adopt audio visual solutions in Dubai to boost engagement, efficiency, and align with Dubai's smart city and digital transformation goals.",
  },   
  {
    question: "What components are used for audio video solutions?",
    answer: "Audio visual (AV) solutions integrate sound, video, and control technologies to enhance communication and presentation in spaces like boardrooms, classrooms, and venues. Core components include input devices (cameras, microphones), output devices (displays, speakers), processing hardware (DSP, switchers), and control systems (touch panels) to manage the entire setup.",
  },   
  {
    question: "How are audio video solutions integrated into meeting rooms?",
    answer: "Audio visual (AV) solutions are integrated into meeting rooms by combining high-definition displays, AI-powered cameras, beamforming microphones, and intelligent control systems into a unified platform. These systems are connected via corporate networks and BYOD (Bring Your Own Device) cables to enable seamless hybrid collaboration, auto-framing, noise cancellation, and one-touch meeting joining.",
  },   
  {
    question: "What are the advantages of wireless AV solutions?",
    answer: "Wireless AV solutions offer significant advantages, including enhanced, real-time collaboration, improved flexibility, reduced cable clutter, and seamless screen sharing without the need for adapters or IT support. These systems support hybrid work by integrating smoothly with existing equipment for better video conferencing and enabling BYOD (Bring Your Own Device) policies, leading to increased productivity and lower installation costs.",
  },   
  {
    question: "How are AV solutions evolving with cloud computing?",
    answer: 'Audio Visual (AV) solutions are evolving from hardware-centric, on-premises systems into software-defined, cloud-managed platforms, enabling remote management, enhanced scalability, and reduced infrastructure costs. This transition to "AV-over-IP" (AVoIP) allowsbusinesses to connect to disparate AV components such as displays, microphones, and cameras over existing IT networks, which are then controlled via centralized, cloud-based dashboards.',
  },   
  {
    question: "Why choose GS IT as your audio video company in Dubai?",
    answer: "GS IT is a reputable audio video company in Dubai and trusted audio video solution provider with more than ten years of experience in providing customized AV solutions for diverse industries. Unlike other audio visual companies, our group specializes in comprehending your business requirements and creating systems that improve productivity and communication. We offer complete services, including installation, integration, maintenance, consultancy, and 24/7 remote support. GS IT guarantees the smooth deployment of innovative AV technology to achieve your objectives with an emphasis on innovation, dependability, and outstanding customer service.",
  },   
  {
    question: "How does GS IT ensure seamless installation of audio visual systems in Dubai?",
    answer: "GS IT ensures seamless installation of audio visual systems through meticulous planning, expert execution, and thorough testing. Our process begins with a comprehensive needs assessment and site evaluation. We then design and install AV systems using advanced tools and technologies. Our team ensures all components are integrated flawlessly and provides training for your staff to maximize system usage. Post-installation support and maintenance services guarantee smooth operation.",
  },   
  {
    question: "What are the maintenance requirements for Audio Visual solutions?",
    answer: "AV solutions need frequent maintenance to work well and last. Quarterly or biannual system checks, firmware updates, and equipment cleaning constitute preventive maintenance. Cable connections, system operation, display calibration, and control system programming updates are routine chores. Users should often test and change audio components' levels and EQ settings. Based on usage, projectors need lamp replacement and filter cleaning. Regular security and performance updates are needed for networked components. Your audio visualsolution provider in Dubai can help you create a maintenance program to prevent system failures and extend equipment life. Remote monitoring can help identify issues before they escalate",
  },      
]
};