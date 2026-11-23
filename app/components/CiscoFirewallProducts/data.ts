import { portfolioData } from "@/app/components/common/data";  

const CTABANNER = "/assets/images/cisco/cisco-firewall-solutions/banner.webp"; 
const BANNER = "/assets/images/cisco/cisco-firewall-solutions/banner.webp"; 
const CONTACT_URL = "/contact-it-services-dubai";

export const ciscoBadge = {
  logo: `/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp`,
  alt: "Cisco Firewall Solutions",
};

export const bannerData = {
  badge: ciscoBadge,
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "Firewalls" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco Firewall Solutions \n in Dubai",
  highlightLast: 2,
  description:
    "Cisco Secure Firewall appliances for offices and branches, with intrusion prevention, application control and VPN in one device. GS IT sizes, installs and supports them, so the firewall you buy matches the traffic you run.",
  backgroundImage: `${BANNER}`,
  mobbanner: `${BANNER}`,
  buttons: [
    { text: "Explore firewalls", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "Choosing a Cisco firewall",
  heading: "The right Cisco firewall\n for each site",
  highlightLast: 3,
  subhead:
    "Size a firewall by the traffic it must inspect, not just the internet speed. Encryption, intrusion prevention and VPN all add load.",
  data: [
    {
      kicker: "Small offices and shops",
      title: "Desktop firewalls",
      text: "Compact units with built-in switch ports for sites without a server rack.",
      points: [
        "Secure Firewall 220 and 240P",
        "Firepower 1010",
        "Secure Firewall 1210CE, 1210CP and 1220CX",
      ],
    },
    {
      dark: true,
      kicker: "Branches and head offices",
      title: "1U rack firewalls",
      text: "Higher throughput and more VPN peers for busier sites and hub offices.",
      points: [
        "Firepower 1120, 1140 and 1150",
        "Secure Firewall 1230, 1240 and 1250",
        "10G SFP+ on selected models",
      ],
    },
    {
      kicker: "Multi-site security",
      title: "One policy, every site",
      text: "Manage every firewall from one console, on-premises or from the cloud.",
      points: [
        "Cisco Firewall Management Center",
        "Threat Defense or ASA software",
        "Site-to-site and remote access VPN",
      ],
    },
  ],
};
 export const catalogueData = {
  tag: "Cisco firewall range",
  heading: "Cisco Secure Firewall\n models",
  highlightLast: 1,
  subhead:
    "From a small office to a busy head office. We size the model from your internet links, users and VPN needs.",
  products: [
    {
      tag: "Small office and branch",
      title: "Cisco Secure Firewall 200 Series",
      description:
        "Cisco's most affordable branch firewalls: compact desktop units with integrated SD-WAN and next-generation threat protection.",
      image: "/assets/images/cisco/cisco-firewall-solutions/cisco-secure-firewall-200-series-card.webp",
      href: "/store/next-generation-firewall-products/cisco/cisco-secure-firewall-200",
      specs: [
        { label: "Models", value: "220, 240P" },
        { label: "Firewall + AVC", value: "1.5 Gbps to 3.2 Gbps" },
        { label: "Form factor", value: "Desktop" },
      ],
    },
    {
      tag: "Small business and branch",
      title: "Cisco Firepower 1000 Series",
      description:
        "Cost-effective firewalls for small businesses and branches: easy to manage, with next-generation threat protection. Desktop and 1U models.",
      image: "/assets/images/cisco/cisco-firewall-solutions/cisco-firepower-1000-series-card.webp",
      href: "/store/next-generation-firewall-products/cisco/cisco-firepower-1000",
      specs: [
        { label: "Models", value: "1010, 1120, 1140, 1150" },
        { label: "Firewall + AVC", value: "890 Mbps to 5.3 Gbps" },
        { label: "Form factor", value: "Desktop (1010), 1U rack" },
      ],
    },
    {
      tag: "Branch and midsize",
      title: "Cisco Secure Firewall 1200 Series",
      description:
        "Compact, high-performance firewalls for distributed branches, with integrated SD-WAN, 10G and PoE options. Desktop and 1U models.",
      image: "/assets/images/cisco/cisco-firewall-solutions/cisco-secure-firewall-1200-series-card.webp",
      href: "/store/next-generation-firewall-products/cisco/cisco-secure-firewall-1200",
      specs: [
        { label: "Models", value: "1210CE, 1210CP, 1220CX, 1230, 1240, 1250" },
        { label: "Firewall + AVC", value: "6 Gbps to 24 Gbps" },
        { label: "Form factor", value: "Desktop (1210, 1220), 1U rack" },
      ],
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Threat defense\n in a single appliance",
  highlightLast: 4,
  subhead: "What Cisco Secure Firewall brings to an office or branch network.",
  data: [
    { icon: "ShieldCheck", title: "Intrusion prevention", description: "Snort 3 inspection, backed by Cisco Talos threat intelligence, blocks known and emerging attacks." },
    { icon: "Eye", title: "Application control", description: "See and control more than 4,000 applications, plus users, locations and websites." },
    { icon: "Lock", title: "Encrypted Visibility Engine", description: "Identifies risky applications and malware in encrypted traffic without decrypting it." },
    { icon: "Route", title: "Site-to-site and remote VPN", description: "Connect branches to the head office and give remote staff secure access to company systems." },
    { icon: "ListFilter", title: "Malware and URL filtering", description: "Optional Malware Defense and URL filtering subscriptions block harmful files and websites." },
    { icon: "MonitorCheck", title: "Central management", description: "Apply one policy across every site from Cisco Firewall Management Center or the cloud." },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From security review\n to a documented firewall",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, from the first review to a documented handover.",
  data: [
    { title: "Assessment", text: "Internet links, users, applications, VPN needs and your current firewall rules." },
    { title: "Design and proposal", text: "Model, licences, high availability and security policy in one document.", highlight: true },
    { title: "Supply", text: "Genuine Cisco firewalls and subscriptions with manufacturer warranty." },
    { title: "Deploy and migrate", text: "Rule and VPN migration, testing and cutover, planned around your working hours." },
    { title: "Handover and support", text: "Policy documentation, updates and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco firewall\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "How much does a Cisco firewall cost?",
      answer: "The price depends on three things: the model, the security subscriptions and their term (1, 3 or 5 years), and the Cisco support contract. A small office firewall and a head-office firewall can differ a lot in price. We size the firewall to your sites first, then send an itemised quote, so you only pay for the capacity and features you'll use.",
    },
    {
      question: "Which model do we need for our office?",
      answer: "Size the firewall by the traffic it has to inspect, not the number of users. We look at your internet speed, the number of remote VPN users and branches, and the security features you want switched on. Then we choose a model whose threat inspection throughput stays above your line speed, with room to grow.",
    },
    {
      question: "Will our internet or network go down during installation?",
      answer: "We prepare the configuration and migrate your existing rules and VPNs before cutover. The switch to the new firewall is scheduled outside working hours, and we test critical applications before your team starts work.",
    },
    {
      question: "We already have a firewall. Can you replace it without losing our rules?",
      answer: "Yes. We migrate your existing rules, NAT and VPN settings from Cisco ASA or other brands, then clean up unused rules along the way. Cisco support for the ASA 5508-X and 5516-X ended on 31 August 2026, so those units no longer get security updates.",
    },
    {
      question: "What happens if our subscription expires?",
      answer: "The firewall keeps passing traffic and your rules stay in place. But intrusion prevention, Malware Defense and URL filtering stop receiving updates, so protection falls behind new threats. We track renewal dates and remind you before they lapse.",
    },
    {
      question: "Can our staff work from home securely?",
      answer: "Yes. Remote access VPN gives staff encrypted access to company systems from laptops and phones. It needs a Cisco Secure Client licence, sized to the number of remote users.",
    },
    {
      question: "What if the firewall fails?",
      answer: "For sites that can't afford downtime, we deploy two firewalls in high availability, so the second one takes over automatically. A Cisco support contract adds hardware replacement and software updates. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
    {
      question: "Do we need in-house IT staff to manage the firewall?",
      answer: "No. GS IT can manage policies, updates and monitoring for you. If you have an IT team, we hand over documentation and train them to make day-to-day changes.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your firewall\n with a security engineer",
  highlightLast: 4,
  image: `${CTABANNER}`,
  steps: [
    "Tell us your sites, internet links, users and remote access needs.",
    "We review your current security and size the firewall and licences.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote =
  "Cisco, Firepower and Secure Firewall are trademarks of Cisco Systems, Inc.";
