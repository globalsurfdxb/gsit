import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { VC_IMG as IMG, MX_DATASHEETS as DS, vcCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Video Conferencing/MAXHUB XBar V70 Kit _ GS IT/index.html
export const xbarV70Kit: LogitechProductData = {
  slug: "xbar-v70-kit",
  seo: {
    title: "MAXHUB XBar V70 Kit | GS IT",
    description: "MAXHUB XBar V70 Kit from GS IT. An Android video bar for Microsoft Teams Rooms with four 50MP cameras, a 16-mic array and Panel AP30, for medium to large rooms.",
  },
  name: "MAXHUB XBar V70 Kit",
  image: `${IMG}/maxhub-xbar-v70-kit-full-kit.webp`,
  heroData: {
    crumbs: vcCrumbs("XBar V70 Kit"),
    gallery: [
      { src: `${IMG}/maxhub-xbar-v70-kit-full-kit.webp`, alt: "MAXHUB XBar V70 video bar with Panel AP30" },
      { src: `${IMG}/maxhub-xbar-v70-kit-video-bar.webp`, alt: "Front view of the MAXHUB XBar V70 video bar" },
      { src: `${IMG}/maxhub-xbar-v70-kit-touch-panel.webp`, alt: "MAXHUB Panel AP30 touch panel showing a Teams Rooms screen" },
    ],
    tag: "Android Video Bar Kit",
    heading: "MAXHUB\n XBar V70 Kit",
    highlightLast: 3,
    description: "A Microsoft Teams Rooms kit for medium to large rooms that can be managed remotely through Microsoft tools or MAXHUB Pivot.",
    keys: [
      { label: "Platform", value: "Android 13 with MDEP" },
      { label: "Cameras", value: "Four 50MP, 8x hybrid zoom" },
      { label: "Field of view", value: "125° horizontal" },
      { label: "Microphones", value: "16-mic array, 10m pickup" },
      { label: "Speakers", value: "Dual 20W stereo" },
      { label: "Touch panel", value: "Panel AP30, 11.6″" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Wide View, Clear Voice Pickup",
    highlightLast: 3,
    subhead: "Meetings in larger rooms stay clear and easy to follow for people joining remotely.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Four 50MP Cameras",
        description: "The quad camera system records at up to 3840 × 2160, with f/2.4 lenses and 1/1.55 inch sensors.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "125° View & 8x Zoom",
        description: "A wide lens takes in the table, and two telephoto lenses reach closer with 8x hybrid zoom.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "Speaker-Aware Framing",
        description: "Speaker tracking, auto framing, intelligent focus and smart gathering change the shot during a call.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "Expandable Microphones",
        description: "Sixteen microphones cover up to 10m, and four expansion microphones can be connected.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "AI Audio Processing",
        description: "Echo cancellation, noise suppression, automatic gain control and an audio fence clean up the room’s sound.",
      },
      {
        icon: "<rect x=\"5\" y=\"5\" width=\"14\" height=\"10\" rx=\"1.5\"/><path d=\"M3 19h18\"/>",
        title: "BYOD Over USB-B",
        description: "Laptops connect to the USB-B 3.0 port with one cable to hold meetings in BYOD mode.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Android Inside,\n Managed With Microsoft Tools",
    highlightLast: 4,
    paragraphs: ["The XBar V70 and Panel AP30 both run Android 13 with Microsoft Device Ecosystem Platform (MDEP) support. IT staff can manage them in the Microsoft Teams Admin Center, Intune or the Pro management portal. MAXHUB Pivot reports device status over the internet."],
    checks: [
      "HDMI and USB-C sharing both reach 4K at 30fps.",
      "Two HDMI outputs run at up to 4K and 60Hz, with CEC support.",
      "Audio in and out ports link third-party audio equipment.",
      "The RJ45 Ext port connects MAXHUB accessories such as microphones and cameras.",
      "Panel AP30 can power a laptop over USB-C at up to 65W.",
    ],
    image: `${IMG}/maxhub-xbar-v70-kit-in-room.webp`,
    alt: "A meeting room on a Teams call, with the XBar V70 under two displays and Panel AP30 on the table",
  },
  focusData: {
    tag: "What's in the Kit",
    heading: "Bar & Panel,\n Linked Over One Cable",
    highlightLast: 4,
    subhead: "The V70 bar handles video and audio. Panel AP30 gives people a touch screen to run the meeting.",
    columns: 2,
    data: [
      {
        image: `${IMG}/maxhub-xbar-v70-kit-xbar-v70-video-bar.webp`,
        alt: "MAXHUB XBar V70 video bar",
        title: "XBar V70 Video Bar",
        description: "This 4.3kg bar measures 840.6 × 117.6 × 104mm and contains the cameras, microphones and speakers.",
        list: { label: "In its box", items: ["Power adapter and 1.5m AC cable", "Two 3m HDMI cables", "3m Ethernet cable", "Mounting components"] },
      },
      {
        image: `${IMG}/maxhub-xbar-v70-kit-panel-ap30-touch-panel.webp`,
        alt: "MAXHUB Panel AP30 touch panel",
        title: "Panel AP30 Touch Panel",
        description: "The 11.6 inch touch panel has its own power supply and wakes automatically through a PIR sensor.",
        list: { label: "In its box", items: ["1.5m USB-C cable", "7.5m Ethernet cable", "Screwdriver", "Power adapter and 1.5m AC cable"] },
      },
    ],
    note: { title: "Connected Over RJ45", text: "The bar’s RJ45 M Link port connects Panel AP30, and a 7.5m Ethernet cable comes with the panel." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Look Closer\n At Each Part of the Kit",
    highlightLast: 6,
    subhead: "Reference values for checking display connections, power and network needs before installation.",
    panes: [
      {
        label: "Kit",
        sub: "V70 + AP30",
        note: "These values apply to the XBar V70 Kit as a whole.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V70_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Package Content",
              open: true,
              rows: [
                { label: "XBar V70 (with accessories)", value: "1" },
                { label: "Panel AP30 (with accessories)", value: "1" },
              ],
            },
            {
              title: "Content Sharing",
              rows: [
                { label: "Teams (in meeting)", value: "1080p at 30fps" },
                { label: "Local sharing (USB-C)", value: "4K at 30fps" },
                { label: "Local sharing (HDMI)", value: "4K at 30fps" },
              ],
            },
            {
              title: "Device Management",
              rows: [
                { label: "Microsoft Device Management Platform", value: "Microsoft Teams Admin Center, Intune, Pro management portal" },
                { label: "MAXHUB", value: "MAXHUB Pivot" },
              ],
            },
          ],
          [
            {
              title: "Environment",
              open: true,
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Kit Packaging",
              rows: [
                { label: "Package dimensions (L × W × H)", value: "985 × 290 × 275mm" },
                { label: "Gross weight", value: "11.7kg" },
              ],
            },
          ],
        ],
      },
      {
        label: "XBar V70",
        sub: "Video bar",
        note: "These values apply to the XBar V70 video bar.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V70_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Camera",
              open: true,
              rows: [
                { label: "Cameras", value: "4 × 50MP" },
                { label: "Sensor", value: "1/1.55 inch" },
                { label: "Aperture", value: "f/2.4" },
                { label: "Resolutions (H.264 / MJPEG)", value: "3840 × 2160, 2560 × 1440, 1920 × 1080, 1280 × 720, 1024 × 576, 960 × 540, 800 × 600, 640 × 360" },
                { label: "Resolutions (YUY2)", value: "1920 × 1080, 1280 × 720, 640 × 360" },
                { label: "Zoom", value: "8x hybrid" },
                { label: "Wide camera", value: "130° diagonal, 125° horizontal, 50° vertical" },
                { label: "Telephoto camera", value: "52° diagonal, 42° horizontal, 32° vertical" },
                { label: "Privacy shutter", value: "Automatic electric lens shutter" },
                { label: "AI features", value: "Auto framing, speaker tracking, intelligent focus, smart gathering, video fence" },
              ],
            },
            {
              title: "Speakers",
              rows: [
                { label: "Speakers", value: "2" },
                { label: "Sound channel", value: "2.0" },
                { label: "Total power (maximum)", value: "20W + 20W" },
                { label: "Frequency range", value: "80Hz–20kHz" },
              ],
            },
            {
              title: "Microphones & Processing",
              rows: [
                { label: "Microphones", value: "16-mic array" },
                { label: "Pickup range", value: "10m" },
                { label: "Frequency range", value: "20Hz–16kHz" },
                { label: "Sensitivity", value: "−36 ± 1 dBFS" },
                { label: "Sampling rate", value: "48kHz" },
                { label: "Expansion", value: "Up to 4 expansion microphones" },
                { label: "Audio processing", value: "Noise reduction, echo cancellation (AEC), anti-reverberation, automatic noise suppression (ANS), automatic gain control (AGC), audio fence" },
                { label: "Duplex", value: "Full duplex" },
              ],
            },
          ],
          [
            {
              title: "Software",
              open: true,
              rows: [
                { label: "Operating system", value: "Android 13" },
                { label: "MDEP", value: "Supported" },
              ],
            },
            {
              title: "Network",
              rows: [
                { label: "Wi-Fi", value: "Wi-Fi 6, 2 × 2 MIMO" },
                { label: "Wi-Fi protocol", value: "802.11 a/b/g/n/ac/ax" },
                { label: "Working band", value: "2.4GHz and 5GHz" },
                { label: "Bluetooth", value: "5.2 + BLE" },
                { label: "Ethernet", value: "1000Mbps" },
              ],
            },
            {
              title: "Ports",
              rows: [
                { label: "HDMI in", value: "1 (up to 4K at 60Hz)" },
                { label: "HDMI out", value: "2 (up to 4K at 60Hz, CEC supported)" },
                { label: "USB-B 3.0 (device)", value: "1 (BYOD mode)" },
                { label: "USB-A 3.0", value: "1 (firmware update and debug)" },
                { label: "USB-A 2.0", value: "1 (firmware update and debug)" },
                { label: "Audio in", value: "1 (third-party audio input)" },
                { label: "Audio out", value: "1 (third-party audio output)" },
                { label: "RJ45 (Internet)", value: "1 (network connection)" },
                { label: "RJ45 (M Link)", value: "1 (connects the panel)" },
                { label: "RJ45 (Ext)", value: "1 (MAXHUB accessories such as microphones and cameras)" },
                { label: "DC in", value: "1 (19V power supply)" },
              ],
            },
            {
              title: "Power & Physical",
              rows: [
                { label: "Power adapter", value: "AC 100–240V input, DC 19V 4.5A output" },
                { label: "Dimensions (L × W × H)", value: "840.6 × 117.6 × 104mm" },
                { label: "Package dimensions (L × W × H)", value: "962 × 169 × 246mm" },
                { label: "Net weight", value: "4.3kg" },
                { label: "Gross weight", value: "7.0kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Power adapter", value: "1" },
                { label: "AC cable, 1.5m", value: "1" },
                { label: "HDMI cable, 3m", value: "2" },
                { label: "Ethernet cable, 3m", value: "1" },
                { label: "Mounting components", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "Panel AP30",
        sub: "Touch panel",
        note: "These values apply to Panel AP30.",
        datasheet: { text: "Download Datasheet", href: `${DS}/MAXHUB_XBar_V70_Kit_Datasheet_V2.0.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "Size", value: "11.6″" },
                { label: "Resolution", value: "1920 × 1080" },
                { label: "Refresh rate", value: "60Hz" },
                { label: "Backlight", value: "ELED" },
                { label: "Brightness with glass", value: "250 nits minimum, 300 nits maximum" },
                { label: "Lifetime", value: "20,000 hours or more" },
              ],
            },
            {
              title: "Touch & Sensor",
              rows: [
                { label: "Type", value: "Capacitive touch" },
                { label: "Surface treatment", value: "Anti-fingerprint, anti-glare" },
                { label: "Motion sensor", value: "PIR sensor for automatic wake-up" },
              ],
            },
            {
              title: "Software",
              rows: [
                { label: "Operating system", value: "Android 13" },
                { label: "MDEP", value: "Supported" },
              ],
            },
          ],
          [
            {
              title: "Ports",
              open: true,
              rows: [
                { label: "RJ45 (Internet)", value: "1" },
                { label: "RJ45 (Ext)", value: "1" },
                { label: "DC in", value: "1" },
                { label: "USB-C (ingest)", value: "1" },
                { label: "USB 2.0", value: "1 (wireless dongle pairing)" },
              ],
            },
            {
              title: "Power",
              rows: [
                { label: "Power input", value: "19V DC, 4.5A" },
                { label: "Power output", value: "USB-C PD, 65W maximum" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (L × W × H)", value: "278 × 164 × 82.4mm" },
                { label: "Weight", value: "1.16kg" },
                { label: "Package dimensions (L × W × H)", value: "1 unit: 570 × 246 × 101mm; 4 units: 590 × 440 × 280mm" },
                { label: "Package weight", value: "1 unit: 3.12kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "USB-C cable, 1.5m", value: "1" },
                { label: "Ethernet cable, 7.5m", value: "1" },
                { label: "Screwdriver", value: "1" },
                { label: "Power adapter", value: "1" },
                { label: "AC cable, 1.5m", value: "1" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on XBar V70 Kit",
    highlightLast: 3,
    faqData: [
      {
        question: "What comes in the XBar V70 Kit box?",
        answer: "You get the XBar V70 video bar and Panel AP30. The bar is packed with a power adapter, an AC cable, two 3m HDMI cables, a 3m Ethernet cable and mounting components. The panel is packed with a 1.5m USB-C cable, a 7.5m Ethernet cable, a screwdriver, a power adapter and an AC cable.",
      },
      {
        question: "Which platform does the V70 run on?",
        answer: "Both the bar and Panel AP30 run Android 13 with Microsoft Device Ecosystem Platform (MDEP) support.",
      },
      {
        question: "How can IT manage the kit?",
        answer: "The kit works with Microsoft’s device management tools, including the Teams Admin Center, Intune and the Pro management portal. MAXHUB Pivot can also monitor its status remotely.",
      },
      {
        question: "At what resolution is content shared?",
        answer: "Local sharing over HDMI or USB-C runs at 4K and 30fps. Content shared inside a Teams meeting runs at 1080p and 30fps.",
      },
      {
        question: "How does BYOD mode work?",
        answer: "A laptop connects to the bar’s USB-B 3.0 port with a single USB cable and holds the meeting in BYOD mode.",
      },
      {
        question: "How far do the microphones reach?",
        answer: "The 16-mic array picks up voices at up to 10m. Four expansion microphones can be added for more coverage.",
      },
      {
        question: "How many displays can be connected?",
        answer: "The bar has two HDMI outputs, each supporting up to 4K at 60Hz with CEC.",
      },
      {
        question: "Does Panel AP30 need its own power supply?",
        answer: "Yes. It uses a 19V 4.5A power adapter, which is included, and it can supply up to 65W to a laptop over USB-C.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Other Options\n From the MAXHUB Range",
    highlightLast: 4,
    subhead: "Explore other MAXHUB meeting room kits and displays.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "XBar W70 Kit", image: `${IMG}/maxhub-xbar-w70-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-w70-kit" },
      { title: "XBar V50 Kit", image: `${IMG}/maxhub-xbar-v50-kit-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xbar-v50-kit" },
      { title: "XCore Kit Pro", image: `${IMG}/maxhub-xcore-kit-pro-thumb.webp`, href: "/store/video-conferencing-devices/maxhub/xcore-kit-pro" },
      { title: "UW Series", image: `${IMG}/maxhub-uw-series-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/uw-series-uw105na" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Talk to Our AV Team",
    highlightLast: 3,
    text: "Tell us how many people use the room and how it is laid out, and we will recommend a setup and plan the installation with you.",
  }),
  footNote: "",
};
