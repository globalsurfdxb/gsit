import { portfolioData } from "@/app/components/common/data";
import type { FilterCatalogueData } from "@/app/components/CiscoNetworkSwitches/Sections/FilterCatalogue";
import { FG_IMG, FG_STORE, FG_CURRENT_MODELS } from "@/app/components/FortinetProduct/products/fortigate-shared";
import type { FgaasData } from "./Sections/FgaasBlock";
import type { OlderModelsData } from "./Sections/OlderModels";
import type { BundleCardsData } from "./Sections/BundleCards";
import { enquiryHref as enq, type EnquiryTabsData } from "./Sections/enquiry";

// Generated from 01-FortiGate-Firewalls/fortinet-firewall-products.html (Fortinet pages pack)

const BANNER = `${FG_IMG}/fortigate-category-hero.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

const store = (slug: string) => `${FG_STORE}/${slug}`;
const card = (file: string) => `${FG_IMG}/${file}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const quote = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

export const seo = {
  title: "Fortinet FortiGate Next-Gen Firewalls in Dubai | GS IT",
  description:
    "Compare current FortiGate next-generation firewalls for branch, campus and data centre, with sizing, installation and support from GS IT in Dubai.",
  ogTitle: "Fortinet FortiGate Firewalls in Dubai | GS IT",
  ogDescription:
    "Compare current FortiGate firewall models from branch to data centre, supplied, installed and supported by GS IT in Dubai.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: `/assets/images/fortinet/fortinet-authorized-partner.jpg`,
    alt: "Fortinet Authorized Partner",
    wide: true,
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Firewalls" }, { label: "Fortinet" }],
  tag: "Fortinet Authorized Partner",
  heading: "Fortinet FortiGate Firewalls\n in Dubai",
  highlightLast: 2,
  description:
    "Current FortiGate next-generation firewalls, from a small office to a data centre. GS IT sizes each model to the traffic you need to inspect, then installs, licenses and supports it.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore firewalls", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}/5`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "Choosing a FortiGate",
  heading: "The right FortiGate\n for each site",
  highlightLast: 3,
  subhead:
    "Size a firewall by its threat protection throughput, not its headline firewall number. That is the speed you get with intrusion prevention, application control and malware scanning switched on.",
  data: [
    {
      kicker: "Entry level",
      title: "Small office and branch",
      text: "Desktop firewalls with SD-WAN and VPN built in, for offices and retail sites.",
      points: ["FortiGate 30G, 40F and 50G", "FortiGate 70G / 71G", "FortiGate 90G / 91G"],
    },
    {
      kicker: "Mid-range",
      title: "Campus and enterprise edge",
      text: "1RU firewalls for head offices and campuses, with 10GE and 25GE ports.",
      points: ["FortiGate 120G / 121G", "FortiGate 200G / 201G", "FortiGate 400G and 900G"],
    },
    {
      kicker: "High end",
      title: "Data centre",
      text: "High-throughput firewalls and chassis for data centres and service providers.",
      points: ["FortiGate 1800F to 3700F", "FortiGate 4200F, 4400F and 4800F", "FortiGate 7081F and 7121F chassis"],
    },
  ],
};

export const catalogueData: FilterCatalogueData = {
  tag: "FortiGate range",
  heading: "FortiGate next-generation\n firewall models",
  highlightLast: 2,
  subhead:
    "Filter by network size, threat protection throughput or form factor. Throughput figures are Fortinet's published lab results.",
  sidebarTitle: "Filter firewalls",
  noun: "FortiGate models",
  emptyText: "No firewalls match these filters.",
  linkLabel: "Learn more",
  quick: {
    group: "tier",
    label: "Network size",
    all: "All",
    options: [
      { value: "br", label: "Branch" },
      { value: "cp", label: "Campus" },
      { value: "dc", label: "Data centre" },
    ],
  },
  groups: [
    {
      key: "tier",
      title: "Network size",
      options: [
        { value: "br", label: "Small office and branch" },
        { value: "cp", label: "Campus and enterprise edge" },
        { value: "dc", label: "Data centre" },
      ],
    },
    {
      key: "tp",
      title: "Threat protection",
      options: [
        { value: "a", label: "Under 2 Gbps" },
        { value: "b", label: "2 to 10 Gbps" },
        { value: "c", label: "10 to 50 Gbps" },
        { value: "d", label: "Over 50 Gbps" },
      ],
    },
    {
      key: "ff",
      title: "Form factor",
      options: [
        { value: "desk", label: "Desktop" },
        { value: "r1", label: "1RU rack" },
        { value: "r2", label: "2RU rack" },
        { value: "r34", label: "3RU and 4RU rack" },
        { value: "ch", label: "Chassis" },
      ],
    },
    {
      key: "svc",
      title: "Delivery",
      options: [{ value: "fgaas", label: "Available as a service" }],
    },
  ],
  products: [
    {
      tag: "Small office and branch",
      title: "FortiGate 30G",
      description: "Compact firewall for home offices, pop-up sites and very small branches.",
      image: card("fortigate-30g-card.webp"),
      href: store("fortigate-30g"),
      enquireHref: enq("quote", { model: "FortiGate 30G", src: "Card: FortiGate 30G" }),
      specs: [{ label: "Models", value: "30G" }, { label: "Threat protection", value: "500 Mbps" }, { label: "Firewall", value: "4 Gbps" }, { label: "Interfaces", value: "4x GE RJ45" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["a"], ff: ["desk"] },
    },
    {
      tag: "Small office and branch",
      title: "FortiGate 40F",
      description: "Entry-level firewall for small offices, with SD-WAN and VPN built in.",
      image: card("fortigate-40f-card.webp"),
      href: store("fortigate-40f"),
      enquireHref: enq("quote", { model: "FortiGate 40F", src: "Card: FortiGate 40F" }),
      specs: [{ label: "Models", value: "40F" }, { label: "Threat protection", value: "600 Mbps" }, { label: "Firewall", value: "5 Gbps" }, { label: "Interfaces", value: "5x GE RJ45" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["a"], ff: ["desk"] },
    },
    {
      tag: "Small office and branch",
      title: "FortiGate 50G",
      description: "Small offices of up to about 50 users, with light VPN use and SD-WAN.",
      image: card("fortigate-50g-card.webp"),
      href: store("fortigate-50g"),
      enquireHref: enq("quote", { model: "FortiGate 50G", src: "Card: FortiGate 50G" }),
      specs: [{ label: "Models", value: "50G" }, { label: "Threat protection", value: "1.1 Gbps" }, { label: "Firewall", value: "5 Gbps" }, { label: "Interfaces", value: "5x GE RJ45" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["a"], ff: ["desk"] },
    },
    {
      tag: "Small office and branch",
      title: "FortiGate 70G",
      description: "Offices of up to about 100 users. The current successor to the 60F and 70F.",
      image: card("fortigate-70g-card.webp"),
      href: store("fortigate-70g"),
      enquireHref: enq("quote", { model: "FortiGate 70G", src: "Card: FortiGate 70G" }),
      specs: [{ label: "Models", value: "70G, 71G (64 GB SSD)" }, { label: "Threat protection", value: "1.3 Gbps" }, { label: "Firewall", value: "10 Gbps" }, { label: "Interfaces", value: "10x GE RJ45" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["a"], ff: ["desk"] },
    },
    {
      tag: "Small office and branch",
      title: "FortiGate 90G",
      description: "Busy branches that need 10GE WAN and more inspection headroom. Successor to the 80F.",
      image: card("fortigate-90g-card.webp"),
      href: store("fortigate-90g"),
      enquireHref: enq("quote", { model: "FortiGate 90G", src: "Card: FortiGate 90G" }),
      specs: [{ label: "Models", value: "90G" }, { label: "Threat protection", value: "2.2 Gbps" }, { label: "Firewall", value: "28 Gbps" }, { label: "Interfaces", value: "8x GE RJ45, 2x 10GE shared WAN" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["b"], ff: ["desk"] },
    },
    {
      tag: "Small office and branch",
      extraTags: ["As a service"],
      title: "FortiGate 91G",
      description: "The 90G with 120 GB of onboard SSD for local logs and reports. Also available as a service.",
      image: card("fortigate-90g-card.webp"),
      href: store("fortigate-90g"),
      enquireHref: enq("quote", { model: "FortiGate 91G", src: "Card: FortiGate 91G" }),
      specs: [{ label: "Models", value: "91G (120 GB SSD)" }, { label: "Threat protection", value: "2.2 Gbps" }, { label: "Firewall", value: "28 Gbps" }, { label: "Interfaces", value: "8x GE RJ45, 2x 10GE shared WAN" }, { label: "Form factor", value: "Desktop" }],
      filters: { tier: ["br"], tp: ["b"], ff: ["desk"], svc: ["fgaas"] },
    },
    {
      tag: "Campus and enterprise edge",
      title: "FortiGate 120G",
      description: "Mid-size offices and SD-WAN hubs, with dual power supplies. Successor to the 100F.",
      image: card("fortigate-120g-card.webp"),
      href: store("fortigate-120g"),
      enquireHref: enq("quote", { model: "FortiGate 120G", src: "Card: FortiGate 120G" }),
      specs: [{ label: "Models", value: "120G, 121G (480 GB SSD)" }, { label: "Threat protection", value: "2.8 Gbps" }, { label: "Firewall", value: "39 Gbps" }, { label: "Interfaces", value: "18x GE RJ45, 8x GE SFP, 4x 10GE SFP+" }, { label: "Form factor", value: "1RU" }],
      filters: { tier: ["cp"], tp: ["b"], ff: ["r1"] },
    },
    {
      tag: "Campus and enterprise edge",
      title: "FortiGate 200G",
      description: "Head offices that need deep SSL inspection and fibre connectivity. Successor to the 200F.",
      image: card("fortigate-200g-card.webp"),
      href: store("fortigate-200g"),
      enquireHref: enq("quote", { model: "FortiGate 200G", src: "Card: FortiGate 200G" }),
      specs: [{ label: "Models", value: "200G, 201G (480 GB SSD)" }, { label: "Threat protection", value: "6 Gbps" }, { label: "Firewall", value: "39 Gbps" }, { label: "Interfaces", value: "8x 10GE SFP+, 8x 5GE RJ45, 10x GE RJ45, 4x GE SFP" }, { label: "Form factor", value: "1RU" }],
      filters: { tier: ["cp"], tp: ["b"], ff: ["r1"] },
    },
    {
      tag: "Campus and enterprise edge",
      title: "FortiGate 400G",
      description: "Campus edge with 25GE uplinks. Fortinet's current model in the 400 range.",
      image: card("fortigate-400g-card.webp"),
      href: store("fortigate-400g"),
      enquireHref: enq("quote", { model: "FortiGate 400G", src: "Card: FortiGate 400G" }),
      specs: [{ label: "Models", value: "400G" }, { label: "Threat protection", value: "13 Gbps" }, { label: "Firewall", value: "164 Gbps" }, { label: "Interfaces", value: "4x 25GE SFP28, 4x 10GE SFP+, 16x GE SFP, 8x 5GE RJ45" }, { label: "Form factor", value: "1RU" }],
      filters: { tier: ["cp"], tp: ["c"], ff: ["r1"] },
    },
    {
      tag: "Campus and enterprise edge",
      title: "FortiGate 900G",
      description: "Large campuses and enterprise edges. A current replacement for the 600F.",
      image: card("fortigate-900g-card.webp"),
      href: store("fortigate-900g"),
      enquireHref: enq("quote", { model: "FortiGate 900G", src: "Card: FortiGate 900G" }),
      specs: [{ label: "Models", value: "900G" }, { label: "Threat protection", value: "30 Gbps" }, { label: "Firewall", value: "164 Gbps" }, { label: "Interfaces", value: "4x 25GE SFP28, 4x 10GE SFP+, 8x GE SFP, 17x GE RJ45" }, { label: "Form factor", value: "1RU" }],
      filters: { tier: ["cp"], tp: ["c"], ff: ["r1"] },
    },
    {
      tag: "Campus and enterprise edge",
      extraTags: ["As a service"],
      title: "FortiGate 901G",
      description: "The 900G with onboard SSD storage for local logging. Also available as a service.",
      image: card("fortigate-900g-card.webp"),
      href: store("fortigate-900g"),
      enquireHref: enq("quote", { model: "FortiGate 901G", src: "Card: FortiGate 901G" }),
      specs: [{ label: "Models", value: "901G (2x 480 GB SSD)" }, { label: "Threat protection", value: "30 Gbps" }, { label: "Firewall", value: "164 Gbps" }, { label: "Interfaces", value: "4x 25GE SFP28, 4x 10GE SFP+, 8x GE SFP, 17x GE RJ45" }, { label: "Form factor", value: "1RU" }],
      filters: { tier: ["cp"], tp: ["c"], ff: ["r1"], svc: ["fgaas"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 1800F",
      description: "Data centre edge and internal segmentation with 100GE ports.",
      image: card("fortigate-1800f-card.webp"),
      href: store("fortigate-1800f"),
      enquireHref: enq("quote", { model: "FortiGate 1800F", src: "Card: FortiGate 1800F" }),
      specs: [{ label: "Models", value: "1800F, 1801F" }, { label: "Threat protection", value: "15 Gbps" }, { label: "Firewall", value: "198 Gbps" }, { label: "Interfaces", value: "4x 100GE QSFP28, 12x 25GE SFP28, 18x GE RJ45" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["c"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 2600F",
      description: "Data centres that need more threat inspection at the same firewall throughput.",
      image: card("fortigate-2600f-card.webp"),
      href: store("fortigate-2600f"),
      enquireHref: enq("quote", { model: "FortiGate 2600F", src: "Card: FortiGate 2600F" }),
      specs: [{ label: "Models", value: "2600F, 2601F" }, { label: "Threat protection", value: "25 Gbps" }, { label: "Firewall", value: "198 Gbps" }, { label: "Interfaces", value: "4x 100GE QSFP28, 16x 25GE SFP28, 16x 10GE RJ45" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["c"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 3000F",
      description: "Large enterprise and data centre firewalls with high port density.",
      image: card("fortigate-3000f-card.webp"),
      href: store("fortigate-3000f"),
      enquireHref: enq("quote", { model: "FortiGate 3000F", src: "Card: FortiGate 3000F" }),
      specs: [{ label: "Models", value: "3000F, 3001F" }, { label: "Threat protection", value: "33 Gbps" }, { label: "Firewall", value: "397 Gbps" }, { label: "Interfaces", value: "6x 100GE QSFP28, 16x 25GE SFP28, 18x 10GE RJ45" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["c"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 3200F",
      description: "Data centres moving to 400GE, in a 2RU appliance.",
      image: card("fortigate-3200f-card.webp"),
      href: store("fortigate-3200f"),
      enquireHref: enq("quote", { model: "FortiGate 3200F", src: "Card: FortiGate 3200F" }),
      specs: [{ label: "Models", value: "3200F, 3201F" }, { label: "Threat protection", value: "45 Gbps" }, { label: "Firewall", value: "387 Gbps" }, { label: "Interfaces", value: "4x 400GE QSFP-DD, 12x 50GE SFP56, 4x 25GE SFP28" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["c"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 3500F",
      description: "High-throughput data centre edge and segmentation.",
      image: card("fortigate-3500f-card.webp"),
      href: store("fortigate-3500f"),
      enquireHref: enq("quote", { model: "FortiGate 3500F", src: "Card: FortiGate 3500F" }),
      specs: [{ label: "Models", value: "3500F" }, { label: "Threat protection", value: "63 Gbps" }, { label: "Firewall", value: "595 Gbps" }, { label: "Interfaces", value: "6x 100GE QSFP28, 32x 25GE SFP28" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      extraTags: ["As a service"],
      title: "FortiGate 3501F",
      description: "The 3500F with onboard SSD storage for local logging. Also available as a service.",
      image: card("fortigate-3500f-card.webp"),
      href: store("fortigate-3500f"),
      enquireHref: enq("quote", { model: "FortiGate 3501F", src: "Card: FortiGate 3501F" }),
      specs: [{ label: "Models", value: "3501F (2x 2 TB SSD)" }, { label: "Threat protection", value: "63 Gbps" }, { label: "Firewall", value: "595 Gbps" }, { label: "Interfaces", value: "6x 100GE QSFP28, 32x 25GE SFP28" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["r2"], svc: ["fgaas"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 3700F",
      description: "Data centres and latency-sensitive networks, with ultra-low-latency ports.",
      image: card("fortigate-3700f-card.webp"),
      href: store("fortigate-3700f"),
      enquireHref: enq("quote", { model: "FortiGate 3700F", src: "Card: FortiGate 3700F" }),
      specs: [{ label: "Models", value: "3700F, 3701F" }, { label: "Threat protection", value: "75 Gbps" }, { label: "Firewall", value: "589 Gbps" }, { label: "Interfaces", value: "4x 400GE QSFP-DD, 20x 50GE SFP56, 4x ULL 25GE SFP28" }, { label: "Form factor", value: "2RU" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["r2"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 4200F",
      description: "Hyperscale firewall for service providers and very large data centres.",
      image: card("fortigate-4200f-card.webp"),
      href: store("fortigate-4200f"),
      enquireHref: enq("quote", { model: "FortiGate 4200F", src: "Card: FortiGate 4200F" }),
      specs: [{ label: "Models", value: "4200F, 4201F" }, { label: "Threat protection", value: "45 Gbps" }, { label: "Firewall", value: "800 Gbps" }, { label: "Interfaces", value: "8x 100GE QSFP28, 18x 25GE SFP28" }, { label: "Form factor", value: "3RU" }],
      filters: { tier: ["dc"], tp: ["c"], ff: ["r34"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 4400F",
      description: "Data centre protection and SD-WAN hub at terabit scale.",
      image: card("fortigate-4400f-card.webp"),
      href: store("fortigate-4400f"),
      enquireHref: enq("quote", { model: "FortiGate 4400F", src: "Card: FortiGate 4400F" }),
      specs: [{ label: "Models", value: "4400F, 4401F" }, { label: "Threat protection", value: "75 Gbps" }, { label: "Firewall", value: "1.15 Tbps" }, { label: "Interfaces", value: "12x 100GE QSFP28, 20x 25GE SFP28" }, { label: "Form factor", value: "4RU" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["r34"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 4800F",
      description: "Data centre routing and segmentation at multi-terabit scale.",
      image: card("fortigate-4800f-card.webp"),
      href: store("fortigate-4800f"),
      enquireHref: enq("quote", { model: "FortiGate 4800F", src: "Card: FortiGate 4800F" }),
      specs: [{ label: "Models", value: "4800F, 4801F" }, { label: "Threat protection", value: "75 Gbps" }, { label: "Firewall", value: "3.1 Tbps" }, { label: "Interfaces", value: "8x 400GE, 12x 200GE QSFP56, 12x 50GE SFP56" }, { label: "Form factor", value: "4RU" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["r34"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 7081F",
      description: "Chassis system that scales by adding blades, for large SD-WAN hubs and service providers.",
      image: card("fortigate-7081f-card.webp"),
      href: store("fortigate-7081f"),
      enquireHref: enq("quote", { model: "FortiGate 7081F", src: "Card: FortiGate 7081F" }),
      specs: [{ label: "Models", value: "7081F chassis" }, { label: "Threat protection", value: "312 Gbps" }, { label: "Firewall", value: "1.89 Tbps" }, { label: "Interfaces", value: "Blade-based, high port density" }, { label: "Form factor", value: "Chassis (12RU)" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["ch"] },
    },
    {
      tag: "Data centre",
      title: "FortiGate 7121F",
      description: "Fortinet's largest chassis, for the heaviest inspection loads.",
      image: card("fortigate-7121f-card.webp"),
      href: store("fortigate-7121f"),
      enquireHref: enq("quote", { model: "FortiGate 7121F", src: "Card: FortiGate 7121F" }),
      specs: [{ label: "Models", value: "7121F chassis" }, { label: "Threat protection", value: "520 Gbps" }, { label: "Firewall", value: "1.89 Tbps" }, { label: "Interfaces", value: "Blade-based, high port density" }, { label: "Form factor", value: "Chassis (16RU)" }],
      filters: { tier: ["dc"], tp: ["d"], ff: ["ch"] },
    },
  ],
};

export const fgaasData: FgaasData = {
  tag: "FortiGate as a Service",
  heading: "A FortiGate without the hardware,\n hosted by Fortinet",
  highlightLast: 3,
  subhead:
    "FortiGate as a Service (FGaaS) runs a real FortiGate appliance in a Fortinet data centre. You pay a subscription instead of buying hardware, and there is nothing to ship, install or replace.",
  points: [
    {
      icon: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
      title: "Live in minutes",
      text: "The firewall is provisioned through FortiCloud. No shipping, racking or on-site setup.",
    },
    {
      icon: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
      title: "Monthly or annual",
      text: "Pay monthly with FortiPoints and stop at any time, or commit to an annual term.",
    },
    {
      icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
      title: "Fortinet looks after the hardware",
      text: "Hardware upkeep and replacement are Fortinet's job. High availability pairs are available.",
    },
    {
      icon: '<path d="M4 12h4l2-5 4 10 2-5h4"/>',
      title: "Bandwidth to suit",
      text: "Internet bandwidth from 100 Mbps to 10 Gbps, with FortiGuard protection and FortiManager as a Service.",
    },
  ],
  aside: {
    title: "Models offered as a service",
    models: [
      { name: "FortiGate 91G", text: "SD-WAN hub and wireless controller for branch networks", href: store("fortigate-90g") },
      { name: "FortiGate 901G", text: "Central inspection and SD-WAN hub for larger networks", href: store("fortigate-900g") },
      { name: "FortiGate 3501F", text: "Data centre scale inspection and segmentation", href: store("fortigate-3500f") },
    ],
    usesLabel: "Common uses:",
    uses: "SD-WAN hub, wireless controller for thin-edge sites, central web proxy and inspection, and securing OT networks.",
    button: { text: "Ask about FGaaS", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: enq("fgaas", { src: "FGaaS: Ask about FGaaS" }) },
  },
};

export const olderData: OlderModelsData = {
  tag: "Older models",
  heading: "Running an older FortiGate?\n Here is its successor",
  highlightLast: 4,
  subhead:
    "These models are no longer sold new. Installed units keep working, and their licences can be renewed until Fortinet's last service extension date.",
  columns: ["Model", "Status", "Current replacement"],
  rows: [
    { model: "FortiGate 60F", status: "Last order date 13 January 2027", replacement: { text: "FortiGate 70G", href: store("fortigate-70g") } },
    { model: "FortiGate 70F", status: "End of order 17 May 2026", replacement: { text: "FortiGate 70G", href: store("fortigate-70g") } },
    { model: "FortiGate 80F", status: "End of order in 2026", replacement: { text: "FortiGate 90G", href: store("fortigate-90g") } },
    { model: "FortiGate 100F", status: "End of order 16 April 2026", replacement: { text: "FortiGate 120G", href: store("fortigate-120g") } },
    { model: "FortiGate 200F", status: "End of order 1 March 2026", replacement: { text: "FortiGate 200G", href: store("fortigate-200g") } },
    { model: "FortiGate 400F", status: "Replaced by the 400G in Fortinet's current range", replacement: { text: "FortiGate 400G", href: store("fortigate-400g") } },
    { model: "FortiGate 600F", status: "End of order 1 May 2026", replacement: { text: "FortiGate 900G", href: store("fortigate-900g") } },
    { model: "FortiGate 1000F", status: "End of order 13 October 2026", replacement: { text: "Sized on request", href: enq("upgrade", { model: "FortiGate 1000F", src: "Older models: FortiGate 1000F" }) } },
    { model: "FortiGate 6001F, 6300F, 6500F", status: "End of order between January and April 2026", replacement: { text: "Sized on request", href: enq("upgrade", { model: "FortiGate 6001F", src: "Older models: FortiGate 6001F, 6300F, 6500F" }) } },
  ],
  note: "Still running one of these? We renew FortiGuard and FortiCare on installed units and plan the move to the successor when you are ready.",
  buttons: [
    quote("Plan your upgrade", enq("upgrade", { src: "Older models: Plan your upgrade" })),
    outline("Renew your licence", enq("renewal", { src: "Older models: Renew your licence" })),
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Networking and security\n in one appliance",
  highlightLast: 3,
  subhead: "What every FortiGate brings to your network, from the smallest desktop unit to a chassis.",
  data: [
    {
      icon: "Cpu",
      title: "Security processors",
      description: "Fortinet's own SPU chips accelerate firewall, VPN and inspection, so protection does not become the bottleneck.",
    },
    {
      icon: "ShieldCheck",
      title: "FortiGuard threat protection",
      description: "Intrusion prevention, malware protection, web and DNS filtering, updated by FortiGuard Labs.",
    },
    {
      icon: "Share2",
      title: "Secure SD-WAN built in",
      description: "Traffic takes the best available link automatically, with no separate SD-WAN licence or appliance.",
    },
    {
      icon: "Eye",
      title: "Application control",
      description: "See which applications use your bandwidth, and limit or block the ones that put the business at risk.",
    },
    {
      icon: "Route",
      title: "Site-to-site and remote VPN",
      description: "Connect branches to the head office and give remote staff secure access to company systems.",
    },
    {
      icon: "MonitorCheck",
      title: "Switches and Wi-Fi from one console",
      description: "FortiGate manages FortiSwitch and FortiAP directly, with one policy across wired and wireless users.",
    },
  ],
};

export const bundlesData: BundleCardsData = {
  tag: "Protection bundles",
  heading: "Hardware plus protection,\n on 1-year or 3-year terms",
  highlightLast: 5,
  subhead:
    "Each FortiGate is supplied with a FortiGuard bundle. Without one, the firewall still passes traffic but stops receiving threat updates.",
  data: [
    {
      title: "Unified Threat Protection",
      text: "IPS, advanced malware protection, application control, URL, DNS and video filtering, antispam and FortiCare Premium. The standard choice for most offices.",
    },
    {
      title: "Enterprise Protection",
      text: "Everything in UTP, plus data loss prevention, AI-based malware prevention, IoT security and security rating.",
    },
    {
      title: "Add-ons",
      text: "FortiManager Cloud and FortiAnalyzer Cloud for central management and logging, sized to your number of devices.",
    },
  ],
  button: quote("Get a bundle quote", enq("bundle", { src: "Bundles: Get a bundle quote" })),
  hint: "Not sure which bundle fits? We will recommend one with your quote.",
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From security review\n to a documented firewall",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, from the first review to a documented handover.",
  data: [
    { title: "Assessment", text: "Internet links, users, applications, VPN needs and your current firewall rules." },
    { title: "Design and proposal", text: "Model, protection bundle, high availability and security policy in one document." },
    { title: "Supply", text: "Genuine FortiGate hardware and FortiGuard subscriptions with manufacturer warranty." },
    { title: "Deploy and migrate", text: "Rule and VPN migration, testing and cutover, planned around your working hours." },
    { title: "Handover and support", text: "Policy documentation, firmware updates, monitoring and renewal tracking." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "FortiGate firewall\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Which FortiGate model do we need for our office?",
      answer:
        "Size it by threat protection throughput, not firewall throughput or user count. We look at your internet speed, remote VPN users, branches and the security features you want on, then choose a model whose threat protection figure stays above your line speed, with room to grow.",
    },
    {
      question: "How much does a FortiGate firewall cost?",
      answer:
        "The price depends on the model, the protection bundle (UTP or Enterprise Protection) and the term (1 or 3 years). We size the firewall first, then send an itemised quote, so you only pay for the capacity and protection you will use.",
    },
    {
      question: "What is the difference between the 70G and 71G, or 120G and 121G?",
      answer:
        "The model ending in 1 is the same firewall with onboard SSD storage, so it can keep logs and reports on the device. If you use FortiAnalyzer Cloud for logging, the standard model is usually enough.",
    },
    {
      question: "Our FortiGate 60F, 80F, 100F or 200F is end of order. What now?",
      answer:
        "It keeps working, and its licences can still be renewed until Fortinet's last service extension date. When you are ready, we move you to the G-series successor, such as the 70G, 90G, 120G or 200G, and migrate your policies.",
    },
    {
      question: "What is FortiGate as a Service?",
      answer:
        "A FortiGate 91G, 901G or 3501F hosted in a Fortinet data centre and paid for as a subscription, monthly or annually. There is no hardware to ship, install or replace. You configure it like any FortiGate, and GS IT can set it up and manage it for you.",
    },
    {
      question: "Will our network go down during installation?",
      answer:
        "We prepare the configuration and migrate your existing rules and VPNs before cutover. The switch to the new firewall is scheduled outside working hours, and we test critical applications before your team starts work.",
    },
    {
      question: "What if the firewall fails?",
      answer:
        "For sites that cannot afford downtime, we deploy two FortiGates in high availability, so the second takes over automatically. FortiCare Premium covers hardware replacement and firmware updates. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
    {
      question: "Do we need in-house IT staff to manage a FortiGate?",
      answer:
        "No. GS IT can manage policies, updates, monitoring and renewals for you. If you have an IT team, we hand over documentation and train them to make day-to-day changes.",
    },
  ],
};

// FortiGate models offered as a service: the only ones listed on the "As a service" tab
const FGAAS_MODELS = ["FortiGate 91G", "FortiGate 901G", "FortiGate 3501F"];
const NEW_MODELS = [
  "FortiGate 30G", "FortiGate 40F", "FortiGate 50G", "FortiGate 70G", "FortiGate 90G", "FortiGate 91G", "FortiGate 120G",
  "FortiGate 200G", "FortiGate 400G", "FortiGate 900G", "FortiGate 901G", "FortiGate 1800F", "FortiGate 2600F", "FortiGate 3000F",
  "FortiGate 3200F", "FortiGate 3500F", "FortiGate 3501F", "FortiGate 3700F", "FortiGate 4200F", "FortiGate 4400F", "FortiGate 4800F",
  "FortiGate 7081F", "FortiGate 7121F",
];

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Size your FortiGate\n with a security engineer",
  highlightLast: 4,
  steps: [
    "Tell us your sites, internet links, users and remote access needs.",
    "We review your current security and size the model and protection bundle.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Enquire on a model, or one of the upgrade, renewal or bundle buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New firewall", title: "Request a FortiGate quote", pickName: "New firewall", doneName: "firewall quote", modelField: "model" },
    { value: "upgrade", label: "Upgrade", title: "Plan your FortiGate upgrade", pickName: "Upgrade", doneName: "upgrade", modelField: "current_model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your Fortinet licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "current_model" },
    { value: "bundle", label: "Protection bundle", title: "Get a protection bundle quote", pickName: "Protection bundle", doneName: "protection bundle", modelField: "model" },
    { value: "fgaas", label: "As a service", title: "Ask about FortiGate as a Service", pickName: "FortiGate as a Service", doneName: "FortiGate as a Service", modelField: "model" },
  ],
  fields: [
    {
      name: "model",
      label: "FortiGate model",
      type: "select",
      show: ["quote", "bundle", "fgaas"],
      full: true,
      empty: "Not sure, help me choose",
      options: NEW_MODELS.map((m) => (FGAAS_MODELS.includes(m) ? m : { label: m, hideIn: ["fgaas"] })),
    },
    { name: "current_model", label: "Current FortiGate model", type: "select", show: ["upgrade", "renewal"], options: FG_CURRENT_MODELS },
    { name: "units", label: "Number of units", type: "number", show: ["upgrade"], placeholder: "1" },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FGT60FTK…" },
    { name: "licence_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    {
      name: "bundle",
      label: "Protection bundle",
      type: "select",
      show: ["quote", "upgrade", "renewal", "bundle"],
      empty: "Not sure, recommend one",
      options: ["Unified Threat Protection (UTP)", "Enterprise Protection", "FortiCare only"],
    },
    {
      name: "term",
      label: "Term",
      type: "select",
      show: ["quote", "upgrade", "renewal", "bundle", "fgaas"],
      empty: "Not sure yet",
      options: [{ label: "1 year", hideIn: ["fgaas"] }, "3 years", { label: "Monthly", onlyIn: ["fgaas"] }, { label: "5 years", onlyIn: ["fgaas"] }],
    },
    {
      name: "users",
      label: "Users at the site",
      type: "select",
      show: ["quote", "upgrade"],
      options: ["Up to 25", "26 to 100", "101 to 500", "501 to 2,000", "Over 2,000"],
    },
    { name: "sites", label: "Number of sites", type: "number", show: ["quote", "upgrade", "fgaas"], placeholder: "1" },
    { name: "high_availability", label: "High availability", type: "select", show: ["quote", "upgrade"], empty: "Not sure", options: ["Single unit", "HA pair"] },
    { name: "bandwidth", label: "Bandwidth needed", type: "select", show: ["fgaas"], empty: "Not sure", options: ["100 Mbps", "500 Mbps", "1 Gbps", "Over 1 Gbps"] },
    {
      name: "fgaas_use",
      label: "Main use",
      type: "select",
      show: ["fgaas"],
      options: ["SD-WAN hub", "Wireless controller", "Central web proxy and inspection", "OT security", "Other"],
    },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Internet speed, VPN users, current firewall, timeline",
  page: "fortinet-firewall-products",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  againText: "Send another request",
};

export const footNote =
  "Fortinet, FortiGate, FortiGuard, FortiCare and other product names are trademarks of Fortinet, Inc. Throughput figures are Fortinet lab results; real-world performance depends on your traffic.";
