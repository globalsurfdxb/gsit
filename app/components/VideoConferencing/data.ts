import { DoorClosed, User } from "lucide-react";
import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Video Conferencing Solutions Dubai, UAE · Since 2013 ",
  heading: "Video Conferencing Solutions in Dubai ",
  highlightLast: 3,
  description:
    "GS IT installs reliable video conferencing equipment scaled to your space, helping teams collaborate clearly with authorized hardware on your chosen platform. ",
  backgroundImage: "/assets/images/video-conf/banner.jpeg",
  mobbanner: "/assets/images/video-conf/banner-mob.jpeg",
  points: [
    { value: `Since 2013`, desc: "Deploying AV solutions in the UAE " },
    { value: "One-Touch", desc: "Join from the room controller" },
    { value: "Multi-Platform ", desc: "Teams, Zoom & Webex certified " },
    { value: "UAE Support ", desc: "Full AMC coverage across emirates " },
  ],
  buttons: [
    {
      text: "Explore Our Solutions",
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
export const rightFitData = {
  tag: "Overview",
  heading:
    "Hybrid Meetings Without the Gap:\nVideo Conferencing Solutions in Dubai",
  highlightLast: 5,
  subhead:
    "Whether your team is connecting with remote colleagues or presenting to clients overseas, GS IT enables professional and productive interactions through video conference room solutions customized to your spaces. ",
  features: [
    {
      titleLine1: "Built for ",
      titleLine2: "Your Platform ",
      description:
        "Runs natively on Teams, Zoom, and Webex without setup or complex downloads. ",
      featured: false,
      pattern: false,
    },
    {
      titleLine1: "Right Sized",
      titleLine2: "to Each Space.",
      description:
        "Displays, mics, and cameras match the exact room size for optimal audio visuals. ",
      featured: false,
      pattern: false,
    },
    {
      titleLine1: "No Seat ",
      titleLine2: "Left Off-Screen ",
      description:
        "Wide-angle lenses adjust dynamically to keep the entire room clearly in view. ",
      featured: true,
      pattern: true,
    },
    {
      titleLine1: "Any Device, ",
      titleLine2: "Any Guest ",
      description:
        "BYOD capabilities support visitors to join discussions from their own devices. ",
      featured: false,
      pattern: false,
    },
    {
      titleLine1: "Easy to Use",
      titleLine2: "Without IT Support",
      description:
        "Simple touch controls and straightforward guides let staff run meetings smoothly. ",
      featured: false,
      pattern: false,
    },
    {
      titleLine1: "One Partner from",
      titleLine2: "Survey to Support",
      description:
        "A single vendor manages site evaluation, hardware installation, and maintenance. ",
      featured: false,
      pattern: true,
    },
  ],
  video: {
    thumbnail: "/assets/images/video-conf/video2.jpg",
    videoUrl: "/assets/videos/meeting-room.mp4",
    // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  },
};
export const probData = {
  tag: "The Problem",
  heading: "Common {{Challenges}} \n That Impact Video Collaborations",
  highlightLast: 4,
  subhead:
    "Even the best teams struggle when conferencing technology creates friction. Modern video conference room solutions should remove barriers and create a consistent experience for every participant.",
  servicesData: [
    {
      icon: "/assets/images/icons/audiolinesx.svg",
      title: "Poor Audio Quality",
      description:
        "Background noise and uneven voice capturing ruin clarity and stall meetings.",
      href: "#",
      featured: true,
    },
    {
      icon: "HeartHandshake",
      title: "Inconsistent User Experience",
      description:
        "Varied room setups and tricky device behaviors slow adoption and productivity.",
      href: "#",
      featured: false,
    },
    {
      icon: "TabletSmartphone",
      title: "Platform Compatibility Issues",
      description:
        "Switching between various meeting apps causes unexpected glitches and delays.",
      href: "#",
      featured: false,
    },
    {
      icon: "HouseWifi",
      title: "Remote Participant Engagement",
      description:
        "Subpar audio or video stream drops make remote team members feel excluded.",
      href: "#",
      featured: false,
    },
    {
      icon: "MapPlus",
      title: "Scaling Across Locations",
      description:
        "Keeping conferencing consistent across all branches needs centralized planning.",
      href: "#",
      featured: false,
    },
    {
      icon: "Cable",
      title: "Complex Cable Setup",
      description:
        "Messy cables and physical dongles delay start times and introduce failure points.",
      href: "#",
      featured: false,
    },
  ],
};

export const videoConferencingItems = {
  tag: "Our Customized Solutions",
  heading: "Video Conferencing \n Designed for Every Workspace   ",
  subhead:
    "Different Environments Require Different Conferencing Approaches. GS IT Delivers Video Conferencing Solutions That Align With Room Size, User Expectations, And Collaboration Needs.",
  highlightLast: 4,
  items: [
    {
      id: "huddle",
      tag: "Huddle Room",
      title: "Quick Collaboration Spaces",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: "2-4 People",
      description:
        "Purpose-built systems for quick team discussions that deliver a smooth meeting experience for 2-4 people.",
      tags: [
        "All-in-one video bar ",
        "Echo tuned to the room ",
        "One-touch join ",
      ],
      image: "/assets/images/video-conf/room1.jpeg",
    },
    {
      id: "small-office",
      tag: "Small Meeting Room",
      title: "A Video Bar with Room to Grow",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: "5–8 People",
      description:
        "Video conferencing systems that help growing teams connect with clients and remote staff without complexity.",
      tags: [
        "Group & speaker framing",
        "Calendar-linked",
        "Extension mic for far seats",
      ],
      image: "/assets/images/video-conf/room2.jpeg",
    },
    {
      id: "mid-boardroom",
      tag: "Medium Conference Room",
      title: "Where One Device Stops Being Enough",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: "9–12 People",
      description:
        "Designed for structured discussions where clear communication and dependable room coverage are essential.",
      tags: ["PTZ or dual cameras", "Table or ceiling mics", "Dual displays"],
      image: "/assets/images/video-conf/room3.jpeg",
    },
    {
      id: "large-rooms",
      tag: "Large Room / Boardroom",
      title: "Board-Level Calls, Every Voice Covered",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: "13–20 People",
      description:
        "Multi-camera systems and distributed audio ensure every participant can be seen and heard across larger spaces.",
      tags: [
        "Wide-angle & tracking cameras",
        "Distributed speaker & mic arrays",
        "Interactive displays & LED walls",
      ],
      image: "/assets/images/video-conf/room4.jpeg",
    },
    {
      id: "training",
      tag: "Training / Town Hall",
      title: "Built for Learning & Knowledge Sharing",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: "21+ People",
      description:
        "Designed for instructor-led sessions where clear presentation delivery and audience participation matter equally.",
      tags: [
        "Presenter-tracking cameras",
        "Room-wide audio coverage",
        "Interactive content sharing",
      ],
      image: "/assets/images/video-conf/room5.jpeg",
    },
    {
      id: "hybrid",
      tag: "Multi-Site & Hybrid Offices",
      title: "One Standard Across Every Location",
      icon: "DoorClosed",
      peopleIcon: "User",
      people: null,
      description:
        "Delivers consistent meeting experience for office teams and remote participants across different locations.",
      tags: ["One interface", "Cross-platform joining", "Central management"],
      image: "/assets/images/video-conf/room6.jpeg",
    },
  ],
};

export interface TechComponentItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const smarterEquipmentData = {
  tag: "TECHNICAL COMPONENTS",
  heading: "Smarter AV Elevating \nHybrid Meetings ",
  highlightLast: 2,
  subhead:
    "GS IT supplies and installs the full range of hardware that makes a video conferencing system function as intended. Each category below is available individually or as part of a complete conference room audio video solution.",
  items: [
    {
      image: "/assets/images/video-conf/tech-components/ptz-camers.jpg",
      imageAlt: "PTZ conference room camera",
      title: "PTZ & Wide-Angle Cameras",
      description:
        "Pan-tilt-zoom and fixed-angle conference cameras matched to the room's seating count and depth.",
    },
    {
      image: "/assets/images/video-conf/tech-components/room-audio.jpg",
      imageAlt: "Room audio and microphone array pucks",
      title: "Room Audio & Microphone Arrays",
      description:
        "Advanced ceiling and table mic systems with DSP processing for clear voice capture across the room. ",
    },
    {
      image: "/assets/images/video-conf/tech-components/video-bar.jpg",
      imageAlt: "Video bar mounted below a display for a compact meeting space",
      title: "Video Bars for Compact Spaces",
      description:
        "All-in-one camera, microphone and speaker units that suit huddle and small rooms up to around eight seats.",
    },
    {
      image: "/assets/images/video-conf/tech-components/wireless-byod.jpg",
      imageAlt: "Wireless video conferencing presentation puck",
      title: "Wireless Sharing & BYOD ",
      description:
        "Cable-free content sharing from any device on a segmented network without drivers or app installation.",
    },
    {
      image: "/assets/images/video-conf/tech-components/room-shedule.jpg",
      imageAlt: "Room scheduling display mounted outside a meeting room",
      title: "Room Scheduling Displays",
      description:
        "Door panels synced with Microsoft 365 or Google Workspace show live booking status outside each room.",
    },
    {
      image: "/assets/images/video-conf/tech-components/display.jpg",
      imageAlt: "Interactive touch display used during a meeting",
      title: "Interactive Display Solutions",
      description:
        "Touch-enabled panels for annotation, co-editing and content sharing during video conference sessions. ",
    },
  ],
};
// export const approachData = {
//   tag: "Deployment Procedure ",
//   heading: "How We Deploy Video \n Conferencing Solutions in Dubai ",
//   highlightLast: 4,
//   subhead:
//     "We always deploy audio video conferencing solutions following a defined process. Each stage is completed and signed off before the next begins, so there are no specification gaps at installation and no configuration surprises at commissioning.",
//   data: [
//     {
//       number: "01",
//       title: "Site Assessment & System Design",
//       description:
//         "Engineers measure dimensions, analyze acoustics and verify network readiness before making design choices.",
//     },
//     {
//       number: "02",
//       title: "Hardware Supply & Procurement",
//       description:
//         "We source authorized equipment with full warranties, verifying every physical item prior to installation.",
//     },
//     {
//       number: "03",
//       title: "Professional Installation & Cabling",
//       description:
//         "All hardware is mounted professionally, hiding cables to deliver an exceptionally clean and lasting finish.",
//     },
//     {
//       number: "04",
//       title: "Configuration, Testing & Training",
//       description:
//         "After provisioning your Zoom or Teams room, we test call quality and walk your staff through the system.",
//     },
//     {
//       number: "05",
//       title: "Ongoing Support & AMC",
//       description:
//         "Annual contracts cover critical firmware updates, fast fault responses, and SLA-backed on-site support.",
//     },
//   ],
// };
export const approachData = {
  tag: "DEPLOYMENT PROCEDURE",
  heading: "How We Deploy Video \n Conferencing Solutions in Dubai",
  highlightLast: 4,
  subhead:
    "We always deploy audio video meeting solutions following a structured process. Each stage is completed and signed off before the next begins, so there are no specification gaps at installation and no configuration surprises at commissioning.",
  data: [
    {
      number: "01",
      title: "Site Assessment & System Design",
      description:
        "We measure room acoustics, test network drops, and evaluate existing video call issues.",
    },
    {
      number: "02",
      title: "System Design & Quote",
      description:
        "Our engineering plans detail camera angles, microphone coverage, displays, and pricing.",
    },
    {
      number: "03",
      title: "Authorized Supply",
      description:
        "Platform-certified hardware sourced via authorized channels, with manufacturer warranty.",
    },
    {
      number: "04",
      title: "Installation & Cabling",
      description:
        "Mounts, wiring, and audiovisual components are deployed in alignment with fit-out plans.",
    },
    {
      number: "05",
      title: "Platform & Network Setup",
      description:
        "Engineers configure room calendars, network quality settings, and DSP audio parameters.",
    },
    {
      number: "06",
      title: "Test Calls & Training",
      description:
        "End-to-end audio checks validate AV performance before staff training and IT handover.",
    },
  ],
  handoverData: {
    tag: "At Handover",
    heading: "What you receive",
    subhead:
      "Detailed handover documentation equips administrators and staff to manage installed room technology confidently.",
    items: [
      {
        id: "av-schematics",
        icon: "/assets/images/video-conf/process/schematic.svg",
        title: "AV Schematics & Drawings",
        description:
          "As-built system diagrams map all power and signal routes.",
      },
      {
        id: "equipment-register",
        icon: "/assets/images/video-conf/process/equipment.svg",
        title: "Equipment & Account Register",
        description: "Complete list of hardware models, firmware, and logins.",
      },
      {
        id: "test-call-report",
        icon: "/assets/images/video-conf/process/test-call.svg",
        title: "Test Call Report",
        description:
          "Signed commissioning logs confirm speech and video quality.",
      },
      {
        id: "quick-start-guides",
        icon: "/assets/images/video-conf/process/quick-start.svg",
        title: "Quick-Start Guides",
        description: "How to join, share, and call, one guide for each room.",
      },
      {
        id: "staff-training",
        icon: "/assets/images/video-conf/process/training.svg",
        title: "Staff & Admin Training",
        description: "Hands-on guidance for your end users and IT managers.",
      },
      {
        id: "amc-contract",
        icon: "/assets/images/video-conf/process/av-amc.svg",
        title: "AV AMC contract",
        description: "24/7 remote help desk and SLA-backed on-site support.",
      },
    ],
  },
};

export const amcData = {
  tag: "AV AMC",
  heading: "Keep Every Room\nCall-Ready After Go-Live",
  descriptionParagraphs: [
    "With an AV AMC, your team gets regular checkups and fast technical support when issues pop up. GS IT offers dedicated AV maintenance plans to ensure consistent, hassle-free video conferencing in Dubai.",
    "Rooms installed by another company? We audit them first, document what is there, and then bring them under the same contract.",
  ],
  buttonText: "Explore Our Solutions",
  buttonHref: "#",
  cardTitle: "WHAT AN AV AMC COVERS",
  features: [
    {
      id: "help-desk",
      title: "24/7 remote help desk",
      description: "Remote diagnostics and fixes, around the clock",
    },
    {
      id: "onsite-support",
      title: "SLA-Backed On-Site Support",
      description:
        "Prompt physical intervention whenever devices fail on site.",
    },
    {
      id: "preventive-maintenance",
      title: "Preventive Maintenance Visits",
      description:
        "Scheduled inspections detect potential faults before calls.",
    },
    {
      id: "updates",
      title: "Firmware & Platform Updates",
      description: "Timely patches align room devices with platform changes.",
    },
    {
      id: "monitoring",
      title: "Device monitoring",
      description: "Real-time status checks flag unresponsive AV units early.",
    },
    {
      id: "training",
      title: "Refresher training",
      description: "User guidance for onboarding staff, new rooms, or updates.",
    },
  ],
};
export const techData = {
  tag: "CAPABILITIES & OUTCOMES",
  heading: "What Our Video Conferencing\n Systems Change for Your Team",
  highlightLast: 5,
  subhead:
    "Every capability GS IT configures is there for a business reason. Here is what each one does, and what changes for the people on both ends of the call.",
  servicesData: [
    {
      icon: "/assets/images/video-conf/capabilities/touch-controller.svg", // or your preferred path
      title: "Touch Controller & One-Tap Join",
      description:
        "Scheduled calendar meetings launch instantly via tabletop touch displays.",
      highlight:
        "Attendees connect on time without cable hunting or account logins.",
      href: "",
      featured: true,
    },
    {
      icon: "/assets/images/video-conf/capabilities/auto-framing.svg",
      title: "Auto-Framing & Speaker Tracking",
      description:
        "AI-powered cameras frame the entire group while following active speakers.",
      highlight:
        "Distributed team members maintain full context during group debates.",
      href: "",
      featured: true,
    },
    {
      icon: "/assets/images/video-conf/capabilities/noise-cancellation.svg",
      title: "Noise Cancellation & Echo Suppression",
      description:
        "Advanced acoustic filters eliminate background HVAC hums and typing sounds.",
      highlight:
        'Conversations flow without "can you repeat that?" interruptions.',
      href: "",
      featured: true,
    },
    {
      icon: "/assets/images/video-conf/capabilities/cross-platform.svg",
      title: "Cross-Platform Joining & BYOD",
      description:
        "Connect to Teams, Zoom, or Webex meetings through unified room hardware.",
      highlight:
        "Client calls run on the room's camera and audio, whoever sends the invite.",
      href: "",
      featured: true,
    },
    {
      icon: "/assets/images/video-conf/capabilities/remote-device.svg",
      title: "Remote Device Management",
      description:
        "Web portals provide technical teams with full visibility of hardware health metrics.",
      highlight:
        "Technical faults get resolved prior to scheduled calendar appointments.",
      href: "",
      featured: true,
    },
    {
      icon: "/assets/images/video-conf/capabilities/one-standard.svg",
      title: "One Standard Across Every Room",
      description:
        "Consistent layouts and user interfaces deploy uniformly across office locations.",
      highlight:
        "Staff use every room the same way, and new rooms are added without redesign.",
      href: "",
      featured: true,
    },
  ],
  ecosystemBadges: {
    title: "Built for the platforms you use every day",
    platforms: [
      {
        name: "Microsoft Teams",
        icon: "/assets/images/video-conf/capabilities/ecosystem/team.svg",
      },
      {
        name: "Zoom",
        icon: "/assets/images/video-conf/capabilities/ecosystem/zoom.svg",
      },
      {
        name: "Webex Meetings",
        icon: "/assets/images/video-conf/capabilities/ecosystem/webex.svg",
      },
      {
        name: "Pexip",
        icon: "/assets/images/video-conf/capabilities/ecosystem/pexip.svg",
      },
    ],
  },
};

export const platformCompatibilityData = {
  tag: "PLATFORM COMPATIBILITY",
  heading: "Built for the Platforms {{You}} \n  {{Use Everyday}}",
  highlightLast: 4,
  paragraphs: [
    "GS IT has been delivering interactive display solutions across Dubai and the UAE for 13 Years. Businesses searching for interactive screens in Dubai trust GS IT to transform their meeting rooms, training centers, boardrooms, and classrooms into environments built for real collaboration.",
    "Every interactive panel GS IT supply is a purpose-built professional tool. Unlike a consumer TV, an interactive flat panel display combines a high-resolution touch surface with built-in processing, integrated AV, and collaboration software all in a single device.",
  ],
  platforms: [
    { name: "Microsoft Teams", logo: "/assets/images/video-conf/icon1.svg" },
    { name: "Zoom", logo: "/assets/images/video-conf/icon2.svg" },
    { name: "Pexip", logo: "/assets/images/video-conf/icon3.svg" },
    {
      name: "Video Conferencing Platform",
      logo: "/assets/images/video-conf/icon4.svg",
    },
  ],
};
export const serverChoicesData = {
  tag: "BUSINESS OUTCOMES ",
  heading: "What Changes \n When Your Video Calls Actually Work ",
  highlightLast: 6,
  subhead:
    "Unreliable video conferencing in Dubai has a measurable cost: delayed meetings, excluded remote participants, and IT resources diverted to recurring AV faults. A properly installed video conferencing system avoids these friction points.",
  items: [
    {
      type: "card",
      icon: "CalendarCheck",
      title: "Meetings Start on Schedule",
      description:
        "Calendar-linked, one-touch join eliminates the annoying setup friction that routinely delays calls in makeshift spaces.",
    },
    {
      type: "card",
      icon: "Users",
      title: "Equal Presence for Offsite Teams",
      description:
        "Wide-angle lenses and room-grade audio let offsite colleagues see, hear, and contribute without repeating themselves.",
    },
    {
      type: "card",
      icon: "MonitorPlay",
      title: "Credibility in External Meetings",
      description:
        "High-end video setups signal deep operational maturity immediately, which matters immensely during vital client calls.",
    },
    {
      type: "card",
      icon: "Headset",
      title: "Lower IT Support Overhead",
      description:
        "Certified hardware with remote management and AMC coverage reduces ad-hoc fault callouts across every location.",
    },
    {
      type: "card",
      icon: "Handshake",
      title: "Consistent Experience Across Sites",
      description:
        "Standardized technology means staff deals with the same interface whether they are in Dubai or a remote branch office.",
    },
    {
      type: "card",
      icon: "TrendingUp",
      title: "Scalable as Your Business Grows",
      description:
        "Platform-certified gear integrates into existing management tools, expanding to new rooms without structural rework.",
    },
  ],
};
export const partnersData = {
  tag: "AUTHORISED PARTNERS",
  heading: "Hardware Backed by \n Direct Manufacturer Partnerships ",
  highlightLast: 3,
  imageSrc: "/assets/images/video-conf/GS.AV.svg",
  rightDescription:
    "We choose equipment for the room, not the other way round. Crestron, QSC and Yealink are brands we're authorised dealers for.",
};
export const logoData = [
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
];

export const techPartnerData = [
  {
    id: "video-room",
    title: "Video & room systems",
    logos: [
      { src: "/assets/images/meetingroom/tecpartner10.svg", alt: "Yealink" },

      { src: "/assets/images/meetingroom/tecpartner3.svg", alt: "Logitech" },
      { src: "/assets/images/meetingroom/tecpartner6.svg", alt: "Poly" },
      { src: "/assets/images/meetingroom/tecpartner9.svg", alt: "Barco" },
      { src: "/assets/images/meetingroom/tecpartner8.svg", alt: "Cisco" },
      { src: "/assets/images/video-conf/tech-partner/avr.svg", alt: "avr" },
      {
        src: "/assets/images/video-conf/tech-partner/huddly.svg",
        alt: "huddly",
      },
      { src: "/assets/images/meetingroom/tecpartner5.svg", alt: "Jabra" },
    ],
  },
  {
    id: "audio-dsp",
    title: "Audio & DSP",
    logos: [
      { src: "/assets/images/meetingroom/tecpartner2.svg", alt: "QSC" },
      {
        src: "/assets/images/video-conf/tech-partner/shure.svg",
        alt: "Shure",
      },
      {
        src: "/assets/images/video-conf/tech-partner/sennheiser.svg",
        alt: "Sennheiser",
      },
      {
        src: "/assets/images/video-conf/tech-partner/clearone.svg",
        alt: "ClearOne",
      },
      { src: "/assets/images/meetingroom/tecpartner7.svg", alt: "Biamp" },
      {
        src: "/assets/images/video-conf/tech-partner/yamaha.svg",
        alt: "Yamaha",
      },
      { src: "/assets/images/video-conf/tech-partner/jbl.svg", alt: "JBL" },
      { src: "/assets/images/video-conf/tech-partner/bose.svg", alt: "Bose" },
    ],
  },
  {
    id: "displays",
    title: "Displays",
    logos: [
      {
        src: "/assets/images/video-conf/tech-partner/clevertouch.svg",
        alt: "Clevertouch",
      },
      {
        src: "/assets/images/video-conf/tech-partner/onescreen.svg",
        alt: "OneScreen",
      },
      {
        src: "/assets/images/video-conf/tech-partner/maxhub.svg",
        alt: "Maxhub",
      },
      {
        src: "/assets/images/video-conf/tech-partner/samsung.svg",
        alt: "Samsung",
      },
      { src: "/assets/images/video-conf/tech-partner/lg.svg", alt: "LG" },
      { src: "/assets/images/video-conf/tech-partner/sony.svg", alt: "Sony" },
      {
        src: "/assets/images/video-conf/tech-partner/sharp-nec.svg",
        alt: "Sharp/NEC",
      },
    ],
  },
  {
    id: "control-systems",
    title: "Control systems",
    logos: [
      {
        src: "/assets/images/video-conf/tech-partner/crestron.svg",
        alt: "Crestron",
      },
      {
        src: "/assets/images/video-conf/tech-partner/q-sys.svg",
        alt: "Q-SYS",
      },
      {
        src: "/assets/images/video-conf/tech-partner/extron.svg",
        alt: "Extron",
      },
      { src: "/assets/images/video-conf/tech-partner/amx.svg", alt: "AMX" },
      {
        src: "/assets/images/video-conf/tech-partner/kramer.svg",
        alt: "Kramer",
      },
    ],
  },
];

export const AvCertificateData = {
  title:"AV certifications held by our engineers",
  data: [
    {
      id: "crestron",

      src: "/assets/images/video-conf/certificate/crestron.svg",
      alt: "Crestron Certificate",
    },

    {
      id: "q-sys",

      src: "/assets/images/video-conf/certificate/q-sys.svg",
      alt: "Q-SYS Certificate",
    },
    {
      id: "yealink",

      src: "/assets/images/video-conf/certificate/yealink.svg",
      alt: "Yealink Certificate",
    },
    {
      id: "microsoft",

      src: "/assets/images/video-conf/certificate/microsoft.svg",
      alt: "Microsoft Certificate",
    },
    {
      id: "extron",

      src: "/assets/images/video-conf/certificate/extron.svg",
      alt: "Extron Certificate",
    },
    {
      id: "cisco",
      src: "/assets/images/video-conf/certificate/cisco.svg",
      alt: "Cisco Certificate",
    },
  ],
};
// export const whyChooseUsData = {
//   tag: "WHY GS IT",
//   heading: "What Sets Our Video Conferencing \n Solutions Apart in Dubai",
//   highlightLast: 4,
//   subhead: `Selecting a video conferencing supplier in Dubai is not only about hardware pricing. The quality of the installation, the depth of platform knowledge, and the reliability of post-installation support determine whether the investment performs over time.`,
//   points: [
//     {
//       title: "Dubai-Based Engineers",
//       description:
//         "Our local engineers design, install, and service your system, delivering faster on-site responses for critical faults.",
//     },
//     {
//       title: "Manufacturer-Authorized Supply",
//       description:
//         "Direct partnerships grant you genuine warranty support, access to the latest product ranges, and zero grey-market risks.",
//     },
//     {
//       title: "Platform-Certified Hardware",
//       description:
//         "Video conferencing systems with verified certification for Teams, Zoom, or Webex before the workspace is handed over.",
//     },
//     {
//       title: "Transparent, Scope-Based Pricing",
//       description:
//         "You receive a detailed bill of materials upfront without any hidden installation charges or surprise post-survey additions.",
//     },
//     {
//       title: "Full Documentation at Handover",
//       description:
//         "Each project concludes with as-built drawings, a complete hardware configuration inventory, and a live training session.",
//     },
//     {
//       title: "Proactive AMC Coverage",
//       description:
//         "Expect scheduled firmware updates, quarterly preventive maintenance visits, and priority on-site response via live calls.",
//       link: "/",
//     },
//   ],
// };
export const whyChooseUsData = {
  tag: "WHY GS IT",
  heading: "What Sets Our Video Conferencing \n Solutions Apart in Dubai",
  highlightLast: 4,
  subhead:
    "Selecting a video conferencing supplier in Dubai is not only about hardware pricing. The quality of the installation, the depth of platform knowledge, and the reliability of post-installation support determine whether the investment performs over time.",
  points: [
    {
      title: "Pre-Configured Platform Kits",
      description:
        "Teams and Zoom Room kits supplied with integrated calendars, accounts, and controls.",
    },
    {
      title: "Acoustics Tuned for Clarity",
      description:
        "Microphones and digital signal processors calibrated to room acoustics for voice clarity.",
    },
    {
      title: "Single-Vendor AV & Network",
      description:
        "GS AV handles room systems; GS IT and GS Security configure network rules and firewalls.",
    },
    {
      title: "In-House Control Programming",
      description:
        "Control code written internally supports one-touch start, camera presets, and controls.",
    },
    {
      title: "High-Availability AV Architecture",
      description:
        "Redundant power and dual signal routes protect live video conferencing against failures.",
    },
    {
      title: "Proactive AMC Coverage",
      description:
        "Round-the-clock remote help desk backed by scheduled preventive visits and field response.",
    },
  ],
};
export const challengesData = {
  tag: "CHALLENGES WE RESOLVE",
  heading: "Solving Your Frustrating Video Conferencing Issues",
  highlightLast: 3,
  subhead:
    "Subpar meeting quality usually points to poor audio reach, wrong camera placement, or unoptimized networks. A properly installed video conferencing system avoids these friction points.",
  items: [
    {
      id: "voices-fade",
      problemLabel: "The Problem",
      problemTitle: "Voices fade at the far end",
      problemDescription:
        "A central table device fails to capture participants sitting further away, leaving soft voices unheard.",
      solutionLabel: "Our solution",
      solutionDescription:
        "We map microphone coverage per seat, install ceiling or table units, and verify audio pickup from all positions.",
    },
    {
      id: "distant-faces",
      problemLabel: "The Problem",
      problemTitle: "Distant faces unclear for remote attendees",
      problemDescription:
        "A fixed wide shot shows the whole table, so faces are small, and it is hard to identify the speaker.",
      solutionLabel: "Our solution",
      solutionDescription:
        "AI-powered cameras with auto-framing and speaker tracking automatically highlight whoever is actively speaking.",
    },
    {
      id: "unexpected-platform",
      problemLabel: "The Problem",
      problemTitle: "Clients invite you on unexpected platform",
      problemDescription:
        "The room runs Teams, but a client sends a Zoom or Webex link, forcing everyone to crowd around one laptop.",
      solutionLabel: "Our solution",
      solutionDescription:
        "We configure cross-platform joining where the room system supports it, with a tested BYOD connection as fallback.",
    },
    {
      id: "bandwidth-lags",
      problemLabel: "The Problem",
      problemTitle: "Bandwidth lags cause dropped calls",
      problemDescription:
        "Room devices on shared Wi-Fi or an unplanned network segment lose quality whenever office traffic peaks.",
      solutionLabel: "Our solution",
      solutionDescription:
        "AV hardware receives dedicated network segmentation, prioritized bandwidth, and precise firewall access.",
    },
    {
      id: "inconsistent-controls",
      problemLabel: "The Problem",
      problemTitle: "Inconsistent controls across rooms",
      problemDescription:
        "Different equipment and controls in every room mean retraining staff and more support tickets.",
      solutionLabel: "Our solution",
      solutionDescription:
        "Standardized systems, interfaces, and joining methods are deployed per room size and managed centrally.",
    },
    {
      id: "inefficient-setup",
      problemLabel: "The Problem",
      problemTitle: "Inefficient setup delays meetings",
      problemDescription:
        "Tangled cords, missing adapters, and sign-in steps waste the first five minutes of scheduled sessions.",
      solutionLabel: "Our solution",
      solutionDescription:
        "Calendar-linked touch controllers enable one-touch joins, while tested wireless and cable options handle screen sharing.",
    },
  ],
};

export const recomData = {
  backgroundImage: "/assets/images/video-conf/ctabanner.jpeg",
  mobbanner: "/assets/images/video-conf/mobctabanner.jpg",
  tag: "",
  heading: "Ready to upgrade your \n video conferencing setup? ",
  highlightLast: 8,
  description:
    "Tell us about your space and requirements. We will scope the right solution, provide a detailed quote, and get your system live without disrupting your operations. ",

  cta: "Get a free site assessment",
  points: [
    "Authorized Partner Sourcing ",
    "Transparent Cost Scoping ",
    "Multi-Space Project Capability ",
    "UAE-Wide AMC Coverage",
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on \n Video Conferencing Solutions in Dubai ",
  highlightLast: 9,
  faqData: [
    {
      question:
        "What hardware does GS IT recommend for a small office video conferencing setup?",
      answer:
        "For rooms seating two to four people, an all-in-one video bar from Logitech or Yealink with an integrated camera, speaker, and microphone is recommended. It connects directly to the room display and requires no dedicated compute hardware beyond a laptop or a compact codec device.",
    },
    {
      question:
        "Can GS IT install video conferencing equipment for a large conference room?",
      answer:
        "Yes. GS IT deploys video conference cameras for large rooms with wide field-of-view optics, distributed microphone arrays, and multi-screen display configurations. Room acoustics and seating layout are evaluated before any hardware is specified. ",
    },
    {
      question:
        "How does GS IT size a video conference camera for a large room?",
      answer:
        "Camera selection for large conference rooms is based on room depth, seating count, and table configuration. Rooms beyond four meters typically need a PTZ camera with optical zoom and auto-framing to ensure remote participants see all seated attendees without a fixed wide-angle lens cutting off the table ends.",
    },
    {
      question:
        "How much does a video conference setup at the office typically cost? ",
      answer:
        "Costs vary based on room size, equipment tier, and platform requirements. A small office video conferencing solution starts significantly lower than a large-room system with PTZ cameras and distributed audio. GS IT provides a detailed, itemized quote after the free site assessment. ",
    },
    {
      question:
        "What is a wireless video conference system and is it reliable for business use?",
      answer:
        "Wireless systems use a receiver connected to room display hardware, allowing participants to share content from their own devices without cables. Enterprise-grade wireless conferencing systems are reliable for business use when installed on a stable dedicated network connection. ",
    },
    {
      question: "How long does a video conferencing installation take? ",
      answer:
        "Most single-room installations complete within one business day. Multi-room projects are phased to avoid operational disruption. GS IT schedules cabling and installation work around your business hours where needed, including evening slots for sensitive environments. ",
    },
    {
      question:
        "Do you offer video conferencing solutions for small offices in Dubai?",
      answer:
        "Yes. GS IT configures small office video conferencing solutions using compact all-in-one video bars and USB camera units that are straightforward to use without dedicated IT management. Setups are ready for Teams or Zoom out of the box. ",
    },
    {
      question:
        "What is the difference between a video bar and a traditional camera and speaker setup? ",
      answer:
        "A video bar integrates the camera, microphone array, and speaker into a single unit, reducing cabling complexity and setup time. Traditional setups offer more flexibility for large rooms where a single device cannot provide adequate audio coverage across the full space. ",
    },
    {
      question:
        "Can GS IT set up video conferencing in a room that another company originally installed? ",
      answer:
        "Yes. GS IT conducts a technical audit of the existing installation, documents all audio video conferencing systems and configuration, and identifies what is reusable versus what requires replacement. Remediation costs and scope are presented before GS IT assumes ongoing responsibility for the system. ",
    },
    {
      question:
        "What is included in GS IT's AMC for video conferencing systems?",
      answer:
        "The AMC covers scheduled preventive maintenance visits, firmware management, remote diagnostics, and priority on-site response for critical faults. Clients in Dubai receive same-day or next-business-morning attendance for failures affecting rooms scheduled for important calls. ",
    },
  ],
};
