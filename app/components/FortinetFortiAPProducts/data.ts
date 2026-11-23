import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { FilterCatalogueData } from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { FAP_IMG as IMG_DIR, FAP_STORE as STORE } from "@/app/components/FortinetProduct/products/fortiap-shared";

// Generated from 04-FortiAP-Wireless/fortinet-fortiap-products.html (Fortinet pages pack)

const img = (file: string) => `${IMG_DIR}/${file}`;
const store = (slug: string) => `${STORE}/${slug}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

const BANNER = img("fortiap-hero.webp");

export const seo = {
  title: "FortiAP Wireless Access Points in Dubai | GS IT",
  description: "FortiAP Wi-Fi 7, Wi-Fi 6E and Wi-Fi 6 access points from GS IT in Dubai, managed from your FortiGate, FortiEdge Cloud or FortiSASE.",
  ogTitle: "FortiAP Wireless Access Points | GS IT",
  ogDescription: "Secure Wi-Fi 7 access points managed from your FortiGate. Surveyed, installed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: img("fortinet-authorized-partner.webp"), alt: "Fortinet Authorized Partner", wide: true },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Wireless" }, { label: "Fortinet" }, { label: "FortiAP" }],
  tag: "Fortinet Authorized Partner",
  heading: "FortiAP\n secure Wi-Fi",
  highlightLast: 2,
  description: "Wi-Fi 7, Wi-Fi 6E and Wi-Fi 6 access points managed from your FortiGate, so wireless follows the same security policy as the rest of your network. GS IT surveys, installs and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore the range", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "Wi-Fi 7", desc: "with the 6 GHz band" },
    { value: "11.5 Gbps", desc: "top 6 GHz data rate, 441K" },
    { value: "10,000", desc: "access points in one deployment" },
  ],
};

export const whyData: BentoData = {
  tag: "Why FortiAP",
  heading: "Your Wi-Fi,\n run from your firewall",
  highlightLast: 4,
  subhead: "Wireless is often the least protected part of a network, run on a separate controller with its own rules. FortiAP brings it into the FortiGate you already manage.",
  data: [
    {
      variant: "light",
      big: "Built in",
      title: "No separate controller",
      dim: "The FortiGate is the controller",
      text: [
        "Every FortiGate includes a wireless controller, so access points, SSIDs and security policy sit in one console, without a controller licence to buy.",
      ],
    },
    {
      variant: "light",
      title: "Security on every SSID",
      dim: "Not just at the edge",
      text: [
        "Wireless traffic is inspected by the same FortiGate policy as wired traffic. Supported G and K models can also run application control and web filtering on the access point.",
      ],
    },
    {
      variant: "dark",
      title: "Ready for Wi-Fi 7",
      dim: "6 GHz and multi-gig",
      text: [
        "The K series adds the 6 GHz band, wider channels and 5GE or 10GE uplinks, so new laptops and phones get the speed they were built for.",
        "Zero-touch deployment means access points configure themselves when connected.",
      ],
    },
  ],
};

export const catalogueData: FilterCatalogueData = {
  tag: "FortiAP range",
  heading: "FortiAP\n access point models",
  highlightLast: 3,
  subhead: "Filter by Wi-Fi generation, where the access point goes and its radio streams. Every model is managed from your FortiGate.",
  sidebarTitle: "Filter access points",
  noun: "FortiAP models",
  emptyText: "No access points match these filters.",
  linkLabel: "Learn more",
  helpCard: {
    tag: "Need help?",
    title: "Not sure which access point?",
    text: "Send us your floor plans and user numbers. A GS IT wireless engineer will recommend models and placement, and the PoE switching to power them.",
    image: img("fortiap-hero.webp"),
    button: { text: "Talk to an expert", href: enq("quote", { src: "Listing: Talk to an expert" }) },
  },
  quick: {
    group: "gen",
    label: "Wi-Fi generation",
    all: "All",
    options: [
      { value: "w7", label: "Wi-Fi 7" },
      { value: "w6e", label: "Wi-Fi 6E" },
      { value: "w6", label: "Wi-Fi 6" },
    ],
  },
  groups: [
    {
      key: "gen",
      title: "Wi-Fi generation",
      options: [
        { value: "w7", label: "Wi-Fi 7" },
        { value: "w6e", label: "Wi-Fi 6E" },
        { value: "w6", label: "Wi-Fi 6" },
      ],
    },
    {
      key: "place",
      title: "Where it goes",
      options: [
        { value: "in", label: "Indoor ceiling" },
        { value: "wp", label: "Wall plate or desk" },
        { value: "out", label: "Outdoor" },
        { value: "ind", label: "Industrial" },
      ],
    },
    {
      key: "stream",
      title: "Radio streams",
      options: [
        { value: "s2", label: "2x2" },
        { value: "s4", label: "4x4" },
        { value: "s8", label: "8x8" },
      ],
    },
    {
      key: "sase",
      title: "Management",
      options: [
        { value: "sase", label: "Supports FortiSASE" },
      ],
    },
  ],
  products: [
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 221K",
      description: "Entry-level Wi-Fi 7 access point for small offices, shops and classrooms.",
      image: img("fortiap-221k.webp"),
      href: store("fortiap-221K"),
      specs: [{ label: "Radios", value: "2 (2.4 and 5 GHz), 2x2" }, { label: "Max data rate", value: "688 Mbps + 2.88 Gbps" }, { label: "Ethernet", value: "1x 2.5GE" }, { label: "PoE", value: "802.3at" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s2"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 221K", src: "Card: FortiAP 221K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 231K",
      description: "Tri-band Wi-Fi 7 with 6 GHz on standard 802.3at PoE. A strong default for offices.",
      image: img("fortiap-231k.webp"),
      href: store("fortiap-231K"),
      specs: [{ label: "Radios", value: "3 (2.4, 5 and 6 GHz), 2x2" }, { label: "Max data rate", value: "Up to 5.76 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 5GE multi-gig" }, { label: "PoE", value: "802.3at" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s2"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 231K", src: "Card: FortiAP 231K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 241K",
      description: "Quad-radio Wi-Fi 7 with a dedicated scanning radio and a 10GE uplink.",
      image: img("fortiap-241k.webp"),
      href: store("fortiap-241K"),
      specs: [{ label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 2x2" }, { label: "Max data rate", value: "Up to 5.77 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 10GE multi-gig, 1x GE" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s2"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 241K", src: "Card: FortiAP 241K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 243K",
      description: "The 241K with external antenna connectors, for warehouses, halls and high ceilings.",
      image: img("fortiap-243k.webp"),
      href: store("fortiap-243K"),
      specs: [{ label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 2x2" }, { label: "Max data rate", value: "Up to 5.77 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 10GE multi-gig, 1x GE" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s2"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 243K", src: "Card: FortiAP 243K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 441K",
      description: "High-performance 4x4 Wi-Fi 7 for busy floors, auditoriums and high-density spaces.",
      image: img("fortiap-441k.webp"),
      href: store("fortiap-441K"),
      specs: [{ label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 4x4" }, { label: "Max data rate", value: "Up to 11.53 Gbps on 6 GHz" }, { label: "Ethernet", value: "2x 10GE multi-gig" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s4"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 441K", src: "Card: FortiAP 441K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 443K",
      description: "The 441K with external antenna connectors, for large halls and specialist coverage.",
      image: img("fortiap-443k.webp"),
      href: store("fortiap-443K"),
      specs: [{ label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 4x4" }, { label: "Max data rate", value: "Up to 11.53 Gbps on 6 GHz" }, { label: "Ethernet", value: "2x 10GE multi-gig" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["in"], stream: ["s4"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 443K", src: "Card: FortiAP 443K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Wall plate or desk"],
      title: "FortiAP 23JK",
      description: "Wi-Fi 7 wall-plate access point with three wired ports, for hotel rooms, dorms and home offices.",
      image: img("fortiap-23jk.webp"),
      href: store("fortiap-23JK"),
      specs: [{ label: "Radios", value: "3 (2.4, 5 and 6 GHz), 2x2" }, { label: "Max data rate", value: "Up to 5.76 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 10GE uplink, 3x GE LAN" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["wp"], stream: ["s2"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 23JK", src: "Card: FortiAP 23JK" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Outdoor"],
      title: "FortiAP 244K",
      description: "Ruggedised IP67 Wi-Fi 7 for outdoor areas, with multi-gig and SFP+ uplinks.",
      image: img("fortiap-244k.webp"),
      href: store("fortiap-244K"),
      specs: [{ label: "Radios", value: "4 (2.4, 5, 6 GHz and scan), 2x2" }, { label: "Max data rate", value: "Up to 5.77 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x multi-gig RJ45, 1x SFP+" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["out"], stream: ["s2"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 244K", src: "Card: FortiAP 244K" }),
    },
    {
      tag: "Wi-Fi 7",
      extraTags: ["Outdoor"],
      title: "FortiAP 222KL",
      description: "Outdoor IP67 Wi-Fi 7 with built-in LoRaWAN, LTE and GNSS, for IoT and remote sites.",
      image: img("fortiap-222kl.webp"),
      href: store("fortiap-222KL"),
      specs: [{ label: "Radios", value: "2 Wi-Fi + LoRaWAN, LTE, GNSS" }, { label: "Max data rate", value: "688 Mbps + 4.32 Gbps" }, { label: "Ethernet", value: "1x 2.5GE, 1x GE with PoE out" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w7"], place: ["out"], stream: ["s2"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 222KL", src: "Card: FortiAP 222KL" }),
    },
    {
      tag: "Wi-Fi 6E",
      extraTags: ["Outdoor"],
      title: "FortiAP 234G",
      description: "Outdoor Wi-Fi 6E on standard 802.3at PoE, for courtyards, car parks and campuses.",
      image: img("fortiap-234g.webp"),
      href: store("fortiap-234G"),
      specs: [{ label: "Radios", value: "3 (2.4, 5 and 6 GHz), 2x2" }, { label: "Max data rate", value: "Up to 2.4 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 2.5GE, 1x GE" }, { label: "PoE", value: "802.3at" }],
      filters: { gen: ["w6e"], place: ["out"], stream: ["s2"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 234G", src: "Card: FortiAP 234G" }),
    },
    {
      tag: "Wi-Fi 6E",
      extraTags: ["Outdoor"],
      title: "FortiAP 432G",
      description: "High-capacity 4x4 outdoor Wi-Fi 6E with external antennas, for stadiums and large sites.",
      image: img("fortiap-432g.webp"),
      href: store("fortiap-432G"),
      specs: [{ label: "Radios", value: "3 (2.4, 5 and 6 GHz), 4x4" }, { label: "Max data rate", value: "Up to 4.8 Gbps on 6 GHz" }, { label: "Ethernet", value: "1x 10GE multi-gig, 1x GE with PoE out" }, { label: "PoE", value: "802.3bt" }],
      filters: { gen: ["w6e"], place: ["out"], stream: ["s4"], sase: ["sase"] },
      enquireHref: enq("quote", { model: "FortiAP 432G", src: "Card: FortiAP 432G" }),
    },
    {
      tag: "Wi-Fi 6",
      extraTags: ["Wall plate or desk"],
      title: "FortiAP 23JF",
      description: "Wi-Fi 6 wall-plate access point with four wired ports, for rooms that need Wi-Fi and wired desks.",
      image: img("fortiap-23jf.webp"),
      href: store("fortiap-23JF"),
      specs: [{ label: "Radios", value: "3, 2x2" }, { label: "Max data rate", value: "574 Mbps + 1.2 Gbps" }, { label: "Ethernet", value: "4x GE (PoE in and PoE out)" }, { label: "PoE", value: "802.3at" }],
      filters: { gen: ["w6"], place: ["wp"], stream: ["s2"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 23JF", src: "Card: FortiAP 23JF" }),
    },
    {
      tag: "Wi-Fi 6",
      extraTags: ["Industrial"],
      title: "FortiAP 432FR",
      description: "Hardened Wi-Fi 6 for industrial and hazardous (C1D2) locations, with external N-type antennas.",
      image: img("fortiap-432fr.webp"),
      href: store("fortiap-432FR"),
      specs: [{ label: "Radios", value: "3, 4x4" }, { label: "Max data rate", value: "1.15 Gbps + 2.4 Gbps" }, { label: "Ethernet", value: "1x 2.5GE, 1x GE with PoE out" }, { label: "PoE", value: "802.3bt (injector included)" }],
      filters: { gen: ["w6"], place: ["ind"], stream: ["s4"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 432FR", src: "Card: FortiAP 432FR" }),
    },
    {
      tag: "Wi-Fi 6",
      extraTags: ["Indoor ceiling"],
      title: "FortiAP 831F",
      description: "Very high-density Wi-Fi 6 with 8x8 on 5 GHz, for lecture halls and arenas.",
      image: img("fortiap-831f.webp"),
      href: store("fortiap-831F"),
      specs: [{ label: "Radios", value: "3, 8x8 on 5 GHz" }, { label: "Max data rate", value: "1.15 Gbps + 4.8 Gbps" }, { label: "Ethernet", value: "1x 5GE multi-gig, 1x GE" }, { label: "PoE", value: "802.3at or 802.3bt" }],
      filters: { gen: ["w6"], place: ["in"], stream: ["s8"], sase: [] },
      enquireHref: enq("quote", { model: "FortiAP 831F", src: "Card: FortiAP 831F" }),
    },
  ],
};

export const managementData: OptionCardsData = {
  tag: "Management",
  heading: "Manage it\n the way your team works",
  highlightLast: 5,
  subhead: "The FortiGate controller is the most common choice. Cloud and SASE options suit sites without a FortiGate and remote workers.",
  data: [
    {
      kicker: "Most common",
      title: "FortiGate wireless controller",
      text: "Built into every FortiGate, including FortiGate VM. Access points, SSIDs and security policy share one console.",
      highlight: true,
    },
    {
      kicker: "Cloud",
      title: "FortiEdge Cloud",
      text: "Manage access points from Fortinet's cloud, with or without a FortiGate on site. Up to 15 access points are free to manage.",
    },
    {
      kicker: "Remote and micro-branch",
      title: "FortiSASE",
      text: "Supported models are provisioned and managed from FortiSASE, with traffic inspected in the cloud. Useful for home offices and very small sites.",
    },
  ],
};

export const supportData: OptionCardsData = {
  tag: "Support and licences",
  heading: "Covered from\n day one to renewal",
  highlightLast: 4,
  subhead: "The FortiGate controller needs no extra licence. Each access point needs support, plus optional cloud and security subscriptions.",
  columns: 4,
  data: [
    {
      kicker: "Recommended",
      title: "FortiCare Premium",
      text: "Firmware updates, 24/7 Fortinet technical support and hardware replacement for each access point.",
      highlight: true,
    },
    {
      kicker: "For critical sites",
      title: "FortiCare Elite",
      text: "Everything in Premium, with faster Fortinet response for sites where Wi-Fi downtime stops the business.",
    },
    {
      kicker: "Cloud licence",
      title: "FortiEdge Cloud",
      text: "Cloud management and longer log retention for access points managed without a FortiGate.",
    },
    {
      kicker: "Security add-on",
      title: "FortiGuard UTP on the AP",
      text: "Application control and web filtering on the access point itself, on supported G and K models.",
    },
  ],
  buttons: [
    primary("Renew FortiCare", enq("renewal", { src: "Support: Renew FortiCare" })),
    outline("Upgrade existing Wi-Fi", enq("replace", { src: "Support: Upgrade existing Wi-Fi" })),
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "Where FortiAP\n fits your network",
  highlightLast: 3,
  subhead: "Most projects start with one of these and extend to the rest of the site.",
  data: [
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M9 20V10\"/>",
      title: "Offices and campuses",
      description: "Wi-Fi 7 across floors and buildings, with every SSID under the same FortiGate policy.",
    },
    {
      icon: "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 12h8M12 8v8\"/>",
      title: "High-density spaces",
      description: "4x4 and 8x8 access points for auditoriums, lecture halls and event spaces.",
    },
    {
      icon: "<path d=\"M3 21V9l9-6 9 6v12\"/><path d=\"M9 21v-6h6v6\"/>",
      title: "Hotels and residences",
      description: "Wall-plate access points give each room Wi-Fi plus wired ports for TVs and phones.",
    },
    {
      icon: "<path d=\"M12 3v3M12 18v3M3 12h3M18 12h3\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
      title: "Outdoor areas",
      description: "IP67 access points for courtyards, car parks, stadiums and campuses.",
    },
    {
      icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"1\"/><path d=\"M7 7V4h10v3\"/>",
      title: "Warehouses and industrial",
      description: "External-antenna and hardened models for high ceilings and hazardous areas.",
    },
    {
      icon: "<path d=\"M3 11l9-7 9 7\"/><path d=\"M5 10v10h14V10\"/>",
      title: "Remote workers",
      description: "Wall-plate and desk access points extend the office network securely to home offices.",
    },
  ],
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From wireless survey\n to supported Wi-Fi",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, so you know where the project stands.",
  data: [
    { title: "Survey", text: "Floor plans, user numbers, building materials, interference and your current Wi-Fi." },
    { title: "Design", text: "Access point models and placement, channels, SSIDs, PoE switching and support in one proposal." },
    { title: "Install", text: "Mounting, cabling and zero-touch setup on your FortiGate or FortiEdge Cloud." },
    { title: "Validate", text: "Coverage and roaming checks after installation, with adjustments where needed." },
    { title: "Support", text: "Monitoring, firmware updates and FortiCare renewal tracking for every access point." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "FortiAP\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Do FortiAP access points need a FortiGate?",
      answer: "No, but most customers use one. Every FortiGate has a built-in wireless controller, so the access points are managed from the same console as your firewall. FortiAPs can also be managed from FortiEdge Cloud, or from FortiSASE on supported models.",
    },
    {
      question: "Do we need a separate wireless controller licence?",
      answer: "No. The wireless controller is built into the FortiGate, with no controller licence to buy. Each access point needs FortiCare support, and a FortiEdge Cloud licence only if you manage it from the cloud.",
    },
    {
      question: "Which FortiAP should we choose for Wi-Fi 7?",
      answer: "The 231K suits most offices because it adds 6 GHz on standard 802.3at PoE. The 241K and 243K add a scanning radio and 10GE uplink, and the 441K and 443K suit busy, high-density floors. We match the model to your floor plan after a wireless survey.",
    },
    {
      question: "What PoE switch do the access points need?",
      answer: "The 221K and 231K run on 802.3at PoE+. The 241K, 243K, 441K, 443K and 23JK need 802.3bt for full performance. FortiSwitch models with 802.3bt power them and are managed from the same FortiGate.",
    },
    {
      question: "Can we use the 6 GHz band in the UAE?",
      answer: "Use of the 6 GHz band depends on approval from the local regulator, as Fortinet notes in its data sheet. We set each access point to the UAE regulatory domain and confirm the channels available at installation.",
    },
    {
      question: "What support and licences do FortiAPs need?",
      answer: "Each access point is covered by FortiCare support. On supported G and K models, a FortiGuard UTP subscription adds application control and web filtering on the access point itself. We include the right support and licences in the quote.",
    },
    {
      question: "Do you survey, install and support the Wi-Fi?",
      answer: "Yes. GS IT is a Fortinet Authorized Partner. We survey the site, plan access point placement, install and configure the network, then support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Plan your Wi-Fi\n with a wireless engineer",
  highlightLast: 4,
  steps: [
    "Tell us your floors, users, coverage areas and current Wi-Fi.",
    "We plan access point models and placement, PoE and support.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Get a quote on a model, or one of the support buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New access points", title: "Request a FortiAP quote", pickName: "New access points", doneName: "FortiAP quote", modelField: "model" },
    { value: "replace", label: "Upgrade existing Wi-Fi", title: "Plan your Wi-Fi upgrade", pickName: "Upgrade existing Wi-Fi", doneName: "Wi-Fi upgrade", modelField: "model" },
    { value: "renewal", label: "FortiCare renewal", title: "Renew FortiCare for your access points", pickName: "FortiCare renewal", doneName: "FortiCare renewal" },
  ],
  fields: [
    { name: "model", label: "FortiAP model", type: "select", show: ["quote", "replace"], full: true, empty: "Not sure, help me choose", groups: [{ label: "Wi-Fi 7", options: ["FortiAP 221K", "FortiAP 231K", "FortiAP 241K", "FortiAP 243K", "FortiAP 441K", "FortiAP 443K", "FortiAP 23JK", "FortiAP 244K", "FortiAP 222KL"] }, { label: "Wi-Fi 6E", options: ["FortiAP 234G", "FortiAP 432G"] }, { label: "Wi-Fi 6", options: ["FortiAP 23JF", "FortiAP 432FR", "FortiAP 831F"] }] },
    { name: "current_aps", label: "Current access points", type: "select", show: ["replace"], options: ["Older FortiAP", "Cisco or Meraki", "HPE Aruba", "Ubiquiti", "Other brand", "Not sure"] },
    { name: "units", label: "Number of access points", type: "number", show: ["quote", "replace", "renewal"], placeholder: "1" },
    { name: "coverage", label: "Coverage area", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Indoor offices", "Indoor, high density", "Outdoor", "Hotel rooms or residences", "Warehouse or industrial", "A mix"] },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote", "replace"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "sites", label: "Number of floors or buildings", type: "number", show: ["quote", "replace"], placeholder: "1" },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FP231K…" },
    { name: "support_expiry", label: "Current support expiry", type: "month", show: ["renewal"] },
    { name: "support_level", label: "Support level", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure, recommend one", options: ["FortiCare Premium", "FortiCare Elite", "FortiEdge Cloud licence", "FortiGuard UTP on the AP"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "replace", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Floor area, users, PoE switches in place, timeline",
  page: "fortinet-fortiap-products",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT wireless engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "wireless engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiAP, FortiGate, FortiCare, FortiGuard, FortiSASE and other product names are trademarks of Fortinet, Inc.";
