import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "Projection Solutions · Dubai, UAE · Since 2013",
  heading: "Projection Mapping for \n Captivating Your Audience ",
  highlightLast: 3,
  description: "From architectural facades to indoor environments, GS IT deploys frame-synced projection setups with specialized optics and media control across the UAE.",
  backgroundImage: "/assets/images/projection-mapping/banner.jpeg",
  mobbanner: "/assets/images/projection-mapping/banner.jpeg",
  points: [
    { value: `${portfolioData.years}+ Years`, desc: "Of AV delivery across \n the UAE" },
    { value: "Survey Led", desc: "Brightness set before quoting" },
    { value: '4K Playback', desc: "Server driven canvas playback" },
    { value: "Interactive Ready", desc: "Sensor layers added on demand" }
  ],
  buttons: [
    {
      text: "Explore solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
    {
      text: "Talk to an expert",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-transparent border border-white",
      dark: true,
      href: "/",
    },
  ],
};
  export const overviewData = {
  tag: "Overview",
  heading: "Dynamic Visual Narratives \n through Projection Mapping",
  highlightLast: 3 ,
  subhead:
    "GS IT integrates specialized projection mapping solutions to transform physical structures into dynamic visual environments.",
 items: [
  {
    type: "card",
    icon: "Palette",
    title: "Edge-Blended\nChannel Output",
    description: "Overlapping projector outputs blend light levels across seams, creating one continuous high-resolution canvas.",
  },
  {
    type: "card",
    icon: "SquareDashedMousePointer",
    title: "Warping &\nCorner Pinning",
    description: "Alignment controls match digital content to angled walls, curved pillars, or uneven architectural structures.",
  },
  {
    type: "image",
    image: "/assets/images/projection-mapping/overview1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/projection-mapping/overview2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "Fullscreen",
    title: "Interchangeable\nLens Range",
    description: "Swappable optics adjust throw distances, giving placement flexibility around physical site constraints.",
  },
  {
    type: "card",
    icon: "ThermometerSun",
    title: "Weather-\nRated Enclosures",
    description: "Sealed IP-rated housing combines dust filtration with active cooling to shield projectors in harsh sites.",
  },
],
};
export const whyChooseUsData = {
  tag: "WHY CHOOSE US",
  heading: "End-to-End \n Visual Engineering & System Reliability",
  highlightLast: 5,
  subhead: `GS IT backs every projection installation with validated optical optics, authorized supply routes, and ongoing maintenance.`,
  points: [
    {
      title: "Optical Throw Validation",
      description: "Throw distances and lens calculations get validated before issuing initial proposals.",
    },
    {
      title: "Authorized Distribution Partnerships",
      description: "Direct regional distribution channels deliver rapid replacement hardware to local sites.",
    },
    {
      title: "High Lumen Output Optics",
      description: "Industrial laser light engines maintain bright picture clarity despite ambient venue light.",
    },
    {
      title: "Synchronized Playback Architecture",
      description: "Dedicated media servers drive multi-channel outputs with exact frame-level accuracy.",
    },
    {
      title: "Dedicated Power Infrastructure",
      description: "Load requirements and dedicated power feeds are coordinated with your site engineers.",
    },
    {
      title: "Ongoing Support Under AMC",
      description: "Routine inspections and regional support teams keep hardware installations running.",
    },
  ],
}


export const throwDistanceData = {
  tag: "Throw Distance Guide",
  heading: "Projection Distance & \n Lens Throw Ratio Standards",
  highlightLast: 4 ,
  subhead:
    "Precise throw distance metrics guide lens selection based on available venue space and image dimensions.",
 tablecolumn: [
  { key: "key1", label: "Priority" },
  { key: "key2", label: "Throw Ratio" },
  { key: "key3", label: "Distance for 6 m Wide Image" },
  { key: "key4", label: "Distance for 20 m Wide Image" },
  { key: "key5", label: "Operational Fit" },
],
    items: [
  {
    key1: "Ultra Short Throw",
    key2: "0.3:1",
    key3: "1.8 m",
    key4: "N/A (Requires Multi-Array)",
    key5: "Tight interior spaces clearing room foot traffic",
  },
  {
    key1: "Short Throw",
    key2: "0.65:1 to 0.85:1",
    key3: "3.9 to 5.1 m",
    key4: "13 to 17 m",
    key5: "Exhibition booths, stage sets, and close rigs",
  },
  {
    key1: "Standard Zoom",
    key2: "1.2:1 to 1.8:1",
    key3: "7.2 to 10.8 m",
    key4: "24 to 36 m",
    key5: "Corporate atriums, galleries, and indoor venues",
  },
  {
    key1: "Long Throw",
    key2: "2.0:1 to 4.0:1",
    key3: "12 to 24 m",
    key4: "40 to 80 m",
    key5: "Outdoor building facades across roads or plazas",
  },
  {
    key1: "Ultra Long Throw",
    key2: "4.0:1 to 7.5:1",
    key3: "24 to 45 m",
    key4: "80 to 150 m",
    key5: "Large landmark elevations with distant rig positions",
  },
],
cta: { 
  title: "Not sure your site has the distance for the surface you want to cover?",
  description:"Connect with us to share the mounting positions you have, and we will get back the right lens options.",
  button:'Book a consultation',
  background:"bg-[#F5F9FC]", 
}
};

