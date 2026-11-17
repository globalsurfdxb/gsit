import type { LogitechProductData } from "../Index";
import { STORE, storeCrumbs, heroButtons } from "../shared";

// Generated from Logitech MeetUp 2 _ GS IT.html
export const firewall200: LogitechProductData = {
  slug: "cisco-secure-firewall-200",
  seo: {
    title: "Logitech MeetUp 2 Dubai | All-in-One Compact Video Bar | GS IT",
    description: "An all-in-one USB video bar for huddle and small rooms with a 4K camera, six beamforming microphones and AI audio and video features.",
  },
  name: "Logitech MeetUp 2",
  sku: "960-001681",
  image: "",
 heroData: {
  crumbs: [
    ...storeCrumbs,
    { label: "Firewalls" },
    { label: "Cisco", href: "/cisco-firewall-solutions" },
    { label: "Secure Firewall 200 Series" },
  ],
  gallery: [
    {
      src: "/assets/images/cisco/cisco-firewall-solutions/gallery-1.webp",
      alt: "A stack of three Cisco Secure Firewall 200 Series desktop firewalls",
    },
  ],
  tag: "Cisco Small Office Firewall",
  heading: "Cisco Secure Firewall 200 Series",
  highlightLast: 1,
  description:
    "Compact, fanless firewalls for small offices and branches, with next-generation threat protection and integrated SD-WAN.",
  pills: ["Fanless", "Integrated SD-WAN"],
  meta: [
    { label: "Brand", value: "Cisco" },
    { label: "Series", value: "Secure Firewall 200" },
    { label: "Models", value: "220, 240P" },
    { label: "Firewall + AVC", value: "1.5 Gbps to 3.2 Gbps" },
    { label: "Ports", value: "4 or 8 × 1G copper, 1 or 2 × 1G SFP" },
    {
      label: "Form factor",
      value: "Desktop (rack and wall mount kits available)",
    },
  ],
  aboutTitle: "About This Series",
  about: [
    {
      label: "Silent design",
      text: "Both models are fanless, with passive cooling.",
    },
    {
      label: "Zero-day protection",
      text: "Snort 3 intrusion prevention with SnortML machine learning.",
    },
    {
      label: "Encrypted traffic visibility",
      text: "The Encrypted Visibility Engine inspects TLS 1.3 and QUIC traffic without decrypting it.",
    },
    {
      label: "Power for devices",
      text: "The 240P has 4 PoE+ ports with 120 W in total.",
    },
  ],
  buttons: heroButtons,
},

modelsData: {
  tag: "Models",
  heading: "Secure Firewall 200 models \n for small sites",
  highlightLast: 5,
  subhead:
    "Both models are desktop units with Threat Defense or ASA software and active/standby high availability.",
  groups: [
    {
      label: " ",
      title: "Secure Firewall 200 models",
      description:
        "Choose by ports, PoE and the traffic you need to inspect.",
      models: [
        {
          name: "Secure Firewall 220",
          desc: "4× 1G copper and 1× 1G SFP",
          points: [
            "1.5 Gbps firewall + AVC + IPS",
            "1.2 Gbps IPsec VPN",
            "Up to 50 VPN peers",
            "Fanless, 30 W external power supply",
          ],
        },
        {
          name: "Secure Firewall 240P",
          desc: "8× 1G copper and 2× 1G SFP, with 4 PoE+ ports",
          points: [
            "3 Gbps firewall + AVC + IPS",
            "3 Gbps IPsec VPN",
            "Up to 75 VPN peers",
            "Fanless, 120 W PoE+ budget",
          ],
        },
      ],
    },
     
  ],
},
  featuresData: {
  tag: "Features",
  heading: "Enterprise threat protection\n in a desktop firewall",
  highlightLast: 4,
  subhead: "What the Secure Firewall 200 Series brings to a small office or branch.",
  data: [
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><rect x=\"9\" y=\"10\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10V8.5a2 2 0 0 1 4 0V10\"/>",
      title: "Intrusion prevention with SnortML",
      description: "Snort 3 blocks known attacks, and SnortML uses machine learning to detect exploits of zero-day vulnerabilities.",
      highlight: true,
    },
    {
      icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
      title: "Encrypted Visibility Engine",
      description: "Identifies applications and threats in encrypted traffic, including TLS 1.3 and QUIC, without decrypting it.",
    },
    {
      icon: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
      title: "Integrated SD-WAN",
      description: "Built-in SD-WAN, with zero-touch provisioning for faster branch rollout.",
    },
    {
      icon: "<path d=\"M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8\"/>",
      title: "Fanless and efficient",
      description: "Passive cooling keeps it silent. The 220 draws 12.7 W in typical use.",
    },
    {
      icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
      title: "PoE+ on the 240P",
      description: "Four PoE+ ports deliver up to 25.5 W each, 120 W in total, for phones, cameras and access points.",
    },
    {
      icon: "<path d=\"M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z\"/>",
      title: "Cloud management",
      description: "Manage firewalls from Cisco Security Cloud Control, with one policy across every site.",
    },
  ],
},
 overviewData: {
  tag: "Overview",
  heading: "Enterprise security\n for the smallest sites",
  highlightLast: 4,
  paragraphs: [
    "The Secure Firewall 200 Series is Cisco’s most affordable firewall line for branches and small offices. It runs the same Threat Defense software as larger Cisco firewalls on a silent desktop unit.",
    "GS IT sizes the right model and subscriptions, then installs, configures and supports it after go-live.",
  ],
  facts: [
    { value: "3.2 Gbps", label: "firewall + AVC on the 240P" },
    { value: "Fanless", label: "passive cooling on both models", dark: true },
    { value: "120 W", label: "PoE+ budget on the 240P" },
    { value: "75", label: "VPN peers on the 240P" },
  ],
}, 
 specsData: {
  tag: "Specifications",
  heading: "Secure Firewall 200\n technical specifications",
  highlightLast: 2,
  subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
  note: "For a model-by-model comparison, ask us or see the datasheet.",
  columns: [
    [
      {
        title: "Performance, Threat Defense",
        rows: [
          { label: "Firewall + AVC", value: "1.5 Gbps (220), 3.2 Gbps (240P)" },
          { label: "Firewall + AVC + IPS", value: "1.5 Gbps (220), 3 Gbps (240P)" },
          { label: "IPsec VPN", value: "1.2 Gbps (220), 3 Gbps (240P)" },
          { label: "TLS decryption", value: "0.7 Gbps (220), 0.9 Gbps (240P)" },
        ],
      },
      {
        title: "Scale",
        rows: [
          { label: "Concurrent sessions, with AVC", value: "30,000 (220), 50,000 (240P)" },
          { label: "New connections per second", value: "6,000 (220), 15,000 (240P)" },
          { label: "Maximum VPN peers", value: "50 (220), 75 (240P)" },
          { label: "Virtual routers (VRF)", value: "5" },
        ],
      },
      {
        title: "Interfaces",
        rows: [
          { label: "220", value: "4× 1G copper, 1× 1G SFP" },
          { label: "240P", value: "8× 1G copper, 2× 1G SFP" },
          { label: "Management", value: "1× 1G copper" },
          { label: "Console", value: "USB Type-C and RJ-45" },
        ],
      },
    ],
    [
      {
        title: "Power and cooling",
        rows: [
          { label: "Power supply", value: "External: 30 W (220), 190 W (240P)" },
          { label: "PoE (240P)", value: "4 ports, 802.3at, up to 25.5 W each, 120 W total" },
          { label: "Cooling", value: "Passive, fanless" },
        ],
      },
      {
        title: "Physical",
        rows: [
          { label: "Form factor", value: "Desktop; rack and wall mount accessories" },
          { label: "Weight", value: "1.17 kg (220), 1.49 kg (240P)" },
          { label: "Storage", value: "64 GB" },
        ],
      },
      {
        title: "Software and availability",
        rows: [
          { label: "Software", value: "Threat Defense or ASA" },
          { label: "High availability", value: "Active/standby" },
          { label: "Clustering", value: "Not supported" },
        ],
      },
    ],
  ],
  datasheet: {
    text: "Cisco Secure Firewall 200 datasheet",
    href: "/assets/datasheets/cisco/secure-firewall-200-ds.pdf",
  },
},
  faqHeaderData: {
  tag: "FAQs",
  heading: "Secure Firewall 200\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Should we choose the 220 or 240P?",
      answer: "The 220 suits small offices that need up to 1.5 Gbps of inspected traffic. The 240P doubles the ports, adds PoE+ for phones, cameras or access points, and inspects up to 3 Gbps.",
    },
    {
      question: "Is it really silent?",
      answer: "Yes. Both models are fanless, so they suit offices, shops and clinics where the firewall sits near people.",
    },
    {
      question: "Can it replace our old firewall?",
      answer: "Yes. The 200 Series runs Threat Defense or ASA software, and we migrate your existing rules, NAT and VPN settings before cutover.",
    },
    {
      question: "How many people can connect remotely?",
      answer: "The 220 supports up to 50 VPN peers and the 240P up to 75. Remote access needs a Cisco Secure Client licence.",
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
      title: "Cisco Firepower 1000 Series",
      image: "/assets/images/cisco/cisco-firewall-solutions/cisco-firepower-1000.webp",
      href: "/store/next-generation-firewall-products/cisco/cisco-firepower-1000",
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
    heading: "Speak with Our\n Logitech Specialists",
    highlightLast: 2,
    text: "Share your details and a GS IT security specialist will contact you about the Secure Firewall 200, model sizing and availability.",
  },
};
