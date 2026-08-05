 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Meeting Room Solutions Dubai, UAE · Since 2013 ",
  heading: "All-Inclusive Customized \n Meeting Room Solutions for Businesses  ",
  highlightLast: 5,
  description: "From compact huddle spaces to complete boardrooms, we survey, install, and support every meeting room technology layer in businesses across UAE.",
  backgroundImage: "/assets/images/meetingroom/banner.jpeg", 
  mobbanner: "/assets/images/meetingroom/bannermob.jpeg", 
  points:[
   { value: `${portfolioData.years}+`, desc:"Deploying AV in UAE"},
   { value:"One Touch", desc:"Instant Meeting Join"},
   { value:"Any Room Size", desc:"From Huddle to Boardroom"},
   { value:"Fully Certified", desc:"Teams, Zoom & Webex Hardware"}
  ],
  buttons: [
    {
      text: "See what we offer",
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
  heading: "Collaboration Without Friction : \n Meeting Room Solutions in Dubai",
  highlightLast: 5,
  description: "GS IT delivers complete meeting room conference systems across the UAE, covering huddle spaces to executive boardrooms.",
    features: [
    {
      titleLine1: "Custom",
      titleLine2: "Room Design",
      "description": "We assess occupancy and room purpose before specifying a component.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "One Room.",
      titleLine2: "One System.",
      "description": "Single cohesive setup across displays, smart audio and control interfaces.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "Platform",
      titleLine2: "Convenience, Built In",
      "description": "One-touch joining for Microsoft Teams, Zoom, and other enterprise platforms.",
      "featured": true,
      "pattern": true
    },
    {
      titleLine1: "Clutter-Free",
      titleLine2: "Presentations",
      "description": "Wireless presentation from any device on a secure segmented network.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "Inclusive",
      titleLine2: "Collaborations",
      "description": "On-site and remote attendees get the same professional experience.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "End-to-End",
      titleLine2: "Delivery",
      "description": "Cabling, configuration and commissioning by Dubai-based engineers.",
      "featured": false,
      "pattern": true
    }
  ],
  video: {
    thumbnail: "/assets/images/meetingroom/meeting-room-video-thumb.jpg", 
    videoUrl: "/assets/videos/meeting-room.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  }
};
export const differenceData = {
  tag: "The Difference",
  heading: "Integrated \n Conference Room Solutions vs. Disconnected",
  highlightLast: 5, 
  subhead: "Many offices buy meeting room devices like display screens and cameras independently and expect them to work together. A properly integrated meeting room solution acts as a unified system, which changes the entire user experience.",
  headers : {
    scenario: "Area",
    without: "Ad Hoc Equipment Setup",
    with: "GS IT Integrated Room ",
  },
   table: [ 
  {
    scenario: "Starting a Meeting",
    without: "Manual cable connections, login prompts, and screen-sharing setup eat the first several minutes",
    with: "Single button on the room controller launches the calendar-linked meeting immediately"
  }, 
  {
    scenario: "Audio Quality",
    without: "Laptop microphone picks up only the nearest speaker, leaving remote attendees guessing who is talking",
    with: "Beamforming ceiling or table microphones tuned for the room's dimensions and seating layout"
  }, 
  {
    scenario: "Remote Participants",
    without: "Laptop webcam covers only the area directly in front, making most in-room people invisible on the call",
    with: "Wide-angle or PTZ camera frames the full table so every in-room attendee is visible online"
  }, 
  {
    scenario: "Room Booking",
    without: "No door display leads to double-bookings, walk-in interruptions, and arguments over who reserved the room",
    with: "Scheduler panel at the door shows live availability and syncs booking instantly with Microsoft 365 or Google Workspace"
  }, 
  {
    scenario: "Presentation Sharing",
    without: "One shared HDMI cable passes around the table, causing delays and incompatibility with non-HDMI devices",
    with: "Any device connects wirelessly with no app downloads or cables, and multiple presenters switch instantly"
  }, 
  {
    scenario: "Platform Flexibility",
    without: "Different platforms require different software states, often needing IT involvement to switch between external calls",
    with: "Room controller supports Teams, Zoom, Webex, and other platforms without re-configuring hardware between calls"
  },  
]
};

export const offersData = {
  tag: "WHAT WE OFFER",
  heading: "Meeting Room \n Solutions & Services We Provide",
  highlightLast: 5, 
  subhead: "Each service is available as a standalone engagement or as part of a fully integrated meeting room setup. GS IT handles supply, installation, configuration, and ongoing support of smart conference room solutions from a single point of contact.",
 description: "",
  cardsitem: [
    {
      image: "/assets/images/meetingroom/mr1.jpeg",
      titleLine1: "Video",
      titleLine2: "Conferencing Systems",
      description: "Teams, Zoom, and Webex-certified hardware with PTZ cameras and integrated audio.",
      highlighted: false,
      href: "",
       
    },
    {
      image: "/assets/images/meetingroom/mr2.jpeg",
      titleLine1: "Interactive",
      titleLine2: "Display Solutions",
      description: "Touch-enabled panels for live annotation, collaboration, and wireless content sharing.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr3.jpeg",
      titleLine1: "Meeting",
      titleLine2: "Room Schedulers",
      description: "Door panels synced with Microsoft 365 or Google Workspace showing live availability.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr4.jpeg",
      titleLine1: "Wireless",
      titleLine2: "Presentation Systems",
      description: "Cable-free screen sharing from any device, no app needed, on a segmented network.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr5.jpeg",
      titleLine1: "Retractable",
      titleLine2: "Monitor Systems",
      description: "Flush-fitted pop-up monitors for individual table viewing without cable clutter.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr6.jpeg",
      titleLine1: "Projectors &",
      titleLine2: "Large-Format Displays",
      description: "Short-throw and standard projection with motorized screens for training rooms.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr7.jpeg",
      titleLine1: "Professional Audio",
      titleLine2: "Systems",
      description: "Ceiling and table mic arrays with acoustic DSP tuned to room geometry and seating.",
      highlighted: false,
      href: "",
      
    },
    {
      image: "/assets/images/meetingroom/mr8.jpeg",
      titleLine1: "Meeting Room",
      titleLine2: "Automation Solutions",
      description: "Centralized touch interfaces managing displays, audio, video, lighting, and climate.",
      highlighted: false,
      href: "",
      
    }
  ]
}
;
 

export const roomConfigData={
  tag: "Room Configurations",
  heading: "Solutions Sized for \n Every Meeting Environment",
  highlightLast: 3, 
 description: "GS IT designs smart meeting room solutions based on room dimensions, participant numbers, and how the space is actually used, whether it's a daily standup or a boardroom presentation.",
  "items": [
  {
    id: "huddle",
    range: "2 to 4 People",
    title: "Huddle Meeting Room Solutions",
    description:
      "To maximize utility in cozy setups, we implement clutter-free environments driven by wireless content sharing.",
    image: "/assets/images/meetingroom/config1.jpeg",
  },
  {
    id: "small",
    range: "4 to 6 People",
    title: "Small Meeting Room Solutions",
    description:
      "Expect streamlined face-to-face communication via compact, high-fidelity collaboration bars and wireless mics.",
    image: "/assets/images/meetingroom/config2.jpeg",
  },
  {
    id: "medium",
    range: "8 to 12 People",
    title: "Medium Conference Room Solutions",
    description:
      "Our modular 4K kits with smart auto framing and wide acoustic pickup arrays make team collaborations easier.",
    image: "/assets/images/meetingroom/config3.jpeg",
  },
  {
    id: "large",
    range: "16 to 20 People",
    title: "Large Conference Room Solutions",
    description:
      "Custom-engineered multi-camera configurations and integrated ceiling arrays manage vast presentation venues.",
    image: "/assets/images/meetingroom/config4.jpeg",
  },
]
};
export const techData = {
  tag: "Technical Capabilities ",
  heading: "What a Unified Meeting Room \n Technology Can Deliver ",
  highlightLast: 3,
  subhead: "The difference between a room that frustrates users and one they never think about is in the underlying technical configuration. These are the capabilities GS IT builds into every integrated conference room installation.",
  servicesData : [
  {
    icon: "PictureInPicture2",
    title: "Multi-Platform Video Calling",
    description: "Join Teams, Zoom, or Webex from the room controller without plugging in a laptop. ",
    href: "",
    featured: true,
  },
  {
    icon: "Radar",
    title: "Room Occupancy Detection ",
    description: "The sensors release no-show bookings and push utilization data to the scheduler. ",
    href: "",
    featured: true,
  },
  {
    icon: "MonitorSmartphone",
    title: "BYOD Meeting Access ",
    description: "Your device drives the call while the room's camera, mic, and display take over. ",
    href: "",
    featured: true,
  },
  {
    icon: "Wifi",
    title: "Wireless Content Sharing ",
    description: "Presenters can share their screens to the display without cables, apps, or dongles. ",
    href: "",
    featured: true,
  },
  {
    icon: "BrainCircuit",
    title: "Intelligible Audio for Hybrid Calls ",
    description: "Beamforming mics and echo cancellation help remote teams hear everyone clearly. ",
    href: "",
    featured: true,
  },

  {
    icon: "CalendarCheck",
    title: "Calendar-Synced Room Scheduling ",
    description: "Real-time calendar sync keeps availability accurate and prevents walk-in conflicts. ",
    href: "",
    featured: true,
  },
  {
    icon: "/assets/images/icons/pointfinger1.svg",
    title: "Interactive Display & Annotation ",
    description: "Annotate directly on the panel and share session notes before the meeting wraps up. ",
    href: "",
    featured: true,
  },
  {
    icon: "Projector",
    title: "Centralized Meeting Room Control ",
    description: "A touchscreen controls display, camera presets, audio, lighting, and temperature. ",
    href: "",
    featured: true,
  },
   
]
}; 
export const businessOutcomes = {
    tag: "Business Outcomes",
  heading: "The Impact of Connected \n Meeting Rooms Devices",
  highlightLast: 3,
  subhead:
    "Meeting room problems has a cost that most organizations undercount. Wasted setup time, poor remote call quality, and no-show conflicts compound across every team. Well-connected conference room devices remove those problems at the source.",
  items:[
    {
    id: "on-schedule",
    title: "Meetings Start on Schedule",
    description:
      "Eliminating setup steps means the first five minutes are spent on agenda items, not troubleshooting cables or screens.",
  },
  {
    id: "remote-experience",
    title: "Equal Experience for Remote Attendees",
    description:
      "Each service is available as a standalone engagement or as part of a fully integrated meeting room setup.",
  },
  {
    id: "no-double-booking",
    title: "No Double-Booking Conflicts",
    description:
      "Digital scheduler panels show live availability at the door, preventing walk-in issues and simplifying room booking.",
  },
  {
    id: "lower-it-cost",
    title: "Lower Long-Term IT Cost",
    description:
      "Centralized management cuts support calls. Standardized systems also simplify tech onboarding across all locations.",
  },
  {
    id: "first-impression",
    title: "Professional First Impression",
    description:
      "An efficient meeting room signals operational maturity to clients, whereas disorganized AV harms your reputation.",
  },
  {
    id: "utilization-visibility",
    title: "Room Utilization Visibility",
    description:
      "Scheduling data tracks room usage, giving facility and IT teams actionable insight for future space planning choices.",
  },
  ]
};
export const partnersHeaderData = {
  tag: " AUTHORISED PARTNERS",
  heading: "Hardware Backed by \n Direct Manufacturer Partnerships ",
  highlightLast: 3 , 
}
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
export const approachData = {
  tag: "DEPLOYMENT PROCEDURE ",
  heading: "How We Build Your \n Meeting Room Setup in Dubai ",
  highlightLast: 5, 
  subhead: "At GS IT, we follow a structured process to deliver the right meeting room solution designed around your collaboration requirements.  ",
 data: [
  {
    "number": "01",
    "title": "Initial Consultation & Site Review",
    "description": "We assess your meeting room needs and review the site requirements."
  }, 
   {
    "number": "02",
    "title": "Custom Design & Quote",
    "description": "Our engineers draft a precise layout matching your exact budget parameters. "
  }, 
   {
    "number": "03",
    "title": "Product Selection & Procurement",
    "description": "We source the right meeting room equipment through authorized channels. "
  }, 
   {
    "number": "04",
    "title": "Professional Installation",
    "description": "Certified technicians deploy equipment, concealing all cables within walls. "
  }, 
   {
    "number": "05",
    "title": "Training & Guidance",
    "description": "We train your team to understand and use the integrated systems with ease. "
  }, 
], 
};
 export const whygsData = {
  tag: "Why GS IT",
  heading: "What Makes GS IT \n The Right Choice for Meeting Room Solutions",
  highlightLast: 7,  
  subhead: "Choosing the right meeting room integrator matters as much as choosing the right meeting room device in Dubai. These are the specific reasons our clients return to us for every new room or office fit-out.",
  whygs:[
  {
    "title": "Entirely Dubai-Based Team",
    "description": "Every technician works right out of Dubai. Urgent repairs and visits happen fast without overseas routing delays.",
    "url":""
  }, 
  {
    "title": "Authorized Partner Network",
    "description": "Our direct ties with major brands guarantee full warranty support. You get genuine hardware instead of grey stock.",
    "url":""
  },  
  {
    "title": "Single Scope, One Contractor",
    "description": "We handle design and support under one contract, meaning the same dedicated team builds and maintains your system.",
    "url":""
  },  
  {
    "title": "Experience Across Every Room Size",
    "description": "From huddle rooms to huge auditoriums, our team deploys every room type successfully in real UAE environments.",
    "url":""
  },  
  {
    "title": "Documented Handover & Training ",
    "description": "Along with complete documentation, your office team receives hands-on training to become completely self-sufficient.",
    "url":""
  },  
  {
    "title": "Post-Installation Support Contracts",
    "description": "Our AMC plans include scheduled maintenance visits, plus you get rapid on-site troubleshooting if an AV fault occurs.",
    "url":"#"
  },  
]
}; 
export const recomData = {
    backgroundImage: "/assets/images/meetingroom/footercta.jpeg", 
  mobbanner: "/assets/images/meetingroom/footercta.jpeg", 
  tag: "",
  heading: "The Right Room Setup Starts With \n The Right Conversation.",
    highlightLast: 10,
  description: "Tell us your room count, platform, and what keeps breaking. We'll scope the meeting room setup around your workspace needs. ",

  cta: "Book your room assessment",
  points:['Room Design & AV Integration','Multi-Platform Compatibility','Structured Cabling Services','AMC & On-Site Support'  ]
}; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions & Answers on \n Cloud Solutions",
  highlightLast:8,
 faqData : [
  {
    question: "We have five meeting rooms of different sizes. Can GS IT design a consistent experience across all of them? ",
    answer: 'Yes. GS IT produces a tiered hardware specification, one bill of materials per room category, so each space gets equipment scaled to its size while the control interface looks and behaves the same in every room. With our meeting room solutions in Dubai, users are trained on one system, not five. ',
  },   
  {
    question: "Our organization runs Microsoft Teams. Does it matter whether the hardware we choose is Teams-certified? ",
    answer: 'It matters considerably. MTR-certified conference room equipment unlocks one-touch calendar join, device management through the Teams Admin Center, and consistent call behavior. Uncertified meeting room systems often work initially but introduce inconsistencies over time that support teams cannot resolve remotely. ',
  },   
  {
    question: "What is the practical difference between a video bar and a complete conference room equipment setup?",
    answer: 'A video bar is an integrated unit combining camera, speaker, and microphone in one device, well-suited to rooms up to approximately eight seats. Larger rooms require separate PTZ cameras and dedicated ceiling or tabletop microphone arrays to achieve adequate coverage for all participants in the space. ',
  },   
  {
    question: "How does GS IT handle cabling in an occupied office without disrupting staff? ",
    answer: 'Our engineers survey the room before any work starts and plan cabling routes that minimize disruption to existing finishes and adjacent spaces. Our technicians handle structured cabling, conduit, and any wall or ceiling penetrations and complete the conference room installation on the agreed schedule. ',
  },   
  {
    question: "Can the room scheduler panel work with Google Workspace instead of Microsoft Exchange? ",
    answer: 'Yes. Scheduler panels from the brands we supply are compatible with Google Workspace, Microsoft 365, and Exchange on premises. Configuration is handled during commissioning and once set up, the panel requires no ongoing management from your IT team. ',
  },   
  {
    question: "A critical board meeting is scheduled. What happens if hardware fails that morning? ",
    answer: 'Clients on an AMC contract receive priority on-site response. GS IT engineers are Dubai-based, so same-day or next-business-morning attendance is the standard for critical failures. Quarterly preventive maintenance visits under AMC also reduce the likelihood of faults occurring close to high-priority events. ',
  },   
  {
    question: "Should I go with an interactive display or a standard screen?  ",
    answer: "If the room is used for whiteboarding, training, or multi-presenter sessions, go with interactive conference room display solutions. If it's purely for video calls and content viewing, a standard commercial display is sharper and cheaper. We'll tell you which fits based on how the room actually runs. ",
  },   
  {
    question: "Can GS IT take responsibility for rooms that a different company originally installed?",
    answer: 'Yes. GS IT conducts a technical audit of the existing installation, documents all hardware and configuration, and brings the room under our AMC. Where meeting room technology is outdated or incorrectly configured, we provide remediation options and costs before assuming ongoing responsibility for the system. ',
  },   
  {
    question: "Is wireless presentation secure enough for a boardroom where confidential content is shared? ",
    answer: 'Enterprise wireless meeting room solutions like presentation systems from Barco and comparable vendors support network segmentation, guest isolation, and encrypted transmission. GS IT configures them on a dedicated VLAN to ensure presentation traffic does not travel across the corporate network. ',
  },   
  {
    question: "How long does a typical single-room installation take from design approval to a usable room?",
    answer: 'A single room with an approved design typically takes three to seven business days, covering hardware delivery, installation, and full commissioning. Multi-room projects are phased and scheduled to avoid affecting adjacent spaces or business operations during working hours wherever possible. ',
  }
]
};
export const compatibilityData = {
  tag: " Platform Compatibility",
  heading: "Certified for the Platforms \n Your Teams Already Use ",
  highlightLast: 4 , 
  subhead:"No platform switch. No workarounds. Our modern meeting room solutions are certified across the tools your teams already use, so the meeting starts the moment someone hits Join",
  logo: [
  { src: "/assets/images/meetingroom/pc1.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc2.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc3.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc4.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc5.svg", alt: "" },
  { src: "/assets/images/meetingroom/pc6.svg", alt: "" },
  ]
  }; 