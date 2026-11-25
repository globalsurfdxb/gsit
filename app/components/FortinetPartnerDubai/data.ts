import { portfolioData } from "@/app/components/common/data";
import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FamilyGroupsData } from "@/app/components/CiscoPartnerDubai/Sections/FamilyGroups";
import type { BundleCardsData } from "@/app/components/FortinetFirewallProducts/Sections/BundleCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { FG_CURRENT_MODELS } from "@/app/components/FortinetProduct/products/fortigate-shared";

// Generated from 00-Partner-Hub/fortinet-partner-in-dubai.html (Fortinet pages pack)

const IMG = "/assets/images/fortinet/partner-hub";
const img = (file: string) => `${IMG}/${file}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

const BANNER = img("fortinet-hero-banner.webp");

export const seo = {
  title: "Fortinet Partner in Dubai | Authorized Fortinet Dealer | GS IT",
  description: "GS IT is a Fortinet partner in Dubai for FortiGate, FortiSwitch, FortiAP and security subscriptions, with design, deployment and support.",
  ogTitle: "Fortinet Partner in Dubai | GS IT",
  ogDescription: "FortiGate firewalls, FortiSwitch, FortiAP and Fortinet security from GS IT, a Fortinet partner in Dubai, with design, deployment and support across the UAE.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: "/assets/images/fortinet/fortinet-authorized-partner.jpg", alt: "Fortinet Authorized Partner", wide: true },
  tag: "Fortinet Partner in Dubai",
  heading: "Fortinet Partner in Dubai\n for firewalls, secure networks and zero trust",
  highlightLast: 7,
  description: "GS IT is a Fortinet Authorized Partner, supplying genuine FortiGate firewalls, FortiSwitch, FortiAP and Fortinet security subscriptions across the UAE. We size them to your traffic, configure them to your policies and keep the licences current, so your protection never lapses quietly.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}/5`, desc: "Google rating" },
  ],
};

export const whyFortinetData: BentoData = {
  tag: "Why Fortinet",
  heading: "Firewall, switching and Wi-Fi,\n on one security platform",
  highlightLast: 4,
  subhead: "Most security gaps sit between products that were never designed to work together. Fortinet runs your firewall, switches, access points and endpoints as one system, with one policy and one view.",
  data: [
    {
      variant: "light",
      big: "25+",
      title: "Years in network security",
      dim: "Founded in 2000",
      text: [
        "Fortinet has built firewalls for over two decades. The same platform protects a two-person office and a multi-site enterprise.",
      ],
    },
    {
      variant: "light",
      title: "Purpose-built security chips",
      dim: "Inspection without the slowdown",
      text: [
        "FortiGate appliances use Fortinet's own security processors, such as SP5 and NP7. Encrypted traffic is inspected without the throughput drop you see on general-purpose hardware.",
      ],
    },
    {
      variant: "dark",
      title: "One operating system",
      dim: "Backed by FortiGuard Labs",
      text: [
        "FortiOS runs your firewall and manages FortiSwitch and FortiAP from the same console.",
        "FortiGuard Labs threat intelligence updates every device, so a new threat blocked at one site is blocked at all of them.",
      ],
    },
  ],
};

