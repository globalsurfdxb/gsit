import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { ZTA_IMG as IMG, ZTA_STORE, ztaCrumbs, ztaBadge, ztaHeroButtons, ztaQuals, ztaOptionLink, ztaEnquiry, ztaFootNote } from "./zero-trust-shared";

// Generated from 05-Zero-Trust-Access/product-pages/fortinac.html
export const fortinac: LogitechProductData = {
  slug: "fortinac",
  seo: {
    title: "FortiNAC in Dubai | Fortinet Partner | GS IT",
    description: "FortiNAC from GS IT, a Fortinet partner in Dubai. See every device on your network and control what it can reach. Licensing, deployment and support.",
    ogTitle: "FortiNAC in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Network access control that identifies every device on your wired and wireless network, decides what it can reach, and responds automatically when one misbehaves.",
  },
  name: "FortiNAC",
  image: `${IMG}/fortinet-fortinac-card.webp`,
  quals: ztaQuals,
  heroData: {
    crumbs: ztaCrumbs("FortiNAC"),
    gallery: [{ src: `${IMG}/fortinet-fortinac-card.webp`, alt: "FortiNAC, Fortinet network access control" }],
    badge: ztaBadge,
    tag: "Network access control",
    heading: "FortiNAC\n network access control",
    highlightLast: 3,
    description: "Network access control that identifies every device on your wired and wireless network, decides what it can reach, and responds automatically when one misbehaves.",
    pills: ["Plus and Pro licences", "Appliance or VM", "Works with third-party switches"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Product", value: "FortiNAC-F" },
      { label: "Category", value: "Network access control" },
      { label: "Licensed by", value: "Concurrent endpoints" },
      { label: "Licence levels", value: "Plus, Pro" },
      { label: "Deployment", value: "Hardware appliance or VM" },
      { label: "VM platforms", value: "VMware, Hyper-V, KVM, AWS, Azure" },
    ],
    aboutTitle: "About FortiNAC",
    about: [
      { label: "See", text: "profiles and classifies every device, including headless IoT that cannot run an agent" },
      { label: "Control", text: "dynamic VLAN steering and segmentation on Fortinet and third-party switches and wireless" },
      { label: "Respond", text: "the Pro licence isolates a compromised device automatically when your security tools raise an alert" },
      { label: "Scale", text: "FortiNAC Manager shares endpoint licences across several FortiNAC servers" },
    ],
    buttons: ztaHeroButtons("FortiNAC"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiNAC",
    highlightLast: 1,
    subhead: "You need a FortiNAC server, physical or virtual, plus endpoint licences at Plus or Pro level. We size the endpoint count from your device inventory.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FNC-CAX-VM",
            name: "FortiNAC Control and Application VM",
            desc: "The FortiNAC server as a virtual appliance, running FortiNAC-OS.",
            points: ["VMware, Hyper-V, KVM, AWS or Azure", "Add endpoint licences to activate", "FortiCare for the VM sold separately"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiNAC Control and Application VM", "FNC-CAX-VM"),
          },
          {
            tag: "LIC-FNAC-PLUS",
            name: "FortiNAC Plus licence",
            desc: "Perpetual licence for device registration, scanning and access control.",
            points: ["Packs from 100 concurrent endpoints", "Includes all Base visibility features", "FortiCare per pack, matched to quantity"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiNAC Plus licence", "LIC-FNAC-PLUS"),
          },
          {
            tag: "LIC-FNAC-PRO",
            name: "FortiNAC Pro licence",
            desc: "Everything in Plus, with automated threat response.",
            points: ["Packs from 100 concurrent endpoints", "Isolates compromised devices automatically", "FortiCare per pack, matched to quantity"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiNAC Pro licence", "LIC-FNAC-PRO"),
          },
          {
            tag: "FC-10-FNAC1",
            name: "FortiNAC subscription",
            desc: "Plus or Pro as a term subscription, with FortiCare 24x7 included.",
            points: ["1 to 5 year terms", "Endpoint tier set by the SKU", "No separate endpoint FortiCare"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiNAC subscription", "FC-10-FNAC1"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiNAC\n does for you",
    highlightLast: 3,
    subhead: "FortiNAC is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Device discovery and profiling",
        description: "Scans the network to find and classify every device, so you have a live inventory instead of a spreadsheet.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Automated onboarding",
        description: "Staff, guest and BYOD devices register themselves through a portal, without a ticket to IT.",
      },
      {
        icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
        title: "Dynamic segmentation",
        description: "Places each device in the right VLAN or segment by type and owner, and moves it if its profile changes.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Works with your existing network",
        description: "Changes configuration on switches and wireless from more than 70 vendors, not only Fortinet.",
      },
      {
        icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
        title: "Automated threat response",
        description: "With Pro, an alert from your FortiGate or SIEM can trigger isolation of the device in seconds.",
      },
      {
        icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
        title: "Reporting and SIEM",
        description: "Sends events with device and user context to your SIEM, with built-in reports for audits.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiNAC\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiNAC suits any network with devices IT does not manage: cameras, printers, medical and building systems, guest laptops and personal phones. It shows you what is connected, keeps each type in its own segment and removes the manual work of onboarding.",
      "GS IT sizes the licence, designs the policies, deploys FortiNAC with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Plus or Pro", label: "licence levels" },
      { value: "70+", label: "switch and wireless vendors", dark: true },
      { value: "Concurrent", label: "endpoints licensed, not every device ever seen" },
      { value: "5", label: "VM platforms supported" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiNAC\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Plus and Pro compared",
        columns: ["Capability", "Plus", "Pro"],
        rows: [
          { label: "Network discovery, profiling and classification", values: ["✓", "✓"] },
          { label: "Host registration and onboarding", values: ["✓", "✓"] },
          { label: "Device scanning", values: ["✓", "✓"] },
          { label: "Access control and segmentation", values: ["✓", "✓"] },
          { label: "Automated threat response (security incidents)", values: ["-", "✓"] },
          { label: "High availability", values: ["✓", "✓"] },
        ],
      },
    ],
    source: "Source: FortiNAC administration guide (licensing) and FortiNAC data sheet. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiNAC\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between FortiNAC Plus and Pro?",
        answer: "Plus covers device discovery, registration, scanning and access control. Pro adds automated threat response, so FortiNAC can isolate a device when your FortiGate or SIEM reports an incident. Both include high availability.",
      },
      {
        question: "What does concurrent endpoints mean?",
        answer: "It is the number of hosts, servers and devices online on your network at the same time, not every device FortiNAC has ever seen. We size the licence from your peak device count with room to grow.",
      },
      {
        question: "Perpetual licence or subscription?",
        answer: "Perpetual licences are bought once, with FortiCare purchased for each endpoint pack. Subscriptions bundle the licence and FortiCare 24x7 for a 1 to 5 year term. We price both so you can compare.",
      },
      {
        question: "Does FortiNAC need a FortiGate?",
        answer: "No. FortiNAC works with switches and wireless from many vendors. With a FortiGate it can also share device identity with firewall policy and act on FortiGate alerts.",
      },
      {
        question: "We run an older FortiNAC. Do we need to migrate?",
        answer: "The current FortiNAC-F runs on FortiNAC-OS. Older CentOS-based FortiNAC servers need an appliance migration to move to FortiNAC-F. We plan and carry out the migration.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We build the device inventory, design the segments, deploy FortiNAC in monitor mode first, then enforce and support it. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Complete your\n zero trust access",
    highlightLast: 3,
    subhead: "The other products in Fortinet zero trust access.",
    linkLabel: "View product",
    columns: 3,
    items: [
      { title: "FortiAuthenticator", text: "Identity and single sign-on", image: `${IMG}/fortinet-fortiauthenticator-card.webp`, href: `${ZTA_STORE}/fortiauthenticator` },
      { title: "FortiToken Mobile", text: "Multi-factor authentication", image: `${IMG}/fortinet-fortitoken-mobile-card.webp`, href: `${ZTA_STORE}/fortitoken-mobile` },
      { title: "FortiPAM", text: "Privileged access management", image: `${IMG}/fortinet-fortipam-card.webp`, href: `${ZTA_STORE}/fortipam` },
    ],
  },
  enquiryTabs: ztaEnquiry({
    page: "fortinac",
    product: "FortiNAC",
    heading: "Get a quote\n for FortiNAC",
    highlightLast: 2,
    products: ["FortiNAC", "FortiNAC Control and Application VM", "FortiNAC Plus licence", "FortiNAC Pro licence", "FortiNAC subscription"],
  }),
  footNote: ztaFootNote("FortiNAC"),
};
