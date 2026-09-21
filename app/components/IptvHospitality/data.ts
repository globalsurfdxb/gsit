 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "HOSPITALITY & HEALTHCARE IPTV · DUBAI, UAE · SINCE 2013",
  heading: "IPTV for Hotels & Hospitals: \n Site-Wide Rollouts Across the UAE",
  highlightLast: 5,
  description: "GS IT delivers customized IPTV solutions, unifying guest and patient displays with your existing property management and clinical systems.",
  backgroundImage: "/assets/images/iptv-hospitality/banner.jpeg", 
  mobbanner: "/assets/images/iptv-hospitality/banner.jpeg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"of network & AV deployments in the UAE"},
   { value: `End-to-End`, desc:"Site survey & design to commissioning"},
   { value: `Multi-Property`, desc:"Scales from one property to entire chain"},
   { value: `AMC Support`, desc:"Ongoing management after IPTV rollout"}
  ],
  buttons: [
    {
      text: "Talk to experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    }  
  ],
};   
 export const overviewData = {
  tag: "Overview",
  heading: "One Platform for \n Live TV, Services, & Screen Control",
    highlightLast: 6,
  subhead:
    "GS IT plans healthcare and hospitality IPTV solutions around the way each property already runs.",

  featured: {
    image: "/assets/images/iptv-hospitality/main.jpeg",
    alt: "Nurse operating an in-room IPTV display beside a patient bed",
    title: "Sector-Specific Builds",
    description:
      "Hotel and hospital screens follow different content rules, and we specify each build to match the setting.",
  },

  cards: [
    {
      titleLines: ["Property-", "Wide Coverage"],
      description:
        "A single headend feeds public area displays and back-of-house screens alongside the rooms themselves.",
    },
    {
      titleLines: ["Vendor-", "Neutral Design"],
      description:
        "Hardware and middleware are selected against your brief so the platform stays open for later change.",
    },
    {
      titleLines: ["Phased", "Live Deployment"],
      description:
        "Floors move over in stages so that occupied rooms and active wards keep running through the full rollout.",
    },
  ],

  accentCard: {
    description:
      "From network cabling and core switching to content management and end-user displays, GS IT's project team manages your entire IPTV hospitality solutions and clinical builds under one roof, ensuring total accountability from a single partner.",
  },
};
 export const zoneCoverageData = {
  tag: "Where We Deploy",
  heading: "Zone-By-Zone \n IPTV Coverage",
  highlightLast: 2,
  subhead:
    "IPTV for hospitality and healthcare zones are scoped area by area, so each space gets what it needs.",

  columns: [
    {
      title: "Hospitality Zones",
      zones: [
        {
          title: "Guest Rooms & Suites",
          description:
            "Personalized welcome screens, room service ordering and folio viewing.",
        },
        {
          title: "Service Staff Stations",
          description:
            "Staff mark a room as inspected and the front desk PMS updates instantly.",
        },
        {
          title: "Extended Stay Residences",
          description:
            "Utility tracking, maintenance requests and channel packs set by language.",
        },
        {
          title: "Spa & Wellness Treatment",
          description:
            "Ambient visuals and soundscapes synchronized with treatment guidance.",
        },
      ],
    },
    {
      title: "Healthcare Zones",
      zones: [
        {
          title: "Inpatient Rooms & VIP Wards",
          description:
            "Billing views, meal ordering and an automatic privacy wipe on discharge.",
        },
        {
          title: "Chemotherapy & Dialysis Bays",
          description:
            "Sessions of four to six hours need secure casting and schedule tracking.",
        },
        {
          title: "Maternity & Pediatric Units",
          description:
            "Nurses push prescribed videos and central filtering blocks unsuitable apps.",
        },
        {
          title: "Rehabilitation & Care Homes",
          description:
            "A simplified interface carries one-touch video calls and meal choices.",
        },
      ],
    },
  ],
};
export const whyChooseUsData = {
  tag: "WHY CHOOSE US",
  heading: "Strengths We Bring to Your \n Hotel & Hospital IPTV Rollouts",
  highlightLast: 5,
  subhead: `Single-vendor project management streamlines deployment across hotel and IPTV healthcare sites, removing third-party friction and keeping cabling schedules on track.`,
  points: [
    {
      title: "Single Accountable Contract",
      description: "Cabling, network, and IPTV scope stay with one supplier, so responsibility never splits.",
    },
    {
      title: "Installation Around Occupancy",
      description: "Room downtime is planned ahead against your occupancy and housekeeping schedules.",
    },
    {
      title: "Dubai-Based Engineering Team",
      description: "IPTV deployments by our Dubai team, experienced in regional hotel and hospital rollouts.",
    },
    {
      title: "Data Handling Compliance",
      description: "Patient and guest data handling follows UAE storage rules agreed before design sign-off.",
    },
    {
      title: "Content Rights Guidance",
      description: "We map out the channel and streaming rights a commercial property needs before ordering.",
    },
    {
      title: "Retrofit-Ready Surveys",
      description: "Existing risers are checked for reusable cabling before any new containment is proposed.",
    },
  ],
}
 export const integrationsData = {
  tag: "Integrations",
  heading: "Connecting IPTV Platform \n with Systems Across the Site",
  highlightLast: 5,
  subhead:
    "Integrating IPTV for hotels and medical wards directly to site platforms simplifies routine facility operations.",

  featured: {
    image: "/assets/images/iptv-hospitality/main2.jpeg",
    alt: "Doctor and child watching an in-room IPTV screen in a hospital ward",
  },

  cards: [
    {
      title: "Property Management System",
      description:
        "Personalized greetings, room service ordering, and billing merge on screen.",
    },
    {
      title: "Hospital Information System",
      description:
        "Patient details map directly to assigned screens via clinical database links.",
    },
    {
      title: "Nurse Call Platforms",
      description:
        "Bedside calls push live assistance alerts straight to assigned nurse desks.",
    },
    {
      title: "Personal Device Casting",
      description:
        "Personal media streams safely over isolated networks without data leaks.",
    },
    {
      title: "Digital Signage Network",
      description:
        "Central media libraries automatically feed visual updates to public screens.",
    },
    {
      title: "Network & Wi-Fi Layer",
      description:
        "Dedicated VLAN setups segregate video traffic to preserve Wi-Fi bandwidth.",
    },
  ],

  cta: { 
  title: "Worried your legacy platform won't integrate?",
  description:"Our team documents interface constraints early to outline a practical update path.",
  button:'Talk to an IPTV expert',
  background:"bg-[#F5F9FC]",
  classtitle:'text-24 font-medium tracking-[-3%] text-primary max-w-[50ch]',
   classdesc:""
}
};
 
 
export const BridgingData = {
  tag: "OWNERSHIP & SUPPORT",
  heading: "Post-Handover: \n What You Own & What We Deliver",
  highlightLast: 7,
  subhead: "Project sign-off transfers total administrative control of IPTV for hotels or healthcare to your teams, backed by optional AMC plans.",
  headers: {
    scenario: "What Your Team Receives at Handover",
    with: "Available Under AMC",
  },
  table: [
    {
      scenario: "Administrator credentials for the content platform",
      with: "Proactive monitoring of the platform and streams",
    },
    {
      scenario: "As-built drawings and rack layout records",
      with: "Firmware and middleware update cycles",
    },
    {
      scenario: "Channel lineup and interface configuration files",
      with: "On-site fault attendance and spare device holding",
    },
    {
      scenario: "Device inventory with room and serial mapping",
      with: "Seasonal content and channel lineup changes",
    },
    {
      scenario: "Training for front-desk and operations staff",
      with: "Scheduled system health reviews",
    },
    {
      scenario: "Written fault-reporting and escalation procedure",
      with: "Interface refresh work during rebranding",
    },
  ],
  cta: {
    title: "Need long-term reliability without technical overhead?",
    description: "GS IT's AMC plans protect IPTV setups through scheduled health checks, firmware updates, and SLA-backed responses.",
    button: "Discover <uppercase>AMC</uppercase> Options",
    background: "bg-[#F5F9FC]",
    classtitle: "text-24 font-medium tracking-[-3%] text-primary",
    classdesc: "",
  },
};
export const howweworkData = {
  tag: "DELIVERY PHASES",
  heading: "How an IPTV Deployment Runs \n From Survey to Handover",
  highlightLast: 4,
  subhead:
    "Delivery of hospitality IPTV solutions follows a structured sequence, so you always know what comes next.",
  data: [
    {
      number: "01",
      title: "Site Survey",
      description:
        "Rooms and risers are walked through to record cabling, power and display points.",
    },
    {
      number: "02",
      title: "Requirement Workshop",
      description: "Content needs and integration points are agreed with your operations and IT leads.",
    },
    {
      number: "03",
      title: "System Design & BOQ",
      description: "Headend, network, and endpoint specifications are issued as a single costed document.",
    },
    {
      number: "04",
      title: "Staging & Configuration",
      description: "Middleware, channel lineup, and interface branding are prepared before installation.",
    },
    {
      number: "05",
      title: "Installation & Testing",
      description: "Devices are mounted and tested floor by floor to suit occupancy schedules on site.",
    },
    {
      number: "06",
      title: "Handover & Training",
      description: "Operations staff are trained and the complete documentation set passes to your team.",
    },
  ],
};
export const solutionData = {
  tag: "OUR SOLUTIONS",
  heading: "Enterprise IPTV Deployment in \n Hospitality & Healthcare Sites",
  highlightLast: 4,
  subhead:
    "GS IT's IPTV solution for hotels and healthcare sites delivers customized media from headend to multi-room screens, unified under a single framework.",
  items: [
    {
      image: "/assets/images/iptv-hospitality/solution1.jpeg",
      title: "IPTV Headend & Distribution",
      description: "Encoders and streaming servers sized against the full channel count on the site.",
    },
    {
      image: "/assets/images/iptv-hospitality/solution2.jpeg",
      title: "Guest Room Television Systems",
      description: "Commercial screens mounted and connected to hardware across all guest suites.",
    },
    {
      image: "/assets/images/iptv-hospitality/solution3.jpeg",
      title: "Bedside Patient Terminals",
      description: "Arm-mounted touchscreens deployed per bed with handsets and pillow speakers.",
    },
    {
      image: "/assets/images/iptv-hospitality/solution4.jpeg",
      title: "Interface Design & Branding",
      description: "Custom menu layouts and property branding applied across screens before launch.",
    },
    {
      image: "/assets/images/iptv-hospitality/solution5.jpeg",
      title: "Security & Session Isolation",
      description: "VLAN segmentation protects local endpoints and wipes user data during checkout.",
    },
    {
      image: "/assets/images/iptv-hospitality/solution6.jpeg",
      title: "Multilingual Content Setup",
      description: "Arabic and English interfaces with further languages matched to your guest profile.",
    },
  ],
};
 
 
  export const partnersData = {
  tag: " Our Partnership",
  heading: "Brands We Integrate ",
  highlightLast: 1 , 
  };
  export const logoData= [
  { src: "/assets/images/iptv-hospitality/partner1.svg", alt: "" },
  { src: "/assets/images/iptv-hospitality/partner2.svg", alt: "" },
  { src: "/assets/images/iptv-hospitality/partner3.svg", alt: "" },
  { src: "/assets/images/iptv-hospitality/partner4.svg", alt: "" },
  { src: "/assets/images/iptv-hospitality/partner5.svg", alt: "" }, 
  { src: "/assets/images/iptv-hospitality/partner5.svg", alt: "" }, 
]  ; 
 
