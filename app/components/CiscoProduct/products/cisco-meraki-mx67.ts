import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { RT_IMG as IMG, rtIcons, relatedRouters, rtFootNote } from "./routers-shared";

const DATASHEET = {
  text: "Cisco Meraki MX67 datasheet",
  // Local copy of Meraki's PDF (Save as PDF from https://documentation.meraki.com/SASE_and_SD-WAN/MX/Product_Information/Overviews_and_Datasheets/MX67_and_MX68_Datasheet)
  href: "/assets/datasheets/cisco/meraki-mx67-mx68-ds.pdf",
};

// Generated from rt_cisco-meraki-mx67.html (Cisco pages dev pack)
export const merakiMx67: LogitechProductData = {
  slug: "cisco-meraki-mx67",
  seo: {
    title: "Buy Cisco Meraki MX67 in Dubai | GS IT",
    description:
      "Buy the Cisco Meraki MX67 in Dubai: cloud-managed firewall, SD-WAN and VPN for small branches with up to 50 users.",
    ogTitle: "Cisco Meraki MX67 Security Appliance in Dubai | GS IT",
    ogDescription:
      "Cloud-managed Cisco Meraki MX67 security and SD-WAN for small branches and shops in the UAE, supplied and supported by GS IT.",
  },
  name: "Cisco Meraki MX67",
  sku: "MX67",
  image: `${IMG}/cisco-meraki-mx67-security-appliance.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Routers" },
      { label: "Cisco", href: "/cisco-network-routers" },
      { label: "Meraki MX67" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-meraki-mx67-security-appliance.webp`,
        alt: "Cisco Meraki MX67 security appliance",
      },
    ],
    tag: "Cisco Meraki small branch appliance",
    heading: "Cisco Meraki MX67\n Security Appliance",
    highlightLast: 2,
    description: "Cloud-managed security and SD-WAN for small branches and shops with up to 50 users.",
    pills: ["Up to 50 users", "Desktop"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Model", value: "MX67, MX67W (Wi-Fi)" },
      { label: "Firewall", value: "700 Mbps" },
      { label: "Ports", value: "1 WAN, 1 LAN/WAN, 3 LAN" },
      { label: "VPN", value: "400 Mbps, up to 50 site-to-site tunnels" },
      { label: "Form factor", value: "Desktop" },
    ],
    aboutTitle: "About this series",
    about: [
      { label: "Sized for small sites", text: "Meraki recommends it for branches with up to 50 users" },
      { label: "Dual WAN", text: "one LAN port converts to a second internet port" },
      { label: "Cellular backup", text: "USB 3.0 port for a 3G or 4G modem" },
      { label: "Optional Wi-Fi", text: "the MX67W adds an 802.11ac access point" },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "MX67 licence editions\n for small branches",
    highlightLast: 3,
    subhead: "The hardware is the same; the licence edition decides which features run.",
    groups: [
      {
        label: "Licence editions",
        title: "Meraki MX67 licence editions",
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
    subhead: "What the Meraki MX67 brings to a branch network.",
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
        icon: rtIcons.desktop,
        title: "Compact desktop design",
        description: "A small desktop unit with an external power adapter, for shops and small offices.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Enterprise security\n for small branches",
    highlightLast: 3,
    paragraphs: [
      "The MX67 brings Meraki firewall, SD-WAN and VPN to small branches, shops and home offices, all managed from the Meraki dashboard.",
      "GS IT sizes the right model and licence edition, then installs, configures and supports it after go-live.",
    ],
    facts: [
      { value: "700 Mbps", label: "firewall throughput" },
      { value: "50", label: "recommended users", dark: true },
      { value: "400 Mbps", label: "VPN throughput" },
      { value: "< 5 s", label: "WAN failover" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MX67\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco Meraki datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Performance",
          rows: [
            { label: "Stateful firewall", value: "700 Mbps" },
            { label: "Advanced Security, prevention", value: "300 Mbps" },
            { label: "Advanced Security, detection", value: "400 Mbps" },
            { label: "Site-to-site VPN", value: "400 Mbps" },
          ],
        },
        {
          title: "Scale",
          rows: [
            { label: "Recommended users", value: "Up to 50" },
            { label: "Site-to-site VPN tunnels", value: "Up to 50" },
            { label: "Secure Client sessions", value: "Up to 100" },
            { label: "Concurrent sessions", value: "25,000" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "WAN", value: "1 dedicated GE RJ-45" },
            { label: "LAN", value: "3 GE RJ-45, plus 1 LAN/WAN convertible" },
            { label: "USB", value: "1 USB 3.0, for a 3G or 4G modem" },
            { label: "PoE", value: "Not supported" },
          ],
        },
      ],
      [
        {
          title: "Physical",
          rows: [
            { label: "Form factor", value: "Desktop" },
            { label: "Power", value: "External adapter" },
            { label: "Wi-Fi (MX67W)", value: "802.11ac, up to 4 SSIDs" },
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
    heading: "Meraki MX67\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is the MX67 still on sale?",
        answer:
          "Yes. Only the MX67C cellular model reaches end of sale, on 27 November 2026. The MX67 and MX67W remain available.",
      },
      {
        question: "What happens if our internet line goes down?",
        answer:
          "The MX fails over automatically to your second line or a cellular connection. Meraki rates WAN failover at under 5 seconds.",
      },
      {
        question: "How many people can it support?",
        answer: "Meraki recommends the MX67 for branches with up to 50 users. For more, the MX75 covers up to 200.",
      },
      {
        question: "What licence does it need?",
        answer:
          "Every MX needs an active Meraki licence to run. Enterprise covers firewall, SD-WAN and VPN. Advanced Security adds intrusion prevention, malware protection and content filtering. Secure SD-WAN Plus adds internet and application health monitoring.",
      },
      {
        question: "Do we need the Wi-Fi model?",
        answer:
          "Only if the site has no access point. For anything beyond a small room, dedicated Meraki access points give better coverage.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We stage and configure the router, cut over outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedRouters("cisco-meraki-mx67"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT network specialist will contact you about the Meraki MX67, model sizing and availability.",
  },
  footNote: rtFootNote,
};
