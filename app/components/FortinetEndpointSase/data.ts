import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { ProductCardsData } from "@/app/components/FortinetFirewallProducts/Sections/ProductCards";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";
import { EPS_IMG as IMG_DIR, EPS_STORE as STORE } from "@/app/components/FortinetProduct/products/endpoint-sase-shared";

// Generated from 06-Endpoint-Data-and-SASE/fortinet-endpoint-sase.html (Fortinet pages pack)

const img = (file: string) => `${IMG_DIR}/${file}`;
const store = (slug: string) => `${STORE}/${slug}`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

const BANNER = img("fortinet-endpoint-sase-hero.webp");

export const seo = {
  title: "Fortinet Endpoint Security, DLP and SASE in Dubai | GS IT",
  description: "FortiClient, FortiEDR, FortiDLP and FortiSASE from GS IT, a Fortinet Authorized Partner in Dubai. Protect devices, data and remote users wherever they work.",
  ogTitle: "Fortinet Endpoint Security, DLP and SASE | GS IT",
  ogDescription: "Endpoint protection, EDR, data loss prevention and SASE from one Fortinet partner in Dubai.",
  image: BANNER,
};

export const bannerData = {
  badge: { logo: "/assets/images/fortinet/fortinet-authorized-partner.jpg", alt: "Fortinet Authorized Partner", wide: true },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Security" }, { label: "Fortinet" }, { label: "Endpoint, data and SASE" }],
  tag: "Fortinet Authorized Partner",
  heading: "Endpoint, data and SASE\n security for work from anywhere",
  highlightLast: 5,
  description: "Your people work from home, client sites and the road, and your data lives on laptops and in SaaS apps. FortiClient, FortiEDR, FortiDLP and FortiSASE protect each device, each file and each connection, wherever it is. GS IT designs, deploys and supports them.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore the products", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#products" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "4", desc: "products for devices, data and remote users" },
    { value: "3 devices", desc: "covered by each FortiSASE user licence" },
    { value: "25", desc: "endpoint packs for FortiClient and FortiEDR" },
  ],
};

export const whyData: BentoData = {
  tag: "Why it matters",
  heading: "Your office is no longer\n your perimeter",
  highlightLast: 2,
  subhead: "Much of your work now happens on laptops outside the firewall, in SaaS apps and in GenAI tools. Protection has to sit on the device and in the cloud, not only at the office edge.",
  data: [
    {
      variant: "light",
      big: "Devices",
      title: "Stopped before threats spread",
      dim: "FortiClient and FortiEDR",
      text: [
        "Ransomware and malware are blocked when they try to run, and an infected laptop is contained automatically before it reaches anything else.",
      ],
    },
    {
      variant: "light",
      title: "Data kept where it belongs",
      dim: "FortiDLP",
      text: [
        "Sensitive files are tracked from source to destination, including uploads to personal cloud drives and GenAI tools.",
      ],
    },
    {
      variant: "dark",
      title: "Remote access secured",
      dim: "FortiSASE",
      text: [
        "Every connection from a remote user is inspected in the cloud, with the same policy as the office.",
        "No traffic needs to travel back through your head office first.",
      ],
    },
  ],
};

