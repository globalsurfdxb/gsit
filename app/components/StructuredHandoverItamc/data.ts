 
   export const switchingHeroData = {
  tag: "Switching IT AMC Providers",
  heading: "Unhappy with\nYour Current IT AMC?\nSwitching Is\nEasier Than You Think.",
  highlightLast: 6, // last 6 words: "Switching Is Easier Than You Think."
  desc: "If your current contract is not working, you do not have to wait it out or start from zero. GS IT runs the entire handover, from assessment to first day of support, so your team keeps working the whole way through.",

  points: [
    "No obligation to switch",
    "No gap in support",
    "One engineer owns the switch",
  ],

  buttons: [
    {
      text: "Explore our plans",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Talk to <uppercase>AMC</uppercase> experts",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],

  form: {
    title: "Request a Call Back",
    subtitle: "Let’s discuss your IT support needs.",
    endpoint: "/api/callback",
    submitText: "Request Call Back",
    sendingText: "Sending...",
    successText: "Thanks, we will call you back shortly.",
    errorText: "Something went wrong. Please try again.",
    labels: {
      name: "Full name",
      company: "Company",
      email: "Work email",
      phone: "Phone",
      contract: "Current contract ends (optional)",
      users: "Number of users",
      usersPlaceholder: "Select Range",
      comment: "What Isn’t Working Today? (optional)",
      commentPlaceholder: "eg: Slow response times, repeat network issues...",
    },
    userRanges: [
      { value: "0-9", label: "0-10" },
      { value: "10-24", label: "10-15" },
      { value: "25-49", label: "15-40" },
      { value: "50-100", label: "40-100" },
      { value: "100-250", label: "100-250" },
      { value: "250 or more", label: "250 or more" },
      { value: "Multi-site / enterprise", label: "Multi-site / enterprise" },
    ],
  },
}; 
 
export const SectionHeaderData = {
  tag: "Signs It's Time",
  heading: "A Weak AMC Costs More \n Than the Contract Fee.",
  highlightLast: 4,
  subhead: "Few businesses switch because of one bad week. They switch after months of small failures that quietly add up to lost working hours.",
  servicesData: [
  {
    icon: "ClockFading",
    title: "Slow Response & Resolution",
    description: "Unresolved tickets stack up while employees sit idle waiting for assistance.",
    href: "#",
    featured: true,
  },
  {
    icon: "RefreshCw",
    title: "Repeat Faults",
    description: "System issues keep recurring when root causes are not properly addressed.",
    href: "#",
    featured: false,
  },
  {
    icon: "FileXCorner",
    title: "Visits Without Reports",
    description: "Field technicians leave site premises without providing detailed service logs.",
    href: "#",
    featured: false,
  },
  {
    icon: "UserX",
    title: "No Preventive Care",
    description: "Engineers only appear after something breaks, never before.",
    href: "#",
    featured: false,
  },
  {
    icon: "Receipt",
    title: "Unexpected Parts Bills",
    description: "Extra hardware charges are imposed despite the initial claims of full coverage.",
    href: "#",
    featured: false,
  },
  {
    icon: "/assets/images/icons/notebookdot.svg",
    title: "Locked Records",
    description: "Vital network details remain locked away without internal access for teams.",
    href: "#",
    featured: false,
  },
  {
    icon: "ListTodo",
    title: "Silent Renewals",
    description: "Agreements roll over automatically without thorough service quality reviews.",
    href: "#",
    featured: false,
  },
  {
    icon: "OctagonAlert",
    title: "Vendor Blame",
    description: "Network, AV and cloud vendors point at each other.",
    href: "#",
    featured: false,
  },
],
cta: { 
  title: "Seeing these signs in your current AMC?",
  description:"Talk to our engineers about the faults your team faces most.",
  button:'Book an assessment',
  background:"bg-[#F5F9FC]", 
}
};
 
export const handoverData = {
  tag: "The Handover",
  heading: "Four Steps.\nZero Days Without Support.",
  highlightLast: 4, 
  subhead: "Every switch follows the same plan. At each stage you know what happens, who owns it, and what you receive.",
   
  whatWeDoLabel: "What We Do",
  youReceiveLabel: "You Receive",
  steps: [
    {
      number: "01",
      title: "Free Environment Assessment",
      description:
        "Before you commit to anything, we assess your current IT setup at no cost, so you know exactly what you are moving to.",
      featured: true,
      whatWeDo: [
        "Review servers, network, endpoints, security and backups",
        "Compare your current contract scope with what you actually use",
        "Flag risks to fix before handover: expired licences, untested backups, single points of failure",
      ],
      receive: {
        text: "A written assessment with findings, risks and a proposed AMC scope.",
        note: "Typical turnaround: 1 business day",
      },
    },
    {
      number: "02",
      title: "We Handle the Documentation",
      description:
        "Our team reviews and takes over your infrastructure records, asset inventory and system documentation. You will not need to start from scratch.",
      featured: false,
      whatWeDo: [
        "Prepare the handover request to your outgoing provider, for you to authorise",
        "Verify every asset, licence and admin account against your live environment",
        "Rebuild what is missing: network diagrams, asset register, renewal calendar",
      ],
      receive: {
        text: "A verified asset register and documentation pack your business holds a copy of.",
        note: "No more records locked inside one provider.",
      },
    },
    {
      number: "03",
      title: "No Service Gaps",
      description:
        "We coordinate the transition around your existing contract’s notice period, so your business is never left without support during the switch.",
      featured: false,
      whatWeDo: [
        "Map your current notice period and renewal date",
        "Set a go-live date that lands before your current cover ends",
        "Carry over open tickets and in-flight work, so nothing is dropped",
      ],
      receive: {
        text: "A dated transition plan with one clear go-live day.",
        note: "Your current provider stays responsible until that day.",
      },
    },
    {
      number: "04",
      title: "Dedicated Onboarding Engineer",
      description:
        "One engineer manages your handover from first call to first day of active support, so nothing falls through the cracks.",
      featured: false,
      whatWeDo: [
        "Act as the single contact for your team and the outgoing provider",
        "Brief your staff on the new support desk and escalation path",
        "Stay close through the first 30 days to confirm stability",
      ],
      receive: {
        text: "One name and one person accountable for the whole switch.",
        note: "No repeating yourself to a new person each week.",
      },
    },
  ],
};
export const timelineData = {
  tag: "The Timeline",
  heading: "From First Call\nto First Day of Support.",
  highlightLast: 5, // "to First Day of Support."
  subhead: "Your notice period sets the pace. We plan backwards from it, so the switch happens on your date, not in a rush.",
  steps: [
    {
      number: "01",
      label: "Week 1",
      title: "Assessment",
      description: "Site review, findings and a proposed scope.",
    },
    {
      number: "02",
      label: "Week 2 to 3",
      title: "Documentation",
      description: "Records transferred, verified and rebuilt.",
    },
    {
      number: "03",
      label: "Notice Period",
      title: "Parallel Preparation",
      description: "Access, monitoring and support set up in the background.",
    },
    {
      number: "04",
      label: "Go-Live Day",
      title: "Active Support",
      description: "Your team calls GS IT. Everything else is already in place.",
    },
    {
      number: "05",
      label: "Day 30",
      title: "Stability Review",
      description: "What was fixed, what is next, and how service is tracking.",
    },
  ],
  
 cta: { 
  title: "Unsure what your old provider holds?",
  description:"Our engineers can list what to request before you serve notice.",
  button:'Book an assessment',
  background:"bg-[#F5F9FC]", 
  },
};
 
 export const assetsData = {
  tag: "Learning Environments",
  heading: "We Design Around Learning\nOutcomes, Not Equipment Lists.",
  highlightLast: 4, // "Outcomes, Not Equipment Lists."
  subhead: "Each teaching space has its own demands. Here is how we approach the five most common, and what goes into each.",
  items: [
    {
      icon: "FolderOpen",
      title: "Asset Inventory",
      description: "Hardware site locations, asset serial numbers, warranty terms.",
    },
    {
      icon: "HardDrive",
      title: "Backups",
      description: "Automated backup schedules, retention policies, restore logs.",
    },
    {
      icon: "Network",
      title: "Network Maps",
      description: "Topologies, IP assignments, firewall setups, VPN access rules.",
    },
    {
      icon: "Ticket",
      title: "Open Tickets",
      description: "Pending user tickets transferring over from former support desks.",
    },
    {
      icon: "UserCog",
      title: "Admin Accounts",
      description: "Active Microsoft 365, server admin rights, firewall passwords.",
    },
    {
      icon: "Notebook",
      title: "Vendor Contacts",
      description: "Direct ISP lines, OEM support contacts, active service contracts.",
    },
    {
      icon: "ListChecks",
      title: "Licenses & Renewals",
      description: "Active software keys, domain records, upcoming renewal dates.",
    },
    {
      icon: "ShieldCheck",
      title: "Security Setup",
      description: "Antivirus controls, system patch rules, user access parameters.",
    },
  ],
}; 

export const clientSuccessData = {
  bgImage: `/assets/images/structured-handover/slider-banner.jpeg`,
  quoteIcon: `/assets/images/structured-handover/invertedcomma.svg`,
 slides: [
  {
    tags: ["Client Success", "Food Retail", "UAE"],
    number: "360°",
    numberLabel: "FULL-SCOPE COVERAGE",
    title: "One Partner.\nFull 360° Service",
    desc: "A leading international food company has trusted GS IT for over 7 years — a dedicated team delivering full 360° coverage across their Dubai offices and warehouse, spanning IT infrastructure, AV, ELV and SIRA-approved support, all under one accountable AMC.",
  },
  {
    tags: ["Client Success", "Government", "UAE"],
    number: "24/7",
    numberLabel: "COMMAND & CONTROL AV",
    title: "Complex AV.\nExperience center",
    desc: "For a UAE government client, GS IT maintains a complete, mission-critical AV environment — including a full command-and-control centre — kept operational around the clock.",
  },
  {
    tags: ["Client Success", "Real estate", "UAE"],
    number: "13",
    numberLabel: "Years | Zero downtime",
    title: "13 Years of IT AMC.\nZero Critical Downtime.",
    desc: "A leading UAE real-estate company has trusted GS IT with their IT AMC for 13 consecutive years — we keep their entire IT environment running with zero critical downtime across every site.",
  },
  {
    tags: ["Client Success", "Retail outlet", "UAE"],
    number: "20+",
    numberLabel: "Outlets Managed",
    title: "20+ Outlets.\nOne IT & ELV Partner",
    desc: "For 5 years, GS IT has run the complete IT and ELV stack for a leading UAE bakery-retail brand — full IT infrastructure and SIRA-approved ELV across the head office and 20+ outlets in Dubai and across the UAE, backed by a dedicated",
  },
],
};
export const partnersData = {
  tag: " Technology partners",
  heading: "Genuine Products, \n From the Industry’s Best",
  highlightLast: 4,
};
export const logoData = [
  { src: "/assets/images/itamc/pdt1.svg", alt: "Partner 2" },
  { src: "/assets/images/itamc/pdt3.svg", alt: "Partner 3" },
  { src: "/assets/images/itamc/pdt5.svg", alt: "Partner 5" },
  { src: "/assets/images/itamc/pdt4.svg", alt: "Partner 4" },
  { src: "/assets/images/itamc/pdt2.svg", alt: "Partner 1" },
];

export const parnerpoints = [
  {
    title: "No Middleman Margins",
    description: "Direct factory sourcing without any reseller margins.",
  },
  {
    title: "Authentic Sourcing",
    description: "100% genuine products with factory warranty.",
  },
  {
    title: "One Accountable Team",
    description: "One team handles both procurement and support.",
  },
  {
    title: "Compatible Technology ",
    description: "Hardware selected to match your existing tech stack. ",
  },
  {
    title: "Faster Procurement ",
    description: "Direct partner ties skip delays and speed up delivery. ",
  },
  {
    title: "Vendor-Agnostic ",
    description: "We pick the best brands to suit your exact needs. ",
  },
];
 export const whyStayData = {
  tag: "Why Businesses Stay",
  heading: "Switch Once &\nStay Protected for Years",
  highlightLast: 4, // "Stay Protected for Years"
  subhead: "Eliminate multiple vendor gap issues through a single IT partner offering prompt ticket responses, structured handovers, proactive remote assistance, and dedicated on-site support.",
  stats: [
    { value: "360°", label: "Service Coverage" },
    { value: "24/7", label: "Remote help desk" },
    { value: "0-10 mins", label: "Initial response time" },
    { value: "1-4 Hours", label: "Critical Onsite Support" },
    { value: "98%", label: "Client retention" },
    { value: "15 min", label: "Critical response SLA" },
    { value: "1,500+", label: "UAE clients supported" },
    { value: "13+ yrs", label: "Supporting UAE businesses" },
  ],
  teamLabel: "One accountable team across",
  teamTags: ["Core IT", "ELV", "AV", "Cloud", "Cybersecurity"],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Addressing Client Concerns \n When Switching IT Contracts ",
  highlightLast:8,
 faqData: [
  {
    question: "My contract still has months to run. Should I start planning now?",
    answer:
      "Yes. Starting early leaves time to assess your setup and prepare the handover while your current cover stays active. We then set go-live to match the end of your notice period.",
  },
  {
    question: "What if my current AMC provider will not hand over passwords or records?",
    answer:
      "In most cases, the switch can still move forward. Microsoft 365 and most domain registrars offer recovery routes that return control to the account owner. We follow those routes with your written authorization and rebuild missing records from the live systems.",
  },
  {
    question: "Will I pay a penalty for leaving my current provider early?",
    answer:
      "Early exit penalties depend on the specific termination clauses in your current agreement. During our initial review, we highlight these notice terms for your attention. Your legal or procurement team must review the contract to confirm financial liabilities.",
  },
  {
    question: "Who pays to fix equipment that is already faulty when you take over?",
    answer:
      "Pre-existing faults are quoted separately before AMC coverage begins. You can choose to approve the repair or keep that specific device out of the scope until it is fixed. This keeps billing straightforward for both parties.",
  },
  {
    question: "Will users face downtime on the day support moves to GS IT?",
    answer:
      "Users experience minimal impact because the transition date is planned around your business hours. Background setups and software updates happen during off-peak windows, and any step requiring a system restart is coordinated with you in advance.",
  },
  {
    question: "Can we move only part of our IT to GS IT?",
    answer:
      "Yes, a partial takeover is possible. You can transfer specific parts of your IT setup while keeping specialized vendors or internal teams for other systems. We outline the precise scope in writing to maintain clear operational boundaries.",
  },
  {
    question: "Do you cover offices in more than one emirate?",
    answer:
      "Yes, we support multi-site businesses across all UAE emirates. Your branches share a central helpdesk and a single point of contact for routine support and escalations.",
  },
  {
    question: "Can GS IT work alongside our in-house IT staff?",
    answer:
      "Yes, the AMC can be set up to support an internal IT person. We agree in writing which tasks each side handles. Your staff keep their role and gain backup for work outside their scope.",
  },
  {
    question: "Will the AMC fee change when the contract renews?",
    answer:
      "Renewal fees are reviewed against your active user count and hardware at that time. Any changes made during the year are logged in, so you see the revised figures well before renewing.",
  },
  {
    question: "What happens if we decide to leave GS IT later?",
    answer:
      "We treat offboarding with the same care as onboarding if you ever choose to move on. All credentials, diagrams, and documentation updated during our contract remain your property. With your authorization, credentials and records can be passed to your next provider.",
  },
]
};
 
 