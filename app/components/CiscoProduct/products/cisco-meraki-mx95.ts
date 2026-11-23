import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { RT_IMG as IMG, rtIcons, relatedRouters, rtFootNote } from "./routers-shared";

const DATASHEET = {
  text: "Cisco Meraki MX95 datasheet",
  // Local copy of Cisco's MX Family datasheet (https://www.cisco.com/c/en/us/products/collateral/security/meraki-cloud-managed-security-appliances/mx-family-ds.pdf).
  // The dev pack linked meraki.cisco.com/wp-content/uploads/2020/04/meraki_datasheet_mx.pdf, which now redirects away; this is its current replacement.
  href: "/assets/datasheets/cisco/meraki-mx-family-ds.pdf",
};

// Generated from rt_cisco-meraki-mx95.html (Cisco pages dev pack)
export const merakiMx95: LogitechProductData = {
  slug: "cisco-meraki-mx95",
  seo: {
    title: "Buy Cisco Meraki MX95 in Dubai | GS IT",
    description:
      "Buy the Cisco Meraki MX95 in Dubai: 3 Gbps firewall, 10G SFP+ and SD-WAN for branches with up to 500 users.",
    ogTitle: "Cisco Meraki MX95 Security Appliance in Dubai | GS IT",
    ogDescription:
      "Cisco Meraki MX95 1U security and SD-WAN with 10G fibre for large branches in the UAE, supplied and supported by GS IT.",
  },
  name: "Cisco Meraki MX95",
  sku: "MX95",
  image: `${IMG}/cisco-meraki-mx95-1u-security-appliance.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Routers" },
      { label: "Cisco", href: "/cisco-network-routers" },
      { label: "Meraki MX95" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-meraki-mx95-1u-security-appliance.webp`,
        alt: "Cisco Meraki MX95 1U security appliance",
      },
    ],
    tag: "Cisco Meraki large branch appliance",
    heading: "Cisco Meraki MX95\n Security Appliance",
    highlightLast: 2,
    description:
      "Higher-capacity security and SD-WAN for branches with up to 500 users, with 10G SFP+ and 2.5G multigigabit ports.",
    pills: ["Up to 500 users", "1U rack"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Model", value: "MX95" },
      { label: "Firewall", value: "3 Gbps" },
      { label: "Ports", value: "4 WAN (2× 10G SFP+), 4 LAN + 2× 10G SFP+" },
      { label: "VPN", value: "2.5 Gbps, up to 500 site-to-site tunnels" },
      { label: "Form factor", value: "1U rack" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Sized for large branches", text: "Meraki recommends it for branches with up to 500 users" },
      { label: "10G fibre", text: "2 SFP+ WAN and 2 SFP+ LAN ports" },
      { label: "Multigigabit WAN", text: "2.5G RJ-45 WAN ports, with PoE+ on port 4" },
      { label: "Threat protection at speed", text: "1.5 Gbps with Advanced Security in prevention mode" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "MX95 licence editions\n for large branches",
    highlightLast: 3,
    subhead: "The hardware is the same; the licence edition decides which features run.",
    groups: [
      {
        label: "Licence editions",
        title: "Meraki MX95 licence editions",
        description: "The hardware is the same; the licence decides which features run.",
        models: [
          {
            name: "Enterprise",
            desc: "Firewall, SD-WAN and VPN",
            points: ["Stateful and Layer 7 firewall", "Auto VPN and client VPN", "WAN failover and load balancing"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Advanced Security",
            desc: "Everything in Enterprise, plus threat protection",
            points: ["Intrusion detection and prevention", "Malware protection (AMP)", "Talos content filtering, geo-IP rules"],
            enquireLabel: "Enquire about this option",
          },
          {
            name: "Secure SD-WAN Plus",
            desc: "Everything in Advanced Security, plus insight",
            points: ["Internet and WAN health", "Application and VoIP health", "Smart breakout"],
            enquireLabel: "Enquire about this option",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Cloud-managed security\n and SD-WAN",
    highlightLast: 2,
    subhead: "What the Meraki MX95 brings to a branch network.",
    data: [
      {
        icon: rtIcons.cloud,
        title: "Meraki dashboard",
        description: "Zero-touch setup, automatic firmware updates and every site in one dashboard.",
        highlight: true,
      },
      {
        icon: rtIcons.network,
        title: "SD-WAN and Auto VPN",
        description: "Site-to-site VPN in a few clicks, with dynamic path selection across internet links.",
      },
      {
        icon: rtIcons.shieldLock,
        title: "Threat protection",
        description: "Intrusion prevention, malware protection and Talos content filtering with Advanced Security.",
      },
      {
        icon: rtIcons.bars,
        title: "Automatic failover",
        description: "Fails over to a second line or cellular in under 5 seconds.",
      },
      {
        icon: rtIcons.lock,
        title: "Remote access VPN",
        description: "Cisco Secure Client and client VPN for staff working remotely.",
      },
      {
        icon: rtIcons.pulse,
        title: "10G and multigigabit",
        description: "SFP+ fibre and 2.5G copper for faster internet lines.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "High-capacity security\n for large branches",
    highlightLast: 3,
    paragraphs: [
      "The MX95 suits large branches and regional hubs, with 10G fibre, multigigabit WAN and up to 500 site-to-site VPN tunnels.",
      "GS IT sizes the right licence edition, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "3 Gbps", label: "firewall throughput" },
      { value: "500", label: "recommended users", dark: true },
      { value: "500", label: "site-to-site VPN tunnels" },
      { value: "10G", label: "SFP+ WAN and LAN" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MX95\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco Meraki datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "Stateful firewall", value: "3 Gbps" },
            { label: "Advanced Security, prevention", value: "1.5 Gbps" },
            { label: "Advanced Security, detection", value: "2 Gbps" },
            { label: "Site-to-site VPN", value: "2.5 Gbps" },
          ],
        },
        {
          title: "Scale",
          rows: [
            { label: "Recommended users", value: "Up to 500" },
            { label: "Site-to-site VPN tunnels", value: "Up to 500" },
            { label: "Secure Client sessions", value: "Up to 500" },
            { label: "Concurrent sessions", value: "200,000" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "WAN", value: "2× 10G SFP+ and 2× 2.5G RJ-45, PoE+ on port 4" },
            { label: "LAN", value: "4 GE RJ-45 and 2× 10G SFP+" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          rows: [
            { label: "Form factor", value: "1U rack" },
            { label: "Power", value: "Single power supply" },
          ],
        },
        {
          title: "Licensing",
          rows: [
            { label: "Editions", value: "Enterprise, Advanced Security, Secure SD-WAN Plus" },
            { label: "Management", value: "Meraki dashboard" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Meraki MX95\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What happens if our internet line goes down?",
        answer:
          "The MX fails over automatically to your second line or a cellular connection. Meraki rates WAN failover at under 5 seconds.",
      },
      {
        question: "Should we choose the MX85 or MX95?",
        answer:
          "The MX95 triples firewall throughput to 3 Gbps, adds 10G SFP+ and 2.5G ports, and supports up to 500 users and 500 VPN tunnels.",
      },
      {
        question: "Does it have redundant power?",
        answer:
          "No. The MX95 has a single power supply. For dual power, Meraki offers larger models. For uptime, two MX95s can run in high availability.",
      },
      {
        question: "What licence does it need?",
        answer:
          "Every MX needs an active Meraki licence to run. Enterprise covers firewall, SD-WAN and VPN. Advanced Security adds intrusion prevention, malware protection and content filtering. Secure SD-WAN Plus adds internet and application health monitoring.",
      },
      {
        question: "Can it be a VPN hub for our branches?",
        answer:
          "Yes. With up to 500 site-to-site tunnels, the MX95 can act as the hub for many smaller Meraki branches.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We stage and configure the router, cut over outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedRouters("cisco-meraki-mx95"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MX95, model sizing and availability.",
  },
  footNote: rtFootNote,
};
