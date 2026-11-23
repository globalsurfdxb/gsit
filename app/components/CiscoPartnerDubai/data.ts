import { portfolioData } from "@/app/components/common/data";

// Generated from cisco-partner-dubai.html (Cisco pages dev pack)

const IMG = "/assets/images/cisco/cisco-partner-dubai";
const BANNER = `${IMG}/cisco-catalyst-9600-modular-switch-and-a-laptop-showing-a-network-dash.webp`;
const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Cisco Partner in Dubai | Cisco Authorized Seller & Dealer | GS IT",
  description:
    "GS IT is a Cisco partner in Dubai, supplying and supporting Cisco switches, wireless, security and collaboration for businesses across the UAE.",
  ogTitle: "Cisco Partner in Dubai | GS IT",
  ogDescription:
    "Cisco networking, security and collaboration from GS IT, a Cisco partner in Dubai, with design, installation and support across the UAE.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Authorized Reseller in Dubai\n for secure networks and collaboration",
  highlightLast: 5,
  description:
    "GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco wireless, switching, firewalls, routing, IP phones and video conferencing, then design, deploy and support it as one network. One partner owns it from the first survey to the last firmware update.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const overviewData = {
  tag: "Why Cisco",
  heading: "Network, security and meetings,\n from one vendor",
  highlightLast: 3,
  subhead:
    "Most network faults sit where two vendors meet. Cisco covers wireless, switching, routing, firewalls and collaboration, so your whole stack is designed, licensed and supported as one system.",
  data: [
    {
      variant: "light",
      big: "40+",
      title: "Years in networking",
      dim: "Founded in 1984",
      text: [
        "Cisco has built enterprise networks for four decades. Its hardware, software and support lifecycle are designed for businesses that cannot afford a day offline.",
      ],
    },
    {
      variant: "light",
      title: "Cloud or on-premises",
      dim: "Your choice, on the same hardware",
      text: [
        "Cisco's Wi-Fi 7 access points run in the Meraki cloud dashboard or on a Catalyst controller. You choose the model that fits your team today and can change it later without buying new hardware.",
      ],
    },
    {
      variant: "dark",
      title: "Security built in",
      dim: "Backed by Cisco Talos",
      text: [
        "Cisco Secure Firewall draws on threat intelligence from Cisco Talos, Cisco's own research team.",
        "New threats are blocked at your network edge as the intelligence updates, without waiting for your team to act.",
      ],
    },
  ],
};

