import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { RT_IMG as IMG, rtIcons, relatedRouters, rtFootNote } from "./routers-shared";

const DATASHEET = {
  text: "Cisco Meraki MX85 datasheet",
  // Local copy of Meraki's PDF (Save as PDF from https://documentation.meraki.com/SASE_and_SD-WAN/MX/Product_Information/Overviews_and_Datasheets/MX85_Datasheet)
  href: "/assets/datasheets/cisco/meraki-mx85-ds.pdf",
};

// Generated from rt_cisco-meraki-mx85.html (Cisco pages dev pack)
export const merakiMx85: LogitechProductData = {
  slug: "cisco-meraki-mx85",
  seo: {
    title: "Buy Cisco Meraki MX85 in Dubai | GS IT",
    description:
      "Buy the Cisco Meraki MX85 in Dubai: rack-mount security and SD-WAN with SFP fibre for branches with up to 250 users.",
    ogTitle: "Cisco Meraki MX85 Security Appliance in Dubai | GS IT",
    ogDescription:
      "Cisco Meraki MX85 1U security and SD-WAN for small to medium branches in the UAE, supplied, installed and supported by GS IT.",
  },
  name: "Cisco Meraki MX85",
  sku: "MX85",
  image: `${IMG}/cisco-meraki-mx85-1u-security-appliance.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Routers" },
      { label: "Cisco", href: "/cisco-network-routers" },
      { label: "Meraki MX85" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-meraki-mx85-1u-security-appliance.webp`,
        alt: "Cisco Meraki MX85 1U security appliance",
      },
    ],
    tag: "Cisco Meraki branch appliance",
    heading: "Cisco Meraki MX85\n Security Appliance",
    highlightLast: 2,
    description:
      "Rack-mount security and SD-WAN for small to medium branches with up to 250 users, with SFP on WAN and LAN.",
    pills: ["Up to 250 users", "1U rack"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Model", value: "MX85" },
      { label: "Firewall", value: "1 Gbps" },
      { label: "Ports", value: "4 WAN (2 SFP), 8 LAN + 2 SFP" },
      { label: "VPN", value: "1 Gbps, up to 200 site-to-site tunnels" },
      { label: "Form factor", value: "1U rack" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Sized for medium branches", text: "Meraki recommends it for branches with up to 250 users" },
      { label: "Fibre on WAN and LAN", text: "2 SFP WAN and 2 SFP LAN ports" },
      { label: "More VPN tunnels", text: "up to 200 site-to-site tunnels" },
      { label: "Powers a cellular gateway", text: "PoE+ on WAN port 4" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "MX85 licence editions\n for medium branches",
    highlightLast: 3,
    subhead: "The hardware is the same; the licence edition decides which features run.",
    groups: [
      {
        label: "Licence editions",
        title: "Meraki MX85 licence editions",
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
    subhead: "What the Meraki MX85 brings to a branch network.",
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
        icon: rtIcons.plug,
        title: "Rack-mount with internal power",
        description: "A 1U chassis with internal power supply and a USB 3.0 port.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Rack-mount security\n for growing branches",
    highlightLast: 3,
    paragraphs: [
      "The MX85 moves Meraki security into the rack, with fibre on both WAN and LAN and more VPN tunnels for hub-and-spoke designs.",
      "GS IT sizes the right licence edition, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "1 Gbps", label: "firewall throughput" },
      { value: "250", label: "recommended users", dark: true },
      { value: "200", label: "site-to-site VPN tunnels" },
      { value: "< 5 s", label: "WAN failover" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MX85\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco Meraki datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "Stateful firewall", value: "1 Gbps" },
            { label: "Advanced Security, prevention", value: "500 Mbps" },
            { label: "Advanced Security, detection", value: "1 Gbps" },
            { label: "Site-to-site VPN", value: "1 Gbps" },
          ],
        },
        {
          title: "Scale",
          rows: [
            { label: "Recommended users", value: "Up to 250" },
            { label: "Site-to-site VPN tunnels", value: "Up to 200" },
            { label: "Secure Client sessions", value: "Up to 250" },
            { label: "Concurrent sessions", value: "125,000" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "WAN", value: "2 GE SFP and 2 GE RJ-45 (up to 2 active), PoE+ on port 4" },
            { label: "LAN", value: "8 GE RJ-45 and 2 GE SFP" },
            { label: "USB", value: "1 USB 3.0" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          rows: [
            { label: "Form factor", value: "1U rack (rack kit optional)" },
            { label: "Weight", value: "3.7 kg" },
            { label: "Power", value: "Internal power supply" },
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
    heading: "Meraki MX85\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What happens if our internet line goes down?",
        answer:
          "The MX fails over automatically to your second line or a cellular connection. Meraki rates WAN failover at under 5 seconds.",
      },
      {
        question: "Should we choose the MX75 or MX85?",
        answer:
          "Both deliver 1 Gbps of firewall throughput. The MX85 adds rack mounting, SFP fibre on LAN, internal power and up to 200 VPN tunnels.",
      },
      {
        question: "How many people can it support?",
        answer: "Meraki recommends the MX85 for branches with up to 250 users. For more, the MX95 covers up to 500.",
      },
      {
        question: "What licence does it need?",
        answer:
          "Every MX needs an active Meraki licence to run. Enterprise covers firewall, SD-WAN and VPN. Advanced Security adds intrusion prevention, malware protection and content filtering. Secure SD-WAN Plus adds internet and application health monitoring.",
      },
      {
        question: "Can we use all four WAN ports at once?",
        answer: "Up to two WAN links are active at the same time. The extra ports let you choose fibre or copper.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We stage and configure the router, cut over outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedRouters("cisco-meraki-mx85"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MX85, model sizing and availability.",
  },
  footNote: rtFootNote,
};
