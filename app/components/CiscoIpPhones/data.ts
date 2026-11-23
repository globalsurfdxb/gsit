import { portfolioData } from "@/app/components/common/data";
import type { FirewallCatalogueData } from "@/app/components/CiscoFirewallProducts/Sections/FirewallCatalogue";
import { IP_PHONE_IMG, IP_PHONE_STORE } from "@/app/components/CiscoProduct/products/ip-phones-shared";

// Generated from cisco-ip-phones.html (Cisco pages dev pack)

const BANNER = `${IP_PHONE_IMG}/cisco-desk-phone-9871-with-its-action-button.webp`;
export const CONTACT_URL = "/contact-it-services-dubai";

export const seo = {
  title: "Cisco IP Phones in Dubai | Desk, Wireless and DECT | GS IT",
  description: "Buy Cisco IP phones in Dubai: Desk Phone 9800, IP Phone 8800, Wireless Phone 9821 and IP DECT 6800.",
  ogTitle: "Cisco IP Phones in Dubai | GS IT",
  ogDescription:
    "Cisco desk, wireless and DECT phones for Webex Calling and CUCM, supplied, configured and supported by GS IT across the UAE.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: "/assets/images/cisco/cisco-firewall-solutions/cisco-partner.webp",
    alt: "Cisco Partner",
  },
  crumbs: [{ label: "GS IT Store", href: "/" }, { label: "IP Phones" }, { label: "Cisco" }],
  tag: "Cisco Partner in Dubai",
  heading: "Cisco IP Phones\n in Dubai",
  highlightLast: 2,
  description:
    "Cisco desk, wireless and DECT phones for Webex Calling and Cisco Unified Communications Manager. GS IT supplies, configures and supports them, so every desk, ward and shop floor is ready to call.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Explore phones", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#catalogue" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: CONTACT_URL },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const waysData = {
  tag: "Choosing a Cisco phone",
  heading: "The right Cisco phone\n for every role",
  highlightLast: 3,
  subhead: "Match the phone to how people work: at a desk or on the move.",
  data: [
    {
      kicker: "At the desk",
      title: "Desk Phone 9800",
      text: "Cisco’s current desk phone range, from everyday desks to reception and executives.",
      points: ["AI noise removal on every model shown", "Hot desking for shared desks", "Arabic keypad on 9861 and 9871"],
    },
    {
      dark: true,
      kicker: "On the move",
      title: "Wireless and DECT",
      text: "Handsets for staff who are rarely at a desk, from shop floors to hospital wards.",
      points: ["Wi-Fi 6E on the Wireless Phone 9821", "DECT for clinics, hotels and warehouses", "Rugged handset options"],
    },
  ],
};

export const catalogueData: FirewallCatalogueData = {
  tag: "Cisco phone range",
  heading: "Popular Cisco\n IP phone models",
  highlightLast: 3,
  subhead: "Not sure which fits? We confirm the models and licences after reviewing your users and call platform.",
  groups: [
    {
      title: "Desk phones",
      text: "For offices, reception desks and executives.",
      products: [
        {
          tag: "Everyday desk",
          title: "Cisco Desk Phone 9841",
          description:
            "An entry desk phone with AI noise removal and hot desking. Cisco’s listed replacement for the IP Phone 7841.",
          image: `${IP_PHONE_IMG}/cisco-desk-phone-9841-card.webp`,
          href: `${IP_PHONE_STORE}/desk-phone-9841`,
          specs: [
            { label: "Display", value: "3.5\" grayscale, backlit" },
            { label: "Line keys", value: "4" },
            { label: "Network", value: "Gigabit, PoE" },
          ],
        },
        {
          tag: "Busy desk",
          title: "Cisco Desk Phone 9851",
          description:
            "A colour desk phone for busier users, with one key expansion module. Cisco’s listed replacement for the IP Phone 7861.",
          image: `${IP_PHONE_IMG}/cisco-desk-phone-9851-card.webp`,
          href: `${IP_PHONE_STORE}/desk-phone-9851`,
          specs: [
            { label: "Display", value: "3.7\" colour" },
            { label: "Line keys", value: "6, up to 46 with 1 KEM" },
            { label: "Network", value: "Gigabit, PoE" },
          ],
        },
        {
          tag: "Reception and managers",
          title: "Cisco Desk Phone 9861",
          description:
            "A 5-inch colour desk phone with up to three key expansion modules, ideal for reception and assistants. Arabic keypad available.",
          image: `${IP_PHONE_IMG}/cisco-desk-phone-9861-card.webp`,
          href: `${IP_PHONE_STORE}/desk-phone-9861`,
          specs: [
            { label: "Display", value: "5\" colour" },
            { label: "Line keys", value: "10, up to 130 with 3 KEMs" },
            { label: "Wireless", value: "Wi-Fi and Bluetooth" },
          ],
        },
        {
          tag: "Executive desk",
          title: "Cisco Desk Phone 9871",
          description:
            "A 5-inch touchscreen desk phone with a configurable action button for safety alerts. Arabic keypad available.",
          image: `${IP_PHONE_IMG}/cisco-desk-phone-9871-card.webp`,
          href: `${IP_PHONE_STORE}/desk-phone-9871`,
          specs: [
            { label: "Display", value: "5\" colour touchscreen" },
            { label: "Lines", value: "32 on screen, up to 128 with KEMs" },
            { label: "Wireless", value: "Wi-Fi and Bluetooth" },
          ],
        },
        {
          tag: "Established range",
          title: "Cisco IP Phone 8800 Series",
          description: "Cisco’s established desk phones, for offices that already run the 8800 range.",
          image: `${IP_PHONE_IMG}/cisco-ip-phone-8800-series-card.webp`,
          href: `${IP_PHONE_STORE}/ip-phone-8800-series`,
          specs: [
            { label: "Models", value: "8841, 8851, 8861" },
            { label: "Display", value: "5\" colour" },
            { label: "Expansion", value: "Up to 3 KEMs on the 8861" },
          ],
        },
      ],
    },
    {
      title: "Wireless and DECT phones",
      text: "For staff who are rarely at a desk.",
      products: [
        {
          tag: "Frontline Wi-Fi",
          title: "Cisco Wireless Phone 9821",
          description:
            "A rugged Wi-Fi 6E handset for frontline teams, with push-to-talk and an emergency action button.",
          image: `${IP_PHONE_IMG}/cisco-wireless-phone-9821-card.webp`,
          href: `${IP_PHONE_STORE}/wireless-phone-9821`,
          specs: [
            { label: "Display", value: "2.4\" colour" },
            { label: "Wi-Fi", value: "Wi-Fi 6E" },
            { label: "Durability", value: "IP54, MIL-STD-810G" },
          ],
        },
        {
          tag: "Cordless DECT",
          title: "Cisco IP DECT 6800 Series",
          description:
            "DECT handsets and base stations for clinics, hotels and warehouses, with a rugged IP65 handset option.",
          image: `${IP_PHONE_IMG}/cisco-ip-dect-6800-series-card.webp`,
          href: `${IP_PHONE_STORE}/ip-dect-6800-series`,
          specs: [
            { label: "Handsets", value: "6823, 6825, 6825 Ruggedized" },
            { label: "Base stations", value: "Up to 254 (DBS-210)" },
            { label: "Scale", value: "Up to 1,000 registrations" },
          ],
        },
      ],
    },
  ],
};