export const partnersHeaderData = {
  tag: "Our Partners",
  heading: "Brands We Integrate ",
  highlightLast: 1,
}
export const partnerslogoData = [
  { src: "/assets/images/projection-mapping/partner1.svg", alt: "" },
  { src: "/assets/images/projection-mapping/partner2.svg", alt: "" },
  { src: "/assets/images/projection-mapping/partner3.svg", alt: "" },
  { src: "/assets/images/projection-mapping/partner4.svg", alt: "" },
  { src: "/assets/images/projection-mapping/partner5.svg", alt: "" },  
  { src: "/assets/images/projection-mapping/partner5.svg", alt: "" },  
];





export const recomData = {
  backgroundImage: "/assets/images/projection-mapping/ctabanner.jpeg",
  mobbanner: "/assets/images/projection-mapping/ctabanner.jpeg",
  tag: "",
  heading: "Make ordinary surfaces \n communicate with high-impact \n projection mapping. ",
  highlightLast: 10,
  description: "Speak with our display engineers to outline optical positioning, power needs, and media server requirements.",

  cta: "Book a consultaton ",
};

 

 
 
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Questions about \n Projection Solutions ",
  highlightLast: 6,
  faqData: [
  {
    question: "How many projectors will my surface need?",
    answer: "The count comes from the width of the surface and the brightness needed at its far edge. One unit covers a modest interior wall comfortably. A wide facade is covered by several channels that overlap and blend into a single image. We work the number out from the survey measurements and the lens range available at the distance we can mount from.",
  },
  {
    question: "Can mapped projection work with the venue lights on?",
    answer: "Yes, within limits. Content holds up under house lighting when the brightness class is specified for that condition and when the fittings nearest to the surface can be dimmed. Exhibition halls are the hardest case because overhead lighting is usually fixed for the whole floor. We take a light reading at the surface during the survey and quote against that reading.",
  },
  {
    question: "Which surfaces are difficult to project onto?",
    answer: "Dark and heavily textured materials are the hardest. Brick and dark stone absorb a large share of the light and can need two to three times the output that pale plaster needs. Glass and polished metal scatter light and hold very little image. Where the material is a problem for 3D projection mapping, we either raise the output or treat a section of the surface for the run.",
  },
  {
    question: "Where do the projectors sit and can they be hidden from view?",
    answer: "Projectors are mounted wherever the throw distance and the sightlines allow. Common positions are a truss above the audience or a platform at the rear of a room or a weather rated pod on a nearby roof for facade work. Concealment is planned during the survey using ceiling recesses or a painted enclosure or a position behind the crowd. What cannot move is the beam path because anything crossing it appears on the surface.",
  },
  {
    question: "How long does a project take from brief to show night?",
    answer: "A straightforward interior job runs around three to four weeks. That covers the survey and the model, and the bench build and two site nights for alignment. Facade work takes longer because approvals and rigging access and night testing add time. Hardware lead time is the variable that moves a date most often.",
  },
  {
    question: "Can the same setup be reused at a different venue?",
    answer: "The hardware travels, but the mapping does not. Projectors and lenses and the media server move to any site. The mesh and blend values belong to one surface and one set of projector positions. A new surface needs a fresh survey and a fresh geometry file. We keep the project records, so the second build starts from known hardware.",
  },
  {
    question: "What keeps the image aligned across a long run?",
    answer: "Rigid mounting does most of the work. Units that are locked to a fixed structure hold their alignment for months. Movement comes from thermal expansion or from someone knocking a bracket. For permanent sites we can specify camera-based recalibration, so the system re-references the surface automatically and returns the image to the mesh.",
  },
  {
    question: "Can an outdoor show run through the summer months?",
    answer: "Yes with the right enclosure and cooling plan. Heat is the limiting factor for outdoor projection mapping here because high output units already generate significant load. We specify ventilated or conditioned housings and set filter cleaning intervals for the dust. Show times also shift later in summer because full darkness arrives later in the evening.",
  },
  {
    question: "Do you support the system after handover?",
    answer: "Support after handover runs under an AMC agreement. Without AMC in place, we do not carry out ongoing monitoring or scheduled servicing on the installation. Manufacturer warranty on the hardware continues either way through the supply channel. Clients running a permanent immersive projection space usually take the AMC route.",
  },
  {
    question: "Which projector ranges does GS IT supply for mapping work?",
    answer: "We hold authorised partnerships with seven projector manufacturers covering installation and rental and simulation ranges. That spread lets us match a brief to laser units in the mid brightness class for interiors or to high output models for facade work. As a projection mapping company in UAE we recommend the range after the survey and not before it.",
  },
],
};


 
 