export const rangeData = {
  tag: "Cisco products we supply",
  heading: "Cisco across your network,\n one accountable partner",
  highlightLast: 3,
  subhead:
    "From a single branch office to a multi-site campus or data centre. Every family we supply, grouped by the job it does on your network.",
  data: [
    {
      id: "ap",
      jumpLabel: "Access points",
      image: `${IMG}/cisco-wi-fi-access-point.webp`,
      alt: "Cisco Wi-Fi access point",
      tag: "Wireless",
      title: "Access points",
      lead: "Fast, stable Wi-Fi for offices, warehouses, hotels and campuses, managed from the cloud or on-premises.",
      categories: [
        {
          title: "Wi-Fi 7",
          text: "Cisco Wireless 9172, 9174 and 9176 Series, from everyday offices to high-density spaces. One unit runs on Meraki cloud or a Catalyst controller.",
        },
        {
          title: "Wi-Fi 6E",
          text: "Catalyst access points for high-density offices, auditoriums and campuses, with the 6 GHz band.",
        },
        {
          title: "Wi-Fi 5 upgrades",
          text: "Upgrade plans for existing Wi-Fi 5 networks, moving to current Wi-Fi 6E and Wi-Fi 7 models.",
        },
        {
          title: "Outdoor and industrial",
          text: "Weather-rated access points for yards, warehouses, car parks and outdoor hospitality.",
        },
        { title: "Small business", text: "Simple, app-managed wireless for small offices and retail outlets." },
        {
          title: "Aironet estates",
          text: "Support for existing Aironet networks, with a planned upgrade path to current models.",
        },
      ],
      foot: { label: "Ranges:", chips: ["Meraki", "Catalyst", "Aironet"] },
      link: { text: "View Cisco access points", href: "/cisco-wireless-access-points" },
    },
    {
      id: "sw",
      jumpLabel: "Switches",
      image: `${IMG}/stack-of-cisco-nexus-data-centre-switches.webp`,
      alt: "Stack of Cisco Nexus data centre switches",
      tag: "Switching",
      title: "Switches",
      lead: "The backbone that connects every user, device and server, sized to today's load with headroom for growth.",
      categories: [
        { title: "Fixed switches", text: "Stackable access and aggregation switches for floors, branches and wiring closets." },
        {
          title: "Modular switches",
          text: "Chassis platforms for campus cores and data centres that need to grow in line cards, not boxes.",
        },
        {
          title: "High-density and ultra-low-latency",
          text: "Nexus data centre switches for virtualised workloads, storage traffic and trading-grade latency.",
        },
        {
          title: "Cloud-managed switches",
          text: "Meraki switches configured and monitored from the same dashboard as your Wi-Fi.",
        },
        {
          title: "Storage networking",
          text: "MDS Fibre Channel switches that connect servers to SAN storage with high availability.",
        },
      ],
      foot: { label: "Ranges:", chips: ["Catalyst", "Meraki", "Nexus", "MDS"] },
      link: { text: "View Cisco switches", href: "/cisco-network-switches" },
    },
    {
      id: "fw",
      jumpLabel: "Firewalls",
      image: `${IMG}/cisco-secure-firewall-appliance-with-security-cloud-control-dashboard-.webp`,
      alt: "Cisco Secure Firewall appliance with Security Cloud Control dashboard on a laptop",
      tag: "Security",
      title: "Firewalls",
      lead: "Next-generation firewalls that inspect traffic, stop threats and connect branches securely, from one office to a data centre.",
      categories: [
        {
          title: "Branch firewalls",
          text: "Secure Firewall 200 and 1200 Series, the compact successors to the 1000 Series, with built-in SD-WAN.",
        },
        {
          title: "Data centre firewalls",
          text: "Secure Firewall 4200 and 9300 Series for high-throughput edges and data centres.",
        },
        {
          title: "Virtual firewalls",
          text: "Secure Firewall Threat Defense Virtual for private clouds and virtualised environments.",
        },
        {
          title: "Cloud-native firewalls",
          text: "The same Cisco policy and protection, deployed in public cloud workloads.",
        },
        {
          title: "Industrial security",
          text: "ISA3000 rugged appliances for operational technology, utilities and plant floors.",
        },
      ],
      foot: {
        label: "Includes:",
        chips: ["Cisco Talos intelligence", "Secure WAF", "DDoS defense", "AI Assistant for Security"],
      },
      link: { text: "View Cisco firewalls", href: "/cisco-firewall-products" },
    },
    {
      id: "rt",
      jumpLabel: "Routers",
      image: `${IMG}/cisco-catalyst-edge-router-with-network-modules.webp`,
      alt: "Cisco Catalyst edge router with network modules",
      tag: "Routing and SD-WAN",
      title: "Routers",
      lead: "Reliable links between your offices, the internet and the cloud, with traffic steered to the best path automatically.",
      categories: [
        { title: "Catalyst ISR 1100", text: "Branch routers for small sites, with Ethernet, DSL, LTE and 5G WAN options." },
        {
          title: "Catalyst 8200 and 8300",
          text: "SD-WAN edge platforms for head offices and large branches, supplied on request.",
        },
        { title: "Meraki MX", text: "Cloud-managed security and SD-WAN appliances, set up from the Meraki dashboard." },
      ],
      link: { text: "View Cisco routers", href: "/cisco-network-routers" },
    },
    {
      id: "ph",
      jumpLabel: "IP phones",
      image: `${IMG}/cisco-desk-phone-mounted-on-an-office-wall.webp`,
      alt: "Cisco desk phone mounted on an office wall",
      tag: "Calling",
      title: "IP phones",
      lead: "Clear calls from the desk, the conference table or a shared workspace, on the calling platform you already use.",
      categories: [
        {
          title: "Desk Phone 9800 Series",
          text: "Built for hot desking on PhoneOS, with AI noise removal on every model, and on both ends of the call on the 9861 and 9871. Over 74% recycled plastics.",
        },
        { title: "IP Phone 8800 Series", text: "Established desk phones for offices that already run the 8800 range." },
        {
          title: "Wireless and DECT phones",
          text: "Wi-Fi and cordless handsets for staff on the move, from shop floors to hospital wards.",
        },
      ],
      foot: { label: "Managed in:", chips: ["Control Hub", "Webex Calling", "Cisco Unified CM"] },
      link: { text: "View Cisco IP phones", href: "/cisco-ip-phones" },
    },
    {
      id: "vc",
      jumpLabel: "Video conferencing",
      image: `${IMG}/cisco-video-bar-ptz-camera-codec-and-touch-controller.webp`,
      alt: "Cisco video bar, PTZ camera, codec and touch controller",
      tag: "Meeting rooms",
      title: "Video conferencing",
      lead: "Meeting rooms where everyone is seen and heard, from a focus booth to the boardroom.",
      categories: [
        { title: "Room Bar", text: "All-in-one video bar for huddle and small meeting rooms." },
        { title: "Room Bar Pro", text: "Dual-camera video bar for medium rooms, with automatic speaker framing." },
        {
          title: "Room Kit EQ and Room Kit Pro G2",
          text: "Modular kits for large rooms, boardrooms and auditoriums, with cameras and microphones placed to suit the space.",
        },
        {
          title: "Board Pro G3 and Desk Pro G2",
          text: "Touchscreen devices for whiteboarding, executive desks and small huddle spaces.",
        },
        {
          title: "Room accessories",
          text: "Room Vision PTZ camera, Ceiling Microphone Pro and Room Navigator touch controller.",
        },
      ],
      link: { text: "View Cisco video conferencing", href: "/cisco-video-conferencing" },
    },
  ],
  platforms: {
    strong: "Managed from",
    text: "one place per layer, so your team is not juggling consoles.",
    chips: ["Meraki Dashboard", "Catalyst Center", "Security Cloud Control", "Control Hub", "Webex and Microsoft Teams"],
  },
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From network audit\n to support after go-live",
  highlightLast: 4,
  subhead:
    "Buying Cisco is the easy part. The value comes from how it is designed, configured and looked after. We handle all three.",
  data: [
    {
      icon: "Search",
      title: "Assessment and design",
      description:
        "We audit your current network, survey Wi-Fi coverage and design a Cisco architecture sized to your users, sites and growth.",
    },
    {
      icon: "Package",
      title: "Genuine supply and licensing",
      description:
        "Authorized Cisco hardware with manufacturer warranty, plus the right subscriptions and licences, so nothing lapses unnoticed.",
    },
    {
      icon: "Wrench",
      title: "Deployment and configuration",
      description:
        "Our network engineers install and configure switching, wireless, SD-WAN, firewall policy, IP telephony and meeting rooms.",
    },
    {
      icon: "Headphones",
      title: "Support after go-live",
      description:
        "24/7 monitoring, firmware updates and team training. Clients on a GS IT AMC contract get a 15-minute response on critical issues.",
    },
  ],
};

