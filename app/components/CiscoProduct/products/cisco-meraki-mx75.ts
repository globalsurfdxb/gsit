import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { RT_IMG as IMG, rtIcons, relatedRouters, rtFootNote } from "./routers-shared";

const DATASHEET = {
  text: "Cisco Meraki MX75 datasheet",
  // Local copy of Meraki's PDF (Save as PDF from https://documentation.meraki.com/SASE_and_SD-WAN/MX/Product_Information/Overviews_and_Datasheets/MX75_Datasheet)
  href: "/assets/datasheets/cisco/meraki-mx75-ds.pdf",
};

// Generated from rt_cisco-meraki-mx75.html (Cisco pages dev pack)
export const merakiMx75: LogitechProductData = {
  slug: "cisco-meraki-mx75",
  seo: {
    title: "Buy Cisco Meraki MX75 in Dubai | GS IT",
    description: "Buy the Cisco Meraki MX75 in Dubai: 1 Gbps firewall, SD-WAN and PoE+ for branches with up to 200 users.",
    ogTitle: "Cisco Meraki MX75 Security Appliance in Dubai | GS IT",
    ogDescription:
      "Cisco Meraki MX75 cloud-managed security and SD-WAN for busy small branches in the UAE, supplied and supported by GS IT.",
  },
  name: "Cisco Meraki MX75",
  sku: "MX75",
  image: `${IMG}/cisco-meraki-mx75-security-appliance.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Routers" },
      { label: "Cisco", href: "/cisco-network-routers" },
      { label: "Meraki MX75" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-meraki-mx75-security-appliance.webp`,
        alt: "Cisco Meraki MX75 security appliance",
      },
    ],
    tag: "Cisco Meraki small branch appliance",
    heading: "Cisco Meraki MX75\n Security Appliance",
    highlightLast: 2,
    description:
      "Meraki’s flagship small-branch appliance, with 3 WAN ports, 10 LAN ports and PoE+, for sites with up to 200 users.",
    pills: ["Up to 200 users", "Desktop"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Model", value: "MX75" },
      { label: "Firewall", value: "1 Gbps" },
      { label: "Ports", value: "3 WAN (1 SFP), 10 LAN" },
      { label: "VPN", value: "1 Gbps, up to 75 site-to-site tunnels" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Sized for busy branches", text: "Meraki recommends it for branches with up to 200 users" },
      { label: "Fibre or copper WAN", text: "1 SFP and 2 RJ-45 WAN ports" },
      { label: "PoE+ on LAN", text: "power an access point or phone straight from the MX" },
      { label: "Threat protection", text: "1 Gbps with Advanced Security in detection mode" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "MX75 licence editions\n for small branches",
    highlightLast: 3,
    subhead: "The hardware is the same; the licence edition decides which features run.",
    groups: [
      {
        label: "Licence editions",
        title: "Meraki MX75 licence editions",
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
    subhead: "What the Meraki MX75 brings to a branch network.",
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
        icon: rtIcons.bolt,
        title: "PoE+ on LAN ports",
        description: "Power devices such as access points and phones from the MX.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "A flagship appliance\n for small branches",
    highlightLast: 3,
    paragraphs: [
      "The MX75 gives small branches gigabit firewall and VPN performance, fibre WAN and PoE+, all managed from the Meraki dashboard.",
      "GS IT sizes the right licence edition, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "1 Gbps", label: "firewall throughput" },
      { value: "200", label: "recommended users", dark: true },
      { value: "10", label: "LAN ports" },
      { value: "< 5 s", label: "WAN failover" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MX75\n technical specifications",
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
            { label: "Recommended users", value: "Up to 200" },
            { label: "Site-to-site VPN tunnels", value: "Up to 75" },
            { label: "Secure Client sessions", value: "Up to 250" },
            { label: "Concurrent sessions", value: "50,000" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "WAN", value: "1 GE SFP and 2 GE RJ-45 (up to 2 active)" },
            { label: "LAN", value: "10 GE RJ-45" },
            { label: "PoE", value: "PoE+ on LAN ports" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          rows: [
            { label: "Form factor", value: "Desktop" },
            { label: "Weight", value: "0.85 kg" },
            { label: "Power", value: "External 100 W adapter" },
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
    heading: "Meraki MX75\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What happens if our internet line goes down?",
        answer:
          "The MX fails over automatically to your second line or a cellular connection. Meraki rates WAN failover at under 5 seconds.",
      },
      {
        question: "Can we use all three WAN ports at once?",
        answer:
          "Up to two WAN links are active at the same time. The third port gives flexibility to choose fibre or copper.",
      },
      {
        question: "How many people can it support?",
        answer:
          "Meraki recommends the MX75 for branches with up to 200 users. For more, the MX85 covers up to 250 and the MX95 up to 500.",
      },
      {
        question: "What licence does it need?",
        answer:
          "Every MX needs an active Meraki licence to run. Enterprise covers firewall, SD-WAN and VPN. Advanced Security adds intrusion prevention, malware protection and content filtering. Secure SD-WAN Plus adds internet and application health monitoring.",
      },
      {
        question: "Can it power our access point?",
        answer: "Yes. The MX75 has PoE+ on its LAN ports, so an access point or phone can run from it directly.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We stage and configure the router, cut over outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedRouters("cisco-meraki-mx75"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MX75, model sizing and availability.",
  },
  footNote: rtFootNote,
};
