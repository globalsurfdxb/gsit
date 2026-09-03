 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "BOARDROOM AV SOLUTIONS · DUBAI & UAE · SINCE 2013 ",
  heading: "Boardroom Solutions for  \n Executive AV & Collaboration ",
  highlightLast: 4,
  description: "GS IT integrates boardroom AV systems across UAE while managing the underlying network cabling and security, giving you a single accountable partner for the entire setup. ",
  backgroundImage: "/assets/images/boardroom/banner.jpg", 
  mobbanner: "/assets/images/boardroom/mobbanner.jpg", 
  points:[
   { value: `${portfolioData.years}+Years `, desc:"Delivering AV & IT infrastructure"},
   { value: `Under 0.5s`, desc:"Target echo limit for clear speech "},
   { value: `One Panel`, desc:"Unified audio, display & camera control"},
   { value: `Fully Managed`, desc:"Design, programming & deployment"}, 
  ],
  buttons: [
    {
      text: "See Boardroom solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,
    {
      text: "Get your Boardroom consultation ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
};    
 export const ITArchitectureData = {
  tag: "OVERVIEW",
  heading: "Complete AV Systems Integrated  \n for High-Performance Boardrooms  ",
  highlightLast: 3,
  subhead:
    "GS IT plans each boardroom AV setup around the room’s acoustics, dimensions, and usage patterns. ",
 items: [
  {
    type: "image",
    image: "/assets/images/boardroom/overview1.jpg",
    title: "",
  },
  {
    type: "card",
    icon: "Headphones",
    title: "Acoustics Lead the Design",
    description: "Reverberation and noise readings decide the microphone and speaker selection before procurement.",
  },
  {
    type: "card",
    icon: "Sparkles",
    title: "AI-Powered Professional Setup",
    description: "AI framing and voice features are chosen with the hardware and configured by our engineers during setup.",
  },
  {
    type: "card",
    icon: "Users",
    title: "One Accountable Team",
    description: "The engineers who survey the space also write the control code and stay through installation and testing.",
  },
  {
    type: "card",
    icon: "ShieldCheck",
    title: "Discretion in the Finish",
    description: "Equipment sits inside joinery and ceiling voids which leaves the board table clear of visible hardware.",
  },
  {
    type: "image",
    image: "/assets/images/boardroom/overview2.jpg",
    title: "",
  },
],
};
 export const SectionHeaderData = {
  tag: "Starting Point",
  heading: "Acoustics Come First in a \n Boardroom AV Project",
  highlightLast: 3,
  subhead: "We analyze your current room acoustics and calibrate audio hardware around your existing setup.",
  servicesData : [
  {
    icon: "AudioLines",
    title: "Room Acoustic Auditing",
    description: "Baseline testing maps sound reflection paths to guide hardware selection.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "Radar",
    title: "Array Lobes & Placement",
    description: "Beamforming ceiling arrays target active seating zones to drop reflections.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "/assets/images/boardroom/st1.svg",
    title: "DSP Noise Suppression",
    description: "Ambient HVAC noise profiles are digitally removed without muffling speech.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "/assets/images/boardroom/st2.svg",
    title: "Echo Tail Calibration",
    description: "AEC algorithms get configured around existing room decay times for stability.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "/assets/images/boardroom/st3.svg",
    title: "Reflective Surface Strategy",
    description: "Pickup patterns steer microphone lobes away from glass and hard finishes.",
    href: "#",
    featured: true,
  }, 
  {
    icon: "/assets/images/boardroom/st4.svg",
    title: "Perimeter Sound Masking",
    description: "Sound masking emitters prevent boardroom discussions from leaking outside.",
    href: "#",
    featured: true,
  }, 
     
]
};
 export const aiinroomData = {
  tag: "AI in the Room",
  heading: "Advanced AI Features \n Powering Modern Boardroom AV",
  highlightLast: 4,
  subhead: "Smart AI capabilities in our boardroom audio visual solutions automate video switching, refine voice pickup, and track room usage in real time.",
 servicesData: [
  {
    icon: "Cloudy",
    title: "Intelligent Framing",
    description:
      "The shot recomposes on its own to hold faces at a readable size for remote people.",
    href: "#",
    featured: false,
  },
  {
    icon: "Radar",
    title: "Conversation-Aware Switching",
    description:
      "Multi camera systems blend their shots as discussion moves along the board table.",
    href: "#",
    featured: false,
  },
  {
    icon: "Wifi",
    title: "Presenter Boundaries",
    description:
      "A speaker who stands and walks stays framed inside an area fixed at commissioning.",
    href: "#",
    featured: false,
  },
  {
    icon: "ShieldCheck",
    title: "Voice Isolation",
    description:
      "On device processing separates speech from keyboard clicks and cooling system hum.",
    href: "#",
    featured: false,
  },
  {
    icon: "ArrowUp01",
    title: "Virtual Acoustic Boundaries",
    description:
      "AI detects and drops sound arriving from outside the area around the board table.",
    href: "#",
    featured: false,
  },
  {
    icon: "TrendingUp",
    title: "Live Transcript & Recap",
    description:
      "Platform assistants produce a transcript and action points once a session closes.",
    href: "#",
    featured: false,
  },
  {
    icon: "HouseWifi",
    title: "Occupancy-Driven Start",
    description:
      "Sensors wake the displays and the audio system as people walk into the boardroom.",
    href: "#",
    featured: false,
  },
  {
    icon: "Binoculars",
    title: "Usage Analytics",
    description:
      "Booking data set against real occupancy shows how hard the boardroom is working.",
    href: "#",
    featured: false,
  },
],
footerdata:"Device level features such as framing and noise handling come with the hardware itself. Assistant features that write transcripts and summaries depend on the conferencing platform you use. Once commissioned, we integrate both layers to run unified on your boardroom AV system."
};
 
  export const relatedservicesData = {
  tag: "Related services",
  heading: "Fully Integrated Boardrooms, \n Zero Handover Gaps",
  highlightLast: 3,
  subhead: "Single-vendor deployment eliminates vendor handover gaps across your entire executive meeting space.",
 servicesData: [
  {
    icon: "Cable",
    title: "Structured Cabling ",
    description:
      "Certified copper and fiber routes feeding the equipment rack behind the boardroom. ",
    href: "#",
    featured: false,
  }, {
    icon: "Video",
    title: "ELV Systems ",
    description:
      "SIRA-compliant CCTV, access control, and low-voltage systems integrated across floors",
    href: "#",
    featured: false,
  }, {
    icon: "Network",
    title: "Network Infrastructure ",
    description:
      "Switching and wireless design optimized for heavy AV traffic and corporate devices. ",
    href: "#",
    featured: false,
  }, {
    icon: "DoorClosedLocked",
    title: "Meeting Room Automation ",
    description:
      "Unified control solutions extended to adjacent meeting spaces across the same floor. ",
    href: "#",
    featured: false,
  },  
],
};
 
export const infrastructureData = {
  tag: "Our Services  ",
  heading: "The Full Boardroom Fit Out: \n End-to-End AV & Infrastructure Integration",
  highlightLast: 5,
  subhead:
    "Purpose-built boardroom AV setups in Dubai, handled end-to-end from cabling to final installation. ",
  
 cardData: [
  {
    id: "1",
    label: "Audio Capture & Reinforcement",
    cards: [
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Beamforming Microphone",
        titleLine2: "Arrays",
        description: "Voices captured cleanly from any seat at the table without cluttering the surface.",
        image: "/assets/images/boardroom/tab1.jpg",
        highlighted: true,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Tabletop Boundary &",
        titleLine2: "Gooseneck Mics",
        description: "Low profile wired or wireless units placed for direct pickup at fixed seat positions.",
        image: "/assets/images/boardroom/tab2.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Speakers & Soundbars",
        titleLine2: "",
        description: "Output mapped to ear level at the table which keeps remote voices sounding natural.",
        image: "/assets/images/boardroom/tab3.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Digital Signal Processors",
        titleLine2: "",
        description: "Hardware that processes audio to strip echo and background noise out of the room.",
        image: "/assets/images/boardroom/tab4.jpg",
        highlighted: false,
        url: "",
      },
    ],
  },
  {
    id: "2",
    label: "Cameras & Visual Output",
    cards: [
      {
        id: "cctv-installation-maintenance",
        titleLine1: "AI-Powered PTZ Cameras",
        titleLine2: "",
        description: "Pan tilt zoom units that follow the speaker and hold an optimal frame at a distance.",
        image: "/assets/images/boardroom/tab21.jpg",
        highlighted: true,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Multi-Camera Setups",
        titleLine2: "",
        description: "Front and rear units switched under director logic across a longer boardroom table.",
        image: "/assets/images/boardroom/tab22.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "LED Wall Systems",
        titleLine2: "",
        description: "Fine pitch LED display walls sized against the distance back to the last seated chair.",
        image: "/assets/images/boardroom/tab23.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Interactive Displays",
        titleLine2: "",
        description: "Interactive touchscreen displays enabling real-time annotation and content sharing.",
        image: "/assets/images/boardroom/tab24.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Retractable Monitors",
        titleLine2: "",
        description: "Screens that rise from the table for document review and drop away for discussion.",
        image: "/assets/images/boardroom/tab25.jpg",
        highlighted: true,
        url: "",
      },
    ],
  },
  {
    id: "3",
    label: "Control Sharing & Room Fabric",
    cards: [
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Touch Panel Controllers",
        titleLine2: "",
        description: "A single interface for controlling room volume, display inputs, and camera angles.",
        image: "/assets/images/boardroom/tab31.jpg",
        highlighted: true,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Wireless Presentation Hubs",
        titleLine2: "",
        description: "Cable free sharing from a director laptop without any lead swapping at the table.",
        image: "/assets/images/boardroom/tab32.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "UC Compute Appliances",
        titleLine2: "",
        description: "Integrated mini PCs that run the conferencing platform your organization uses.",
        image: "/assets/images/boardroom/tab33.jpg",
        highlighted: false,
        url: "",
      },
      {
        id: "cctv-installation-maintenance",
        titleLine1: "Room Automation & Scheduling",
        titleLine2: "",
        description: "Sensors, door panels, and climate control tied back into the same control layer.",
        image: "/assets/images/boardroom/tab34.jpg",
        highlighted: false,
        url: "",
      },
    ],
  },
],
};
export const grayboxData = {
 tag: "Why Choose Us",
  heading: "The Strengths GS IT Brings to \n Your Executive Boardrooms ",
  highlightLast: 3,
  subhead:
    "What businesses in Dubai gain when GS IT holds the whole scope for their boardroom AV solutions.",
  items: [
    {
      type: "01",
      image: "",
      icon: "",
      title: "Survey Comes Before the Quote ",
      description:
        "Precise room measurements and sightlines are verified prior to pricing any hardware.",
      href: "",
    },
    {
      type: "02",
      image: "",
      icon: "",
      title: "Programming Kept In House ",
      description: "In-house engineers author control code and audio preset, enabling fast future updates.",
      href: "",
    },
    {
      type: "03",
      image: "",
      icon: "",
      title: "Rooms Rehearsed Before Sign-Off",
      description: "Your team tests live calls inside the space before we formally complete the project.",
      href: "",
    },
    {
      type: "04",
      image: "",
      icon: "",
      title: "Coordination With Fit-Out Trades",
      description: "We coordinate with interior and MEP contractors to build clean cable routes and finishes.",
      href: "",
    },
    {
      type: "05",
      image: "",
      icon: "",
      title: "Consistency Across Sites",
      description: "Deploying a single control layout across rooms gives the users a familiar interface.",
      href: "",
    },
    {
      type: "06",
      image: "",
      icon: "",
      title: "AV AMC for Continuous Coverage",
      description: "Structured AMC contracts provide proactive site visits with SLA-based response times.",
      href: "",
    },
  ],
}; 
export const technologyOptionsTableData = {
  tag: "Specification Guide",
  heading: "Matching AV Equipment to \n Boardroom Dimensions & Seating",
  highlightLast: 4,
  subhead:
    "Seat count, height, and table length decide most of a boardroom AV set up long before any product decision is made.",
  columns: {
    media: "Seat Count",
    maxSpeed: "Display Approach",
    bandwidth: "Microphone Coverage",
    maxDistance: "Camera Setup",
    typicalUse: "Audio and Control",
  },
  rows: [
    {
      media: "10 to 12 seats",
      maxSpeed: "One 98 inch panel on the short wall",
      bandwidth: "One ceiling array or gooseneck units at fixed seats",
      maxDistance: "One PTZ camera with automatic framing",
      typicalUse: "Ceiling speakers and a DSP with a table touch panel",
    }, 
    {
      media: "14 to 16 seats",
      maxSpeed: "A 110 inch panel or two 86 inch panels side by side",
      bandwidth: "One ceiling array covering the full table",
      maxDistance: "Front camera supported by a rear view camera",
      typicalUse: "Four ceiling speakers through a DSP + table touch panel",
    }, 
    {
      media: "18 to 22 seats",
      maxSpeed: "A fine pitch LED wall sized to the far wall",
      bandwidth: "One large format array with zoned coverage areas",
      maxDistance: "Multi camera setup with speaker tracking",
      typicalUse: "Distributed speakers with DSP and AVoIP routing under one touch panel",
    }, 
    {
      media: "24 seats and above",
      maxSpeed: "LED wall with a confidence screen at the far end",
      bandwidth: "Multiple arrays plus table microphones at the head positions",
      maxDistance: "Three or more cameras under director logic",
      typicalUse: "Zoned audio on a redundant rack with touch panels where needed",
    },  
  ],
  cta:{
  title: "Want the boardroom sized by engineers integrating AV across Dubai?  ",
  description:"A short conversation about your room size and seat count is enough for our engineers to point you to the right level.",
  button:'Discuss your AV requirement',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] mb-3 text-primary',
   classdesc:"max-w-[66ch]"
},
roomreading : {
  title: "How to Read This Table Against Your Own Room",

  items: [
    "Total seat count and row depth confirm which room layout tier fits best.",
    "Displayed text stays readable when the last seat is within six image heights.",
    "Spreadsheets and dense data limit viewing distance at four screen heights.",
    "Arrays designed for three-meter ceilings behave differently in taller rooms.",
    "A single large-format array covers roughly 80 square meters of room space.",
    "Verifying the room figures early prevents late display swaps and fit issues.",
  ],
}
};

