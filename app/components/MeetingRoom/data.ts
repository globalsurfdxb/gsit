 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Meeting Room Solutions Dubai, UAE · Since 2013 ",
  heading: "All-Inclusive Customized \n Meeting Room Solutions for Businesses  ",
  highlightLast: 5,
  description: "From compact huddle spaces to complete boardrooms, we survey, install, and support every meeting room technology layer in businesses across UAE.",
  backgroundImage: "/assets/images/meetingroom/banner.jpeg", 
  mobbanner: "/assets/images/meetingroom/bannermob.jpeg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"Deploying AV in UAE"},
   { value:"One Touch", desc:"Instant Meeting Join"},
   { value:"Any Room Size", desc:"From Huddle to Boardroom"},
   { value:"Fully Certified", desc:"Teams, Zoom & Webex Hardware"}
  ],
  buttons: [
    {
      text: "Book a meeting room audit",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    }, 
  ],
};    
export const rightFitData = {
  tag: "Overview",
  heading: "Collaborate Without Friction: \n Meeting Room Solutions in Dubai",
  highlightLast: 5,
  subhead: "GS IT delivers complete meeting room conference systems across the UAE, covering huddle spaces to executive boardrooms.",
    features: [
    {
      titleLine1: "Custom",
      titleLine2: "Room Design",
      "description": "Displays, cameras and audio selected around your room layout, seating capacity and meeting needs.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "Built Around",
      titleLine2: "Your IT Environment",
      "description": "Room technology that fits your conferencing platforms, network and security requirements.",
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
      titleLine1: "Clear Sharing",
      titleLine2: "and Participation",
      "description": "Simple presentation sharing and room-wide audio and video coverage keep in-room and remote participants involved.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "Designed for",
      titleLine2: "Long-Term Value",
      "description": "Equipment selected with compatibility, maintenance and future upgrades in mind to protect your investment.",
      "featured": false,
      "pattern": false
    },
    {
      titleLine1: "Clear Ownership",
      titleLine2: "and Support",
      "description": "One accountable partner for design, installation, configuration, commissioning and ongoing support.",
      "featured": false,
      "pattern": true
    }
  ],
  video: {
    thumbnail: "/assets/images/meetingroom/meeting-room-video-thumb.jpg", 
    videoUrl: "/assets/videos/meeting-room.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  }
};export const roomConfigTabsData = {
  tag: "Room Configurations", // update, header copy wasn't in the PHP you sent
  heading: "Room Configurations\nfor Every Meeting Size",
  highlightLast: 4,
  subhead: "GS IT designs smart meeting room solutions based on room dimensions, participant numbers, and how the space is actually used, whether it's a daily standup or a boardroom presentation.",
  ctaText: "Get a tailored room proposal",
  ctaLink: "#free-assessment",
  footNote:
    "One room can support several of these activities. We plan the equipment around the way your team actually uses the space.",
  rooms: [
    {
      id: "huddle",
      tab: "Huddle room",
      people: "2–4 people",
      label: "Huddle room, 2–4 people",
      title: ["A focused space", "for quick conversations."],
      description:
        "Turn a compact room into a ready-to-use space for quick catch-ups, interviews and focused hybrid calls.",
      idealFor: "Daily stand-ups, interviews, quick client calls",
      image: "/assets/images/meetingroom/rc1.jpeg", // update path / CDN
      imageAlt: "Huddle room with wall display and video bar",
      features: [
        { icon: "/assets/images/icons/userroundgroup.svg", title: "Make room for people", text: "Keep the table clear and equipment compact." },
        { icon: "Laptop", title: "Include remote colleagues", text: "Frame seats close to the screen and capture quiet voices." },
        { icon: "MonitorUp", title: "Start without a setup routine", text: "Give occasional users a simple way to connect." },
      ],
      usedTitle: "Small groups. Focused conversations.",
      usedText:
        "A compact space for two to four people to catch up, speak privately or bring a remote colleague into the discussion.",
      scenarios: [
        {
          title: "Quick team catch-ups",
          text: "A few colleagues step away from their desks to share progress, resolve a blocker and agree on the next action.",
          support: "A shared screen for updates and a simple way to bring a remote teammate into the conversation.",
        },
        {
          title: "Interviews & one-to-one meetings",
          text: "An interviewer and hiring manager meet a remote candidate, or a manager holds a focused check-in with a colleague.",
          support: "Close-range camera framing and clear speech so the conversation feels personal.",
        },
        {
          title: "Short client & partner calls",
          text: "Two or three team members join a customer call to clarify a requirement or answer a question together.",
          support: "A compact camera and audio setup that includes everyone, with laptop sharing when needed.",
        },
      ],
    },
    {
      id: "small",
      tab: "Small Meeting Room",
      people: "5–8 people",
      label: "Small meeting room, 5–8 people",
      title: ["Everyday meetings,", "with everyone involved."],
      description:
        "A room for five to eight people to share updates, meet customers and work through ideas together.",
      idealFor: "Team meetings, project reviews, client discussions",
      image: "/assets/images/meetingroom/rc2.jpeg",
      imageAlt: "Small meeting room with oval table and wall display",
      features: [
        { icon: "Volume2", title: "Hear the whole table", text: "Make voices clear at both the near and far seats." },
        { icon: "Cable", title: "Welcome guests easily", text: "Support the way staff and visiting presenters connect." },
        { icon: "/assets/images/icons/dooelock.svg", title: "Keep the room simple", text: "Make calls, presentations and sharing easy to control." },
      ],
      usedTitle: "Teams, clients and ideas. Around one table.",
      usedText: "",
      scenarios: [
        {
          title: "Daily team meetings",
          text: "The team gathers around the table to review priorities, share project updates and agree on next steps, with remote colleagues joining the call.",
          support: "Camera and microphone coverage for the full table, with straightforward joining and screen sharing.",
        },
        {
          title: "Client & partner discussions",
          text: "Sales, account and delivery teams walk a customer through a proposal or demonstration, whether the guest is in the room or online.",
          support: "Readable presentations, clear two-way conversation and a tested connection for visiting presenters.",
        },
        {
          title: "Brainstorming & project reviews",
          text: "A small project team shares designs, compares ideas and works through feedback on the same screen.",
          support: "Easy content sharing, with an interactive display and saved whiteboard notes when annotation is part of the work.",
        },
      ],
    },
    {
      id: "medium",
      tab: "Medium Conference Room",
      people: "9–12 people",
      label: "Medium conference room, 9–12 people",
      title: ["Bring teams, locations", "and ideas together."],
      description:
        "A room for nine to twelve people to review work across departments, present to stakeholders and run collaborative sessions.",
      idealFor: "Department meetings, hybrid workshops, presentations",
      image: "/assets/images/meetingroom/rc3.jpeg",
      imageAlt: "Medium conference room with long table and wall display",
      features: [
        { icon: "Armchair", title: "Reach every seat", text: "Plan microphone coverage for a longer table." },
        { icon: "/assets/images/icons/scale.svg", title: "Keep faces and content visible", text: "Balance camera framing with presentation sightlines." },
        { icon: "Handshake", title: "Make handovers easy", text: "Let different presenters share without interrupting the meeting." },
      ],
      usedTitle: "Longer tables. Wider conversations.",
      usedText: "",
      scenarios: [
        {
          title: "Department & cross-office meetings",
          text: "A department meets colleagues from another office to review performance, coordinate work and make decisions together.",
          support: "Clear voices along the longer table and camera views that include the far seats.",
        },
        {
          title: "Customer presentations & reviews",
          text: "Several stakeholders review a proposal, project milestone or demonstration while remote customers ask questions and contribute feedback.",
          support: "Content visible from every seat, clear presenter audio and a simple way to switch between presenters.",
        },
        {
          title: "Workshops & design discussions",
          text: "People from different teams map a process, review requirements or develop a plan together, including colleagues joining remotely.",
          support: "Shared content and optional digital whiteboarding, with separate views of participants and working material where useful.",
        },
      ],
    },
    {
      id: "large",
      tab: "Large/Boardroom",
      people: "13–20 people",
      label: "Large room / boardroom, 13–20 people",
      title: ["A space for decisions that", "shape the business."],
      description:
        "A boardroom for thirteen to twenty people, built for leadership discussions, formal reviews and meetings across locations.",
      idealFor: "Board meetings, leadership reviews, executive presentations",
      image: "/assets/images/meetingroom/rc4.jpeg",
      imageAlt: "Boardroom with long table and dual wall displays",
      features: [
        { icon: "Volume2", title: "Give every voice equal presence", text: "Cover long tables and quieter speakers consistently." },
        { icon: "MonitorCheck", title: "Make remote attendance natural", text: "Plan camera views for the table, speaker and presentation." },
        { icon: "TvMinimal", title: "Keep the controls familiar", text: "Coordinate a complex room through a simple interface." },
      ],
      usedTitle: "Big decisions. Every voice heard.",
      usedText: "",
      scenarios: [
        {
          title: "Board & leadership meetings",
          text: "Directors and senior leaders review results, discuss strategy and make decisions, with some attendees joining from another location.",
          support: "Consistent voice coverage across the long table, useful camera views and simple meeting controls.",
        },
        {
          title: "Strategic client & partner meetings",
          text: "Senior teams host customers or partners for proposals, negotiations and detailed business reviews involving multiple presenters.",
          support: "Clear presentation sightlines and a tested guest connection to the room's displays, cameras and audio.",
        },
        {
          title: "Cross-office business reviews",
          text: "Regional teams present updates to leadership, compare performance and discuss priorities with colleagues across several offices.",
          support: "A clear view of both people and presentations, with camera coverage planned for speakers around the room.",
        },
      ],
    },
    {
      id: "training",
      tab: "Training / Custom",
      people: "21+ people", // the design tab showed "2–4 people", which looks like a copy-paste
      label: "Training / custom, 21+ or flexible layout",
      title: ["One space.", "Different ways to gather."],
      description:
        "For audiences of twenty-one or more, or rooms with changing layouts, start with how the space will be used.",
      idealFor: "Town halls & presentations, large-scale training sessions",
      image: "/assets/images/meetingroom/rc5.jpeg",
      imageAlt: "Training room with tables, wall display and ceiling projector",
      features: [
        { icon: "AudioLines", title: "Reach the back of the room", text: "Keep speech clear and content readable for the full audience." },
        { icon: "Blend", title: "Connect presenters and participants", text: "Support questions as well as the presentation." },
        { icon: "LayoutDashboard", title: "Adapt when the room changes", text: "Plan for training, events or divided-room use." },
      ],
      usedTitle: "Large audiences. Changing layouts.",
      usedText: "",
      scenarios: [
        {
          title: "Training & instructor-led sessions",
          text: "An instructor delivers a workshop while attendees follow demonstrations, ask questions and join from other locations when required.",
          support: "Readable content to the back of the room, presenter coverage and microphones for participant questions.",
        },
        {
          title: "Town halls & company presentations",
          text: "Leadership addresses a large audience, shares company updates and takes questions from employees in the room and online.",
          support: "Distributed sound, screens with suitable sightlines and camera views for the presenter and audience.",
        },
        {
          title: "Combined & divided-room sessions",
          text: "Two groups meet separately in partitioned rooms, then the space opens up for a larger joint session.",
          support: "Separate AV zones and agreed control presets, tested for each combined and divided configuration.",
        },
      ],
    },
  ],
};
 

export const partnerBrandsData = {
  tag: "Authorised Partners",
  heading: "Hardware Backed by\nDirect Manufacturer Partnerships",
  highlightLast: 3,
  aside: {
    logo: "/assets/images/meetingroom/gsav.svg",
    logoAlt: "GS.AV",
    text: "We choose equipment for the room, not the other way round. Crestron, QSC and Yealink are brands we're authorised dealers for.",
  },
  groups: [
    {
      title: "Video & room systems",
      logos: [ {
        logo:"/assets/images/meetingroom/vr/vr1.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/vr/vr2.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/vr/vr3.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/vr/vr4.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/vr/vr5.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/vr/vr6.svg",
        alt:"",},
      ],
    },
    {
      title: "Audio & DSP",
      logos: [
        {
        logo:"/assets/images/meetingroom/ad/ad1.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad2.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad3.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad4.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad5.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad6.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/ad/ad7.svg",
        alt:"",},

      ],
    },
    {
      title: "Displays",
      logos: [
        {
        logo:"/assets/images/meetingroom/display/display1.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display2.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display3.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display4.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display5.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display6.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/display/display7.svg",
        alt:"",},
      ],
    },
    {
      title: "Control systems",
      logos: [
        {
        logo:"/assets/images/meetingroom/cs/cs1.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/cs/cs2.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/cs/cs3.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/cs/cs4.svg",
        alt:"",},
        {
        logo:"/assets/images/meetingroom/cs/cs5.svg",
        alt:"",},
      ],
    },
  ],
  certTitle: "AV certifications held by our engineers",
  certifications: [
    { logo: "/assets/images/meetingroom/av/av1.svg", alt: "Crestron Certified Programmer" },
    { logo: "/assets/images/meetingroom/av/av2.svg", alt: "Q-SYS Certified" },
    { logo: "/assets/images/meetingroom/av/av3.svg", alt: "Yealink Pro Audio Technician" },
    { logo: "/assets/images/meetingroom/av/av4.svg", alt: "Microsoft Certified Professional" },
    { logo: "/assets/images/meetingroom/av/av5.svg", alt: "Extron Certified AV Associate" },
    { logo: "/assets/images/meetingroom/av/av6.svg", alt: "Cisco Certified" },
  ],
};
export const roomWalkthroughData = {
  tag: "Room Walkthrough",
  heading: "Step-by-Step:\nThe Modern Meeting Room Experience",
  highlightLast: 5,
  subhead:
    "Experience a modern meeting room setup and see how technology works at every stage.", 
  image: "/assets/images/meetingroom/roomw.jpeg", 
  imageAlt:
    "Isometric view of a modern boardroom with display screens and conferencing equipment",
  steps: [
    {
      label: "Outside the door",
      title: "Availability before entry",
      text: "A scheduling panel shows live availability while corridor screens run from the same media platform.",
      tags: ["Meeting Room Scheduler"],
      x: 13, y: 58,
    },
    {
      label: "Walk in",
      title: "The room wakes on arrival",
      text: "Sensors register arrival and bring lighting, temperature, and blinds to the state the room holds.",
      tags: ["Occupancy Sensors", "Lighting Control", "HVAC"],
      x: 74, y: 74,
    },
    {
      label: "At the table",
      title: "Controls within arm’s reach",
      text: "Controls and connections sit within reach of the chair, and nobody leaves a seat to start a session.",
      tags: ["Touch Control Panel", "Table Microphones"],
      x: 29.7, y: 72.5,
    },
    {
      label: "On the wall",
      title: "Content at a readable scale",
      text: "Presentation content and remote faces stay legible for the person sitting in the last chair.",
      tags: ["Professional Displays", "Interactive Displays"],
      x: 78.5, y: 34,
    },
    {
      label: "Around the room",
      title: "Voice pickup and camera views",
      text: "Beamforming mics and ceiling speakers deliver clear audio; smart cameras frame all members.",
      tags: ["Beamforming Mic Arrays", "Ceiling Speakers", "Multi-Camera Setup"],
      x: 42.4, y: 61.5,
    },
    {
      label: "On the call",
      title: "Joining the meeting platform",
      text: "Room hardware joins the meeting platform and content moves to screen without a cable hunt.",
      tags: ["Video Conferencing", "Wireless Presentation"],
      x: 66, y: 24,
    },
    {
      label: "Behind the rack",
      title: "Processing and signal transport",
      text: "Processing and transport equipment stays out of sight while holding the whole room together.",
      tags: ["Digital Signal Processor", "AVoIP Distribution", "Network & AV Security"],
      x: 71, y: 47,
    },
  ],
};
export const capabilitiesData = {
  tag: "capabilities & outcomes", // update
  heading: "What a Connected  \n Meeting Room Delivers", // update
  highlightLast: 3,
  subhead: "Meeting room problems have a cost most organizations undercount. These are the capabilities GS IT builds into every installation, and what each one changes for your teams.", // update
items: [
  {
    icon: "Hand",
    title: "One-touch meeting join",
    text: "Join Teams, Zoom, Webex or Google Meet from the room controller, without plugging in a laptop.",
    outcome: "Meetings start on schedule, not five minutes late.",
  },
  {
    icon: "CalendarSearch",
    title: "Calendar-synced scheduling",
    text: "Door panels sync with Microsoft 365 or Google Workspace, and occupancy sensors release no-show bookings.",
    outcome: "No double bookings, and real data on how rooms are used.",
  },
  {
    icon: "Video",
    title: "Hybrid-ready audio and cameras",
    text: "Beamforming microphones, echo cancellation and camera framing tuned to the room and its seating.",
    outcome: "Remote attendees hear and see everyone in the room.",
  },
  {
    icon: "Cast",
    title: "Wireless sharing and BYOD",
    text: "Share a screen without cables or apps, or run the call from your own laptop on the room's camera and mics.",
    outcome: "Presenters switch in seconds, with no cable hunt.",
  },
  {
    icon: "PictureInPicture2",
    title: "Interactive displays",
    text: "Annotate on the panel and save the session notes before the meeting ends.",
    outcome: "Workshop output is captured, not photographed off a whiteboard.",
  },
  {
    icon: "AlignHorizontalSpaceAround",
    title: "Centralized control and management",
    text: "One touch panel runs displays, cameras, audio, lighting and climate, with rooms managed remotely.",
    outcome: "Fewer support calls and one familiar interface in every room.",
  },
],
platformStrip: {
  title: "Certified for the platforms your teams already use",
  platforms: [
    { logo: "/assets/images/meetingroom/teams.svg", name: "Microsoft Teams" }, // update paths
    { logo: "/assets/images/meetingroom/zoom.svg", name: "Zoom" },
    { logo: "/assets/images/meetingroom/webex.svg", name: "Webex Meetings" },
    { logo: "/assets/images/meetingroom/meet.svg", name: "Google Meet" },
  ],
},
};
export const problemSolutionData = {
  tag: "Common Meeting Room Problems & Our Solutions",
  heading: "Why Meeting\nRooms Let Teams Down",
  highlightLast: 4,
  subhead:
    "Booking conflicts, slow starts and unclear audio can interrupt a meeting even when the equipment is working. We look at the whole room to identify the cause and put the right solution in place.",
  footer:
    "Our work goes beyond supplying devices. We bring room design, system integration, control programming and ongoing support together to address the cause of each problem.",
  items: [
    {
      problem: "Double bookings",
      issue:
        "No booking panel at the door, or a panel that isn’t linked to the room calendar, leaves teams unsure who has booked the space.",
      solution:
        "We connect a room booking panel to your Microsoft 365 or Google Workspace calendar, so people can check availability at the door and bookings stay in sync.",
    },
    {
      problem: "Slow meeting starts",
      issue:
        "Calls wait while someone finds a cable, signs in or works out which remote to use.",
      solution:
        "One-touch join starts scheduled Teams, Zoom or Webex calls from the table, and a tested wired or wireless connection lets laptops and guests share content straight away.",
    },
    {
      problem: "Echo on calls",
      issue:
        "The room’s microphones pick up its own speakers, hard surfaces bounce sound around, or two laptops join the call with their audio on.",
      solution:
        "We plan microphone and speaker placement, tune echo cancellation, check whether the room needs acoustic treatment, and show users how to avoid duplicate audio connections.",
    },
    {
      problem: "Remote attendees can’t hear everyone",
      issue:
        "A video bar’s microphones may not reach the far end of a larger table, leaving quieter voices out of the conversation.",
      solution:
        "We plan microphone coverage around the room and seating layout, add table or ceiling microphones where needed, and test speech pickup from every seat.",
    },
  ],
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
};
 

 
 
 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Meeting \n Room Technology Solutions",
  highlightLast:8,
 faqData: [
  {
    question: "We have five meeting rooms of different sizes. Can GS IT design a consistent experience across all of them?",
    answer:
      "Yes. GS IT produces a tiered hardware specification, one bill of materials per room category, so each space gets equipment scaled to its size while the control interface looks and behaves the same in every room. With our meeting room solutions in Dubai, users are trained on one system, not five.",
  },
  {
    question: "Our organization runs Microsoft Teams. Does it matter whether the hardware we choose is Teams-certified?",
    answer:
      "It matters considerably. MTR-certified conference room equipment unlocks one-touch calendar join, device management through the Teams Admin Center, and consistent call behavior. Uncertified meeting room systems often work initially but introduce inconsistencies over time that support teams cannot resolve remotely.",
  },
  {
    question: "What is the practical difference between a video bar and a complete conference room equipment setup?",
    answer:
      "A video bar is an integrated unit combining camera, speaker, and microphone in one device, well-suited to rooms up to approximately eight seats. Larger rooms require separate PTZ cameras and dedicated ceiling or tabletop microphone arrays to achieve adequate coverage for all participants in the space.",
  },
  {
    question: "How does GS IT handle cabling in an occupied office without disrupting staff?",
    answer:
      "Our engineers survey the room before any work starts and plan cabling routes that minimize disruption to existing finishes and adjacent spaces. Our technicians handle structured cabling, conduit, and any wall or ceiling penetrations and complete the conference room installation on the agreed schedule.",
  },
  {
    question: "Can the room scheduler panel work with Google Workspace instead of Microsoft Exchange?",
    answer:
      "Yes. Scheduler panels from the brands we supply are compatible with Google Workspace, Microsoft 365, and Exchange on premises. Configuration is handled during commissioning and once set up, the panel requires no ongoing management from your IT team.",
  },
  {
    question: "A critical board meeting is scheduled. What happens if hardware fails that morning?",
    answer:
      "Clients on an AMC contract receive priority on-site response. GS IT engineers are Dubai-based, so same-day or next-business-morning attendance is the standard for critical failures. Quarterly preventive maintenance visits under AMC also reduce the likelihood of faults occurring close to high-priority events.",
  },
  {
    question: "Should I go with an interactive display or a standard screen?",
    answer:
      "If the room is used for whiteboarding, training, or multi-presenter sessions, go with interactive conference room display solutions. If it's purely for video calls and content viewing, a standard commercial display is sharper and cheaper. We'll tell you which fits based on how the room actually runs.",
  },
  {
    question: "Can GS IT take responsibility for rooms that a different company originally installed?",
    answer:
      "Yes. GS IT conducts a technical audit of the existing installation, documents all hardware and configuration, and brings the room under our AMC. Where meeting room technology is outdated or incorrectly configured, we provide remediation options and costs before assuming ongoing responsibility for the system.",
  },
  {
    question: "Is wireless presentation secure enough for a boardroom where confidential content is shared?",
    answer:
      "Enterprise wireless meeting room solutions like presentation systems from Barco and comparable vendors support network segmentation, guest isolation, and encrypted transmission. GS IT configures them on a dedicated VLAN to ensure presentation traffic does not travel across the corporate network.",
  },
  {
    question: "How long does a typical single-room installation take from design approval to a usable room?",
    answer:
      "A single room with an approved design typically takes three to seven business days, covering hardware delivery, installation, and full commissioning. Multi-room projects are phased and scheduled to avoid affecting adjacent spaces or business operations during working hours wherever possible.",
  },
],
};
export const whyChooseUsData = {
  tag: "WHY GS IT",
  heading: "What Makes GS IT \n The Right Choice for Meeting Room Solutions",
  highlightLast: 7,
  subhead: `Choosing the right meeting room integrator matters as much as choosing the right meeting room device in Dubai. These are the specific reasons our clients return to us for every new room or office fit-out.`,
  points: [
    {
      title: "Entirely Dubai-Based Team",
      description: "Every technician works right out of Dubai. Urgent repairs and visits happen fast without overseas routing delays.",
    }, 
    {
      title: "Authorized Partner Network",
      description: "Our direct ties with major brands guarantee full warranty support. You get genuine hardware instead of grey stock.",
    },  
    {
      title: "Single Scope, One Contractor",
      description: "We handle design and support under one contract, meaning the same dedicated team builds and maintains your system.",
    },  
    {
      title: "Experience Across Every Room Size",
      description: "From huddle rooms to huge auditoriums, our team deploys every room type successfully in real UAE environments.",
    },  
    {
      title: "Documented Handover & Training ",
      description: "Along with complete documentation, your office team receives hands-on training to become completely self-sufficient.",
    },  
    {
      title: "Post-Installation Support Contracts",
      description: "Our AMC plans include scheduled maintenance visits, plus you get rapid on-site troubleshooting if an AV fault occurs.",
      link:'/'
    },    
  ],
}  
 
   export const deploymentProcessData = {
  tag: "Deployment Procedure",
  heading: "How We Build\nYour Meeting Room Setup in Dubai",
  highlightLast: 6,
  subhead:
    "At GS IT, we follow a structured process to deliver the right meeting room solution designed around your collaboration requirements.",
  steps: [
    {
      title: "Initial Consultation & Site Review",
      description: "We assess your meeting room needs and review the site requirements.",
    },
    {
      title: "Custom Design & Quote",
      description: "Our engineers draft a precise layout matching your exact budget parameters.",
    },
    {
      title: "Product Demo",
      description:
        "See the proposed cameras, microphones and displays working before you commit, so you can judge picture and sound quality for yourself.",
    },
    {
      title: "Product Selection & Procurement",
      description: "We source the right meeting room equipment through authorized channels.",
    },
    {
      title: "Professional Installation & Integration",
      description:
        "Cabling, mounting, ceiling microphones and speakers, coordinated in project meetings with your fit-out team.",
      link: { text: "AV Installation", href: "#" }, // update href
    },
    {
      title: "Programming & Tuning",
      description:
        "Control panels programmed, DSP tuned, Teams or Zoom room accounts and calendars connected, and network quality of service applied.",
      link: { text: "AV programming", href: "#" }, // update href
    },
    {
      title: "Quality Check & Training",
      description:
        "Every room is tested on real calls. Your staff are trained in the room and your IT team gets admin training.",
    },
    {
      title: "Quality Check & Training", // the comp repeats this step, update with the real 8th step
      description:
        "Every room is tested on real calls. Your staff are trained in the room and your IT team gets admin training.",
    },
  ],
  receive: {
    label: "At Handover",
    title: "What you receive",
    items: [
      { icon: "DraftingCompass", title: "CAD drawings & AV schematics", description: "How every room is built and wired" },
      { icon: "MonitorSmartphone", title: "Equipment specifications", description: "Every device, model and location" },
      { icon: "ShieldCheck", title: "Tested system", description: "Racks and rooms tested before you use them" },
      { icon: "FileText", title: "User manuals", description: "For the people who use and manage the rooms" },
      { icon: "User", title: "Staff & admin training", description: "For the people who use and manage the rooms" },
      { icon: "Headset", title: "AV AMC contract", description: "Get 24/7 remote help desk access and SLA-backed onsite support with AMC." },
    ],
  },
};
export const supportAfterGoLiveData = {
  tag: "Support After Go-Live",
  heading: "Your Rooms,\nNext Month and Next Year",
  highlightLast: 5,
  description:
    "A meeting room is only as good as its worst week. Choose the support that fits how much your rooms matter, and grow from one room to many without starting again.",
  note: "Want AV covered alongside the rest of your technology? It can sit inside a GS IT IT AMC.",
  items: [
    {
      icon: "Headset",
      title: "24/7 remote support",
      description: "Remote diagnostics and fixes, available around the clock.",
    },
    {
      icon: "MapPinCheckInside",
      title: "On-site maintenance",
      description: "Engineers on site across the UAE when a room needs hands-on work.",
    },
    {
      icon: "CalendarCheck",
      title: "Managed AV contract",
      description: "An AV maintenance contract with scheduled preventive visits.",
    },
    {
      icon: "UserRoundCheck",
      title: "Dedicated AV technician",
      description: "One technician who knows your rooms, assigned to your account.",
    },
    {
      icon: "RefreshCw",
      title: "Firmware & platform updates",
      description: "Room systems kept current with Teams, Zoom and device releases.",
    },
    {
      icon: "CircleUserRound",
      title: "Refresher training",
      description: "For new staff, new rooms or new features.",
    },
  ],
};
 
export const consultationData = {
  tag: "GET STARTED",
  heading: "Book a Room {{Consultation}}",
  highlightLast: 3,
  subhead:
    "Tell us about your rooms and pick a date. A GS.AV engineer will review them with you and recommend what each room needs.",
  backgroundImage: "/assets/images/meetingroom/footercta.jpeg",
  steps: [
    { num: "01", title: "We call you back", desc: "Within 60 minutes during working hours" },
    { num: "02", title: "We review your rooms", desc: "On site, or from a floor plan and photos" },
    { num: "03", title: "You get a room-by-room plan", desc: "Equipment, layout and a clear quotation" },
  ],
  contact: {
    prefix: "Prefer to talk now?",
    phone: "+971 4 578 6518",
    phoneHref: "tel:+97145786518",
    email: "hello@gs-it.ae",
  },
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    button: "Request Call Back",
    contractOptions: [
      { label: "Within 3 months", value: "3" },
      { label: "3 – 6 months", value: "3-6" },
      { label: "6+ months", value: "6+" },
    ],
    usersOptions: [
      { label: "1 – 25", value: "1-25" },
      { label: "26 – 100", value: "26-100" },
      { label: "100+", value: "100+" },
    ],
  },
};
