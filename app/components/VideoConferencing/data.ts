 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Video Conferencing Solutions Dubai, UAE · Since 2013 ",
  heading: "Smart Video Conferencing Systems \n Keeping Every Call Professional  ",
  highlightLast: 4,
  description: "Eliminate technical friction during critical executive meetings. GS IT deploys customized video conferencing equipment utilizing authorized technologies to secure clear communication in meeting rooms.",
  backgroundImage: "/assets/images/video-conf/banner.jpeg", 
  mobbanner: "/assets/images/video-conf/banner-mob.jpeg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"Deploying AV in UAE"},
   { value:"One-Tap", desc:"Meeting Join Functionality"},
   { value:"4K Ultra-HD", desc:"Resolution Video Standards"},
   { value:"100%", desc:"Authorized & Platform-Certified"}
  ],
  buttons: [
    {
      text: "Get a free site assessment",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Book a meeting room audit",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};    
export const rightFitData = {
  tag: "Overview",
  heading: "Clear Business Collaborations with \n Video Conferencing Solutions in Dubai ",
  highlightLast: 5,
  subhead: "Whether your team is connecting with remote colleagues or presenting to clients overseas, GS IT enables professional and productive interactions through video conference room solutions customized to your spaces. ",
    features: [
    {
      "titleLine1": "Built for ",
      "titleLine2": "Your Platform ",
      "description": "Runs natively on Teams, Zoom, and Webex with no setup needed.",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "Right Sized",
      "titleLine2": "to Each Space.",
      "description": "Compact desktop units enable clutter-free video collaborations. ",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "No Seat ",
      "titleLine2": "Left Off-Screen ",
      "description": "Wide-angle cameras engineered to frame everyone in the room. ",
      "featured": true,
      "pattern": true
    },
    {
      "titleLine1": "Any Device, ",
      "titleLine2": "Any Guest ",
      "description": "BYOD features connect visitors instantly without IT involvement. ",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "Boardroom-",
      "titleLine2": "Grade Audio ",
      "description": "Acoustically tuned mic arrays deliver every voice to receivers. ",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "End-to-End ",
      "titleLine2": "Accountability ",
      "description": "Supply, installation, and support handled by a dedicated team.  ",
      "featured": false,
      "pattern": true
    }
  ],
  video: {
    thumbnail: "/assets/images/video-conf/video2.jpg", 
    videoUrl: "/assets/videos/meeting-room.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  }
};
export const probData = {
  tag: "The Problem",
  heading: "Common {{Challenges}} \n That Impact Video Collaborations",
  highlightLast: 4,
  subhead: "Even the best teams struggle when conferencing technology creates friction. Modern video conference room solutions should remove barriers and create a consistent experience for every participant.",
  servicesData : [
  {
    icon: "CircleDollarSign",
    title: "Poor Audio Quality",
    description: "Background noise and uneven voice pickup make conversations harder to follow and reduce meeting effectiveness.",
    href: "#",
    featured: true,
  },
  {
    icon: "TrendingDown",
    title: "Inconsistent User Experience",
    description: "Background noise and uneven voice pickup make conversations harder to follow and reduce meeting effectiveness.",
    href: "#",
    featured: false,
  },  
  {
    icon: "ShieldAlert",
    title: "Platform Compatibility Issues",
    description: "Teams often work across multiple conferencing platforms that require seamless interoperability.",
    href: "#",
    featured: false,
  },  
  {
    icon: "FoldHorizontal",
    title: "Remote Participant Engagement",
    description: "Remote attendees can feel disconnected when audio, video, or content sharing experiences are not optimized.",
    href: "#",
    featured: false,
  },  
  {
    icon: "ChartScatter",
    title: "Scaling Across Locations",
    description: "Teams often work across multiple conferencing platforms that require seamless interoperability.",
    href: "#",
    featured: false,
  },  
]
}; 

export const videoConferencingItems = {

  tag: "Our Customized Solutions",
  heading: "Video Conferencing \n Designed for All Workspace",
  subhead:
    "Different Environments Require Different Conferencing Approaches. GS IT Delivers Video Conferencing Solutions That Align With Room Size, User Expectations, And Collaboration Needs.",
      highlightLast: 4,
items:[ 
  {
    id: "huddle",
    tag: "Huddle Space",
    title: "Quick Collaboration Spaces",
    description:
      "Purpose-built systems for quick team discussions that deliver a smooth meeting experience for 2-4 people.",
    tags: [
      "All-in-one audio \n video bars",
      "Wireless content  \n sharing supported",
      "Intelligent speaker \n  tracking",
    ],
    image: "/assets/images/video-conf/room1.jpeg",
  },
  {
    id: "small-office",
    tag: "Small Office",
    title: "Small Office Video Conferencing",
    description:
      "Video conferencing systems that help growing teams connect with clients and remote staff without complexity.",
      tags: [
      "USB and appliance- \n based solutions",
      "Wide-angle conference \n  cameras",
      "Native platform  \n compatibility",
    ],
    image: "/assets/images/video-conf/room2.jpeg",
  },
  {
    id: "mid-boardroom",
    tag: "Mid-Size/Boardroom",
    title: "Standard Conference Room Setup",
    description:
      "Designed for structured discussions where clear communication and dependable room coverage are essential.",
       tags: [
      "PTZ and auto-framing  \n  cameras",
      "Multi-mic coverage for \n long tables",
      "Dual-screen presenter \n  layouts",
    ],
    image: "/assets/images/video-conf/room3.jpeg",
  },
  {
    id: "large-rooms",
    tag: "Large Rooms",
    title: "Video Conferencing for Large Rooms",
    description:
      "Multi-camera systems and distributed audio ensure every participant can be seen and heard across larger spaces.",
      tags: [
      "Wide-angle and  \n tracking cameras",
      "Distributed speaker and \n  mic arrays",
      "Touchscreen room  \n controllers",
    ],
    image: "/assets/images/video-conf/room4.jpeg",
  },
  {
    id: "training",
    tag: "Training Spaces",
    title: "Built for Learning & Knowledge Sharing",
    description:
      "Designed for instructor-led sessions where clear presentation delivery and audience participation matter equally.",
      tags: [
      "Presenter-tracking \n  cameras",
      "Room-wide audio \n  coverage",
      "Interactive content \n  sharing",
    ],
    image: "/assets/images/video-conf/room5.jpeg",
  },
  {
    id: "hybrid",
    tag: "Hybrid Work Environment",
    title: "Seamless Collaboration Across Locations",
    description:
      "Creates a consistent meeting experience for office teams and remote participants across every location.",
      tags: [
      "Cross-platform  \n meeting support",
      "Wireless video  \n conferencing workflows",
      "Centralized device \n  management",
    ],
    image: "/assets/images/video-conf/room6.jpeg",
  },
]
};

export interface TechComponentItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const technicalComponentsData = {
      
  tag: "Technical Components",
  heading: "Smarter Equipment for \n Better Hybrid Meetings", 
  highlightLast: 3,
  subhead:
    "GS IT supplies and installs the full range of hardware that makes a video conferencing system function as intended. Each category below is available individually or as part of a complete conference room audio video solution.",
items:[ {
    id: "ptz-cameras",
    title: "PTZ & Wide-Angle Cameras",
    description:
      "Clearly planned security coverage reduces exposure to threats and improves early detection across sensitive areas.",
    image: "/assets/images/video-conf/tc1.jpeg",
  },
  {
    id: "room-audio",
    title: "Room Audio & Microphone Arrays",
    description:
      "Advanced ceiling and table mic systems with DSP processing for clear voice capture across the full room.",
    image: "/assets/images/video-conf/tc2.jpeg",
  },
  {
    id: "video-bars",
    title: "Video Bars for Compact Spaces",
    description:
      "These small, all-in-one camera and mic units let teams set up a video meeting in small spaces quickly.",
    image: "/assets/images/video-conf/tc3.jpeg",
  },
  {
    id: "wireless-conf",
    title: "Wireless Video Conference Systems",
    description:
      "Cable-free content sharing from any device on a segmented network without drivers or app installation.",
    image: "/assets/images/video-conf/tc4.jpeg",
  },
  {
    id: "scheduling-displays",
    title: "Room Scheduling Displays",
    description:
      "Door panels synced with Microsoft 365 or Google Workspace show live booking status outside each room.",
    image: "/assets/images/video-conf/tc5.jpeg",
  },
  {
    id: "interactive-display",
    title: "Interactive Display Solutions",
    description:
      "Touch-enabled panels for annotation, co-editing and content sharing during live video conference sessions.",
    image: "/assets/images/video-conf/tc6.jpeg",
  },
]
  };
 
export const approachData = {
  tag: "Deployment Procedure ",
  heading: "How We Deploy Video \n Conferencing Solutions in Dubai ",
  highlightLast: 4, 
  subhead: "We always deploy audio video conferencing solutions following a defined process. Each stage is completed and signed off before the next begins, so there are no specification gaps at installation and no configuration surprises at commissioning.",
 data: [
  {
    "number": "01",
    "title": "Site Assessment & System Design",
    "description": "Engineers measure dimensions, analyze acoustics and verify network readiness before making design choices."
  }, 
   {
    "number": "02",
    "title": "Hardware Supply & Procurement",
    "description": "We source authorized equipment with full warranties, verifying every physical item prior to installation."
  }, 
   {
    "number": "03",
    "title": "Professional Installation & Cabling",
    "description": "All hardware is mounted professionally, hiding cables to deliver an exceptionally clean and lasting finish."
  }, 
   {
    "number": "04",
    "title": "Configuration, Testing & Training",
    "description": "After provisioning your Zoom or Teams room, we test call quality and walk your staff through the system."
  }, 
   {
    "number": "05",
    "title": "Ongoing Support & AMC",
    "description": "Annual contracts cover critical firmware updates, fast fault responses, and SLA-backed on-site support."
  }, 
], 
};
export const techData = {
  tag: "Technical Capabilities",
  heading: "What Our Video \n Conferencing Systems Deliver",
  highlightLast: 3,
  subhead: "A well-specified video conference system in Dubai delivers consistent performance without requiring your team to troubleshoot before every call.",
  servicesData : [
  {
    icon: "/assets/images/icons/4k1.svg",
    title: "4K Ultra-HD Video Quality",
    description: "Remote teams see tiny text and product details easily during critical board presentations, thanks to ultra-high resolution.",
    href: "",
    featured: true,
  }, 
  {
    icon: "SquareDashedMousePointer",
    title: "Auto-Framing & Speaker Tracking",
    description: "As people move, built-in AI refocuses the lens automatically, removing the need for anyone to manually adjust the camera.",
    href: "",
    featured: true,
  }, 
  {
    icon: "Volume",
    title: "Noise Cancellation & Echo Suppression",
    description: "Hardware-level audio processing filters background hums and echo, letting offsite listeners focus entirely on the speaker.",
    href: "",
    featured: true,
  }, 
  {
    icon: "Wifi",
    title: "Wireless Screen Sharing",
    description: "Wireless video systems let everyone share content from any device without cables, supporting Windows and Mac laptops.",
    href: "",
    featured: true,
  }, 
  {
    icon: "/assets/images/icons/pointfinger1.svg",
    title: "Touch Controller & One-Tap Join",
    description: "You can launch your meeting in seconds using a dedicated tabletop screen, completely bypassing complex device log-ins.",
    href: "",
    featured: true,
  }, 
  {
    icon: "TvMinimal",
    title: "Remote Device Management",
    description: "Platform admin portals give IT teams visibility into device health, firmware status, and call logs without entering the room.",
    href: "",
    featured: true,
  }, 
   
]
}; 
export const outcomesdata = {
    tag: "BUSINESS OUTCOMES",
  heading: "What Changes \n When Your Video Calls Actually Work",
  highlightLast: 6,
  subhead:
    "Unreliable video conferencing in Dubai has a measurable cost: delayed meetings, excluded remote participants, and IT resources diverted to recurring AV faults. A properly installed video conferencing system avoids these friction points.",
  items:[
    {
    id: "on-schedule",
    title: "Meetings Start on Schedule",
    description:
      "Calendar-linked, one-touch join eliminates the annoying setup friction that routinely delays calls in makeshift spaces.",
  },
  {
    id: "remote-experience",
    title: "Equal Presence for Offsite Teams",
    description:
      "Wide-angle lenses and room-grade audio let offsite colleagues see, hear, and contribute without repeating themselves.",
  }, 
  {
    id: "remote-experience",
    title: "Credibility in External Meetings",
    description:
      "High-end video setups signal deep operational maturity immediately, which matters immensely during vital client calls.",
  }, 
  {
    id: "remote-experience",
    title: "Lower IT Support Overhead",
    description:
      "Certified hardware with remote management and AMC coverage reduces ad-hoc fault callouts across every location.",
  }, 
  {
    id: "remote-experience",
    title: "Consistent Experience Across Sites",
    description:
      "Standardized technology means staff deals with the same interface whether they are in Dubai or a remote branch office.",
  }, 
  {
    id: "remote-experience",
    title: "Scalable as Your Business Grows",
    description:
      "Platform-certified gear integrates into existing management tools, expanding to new rooms without structural rework.",
  }, 
  ]
};
export const compatibilityData = {
  tag: " Platform Compatibility",
  heading: "Built for the Platforms \n You Use Everyday",
  highlightLast: 3 ,  
    logo: [
  { src: "/assets/images/meetingroom/pc1.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc2.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc4.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc5.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc6.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc7.svg", alt: "" },
  ]
  }; 
  export const partnersData = {
  tag: " Technology Partners",
  heading: "Hardware Backed by \n Direct Manufacturer Partnerships ",
  highlightLast: 3 , 
  };
  export const logoData= [
  { src: "/assets/images/meetingroom/tecpartner1.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner2.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner3.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner4.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner5.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner6.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner7.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner8.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner9.svg", alt: "" },
  { src: "/assets/images/meetingroom/tecpartner10.svg", alt: "" }, 
  { src: "/assets/images/meetingroom/tecpartner11.svg", alt: "" },   
]  ; 
export const whygsData = {
  tag: "Why GS IT",
  heading: "What Sets Our Video Conferencing \n Solutions Apart in Dubai",
  highlightLast: 4,  
  subhead: "Selecting a video conferencing supplier in Dubai is not only about hardware pricing. The quality of the installation, the depth of platform knowledge, and the reliability of post-installation support determine whether the investment performs over time. ",
  whygs:[
  {
    "title": "Dubai-Based Engineers",
    "description": "Our local engineers design, install, and service your system, delivering faster on-site responses for critical faults.",
    "url":""
  },  
  {
    "title": "Manufacturer-Authorized Supply",
    "description": "Direct partnerships grant you genuine warranty support, access to the latest product ranges, and zero grey-market risks.",
    "url":""
  },  
  {
    "title": "Platform-Certified Hardware",
    "description": "Video conferencing systems with verified certification for Teams, Zoom, or Webex before the workspace is handed over.",
    "url":""
  },  
  {
    "title": "Transparent, Scope-Based Pricing",
    "description": "You receive a detailed bill of materials upfront without any hidden installation charges or surprise post-survey additions.",
    "url":""
  },  
  {
    "title": "Full Documentation at Handover",
    "description": "Each project concludes with as-built drawings, a complete hardware configuration inventory, and a live training session.",
    "url":""
  },  
  {
    "title": "Proactive AMC Coverage",
    "description": "Expect scheduled firmware updates, quarterly preventive maintenance visits, and priority on-site response via live calls.",
    "url":"#"
  },  
]
}; 
export const recomData = {
    backgroundImage: "/assets/images/video-conf/ctabanner.jpeg", 
  mobbanner: "/assets/images/video-conf/mobctabanner.jpg", 
  tag: "",
  heading: "Ready to upgrade your \n video conferencing setup? ",
    highlightLast: 8,
  description: "Tell us about your space and requirements. We will scope the right solution, provide a detailed quote, and get your system live without disrupting your operations. ",

  cta: "Get a free site assessment",
  points:['Authorized Partner Sourcing ','Transparent Cost Scoping ','Multi-Space Project Capability ','UAE-Wide AMC Coverage'  ]
}; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on \n Video Conferencing Solutions in Dubai ",
  highlightLast:9,
 faqData : [
  {
    question: "What hardware does GS IT recommend for a small office video conferencing setup?",
    answer: 'For rooms seating two to four people, an all-in-one video bar from Logitech or Yealink with an integrated camera, speaker, and microphone is recommended. It connects directly to the room display and requires no dedicated compute hardware beyond a laptop or a compact codec device.',
  },  
  {
    question: "Can GS IT install video conferencing equipment for a large conference room?",
    answer: 'Yes. GS IT deploys video conference cameras for large rooms with wide field-of-view optics, distributed microphone arrays, and multi-screen display configurations. Room acoustics and seating layout are evaluated before any hardware is specified. ',
  },  
  {
    question: "How does GS IT size a video conference camera for a large room?",
    answer: 'Camera selection for large conference rooms is based on room depth, seating count, and table configuration. Rooms beyond four meters typically need a PTZ camera with optical zoom and auto-framing to ensure remote participants see all seated attendees without a fixed wide-angle lens cutting off the table ends.',
  },  
  {
    question: "How much does a video conference setup at the office typically cost? ",
    answer: 'Costs vary based on room size, equipment tier, and platform requirements. A small office video conferencing solution starts significantly lower than a large-room system with PTZ cameras and distributed audio. GS IT provides a detailed, itemized quote after the free site assessment. ',
  },  
  {
    question: "What is a wireless video conference system and is it reliable for business use?",
    answer: 'Wireless systems use a receiver connected to room display hardware, allowing participants to share content from their own devices without cables. Enterprise-grade wireless conferencing systems are reliable for business use when installed on a stable dedicated network connection. ',
  },  
  {
    question: "How long does a video conferencing installation take? ",
    answer: 'Most single-room installations complete within one business day. Multi-room projects are phased to avoid operational disruption. GS IT schedules cabling and installation work around your business hours where needed, including evening slots for sensitive environments. ',
  },  
  {
    question: "Do you offer video conferencing solutions for small offices in Dubai?",
    answer: 'Yes. GS IT configures small office video conferencing solutions using compact all-in-one video bars and USB camera units that are straightforward to use without dedicated IT management. Setups are ready for Teams or Zoom out of the box. ',
  },  
  {
    question: "What is the difference between a video bar and a traditional camera and speaker setup? ",
    answer: 'A video bar integrates the camera, microphone array, and speaker into a single unit, reducing cabling complexity and setup time. Traditional setups offer more flexibility for large rooms where a single device cannot provide adequate audio coverage across the full space. ',
  },  
  {
    question: "Can GS IT set up video conferencing in a room that another company originally installed? ",
    answer: 'Yes. GS IT conducts a technical audit of the existing installation, documents all audio video conferencing systems and configuration, and identifies what is reusable versus what requires replacement. Remediation costs and scope are presented before GS IT assumes ongoing responsibility for the system. ',
  },  
  {
    question: "What is included in GS IT's AMC for video conferencing systems?",
    answer: 'The AMC covers scheduled preventive maintenance visits, firmware management, remote diagnostics, and priority on-site response for critical faults. Clients in Dubai receive same-day or next-business-morning attendance for failures affecting rooms scheduled for important calls. ',
  },  
]
};