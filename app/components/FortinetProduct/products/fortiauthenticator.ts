import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { ZTA_IMG as IMG, ZTA_STORE, ztaCrumbs, ztaBadge, ztaHeroButtons, ztaQuals, ztaOptionLink, ztaEnquiry, ztaFootNote } from "./zero-trust-shared";

// Generated from 05-Zero-Trust-Access/product-pages/fortiauthenticator.html
export const fortiauthenticator: LogitechProductData = {
  slug: "fortiauthenticator",
  seo: {
    title: "FortiAuthenticator in Dubai | Fortinet Partner | GS IT",
    description: "FortiAuthenticator from GS IT, a Fortinet partner in Dubai. MFA, single sign-on and 802.1X from one identity server. Licensing, deployment and support.",
    ogTitle: "FortiAuthenticator in Dubai | Fortinet Partner | GS IT",
    ogDescription: "Central authentication for VPN, Wi-Fi, network devices and cloud apps, with multi-factor authentication, single sign-on and a built-in certificate authority.",
  },
  name: "FortiAuthenticator",
  image: `${IMG}/fortinet-fortiauthenticator-card.webp`,
  quals: ztaQuals,
  heroData: {
    crumbs: ztaCrumbs("FortiAuthenticator"),
    gallery: [{ src: `${IMG}/fortinet-fortiauthenticator-card.webp`, alt: "FortiAuthenticator, Fortinet identity and single sign-on" }],
    badge: ztaBadge,
    tag: "Identity and single sign-on",
    heading: "FortiAuthenticator\n identity and single sign-on",
    highlightLast: 4,
    description: "Central authentication for VPN, Wi-Fi, network devices and cloud apps, with multi-factor authentication, single sign-on and a built-in certificate authority.",
    pills: ["VM or hardware", "Subscription or perpetual", "MFA, SSO and 802.1X"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "Identity and access management" },
      { label: "Licensed by", value: "Users" },
      { label: "Deployment", value: "VM or hardware appliance" },
      { label: "Protocols", value: "RADIUS, TACACS+, LDAP, SAML, OAuth2, OIDC" },
      { label: "MFA methods", value: "FortiToken, SMS and email OTP, FIDO2" },
      { label: "Provisioning", value: "SCIM" },
    ],
    aboutTitle: "About FortiAuthenticator",
    about: [
      { label: "MFA", text: "adds a second factor to VPN, Wi-Fi, admin portals and cloud apps" },
      { label: "SSO", text: "acts as a SAML identity provider and OAuth2 or OpenID Connect provider for web apps" },
      { label: "Network", text: "RADIUS, TACACS+ and 802.1X for switches, wireless and VPN" },
      { label: "Certificates", text: "built-in certificate authority for certificate-based VPN and Wi-Fi" },
    ],
    buttons: ztaHeroButtons("FortiAuthenticator"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiAuthenticator",
    highlightLast: 1,
    subhead: "FortiAuthenticator runs as a VM or on a hardware appliance. The VM can be bought as a subscription or as a perpetual licence with user upgrades.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FC1-10-ACVMS-1268",
            name: "VM subscription, 100 to 999 users",
            desc: "Term subscription with FortiCare Elite included. Introduced with FortiAuthenticator 8.0.",
            points: ["1, 3 or 5 year terms", "FC2 tier: 1,000 to 99,999 users", "FC3 tier: 100,000+ users"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("VM subscription, 100 to 999 users", "FC1-10-ACVMS-1268"),
          },
          {
            tag: "FAC-VM",
            name: "VM perpetual licence",
            desc: "Base VM licence with stackable user upgrades, plus FortiCare by user tier.",
            points: ["Upgrades: FAC-VM-100-UG, 1000-UG, 10000-UG", "FortiCare tiers from 1 to 500 users", "Runs on common hypervisors and clouds"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("VM perpetual licence", "FAC-VM"),
          },
          {
            tag: "FAC hardware",
            name: "FortiAuthenticator appliance",
            desc: "A dedicated appliance for sites that prefer hardware.",
            points: ["User upgrades available", "FortiCare per appliance", "High availability pairs supported"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("FortiAuthenticator appliance", "FAC hardware"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiAuthenticator\n does for you",
    highlightLast: 3,
    subhead: "FortiAuthenticator is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "Multi-factor authentication",
        description: "FortiToken Mobile push, hardware tokens, SMS or email OTP, and FIDO2 passwordless sign-in.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M3 9h18\"/>",
        title: "Single sign-on",
        description: "SAML identity provider, OAuth2 and OpenID Connect, so users sign in once for Microsoft 365 and web apps.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "RADIUS, TACACS+ and LDAP",
        description: "One authentication point for VPN, switches, wireless controllers and network admin logins.",
      },
      {
        icon: "<path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "802.1X for wired and Wi-Fi",
        description: "Certificate and credential-based network access, including EAP-TLS with Entra ID users and groups.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"9\" r=\"5\"/><path d=\"M9 13.5L8 21l4-2 4 2-1-7.5\"/>",
        title: "Certificate authority",
        description: "Issue and manage certificates for VPN and Wi-Fi, with SCEP enrolment.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
        title: "Fortinet Single Sign-On",
        description: "Tells your FortiGate who is behind each IP address, so firewall policy can follow the user.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiAuthenticator\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiAuthenticator suits organisations that want one place to control sign-in across the network and their apps, without a separate cloud identity subscription. It sits alongside Active Directory or Entra ID and adds MFA, SSO and certificates on top.",
      "GS IT sizes the licence, designs the policies, deploys FortiAuthenticator with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "MFA", label: "push, OTP, SMS, email and FIDO2" },
      { value: "SAML", label: "identity provider and service provider", dark: true },
      { value: "802.1X", label: "wired and wireless" },
      { value: "VM or HW", label: "deployment" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiAuthenticator\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "VM capacity by licence",
        columns: ["Capacity", "Base VM", "100-user upgrade", "1,000-user upgrade", "10,000-user upgrade", "100,000-user upgrade"],
        rows: [
          { label: "Local and remote users, user certificates", values: ["100", "+100", "+1,000", "+10,000", "+100,000"] },
          { label: "NAS devices", values: ["33", "+33", "+333", "+3,333", "+33,333"] },
          { label: "User groups", values: ["10", "+10", "+100", "+1,000", "+10,000"] },
          { label: "CA certificates", values: ["5", "+5", "+50", "+500", "+500"] },
        ],
      },
    ],
    source: "Source: FortiAuthenticator data sheet, ordering guide and VM install guide (licensing). Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiAuthenticator\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Subscription or perpetual VM licence?",
        answer: "From FortiAuthenticator 8.0, the VM can be licensed as a subscription by user tier, with FortiCare Elite included. The perpetual option is a base VM licence with stackable user upgrades and FortiCare bought by user tier. We price both.",
      },
      {
        question: "Does FortiAuthenticator replace Active Directory?",
        answer: "No. It works with Active Directory, Entra ID or LDAP as the source of users, and adds MFA, single sign-on, RADIUS and certificates on top.",
      },
      {
        question: "Can it add MFA to Microsoft 365?",
        answer: "Yes. FortiAuthenticator can act as a SAML identity provider for Microsoft 365 and other web apps, so users sign in through it with a second factor.",
      },
      {
        question: "Do we need FortiAuthenticator to use FortiToken Mobile?",
        answer: "No. FortiToken Mobile can be registered to a FortiGate for VPN and admin MFA. FortiAuthenticator is the right choice when you also need MFA for Wi-Fi, network devices, cloud apps or SSO.",
      },
      {
        question: "Can developers add MFA to our own apps?",
        answer: "Yes. FortiAuthenticator has a REST API for adding MFA to custom web applications.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We integrate FortiAuthenticator with your directory, FortiGate and apps, enrol users in phases and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiToken Mobile", text: "Multi-factor authentication", image: `${IMG}/fortinet-fortitoken-mobile-card.webp`, href: `${ZTA_STORE}/fortitoken-mobile` },
      { title: "FortiPAM", text: "Privileged access management", image: `${IMG}/fortinet-fortipam-card.webp`, href: `${ZTA_STORE}/fortipam` },
    ],
  },
  enquiryTabs: ztaEnquiry({
    page: "fortiauthenticator",
    product: "FortiAuthenticator",
    heading: "Get a quote\n for FortiAuthenticator",
    highlightLast: 2,
    products: ["FortiAuthenticator", "VM subscription, 100 to 999 users", "VM perpetual licence", "FortiAuthenticator appliance"],
  }),
  footNote: ztaFootNote("FortiAuthenticator"),
};
