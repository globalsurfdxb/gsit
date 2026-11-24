import { portfolioData } from "@/app/components/common/data";
import type { FeatureItem } from "@/app/components/common/Banner/BannerMain";
import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { ProcedureDataType } from "@/app/components/BarcoPartnerDubai/Sections/ProcedureSteps";
import type { CtaDataType } from "@/app/components/BarcoPartnerDubai/Sections/BarcoCta";
import type { ProductRangeData } from "./Sections/ProductRange";
import type { SoftwareGridData } from "./Sections/SoftwareGrid";
import type { KpiTrustData } from "./Sections/KpiTrust";
import { MX_STORE, DCS_STORE, IFP_STORE, VC_STORE } from "@/app/components/MaxhubProduct/products/shared";

// Generated from category/Authorized MAXHUB Partner in Dubai _ GS IT (1).html
const IMG = "/assets/images/maxhub/partner";
const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Authorized MAXHUB Partner in Dubai | GS IT",
  description: "",
  image: `${IMG}/maxhub-partner-hero.webp`,
};

export const bannerData: FeatureItem = {
  badge: { label: "Authorized Partner", alt: "Authorized MAXHUB Partner", mark: { text: "MAX", accent: "HUB" } },
  tag: "Authorized MAXHUB Partner",
  heading: "MAXHUB Collaboration Tech\n for Workplaces & Classrooms",
  highlightLast: 4,
  description: "GS IT is an Authorized MAXHUB Partner in Dubai delivering end-to-end supply, site installation, and system configuration across corporate and academic environments throughout the UAE.",
  backgroundImage: `${IMG}/maxhub-partner-hero.webp`,
  mobbanner: `${IMG}/maxhub-partner-hero.webp`,
  buttons: [
    { text: "Explore the range", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#products" },
    { text: "Book a consultation", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+`, desc: "years serving UAE organisations" },
    { value: "1,500+", desc: "clients across the UAE" },
    { value: `${portfolioData.employees}+`, desc: "specialists on our own staff" },
    { value: `${portfolioData.google_score}/5`, desc: "average Google review score" },
  ],
};

export const whyMaxhubData: BentoData = {
  tag: "Why MAXHUB",
  heading: "One Ecosystem for\n Offices, Classrooms & Events",
  highlightLast: 4,
  subhead: "MAXHUB designs displays, conferencing devices and software that work together in offices, schools, universities and event spaces.",
  data: [
    {
      variant: "photo",
      image: `${IMG}/maxhub-why-all-in-one.webp`,
      alt: "Two people writing on a MAXHUB interactive display",
      title: "All-in-One Displays",
      dim: "Fewer boxes in the room",
      text: ["XBoard V7 displays build three 50 MP cameras, a 16-mic array and 2.1 speakers into a 4K touch screen."],
    },
    {
      variant: "dark",
      big: "9",
      title: "devices can share to one screen with MAXHUB Connect",
      dim: "",
      text: ["Two-way touch control lets people work on shared content directly from the large display."],
    },
    {
      variant: "light",
      title: "Ready for Learning",
      dim: "Education range",
      text: ["Classroom displays, lesson capture, voice lift and EasiClass software support in-person and hybrid teaching."],
      chips: ["Google EDLA on U4", "Google Classroom sync", "4K lesson capture", "Hands-free voice lift"],
      note: "Features vary by model.",
    },
  ],
};

export const rangeData: ProductRangeData = {
  tag: "Product range",
  heading: "The MAXHUB Lineup\n Supporting Your Collaboration",
  highlightLast: 3,
  subhead: "Browse MAXHUB hardware by category to find the right fit for your room or setup.",
  tabs: [
    {
      label: "Interactive Displays",
      items: [
        { name: "XBoard V7 MTR", image: `${IMG}/maxhub-xboard-v7-mtr-card.webp`, alt: "MAXHUB XBoard for Microsoft Teams Rooms", text: "Runs Microsoft Teams Rooms on Windows 11 IoT, with the PC module included.", room: "Meeting rooms", caps: ["Up to 92-inch", "16 mics"], href: `${IFP_STORE}/xboard-v7-mtr` },
        { name: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-card.webp`, alt: "MAXHUB XBoard V7 Series interactive display", text: "Runs MAXHUB OS on Windows through a slot-in PC module, sold separately.", room: "Open spaces", caps: ["Up to 86-inch", "16 mics"], href: `${IFP_STORE}/xboard-v7-series` },
        { name: "F5 Series", image: `${IMG}/maxhub-f5-series-card.webp`, alt: "MAXHUB F5 Series interactive display", text: "Pairs Android 15 with Windows on a slot-in PC module for teaching.", room: "Classrooms", caps: ["75 & 86-inch", "Android 15"], href: `${IFP_STORE}/f5-series` },
        { name: "B5 Series", image: `${IMG}/maxhub-b5-series-card.webp`, alt: "MAXHUB B5 Series smart blackboard", text: "Its glass surface takes chalk, dust-free chalk and liquid markers.", room: "Classrooms", caps: ["86-inch", "8 mics", "50 MP camera"], href: `${IFP_STORE}/b5-series` },
        { name: "U4 Series", image: `${IMG}/maxhub-u4-series-card.webp`, alt: "MAXHUB U4 Series interactive display", text: "An Android 15 display with Google EDLA certification and a 4K interface.", room: "Classrooms", caps: ["Google EDLA", "Android 15"], href: `${IFP_STORE}/u4-series` },
      ],
    },
    {
      label: "Video Conferencing",
      items: [
        { name: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-card.webp`, alt: "MAXHUB XBar W70 video bar with touch console", text: "A Windows-based Teams Rooms video bar with a 200 MP Quad Sight camera.", room: "Medium & large rooms", caps: ["200 MP", "16 mics"], href: `${VC_STORE}/xbar-w70-kit` },
        { name: "XBar V70 Kit", image: `${IMG}/maxhub-xbar-v70-kit-card.webp`, alt: "MAXHUB XBar V70 video bar with touch console", text: "Runs Teams Rooms on Microsoft's MDEP Android platform, with a quad-lens camera.", room: "Medium & large rooms", caps: ["200 MP", "10 m pickup"], href: `${VC_STORE}/xbar-v70-kit` },
        { name: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-card.webp`, alt: "MAXHUB XBar V50 video bar with touch console", text: "A compact MDEP Android kit with a 100 MP dual-lens camera.", room: "Small & medium rooms", caps: ["100 MP", "12 mics"], href: `${VC_STORE}/xbar-v50-kit` },
        { name: "XBar U50", image: `${IMG}/maxhub-xbar-u50-card.webp`, alt: "MAXHUB XBar U50 USB video bar", text: "Connects over USB, so people can host calls from their own laptops.", room: "Small & medium rooms", caps: ["100 MP", "8 m pickup"], href: `${VC_STORE}/xbar-u50` },
        { name: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-card.webp`, alt: "MAXHUB XCore Kit Pro mini PC and touch console", text: "Brings a Windows mini PC and touch console to Teams Rooms with two screens.", room: "Medium & large rooms", caps: ["Core i5", "Dual display"], href: `${VC_STORE}/xcore-kit-pro` },
        { name: "XT20-VB Kit", image: `${IMG}/maxhub-xt20-vb-kit-card.webp`, alt: "MAXHUB XT20-VB kit with video bar, mini PC and console", text: "Pairs a Windows mini PC and touch console with the XBar U50.", room: "Small & medium rooms", caps: ["100 MP", "12 mics"], href: `${VC_STORE}/xt20-vb-kit` },
        { name: "XT20-PS Kit", image: `${IMG}/maxhub-xt20-ps-kit-card.webp`, alt: "MAXHUB XT20-PS kit with PTZ camera, mini PC and console", text: "Adds the UC P30 PTZ camera to a Windows Teams Rooms kit.", room: "Medium & large rooms", caps: ["4K PTZ", "12x zoom"], href: `${VC_STORE}/xt20-ps-kit` },
        { name: "UC P30", image: `${IMG}/maxhub-uc-p30-card.webp`, alt: "MAXHUB UC P30 PTZ camera", text: "A 4K PTZ camera with motorised pan and tilt and 12x optical zoom, powered over PoE+.", room: "", caps: ["4K", "12x optical zoom", "PoE+"], href: `${VC_STORE}/uc-p30` },
        { name: "TCP33T Console", image: `${IMG}/maxhub-tcp33t-universal-console-card.webp`, alt: "MAXHUB Universal Console TCP33T", text: "Controls Teams Rooms meetings on Surface Hub 3 and XBoard.", room: "Meeting rooms", caps: ["11.6-inch", "PoE", "USB-C"], href: `${VC_STORE}/tcp33t-universal-console` },
      ],
    },
    {
      label: "Audio & Room Control",
      items: [
        { name: "UC BM35", image: `${IMG}/maxhub-uc-bm35-card.webp`, alt: "MAXHUB UC BM35 speakerphone", text: "A portable speakerphone with a battery rated for up to 15 hours.", room: "Small & medium rooms", caps: ["8 mics", "6 m pickup"], href: `${MX_STORE}/uc-bm35` },
        { name: "UC BM45", image: `${IMG}/maxhub-uc-bm45-card.webp`, alt: "MAXHUB UC BM45 speakerphone", text: "Certified for Teams Rooms, with extra units linked over Cat5e.", room: "Meeting rooms", caps: ["8 mics", "8 m pickup", "5 W"], href: `${MX_STORE}/uc-bm45` },
        { name: "DM30 Mic Pod", image: `${IMG}/maxhub-dm30-mic-pod-card.webp`, alt: "MAXHUB DM30 mic pod", text: "Extends voice pickup in rooms that use MAXHUB XBar kits, linked over Ethernet.", room: "Meeting rooms", caps: ["8 mics", "3 m radius", "4 linked"], href: `${MX_STORE}/dm30-mic-pod` },
        { name: "Voice Lift System", image: `${IMG}/maxhub-voice-lift-system-card.webp`, alt: "MAXHUB Voice Lift System microphone, ceiling speaker and controls", text: "Carries a teacher's voice through ceiling speakers with nothing to wear.", room: "Large classrooms", caps: ["4 m tracking", "Dante"], href: `${MX_STORE}/voice-lift-system` },
        { name: "TCP30M Console", image: `${IMG}/maxhub-tcp30m-console-card.webp`, alt: "MAXHUB TCP30M touch console", text: "Starts and controls meetings on MAXHUB OS devices from the table.", room: "Meeting rooms", caps: ["11.6-inch", "Android"], href: `${MX_STORE}/tcp30m-console` },
        { name: "Panel SP10", image: `${IMG}/maxhub-panel-sp10-card.webp`, alt: "MAXHUB Panel SP10 scheduling panel", text: "Shows live room availability with native Microsoft Teams integration.", room: "Bookable rooms", caps: ["11-inch", "PoE", "Android 15"], href: `${MX_STORE}/panel-sp10` },
      ],
    },
    {
      label: "Displays, Capture & Sharing",
      items: [
        { name: "CMB Series", image: `${IMG}/maxhub-cmb-series-card.webp`, alt: "MAXHUB CMB Series commercial display", text: "4K screens for signage and shared content, rated for 24/7 use.", room: "Huddle spaces", caps: ["Up to 98-inch", "500 nits"], href: `${DCS_STORE}/cmb-series` },
        { name: "UW Series", image: `${IMG}/maxhub-uw-series-card.webp`, alt: "MAXHUB UW Series ultra-wide display", text: "A 105-inch 21:9 screen with 5K resolution for side-by-side content.", room: "Large rooms", caps: ["105-inch", "5K", "21:9"], href: `${DCS_STORE}/uw-series-uw105na` },
        { name: "Raptor Series V3", image: `${IMG}/maxhub-raptor-series-v3-card.webp`, alt: "MAXHUB Raptor Series V3 LED display", text: "A DVLED wall in sizes up to 220 inches, with an optional built-in PC.", room: "Auditoriums", caps: ["Up to 220-inch", "120 W audio"], href: `${DCS_STORE}/raptor-series-v3` },
        { name: "Raptor Series V3 Lite", image: `${IMG}/maxhub-raptor-series-v3-lite-card.webp`, alt: "MAXHUB Raptor Series V3 Lite LED display", text: "A slim all-in-one LED with front maintenance and hot swapping.", room: "Large spaces", caps: ["135 & 162-inch", "Android 13"], href: `${DCS_STORE}/raptor-series-v3-lite` },
        { name: "Smart Lectern", image: `${IMG}/maxhub-smart-lectern-card.webp`, alt: "MAXHUB Smart Lectern with gooseneck microphones", text: "A height-adjustable lectern with a 21.5-inch touch screen and built-in PC.", room: "Lecture halls", caps: ["21.5-inch touch", "8 devices"], href: `${DCS_STORE}/smart-lectern-sl22mc` },
        { name: "Capture System V3", image: `${IMG}/maxhub-capture-system-v3-card.webp`, alt: "MAXHUB Capture System V3 capture host", text: "Records and streams lessons with an AI-tracking 4K PTZ camera.", room: "Classrooms", caps: ["4K", "40x zoom", "Ceiling mic"], href: `${DCS_STORE}/capture-system-v3-4k` },
        { name: "Portable Capture System", image: `${IMG}/maxhub-portable-capture-system-card.webp`, alt: "MAXHUB Portable Capture System host", text: "A battery-powered kit for recording and streaming events in any venue.", room: "Events", caps: ["40x zoom", "6-hour battery"], href: `${DCS_STORE}/portable-capture-system` },
        { name: "WT15 Dongle", image: `${IMG}/maxhub-wt15-dongle-card.webp`, alt: "MAXHUB WT15 wireless screen sharing dongle", text: "Shares a laptop screen in 4K, with BYOD support on the WT15M.", room: "Huddle spaces", caps: ["4K", "12 m range", "AES 128-bit"], href: `${DCS_STORE}/wt15-dongle-wt15m-wt15s` },
      ],
    },
  ],
};

export const softwareData: SoftwareGridData = {
  tag: "MAXHUB software",
  heading: "Built-In Apps\n & Management Tools",
  highlightLast: 3,
  subhead: "MAXHUB offers its own applications to share content, run lessons and meetings, and manage displays across a site.",
  items: [
    { icon: `${IMG}/maxhub-share-icon.webp`, alt: "MAXHUB Share icon", tag: "Wireless sharing", title: "MAXHUB Share", text: "Shares content in up to 4K, with up to four presenters on screen." },
    { icon: `${IMG}/maxhub-connect-icon.webp`, alt: "MAXHUB Connect icon", tag: "Browser sharing", title: "MAXHUB Connect", text: "Mirror up to nine devices right from your web browser." },
    { icon: `${IMG}/maxhub-pivot-icon.webp`, alt: "MAXHUB Pivot+ icon", tag: "Device management", title: "MAXHUB Pivot+", text: "Manages apps, firmware and content across a MAXHUB fleet." },
    { icon: `${IMG}/maxhub-easiclass-icon.webp`, alt: "MAXHUB EasiClass icon", tag: "Teaching", title: "MAXHUB EasiClass", text: "Drafts lesson slides with AI and syncs with Google Classroom." },
    { icon: `${IMG}/maxhub-os-icon.webp`, alt: "MAXHUB OS icon", tag: "Panel software", title: "MAXHUB OS", text: "Adds whiteboard and sharing tools, plus apps such as Zoom and Webex." },
  ],
};

export const platformsData: FeatureGridData = {
  tag: "Platforms & compatibility",
  heading: "Works With\n Your Platforms",
  highlightLast: 2,
  subhead: "MAXHUB devices fit into your current IT and AV ecosystem, working with leading conferencing platforms and third-party controllers.",
  columns: 4,
  data: [
    {
      icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/><circle cx=\"12\" cy=\"11\" r=\"2.5\"/>",
      title: "Microsoft Teams Rooms",
      description: "Certified on supported XBoard, XBar and console models.",
    },
    {
      icon: "<rect x=\"2.5\" y=\"7\" width=\"13\" height=\"10\" rx=\"2\"/><path d=\"m15.5 11 6-3.5v9l-6-3.5\"/>",
      title: "Zoom, Meet & Webex",
      description: "Zoom, Google Meet and Webex run on supported models.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"11\" rx=\"1.5\"/><path d=\"M8 20c1.2-1.4 2.5-2 4-2s2.8.6 4 2\"/><path d=\"M10 18.5c.6-.4 1.3-.6 2-.6s1.4.2 2 .6\"/>",
      title: "Wireless Sharing",
      description: "AirPlay, Miracast and Chromecast work through MAXHUB Share.",
    },
    {
      icon: "<path d=\"M6 4v6M6 14v6M12 4v2M12 10v10M18 4v10M18 18v2\"/><path d=\"M4 12h4M10 8h4M16 16h4\"/>",
      title: "AV Control Systems",
      description: "Selected displays support RS232 and IP control integration.",
    },
  ],
};

export const servicesData: FeatureGridData = {
  tag: "Our services",
  heading: "Our Work on\n MAXHUB Installations",
  highlightLast: 2,
  subhead: "GS IT supplies the hardware, and our AV and IT engineers get each space ready for daily use.",
  columns: 4,
  data: [
    {
      icon: "<path d=\"M3 21V7l9-4 9 4v14\"/><path d=\"M9 21v-6h6v6\"/>",
      title: "Space Assessment",
      description: "We review size, seating, sightlines and cabling on site.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"1.5\"/><path d=\"M9 20h6M12 16v4\"/>",
      title: "Mounting & Installation",
      description: "Our AV team fits displays, LED walls, cameras and audio.",
    },
    {
      icon: "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"m9 12 2 2 4-4\"/>",
      title: "Platform Setup",
      description: "Engineers configure calling, sharing and teaching software.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"6\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"18\" height=\"6\" rx=\"1.5\"/><path d=\"M7 7h.01M7 17h.01\"/>",
      title: "Network Setup",
      description: "The IT team prepares network ports, PoE and Wi-Fi access.",
    },
  ],
};

export const procedureData: ProcedureDataType = {
  tag: "Project steps",
  heading: "Five Steps\n to a Ready Room",
  highlightLast: 4,
  subhead: "We manage the entire rollout in a clear sequence, so your rooms are configured, tested, and ready to use on schedule.",
  data: [
    { title: "Site Survey", text: "We measure each space and note power, network and mounting points." },
    { title: "Solution Design", text: "Display size, camera view and audio coverage are planned." },
    { title: "Live Demo", text: "Try the shortlisted MAXHUB devices with your own platforms." },
    { title: "Proposal & Supply", text: "Hardware is supplied once you approve the written proposal." },
    { title: "Setup & Handover", text: "Our engineers install, configure and test, then hand over." },
  ],
};

export const whyData: KpiTrustData = {
  tag: "Why GS IT",
  heading: "Why Choose GS IT\n for Your MAXHUB Rollout",
  highlightLast: 4,
  subhead: "You work with one accountable partner who handles the technical rollout on site, with optional ongoing support available after handover.",
  kpis: [
    {
      icon: "<circle cx=\"8\" cy=\"8\" r=\"3\"/><circle cx=\"16\" cy=\"8\" r=\"3\"/><path d=\"M2.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M13 14.3c.9-.2 1.9-.3 3-.3 2.7 0 4.9 2 5.5 5\"/>",
      title: "AV & IT Under One Contract",
      text: "AV engineers mount and program the devices, and IT engineers prepare the network they need.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"4\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/>",
      title: "Demo Before Supply",
      text: "You try the shortlisted MAXHUB devices in a live demo before you approve the proposal.",
    },
    {
      icon: "<path d=\"M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z\"/><path d=\"m9 12 2 2 4-4\"/>",
      title: "Warranty & Renewals Covered",
      text: "We raise claims for units under manufacturer warranty, track licence dates and send renewal reminders.",
    },
  ],
  trust: [
    { value: "98%", label: "client retention rate" },
    { value: "15 min", label: "critical response time on AMC plans" },
    { value: "150+", label: "specialists across IT, AV and security" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Questions About\n MAXHUB Projects",
  highlightLast: 2,
  faqData: [
    {
      question: "How do I choose the right display size?",
      answer: "Match the size to the space and the furthest viewing distance. MAXHUB interactive displays range from 55 to 86 inches, with a 92-inch 21:9 Teams Rooms model, and Raptor LED walls go up to 220 inches for halls and auditoriums. We confirm the size after measuring the space during the site survey.",
    },
    {
      question: "How is an interactive display different from a commercial display?",
      answer: "An interactive display such as the XBoard V7 or F5 Series has a touch screen for writing and annotation, and many models add cameras and microphones. A commercial display such as the CMB Series is a 4K screen for signage and shared content, rated for 24/7 use. Some interactive models need a slot-in PC module to run Windows.",
    },
    {
      question: "Which calling and teaching platforms does MAXHUB support?",
      answer: "It depends on the model. XBoard for Teams Rooms, the XBar W70, V70 and V50 kits, the TCP33T console and the UC BM45 are certified for Microsoft Teams Rooms, other models run Zoom, Google Meet or Webex, and the U4 Series is Google EDLA certified. We confirm platform support for each model in your proposal.",
    },
    {
      question: "Can people share content without installing software?",
      answer: "In many cases, yes. MAXHUB Share accepts AirPlay, Miracast and Chromecast on supported displays, and MAXHUB Connect shares from a browser link with no client to install. A WT15 dongle is another option for laptops.",
    },
    {
      question: "Which audio option suits my space?",
      answer: "Choose by the size of the space and how people speak in it. The UC BM35 covers up to 6 m and the UC BM45 up to 8 m, with more BM45 units linked for longer tables. In large classrooms, the Voice Lift System carries the teacher's voice through ceiling speakers.",
    },
    {
      question: "Is GS IT an Authorized MAXHUB Partner?",
      answer: "Yes. GS IT is an Authorized MAXHUB Partner based in Dubai, and we supply, install and configure MAXHUB collaboration technology for businesses, schools and universities across the UAE.",
    },
    {
      question: "Who handles warranty claims for MAXHUB equipment?",
      answer: "GS IT does, for as long as the units are under manufacturer warranty. We raise the claim with MAXHUB and arrange the replacement. Coverage differs between products, and your proposal states the terms for each item.",
    },
    {
      question: "Do I need an Annual Maintenance Contract?",
      answer: "No, the Annual Maintenance Contract is optional. With an AMC, you get firmware updates, help with user queries and fault resolution, plus a 15-minute response on critical issues. Our standard service still tracks warranty and licence dates, sends reminders and handles renewals.",
    },
  ],
};

export const ctaData: CtaDataType = {
  tag: "Get started",
  heading: "Plan Your\n Next MAXHUB Space",
  highlightLast: 3,
  steps: ["Share a floor plan or a list of your spaces.", "We survey the site and arrange a live demo.", "Supply begins after you approve the proposal."],
  button: { text: "Book a consultation", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};
