import type { YealinkProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";

// Generated from yealink-ct300.html
export const ct300: YealinkProductData = {
  slug: "yealink-ct300",
  seo: {
    title: "Yealink CT300 Advanced Room Device Navigator Dubai | GS IT",
    description: "A professional room controller for AV-over-IP and Pro AV rooms, with RS232, RS422/485, relay, GPIO and IR control, dual network ports and open APIs for third-",
  },
  name: "Yealink CT300",
  sku: "1303169",
  image: "/assets/images/yealink/products/yealink-ct300/gallery-1.webp",
  listing: { disable: false, order: 310, tag: "Room control", text: "Professional room controller for AV-over-IP and Pro AV rooms.", platforms: [], rooms: [] },
  heroData: {
    crumbs: [...storeCrumbs, { label: "CT300" }],
    gallery: [
      { src: "/assets/images/yealink/products/yealink-ct300/gallery-1.webp", alt: "Yealink CT300, image 1" },
      { src: "/assets/images/yealink/products/yealink-ct300/gallery-2.webp", alt: "Yealink CT300, image 2" },
      { src: "/assets/images/yealink/products/yealink-ct300/gallery-3.webp", alt: "Yealink CT300, image 3" },
      { src: "/assets/images/yealink/products/yealink-ct300/gallery-4.webp", alt: "Yealink CT300, image 4" },
    ],
    tag: "Advanced room device navigator",
    heading: "Yealink CT300\n advanced room device navigator",
    highlightLast: 4,
    description: "A professional room controller for AV-over-IP and Pro AV rooms, with RS232, RS422/485, relay, GPIO and IR control, dual network ports and open APIs for third-party integration.",
    pills: ["In stock", "Pro AV control", "Rack or flat mount"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "CT300" },
      { label: "Part number", value: "1303169" },
      { label: "Warranty", value: "Standard 2-year warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Control ports", text: "6 × RS232, 2 × RS422/485, 4 relays, 4 GPIO, 2 IR out and IR learning." },
      { label: "Dual network ports", text: "separate management traffic from device control." },
      { label: "Open API", text: "integrate third-party devices with custom control logic." },
      { label: "Automation", text: "link devices so the room responds to one action." },
    ],
    buttons: heroButtons,
    datasheet: { text: "View the Yealink datasheet", href: "https://support.yealink.com/document-detail/08c8719268b34e8289c14d6510926159" },
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n CT300",
    highlightLast: 1,
    subhead: "What the CT300 does in the room.",
    data: [
      {
        icon: "Cable",
        title: "Full hardware control",
        description: "RS232, RS422/485, relay, GPIO, IR learning and IR output for displays, projectors, screens, lifts and lighting.",
      },
      {
        icon: "EthernetPort",
        title: "Dual network ports",
        description: "Separate management and device-control networks for secure traffic and better system performance.",
      },
      { icon: "Code", title: "Open API integration", description: "Integrate third-party devices with open APIs and custom control logic." },
      {
        icon: "Workflow",
        title: "Room automation",
        description: "Link devices so one action sets up the room, from display power to blinds and lighting.",
      },
      { icon: "Radio", title: "IR learning", description: "Learn IR commands from existing remotes within 4 m of the front panel." },
      { icon: "Server", title: "Flexible mounting", description: "Rack, wall or flat installation with the mounting kit in the box." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "Control for\n professional AV rooms",
    highlightLast: 3,
    paragraphs: [
      "The CT300 is the Yealink controller for professional AV rooms: auditoriums, training rooms and boardrooms with serial, relay or IR-controlled equipment. It manages AV-over-IP devices and legacy hardware from one interface, so the room starts, switches sources and shuts down on a single command.",
      "GS IT demos it in your own room first, then installs, configures and supports it after go-live.",
    ],
    image: "/assets/images/yealink/products/yealink-ct300/overview.webp",
    alt: "Yealink CT300",
  },
  specsData: {
    tag: "Specifications",
    heading: "CT300\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "Hardware interface",
          rows: [
            { value: "1 × PoE port, 1 × RJ45 port, 1 × MGMT port" },
            { value: "6 × RS232 port" },
            { value: "2 × RS422/485 port" },
            { value: "2 × IR out port" },
            { value: "4 × relay port" },
            { value: "4 × GPIO in/out" },
            { value: "1 × IR learning port" },
            { value: "1 × 12 V / 2 A power supply port" },
          ],
        },
        {
          title: "RS232 and RS422/485",
          rows: [
            { label: "RS232", value: "bidirectional, Pin1 Tx, Pin2 Rx, Pin3 Gnd" },
            { label: "RS422", value: "Pin1 Tx+, Pin2 Rx+, Pin3 Gnd, Pin4 Tx−, Pin5 Rx−" },
            { label: "RS485", value: "pins 1 and 2 data+, pin 3 Gnd, pins 4 and 5 data−" },
          ],
        },
        {
          title: "IR, relay and GPIO",
          rows: [
            { label: "IR out", value: "carrier frequency 34 to 42 kHz" },
            { label: "IR learning", value: "carrier below 38 kHz, capture distance below 4 m" },
            { label: "Relays", value: "4 normally open, rated 30 V DC, 2 A" },
            { label: "GPIO", value: "4 analog or digital in/out, 0 to 24 V DC input, 12-bit A/D, 3.3 V / 3.3 mA digital output" },
          ],
        },
        {
          title: "Power",
          rows: [
            { label: "Consumption", value: "average 2.5 W, peak 3.3 W, standby 1.7 W" },
            { label: "Power adapter", value: "12 V / 2 A" },
            { value: "PoE port" },
          ],
        },
      ],
      [
        {
          title: "Installation",
          rows: [{ value: "Rack installation" }, { value: "Flat installation" }, { value: "Wall mount with the included kit" }],
        },
        {
          title: "Package contents",
          rows: [
            {
              label: "In the box",
              value: "CT300, 3 m Cat5 cable, 1.0 m USB 3.0 Type-C to Type-A cable (management port), 12 V / 2 A power adapter, 2 × infrared emitters, male Phoenix connectors, mounting kit (wall, flat or rack), quick start guide",
            },
          ],
        },
        {
          title: "Environment",
          rows: [
            { label: "Operating humidity", value: "10 to 95%" },
            { label: "Operating temperature", value: "−10 to +45°C" },
            { label: "Storage temperature", value: "−30 to +70°C" },
          ],
        },
        {
          title: "Dimensions and weight",
          rows: [
            { value: "Dimensions (W × D × H): 216 × 160 × 36.7 mm" },
            { label: "Weight", value: "1.07 kg" },
            { label: "Gift box", value: "259 × 193 × 124 mm" },
            { label: "Carton", value: "635 × 265 × 209 mm, 5 pcs, N.W. 8.485 kg, G.W. 9.133 kg" },
          ],
        },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: "https://support.yealink.com/document-detail/08c8719268b34e8289c14d6510926159" },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "CT300\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What can the CT300 control?",
        answer: "Devices on its RS232, RS422/485, relay, GPIO and IR ports, such as displays, projectors, motorised screens, lifts, blinds and lighting, plus AV-over-IP devices on the network.",
      },
      {
        question: "How is the CT300 different from the CT200?",
        answer: "Both manage AV-over-IP rooms. The CT300 adds the hardware control ports for serial, relay, GPIO and IR equipment.",
      },
      {
        question: "Can it learn existing IR remotes?",
        answer: "Yes. The IR learning port captures commands from a remote held within 4 m of the front panel.",
      },
      { question: "Can it integrate third-party systems?", answer: "Yes, through Yealink open APIs and customisable control logic." },
      { question: "How is it installed?", answer: "In a rack, flat on a surface or on the wall, using the mounting kit in the box." },
      {
        question: "Can I see the CT300 before buying?",
        answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner and demos it in your own room. We order only after you approve the proposal.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n other Yealink room devices",
    highlightLast: 4,
    subhead: "Other Yealink touch consoles and room controllers.",
    linkLabel: "View product →",
    items: [
      {
        title: "CT200",
        image: "/assets/images/yealink/products/yealink-ct200/gallery-1.webp",
        href: "/store/video-conferencing-devices/yealink/yealink-ct200",
      },
      {
        title: "MTouch Plus-MB",
        image: "/assets/images/yealink/products/yealink-mtouch-plus-mb/gallery-1.webp",
        href: "/store/video-conferencing-devices/yealink/yealink-mtouch-plus-mb",
      },
      {
        title: "MTouch Plus-EXT",
        image: "/assets/images/yealink/products/yealink-mtouch-plus-ext/gallery-1.webp",
        href: "/store/video-conferencing-devices/yealink/yealink-mtouch-plus-ext",
      },
      {
        title: "MTouch Plus",
        image: "/assets/images/yealink/products/yealink-mtouch-plus/gallery-1.webp",
        href: "/store/video-conferencing-devices/yealink/yealink-mtouch-plus",
      },
      {
        title: "CTP25",
        image: "/assets/images/yealink/products/yealink-ctp25/gallery-1.webp",
        href: "/store/video-conferencing-devices/yealink/yealink-ctp25",
      },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the CT300, availability and an on-site demo." },
};
