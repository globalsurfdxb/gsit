import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { FilterCatalogueData } from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { FS_IMG, FS_STORE } from "@/app/components/FortinetProduct/products/fortiswitch-shared";

// Generated from 03-FortiSwitch/fortinet-fortiswitch-products.html (Fortinet pages pack)

const BANNER = `${FS_IMG}/fortiswitch-hero.webp`;
const store = (slug: string) => `${FS_STORE}/${slug}`;
const img = (file: string) => `${FS_IMG}/${file}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

export const seo = {
  title: "FortiSwitch Secure Switches in Dubai | Fortinet Partner | GS IT",
  description: "FortiSwitch access, campus and data centre switches, with PoE up to 90 W per port and FortiGate management, from GS IT in Dubai.",
  ogTitle: "FortiSwitch Secure Switches | GS IT",
  ogDescription: "Secure access, campus and data centre switches, managed from your FortiGate. Sized, installed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: "/assets/images/fortinet/fortinet-authorized-partner.jpg", alt: "Fortinet Authorized Partner", wide: true },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Switches" }, { label: "Fortinet" }, { label: "FortiSwitch" }],
  tag: "Fortinet Authorized Partner",
  heading: "FortiSwitch\n secure switching",
  highlightLast: 2,
  description: "Access, campus and data centre switches that you manage from your FortiGate, so the network and its security run from one console. GS IT designs, installs and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore the range", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "100GE", desc: "top port speed, from 1GE access up" },
    { value: "90 W", desc: "802.3bt PoE per port" },
    { value: "300", desc: "switches on one FortiGate" },
  ],
};

export const whyData: BentoData = {
  tag: "Why FortiSwitch",
  heading: "Your switches,\n run from your firewall",
  highlightLast: 4,
  subhead:
    "Most networks run switching and security as two separate systems, with two teams and two sets of rules. FortiSwitch brings the access layer into the FortiGate you already manage.",
  data: [
    {
      variant: "light",
      big: "FortiLink",
      title: "One console",
      dim: "Firewall and switches together",
      text: [
        "The FortiGate discovers new switches, pushes their configuration and shows every port, device and VLAN in the same interface as your security policy.",
      ],
    },
    {
      variant: "light",
      title: "Security at every port",
      dim: "Not just at the edge",
      text: [
        "Network access control identifies each device as it connects and places it in the right segment, so an unknown device never lands on your main network.",
      ],
    },
    {
      variant: "dark",
      title: "Power for every device",
      dim: "PoE up to 90 W",
      text: [
        "PoE+ on every range and 802.3bt on multi-gig models powers access points, cameras, phones and IoT devices from the switch.",
        "New IoT devices can be onboarded automatically with FortiLink NAC.",
      ],
    },
  ],
};

export const catalogueData: FilterCatalogueData = {
  tag: "FortiSwitch range",
  heading: "FortiSwitch\n switch models",
  highlightLast: 2,
  subhead:
    "Filter by where the switch goes, port speed, power and size. Every model runs FortiSwitchOS and joins the same FortiLink management.",
  sidebarTitle: "Filter switches",
  noun: "FortiSwitch families",
  emptyText: "No switches match these filters.",
  linkLabel: "Learn more",
  helpCard: {
    tag: "Need help?",
    title: "Not sure which switch?",
    text: "Tell us your devices, floors, PoE needs and uplinks. A GS IT network engineer will recommend the right FortiSwitch models, transceivers and support.",
    image: img("fortiswitch-selection-help.webp"),
    imageHref: enq("quote", { src: "Listing: Not sure which switch" }),
    button: { text: "Talk to an expert", href: enq("quote", { src: "Listing: Talk to an expert" }) },
  },
  quick: {
    group: "zone",
    label: "Where it goes",
    all: "All",
    options: [
      { value: "access", label: "Access" },
      { value: "dc", label: "Data centre" },
      { value: "ru", label: "Rugged" },
    ],
  },
  groups: [
    {
      key: "zone",
      title: "Where it goes",
      options: [
        { value: "access", label: "Office and campus access" },
        { value: "dc", label: "Data centre and core" },
        { value: "ru", label: "Industrial (rugged)" },
      ],
    },
    {
      key: "speed",
      title: "Port speed",
      options: [
        { value: "ge", label: "1GE access" },
        { value: "mgig", label: "Multi-gig (2.5 to 5GE)" },
        { value: "x10", label: "10GE access" },
        { value: "x25", label: "25GE and faster" },
      ],
    },
    {
      key: "poe",
      title: "Power over Ethernet",
      options: [
        { value: "none", label: "Data only" },
        { value: "plus", label: "PoE+ (30 W)" },
        { value: "bt", label: "802.3bt (60 to 90 W)" },
      ],
    },
    {
      key: "size",
      title: "Port count",
      options: [
        { value: "p8", label: "Up to 12 ports" },
        { value: "p24", label: "24 to 32 ports" },
        { value: "p48", label: "48 ports or more" },
      ],
    },
  ],
  products: [
    {
      tag: "Branch access",
      title: "FortiSwitch 108F",
      description: "Fanless 8-port switch for small offices, with PoE+ versions for phones, cameras and access points.",
      image: img("fortiswitch-100-series.webp"),
      href: store("fortiswitch-108F"),
      specs: [{ label: "Models", value: "108F, 108F-POE, 108F-FPOE" }, { label: "Ports", value: "8x GE RJ45, 2x GE SFP" }, { label: "PoE budget", value: "Up to 130 W" }, { label: "Switching", value: "20 Gbps" }, { label: "Form factor", value: "Desktop" }],
      filters: { zone: ["access"], speed: ["ge"], poe: ["none", "plus"], size: ["p8"] },
      enquireHref: enq("quote", { model: "FortiSwitch 108F", src: "Card: FortiSwitch 108F" }),
    },
    {
      tag: "Branch access",
      title: "FortiSwitch 110G",
      description: "Fanless multi-gig desktop switch with 5GE 802.3bt ports for fast access points.",
      image: img("fortiswitch-100-series.webp"),
      href: store("fortiswitch-110G"),
      specs: [{ label: "Models", value: "110G-FPOE" }, { label: "Ports", value: "2x 5GE RJ45, 8x 2.5GE RJ45, 4x 10GE SFP+" }, { label: "PoE budget", value: "200 W" }, { label: "Switching", value: "140 Gbps" }, { label: "Form factor", value: "Desktop" }],
      filters: { zone: ["access"], speed: ["mgig"], poe: ["bt", "plus"], size: ["p8"] },
      enquireHref: enq("quote", { model: "FortiSwitch 110G", src: "Card: FortiSwitch 110G" }),
    },
    {
      tag: "Branch access",
      title: "FortiSwitch 124F",
      description: "24-port GE branch switch with 10GE uplinks. Data-only, half-PoE and full-PoE versions.",
      image: img("fortiswitch-100-series.webp"),
      href: store("fortiswitch-124F"),
      specs: [{ label: "Models", value: "124F, 124F-POE, 124F-FPOE" }, { label: "Ports", value: "24x GE RJ45, 4x 10GE SFP+" }, { label: "PoE budget", value: "Up to 370 W" }, { label: "Switching", value: "128 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["ge"], poe: ["none", "plus"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 124F", src: "Card: FortiSwitch 124F" }),
    },
    {
      tag: "Branch access",
      title: "FortiSwitch 124G",
      description: "24-port 2.5GE branch switch with six 10GE uplinks and 802.3bt on the FPOE version.",
      image: img("fortiswitch-100-series.webp"),
      href: store("fortiswitch-124G"),
      specs: [{ label: "Models", value: "124G, 124G-FPOE" }, { label: "Ports", value: "24x 2.5GE RJ45, 6x 10GE SFP+" }, { label: "PoE budget", value: "Up to 780 W" }, { label: "Switching", value: "240 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["mgig"], poe: ["none", "bt", "plus"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 124G", src: "Card: FortiSwitch 124G" }),
    },
    {
      tag: "Branch access",
      title: "FortiSwitch 148F",
      description: "48-port GE switch with 10GE uplinks. Up to 740 W of PoE+ on the FPOE version.",
      image: img("fortiswitch-100-series.webp"),
      href: store("fortiswitch-148F"),
      specs: [{ label: "Models", value: "148F, 148F-POE, 148F-FPOE" }, { label: "Ports", value: "48x GE RJ45, 4x 10GE SFP+" }, { label: "PoE budget", value: "Up to 740 W" }, { label: "Switching", value: "176 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["ge"], poe: ["none", "plus"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 148F", src: "Card: FortiSwitch 148F" }),
    },
    {
      tag: "Office access",
      title: "FortiSwitch 224E",
      description: "24-port Layer 2/3 office switch. Fanless data-only version, or PoE+ on 12 ports.",
      image: img("fortiswitch-200-series.webp"),
      href: store("fortiswitch-224E"),
      specs: [{ label: "Models", value: "224E, 224E-POE" }, { label: "Ports", value: "24x GE RJ45, 4x GE SFP" }, { label: "PoE budget", value: "Up to 180 W" }, { label: "Switching", value: "56 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["ge"], poe: ["none", "plus"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 224E", src: "Card: FortiSwitch 224E" }),
    },
    {
      tag: "Office access",
      title: "FortiSwitch 248E",
      description: "48-port Layer 2/3 PoE+ office switch with 370 W or 740 W of power.",
      image: img("fortiswitch-200-series.webp"),
      href: store("fortiswitch-248E"),
      specs: [{ label: "Models", value: "248E-POE, 248E-FPOE" }, { label: "Ports", value: "48x GE RJ45, 4x GE SFP" }, { label: "PoE budget", value: "Up to 740 W" }, { label: "Switching", value: "104 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["ge"], poe: ["plus"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 248E", src: "Card: FortiSwitch 248E" }),
    },
    {
      tag: "Multi-gig campus",
      title: "FortiSwitch 324G",
      description: "24-port 2.5GE campus switch with MACsec. 802.3bt on all ports in the FPOE version. Replaces the 424E.",
      image: img("fortiswitch-300-series.webp"),
      href: store("fortiswitch-324G"),
      specs: [{ label: "Models", value: "324G, 324G-FPOE" }, { label: "Ports", value: "24x 2.5GE RJ45, 4x 10GE SFP+" }, { label: "PoE budget", value: "Up to 420 W" }, { label: "Switching", value: "200 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["mgig"], poe: ["none", "bt"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 324G", src: "Card: FortiSwitch 324G" }),
    },
    {
      tag: "Multi-gig campus",
      title: "FortiSwitch 348G",
      description: "48-port campus switch with 24 multi-gig ports and MACsec. Up to 1,560 W of 802.3bt power. Replaces the 448E.",
      image: img("fortiswitch-300-series.webp"),
      href: store("fortiswitch-348G"),
      specs: [{ label: "Models", value: "348G, 348G-FPOE" }, { label: "Ports", value: "24x GE RJ45, 24x 2.5GE RJ45, 4x 10GE SFP+" }, { label: "PoE budget", value: "Up to 1,560 W" }, { label: "Switching", value: "248 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["mgig"], poe: ["none", "bt"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 348G", src: "Card: FortiSwitch 348G" }),
    },
    {
      tag: "High-speed campus",
      title: "FortiSwitch 624F",
      description: "24-port 5GE campus switch with 25GE uplinks and MACsec. 90 W on every port in the FPOE version.",
      image: img("fortiswitch-600-series.webp"),
      href: store("fortiswitch-624F"),
      specs: [{ label: "Models", value: "624F, 624F-FPOE" }, { label: "Ports", value: "24x 1/2.5/5GE RJ45, 4x 25GE SFP28" }, { label: "PoE budget", value: "Up to 1,440 W" }, { label: "Switching", value: "440 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["mgig", "x25"], poe: ["none", "bt"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 624F", src: "Card: FortiSwitch 624F" }),
    },
    {
      tag: "High-speed campus",
      title: "FortiSwitch 648F",
      description: "48-port 2.5GE and 5GE campus switch with eight 25GE uplinks. Up to 1,800 W of 802.3bt power.",
      image: img("fortiswitch-600-series.webp"),
      href: store("fortiswitch-648F"),
      specs: [{ label: "Models", value: "648F, 648F-FPOE" }, { label: "Ports", value: "32x 1/2.5GE RJ45, 16x 1/2.5/5GE RJ45, 8x 25GE SFP28" }, { label: "PoE budget", value: "Up to 1,800 W" }, { label: "Switching", value: "720 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["access"], speed: ["mgig", "x25"], poe: ["none", "bt"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 648F", src: "Card: FortiSwitch 648F" }),
    },
    {
      tag: "Data centre and core",
      title: "FortiSwitch 1024E",
      description: "24-port 10GE SFP+ aggregation switch with two 100GE uplinks and dual power.",
      image: img("fortiswitch-1000-series.webp"),
      href: store("fortiswitch-1024E"),
      specs: [{ label: "Models", value: "1024E" }, { label: "Ports", value: "24x 10GE SFP+, 2x 100GE QSFP28" }, { label: "PoE budget", value: "Data only" }, { label: "Switching", value: "880 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["dc"], speed: ["x10"], poe: ["none"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 1024E", src: "Card: FortiSwitch 1024E" }),
    },
    {
      tag: "Data centre and core",
      title: "FortiSwitch T1024E",
      description: "24-port 10GBASE-T copper switch with 100GE uplinks. 802.3bt power on the T1024F-FPOE.",
      image: img("fortiswitch-1000-series.webp"),
      href: store("fortiswitch-T1024E"),
      specs: [{ label: "Models", value: "T1024E, T1024F-FPOE" }, { label: "Ports", value: "24x 10G/5G/2.5G/1G RJ45, 2x 100GE QSFP28" }, { label: "PoE budget", value: "Up to 1,440 W" }, { label: "Switching", value: "880 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["dc"], speed: ["x10"], poe: ["none", "bt"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch T1024E", src: "Card: FortiSwitch T1024E" }),
    },
    {
      tag: "Data centre and core",
      title: "FortiSwitch 1048G",
      description: "48-port 10GE top-of-rack switch with six 100GE uplinks and MACsec. Replaces the 1048E.",
      image: img("fortiswitch-1000-series.webp"),
      href: store("fortiswitch-1048G"),
      specs: [{ label: "Models", value: "1048G" }, { label: "Ports", value: "48x 10GE SFP+, 6x 100GE QSFP28" }, { label: "PoE budget", value: "Data only" }, { label: "Switching", value: "2,160 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["dc"], speed: ["x10"], poe: ["none"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 1048G", src: "Card: FortiSwitch 1048G" }),
    },
    {
      tag: "Data centre and core",
      title: "FortiSwitch 2048F",
      description: "48-port 25GE core switch with eight 100GE ports and 4 Tbps of switching.",
      image: img("fortiswitch-2000-3000-series.webp"),
      href: store("fortiswitch-2048F"),
      specs: [{ label: "Models", value: "2048F, 2048F-B2F" }, { label: "Ports", value: "48x 25GE SFP28, 8x 100GE QSFP28, 2x 10GE SFP+" }, { label: "PoE budget", value: "Data only" }, { label: "Switching", value: "4,000 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["dc"], speed: ["x25"], poe: ["none"], size: ["p48"] },
      enquireHref: enq("quote", { model: "FortiSwitch 2048F", src: "Card: FortiSwitch 2048F" }),
    },
    {
      tag: "Data centre and core",
      title: "FortiSwitch 3032G",
      description: "32-port 100GE spine switch with 6.4 Tbps of switching. Replaces the 3032E.",
      image: img("fortiswitch-2000-3000-series.webp"),
      href: store("fortiswitch-3032G"),
      specs: [{ label: "Models", value: "3032G" }, { label: "Ports", value: "32x 100GE QSFP28, 2x 10GE SFP+" }, { label: "PoE budget", value: "Data only" }, { label: "Switching", value: "6,440 Gbps" }, { label: "Form factor", value: "1RU rack" }],
      filters: { zone: ["dc"], speed: ["x25"], poe: ["none"], size: ["p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch 3032G", src: "Card: FortiSwitch 3032G" }),
    },
    {
      tag: "Rugged",
      title: "FortiSwitch Rugged",
      description: "Fanless industrial switches from 8 to 30 ports, rated from -40°C, with PoE up to 90 W.",
      image: img("fortiswitch-rugged-series.webp"),
      href: store("fortiswitch-rugged"),
      specs: [{ label: "Models", value: "FSR-108F, FSR-112F-POE, FSR-216F-POE, FSR-424F-POE" }, { label: "Ports", value: "6 to 30 ports, GE to 40GE" }, { label: "PoE budget", value: "Up to 421 W" }, { label: "Switching", value: "Up to 360 Gbps" }, { label: "Form factor", value: "1RU rack or DIN rail" }],
      filters: { zone: ["ru"], speed: ["ge", "mgig"], poe: ["none", "bt"], size: ["p8", "p24"] },
      enquireHref: enq("quote", { model: "FortiSwitch Rugged", src: "Card: FortiSwitch Rugged" }),
    },
  ],
};

export const managementData: OptionCardsData = {
  tag: "Management",
  heading: "Manage it\n the way your team works",
  highlightLast: 5,
  subhead: "FortiLink from a FortiGate is the most common choice. FortiEdge Cloud suits many small sites without a FortiGate.",
  data: [
    {
      kicker: "Most common",
      title: "FortiGate with FortiLink",
      text: "The FortiGate acts as the switch controller. Switches, security policy and network access control share one console, with no extra licence.",
      highlight: true,
    },
    {
      kicker: "Cloud",
      title: "FortiEdge Cloud",
      text: "Fortinet's cloud platform for switches without a FortiGate on site, alongside FortiAP and FortiExtender. One switch is free to manage; more need a FortiEdge Cloud licence.",
    },
    {
      kicker: "Independent",
      title: "Standalone",
      text: "Each switch is configured on its own, for networks that do not use Fortinet firewalls.",
    },
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "Where FortiSwitch\n fits your network",
  highlightLast: 3,
  subhead: "Most projects start with one of these and extend to the rest of the site.",
  data: [
    {
      icon: '<path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6"/>',
      title: "Branch offices",
      description: "A FortiGate and a FortiSwitch give each branch a complete, centrally managed network in two boxes.",
    },
    {
      icon: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
      title: "Fast Wi-Fi",
      description: "Multi-gig ports and 802.3bt power for Wi-Fi 6E and Wi-Fi 7 access points.",
    },
    {
      icon: '<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>',
      title: "Cameras and IoT",
      description: "PoE for CCTV and sensors, with each device type kept in its own segment.",
    },
    {
      icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      title: "Campus networks",
      description: "Access, aggregation and core switches for multi-floor offices, all under one management.",
    },
    {
      icon: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
      title: "Server rooms",
      description: "10GE top-of-rack and aggregation switches with 100GE uplinks and redundant power.",
    },
    {
      icon: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/>',
      title: "Industrial sites",
      description: "Rugged switches for plants, utilities and outdoor cabinets.",
    },
  ],
};

export const supportData: OptionCardsData = {
  tag: "Support and licences",
  heading: "Covered from\n day one to renewal",
  highlightLast: 4,
  subhead:
    "FortiLink management needs no extra licence on the FortiGate. What each switch does need is support, plus a cloud licence if you manage it from FortiEdge Cloud.",
  columns: 4,
  data: [
    {
      kicker: "Recommended",
      title: "FortiCare Premium",
      text: "Firmware updates, 24/7 Fortinet technical support and hardware replacement for each switch.",
      highlight: true,
    },
    {
      kicker: "For critical sites",
      title: "FortiCare Elite",
      text: "Everything in Premium, with faster Fortinet response for networks where a switch failure stops the business.",
    },
    {
      kicker: "Cloud licence",
      title: "FortiEdge Cloud",
      text: "Cloud management for each switch, with FortiCare Premium included. Licensed by switch series.",
    },
    {
      kicker: "Add-on",
      title: "Advanced Features licence",
      text: "Unlocks additional switching features on supported models. We tell you if your design needs it.",
    },
  ],
  buttons: [
    primary("Renew FortiCare", enq("renewal", { src: "Support: Renew FortiCare" })),
    outline("Replace existing switches", enq("replace", { src: "Support: Replace existing switches" })),
  ],
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From site survey\n to supported network",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, so you know where the project stands.",
  data: [
    { title: "Survey", text: "Devices, PoE needs, cabling, uplinks and your current switches, site by site." },
    { title: "Design", text: "Switch models, VLANs, segments, transceivers and support in one proposal." },
    { title: "Install", text: "Racking, cabling and FortiLink or FortiEdge Cloud setup, with configuration built to the design." },
    { title: "Migrate", text: "Port and VLAN mapping from your old switches, with cutover outside working hours." },
    { title: "Support", text: "Monitoring, firmware updates and FortiCare renewal tracking for every switch." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "FortiSwitch\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Do FortiSwitches need a FortiGate?",
      answer:
        "No, but most customers use one. With FortiLink, the FortiGate configures and monitors every switch from its own interface. FortiSwitches can also be managed from the cloud with FortiEdge Cloud, or run standalone.",
    },
    {
      question: "How many switches can one FortiGate manage?",
      answer:
        "It depends on the FortiGate model. Small branch models manage a handful of switches, and the largest manage up to 300. We check the limit when we size your firewall and switches together.",
    },
    {
      question: "What is the difference between POE and FPOE models?",
      answer:
        "POE models power some of their ports, FPOE models power all of them with a larger budget. For example, the 148F-POE powers 24 ports from 370 W, while the 148F-FPOE powers all 48 ports from 740 W.",
    },
    {
      question: "Which switch suits Wi-Fi 6E and Wi-Fi 7 access points?",
      answer:
        "Fast access points can use more than 1 Gbps and more than 30 W. A multi-gig switch with 802.3bt PoE, such as the 300 or 600 Series, gives them both. We match the switch to the access points you plan to deploy.",
    },
    {
      question: "What support and licences do FortiSwitches need?",
      answer:
        "Each switch is covered by FortiCare Premium or Elite support, for 1 or 3 years. Switches managed from FortiEdge Cloud use a FortiEdge Cloud licence that includes FortiCare Premium. Some advanced features need an Advanced Features licence on supported models. We include the right support and licences in the quote.",
    },
    {
      question: "Is the FortiSwitch 400 Series still available?",
      answer:
        "No. Fortinet stopped taking orders for the 424E and 448E in September 2026 and recommends the 324G and 348G in the 300 Series instead. Existing 400 Series switches stay supported, and we still renew their FortiCare.",
    },
    {
      question: "Can you replace our existing switches?",
      answer:
        "Yes. We survey your current network, map every port and VLAN to the new switches, then cut over outside working hours so your team is not disrupted.",
    },
    {
      question: "Do you install and support FortiSwitch?",
      answer:
        "Yes. GS IT is a Fortinet Authorized Partner. We design, install and configure your switches, including transceivers and cabling, then support them after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Plan your switching\n with a network engineer",
  highlightLast: 4,
  steps: [
    "Tell us your sites, devices, PoE needs and current switches.",
    "We size the switches, uplinks, transceivers and support.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Get a quote on a model, or one of the support buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New switches", title: "Request a FortiSwitch quote", pickName: "New switches", doneName: "FortiSwitch quote", modelField: "model" },
    { value: "replace", label: "Replace existing switches", title: "Plan your switch replacement", pickName: "Replace existing switches", doneName: "switch replacement", modelField: "model" },
    { value: "renewal", label: "FortiCare renewal", title: "Renew FortiCare for your switches", pickName: "FortiCare renewal", doneName: "FortiCare renewal" },
  ],
  fields: [
    {
      name: "model",
      label: "FortiSwitch model or series",
      type: "select",
      show: ["quote", "replace"],
      full: true,
      empty: "Not sure, help me choose",
      groups: [
        { label: "FortiSwitch 108F", options: [{"label": "FortiSwitch 108F, any version", "value": "FortiSwitch 108F"}, "FortiSwitch 108F", "FortiSwitch 108F-POE", "FortiSwitch 108F-FPOE"] },
        { label: "FortiSwitch 110G", options: ["FortiSwitch 110G-FPOE"] },
        { label: "FortiSwitch 124F", options: [{"label": "FortiSwitch 124F, any version", "value": "FortiSwitch 124F"}, "FortiSwitch 124F", "FortiSwitch 124F-POE", "FortiSwitch 124F-FPOE"] },
        { label: "FortiSwitch 124G", options: [{"label": "FortiSwitch 124G, any version", "value": "FortiSwitch 124G"}, "FortiSwitch 124G", "FortiSwitch 124G-FPOE"] },
        { label: "FortiSwitch 148F", options: [{"label": "FortiSwitch 148F, any version", "value": "FortiSwitch 148F"}, "FortiSwitch 148F", "FortiSwitch 148F-POE", "FortiSwitch 148F-FPOE"] },
        { label: "FortiSwitch 224E", options: [{"label": "FortiSwitch 224E, any version", "value": "FortiSwitch 224E"}, "FortiSwitch 224E", "FortiSwitch 224E-POE"] },
        { label: "FortiSwitch 248E", options: [{"label": "FortiSwitch 248E, any version", "value": "FortiSwitch 248E"}, "FortiSwitch 248E-POE", "FortiSwitch 248E-FPOE"] },
        { label: "FortiSwitch 324G", options: [{"label": "FortiSwitch 324G, any version", "value": "FortiSwitch 324G"}, "FortiSwitch 324G", "FortiSwitch 324G-FPOE"] },
        { label: "FortiSwitch 348G", options: [{"label": "FortiSwitch 348G, any version", "value": "FortiSwitch 348G"}, "FortiSwitch 348G", "FortiSwitch 348G-FPOE"] },
        { label: "FortiSwitch 624F", options: [{"label": "FortiSwitch 624F, any version", "value": "FortiSwitch 624F"}, "FortiSwitch 624F", "FortiSwitch 624F-FPOE"] },
        { label: "FortiSwitch 648F", options: [{"label": "FortiSwitch 648F, any version", "value": "FortiSwitch 648F"}, "FortiSwitch 648F", "FortiSwitch 648F-FPOE"] },
        { label: "FortiSwitch 1024E", options: ["FortiSwitch 1024E"] },
        { label: "FortiSwitch T1024E", options: [{"label": "FortiSwitch T1024E, any version", "value": "FortiSwitch T1024E"}, "FortiSwitch T1024E", "FortiSwitch T1024F-FPOE"] },
        { label: "FortiSwitch 1048G", options: ["FortiSwitch 1048G"] },
        { label: "FortiSwitch 2048F", options: [{"label": "FortiSwitch 2048F, any version", "value": "FortiSwitch 2048F"}, "FortiSwitch 2048F", "FortiSwitch 2048F-B2F"] },
        { label: "FortiSwitch 3032G", options: ["FortiSwitch 3032G"] },
        { label: "FortiSwitch Rugged", options: [{"label": "FortiSwitch Rugged, any version", "value": "FortiSwitch Rugged"}, "FortiSwitch Rugged 108F", "FortiSwitch Rugged 112F-POE", "FortiSwitch Rugged 216F-POE", "FortiSwitch Rugged 424F-POE"] },
      ],
    },
    {
      name: "current_switches",
      label: "Current switches",
      type: "select",
      show: ["replace"],
      options: ["FortiSwitch 400 Series", "Other older FortiSwitch", "Cisco", "HPE Aruba", "Other brand", "Not sure"],
    },
    { name: "units", label: "Number of switches", type: "number", show: ["quote", "replace", "renewal"], placeholder: "1" },
    {
      name: "poe",
      label: "Devices to power",
      type: "select",
      show: ["quote", "replace"],
      empty: "Not sure",
      options: ["None", "Phones and cameras (PoE+)", "Wi-Fi 6E / 7 access points (802.3bt)", "A mix"],
    },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "sites", label: "Number of sites", type: "number", show: ["quote", "replace"], placeholder: "1" },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. S148FF…" },
    { name: "support_expiry", label: "Current support expiry", type: "month", show: ["renewal"] },
    {
      name: "support_level",
      label: "Support level",
      type: "select",
      show: ["quote", "replace", "renewal"],
      empty: "Not sure, recommend one",
      options: ["FortiCare Premium", "FortiCare Elite", "FortiEdge Cloud licence"],
    },
    { name: "term", label: "Term", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Floors, device counts, cabling, timeline",
  page: "fortinet-fortiswitch-products",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT network engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "network engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiSwitch, FortiGate, FortiLink, FortiCare and other product names are trademarks of Fortinet, Inc.";
