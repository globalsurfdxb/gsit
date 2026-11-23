import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { AP_IMG as IMG, apIcons, relatedAccessPoints, apFootNote } from "./access-points-shared";

const DATASHEET = {
  text: "Cisco Catalyst 9136 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/en/us/products/collateral/wireless/catalyst-9100ax-access-points/nb-06-cat9136-access-point-ds-cte-en.pdf)
  href: "/assets/datasheets/cisco/catalyst-9136-series-ds.pdf",
};

// Generated from ap_cisco-catalyst-9136-series.html (Cisco pages dev pack). The source page has no models section.
export const catalyst9136: LogitechProductData = {
  slug: "cisco-catalyst-9136-series",
  seo: {
    title: "Cisco Catalyst 9136 Series Access Points in Dubai | GS IT",
    description:
      "Buy Cisco Catalyst 9136 Wi-Fi 6E access points in Dubai, built for high-density offices, auditoriums and campuses.",
    ogTitle: "Cisco Catalyst 9136 Wi-Fi 6E Access Points in Dubai | GS IT",
    ogDescription:
      "Tri-band Cisco Catalyst 9136 Wi-Fi 6E access points with built-in environmental sensors for busy spaces in the UAE, supplied by GS IT.",
  },
  name: "Cisco Catalyst 9136 Series",
  sku: "C9136I",
  image: `${IMG}/cisco-catalyst-9136-series-access-point.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Wireless Access Points" },
      { label: "Cisco", href: "/cisco-wireless-access-points" },
      { label: "Catalyst 9136 Series" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-catalyst-9136-series-access-point.webp`,
        alt: "Cisco Catalyst 9136 Series Access Point",
      },
    ],
    tag: "Cisco Wi-Fi 6E access point",
    heading: "Cisco Catalyst 9136\n Series Access Point",
    highlightLast: 3,
    description:
      "High-density Wi-Fi 6E for large offices, auditoriums, lecture halls and campuses, with dual 5G uplinks and built-in environmental sensors.",
    pills: ["Wi-Fi 6E", "High density"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Model", value: "C9136I (internal antennas)" },
      { label: "Wi-Fi standard", value: "Wi-Fi 6E (802.11ax)" },
      { label: "Bands", value: "2.4, 5 and 6 GHz" },
      { label: "Uplinks", value: "2× 5G multigigabit" },
      { label: "Management", value: "Cisco Catalyst 9800 controller" },
    ],
    aboutTitle: "About this access point",
    about: [
      { label: "Sixteen spatial streams", text: "4x4 on 2.4 GHz, 8x8 on 5 GHz and 4x4 on 6 GHz, with PHY rates up to 10.2 Gbps." },
      { label: "Dual 5G uplinks", text: "two multigigabit ports with link aggregation and PoE redundancy." },
      { label: "Environmental sensors", text: "measures air quality, temperature and humidity, with no separate sensors to install." },
      { label: "Room to grow", text: "a USB port with 9 W of power for IoT devices, plus Bluetooth Low Energy." },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  featuresData: {
    tag: "Features",
    heading: "Wi-Fi 6E\n for the busiest spaces",
    highlightLast: 4,
    subhead: "What the Catalyst 9136 brings to high-density offices, venues and campuses.",
    data: [
      {
        icon: apIcons.bars,
        title: "The 6 GHz band",
        description: "Wi-Fi 6E devices get clean 6 GHz channels that older devices cannot crowd.",
        highlight: true,
      },
      {
        icon: apIcons.wifi,
        title: "8x8 on 5 GHz",
        description: "An 8x8 radio serves more devices at once in auditoriums, lecture halls and open-plan floors.",
      },
      {
        icon: apIcons.pulse,
        title: "Dual 5G uplinks",
        description: "Two multigigabit ports combine for throughput and keep the access point running if one link fails.",
      },
      {
        icon: apIcons.leaf,
        title: "Environmental sensors",
        description: "Built-in sensors track air quality, temperature and humidity across your floors.",
      },
      {
        icon: apIcons.eye,
        title: "AI-driven scanning radio",
        description: "A dedicated radio analyses interference and security threats with Cisco CleanAir Pro.",
      },
      {
        icon: apIcons.pin,
        title: "IoT and Bluetooth",
        description: "Bluetooth Low Energy and a 9 W USB port support location and IoT devices.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "High-density Wi-Fi 6E\n for large offices and venues",
    highlightLast: 5,
    paragraphs: [
      "The Catalyst 9136 is Cisco's high-end Wi-Fi 6E access point, built for spaces where many people connect at once. It runs from a Catalyst 9800 controller for full on-premises control.",
      "GS IT surveys the space, checks your switches for multigigabit and UPOE, and installs and supports the network after go-live.",
    ],
    facts: [
      { value: "10.2 Gbps", label: "maximum PHY rate" },
      { value: "16", label: "spatial streams", dark: true },
      { value: "2× 5G", label: "multigigabit uplinks" },
      { value: "1,200", label: "clients per access point" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Catalyst 9136 Series\n technical specifications",
    highlightLast: 2,
    subhead: "From the Cisco Catalyst 9136 Series datasheet. Open a group to see the details.",
    note: "Model C9136I. Full performance needs 802.3bt (UPOE) power.",
    columns: [
      [
        {
          title: "Radios",
          rows: [
            { label: "Standard", value: "Wi-Fi 6E (802.11ax)" },
            { label: "Default mode", value: "Tri-radio: 4x4 (2.4 GHz), 8x8 (5 GHz), 4x4 (6 GHz)" },
            { label: "Alternative mode", value: "Quad-radio with dual 4x4 5 GHz radios" },
            { label: "Max PHY rate", value: "Up to 10.2 Gbps" },
            { label: "Other radios", value: "AI/ML scanning radio, Bluetooth Low Energy" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "Uplinks", value: "2× 100M/1G/2.5G/5G multigigabit (RJ-45), with link aggregation" },
            { label: "Other", value: "Console port (RJ-45), USB 2.0 at 9 W" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Full performance", value: "802.3bt Cisco UPOE, up to 47.3 W" },
            { label: "Also supported", value: "802.3at PoE+ with reduced features" },
            { label: "802.3af", value: "Configuration staging only, radios off" },
          ],
        },
      ],
      [
        {
          title: "Sensors and capacity",
          rows: [
            { label: "Environmental sensors", value: "Air quality (TVOC), temperature, humidity" },
            { label: "Clients", value: "Up to 1,200 (400 per radio)" },
          ],
        },
        {
          title: "Management",
          rows: [
            { label: "Controller", value: "Cisco Catalyst 9800 Series Wireless Controller" },
            { label: "Software", value: "Cisco IOS XE 17.7.1 or later" },
          ],
        },
        {
          title: "Physical and environment",
          rows: [
            { label: "Dimensions", value: "25.1 × 25.1 × 5.6 cm" },
            { label: "Weight", value: "1.65 kg" },
            { label: "Operating temperature", value: "0 to 50 °C" },
            { label: "Warranty", value: "Limited lifetime hardware warranty" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Catalyst 9136\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Does the Catalyst 9136 need special switches?",
        answer:
          "For full performance, yes: 802.3bt (UPOE) power and multigigabit ports. It also runs on 802.3at PoE+ with reduced features. We check your switches during the survey.",
      },
      {
        question: "Can the 9136 be managed from the Meraki dashboard?",
        answer:
          "No. The Catalyst 9136 runs from a Cisco Catalyst 9800 wireless controller. For cloud management, the Cisco Wireless 9172 runs on the Meraki dashboard.",
      },
      {
        question: "Where does the 9136 make sense?",
        answer:
          "Large offices, auditoriums, lecture halls, conference centres and other spaces where hundreds of devices connect at once.",
      },
      {
        question: "What do the environmental sensors measure?",
        answer: "Air quality as total volatile organic compounds (TVOC), temperature and humidity.",
      },
      {
        question: "Is GS IT an authorized Cisco partner?",
        answer:
          "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco access points with manufacturer warranty, and survey, install and support the networks we deliver.",
      },
    ],
  },
  relatedData: relatedAccessPoints("cisco-catalyst-9136-series"),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT wireless specialist will contact you about the Catalyst 9136, site surveys and availability.",
  },
  footNote: apFootNote,
};
