import type { LogitechProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";
import { AP_IMG as IMG, apIcons, relatedAccessPoints, apFootNote } from "./access-points-shared";

const DATASHEET = {
  text: "Meraki MR76 datasheet",
  // Local copy of Meraki's PDF (Save as PDF from https://documentation.meraki.com/MR/MR_Overview_and_Specifications/MR76_Datasheet)
  href: "/assets/datasheets/cisco/meraki-mr76-ds.pdf",
};

// Generated from ap_cisco-meraki-mr76-series.html (Cisco pages dev pack). The source page has no models section.
export const merakiMr76: LogitechProductData = {
  slug: "cisco-meraki-mr76-series",
  seo: {
    title: "Get Cisco Meraki MR76 Access Point in Dubai | GS IT",
    description:
      "Buy the Cisco Meraki MR76 outdoor Wi-Fi 6 access point in Dubai: IP67-rated and cloud-managed, for yards, campuses and car parks.",
    ogTitle: "Cisco Meraki MR76 Outdoor Access Point in Dubai | GS IT",
    ogDescription:
      "IP67-rated, cloud-managed Cisco Meraki MR76 outdoor Wi-Fi 6 access points for campuses, warehouses and car parks in the UAE, from GS IT.",
  },
  name: "Cisco Meraki MR76",
  sku: "MR76",
  image: `${IMG}/cisco-meraki-mr76-outdoor-access-point.webp`,
  heroData: {
    crumbs: [
      ...storeCrumbs,
      { label: "Wireless Access Points" },
      { label: "Cisco", href: "/cisco-wireless-access-points" },
      { label: "Meraki MR76" },
    ],
    gallery: [
      {
        src: `${IMG}/cisco-meraki-mr76-outdoor-access-point.webp`,
        alt: "Cisco Meraki MR76 Outdoor Access Point",
      },
    ],
    tag: "Outdoor cloud-managed Wi-Fi 6",
    heading: "Cisco Meraki MR76\n Outdoor Access Point",
    highlightLast: 3,
    description:
      "IP67-rated cloud-managed Wi-Fi 6 for outdoor campuses, yards, warehouses, car parks and industrial sites.",
    pills: ["IP67 outdoor", "Cloud-managed"],
    meta: [
      { label: "Brand", value: "Cisco Meraki" },
      { label: "Model", value: "MR76" },
      { label: "Wi-Fi standard", value: "Wi-Fi 6 (802.11ax)" },
      { label: "Spatial streams", value: "2x2:2 on 2.4 and 5 GHz" },
      { label: "Rating", value: "IP67, −40 to 55 °C" },
      { label: "Antennas", value: "External, sold separately" },
    ],
    aboutTitle: "About this access point",
    about: [
      { label: "Built for outdoors", text: "IP67-rated enclosure, operating from −40 to 55 °C." },
      { label: "Wi-Fi 6, 2x2:2", text: "on both bands, with up to 1.5 Gbps aggregate frame rate." },
      { label: "External antennas", text: "choose omni or directional Meraki antennas to suit the area." },
      { label: "Cloud-managed", text: "set up, monitor and update from the Meraki dashboard." },
    ],
    buttons: heroButtons,
    datasheet: DATASHEET,
  },
  featuresData: {
    tag: "Features",
    heading: "Outdoor Wi-Fi 6\n built for the elements",
    highlightLast: 4,
    subhead: "What the MR76 brings to outdoor and industrial spaces.",
    data: [
      {
        icon: apIcons.sun,
        title: "IP67, −40 to 55 °C",
        description: "Sealed against dust and water and rated for the UAE summer.",
        highlight: true,
      },
      {
        icon: apIcons.wifi,
        title: "Wi-Fi 6, 2x2:2",
        description: "OFDMA and MU-MIMO serve more devices across open areas.",
      },
      {
        icon: apIcons.bars,
        title: "External antennas",
        description: "Pair with omni or directional Meraki antennas for the coverage you need.",
      },
      {
        icon: apIcons.cloud,
        title: "Meraki dashboard",
        description: "Manage outdoor access points alongside indoor ones in one dashboard.",
      },
      {
        icon: apIcons.shield,
        title: "Dedicated security radio",
        description: "Real-time WIDS/WIPS and spectrum analysis from a separate radio.",
      },
      {
        icon: apIcons.layers,
        title: "Wall and pole mounting",
        description: "Mounting hardware for walls and vertical poles is included.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Outdoor Wi-Fi 6\n for campuses and industrial sites",
    highlightLast: 5,
    paragraphs: [
      "The MR76 brings Meraki's cloud-managed Wi-Fi 6 outdoors, in an IP67 enclosure rated from −40 to 55 °C. It is not part of Cisco's 2026 Wi-Fi 6 indoor end-of-sale announcement.",
      "GS IT surveys the outdoor area, chooses the antennas and mounting, and installs and supports the network after go-live.",
    ],
    facts: [
      { value: "IP67", label: "environmental rating" },
      { value: "55 °C", label: "maximum operating temperature", dark: true },
      { value: "1.5 Gbps", label: "aggregate frame rate" },
      { value: "2x2:2", label: "on both bands" },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Meraki MR76\n technical specifications",
    highlightLast: 2,
    subhead: "From the Cisco Meraki MR76 datasheet. Open a group to see the details.",
    note: "Antennas are not included. Compatible Meraki antennas: MA-ANT-20, -21, -23, -25 and -27.",
    columns: [
      [
        {
          title: "Radios",
          rows: [
            { label: "Standard", value: "Wi-Fi 6 (802.11ax)" },
            { label: "Spatial streams", value: "2x2:2 on 2.4 GHz and 5 GHz" },
            { label: "Aggregate frame rate", value: "Up to 1.5 Gbps (1,201 Mbps on 5 GHz, 286 Mbps on 2.4 GHz)" },
            { label: "Other radios", value: "Dual-band WIDS/WIPS scanning radio, Bluetooth Low Energy" },
          ],
        },
        {
          title: "Antennas and interfaces",
          rows: [
            { label: "Antennas", value: "External, sold separately (MA-ANT-20, -21, -23, -25, -27)" },
            { label: "Ethernet", value: "1× 10/100/1000 (RJ-45)" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "PoE", value: "802.3af, 15 W maximum" },
            { label: "Injectors", value: "Sold separately" },
          ],
        },
      ],
      [
        {
          title: "Environment",
          rows: [
            { label: "Rating", value: "IP67" },
            { label: "Operating temperature", value: "−40 to 55 °C" },
            { label: "Humidity", value: "5 to 95% non-condensing" },
          ],
        },
        {
          title: "Physical",
          rows: [
            { label: "Dimensions", value: "30.0 × 15.3 × 5.5 cm (excluding gland, mounts, antennas)" },
            { label: "Weight", value: "1.34 kg" },
            { label: "Mounting", value: "Wall and pole hardware included" },
          ],
        },
        {
          title: "Management",
          rows: [
            { label: "Platform", value: "Cisco Meraki dashboard" },
            { label: "Licence", value: "Meraki licence required" },
          ],
        },
      ],
    ],
    datasheet: DATASHEET,
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Meraki MR76\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "Is the MR76 affected by Cisco's Wi-Fi 6 end-of-sale?",
        answer:
          "No. Cisco's 2026 announcement covers Wi-Fi 6 indoor access points and states that the outdoor MR76 is not included.",
      },
      {
        question: "Does it need a licence?",
        answer:
          "Yes. Meraki access points need an active Meraki licence to run on the dashboard. We include the right licence tier and term in the proposal.",
      },
      {
        question: "Are antennas included?",
        answer:
          "No. The MR76 uses external Meraki antennas sold separately. We choose omni or directional antennas based on the site survey.",
      },
      {
        question: "Can the MR76 handle the UAE summer?",
        answer:
          "It is rated to operate from −40 to 55 °C with an IP67 enclosure. We still plan placement to avoid direct sun on the unit where possible.",
      },
      {
        question: "Is GS IT an authorized Cisco partner?",
        answer:
          "Yes. GS IT is a Cisco partner and authorized reseller in the UAE. We supply genuine Cisco access points with manufacturer warranty, and survey, install and support the networks we deliver.",
      },
    ],
  },
  relatedData: relatedAccessPoints("cisco-meraki-mr76-series", [
    "cisco-catalyst-9172-series",
    "cisco-wireless-9174-series",
    "cisco-wireless-9176-series",
    "cisco-catalyst-9136-series",
  ]),
  enquiry: {
    tag: "Enquiry",
    heading: "Let’s get\n connected",
    highlightLast: 1,
    text: "Share your details and a GS IT wireless specialist will contact you about the Meraki MR76, site surveys and availability.",
  },
  footNote: apFootNote,
};
