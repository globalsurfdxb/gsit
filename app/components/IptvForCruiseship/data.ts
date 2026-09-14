 import { portfolioData } from "../common/data";

export const bannerData = {
  tag: "IPTV FOR CRUISES · DUBAI, UAE · SINCE 2013 ",
  heading: "Maritime IPTV Solutions for \n Cruise Ship Fleets in the UAE",
  highlightLast: 6,
  description: "GS IT designs and installs maritime IPTV systems for cruise operators sailing Gulf itineraries. Cabin screens and public displays run from a single onboard headend.",
  backgroundImage: "/assets/images/iptv-cruiseship/banner.jpeg", 
  mobbanner: "/assets/images/iptv-cruiseship/mobbanner.jpg", 
  points:[
   { value: `${portfolioData.years}+ Years`, desc:"of IT & AV delivery across the UAE"},
   { value: `Multicast Core`, desc:"Shared feeds without \nper-screen load"},
   { value: `Hybrid Links`, desc:"Satellite & shore on one content path"},
   { value: `Turnkey Scope`, desc:"Survey & sign-off by one lead team"}
  ],
  buttons: [
    {
      text: "Our solutions",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    } ,

    {
      text: "Talk to experts ",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    } 
  ],
};   
 
 export const makingswichData = {
  tag: "FEATURES & BENEFITS ",
  heading: "What to Expect from \n Our Maritime IPTV Solutions",
  highlightLast: 4,  
  subhead: "Deploying cruise IPTV improves guest experience while streamlining administrative onboard communication.",
headers: {
  scenario: "Ship IPTV Features",
  with: "Outcome",
},
table: [
  {
    scenariotitle:"Live Channel Bouquet",
    scenario: "Cabins and public lounges receive global satellite TV channels continuously.",
    withtittle:"Higher Guest Satisfaction",
    with: "In-cabin entertainment tailored to passenger preferences elevates guest stays.",
  },
  {
    scenariotitle:"Interactive Menus & Portals",
    scenario: "Cabin screens display interactive spa options and excursion booking screens.",
    withtittle:"Onboard Revenue Support",
    with: "Interactive TV menus highlight spa services and excursions right inside cabins.",
  },
  {
    scenariotitle:"Program Guide",
    scenario: "Viewers browse upcoming lineups and live program details via responsive menus.",
    withtittle:"Lower Crew Workload",
    with: "Automated digital information reduces guest questions and eliminates print runs.",
  },
  {
    scenariotitle:"Signage Publishing",
    scenario: "Updating wayfinding, daily schedules, and event boards from a single admin interface.",
    withtittle:"Operational Efficiency",
    with: " Prevents outdated schedules or conflicting event details from appearing across different decks.",
  },
  {
    scenariotitle:"Multi Language Interface",
    scenario: "Portal text and audio tracks are presented in the languages of the ones sailing.",
    withtittle:"Improved Crew Welfare",
    with: " Long rotations pass easier with home language content in the crew cabins.",
  },
  {
    scenariotitle:"Multi Language Interface",
    scenario: "Sends localized notices, excursion alerts, or schedule updates to specific cabin decks.",
    withtittle:"Precision Communication",
    with: " Reaches targeted passenger groups without disrupting the entire vessel.",
  },
],
};
  
  

export const ConnectivityData = {
  tag: "CONNECTIVITY",
  heading: "Hybrid Network \n Management at Sea",
  highlightLast: 3,
  subhead:
    "Our IPTV ship architecture routes traffic across hybrid satellite and terrestrial paths, protecting media quality during link switches.",
 columns: [
  { key: "layer", label: "Connectivity Layer" },
  { key: "function", label: "Primary Function on Board" },
  { key: "setup", label: "What We Setup" },
],
rows: [
  {
    layer: "Geostationary VSAT",
    function: "Live satellite TV during open ocean transit.",
    setup: "Bitrates are capped and beam profiles stored ahead of the route.",
  },
  {
    layer: "Live Channel Bouquet",
    function: "Guest portal access and web browsing handled over satellite.",
    setup: "Automatic link failover rules and web traffic priority.",
  },
  {
    layer: "MEO Capacity",
    function: "Backup coverage on routes where the main link weakens",
    setup: "Managed session steering during satellite constellation handovers.",
  },
  {
    layer: "Shore 5G & LTE",
    function: "Prevents outdated schedules or conflicting event details from appearing across different decks.",
    setup: "Scheduled off-peak download windows and automated media syncing.",
  },
  {
    layer: "Onboard Local Cache",
    function: "Stored media access directly from ship servers without satellite data.",
    setup: "Local server storage limits matched to cruise itineraries.",
  },
  {
    layer: "Multicast Core",
    function: "Single live video streams shared across cabin screens at once.",
    setup: "Bandwidth limits are agreed with the vessel IT team",
  },
],
}; 
 
 
export const howweworkData = {
  tag: "DELIVERY",
  heading: "How a Marine \n IPTV Project Runs From Survey to Handover",
  highlightLast: 7,
  subhead:
    "Docking windows are fixed, and IPTV for cruise work is planned against the yard schedule well ahead.",
  data: [
    {
      number: "01",
      title: "Requirement Review",
      description:
        "Cabin manifest, network topology, and satellite service details are collected from the operator.",
    },
    {
      number: "02",
      title: "Onboard Technical Survey",
      description: "Rack space, cable routes, and existing display positions are recorded during a ship visit.",
    },
    {
      number: "03",
      title: "System Design and Approval",
      description: "Headend layout and the channel plan are signed off by the operator technical team onboard.",},
    {
      number: "04",
      title: "Procurement and Staging",
      description: "Hardware is sourced and pre-configured ashore to shorten the working time spent at the berth.",},
    {
      number: "05",
      title: "Onboard Installation",
      description: "Cabling, device mounting, and rack assembly are completed inside the allocated docking window.", },
    {
      number: "06",
      title: "Commissioning and Handover",
      description: "Testing across sea and port conditions is followed by training for the crew administrators.", },
  ],
};