export const howweworkData = {
  tag: "How We Work",
  heading: "From Site Survey to a \n Signed Off Boardroom Handover",
  highlightLast: 4,
  subhead:
    "The route GS IT follows to set up boardroom spaces for corporate offices across Dubai and the UAE.",
  data: [
  {
    number: "01",
    title: "Site Survey",
    description: "Table length, seating, and wall finishes measured alongside existing network.",
  },
  {
    number: "02",
    title: "Design & Drawings",
    description: "Layouts, schematics, and signal flow issued for approval before ordering.",
  },
  {
    number: "03",
    title: "Rack Build",
    description: "Equipment assembled and wired at our workshop to shorten site time.",
  },
  {
    number: "04",
    title: "Installation",
    description: "Mounting cabling and containment carried out with the fit out trades.",
  },
  {
    number: "05",
    title: "Commissioning",
    description: "Control code loaded and audio tuned against readings taken in the room.",
  },
  {
    number: "06",
    title: "Testing & Handover",
    description: "Live calls run with your team, then drawings and documents are handed over.",
  }, 
],
  };
 

 
 
 
  export const partnersData = {
  tag: " Our Partners",
  heading: "Our Technology Partners",
  highlightLast: 1, 
   };
  export const logoData= [
  { src: "/assets/images/boardroom/partner1.svg", alt: "Partner 1" },
  { src: "/assets/images/boardroom/partner2.svg", alt: "Partner 2" },
  { src: "/assets/images/boardroom/partner3.svg", alt: "Partner 3" },
  { src: "/assets/images/boardroom/partner4.svg", alt: "Partner 4" },
  { src: "/assets/images/boardroom/partner5.svg", alt: "Partner 5" },
  { src: "/assets/images/boardroom/partner6.svg", alt: "Partner 6" },
  { src: "/assets/images/boardroom/partner7.svg", alt: "Partner 7" },
  { src: "/assets/images/boardroom/partner8.svg", alt: "Partner 8" }, 
 
]  ; 
 
