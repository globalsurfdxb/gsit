// Content copied unchanged from the approved HTML page (Acronis Advanced Security + EDR).

export const bannerData = {
  breadcrumb: { label: "Acronis Partner in Dubai", href: "/", current: "Advanced Security + EDR" },
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "24/7", desc: "Monitoring available as an option" },
      { value: "10 min", desc: "Critical response SLA" },
    ],
  },
  tag: "Acronis Advanced Security + EDR · Dubai, UAE",
  heading: "Detect, Contain, Roll Back.\nAcronis EDR in Dubai",
  highlightLast: 4,
  description:
    "Antivirus tells you something was blocked. EDR tells you how the attacker got in, what they touched, and lets you undo it. Acronis Advanced Security + EDR adds detection, investigation and one-click response to Cyber Protect Cloud, with recovery on the same agent. GS IT monitors it and responds for you.",
  buttons: [
    { text: "Get an EDR proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
  points: [
    { value: "13+", desc: "Years in UAE IT" },
    { value: "1,500+", desc: "UAE clients" },
    { value: "10 min", desc: "Critical response SLA" },
    { value: "4.8/5", desc: "Google rating" },
  ],
};

export const problemData = {
  tag: "Where antivirus stops",
  heading: "Blocked Isn't \nthe Same as Solved",
  highlightLast: 4,
  subhead:
    "Modern attacks use legitimate tools and move quietly between machines. Signature antivirus misses most of that, and says nothing about what happened before it caught anything.",
  data: [
    {
      problem: "Alerts with no story",
      problemText: "An alert says a file was blocked. It does not say how it arrived, which machines it reached, or what it changed.",
      solution:
        "EDR collects forensic data and maps the attack chain against MITRE ATT&CK, with AI-generated incident summaries in plain language.",
    },
    {
      problem: "Containment takes too long",
      problemText: "By the time someone logs in to isolate a machine, the attacker has moved to the next one.",
      solution:
        "Single-click response isolates or quarantines an endpoint from the console, and automated containment can act first.",
    },
    {
      problem: "Clean-up means rebuilding",
      problemText: "After an attack, machines are often wiped and rebuilt because nobody can be sure they are clean.",
      solution:
        "Attack-specific rollback undoes the changes the attack made, and backup on the same agent covers anything rollback cannot.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "From First Alert \nto Full Recovery",
  highlightLast: 3,
  subhead:
    "Advanced Security + EDR is an add-on pack for Acronis Cyber Protect Cloud. Protection, investigation and recovery run from one agent and one console.",
  data: [
    { icon: "Radar", title: "Behaviour-based detection", description: "Machine learning spots fileless attacks, zero-days and suspicious activity, with exploit prevention and URL filtering.", outcome: "Threats that signatures miss are caught." },
    { icon: "Search", title: "Investigation and threat hunting", description: "Forensic data, event correlation, MITRE ATT&CK attack-chain views and search for indicators of compromise.", outcome: "You know what happened and where." },
    { icon: "SquareX", title: "One-click response", description: "Isolate, quarantine or remediate endpoints from the console, including full reimaging when needed.", outcome: "An infected machine is cut off in seconds." },
    { icon: "History", title: "Attack-specific rollback", description: "Reverse the exact changes an attack made, with backup on the same agent for full recovery.", outcome: "Machines come back clean without a rebuild." },
    { icon: "Eye", title: "XDR and MDR options", description: "Extend detection beyond endpoints, or add managed detection and response with 24/7 analyst coverage.", outcome: "Coverage matches your risk, not a bundle." },
  ],
  cta: {
    title: "Not sure you need Advanced Security + EDR?",
    description:
      "Tell us what you run today. We check whether this pack fits, or whether another Acronis pack covers the gap better.",
    // Label copied unchanged from the source page; it still says "backup review".
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with",
  platforms: ["Windows", "macOS", "Linux", "Microsoft 365 (with XDR)", "Cloud and on-premises"],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Same Acronis Advanced Security + EDR either way. The difference is who watches it every day and who acts when something goes wrong.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Deployment and policy tuning", "GS IT", "GS IT", true, true],
    ["Alert triage", "Your IT team", "GS IT, every working day", false, true],
    ["24/7 monitoring", "Not included", "Available as an option", false, true],
    ["Incident containment and rollback", "Your IT team, with escalation", "GS IT, within SLA", false, true],
    ["Monthly plain-language report", "Console access", "Included", false, true],
    ["Escalation to a GS IT engineer", "Available", "Included, 10-minute critical response", true, true],
    ["Billing", "Licence subscription", "One predictable monthly fee", false, false],
  ] as [string, string, string, boolean, boolean][],
  button: { text: "Compare both options for my setup", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
};

export const relatedData = {
  tag: "Acronis Cyber Protect Cloud",
  heading: "One Platform. \nEvery Acronis Pack",
  highlightLast: 3,
  subhead:
    "Advanced Security + EDR runs on the same agent and console as the rest of Acronis Cyber Protect Cloud. Add packs as your needs grow.",
  data: [
    { title: "Acronis partner hub", sub: "Managed or licence-only Acronis from GS IT", href: "/", hub: true },
    { title: "Cyber Protect Cloud", sub: "The base platform: backup and security in one agent", href: "/" },
    { title: "Advanced Backup", sub: "Continuous protection and database backup", href: "/" },
    { title: "Disaster Recovery", sub: "Fail over to the cloud and keep working", href: "/" },
    { title: "Advanced Email Security", sub: "Phishing, impersonation and zero-day protection", href: "/" },
    { title: "Advanced DLP", sub: "Control how sensitive data leaves the business", href: "/" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis Advanced Security + EDR: Common Questions",
  highlightLast: 7,
  subhead: "",
  faqData: [
    { question: "What is the difference between antivirus and EDR?", answer: "Antivirus blocks known threats. EDR watches behaviour across your endpoints, records what happened during an attack, and gives you tools to investigate, contain and roll back the damage." },
    { question: "Do we need someone watching the console?", answer: "EDR is most useful when someone acts on its alerts. On the fully managed plan, GS IT reviews alerts every working day and responds within the SLA. 24/7 monitoring is available as an option." },
    { question: "What is the difference between EDR, XDR and MDR?", answer: "EDR covers endpoints. XDR extends detection to other sources such as email and Microsoft 365. MDR adds a team of analysts who monitor and respond around the clock." },
    { question: "Does EDR replace our backup?", answer: "No. They work together on the same Acronis agent: EDR stops and rolls back the attack, and backup restores anything rollback cannot." },
  ],
};

export const getStartedData = {
  tag: "Get started",
  heading: "Find the Gaps \nBefore an Attacker Does",
  highlightLast: 4,
  subhead: "Three steps, and you leave with a clear answer whichever model you choose.",
  data: [
    { title: "Discovery call", description: "Tell us what you run, what you need to protect, and where your data must live." },
    { title: "Health review", description: "We check your current backup and security setup and show you the gaps." },
    { title: "Your proposal", description: "Managed or licence-only, scoped to your environment, with the SLA in writing." },
  ],
  buttons: [
    { text: "Get an EDR proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};