export const featuresData = {
  tag: "Key features",
  heading: "Clear calls,\n simple to manage",
  highlightLast: 3,
  subhead: "What Cisco phones bring to an office, from a single floor to many sites.",
  data: [
    {
      icon: "AudioLines",
      title: "AI noise removal",
      description:
        "The 9800 Series removes background noise from your side of the call, and on the 9861 and 9871 from the caller’s side too.",
      highlight: true,
    },
    {
      icon: "Cloud",
      title: "Cloud or on-premises",
      description:
        "Register desk and wireless phones to Webex Calling or Cisco Unified Communications Manager, and manage them centrally.",
    },
    {
      icon: "Monitor",
      title: "Hot desking",
      description: "Staff sign in to any shared 9800 Series desk phone and get their own number and settings.",
    },
    {
      icon: "ShieldAlert",
      title: "Safety action button",
      description: "A configurable button on the 9871 and Wireless Phone 9821 can trigger an emergency call or alert.",
    },
    {
      icon: "Languages",
      title: "Arabic keypad",
      description: "The 9861 and 9871 are available with an Arabic keypad layout.",
    },
    {
      icon: "Zap",
      title: "Power over Ethernet",
      description: "Desk phones run from a single network cable, so no power adapter is needed at each desk.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "From user review\n to every phone ringing",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, from the first review to a documented handover.",
  data: [
    { title: "Assessment", text: "Users, roles, call platform, network and PoE capacity." },
    { title: "Design and proposal", text: "Phone models, licences, numbering and call flows in one document.", highlight: true },
    { title: "Supply", text: "Genuine Cisco phones and accessories with manufacturer warranty." },
    { title: "Configure and deploy", text: "Provisioning, testing and desk-by-desk rollout." },
    { title: "Handover and support", text: "User guides, admin training and ongoing support." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Cisco IP phone\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "Will Cisco phones work with our current phone system?",
      answer:
        "The 9800 Series, 8800 Series and Wireless Phone 9821 register to Webex Calling or Cisco Unified CM. The DECT 6800 works with Webex Calling and third-party SIP platforms. We check compatibility before you buy.",
    },
    {
      question: "Do we need a licence for each phone?",
      answer:
        "On Webex Calling, each user or device needs a Webex Calling licence. On Cisco Unified CM, each phone needs a user licence. We include the right licences in the quote.",
    },
    {
      question: "Can the phones run on our existing network?",
      answer:
        "Desk phones need a PoE port on your switch, or a power adapter. We check your switch PoE capacity during the assessment.",
    },
    {
      question: "We still use 7800 Series phones. What should we replace them with?",
      answer: "Cisco lists the Desk Phone 9841 as the replacement for the 7841, and the 9851 for the 7861.",
    },
    {
      question: "Which phone suits a reception desk?",
      answer: "The Desk Phone 9861, with up to three key expansion modules and 130 lines, or the touchscreen 9871.",
    },
    {
      question: "Do you have phones with an Arabic keypad?",
      answer: "Yes. The Desk Phone 9861 and 9871 are available with an Arabic keypad layout.",
    },
    {
      question: "Which phone is best for warehouses or hospitals?",
      answer:
        "The Wireless Phone 9821 suits sites with Wi-Fi coverage, and the DECT 6800 suits sites that need a separate cordless system. Both have rugged options.",
    },
    {
      question: "Do you install and support Cisco phones?",
      answer:
        "Yes. GS IT is a Cisco partner. We configure, deploy and support Cisco phones across the UAE. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

export const ctaData = {
  tag: "Get started",
  heading: "Plan your phone system\n with a collaboration specialist",
  highlightLast: 4,
  image: BANNER,
  steps: [
    "Tell us your users, sites and current phone system.",
    "We review your network and call platform, then recommend phones and licences.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  button: { text: "Get a quote", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: CONTACT_URL },
};

export const footNote = "Cisco and Webex are trademarks of Cisco Systems, Inc.";