export const traitsData = {
  tag: "Cisco characteristics",
  heading: "Enterprise-grade network,\n simple to run every day",
  highlightLast: 5,
  subhead: "What the Cisco range has in common, from a single branch to a multi-site estate.",
  data: [
    {
      icon: "Cloud",
      title: "Cloud or on-premises",
      description:
        "Meraki for cloud-first teams, Catalyst for on-premises control. Wi-Fi 7 access points support both on one unit.",
      highlight: true,
    },
    {
      icon: "ShieldCheck",
      title: "Security in every layer",
      description:
        "Firewalls, routers and access points share threat intelligence, so protection is not left to one box at the edge.",
    },
    {
      icon: "Share2",
      title: "Branches connected by SD-WAN",
      description: "Traffic takes the best available link automatically, so a failed line does not stop a branch.",
    },
    {
      icon: "MonitorCheck",
      title: "Visibility in one dashboard",
      description: "Health, usage and alerts for each layer in one console, so issues are found before users report them.",
    },
    {
      icon: "ChartColumnIncreasing",
      title: "Scales without redesign",
      description:
        "The same platforms run a single office or a regional estate. You add sites and capacity, not new systems.",
    },
    {
      icon: "Video",
      title: "Calls and meetings that match",
      description: "Phones and room devices are managed in Control Hub and work with Webex and Microsoft Teams.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "A clear design\n before work begins",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, from the first network audit to a documented handover.",
  data: [
    { title: "Assessment", text: "Current network, Wi-Fi coverage, security posture, sites and how your teams work." },
    {
      title: "Design and proposal",
      text: "Cisco architecture, bill of materials, licensing, scope and timeline in one document.",
      highlight: true,
    },
    { title: "Supply", text: "Genuine Cisco hardware and licences with manufacturer warranty." },
    {
      title: "Deploy and configure",
      text: "Installation, configuration, migration and testing, planned around your working hours.",
    },
    { title: "Handover and support", text: "Documentation, team training, monitoring and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\n Every layer of your IT.",
  highlightLast: 5,
  subhead:
    "Your Cisco network carries your servers, cloud, security cameras, meeting rooms and phones. We support all of it, so a fault has one owner instead of a chain of vendors.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    {
      value: "15 min",
      title: "Critical response on AMC",
      text: "Response time on critical issues for clients on a GS IT AMC contract.",
    },
    {
      value: `${portfolioData.employees}+`,
      title: "Specialists in-house",
      text: "Network, security, cloud and AV teams under one roof.",
    },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco questions\n answered",
  highlightLast: 1,
  faqData: [
    {
      question: "Is GS IT an authorized Cisco partner in Dubai?",
      answer:
        "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco products with manufacturer warranty, and we design, deploy and support the networks we deliver.",
    },
    {
      question: "Which Cisco products does GS IT supply?",
      answer:
        "Access points, switches, firewalls, routers, IP phones and video conferencing. That covers Meraki, Catalyst, Nexus and MDS networking, Cisco Secure Firewall, Catalyst and ISR routers, Cisco desk, wireless and DECT phones, and Cisco Room, Board and Desk series devices.",
    },
    {
      question: "Should we choose Meraki or Catalyst?",
      answer:
        "Meraki suits teams that want simple cloud management across many sites. Catalyst suits organisations that need on-premises control or advanced campus features. Cisco's Wi-Fi 7 access points support both, and we recommend the fit after assessing your sites and team.",
    },
    {
      question: "Can you replace our end-of-life Cisco equipment?",
      answer:
        "Yes. We identify devices that are end of sale or end of support, such as older ASA, Firepower and Aironet models, and plan a phased migration to current platforms with minimal downtime.",
    },
    {
      question: "Do you support Cisco networks you did not install?",
      answer:
        "Yes. We audit existing Cisco networks, fix configuration and security gaps, update firmware and take them into ongoing support.",
    },
    {
      question: "Do Cisco meeting room devices work with Microsoft Teams?",
      answer:
        "Yes. Cisco Room and Board devices run Webex and Microsoft Teams Rooms, so you can use the platform your organisation already runs.",
    },
    {
      question: "Do you help with Cisco licensing and renewals?",
      answer:
        "Yes. We size the right subscriptions and licences for your hardware, track renewal dates and renew before anything lapses.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your Cisco network\n with a network engineer",
  highlightLast: 4,
  steps: [
    "Tell us your sites, users and the Cisco products you need.",
    "We assess your current network and design the right architecture.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
  secondaryButton: { text: "Contact us", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  aside: [
    { title: "One partner", text: "Cisco supply, design, deployment and support from a single accountable team." },
    { title: `${portfolioData.clients}+ clients`, text: `UAE businesses served across ${portfolioData.years}+ years.` },
  ],
};

export const footNote =
  "Cisco, Meraki, Catalyst, Nexus, Aironet, Webex, Talos and other product names are trademarks of Cisco Systems, Inc. Microsoft Teams is a trademark of Microsoft Corporation.";
