import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MGA_IMG as IMG, MGA_STORE, mgaCrumbs, mgaBadge, mgaHeroButtons, mgaQuals, mgaOptionLink, mgaEnquiry, mgaFootNote } from "./management-analytics-shared";

// Generated from 07-Management-and-Analytics/product-pages/fortimanager.html
export const fortimanager: LogitechProductData = {
  slug: "fortimanager",
  seo: {
    title: "FortiManager in Dubai | Fortinet Partner | GS IT",
    description: "FortiManager from GS IT, a Fortinet Authorized Partner in Dubai. Configure and update every FortiGate from one console. Licensing, deployment and support.",
    ogTitle: "FortiManager in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Central management that configures, updates and audits every FortiGate, FortiSwitch and FortiAP from one console, instead of logging in to each device.",
  },
  name: "FortiManager",
  image: `${IMG}/fortinet-fortimanager-card.webp`,
  quals: mgaQuals,
  heroData: {
    crumbs: mgaCrumbs("FortiManager"),
    gallery: [{ src: `${IMG}/fortinet-fortimanager-card.webp`, alt: "FortiManager, Fortinet central management" }],
    badge: mgaBadge,
    tag: "Central management",
    heading: "FortiManager\n central management",
    highlightLast: 2,
    description: "Central management that configures, updates and audits every FortiGate, FortiSwitch and FortiAP from one console, instead of logging in to each device.",
    pills: ["Cloud, VM or appliance", "Licensed per device", "FortiAI add-on"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Central management" },
      { label: "Licensed by", value: "Managed device or VDOM" },
      { label: "Deployment", value: "FortiManager Cloud, VM or appliance" },
      { label: "Cloud tiers", value: "3, 10, 100 or 1,000 devices" },
      { label: "Manages", value: "FortiGate, plus FortiSwitch and FortiAP through FortiGate" },
      { label: "Add-ons", value: "FortiAI" },
    ],
    aboutTitle: "About FortiManager",
    about: [
      { label: "Policy", text: "shared policy packages and objects pushed to many FortiGates at once" },
      { label: "Firmware", text: "upgrades planned and scheduled across every site" },
      { label: "Audit", text: "revision history for every change, with rollback" },
      { label: "Scale", text: "administrative domains separate business units or customers" },
    ],
    buttons: mgaHeroButtons("FortiManager"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiManager",
    highlightLast: 1,
    subhead: "FortiManager is licensed by the number of devices it manages. Choose Fortinet’s cloud, a VM in your data centre or cloud, or a hardware appliance.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FC0-10-MVCLD-227",
            name: "FortiManager Cloud, 3 devices",
            desc: "Hosted by Fortinet, with no servers to run. Ideal for a few sites.",
            points: ["3 devices or VDOMs", "Annual subscription", "FortiAI add-on available"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiManager Cloud, 3 devices", "FC0-10-MVCLD-227"),
          },
          {
            tag: "FC1 to FC3-10-MVCLD-227",
            name: "FortiManager Cloud, 10 to 1,000 devices",
            desc: "Larger cloud tiers for growing networks.",
            points: ["FC1: 10 devices", "FC2: 100 devices", "FC3: 1,000 devices"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiManager Cloud, 10 to 1,000 devices", "FC1 to FC3-10-MVCLD-227"),
          },
          {
            tag: "FMG-VM",
            name: "FortiManager VM",
            desc: "Runs on your own hypervisor or public cloud, sized by managed devices.",
            points: ["On-premises or cloud", "Keeps data in your environment", "HA secondary not counted"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiManager VM", "FMG-VM"),
          },
          {
            tag: "FMG hardware",
            name: "FortiManager appliance",
            desc: "A dedicated appliance for large estates or strict data policies.",
            points: ["For large device counts", "FortiCare per appliance", "Sized in your quote"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiManager appliance", "FMG hardware"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiManager\n does for you",
    highlightLast: 3,
    subhead: "FortiManager is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Policy packages",
        description: "Build policies once and assign them to groups of FortiGates, with per-site variables.",
      },
      {
        icon: "<path d=\"M4 8h14l-3-3M20 16H6l3 3\"/>",
        title: "Revision history",
        description: "Every change is recorded and can be compared or rolled back.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Firmware management",
        description: "Plan and schedule upgrades across all devices from one screen.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Zero-touch provisioning",
        description: "New FortiGates pick up their configuration as soon as they connect.",
      },
      {
        icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
        title: "Administrative domains",
        description: "Separate business units, regions or customers in one FortiManager.",
      },
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "Scripts and API",
        description: "Automate repeat changes with CLI scripts and a REST API.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiManager\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiManager suits any organisation with more than a handful of FortiGates, or several sites to keep consistent. It turns dozens of separate logins into one change process with a full audit trail.",
      "GS IT sizes the licence, designs the policies, deploys FortiManager with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "1", label: "console for every FortiGate" },
      { value: "3 to 1,000", label: "device cloud tiers", dark: true },
      { value: "Full", label: "revision history and rollback" },
      { value: "3", label: "ways to deploy" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiManager\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "How devices are counted",
        columns: ["Situation", "Licences used"],
        rows: [
          { label: "FortiGate with VDOMs disabled", values: ["1 per FortiGate"] },
          { label: "FortiGate with VDOMs enabled", values: ["1 per VDOM"] },
          { label: "Secondary FortiGate in an HA pair (VM and appliance)", values: ["Not counted"] },
          { label: "FortiGate in an HA pair on FortiManager Cloud", values: ["Each unit counted"] },
          { label: "FortiAnalyzer managed by FortiManager", values: ["1"] },
        ],
      },
      {
        title: "FortiManager Cloud tiers",
        columns: ["SKU", "Devices or VDOMs"],
        rows: [
          { label: "FC0-10-MVCLD-227", values: ["3"] },
          { label: "FC1-10-MVCLD-227", values: ["10"] },
          { label: "FC2-10-MVCLD-227", values: ["100"] },
          { label: "FC3-10-MVCLD-227", values: ["1,000"] },
        ],
      },
    ],
    source: "Source: FortiManager administration guide (licence count rules) and FortiManager Cloud deployment guide (licensing). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiManager\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How many FortiGates make FortiManager worthwhile?",
        answer: "Once you manage more than a few FortiGates, or need the same policy across sites, central management saves time and avoids mismatched configuration. For one or two small sites, FortiGate Cloud is often enough.",
      },
      {
        question: "Cloud or VM?",
        answer: "FortiManager Cloud needs no servers and starts at 3 devices. A VM suits larger estates or organisations that must keep management data in their own environment.",
      },
      {
        question: "How are HA pairs counted?",
        answer: "On FortiManager VM and appliances, the secondary unit of an HA pair is not counted. On FortiManager Cloud, each FortiGate in the cluster needs to be covered by the subscription.",
      },
      {
        question: "Can it manage our switches and access points?",
        answer: "Yes. FortiManager manages FortiSwitch and FortiAP through the FortiGate that controls them.",
      },
      {
        question: "Will importing our FortiGates change their configuration?",
        answer: "No. Devices are imported with their current configuration. We then move them to shared policy packages in stages, with your approval at each step.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We deploy FortiManager, onboard your devices, build policy packages and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Complete your\n management and analytics",
    highlightLast: 3,
    subhead: "The other tools in Fortinet management and analytics.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiAnalyzer", text: "Central logging and analytics", image: `${IMG}/fortinet-fortianalyzer-card.webp`, href: `${MGA_STORE}/fortianalyzer` },
      { title: "FortiGate Cloud", text: "Cloud management for smaller sites", image: `${IMG}/fortinet-fortigate-cloud-card.webp`, href: `${MGA_STORE}/fortigate-cloud` },
      { title: "FortiAI", text: "AI assistant", image: `${IMG}/fortinet-fortiai-card.webp`, href: `${MGA_STORE}/fortiai` },
    ],
  },
  enquiryTabs: mgaEnquiry({
    page: "fortimanager",
    product: "FortiManager",
    heading: "Get a quote\n for FortiManager",
    highlightLast: 2,
    products: ["FortiManager", "FortiManager Cloud, 3 devices", "FortiManager Cloud, 10 to 1,000 devices", "FortiManager VM", "FortiManager appliance"],
  }),
  footNote: mgaFootNote("FortiManager"),
};
