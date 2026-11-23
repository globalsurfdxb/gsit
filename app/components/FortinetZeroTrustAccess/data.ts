import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { ProductCardsData } from "@/app/components/FortinetFirewallProducts/Sections/ProductCards";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { ZTA_IMG as IMG_DIR, ZTA_STORE as STORE } from "@/app/components/FortinetProduct/products/zero-trust-shared";

// Generated from 05-Zero-Trust-Access/fortinet-zero-trust-access.html (Fortinet pages pack)

const img = (file: string) => `${IMG_DIR}/${file}`;
const store = (slug: string) => `${STORE}/${slug}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

const BANNER = img("fortinet-zero-trust-hero.webp");

export const seo = {
  title: "Fortinet Zero Trust Access in Dubai | GS IT",
  description: "FortiNAC, FortiAuthenticator, FortiToken Mobile and FortiPAM from GS IT in Dubai. Control every device, sign-in and admin session on your network.",
  ogTitle: "Fortinet Zero Trust Access | GS IT",
  ogDescription: "Network access control, MFA and privileged access management from one Fortinet partner in Dubai.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: img("fortinet-authorized-partner.webp"), alt: "Fortinet Authorized Partner", wide: true },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Security" }, { label: "Fortinet" }, { label: "Zero trust access" }],
  tag: "Fortinet Authorized Partner",
  heading: "Zero trust access\n for every user and device",
  highlightLast: 5,
  description: "Check every device, every sign-in and every admin session before it reaches your network. FortiNAC, FortiAuthenticator, FortiToken Mobile and FortiPAM work with your FortiGate, and GS IT designs, deploys and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore the products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#products" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "4", desc: "products for devices, users and admins" },
    { value: "1 tap", desc: "push approval with FortiToken Mobile" },
    { value: "Perpetual", desc: "FortiToken Mobile user licences" },
  ],
};

export const whyData: BentoData = {
  tag: "Why zero trust",
  heading: "Verify every connection,\n every time",
  highlightLast: 2,
  subhead: "A stolen password, an unknown device on a network port or a shared admin account can each open the door. Zero trust checks all three before access is granted, not after.",
  data: [
    {
      variant: "light",
      big: "Devices",
      title: "Known before they connect",
      dim: "FortiNAC",
      text: [
        "Every laptop, phone, printer and IoT sensor is identified and placed in the right segment, including devices that cannot run an agent.",
      ],
    },
    {
      variant: "light",
      title: "Every sign-in proved",
      dim: "FortiAuthenticator and FortiToken Mobile",
      text: [
        "A second factor on VPN, Wi-Fi, admin portals and cloud apps means a leaked password alone gets an attacker nowhere.",
      ],
    },
    {
      variant: "dark",
      title: "Admin access on record",
      dim: "FortiPAM",
      text: [
        "Privileged passwords stay in a vault, rotate automatically and never reach the admin's screen.",
        "Every privileged session is recorded, so you can see exactly who did what, and when.",
      ],
    },
  ],
};

export const productsData: ProductCardsData = {
  tag: "The products",
  heading: "Four products,\n one access layer",
  highlightLast: 3,
  subhead: "Start with the gap you need to close first. Each product works on its own and integrates with your FortiGate and the others.",
  data: [
    {
      id: "fortinac",
      icon: "<path d=\"M4 5h16v10H4z\"/><path d=\"M8 19h8M12 15v4\"/><path d=\"M9 10l2 2 4-4\"/>",
      kicker: "Network access control",
      title: "FortiNAC",
      lead: "See every device on your wired and wireless network, decide what each one can reach, and respond automatically when one misbehaves.",
      points: ["Discovers, profiles and classifies devices, including headless IoT", "Automated onboarding for staff, guest and BYOD devices", "Dynamic access control and network segmentation", "Works with third-party switches and wireless, not only Fortinet", "Rescans devices so MAC-address spoofing cannot slip through", "Sends events with full context to your SIEM"],
      licence: { label: "Licensing", text: "Licensed by concurrent endpoints at Plus or Pro level. Plus covers registration, scanning and access control. Pro adds automated threat response. Runs on an appliance or VM." },
      link: { text: "Learn more", href: store("fortinac") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiNAC", src: "Product: FortiNAC" }) },
    },
    {
      id: "fortiauthenticator",
      icon: "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21c1-4 4-6 8-6s7 2 8 6\"/>",
      kicker: "Identity and single sign-on",
      title: "FortiAuthenticator",
      lead: "One place to authenticate users across VPN, Wi-Fi, network devices and cloud apps, with multi-factor authentication and single sign-on.",
      points: ["MFA with FortiToken, SMS or email OTP, and FIDO2 passwordless", "SAML identity provider, OAuth2 and OpenID Connect for SSO", "RADIUS, TACACS+ and LDAP for VPN and network devices", "802.1X authentication for wired and wireless networks", "Certificate authority for certificate-based VPN and Wi-Fi", "Fortinet Single Sign-On so your FortiGate knows who each user is"],
      licence: { label: "Licensing", text: "Hardware appliance or VM, sized by the number of users, with FortiCare support." },
      link: { text: "Learn more", href: store("fortiauthenticator") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiAuthenticator", src: "Product: FortiAuthenticator" }) },
    },
    {
      id: "fortitoken-mobile",
      icon: "<rect x=\"7\" y=\"2.5\" width=\"10\" height=\"19\" rx=\"2\"/><path d=\"M10 18h4\"/><path d=\"M10 10l1.5 1.5L14.5 8\"/>",
      kicker: "Multi-factor authentication",
      title: "FortiToken Mobile",
      lead: "Turns staff phones into secure tokens, so a stolen password alone no longer opens your VPN, email or apps.",
      points: ["Push notification to approve or deny a sign-in with one tap", "Time-based (TOTP) and event-based (HOTP) one-time passwords", "Apps for iOS, Android and Windows", "Managed from your FortiGate or FortiAuthenticator", "Token seeds provisioned securely through FortiGuard", "Cannot read email, take photos or change phone settings"],
      licence: { label: "Licensing", text: "Perpetual per-user licences in packs from 5 users, registered to one FortiGate or FortiAuthenticator. No annual subscription fee." },
      link: { text: "Learn more", href: store("fortitoken-mobile") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiToken Mobile", src: "Product: FortiToken Mobile" }) },
    },
    {
      id: "fortipam",
      icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/><path d=\"M12 14v3\"/>",
      kicker: "Privileged access management",
      title: "FortiPAM",
      lead: "Controls who can use admin accounts on your servers, network devices and databases, and records what they do with them.",
      points: ["Credential vault: admins connect without ever seeing the password", "Automatic password change after each use and on a schedule", "Account discovery across IT and OT systems", "Session monitoring and recording, including keystrokes and video", "Approval workflows for access requests", "Dangerous SSH command blocking and ZTNA device checks"],
      licence: { label: "Licensing", text: "Appliance, VM or public cloud. The VM is an annual subscription sized by user seats, with FortiCare included." },
      link: { text: "Learn more", href: store("fortipam") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiPAM", src: "Product: FortiPAM" }) },
    },
  ],
};

export const supportData: OptionCardsData = {
  tag: "Licences and support",
  heading: "Sized to your users\n and devices",
  highlightLast: 2,
  subhead: "Each product is licensed differently. We size every licence from your user and device counts, so you pay for what you use.",
  columns: 4,
  data: [
    {
      kicker: "FortiNAC",
      title: "Concurrent endpoints",
      text: "Plus or Pro licence by the number of devices online at once, on an appliance or VM.",
    },
    {
      kicker: "FortiAuthenticator",
      title: "Users",
      text: "Appliance or VM sized by number of users, with FortiCare support.",
    },
    {
      kicker: "FortiToken Mobile",
      title: "Perpetual per user",
      text: "One-time packs from 5 users, registered to one FortiGate or FortiAuthenticator.",
    },
    {
      kicker: "FortiPAM",
      title: "User seats",
      text: "Annual VM subscription with FortiCare included, or a hardware appliance.",
    },
  ],
  buttons: [
    primary("Renew a licence", enq("renewal", { src: "Support: Renew a licence" })),
    outline("Add users or devices", enq("expand", { src: "Support: Add users or devices" })),
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "Where zero trust\n pays off first",
  highlightLast: 3,
  subhead: "Most projects start with one of these and extend from there.",
  data: [
    {
      icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
      title: "Secure remote VPN",
      description: "FortiToken Mobile adds one-tap MFA to the FortiGate VPN your staff already use.",
    },
    {
      icon: "<path d=\"M12 3v3M12 18v3M3 12h3M18 12h3\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
      title: "IoT and OT devices",
      description: "FortiNAC finds cameras, printers and sensors and keeps each type in its own segment.",
    },
    {
      icon: "<path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
      title: "Guest and BYOD Wi-Fi",
      description: "Self-registration and 802.1X keep visitors and personal devices away from business systems.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M8 21h8M3 9h18\"/>",
      title: "Cloud app sign-in",
      description: "FortiAuthenticator gives Microsoft 365 and other SAML apps single sign-on with MFA.",
    },
    {
      icon: "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5\"/><path d=\"M16 11h6M19 8v6\"/>",
      title: "Vendor and contractor access",
      description: "FortiPAM grants time-limited, approved and recorded access without sharing passwords.",
    },
    {
      icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
      title: "Audits and compliance",
      description: "Device inventory, sign-in logs and session recordings give auditors the evidence they ask for.",
    },
  ],
};

export const howData = {
  tag: "How it fits together",
  heading: "One decision\n at every step",
  highlightLast: 3,
  subhead: "Each product checks a different moment of access. Together they give you one consistent decision, logged in one place.",
  data: [
    { title: "Device connects", text: "FortiNAC identifies it, checks it and places it in the right network segment." },
    { title: "User signs in", text: "FortiAuthenticator checks the identity against your directory and asks for a second factor." },
    { title: "User approves", text: "A FortiToken Mobile push lands on their phone. One tap completes the sign-in." },
    { title: "Admin needs access", text: "FortiPAM checks out a vaulted credential, records the session and rotates the password after." },
    { title: "FortiGate enforces", text: "Firewall policy uses the identity and device data, and logs every decision." },
  ],
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From access review\n to enforced policy",
  highlightLast: 3,
  subhead: "Zero trust changes how people sign in, so we roll it out in stages your team can absorb.",
  data: [
    { title: "Assess", text: "Users, devices, directories, admin accounts and the access gaps that matter most." },
    { title: "Design", text: "Products, licence sizes, policies and segments in one proposal." },
    { title: "Deploy", text: "Installation and integration with your FortiGate, directory and switches." },
    { title: "Enrol", text: "Phased user and device enrolment, starting in monitor mode before enforcement." },
    { title: "Support", text: "Monitoring, updates, policy changes and licence renewal tracking." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Zero trust access\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is zero trust access?",
      answer: "Zero trust access means no user or device is trusted just because it is inside your network. Each device is identified before it connects, each user proves who they are with a second factor, and admin access is granted only when needed and recorded.",
    },
    {
      question: "Do we need all four products?",
      answer: "No. Each one closes a different gap, and most customers start with one. FortiToken Mobile is often the first step because it adds MFA to the FortiGate VPN you already run. FortiNAC, FortiAuthenticator and FortiPAM follow as your network, identity and audit needs grow.",
    },
    {
      question: "Can FortiToken Mobile work without FortiAuthenticator?",
      answer: "Yes. FortiToken Mobile can be registered directly to a FortiGate to protect VPN and admin access. FortiAuthenticator is the right choice when you also need MFA for Wi-Fi, network devices, cloud apps or single sign-on.",
    },
    {
      question: "Which FortiNAC licence do we need?",
      answer: "FortiNAC is licensed by concurrent endpoints. Plus covers device registration, scanning and access control. Pro adds automated threat response, so FortiNAC can isolate a device when your security tools raise an alert. We size the count from your device inventory.",
    },
    {
      question: "Does FortiNAC only work with Fortinet switches?",
      answer: "No. FortiNAC controls access on many third-party switches, routers and wireless controllers, so you can apply zero trust to the network you already have.",
    },
    {
      question: "How is FortiPAM licensed?",
      answer: "FortiPAM runs as a hardware appliance, a VM or in the public cloud. The VM is an annual subscription that sets your number of user seats and includes FortiCare support. A high-availability pair needs a licence on the backup unit too.",
    },
    {
      question: "Do you design, deploy and support it?",
      answer: "Yes. GS IT is a Fortinet Authorized Partner. We assess your users, devices and admin accounts, design the policies, deploy and enrol users, then support the platform after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Plan zero trust access\n with a security engineer",
  highlightLast: 4,
  steps: [
    "Tell us your users, devices, directory and the access gap to close.",
    "We match the products, licence sizes and policies to it.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Ask about it on a product, or one of the licence buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New deployment", title: "Request a zero trust quote", pickName: "New deployment", doneName: "zero trust quote", modelField: "model" },
    { value: "expand", label: "Add users or devices", title: "Add users or devices", pickName: "Add users or devices", doneName: "licence expansion", modelField: "model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "model" },
  ],
  fields: [
    { name: "model", label: "Product", type: "select", show: ["quote", "expand", "renewal"], full: true, empty: "Not sure, help me choose", options: ["FortiNAC", "FortiAuthenticator", "FortiToken Mobile", "FortiPAM", "Several of these"] },
    { name: "users", label: "Number of users", type: "number", show: ["quote", "expand"], placeholder: "e.g. 100" },
    { name: "devices", label: "Number of devices", type: "number", show: ["quote", "expand"], placeholder: "e.g. 500" },
    { name: "directory", label: "User directory", type: "select", show: ["quote"], empty: "Not sure", options: ["Active Directory", "Microsoft Entra ID", "Both", "LDAP or other", "None yet"] },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "serial_numbers", label: "Serial or licence number(s)", type: "text", show: ["expand", "renewal"], placeholder: "e.g. FAC-VM…" },
    { name: "support_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "expand", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years", "5 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "VPN in use, cloud apps, admin accounts, audit deadlines, timeline",
  page: "fortinet-zero-trust-access",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "security engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiNAC, FortiAuthenticator, FortiToken, FortiPAM, FortiGate, FortiCare and other product names are trademarks of Fortinet, Inc.";
