// Content copied unchanged from the approved HTML page (Acronis Cyber Protect Cloud).

export const bannerData = {
  breadcrumb: { label: "Acronis Partner in Dubai", href: "/acronis-partner-dubai", current: "Cyber Protect Cloud" },
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "1 agent", desc: "Backup and security together" },
      { value: "Dubai", desc: "In-country cloud storage option" },
    ],
  },
  tag: "Acronis Cyber Protect Cloud · Dubai, UAE",
  heading: "Backup and Security, One Agent.\nAcronis Cyber Protect Cloud in Dubai",
  highlightLast: 6,
  description:
    "Most businesses protect their data with three or four tools that never talk to each other. Acronis Cyber Protect Cloud puts backup, anti-ransomware, vulnerability assessment and recovery into one agent and one console. GS IT deploys it, runs it for you, or licenses it to your in-house team.",
  buttons: [
    { text: "Get a Cyber Protect Cloud proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
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
  tag: "Why tool stacks fail",
  heading: "Four Tools, \nFour Blind Spots",
  highlightLast: 3,
  subhead:
    "Every separate backup, antivirus and patch tool is another console to check and another gap an attacker can use. The cost shows up on the day you need a clean restore.",
  data: [
    {
      problem: "Nobody sees the whole picture",
      problemText:
        "Backup status lives in one console, threats in another, missing patches in a third. Problems sit unnoticed in the gaps between them.",
      solution:
        "One console shows backup health, threats and patch status for every machine, so one person can see what needs attention each morning.",
    },
    {
      problem: "Recovery that brings the malware back",
      problemText: "Restoring an infected backup puts the problem straight back on the machine.",
      solution:
        "Because security and backup share one agent, backups can be scanned for malware before recovery, so you restore to a clean point.",
    },
    {
      problem: "Unpatched software stays open",
      problemText:
        "Vulnerabilities are found by one tool and patched by another, if anyone remembers to act on the report.",
      solution:
        "Vulnerability assessment runs on the same agent, and with the Advanced Management pack the gap it finds is patched from the same console.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Everything in \nOne Agent",
  highlightLast: 2,
  subhead:
    "Cyber Protect Cloud is the base platform. Advanced packs add depth where you need it, so we scope only what your environment requires.",
  data: [
    { icon: "ShieldCheck", title: "AI-based anti-ransomware", description: "Behavioural detection stops known and zero-day ransomware, and rolls back files it encrypted.", outcome: "An attack is stopped before it reaches your file shares." },
    { icon: "History", title: "Fast, flexible recovery", description: "File and folder, full system, bare-metal and Instant Restore, which boots a server as a virtual machine straight from its backup.", outcome: "The right restore for the problem, not a full rebuild every time." },
    { icon: "Wrench", title: "Vulnerability assessment", description: "Find missing updates across Windows and third-party apps. Scheduled patch deployment comes with the Advanced Management pack.", outcome: "Known holes are found before they are exploited." },
    { icon: "Database", title: "Your choice of storage", description: "Acronis-hosted cloud, public cloud such as Azure or Google Cloud, private cloud, or local network storage.", outcome: "Backups sit where your compliance rules say." },
    { icon: "Lock", title: "Encryption and reporting", description: "AES-256 encryption for backups at rest and in transit, plus scheduled reports for audits.", outcome: "Auditors get evidence, not assurances." },
  ],
  cta: {
    title: "Not sure you need Cyber Protect Cloud?",
    description:
      "Tell us what you run today. We check whether this pack fits, or whether another Acronis pack covers the gap better.",
    // Label copied unchanged from the source page; it still says "backup review".
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with",
  platforms: [
    "Windows, macOS and Linux",
    "VMware vSphere and Hyper-V",
    "Microsoft 365",
    "Google Workspace",
    "Cloud workloads",
  ],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Same Acronis Cyber Protect Cloud either way. The difference is who watches it every day and who acts when something goes wrong.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Deployment and agent rollout", "GS IT", "GS IT", true, true],
    ["Daily backup and threat review", "Your IT team", "GS IT, every working day", false, true],
    ["Vulnerability review and patching", "Your IT team", "GS IT", false, true],
    ["Recovery testing", "On request", "Quarterly, documented", false, true],
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
    "Cyber Protect Cloud runs on the same agent and console as the rest of Acronis Cyber Protect Cloud. Add packs as your needs grow.",
  data: [
    { title: "Acronis partner hub", sub: "Managed or licence-only Acronis from GS IT", href: "/acronis-partner-dubai", hub: true },
    { title: "Advanced Backup", sub: "Continuous protection and database backup", href: "/acronis-advanced-backup" },
    { title: "Disaster Recovery", sub: "Fail over to the cloud and keep working", href: "/acronis-disaster-recovery" },
    { title: "Advanced Security + EDR", sub: "Detect, investigate and roll back attacks", href: "/acronis-security-edr" },
    { title: "Advanced Email Security", sub: "Phishing, impersonation and zero-day protection", href: "/acronis-advanced-email-security" },
    { title: "Advanced DLP", sub: "Control how sensitive data leaves the business", href: "/acronis-dlp" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis Cyber Protect Cloud: Common Questions",
  highlightLast: 6,
  subhead: "",
  faqData: [
    { question: "What is Acronis Cyber Protect Cloud?", answer: "It is a single platform that combines backup, recovery, anti-malware and vulnerability assessment in one agent and one management console. Advanced packs add capabilities such as EDR, disaster recovery, patch management, email security and data loss prevention." },
    { question: "Do I need the Advanced packs?", answer: "Not always. The base platform covers backup and core protection. We recommend packs only where your environment needs them, for example Advanced Disaster Recovery if a server outage would stop your business." },
    { question: "Which systems does it protect?", answer: "Windows, macOS and Linux machines, VMware and Hyper-V virtual machines, Microsoft 365, Google Workspace and cloud workloads." },
    { question: "Can GS IT manage it for us?", answer: "Yes. On the fully managed plan our engineers review backups and threats every working day, manage patching, test recovery every quarter and send a monthly report. If you prefer, we license it to your IT team and stay available for escalation." },
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
    { text: "Get a Cyber Protect Cloud proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};