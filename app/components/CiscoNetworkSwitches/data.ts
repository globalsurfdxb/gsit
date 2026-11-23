import { portfolioData } from "@/app/components/common/data";
import type { FilterCatalogueData } from "./Sections/FilterCatalogue";
import { SWITCH_IMG, SWITCH_STORE, switchFootNote } from "@/app/components/CiscoProduct/products/switches-shared";

// Generated from cisco-network-switches.html (Cisco pages dev pack)

const BANNER = `${SWITCH_IMG}/stack-of-cisco-data-centre-switches.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Cisco Network Switches in Dubai | GS IT",
  description:
    "Shop Cisco Catalyst and Meraki network switches in Dubai, from small business to campus core, with PoE, stacking and cloud management.",
  ogTitle: "Cisco Catalyst and Meraki Network Switches in Dubai | GS IT",
  ogDescription:
    "Cisco Catalyst 1200 to 9500 and Meraki MS130 and MS150 switches for businesses in the UAE, supplied, installed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Switches" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Network Switches\n in Dubai",
  highlightLast: 2,
  description:
    "Catalyst and Meraki switches for every part of your network, from an 8-port office switch to a campus core. GS IT supplies, configures and supports them, so the switch you buy fits the network you run.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore switches", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
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
  tag: "Choosing a Cisco switch",
  heading: "The right Cisco switch\n for how you run IT",
  highlightLast: 5,
  subhead: "The right family depends less on port count and more on who manages the network, and from where.",
  data: [
    {
      kicker: "Small offices",
      title: "Catalyst 1200 and 1300",
      text: "Managed switches for small and medium businesses, set up from a browser or the Cisco Business app.",
      points: ["No licences to buy", "PoE+ for phones, cameras and Wi-Fi", "Stacking on Catalyst 1300 10G models"],
    },
    {
      dark: true,
      kicker: "Cloud-managed",
      title: "Meraki switches",
      text: "Every switch, port and site in one web dashboard, alongside your Meraki Wi-Fi and security.",
      points: [
        "Configure and monitor remotely",
        "Suits multi-site businesses with a lean IT team",
        "Catalyst 9200 and 9300 also available Meraki-managed",
      ],
    },
    {
      kicker: "Enterprise campus",
      title: "Catalyst 9000",
      text: "Enterprise switching from access to core, managed on-premises with Catalyst Center or the CLI.",
      points: ["Layer 3 routing and stacking", "Multigigabit and high-power PoE", "Advanced segmentation and security"],
    },
  ],
};

const store = (slug: string) => `${SWITCH_STORE}/${slug}`;
const card = (slug: string) => `${SWITCH_IMG}/${slug}-card.webp`;

export const catalogueData: FilterCatalogueData = {
  tag: "Cisco switch range",
  heading: "Cisco Catalyst and Meraki\n switch range",
  highlightLast: 2,
  subhead:
    "Filter by product line, management or role. Not sure which fits? We confirm it during the network assessment.",
  sidebarTitle: "Filter switches",
  noun: "switch series",
  emptyText: "No switches match these filters.",
  groups: [
    {
      key: "fam",
      title: "Product line",
      options: [
        { value: "catalyst", label: "Cisco Catalyst" },
        { value: "meraki", label: "Cisco Meraki" },
      ],
    },
    {
      key: "mg",
      title: "Management",
      options: [
        { value: "cloud", label: "Cloud (Meraki Dashboard)" },
        { value: "onprem", label: "On-premises (Catalyst Center, CLI)" },
        { value: "web", label: "Web UI and app" },
      ],
    },
    {
      key: "rl",
      title: "Network role",
      options: [
        { value: "access", label: "Access" },
        { value: "core", label: "Core and aggregation" },
      ],
    },
  ],
  products: [
    {
      tag: "Small business",
      title: "Cisco Catalyst 1200 Series",
      description:
        "Smart-managed Gigabit switches for small offices and single sites, with PoE+ options and static routing.",
      image: card("cisco-catalyst-1200-series"),
      href: store("cisco-catalyst-1200-series"),
      specs: [
        { label: "Layer", value: "2, static routing" },
        { label: "Stacking", value: "No" },
        { label: "Managed via", value: "Web UI, Cisco Business Dashboard" },
      ],
      filters: { fam: ["catalyst"], mg: ["web"], rl: ["access"] },
    },
    {
      tag: "Small business",
      title: "Cisco Catalyst 1300 Series",
      description:
        "Fully managed switches for growing offices and branches, with up to 740 W of PoE+ and 10G uplinks on select models.",
      image: card("cisco-catalyst-1300-series"),
      href: store("cisco-catalyst-1300-series"),
      specs: [
        { label: "Layer", value: "3 (static, RIP)" },
        { label: "Stacking", value: "Up to 8, on 10G models" },
        { label: "Managed via", value: "Web UI, CLI, Cisco Business Dashboard" },
      ],
      filters: { fam: ["catalyst"], mg: ["web"], rl: ["access"] },
    },
    {
      tag: "Enterprise access",
      title: "Cisco Catalyst 9200 Series",
      description: "Fixed, stackable enterprise access switches for branch offices and midsize campuses.",
      image: card("cisco-catalyst-9200-series"),
      href: store("cisco-catalyst-9200-series"),
      specs: [
        { label: "Layer", value: "3 access" },
        { label: "Stacking", value: "Yes" },
        { label: "Managed via", value: "Catalyst Center, CLI, or Meraki (9200L-M)" },
      ],
      filters: { fam: ["catalyst"], mg: ["onprem", "cloud"], rl: ["access"] },
    },
    {
      tag: "Enterprise access",
      title: "Cisco Catalyst 9300 Series",
      description:
        "Stackable access switches for business-critical campuses, with multigigabit and high-power PoE options for Wi-Fi 6E and Wi-Fi 7.",
      image: card("cisco-catalyst-9300-series"),
      href: store("cisco-catalyst-9300-series"),
      specs: [
        { label: "Layer", value: "3" },
        { label: "Stacking", value: "Yes, with StackPower" },
        { label: "Managed via", value: "Catalyst Center, CLI, or Meraki (9300-M)" },
      ],
      filters: { fam: ["catalyst"], mg: ["onprem", "cloud"], rl: ["access"] },
    },
    {
      tag: "Core and aggregation",
      title: "Cisco Catalyst 9500 Series",
      description: "High-performance fixed switches for campus core and aggregation, with 10G to 100G ports.",
      image: card("cisco-catalyst-9500-series"),
      href: store("cisco-catalyst-9500-series"),
      specs: [
        { label: "Layer", value: "3" },
        { label: "Role", value: "Core, aggregation" },
        { label: "Managed via", value: "Catalyst Center, CLI" },
      ],
      filters: { fam: ["catalyst"], mg: ["onprem"], rl: ["core"] },
    },
    {
      tag: "Cloud-managed access",
      title: "Cisco Meraki MS130 Series",
      description:
        "Cloud-managed access switches, from compact 8-port to 48-port, with PoE+ and 2.5G multigigabit models.",
      image: card("cisco-meraki-ms130-series"),
      href: store("cisco-meraki-ms130-series"),
      specs: [
        { label: "Layer", value: "2" },
        { label: "Stacking", value: "No" },
        { label: "Managed via", value: "Meraki Dashboard" },
      ],
      filters: { fam: ["meraki"], mg: ["cloud"], rl: ["access"] },
    },
    {
      tag: "Cloud-managed access",
      title: "Cisco Meraki MS150 Series",
      description:
        "Stackable cloud-managed access switches with up to 60 W PoE, multigigabit options and 10G uplinks, in a shallow-depth chassis.",
      image: card("cisco-meraki-ms150-series"),
      href: store("cisco-meraki-ms150-series"),
      specs: [
        { label: "Layer", value: "2" },
        { label: "Stacking", value: "Yes" },
        { label: "Managed via", value: "Meraki Dashboard" },
      ],
      filters: { fam: ["meraki"], mg: ["cloud"], rl: ["access"] },
    },
    {
      // Meraki-managed 9300 models; links to the 9300 page, which covers them in its Meraki-managed tab
      tag: "Cloud-managed access",
      title: "Cisco Catalyst 9300-M Series",
      description:
        "Catalyst 9300 hardware run from the Meraki dashboard, with Layer 3 routing, multigigabit and up to 90 W PoE for demanding sites.",
      image: card("cisco-catalyst-9300-m-series"),
      href: store("cisco-catalyst-9300-series"),
      specs: [
        { label: "Layer", value: "3" },
        { label: "Stacking", value: "Yes, with StackPower" },
        { label: "Managed via", value: "Meraki Dashboard" },
      ],
      filters: { fam: ["meraki"], mg: ["cloud"], rl: ["access"] },
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Built for uptime,\n sized for growth",
  highlightLast: 3,
  subhead: "What Cisco switches have in common, from a single office to a multi-floor campus.",
  data: [
    {
      icon: "Zap",
      title: "Power over Ethernet",
      description: "Power phones, access points and cameras from the switch port, with no separate power points to install.",
      highlight: true,
    },
    {
      icon: "Layers",
      title: "Stacking",
      description: "Manage several switches as one, and keep traffic flowing if one member of the stack fails.",
    },
    {
      icon: "Activity",
      title: "Multigigabit speeds",
      description:
        "2.5G to 10G ports on select models, so new Wi-Fi 6E and Wi-Fi 7 access points are not held back by the cable.",
    },
    {
      icon: "ShieldCheck",
      title: "Access security",
      description:
        "802.1X authentication, access lists and network segmentation keep unknown devices off the network.",
    },
    {
      icon: "Cloud",
      title: "Cloud or on-premises",
      description: "Run switches from the Meraki dashboard or on-premises with Catalyst Center, depending on your team.",
    },
    {
      icon: "ArrowUpDown",
      title: "Traffic priority",
      description:
        "Quality of Service puts voice and video ahead of bulk traffic, so calls stay clear when the network is busy.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From port count\n to a documented network",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, from the first network audit to a documented handover.",
  data: [
    { title: "Assessment", text: "Users, devices, PoE load, cabling and growth plans for each floor and site." },
    { title: "Design and proposal", text: "Switch models, stacking, uplinks, VLANs and licensing in one document.", highlight: true },
    { title: "Supply", text: "Genuine Cisco switches and licences with manufacturer warranty." },
    { title: "Deploy and configure", text: "Racking, configuration, migration and testing, planned around your working hours." },
    { title: "Handover and support", text: "Network documentation, monitoring and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco switch\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is the difference between Cisco Catalyst and Meraki switches?",
      answer:
        "Meraki switches are managed from a cloud dashboard, which suits multi-site businesses and lean IT teams. Catalyst switches are usually managed on-premises with Catalyst Center or the command line, which suits larger campuses that need advanced routing and control. Catalyst 9200 and 9300 models are also available in Meraki-managed versions.",
    },
    {
      question: "Which Cisco switch is right for a small office?",
      answer:
        "For a single small site, the Catalyst 1200 is usually enough. If you expect to grow or want more PoE for cameras and access points, the Catalyst 1300 or Meraki MS130 is a better fit. If you need stacking, choose the Catalyst 1300 or Meraki MS150. We confirm the right model after counting your users and devices.",
    },
    {
      question: "What replaced the Meraki MS120, MS210 and MS350?",
      answer:
        "Cisco has stopped selling these models. Their replacements are the Meraki MS130, MS150 and Catalyst 9300-M, all listed above. We continue to support existing MS120, MS210 and MS350 networks and can plan a phased upgrade.",
    },
    {
      question: "Do Cisco switches need a licence?",
      answer:
        "Catalyst 1200 and 1300 switches need no licence. Meraki switches need a Meraki licence to run on the dashboard. Catalyst 9000 switches are sold with a Cisco networking subscription. We size the right licence in the proposal.",
    },
    {
      question: "Can my switches power phones, cameras and Wi-Fi access points?",
      answer:
        "Yes, on PoE models. We add up the power each device needs and choose a switch with enough PoE budget, plus headroom for growth.",
    },
    {
      question: "Is GS IT an authorized Cisco partner?",
      answer:
        "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco switches with manufacturer warranty, and design, deploy and support the networks we deliver.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your switching\n with a network engineer",
  highlightLast: 4,
  image: BANNER,
  steps: [
    "Tell us your sites, users and the devices you need to connect.",
    "We assess your network and size the switches, PoE and uplinks.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote = switchFootNote;