export const rangeData: FamilyGroupsData = {
  tag: "Fortinet products we supply",
  heading: "Fortinet across your network,\n one accountable partner",
  highlightLast: 3,
  subhead: "From a single branch to a data centre. Every Fortinet family we supply, grouped by the job it does. Current models only: end-of-order hardware is replaced with its successor.",
  navLabel: "Fortinet product families",
  mediaClass: "aspect-[10/7]",
  data: [
    {
      id: "fw",
      jumpLabel: "FortiGate firewalls",
      image: img("fortigate-next-generation-firewalls.webp"),
      alt: "Fortinet FortiGate 90G next-generation firewall",
      tag: "Security",
      title: "FortiGate next-generation firewalls",
      lead: "Firewall, SD-WAN and threat protection in one appliance, sized to your users and traffic.",
      categories: [
        { title: "Small office and branch", text: "FortiGate 30G, 40F, 50G and 70G / 71G, for offices up to a few dozen users.", links: [{ text: "40F", href: "/store/next-generation-firewall-products/fortinet/fortigate-40f" }] },
        { title: "Mid-size and large branch", text: "FortiGate 90G / 91G and 120G / 121G, with 10GE WAN and SP5 acceleration.", links: [{ text: "90G", href: "/store/next-generation-firewall-products/fortinet/fortigate-90g" }, { text: "120G", href: "/store/next-generation-firewall-products/fortinet/fortigate-120g" }] },
        { title: "Campus and enterprise edge", text: "FortiGate 200G / 201G, 400F and 900G, for head offices and campus cores.", links: [{ text: "900G", href: "/store/next-generation-firewall-products/fortinet/fortigate-900g" }] },
        { title: "Data centre", text: "FortiGate 1800F, 2600F, 3000F, 3200F, 3500F and 3700F.", links: [{ text: "1800F", href: "/store/next-generation-firewall-products/fortinet/fortigate-1800f" }, { text: "2600F", href: "/store/next-generation-firewall-products/fortinet/fortigate-2600f" }, { text: "3000F", href: "/store/next-generation-firewall-products/fortinet/fortigate-3000f" }, { text: "3200F", href: "/store/next-generation-firewall-products/fortinet/fortigate-3200f" }, { text: "3500F", href: "/store/next-generation-firewall-products/fortinet/fortigate-3500f" }, { text: "3700F", href: "/store/next-generation-firewall-products/fortinet/fortigate-3700f" }] },
        { title: "Hyperscale", text: "FortiGate 4200F, 4400F and 4800F, for service providers and very high throughput.", links: [{ text: "4200F", href: "/store/next-generation-firewall-products/fortinet/fortigate-4200f" }, { text: "4400F", href: "/store/next-generation-firewall-products/fortinet/fortigate-4400f" }, { text: "4800F", href: "/store/next-generation-firewall-products/fortinet/fortigate-4800f" }] },
        { title: "Chassis systems", text: "FortiGate 7081F and 7121F, scaling by blade instead of by box.", links: [{ text: "7081F", href: "/store/next-generation-firewall-products/fortinet/fortigate-7081f" }, { text: "7121F", href: "/store/next-generation-firewall-products/fortinet/fortigate-7121f" }] },
      ],
      foot: { label: "Protection:", chips: ["FortiGuard UTP", "Enterprise Protection", "FortiCare Premium"] },
      link: { text: "Learn more", href: "/fortinet-firewall-products" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about FortiGate firewalls", fields: { product_area: "FortiGate firewalls" } }) },
    },
    {
      id: "vm",
      jumpLabel: "Virtual and cloud firewalls",
      image: img("virtual-and-cloud-firewalls.webp"),
      alt: "FortiGate-VM management console",
      tag: "Cloud",
      title: "Virtual and cloud firewalls",
      lead: "The same FortiGate protection for private clouds, Azure, AWS and virtualised data centres.",
      categories: [
        { title: "FortiGate VM", text: "Virtual next-generation firewalls for VMware, Hyper-V and public cloud workloads." },
        { title: "FortiGate CNF", text: "Cloud-native firewall delivered as a managed service, scaling with your cloud traffic." },
        { title: "FortiFlex", text: "Points-based licensing. You buy capacity once and move it between VMs and services as needs change." },
      ],
      link: { text: "Learn more", href: "/fortinet-virtual-cloud-firewalls" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about virtual and cloud firewalls", fields: { product_area: "FortiGate VM and cloud firewalls" } }) },
    },
    {
      id: "sw",
      jumpLabel: "FortiSwitch",
      image: img("fortiswitch.webp"),
      alt: "Fortinet FortiSwitch switch",
      tag: "Switching",
      title: "FortiSwitch",
      lead: "Secure access and aggregation switches, configured and monitored from your FortiGate.",
      categories: [
        { title: "FortiSwitch 100 Series", text: "Access switching with PoE+ for phones, cameras and access points, such as the 148F-FPOE with 48 PoE+ ports." },
        { title: "FortiSwitch 300 Series", text: "Multi-gig 2.5GE access with high-power 802.3bt PoE and MACsec, such as the 348G-FPOE." },
        { title: "FortiSwitch 1000 Series", text: "10GE aggregation with 100GE uplinks for campus cores, such as the 1024E with dual power supplies." },
      ],
      foot: { label: "Managed via:", chips: ["FortiLink from FortiGate"] },
      link: { text: "Learn more", href: "/fortinet-fortiswitch-products" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about FortiSwitch", fields: { product_area: "FortiSwitch" } }) },
    },
    {
      id: "ap",
      jumpLabel: "FortiAP Wi-Fi",
      image: img("fortiap-wifi.webp"),
      alt: "Fortinet FortiAP access point",
      tag: "Wireless",
      title: "FortiAP Wi-Fi",
      lead: "Access points that apply the same security policy as your firewall to every wireless user.",
      categories: [
        { title: "Wi-Fi 7 indoor", text: "Tri-band 2.4, 5 and 6 GHz access points such as the FortiAP 231K, with a 5GE uplink for dense offices." },
        { title: "Managed from FortiGate", text: "No separate wireless controller. Wi-Fi, users and threats appear in the same console as your firewall." },
      ],
      foot: { label: "Support:", chips: ["FortiCare Premium"] },
      link: { text: "Learn more", href: "/fortinet-fortiap-products" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about FortiAP Wi-Fi", fields: { product_area: "FortiAP wireless" } }) },
    },
    {
      id: "zt",
      jumpLabel: "Zero trust access",
      image: img("zero-trust-access.webp"),
      alt: "FortiClient zero trust agent",
      tag: "Identity and access",
      title: "Zero trust access",
      lead: "Know every user and device on your network, and give each one only the access it needs.",
      categories: [
        { title: "FortiNAC", text: "Network access control that discovers, profiles and segments every device, including IoT." },
        { title: "FortiAuthenticator", text: "Central user authentication and single sign-on for your Fortinet network." },
        { title: "FortiToken Mobile", text: "App-based one-time passwords for two-factor sign-in on iOS, Android and Windows." },
        { title: "FortiPAM", text: "Privileged access management that records and controls admin sessions to critical systems." },
      ],
      link: { text: "Learn more", href: "/fortinet-zero-trust-access" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about zero trust access", fields: { product_area: "Zero trust access (ZTNA)" } }) },
    },
    {
      id: "ep",
      jumpLabel: "Endpoint, data and SASE",
      image: img("endpoint-data-and-sase.webp"),
      alt: "FortiSASE monitoring dashboard",
      tag: "Endpoint and cloud",
      title: "Endpoint, data and SASE",
      lead: "Protection that follows your people and your data off the office network.",
      categories: [
        { title: "FortiEDR", text: "Endpoint detection and response that stops threats in real time, with optional managed detection and response." },
        { title: "FortiDLP", text: "Data loss prevention and insider-risk monitoring across endpoints and SaaS, available as a managed service." },
        { title: "FortiSASE", text: "Cloud-delivered security and secure private access for remote and hybrid users, through one agent." },
      ],
      link: { text: "Learn more", href: "/fortinet-endpoint-sase" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about endpoint, data and SASE", fields: { product_area: "Endpoint and SASE" } }) },
    },
    {
      id: "mg",
      jumpLabel: "Management and analytics",
      image: img("management-and-analytics.webp"),
      alt: "FortiAnalyzer threat map dashboard",
      tag: "Operations",
      title: "Management and analytics",
      lead: "Every Fortinet device configured, logged and reported from the cloud, without on-site servers.",
      categories: [
        { title: "FortiManager Cloud", text: "Central configuration, policy and firmware management for multiple FortiGates." },
        { title: "FortiAnalyzer Cloud", text: "Central logging, reporting and outbreak detection, with storage sized to your log volume." },
        { title: "FortiAI", text: "Generative AI assistance for investigation, triage and configuration inside FortiManager and FortiAnalyzer." },
      ],
      link: { text: "Learn more", href: "/fortinet-management-analytics" },
      enquire: { text: "Ask about it", href: enq("quote", { src: "Range: Ask about management and analytics", fields: { product_area: "FortiManager and FortiAnalyzer" } }) },
    },
    {
      id: "eoo",
      tag: "Upgrades",
      title: "Replacing older Fortinet models?",
      lead: "Several FortiGate, FortiSwitch and FortiAP models are now end of order. Installed units stay supported and licences can still be renewed. We plan the move to the current model when you are ready.",
      categories: [
        { title: "FortiGate 60F", text: "Last order date 13 January 2027. Successor: FortiGate 70G." },
        { title: "FortiGate 100F", text: "End of order 16 April 2026. Successor: FortiGate 120G." },
        { title: "FortiGate 200F", text: "End of order 1 March 2026. Successor: FortiGate 200G." },
        { title: "FortiSwitch 448E", text: "End of order 13 September 2026. Supported until 2031." },
        { title: "FortiSwitch 1048E", text: "End of order 23 April 2026. Current model: FortiSwitch 1048G." },
        { title: "FortiAP 231F", text: "End of order 24 October 2024. Successor: FortiAP 231K." },
      ],
      enquire: { text: "Talk to an expert", href: enq("upgrade", { src: "Upgrades: Talk to an expert" }) },
    },
  ],
  platforms: { strong: "One platform", text: "from the edge to the endpoint, so your team runs one system, not seven.", chips: ["FortiOS", "FortiGuard Labs", "FortiManager Cloud", "FortiAnalyzer Cloud", "FortiCare"] },
};

export const licensingData: BundleCardsData = {
  tag: "Licensing and renewals",
  heading: "The right protection bundle,\n renewed before it lapses",
  highlightLast: 4,
  subhead: "A FortiGate without an active subscription still passes traffic, but stops receiving threat updates. We size the bundle, track every renewal date and renew on time.",
  data: [
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/>",
      title: "Unified Threat Protection",
      text: "IPS, advanced malware protection, application control, URL, DNS and video filtering, antispam and FortiCare Premium. The standard choice for most offices.",
    },
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M9 12l2 2 4-4\"/>",
      title: "Enterprise Protection",
      text: "Everything in UTP, plus data loss prevention, AI-based malware prevention, IoT security and security rating. For regulated and larger environments.",
    },
    {
      icon: "<rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"2\"/><path d=\"M4 10h16M9 3v4M15 3v4\"/>",
      title: "FortiCare and renewals",
      text: "Hardware support and firmware updates on 1-year or 3-year terms. We track your renewal dates across every device and renew before cover ends.",
    },
  ],
  button: primary("Get a bundle quote", enq("bundle", { src: "Licensing: Get a bundle quote", fields: { product_area: "FortiGate firewalls" } })),
  secondaryButton: outline("Renew a licence", enq("renewal", { src: "Licensing: Renew a licence", fields: { product_area: "FortiGate firewalls" } })),
};

// Same lucide icons as the Cisco partner page (assessment, supply, deployment, support)
export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From security assessment\n to support after go-live",
  highlightLast: 4,
  subhead: "A firewall is only as strong as its policy. The value comes from how Fortinet is sized, configured and looked after. We handle all three.",
  data: [
    {
      icon: "Search",
      title: "Assessment and sizing",
      description: "We review your network, traffic and security gaps, then size the FortiGate to your real throughput with inspection switched on.",
    },
    {
      icon: "Package",
      title: "Genuine supply and licensing",
      description: "Genuine Fortinet hardware with manufacturer warranty, plus the right FortiGuard and FortiCare subscriptions, registered to your account.",
    },
    {
      icon: "Wrench",
      title: "Deployment and migration",
      description: "Our security engineers configure firewall policy, SD-WAN, VPN, switching and Wi-Fi, and migrate rules from your existing firewall.",
    },
    {
      icon: "Headphones",
      title: "Support after go-live",
      description: "Monitoring, firmware updates, policy reviews and renewals. Clients on a GS IT AMC contract get a 15-minute response on critical issues.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "A clear design\n before work begins",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, from the first assessment to a documented handover.",
  data: [
    { title: "Assessment", text: "Current network, firewall rules, traffic volumes, sites and security gaps." },
    { title: "Design and proposal", text: "Fortinet architecture, bill of materials, licensing, scope and timeline in one document." },
    { title: "Supply", text: "Genuine Fortinet hardware and subscriptions with manufacturer warranty." },
    { title: "Deploy and migrate", text: "Installation, policy migration, cutover and testing, planned around your working hours." },
    { title: "Handover and support", text: "Documentation, team training, monitoring and renewal tracking." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One partner.\n Every layer of your IT.",
  highlightLast: 5,
  subhead: "Your firewall protects your servers, cloud, cameras, meeting rooms and users. We support all of it, so a security issue has one owner instead of a chain of vendors.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "15 min", title: "Critical response on AMC", text: "Response time on critical issues for clients on a GS IT AMC contract." },
    { value: `${portfolioData.employees}+`, title: "Specialists in-house", text: "Security, network, cloud and AV teams under one roof." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Fortinet questions\n answered",
  highlightLast: 1,
  faqData: [
    {
      question: "Is GS IT an authorized Fortinet partner in Dubai?",
      answer: "Yes. GS IT is a Fortinet Authorized Partner in the UAE. We supply genuine Fortinet hardware and subscriptions with manufacturer warranty, and we design, deploy and support the networks we deliver.",
    },
    {
      question: "Which Fortinet products does GS IT supply?",
      answer: "FortiGate firewalls from branch to data centre, FortiGate VM and CNF, FortiSwitch, FortiAP, FortiNAC, FortiAuthenticator, FortiToken, FortiPAM, FortiEDR, FortiDLP, FortiSASE, FortiManager Cloud, FortiAnalyzer Cloud and FortiFlex licensing.",
    },
    {
      question: "Which FortiGate model do we need?",
      answer: "It depends on your users, internet bandwidth and how much traffic you inspect. Datasheet firewall throughput is not the number that matters. We size against threat protection and SSL inspection throughput, then add headroom for growth.",
    },
    {
      question: "What is the difference between UTP and Enterprise Protection?",
      answer: "UTP covers IPS, malware protection, application control, web and DNS filtering, antispam and FortiCare Premium. Enterprise Protection adds data loss prevention, AI-based malware prevention, IoT security and security rating.",
    },
    {
      question: "Our FortiGate 60F, 80F, 100F or 200F is end of order. What now?",
      answer: "Your unit keeps working and its licences can still be renewed until the last service extension date. When you are ready, we plan the move to its G-series successor, such as the 70G, 90G, 120G or 200G, and migrate your policies.",
    },
    {
      question: "Can you renew Fortinet licences on a device we bought elsewhere?",
      answer: "Yes. We renew FortiGuard and FortiCare subscriptions on existing devices, and can review the configuration while we do it.",
    },
    {
      question: "Do you support Fortinet networks you did not install?",
      answer: "Yes. We audit existing Fortinet deployments, fix policy and firmware gaps, and take them into ongoing support.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields.
// "Ask about it" buttons fill the product area; the FortiGate fields only show for firewalls (or when no area is picked)
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Plan your Fortinet security\n with a security engineer",
  highlightLast: 4,
  steps: [
    "Tell us your sites, users and the Fortinet products you need.",
    "We assess your network and size the right models and licences.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked a button elsewhere on this page? The form is already filled in with what you picked.",
  glance: { strong: "Fortinet Authorized Partner", text: "· 1,500+ UAE clients · 13+ years. Supply, design, deployment and support from one accountable team." },
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New products", title: "Request a Fortinet quote", pickName: "New products", doneName: "Fortinet quote", modelField: "model" },
    { value: "upgrade", label: "Upgrade", title: "Plan your FortiGate upgrade", pickName: "Upgrade", doneName: "upgrade", modelField: "current_model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your Fortinet licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "current_model" },
    { value: "bundle", label: "Protection bundle", title: "Get a protection bundle quote", pickName: "Protection bundle", doneName: "protection bundle", modelField: "model" },
  ],
  fields: [
    { name: "product_area", label: "Product area", type: "select", show: ["quote"], full: true, empty: "Not sure yet", options: ["FortiGate firewalls", "FortiGate VM and cloud firewalls", "FortiSwitch", "FortiAP wireless", "Zero trust access (ZTNA)", "Endpoint and SASE", "FortiManager and FortiAnalyzer"] },
    { name: "model", label: "FortiGate model", type: "select", show: ["quote", "bundle"], full: true, empty: "Not sure, help me choose", options: ["FortiGate 30G", "FortiGate 40F", "FortiGate 50G", "FortiGate 70G", "FortiGate 90G", "FortiGate 91G", "FortiGate 120G", "FortiGate 200G", "FortiGate 400G", "FortiGate 900G", "FortiGate 901G", "FortiGate 1800F", "FortiGate 2600F", "FortiGate 3000F", "FortiGate 3200F", "FortiGate 3500F", "FortiGate 3501F", "FortiGate 3700F", "FortiGate 4200F", "FortiGate 4400F", "FortiGate 4800F", "FortiGate 7081F", "FortiGate 7121F"], onlyWhen: { field: "product_area", values: ["FortiGate firewalls"], tabs: ["quote"] } },
    { name: "current_model", label: "Current FortiGate model", type: "select", show: ["upgrade", "renewal"], options: FG_CURRENT_MODELS },
    { name: "units", label: "Number of units", type: "number", show: ["upgrade"], placeholder: "1" },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FGT60FTK…" },
    { name: "licence_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    { name: "bundle", label: "Protection bundle", type: "select", show: ["quote", "upgrade", "renewal", "bundle"], empty: "Not sure, recommend one", options: ["Unified Threat Protection (UTP)", "Enterprise Protection", "FortiCare only"], onlyWhen: { field: "product_area", values: ["FortiGate firewalls"], tabs: ["quote"] } },
    { name: "term", label: "Term", type: "select", show: ["quote", "upgrade", "renewal", "bundle"], empty: "Not sure yet", options: ["1 year", "3 years"] },
    { name: "users", label: "Users at the site", type: "select", show: ["quote", "upgrade"], options: ["Up to 25", "26 to 100", "101 to 500", "501 to 2,000", "Over 2,000"] },
    { name: "sites", label: "Number of sites", type: "number", show: ["quote", "upgrade"], placeholder: "1" },
    { name: "high_availability", label: "High availability", type: "select", show: ["quote", "upgrade"], empty: "Not sure", options: ["Single unit", "HA pair"], onlyWhen: { field: "product_area", values: ["FortiGate firewalls"], tabs: ["quote"] } },
  ],
  linkFields: ["product_area"],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Products, quantities, current setup, timeline",
  page: "fortinet-partner-in-dubai",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "security engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiGate, FortiOS, FortiGuard, FortiCare, FortiSwitch, FortiAP and other product names are trademarks of Fortinet, Inc.";
