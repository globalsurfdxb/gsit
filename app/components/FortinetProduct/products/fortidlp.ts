import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { EPS_IMG as IMG, EPS_STORE, epsCrumbs, epsBadge, epsHeroButtons, epsQuals, epsOptionLink, epsEnquiry, epsFootNote } from "./endpoint-sase-shared";

// Generated from 06-Endpoint-Data-and-SASE/product-pages/fortidlp.html
export const fortidlp: LogitechProductData = {
  slug: "fortidlp",
  seo: {
    title: "FortiDLP in Dubai | Fortinet Partner | GS IT",
    description: "FortiDLP from GS IT, a Fortinet Authorized Partner in Dubai. Tracks sensitive data and stops it leaving the wrong way. Licensing, deployment and support.",
    ogTitle: "FortiDLP in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Data loss prevention and insider risk management that tracks sensitive data from source to destination, and stops it leaving through cloud drives, personal accounts or GenAI tools.",
  },
  name: "FortiDLP",
  image: `${IMG}/fortinet-fortidlp-card.webp`,
  quals: epsQuals,
  heroData: {
    crumbs: epsCrumbs("FortiDLP"),
    gallery: [{ src: `${IMG}/fortinet-fortidlp-card.webp`, alt: "FortiDLP, Fortinet data loss prevention" }],
    badge: epsBadge,
    tag: "Data loss prevention",
    heading: "FortiDLP\n data loss prevention",
    highlightLast: 3,
    description: "Data loss prevention and insider risk management that tracks sensitive data from source to destination, and stops it leaving through cloud drives, personal accounts or GenAI tools.",
    pills: ["Endpoint and SaaS", "Insider risk", "GenAI data protection"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Data loss prevention and insider risk" },
      { label: "Delivery", value: "Cloud-native, with endpoint agent" },
      { label: "Covers", value: "Endpoints, SaaS, GenAI apps" },
      { label: "Detections mapped to", value: "MITRE insider threat TTP knowledge base" },
      { label: "Works", value: "On and off the corporate network" },
    ],
    aboutTitle: "About FortiDLP",
    about: [
      { label: "Track", text: "Secure Data Flow follows data from its source, even when copied or changed" },
      { label: "Detect", text: "insider risk activity is sequenced and scored automatically" },
      { label: "Control", text: "log, coach, require acknowledgement, block or isolate the endpoint" },
      { label: "Educate", text: "users learn in the moment, when they try something risky" },
    ],
    buttons: epsHeroButtons("FortiDLP"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiDLP",
    highlightLast: 1,
    subhead: "FortiDLP is a cloud-delivered subscription with a lightweight agent on each endpoint. We confirm the right sizing and term in your quote.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "DLP",
            name: "Data loss prevention",
            desc: "Stops sensitive data leaving through cloud drives, personal accounts and unmanaged devices.",
            points: ["Secure Data Flow tracking", "Policy actions up to block", "No long discovery project first"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("Data loss prevention", "DLP"),
          },
          {
            tag: "Insider risk",
            name: "Insider risk management",
            desc: "Spots risky behaviour, such as a leaver copying files, and scores it.",
            points: ["Activity sequencing", "MITRE insider TTP mapping", "Prioritised investigations"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("Insider risk management", "Insider risk"),
          },
          {
            tag: "SaaS",
            name: "SaaS and GenAI security",
            desc: "Shows sanctioned and unsanctioned SaaS and GenAI use, and what data goes in.",
            points: ["Shadow AI visibility", "Safe use of public GenAI", "Ingress and egress monitoring"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("SaaS and GenAI security", "SaaS"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiDLP\n does for you",
    highlightLast: 3,
    subhead: "FortiDLP is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Secure Data Flow",
        description: "Tracks what data moved, where, by whom and how, from its source onwards.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Insider risk detection",
        description: "Identifies, sequences and scores high-risk activity chains automatically.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M3 9h18\"/>",
        title: "SaaS visibility",
        description: "Covers sanctioned and unsanctioned SaaS apps, including uploads and downloads.",
      },
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "Shadow AI protection",
        description: "Lets staff use tools such as ChatGPT and Gemini without leaking sensitive data.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Graduated actions",
        description: "Log, require acknowledgement, block a transfer, or isolate or lock the endpoint.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Lightweight agent",
        description: "Inspects data in motion with minimal CPU and memory impact, on or off the network.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiDLP\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiDLP suits organisations that hold client, financial or personal data and need to know where it goes, without a long data classification project first. It protects from day one, then sharpens as it learns your data flows.",
      "GS IT sizes the licence, designs the policies, deploys FortiDLP with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "4", label: "capabilities in one agent" },
      { value: "MITRE", label: "insider threat mapping", dark: true },
      { value: "GenAI", label: "data protection built in" },
      { value: "Off-network", label: "protection" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiDLP\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "What FortiDLP covers",
        columns: ["Area", "What it does"],
        rows: [
          { label: "Data loss prevention", values: ["Tracks and controls sensitive data across endpoints and egress points"] },
          { label: "Insider risk management", values: ["Detects, sequences and scores risky user behaviour"] },
          { label: "SaaS data security", values: ["Visibility of sanctioned and unsanctioned SaaS use, ingress and egress"] },
          { label: "Risk-informed user education", values: ["Coaches users at the moment of risk"] },
        ],
      },
      {
        title: "Policy actions",
        columns: ["Action", "Use it for"],
        rows: [
          { label: "Log activity", values: ["Visibility and investigation"] },
          { label: "Require acknowledgement", values: ["Coaching users on borderline actions"] },
          { label: "Block transfer", values: ["Sensitive data leaving through the wrong channel"] },
          { label: "Isolate or lock the endpoint", values: ["Confirmed high-risk activity"] },
        ],
      },
    ],
    source: "Source: FortiDLP data sheet and fortinet.com FortiDLP product pages. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiDLP\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Do we need to classify all our data first?",
        answer: "No. FortiDLP tracks data from its source, so it can protect from the start without an exhaustive discovery or policy project. We refine policies as you go.",
      },
      {
        question: "Does it block ChatGPT and other GenAI tools?",
        answer: "It does not have to. FortiDLP lets staff use public GenAI tools while watching what data goes into them, so it can warn, ask for acknowledgement or block when sensitive information is involved.",
      },
      {
        question: "Does it work when staff are off the network?",
        answer: "Yes. The agent records and protects data flows regardless of network connection or location.",
      },
      {
        question: "How is it different from DLP on our firewall?",
        answer: "Firewall DLP sees traffic passing through it. FortiDLP sits on the endpoint, so it sees data going to personal cloud drives and apps even when the device is off your network, and links them to the user.",
      },
      {
        question: "How is FortiDLP licensed?",
        answer: "It is a cloud-delivered subscription with an agent on each endpoint. Sizing depends on your users and endpoints, and we confirm it in your quote.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We deploy the agent, start in monitoring mode, tune policies with your team and support FortiDLP after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiSASE", text: "Secure access service edge", image: `${IMG}/fortinet-fortisase-card.webp`, href: `${EPS_STORE}/fortisase` },
    ],
  },
  enquiryTabs: epsEnquiry({
    page: "fortidlp",
    product: "FortiDLP",
    heading: "Get a quote\n for FortiDLP",
    highlightLast: 2,
    products: ["FortiDLP", "Data loss prevention", "Insider risk management", "SaaS and GenAI security"],
  }),
  footNote: epsFootNote("FortiDLP"),
};
