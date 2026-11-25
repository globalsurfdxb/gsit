import type { LogitechProductData } from "@/app/components/CiscoProduct/Index";
import { MX_IMG as IMG, MX_STORE, MX_DATASHEETS as DS, mxCrumbs, mxHeroButtons, mxEnquiry } from "./shared";

// Generated from Audio & Room Control/maxhub-voice-lift-system/index.html
export const voiceLiftSystem: LogitechProductData = {
  slug: "voice-lift-system",
  seo: {
    title: "MAXHUB Voice Lift System | GS IT",
    description: "MAXHUB Voice Lift System from GS IT in Dubai. The AC33 kit, AC33M array microphone and AC33S ceiling speaker give hands-free sound reinforcement for classrooms, lecture halls and training rooms.",
  },
  name: "MAXHUB Voice Lift System",
  image: `${IMG}/maxhub-voice-lift-system-ac33-audio-host.webp`,
  heroData: {
    crumbs: mxCrumbs("Voice Lift System"),
    gallery: [
      { src: `${IMG}/maxhub-voice-lift-system-ac33-audio-host.webp`, alt: "The dark grey MAXHUB AC33 audio host from the Voice Lift System" },
      { src: `${IMG}/maxhub-voice-lift-system-ac33m-array-microphone.webp`, alt: "The white MAXHUB AC33M array microphone bar" },
      { src: `${IMG}/maxhub-voice-lift-system-ac33s-ceiling-speaker.webp`, alt: "The MAXHUB AC33S ceiling speaker with a white round grille" },
    ],
    tag: "Sound Reinforcement",
    heading: "MAXHUB\n Voice Lift System",
    highlightLast: 3,
    description: "A hands-free sound reinforcement system that carries a presenter’s voice clearly through large rooms, so nobody has to wear or hold a microphone.",
    keys: [
      { label: "Pickup", value: "4m dynamic radius" },
      { label: "Microphone", value: "8 capsules, 180° boundary" },
      { label: "Processing", value: "5A algorithms, 48kHz" },
      { label: "Speaker", value: "50W, woofer + tweeter" },
      { label: "Audio network", value: "Dante output & input" },
      { label: "Expansion", value: "2 microphones per chain" },
    ],
    buttons: mxHeroButtons,
  },
  featuresData: {
    tag: "Features",
    heading: "Speak Freely,\n Be Heard From the Back Row",
    highlightLast: 6,
    subhead: "The Voice Lift System lets a presenter move around and speak naturally while listeners across the room hear them clearly.",
    data: [
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "4m Dynamic Pickup",
        description: "The array microphone follows a moving speaker within a 4m radius, depending on room acoustics.",
        highlight: true,
      },
      {
        icon: "<circle cx=\"12\" cy=\"12\" r=\"8\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
        title: "180° Virtual Boundary",
        description: "A virtual sound boundary blocks noise from the audience area to keep pickup on the presenter.",
      },
      {
        icon: "<path d=\"M3 12h2l2-5 3 10 3-12 3 9 2-4h3\"/>",
        title: "5A Audio Algorithms",
        description: "Echo cancellation, feedback cancellation, gain control, noise suppression and reverberation reduction run together.",
      },
      {
        icon: "<path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11\"/>",
        title: "50W Ceiling Speaker",
        description: "Each AC33S uses a 6.5-inch woofer and a 20mm tweeter for clear speech with a full mid-range.",
      },
      {
        icon: "<path d=\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\"/><path d=\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\"/>",
        title: "Dante Network Audio",
        description: "Dante output on the audio host and Dante input on the speaker carry audio over the network.",
      },
      {
        icon: "<path d=\"M5 20V10M5 6V4M12 20v-4M12 12V4M19 20v-8M19 8V4\"/><circle cx=\"5\" cy=\"8\" r=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/><circle cx=\"19\" cy=\"10\" r=\"2\"/>",
        title: "Works With Existing Audio",
        description: "Two MIC inputs with 48V phantom power suit handheld or gooseneck mics, and Phoenix ports link other equipment.",
      },
    ],
  },
  overviewData: {
    tag: "Overview",
    heading: "Low Upkeep for\n Classrooms & Lecture Halls",
    highlightLast: 4,
    paragraphs: ["The microphones need no batteries or charging, and the system stays fixed in place, so there is little to prepare before each session. Existing audio equipment can stay in use through the analog and Dante connections on the audio host."],
    checks: [
      "The array microphone can hang from the ceiling on a telescopic rod or sit on a desktop stand.",
      "Two array microphones can be daisy-chained to cover a larger space.",
      "A control panel gives one-key power and volume control and works with IoT central control systems.",
      "Noise suppression filters out more than 300 types of noise.",
      "Ceiling speakers fit a 200mm cutout using the included mounting template.",
    ],
    image: `${IMG}/maxhub-voice-lift-system-in-room.webp`,
    alt: "A presenter speaks at the front of a classroom fitted with a MAXHUB Voice Lift System, with a ceiling speaker above the students",
  },
  focusData: {
    tag: "Signal Flow",
    heading: "How the System Connects",
    highlightLast: 1,
    subhead: "Microphones feed the audio host, which processes the voice and sends it to the ceiling speakers over Dante.",
    columns: 4,
    diagram: {
      label: "Diagram: AC33M array microphones connect to the AC33 audio host through the RJ45 DMIC input. Wired microphones use the MIC inputs and existing audio uses the Phoenix ports. The host sends audio to AC33S ceiling speakers through its RJ45 Dante output, and the control panel connects with a Phoenix connector.",
      svg: "<svg viewBox=\"0 0 1000 384\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><defs><marker id=\"ar\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#114a9f\"/></marker></defs><rect x=\"20\" y=\"20\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"145.0\" y=\"48.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">AC33M Array Microphone</text><text x=\"145.0\" y=\"68.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">8 capsules, 4m pickup</text><rect x=\"20\" y=\"112\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\" stroke-dasharray=\"6 5\"/><text x=\"145.0\" y=\"140.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">Second AC33M</text><text x=\"145.0\" y=\"160.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">Optional, daisy-chained</text><rect x=\"20\" y=\"204\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"145.0\" y=\"232.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">Handheld or Gooseneck Mics</text><text x=\"145.0\" y=\"252.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">Your existing microphones</text><rect x=\"20\" y=\"296\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"145.0\" y=\"324.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">Existing Audio Equipment</text><text x=\"145.0\" y=\"344.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">Analog audio devices</text><rect x=\"400\" y=\"150\" width=\"220\" height=\"96\" rx=\"12\" fill=\"#114a9f\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"510.0\" y=\"194.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#fff\">AC33 Audio Host</text><text x=\"510.0\" y=\"214.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#fff\" fill-opacity=\"0.82\">48kHz processing, 5A algorithms</text><rect x=\"730\" y=\"80\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"855.0\" y=\"108.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">AC33S Ceiling Speakers</text><text x=\"855.0\" y=\"128.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">50W, Dante input</text><rect x=\"730\" y=\"236\" width=\"250\" height=\"64\" rx=\"12\" fill=\"#fff\" stroke=\"#114a9f\" stroke-width=\"1.5\"/><text x=\"855.0\" y=\"264.0\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"500\" fill=\"#111\">Control Panel</text><text x=\"855.0\" y=\"284.0\" text-anchor=\"middle\" font-size=\"13\" fill=\"#525252\">Power and volume keys</text><path d=\"M145 112 V 84\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-end=\"url(#ar)\"/><text x=\"155\" y=\"102\" font-size=\"12.5\" fill=\"#525252\">DMIC chain</text><path d=\"M270 52 C 335.0 52, 335.0 175, 400 175\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-end=\"url(#ar)\"/><text x=\"282\" y=\"40\" text-anchor=\"start\" font-size=\"12.5\" fill=\"#525252\" paint-order=\"stroke\" stroke=\"#f2f4fc\" stroke-width=\"5\" stroke-linejoin=\"round\">RJ45 DMIC input</text><path d=\"M270 236 C 335.0 236, 335.0 198, 400 198\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-end=\"url(#ar)\"/><text x=\"280\" y=\"256\" text-anchor=\"start\" font-size=\"12.5\" fill=\"#525252\" paint-order=\"stroke\" stroke=\"#f2f4fc\" stroke-width=\"5\" stroke-linejoin=\"round\">MIC inputs</text><path d=\"M270 328 C 335.0 328, 335.0 222, 400 222\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-start=\"url(#ar)\" marker-end=\"url(#ar)\"/><text x=\"280\" y=\"350\" text-anchor=\"start\" font-size=\"12.5\" fill=\"#525252\" paint-order=\"stroke\" stroke=\"#f2f4fc\" stroke-width=\"5\" stroke-linejoin=\"round\">Phoenix in / out</text><path d=\"M620 180 C 675.0 180, 675.0 112, 730 112\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-end=\"url(#ar)\"/><text x=\"722\" y=\"102\" text-anchor=\"end\" font-size=\"12.5\" fill=\"#525252\" paint-order=\"stroke\" stroke=\"#f2f4fc\" stroke-width=\"5\" stroke-linejoin=\"round\">RJ45 Dante output</text><path d=\"M730 268 C 675 268, 675 220, 620 220\" fill=\"none\" stroke=\"#114a9f\" stroke-width=\"1.6\" marker-end=\"url(#ar)\"/><text x=\"722\" y=\"258\" text-anchor=\"end\" font-size=\"12.5\" fill=\"#525252\" paint-order=\"stroke\" stroke=\"#f2f4fc\" stroke-width=\"5\">Phoenix connector</text></svg>",
    },
    data: [
      {
        icon: "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>",
        title: "AC33 Audio Host",
        description: "Processes audio at 48kHz with the 5A algorithms.",
      },
      {
        icon: "<rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\"/>",
        title: "AC33M Array Microphone",
        description: "Eight capsules pick up voices within 4m.",
      },
      {
        icon: "<path d=\"M4 9h4l5-4v14l-5-4H4z\"/><path d=\"M16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11\"/>",
        title: "AC33S Ceiling Speaker",
        description: "A 50W point-source speaker with Dante input.",
      },
      {
        icon: "<path d=\"M5 20V10M5 6V4M12 20v-4M12 12V4M19 20v-8M19 8V4\"/><circle cx=\"5\" cy=\"8\" r=\"2\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/><circle cx=\"19\" cy=\"10\" r=\"2\"/>",
        title: "Control Panel",
        description: "Gives one-key power and volume control.",
      },
    ],
    note: { title: "What the AC33 Kit Includes", text: "The AC33 Voice Lift Kit pairs the audio host with the AC33 array microphone. A control panel also comes in the box." },
  },
  specsData: {
    tag: "Specifications",
    heading: "Figures for Each Component",
    highlightLast: 2,
    subhead: "The kit, the extra array microphone and the ceiling speaker each have their own ratings and box contents.",
    panes: [
      {
        label: "AC33",
        sub: "Voice Lift Kit",
        note: "These values apply to the AC33 Voice Lift Kit.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Voice_Lift_System-AC33-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Audio Host Ports",
              open: true,
              rows: [
                { label: "AC power input", value: "1" },
                { label: "Rocker switch", value: "1" },
                { label: "RJ45 network port", value: "1" },
                { label: "RJ45 DMIC audio input", value: "1" },
                { label: "RJ45 Dante output", value: "1" },
                { label: "USB", value: "1" },
                { label: "RS485", value: "1" },
                { label: "MIC input", value: "2" },
                { label: "Phoenix input, balanced", value: "2" },
                { label: "Phoenix input, unbalanced", value: "1" },
                { label: "Phoenix output, balanced", value: "2" },
                { label: "Phoenix output, unbalanced", value: "1" },
                { label: "Reset button", value: "1" },
              ],
            },
            {
              title: "Audio Host Performance",
              rows: [
                { label: "Sampling rate", value: "48kHz" },
                { label: "Frequency response", value: "125Hz–20kHz" },
                { label: "Signal-to-noise ratio", value: "70dB" },
                { label: "Distortion", value: "< 2.65%" },
                { label: "Phantom power", value: "48V" },
                { label: "Power input", value: "AC 100–240V, 1.7A maximum" },
                { label: "Maximum power consumption", value: "20W" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40°C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage temperature", value: "−20 to 60°C" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
          ],
          [
            {
              title: "Array Microphone",
              open: true,
              rows: [
                { label: "Microphone capsules", value: "8" },
                { label: "Sensitivity", value: "−40dB ±2dB" },
                { label: "Frequency response", value: "100Hz–20kHz" },
                { label: "Signal-to-noise ratio", value: "73dB (A-weighted)" },
                { label: "Distortion", value: "≤ 3% THD" },
                { label: "Maximum sound pressure level", value: "125dB SPL" },
                { label: "Output impedance", value: "100Ω ±20%" },
                { label: "RJ45 (DMIC PREV)", value: "1" },
                { label: "RJ45 (DMIC NEXT)", value: "1" },
                { label: "Power input", value: "DC 12V, 0.12A" },
                { label: "Power consumption", value: "1.5W" },
              ],
            },
            {
              title: "Dimensions & Weight",
              rows: [
                { label: "Audio host (L × W × H)", value: "350 × 180 × 44.5mm" },
                { label: "Microphone (L × D)", value: "481.6 × Ø52.6mm" },
                { label: "Control panel (L × W × D)", value: "86 × 86 × 18mm" },
                { label: "Desktop stand (L × W × H)", value: "85 × 87.8 × 36.5mm" },
                { label: "Suspension rod base", value: "101 × 101 × 26mm" },
                { label: "Suspension rod", value: "OD 28 × ID 26 × 1200mm" },
                { label: "Package (L × W × H)", value: "783 × 250 × 135mm" },
                { label: "Net weight", value: "3.0kg" },
                { label: "Gross weight", value: "3.9kg" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "US power cord, 1.2m", value: "1" },
                { label: "UK power cord, 1.2m", value: "1" },
                { label: "EU power cord, 1.2m", value: "1" },
                { label: "9-pin Phoenix connector", value: "2" },
                { label: "6-pin Phoenix connector", value: "1" },
                { label: "4-pin Phoenix connector", value: "1" },
                { label: "Screw pack", value: "2" },
                { label: "Telescopic suspension rod assembly", value: "1" },
                { label: "Desktop stand assembly", value: "1" },
                { label: "Flat-head screwdriver", value: "1" },
                { label: "Control panel with Phoenix connector", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "AC33M",
        sub: "Array Microphone",
        note: "These values apply to the AC33M array microphone.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Voice_Lift_System-AC33M-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Performance",
              open: true,
              rows: [
                { label: "Microphone capsules", value: "8" },
                { label: "Sensitivity", value: "−40dB ±2dB" },
                { label: "Frequency response", value: "100Hz–20kHz" },
                { label: "Signal-to-noise ratio", value: "73dB (A-weighted)" },
                { label: "Distortion", value: "≤ 3% THD" },
                { label: "Maximum sound pressure level", value: "125dB SPL" },
                { label: "Output impedance", value: "100Ω ±20%" },
                { label: "Pickup", value: "Intelligent sound tracking" },
                { label: "Mounting", value: "Ceiling suspension or desktop" },
              ],
            },
            {
              title: "Ports & Power",
              rows: [
                { label: "RJ45 (DMIC PREV)", value: "1" },
                { label: "RJ45 (DMIC NEXT)", value: "1" },
                { label: "Power input", value: "DC 12V, 0.12A" },
                { label: "Power consumption", value: "1.5W" },
                { label: "Daisy chain", value: "2 microphones" },
              ],
            },
          ],
          [
            {
              title: "Dimensions & Weight",
              open: true,
              rows: [
                { label: "Microphone (L × D)", value: "481.6 × Ø52.6mm" },
                { label: "Desktop stand (L × W × H)", value: "85 × 87.8 × 36.5mm" },
                { label: "Suspension rod base", value: "101 × 101 × 26mm" },
                { label: "Suspension rod", value: "OD 28 × ID 26 × 1200mm" },
                { label: "Package (L × W × H)", value: "783 × 250 × 75mm" },
                { label: "Net weight", value: "1.0kg" },
                { label: "Gross weight", value: "1.7kg" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40°C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage temperature", value: "−20 to 60°C" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Screw pack", value: "2" },
                { label: "Desktop stand assembly", value: "1" },
                { label: "Telescopic suspension rod assembly", value: "1" },
              ],
            },
          ],
        ],
      },
      {
        label: "AC33S",
        sub: "Ceiling Speaker",
        note: "These values apply to the AC33S ceiling speaker.",
        datasheet: { text: "Download Datasheet", href: `${DS}/Voice_Lift_System-AC33S-Datasheet.pdf` },
        columns: [
          [
            {
              title: "Acoustic",
              open: true,
              rows: [
                { label: "Rated power", value: "50W" },
                { label: "Drivers", value: "6.5-inch woofer, 20mm tweeter" },
                { label: "Sound source type", value: "Point source" },
                { label: "Impedance", value: "8Ω" },
                { label: "Sensitivity", value: "90dB (1W / 1m)" },
                { label: "Maximum SPL", value: "104dB (0dB, 1kHz, 1m)" },
                { label: "Frequency response", value: "100Hz–20kHz" },
                { label: "Total harmonic distortion", value: "≤ 3% (100Hz–10kHz)" },
              ],
            },
            {
              title: "Ports & Build",
              rows: [
                { label: "PoE / Dante input", value: "1" },
                { label: "Enclosure", value: "Metal, with a magnetic metal grille" },
              ],
            },
          ],
          [
            {
              title: "Dimensions & Weight",
              open: true,
              rows: [
                { label: "Product (OD × L)", value: "Ø225 × 170mm" },
                { label: "Mounting hole diameter", value: "Ø200mm" },
                { label: "Package (L × W × H)", value: "300 × 300 × 235mm" },
                { label: "Net weight", value: "2.52kg" },
                { label: "Gross weight", value: "3.02kg" },
              ],
            },
            {
              title: "Environment",
              rows: [
                { label: "Operating temperature", value: "0 to 40°C" },
                { label: "Operating humidity", value: "10% to 90% RH" },
                { label: "Storage temperature", value: "−20 to 60°C" },
                { label: "Storage humidity", value: "10% to 90% RH" },
                { label: "Altitude", value: "Below 5000m" },
              ],
            },
            {
              title: "Package Content",
              rows: [
                { label: "Mounting template", value: "1" },
                { label: "Safety rope", value: "4" },
              ],
            },
          ],
        ],
      },
    ],
  },
  faqHeaderData: {
    tag: "FAQs",
    heading: "Common Questions on Voice Lift System",
    highlightLast: 3,
    faqData: [
      {
        question: "Does the presenter need to wear a microphone?",
        answer: "No. The array microphone tracks a moving speaker within a 4m radius, so no wearable or handheld device is required. Actual range depends on the acoustics of the room.",
      },
      {
        question: "What is included in the AC33 Voice Lift Kit?",
        answer: "The kit combines the audio host and the AC33 array microphone. The box also holds a control panel, mounting parts for the microphone, Phoenix connectors and US, UK and EU power cords.",
      },
      {
        question: "Are ceiling speakers part of the kit?",
        answer: "AC33S ceiling speakers are a separate model. Each one has a combined PoE and Dante input.",
      },
      {
        question: "Can more than one array microphone be used?",
        answer: "Two AC33M microphones can be daisy-chained through their DMIC ports to cover a larger area.",
      },
      {
        question: "How is the array microphone mounted?",
        answer: "It can hang from the ceiling on the telescopic suspension rod or stand on a desk using the desktop stand.",
      },
      {
        question: "Can existing microphones and audio equipment stay in use?",
        answer: "Handheld and gooseneck microphones connect to the MIC inputs, which supply 48V phantom power. Balanced and unbalanced Phoenix ports link to other audio equipment.",
      },
      {
        question: "Which spaces is the system designed for?",
        answer: "Large classrooms, academic lecture halls, corporate training rooms and multi-purpose conference rooms are typical spaces.",
      },
      {
        question: "How are the ceiling speakers installed?",
        answer: "Each AC33S fits a 200mm round cutout, and a mounting template and four safety ropes are included.",
      },
    ],
  },
  relatedData: {
    tag: "Related Products",
    heading: "More MAXHUB Tools\n for Speakers & Audiences",
    highlightLast: 4,
    subhead: "Lecterns, lecture capture, interactive displays and table audio suit the same teaching and presentation spaces.",
    linkLabel: "View product",
    columns: 4,
    items: [
      { title: "Smart Lectern", image: `${IMG}/maxhub-smart-lectern-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/smart-lectern-sl22mc" },
      { title: "Capture System V3", image: `${IMG}/maxhub-capture-system-v3-thumb.webp`, href: "/store/displays-capture-sharing/maxhub/capture-system-v3-4k" },
      { title: "F5 Series", image: `${IMG}/maxhub-f5-series-thumb.webp`, href: "/store/interactive-displays/maxhub/f5-series" },
      { title: "UC BM45", image: `${IMG}/maxhub-uc-bm45-thumb.webp`, href: `${MX_STORE}/uc-bm45` },
    ],
  },
  enquiry: mxEnquiry({
    tag: "Enquiry",
    heading: "Plan Your Room Audio",
    highlightLast: 2,
    text: "Tell us the room size, seating and existing audio equipment, and our team will plan where the microphones and speakers should go.",
    select: {
      name: "Model",
      label: "Component of interest",
      options: ["Complete system", "AC33 Voice Lift Kit", "AC33M Array Microphone", "AC33S Ceiling Speaker"],
    },
  }),
  footNote: "",
};
