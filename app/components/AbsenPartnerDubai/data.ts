import { portfolioData } from "@/app/components/common/data";

const IMG = "/assets/images/absen-partner";
const START = "#start"; // enquiry form at the bottom of the page

export const seo = {
  title: "Absen LED Partner in Dubai | Absen LED Display Supplier | GS IT",
  description:
    "GS IT is an Absen partner in Dubai, supplying and installing Absen LED video walls, all-in-one meeting room displays, control room and outdoor LED across the UAE.",
  ogTitle: "Absen LED Partner in Dubai | GS IT",
  ogDescription:
    "Absen LED video walls, meeting room, control room and outdoor displays from GS IT, with survey, on-site demo, installation and support across the UAE.",
  image: `${IMG}/banner.webp`,
};

export const bannerData = {
  badge: { label: "Absen partner in Dubai", logo: `${IMG}/badge.png`, alt: "Absen" },
  tag: "Absen Partner in Dubai",
  heading: "Absen LED Partner in Dubai\n for video walls, meeting rooms and control rooms",
  highlightLast: 8,
  description:
    "GS IT supplies, installs and supports Absen LED displays across the UAE, from all-in-one meeting room screens to lobby video walls, control rooms and outdoor signage. We match the pixel pitch to your viewing distance, engineer the structure and power, and stay accountable once the wall is live.",
  backgroundImage: `${IMG}/banner.webp`,
  mobbanner: `${IMG}/banner.webp`,
  buttons: [
    { text: "Explore displays", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#range" },
    { text: "Get a quote", icon: "", bgButton: "bg-white", dark: false, href: START },
  ],
  points: [
    { value: `${portfolioData.years}+ years`, desc: "delivering IT in the UAE" },
    { value: `${portfolioData.clients}+`, desc: "clients served" },
    { value: `${portfolioData.employees}+`, desc: "in-house specialists" },
    { value: `${portfolioData.google_score}`, desc: "Google rating" },
  ],
};

export const overviewData = {
  tag: "Why Absen",
  heading: "One LED brand,\n from boardroom to billboard",
  highlightLast: 4,
  subhead:
    "An LED wall is a ten-year decision. Absen has built direct-view LED since 2001, covering meeting rooms, lobbies, control rooms, stages and outdoor signage, so your whole estate of screens can come from one maker.",
  data: [
    {
      variant: "light",
      big: "65,000+",
      title: "Installations worldwide",
      dim: "In more than 165 countries",
      text: [
        "Absen is listed on the Shenzhen Stock Exchange and has supplied LED to corporate lobbies, stadiums and broadcast studios for 25 years.",
      ],
    },
    {
      variant: "light",
      title: "COB and MicroLED",
      dim: "Sealed, finer and more durable",
      text: [
        "Absen's flip-chip COB panels seal the LEDs under a protective surface. On the KLCOB V2, Absen reports over 40% fewer solder points, a 50% lower failure rate and double the lifespan.",
      ],
    },
    {
      variant: "dark",
      title: "Present in the region",
      dim: "Absen Middle East, Dubai",
      text: [
        "Absen has run its Middle East office in Dubai since 2015, serving the wider MENA region.",
        "A manufacturer close to your site shortens the path for spare modules and technical escalation after go-live.",
      ],
    },
  ],
};

const rangeButtons = [
  { text: "Ask about it", href: START, dark: true },
  { text: "Book a demo", href: START },
];

export const rangeData = {
  tag: "Absen displays we supply",
  heading: "Absen LED for every space,\n one accountable partner",
  highlightLast: 3,
  subhead:
    "Grouped by the job each display does. We size every wall to its room, viewing distance and content, and specify current Absen series only.",
  layout: "cards",
  jump: [
    { label: "All-in-one meeting room LED", href: "#mr" },
    { label: "Fine-pitch video walls", href: "#fp" },
    { label: "Control rooms", href: "#cr" },
    { label: "Auditoriums and immersive", href: "#im" },
    { label: "Outdoor and DOOH", href: "#od" },
    { label: "Replacing a display", href: "#up" },
  ],
  data: [
    {
      id: "mr",
      image: `${IMG}/meeting-rooms.webp`,
      alt: "Absen X V2 all-in-one MicroLED display",
      tag: "Meeting rooms",
      title: "All-in-one LED for meeting rooms",
      lead: "A complete LED display in one product, with screen, control, audio and power built in. No video wall project required.",
      categories: [
        {
          title: "X V2 Series",
          text: "All-in-one MicroLED displays, including the X136 V2, with full-screen calibration and integrated control, audio and power.",
        },
        { title: "X Ultrawide", text: "21:9 all-in-one models for boardrooms where far-end video and shared content sit side by side." },
      ],
      bestFor: ["Boardrooms", "Meeting rooms", "Showrooms"],
      buttons: rangeButtons,
    },
    {
      id: "fp",
      image: `${IMG}/fine-pitch.webp`,
      alt: "Absen CL V3 fine-pitch LED cabinet, front and rear",
      tag: "Corporate and retail",
      title: "Fine-pitch video walls",
      lead: "Seamless LED walls for lobbies, experience centres and retail, built to whatever size the wall allows.",
      categories: [
        {
          title: "CL V3 Series",
          text: "Absen's flagship Clear Cobalt MicroLED, including the CL0.7 Pro V3, for premium lobbies, exhibition halls and conference spaces.",
        },
        { title: "NX Series", text: "Thin 16:9 panels that build to 4K and 8K walls, for wall-mounted, hung or stacked installation." },
        { title: "ALT Series", text: "Compact, close-view panels designed to blend into interiors, for hotels, exhibitions and hospitality spaces." },
      ],
      bestFor: ["Lobbies", "Experience centres", "Retail"],
      buttons: rangeButtons,
    },
    {
      id: "cr",
      image: `${IMG}/control-rooms.webp`,
      alt: "Absen KLCOB V2 control room LED cabinet, front and rear",
      tag: "Control rooms",
      title: "Control room and data walls",
      lead: "LED built for continuous operation, where every pixel carries information someone has to act on.",
      categories: [
        { title: "KLCOB V2 Series", text: "Flip-chip COB MicroLED with high contrast and HDR, engineered for reliable round-the-clock operation." },
        {
          title: "Wall processing",
          text: "Absen pairs the KLCOB V2 with Datapath Aetria. We integrate the wall with your controller and sources so operators manage every feed from one place.",
        },
      ],
      bestFor: ["Operations centres", "NOC and SOC", "Crisis rooms"],
      buttons: rangeButtons,
    },
    {
      id: "im",
      image: `${IMG}/immersive.webp`,
      alt: "Absen Polaris, Saturn and Pixel Reality stage LED cabinets",
      tag: "Immersive and events",
      title: "Auditoriums, stages and immersive rooms",
      lead: "Large-format LED for venues where the screen is part of the experience, not just a place to show slides.",
      categories: [
        { title: "Polaris Series", text: "Robust stage panels such as the PL 3.9 Pro V3, built for indoor and outdoor events." },
        { title: "Saturn Series", text: "Lightweight stage panels, including the 1.5 mm SA1.5 COB, for premium indoor stages and launches." },
        { title: "Pixel Reality (PR) Series", text: "LED backdrops such as the PR1.9, for virtual production studios and immersive environments." },
      ],
      buttons: rangeButtons,
    },
    {
      id: "od",
      image: `${IMG}/outdoor.webp`,
      alt: "Absen AW Pro outdoor LED lightbox and cabinet",
      tag: "Outdoor",
      title: "Outdoor and DOOH displays",
      lead: "Weather-sealed LED that stays readable in direct UAE sun, from street-level signage to building facades.",
      categories: [
        { title: "AW Pro Series", text: "Outdoor fine-pitch COB lightboxes at 1.5 mm or finer, IP65-rated, for close-view street advertising." },
        { title: "AW Series", text: "Outdoor fine-pitch panels from 2.5 mm at 5,500 nits, for transit hubs, retail frontages and DOOH." },
        { title: "A Series", text: "High-brightness outdoor LED rated up to 10,000 nits, for billboards and large facades." },
      ],
      bestFor: ["Facades", "DOOH", "Retail frontages"],
      buttons: rangeButtons,
    },
    {
      id: "up",
      featured: true,
      tag: "Upgrades",
      title: "Replacing an LCD video wall or projector?",
      lead: "Bezel lines, faded projection and failing panels are the usual reasons clients move to LED. We assess what you have, then plan a replacement that reuses whatever still works.",
      categories: [
        { title: "LCD video walls", text: "No bezel lines through text and faces, and no colour drift between panels as they age." },
        { title: "Projection", text: "Readable with the room lights on, with no lamps or filters to replace." },
        { title: "Older LED walls", text: "Finer pitch at the same wall size, on a current series with spares support." },
        {
          title: "Structure and power",
          text: "We check whether your existing wall, power and cabling can carry the new display before we quote.",
        },
      ],
      buttons: [{ text: "Talk to an AV engineer", href: START, dark: true }],
    },
  ],
};

export const turnkeyData = {
  tag: "More than the panels",
  heading: "One team for the whole wall,\n not just the LED",
  highlightLast: 4,
  text: "Most LED problems start behind the screen: a structure that flexes, power that trips, a processor that cannot handle your sources. We design and deliver everything around the panels, so one team answers for the result.",
  button: { text: "Plan the full installation", href: START },
  items: [
    { icon: "Building2", title: "Structural design", text: "Frames and mounts engineered for the cabinet weight and your wall.", href: START },
    { icon: "Zap", title: "Power and data", text: "Power distribution and signal cabling planned for the full wall.", href: START },
    { icon: "Cpu", title: "Video processing", text: "Processors and controllers matched to your sources and resolution.", href: START },
    { icon: "TabletSmartphone", title: "Control systems", text: "One-touch control from a panel, keypad or room system.", href: START },
    { icon: "Clapperboard", title: "Content creation", text: "Content produced at your wall's exact resolution.", href: START },
  ],
};

export const choosingData = {
  tag: "Choosing your LED",
  heading: "Pixel pitch decides\n what your audience sees",
  highlightLast: 4,
  subhead:
    "Pitch is the distance between pixels. Too coarse and text breaks up; too fine and you pay for detail nobody can see. As a rule of thumb, the closest comfortable viewing distance in metres roughly equals the pitch in millimetres.",
  data: [
    {
      icon: "Monitor",
      title: "Under 1.2 mm",
      description: "Boardrooms and control rooms, viewed from about one metre. Small text and dense data stay sharp.",
    },
    {
      icon: "LayoutGrid",
      title: "1.2 to 2 mm",
      description: "Meeting rooms, lobbies and experience centres, viewed from about 1.5 to 2 metres and beyond.",
    },
    {
      icon: "Landmark",
      title: "2.5 to 4 mm",
      description: "Auditoriums, stages and large atriums, where the audience sits three metres away or more.",
    },
    {
      icon: "Sun",
      title: "Brightness",
      description:
        "Indoor walls usually run between 600 and 1,000 nits. Outdoor walls need several thousand to stay readable in direct sun.",
    },
    {
      icon: "Wrench",
      title: "Service access",
      description:
        "Front-serviceable panels mount flush to the wall. Rear access needs a service gap. We settle this at survey, not on install day.",
    },
    {
      icon: "Table2",
      title: "Content resolution",
      description:
        "The wall's pixel count sets the content format. We match processing and content to it, so nothing is stretched or cropped.",
    },
  ],
  buttons: [
    { text: "Get a pitch recommendation", href: START, dark: true },
    { text: "Book a demo", href: START },
  ],
};

export const servicesData = {
  tag: "What GS IT delivers",
  heading: "From site survey\n to support after go-live",
  highlightLast: 4,
  subhead:
    "An LED wall is only as good as the structure, power and processing behind it. We handle all of it, with specialist teams for each stage.",
  data: [
    {
      icon: "Search",
      title: "Survey and design",
      description: "We measure the wall, viewing distances and ambient light, then specify pitch, size, brightness and structure.",
    },
    {
      icon: "Eye",
      title: "Demo before you commit",
      description: "You see the shortlisted display in your own space. Nothing is ordered until you approve it.",
    },
    {
      icon: "Package",
      title: "Supply and installation",
      description:
        "Genuine Absen hardware with manufacturer warranty. Structure, power, data, processing and control installed and calibrated.",
    },
    {
      icon: "Headphones",
      title: "Content and support",
      description:
        "Content from GS IT's Digital team, plus maintenance and spares. Clients on a GS IT AMC contract get a 10-minute response on critical issues.",
    },
  ],
};

export const procedureData = {
  tag: "Deployment procedure",
  heading: "See it in your space\n before you order",
  highlightLast: 3,
  subhead: "Every step ends with a clear output, from the first survey to a calibrated, documented handover.",
  data: [
    { title: "Site survey", text: "Wall dimensions, viewing distances, ambient light, structure and power." },
    { title: "Design and proposal", text: "Absen series, pitch, size, structure, bill of materials and timeline in one document." },
    { title: "On-site demo", text: "You review image quality in your own space. Procurement starts only after you agree." },
    { title: "Supply and install", text: "Structure, cabinets, power, data and processing, planned around your working hours." },
    { title: "Calibrate and hand over", text: "Colour calibration, team training, documentation and ongoing support." },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One Partner.\n Every Layer of Your IT.",
  highlightLast: 5,
  subhead:
    "Your LED wall connects to your network, meeting rooms, control systems and content. We support all of it, so a fault has one owner instead of a chain of vendors.",
  data: [
    { value: "98%", title: "Client retention", text: "Most clients stay with us after the first project." },
    { value: "10 min", title: "Critical response on AMC", text: "Response time on critical issues for clients on a GS IT AMC contract." },
    { value: `${portfolioData.employees}+`, title: "Specialists in-house", text: "AV, network, cloud and security teams under one roof." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Absen LED questions\nanswered",
  highlightLast: 1,
  faqData: [
    {
      question: "Is GS IT an Absen partner in Dubai?",
      answer:
        "Yes. GS IT is an Absen partner in Dubai. We supply genuine Absen LED displays with manufacturer warranty, and we design, install and support the walls we deliver.",
    },
    {
      question: "Which Absen displays does GS IT supply?",
      answer:
        "The X V2 all-in-one series for meeting rooms, CL V3, NX and ALT fine-pitch walls, KLCOB V2 for control rooms, Polaris, Saturn and Pixel Reality for stages and immersive rooms, and AW Pro, AW and A Series for outdoor and DOOH.",
    },
    {
      question: "What pixel pitch do we need?",
      answer:
        "It depends on how close your audience sits. As a rule of thumb, the closest comfortable viewing distance in metres roughly equals the pitch in millimetres. We confirm it at site survey against your room, content and budget.",
    },
    {
      question: "Should we choose LED or an LCD video wall?",
      answer:
        "LED has no bezel lines, scales to almost any size and keeps colour consistent across the wall. For small walls viewed very close, LCD can still be a sensible choice. We will tell you plainly which suits your room.",
    },
    {
      question: "Can we see the display before we buy?",
      answer: "Yes. We arrange a demonstration of the shortlisted display in your space, and procurement starts only after you approve it.",
    },
    {
      question: "Do you create content for LED walls?",
      answer:
        "Yes. GS IT's Digital team produces corporate and immersive content sized to your wall's resolution. If you have your own content team, we work with them to deliver the final output.",
    },
    {
      question: "Do you support Absen displays you did not install?",
      answer: "Yes. We inspect existing Absen walls, recalibrate, replace failed modules and take them into ongoing support.",
    },
  ],
};

// "Get started" section: same design as the meeting-room CTA (ExpertRecommendations), no background image
export const ctaData = {
  tag: "Get started",
  heading: "Plan your Absen LED display\n with an AV engineer",
  highlightLast: 4,
  subhead: `Absen partner · ${Number(portfolioData.clients).toLocaleString("en-US")}+ UAE clients · ${portfolioData.years}+ years. Supply, design, installation and support from one accountable team.`,
  backgroundImage: `${IMG}/banner.webp`,
  steps: [
    { num: "01", title: "Tell us the space, its size and what the display needs to do." },
    { num: "02", title: "We survey the site and recommend the series, pitch and size." },
    { num: "03", title: "You get a proposal with the design, bill of materials, timeline and quote." },
  ],
  form: {
    title: "Request an Absen LED quote",
    subtitle: "A GS IT AV engineer will review your request and reply with next steps.",
    button: "Send request",
    fields: [
      {
        name: "enquiry_type",
        full: true,
        label: "What do you need?",
        type: "select",
        required: true,
        placeholder: "Select",
        options: ["New display", "Replace a display", "Book a demo", "Service and support"],
      },
      {
        name: "application",
        full: true,
        label: "Where will the display go?",
        type: "select",
        placeholder: "Not sure yet",
        options: [
          "All-in-one meeting room LED",
          "Fine-pitch video wall",
          "Control room LED",
          "Auditorium, stage or immersive room",
          "Outdoor or DOOH display",
        ],
      },
      {
        name: "series",
        full: true,
        label: "Absen series",
        type: "select",
        placeholder: "Not sure, recommend one",
        options: [
          "X V2 Series",
          "X Ultrawide",
          "CL V3 Series",
          "NX Series",
          "ALT Series",
          "KLCOB V2 Series",
          "Polaris Series",
          "Saturn Series",
          "Pixel Reality (PR) Series",
          "AW Pro Series",
          "AW Series",
          "A Series",
        ],
      },
      { name: "size", label: "Approximate size", type: "text", placeholder: "e.g. 4 m × 2.25 m, or 136 inch" },
      {
        name: "viewing_distance",
        label: "Closest viewing distance",
        type: "select",
        placeholder: "Not sure",
        options: ["Under 1.5 m", "1.5 to 3 m", "3 to 6 m", "Over 6 m"],
      },
      { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
      { name: "company", label: "Company", type: "text", required: true, autoComplete: "organization" },
      { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", placeholder: "+971" },
      {
        name: "message",
        full: true,
        label: "Anything else we should know?",
        type: "textarea",
        rows: 3,
        placeholder: "Room, content, current setup, timeline",
      },
    ],
  },
};

export const footNote =
  "Absen, Clear Cobalt, Polaris, Saturn and other product names are trademarks of Shenzhen Absen Optoelectronic Co., Ltd.";
