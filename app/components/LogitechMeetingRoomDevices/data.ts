import { portfolioData } from "@/app/components/common/data";
import { STORE } from "@/app/components/LogitechProduct/shared";

const IMG = "/assets/images/logitech-meeting-room-devices";
const CONTACT_URL = "/contact-it-services-dubai";

export const bannerData = {
  badge: { label: "Logitech Partner", logo: `${IMG}/badge-logo.png`, alt: "Logitech" },
  tag: "Logitech meeting room devices",
  heading: "Logitech Partner\n for Meeting Rooms in Dubai",
  highlightLast: 5,
  description:
    "GS IT provides end-to-end implementation for Logitech meeting spaces across the UAE. We match every huddle room to boardrooms with reliable hardware, fully configured to work with your preferred video platforms.",
  backgroundImage: `${IMG}/banner.jpg`,
  mobbanner: `${IMG}/banner.jpg`,
  buttons: [
    { text: "Get a free consultation", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
    { text: "View the range", icon: "", bgButton: "bg-white", dark: false, href: "#range" },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "in business" },
    { value: `${portfolioData.clients}+`, desc: "clients" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists across disciplines" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const overviewData = {
  tag: "Why Logitech",
  heading: "Building Collaborative\n Meeting Spaces",
  highlightLast: 2,
  subhead:
    "Logitech makes video bars, conference cameras, touch controllers and scheduling panels for meeting rooms of different sizes.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/overview.jpg`,
      alt: "Logitech Rally video bars and a Rally camera",
      title: "AI-Assisted Framing and Audio",
      dim: "Every participant in view",
      text: [
        "Logitech video bars and conference cameras use AI video intelligence, including RightSight framing, to keep the people in the room in view. RightSound audio processing reduces background noise and evens out voices for remote listeners.",
      ],
    },
    {
      variant: "dark",
      big: "Up to 5 years",
      title: "Hardware coverage with extended warranty options",
      dim: "",
      text: [
        "Logitech meeting room devices include a 2-year limited hardware warranty, which can be extended by 1 or 3 years through Logitech Extended Warranty or Logitech Select.",
      ],
    },
    {
      variant: "light",
      title: "Certified for Leading Platforms",
      dim: "Teams, Zoom and Google Meet",
      text: [
        "Logitech room systems are certified for Microsoft Teams Rooms, Zoom Rooms and Google Meet, so each room can run the service your organisation has standardised on.",
        "Rooms are monitored and updated remotely through Logitech Sync, Logitech's cloud device management portal.",
      ],
    },
  ],
};

const product = (slug: string, title: string, size: string, text: string, isNew = false) => ({
  title,
  size,
  text,
  isNew,
  image: `${IMG}/range-${slug}.webp`,
  href: `${STORE}/${slug}`,
});

export const rangeData = {
  tag: "The Logitech range we supply",
  heading: "Logitech Room Devices\n for Meeting Rooms of All Sizes",
  highlightLast: 6,
  subhead: "Select a product to view its full specifications.",
  tabs: [
    {
      label: "Video Bars",
      items: [
        product("logitech-rally-bar-2", "Rally Bar 2", "Medium and large rooms", "Next-generation video bar with a 1-inch sensor and 115° field of view.", true),
        product("logitech-rally-bar", "Rally Bar", "Medium and large rooms", "All-in-one video bar with a motorised PTZ camera, for up to about 20 people."),
        product("logitech-rally-bar-mini", "Rally Bar Mini", "Small and medium rooms", "Compact all-in-one video bar with motorised pan and tilt."),
        product("logitech-rally-bar-huddle", "Rally Bar Huddle", "Huddle and small rooms", "All-in-one video bar sized for rooms of up to six people."),
      ],
    },
    {
      label: "Cameras & Systems",
      items: [
        product("logitech-meetup-2", "MeetUp 2", "Huddle and small rooms", "USB conference camera for PC-based and bring-your-own-device rooms."),
        product("logitech-meetup", "MeetUp", "Huddle rooms", "Combines a 120° field of view with an on-board speakerphone."),
        product("logitech-rally-camera", "Rally Camera", "Rooms of all sizes", "The 4K PTZ camera offers 15x HD zoom and a 90° field of view."),
        product("logitech-rally-plus", "Rally Plus", "Large and extra-large rooms", "Modular system that supports up to seven Rally Mic Pods."),
      ],
    },
    {
      label: "Controllers & Scheduling",
      items: [
        product("logitech-tap-ip-2", "Tap IP 2", "Touch controller", "Network-connected touch panel for one-touch meeting join.", true),
        product("logitech-tap-ip", "Tap IP", "Touch controller", "PoE-powered panel with network and built-in Wi-Fi connection."),
        product("logitech-tap", "Tap", "Touch controller", "Connects to the room PC over USB and has an HDMI input."),
        product("logitech-tap-scheduler-2", "Tap Scheduler 2", "Scheduling panel", "Booking panel with LED status lights, mounted outside the room.", true),
        product("logitech-tap-scheduler", "Tap Scheduler", "Scheduling panel", "Shows meeting details and lets people book a room on the spot."),
      ],
    },
  ],
  platforms: { label: "Many Logitech room devices are certified for", logos: ["teams", "zoom", "meet"] },
};

