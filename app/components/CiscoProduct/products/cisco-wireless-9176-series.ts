import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { AP_IMG as IMG, apIcons, relatedAccessPoints, apFootNote } from "./access-points-shared";

const DATASHEET = {
  text: "Cisco Wireless 9176 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/dam/en/us/products/collateral/networking/wireless/access-points/wireless-9176-series-access-points-ds.pdf)
  href: "/assets/datasheets/cisco/wireless-9176-series-ds.pdf",
};

// Generated from ap_cisco-wireless-9176-series.html (Cisco pages dev pack)
export const wireless9176: LogitechProductData = {
  slug: "cisco-wireless-9176-series",
  seo: {
    title: "Buy Cisco Wireless 9176 Wi-Fi 7 Access Points in Dubai | GS IT",
    description:
      "Buy Cisco Wireless 9176 Wi-Fi 7 access points in Dubai: three 4x4 radios and a 10G uplink for high-density offices and auditoriums.",
    ogTitle: "Cisco Wireless 9176 Wi-Fi 7 Access Points in Dubai | GS IT",
    ogDescription:
      "High-density Cisco Wireless 9176 Wi-Fi 7 access points for large offices and campuses in the UAE, surveyed, installed and supported by GS IT.",
  },
  name: "Cisco Wireless 9176 Series",
  image: `${IMG}/cisco-wireless-9176-series-access-points.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Wireless Access Points" },
      { label: "Cisco", href: "/cisco-wireless-access-points" },
      { label: "Wireless 9176 Series" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-wireless-9176-series-access-points.webp`,
        alt: "Cisco Wireless 9176 Series Access Points",
      },
    ],
    tag: "Cisco high-density Wi-Fi 7 access point",
    heading: "Cisco Wireless 9176\n Series Access Points",
    highlightLast: 3,
    description:
      "Three four-stream Wi-Fi 7 radios and a 10G uplink for high-density offices, auditoriums, campuses and critical applications, managed from the cloud or a controller.",
    pills: ["Wi-Fi 7", "10G multigigabit"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Models", value: "CW9176I (omnidirectional) and CW9176D1 (directional)" },
      { label: "Wi-Fi standard", value: "Wi-Fi 7 (802.11be)" },
      { label: "Bands", value: "2.4, 5 and 6 GHz" },
      { label: "Uplink", value: "1× 10G multigigabit" },
      { label: "Management", value: "Meraki dashboard or Catalyst 9800 controller" },
    ],
    aboutTitle: "About this access point",
    about: [
      { label: "Three 4x4 radios", text: "four streams on 2.4, 5 and 6 GHz on UPOE, or two 5 GHz radios plus 6 GHz." },
      { label: "Up to 18 Gbps", text: "maximum PHY rate, fed by a 10G multigigabit uplink." },
      { label: "Location built in", text: "Bluetooth Low Energy 5.3, ultra-wideband, GPS and an IoT radio." },
      { label: "Upgrade path", text: "Cisco names the 9176I as the replacement for the Meraki MR46." },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Two 9176 models\n for open and high ceilings",
    highlightLast: 5,
    subhead: "Same Wi-Fi 7 radios, with omnidirectional or directional internal antennas.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "CW9176I",
            desc: "Internal omnidirectional antennas, for offices, lecture halls and conference centres",
            points: [
              "Three 4x4 radios on UPOE",
              "1× 10G multigigabit uplink, console, USB 2.0",
              "24 × 24 × 5.1 cm, 1.56 kg",
            ],
            enquireLabel: "Enquire about CW9176I",
          },
          {
            name: "CW9176D1",
            desc: "Internal directional antennas, for high ceilings and areas that would otherwise need external antennas",
            points: [
              "Same radios as the CW9176I",
              "Directional antennas, up to 8 dBi on 5 and 6 GHz",
              "24 × 25 × 5.1 cm, 1.56 kg",
            ],
            enquireLabel: "Enquire about CW9176D1",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "High-density Wi-Fi 7\n for critical spaces",
    highlightLast: 3,
    subhead: "What the 9176 brings to busy offices, auditoriums and campuses.",
    data: [
      {
        icon: apIcons.wifi,
        title: "Three 4x4 radios",
        description: "Four streams on every band on UPOE, for rooms where hundreds of devices connect.",
        highlight: true,
      },
      {
        icon: apIcons.bars,
        title: "320 MHz on 6 GHz",
        description: "Extra-wide 6 GHz channels give new laptops and phones more room to run.",
      },
      {
        icon: apIcons.pulse,
        title: "10G multigigabit uplink",
        description: "A 10G Ethernet port on Cat6 or Cat6A cabling, so the cable never limits Wi-Fi 7.",
      },
      {
        icon: apIcons.cloud,
        title: "Cloud or controller",
        description: "Run it on the Meraki dashboard or a Catalyst 9800 controller, and change later without new hardware.",
      },
      {
        icon: apIcons.pin,
        title: "Location and IoT",
        description: "Ultra-wideband, GPS, Bluetooth Low Energy 5.3 and an IoT radio for location and smart buildings.",
      },
      {
        icon: apIcons.layers,
        title: "Flexible radio modes",
        description: "Run 2.4, 5 and 6 GHz, or two 5 GHz radios plus 6 GHz in the busiest rooms.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Wi-Fi 7\n for the busiest rooms",
    highlightLast: 4,
    paragraphs: [
      "The 9176 is Cisco's high-density Wi-Fi 7 access point, for large offices, auditoriums, lecture halls and critical applications. Cisco names it as the replacement for the Meraki MR46.",
      "GS IT surveys your site, checks your switches for UPOE and multigigabit ports, and installs, configures and supports the network after go-live.",
    ],
    facts: [
      { value: "18 Gbps", label: "maximum PHY rate" },
      { value: "4x4", label: "on every band", dark: true },
      { value: "10G", label: "multigigabit uplink" },
      { value: "3 bands", label: "2.4, 5 and 6 GHz" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Wireless 9176 Series\n technical specifications",
    highlightLast: 2,
    subhead: "From the Cisco Wireless 9176 Series datasheet. Open a group to see the details.",
    note: "Values for both CW9176I and CW9176D1 unless stated.",
    columns: [
      [
        {
          title: "Radios",
          rows: [
            { label: "Standard", value: "Wi-Fi 7 (802.11be)" },
            { label: "Spatial streams", value: "4x4 on 2.4, 5 and 6 GHz on UPOE; 2.4 GHz drops to 2x2 on PoE+" },
            { label: "Radio modes", value: "2.4, 5 and 6 GHz, or 5, 5 and 6 GHz" },
            { label: "Channel widths", value: "Up to 320 MHz (6 GHz), 160 MHz (5 GHz), 20 MHz (2.4 GHz)" },
            { label: "Max PHY rate", value: "Up to 18 Gbps" },
            { label: "Other radios", value: "Bluetooth Low Energy 5.3, IoT radio, ultra-wideband, GPS" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "Uplink", value: "1× 100M/1G/2.5G/5G/10G multigigabit (RJ-45); 10G needs Cat6 or Cat6A" },
            { label: "Other", value: "Console port, USB 2.0 (9 W)" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "802.3bt (UPOE)", value: "All radios 4x4, 10G link and USB, up to 39 W" },
            { label: "802.3at (PoE+)", value: "2.4 GHz 2x2, 5 and 6 GHz 4x4, 2.5G link, USB off, up to 25.5 W" },
            { label: "802.3af (PoE)", value: "Staging only, radios off" },
          ],
        },
      ],
      [
        {
          title: "Management and licensing",
          rows: [
            { label: "Management", value: "Meraki dashboard or Cisco Catalyst 9800 controller" },
            { label: "Licence", value: "Cisco Networking Subscription, Wireless Essentials or Advantage" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "CW9176I", value: "24 × 24 × 5.1 cm, internal omnidirectional antennas" },
            { label: "CW9176D1", value: "24 × 25 × 5.1 cm, internal directional antennas" },
            { label: "Weight", value: "1.56 kg" },
            { label: "Operating temperature", value: "0 to 50 °C" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Wireless 9176\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the CW9176I and CW9176D1?",
        answer: "The CW9176I has omnidirectional antennas. The CW9176D1 has directional antennas for high ceilings.",
      },
      {
        question: "What PoE does it need?",
        answer: "UPOE for all three radios at full strength. On PoE+, the 2.4 GHz radio drops to two streams.",
      },
      {
        question: "Do we need new cabling for 10G?",
        answer: "10G needs Cat6 or Cat6A cabling. Cat5e supports up to 5G.",
      },
      {
        question: "What licence does it need?",
        answer: "A Cisco Networking Subscription, Wireless Essentials or Advantage.",
      },
      {
        question: "Do you install and support it?",
        answer:
          "Yes. GS IT is a Cisco partner. We survey your site, install and configure the access points, and support them after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
      },
    ],
  },
  relatedData: relatedAccessPoints("cisco-wireless-9176-series", [
    "cisco-catalyst-9172-series",
    "cisco-wireless-9174-series",
    "cisco-catalyst-9136-series",
    "cisco-meraki-mr76-series",
  ]),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT wireless specialist will contact you about the Wireless 9176, site surveys and availability.",
  },
  footNote: apFootNote,
};
