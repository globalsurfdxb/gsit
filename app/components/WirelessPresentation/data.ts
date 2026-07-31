 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "WIRELESS PRESENTATION SYSTEM DUBAI, UAE · SINCE 2013",
  heading: "Smart Wireless Presentation System for \n Conference Room Interactive Meetings",
  highlightLast: 4,
  description: "GS IT plans and installs wireless presentation systems for meeting rooms across Dubai and the UAE, so any laptop or phone connects to the display in a single step.",
  backgroundImage: "/assets/images/wireless-presetation/banner.jpeg", 
  mobbanner: "/assets/images/wireless-presetation/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"Interactive Display Solutions Across Dubai & UAE"},
   { value:"4K Ultra HD", desc:"Wireless Content Sharing Support"},
   { value:'One-Tap', desc:"Screen Sharing from Any Device"},
   { value:"Clutter-Free", desc:"Setup for Every Meeting Room"}
  ],
  buttons: [
    {
      text: "Get a free site assessment",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } 
  ],
};   
export const overviewData = {
    backgroundImage: "/assets/images/wireless-presetation/main.jpeg", 
  mobbanner: "/assets/images/wireless-presetation/main.jpeg", 
  tag: "Overview",
  heading: "Wireless Video Presentations: \n Simplifying Boardroom Collaborations ",
  highlightLast: 3,
  description1: `A wireless presentation system connects a laptop or phone straight to the room display without a cable or adapter in between. GS IT designs and installs these systems for businesses in Dubai and the UAE, choosing the setup that fits each room instead of a one-size approach.`,
  description2: "Every project begins with an assessment of the room, the current display and the devices used in daily meetings. From there GS IT configures the network, tests the wireless presentation device and hands the room over ready for immediate use.",
 
};  
export const servicesData = {
  tag: "Our Services",
  heading: "Optimizing \n Your Workplace Presentations",
  highlightLast: 3,
  subhead: "Core installation and integration work behind every wireless presentation system for conference room and boardroom projects.",
  servicesData : [
  {
    icon: "wifi",
    title: "Wireless System Deployment",
    description: "Covers hardware selection and installation right through to network setup and testing.",
    href: "",
    featured: true,
  },  
  {
    icon: "Repeat",
    title: "Legacy Upgrades & Replacement",
    description: "Replaces outdated hardware with current, better-supported equipment across the room.",
    href: "",
    featured: true,
  },  
  {
    icon: "SquaresExclude",
    title: "Multi-Room Standardization",
    description: "Rolls out one consistent wireless presentation setup across several rooms or entire floors.",
    href: "",
    featured: true,
  },  
  {
    icon: "HdmiPort",
    title: "Video Conferencing Platform Integration",
    description: "Connects the system to whichever video calling platform your team already relies on daily.",
    href: "",
    featured: true,
  },  
  {
    icon: "/assets/images/icons/handpoint.svg",
    title: "Interactive Display & Touchback Setup",
    description: "Wireless casting setup with interactive panels for on-screen annotation and full control.",
    href: "",
    featured: true,
  },  
  {
    icon: "MonitorSmartphone",
    title: "Guest & BYOD Access Configuration",
    description: "Lets visitors present from their own devices without joining the internal company network.",
    href: "",
    featured: true,
  },  
   
]
}; 
export const installationData = {
  tag: "Installation Workflow ",
  heading: "Our Structured Wireless \n Presentation Deployment ",
  highlightLast: 2, 
  subhead: "This step-by-step deployment process ensures your meeting rooms get secure, hassle-free casting capabilities.",
 data: [
  {
    "number": "01",
    "title": "Site Assessment",
    "description": "Clear deployment plans backed by room layout, network stability, and AV gear audits."
  }, 
   {
    "number": "02",
    "title": "System Design",
    "description": "We map out hardware placement and bandwidth needs customized to room scale."
  }, 
   {
    "number": "03",
    "title": "Procurement & Configuration",
    "description": "Sources the required hardware and pre-configure network security policies upfront."
  }, 
   {
    "number": "04",
    "title": "Installation",
    "description": "Our team mounts the receivers, hides cabling, and connects your existing displays."
  }, 
   {
    "number": "05",
    "title": "Testing",
    "description": "We test multi-device casting, signal strength, and guest access across the room."
  },
   {
    "number": "06",
    "title": "Handover & Training",
    "description": "Your team gets a quick walkthrough of daily operations before our team wraps up."
  }, 
], 
};
export const featuresData = {
      
  tag: "Features",
  heading: "Built-In Standards  \n Supporting Your Presentations", 
  highlightLast: 3,
  subhead:
    "Core capabilities built into the wireless presentation systems GS IT deploys across the UAE.",
items:[ 
  {
    id: "ptz-cameras",
    title: "Multi-Device Compatibility",
    description:"Cast instantly from any Windows laptop, Apple MacBook, phone, or tablet.",
    image: "/assets/images/wireless-presetation/features1.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "4K Ultra HD Resolution",
    description:"Delivers sharp high-resolution output for detailed slides and video playback.",
    image: "/assets/images/wireless-presetation/features2.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "BYOM Support",
    description:"Wirelessly link your laptop to the in-room camera and mic for hybrid calls.",
    image: "/assets/images/wireless-presetation/features3.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Cloud Content Access",
    description:"Open presentations directly from your cloud files without any local saving.",
    image: "/assets/images/wireless-presetation/features4.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Encrypted Connections",
    description:"Secure network encryption protects all active casting streams from end to end.",
    image: "/assets/images/wireless-presetation/features5.jpeg",
  }, 
  {
    id: "ptz-cameras",
    title: "Touch & Annotation Support",
    description:"Markup slides or control apps directly from the interactive boardroom screen.",
    image: "/assets/images/wireless-presetation/features6.jpeg",
  }, 
]
  };
