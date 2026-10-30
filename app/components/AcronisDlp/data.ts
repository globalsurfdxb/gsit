// Content copied unchanged from the approved HTML page (Acronis Advanced Disaster Recovery).

export const bannerData = {
  breadcrumb: { label: "Acronis Partner in Dubai", href: "/", current: "Disaster Recovery" },
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "Quarterly", desc: "Failover tests, documented" },
      { value: "Dubai", desc: "In-country cloud option" },
    ],
  },
  tag: "Acronis Advanced Disaster Recovery · Dubai, UAE",
  heading: "Keep Working While It's Fixed.\nAcronis Disaster Recovery in Dubai",
  highlightLast: 5,
  description:
    "A backup gets your data back. Disaster recovery gets your business running again. Acronis Advanced Disaster Recovery restarts your critical servers in the Acronis Cloud when your office or server room goes down, then moves them back when the problem is fixed. GS IT builds the plan and tests it every quarter.",
  buttons: [
    { text: "Get a disaster recovery plan", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
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
  tag: "Why recovery takes days",
  heading: "Backups Exist. \nDowntime Still Wins",
  highlightLast: 3,
  subhead:
    "Restoring servers to new hardware can take days. Most businesses only find out how long when they are already offline.",
  data: [
    {
      problem: "No hardware to restore onto",
      problemText:
        "A fire, flood or ransomware attack can take out the servers and the backups next to them. New hardware takes time to arrive.",
      solution:
        "Critical systems fail over to the Acronis Cloud, so they run there while your own hardware is replaced or rebuilt.",
    },
    {
      problem: "A recovery plan nobody has tried",
      problemText:
        "A plan written once and never tested fails in the details: wrong order, missing network settings, forgotten dependencies.",
      solution:
        "Runbooks set the order and steps for failing over several machines, and test failovers prove the plan works without touching production.",
    },
    {
      problem: "Branches that can't reach the recovered systems",
      problemText: "Servers come back in the cloud, but staff in other offices cannot connect to them.",
      solution:
        "Point-to-site access or IPsec multi-site VPN connects your offices and remote staff to the recovered systems.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Failover in Minutes. \nFailback When Ready",
  highlightLast: 3,
  subhead:
    "Advanced Disaster Recovery is an add-on pack for Acronis Cyber Protect Cloud. It turns backups into a working recovery site you do not have to build or maintain.",
  data: [
    { icon: "Cloud", title: "Failover to the cloud", description: "Production failover to the Acronis Cloud, with hybrid and Microsoft Azure recovery options. Acronis targets recovery within 15 minutes.", outcome: "Critical systems run again in minutes, not days." },
    { icon: "ListChecks", title: "Runbooks", description: "Pre-set recovery steps start several machines in the right order with one action.", outcome: "No one has to remember the sequence under pressure." },
    { icon: "CircleCheck", title: "Test failover", description: "Run a failover in an isolated network to prove it works, with no effect on production.", outcome: "You know the plan works before you need it." },
    { icon: "Network", title: "Flexible connectivity", description: "VPN-less setup, point-to-site access, IPsec multi-site VPN and custom DNS.", outcome: "Every office can reach the recovered systems." },
    { icon: "Undo2", title: "Failback", description: "Move workloads back to your own infrastructure once the incident is over.", outcome: "You return to normal without a second outage." },
  ],
  cta: {
    title: "Not sure you need Disaster Recovery?",
    description:
      "Tell us what you run today. We check whether this pack fits, or whether another Acronis pack covers the gap better.",
    // Label copied unchanged from the source page; it still says "backup review".
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with",
  platforms: ["Windows and Linux servers", "Physical machines", "VMware and Hyper-V", "Acronis Cloud", "Microsoft Azure"],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Same Acronis Disaster Recovery either way. The difference is who watches it every day and who acts when something goes wrong.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Recovery plan and runbook design", "GS IT", "GS IT", true, true],
    ["Daily backup review", "Your IT team", "GS IT, every working day", false, true],
    ["Test failover", "On request", "Quarterly, documented", false, true],
    ["Failover during an incident", "Your IT team, with escalation", "GS IT, within SLA", false, true],
    ["24/7 monitoring", "Not included", "Available as an option", false, true],
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
    "Disaster Recovery runs on the same agent and console as the rest of Acronis Cyber Protect Cloud. Add packs as your needs grow.",
  data: [
    { title: "Acronis partner hub", sub: "Managed or licence-only Acronis from GS IT", href: "/acronis-partner-dubai", hub: true },
    { title: "Cyber Protect Cloud", sub: "The base platform: backup and security in one agent", href: "/acronis-cyber-protect-cloud" },
    { title: "Advanced Backup", sub: "Continuous protection and database backup", href: "/acronis-advanced-backup" },
    { title: "Advanced Security + EDR", sub: "Detect, investigate and roll back attacks", href: "/acronis-disaster-recovery" },
    { title: "Advanced Email Security", sub: "Phishing, impersonation and zero-day protection", href: "/acronis-security-edr" },
    { title: "Advanced DLP", sub: "Control how sensitive data leaves the business", href: "/acronis-advanced-email-security" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis Disaster Recovery: Common Questions",
  highlightLast: 5,
  subhead: "",
  faqData: [
    { question: "What is the difference between backup and disaster recovery?", answer: "Backup keeps copies of your data. Disaster recovery keeps your systems running: if your servers go down, they start again in the Acronis Cloud and your team keeps working while the original hardware is fixed." },
    { question: "How fast can systems be recovered?", answer: "Acronis targets recovery within 15 minutes for systems failed over to its cloud. Actual time depends on the number and size of machines, so we measure it during your quarterly test failovers." },
    { question: "Can recovered systems run in the UAE?", answer: "Acronis operates a cloud data centre in Dubai. We confirm the right recovery location for your compliance requirements during discovery." },
    { question: "How do you test the plan?", answer: "We run a test failover every quarter in an isolated network, so production is not affected, and send you a written report of what was tested and how long it took." },
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
    { text: "Get a disaster recovery plan", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};