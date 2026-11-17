import type { LogitechProductData } from "../Index";
import { STORE, storeCrumbs, heroButtons } from "../shared";

// Generated from Logitech MeetUp 2 _ GS IT.html
export const firewall1200: LogitechProductData = {
  slug: "cisco-secure-firewall-1200",
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
    { label: "Cisco", href: "/cisco-firewall-products" },
    { label: "Secure Firewall 1200 Series" },
  ],
  gallery: [
    {
      src: "/assets/images/cisco/cisco-firewall-solutions/gallery-1200.webp",
      alt: "Cisco Secure Firewall 1200 Series compact and 1U rack firewalls",
    },
  ],
  tag: "Cisco Branch Firewall",
  heading: "Cisco Secure Firewall 1200 Series",
  highlightLast: 1,
  description:
    "Compact and 1U firewalls for distributed branches and midsize sites, with high throughput, 10G ports and PoE options.",
  pills: ["Threat Defense or ASA", "Desktop and 1U models"],
  meta: [
    { label: "Brand", value: "Cisco" },
    { label: "Series", value: "Secure Firewall 1200" },
    { label: "Models", value: "1210CE, 1210CP, 1220CX, 1230, 1240, 1250" },
    { label: "Firewall + AVC", value: "6 Gbps to 24 Gbps" },
    { label: "Ports", value: "8× 1G or 2.5G copper, up to 4× 10G SFP+" },
    { label: "Form factor", value: "Desktop (compact models), 1U rack" },
  ],
  aboutTitle: "About This Series",
  about: [
    {
      label: "High throughput",
      text: "Up to 24 Gbps of firewall and application control on the 1250.",
    },
    {
      label: "10G fibre",
      text: "2× SFP+ on the 1220CX and 4× SFP+ on the 1U models.",
    },
    {
      label: "Power for devices",
      text: "The 1210CP has 4 PoE+ ports with 120 W in total.",
    },
    {
      label: "Managed your way",
      text: "On the device, from Firewall Management Center, or from Security Cloud Control.",
    },
  ],
  buttons: heroButtons,
},