export const makingswichData = {
  tag: "MAKING THE SWITCH",
  heading: "Wireless vs Wired Presentation Setups ",
  highlightLast: 0, 
  highlight_first:true,
  subhead: "What changes in daily use when a room moves from a wired setup to a wireless presentation system.",
  headers : {
    scenario: "Consideration",
    without: "Wired Setup",
    with: "Wireless Presentation System ",
  },
   table: [ 
  {
    scenario: "Device Connection",
    without: "Needs the matching cable or adapter for each device before anyone can present.",
    with: "Any laptop or phone connects to the display without a physical cable."
  },  
  {
    scenario: "Number of Presenters",
    without: "Only one device can stay connected to the display at a time.",
    with: "Several presenters can connect and switch the shared screen quickly."
  },  
  {
    scenario: "Cable Management",
    without: "Cable runs sit under or across the meeting table and need regular tidying.",
    with: "The meeting table and floor stay clear with no cables to route."
  },  
  {
    scenario: "Guest Access",
    without: "Visitors often cannot present without borrowing the right adapter.",
    with: "Guests can present through a shared network or a wireless presentation device."
  },  
  {
    scenario: "Setup Time",
    without: "Each new presenter spends a minute or two finding and connecting the right cable.",
    with: "Screen sharing starts within seconds of a presenter connecting."
  },  
  {
    scenario: "Room Flexibility",
    without: "Moving the display or table means re-running or extending cable runs.",
    with: "The room layout can change without touching any physical wiring."
  },  
]
};

export const partnersHeaderData = {
  tag: "Technology Partnership",
  heading: "Trusted Brands.  \n Proven Technology ",
  highlightLast: 3 , 
  logo: [
  { src: "/assets/images/wireless-presetation/partner1.svg", alt: "" },
  { src: "/assets/images/wireless-presetation/partner2.svg", alt: "" },
  { src: "/assets/images/wireless-presetation/partner3.svg", alt: "" },
  { src: "/assets/images/wireless-presetation/partner4.svg", alt: "" },
  { src: "/assets/images/wireless-presetation/partner5.svg", alt: "" },
  { src: "/assets/images/wireless-presetation/partner6.svg", alt: "" }, 
]  }; 

export const whygsData = {
  tag: "Why Choose Us",
  heading: "What We Bring to \n Every Deployment ",
  highlightLast: 2,  
  subhead: "GS IT's approach to wireless presentation system projects across Dubai and the UAE.",
  whygs:[
  {
    "title": "Room- \n First Design",
    "description": "Device and configurations match the room layout and daily team casting behaviors.",
    "url":""
  },    
  {
    "title": "Vendor- \n Neutral Approach",
    "description": "We draw from diverse hardware manufacturers to pick the right fit for your office.",
    "url":""
  },    
  {
    "title": "Dubai- \nBased Expertise",
    "description": "Site visits, installation and training happen locally across Dubai and the wider UAE.",
    "url":""
  },    
  {
    "title": "Full Integration \n Handling",
    "description": "Wireless setups connect smoothly into current office screens and audio equipment.",
    "url":""
  },    
  {
    "title": "Trained \n Handover",
    "description": "Every team receives detailed walkthroughs from GS IT to run the device confidently.",
    "url":""
  },    
  {
    "title": "AMC-Backed \n Continuity",
    "description": "Ongoing support stays available through an AMC for organizations that want it in place.",
    "url":""
  },    
]
};  
 