export const servicesData = {
  tag: "OUR SOLUTIONS",
  heading: "Connecting Vessels for \n Live Content & Media Access",
  highlightLast: 5,
  subhead: "We deliver complete ship IPTV installations, combining middleware setup, satellite tuning, and hardware integration.",
servicesData: [
  {
    icon: "ShieldUser",
    title: "Onboard Headend & Middleware Deployment",
    description: "Server-side platforms give administrators central control of channel lists and rights.",
    href: "#",
    featured: true,
  },
  {
    icon: "Satellite",
    title: "Bandwidth & Satellite Optimization",
    description: "Caching and compression that keeps video off the satellite link during peak hours.",
    href: "#",
    featured: true,
  },
  {
    icon: "MonitorCloud",
    title: "Interactive Guest Portal & PMS Integration",
    description: "Connecting with PMS software lets cabin screens stream custom itineraries and folios.",
    href: "#",
    featured: true,
  },
  {
    icon: "/assets/images/icons/squaretext-2.svg",
    title: "Channel & Content Library Curation",
    description: "Live feeds and stored film titles assembled to match the operator's content rights.",
    href: "#",
    featured: true,
  },
  {
    icon: "/assets/images/icons/shipcargo.svg",
    title: "Marine Grade Hardware Supply & Integration",
    description: "Encoders, decoders, and cabin displays specified for vibration and humidity onboard.",
    href: "#",
    featured: true,
  },
  {
    icon: "Server",
    title: "Onsite Hardware Build & Integration",
    description: "Racks, servers, and encoders are properly assembled during the scheduled dock visits.",
    href: "#",
    featured: true,
  },
],
};
 
 
   
