import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB Capture System V3 (4K) _ GS IT/index.html
export const captureSystemV3: LogitechProductData = {
  slug: "capture-system-v3-4k",
  seo: {
    title: "MAXHUB Capture System V3 (4K) | GS IT",
    description: "MAXHUB Capture System V3 (4K) from GS IT. A classroom capture system with a touch-screen capture host, 4K PTZ camera, dual-lens student camera and ceiling and wireless microphones.",
  },
  name: "MAXHUB Capture System V3 (4K)",
  image: `${IMG}/maxhub-capture-system-v3-capture-host.webp`,
  heroData: {
    crumbs: dcsCrumbs("Capture System V3 (4K)"),
    gallery: [
      { src: `${IMG}/maxhub-capture-system-v3-capture-host.webp`, alt: "Front view of the MAXHUB CSP30 capture host with its touch screen showing the record and live menu" },
      { src: `${IMG}/maxhub-capture-system-v3-ptz-camera.webp`, alt: "MAXHUB EP30 4K PTZ camera" },
      { src: `${IMG}/maxhub-capture-system-v3-student-camera.webp`, alt: "MAXHUB EW30S dual-lens student camera on its wall bracket" },
    ],
    tag: "Classroom Capture System",
    heading: "MAXHUB\n Capture System V3 (4K)",
    highlightLast: 4,
    description: "A capture system that turns everyday teaching into recorded and live-streamed lessons.",
    keys: [
      { label: "Recording", value: "Up to 4K at 30fps" },
      { label: "Video channels", value: "Up to 7" },
      { label: "Live streaming", value: "3 RTMP channels, 1080p" },
      { label: "PTZ zoom", value: "12x optical, 40x hybrid" },
      { label: "Student camera", value: "110° and 42° lenses" },
      { label: "Ceiling mic pickup", value: "8m radius or more" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Record, Stream\n & Share Each Lesson",
    highlightLast: 4,
    subhead: "Schools can record and stream teaching sessions with a system that runs from one touch screen.",
    data: [
      {
        icon: "<rect x=\"3\" y=\"7\" width=\"18\" height=\"11\" rx=\"2\"/><circle cx=\"8\" cy=\"12.5\" r=\"2\"/><circle cx=\"16\" cy=\"12.5\" r=\"2\"/><path d=\"M11 12.5h2\"/>",
        title: "AI Tracking PTZ Camera",
        description: "The EP30 shoots in 4K and follows the presenter by recognising clothing, body shape, hairstyle and face.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "Dual-Lens Student Camera",
        description: "The EW30S pairs a 110° panoramic lens with a 42° close-up lens and tracks students without extra hardware.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "Ceiling Microphone Array",
        description: "Eight microphones in the CM30 cover a pickup radius of 8m or more.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "Wireless Lavalier Microphones",
        description: "Both LM50 microphones can connect at once and be worn on a collar, around the neck or on a headset.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Seven Recording Channels",
        description: "The host captures the main view, courseware, board and teacher and student views together.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Live Streaming",
        description: "Up to three RTMP live streams run at 1080p while the lesson records.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Touch Control\n for Recording & Live Video",
    highlightLast: 5,
    paragraphs: ["The CSP30 host shows the recording on its 15.6″ touch screen as it happens. It recognises connected cameras and microphones without manual matching."],
    checks: [
      "Recordings are saved as MP4 files at 60, 30 or 25fps.",
      "A 1TB drive inside the host stores recorded sessions.",
      "Three HDMI outputs send video to displays in the room.",
      "MAXHUB Caster supports remote observation of teaching.",
      "PoE is available on three of the host network ports.",
    ],
    image: `${IMG}/maxhub-capture-system-v3-in-room.webp`,
    alt: "A teacher presenting to a class with a capture host on the wall and a camera above the display",
  },
  focusData: {
    tag: "How the System Connects",
    heading: "Cameras & Mics,\n One Capture Workflow",
    highlightLast: 3,
    subhead: "Cameras and microphones feed the capture host, which records, displays and streams the combined video.",
    diagram: {
      label: "Diagram showing the PTZ camera, student camera and ceiling microphone connected to the capture host, which outputs to a display, the network and receives the wireless microphone",
      svg: "<svg viewBox=\"0 0 1000 440\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"DM Sans, Arial, sans-serif\"><defs><marker id=\"ah\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#114a9f\"/></marker></defs><path d=\"M260 70 C 322 70, 322 220, 385 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"270\" y=\"133\" width=\"104\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"322\" y=\"150\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Network, PoE</text><path d=\"M260 220 C 322 220, 322 220, 385 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"270\" y=\"208\" width=\"104\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"322\" y=\"224\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Network, PoE</text><path d=\"M260 370 C 322 370, 322 220, 385 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"270\" y=\"283\" width=\"104\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"322\" y=\"300\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Mic in, RJ45</text><path d=\"M615 220 C 678 220, 678 70, 740 70\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"640\" y=\"133\" width=\"76\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"678\" y=\"150\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">HDMI out</text><path d=\"M615 220 C 678 220, 678 220, 740 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"622\" y=\"208\" width=\"112\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"678\" y=\"224\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">RJ45 internet</text><path d=\"M740 370 C 678 370, 678 220, 615 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"2\" marker-end=\"url(#ah)\"/><rect x=\"618\" y=\"283\" width=\"119\" height=\"24\" rx=\"12\" fill=\"#fff\" stroke=\"#c7d9fb\"/><text x=\"678\" y=\"300\" font-size=\"12.5\" fill=\"#114a9f\" text-anchor=\"middle\">Wireless audio</text><rect x=\"30\" y=\"30\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"145\" y=\"67\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">PTZ Camera</text><text x=\"145\" y=\"87\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">EP30</text><rect x=\"30\" y=\"180\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"145\" y=\"217\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Student Camera</text><text x=\"145\" y=\"237\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">EW30S</text><rect x=\"30\" y=\"330\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"145\" y=\"367\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Ceiling Microphone</text><text x=\"145\" y=\"387\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">CM30</text><rect x=\"385\" y=\"170\" width=\"230\" height=\"100\" rx=\"14\" fill=\"#114a9f\" stroke=\"#114a9f\"/><text x=\"500\" y=\"217\" font-size=\"16\" font-weight=\"500\" fill=\"#fff\" text-anchor=\"middle\">Capture Host</text><text x=\"500\" y=\"237\" font-size=\"12.5\" fill=\"#dbe6fb\" text-anchor=\"middle\">CSP30, 15.6″ touch screen</text><rect x=\"740\" y=\"30\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"855\" y=\"67\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Classroom Display</text><text x=\"855\" y=\"87\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">HDMI input</text><rect x=\"740\" y=\"180\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"855\" y=\"217\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Network & Live Stream</text><text x=\"855\" y=\"237\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">RTMP, up to 3 channels</text><rect x=\"740\" y=\"330\" width=\"230\" height=\"80\" rx=\"14\" fill=\"#fff\" stroke=\"#d3d3d3\"/><text x=\"855\" y=\"367\" font-size=\"16\" font-weight=\"500\" fill=\"#111\" text-anchor=\"middle\">Wireless Microphone</text><text x=\"855\" y=\"387\" font-size=\"12.5\" fill=\"#525252\" text-anchor=\"middle\">LM50</text></svg>",
    },
    data: [
      {
        image: `${IMG}/maxhub-capture-system-v3-csp30-capture-host.webp`,
        alt: "MAXHUB CSP30 capture host",
        title: "CSP30 Capture Host",
        description: "The 15.6″ touch host runs Linux on an eight-core processor with 8GB of RAM and a 1TB drive.",
        list: { label: "In its box", items: ["Power adapter, power cable and audio cable", "Five external antennas and an antenna adapter cable", "Wall mount bracket, cable cover and screws"] },
      },
      {
        image: `${IMG}/maxhub-capture-system-v3-ep30-ptz-camera.webp`,
        alt: "MAXHUB EP30 PTZ camera",
        title: "EP30 PTZ Camera",
        description: "This 4K camera has HDMI, USB 3.0 and network outputs, and runs on 12V DC or PoE.",
        list: { label: "In its box", items: ["Wall mount bracket", "Bracket installation parts", "Quick start guide"] },
      },
      {
        image: `${IMG}/maxhub-capture-system-v3-ew30s-student-camera.webp`,
        alt: "MAXHUB EW30S student camera",
        title: "EW30S Student Camera",
        description: "The dual-lens camera turns 45° each way and connects over USB-C or a PoE network port.",
        list: { label: "In its box", items: ["Wall mount bracket", "Bracket installation parts", "Quick start guide"] },
      },
      {
        image: `${IMG}/maxhub-capture-system-v3-cm30-ceiling-microphone.webp`,
        alt: "MAXHUB CM30 ceiling microphone",
        title: "CM30 Ceiling Microphone",
        description: "Several CM30 units can be cascaded over Cat5e cable to cover larger rooms.",
        list: { label: "In its box", items: ["Two suspension rod brackets", "Two sets of bracket installation parts", "Quick start guide"] },
      },
      {
        image: `${IMG}/maxhub-capture-system-v3-lm50-wireless-microphone.webp`,
        alt: "MAXHUB LM50 wireless lavalier microphones in their charging case",
        title: "LM50 Wireless Microphone",
        description: "Two clip-on microphones charge in their case and pair automatically when they are taken out.",
        list: { label: "In its box", items: ["USB-C charging cable", "Three wind covers", "Lanyard, storage bag and headset"] },
      },
    ],
    note: { title: "Platforms & Streaming", text: "Teams, Zoom and Google Meet are supported, and live streams can go to platforms such as YouTube." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Values for Each Component",
    highlightLast: 2,
    subhead: "Component figures for planning camera positions, ceiling mounts and network cabling.",
    panes: [
      {
        label: "CSP30",
        sub: "Capture host",
        note: "These values apply to the CSP30 capture host.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Capture_System_V3-CSP30-Datasheet.pdf` },
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
                { label: "Storage", value: "1TB SATA" },
                { label: "Bluetooth", value: "5.2" },
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
                { label: "USB-A 2.0", value: "1" },
                { label: "USB-A 3.0", value: "2" },
                { label: "USB Type-C", value: "2" },
                { label: "RS422", value: "1" },
                { label: "Mic in", value: "1" },
                { label: "Line in", value: "1" },
                { label: "Line out", value: "2" },
                { label: "Power button", value: "1" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions with stand (L × W × D)", value: "374.6 × 193.7 × 239.5mm" },
                { label: "Dimensions without stand (L × W × D)", value: "374.6 × 239.4 × 41.5mm" },
                { label: "Shipping dimensions (W × H × D)", value: "1 pc: 472 × 409 × 112mm; 4 pcs: 491 × 471 × 449mm" },
                { label: "Net weight", value: "3.0kg" },
                { label: "Gross weight", value: "1 pc: 5.0kg; 4 pcs: 21.7kg" },
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
                { label: "Audio cable", value: "1" },
                { label: "Phoenix connector", value: "2" },
                { label: "Antenna adapter cable", value: "1" },
                { label: "External antenna", value: "5" },
                { label: "Wall mount bracket", value: "1" },
                { label: "Cable cover", value: "1" },
                { label: "Screw package", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "EP30",
        sub: "PTZ camera",
        note: "These values apply to the EP30 PTZ camera.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Capture_System_V3-EP30-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Camera",
              open: true,
              rows: [
                { label: "Sensor", value: "1/2.8″ CMOS, 8.29 million pixels" },
                { label: "Scanning", value: "Progressive" },
                { label: "Auto focus", value: "Supported" },
                { label: "Zoom", value: "12x optical, 40x hybrid" },
                { label: "Minimum illumination", value: "0.5 lux (F1.8, AGC on)" },
                { label: "Electronic shutter", value: "1/30s to 1/10000s" },
                { label: "White balance", value: "Auto, indoor, outdoor, one-touch, manual, set colour temperature" },
                { label: "Noise reduction", value: "2D and 3D" },
                { label: "Signal-to-noise ratio", value: "55dB or more" },
                { label: "Horizontal field of view", value: "72.5° to 6.9°" },
                { label: "Vertical field of view", value: "44.1° to 3.8°" },
                { label: "Pan range", value: "±170°" },
                { label: "Tilt range", value: "−30° to +90°" },
                { label: "Pan speed", value: "1.7° to 100° per second" },
                { label: "Tilt speed", value: "1.7° to 69.9° per second" },
                { label: "Image flip", value: "Horizontal and vertical" },
                { label: "Other features", value: "Backlight compensation, image freeze" },
                { label: "Presets", value: "255" },
                { label: "Preset accuracy", value: "0.1°" },
              ],
            },
            {
              title: "Network Video",
              rows: [
                { label: "Video coding", value: "H.264, H.265, MJPEG" },
                { label: "Video streams", value: "First and second stream" },
                { label: "First stream", value: "Up to 3840 × 2160 at 60fps (default 1920 × 1080 at 30fps)" },
                { label: "Second stream", value: "Up to 1280 × 720 at 30fps (default 1024 × 576 at 30fps)" },
                { label: "Video bitrate", value: "32–20480Kbps" },
                { label: "Bitrate control", value: "Variable or fixed" },
                { label: "Frame rate", value: "2–50fps (50Hz), 2–60fps (60Hz)" },
                { label: "Audio compression", value: "AAC, G711A" },
                { label: "Audio bitrate", value: "64, 96, 128 or 256Kbps" },
                { label: "Protocols", value: "TCP/IP, HTTP, RTSP, RTMP/RTMPS, ONVIF, DHCP, multicast, GB28181" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "HDMI out", value: "1 (HDMI 1.4b)" },
                { label: "RJ45", value: "1 (10/100M)" },
                { label: "Line in", value: "1 (3.5mm)" },
                { label: "Line out", value: "1 (3.5mm)" },
                { label: "USB-A", value: "1 (USB 3.0)" },
                { label: "RS232 in", value: "1" },
                { label: "RS232 out", value: "1" },
                { label: "RS485", value: "1" },
                { label: "Power port", value: "1 (JEITA, 12V DC in)" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Input voltage", value: "12V DC or PoE (802.3af)" },
                { label: "Input current", value: "1.0A max" },
                { label: "Power consumption", value: "12W max" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (W × D × H)", value: "146 × 170 × 168mm" },
                { label: "Shipping dimensions (W × D × H)", value: "1 pc: 295 × 245 × 243mm; 4 pcs: 610 × 510 × 265mm" },
                { label: "Net weight", value: "1.5kg" },
                { label: "Gross weight", value: "1 pc: 3.4kg; 4 pcs: 14.9kg" },
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
                { label: "Wall mount bracket", value: "1" },
                { label: "Bracket installation parts", value: "1" },
                { label: "Quick start guide", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "EW30S",
        sub: "Student camera",
        note: "These values apply to the EW30S student camera.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Capture_System_V3-EW30S-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Close-Up Camera",
              open: true,
              rows: [
                { label: "Sensor", value: "1/2.7″ CMOS, 8.31 million pixels" },
                { label: "Lens focal length", value: "7.2mm (M12 mount)" },
                { label: "Zoom", value: "3x digital" },
                { label: "Horizontal field of view", value: "42°" },
                { label: "Rotation range", value: "Horizontal ±45°, vertical +5° to −30°" },
                { label: "Rotation speed", value: "Horizontal 60° per second, vertical 30° per second" },
                { label: "Presets", value: "255" },
                { label: "Preset accuracy", value: "0.2°" },
              ],
            },
            {
              title: "Panoramic Camera",
              rows: [
                { label: "Sensor", value: "1/2.7″ CMOS, 4.68 million pixels" },
                { label: "Lens focal length", value: "2.2mm (M12 mount)" },
                { label: "Horizontal field of view", value: "110°" },
              ],
            },
            {
              title: "Image (Both Cameras)",
              rows: [
                { label: "Scanning", value: "Progressive" },
                { label: "Minimum illumination", value: "0.5 lux (F2.2, AGC on)" },
                { label: "Electronic shutter", value: "1/30s to 1/10000s" },
                { label: "White balance", value: "Auto, indoor, outdoor, one-touch, manual, set colour temperature" },
                { label: "Noise reduction", value: "2D and 3D" },
                { label: "Signal-to-noise ratio", value: "55dB or more" },
                { label: "Image flip", value: "Horizontal and vertical" },
                { label: "Other features", value: "Backlight compensation, image freeze" },
              ],
            },
            {
              title: "USB",
              rows: [
                { label: "Operating systems", value: "Windows 7 (1080p and below), Windows 8.1, Windows 10 and later; macOS 10.10 or later; Chrome OS; Linux with UVC support" },
                { label: "Colour space", value: "YUY2, MJPEG, H.264" },
                { label: "Video format", value: "Several frame rates and resolutions, up to 4K" },
                { label: "USB audio", value: "Supported, UAC 1.0, up to 48kHz" },
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
                { label: "Video streams", value: "Four streams" },
                { label: "Close-up main stream", value: "Up to 3840 × 2160" },
                { label: "Panoramic main stream", value: "Up to 2880 × 1620" },
                { label: "Video bitrate", value: "32–16384Kbps" },
                { label: "Bitrate control", value: "Variable or fixed" },
                { label: "Frame rate", value: "25 or 30fps (default 25fps)" },
                { label: "Audio compression", value: "AAC, G711A" },
                { label: "Audio bitrate", value: "96, 128 or 256Kbps" },
                { label: "Protocols", value: "TCP/IP, HTTP, RTSP, RTMP/RTMPS, ONVIF, DHCP, multicast, GB28181" },
              ],
            },
            {
              title: "Connectivity",
              rows: [
                { label: "USB-C", value: "1 (USB 3.0)" },
                { label: "RJ45", value: "1 (10/100M, PoE 802.3af)" },
                { label: "Line in", value: "1 (3.5mm)" },
                { label: "Power port", value: "1 (DC005, 12V DC in)" },
                { label: "Reset button", value: "1" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Input voltage", value: "12V DC or PoE (802.3af)" },
                { label: "Input current", value: "1.0A max" },
                { label: "Power consumption", value: "12W max" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (W × D × H)", value: "248 × 85 × 66mm" },
                { label: "Shipping dimensions (L × W × H)", value: "1 pc: 296 × 155 × 110mm; 4 pcs: 462 × 330 × 310mm" },
                { label: "Net weight", value: "0.52kg" },
                { label: "Gross weight", value: "1 pc: 1.16kg; 4 pcs: 10kg" },
                { label: "MTBF", value: "More than 30,000 hours" },
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
                { label: "Wall mount bracket", value: "1" },
                { label: "Bracket installation parts", value: "1" },
                { label: "Quick start guide", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "CM30",
        sub: "Ceiling microphone",
        note: "These values apply to the CM30 ceiling microphone.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Capture_System_V3-CM30-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Microphone",
              open: true,
              rows: [
                { label: "Microphones", value: "8-element array" },
                { label: "Pickup radius", value: "8m or more" },
                { label: "Type", value: "Omnidirectional" },
                { label: "Frequency range", value: "20Hz–20kHz" },
                { label: "Signal-to-noise ratio", value: "68dB or more" },
                { label: "Sound pressure level", value: "130dB SPL or more (10% THD at 1kHz)" },
              ],
            },
            {
              title: "Audio Processing",
              rows: [
                { label: "Algorithms", value: "Automatic gain control, automatic mixing, automatic noise reduction, anti-reverberation, automatic echo cancellation, howling cancellation" },
                { label: "Cascading", value: "Multiple microphones can be cascaded" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "DMIC", value: "2" },
                { label: "USB Type-C", value: "1 (upgrade and debugging)" },
                { label: "Reset", value: "1" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Power supply", value: "48V DC, 100mA" },
                { label: "Power consumption", value: "4W" },
              ],
            },
            {
              title: "Physical",
              rows: [
                { label: "Dimensions (diameter × thickness)", value: "138.5 × 27.3mm" },
                { label: "Shipping dimensions (L × W × H)", value: "852 × 276 × 68mm" },
                { label: "Net weight", value: "0.45kg" },
                { label: "Gross weight", value: "1.4kg" },
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
                { label: "Suspension rod bracket", value: "2" },
                { label: "Bracket installation parts", value: "2" },
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
    heading: "Common Questions on Capture System V3 (4K)",
    highlightLast: 4,
    faqData: [
      {
        question: "Which devices make up the Capture System V3?",
        answer: "It includes the CSP30 capture host, the EP30 PTZ camera, the EW30S student camera, the CM30 ceiling microphone and the LM50 wireless lavalier microphone.",
      },
      {
        question: "What resolution does it record at?",
        answer: "The host records at up to 4K at 30fps, as well as 1080p, 720p, VGA and QVGA, and saves files as MP4.",
      },
      {
        question: "How many views can be recorded at once?",
        answer: "Up to seven: the main view, courseware, board view, teacher panoramic and close-up views, and student panoramic and close-up views.",
      },
      {
        question: "Can lessons be streamed live?",
        answer: "Yes. The host supports up to three RTMP live streams at 1080p, and platforms such as YouTube can receive them.",
      },
      {
        question: "How does the PTZ camera follow the teacher?",
        answer: "The EP30 uses AI re-identification to track a person by their clothing, body shape, hairstyle and facial features.",
      },
      {
        question: "How are the cameras powered?",
        answer: "Both cameras run on 12V DC or PoE (802.3af), and the capture host has three PoE network ports.",
      },
      {
        question: "Can the ceiling microphone cover a large room?",
        answer: "One CM30 covers a pickup radius of 8m or more, and several units can be cascaded over Cat5e cable.",
      },
      {
        question: "How long does the wireless microphone last?",
        answer: "The LM50 runs for more than 6 hours per charge and fully recharges in 1 hour.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "Displays & Devices\n to Complete the Room",
    highlightLast: 4,
    subhead: "Explore other MAXHUB products for teaching and presentation spaces.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "Portable Capture System", image: `${IMG}/maxhub-portable-capture-system-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/portable-capture-system" },
      { title: "XBoard V7 Series", image: `${IMG}/maxhub-xboard-v7-series-thumb.webp`, href: "/store/interactive-displays/maxhub/xboard-v7-series" },
      { title: "Smart Lectern", image: `${IMG}/maxhub-smart-lectern-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/smart-lectern-sl22mc" },
      { title: "Raptor Series V3", image: `${IMG}/maxhub-raptor-series-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Your Capture Setup",
    highlightLast: 2,
    text: "Tell us the room size and how you plan to record or stream, and our AV team will plan the camera and microphone layout.",
  }),
  footNote: "",
};
