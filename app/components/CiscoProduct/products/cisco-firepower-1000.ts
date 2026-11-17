import type { LogitechProductData } from "../Index";
import { STORE, storeCrumbs, heroButtons } from "../shared";

// Generated from Cisco Firepower 1000 Series _ GS IT.html
export const firewall1000: LogitechProductData = {
  slug: "cisco-firepower-1000",
  seo: {
    title: "Cisco Firepower 1000 Series Dubai | Small Business Firewall | GS IT",
    description: "Next-generation firewalls for small businesses and branch offices, in desktop and 1U rack models.",
  },
  name: "Cisco Firepower 1000 Series",
  sku: "firepower-1000",
  image: "",
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Firewalls" },
      { label: "Cisco", href: "/cisco-firewall-products" },
      { label: "Firepower 1000 Series" },
    ],
    gallery: [
      {
        src: "/assets/images/cisco/cisco-firewall-solutions/cisco-firepower-1000.webp",
        alt: "Cisco Firepower 1000 Series desktop and 1U rack firewalls",
      },
    ],
    tag: "Cisco Small Business Firewall",
    heading: "Cisco Firepower 1000 Series",
    highlightLast: 1,
    description:
      "Next-generation firewalls for small businesses and branch offices, in desktop and 1U rack models.",
    pills: ["Threat Defense or ASA", "Desktop and 1U models"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Series", value: "Firepower 1000" },
      { label: "Models", value: "1010, 1120, 1140, 1150" },
      { label: "Firewall + AVC", value: "890 Mbps to 5.3 Gbps" },
      { label: "Ports", value: "8× 1G copper, plus SFP and 10G SFP+ by model" },
      { label: "Form factor", value: "Desktop (1010), 1U rack" },
    ],
    aboutTitle: "About This Series",
    about: [
      {
        label: "Threat protection",
        text: "Intrusion prevention, application control and IP, URL and DNS threat intelligence.",
      },
      {
        label: "Office-ready desktop model",
        text: "The fanless 1010 has 8 switch ports, 2 of them PoE+.",
      },
      {
        label: "Room to grow",
        text: "1U models up to 5.3 Gbps, with 10G SFP+ on the 1150.",
      },
      {
        label: "Cisco’s ASA upgrade path",
        text: "Cisco lists the Firepower 1000 as the upgrade for ASA 5500-X firewalls.",
      },
    ],
    buttons: heroButtons,
  },
  modelsData: {
    tag: "Models",
    heading: "Firepower 1000 models\n for small businesses and branches",
    highlightLast: 5,
    subhead:
      "Choose by the traffic you need to inspect, VPN users and ports. We confirm the model during the security review.",
    groups: [
      {
        label: "Desktop",
        title: "Desktop model",
        description:
          "A fanless desktop firewall with built-in switch ports for small offices.",
        models: [
          {
            name: "Firepower 1010",
            desc: "8× 1G copper, 2 of them PoE+",
            points: [
              "890 Mbps firewall + AVC",
              "400 Mbps IPsec VPN",
              "Up to 75 VPN peers",
              "Fanless",
            ],
          },
        ],
      },
      {
        label: "1U rack",
        title: "1U rack models",
        description: "Rack-mount firewalls for branches and small head offices.",
        models: [
          {
            name: "Firepower 1120",
            desc: "8× 1G copper, 4× 1G SFP",
            points: ["2.3 Gbps firewall + AVC", "1.2 Gbps IPsec VPN", "Up to 150 VPN peers"],
          },
          {
            name: "Firepower 1140",
            desc: "8× 1G copper, 4× 1G SFP",
            points: ["3.3 Gbps firewall + AVC", "1.4 Gbps IPsec VPN", "Up to 400 VPN peers"],
          },
          {
            name: "Firepower 1150",
            desc: "8× 1G copper, 2× 1G SFP, 2× 10G SFP+",
            points: ["5.3 Gbps firewall + AVC", "2.4 Gbps IPsec VPN", "Up to 800 VPN peers"],
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Next-generation protection\n at small business cost",
    highlightLast: 4,
    subhead: "What the Firepower 1000 Series brings to a small business or branch network.",
    data: [
      {
        icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><rect x=\"9\" y=\"10\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10V8.5a2 2 0 0 1 4 0V10\"/>",
        title: "Intrusion prevention",
        description: "Detects and blocks attacks, and correlates threats with the devices on your network.",
        highlight: true,
      },
      {
        icon: "<path d=\"M3 12c2.5-4.5 5.5-7 9-7s6.5 2.5 9 7c-2.5 4.5-5.5 7-9 7s-6.5-2.5-9-7z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
        title: "Application control",
        description: "Identifies more than 4,000 applications, plus users, locations and websites.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
        title: "Security intelligence",
        description: "IP, URL and DNS threat intelligence blocks traffic to known malicious destinations.",
      },
      {
        icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
        title: "Malware Defense",
        description: "Detects, blocks, tracks and contains malware, during and after an attack.",
      },
      {
        icon: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
        title: "Site-to-site and remote VPN",
        description: "Connect branches to the head office and give staff secure remote access.",
      },
      {
        icon: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
        title: "Central management",
        description: "Manage from Cisco Firewall Management Center or from the cloud.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Next-generation security\n for small businesses",
    highlightLast: 3,
    paragraphs: [
      "The Firepower 1000 Series brings next-generation firewall protection to small businesses and branches. Cisco lists it as the upgrade path for the ASA 5500-X range, and it remains available to order.",
      "GS IT sizes the right model and subscriptions, migrates your existing rules, then installs and supports the firewall after go-live.",
    ],
    facts: [
      { value: "5.3 Gbps", label: "firewall + AVC on the 1150" },
      { value: "800", label: "VPN peers on the 1150", dark: true },
      { value: "4,000+", label: "applications identified" },
      { value: "10G", label: "SFP+ ports on the 1150" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Firepower 1000\n technical specifications",
    highlightLast: 2,
    subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
    note: "For a model-by-model comparison, ask us or see the datasheet.",
    columns: [
      [
        {
          title: "Performance, Threat Defense",
          rows: [
            { label: "Firewall + AVC", value: "890 Mbps (1010), 2.3 Gbps (1120), 3.3 Gbps (1140), 5.3 Gbps (1150)" },
            { label: "Firewall + AVC + IPS", value: "880 Mbps, 2.3 Gbps, 3.3 Gbps, 4.9 Gbps" },
            { label: "IPsec VPN", value: "400 Mbps, 1.2 Gbps, 1.4 Gbps, 2.4 Gbps" },
            { label: "TLS decryption", value: "195 Mbps, 850 Mbps, 1.2 Gbps, 1.4 Gbps" },
          ],
        },
        {
          title: "Scale",
          rows: [
            { label: "Concurrent sessions, with AVC", value: "100,000 (1010), 200,000 (1120), 400,000 (1140), 600,000 (1150)" },
            { label: "New connections per second", value: "6,000, 15,000, 22,000, 28,000" },
            { label: "Maximum VPN peers", value: "75, 150, 400, 800" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "1010", value: "8× 1G copper, 2 PoE+" },
            { label: "1120 and 1140", value: "8× 1G copper, 4× 1G SFP" },
            { label: "1150", value: "8× 1G copper, 2× 1G SFP, 2× 10G SFP+" },
            { label: "Management", value: "1× 1G copper" },
          ],
        },
      ],
      [
        {
          title: "Performance, ASA",
          rows: [
            { label: "Stateful firewall", value: "2 Gbps (1010), 4.5 Gbps (1120), 6 Gbps (1140), 7.5 Gbps (1150)" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "1010", value: "Desktop, fanless, external power supply" },
            { label: "1120, 1140, 1150", value: "1U rack, internal power supply" },
          ],
        },
        {
          title: "Software and management",
          rows: [
            { label: "Software", value: "Threat Defense or ASA" },
            { label: "Management", value: "Cisco Firewall Management Center, or cloud management" },
          ],
        },
      ],
    ],
    datasheet: {
      text: "Cisco Firepower 1000 datasheet",
      href: "/assets/datasheets/cisco/datasheet-c78-742469.pdf",
    },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Firepower 1000\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is the Firepower 1000 still on sale?",
        answer: "Yes. Cisco lists the Firepower 1000 Series as available to order. The newer Secure Firewall 1200 Series offers more throughput if you need room to grow.",
      },
      {
        question: "Should we choose the Firepower 1000 or Secure Firewall 1200?",
        answer: "The Firepower 1000 suits sites that need up to 5.3 Gbps of firewall and application control. The 1200 starts at 6 Gbps and goes up to 24 Gbps, with 10G and PoE options.",
      },
      {
        question: "We run an ASA 5508-X or 5516-X. Is this the replacement?",
        answer: "Yes. Cisco support for the ASA 5508-X and 5516-X ended on 31 August 2026, and Cisco lists the Firepower 1000 as the upgrade path. We migrate your rules and VPNs to the new firewall.",
      },
      {
        question: "Which model do we need?",
        answer: "Size by the traffic the firewall has to inspect, not the number of users. We look at your internet speed, remote VPN users and branches, and choose a model with headroom.",
      },
      {
        question: "What subscriptions does it need?",
        answer: "The base licence comes with the firewall. Intrusion prevention, Malware Defense and URL filtering are 1, 3 or 5-year subscriptions, and remote access VPN needs a Cisco Secure Client licence. We include the right combination in the quote.",
      },
      {
        question: "Do you install and support it?",
        answer: "Yes. GS IT is a Cisco partner. We migrate your rules, install and configure the firewall outside working hours, and support it after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Compare with\n other Cisco firewalls",
    highlightLast: 3,
    subhead: "Other Cisco Secure Firewall series for offices and branches.",
    linkLabel: "View product",
    items: [
      {
        title: "Cisco Secure Firewall 200 Series",
        image: "/assets/images/cisco/cisco-firewall-solutions/gallery-1.webp",
        href: "/store/next-generation-firewall-products/cisco/cisco-secure-firewall-200",
      },
      {
        title: "Cisco Secure Firewall 1200 Series",
        image: "/assets/images/cisco/cisco-firewall-solutions/gallery-1200.webp",
        href: "/store/next-generation-firewall-products/cisco/cisco-secure-firewall-1200",
      },
    ],
  },
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT security specialist will contact you about the Firepower 1000, model sizing and availability.",
  },
};