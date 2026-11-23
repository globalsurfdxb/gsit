import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { EPS_IMG as IMG, EPS_STORE, epsCrumbs, epsBadge, epsHeroButtons, epsQuals, epsOptionLink, epsEnquiry, epsFootNote } from "./endpoint-sase-shared";

// Generated from 06-Endpoint-Data-and-SASE/product-pages/fortisase.html
export const fortisase: LogitechProductData = {
  slug: "fortisase",
  seo: {
    title: "FortiSASE in Dubai | Fortinet Partner | GS IT",
    description: "FortiSASE from GS IT, a Fortinet Authorized Partner in Dubai. Cloud-delivered security for remote and hybrid users. Licensing, deployment and support.",
    ogTitle: "FortiSASE in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Cloud-delivered security for remote and hybrid users: secure internet, SaaS and private application access through one agent, with the same policy as your office.",
  },
  name: "FortiSASE",
  image: `${IMG}/fortinet-fortisase-card.webp`,
  quals: epsQuals,
  heroData: {
    crumbs: epsCrumbs("FortiSASE"),
    gallery: [{ src: `${IMG}/fortinet-fortisase-card.webp`, alt: "FortiSASE, Fortinet secure access service edge" }],
    badge: epsBadge,
    tag: "Secure access service edge",
    heading: "FortiSASE\n secure access service edge",
    highlightLast: 4,
    description: "Cloud-delivered security for remote and hybrid users: secure internet, SaaS and private application access through one agent, with the same policy as your office.",
    pills: ["Standard, Advanced, Comprehensive", "Per user, 3 devices each", "Thin branch support"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Secure access service edge" },
      { label: "Licensed by", value: "User, up to 3 devices each" },
      { label: "Editions", value: "Standard, Advanced, Comprehensive" },
      { label: "User bands", value: "50 to 499, 500 to 1,999, 2,000 to 9,999, 10,000+" },
      { label: "Agent", value: "FortiClient, or agentless via secure web gateway" },
      { label: "Branches", value: "FortiAP, FortiExtender, FortiGate on-ramp" },
    ],
    aboutTitle: "About FortiSASE",
    about: [
      { label: "Internet", text: "firewall, IPS, web and DNS filtering and SSL inspection in the cloud" },
      { label: "SaaS", text: "inline CASB and DLP for sanctioned and unsanctioned apps" },
      { label: "Private apps", text: "secure private access and ZTNA to apps behind your FortiGate" },
      { label: "Experience", text: "digital experience monitoring with Advanced and Comprehensive" },
    ],
    buttons: epsHeroButtons("FortiSASE"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiSASE",
    highlightLast: 1,
    subhead: "Licensed per user in bands, on annual or multi-year terms. Each user licence covers up to 3 devices.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "EMS05-547",
            name: "FortiSASE Standard",
            desc: "Secure internet, SaaS and private access for remote users.",
            points: ["Cloud firewall and SWG", "SSL inspection, IPS, web and DNS", "ZTNA and private access"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiSASE Standard", "EMS05-547"),
          },
          {
            tag: "EMS05-676",
            name: "FortiSASE Advanced",
            desc: "Everything in Standard, plus digital experience monitoring and assisted onboarding.",
            points: ["DEM agent included", "Assisted onboarding", "For growing remote teams"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiSASE Advanced", "EMS05-676"),
          },
          {
            tag: "EMS05-759",
            name: "FortiSASE Comprehensive",
            desc: "Everything in Advanced, plus NOC and SOC integrations.",
            points: ["NOC and SOC integrations", "For advanced security teams", "Largest feature set"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiSASE Comprehensive", "EMS05-759"),
          },
          {
            tag: "Thin edge",
            name: "FortiSASE for branches",
            desc: "Connects small sites through FortiAP, FortiExtender or FortiGate on-ramp.",
            points: ["No firewall needed at small sites", "Same cloud policy", "Priced per device"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiSASE for branches", "Thin edge"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiSASE\n does for you",
    highlightLast: 3,
    subhead: "FortiSASE is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Secure internet access",
        description: "Cloud firewall, IPS, anti-malware, sandbox, web and DNS filtering for every user.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M3 9h18\"/>",
        title: "Secure SaaS access",
        description: "Inline CASB and DLP control what users do in SaaS apps.",
      },
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Secure private access",
        description: "Reaches apps behind your FortiGate through SPA hubs or ZTNA.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "One agent",
        description: "The same FortiClient agent for SASE, ZTNA and endpoint protection.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Digital experience monitoring",
        description: "Shows when a slow app is the network, not the user, with Advanced or Comprehensive.",
      },
      {
        icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
        title: "Thin branch support",
        description: "Small sites connect through FortiAP or FortiExtender without a local firewall.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiSASE\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiSASE suits organisations with staff who work mostly away from the office, or offices too small for their own firewall. Traffic is inspected in the cloud close to the user, with the same policy you run on your FortiGate.",
      "GS IT sizes the licence, designs the policies, deploys FortiSASE with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "3", label: "devices per user licence" },
      { value: "3", label: "editions", dark: true },
      { value: "50+", label: "users, banded pricing" },
      { value: "1", label: "agent with FortiClient" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiSASE\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Editions compared",
        columns: ["Capability", "Standard", "Advanced", "Comprehensive"],
        rows: [
          { label: "Secure internet access (firewall, SWG)", values: ["✓", "✓", "✓"] },
          { label: "SSL inspection", values: ["✓", "✓", "✓"] },
          { label: "IPS, anti-malware and sandbox", values: ["✓", "✓", "✓"] },
          { label: "Web and DNS filtering", values: ["✓", "✓", "✓"] },
          { label: "Secure private access and ZTNA", values: ["✓", "✓", "✓"] },
          { label: "Digital experience monitoring", values: ["-", "✓", "✓"] },
          { label: "Assisted onboarding", values: ["-", "✓", "✓"] },
          { label: "NOC and SOC integrations", values: ["-", "-", "✓"] },
        ],
      },
      {
        title: "User bands",
        columns: ["Band", "Users"],
        rows: [
          { label: "Band 1", values: ["50 to 499"] },
          { label: "Band 2", values: ["500 to 1,999"] },
          { label: "Band 3", values: ["2,000 to 9,999"] },
          { label: "Band 4", values: ["10,000+"] },
        ],
      },
    ],
    source: "Source: FortiSASE ordering guide, FortiSASE administration guide and release notes, and distributor listings. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiSASE\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How is FortiSASE licensed?",
        answer: "Per user, in Standard, Advanced or Comprehensive editions, with pricing bands from 50 users. Each user licence covers up to 3 devices.",
      },
      {
        question: "Do we still need a FortiGate?",
        answer: "For your offices and data centre, usually yes. FortiSASE secures users away from the office and connects them back to private apps behind your FortiGate.",
      },
      {
        question: "Is an agent required?",
        answer: "FortiSASE uses the FortiClient agent for full protection. Agentless access through the secure web gateway is also available for some use cases.",
      },
      {
        question: "What does Advanced add over Standard?",
        answer: "Digital experience monitoring, which shows whether a slow app is caused by the network, the device or the app, plus assisted onboarding.",
      },
      {
        question: "Can small branches use FortiSASE?",
        answer: "Yes. Small sites can connect through a FortiAP or FortiExtender as a thin edge, so they get cloud security without a local firewall.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We design policies, connect FortiSASE to your FortiGate, roll out FortiClient and support the service after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Complete your\n endpoint and SASE protection",
    highlightLast: 4,
    subhead: "The other products in Fortinet endpoint, data and SASE.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiClient", text: "Endpoint agent and ZTNA", image: `${IMG}/fortinet-forticlient-card.webp`, href: `${EPS_STORE}/forticlient` },
      { title: "FortiEDR", text: "Endpoint detection and response", image: `${IMG}/fortinet-fortiedr-card.webp`, href: `${EPS_STORE}/fortiedr` },
      { title: "FortiDLP", text: "Data loss prevention", image: `${IMG}/fortinet-fortidlp-card.webp`, href: `${EPS_STORE}/fortidlp` },
    ],
  },
  enquiryTabs: epsEnquiry({
    page: "fortisase",
    product: "FortiSASE",
    heading: "Get a quote\n for FortiSASE",
    highlightLast: 2,
    products: ["FortiSASE", "FortiSASE Standard", "FortiSASE Advanced", "FortiSASE Comprehensive", "FortiSASE for branches"],
  }),
  footNote: epsFootNote("FortiSASE"),
};