export const whyChooseUsData = {
  tag: "WHY CHOOSE US",
  heading: "Why Operators Rely on \n Our Marine IPTV Solutions",
  highlightLast: 4,
  subhead: `Working with an accountable regional integration team keeps your onboard entertainment project on budget and schedule.`,
  points: [
    {
      title: "Yard & Port Access in the UAE",
      description: "Onsite technical teams mobilize to major regional ports without extended travel delays.",
    },  
    {
      title: "Cross-Discipline In-House Teams",
      description: "No third-party handoffs, as we have a dedicated team of network, AV, and cabling specialists.",
    }, 
    {
      title: "UAE Regulatory Familiarity",
      description: `${portfolioData.years}+ years of regional projects have strengthened UAE media and telecom understanding.`,
    }, 
    {
      title: "Vendor Neutral Specification",
      description: "Hardware and platform choice follows the vessel requirement without a supplier tie in.",
    }, 
    {
      title: "Documented Handover",
      description: "As built drawings and configuration records go to the operator at project completion.",
    }, 
    {
      title: "Ongoing AMC Support",
      description: "Remote diagnostics and regular updates under AMC keeps IPTV operations smooth.",
    },  
  ],
}  
export const recomData = {
    backgroundImage: "/assets/images/iptv-cruiseship/ctabanner.jpeg", 
  mobbanner: "/assets/images/iptv-cruiseship/mobctabanner.jpg", 
  tag: "",
  heading: "Planning a cabin entertainment refit \n for your next docking window?",
    highlightLast: 11,
  description: "Share your vessel particulars and cabin count with our onboard systems team. We will return with a practical approach.",
 cta: "Talk to experts", 
 }; 
 export const overviewData = {
  tag: "Overview",
  heading: "Marine IPTV Network \n Infrastructure in the UAE",
  highlightLast: 4 ,
  subhead:
    "GS IT designs and deploys unified maritime IPTV platforms that connect seamlessly into your core network infrastructure.",
 items: [
  {
    type: "card",
    icon: "Palette",
    title: "Single Point of Accountability",
    description: "One team owns the headend and the cabin devices, which keeps scope gaps from surfacing at commissioning.",
  },
  {
    type: "card",
    icon: "/assets/images/icons/usershield.svg",
    title: "Fleet Consistency Across Hulls",
    description: "The same portal layout and channel logic can be replicated on sister ships without rebuilding the design.",
  },
  {
    type: "image",
    image: "/assets/images/iptv-cruiseship/overview1.jpeg",
    title: "",
  },
  {
    type: "image",
    image: "/assets/images/iptv-cruiseship/overview2.jpeg",
    title: "",
  },
  {
    type: "card",
    icon: "HardDrive",
    title: "Content Suited to Gulf Sailings",
    description: "Channel lineups reflect the languages and viewing habits typical of passengers on Arabian Gulf itineraries.",
  },
  {
    type: "card",
    icon: "Columns3Cog",
    title: "Rollout That Fits Yard Schedules",
    description: "Installation phases are sequenced against docking windows, so cabins return to service on the planned date.",
  },
],
};
export const faqHeaderData = {
  tag: "FAQs",
  heading: "Common Question Marine IPTV Solutions",
  highlightLast:6,
  faqData: [
  {
    question: "Can a new IPTV system be installed without taking the ship out of service?",
    answer: "Partially. We complete headend configuration and portal design ashore, leaving only cabling and rack assembly for the docking period. To keep passenger accommodation active, operators on tight sailing schedules frequently phase installation deck by deck across two port calls.",
  },
  {
    question: "What happens to the system when the vessel loses satellite signal?",
    answer: "Local media servers take over without interrupting playback. Designing IPTV for marine applications means hosting film libraries, TV series, and guest portal assets on board. While live feeds drop during a satellite outage, they reconnect automatically once coverage returns.",
  },
  {
    question: "Can we keep our existing cabin televisions?",
    answer: "Yes, in many cases. Any screen equipped with a functional HDMI port can receive feeds via a compact set-top box. During our initial technical survey, we test display age and input compatibility, recommending replacement only if a screen cannot render the portal interface properly.",
  },
  {
    question: "How is guest streaming prevented from slowing operational systems?",
    answer: "Strict network segmentation prevents system slowdowns. Guest viewing traffic runs on an isolated VLAN capped at a fixed bandwidth threshold, ensuring bridge navigation and administrative operations retain full network priority. These bandwidth allocation rules are finalized alongside your IT team during design.",
  },
  {
    question: "Does the same platform serve passenger cabins and crew accommodation?",
    answer: "Yes. Operating a single ship IPTV infrastructure allows you to run distinct content profiles and permissions for different user groups. Crew quarters receive expanded language feeds and training assets, whereas passenger cabins access the branded portal, itinerary details, and billing screens.",
  },
  {
    question: "How is content handled when the vessel is in UAE waters?",
    answer: "Channel lineups conform to the licensing permissions and approvals your line already holds. Platform rules automatically toggle specific feeds based on GPS coordinates, and media libraries are audited against UAE Media Council standards prior to loading. Content rights ownership remains with the vessel operator.",
  },
  {
    question: "What do you need from us before design work can begin?",
    answer: "We start with your general arrangement drawings and a current cabin manifest. Providing details on existing network cabling, satellite bandwidth, and yard schedules accelerates the design phase of IPTV for cruises.",
  },
  {
    question: "Can onboard spending and booking options appear on the cabin screen?",
    answer: "Yes, using seamless PMS integration. Connecting the portal to your property management system lets guests check folio balances and view loyalty status directly on screen. The same interactive menu supports direct booking for shore excursions and spa appointments.",
  },
  {
    question: "Do you work across a fleet or only on single vessels?",
    answer: "Fleet-wide rollouts are standard in our workflow. Once a core platform layout is proven on an initial hull, we replicate that setup across sister vessels to speed up engineering. Most cruise IPTV deployments follow a staggered schedule across consecutive yard visits.",
  },
  {
    question: "What ongoing support is available after handover?",
    answer: "We offer long-term support through AMC agreements. These packages deliver proactive remote diagnostics, software patches, and guaranteed response timelines for maritime IPTV solutions while underway. Uncovered post-handover requests are handled on an ad-hoc basis.",
  },
],
};
 