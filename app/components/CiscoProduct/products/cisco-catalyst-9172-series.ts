import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { AP_IMG as IMG, apIcons, relatedAccessPoints, apFootNote } from "./access-points-shared";

const DATASHEET = {
  text: "Cisco Wireless 9172 datasheet",
  // Local copy of Cisco's PDF (https://www.cisco.com/c/dam/en/us/products/collateral/networking/wireless/access-points/wireless-9172-series-access-points-ds.pdf)
  href: "/assets/datasheets/cisco/wireless-9172-series-ds.pdf",
};

// Generated from ap_cisco-catalyst-9172-series.html (Cisco pages dev pack).
// The URL says "catalyst" but the product is the Cisco Wireless 9172 (kept as-is, see the pack README).
export const catalyst9172: LogitechProductData = {
  slug: "cisco-catalyst-9172-series",
  seo: {
    title: "Get Cisco Wireless 9172 Wi-Fi 7 Access Points in Dubai | GS IT",
    description:
      "Buy Cisco Wireless 9172 Wi-Fi 7 access points in Dubai, with tri-band performance and Catalyst or Meraki management.",
    ogTitle: "Cisco Wireless 9172 Wi-Fi 7 Access Points in Dubai | GS IT",
    ogDescription:
      "Tri-band Wi-Fi 7 Cisco Wireless 9172 access points for offices, retail and healthcare in the UAE, supplied, installed and supported by GS IT.",
  },
  name: "Cisco Wireless 9172 Series",
  image: `${IMG}/cisco-wireless-9172-series-access-points.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Wireless Access Points" },
      { label: "Cisco", href: "/cisco-wireless-access-points" },
      { label: "Wireless 9172 Series" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-wireless-9172-series-access-points.webp`,
        alt: "Cisco Wireless 9172 Series Access Points",
      },
    ],
    tag: "Cisco Wi-Fi 7 access point",
    heading: "Cisco Wireless 9172\n Series Access Points",
    highlightLast: 3,
    description:
      "Tri-band Wi-Fi 7 for moderate-density offices, retail, healthcare and hospitality, managed from the Meraki dashboard or a Catalyst controller.",
    pills: ["Wi-Fi 7", "Cloud or controller"],
    meta: [
      { label: "Brand", value: "Cisco" },
      { label: "Models", value: "CW9172I (ceiling) and CW9172H (wall plate)" },
      { label: "Wi-Fi standard", value: "Wi-Fi 7 (802.11be)" },
      { label: "Bands", value: "2.4, 5 and 6 GHz" },
      { label: "Uplink", value: "1× 2.5G multigigabit" },
      { label: "Management", value: "Meraki dashboard or Catalyst 9800 controller" },
    ],
    aboutTitle: "About this access point",
    about: [
      { label: "Wi-Fi 7", text: "320 MHz channels on 6 GHz, 4096-QAM and multi-link operation, with PHY rates up to 9 Gbps." },
      { label: "Three radios", text: "2x2:2 on each of the 2.4, 5 and 6 GHz bands; the CW9172I can also run 4x4:4 on 5 GHz when 6 GHz is off." },
      { label: "Built-in extras", text: "a dedicated scanning radio, plus Bluetooth Low Energy and IoT radios." },
      { label: "Your choice of management", text: "the same hardware runs on the Meraki dashboard or a Catalyst 9800 controller." },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  modelsData: {
    tag: "Models",
    heading: "Two 9172 models\n for ceilings and wall plates",
    highlightLast: 5,
    subhead: "Same Wi-Fi 7 radios, two form factors. We pick the model for each room during the site survey.",
    groups: [
      {
        label: "Models",
        columns: 2,
        models: [
          {
            name: "CW9172I",
            desc: "Indoor ceiling or wall access point with internal omnidirectional antennas",
            points: [
              "Tri-radio 2x2:2, or dual-radio with 4x4:4 on 5 GHz",
              "1× 2.5G uplink, console port, USB 2.0 (4.5 W)",
              "Full radios on 802.3at PoE+; UPOE enables USB",
              "20 × 20 × 5.3 cm, 874 g",
            ],
            enquireLabel: "Enquire about CW9172I",
          },
          {
            name: "CW9172H",
            desc: "Wall-plate access point for hotel rooms, dorms, classrooms and clinics",
            points: [
              "Tri-radio 2x2:2 on 2.4, 5 and 6 GHz",
              "1× 2.5G uplink, 3× 1G LAN ports (one with PoE out), passthrough port",
              "Full radios on 802.3at PoE+; UPOE enables PoE out",
              "13 × 18 × 2.6 cm, 572 g",
            ],
            enquireLabel: "Enquire about CW9172H",
          },
        ],
      },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Wi-Fi 7 performance,\n sized for everyday spaces",
    highlightLast: 4,
    subhead: "What the 9172 brings to offices, shops, clinics and guest rooms.",
    data: [
      {
        icon: apIcons.wifi,
        title: "Wi-Fi 7 on every band",
        description: "Wi-Fi 7 on 2.4, 5 and 6 GHz, with multi-link operation for steadier connections.",
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
        description: "A separate radio monitors interference and rogue devices while the other radios serve users.",
      },
      {
        icon: apIcons.pin,
        title: "Bluetooth and IoT",
        description: "Integrated Bluetooth Low Energy and IoT radios for location and smart-building devices.",
      },
      {
        icon: apIcons.plug,
        title: "Wired ports on the wall plate",
        description: "The CW9172H adds three Ethernet ports for TVs, phones and point-of-sale devices.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Wi-Fi 7\n for moderate-density spaces",
    highlightLast: 3,
    paragraphs: [
      "The 9172 is Cisco's Wi-Fi 7 access point for everyday spaces: offices, retail, healthcare and hospitality. It is also the model Cisco names as the replacement for the Meraki MR36.",
      "GS IT surveys your site, places each access point, and installs, configures and supports the network after go-live.",
    ],
    facts: [
      { value: "9 Gbps", label: "maximum PHY rate" },
      { value: "3 bands", label: "2.4, 5 and 6 GHz", dark: true },
      { value: "2.5G", label: "multigigabit uplink" },
      { value: "256", label: "clients per radio" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Wireless 9172 Series\n technical specifications",
    highlightLast: 2,
    subhead: "From the Cisco Wireless 9172 Series datasheet. Open a group to see the details.",
    note: "Values for both CW9172I and CW9172H unless stated.",
    columns: [
      [
        {
          title: "Radios",
          rows: [
            { label: "Standard", value: "Wi-Fi 7 (802.11be)" },
            { label: "Spatial streams", value: "2x2:2 on 2.4, 5 and 6 GHz; CW9172I can run 2x2:2 (2.4 GHz) plus 4x4:4 (5 GHz)" },
            { label: "Channel widths", value: "Up to 320 MHz (6 GHz), 160 MHz (5 GHz), 20 MHz (2.4 GHz)" },
            { label: "Wi-Fi 7 features", value: "4096-QAM, multi-link operation, preamble puncturing, OFDMA, TWT, BSS colouring" },
            { label: "Max PHY rate", value: "Up to 9 Gbps" },
            { label: "Other radios", value: "Dedicated scanning radio, Bluetooth Low Energy and IoT" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { label: "Uplink", value: "1× 100M/1G/2.5G multigigabit (RJ-45)" },
            { label: "CW9172I", value: "Console port, USB 2.0 (4.5 W)" },
            { label: "CW9172H", value: "3× 1G LAN (one with PoE out), 1× passthrough port" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "CW9172I", value: "802.3at PoE+ for all radios (25.5 W); 802.3bt Class 5 (UPOE) adds USB (32 W)" },
            { label: "CW9172H", value: "802.3at PoE+ for all radios (25.5 W); 802.3bt Class 5 (UPOE) adds PoE out (41 W)" },
          ],
        },
      ],
      [
        {
          title: "Management and capacity",
          rows: [
            { label: "Management", value: "Meraki dashboard or Cisco Catalyst 9800 controller" },
            { label: "Clients", value: "256 per radio" },
            { label: "SSIDs", value: "16 per band" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "CW9172I", value: "20 × 20 × 5.3 cm, 874 g" },
            { label: "CW9172H", value: "13 × 18 × 2.6 cm, 572 g" },
            { label: "Antennas", value: "Internal, omnidirectional" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Wireless 9172\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the difference between the CW9172I and CW9172H?",
        answer:
          "The CW9172I mounts on the ceiling or wall and can switch to 4x4:4 on 5 GHz. The CW9172H fits a wall box and adds three Ethernet ports for TVs, phones and other wired devices.",
      },
      {
        question: "Can the 9172 run on the Meraki dashboard?",
        answer:
          "Yes. The 9172 is one of Cisco's global-use access points: the same hardware runs on the Meraki dashboard or a Catalyst 9800 controller.",
      },
      {
        question: "What PoE does the 9172 need?",
        answer:
          "802.3at PoE+ runs all three radios. 802.3bt Class 5 (UPOE) is needed for the USB port on the CW9172I and PoE out on the CW9172H.",
      },
      {
        question: "Do my devices need Wi-Fi 7?",
        answer:
          "No. The 9172 works with Wi-Fi 6, 5 and older devices. Wi-Fi 7 and 6E devices also get the 6 GHz band and faster speeds.",
      },
      {
        question: "Is GS IT an authorized Cisco partner?",
        answer:
          "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco access points with manufacturer warranty, and survey, install and support the networks we deliver.",
      },
    ],
  },
  relatedData: relatedAccessPoints("cisco-catalyst-9172-series", [
    "cisco-wireless-9174-series",
    "cisco-wireless-9176-series",
    "cisco-catalyst-9136-series",
    "cisco-meraki-mr76-series",
  ]),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT wireless specialist will contact you about the Wireless 9172, site surveys and availability.",
  },
  footNote: apFootNote,
};
