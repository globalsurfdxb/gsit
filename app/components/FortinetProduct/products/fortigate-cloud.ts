import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MGA_IMG as IMG, MGA_STORE, mgaCrumbs, mgaBadge, mgaHeroButtons, mgaQuals, mgaOptionLink, mgaEnquiry, mgaFootNote } from "./management-analytics-shared";

// Generated from 07-Management-and-Analytics/product-pages/fortigate-cloud.html
export const fortigateCloud: LogitechProductData = {
  slug: "fortigate-cloud",
  seo: {
    title: "FortiGate Cloud in Dubai | Fortinet Partner | GS IT",
    description: "FortiGate Cloud from GS IT, a Fortinet partner in Dubai. Simple cloud management and one year of logs per FortiGate. Licensing and support.",
    ogTitle: "FortiGate Cloud in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Cloud management, analytics and one year of hosted logs for FortiGates at smaller and branch sites, with no servers to run.",
  },
  name: "FortiGate Cloud",
  image: `${IMG}/fortinet-fortigate-cloud-card.webp`,
  quals: mgaQuals,
  heroData: {
    crumbs: mgaCrumbs("FortiGate Cloud"),
    gallery: [{ src: `${IMG}/fortinet-fortigate-cloud-card.webp`, alt: "FortiGate Cloud, Fortinet cloud management for smaller sites" }],
    badge: mgaBadge,
    tag: "Cloud management for smaller sites",
    heading: "FortiGate\n Cloud",
    highlightLast: 1,
    description: "Cloud management, analytics and one year of hosted logs for FortiGates at smaller and branch sites, with no servers to run.",
    pills: ["Per FortiGate", "1-year log retention", "1, 3 or 5 year terms"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Cloud management and analytics" },
      { label: "Licensed by", value: "FortiGate or FortiWiFi" },
      { label: "Tiers", value: "Basic, Standard, Advanced" },
      { label: "Log retention", value: "7 days (Basic), 1 year (Standard, Advanced)" },
      { label: "Terms", value: "1, 3 or 5 years" },
      { label: "Best for", value: "FortiGate 40 to 200 class sites" },
    ],
    aboutTitle: "About FortiGate Cloud",
    about: [
      { label: "Provision", text: "zero-touch setup for new FortiGates from the cloud" },
      { label: "Manage", text: "central configuration, backup and restore" },
      { label: "Analyse", text: "security analytics and pre-built reports" },
      { label: "Retain", text: "one year of hosted logs with a subscription" },
    ],
    buttons: mgaHeroButtons("FortiGate Cloud"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiGate Cloud",
    highlightLast: 2,
    subhead: "FortiGate Cloud is licensed per FortiGate. Devices without a subscription still get a basic tier.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "No subscription",
            name: "FortiGate Cloud Basic",
            desc: "Free basic tier for any registered FortiGate.",
            points: ["7-day log retention", "Read-only remote access", "One default report"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiGate Cloud Basic", "No subscription"),
          },
          {
            tag: "FC-10-xxxxx-131",
            name: "FortiGate Cloud Standard",
            desc: "Management, analytics and one year of log retention.",
            points: ["Configuration management", "Multiple reports", "1, 3 or 5 year terms"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiGate Cloud Standard", "FC-10-xxxxx-131"),
          },
          {
            tag: "FC-10-xxxxx-1125",
            name: "FortiGate Cloud Advanced",
            desc: "Standard, plus SD-WAN overlay and security operations features.",
            points: ["SD-WAN overlay as a service", "Indicators of compromise", "For multi-site networks"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiGate Cloud Advanced", "FC-10-xxxxx-1125"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiGate Cloud\n does for you",
    highlightLast: 3,
    subhead: "FortiGate Cloud is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Zero-touch provisioning",
        description: "Ship a FortiGate to site, plug it in and it picks up its configuration from the cloud.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
        title: "Central management",
        description: "Change, back up and restore FortiGate configuration from one portal.",
      },
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Security analytics",
        description: "Traffic, threat and application views with scheduled reports.",
      },
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Hosted log retention",
        description: "One year of logs kept by Fortinet, with raw log download.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Event handlers",
        description: "Alerts and incident management when something needs attention.",
      },
      {
        icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
        title: "Downstream devices",
        description: "Covers FortiAP, FortiSwitch and FortiExtender behind each FortiGate.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiGate Cloud\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiGate Cloud suits small businesses and branch offices running entry and mid-range FortiGates. It gives them management, reporting and a year of logs without buying or running FortiManager and FortiAnalyzer.",
      "GS IT sizes the licence, designs the policies, deploys FortiGate Cloud with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "1 year", label: "hosted log retention" },
      { value: "Per FortiGate", label: "subscription", dark: true },
      { value: "3", label: "tiers" },
      { value: "Zero-touch", label: "provisioning" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiGate Cloud\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Tiers compared",
        columns: ["Capability", "Basic", "Standard", "Advanced"],
        rows: [
          { label: "Zero-touch cloud provisioning", values: ["✓", "✓", "✓"] },
          { label: "Remote access to FortiGate", values: ["Read-only", "Full", "Full"] },
          { label: "Hosted log retention", values: ["7 days", "1 year", "1 year"] },
          { label: "Reports", values: ["1 default", "Multiple", "Multiple"] },
          { label: "Configuration management", values: ["-", "✓", "✓"] },
          { label: "Configuration backup and restore", values: ["-", "✓", "✓"] },
          { label: "Raw log download", values: ["-", "✓", "✓"] },
          { label: "Event handlers and incident management", values: ["-", "✓", "✓"] },
          { label: "CLI scripts", values: ["-", "✓", "✓"] },
          { label: "Indicators of compromise", values: ["-", "-", "✓"] },
          { label: "SD-WAN overlay as a service", values: ["-", "-", "✓"] },
        ],
      },
    ],
    source: "Source: FortiGate Cloud administration guide (feature comparison and subscription types). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiGate Cloud\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is FortiGate Cloud free?",
        answer: "Every registered FortiGate gets a basic tier with 7-day log retention, read-only remote access and one default report. The Standard subscription adds full management, multiple reports and one year of logs.",
      },
      {
        question: "FortiGate Cloud or FortiManager and FortiAnalyzer?",
        answer: "FortiGate Cloud suits a few small or mid-size sites. As you add sites, VDOMs or stricter log requirements, FortiManager and FortiAnalyzer give you more control. We help you choose.",
      },
      {
        question: "Do HA pairs need two subscriptions?",
        answer: "Yes. Each FortiGate in a high-availability cluster needs its own subscription.",
      },
      {
        question: "What happens to firmware on the basic tier?",
        answer: "Without a subscription, a FortiGate must be kept on the latest patch to keep log upload and cloud access working. A subscription removes that restriction.",
      },
      {
        question: "Does it cover our switches and access points?",
        answer: "Yes. FortiGate Cloud manages FortiAP, FortiSwitch and FortiExtender devices behind each FortiGate.",
      },
      {
        question: "Do you set it up and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We register your FortiGates, set up reports and alerts, and support FortiGate Cloud as part of your FortiGate service. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiManager", text: "Central management", image: `${IMG}/fortinet-fortimanager-card.webp`, href: `${MGA_STORE}/fortimanager` },
      { title: "FortiAnalyzer", text: "Central logging and analytics", image: `${IMG}/fortinet-fortianalyzer-card.webp`, href: `${MGA_STORE}/fortianalyzer` },
      { title: "FortiAI", text: "AI assistant", image: `${IMG}/fortinet-fortiai-card.webp`, href: `${MGA_STORE}/fortiai` },
    ],
  },
  enquiryTabs: mgaEnquiry({
    page: "fortigate-cloud",
    product: "FortiGate Cloud",
    heading: "Get a quote\n for FortiGate Cloud",
    highlightLast: 3,
    products: ["FortiGate Cloud", "FortiGate Cloud Basic", "FortiGate Cloud Standard", "FortiGate Cloud Advanced"],
  }),
  footNote: mgaFootNote("FortiGate Cloud"),
};