export const recomData = {
    backgroundImage: "/assets/images/iptv-hospitality/ctabanner.jpeg", 
  mobbanner: "/assets/images/iptv-hospitality/mobctabanner.jpg", 
  tag: "",
  heading: "Streamline patient care and elevate \n guest experience with IPTV.",
    highlightLast: 10,
  description: "Speak with our Dubai-based IPTV experts to evaluate your venue requirements and plan the deployment.",
 cta: "Book a consultaton",
 points:["Room-by-Room Site Survey","Channel & Content Planning","PMS & HIS Integration Scope","Phased Cutover Without Closures"]
 }; 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions about \n Hotel & Hospital IPTV",
  highlightLast:8,
  faqData: [
  {
    question: "Can IPTV be installed in a hotel that is already trading?",
    answer: "Yes. Installations of IPTV for hotels progress floor by floor to keep rooms available for booking. Work windows are aligned with the front office and housekeeping teams in advance. Our IPTV hospitality solutions scope factors in this phasing, with headend and riser tasks scheduled during low-occupancy periods.",
  },
  {
    question: "How much bandwidth does each room need?",
    answer: "Each room requires 8 to 12 Mbps for HD streaming and up to 25 Mbps for 4K content. Exact requirements depend on chosen codecs. Network planning covering IPTV for hotels and clinical wards sizes core switch capacity and uplinks directly against total display counts.",
  },
  {
    question: "Do we need set-top boxes or can smart televisions be used?",
    answer: "Smart TVs and external set-top boxes both work, but their fit depends on site infrastructure. Commercial smart TVs eliminate extra hardware by running IPTV software directly on System-on-Chip (SoC) displays. However, set-top boxes are necessary when integrating legacy non-smart screens into the IPTV platform or when precise hardware standardization is needed across mixed TV models.",
  },
  {
    question: "Can the platform connect to our property management or hospital information system?",
    answer: "Yes, the platform connects with active PMS and HIS software via standard interfaces. Hospitality IPTV solutions link to front-office tools for welcome messages and billing views. Likewise, an IPTV system for hospitals syncs with clinical records to match patient details to assigned screens.",
  },
  {
    question: "How long does a deployment take for a mid-size property?",
    answer: "A 150 to 250 room facility averages 8 to 14 weeks from survey to handover. Initial weeks focus on design and procurement, followed by phased floor installations. Properties with existing structured cabling complete this timeline faster.",
  },
  {
    question: "Can guests and patients sign in to their own streaming accounts?",
    answer: "Yes, personal account streaming can be enabled across guest rooms and wards. The platform uses isolated session controls to keep private streaming data contained within the room network. Personal credentials wipe automatically from the terminal upon guest checkout or patient discharge.",
  },
  {
    question: "How is an IPTV hospital deployment kept separate from clinical data?",
    answer: "Complete separation is maintained by isolating all streaming media traffic onto a dedicated VLAN. An IPTV hospital network only receives basic identification fields needed to link terminals to beds. All data handling adheres strictly to local UAE healthcare compliance standards.",
  },
  {
    question: "Do you provide monitoring and support once the system is live?",
    answer: "Post-launch support for an IPTV hospital or hotel deployment is available through an AMC. Without an active agreement, project delivery ends at handover following technical training and documentation. Most operators opt for an AMC to cover long-term site health.",
  },
  {
    question: "Can our existing televisions be reused?",
    answer: "Existing screens can often be reused if they possess HDMI ports and commercial-grade firmware. While consumer units connect via external hardware, they lack essential remote management tools. A detailed site survey verifies current display specs to confirm which screens remain suitable.",
  },
  {
    question: "Can one platform cover several hotels or hospital sites?",
    answer: "Yes. Centralized management allows multi-property operators to run IPTV for hospitality and medical sites from one interface. Each venue maintains custom branding and channel lists. Groups managing a hospital IPTV network can apply unique clinical profiles per location, supporting regional facility expansion across the UAE.",
  },
],
};
 