export const recomData = {
    backgroundImage: "/assets/images/wireless-presetation/cta.jpeg", 
  mobbanner: "/assets/images/wireless-presetation/cta.jpeg", 
  tag: "",
  heading: "Ready for hassle-free wireless \n boardroom casting? ",
    highlightLast: 7,
  description: "Connect with us to design and configure a reliable wireless presentation setup for your workplace.",

  cta: "Get a free site assessment",
  points:['Free Room Walkthrough','Room-Specific System','Clear Scope Before Installation','Fast Deployment Timeline'  ]
}; 

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions on Wireless \n Presentation Systems  ",
  highlightLast:7,
 faqData : [
  {
    question: "Does a wireless presentation system for conference room use need its own dedicated network? ",
    answer: "A dedicated network is not always required, though many offices choose to isolate wireless presentation traffic for stability and security. GS IT confirms this during the network configuration stage of each install.",
  },   
  {
    question: "What is the difference between a wireless presentation device and a standard HDMI dongle? ",
    answer: "A wireless presentation device pairs with a receiver on the display and casts over Wi-Fi, while a standard HDMI dongle still needs a physical cable to the source. The wireless version also supports encryption and multi-user switching that a basic dongle does not. ",
  },   
  {
    question: "How many presenters can connect to a meeting room wireless presentation system at once? ",
    answer: "Most meeting room wireless presentation systems support anywhere from four to eight connected devices, with two to four able to share the screen at the same time. The exact limit depends on the hardware GS IT recommends for the room. ",
  },   
  {
    question: "Is a 4K wireless presentation system necessary for a small huddle room?",
    answer: "A 4K wireless presentation system is not essential for a small huddle room with a modest display, though it becomes more valuable as screen size and viewing distance increase. Full HD is usually sufficient for rooms seating under six people. ",
  },   
  {
    question: "What is a wireless interactive presentation solution and when would a training room need one? ",
    answer: "A wireless interactive presentation solution adds touchback and annotation on top of standard screen casting. Training rooms and design teams benefit most, since trainers can mark up shared content directly from the room display. ",
  },   
  {
    question: "Will conference room presentation systems work without replacing our existing display? ",
    answer: "In most cases, conference room presentation systems can be added to an existing screen or projector using the current HDMI input. A full display replacement is only needed if the current screen cannot support the resolution required. ",
  },   
  {
    question: "Can a wireless presentation system handle wireless video presentation from a laptop?",
    answer: "Yes, wireless video presentation is supported by most modern systems so full-motion video plays smoothly rather than just static slides. Performance still depends on the network and how the hardware manages compression. ",
  },   
  {
    question: "Is a wireless presentation display necessary or can our current screen be reused? ",
    answer: "A dedicated wireless presentation display is not required in every case, since a receiver can usually be added to an existing screen or panel. GS IT checks input compatibility during the site assessment before recommending new hardware. ",
  },   
  {
    question: "How do I know which is the best wireless presentation system for my office? ",
    answer: "The best wireless presentation system for your office depends on room size, presenter count and the platforms your team already relies on for calls. GS IT recommends a specific setup only after reviewing these details on site. ",
  },   
  {
    question: "Do you provide wireless presentation solutions in Dubai for older office buildings?",
    answer: "Yes, GS IT provides wireless presentation solutions in Dubai for buildings of any age including those with older network infrastructure. Older sites sometimes need a network upgrade alongside the casting system to run reliably. ",
  }
   
]
};

 

export const checklistData = {  

     tag: "Pre-Installation Checklist",
    heading: "What to Check \n Before Choosing a System ",
    highlightLast: 4,  
    description: "Our team at GS IT reviews these practical factors to keep your deployment efficient.",
  

      checklistItems: [
        {
          id: "image-1",
          type: "image",
          image: "/assets/images/wireless-presetation/check01.jpeg",
        },
        {
          id: "room-size",
          type: "text",
          icon: "ImageUpscale",
          title: "Room Size & Screen Distance",
          description:
            "Large spaces require high resolution, so text remains readable from the back row.",
        },
        {
          id: "presenters",
          type: "text",
          icon: "Users",
          title: "Number of Simultaneous Presenters",
          description:
            "Some teams need two or three people casting together rather than one at a time.",
        },
        {
          id: "network",
          type: "text",
          icon: "Network",
          title: "Existing Network Capacity",
          description:
            "Your business network must comfortably support heavy wireless casting loads.",
        },
        {
          id: "compatibility",
          type: "text",
          icon: "Puzzle",
          title: "Conferencing Platform Compatibility",
          description:
            "The new system should work with existing tools like Microsoft Teams or Zoom.",
        },
        {
          id: "ease-of-use",
          type: "text",
          icon: "UsersRound",
          title: "Ease of Use for Non-Technical Staff",
          description:
            "A system only helps the room if every presenter can operate it without guidance.",
        },
        {
          id: "future-growth",
          type: "text",
          icon: "TrendingUp",
          title: "Room for Future Growth",
          description:
            "Invest in expandable hardware that easily adapts to future headcount scaling needs.",
        },
        {
          id: "image-2",
          type: "image",
          image: "/assets/images/wireless-presetation/check02.jpeg",
        },
      ]
      };