export const productsData: ProductCardsData = {
  tag: "The products",
  heading: "Four products,\n one Security Fabric",
  highlightLast: 3,
  subhead: "Start with the risk you need to close first. Each product works on its own and shares data with your FortiGate and the others.",
  data: [
    {
      id: "forticlient",
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M2 20h20\"/><path d=\"M12 8v4M10 10h4\"/>",
      image: img("fortinet-forticlient-banner.webp"),
      kicker: "Endpoint agent and ZTNA",
      title: "FortiClient",
      lead: "One agent for VPN, zero trust access and endpoint protection, managed centrally from FortiClient EMS.",
      points: ["SSL and IPsec VPN with multi-factor authentication", "Zero trust access with device posture checks on your FortiGate", "AI-powered next-generation antivirus with the EPP licence", "FortiClient Cloud Sandbox for unknown files", "Software inventory and vulnerability visibility", "EMS management on-premises or in the cloud"],
      licence: { label: "Licensing", text: "Per endpoint or per user, in VPN/ZTNA or EPP/APT editions, sold in 25-endpoint packs on annual or multi-year terms." },
      link: { text: "Learn more", href: store("forticlient") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiClient", src: "Product: FortiClient" }) },
    },
    {
      id: "fortiedr",
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M12 8v4l2.5 2\"/>",
      image: img("fortinet-fortiedr-banner.webp"),
      kicker: "Endpoint detection and response",
      title: "FortiEDR",
      lead: "Stops threats at the moment of execution and contains them automatically, on workstations, servers and OT systems.",
      points: ["Behavioural protection that blocks threats before damage is done", "Automated containment and remediation after a detection", "Asset discovery and attack surface reduction", "Covers current and legacy operating systems, including OT", "Cloud, hybrid or on-premises management", "Optional managed detection and response from Fortinet"],
      licence: { label: "Licensing", text: "Per endpoint in packs of 25. Choose Discover and Protect, or Discover, Protect and Respond, with optional XDR and managed detection and response." },
      link: { text: "Learn more", href: store("fortiedr") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiEDR", src: "Product: FortiEDR" }) },
    },
    {
      id: "fortidlp",
      icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5\"/><rect x=\"9\" y=\"13\" width=\"7\" height=\"5\" rx=\"1\"/><path d=\"M10.5 13v-1.5a2 2 0 0 1 4 0V13\"/>",
      image: img("fortinet-fortidlp-banner.webp"),
      kicker: "Data loss prevention",
      title: "FortiDLP",
      lead: "Tracks sensitive data from where it starts to where it goes, and stops it leaving through cloud drives, personal accounts or GenAI tools.",
      points: ["Lightweight agent that protects data on and off the network", "Insider risk detection that scores high-risk activity chains", "Visibility of sanctioned and unsanctioned SaaS and GenAI apps", "Lets staff use public GenAI tools without leaking data", "Coaches users in the moment, with acknowledgements or blocks", "Detections mapped to the MITRE insider threat knowledge base"],
      licence: { label: "Licensing", text: "Cloud-delivered subscription with a lightweight agent on each endpoint. We confirm sizing and term in your quote." },
      link: { text: "Learn more", href: store("fortidlp") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiDLP", src: "Product: FortiDLP" }) },
    },
    {
      id: "fortisase",
      icon: "<path d=\"M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5a4 4 0 0 1-1 9.5z\"/><path d=\"M10 13l1.5 1.5L15 11\"/>",
      image: img("fortinet-fortisase-banner.webp"),
      kicker: "Secure access service edge",
      title: "FortiSASE",
      lead: "Cloud-delivered security for remote and hybrid users: secure internet, SaaS and private app access through one agent.",
      points: ["Secure internet access with firewall, IPS, web and DNS filtering", "Inline CASB and DLP for SaaS apps", "Secure private access to apps behind your FortiGate", "Zero trust network access for private applications", "Covers up to 3 devices per licensed user", "Thin branches through FortiAP or FortiExtender"],
      licence: { label: "Licensing", text: "Per user, in Standard, Advanced or Comprehensive editions, with user bands from 50 users upward." },
      link: { text: "Learn more", href: store("fortisase") },
      enquire: { text: "Ask about it", href: enq("quote", { model: "FortiSASE", src: "Product: FortiSASE" }) },
    },
  ],
};

export const supportData: OptionCardsData = {
  tag: "Licences and support",
  heading: "Sized to your users\n and endpoints",
  highlightLast: 2,
  subhead: "Each product is licensed differently. We size every licence from your user and device counts, so you pay for what you use.",
  columns: 4,
  data: [
    {
      kicker: "FortiClient",
      title: "Per endpoint or user",
      text: "VPN/ZTNA or EPP/APT editions in 25-endpoint packs, with EMS on-premises or in the cloud.",
    },
    {
      kicker: "FortiEDR",
      title: "Per endpoint",
      text: "Subscription in packs of 25, with optional XDR and managed detection and response.",
    },
    {
      kicker: "FortiDLP",
      title: "Subscription",
      text: "Cloud-delivered, with a lightweight agent on each endpoint.",
    },
    {
      kicker: "FortiSASE",
      title: "Per user",
      text: "Standard, Advanced or Comprehensive, banded from 50 users, up to 3 devices each.",
    },
  ],
  buttons: [
    primary("Renew a licence", enq("renewal", { src: "Support: Renew a licence" })),
    outline("Add users or devices", enq("expand", { src: "Support: Add users or devices" })),
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "Where these products\n pay off first",
  highlightLast: 3,
  subhead: "Most projects start with one of these and extend from there.",
  data: [
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/>",
      title: "Ransomware protection",
      description: "FortiEDR stops encryption attempts as they start and contains the affected device.",
    },
    {
      icon: "<path d=\"M3 11l9-7 9 7v9H3z\"/><path d=\"M9 20v-6h6v6\"/>",
      title: "Hybrid and remote work",
      description: "FortiSASE gives home and travelling staff the same protection as the office.",
    },
    {
      icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
      title: "Moving beyond VPN",
      description: "FortiClient zero trust access checks each device before it reaches an application.",
    },
    {
      icon: "<path d=\"M12 3v4M12 17v4M3 12h4M17 12h4\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
      title: "Safe use of GenAI",
      description: "FortiDLP lets staff use public AI tools without pasting in sensitive data.",
    },
    {
      icon: "<circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5\"/><path d=\"M16 11h6\"/>",
      title: "Insider risk",
      description: "FortiDLP flags risky activity, such as a leaver copying files to a personal drive.",
    },
    {
      icon: "<path d=\"M6 3h9l4 4v14H6z\"/><path d=\"M14 3v5h5M9 13h7M9 17h5\"/>",
      title: "Audits and compliance",
      description: "Endpoint, data and access logs show auditors who touched what, and when.",
    },
  ],
};

export const howData = {
  tag: "How it fits together",
  heading: "Four layers,\n one view of risk",
  highlightLast: 4,
  subhead: "Each product protects a different layer. Together they share what they see, so one alert can trigger action everywhere.",
  data: [
    { title: "Device checked", text: "FortiClient reports patch level and protection status before the user connects." },
    { title: "Threats stopped", text: "FortiEDR blocks malicious behaviour at execution and contains the device." },
    { title: "Data protected", text: "FortiDLP watches sensitive files and stops them leaving through the wrong channel." },
    { title: "Traffic inspected", text: "FortiSASE secures internet, SaaS and private app access in the cloud." },
    { title: "One record", text: "Logs flow into your FortiGate and FortiAnalyzer for a single view." },
  ],
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From assessment\n to full roll-out",
  highlightLast: 3,
  subhead: "New agents touch every laptop, so we pilot first and roll out in stages.",
  data: [
    { title: "Assess", text: "Endpoints, remote users, sensitive data and the risks that matter most." },
    { title: "Design", text: "Products, licence sizes and policies in one proposal." },
    { title: "Pilot", text: "A small group first, with policies tuned before wider roll-out." },
    { title: "Roll out", text: "Agents deployed in phases, starting in monitor mode where it applies." },
    { title: "Support", text: "Monitoring, updates, policy changes and licence renewal tracking." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Endpoint and SASE\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is the difference between FortiClient and FortiEDR?",
      answer: "FortiClient with the EPP licence is your everyday endpoint protection: antivirus, sandboxing, VPN and zero trust access in one agent. FortiEDR adds detection and response, so it can stop an attack that is already running, contain the device and remediate the damage. Many organisations run both.",
    },
    {
      question: "Do we need FortiSASE if we already have a FortiGate VPN?",
      answer: "Not always. A FortiGate VPN protects remote users by sending their traffic back to the office. FortiSASE inspects it in the cloud instead, closer to the user, and adds SaaS and GenAI controls. It suits teams that work mostly outside the office or across several countries.",
    },
    {
      question: "How is FortiSASE licensed?",
      answer: "Per user, in Standard, Advanced or Comprehensive editions, with pricing bands from 50 users upward. Each user licence covers up to 3 devices. Advanced and Comprehensive add digital experience monitoring, and Comprehensive adds NOC and SOC integrations.",
    },
    {
      question: "How is FortiEDR licensed?",
      answer: "Per endpoint, in packs of 25, on a subscription term. You choose Discover and Protect, or Discover, Protect and Respond, and can add XDR or managed detection and response from Fortinet.",
    },
    {
      question: "Does FortiDLP block ChatGPT and other GenAI tools?",
      answer: "It does not have to. FortiDLP lets your staff use public GenAI tools while watching what data goes into them, so it can warn, ask for acknowledgement or block when sensitive information is involved.",
    },
    {
      question: "Does FortiClient work with our FortiGate?",
      answer: "Yes. FortiClient shares device posture with your FortiGate, so zero trust access rules can check that a laptop is patched and protected before it reaches an application.",
    },
    {
      question: "Do you design, deploy and support it?",
      answer: "Yes. GS IT is a Fortinet Authorized Partner. We assess your devices, data and remote access, run a pilot, roll out in phases and support the platform after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Protect users and data\n wherever they work",
  highlightLast: 3,
  steps: [
    "Tell us your users, devices, directory and the risk you need to close.",
    "We match the products, licence sizes and policies to it.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Ask about it on a product, or one of the licence buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New deployment", title: "Request an endpoint or SASE quote", pickName: "New deployment", doneName: "endpoint or SASE quote", modelField: "model" },
    { value: "expand", label: "Add users or devices", title: "Add users or devices", pickName: "Add users or devices", doneName: "licence expansion", modelField: "model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "model" },
  ],
  fields: [
    { name: "model", label: "Product", type: "select", show: ["quote", "expand", "renewal"], full: true, empty: "Not sure, help me choose", options: ["FortiClient", "FortiEDR", "FortiDLP", "FortiSASE", "Several of these"] },
    { name: "users", label: "Number of users", type: "number", show: ["quote", "expand"], placeholder: "e.g. 100" },
    { name: "devices", label: "Number of devices", type: "number", show: ["quote", "expand"], placeholder: "e.g. 500" },
    { name: "directory", label: "Identity provider", type: "select", show: ["quote"], empty: "Not sure", options: ["Active Directory", "Microsoft Entra ID", "Both", "LDAP or other", "None yet"] },
    { name: "fortigate_on_site", label: "FortiGate on site?", type: "select", show: ["quote"], empty: "Not sure", options: ["Yes", "No", "Planning one"] },
    { name: "serial_numbers", label: "Serial or licence number(s)", type: "text", show: ["expand", "renewal"], placeholder: "e.g. FAC-VM…" },
    { name: "support_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    { name: "term", label: "Term", type: "select", show: ["quote", "expand", "renewal"], empty: "Not sure yet", options: ["1 year", "3 years", "5 years"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "VPN in use, cloud apps, admin accounts, audit deadlines, timeline",
  page: "fortinet-endpoint-sase",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  engineer: "security engineer",
  againText: "Send another request",
};

export const footNote = "Fortinet, FortiClient, FortiEDR, FortiDLP, FortiSASE, FortiGate, FortiAnalyzer, FortiCare and other product names are trademarks of Fortinet, Inc.";
