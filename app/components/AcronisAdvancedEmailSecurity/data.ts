// Content copied unchanged from the approved HTML page (Acronis Advanced Email Security).

export const bannerData = {
  breadcrumb: { label: "Acronis Partner in Dubai", href: "/", current: "Advanced Email Security" },
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "M365", desc: "And Google Workspace mailboxes" },
      { value: "10 min", desc: "Critical response SLA" },
    ],
  },
  tag: "Acronis Advanced Email Security · Dubai, UAE",
  heading: "Stop It Before the Inbox.\nAcronis Email Security in Dubai",
  highlightLast: 5,
  description:
    "Most attacks still start with an email: a fake invoice, a lookalike domain, a link that looks safe. Acronis Advanced Email Security, powered by Perception Point, scans every message, link and attachment before it reaches your team. GS IT sets it up on Microsoft 365 or Google Workspace and handles what it catches.",
  buttons: [
    { text: "Get an email security proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
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
  tag: "How email attacks get through",
  heading: "One Click. \nOne Wire Transfer.",
  highlightLast: 3,
  subhead:
    "Built-in mail filtering catches bulk spam well. Targeted attacks are built to get past it, and finance teams are the usual target.",
  data: [
    {
      problem: "Fake invoices and CEO requests",
      problemText: "Business email compromise uses no attachment and no link, just a convincing request from a lookalike domain.",
      solution:
        "Anti-spoofing checks SPF, DKIM and DMARC records, IP reputation and display-name tricks to flag payload-less impersonation.",
    },
    {
      problem: "Links that turn malicious later",
      problemText: "A link is clean when it arrives and points somewhere dangerous an hour later.",
      solution:
        "Multiple URL reputation engines and image recognition check links, and dynamic scanning inspects the content behind them.",
    },
    {
      problem: "Attachments that hide their payload",
      problemText: "Malware is nested inside archives, documents and embedded links to slip past scanners.",
      solution:
        "Anti-evasion unpacks every file and URL into smaller parts and checks each one, with CPU-level analysis for zero-day exploits.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Layered Checks. \nEvery Message.",
  highlightLast: 2,
  subhead:
    "Advanced Email Security is an add-on pack for Acronis Cyber Protect Cloud. It protects cloud and on-premises mailboxes without changing how your team uses email.",
  data: [
    { icon: "Mail", title: "Anti-phishing", description: "URL reputation engines combined with image recognition to spot fake login pages.", outcome: "Staff never land on the fake Microsoft sign-in." },
    { icon: "ShieldCheck", title: "Anti-spoofing", description: "SPF, DKIM and DMARC checks, IP reputation and lookalike-domain detection.", outcome: "Impersonation emails get flagged, not paid." },
    { icon: "Layers", title: "Anti-evasion", description: "Recursively unpacks files and links into smaller parts and scans each one.", outcome: "Hidden payloads are found, not delivered." },
    { icon: "Cpu", title: "Zero-day detection", description: "CPU-level dynamic analysis stops advanced threats at the exploit stage.", outcome: "New attacks are caught without a signature." },
    { icon: "UserRound", title: "Incident response analysts", description: "Perception Point analysts review suspicious mail, handle false positives and release messages when needed.", outcome: "Your team is not stuck triaging quarantine." },
  ],
  cta: {
    title: "Not sure you need Advanced Email Security?",
    description:
      "Tell us what you run today. We check whether this pack fits, or whether another Acronis pack covers the gap better.",
    // Label copied unchanged from the source page; it still says "backup review".
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with",
  platforms: ["Microsoft 365", "Google Workspace", "On-premises mail servers", "Acronis Cyber Protect Cloud"],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Same Acronis Advanced Email Security either way. The difference is who watches it every day and who acts when something goes wrong.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Mail flow setup and policy tuning", "GS IT", "GS IT", true, true],
    ["Quarantine and false-positive handling", "Your IT team", "GS IT, every working day", false, true],
    ["24/7 monitoring", "Not included", "Available as an option", false, true],
    ["Incident response on reported mail", "Your IT team, with escalation", "GS IT, within SLA", false, true],
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
    "Advanced Email Security runs on the same agent and console as the rest of Acronis Cyber Protect Cloud. Add packs as your needs grow.",
  data: [
    { title: "Acronis partner hub", sub: "Managed or licence-only Acronis from GS IT", href: "/acronis-partner-dubai", hub: true },
    { title: "Cyber Protect Cloud", sub: "The base platform: backup and security in one agent", href: "/acronis-cyber-protect-cloud" },
    { title: "Advanced Backup", sub: "Continuous protection and database backup", href: "/acronis-advanced-backup" },
    { title: "Disaster Recovery", sub: "Fail over to the cloud and keep working", href: "/acronis-disaster-recovery" },
    { title: "Advanced Security + EDR", sub: "Detect, investigate and roll back attacks", href: "/acronis-security-edr" },
    { title: "Advanced DLP", sub: "Control how sensitive data leaves the business", href: "/acronis-dlp" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis Advanced Email Security: Common Questions",
  highlightLast: 6,
  subhead: "",
  faqData: [
    { question: "Doesn't Microsoft 365 already filter email?", answer: "It filters spam and known malware well. Advanced Email Security adds deeper checks for targeted attacks, such as impersonation without links, evasive attachments and zero-day exploits." },
    { question: "Which mail platforms does it support?", answer: "Microsoft 365, Google Workspace and on-premises mail servers." },
    { question: "Will it slow down our email?", answer: "Messages are scanned in seconds. Your team uses email as normal and only sees a difference when a threat is blocked." },
    { question: "Who handles false positives?", answer: "Perception Point analysts review flagged mail and can release it. On the fully managed plan, GS IT also handles quarantine requests from your staff every working day." },
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
    { text: "Get an email security proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};