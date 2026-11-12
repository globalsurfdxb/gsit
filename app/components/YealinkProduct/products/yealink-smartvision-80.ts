import type { YealinkProductData } from "../Index";
import { storeCrumbs, heroButtons } from "../shared";

// Generated from yealink-smartvision-80.html
export const smartvision80: YealinkProductData = {
  slug: "yealink-smartvision-80",
  seo: {
    title: "Yealink SmartVision 80 Dubai | 4-Lens PTZ Camera | GS IT",
    description: "A four-lens AI camera with PTZ tracking for large rooms, with adaptive framing, high-fidelity audio and built-in privacy controls.",
  },
  name: "Yealink SmartVision 80",
  image: "/assets/images/yealink/smartvision-80.png",
  listing: {  disable: false, order: 150, tag: "USB camera and BYOD", text: "Premium camera with adaptive framing and a privacy mode.", platforms: ["byod"], rooms: [] },
  heroData: {
    crumbs: [...storeCrumbs, { label: "SmartVision 80" }],
    gallery: [
      { src: "/assets/images/yealink/smartvision-80.png", alt: "Yealink SmartVision 80, image 1" },
      { src: "/assets/images/yealink/products/yealink-smartvision-80/gallery-2.png", alt: "Yealink SmartVision 80, image 2" },
      { src: "/assets/images/yealink/products/yealink-smartvision-80/gallery-3.png", alt: "Yealink SmartVision 80, image 3" },
    ],
    tag: "Premium intelligent PTZ camera",
    heading: "Yealink SmartVision 80\n premium intelligent PTZ camera",
    highlightLast: 4,
    description: "A four-lens AI camera with PTZ tracking for large rooms, with adaptive framing, high-fidelity audio and built-in privacy controls.",
    pills: ["In stock", "USB camera", "Large rooms"],
    meta: [
      { label: "Brand", value: "Yealink" },
      { label: "Model", value: "SmartVision 80" },
      { label: "Warranty", value: "2-Year Limited Hardware Warranty" },
    ],
    aboutTitle: "About this item",
    about: [
      { label: "Camera", text: "four-lens AI camera system for detail across large rooms." },
      { label: "Tracking", text: "AI tracking keeps participants in clear focus." },
      { label: "Audio", text: "high-quality built-in audio." },
      { label: "Deployment", text: "flexible mounting and setup options." },
      { label: "Privacy", text: "built-in privacy controls." },
    ],
    buttons: heroButtons,
  },
  packageData: {
    tag: "Package content",
    heading: "What comes\n in the box",
    highlightLast: 3,
    subhead: "The SmartVision 80 package as supplied by GS IT. Optional items depend on the part number ordered.",
    items: [
      { image: "/assets/images/yealink/products/yealink-smartvision-80/box-1.png", title: "Yealink SmartVision 80" },
      { image: "/assets/images/yealink/products/yealink-smartvision-80/box-2.png", title: "Power Supply" },
      { image: "/assets/images/yealink/products/yealink-meetingbar-a10-2/box-2.png", title: "Mount Kit" },
      { image: "/assets/images/yealink/products/yealink-smartvision-80/box-4.png", title: "VCR20 Remote Controller" },
    ],
  },
  featuresData: {
    tag: "Features",
    heading: "Key features of the\n SmartVision 80",
    highlightLast: 2,
    subhead: "What the SmartVision 80 does in the room.",
    data: [
      { icon: "Cpu", title: "AI Computing Power", description: "High-performance CPU delivers 50% more power and 10X faster AI." },
      { icon: "Camera", title: "Quad-Lens AI Camera", description: "Four-lens AI camera captures every detail with exceptional clarity." },
      {
        icon: "ZoomIn",
        title: "Advanced PTZ Tracking",
        description: "Intelligent pan, tilt, zoom automatically follows participants for optimal framing.",
      },
      { icon: "AudioLines", title: "High-Fidelity Audio", description: "Integrated audio system delivers clear sound with minimal distortion." },
      { icon: "Move", title: "Multi-Method Deployment", description: "Flexible installation options allow quick, easy setup in any space." },
      {
        icon: "Frame",
        title: "Adaptive Framing Technology",
        description: "Automatically adjusts camera angles for perfect participant alignment every time.",
      },
      {
        icon: "ShieldCheck",
        title: "Enhanced Privacy Controls",
        description: "Built-in security features protect meetings and sensitive data reliably.",
      },
      { icon: "ScanFace", title: "Intelligent Scene Recognition", description: "AI analyzes room layout to optimize video and participant coverage." },
    ],
  },
  storyData: {
    tag: "Overview",
    heading: "AI-powered meetings\n for large rooms",
    highlightLast: 3,
    paragraphs: [
      "Yealink SmartVision 80 is ideal for large conferences and boardrooms, delivering full-room coverage with one PTZ and three electronic cameras. Featuring up to 20× optical zoom, AI-powered IntelliFocus and Presenter Tracking, and high-resolution multi-lens video. It ensures clear participant framing, ultra-responsive tracking, and collaboration for hybrid meetings. Its flexible installation and adjustable brackets make setup easy, while advanced AI features enhance meeting productivity and engagement.",
      "GS IT demos it in your own room first, then installs, configures and supports it after go-live.",
    ],
    image: "/assets/images/yealink/products/yealink-smartvision-80/overview.png",
    alt: "Yealink SmartVision 80 in a meeting room",
  },
  specsData: {
    tag: "Specifications",
    heading: "SmartVision 80\n technical specifications",
    highlightLast: 2,
    subhead: "Open a group to see the details.",
    columns: [
      [
        {
          title: "PTZ Camera",
          rows: [{ value: "20× optical zoom" }, { value: "15m maximum distance" }, { label: "Pan", value: "±96°, Tilt: -90°~+50°" }],
        },
        {
          title: "Panoramic Camera",
          rows: [{ value: "110° DFOV, 98° HFOV, 82° VFOV" }, { value: "Automatic lens cover" }, { label: "Manual Tilt", value: "-12°~+13°" }],
        },
        {
          title: "Telephoto Camera",
          rows: [{ value: "51° DFOV, 41.6° HFOV, 32° VFOV" }, { value: "Automatic lens cover" }, { label: "Manual Tilt", value: "-12°~+13°" }],
        },
        { title: "Audio", rows: [{ value: "Support AI noise suppression technology" }, { value: "Support dereverb technology" }] },
      ],
      [
        {
          title: "AI Feature",
          rows: [
            { value: "Multi-Stream IntelliFrame (on device)" },
            { value: "Participant identification" },
            { value: "IntelliFocus" },
            { value: "Speaker tracking" },
            { value: "Presenter tracking" },
            { value: "Video fence" },
            { value: "PIP" },
            { value: "Auto framing" },
          ],
        },
        {
          title: "Interfaces",
          rows: [
            { value: "1 × USB 3.0 Type-B port" },
            { value: "1 × USB 2.0 Type-A port" },
            { value: "2 × VCH port (RJ45)" },
            { value: "1 × network port (RJ45)" },
            { value: "1 × HDMI out port" },
            { value: "1 × line in port" },
            { value: "1 × line out port" },
            { value: "1 × reset button" },
            { value: "1 × DC power port" },
          ],
        },
        {
          title: "Package",
          rows: [
            { value: "1 × Yealink SmartVision 80" },
            { value: "1 × power supply" },
            { value: "1 × mount kit" },
            { value: "1 × VCR20 remote controller" },
            { value: "1 × quick start guide" },
          ],
        },
        {
          title: "Dimension",
          rows: [
            { value: "230 × 135 × 171.5 mm" },
            {
              value: "Yealink SmartVision 80 is an intelligent four-lens conference camera designed for large meeting rooms and hybrid workplaces. Featuring one PTZ and three electronic cameras, 20X optical zoom, and AI-powered IntelliFocus and Presenter Tracking, it delivers full-room coverage, clear participant framing, and video collaboration for professional meetings.",
            },
          ],
        },
      ],
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "SmartVision 80\n questions answered",
    highlightLast: 2,
    faqData: [
      {
        question: "What is Yealink SmartVision 80?",
        answer: "Yealink SmartVision 80 is an intelligent four-lens 4K conference camera engineered for large meeting rooms. It combines a powerful PTZ lens with panoramic cameras to deliver engaging coverage, precise speaker tracking, and AI-driven framing. Designed for professional collaboration spaces, it enhances hybrid meetings with clear visuals and smart automation. At GS IT, we deploy SmartVision 80 to transform boardrooms into dynamic, modern, future-ready collaboration environments.",
      },
      {
        question: "Which platforms are compatible with Yealink SmartVision 80?",
        answer: "Yealink SmartVision 80 is primarily designed for Microsoft Teams Rooms and is ideal for deployment within Yealink MVC systems for large meeting spaces. It also supports broad compatibility with major USB-based UC platforms, including Zoom and other standard video conferencing applications via USB 3.0 connectivity.",
      },
      {
        question: "What is the maximum optical zoom of Yealink SmartVision 80?",
        answer: "Yealink SmartVision 80 features a powerful 20X optical zoom PTZ camera. This enables clear, high-quality close-ups of speakers and participants, even in large meeting rooms. The optical zoom maintains image clarity without distortion, making it suitable for boardrooms and training halls. GS IT recommends SmartVision 80 for organizations requiring detailed video capture across expansive conference environments.",
      },
      {
        question: "Does Yealink SmartVision 80 include privacy protection?",
        answer: "Yes, Yealink SmartVision 80 includes automatic lens covers on its electronic cameras. These covers remain closed when the camera is not in use, helping protect privacy and prevent unintended video capture. GS IT provides SmartVision 80 as a secure conferencing solution for enterprises that prioritize privacy, professionalism, and reliable meeting room technology.",
      },
      {
        question: "What types of AI tracking are available in Yealink SmartVision 80?",
        answer: "Yealink SmartVision 80 supports advanced AI features including IntelliFocus, Speaker Tracking, Presenter Tracking, Auto Framing, Video Fence, Participant Identification, and Picture-in-Picture. These capabilities dynamically adjust camera views based on meeting activity. GS IT integrates SmartVision 80 into large conference environments to deliver intelligent, responsive, and professional video collaboration experiences.",
      },
      {
        question: "Which management software is used for Yealink SmartVision 80?",
        answer: "SmartVision 80 is typically managed as part of Yealink’s room solution ecosystem, including integrated control within Yealink MVC systems and room management interfaces. GS IT assists clients with setup, configuration, and centralized management to ensure SmartVision 80 performs reliably within enterprise Microsoft Teams Rooms and similar environments.",
      },
      {
        question: "Does Yealink SmartVision 80 support multi-camera functionality?",
        answer: "Yes, when multiple SmartVision 80 units are used together, they enable Multi-Camera IntelliFocus and IntelliFrame capabilities to expand tracking range and coverage across large meeting rooms. This coordinated multi-camera setup enhances overall meeting visuals and participant tracking performance. GS IT designs these scalable multi-camera deployments for expansive enterprise environments.",
      },
      {
        question: "What is the ideal room size for Yealink SmartVision 80?",
        answer: "Yealink SmartVision 80 is designed for large conference rooms and boardrooms where wide coverage and advanced tracking are needed. The quad-lens setup, 20X optical zoom, and intelligent tracking features make it suitable for expansive corporate environments with many participants. GS IT recommends SmartVision 80 for enterprise spaces requiring high-quality video conferencing and professional hybrid meeting experiences.",
      },
      {
        question: "What AI features improve meeting visibility in SmartVision 80?",
        answer: "Yealink SmartVision 80 includes AI-powered features such as IntelliFocus, Speaker Tracking, Presenter Tracking, Auto Framing, Video Fence, Participant Identification, and Picture-in-Picture. These capabilities automatically optimize framing and focus based on meeting activity. GS IT integrates SmartVision 80 into enterprise environments to deliver intelligent, responsive video collaboration that enhances visibility and participant engagement.",
      },
      {
        question: "What is the difference between Yealink SmartVision 80 and SmartVision 60?",
        answer: "Yealink SmartVision 80 and 60 both deliver intelligent camera performance, but SmartVision 80 is built for larger meeting rooms with a quad-lens design and a 20X optical zoom, offering broader coverage and advanced AI tracking capabilities. SmartVision 60 targets mid-sized spaces with fewer lenses and more compact zoom. GS IT helps you choose the right model based on room size, participant count, and collaboration needs.",
      },
      {
        question: "Can I see the SmartVision 80 before buying?",
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
      { title: "UVC85-BYOD", image: "/assets/images/yealink/uvc85-byod.png", href: "/store/video-conferencing-devices/yealink/uvc85-byod" },
      { title: "UVC86", image: "/assets/images/yealink/uvc86.png", href: "/store/video-conferencing-devices/yealink/yealink-uvc86" },
      {
        title: "MeetingBoard C",
        image: "/assets/images/yealink/meetingboard-c-byod.png",
        href: "/store/video-conferencing-devices/yealink/yealink-meetingboard-c-byod",
      },
      {
        title: "SmartVision 60",
        image: "/assets/images/yealink/smartvision-60.png",
        href: "/store/video-conferencing-devices/yealink/yealink-smartvision-60",
      },
      {
        title: "SmartVision 40",
        image: "/assets/images/yealink/smartvision-40.png",
        href: "/store/video-conferencing-devices/yealink/yealink-smartvision-40",
      },
    ],
  },
  enquiry: { text: "Share your details and a GS IT specialist will contact you about the SmartVision 80, availability and an on-site demo." },
};
