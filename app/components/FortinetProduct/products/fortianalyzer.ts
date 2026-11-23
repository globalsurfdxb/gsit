import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MGA_IMG as IMG, MGA_STORE, mgaCrumbs, mgaBadge, mgaHeroButtons, mgaQuals, mgaOptionLink, mgaEnquiry, mgaFootNote } from "./management-analytics-shared";

// Generated from 07-Management-and-Analytics/product-pages/fortianalyzer.html
export const fortianalyzer: LogitechProductData = {
  slug: "fortianalyzer",
  seo: {
    title: "FortiAnalyzer in Dubai | Fortinet Partner | GS IT",
    description: "FortiAnalyzer from GS IT, a Fortinet partner in Dubai. Central logs, reports and incident response for your Fabric. Licensing, deployment and support.",
    ogTitle: "FortiAnalyzer in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Central logging and analytics that collects logs from your Fortinet devices into one place, then turns them into reports, alerts and incident timelines.",
  },
  name: "FortiAnalyzer",
  image: `${IMG}/fortinet-fortianalyzer-card.webp`,
  quals: mgaQuals,
  heroData: {
    crumbs: mgaCrumbs("FortiAnalyzer"),
    gallery: [{ src: `${IMG}/fortinet-fortianalyzer-card.webp`, alt: "FortiAnalyzer, Fortinet central logging and analytics" }],
    badge: mgaBadge,
    tag: "Central logging and analytics",
    heading: "FortiAnalyzer\n central logging and analytics",
    highlightLast: 4,
    description: "Central logging and analytics that collects logs from your Fortinet devices into one place, then turns them into reports, alerts and incident timelines.",
    pills: ["Cloud, VM or appliance", "Licensed by GB per day", "Outbreak detection"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Central logging and analytics" },
      { label: "Licensed by", value: "Log volume, GB per day" },
      { label: "Deployment", value: "FortiAnalyzer Cloud, VM or appliance" },
      { label: "Cloud add-ons", value: "+5, +50 or +500 GB per day" },
      { label: "Includes", value: "Outbreak detection, IOC, security automation" },
      { label: "Add-ons", value: "FortiAI, SOCaaS" },
    ],
    aboutTitle: "About FortiAnalyzer",
    about: [
      { label: "Collect", text: "logs from FortiGate, FortiClient, FortiMail and other Fabric devices" },
      { label: "Report", text: "ready-made reports for security, compliance and usage" },
      { label: "Detect", text: "FortiGuard outbreak alerts and indicators of compromise" },
      { label: "Respond", text: "incident management with event handlers and playbooks" },
    ],
    buttons: mgaHeroButtons("FortiAnalyzer"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiAnalyzer",
    highlightLast: 1,
    subhead: "FortiAnalyzer is licensed by how many GB of logs it takes in each day. In the cloud, each FortiGate brings its own daily allowance.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FC-10-xxxx-585",
            name: "FortiAnalyzer Cloud",
            desc: "Per-FortiGate subscription for cloud logging and analytics.",
            points: ["Daily allowance by FortiGate size", "No servers to run", "FortiAI add-on available"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAnalyzer Cloud", "FC-10-xxxx-585"),
          },
          {
            tag: "FC1 to FC3-10-AZCLD-463",
            name: "FortiAnalyzer Cloud storage",
            desc: "Extra daily log capacity, also used for FortiClient and FortiMail logs.",
            points: ["+5 GB per day", "+50 GB per day", "+500 GB per day"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAnalyzer Cloud storage", "FC1 to FC3-10-AZCLD-463"),
          },
          {
            tag: "FAZ-VM subscription",
            name: "FortiAnalyzer VM subscription",
            desc: "Runs on your hypervisor or cloud, with support and services bundled.",
            points: ["Sized in GB per day", "IOC, SOC and outbreak services", "FortiCare 24x7 included"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAnalyzer VM subscription", "FAZ-VM subscription"),
          },
          {
            tag: "FAZ hardware",
            name: "FortiAnalyzer appliance",
            desc: "On-premises appliance for the fastest response and largest log volumes.",
            points: ["25 GB to 20 TB per day", "Full feature set", "FortiCare per appliance"],
            enquireLabel: "Enquire about this option",
            href: mgaOptionLink("FortiAnalyzer appliance", "FAZ hardware"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAnalyzer\n does for you",
    highlightLast: 3,
    subhead: "FortiAnalyzer is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Central log store",
        description: "Search logs from every device in one place, with real-time and historical views.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
        title: "Reports",
        description: "Ready-made and custom reports for security, compliance, bandwidth and usage.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Outbreak detection",
        description: "FortiGuard alerts, event handlers and reports for each new outbreak.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Indicators of compromise",
        description: "Spots devices talking to known malicious destinations.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Security automation",
        description: "Event handlers and playbooks respond to incidents automatically.",
      },
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "FortiAI assistant",
        description: "Investigate incidents, write queries and build reports in plain language.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiAnalyzer\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiAnalyzer suits organisations that need to keep logs for audit, investigate incidents across sites, or give management regular security reports. It is the reporting and response layer of the Fortinet Security Fabric.",
      "GS IT sizes the licence, designs the policies, deploys FortiAnalyzer with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "GB/day", label: "licensing" },
      { value: "12 months", label: "cloud log retention within allowance", dark: true },
      { value: "25 GB to 20 TB", label: "per day on appliances" },
      { value: "Outbreak", label: "detection included" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAnalyzer\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "FortiAnalyzer Cloud daily allowance per FortiGate",
        columns: ["FortiGate size", "Daily log limit", "Rate limit"],
        rows: [
          { label: "FortiGate 30 to 90 series, or VM with 2 CPUs", values: ["200 MB", "6 logs per second"] },
          { label: "FortiGate 100 to 900 series, or VM with 4 CPUs", values: ["1 GB", "30 logs per second"] },
          { label: "FortiGate 1000 series and above, or VM with 8+ CPUs", values: ["5 GB", "150 logs per second"] },
        ],
      },
      {
        title: "Appliances",
        columns: ["Model", "GB per day", "Sustained logs per second", "Max ADOMs"],
        rows: [
          { label: "FortiAnalyzer 150G", values: ["25", "500", "3"] },
          { label: "FortiAnalyzer 300G", values: ["100", "2,000", "25"] },
          { label: "FortiAnalyzer 810G", values: ["200", "4,000", "50"] },
          { label: "FortiAnalyzer 1000G", values: ["660", "20,000", "50"] },
          { label: "FortiAnalyzer 3100G", values: ["3,000", "42,000", "500"] },
          { label: "FortiAnalyzer 3510G", values: ["5,000", "60,000", "500"] },
          { label: "FortiAnalyzer 3700G", values: ["8,300", "100,000", "1,200"] },
          { label: "FortiAnalyzer 4500G", values: ["20,000", "300,000", "2,500"] },
        ],
      },
    ],
    source: "Source: FortiAnalyzer Cloud release notes and deployment guide, and FortiAnalyzer data sheet. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAnalyzer\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How do we size FortiAnalyzer?",
        answer: "By the GB of logs your devices send each day, and how long you need to keep them. We measure your current log volume and add room for growth.",
      },
      {
        question: "How does FortiAnalyzer Cloud licensing work?",
        answer: "Each FortiGate subscription includes a daily log allowance based on its size, from 200 MB for small models to 5 GB for large ones. If you need more, or want FortiClient or FortiMail logs, add 5, 50 or 500 GB per day.",
      },
      {
        question: "How long are logs kept?",
        answer: "FortiAnalyzer Cloud keeps logs for 12 months within your daily allowance. On a VM or appliance, retention depends on the storage you provision, which we size to your audit needs.",
      },
      {
        question: "Can logs stay in the UAE?",
        answer: "Yes, with a FortiAnalyzer VM or appliance in your own data centre or a UAE cloud region. We design the deployment around your data residency rules.",
      },
      {
        question: "What is FortiAnalyzer with SOCaaS?",
        answer: "A FortiAnalyzer Cloud subscription that adds Fortinet’s SOC-as-a-Service, where Fortinet analysts monitor your logs. We can quote it alongside GS IT’s own managed service.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We size and deploy FortiAnalyzer, connect your devices, build reports and alerts, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiGate Cloud", text: "Cloud management for smaller sites", image: `${IMG}/fortinet-fortigate-cloud-card.webp`, href: `${MGA_STORE}/fortigate-cloud` },
      { title: "FortiAI", text: "AI assistant", image: `${IMG}/fortinet-fortiai-card.webp`, href: `${MGA_STORE}/fortiai` },
    ],
  },
  enquiryTabs: mgaEnquiry({
    page: "fortianalyzer",
    product: "FortiAnalyzer",
    heading: "Get a quote\n for FortiAnalyzer",
    highlightLast: 2,
    products: ["FortiAnalyzer", "FortiAnalyzer Cloud", "FortiAnalyzer Cloud storage", "FortiAnalyzer VM subscription", "FortiAnalyzer appliance"],
  }),
  footNote: mgaFootNote("FortiAnalyzer"),
};
