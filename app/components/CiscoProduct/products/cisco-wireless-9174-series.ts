import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { AP_IMG as IMG, apIcons, relatedAccessPoints, apFootNote } from "./access-points-shared";

const DATASHEET = {
  text: "Cisco Wireless 9174 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/dam/en/us/products/collateral/networking/wireless/access-points/wireless-9174-series-access-points-ds.pdf)
  href: "/assets/datasheets/cisco/wireless-9174-series-ds.pdf",
};

// Generated from ap_cisco-wireless-9174-series.html (Cisco pages dev pack)
export const wireless9174: LogitechProductData = {
  slug: "cisco-wireless-9174-series",
  seo: {
    title: "Buy Cisco Wireless 9174 Wi-Fi 7 Access Points in Dubai | GS IT",
    description:
      "Buy Cisco Wireless 9174 Wi-Fi 7 access points in Dubai: four streams on 5 and 6 GHz, a 5G uplink, and Meraki or Catalyst management.",
    ogTitle: "Cisco Wireless 9174 Wi-Fi 7 Access Points in Dubai | GS IT",
    ogDescription:
      "Four-stream Cisco Wireless 9174 Wi-Fi 7 access points for busy offices in the UAE, surveyed, installed and supported by GS IT.",
  },
  name: "Cisco Wireless 9174 Series",
  image: `${IMG}/cisco-wireless-9174-series-access-points.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Wireless Access Points" },
      { label: "Cisco", href: "/cisco-wireless-access-points" },
      { label: "Wireless 9174 Series" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-wireless-9174-series-access-points.webp`,
        alt: "Cisco Wireless 9174 Series Access Points",
      },
    ],
    tag: "Cisco Wi-Fi 7 access point",
    heading: "Cisco Wireless 9174\n Series Access Points",
    highlightLast: 3,
    description:
      "Four-stream Wi-Fi 7 on 2.4, 5 and 6 GHz for busy offices, meeting areas and campuses, managed from the Meraki dashboard or a Catalyst controller.",
    pills: ["Wi-Fi 7", "Cloud or controller"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Models", value: "CW9174I (internal antennas) and CW9174E (external antennas)" },
      { label: "Wi-Fi standard", value: "Wi-Fi 7 (802.11be)" },
      { label: "Bands", value: "2.4, 5 and 6 GHz" },
      { label: "Uplink", value: "1× 5G multigigabit" },
      { label: "Management", value: "Meraki dashboard or Catalyst 9800 controller" },
    ],
    aboutTitle: "About this access point",
    about: [
      { label: "Four streams on 5 and 6 GHz", text: "4x4 radios on 5 and 6 GHz, and 2x2 or 4x4 on 2.4 GHz." },
      { label: "Up to about 17.5 Gbps", text: "maximum PHY rate in tri-radio mode with 320 MHz channels on 6 GHz." },
      { label: "Built-in extras", text: "a dedicated tri-band scanning radio, an IoT radio and Bluetooth Low Energy 5.3." },
      { label: "Upgrade path", text: "Cisco names the 9174 as the replacement for the Catalyst 9115, the Meraki MR44 and the MR46E external-antenna model." },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Two 9174 models\n for every ceiling",
    highlightLast: 3,
    subhead: "Same Wi-Fi 7 radios, with internal or external antennas. We pick the model for each space during the site survey.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "CW9174I",
            desc: "Indoor access point with internal omnidirectional antennas, for offices, meeting areas and classrooms",
            points: [
              "4x4 on 5 and 6 GHz, 2x2 or 4x4 on 2.4 GHz",
              "1× 5G multigigabit uplink, console, USB 2.0",
              "Full radios on 802.3at PoE+ at 2.5G; UPOE adds USB and 5G",
              "22.6 × 22.6 × 4.9 cm, 1.52 kg",
            ],
            enquireLabel: "Enquire about CW9174I",
          },
          {
            name: "CW9174E",
            desc: "Indoor access point with external antenna connectors, for warehouses, high ceilings and challenging spaces",
            points: [
              "Same radios as the CW9174I",
              "Omni or directional Cisco antennas, sold separately",
              "Operates from −20 to 50 °C",
              "22.6 × 22.6 × 4.9 cm, 1.47 kg",
            ],
            enquireLabel: "Enquire about CW9174E",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Wi-Fi 7\n for busy spaces",
    highlightLast: 3,
    subhead: "What the 9174 brings to offices, meeting areas and campuses.",
    data: [
      {
        icon: apIcons.wifi,
        title: "Four-stream Wi-Fi 7",
        description: "4x4 radios on 5 and 6 GHz carry more devices at once, at higher speeds.",
        highlight: true,
      },
      {
        icon: apIcons.bars,
        title: "320 MHz on 6 GHz",
        description: "Extra-wide 6 GHz channels give new laptops and phones more room to run.",
      },
      {
        icon: apIcons.cloud,
        title: "Cloud or controller",
        description: "Run it on the Meraki dashboard or a Catalyst 9800 controller, and change later without new hardware.",
      },
      {
        icon: apIcons.shield,
        title: "Dedicated scanning radio",
        description: "A separate tri-band radio monitors interference and rogue devices while the other radios serve users.",
      },
      {
        icon: apIcons.pulse,
        title: "5G multigigabit uplink",
        description: "A 5G Ethernet port keeps the cable from limiting Wi-Fi 7 speeds.",
      },
      {
        icon: apIcons.pin,
        title: "Bluetooth and IoT",
        description: "Bluetooth Low Energy 5.3 and a dedicated IoT radio for location and smart-building devices.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Wi-Fi 7\n for busy offices",
    highlightLast: 3,
    paragraphs: [
      "The 9174 is Cisco's four-stream Wi-Fi 7 access point for offices, meeting areas and campuses. Cisco names it as the replacement for the Catalyst 9115 and Meraki MR44.",
      "GS IT surveys your site, places each access point, and installs, configures and supports the network after go-live.",
    ],
    facts: [
      { value: "17.5 Gbps", label: "maximum PHY rate" },
      { value: "4x4", label: "on 5 and 6 GHz", dark: true },
      { value: "5G", label: "multigigabit uplink" },
      { value: "3 bands", label: "2.4, 5 and 6 GHz" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Wireless 9174 Series\n technical specifications",
    highlightLast: 2,
    subhead: "From the Cisco Wireless 9174 Series datasheet. Open a group to see the details.",
    note: "Values for both CW9174I and CW9174E unless stated.",
    columns: [
      [
        {
          title: "Radios",
          rows: [
            { label: "Standard", value: "Wi-Fi 7 (802.11be)" },
            { label: "Spatial streams", value: "4x4 on 5 GHz and 6 GHz; 2x2 or 4x4 on 2.4 GHz" },
            { label: "Radio modes", value: "Tri-radio (2.4, 5, 6 GHz) or dual-radio (2.4 and 5 GHz)" },
            { label: "Channel widths", value: "Up to 320 MHz (6 GHz), 160 MHz (5 GHz), 20 MHz (2.4 GHz)" },
            { label: "Max PHY rate", value: "About 17.5 Gbps tri-radio, 6.5 Gbps dual-radio" },
            { label: "Other radios", value: "Dedicated tri-band scanning radio, IoT radio, Bluetooth Low Energy 5.3" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "Uplink", value: "1× 100M/1G/2.5G/5G multigigabit (RJ-45)" },
            { label: "Other", value: "Console port, USB 2.0 (9 W), 54 V DC input" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "802.3bt (UPOE)", value: "Full function with 5G link and USB, up to 37 W" },
            { label: "802.3at (PoE+)", value: "All radios with 2.5G link, USB off, up to 25.5 W" },
            { label: "802.3af (PoE)", value: "Reduced mode: 1x1 on 2.4 GHz, 1G link" },
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
            { label: "Dimensions", value: "22.6 × 22.6 × 4.9 cm, without bracket" },
            { label: "Weight", value: "CW9174I 1.52 kg, CW9174E 1.47 kg" },
            { label: "Operating temperature", value: "CW9174I 0 to 50 °C, CW9174E −20 to 50 °C" },
            { label: "Antennas", value: "CW9174I internal omnidirectional; CW9174E external, sold separately" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Wireless 9174\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the CW9174I and CW9174E?",
        answer:
          "The CW9174I has internal antennas for offices. The CW9174E takes external antennas for warehouses and high ceilings.",
      },
      {
        question: "What PoE does it need?",
        answer: "802.3at PoE+ runs all radios. UPOE adds the full 5G link and the USB port.",
      },
      {
        question: "Meraki or Catalyst controller?",
        answer: "Either. The same hardware runs on the Meraki dashboard or a Catalyst 9800 controller.",
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
  relatedData: relatedAccessPoints("cisco-wireless-9174-series", [
    "cisco-catalyst-9172-series",
    "cisco-wireless-9176-series",
    "cisco-catalyst-9136-series",
    "cisco-meraki-mr76-series",
  ]),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT wireless specialist will contact you about the Wireless 9174, site surveys and availability.",
  },
  footNote: apFootNote,
};
