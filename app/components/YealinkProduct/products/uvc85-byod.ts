import type { YealinkProductData } from "../Index";
import { STORE, storeCrumbs, heroButtons } from "../shared";

const IMG = "/assets/images/yealink/products/uvc85-byod";
const CAT = "/assets/images/yealink";

export const uvc85Byod: YealinkProductData = {
  slug: "uvc85-byod",
  seo: {
    title: "Yealink UVC85-BYOD Meeting Kit Dubai | 4K PTZ Camera | GS IT",
    description: "A 4K PTZ camera with 36× HD zoom and a CP50 speakerphone, for laptop-led meetings on any platform in medium and large rooms.",
  },
  name: "Yealink UVC85-BYOD",
  image: `${IMG}/gallery-1.png`,
  listing: {  disable: false, order: 160, tag: "USB camera and BYOD", text: "PTZ camera and audio kit for laptop-led meetings.", image: "/assets/images/yealink/uvc85-byod.png", platforms: ["byod"], rooms: [] },

  heroData: {
    crumbs: [...storeCrumbs, { label: "UVC85-BYOD" }],
    gallery: [1, 2, 3, 4].map((n) => ({ src: `${IMG}/gallery-${n}.png`, alt: `Yealink UVC85-BYOD, image ${n}` })),
    tag: "Premium BYOD meeting kit",
    heading: "Yealink UVC85-BYOD\n BYOD kit for medium and large rooms",
    highlightLast: 6,
    description: "A 4K PTZ camera with 36× HD zoom and a CP50 speakerphone, for laptop-led meetings on any platform in medium and large rooms.",
    pills: ["In stock", "BYOD kit", "Medium and large rooms"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "UVC85-BYOD" },
      { label: "Warranty", value: "Standard 2-year warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Camera", text: "UVC85 4K PTZ camera with 36× HD zoom." },
      { label: "AI features", text: "auto framing keeps the group in shot." },
      { label: "Audio", text: "CP50 speakerphone with 360° voice pickup." },
      { label: "Platforms", text: "BYOD: the laptop runs Teams, Zoom or any other platform." },
      { label: "AV integration", text: "connects to room AV systems." },
    ],
    buttons: heroButtons,
  },

  packageData: {
    tag: "Package content",
    heading: "What comes\n in the box",
    highlightLast: 3,
    subhead: "The UVC85-BYOD package as supplied by GS IT. Optional items depend on the part number ordered.",
    items: [
      { image: `${IMG}/box-uvc85.png`, title: "UVC85" },
      { image: `${IMG}/box-cp50.png`, title: "CP50" },
    ],
  },

  featuresData: {
    tag: "Features",
    heading: "Key features of the\n UVC85-BYOD",
    highlightLast: 1,
    subhead: "What the UVC85-BYOD does in the room.",
    data: [
      { icon: "Video", title: "4K Ultra HD Camera", description: "High Definition 4K video with smooth motion and accurate color reproduction." },
      { icon: "ZoomIn", title: "36X HD Zoom", description: "Powerful zoom and wide-angle lens capture every participant clearly." },
      { icon: "Speaker", title: "AV Integration", description: "Compatibility with audio devices for engaging meeting experiences." },
      { icon: "ScanFace", title: "Auto Framing", description: "Automatically adjusts camera view to keep all participants perfectly framed." },
      { icon: "Cable", title: "Flexible Installation", description: "Multiple mounting options with easy USB connectivity for quick deployment." },
      { icon: "MonitorCog", title: "Device Management", description: "Centralized control, monitoring, and upgrades simplify IT operations efficiently." },
      { icon: "Mic", title: "360° Voice Pickup", description: "8-unit omnidirectional microphone array captures voices clearly from all directions." },
      { icon: "Wifi", title: "Multiple Connectivity", description: "USB, internet port, and Bluetooth support flexible device connections." },
    ],
  },

  storyData: {
    tag: "Overview",
    heading: "BYOD meetings\n for high-impact rooms",
    highlightLast: 3,
    paragraphs: [
      "The Yealink UVC85 BYOD solution is ideal for medium to large conference rooms where clear participant visibility and professional-quality video are essential. With powerful 4K resolution, 36X zoom, and auto-framing, it captures everyone clearly across wider tables. Its plug-and-play USB BYOD setup and unified device management make meetings efficient and IT maintenance easy. This makes it a reliable choice for hybrid meetings and high-impact collaboration.",
      "GS IT demos it in your own room first, then installs, configures and supports it after go-live.",
    ],
    image: `${IMG}/overview.png`,
    alt: "Yealink UVC85-BYOD in a meeting room",
  },

  specsData: {
    tag: "Specifications",
    heading: "UVC85-BYOD\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "Package includes",
          rows: [
            "VCR20 Remote Control and 2 AAA Batteries",
            "DC Power Adapter (48V/0.7A)",
            "Wall Mount Bracket and Accessories",
            "2.5m USB Cable (USB-A to USB-B)",
            "7.5m Gigabit Ethernet Cable",
            "Cable ties * 2",
            "Lens Cap",
            "UVC85 Quick Start Guide",
            "DC power adapter (standard 48V/0.7A, optional 48V/2A)",
            "7.5m Ethernet cable",
            "1.2m dual-head USB-C cable",
            "Cable ties * 2",
            "Cable cover * 1; Screw * 2",
            "CP50 Quick Start Guide",
            "1.8m HDMI Cable",
          ].map((value) => ({ value })),
        },
        {
          title: "Camera",
          rows: [
            { value: "8MP Camera" },
            { value: "90° DFOV, 80° HFOV, 50° VFOV" },
            { value: "9 preset positions" },
            { value: "Mechanical PTZ" },
            { label: "Pan", value: "±100°" },
            { label: "Tilt", value: "+30°, -90°" },
            { value: "36x HD zoom, 12x optical zoom, 3x digital zoom" },
            { label: "Maximum video output resolution", value: "4K" },
            { value: "Autofocus" },
            { label: "Effective focal length", value: "f=3.4mm-40.4mm" },
            { label: "Aperture", value: "F/1.8-F/3.6" },
            { label: "Exposure", value: "Auto/Manual" },
            { label: "White Balance", value: "Auto Tracking/Manual/One-Push" },
            { label: "Shutter Speed", value: "1/60~1/10000 sec" },
          ],
        },
        {
          title: "Device Management",
          rows: [{ value: "Yealink RoomConnect management tool" }, { value: "Yealink Management Cloud Service/Yealink Device Management Platform" }],
        },
        { title: "AI Features", rows: [{ value: "Auto-Framing" }] },
      ],
      [
        {
          title: "Physical Interfaces",
          rows: [
            "1x USB3.0 USB-B port (PC interface)",
            "1x USB2.0 USB-A port",
            "1x Internet port",
            "1x VCH port",
            "1x HDMI out port",
            "1x 3.5mm line in port",
            "1x 3.5mm line out port",
            "1x DC 48V power port",
            "1x security lock slot",
            "1x reset hole",
          ].map((value) => ({ value })),
        },
        {
          title: "Other Physical Features",
          rows: [
            { label: "Operating humidity", value: "10~95%" },
            { label: "Operating temperature", value: "0~40°C" },
            { label: "Storage temperature", value: "-30°C~70°C" },
          ],
        },
        {
          title: "Power Supply",
          rows: [
            { label: "Average power consumption", value: "15.45W" },
            { label: "Power adapter", value: "AC 100~240V input, DC 48V/0.7A" },
            { label: "DC power adapter", value: "DC 48V/0.7A" },
            { label: "PoE power", value: "Supports standard PoE power supply (802.3at)" },
            { label: "USB power supply", value: "Not supported" },
          ],
        },
        {
          title: "Product Features",
          rows: [
            { value: "Sleep mode dimensions (W.D.H): 200mm x125mm x 172.6mm" },
            { value: "Working mode dimensions (W.D.H): 200mm x125mm x 151mm" },
            { label: "Working height", value: "151.6mm-173.8mm" },
            {
              value:
                "The Yealink UVC85-BYOD Meeting Kit is a premium audio and video conferencing solution designed for medium and large meeting rooms. Featuring the UVC85 4K Ultra HD intelligent camera and CP50 professional speakerphone, it delivers ultra-clear video and high-fidelity audio. Simple Type-C plug-and-play connectivity ensures a professional meeting experience.",
            },
          ],
        },
      ],
    ],
  },

  faqHeaderData: {
    tag: "FAQs",
    heading: "UVC85-BYOD\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is the Yealink UVC85 BYOD meeting kit designed for?",
        answer: "The Yealink UVC85 BYOD meeting kit is designed to deliver professional-grade video conferencing for medium and large meeting rooms. It combines 4K ultra-HD video with high-quality audio for collaboration. Ideal for businesses adopting hybrid work models, GS IT recommends this solution for organizations seeking reliable, plug-and-play conferencing performance with minimal deployment complexity.",
      },
      {
        question: "Which room sizes are best suited for the UVC85 BYOD solution?",
        answer: "The UVC85 BYOD solution is best suited for medium to large conference rooms where clear visibility and strong audio pickup are essential. With powerful zoom, wide-angle coverage, and scalable audio support, it ensures every participant is seen and heard clearly. GS IT deploys this solution for boardrooms, training rooms, and collaborative corporate environments.",
      },
      {
        question: "What devices are included in the UVC85 BYOD meeting kit?",
        answer: "The Yealink UVC85 BYOD meeting kit includes the UVC85 4K Ultra HD intelligent camera and the CP50 professional video conferencing speakerphone. Together, they deliver advanced video clarity and 360-degree voice pickup. GS IT provides complete installation and configuration support, ensuring businesses maximize the performance of both camera and audio components.",
      },
      {
        question: "Does the UVC85 BYOD support plug-and-play connectivity?",
        answer: "Yes, the UVC85 BYOD supports simple plug-and-play connectivity through a single Type-C cable. Users can instantly connect their laptop to access professional camera and speakerphone capabilities without complex wiring. GS IT recommends this solution for organizations seeking fast deployment, simplified meeting setup, and integration into existing conference room infrastructure.",
      },
      {
        question: "What video resolution does the UVC85 camera deliver?",
        answer: "The UVC85 camera delivers ultra-clear 4K Ultra HD resolution with excellent color accuracy and smooth motion performance. Its advanced optics and zoom capabilities ensure every participant appears sharp and professional during meetings. GS IT highlights this feature for businesses that prioritize high-quality visual communication in executive boardrooms and client-facing discussions.",
      },
      {
        question: "Does the UVC85 BYOD support auto-framing technology?",
        answer: "Yes, the UVC85 supports intelligent auto-framing technology that automatically detects participants and adjusts the camera view in real time. This eliminates manual adjustments and keeps meetings focused and efficient. GS IT recommends this feature for dynamic meeting environments where participants frequently move, or collaborative discussions require camera transitions.",
      },
      {
        question: "Is the UVC85 BYOD compatible with Zoom, Microsoft Teams, and other platforms?",
        answer: "The UVC85 BYOD is compatible with major conferencing platforms including Zoom, Microsoft Teams, and other UC solutions. Its USB-based connectivity ensures broad interoperability without additional configuration. GS IT assists organizations in integrating the system with their preferred collaboration platforms, enabling smooth, professional virtual meetings across departments and locations.",
      },
      {
        question: "What audio performance can be expected from the CP50 speakerphone?",
        answer: "The CP50 speakerphone delivers 360-degree voice pickup through an 8-microphone array, combined with advanced noise cancellation and full-duplex communication. This ensures clear, natural conversations without interruptions. GS IT recommends the CP50 for conference rooms where consistent audio clarity is critical for productive hybrid meetings and remote collaboration.",
      },
      {
        question: "Is the UVC85 BYOD suitable for hybrid and remote meetings?",
        answer: "Yes, the UVC85 BYOD is ideal for hybrid and remote meetings, providing high-definition video and premium audio clarity for distributed teams. Its plug-and-play setup supports flexible work environments and content sharing. GS IT implements this solution to help businesses maintain professional communication standards across in-office and remote participants.",
      },
      {
        question: "What makes the UVC85 BYOD an excellent choice for medium and large rooms?",
        answer: "The UVC85 BYOD is a powerful conferencing solution designed specifically for medium and large meeting rooms. With its 4K ultra-HD camera, 36X zoom, intelligent auto-framing, and 360° audio pickup, it ensures complete room coverage. GS IT recommends this solution for businesses seeking reliable performance, scalable audio, and simplified meeting room management.",
      },
      {
        question: "Can I see the UVC85-BYOD before buying?",
        answer: "Yes. GS IT is a Yealink Gold Video Conferencing Partner and demos it in your own room. We order only after you approve the proposal.",
      },
    ],
  },

  relatedData: {
    tag: "Related products",
    heading: "Compare with\n other Yealink systems",
    highlightLast: 3,
    subhead: "Other USB cameras and BYOD kits in the Yealink range.",
    linkLabel: "View product",
    items: [
      { title: "SmartVision 80", image: `${CAT}/smartvision-80.png`, href: `${STORE}/yealink-smartvision-80` },
      { title: "UVC86", image: `${CAT}/uvc86.png`, href: `${STORE}/yealink-uvc86` },
      { title: "MeetingBoard C", image: `${CAT}/meetingboard-c-byod.png`, href: `${STORE}/yealink-meetingboard-c-byod` },
      { title: "SmartVision 60", image: `${CAT}/smartvision-60.png`, href: `${STORE}/yealink-smartvision-60` },
      { title: "SmartVision 40", image: `${CAT}/smartvision-40.png`, href: `${STORE}/yealink-smartvision-40` },
      { title: "MeetingBar A25-BYOM", image: `${CAT}/meetingbar-a25.jpg`, href: `${STORE}/yealink-meetingbar-a25-byom` },
    ],
  },

  enquiry: {
    text: "Share your details and a GS IT specialist will contact you about the UVC85-BYOD, availability and an on-site demo.",
  },
};
