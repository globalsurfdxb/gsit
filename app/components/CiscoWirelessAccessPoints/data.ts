import { portfolioData } from "@/app/components/common/data";
import type { FilterCatalogueData } from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import { AP_IMG, AP_STORE, apFootNote } from "@/app/components/CiscoProduct/products/access-points-shared";

// Generated from cisco-wireless-access-points.html (Cisco pages dev pack)

const BANNER = `${AP_IMG}/cisco-wi-fi-access-point-2.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

const card = (name: string) => `${AP_IMG}/${name}-card.webp`;
const store = (slug: string) => `${AP_STORE}/${slug}`;

export const seo = {
  title: "Cisco Wireless Access Points in Dubai | GS IT",
  description:
    "Shop Cisco Catalyst and Meraki wireless access points in Dubai, from Wi-Fi 6 to Wi-Fi 7, indoor and outdoor, with site surveys and support.",
  ogTitle: "Cisco Wi-Fi 6, 6E and Wi-Fi 7 Access Points in Dubai | GS IT",
  ogDescription:
    "Catalyst, Cisco Wireless and Meraki access points for offices, campuses and outdoor sites in the UAE, supplied, installed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Wireless Access Points" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Wireless Access Points\n in Dubai",
  highlightLast: 2,
  description:
    "Wi-Fi 7, Wi-Fi 6E and Wi-Fi 6 access points from Cisco Catalyst and Meraki, for offices, campuses, warehouses and outdoor spaces. GS IT surveys your site, supplies the right models, and installs and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore access points", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
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
  tag: "Choosing a Cisco access point",
  heading: "The right Wi-Fi\n for how you run IT",
  highlightLast: 5,
  subhead:
    "Start with who manages the network and how many people connect in each space. The model follows from there.",
  data: [
    {
      kicker: "Controller-managed",
      title: "Catalyst access points",
      text: "Enterprise Wi-Fi run from a Catalyst 9800 controller, for campuses that want on-premises control.",
      points: ["Wi-Fi 6E Catalyst 9136", "Deep RF analytics and policy control", "Suits large, single-campus networks"],
    },
    {
      dark: true,
      kicker: "Cloud or controller",
      title: "Cisco Wireless Wi-Fi 7",
      text: "The newest Cisco access points run on either the Meraki dashboard or a Catalyst controller, on the same hardware.",
      points: ["Tri-band 2.4, 5 and 6 GHz", "Choose cloud or on-premises later", "Cisco's replacement path for Wi-Fi 6"],
    },
    {
      kicker: "Cloud-managed",
      title: "Meraki access points",
      text: "Every access point and site in one web dashboard, alongside your Meraki switches and security.",
      points: ["Set up and monitor remotely", "Built-in security scanning radio", "Suits multi-site businesses"],
    },
  ],
};

export const catalogueData: FilterCatalogueData = {
  tag: "Cisco access point range",
  heading: "Cisco Catalyst and Meraki\n access point range",
  highlightLast: 3,
  subhead: "Filter by product line, Wi-Fi standard, environment or management.",
  sidebarTitle: "Filter access points",
  noun: "access points",
  emptyText: "No access points match these filters.",
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
      key: "gen",
      title: "Wi-Fi standard",
      options: [
        { value: "w7", label: "Wi-Fi 7" },
        { value: "w6e", label: "Wi-Fi 6E" },
        { value: "w6", label: "Wi-Fi 6" },
      ],
    },
    {
      key: "env",
      title: "Environment",
      options: [
        { value: "indoor", label: "Indoor" },
        { value: "outdoor", label: "Outdoor" },
      ],
    },
    {
      key: "mg",
      title: "Management",
      options: [
        { value: "cloud", label: "Cloud (Meraki Dashboard)" },
        { value: "controller", label: "Controller (Catalyst 9800)" },
      ],
    },
  ],
  products: [
    {
      tag: "Wi-Fi 7",
      title: "Cisco Wireless 9172 Series",
      description:
        "Tri-band Wi-Fi 7 for moderate-density offices, retail and healthcare, managed from a Catalyst controller or the Meraki dashboard.",
      image: card("cisco-wireless-9172-series"),
      href: store("cisco-catalyst-9172-series"),
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 7, 2.4 / 5 / 6 GHz" },
        { label: "Streams", value: "2x2:2 on each band" },
        { label: "Uplink", value: "2.5G multigigabit" },
      ],
      filters: { fam: ["catalyst", "meraki"], gen: ["w7"], env: ["indoor"], mg: ["controller", "cloud"] },
    },
    {
      tag: "Wi-Fi 7",
      title: "Cisco Wireless 9174 Series",
      description:
        "Four-stream Wi-Fi 7 for busy offices, meeting areas and campuses, with internal or external antenna models.",
      image: card("cisco-wireless-9174-series"),
      href: store("cisco-wireless-9174-series"),
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 7, 2.4 / 5 / 6 GHz" },
        { label: "Streams", value: "4x4 on 5 and 6 GHz" },
        { label: "Uplink", value: "5G multigigabit" },
      ],
      filters: { fam: ["catalyst", "meraki"], gen: ["w7"], env: ["indoor"], mg: ["controller", "cloud"] },
    },
    {
      tag: "Wi-Fi 7",
      title: "Cisco Wireless 9176 Series",
      description:
        "High-density Wi-Fi 7 with three 4x4 radios and a 10G uplink, for large offices, auditoriums and critical applications.",
      image: card("cisco-wireless-9176-series"),
      href: store("cisco-wireless-9176-series"),
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 7, 2.4 / 5 / 6 GHz" },
        { label: "Streams", value: "4x4 on each band" },
        { label: "Uplink", value: "10G multigigabit" },
      ],
      filters: { fam: ["catalyst", "meraki"], gen: ["w7"], env: ["indoor"], mg: ["controller", "cloud"] },
    },
    {
      tag: "Wi-Fi 6E",
      title: "Cisco Catalyst 9136 Series",
      description:
        "High-density Wi-Fi 6E for large offices, auditoriums and campuses, with built-in environmental sensors.",
      image: card("cisco-catalyst-9136-series"),
      href: store("cisco-catalyst-9136-series"),
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 6E, 2.4 / 5 / 6 GHz" },
        { label: "Streams", value: "4x4 + 8x8 + 4x4" },
        { label: "Uplink", value: "2× 5G multigigabit" },
      ],
      filters: { fam: ["catalyst"], gen: ["w6e"], env: ["indoor"], mg: ["controller"] },
    },
    {
      tag: "Outdoor Wi-Fi 6",
      title: "Cisco Meraki MR76",
      description:
        "IP67-rated outdoor Wi-Fi 6 for yards, campuses, warehouses and car parks, with external antennas.",
      image: card("cisco-meraki-mr76"),
      href: store("cisco-meraki-mr76-series"),
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 6, 2.4 / 5 GHz" },
        { label: "Streams", value: "2x2:2" },
        { label: "Rating", value: "IP67, −40 to 55 °C" },
      ],
      filters: { fam: ["meraki"], gen: ["w6"], env: ["outdoor"], mg: ["cloud"] },
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Fast, secure Wi-Fi\n in every room",
  highlightLast: 3,
  subhead: "What Cisco access points bring to an office, campus or outdoor site.",
  data: [
    {
      icon: "Users",
      title: "More devices, less waiting",
      description:
        "Wi-Fi 6, 6E and 7 serve many devices at once with OFDMA and MU-MIMO, so busy rooms stay responsive.",
      highlight: true,
    },
    {
      icon: "Radio",
      title: "The 6 GHz band",
      description:
        "Wi-Fi 6E and Wi-Fi 7 models add the 6 GHz band, with clean channels that older devices do not crowd.",
    },
    {
      icon: "ShieldCheck",
      title: "Built-in security radio",
      description:
        "A dedicated scanning radio watches for rogue access points and interference without slowing users down.",
    },
    {
      icon: "Cable",
      title: "Multigigabit uplinks",
      description: "2.5G and 5G Ethernet ports on most models, so the cable is never the bottleneck.",
    },
    {
      icon: "MapPin",
      title: "Bluetooth and location",
      description: "Integrated Bluetooth Low Energy radios support location, wayfinding and IoT use cases.",
    },
    {
      icon: "Cloud",
      title: "Cloud or on-premises",
      description: "Manage from the Meraki dashboard or a Catalyst 9800 controller, depending on your team and sites.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From site survey\n to a documented network",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, from the first site survey to a documented handover.",
  data: [
    { title: "Site survey", text: "Floor plans, wall types, user density, and existing cabling and switch ports." },
    {
      title: "Design and proposal",
      text: "Access point models, placement, channel plan, PoE and licensing in one document.",
      highlight: true,
    },
    { title: "Supply", text: "Genuine Cisco access points and licences with manufacturer warranty." },
    { title: "Install and configure", text: "Mounting, cabling, SSIDs, security and testing, planned around your working hours." },
    { title: "Handover and support", text: "Coverage report, documentation, monitoring and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco access point\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Should I choose Wi-Fi 6, Wi-Fi 6E or Wi-Fi 7?",
      answer:
        "For new projects, choose Wi-Fi 7. It adds the 6 GHz band and higher speeds, and Cisco has replaced its Wi-Fi 6 indoor access points with Wi-Fi 7 models. Wi-Fi 6E still suits high-density spaces today, and Wi-Fi 6 remains available outdoors with the Meraki MR76.",
    },
    {
      question: "We have Catalyst 9115 or Meraki MR36, MR44 or MR46 access points. What now?",
      answer:
        "Cisco stops taking orders for them on 31 December 2026 and supports them until 31 December 2031, so existing networks keep working. Cisco names the Wireless 9172I, 9174I and 9176I as their replacements, and we can plan a phased upgrade.",
    },
    {
      question: "What is the difference between Catalyst and Meraki access points?",
      answer:
        "Meraki access points are managed from a cloud dashboard, which suits multi-site businesses and lean IT teams. Catalyst access points run from a Catalyst 9800 controller for on-premises control. Cisco Wireless Wi-Fi 7 models can run either way on the same hardware.",
    },
    {
      question: "Do I need a site survey?",
      answer:
        "For anything beyond a few access points, yes. A survey shows how many access points you need and where, based on walls, ceiling height and user density, so you neither over-buy nor leave dead spots.",
    },
    {
      question: "Will my switches power the new access points?",
      answer:
        "It depends on the model. Wi-Fi 6E and Wi-Fi 7 access points often need PoE+ or UPOE and multigigabit ports for full performance. We check your switches during the survey and include any upgrades in the proposal.",
    },
    {
      question: "Is GS IT an authorized Cisco partner?",
      answer:
        "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco access points with manufacturer warranty, and design, install and support the networks we deliver.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your Wi-Fi\n with a wireless engineer",
  highlightLast: 4,
  image: BANNER,
  steps: [
    "Tell us your sites, floor areas and how many people connect.",
    "We survey the site and design coverage, capacity and placement.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote = apFootNote;
