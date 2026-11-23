import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { EPS_IMG as IMG, EPS_STORE, epsCrumbs, epsBadge, epsHeroButtons, epsQuals, epsOptionLink, epsEnquiry, epsFootNote } from "./endpoint-sase-shared";

// Generated from 06-Endpoint-Data-and-SASE/product-pages/forticlient.html
export const forticlient: LogitechProductData = {
  slug: "forticlient",
  seo: {
    title: "FortiClient in Dubai | Fortinet Partner | GS IT",
    description: "FortiClient from GS IT, a Fortinet Authorized Partner in Dubai. One agent for VPN, zero trust access and endpoint protection. Licensing, deployment and support.",
    ogTitle: "FortiClient in Dubai | Fortinet Partner | GS IT",
    ogDescription: "One agent for VPN, zero trust access and endpoint protection, managed centrally from FortiClient EMS on-premises or in the cloud.",
  },
  name: "FortiClient",
  image: `${IMG}/fortinet-forticlient-card.webp`,
  quals: epsQuals,
  heroData: {
    crumbs: epsCrumbs("FortiClient"),
    gallery: [{ src: `${IMG}/fortinet-forticlient-card.webp`, alt: "FortiClient, Fortinet endpoint agent and ztna" }],
    badge: epsBadge,
    tag: "Endpoint agent and ZTNA",
    heading: "FortiClient\n endpoint agent and ztna",
    highlightLast: 4,
    description: "One agent for VPN, zero trust access and endpoint protection, managed centrally from FortiClient EMS on-premises or in the cloud.",
    pills: ["VPN/ZTNA or EPP/APT", "Per endpoint or per user", "EMS on-premises or cloud"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Endpoint agent, VPN and ZTNA" },
      { label: "Licensed by", value: "Endpoint or user" },
      { label: "Editions", value: "VPN/ZTNA, EPP/APT, Managed" },
      { label: "Management", value: "FortiClient EMS or FortiClient Cloud" },
      { label: "Platforms", value: "Windows, macOS, Linux, iOS, Android, Chromebook" },
      { label: "Pack size", value: "25 endpoints and up" },
    ],
    aboutTitle: "About FortiClient",
    about: [
      { label: "Connect", text: "SSL and IPsec VPN with multi-factor authentication" },
      { label: "Verify", text: "zero trust access with device posture shared with your FortiGate" },
      { label: "Protect", text: "AI-powered antivirus, ransomware protection and cloud sandbox with EPP/APT" },
      { label: "Manage", text: "one console for policies, software inventory and logs" },
    ],
    buttons: epsHeroButtons("FortiClient"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiClient",
    highlightLast: 1,
    subhead: "Every FortiClient deployment needs a VPN/ZTNA licence for each endpoint to register with EMS. Add EPP/APT for full endpoint protection, or Managed for Fortinet to run it for you.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "VPN/ZTNA",
            name: "FortiClient VPN/ZTNA",
            desc: "Remote access and zero trust agent with central management.",
            points: ["SSL and IPsec VPN with MFA", "ZTNA tags and posture checks", "Central logging and reporting"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiClient VPN/ZTNA", "VPN/ZTNA"),
          },
          {
            tag: "FC1-10-EMS05-429",
            name: "FortiClient VPN/ZTNA and EPP/APT",
            desc: "Everything in VPN/ZTNA, plus full endpoint protection.",
            points: ["AI-powered next-gen antivirus", "Ransomware protection", "FortiClient Cloud Sandbox"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiClient VPN/ZTNA and EPP/APT", "FC1-10-EMS05-429"),
          },
          {
            tag: "Managed",
            name: "FortiClient Managed",
            desc: "EPP/APT with Fortinet experts handling onboarding and endpoint monitoring.",
            points: ["Fortinet-managed service", "Includes EPP/APT features", "For lean IT teams"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiClient Managed", "Managed"),
          },
          {
            tag: "FortiSASE add-on",
            name: "FortiSASE add-on",
            desc: "Extends FortiClient to cloud-delivered SASE security for remote users.",
            points: ["Applies to EPP, ZTNA or SASE licences", "Same agent, no extra install", "See the FortiSASE page"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiSASE add-on", "FortiSASE add-on"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiClient\n does for you",
    highlightLast: 3,
    subhead: "FortiClient is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "VPN with MFA",
        description: "SSL and IPsec VPN to your FortiGate, with FortiToken or other MFA on every connection.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Zero trust access",
        description: "ZTNA tags tell your FortiGate whether a device is patched and protected before it reaches an app.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Next-generation antivirus",
        description: "AI-powered malware detection with the EPP/APT licence, on and off the network.",
      },
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Ransomware protection",
        description: "Detects and stops ransomware behaviour on the endpoint with EPP/APT.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Cloud sandbox",
        description: "Unknown files are detonated in FortiClient Cloud Sandbox before they can run.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
        title: "Central management",
        description: "FortiClient EMS deploys the agent, pushes policy and collects logs for every endpoint.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiClient\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiClient suits any organisation that already runs FortiGate and wants one agent on every laptop for VPN, zero trust access and protection. It reports device health back to the firewall, so access decisions use live posture, not just a password.",
      "GS IT sizes the licence, designs the policies, deploys FortiClient with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "1 agent", label: "for VPN, ZTNA and EPP" },
      { value: "6", label: "platforms supported", dark: true },
      { value: "25", label: "endpoint packs" },
      { value: "Cloud or on-prem", label: "EMS management" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiClient\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Editions compared",
        columns: ["Capability", "VPN/ZTNA", "EPP/APT", "Managed"],
        rows: [
          { label: "Zero trust network access (ZTNA)", values: ["✓", "✓", "✓"] },
          { label: "SSL and IPsec VPN with MFA", values: ["✓", "✓", "✓"] },
          { label: "Central management and logging", values: ["✓", "✓", "✓"] },
          { label: "AI-powered next-generation antivirus", values: ["-", "✓", "✓"] },
          { label: "FortiClient Cloud Sandbox", values: ["-", "✓", "✓"] },
          { label: "Ransomware protection", values: ["-", "✓", "✓"] },
          { label: "Onboarding and monitoring by Fortinet", values: ["-", "-", "✓"] },
        ],
      },
    ],
    source: "Source: FortiClient EMS administration guide (licensing) and FortiClient ordering guide. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiClient\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Per endpoint or per user licensing?",
        answer: "Both are available, but one FortiClient EMS uses one model. Per endpoint suits shared or fixed devices. Per user suits staff with a laptop, phone and tablet each.",
      },
      {
        question: "Can we buy different quantities of EPP and ZTNA?",
        answer: "Yes. For example, 100 EPP licences and 200 ZTNA licences. EMS applies a licence to each endpoint based on the features in its profile.",
      },
      {
        question: "Is the free FortiClient VPN app enough?",
        answer: "The free app connects to a FortiGate VPN but has no central management, zero trust posture checks, endpoint protection or Fortinet support. Licensed FortiClient adds all four.",
      },
      {
        question: "Do we need FortiClient EMS on a server?",
        answer: "No. EMS can run on your own Windows server or as FortiClient Cloud, hosted by Fortinet. We recommend the option that fits your team and compliance needs.",
      },
      {
        question: "How does FortiClient work with FortiSASE?",
        answer: "The same FortiClient agent connects users to FortiSASE when you add a FortiSASE licence. There is no second agent to deploy.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We set up EMS, build profiles, roll out the agent in phases and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiEDR", text: "Endpoint detection and response", image: `${IMG}/fortinet-fortiedr-card.webp`, href: `${EPS_STORE}/fortiedr` },
      { title: "FortiDLP", text: "Data loss prevention", image: `${IMG}/fortinet-fortidlp-card.webp`, href: `${EPS_STORE}/fortidlp` },
      { title: "FortiSASE", text: "Secure access service edge", image: `${IMG}/fortinet-fortisase-card.webp`, href: `${EPS_STORE}/fortisase` },
    ],
  },
  enquiryTabs: epsEnquiry({
    page: "forticlient",
    product: "FortiClient",
    heading: "Get a quote\n for FortiClient",
    highlightLast: 2,
    products: ["FortiClient", "FortiClient VPN/ZTNA", "FortiClient VPN/ZTNA and EPP/APT", "FortiClient Managed", "FortiSASE add-on"],
  }),
  footNote: epsFootNote("FortiClient"),
};