export const featuresData = {
  tag: "Logitech features",
  heading: "What Logitech Offers\n Beyond the Hardware",
  highlightLast: 3,
  subhead: "Logitech supports its room devices with platform partnerships, software, service plans and company-wide standards.",
  data: [
    {
      icon: '<circle cx="8.5" cy="12" r="5"/><circle cx="15.5" cy="12" r="5"/>',
      title: "Meeting Platform Partnerships",
      text: "More than 50 alliance partners, including Microsoft Teams, Zoom and Google Meet, work with Logitech on its solutions.",
      outcome: "Rooms run on your existing platform.",
    },
    {
      icon: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
      title: "Unified Room Operating System",
      text: "CollabOS links video, audio, touch panels and sensors on supported Logitech devices.",
      outcome: "Devices in a room work as one system.",
    },
    {
      icon: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
      title: "Extended Service Plans",
      text: "Logitech Select adds 24/7 support with a one-hour response and up to five years of replacement cover.",
      outcome: "Faulty units are replaced sooner.",
    },
    {
      icon: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><rect x="9" y="11" width="6" height="5" rx="1"/><path d="M10.2 11V9.6a1.8 1.8 0 0 1 3.6 0V11"/>',
      title: "Certified Information Security",
      text: "ISO/IEC 27001 certification covers Logitech and its infrastructure.",
      outcome: "Security reviews have a clear benchmark.",
    },
    {
      icon: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19 13 11"/>',
      title: "Sustainable Product Design",
      text: "Many products carry Carbon Impact Labels, and recycled plastic is used where possible.",
      outcome: "Buyers can compare device footprints.",
    },
    {
      icon: '<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h5a1 1 0 0 1 1 1v11H14"/><path d="M7.5 7h3M7.5 11h3M7.5 15h3"/>',
      title: "Proven Enterprise Adoption",
      text: "According to Logitech's sales data, 94% of Fortune 500 companies use its products.",
      outcome: "Large organisations use these devices.",
    },
  ],
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "Supply, Installation\n & Configuration by GS IT",
  highlightLast: 5,
  subhead: `Drawing on ${portfolioData.years}+ years of industry experience, GS IT builds resilient meeting environments through expert technical teams.`,
  data: [
    {
      icon: "ShieldCheck",
      title: "Genuine Logitech Hardware",
      description: "Devices are supplied new with the standard Logitech warranty, plus extended cover where you need it.",
    },
    { icon: "Monitor", title: "Platform Setup", description: "We configure each room for Microsoft Teams, Zoom or Google Meet, in appliance or PC mode." },
    {
      icon: "Network",
      title: "Network & Sync Onboarding",
      description: "Our team prepares the network and enrols every device in Logitech Sync for remote monitoring.",
    },
    {
      icon: "Headphones",
      title: "Ongoing Support",
      description: "AMC plans cover firmware updates, queries and fault handling, with a 15-minute response on critical issues.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "A Structured\n Meeting Room Transformation",
  highlightLast: 3,
  subhead: "Our systematic execution framework keeps project stakeholders informed at every step.",
  data: [
    { title: "Site Survey", text: "We review room sizes, displays, cabling and network points." },
    { title: "Room Design", text: "We match each room to the right Logitech devices and platform." },
    { title: "Proposal", text: "You sign off on devices, scope and schedule per room." },
    { title: "Install & Configure", text: "We mount, wire, set up platforms, and enrol in Sync." },
    { title: "Handover", text: "Authorized teams receive training and full documentation." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "Why Choose GS IT\n as Your Logitech Partner",
  highlightLast: 4,
  subhead: "Working with a single technical partner brings operational clarity and long term accountability to room projects.",
  data: [
    {
      icon: "Layers",
      title: "IT and AV Under One Roof",
      text: "Networking, AV, ELV and security specialists work on the same project, so nothing falls between contractors.",
    },
    { icon: "MapPin", title: "Multi-Site Rollouts", text: "Branches across the UAE get the same room setup, so staff use the same controls at each site." },
    {
      icon: "ClipboardList",
      title: "Warranty & Licence Tracking",
      text: "We keep a record of warranty and service plan dates for every device and remind you before they expire.",
    },
  ],
  stats: [
    { value: "98%", text: "client retention" },
    { value: "15 min", text: "critical response for AMC clients" },
    { value: `${portfolioData.employees}+`, text: "in-house specialists across disciplines" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Logitech Meeting Rooms\n Frequently Asked Questions",
  highlightLast: 3,
  faqData: [
    {
      question: "Which Logitech device is right for our meeting room?",
      answer:
        "The right device depends mainly on the size of the room. Rally Bar Huddle and MeetUp 2 are made for huddle and small rooms, and Rally Bar Mini fits small and medium rooms. Medium and large rooms usually need Rally Bar 2 or Rally Bar, while Rally Plus is designed for large and extra-large rooms. We confirm the device for each room after the site survey.",
    },
    {
      question: "Do Logitech room devices need a separate computer?",
      answer:
        "It depends on the model. Rally Bar, Rally Bar Mini and Rally Bar Huddle can run meetings on their own in appliance mode, so no computer is needed, and they can also connect to a room PC or laptop over USB. MeetUp 2, MeetUp, Rally Camera and Rally Plus connect to a computer, which runs the meeting software.",
    },
    {
      question: "Should we choose Rally Bar 2 or Rally Bar?",
      answer:
        "Both suit medium and large rooms, so the choice comes down to your requirements and budget. Rally Bar 2 is the newer model, released in October 2026, with a 1-inch camera sensor, a 115° field of view and built-in environmental sensors. We recommend one of the two after reviewing the room and the platform it will use.",
    },
    {
      question: "How much does a Logitech meeting room cost?",
      answer:
        "The cost depends on how many rooms you have, the devices each room needs and the platform licences. After the site survey, we send a room-by-room proposal that sets out the devices, scope and cost for each room.",
    },
    {
      question: "Do Logitech meeting rooms need software licences?",
      answer:
        "Yes. Each room that runs Microsoft Teams Rooms, Zoom Rooms or Google Meet needs a licence from that platform. Microsoft offers Teams Rooms Basic at no cost for up to 25 rooms. GS IT tracks licence dates for your rooms, sends reminders before they expire and handles renewals.",
    },
    {
      question: "How long will Logitech support the devices we buy?",
      answer:
        "For CollabOS devices such as the Rally Bar series, Logitech provides software support for at least three years after it announces a product's end of sale. That announcement usually comes at least six months before the product stops selling. The first two years include feature updates and bug fixes, and the third year covers critical fixes and security patches. A 5-year Logitech Select plan can extend security support by up to two more years.",
    },
    {
      question: "Who handles warranty claims for Logitech devices?",
      answer:
        "GS IT manages warranty claims and replacements with Logitech while your units are under manufacturer warranty. If you extend the warranty on a supported model, we continue to manage claims for the extended period.",
    },
    {
      question: "Is an Annual Maintenance Contract required?",
      answer:
        "No, the Annual Maintenance Contract (AMC) is optional. It covers firmware updates, user queries and fault resolution, with a 15-minute response on critical issues. Licence and warranty tracking, renewals and warranty claims are part of our standard service, whether or not you have an AMC.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan Your Logitech\n Meeting Rooms with GS IT",
  highlightLast: 5,
  image: `${IMG}/cta.jpg`,
  steps: [
    "Tell us how many rooms you have and which meeting platform you use.",
    "We survey the rooms and recommend devices for each one.",
    "You receive a room-by-room proposal before any hardware is supplied.",
  ],
  button: { text: "Get a free consultation", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote =
  "Logitech, Rally, MeetUp and Tap are trademarks of Logitech International S.A. Microsoft Teams, Zoom and Google Meet are trademarks of their respective owners.";