export const recomData = {
    backgroundImage: "/assets/images/boardroom/faqbanner.jpg", 
  mobbanner: "/assets/images/boardroom/mobfaqbanner.jpg", 
  tag: "Planning a Boardroom AV Integration Project?",
  heading: "Connect with our engineers to review your space \n and discuss the boardroom meeting setup.",
  highlightLast: 15,
  description:"",
    points:["Free Site Survey and Room Measurement","Display Sizing Checked Against Seat Distance","Acoustic Reading Taken Before Design Sign-Off","One Team from Drawing Through Handover"],
  cta: "Talk to AV specialist ",
 }; 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Boardroom \n AV Solutions ",
  highlightLast:7,
faqData: [
  {
    question: "How long does a boardroom AV setup take from order to handover?",
    answer:
      "Hardware installation takes three to five weeks once equipment arrives. Survey and design move ahead of that, progressing at the speed layout drawings get approved. If your space requires acoustic panels, those must be fully installed prior to AV deployment.",
  },
  {
    question: "Can existing equipment be reused when upgrading a boardroom?",
    answer:
      "Existing displays and functional speakers often integrate well into new designs if they fit the room’s scale. Microphones and video codecs rarely carry over because conferencing software platforms frequently update their hardware compatibility standards, making older units incompatible long before they physically fail. A pre-project boardroom system survey identifies reusable gear before finalizing your budget.",
  },
  {
    question: "How many microphones does a sixteen-seat boardroom need?",
    answer:
      "A single ceiling array usually handles a sixteen-seat table. Modern units capture roughly nine square meters using dynamic steering zones. A second array or extra table mics are only necessary for unusually high ceilings or when specific seats require dedicated audio priority.",
  },
  {
    question: "What display size suits a boardroom table of six meters?",
    answer:
      "A 98-inch panel works well for standard presentation slides. However, viewing detailed spreadsheets from seven meters back requires a screen height ratio that standard displays struggle to reach. For dense data, an LED video wall is usually the better path.",
  },
  {
    question: "Does a boardroom need a DSP when the video bar already handles audio?",
    answer:
      "Yes, tables over six meters require a dedicated DSP when planning a boardroom conference system. All-in-one video bars lose clarity past twelve seats. Scaling up calls for ceiling microphone arrays paired with an external processor to handle echo cancellation and keep all voices clear to the far end.",
  },
  {
    question: "Who looks after the room after handover?",
    answer:
      "Your internal IT staff manage day-to-day operations using the training and documentation provided at commissioning. For ongoing maintenance, an AV AMC agreement adds remote system monitoring, scheduled preventive visits, and SLA-backed repair response times.",
  },
  {
    question: "Should acoustic treatment be finished before the AV installation?",
    answer:
      "Acoustic work must wrap up before AV installation begins. Wall panels and sound baffling alter room reverberation, directly impacting how microphone gain and processing are calibrated. Installing panels afterward means re-tuning the system and extending project timelines.",
  },
  {
    question: "How is confidential audio kept from leaving the boardroom?",
    answer:
      "We study your room dimensions and physical build to design an integrated boardroom AV system that prevents sound leakage. Acoustic masking emitters outside the room obscure residual speech bleed. We provide the best boardroom video conferencing solutions with secure encryption, protecting the recordings under your existing IT security policies.",
  },
  {
    question: "Can the same design be repeated across other offices?",
    answer:
      "Standardized designs work great across locations, giving traveling executives a familiar touch interface everywhere. When room layouts or ceiling heights vary between sites, display sizing and audio coverage simply get recalibrated to match the space while keeping the core user interface identical.",
  },
  {
    question: "Do the AI features in a boardroom need extra licensing?",
    answer:
      "On-device processing like active speaker tracking and background noise suppression comes built into the hardware. Higher-level features like automated meeting transcripts and action item generation run on your video platform, depending entirely on the license tier your organization maintains.",
  },
],
};