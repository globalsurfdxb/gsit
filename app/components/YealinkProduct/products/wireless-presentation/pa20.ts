import type { YealinkProductData } from "../../Index";
import { presentationCrumbs, heroButtons } from "../../shared";

// Generated from yealink-pa20.html
export const pa20: YealinkProductData = {
  slug: "yealink-pa20",
  seo: {
    title: "Yealink PA20 4K IP BYOD Presentation Device Dubai | GS IT",
    description: "A one-press 4K presentation assistant with IP-BYOD. Plug it into a laptop and share, or run the meeting from the laptop using the room camera and microphones,",
  },
  name: "Yealink PA20",
  image: "/assets/images/yealink/products/yealink-pa20/gallery-1.webp",
  listing: { disable: false, order: 370, tag: "Wireless presentation", text: "4K wireless presentation assistant.", platforms: [], rooms: [] },
  phoneListing: { disable: false, order: 30, series: "pod", features: ["meetingbar", "meetingboard", "roomcast"], tag: "Presentation pod", text: "4K content sharing pod with IP-BYOD on supported MeetingBars.", pills: ["4K/30", "IP-BYOD"], bestFor: "MeetingBar, MeetingBoard, RoomCast" },
  heroData: {
    crumbs: [...presentationCrumbs, { label: "PA20" }],
    gallery: [
      { src: "/assets/images/yealink/products/yealink-pa20/gallery-1.webp", alt: "Yealink PA20, image 1" },
      { src: "/assets/images/yealink/products/yealink-pa20/gallery-2.webp", alt: "Yealink PA20, image 2" },
      { src: "/assets/images/yealink/products/yealink-pa20/gallery-3.webp", alt: "Yealink PA20, image 3" },
      { src: "/assets/images/yealink/products/yealink-pa20/gallery-4.webp", alt: "Yealink PA20, image 4" },
      { src: "/assets/images/yealink/products/yealink-pa20/gallery-5.webp", alt: "Yealink PA20, image 5" },
    ],
    tag: "IP BYOD presentation assistant",
    heading: "Yealink PA20\n 4K content sharing IP BYOD device",
    highlightLast: 6,
    description: "A one-press 4K presentation assistant with IP-BYOD. Plug it into a laptop and share, or run the meeting from the laptop using the room camera and microphones, with no software or driver.",
    pills: ["In stock", "4K/30 sharing", "IP-BYOD"],
    meta: [{ label: "Brand", value: "Yealink" }, { label: "Model", value: "PA20" }, { label: "Warranty", value: "Standard 2-year warranty" }],
    aboutTitle: "About this item",
    about: [
      { label: "One press", text: "plug in, press and present." },
      { label: "IP-BYOD", text: "use the room camera and audio for a meeting running on the laptop." },
      { label: "4K/30", text: "hardware encoding over Wi-Fi 6 with 2×2 MIMO." },
      { label: "Ports", text: "full-featured USB-C, with a USB-A adapter." },
    ],
    buttons: heroButtons,
    },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n PA20",
    highlightLast: 1,
    subhead: "What the PA20 does in the room.",
    data: [
      {
        icon: "Laptop",
        title: "IP-BYOD",
        description: "Run the meeting on the laptop while using the room camera, microphones and display over the network.",
      },
      {
        icon: "Cpu",
        title: "4K/30 hardware encoding",
        description: "Built-in encoding chip shares at up to 4K/30 with no load on the laptop CPU.",
      },
      { icon: "Wifi", title: "Wi-Fi 6, 2×2 MIMO", description: "Dual-band 2.4 GHz and 5 GHz for fast response and low latency." },
      { icon: "Plug", title: "Plug and play", description: "Embedded meeting assistant: no software or driver to install." },
      {
        icon: "LayoutGrid",
        title: "Four streams at once",
        description: "Up to four presenters on screen at the same time on MeetingBoard and RoomCast.",
      },
      {
        icon: "PenLine",
        title: "Annotation and reverse control",
        description: "Annotate shared content and control the laptop from the touch screen.",
      },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "Bring your own device,\n use the room",
    highlightLast: 3,
    paragraphs: [
      "The PA20 is the Yealink presentation assistant for hybrid meeting rooms. Besides one-press 4K sharing, it supports IP-BYOD: a meeting started on the laptop in any app uses the room camera and microphones, without a USB cable to the table. It connects through a full-featured USB-C port with a USB-A adapter.",
      "GS IT demos it in your own room first, then installs, configures and supports it after go-live.",
    ],
    image: "/assets/images/yealink/products/yealink-pa20/overview.webp",
    alt: "Yealink PA20",
  },
  specsData: {
    tag: "Specifications",
    heading: "PA20\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "Basic",
          rows: [
            { label: "Encoding", value: "up to 4K/30fps" },
            { label: "Input power", value: "5 V / 600 mA" },
            { label: "Power consumption", value: "2.2 W (typical)" },
            { label: "Interface", value: "1 × full-featured USB Type-C, USB-C to USB-A adapter" },
            { label: "Button", value: "start/stop" },
            { label: "LEDs", value: "4K/UHD, system error, system status" },
          ],
        },
        {
          title: "Wi-Fi",
          rows: [
            { label: "Standard", value: "802.11 b/g/a/n/ac/ax" },
            { label: "Bands", value: "2.4 GHz and 5 GHz" },
            { label: "Security", value: "WPA-PSK/WPA2-PSK" },
          ],
        },
        {
          title: "Device compatibility",
          rows: [{ value: "Windows 7/8/10/11 (firmware 270.357.0.5 and later does not support Windows 7 and 8)" }, { value: "MacOS 10.10 or later" }],
        },
        {
          title: "Advanced features",
          rows: [
            { value: "IP-BYOD" },
            { label: "Desktop sharing", value: "duplicated and extended desktop" },
            { label: "Collaboration", value: "annotation, intuitive remote control, multi-screen sharing (MeetingBoard, RoomCast)" },
          ],
        },
      ],
      [
        {
          title: "MeetingBar compatibility",
          rows: [
            { label: "A10", value: "content sharing and IP-BYOD (firmware 278.320.0.77 or later)" },
            { label: "A20, A30", value: "content sharing only (firmware 133.320.0.135 or later)" },
            { label: "A25, A40, A50", value: "content sharing and IP-BYOD (A40 firmware 289.320.0.60 or later)" },
            { label: "All", value: "pair up to 4, one in use at a time" },
          ],
        },
        {
          title: "Environment and size",
          rows: [
            { label: "Operating temperature", value: "−10 to 40°C" },
            { label: "Humidity", value: "0 to 90%, non-condensing" },
            { label: "Weight", value: "75 g" },
            { label: "Size", value: "220 × 38 × 16 mm" },
          ],
        },
        { title: "Availability", rows: [{ value: "Not available in the United States market" }] },
      ],
    ],
    datasheet: { text: "View the Yealink datasheet", href: "/assets/datasheets/yealink/yealink-pa20.pdf" },
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "PA20\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What does IP-BYOD mean on the PA20?",
        answer: "A meeting running on the laptop, in Teams, Zoom or another app, uses the room camera, microphones and display over the network, so there is no USB cable to the table.",
      },
      {
        question: "Which MeetingBars support IP-BYOD with the PA20?",
        answer: "The MeetingBar A10, A25, A40 and A50. On the A20 and A30 it supports content sharing only.",
      },
      { question: "Do I need to install software?", answer: "No. The meeting assistant is built in. Plug it in and press the button." },
      {
        question: "How is the PA20 different from the WPP30?",
        answer: "Both share 4K over Wi-Fi 6 with the same size pod. The PA20 adds IP-BYOD on supported systems; the WPP30 adds the whiteboard feature.",
      },
      {
        question: "Can I see the PA20 before buying?",
        answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner and demos it in your own room. We order only after you approve the proposal.",
      },
    ],
  },
  relatedData: {
    tag: "Related products",
    heading: "Compare with\n other Yealink room devices",
    highlightLast: 4,
    subhead: "Other Yealink wireless presentation products.",
    linkLabel: "View product",
    items: [
      {
        title: "MB-Remote",
        image: "/assets/images/yealink/products/yealink-mb-remote/gallery-1.webp",
        href: "/yealink-wireless-presentation-system/yealink-mb-remote",
      },
      {
        title: "WPP30",
        image: "/assets/images/yealink/products/yealink-wpp30/gallery-1.webp",
        href: "/yealink-wireless-presentation-system/yealink-wpp30",
      },
      {
        title: "RoomCast E2",
        image: "/assets/images/yealink/products/yealink-roomcast-e2/gallery-1.webp",
        href: "/yealink-wireless-presentation-system/yealink-roomcast-e2",
      },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the PA20, availability and an on-site demo." },
};
