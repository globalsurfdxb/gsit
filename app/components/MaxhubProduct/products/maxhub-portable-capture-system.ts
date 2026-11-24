import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB Portable Capture System _ GS IT/index.html
export const portableCaptureSystem: LogitechProductData = {
  slug: "portable-capture-system",
  seo: {
    title: "MAXHUB Portable Capture System | GS IT",
    description: "MAXHUB Portable Capture System from GS IT. A wireless recording and live streaming set with the CSP50M portable capture host, EP50 wireless PTZ camera and LM50 wireless microphones.",
  },
  name: "MAXHUB Portable Capture System",
  image: `${IMG}/maxhub-portable-capture-system-capture-host.webp`,
  heroData: {
    crumbs: dcsCrumbs("Portable Capture System"),
    gallery: [
      { src: `${IMG}/maxhub-portable-capture-system-capture-host.webp`, alt: "MAXHUB CSP50M portable capture host with its touch screen and antennas" },
      { src: `${IMG}/maxhub-portable-capture-system-ptz-camera.webp`, alt: "MAXHUB EP50 wireless PTZ camera with its antenna" },
      { src: `${IMG}/maxhub-portable-capture-system-camera-and-host.webp`, alt: "The MAXHUB EP50 camera and CSP50M capture host shown together" },
    ],
    tag: "Wireless Capture Solution",
    heading: "MAXHUB\n Portable Capture System",
    highlightLast: 3,
    description: "A wireless recording setup that can be carried to a venue and set up quickly indoors or outdoors.",
    keys: [
      { label: "Camera zoom", value: "20x optical, 40x hybrid" },
      { label: "Recording", value: "Up to 4K at 30fps" },
      { label: "Video channels", value: "Up to 7" },
      { label: "Camera battery", value: "Up to 6 hours" },
      { label: "Wireless range", value: "Up to 100m" },
      { label: "Network", value: "Wi-Fi 6 and wired" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Quick to Deploy,\n Wireless by Design",
    highlightLast: 3,
    subhead: "Events can be filmed and streamed in places that have no fixed AV installation.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "Wireless PTZ Camera",
        description: "The EP50 combines 20x optical and 40x hybrid zoom to bring distant subjects into clear view.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "AI Speaker Tracking",
        description: "The camera keeps the presenter in frame automatically, and the operator can click to choose the target.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Touch Directing",
        description: "Cameras and scenes are switched from the 15.6″ touch screen on the CSP50M host.",
      },
      {
        icon: "<path d=\"M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
        title: "Dual Networking",
        description: "Wi-Fi 6 and a wired connection can back each other up during an event.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "Wireless Microphones",
        description: "LM50 microphones connect on their own when removed from the charging case.",
      },
      {
        icon: "<path d=\"M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/><path d=\"M7.5 17a4.5 4.5 0 0 1 9 0\"/>",
        title: "Battery Powered",
        description: "The EP50 runs for up to 6 hours on its built-in battery, and the microphones charge in their case.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Events, Lectures\n & Outdoor Activities",
    highlightLast: 3,
    paragraphs: ["The host, wireless camera and microphones work together without fixed cabling. Each part can be placed where the event needs it."],
    checks: [
      "An array microphone in the camera picks up sound within 5m.",
      "A screen on the camera shows its battery status.",
      "A 512GB SSD in the host stores recordings as MP4 files.",
      "The host connects to a MAXHUB whiteboard automatically.",
      "With its screen lowered, the host is 70mm deep.",
    ],
    image: `${IMG}/maxhub-portable-capture-system-in-room.webp`,
    alt: "A presenter speaking to a class with a MAXHUB wireless camera on a tripod",
  },
  focusData: {
    tag: "How the System Connects",
    heading: "Camera & Mics,\n Linked Over the Air",
    highlightLast: 4,
    subhead: "The camera and microphones send video and audio to the host, which handles directing and live output.",
    diagram: {
      label: "Diagram showing the wireless camera and wireless microphone sending video and audio to the portable capture host, which connects to the network and outputs recordings and live video",
      svg: "<svg viewBox=\"0 0 1000 420\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"DM Sans, Arial, sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#114a9f\"/></marker></defs><path d=\"M270 105 C 325 105, 325 215, 380 215\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"266\" y=\"148\" width=\"119\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"325\" y=\"164\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Wireless video</text><path d=\"M270 315 C 325 315, 325 215, 380 215\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"266\" y=\"253\" width=\"119\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"325\" y=\"270\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Wireless audio</text><path d=\"M620 215 C 675 215, 675 105, 730 105\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"612\" y=\"148\" width=\"126\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"675\" y=\"164\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Dual networking</text><path d=\"M620 215 C 675 215, 675 315, 730 315\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"616\" y=\"253\" width=\"119\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"675\" y=\"270\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Directed video</text><rect x=\"30\" y=\"60\" width=\"240\" height=\"90\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"150\" y=\"102\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Wireless PTZ Camera</text><text x=\"150\" y=\"122\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">EP50, 40x hybrid zoom</text><rect x=\"30\" y=\"270\" width=\"240\" height=\"90\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"150\" y=\"312\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Wireless Microphone</text><text x=\"150\" y=\"332\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">LM50</text><rect x=\"380\" y=\"160\" width=\"240\" height=\"110\" rx=\"14\" fill=\"#114a9f\" stroke=\"#114a9f\"/><text x=\"500\" y=\"212\" font-size=\"16\" font-weight=\"500\" fill=\"#fff\" text-anchor=\"middle\">Portable Capture Host</text><text x=\"500\" y=\"232\" font-size=\"12.5\" fill=\"#dbe6fb\" text-anchor=\"middle\">CSP50M, 15.6″ touch screen</text><rect x=\"730\" y=\"60\" width=\"240\" height=\"90\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"850\" y=\"102\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Network</text><text x=\"850\" y=\"122\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">Wi-Fi 6 or wired</text><rect x=\"730\" y=\"270\" width=\"240\" height=\"90\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"850\" y=\"312\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Recording & Live Output</text><text x=\"850\" y=\"332\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">Events and broadcasts</text></svg>",
    },
    data: [
      {
        image: `${IMG}/maxhub-portable-capture-system-csp50m-capture-host.webp`,
        alt: "MAXHUB CSP50M portable capture host",
        title: "CSP50M Capture Host",
        description: "The host records up to seven channels and streams to three RTMP destinations at 1080p.",
        list: { label: "In its box", items: ["Power adapter and power cable", "Five external antennas and an antenna adapter cable", "Two Phoenix connectors"] },
      },
      {
        image: `${IMG}/maxhub-portable-capture-system-ep50-wireless-ptz-camera.webp`,
        alt: "MAXHUB EP50 wireless PTZ camera",
        title: "EP50 Wireless PTZ Camera",
        description: "This 4K camera pans 170° each way and has HDMI, USB-C and network outputs.",
        list: { label: "In its box", items: ["Power adapter", "Power cable", "Quick start guide"] },
      },
      {
        image: `${IMG}/maxhub-portable-capture-system-lm50-wireless-microphone.webp`,
        alt: "MAXHUB LM50 wireless lavalier microphones in their charging case",
        title: "LM50 Wireless Microphone",
        description: "Two clip-on microphones charge in their case and pair automatically when they are taken out.",
        list: { label: "In its box", items: ["USB-C charging cable", "Three wind covers", "Lanyard, storage bag and headset"] },
      },
    ],
    note: { title: "Suitable Venues", text: "The system can be used at outdoor events, in theatres and in large halls." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Figures for Each Device",
    highlightLast: 2,
    subhead: "Host, camera and microphone values for planning power, storage and placement at the venue.",
    panes: [
      {
        label: "CSP50M",
        sub: "Capture host",
        note: "These values apply to the CSP50M portable capture host.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Portable_Capture_System-CSP50M-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "Screen size", value: "15.6″" },
                { label: "Resolution", value: "1920 × 1080" },
                { label: "Brightness", value: "250 nits" },
                { label: "Backlight", value: "ELED" },
                { label: "Colour gamut", value: "72% NTSC" },
                { label: "Viewing angle", value: "More than 170°" },
                { label: "Refresh rate", value: "60Hz" },
                { label: "Glass", value: "7H tempered" },
                { label: "Touch", value: "Capacitive, 10 points" },
              ],
            },
            {
              title: "System",
              rows: [
                { label: "Operating system", value: "Linux" },
                { label: "CPU", value: "A76 × 4 + A55 × 4" },
                { label: "GPU", value: "Mali-G610 MP4" },
                { label: "NPU", value: "6 TOPS" },
                { label: "RAM", value: "8GB" },
                { label: "Storage", value: "512GB SSD" },
                { label: "MTBF", value: "250,000 hours or more" },
              ],
            },
            {
              title: "Video",
              rows: [
                { label: "Recording resolution", value: "4K at 30fps, 1080p, 720p, VGA, QVGA" },
                { label: "Recording frame rate", value: "60, 30 or 25fps" },
                { label: "Recording format", value: "MP4" },
                { label: "Multi-channel recording", value: "Up to 7 channels" },
                { label: "Live streaming", value: "Up to 3 RTMP channels, 1080p" },
                { label: "Live streaming resolution", value: "1080p, 720p, VGA, QVGA" },
              ],
            },
            {
              title: "Wireless",
              rows: [
                { label: "Wi-Fi", value: "Wi-Fi 6, 802.11 a/b/g/n/ac/ax" },
                { label: "Frequency", value: "2.4GHz, 5GHz, 5.8GHz" },
                { label: "Bluetooth", value: "5.2" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "DC in", value: "1" },
                { label: "RJ45", value: "5 (1 internet, 1 mic in, 3 PoE)" },
                { label: "HDMI out", value: "3" },
                { label: "HDMI in (HDMI 1.4)", value: "2" },
                { label: "USB-A 3.0", value: "2" },
                { label: "USB Type-C", value: "1" },
                { label: "RS422", value: "1" },
                { label: "Mic in", value: "1" },
                { label: "Line in", value: "1" },
                { label: "Line out", value: "2" },
                { label: "Power button", value: "1" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Power adapter", value: "100–240V, 50/60Hz, 2.0A max" },
                { label: "Power supply", value: "24V DC, 4.0A" },
                { label: "Power consumption", value: "60W max" },
                { label: "Standby power", value: "0.5W or less" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions, raised (L × W × D)", value: "385.2 × 255 × 290.8mm" },
                { label: "Dimensions, lowered (L × W × D)", value: "385.2 × 255 × 70mm" },
                { label: "Shipping dimensions (W × H × D)", value: "487 × 196 × 358mm" },
                { label: "Net weight", value: "5.5kg" },
                { label: "Gross weight", value: "7.8kg" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Power adapter", value: "1" },
                { label: "Power cable", value: "1" },
                { label: "Phoenix connector", value: "2" },
                { label: "Antenna adapter cable", value: "1" },
                { label: "External antenna", value: "5" },
              ],
            },
          ],
        ],
      },
      {
        label: "EP50",
        sub: "Wireless PTZ camera",
        note: "These values apply to the EP50 wireless PTZ camera.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Portable_Capture_System-EP50-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Camera",
              open: true,
              rows: [
                { label: "Sensor", value: "1/2.8″ CMOS, 8.42 million pixels" },
                { label: "Scanning", value: "Progressive" },
                { label: "Lens", value: "f = 6.25–125mm, F1.58–F3.95" },
                { label: "Auto focus", value: "Supported" },
                { label: "Zoom", value: "20x optical, 40x hybrid" },
                { label: "Minimum illumination", value: "0.5 lux (F1.8, AGC on)" },
                { label: "Electronic shutter", value: "1/30s to 1/10000s" },
                { label: "White balance", value: "Auto, indoor, outdoor, one-touch, manual, set colour temperature" },
                { label: "Noise reduction", value: "2D and 3D" },
                { label: "Signal-to-noise ratio", value: "55dB or more" },
                { label: "Horizontal field of view", value: "60° to 3.5°" },
                { label: "Vertical field of view", value: "35.7° to 2.0°" },
                { label: "Pan range", value: "±170°" },
                { label: "Tilt range", value: "−30° to +90°" },
                { label: "Pan speed", value: "2.7° to 35.7° per second" },
                { label: "Tilt speed", value: "2.7° to 31.5° per second" },
                { label: "Image flip", value: "Horizontal and vertical" },
                { label: "Other features", value: "Auto IR cut filter, backlight compensation, low light mode, image freeze" },
                { label: "Presets", value: "255" },
                { label: "Preset accuracy", value: "0.1°" },
              ],
            },
            {
              title: "USB",
              rows: [
                { label: "Operating systems", value: "Windows 7, 8, 10 and 11, macOS, Linux, Android" },
                { label: "Colour space", value: "YUY2, MJPEG, H.264" },
                { label: "Video format", value: "YUY2 up to 2560 × 1440 at 30fps; MJPEG and H.264 up to 3840 × 2160 at 30fps" },
                { label: "USB audio", value: "Supported" },
                { label: "Protocol", value: "UVC 1.1" },
                { label: "UVC PTZ control", value: "Supported" },
              ],
            },
          ],
          [
            {
              title: "Network Video",
              open: true,
              rows: [
                { label: "Video coding", value: "H.264, H.265, MJPEG" },
                { label: "Video streams", value: "First and second stream" },
                { label: "First stream", value: "Up to 3840 × 2160" },
                { label: "Second stream", value: "Up to 1920 × 1080" },
                { label: "Video bitrate", value: "32–102400Kbps" },
                { label: "Bitrate control", value: "Variable or fixed" },
                { label: "Frame rate", value: "1–25fps (50Hz), 1–30fps (60Hz)" },
                { label: "Audio compression", value: "AAC" },
                { label: "Audio bitrate", value: "96, 128 or 256Kbps" },
                { label: "Protocols", value: "TCP/IP, HTTP, RTSP, RTMP, ONVIF, DHCP, UDP and others" },
              ],
            },
            {
              title: "Connectivity",
              rows: [
                { label: "USB Type-C", value: "1 (USB 3.0)" },
                { label: "HDMI out", value: "1 (HDMI 1.4b)" },
                { label: "RJ45", value: "1 (10/100M)" },
                { label: "Line in", value: "1 (3.5mm)" },
                { label: "RS485", value: "1 (3-pin Phoenix, up to 1200m, VISCA, Pelco-D, Pelco-P)" },
                { label: "Power port", value: "1 (JEITA, 12V DC in)" },
                { label: "Buttons", value: "2 (reset, power)" },
              ],
            },
            {
              title: "Power & Audio",
              rows: [
                { label: "Input voltage", value: "12V DC" },
                { label: "Input current", value: "3.0A" },
                { label: "Power consumption", value: "12W max" },
                { label: "Battery life", value: "Up to 6 hours of continuous filming" },
                { label: "Built-in microphone", value: "Array microphone, 5m pickup range" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Shipping dimensions (L × W × H)", value: "1 pc: 295 × 245 × 254mm; 4 pcs: 615 × 515 × 273mm" },
                { label: "Net weight", value: "1.9kg" },
                { label: "Gross weight", value: "1 pc: 2.94kg; 4 pcs: 13.24kg" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "−10 to 40 °C" },
                { label: "Storage temperature", value: "−40 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Power adapter", value: "1" },
                { label: "Power cable", value: "1" },
                { label: "Quick start guide", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "LM50",
        sub: "Wireless microphone",
        note: "These values apply to the LM50 wireless lavalier microphone.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Capture_System_V3-LM50-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Controls",
              open: true,
              rows: [
                { label: "Multifunction button", value: "Power, mute and pairing" },
                { label: "Volume buttons", value: "Volume up and volume down" },
              ],
            },
            {
              title: "Charging Case",
              rows: [
                { label: "LED indicator", value: "Power and charging status" },
                { label: "Display screen", value: "Working status" },
                { label: "Power input", value: "3.7V lithium battery" },
                { label: "Charging", value: "USB-C, 5V" },
                { label: "Charging time", value: "2 hours" },
              ],
            },
            {
              title: "Microphone",
              rows: [
                { label: "Quick connect", value: "Starts pairing each time it is removed from the case" },
                { label: "Auto power off", value: "After 5 minutes of inactivity, or 40 minutes of inactivity when connected" },
                { label: "Effective amplification distance", value: "Up to 100m in open space without obstacles" },
                { label: "Quick charging", value: "10 minutes of charging gives more than 90 minutes of use" },
                { label: "Transmission protocol", value: "Bluetooth 5.2" },
                { label: "Technical standard", value: "LE Audio" },
                { label: "Encoding", value: "LC3 Plus" },
                { label: "Power input", value: "3.7V lithium battery" },
                { label: "Charging", value: "Charging case or USB-C, 5V" },
                { label: "Charging time", value: "1 hour" },
                { label: "Operating time", value: "More than 6 hours" },
              ],
            },
          ],
          [
            {
              title: "Audio",
              open: true,
              rows: [
                { label: "Frequency response", value: "20Hz–20kHz" },
                { label: "Distortion", value: "0.1% at 1kHz" },
                { label: "Signal-to-noise ratio", value: "95dB" },
                { label: "Audio latency", value: "Under 25ms" },
                { label: "Sampling rate", value: "48kHz / 16-bit" },
                { label: "Wireless frequency range", value: "2402–2480MHz" },
                { label: "Transmission power", value: "0–13dBm" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Charging case (W × H × D)", value: "84 × 76 × 39mm" },
                { label: "Microphone (W × H × D)", value: "30.4 × 51.6 × 26.1mm" },
                { label: "Package (W × H × D)", value: "140 × 50 × 113mm" },
                { label: "Net weight", value: "0.16kg" },
                { label: "Gross weight", value: "0.45kg" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40 °C" },
                { label: "Charging temperature", value: "5 to 40 °C" },
                { label: "Storage temperature", value: "−20 to 60 °C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage humidity", value: "10% to 90% RH" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "USB Type-C charging cable", value: "1" },
                { label: "Wind protection furry cover", value: "3" },
                { label: "Microphone lanyard", value: "1" },
                { label: "Storage bag", value: "1" },
                { label: "Microphone headset", value: "1" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on Portable Capture System",
    highlightLast: 3,
    faqData: [
      {
        question: "What does the Portable Capture System include?",
        answer: "It combines the CSP50M portable capture host, the EP50 wireless PTZ camera and LM50 wireless lavalier microphones.",
      },
      {
        question: "Does the camera need a power outlet?",
        answer: "No. The EP50 has a built-in battery, so it can be placed away from power sources. A power adapter is also included.",
      },
      {
        question: "How long do the batteries last?",
        answer: "The EP50 camera films for up to 6 hours per charge. The LM50 microphone runs for more than 6 hours and recharges fully in 1 hour.",
      },
      {
        question: "How far can the camera be from the host?",
        answer: "Wireless audio and video transmission reaches up to 100m.",
      },
      {
        question: "Can the camera track a presenter?",
        answer: "Yes. The EP50 follows the presenter automatically, and the operator can click to select the target.",
      },
      {
        question: "How does the system connect to the network?",
        answer: "The CSP50M supports Wi-Fi 6 on 2.4GHz, 5GHz and 5.8GHz and has RJ45 ports for wired networking.",
      },
      {
        question: "How much can the host record?",
        answer: "The CSP50M records up to seven channels at up to 4K at 30fps and stores MP4 files on a 512GB SSD.",
      },
      {
        question: "How do the microphones connect?",
        answer: "The LM50 microphones begin pairing each time they are removed from the charging case. Pairing is required the first time they are used.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Other Ways\n to Equip the Venue",
    highlightLast: 4,
    subhead: "Explore other MAXHUB products for recording and presenting.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "Capture System V3", image: `${IMG}/maxhub-capture-system-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/capture-system-v3-4k" },
      { title: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-series" },
      { title: "Smart Lectern", image: `${IMG}/maxhub-smart-lectern-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/smart-lectern-sl22mc" },
      { title: "Raptor Series V3", image: `${IMG}/maxhub-raptor-series-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Your Event Setup",
    highlightLast: 2,
    text: "Tell us about the venue and the events you plan to cover, and our AV team will advise on the setup.",
  }),
  footNote: "",
};
