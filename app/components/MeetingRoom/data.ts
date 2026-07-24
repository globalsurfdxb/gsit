 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Meeting Room Solutions Dubai, UAE · Since 2013 ",
  heading: "All-Inclusive Customized \n Meeting Room Solutions for Businesses  ",
  highlightLast: 5,
  description: "From compact huddle spaces to complete boardrooms, we survey, install, and support every meeting room technology layer in businesses across UAE.",
  backgroundImage: "/assets/images/cybersecurity/banner.jpeg", 
  mobbanner: "/assets/images/cybersecurity/bannermob.jpg", 
  points:[
   { value: `${portfolioData.years}`, desc:"Deploying AV in UAE"},
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
      "titleLine1": "Custom",
      "titleLine2": "Room Design",
      "description": "We assess occupancy and room purpose before specifying a component.",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "One Room.",
      "titleLine2": "One System.",
      "description": "Single cohesive setup across displays, smart audio and control interfaces.",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "Platform",
      "titleLine2": "Convenience, Built In",
      "description": "One-touch joining for Microsoft Teams, Zoom, and other enterprise platforms.",
      "featured": true,
      "pattern": true
    },
    {
      "titleLine1": "Clutter-Free",
      "titleLine2": "Presentations",
      "description": "Wireless presentation from any device on a secure segmented network.",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "Inclusive",
      "titleLine2": "Collaborations",
      "description": "On-site and remote attendees get the same professional experience.",
      "featured": false,
      "pattern": false
    },
    {
      "titleLine1": "End-to-End",
      "titleLine2": "Delivery",
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
  "items": [
    {
      "image": "/assets/images/meetingroom/mr1.jpeg",
      "titleLine1": "Video",
      "titleLine2": "Conferencing Systems",
      "description": "Teams, Zoom, and Webex-certified hardware with PTZ cameras and integrated audio.",
      "href": "",
      "featured": true
    },
    {
      "image": "/assets/images/meetingroom/mr2.jpeg",
      "titleLine1": "Interactive",
      "titleLine2": "Display Solutions",
      "description": "Touch-enabled panels for live annotation, collaboration, and wireless content sharing.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr3.jpeg",
      "titleLine1": "Meeting",
      "titleLine2": "Room Schedulers",
      "description": "Door panels synced with Microsoft 365 or Google Workspace showing live availability.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr3.jpeg",
      "titleLine1": "Wireless",
      "titleLine2": "Presentation Systems",
      "description": "Cable-free screen sharing from any device, no app needed, on a segmented network.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr5.jpeg",
      "titleLine1": "Retractable",
      "titleLine2": "Monitor Systems",
      "description": "Flush-fitted pop-up monitors for individual table viewing without cable clutter.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr6.jpeg",
      "titleLine1": "Projectors &",
      "titleLine2": "Large-Format Displays",
      "description": "Short-throw and standard projection with motorized screens for training rooms.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr7.jpeg",
      "titleLine1": "Professional Audio",
      "titleLine2": "Systems",
      "description": "Ceiling and table mic arrays with acoustic DSP tuned to room geometry and seating.",
      "href": "",
      "featured": false
    },
    {
      "image": "/assets/images/meetingroom/mr8.jpeg",
      "titleLine1": "Meeting Room",
      "titleLine2": "Automation Solutions",
      "description": "Centralized touch interfaces managing displays, audio, video, lighting, and climate.",
      "href": "",
      "featured": false
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
    description: "Join Teams, Zoom, or Webex from the room controller without plugging in a laptop. ",
    href: "",
    featured: true,
  },
  {
    icon: "Radar",
    title: "Room Occupancy Detection ",
    description: "The sensors release no-show bookings and push utilization data to the scheduler. ",
    href: "",
    featured: true,
  },
  {
    icon: "MonitorSmartphone",
    title: "BYOD Meeting Access ",
    description: "Your device drives the call while the room's camera, mic, and display take over. ",
    href: "",
    featured: true,
  },
  {
    icon: "Wifi",
    title: "Wireless Content Sharing ",
    description: "Presenters can share their screens to the display without cables, apps, or dongles. ",
    href: "",
    featured: true,
  },
  {
    icon: "BrainCircuit",
    title: "Intelligible Audio for Hybrid Calls ",
    description: "Beamforming mics and echo cancellation help remote teams hear everyone clearly. ",
    href: "",
    featured: true,
  },

  {
    icon: "CalendarCheck",
    title: "Calendar-Synced Room Scheduling ",
    description: "Real-time calendar sync keeps availability accurate and prevents walk-in conflicts. ",
    href: "",
    featured: true,
  },
  {
    icon: "/assets/images/icons/pointfinger1.svg",
    title: "Interactive Display & Annotation ",
    description: "Annotate directly on the panel and share session notes before the meeting wraps up. ",
    href: "",
    featured: true,
  },
  {
    icon: "Projector",
    title: "Centralized Meeting Room Control ",
    description: "A touchscreen controls display, camera presets, audio, lighting, and temperature. ",
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
  logo: [
  { src: "/assets/images/logo/partner1.svg", alt: "" },
  { src: "/assets/images/logo/partner2.svg", alt: "" },
  { src: "/assets/images/logo/partner3.svg", alt: "" },
  { src: "/assets/images/logo/partner4.svg", alt: "" },
  { src: "/assets/images/logo/partner5.svg", alt: "" },
  { src: "/assets/images/logo/partner6.svg", alt: "" },
  { src: "/assets/images/logo/partner7.svg", alt: "" },
  { src: "/assets/images/logo/partner8.svg", alt: "" },
  { src: "/assets/images/logo/partner9.svg", alt: "" },
  { src: "/assets/images/logo/partner10.svg", alt: "" }, 
  { src: "/assets/images/logo/partner12.svg", alt: "" }, 
  { src: "/assets/images/logo/partner13.svg", alt: "" }, 
  { src: "/assets/images/logo/partner14.svg", alt: "" }, 
  { src: "/assets/images/logo/partner15.svg", alt: "" },  
]  }; 