export const WifiServicesData = {
  tag: "OUR SOLUTIONS",  
  heading: "Dynamic Surface \n Projection & Mapping Services",
  highlightLast: 4 ,
  subhead:
    "GS IT's projection mapping frameworks turn architectural spaces and physical objects into active visual channels.",
 items: [
  {
    image: "/assets/images/projection-mapping/solutions1.jpeg",
    title: "Architectural Facade Mapping",
    description: "High-lumen displays align digital content directly onto exterior building walls.",
  },
  {
    image: "/assets/images/projection-mapping/solutions2.jpeg",
    title: "Multi-Projector Blended Arrays",
    description: "Overlapping projection channels combine to form large continuous visual canvases.",
  },
  {
    image: "/assets/images/projection-mapping/solutions3.jpeg",
    title: "Interactive Floor & Wall Projection",
    description: "Motion sensors trigger dynamic visual responses as visitors move through a venue.",
  },
  {
    image: "/assets/images/projection-mapping/solutions4.jpeg",
    title: "Immersive Room Projection",
    description: "Perimeter wall and floor coverage surrounds viewers in a unified visual space.",
  },
  {
    image: "/assets/images/projection-mapping/solutions5.jpeg",
    title: "Object & Set Piece Mapping",
    description: "Targeted optics project detailed graphics directly onto 3D props and vehicles.",
  },
  {
    image: "/assets/images/projection-mapping/solutions6.jpeg",
    title: "Dome & Curved Surface Projection",
    description: "Advanced geometry software aligns video feeds onto interior spherical structures.",
  },
],
};
export const IndustriesHeaderData = {
  tag: "APPLICATION",
  heading: "Custom Projection Mapping \n Deployments by Environment",
  highlightLast: 3,
  subhead:
    "GS IT configures optical setups to match ambient light, structural layouts, and operational hours across different venues.",
  data: [
    {
      icon: "Building",
      title: "Hotels & Ballrooms",
      description: "Surface mapping covers banquet walls during cued gala dinner events.",
      href: "",
    },
    {
      icon: "/assets/images/icons/userroundgroup.svg",
      title: "Exhibition Halls",
      description: "High lumen short-throw hardware cuts through ambient booth lighting.",
      href: "",
    },
    {
      icon: "ShoppingCart",
      title: "Retail & Malls",
      description: "Scheduled visual displays run across shopfronts during trading hours.",
      href: "",
    },
    {
      icon: "Castle",
      title: "Museums & Attractions",
      description: "Automated media servers run daily gallery display loops continuously.",
      href: "",
    },
    {
      icon: "Flag",
      title: "Civic & National Events",
      description: "Broad outdoor optical setups throw scaled media across city landmarks.",
      href: "",
    },
    {
      icon: "Building2",
      title: "Corporate Headquarters",
      description: "Lobby and auditorium walls display graphics during product launches.",
      href: "",
    },
    {
      icon: "HeartHandshake",
      title: "Hospitality Facades",
      description: "Outdoor optics map resort structures for evening entertainment shows.",
      href: "",
    },
  ],
  industryCTA: {
    title: "Your Environment",
    description: "Unique layout? We customize projection mapping to any site in the UAE.",
    href: "/",
  },
};
export const postdevelopmentData = {
  tag: "Deployment Workflow ",
  heading: "Structured Projection Mapping \n Execution Framework",
  highlightLast: 2,
  subhead:
    "Projects follow a structured technical sequence covering physical evaluation, pre-testing, and site calibration.",
 data: [
  {
    number: "01",
    title: "Site Survey",
    description: "Field teams measure surface shapes, access paths, and ambient light levels.",
  },
  {
    number: "02",
    title: "Model & Previsualization",
    description: "3D digital models simulate throw distances to verify target hardware positions.",
  },
  {
    number: "03",
    title: "Specification & Approval",
    description: "Sign-off documentation details power specs, optics, and mounting hardware.",
  },
  {
    number: "04",
    title: "Bench Build & Test",
    description: "Technicians pre-configure media servers and test optical gear prior to dispatch.",
  },
  {
    number: "05",
    title: "Rigging & Alignment",
    description: "On-site crews mount display units, adjust optical focus, and blend overlaps.",
  },
  {
    number: "06",
    title: "Show Test & Handover",
    description: "Complete end-to-end rehearsals validate video playback before system sign-off.",
  },
],
};


