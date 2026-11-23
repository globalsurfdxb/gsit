import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { ZTA_IMG as IMG, ZTA_STORE, ztaCrumbs, ztaBadge, ztaHeroButtons, ztaQuals, ztaOptionLink, ztaEnquiry, ztaFootNote } from "./zero-trust-shared";

// Generated from 05-Zero-Trust-Access/product-pages/fortitoken-mobile.html
export const fortitokenMobile: LogitechProductData = {
  slug: "fortitoken-mobile",
  seo: {
    title: "FortiToken Mobile in Dubai | Fortinet Partner | GS IT",
    description: "FortiToken Mobile from GS IT, a Fortinet partner in Dubai. One-tap push MFA on staff phones, with perpetual licences. Licensing, deployment and support.",
    ogTitle: "FortiToken Mobile in Dubai | Fortinet Partner | GS IT",
    ogDescription: "A one-time password and push approval app that turns staff phones into secure tokens, so a stolen password alone no longer opens your VPN or apps.",
  },
  name: "FortiToken Mobile",
  image: `${IMG}/fortinet-fortitoken-mobile-card.webp`,
  quals: ztaQuals,
  heroData: {
    crumbs: ztaCrumbs("FortiToken Mobile"),
    gallery: [{ src: `${IMG}/fortinet-fortitoken-mobile-card.webp`, alt: "FortiToken Mobile, Fortinet multi-factor authentication" }],
    badge: ztaBadge,
    tag: "Multi-factor authentication",
    heading: "FortiToken\n Mobile",
    highlightLast: 1,
    description: "A one-time password and push approval app that turns staff phones into secure tokens, so a stolen password alone no longer opens your VPN or apps.",
    pills: ["Perpetual licence", "iOS, Android and Windows", "Push and OTP"],
    meta: [
      { label: "Brand", value: "Fortinet" },
      { label: "Category", value: "MFA software token" },
      { label: "Licence", value: "Perpetual, per user" },
      { label: "Pack sizes", value: "5 to 10,000 users" },
      { label: "Platforms", value: "iOS, Android, Windows" },
      { label: "Standards", value: "OATH TOTP and HOTP" },
      { label: "Managed from", value: "FortiGate or FortiAuthenticator" },
    ],
    aboutTitle: "About FortiToken Mobile",
    about: [
      { label: "Push", text: "approve or deny a sign-in with one tap, with the login details shown on the phone" },
      { label: "OTP", text: "time-based and event-based one-time passwords when push is not available" },
      { label: "Secure", text: "token seeds are provisioned through FortiGuard" },
      { label: "Perpetual", text: "one purchase per user, with unlimited device transfers and no annual fee" },
    ],
    buttons: ztaHeroButtons("FortiToken Mobile"),
  },
  modelsData: {
    tag: "Licensing options",
    heading: "How to buy\n FortiToken Mobile",
    highlightLast: 2,
    subhead: "Licences are sold in packs and registered to one FortiGate or FortiAuthenticator. Larger packs cost less per user.",
    groups: [
      {
        label: "Licensing options",
        models: [
          {
            tag: "FTM-ELIC-5",
            name: "5-user pack",
            desc: "For a pilot or a very small team.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("5-user pack", "FTM-ELIC-5"),
          },
          {
            tag: "FTM-ELIC-10",
            name: "10-user pack",
            desc: "For a small office or branch.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("10-user pack", "FTM-ELIC-10"),
          },
          {
            tag: "FTM-ELIC-25",
            name: "25-user pack",
            desc: "For a growing team or department.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("25-user pack", "FTM-ELIC-25"),
          },
          {
            tag: "FTM-ELIC-50",
            name: "50-user pack",
            desc: "For a mid-size office or several branches.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("50-user pack", "FTM-ELIC-50"),
          },
          {
            tag: "FTM-ELIC-100",
            name: "100-user pack",
            desc: "For a company-wide MFA roll-out.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("100-user pack", "FTM-ELIC-100"),
          },
          {
            tag: "FTM-ELIC-500",
            name: "500-user pack and larger",
            desc: "Packs of 500, 1,000 and 10,000 users for large organisations.",
            points: ["Perpetual", "Electronic delivery"],
            enquireLabel: "Enquire about this option",
            href: ztaOptionLink("500-user pack and larger", "FTM-ELIC-500"),
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "What FortiToken Mobile\n does for you",
    highlightLast: 3,
    subhead: "FortiToken Mobile is part of the Fortinet Security Fabric, so it shares identity and device data with your FortiGate.",
    data: [
      {
        icon: "<rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2\"/><path d=\"M10 18h4\"/>",
        title: "One-tap push approval",
        description: "The login request appears on the phone with its details. Users approve or deny with one tap.",
      },
      {
        icon: "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M17 6l3 3\"/>",
        title: "OTP when offline",
        description: "Time-based (TOTP) and event-based (HOTP) codes work without a data connection.",
      },
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M8.5 12l2.5 2.5 4.5-5\"/>",
        title: "Secure provisioning",
        description: "Token seeds are delivered through FortiGuard, which reduces the risk of seed theft.",
      },
      {
        icon: "<circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"18\" r=\"2\"/><circle cx=\"19\" cy=\"18\" r=\"2\"/><path d=\"M12 7v4M12 11l-6 5M12 11l6 5\"/>",
        title: "Built into Fortinet",
        description: "Managed directly from the FortiGate or FortiAuthenticator, with FortiClient VPN support.",
      },
      {
        icon: "<path d=\"M4 8h14l-3-3M20 16H6l3 3\"/>",
        title: "Unlimited device transfers",
        description: "When a user changes phone, the token moves with them at no extra cost.",
      },
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Respects user privacy",
        description: "The app cannot read email, take photos, record audio or change phone settings.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Where FortiToken Mobile\n fits best",
    highlightLast: 2,
    paragraphs: [
      "FortiToken Mobile is the quickest way to add MFA if you already run a FortiGate. Staff install the app, scan an activation, and every VPN sign-in then needs their phone. It is often the first step in a zero trust roll-out.",
      "GS IT sizes the licence, designs the policies, deploys FortiToken Mobile with your FortiGate and directory, then supports it after go-live.",
    ],
    facts: [
      { value: "1 tap", label: "push approval" },
      { value: "Perpetual", label: "licence, no annual fee", dark: true },
      { value: "3", label: "platforms: iOS, Android, Windows" },
      { value: "OATH", label: "compliant TOTP and HOTP" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "FortiToken Mobile\n at a glance",
    highlightLast: 3,
    subhead: "Key licensing and sizing details. Need help reading them? Ask us.",
    tables: [
      {
        title: "Licence packs",
        columns: ["SKU", "Users", "Licence", "Delivery"],
        rows: [
          { label: "FTM-ELIC-5", values: ["5", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-10", values: ["10", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-20", values: ["20", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-25", values: ["25", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-50", values: ["50", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-100", values: ["100", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-500", values: ["500", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-1000", values: ["1,000", "Perpetual", "Electronic"] },
          { label: "FTM-ELIC-10000", values: ["10,000", "Perpetual", "Electronic"] },
        ],
      },
    ],
    source: "Source: FortiToken Mobile data sheet and Fortinet distributor listings. Exact SKUs and terms are confirmed in your quote.",
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "FortiToken Mobile\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is FortiToken Mobile a subscription?",
        answer: "No. Licences are perpetual and bought once per user, with no annual subscription fee.",
      },
      {
        question: "What happens when a user changes phone?",
        answer: "The token can be transferred to the new device. Transfers are unlimited, so a new phone does not use another licence.",
      },
      {
        question: "Do we need FortiAuthenticator?",
        answer: "No. FortiToken Mobile can be registered directly to a FortiGate to protect VPN and admin access. Add FortiAuthenticator when you also want MFA for Wi-Fi, cloud apps or single sign-on.",
      },
      {
        question: "Can one pack be split across two FortiGates?",
        answer: "Each licence pack is registered to one FortiGate or FortiAuthenticator. If you run several firewalls, a FortiAuthenticator can manage tokens centrally for all of them.",
      },
      {
        question: "What about users without a smartphone?",
        answer: "Fortinet also offers hardware tokens such as the FortiToken 200. We can mix hardware and mobile tokens on the same FortiGate or FortiAuthenticator.",
      },
      {
        question: "Do you set it up for us?",
        answer: "Yes. GS IT is a Fortinet Authorized Partner. We configure MFA on your FortiGate or FortiAuthenticator, send activations to users and guide them through enrolment. Under a GS IT AMC contract, critical issues get a 15-minute response.",
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
      { title: "FortiPAM", text: "Privileged access management", image: `${IMG}/fortinet-fortipam-card.webp`, href: `${ZTA_STORE}/fortipam` },
    ],
  },
  enquiryTabs: ztaEnquiry({
    page: "fortitoken-mobile",
    product: "FortiToken Mobile",
    heading: "Get a quote\n for FortiToken Mobile",
    highlightLast: 3,
    products: ["FortiToken Mobile", "5-user pack", "10-user pack", "25-user pack", "50-user pack", "100-user pack", "500-user pack and larger"],
  }),
  footNote: ztaFootNote("FortiToken Mobile"),
};
