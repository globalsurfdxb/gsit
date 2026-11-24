import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { DCS_IMG as IMG, MX_DATASHEETS as DS, dcsCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Displays, Capture & Sharing/MAXHUB Raptor Series V3 Lite _ GS IT/index.html
export const raptorSeriesV3Lite: LogitechProductData = {
  slug: "raptor-series-v3-lite",
  seo: {
    title: "MAXHUB Raptor Series V3 Lite | GS IT",
    description: "MAXHUB Raptor Series V3 Lite from GS IT. An all-in-one LED display in 135″ and 162″ sizes, with COB or SMD models, 3840Hz refresh and a 31mm slim design.",
  },
  name: "MAXHUB Raptor Series V3 Lite",
  image: `${IMG}/maxhub-raptor-series-v3-lite-front-view.webp`,
  heroData: {
    crumbs: dcsCrumbs("Raptor Series V3 Lite"),
    gallery: [
      { src: `${IMG}/maxhub-raptor-series-v3-lite-front-view.webp`, alt: "Front view of a MAXHUB Raptor Series V3 Lite LED display" },
      { src: `${IMG}/maxhub-raptor-series-v3-lite-cob-model.webp`, alt: "Raptor Series V3 Lite COB model in 135″ and 162″ sizes" },
      { src: `${IMG}/maxhub-raptor-series-v3-lite-smd-model.webp`, alt: "Raptor Series V3 Lite SMD model in 135″ and 162″ sizes" },
    ],
    tag: "All-in-One LED Display",
    heading: "MAXHUB\n Raptor Series V3 Lite",
    highlightLast: 4,
    description: "An all-in-one LED display for conference rooms, training rooms and reception areas that needs no separate controller or power cabinet.",
    keys: [
      { label: "Model", value: "LP135V07C" },
      { label: "Screen", value: "135″, 1920 × 1080" },
      { label: "LED type", value: "Flip chip COB" },
      { label: "Brightness", value: "100–600 nits" },
      { label: "Refresh rate", value: "3840Hz" },
      { label: "Thickness", value: "31mm" },
    ],
    models: {
      label: "Models",
      aria: "Choose a model",
      options: [
        { value: "LP135V07C", text: "135″ COB", aria: "LP135V07C, 135 inch COB" },
        { value: "LP135F07", text: "135″ SMD", aria: "LP135F07, 135 inch SMD" },
        { value: "LP162V12C", text: "162″ COB", aria: "LP162V12C, 162 inch COB" },
        { value: "LP162F07", text: "162″ SMD", aria: "LP162F07, 162 inch SMD" },
      ],
      keys: {
        "LP135V07C": { "Model": "LP135V07C", "Screen": "135″, 1920 × 1080", "LED type": "Flip chip COB", "Brightness": "100–600 nits" },
        "LP135F07": { "Model": "LP135F07", "Screen": "135″, 1920 × 1080", "LED type": "SMD", "Brightness": "100–550 nits" },
        "LP162V12C": { "Model": "LP162V12C", "Screen": "162″, 2304 × 1296", "LED type": "Flip chip COB", "Brightness": "100–600 nits" },
        "LP162F07": { "Model": "LP162F07", "Screen": "162″, 1920 × 1080", "LED type": "SMD", "Brightness": "100–550 nits" },
      },
    },
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Slim, Bright & Easy to Run",
    highlightLast: 4,
    subhead: "Rooms get a large, bright picture from a single slim unit that is simple to install and maintain.",
    data: [
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "COB or SMD LEDs",
        description: "On COB models, flip chip LEDs and an optical film add protection and reduce moiré.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 4v4.5M20 12h-4.5\"/>",
        title: "3840Hz Refresh",
        description: "The 3840Hz refresh rate and 13-bit grey scale give steady, detailed images.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "31mm All-in-One Design",
        description: "Each cabinet weighs 3.3kg, and the whole display is 31mm thick.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Scene Modes",
        description: "Preset scene modes adapt the display to different uses.",
      },
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M12 13V7M9 10l3-3 3 3M8 20h8\"/>",
        title: "Wireless Sharing",
        description: "Built-in screen sharing works over Wi-Fi 6, with Bluetooth 5.3 also supported.",
      },
      {
        icon: "<rect x=\"4\" y=\"8\" width=\"16\" height=\"9\" rx=\"1.5\"/><path d=\"M8 8V5h8v3M8 12h.01M12 12h.01M16 12h.01\"/>",
        title: "Central Control",
        description: "An RS232 port allows the display to be managed by a central control system.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Fewer Parts\n to Install & Maintain",
    highlightLast: 4,
    paragraphs: ["The display has an octa-core processor with 4GB of RAM and 64GB of storage running Android 13. It can be wall-mounted, ceiling-mounted or placed on an optional stand."],
    checks: [
      "Two HDMI inputs (HDMI 2.0 and HDMI 1.4) accept external sources.",
      "Brightness and colour temperature can both be adjusted.",
      "Settings can be changed over Wi-Fi, a network cable or USB.",
      "Standby power stays at 0.5W or less.",
      "Built-in speakers emit sound through the gaps in the frame.",
    ],
    image: `${IMG}/maxhub-raptor-series-v3-lite-in-room.webp`,
    alt: "A presenter speaking beside a large LED display in a lecture room",
  },
  focusData: {
    tag: "Installation",
    heading: "Mounting Choices\n & Front-Access Service",
    highlightLast: 3,
    subhead: "The display can be mounted in several ways and serviced from the front.",
    columns: 4,
    data: [
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Wall Mounting",
        description: "Wall mounting uses the supplied mounting bar.",
      },
      {
        icon: "<rect x=\"2\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><rect x=\"13\" y=\"5\" width=\"9\" height=\"7\" rx=\"1\"/><path d=\"M6.5 12v3M17.5 12v3M4 18h5M15 18h5\"/>",
        title: "Ceiling Mounting",
        description: "Ceiling installation is also supported.",
      },
      {
        icon: "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 21h10\"/><path d=\"M8 9h4M8 12h6\"/>",
        title: "Optional Stand",
        description: "An optional floor stand is available.",
      },
      {
        icon: "<path d=\"M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0\"/><circle cx=\"16\" cy=\"6\" r=\"2\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
        title: "Front Service",
        description: "Modules are removed from the front and can be hot-swapped.",
      },
    ],
    note: { title: "In the Box", text: "A remote control, a front maintenance tool, a tool kit and a wall-mounting bar are included." },
  },
  compareData: {
    tag: "Compare Models",
    heading: "COB & SMD at a Glance",
    highlightLast: 3,
    subhead: "This table highlights where the four models differ.",
    columns: [
      { model: "LP135V07C", label: "LP135V07C", sub: "135″ COB" },
      { model: "LP135F07", label: "LP135F07", sub: "135″ SMD" },
      { model: "LP162V12C", label: "LP162V12C", sub: "162″ COB" },
      { model: "LP162F07", label: "LP162F07", sub: "162″ SMD" },
    ],
    rows: [
      { label: "LED technology", values: ["Flip chip COB", "SMD", "Flip chip COB", "SMD"] },
      { label: "Screen size", values: ["135″", "135″", "162″", "162″"] },
      { label: "Resolution", values: ["1920 × 1080", "1920 × 1080", "2304 × 1296", "1920 × 1080"] },
      { label: "Brightness", values: ["100–600 nits (adjustable)", "100–550 nits (adjustable)", "100–600 nits (adjustable)", "100–550 nits (adjustable)"] },
      { label: "Grey scale", values: ["13 + 6 bit", "13 + 4 bit", "13 + 6 bit", "13 + 4 bit"] },
      { label: "Contrast", values: ["15000:1", "6500:1", "15000:1", "6500:1"] },
      { label: "Viewing angle (H / V)", values: ["170° / 170°", "160° / 160°", "170° / 170°", "160° / 160°"] },
      { label: "Overall size (L × H)", values: ["3012 × 1699.5mm", "3012 × 1699.5mm", "3612 × 2037mm", "3612 × 2037mm"] },
      { label: "Display area (L × H)", values: ["3000 × 1687.5mm", "3000 × 1687.5mm", "3600 × 2025mm", "3600 × 2025mm"] },
      { label: "Net weight", values: ["95kg", "95kg", "126.8kg", "126.8kg"] },
      { label: "Power, average / maximum", values: ["0.351kW / 1.054kW", "0.511kW / 1.533kW", "0.506kW / 1.518kW", "0.747kW / 2.24kW"] },
      { label: "Packing dimensions", values: ["2040 × 1060 × 1105mm", "2040 × 1060 × 1105mm", "2310 × 1060 × 1265mm", "2310 × 1060 × 1265mm"] },
    ],
  },
  specsData: {
    tag: "Specifications",
    heading: "Model Values\n for Planning the Wall",
    highlightLast: 4,
    subhead: "Key figures for planning wall space, power supply and viewing distance.",
    panes: [
      {
        label: "LP135V07C",
        model: "LP135V07C",
        sub: "135″ COB",
        note: "These values apply to the LP135V07C.",
        datasheet: { text: "Download Datasheet", href: `${DS}/LP135V07C_Product_Spec-V1.2-20260512.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "LED technology", value: "Flip chip COB" },
                { label: "Size", value: "135″" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Resolution", value: "1920 × 1080" },
                { label: "Overall size (L × H)", value: "3012 × 1699.5mm" },
                { label: "Display area (L × H)", value: "3000 × 1687.5mm" },
                { label: "Screen thickness", value: "31mm" },
                { label: "Net weight", value: "95kg (wall-mounting bar and stand not included)" },
                { label: "Recommended viewing distance", value: "3.2m or more" },
              ],
            },
            {
              title: "Optical",
              rows: [
                { label: "Brightness", value: "100–600 nits (adjustable)" },
                { label: "Refresh rate", value: "3840Hz" },
                { label: "Grey scale", value: "13 + 6 bit" },
                { label: "Contrast", value: "15000:1" },
                { label: "Colour temperature", value: "2300–9300K (adjustable)" },
                { label: "Viewing angle (H / V)", value: "170° / 170°" },
                { label: "LED lifespan", value: "100,000 hours or more" },
              ],
            },
            {
              title: "System",
              rows: [
                { label: "Operating system", value: "Android 13.0" },
                { label: "CPU", value: "4 × Cortex-A76 + 4 × Cortex-A55, 2.4GHz" },
                { label: "RAM", value: "4GB" },
                { label: "Storage", value: "64GB" },
                { label: "Video formats", value: "MPEG-1, MPEG-2, MPEG-4, H.263, H.264, H.265, VC-1, VP9, VP8, MVC, AV1" },
                { label: "Audio formats", value: "MP3 and others" },
                { label: "Image formats", value: "JPG, JPEG, BMP, PNG, GIF and others" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "HDMI in", value: "2 (HDMI 2.0 × 1, HDMI 1.4 × 1)" },
                { label: "USB 3.0", value: "1" },
                { label: "Audio out (3.5mm)", value: "1" },
                { label: "RS232", value: "1" },
                { label: "LAN", value: "1" },
                { label: "Wi-Fi", value: "Wi-Fi 6, dual-band 2.4GHz / 5GHz, AP and STA modes" },
                { label: "Bluetooth", value: "5.3" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Operating voltage", value: "100–240V AC, 50/60Hz" },
                { label: "Standby power", value: "0.5W or less" },
                { label: "Average power consumption", value: "0.351kW" },
                { label: "Maximum power consumption", value: "1.054kW" },
              ],
            },
            {
              title: "Installation & Service",
              rows: [
                { label: "Maintenance", value: "Front access, hot-swappable" },
                { label: "Installation", value: "Wall mounting, ceiling mounting or stand (optional)" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "−10 to 40 °C" },
                { label: "Operating humidity", value: "10% to 80% RH, no condensation" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Remote control", value: "1" },
                { label: "Front maintenance tool", value: "1" },
                { label: "Tool kit", value: "1" },
                { label: "Wall-mounting bar", value: "1" },
                { label: "Packing dimensions (cabinet and modules)", value: "2040 × 1060 × 1105mm" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Stand", value: "1 set (optional)" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "RoHS", value: "Meets China and EU RoHS requirements" },
              ],
            },
          ],
        ],
      },
      {
        label: "LP135F07",
        model: "LP135F07",
        sub: "135″ SMD",
        note: "These values apply to the LP135F07.",
        datasheet: { text: "Download Datasheet", href: `${DS}/LP135F07_Product_Spec-V1.2-20260512.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "LED technology", value: "SMD" },
                { label: "Size", value: "135″" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Resolution", value: "1920 × 1080" },
                { label: "Overall size (L × H)", value: "3012 × 1699.5mm" },
                { label: "Display area (L × H)", value: "3000 × 1687.5mm" },
                { label: "Screen thickness", value: "31mm" },
                { label: "Net weight", value: "95kg (wall-mounting bar and stand not included)" },
                { label: "Recommended viewing distance", value: "3.2m or more" },
              ],
            },
            {
              title: "Optical",
              rows: [
                { label: "Brightness", value: "100–550 nits (adjustable)" },
                { label: "Refresh rate", value: "3840Hz" },
                { label: "Grey scale", value: "13 + 4 bit" },
                { label: "Contrast", value: "6500:1" },
                { label: "Colour temperature", value: "2300–9300K (adjustable)" },
                { label: "Viewing angle (H / V)", value: "160° / 160°" },
                { label: "LED lifespan", value: "100,000 hours or more" },
              ],
            },
            {
              title: "System",
              rows: [
                { label: "Operating system", value: "Android 13.0" },
                { label: "CPU", value: "4 × Cortex-A76 + 4 × Cortex-A55, 2.4GHz" },
                { label: "RAM", value: "4GB" },
                { label: "Storage", value: "64GB" },
                { label: "Video formats", value: "MPEG-1, MPEG-2, MPEG-4, H.263, H.264, H.265, VC-1, VP9, VP8, MVC, AV1" },
                { label: "Audio formats", value: "MP3 and others" },
                { label: "Image formats", value: "JPG, JPEG, BMP, PNG, GIF and others" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "HDMI in", value: "2 (HDMI 2.0 × 1, HDMI 1.4 × 1)" },
                { label: "USB 3.0", value: "1" },
                { label: "Audio out (3.5mm)", value: "1" },
                { label: "RS232", value: "1" },
                { label: "LAN", value: "1" },
                { label: "Wi-Fi", value: "Wi-Fi 6, dual-band 2.4GHz / 5GHz, AP and STA modes" },
                { label: "Bluetooth", value: "5.3" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Operating voltage", value: "100–240V AC, 50/60Hz" },
                { label: "Standby power", value: "0.5W or less" },
                { label: "Average power consumption", value: "0.511kW" },
                { label: "Maximum power consumption", value: "1.533kW" },
              ],
            },
            {
              title: "Installation & Service",
              rows: [
                { label: "Maintenance", value: "Front access, hot-swappable" },
                { label: "Installation", value: "Wall mounting, ceiling mounting or stand (optional)" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "−10 to 40 °C" },
                { label: "Operating humidity", value: "10% to 80% RH, no condensation" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Remote control", value: "1" },
                { label: "Front maintenance tool", value: "1" },
                { label: "Tool kit", value: "1" },
                { label: "Wall-mounting bar", value: "1" },
                { label: "Packing dimensions (cabinet and modules)", value: "2040 × 1060 × 1105mm" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Stand", value: "1 set (optional)" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "RoHS", value: "Meets China and EU RoHS requirements" },
              ],
            },
          ],
        ],
      },
      {
        label: "LP162V12C",
        model: "LP162V12C",
        sub: "162″ COB",
        note: "These values apply to the LP162V12C.",
        datasheet: { text: "Download Datasheet", href: `${DS}/LP162V12C_Product_Spec-V1.0-20260520.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "LED technology", value: "Flip chip COB" },
                { label: "Size", value: "162″" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Resolution", value: "2304 × 1296" },
                { label: "Overall size (L × H)", value: "3612 × 2037mm" },
                { label: "Display area (L × H)", value: "3600 × 2025mm" },
                { label: "Screen thickness", value: "31mm" },
                { label: "Net weight", value: "126.8kg (wall-mounting bar and stand not included)" },
                { label: "Recommended viewing distance", value: "3.2m or more" },
              ],
            },
            {
              title: "Optical",
              rows: [
                { label: "Brightness", value: "100–600 nits (adjustable)" },
                { label: "Refresh rate", value: "3840Hz" },
                { label: "Grey scale", value: "13 + 6 bit" },
                { label: "Contrast", value: "15000:1" },
                { label: "Colour temperature", value: "2300–9300K (adjustable)" },
                { label: "Viewing angle (H / V)", value: "170° / 170°" },
                { label: "LED lifespan", value: "100,000 hours or more" },
              ],
            },
            {
              title: "System",
              rows: [
                { label: "Operating system", value: "Android 13.0" },
                { label: "CPU", value: "4 × Cortex-A76 + 4 × Cortex-A55, 2.4GHz" },
                { label: "RAM", value: "4GB" },
                { label: "Storage", value: "64GB" },
                { label: "Video formats", value: "MPEG-1, MPEG-2, MPEG-4, H.263, H.264, H.265, VC-1, VP9, VP8, MVC, AV1" },
                { label: "Audio formats", value: "MP3 and others" },
                { label: "Image formats", value: "JPG, JPEG, BMP, PNG, GIF and others" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "HDMI in", value: "2 (HDMI 2.0 × 1, HDMI 1.4 × 1)" },
                { label: "USB 3.0", value: "1" },
                { label: "Audio out (3.5mm)", value: "1" },
                { label: "RS232", value: "1" },
                { label: "LAN", value: "1" },
                { label: "Wi-Fi", value: "Wi-Fi 6, dual-band 2.4GHz / 5GHz, AP and STA modes" },
                { label: "Bluetooth", value: "5.3" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Operating voltage", value: "100–240V AC, 50/60Hz" },
                { label: "Standby power", value: "0.5W or less" },
                { label: "Average power consumption", value: "0.506kW" },
                { label: "Maximum power consumption", value: "1.518kW" },
              ],
            },
            {
              title: "Installation & Service",
              rows: [
                { label: "Maintenance", value: "Front access, hot-swappable" },
                { label: "Installation", value: "Wall mounting, ceiling mounting or stand (optional)" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "−10 to 40 °C" },
                { label: "Operating humidity", value: "10% to 80% RH, no condensation" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Remote control", value: "1" },
                { label: "Front maintenance tool", value: "1" },
                { label: "Tool kit", value: "1" },
                { label: "Wall-mounting bar", value: "1" },
                { label: "Packing dimensions (cabinet and modules)", value: "2310 × 1060 × 1265mm" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Stand", value: "1 set (optional)" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "RoHS", value: "Meets China and EU RoHS requirements" },
              ],
            },
          ],
        ],
      },
      {
        label: "LP162F07",
        model: "LP162F07",
        sub: "162″ SMD",
        note: "These values apply to the LP162F07.",
        datasheet: { text: "Download Datasheet", href: `${DS}/LP162F07_Product_Spec-V1.2-20260512.pdf` },
        columns: [
          [
            {
              title: "Display",
              open: true,
              rows: [
                { label: "LED technology", value: "SMD" },
                { label: "Size", value: "162″" },
                { label: "Aspect ratio", value: "16:9" },
                { label: "Resolution", value: "1920 × 1080" },
                { label: "Overall size (L × H)", value: "3612 × 2037mm" },
                { label: "Display area (L × H)", value: "3600 × 2025mm" },
                { label: "Screen thickness", value: "31mm" },
                { label: "Net weight", value: "126.8kg (wall-mounting bar and stand not included)" },
                { label: "Recommended viewing distance", value: "3.2m or more" },
              ],
            },
            {
              title: "Optical",
              rows: [
                { label: "Brightness", value: "100–550 nits (adjustable)" },
                { label: "Refresh rate", value: "3840Hz" },
                { label: "Grey scale", value: "13 + 4 bit" },
                { label: "Contrast", value: "6500:1" },
                { label: "Colour temperature", value: "2300–9300K (adjustable)" },
                { label: "Viewing angle (H / V)", value: "160° / 160°" },
                { label: "LED lifespan", value: "100,000 hours or more" },
              ],
            },
            {
              title: "System",
              rows: [
                { label: "Operating system", value: "Android 13.0" },
                { label: "CPU", value: "4 × Cortex-A76 + 4 × Cortex-A55, 2.4GHz" },
                { label: "RAM", value: "4GB" },
                { label: "Storage", value: "64GB" },
                { label: "Video formats", value: "MPEG-1, MPEG-2, MPEG-4, H.263, H.264, H.265, VC-1, VP9, VP8, MVC, AV1" },
                { label: "Audio formats", value: "MP3 and others" },
                { label: "Image formats", value: "JPG, JPEG, BMP, PNG, GIF and others" },
              ],
            },
          ],
          [
            {
              title: "Connectivity",
              open: true,
              rows: [
                { label: "HDMI in", value: "2 (HDMI 2.0 × 1, HDMI 1.4 × 1)" },
                { label: "USB 3.0", value: "1" },
                { label: "Audio out (3.5mm)", value: "1" },
                { label: "RS232", value: "1" },
                { label: "LAN", value: "1" },
                { label: "Wi-Fi", value: "Wi-Fi 6, dual-band 2.4GHz / 5GHz, AP and STA modes" },
                { label: "Bluetooth", value: "5.3" },
              ],
            },
            {
              title: "Electrical",
              rows: [
                { label: "Operating voltage", value: "100–240V AC, 50/60Hz" },
                { label: "Standby power", value: "0.5W or less" },
                { label: "Average power consumption", value: "0.747kW" },
                { label: "Maximum power consumption", value: "2.24kW" },
              ],
            },
            {
              title: "Installation & Service",
              rows: [
                { label: "Maintenance", value: "Front access, hot-swappable" },
                { label: "Installation", value: "Wall mounting, ceiling mounting or stand (optional)" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "−10 to 40 °C" },
                { label: "Operating humidity", value: "10% to 80% RH, no condensation" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Remote control", value: "1" },
                { label: "Front maintenance tool", value: "1" },
                { label: "Tool kit", value: "1" },
                { label: "Wall-mounting bar", value: "1" },
                { label: "Packing dimensions (cabinet and modules)", value: "2310 × 1060 × 1265mm" },
              ],
            },
            {
              title: "Optional Accessories",
              rows: [
                { label: "Stand", value: "1 set (optional)" },
              ],
            },
            {
              title: "Compliance & Warranty",
              rows: [
                { label: "RoHS", value: "Meets China and EU RoHS requirements" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on Raptor Series V3 Lite",
    highlightLast: 4,
    faqData: [
      {
        question: "What is the difference between the COB and SMD models?",
        answer: "The COB models (LP135V07C and LP162V12C) use flip chip COB LEDs with an optical film, 15000:1 contrast and 170° viewing angles. The SMD models (LP135F07 and LP162F07) have 6500:1 contrast and 160° viewing angles.",
      },
      {
        question: "Which sizes and resolutions are available?",
        answer: "The 135″ models run at 1920 × 1080. At 162″, the LP162F07 runs at 1920 × 1080 and the LP162V12C at 2304 × 1296.",
      },
      {
        question: "Does it need a separate controller?",
        answer: "No. The processor, control and power distribution are built into the display, so no external controller or power cabinet is needed.",
      },
      {
        question: "How can it be installed?",
        answer: "It can be wall-mounted with the supplied bar, ceiling-mounted or placed on an optional stand.",
      },
      {
        question: "How is the display serviced?",
        answer: "Modules are accessed from the front and can be hot-swapped with the supplied maintenance tool.",
      },
      {
        question: "What viewing distance is recommended?",
        answer: "A viewing distance of 3.2m or more is recommended.",
      },
      {
        question: "Can it be used in direct sunlight?",
        answer: "It is an indoor product and should be kept out of direct sunlight.",
      },
      {
        question: "How is content shared to the screen?",
        answer: "Built-in wireless screen sharing works over Wi-Fi 6, and two HDMI inputs connect wired sources.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "More MAXHUB Room Products",
    highlightLast: 2,
    subhead: "Explore other MAXHUB products for presentation and meeting spaces.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "Raptor Series V3", image: `${IMG}/maxhub-raptor-series-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/raptor-series-v3" },
      { title: "Smart Lectern", image: `${IMG}/maxhub-smart-lectern-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/smart-lectern-sl22mc" },
      { title: "UC BM35", image: `${IMG}/maxhub-uc-bm35-thumb.webp`, href: "/store/audio-room-control/maxhub/uc-bm35" },
      { title: "WT15 Dongle", image: `${IMG}/maxhub-wt15-dongle-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/wt15-dongle-wt15m-wt15s" },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Your LED Installation",
    highlightLast: 2,
    text: "Share the wall size and room layout, and our AV team will advise on the model and mounting.",
    select: {
      name: "Model",
      label: "Model of interest",
      options: [
        { value: "LP135V07C", label: "LP135V07C (135″ COB)" },
        { value: "LP135F07", label: "LP135F07 (135″ SMD)" },
        { value: "LP162V12C", label: "LP162V12C (162″ COB)" },
        { value: "LP162F07", label: "LP162F07 (162″ SMD)" },
      ],
    },
  }),
  footNote: "",
};
