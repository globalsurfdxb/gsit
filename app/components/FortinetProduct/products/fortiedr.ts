import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { EPS_IMG as IMG, EPS_STORE, epsCrumbs, epsBadge, epsHeroButtons, epsQuals, epsOptionLink, epsEnquiry, epsFootNote } from "./endpoint-sase-shared";

// Generated from 06-Endpoint-Data-and-SASE/product-pages/fortiedr.html
export const fortiedr: LogitechProductData = {
  slug: "fortiedr",
  seo: {
    title: "FortiEDR in Dubai | Fortinet Partner | GS IT",
    description: "FortiEDR from GS IT, a Fortinet Authorized Partner in Dubai. Stops threats at execution and contains them automatically. Licensing, deployment and support.",
    ogTitle: "FortiEDR in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Endpoint detection and response that stops threats at the moment of execution and contains them automatically, on workstations, servers and OT systems.",
  },
  name: "FortiEDR",
  image: `${IMG}/fortinet-fortiedr-card.webp`,
  quals: epsQuals,
  heroData: {
    crumbs: epsCrumbs("FortiEDR"),
    gallery: [{ src: `${IMG}/fortinet-fortiedr-card.webp`, alt: "FortiEDR, Fortinet endpoint detection and response" }],
    badge: epsBadge,
    tag: "Endpoint detection and response",
    heading: "FortiEDR\n endpoint detection and response",
    highlightLast: 4,
    description: "Endpoint detection and response that stops threats at the moment of execution and contains them automatically, on workstations, servers and OT systems.",
    pills: ["Cloud, hybrid or on-premises", "Optional MDR", "IT and OT endpoints"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Endpoint detection and response" },
      { label: "Licensed by", value: "Endpoint, in packs of 25" },
      { label: "Tiers", value: "Discover and Protect; Discover, Protect and Respond" },
      { label: "Services", value: "XDR, MDR, Managed XDR" },
      { label: "Deployment", value: "Cloud, hybrid or on-premises" },
      { label: "Platforms", value: "Windows, macOS, Linux, legacy and OT systems" },
    ],
    aboutTitle: "About FortiEDR",
    about: [
      { label: "Discover", text: "finds rogue devices, IoT and applications, and their vulnerabilities" },
      { label: "Protect", text: "behavioural engine blocks malicious activity at execution" },
      { label: "Respond", text: "playbook-based incident response tailored to each endpoint group" },
      { label: "OT", text: "designed to keep running on OT systems during an incident" },
    ],
    buttons: epsHeroButtons("FortiEDR"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiEDR",
    highlightLast: 1,
    subhead: "Licensed per endpoint in packs of 25, on 1 to 5 year terms. Pick the tier, then decide whether your team or Fortinet watches the alerts.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "Discover and Protect",
            name: "FortiEDR Discover and Protect",
            desc: "Endpoint protection with asset discovery and attack surface reduction.",
            points: ["Also called EPP or EDR-Light", "Behavioural prevention", "Application control"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiEDR Discover and Protect", "Discover and Protect"),
          },
          {
            tag: "Discover, Protect and Respond",
            name: "FortiEDR Discover, Protect and Respond",
            desc: "Full EDR with automated, playbook-based incident response.",
            points: ["Automated containment", "Remediation after a detection", "Optional XDR across the Fabric"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiEDR Discover, Protect and Respond", "Discover, Protect and Respond"),
          },
          {
            tag: "FC1-10-FEDR1-349",
            name: "FortiEDR with Standard MDR",
            desc: "Discover, Protect and Respond, with Fortinet analysts monitoring alerts 24x7.",
            points: ["25-endpoint pack", "Includes FortiCare 24x7", "1 to 5 year terms"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiEDR with Standard MDR", "FC1-10-FEDR1-349"),
          },
          {
            tag: "FC1-10-FEDR1-597",
            name: "FortiEDR with Managed XDR",
            desc: "Discover, Protect and Respond, with Fortinet managing detection across your Fabric.",
            points: ["25-endpoint pack", "Cross-product correlation", "For teams without a SOC"],
            enquireLabel: "Enquire about this option",
            href: epsOptionLink("FortiEDR with Managed XDR", "FC1-10-FEDR1-597"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiEDR\n does for you",
    highlightLast: 3,
    subhead: "FortiEDR is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Real-time prevention",
        description: "Blocks malicious behaviour at execution, including ransomware, before damage is done.",
      },
      {
        icon: "<path d=\"M4 8h14l-3-3M20 16H6l3 3\"/>",
        title: "Automated response",
        description: "Pre-set playbooks contain the device and remediate changes, tuned by asset value and group.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Asset discovery",
        description: "Finds rogue devices, IoT and applications, with their known vulnerabilities.",
      },
      {
        icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
        title: "Attack surface reduction",
        description: "Application control and risk-based policies cut what attackers can use.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Works across the Fabric",
        description: "Shares detections with FortiGate, FortiAnalyzer and FortiSandbox.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Managed detection",
        description: "Optional MDR or Managed XDR puts Fortinet analysts on your alerts 24x7.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiEDR\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiEDR suits organisations that need to stop ransomware that slips past antivirus, and to keep running while an incident is handled. It covers modern and legacy systems, including OT, and can be fully managed by Fortinet if you have no SOC.",
      "GS IT sizes the licence, designs the policies, deploys FortiEDR with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "2026", label: "AV-Comparatives EDR certification" },
      { value: "4 years", label: "Gartner Peer Insights Customers’ Choice, 2023 to 2026", dark: true },
      { value: "25", label: "endpoint packs" },
      { value: "3", label: "deployment options" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiEDR\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Tiers compared",
        columns: ["Capability", "Discover and Protect", "Discover, Protect and Respond", "With XDR"],
        rows: [
          { label: "Asset discovery and assessment", values: ["✓", "✓", "✓"] },
          { label: "Attack surface reduction and application control", values: ["✓", "✓", "✓"] },
          { label: "Behavioural protection at execution", values: ["✓", "✓", "✓"] },
          { label: "Automated incident response", values: ["-", "✓", "✓"] },
          { label: "Cross-Fabric detection and response", values: ["-", "-", "✓"] },
        ],
      },
      {
        title: "Managed services",
        columns: ["Service", "What Fortinet does"],
        rows: [
          { label: "Standard MDR", values: ["Monitors and triages FortiEDR alerts 24x7"] },
          { label: "Managed XDR", values: ["Detection and response across FortiEDR and the wider Security Fabric"] },
        ],
      },
    ],
    source: "Source: FortiEDR data sheet, fortinet.com product page and distributor SKU listings. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiEDR\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How is FortiEDR different from antivirus?",
        answer: "Antivirus looks for known threats. FortiEDR watches behaviour at execution, so it can stop an unknown attack mid-way, contain the device and remediate what changed.",
      },
      {
        question: "Which tier do we need?",
        answer: "Discover and Protect suits teams that want prevention with asset visibility. Discover, Protect and Respond adds automated incident response, which most organisations choose for ransomware protection.",
      },
      {
        question: "What does MDR add?",
        answer: "With Standard MDR, Fortinet analysts monitor and triage your FortiEDR alerts 24x7. Managed XDR extends that across your wider Fortinet Security Fabric.",
      },
      {
        question: "Can it run on-premises?",
        answer: "Yes. FortiEDR can be deployed as cloud, hybrid or on-premises, which helps where data must stay in the UAE.",
      },
      {
        question: "Will it slow down OT or legacy systems?",
        answer: "FortiEDR is built to run on current and legacy operating systems, including manufacturing and OT systems. We pilot on representative machines before roll-out.",
      },
      {
        question: "Do you deploy and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We deploy in monitor mode first, tune policies, then enforce, and support FortiEDR after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiDLP", text: "Data loss prevention", image: `${IMG}/fortinet-fortidlp-card.webp`, href: `${EPS_STORE}/fortidlp` },
      { title: "FortiSASE", text: "Secure access service edge", image: `${IMG}/fortinet-fortisase-card.webp`, href: `${EPS_STORE}/fortisase` },
    ],
  },
  enquiryTabs: epsEnquiry({
    page: "fortiedr",
    product: "FortiEDR",
    heading: "Get a quote\n for FortiEDR",
    highlightLast: 2,
    products: ["FortiEDR", "FortiEDR Discover and Protect", "FortiEDR Discover, Protect and Respond", "FortiEDR with Standard MDR", "FortiEDR with Managed XDR"],
  }),
  footNote: epsFootNote("FortiEDR"),
};
