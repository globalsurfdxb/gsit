// Content copied unchanged from the approved HTML page.

export const bannerData = {
  breadcrumb: { label: "Acronis Partner in Dubai", href: "/", current: "Advanced Backup" },
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "Daily", desc: "Backup jobs reviewed every working day" },
      { value: "Dubai", desc: "In-country cloud storage option" },
    ],
  },
  tag: "Acronis Advanced Backup · Dubai, UAE",
  heading: "Lose Minutes, Not a Day.\n{{Acronis Advanced Backup in Dubai}}",
  highlightLast: 4,
  description:
    "A nightly backup protects yesterday. If a server fails at 4pm, everything since then is gone. Acronis Advanced Backup adds continuous data protection, database and cluster backup, and compliance reporting to Cyber Protect Cloud. GS IT sets it up and checks every job.",
  backgroundImage: "",
  mobbanner: "",
  buttons: [
  { text: "Get an Advanced Backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire", interest: "Fully managed Acronis" },
  { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire", interest: "Licensing & co-managed" },
],
  points: [
    { value: "13+", desc: "Years in UAE IT" },
    { value: "1,500+", desc: "UAE clients" },
    { value: "10 min", desc: "Critical response SLA" },
    { value: "4.8/5", desc: "Google rating" },
  ],
};

export const problemData = {
  tag: "Where backups fall short",
  heading: "The Backup Ran. \nThe Restore Didn't.",
  highlightLast: 3,
  subhead:
    "Most backup failures are found during a restore, when it is too late to fix them. These are the gaps we see most often.",
  data: [
    {
      problem: "A day of work between backups",
      problemText: "Scheduled backups leave hours of changes unprotected. A failure late in the day takes all of it.",
      solution:
        "Continuous data protection captures changes to the files and folders you choose as they happen, between scheduled backups.",
    },
    {
      problem: "Databases backed up as plain files",
      problemText: "A file-level copy of a running database often will not restore cleanly.",
      solution:
        "Application-aware backup covers Microsoft SQL and Exchange clusters, Oracle, MariaDB, MySQL and SAP HANA, so databases restore in a consistent state.",
    },
    {
      problem: "No proof anything is protected",
      problemText: "New machines and users get added. Nobody checks whether they are in the backup plan.",
      solution:
        "The data protection map scans your environment and shows which workloads, files and users are not protected yet.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Backup Built for \nReal Recovery",
  highlightLast: 2,
  subhead:
    "Advanced Backup is an add-on pack for Acronis Cyber Protect Cloud. It extends the standard backup with the features critical systems need.",
  data: [
    { icon: "Clock", title: "Continuous data protection", description: "Changes to selected files and applications are backed up in near real time.", outcome: "A failure costs minutes of work, not a day." },
    { icon: "Database", title: "Database and cluster backup", description: "Application-aware backup for SQL Server and Exchange clusters, Oracle, MariaDB, MySQL and SAP HANA.", outcome: "Business systems come back consistent and usable." },
    { icon: "Map", title: "Data protection map", description: "Scans your environment to find unprotected workloads and files, with compliance reports.", outcome: "Gaps are found by a report, not by a failed restore." },
    { icon: "Mail", title: "Microsoft 365 and Google Workspace", description: "Back up seats up to six times a day, with groups that add new users automatically.", outcome: "A new joiner is protected from their first day." },
    { icon: "History", title: "Flexible recovery", description: "Restore a single file, an application or a full system, including to different hardware or a virtual machine.", outcome: "You restore what broke, not everything." },
  ],
  cta: {
    title: "Not sure you need Advanced Backup?",
    description:
      "Tell us what you run today. We check whether this pack fits, or whether another Acronis pack covers the gap better.",
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with",
  platforms: [
    "Windows, macOS and Linux",
    "VMware, Hyper-V and KVM",
    "SQL Server, Exchange, Oracle, SAP HANA",
    "Microsoft 365",
    "Google Workspace",
  ],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Same Acronis Advanced Backup either way. The difference is who watches it every day and who acts when something goes wrong.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Backup plan design and retention policy", "GS IT", "GS IT", true, true],
    ["Daily job review", "Your IT team", "GS IT, every working day", false, true],
    ["Failed-job remediation", "Your IT team, with escalation", "GS IT, within SLA", false, true],
    ["Restore testing", "On request", "Quarterly, documented", false, true],
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
    "Advanced Backup runs on the same agent and console as the rest of Acronis Cyber Protect Cloud. Add packs as your needs grow.",
  data: [
    { title: "Acronis partner hub", sub: "Managed or licence-only Acronis from GS IT", href: "/acronis-partner-dubai", hub: true },
    { title: "Cyber Protect Cloud", sub: "The base platform: backup and security in one agent", href: "/acronis-cyber-protect-cloud" },
    { title: "Disaster Recovery", sub: "Fail over to the cloud and keep working", href: "/acronis-disaster-recovery" },
    { title: "Advanced Security + EDR", sub: "Detect, investigate and roll back attacks", href: "/acronis-security-edr" },
    { title: "Advanced Email Security", sub: "Phishing, impersonation and zero-day protection", href: "/acronis-advanced-email-security" },
    { title: "Advanced DLP", sub: "Control how sensitive data leaves the business", href: "/acronis-dlp" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis Advanced Backup: Common Questions",
  highlightLast: 5,
  subhead: "",
  faqData: [
    { question: "What does Advanced Backup add to standard Acronis backup?", answer: "Continuous data protection, application-aware backup for database and mail clusters, the data protection map with compliance reporting, and more frequent Microsoft 365 and Google Workspace backups." },
    { question: "Where are the backups stored?", answer: "On your own NAS or SAN, in the cloud, or both. Cloud options include Acronis-hosted storage, including the Acronis data centre in Dubai, and public clouds such as Microsoft Azure. We agree the destination with you during discovery." },
    { question: "How often are backups checked?", answer: "On the fully managed plan, our engineers review backup jobs every working day and fix failures within the SLA. Restores are tested every quarter and documented." },
    { question: "Can you take over our existing Acronis backups?", answer: "Yes. We review your current plans, retention and restore points, then close the gaps before changing anything." },
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
    { text: "Get an Advanced Backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};