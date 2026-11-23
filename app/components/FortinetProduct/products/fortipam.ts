import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { ZTA_IMG as IMG, ZTA_STORE, ztaCrumbs, ztaBadge, ztaHeroButtons, ztaQuals, ztaOptionLink, ztaEnquiry, ztaFootNote } from "./zero-trust-shared";

// Generated from 05-Zero-Trust-Access/product-pages/fortipam.html
export const fortipam: LogitechProductData = {
  slug: "fortipam",
  seo: {
    title: "FortiPAM in Dubai | Fortinet Partner | GS IT",
    description: "FortiPAM from GS IT, a Fortinet Authorized Partner in Dubai. Vaults admin passwords and records every privileged session. Licensing, deployment and support.",
    ogTitle: "FortiPAM in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Privileged access management that vaults admin credentials, controls who can use them, and records every privileged session across servers, network devices and databases.",
  },
  name: "FortiPAM",
  image: `${IMG}/fortinet-fortipam-card.webp`,
  quals: ztaQuals,
  heroData: {
    crumbs: ztaCrumbs("FortiPAM"),
    gallery: [{ src: `${IMG}/fortinet-fortipam-card.webp`, alt: "FortiPAM, Fortinet privileged access management" }],
    badge: ztaBadge,
    tag: "Privileged access management",
    heading: "FortiPAM\n privileged access management",
    highlightLast: 3,
    description: "Privileged access management that vaults admin credentials, controls who can use them, and records every privileged session across servers, network devices and databases.",
    pills: ["VM, appliance or cloud", "Session recording", "ZTNA integration"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Privileged access management" },
      { label: "Licensed by", value: "User seats" },
      { label: "Deployment", value: "VM, FPA-1000G, FPA-3000G or public cloud" },
      { label: "VM subscription includes", value: "FortiCare Premium, Advanced Malware Protection, FortiClient agent" },
      { label: "High availability", value: "Active and standby" },
      { label: "Integrates with", value: "FortiAuthenticator, FortiToken, FortiClient EMS, FortiAnalyzer" },
    ],
    aboutTitle: "About FortiPAM",
    about: [
      { label: "Vault", text: "admins connect without seeing the password, and it changes after each use" },
      { label: "Control", text: "role-based access and approval workflows for each secret" },
      { label: "Record", text: "session monitoring and recording, including keystrokes and video" },
      { label: "Zero trust", text: "FortiClient EMS checks the device before it can reach FortiPAM" },
    ],
    buttons: ztaHeroButtons("FortiPAM"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiPAM",
    highlightLast: 1,
    subhead: "The VM is an annual subscription bought per user seat, in tiers. Hardware appliances include a set number of users.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FC1-10-PAVUL-591",
            name: "VM subscription, 5 to 9 users",
            desc: "Per-seat annual subscription for small admin teams.",
            points: ["FortiCare Premium included", "Advanced Malware Protection included", "1, 3 or 5 year terms"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("VM subscription, 5 to 9 users", "FC1-10-PAVUL-591"),
          },
          {
            tag: "FC2 to FC5-10-PAVUL-591",
            name: "VM subscription, 10 to 249 users",
            desc: "Larger seat tiers for growing teams, ordered per user.",
            points: ["FC2: 10 to 24, FC3: 25 to 49", "FC4: 50 to 99, FC5: 100 to 249", "HA needs seats on the backup unit"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("VM subscription, 10 to 249 users", "FC2 to FC5-10-PAVUL-591"),
          },
          {
            tag: "FPA-1000G",
            name: "FortiPAM 1000G appliance",
            desc: "Hardware appliance including user licensing for up to 50 users.",
            points: ["6x 2 TB storage", "5,000 secrets", "FortiCare sold separately"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiPAM 1000G appliance", "FPA-1000G"),
          },
          {
            tag: "FPA-3000G",
            name: "FortiPAM 3000G appliance",
            desc: "Hardware appliance including user licensing for up to 100 users.",
            points: ["6x 6 TB storage", "10,000 secrets", "FortiCare sold separately"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiPAM 3000G appliance", "FPA-3000G"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiPAM\n does for you",
    highlightLast: 3,
    subhead: "FortiPAM is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Credential vault",
        description: "Passwords, SSH keys and API tokens are stored in a vault. Admins check them out without seeing them.",
      },
      {
        icon: "<path d=\"M4 8h14l-3-3M20 16H6l3 3\"/>",
        title: "Automatic password rotation",
        description: "Passwords change after check-in and on a schedule, so a leaked password stops working.",
      },
      {
        icon: "<path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Session recording",
        description: "Every privileged session is recorded with keystrokes and video, and can be watched live.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Approval workflows",
        description: "Access to sensitive secrets can require approval before the session starts.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Dangerous command blocking",
        description: "SSH filtering blocks risky commands before they run.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Account discovery",
        description: "Finds privileged accounts across IT and OT systems and brings them under management.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiPAM\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiPAM suits any organisation where admin passwords are shared, rarely changed or used by outside vendors. It removes standing access to critical systems and gives auditors a full record of who did what, and when.",
      "GS IT sizes the licence, designs the policies, deploys FortiPAM with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "Video", label: "and keystroke session recording" },
      { value: "Auto", label: "password rotation after each use", dark: true },
      { value: "5 to 249", label: "VM seat tiers" },
      { value: "HA", label: "active and standby" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiPAM\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "VM sizing by seat tier",
        columns: ["Tier", "Seats", "vCPUs", "Memory", "Log disk", "Video disk"],
        rows: [
          { label: "FC1-10-PAVUL-591", values: ["Under 10", "2", "8 GB", "20 GB", "150 GB"] },
          { label: "FC2-10-PAVUL-591", values: ["Under 25", "4", "8 GB", "40 GB", "300 GB"] },
          { label: "FC3-10-PAVUL-591", values: ["Under 50", "4", "8 GB", "100 GB", "500 GB"] },
          { label: "FC4-10-PAVUL-591", values: ["Under 100", "8", "16 GB", "200 GB", "1 TB"] },
          { label: "FC5-10-PAVUL-591", values: ["Under 250", "16", "16 GB", "400 GB", "1 TB"] },
        ],
      },
      {
        title: "Hardware appliances",
        columns: ["Specification", "FPA-1000G", "FPA-3000G"],
        rows: [
          { label: "Users included", values: ["50", "100"] },
          { label: "Secrets", values: ["5,000", "10,000"] },
          { label: "Folders", values: ["2,000", "6,000"] },
          { label: "Secret requests", values: ["5,000", "10,000"] },
          { label: "Storage", values: ["6x 2 TB HDD", "6x 6 TB HDD"] },
          { label: "GE RJ45 ports", values: ["4", "4"] },
          { label: "SFP ports", values: ["4", "6"] },
          { label: "Power", values: ["300 W, optional redundant", "300 W, optional redundant"] },
        ],
      },
    ],
    source: "Source: FortiPAM data sheet, ordering guide and administration guide (VM requirements). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiPAM\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "How is FortiPAM licensed?",
        answer: "The VM is an annual subscription ordered per user seat, in tiers. For example, 23 users means 23 seats at the 10 to 24 tier. The subscription includes FortiCare Premium and Advanced Malware Protection. Hardware appliances include 50 or 100 users.",
      },
      {
        question: "What does high availability need?",
        answer: "A second unit with the same number of user seats licensed on the backup. We include both in the quote if you need HA.",
      },
      {
        question: "Do admins need an agent on their PC?",
        answer: "The VM subscription includes the FortiClient agent for FortiPAM, which also enables ZTNA device checks. Fortinet also offers agentless access for some connections.",
      },
      {
        question: "Can vendors use FortiPAM for remote access?",
        answer: "Yes. Vendors get approved, time-limited access to specific systems through FortiPAM, without ever receiving the password, and every session is recorded.",
      },
      {
        question: "How much storage do recordings need?",
        answer: "It depends on how many sessions you record and how long you keep them. Fortinet recommends from 150 GB of video disk for the smallest tier up to 1 TB for larger ones. We size storage to your retention policy.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We discover your privileged accounts, design the vault and approval rules, onboard admins and vendors, and support FortiPAM after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiNAC", text: "Network access control", image: `${IMG}/fortinet-fortinac-card.webp`, href: `${ZTA_STORE}/fortinac` },
      { title: "FortiAuthenticator", text: "Identity and single sign-on", image: `${IMG}/fortinet-fortiauthenticator-card.webp`, href: `${ZTA_STORE}/fortiauthenticator` },
      { title: "FortiToken Mobile", text: "Multi-factor authentication", image: `${IMG}/fortinet-fortitoken-mobile-card.webp`, href: `${ZTA_STORE}/fortitoken-mobile` },
    ],
  },
  enquiryTabs: ztaEnquiry({
    page: "fortipam",
    product: "FortiPAM",
    heading: "Get a quote\n for FortiPAM",
    highlightLast: 2,
    products: ["FortiPAM", "VM subscription, 5 to 9 users", "VM subscription, 10 to 249 users", "FortiPAM 1000G appliance", "FortiPAM 3000G appliance"],
  }),
  footNote: ztaFootNote("FortiPAM"),
};
