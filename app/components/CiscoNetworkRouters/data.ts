import { portfolioData } from "@/app/components/common/data";
import type { FirewallCatalogueData } from "@/app/components/CiscoFirewallProducts/Sections/FirewallCatalogue";
import { RT_IMG, RT_STORE, rtFootNote } from "@/app/components/CiscoProduct/products/routers-shared";

// Generated from cisco-network-routers.html (Cisco pages dev pack)

const BANNER = `${RT_IMG}/cisco-catalyst-and-meraki-routers.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

const card = (name: string) => `${RT_IMG}/${name}-card.webp`;
const store = (slug: string) => `${RT_STORE}/${slug}`;

export const seo = {
  title: "High Performing Cisco Routers Collection in Dubai | GS IT",
  description:
    "Buy Cisco Catalyst ISR and Meraki MX routers in Dubai, with SD-WAN, built-in security and LTE or 5G backup for branch offices.",
  ogTitle: "Cisco Catalyst and Meraki Routers in Dubai | GS IT",
  ogDescription:
    "Cisco ISR 1100 and Meraki MX67 to MX95 routers for branch offices across the UAE, supplied, installed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Routers" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Network Routers\n in Dubai",
  highlightLast: 2,
  description:
    "Cisco Catalyst ISR and Meraki MX routers that connect your branches, internet links and cloud applications, with security built in. GS IT designs, installs and supports them, so every site stays connected.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore routers", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "Choosing a Cisco router",
  heading: "The right Cisco router\n for how you manage sites",
  highlightLast: 5,
  subhead:
    "The main choice is between routers your team configures directly, and appliances you run entirely from the cloud.",
  data: [
    {
      kicker: "Configured by your team",
      title: "Catalyst ISR 1100",
      text: "IOS XE branch routers with flexible WAN options and full routing control.",
      points: ["Ethernet, DSL, LTE and 5G WAN options", "Web UI, CLI or Catalyst SD-WAN Manager", "Pluggable LTE and 5G backup"],
    },
    {
      dark: true,
      kicker: "Managed from the cloud",
      title: "Meraki MX",
      text: "Security and SD-WAN appliances run from the Meraki dashboard, alongside Meraki switches and Wi-Fi.",
      points: [
        "Site-to-site Auto VPN",
        "Firewall, IPS and content filtering built in",
        "Suits multi-site businesses with a lean IT team",
      ],
    },
    {
      kicker: "Sized to the site",
      title: "Matched to your user count",
      text: "Meraki recommends each MX model by user count. ISR models are chosen by WAN type and throughput.",
      points: ["MX67: up to 50 users", "MX75 and MX85: up to 200 and 250 users", "MX95: up to 500 users"],
    },
  ],
};

export const catalogueData: FirewallCatalogueData = {
  tag: "Cisco router range",
  heading: "Cisco Catalyst and Meraki\n router range",
  highlightLast: 2,
  subhead: "Not sure which fits? We confirm the model after reviewing your sites, internet links and users.",
  groups: [
    {
      title: "Cisco Catalyst ISR routers",
      text: "IOS XE branch routers with on-box security and SD-WAN options.",
      products: [
        {
          tag: "Branch routing",
          title: "Cisco ISR 112x Routers",
          description: "Branch routers with Ethernet, DSL or G.SHDSL WAN, and pluggable LTE or 5G options.",
          image: card("cisco-isr-112x-routers"),
          href: store("cisco-catalyst-112x-isrs"),
          specs: [
            { label: "WAN", value: "GE copper or SFP, plus DSL on C1126, C1127 and C1128" },
            { label: "LAN", value: "4 or 8 GE ports, PoE optional" },
            { label: "IPsec", value: "Up to 600 Mbps" },
          ],
        },
      ],
    },
    {
      title: "Cisco Meraki MX appliances",
      text: "Cloud-managed security and SD-WAN, licensed per appliance.",
      columns: 4,
      products: [
        {
          tag: "Small branch",
          title: "Cisco Meraki MX67",
          description: "Cloud-managed security and SD-WAN for small branches with up to 50 users.",
          image: card("cisco-meraki-mx67"),
          href: store("cisco-meraki-mx67"),
          specs: [
            { label: "Firewall", value: "700 Mbps" },
            { label: "Ports", value: "1 WAN, 1 WAN/LAN, 3 LAN" },
            { label: "Form factor", value: "Desktop" },
          ],
        },
        {
          tag: "Small branch",
          title: "Cisco Meraki MX75",
          description: "Meraki’s flagship small-branch appliance, for sites with up to 200 users.",
          image: card("cisco-meraki-mx75"),
          href: store("cisco-meraki-mx75"),
          specs: [
            { label: "Firewall", value: "1 Gbps" },
            { label: "Ports", value: "3 WAN, 10 LAN" },
            { label: "Form factor", value: "Desktop" },
          ],
        },
        {
          tag: "Small to medium branch",
          title: "Cisco Meraki MX85",
          description: "Rack-mount security and SD-WAN for branches with up to 250 users, with SFP on WAN and LAN.",
          image: card("cisco-meraki-mx85"),
          href: store("cisco-meraki-mx85"),
          specs: [
            { label: "Firewall", value: "1 Gbps" },
            { label: "Ports", value: "4 WAN, 10 LAN" },
            { label: "Form factor", value: "1U rack" },
          ],
        },
        {
          tag: "Medium to large branch",
          title: "Cisco Meraki MX95",
          description: "Higher-capacity security and SD-WAN for branches with up to 500 users.",
          image: card("cisco-meraki-mx95"),
          href: store("cisco-meraki-mx95"),
          specs: [
            { label: "Firewall", value: "3 Gbps" },
            { label: "Ports", value: "4 WAN, 6 LAN" },
            { label: "Form factor", value: "1U rack" },
          ],
        },
      ],
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Connected branches,\n secured at the edge",
  highlightLast: 4,
  subhead: "What Cisco routers bring to a branch, from a single shop to a regional network.",
  data: [
    {
      icon: "Route",
      title: "SD-WAN",
      description:
        "Use more than one internet link at once, steer traffic by application, and fail over automatically.",
      highlight: true,
    },
    {
      icon: "ShieldCheck",
      title: "Built-in security",
      description:
        "Firewall, intrusion prevention, malware protection and URL filtering, on both ISR and Meraki MX.",
    },
    {
      icon: "Signal",
      title: "Cellular backup",
      description:
        "Pluggable LTE and 5G on ISR models, and cellular failover on Meraki MX, keep a site online if the fixed line drops.",
    },
    {
      icon: "Waypoints",
      title: "Site-to-site VPN",
      description: "Meraki Auto VPN and IPsec on ISR connect branches to the head office and the cloud.",
    },
    {
      icon: "Cloud",
      title: "Cloud or on-premises",
      description: "Run MX from the Meraki dashboard, and ISR from the web UI, CLI or Catalyst SD-WAN Manager.",
    },
    {
      icon: "Gauge",
      title: "Traffic priority",
      description:
        "See which applications use your bandwidth, and shape traffic so calls and business apps come first.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From site review\n to a documented network",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, from the first site review to a documented handover.",
  data: [
    { title: "Assessment", text: "Sites, internet links, users, applications and VPN needs." },
    { title: "Design and proposal", text: "Models, WAN design, failover and licences in one document.", highlight: true },
    { title: "Supply", text: "Genuine Cisco routers and licences with manufacturer warranty." },
    { title: "Deploy and configure", text: "Staging, configuration and cutover, planned around your working hours." },
    { title: "Handover and support", text: "Network documentation, monitoring and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco router\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Should we choose a Catalyst ISR or a Meraki MX?",
      answer:
        "Choose the ISR for full routing control, DSL or 5G WAN. Choose Meraki MX if you want every site managed from one cloud dashboard.",
    },
    {
      question: "How many users can a Meraki MX support?",
      answer:
        "Meraki recommends the MX67 for up to 50 users, the MX75 for up to 200, the MX85 for up to 250 and the MX95 for up to 500.",
    },
    {
      question: "Can we use two internet lines?",
      answer: "Yes. Both run two links with automatic failover, and both can add a cellular backup.",
    },
    {
      question: "Do we need a licence?",
      answer:
        "Every Meraki MX needs an active Meraki licence. The ISR runs as a standard router out of the box; Catalyst SD-WAN and advanced features need a Cisco subscription.",
    },
    {
      question: "Our ISR 1131 or 1161 is reaching end of sale. What now?",
      answer:
        "Cisco takes orders until 31 January 2027 and supports both until 31 January 2032. We advise on the right replacement for each site.",
    },
    {
      question: "Do the routers include security?",
      answer:
        "Yes. The Meraki MX includes a firewall, and Advanced Security adds intrusion prevention, malware protection and content filtering. ISR routers include on-box security features.",
    },
    {
      question: "Can you connect our branches to the head office?",
      answer: "Yes, with Meraki Auto VPN or IPsec VPN on ISR routers.",
    },
    {
      question: "Do you install and support Cisco routers?",
      answer:
        "Yes. GS IT is a Cisco partner. We stage and configure the routers, cut over outside working hours, and support them after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your branch network\n with a network engineer",
  highlightLast: 4,
  image: BANNER,
  steps: [
    "Tell us your sites, internet links and the number of users at each.",
    "We review your network and size the routers, failover and licences.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote = rtFootNote;
