import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MGA_IMG as IMG, MGA_STORE, mgaCrumbs, mgaBadge, mgaHeroButtons, mgaQuals, mgaOptionLink, mgaEnquiry, mgaFootNote } from "./management-analytics-shared";

// Generated from 07-Management-and-Analytics/product-pages/fortiai.html
export const fortiai: LogitechProductData = {
  slug: "fortiai",
  seo: {
    title: "FortiAI in Dubai | Fortinet Partner | GS IT",
    description: "FortiAI from GS IT, a Fortinet Authorized Partner in Dubai. Generative AI assistant inside FortiManager and FortiAnalyzer. Licensing, deployment and support.",
    ogTitle: "FortiAI in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A generative AI security assistant inside FortiManager and FortiAnalyzer that helps your team investigate, configure and troubleshoot in plain language.",
  },
  name: "FortiAI",
  image: `${IMG}/fortinet-fortiai-card.webp`,
  quals: mgaQuals,
  heroData: {
    crumbs: mgaCrumbs("FortiAI"),
    gallery: [{ src: `${IMG}/fortinet-fortiai-card.webp`, alt: "FortiAI, Fortinet AI assistant" }],
    badge: mgaBadge,
    tag: "AI assistant",
    heading: "FortiAI\n AI assistant",
    highlightLast: 2,
    description: "A generative AI security assistant inside FortiManager and FortiAnalyzer that helps your team investigate, configure and troubleshoot in plain language.",
    pills: ["FortiManager and FortiAnalyzer", "Cloud and on-premises", "Monthly token allowance"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Generative AI assistant" },
      { label: "Also called", value: "FortiAI-Assist" },
      { label: "Works in", value: "FortiManager, FortiAnalyzer, and their cloud editions" },
      { label: "Licensing", value: "Add-on licence with monthly tokens" },
      { label: "FortiAnalyzer users", value: "3 FortiAI users per licence" },
      { label: "Intelligence", value: "FortiGuard Labs security data" },
    ],
    aboutTitle: "About FortiAI",
    about: [
      { label: "Investigate", text: "summarises security events, impact and recommended remediation" },
      { label: "Query", text: "writes log queries, reports and event handler rules" },
      { label: "Configure", text: "helps with scripts, VPN setup and IoT device analysis in FortiManager" },
      { label: "Learn", text: "answers product questions and points to the right Fortinet documentation" },
    ],
    buttons: mgaHeroButtons("FortiAI"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiAI",
    highlightLast: 1,
    subhead: "FortiAI is an add-on licence for the FortiManager or FortiAnalyzer you already run, on-premises or in Fortinet’s cloud.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FortiAI for FortiAnalyzer",
            name: "FortiAI for FortiAnalyzer",
            desc: "For incident investigation, response and threat hunting.",
            points: ["3 FortiAI users", "Monthly token allowance", "Cloud or on-premises"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAI for FortiAnalyzer", "FortiAI for FortiAnalyzer"),
          },
          {
            tag: "FortiAI for FortiManager",
            name: "FortiAI for FortiManager",
            desc: "For configuration, scripts, VPN and troubleshooting.",
            points: ["Natural-language requests", "IoT device analysis", "Cloud or on-premises"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAI for FortiManager", "FortiAI for FortiManager"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAI\n does for you",
    highlightLast: 3,
    subhead: "FortiAI is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Incident summaries",
        description: "Turns a stream of security events into a clear summary with likely impact.",
      },
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Queries and reports",
        description: "Writes the database query or report you describe, without manual syntax.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Event handler rules",
        description: "Drafts detection rules so new threats are flagged automatically.",
      },
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "Configuration help",
        description: "Helps build scripts and VPN configuration in FortiManager.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "FortiGuard intelligence",
        description: "Answers draw on FortiGuard Labs security data, reviewed by Fortinet experts.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Role control",
        description: "Only administrators you enable as FortiAI users can use it.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiAI\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiAI suits lean IT and security teams that need to get more out of FortiManager and FortiAnalyzer without deep CLI or query skills. It handles the routine steps, so people can focus on decisions.",
      "GS IT sizes the licence, designs the policies, deploys FortiAI with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "3", label: "FortiAI users per FortiAnalyzer licence" },
      { value: "Monthly", label: "token allowance", dark: true },
      { value: "2", label: "products: FortiManager and FortiAnalyzer" },
      { value: "Cloud and on-prem", label: "support" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAI\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "What FortiAI does in each product",
        columns: ["Product", "Typical tasks"],
        rows: [
          { label: "FortiAnalyzer", values: ["Incident investigation, threat hunting, event summaries, queries, reports and event handler rules"] },
          { label: "FortiManager", values: ["Scripts, VPN configuration, IoT device analysis, product questions and navigation"] },
        ],
      },
      {
        title: "Licensing facts",
        columns: ["Item", "Detail"],
        rows: [
          { label: "Licence type", values: ["Add-on to FortiManager or FortiAnalyzer"] },
          { label: "Users", values: ["3 FortiAI users on FortiAnalyzer"] },
          { label: "Usage", values: ["Monthly token entitlement shared by all FortiAI users"] },
          { label: "Who can use it", values: ["Local administrators enabled as FortiAI users"] },
          { label: "Connectivity", values: ["FortiManager or FortiAnalyzer must reach Fortinet’s FortiAI service"] },
        ],
      },
    ],
    source: "Source: FortiManager and FortiAnalyzer administration guides (FortiAI), and fortinet.com FortiAI-Assist page. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAI\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What can FortiAI do?",
        answer: "In FortiAnalyzer it summarises incidents, suggests remediation and writes queries, reports and event handler rules. In FortiManager it helps with scripts, VPN configuration and IoT device troubleshooting.",
      },
      {
        question: "How is it licensed?",
        answer: "As an add-on to FortiManager or FortiAnalyzer. The licence includes a monthly token allowance shared by all FortiAI users. On FortiAnalyzer, it covers three FortiAI users.",
      },
      {
        question: "Does it work with FortiManager Cloud and FortiAnalyzer Cloud?",
        answer: "Yes. Both cloud editions support FortiAI once the licence is registered on FortiCloud.",
      },
      {
        question: "Who can use it?",
        answer: "Local administrators that you enable as FortiAI users. This keeps AI access limited to the people you choose.",
      },
      {
        question: "Can FortiAI make changes itself?",
        answer: "It can carry out tasks you ask for inside FortiManager and FortiAnalyzer, such as applying filters or generating reports. Only administrators you enable can use it, and FortiManager keeps a revision history of every change.",
      },
      {
        question: "Do you set it up and train our team?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We license and enable FortiAI, set up users and show your team how to use it day to day. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiGate Cloud", text: "Cloud management for smaller sites", image: `${IMG}/fortinet-fortigate-cloud-card.webp`, href: `${MGA_STORE}/fortigate-cloud` },
    ],
  },
  enquiryTabs: mgaEnquiry({
    page: "fortiai",
    product: "FortiAI",
    heading: "Get a quote\n for FortiAI",
    highlightLast: 2,
    products: ["FortiAI", "FortiAI for FortiAnalyzer", "FortiAI for FortiManager"],
  }),
  footNote: mgaFootNote("FortiAI"),
};