modelsData: {
  tag: "Models",
  heading: "Secure Firewall 1200 models\n for branches and midsize sites",
  highlightLast: 5,
  subhead:
    "Choose by the traffic you need to inspect, VPN users and ports. We confirm the model during the security review.",
  groups: [
    {
      label: "Compact",
      title: "Compact models",
      description:
        "Desktop firewalls for branch offices, with optional rack shelf.",
      models: [
        {
          name: "Secure Firewall 1210CE",
          desc: "8× 1G copper",
          points: [
            "6 Gbps firewall + AVC",
            "5 Gbps IPsec VPN",
            "Up to 200 VPN peers",
          ],
        },
        {
          name: "Secure Firewall 1210CP",
          desc: "8× 1G copper, 4 of them PoE+",
          points: [
            "6 Gbps firewall + AVC",
            "5 Gbps IPsec VPN",
            "120 W PoE+ budget",
          ],
        },
        {
          name: "Secure Firewall 1220CX",
          desc: "8× 1G copper, 2× 10G SFP+",
          points: [
            "9 Gbps firewall + AVC",
            "10 Gbps IPsec VPN",
            "Up to 300 VPN peers",
          ],
        },
      ],
    },
    {
      label: "1U rack",
      title: "1U rack models",
      description:
        "Rack-mount firewalls for larger branches and midsize head offices.",
      models: [
        {
          name: "Secure Firewall 1230",
          desc: "8× 1G copper, 4× 10G SFP+",
          points: [
            "13 Gbps firewall + AVC",
            "13 Gbps IPsec VPN",
            "Up to 500 VPN peers",
          ],
        },
        {
          name: "Secure Firewall 1240",
          desc: "8× 1G copper, 4× 10G SFP+",
          points: [
            "18 Gbps firewall + AVC",
            "18 Gbps IPsec VPN",
            "Up to 1,000 VPN peers",
          ],
        },
        {
          name: "Secure Firewall 1250",
          desc: "8× 2.5G copper, 4× 10G SFP+",
          points: [
            "24 Gbps firewall + AVC",
            "22 Gbps IPsec VPN",
            "Up to 1,500 VPN peers",
          ],
        },
      ],
    },
  ],
},
featuresData: {
  tag: "Features",
  heading: "Branch security\n with headroom to grow",
  highlightLast: 4,
  subhead: "What the Secure Firewall 1200 Series brings to a branch or midsize network.",
  data: [
    {
      icon: "<path d=\"M4 12h4l2-6 4 12 2-6h4\"/>",
      title: "High throughput",
      description: "From 6 Gbps on the 1210 to 24 Gbps on the 1250, with hardware acceleration for encryption.",
      highlight: true,
    },
    {
      icon: "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><rect x=\"9\" y=\"10\" width=\"6\" height=\"5\" rx=\"1\"/><path d=\"M10 10V8.5a2 2 0 0 1 4 0V10\"/>",
      title: "Intrusion prevention",
      description: "Snort 3 inspection, backed by Cisco Talos threat intelligence, blocks known and emerging attacks.",
    },
    {
      icon: "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/>",
      title: "Encrypted Visibility Engine",
      description: "Identifies applications and threats in encrypted traffic without decrypting it.",
    },
    {
      icon: "<circle cx=\"6\" cy=\"18\" r=\"2\"/><circle cx=\"18\" cy=\"6\" r=\"2\"/><path d=\"M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7\"/>",
      title: "SD-WAN for branches",
      description: "Cisco positions the 1200 as an SD-WAN firewall for distributed branches.",
    },
    {
      icon: "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>",
      title: "PoE on the 1210CP",
      description: "Four PoE+ ports power phones, cameras or access points, up to 120 W in total.",
    },
    {
      icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 14l3-3 3 2 4-5M8 21h8\"/>",
      title: "Three ways to manage",
      description: "On-box Device Manager, Cisco Firewall Management Center or Security Cloud Control.",
    },
  ],
},
overviewData: {
  tag: "Overview",
  heading: "The newer generation\n of Cisco branch firewalls",
  highlightLast: 4,
  paragraphs: [
    "The Secure Firewall 1200 Series launched in 2024 with three compact models, and Cisco added three 1U models in 2025. It delivers much higher throughput than the Firepower 1000 for branches and midsize sites.",
    "GS IT sizes the right model and subscriptions, migrates your existing rules, then installs and supports the firewall after go-live.",
  ],
  facts: [
    { value: "24 Gbps", label: "firewall + AVC on the 1250" },
    { value: "1,500", label: "VPN peers on the 1250", dark: true },
    { value: "10G", label: "SFP+ on the 1220CX and 1U models" },
    { value: "120 W", label: "PoE+ budget on the 1210CP" },
  ],
},
specsData: {
  tag: "Specifications",
  heading: "Secure Firewall 1200\n technical specifications",
  highlightLast: 2,
  subhead: "Series-level summary from the Cisco datasheet. Exact figures vary by model.",
  note: "For a model-by-model comparison, ask us or see the datasheet.",
  columns: [
    [
      {
        title: "Performance, Threat Defense",
        rows: [
          { label: "Firewall + AVC", value: "6 Gbps (1210), 9 Gbps (1220), 13 Gbps (1230), 18 Gbps (1240), 24 Gbps (1250)" },
          { label: "Firewall + AVC + IPS", value: "6, 9, 9, 12, 18 Gbps" },
          { label: "IPsec VPN", value: "5, 10, 13, 18, 22 Gbps" },
          { label: "TLS decryption", value: "1, 1.5, 2.5, 3.2, 4.1 Gbps" },
        ],
      },
      {
        title: "Scale",
        rows: [
          { label: "Concurrent sessions, with AVC", value: "200,000 (1210) to 1 million (1250)" },
          { label: "Maximum VPN peers", value: "200, 300, 500, 1,000, 1,500" },
          { label: "Virtual routers (VRF)", value: "5 (1210) to 15 (1250)" },
        ],
      },
      {
        title: "Interfaces",
        rows: [
          { label: "1210CE", value: "8× 1G copper" },
          { label: "1210CP", value: "8× 1G copper, 4 PoE+ (802.3at, 120 W total)" },
          { label: "1220CX", value: "8× 1G copper, 2× 10G SFP+" },
          { label: "1230 and 1240", value: "8× 1G copper, 4× 10G SFP+" },
          { label: "1250", value: "8× 2.5G copper, 4× 10G SFP+" },
        ],
      },
    ],
    [
      {
        title: "Power and cooling",
        rows: [
          { label: "Compact models", value: "External power supply, integrated blower" },
          { label: "1U models", value: "Integrated power supply, front-to-back airflow" },
        ],
      },
      {
        title: "Storage",
        rows: [
          { label: "Compact models", value: "480 GB SSD" },
          { label: "1U models", value: "960 GB SSD, field-replaceable" },
        ],
      },
      {
        title: "Software and management",
        rows: [
          { label: "Software", value: "Threat Defense or ASA" },
          { label: "Management", value: "Device Manager, Firewall Management Center, Security Cloud Control" },
          { label: "High availability", value: "Active/standby" },
        ],
      },
    ],
  ],
  datasheet: {
    text: "Cisco Secure Firewall 1200 datasheet",
    href: "/assets/datasheets/cisco/secure-firewall-1200-series-ds.pdf",
  },
},
faqHeaderData: {
  tag: "FAQs",
  heading: "Secure Firewall 1200\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Should we choose the Secure Firewall 1200 or Firepower 1000?",
      answer: "The 1200 is the newer generation, from 6 Gbps up to 24 Gbps of firewall and application control, with 10G and PoE options. The Firepower 1000 tops out at 5.3 Gbps and suits smaller sites on a tighter budget.",
    },
    {
      question: "Compact or 1U model?",
      answer: "Compact models suit branches without a full rack and need up to 9 Gbps. The 1U models add four 10G SFP+ ports and up to 24 Gbps for busier sites.",
    },
    {
      question: "Can it power our phones or cameras?",
      answer: "Yes, the 1210CP. Four of its ports deliver PoE+, up to 120 W in total.",
    },
    {
      question: "Can you move our settings from an older Cisco firewall?",
      answer: "Yes. Cisco’s migration tools move configurations from Firepower 1000 and 2100 firewalls to the 1210 and 1220, and we migrate rules from other brands too.",
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
      title: "Cisco Firepower 1000 Series",
      image: "/assets/images/cisco/cisco-firewall-solutions/cisco-firepower-1000.webp",
      href: "/store/next-generation-firewall-products/cisco/cisco-firepower-1000",
    },
  ],
},
  enquiry: {
    tag: "Enquiry",
    heading: "Let's get \n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT security specialist will contact you about the Secure Firewall 1200, model sizing and availability.",
  },
};
