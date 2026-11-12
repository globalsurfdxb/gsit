// Content from the revised Acronis Partner in Dubai HTML (copy update, Nov 2026).

 import { portfolioData } from "@/app/components/common/data";
export const partnerStatusData = {
  tag: "Acronis partner status",
  image: "/assets/images/acronis-advanced/acronics.png",
  alt: "Acronis Gold Service Provider",
  text: "GS IT is an Acronis Gold Service Provider in the UAE, with more than 20 Acronis-certified engineers on the team.",
};

export const bannerData = {
  form: {
    title: "Request a callback",
    subtitle: "Share your contact details and what you need, and our team will get back to you.",
    endpoint: "/api/lets-talk", // same handler as the "Let's talk" popup
    referralUrl: "https://www.gs-it.ae/acronis-partner-dubai",
    submitText: "Request callback",
    sendingText: "Sending...",
    successText: "Thank you. We have received your details and will be in touch shortly.",
    errorText: "Something went wrong. Please try again or email hello@gs-it.ae.",
    labels: { name: "Name", email: "Work email", phone: "Phone", company: "Company name", interest: "I’m interested in" },
    placeholders: { name: "Your name", email: "Your email", phone: "+971" },
    interests: ["Fully managed Acronis", "Acronis licensing / co-managed", "Backup health review", "Compare both models"],
  },
  tag: "Acronis Cyber Protect Cloud · Dubai, UAE",
  heading: "Recovery You Can Prove.\nAcronis Partner & MSP in Dubai",
  highlightLast: 6,
  description:
    "GS IT manages Acronis Cyber Protect Cloud for businesses across the UAE. Our engineers check every backup job, fix failures and test recovery each quarter, so you know your data can be restored. If your IT team prefers to manage it in-house, we supply the licences and set up the platform.",
  buttons: [
    { text: "Get a managed backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ], 
     points: [
              { value: `${portfolioData.years}+ years`, desc: "Years in UAE IT" },
              { value: `${portfolioData.clients}+`, desc: "UAE clients" },
              { value: `10 min`, desc: "Critical response SLA" },
              { value: `${portfolioData.google_score}`, desc: "Google rating" },
        ],
};

export const problemData = {
  tag: "Why backup stacks fail",
  heading: "More Agents, \n More Ways In",
  highlightLast: 3,
  subhead:
    "Running backup, antivirus and patching as separate tools means more agents to update and more consoles to check. Acronis brings them together in one agent, giving your team a single view of every device.",
  solutionLabel: "The single-agent fix",
  data: [
    {
      problem: "Backup failures go unnoticed",
      problemText: "With alerts spread across three consoles, a failed backup job can go unnoticed for days, until someone needs a restore.",
      solutionTitle: "Every alert in one console",
      solution: "One console shows backup, security and patch status. On managed plans, our engineers check it every working day.",
    },
    {
      problem: "Attackers can delete your backups",
      problemText: "If backups use the same admin login as your other systems, an attacker who gets access can encrypt or delete them too.",
      solutionTitle: "Backups locked against deletion",
      solution: "Immutable storage stops anyone changing or deleting backup copies for a set period, so a clean copy stays available.",
    },
    {
      problem: "Restores bring malware back",
      problemText: "Antivirus and backup tools work separately, so backups can copy infected files into your restore points without warning.",
      solutionTitle: "Malware scans before recovery",
      solution: "Security and backup run on the same agent, so backups can be checked for malware before you restore them to a device.",
    },
    {
      problem: "Too many agents on each device",
      problemText: "Separate agents slow down laptops and cause update conflicts, and each tool adds another licence and renewal to manage.",
      solutionTitle: "One agent for every task",
      solution: "One lightweight agent handles backup, disaster recovery, security, DLP and patching, with one vendor and one console.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Five Pillars. \nOne Acronis Platform",
  highlightLast: 3,
  subhead:
    "Acronis Cyber Protect Cloud combines data protection and cybersecurity on one platform. As your managed Acronis partner in Dubai, we license only the packs your business needs and set them up for you.",
  data: [
    {
      icon: "MonitorCheck",
      title: "Single-agent protection",
      description: "Backup, disaster recovery, EDR and XDR, data loss prevention and patching all run from a single agent and one console.",
      outcome: "You manage fewer tools to license, update and monitor.",
      links: [
        { label: "Cyber Protect Cloud", href: "/acronis-cyber-protect-cloud" },
        { label: "Advanced DLP", href: "/acronis-dlp" },
      ],
    },
    {
      icon: "History",
      title: "Backup and rapid recovery",
      description: "Continuous data protection and immutable storage keep files safe, and Instant Restore runs failed servers from backup.",
      outcome: "Critical servers run again before the restore finishes.",
      links: [
        { label: "Advanced Backup", href: "/acronis-advanced-backup" },
        { label: "Disaster Recovery", href: "/acronis-disaster-recovery" },
      ],
    },
    {
      icon: "Database",
      title: "Flexible storage",
      description: "Store backups in Acronis Cloud, a public cloud such as Azure or AWS, local NAS or SAN storage, or a mix of these.",
      outcome: "Backups are stored where your compliance rules require.",
      links: [{ label: "NAS solutions", href: "/nas-storage" }],
    },
    {
      icon: "ShieldCheck",
      title: "AI-guided security",
      description: "Behaviour-based anti-ransomware, EDR and XDR contain threats automatically, with vulnerability checks and optional MDR.",
      outcome: "Infected devices are isolated before malware can spread.",
      links: [{ label: "Advanced Security + EDR", href: "/acronis-security-edr" }],
    },
    {
      icon: "Mail",
      title: "Microsoft 365 and Entra ID",
      description: "Backs up Exchange Online, SharePoint, OneDrive, Teams and Entra ID. An optional add-on flags risky M365 settings.",
      outcome: "Deleted mailboxes and policies can be restored quickly.",
      links: [{ label: "Advanced Email Security", href: "/acronis-advanced-email-security" }],
    },
  ],
  cta: {
    title: "Not sure which packs you need?",
    description:
      "Tell us which systems you run today. We will match them to the right Acronis packs and point out any gaps in your current backups.",
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Works with the systems you already run",
  platforms: [
    "Windows and macOS endpoints",
    "Windows and Linux servers",
    "VMware, Hyper-V and Nutanix",
    "Microsoft 365",
    "Azure and AWS workloads",
  ],
};

export const modelsData = {
  tag: "Engagement models",
  heading: "Licence It, \nor Have Us Run It",
  highlightLast: 5,
  subhead:
    "Both models use the same Acronis platform. The difference is who does the daily work of reviewing backup jobs, responding to alerts and testing recovery: your IT team or GS IT engineers.",
  columns: [
    { title: "What's included", sub: "" },
    { title: "Licensing & co-managed", sub: "For in-house IT teams" },
    { title: "GS IT fully managed", sub: "Acronis MSP model" },
  ],
  // [feature, co-managed, managed, co-managed ticked?, managed ticked?]
  rows: [
    ["Acronis Cyber Protect Cloud licensing", "Included", "Included", true, true],
    ["Architecture design and initial deployment", "Included", "Included", true, true],
    ["Day-to-day console management", "Your IT team", "GS IT engineers", false, false],
    ["Backup job review", "Your IT team", "Every working day", false, true],
    ["Failed-job remediation", "Your IT team, with escalation to GS IT", "GS IT, within SLA", false, true],
    ["Threat monitoring and response", "Your IT team", "Threat response included; 24/7 monitoring available as an add-on", false, true],
    ["Patch management", "Your IT team sets and runs policies", "GS IT schedules, applies and reports", false, true],
    ["Disaster recovery testing", "Your IT team, or GS IT on request", "Quarterly, documented", false, true],
    ["Reporting", "Through the Acronis console", "Monthly report in plain language", false, true],
    ["Escalation to a GS IT engineer", "Available", "Included, with 10-minute critical response", true, true],
    ["Billing", "Licence subscription", "One predictable monthly fee", false, false],
    ["Best for", "In-house IT teams that want official licences and an expert setup", "Businesses without the time or staff to manage backup and security themselves", false, false],
  ] as [string, string, string, boolean, boolean][],
  note: "If your Acronis licence is due for renewal, we can quote both models so you can compare them. Many teams find the managed plan saves them several hours of console work each week.",
  text:"If your Acronis licence is due for renewal, we can quote both models so you can compare them. Many teams find the managed plan saves them several hours of console work each week.",
  button: { text: "Compare both options for my setup", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
};

export const storageData = {
  tag: "Storage & data residency",
  heading: "Your Data Lives \nWhere Your Rules Say",
  highlightLast: 4,
  subhead:
    "Your sector, client contracts and data residency rules decide where backups can be stored. We agree the location with you during discovery and record it, so auditors can see where each backup is kept.",
  data: [
    { icon: "Cloud", title: "Cloud", description: "Backups go offsite to Acronis Cloud or a public cloud such as Azure or AWS, with no hardware to manage.", fit: "Best for: distributed teams and offices without a server room" },
    { icon: "HardDrive", title: "Hybrid: local NAS plus cloud", description: "A NAS copy gives fast local restores, and a cloud copy stays offsite as part of the 3-2-1 rule.", fit: "Best for: most SMEs and multi-site businesses" },
    { icon: "Server", title: "On-premises", description: "Backups stay on your own NAS or SAN inside your network, for data that must not leave your premises.", fit: "Best for: regulated sectors and strict client contracts" },
  ],
  residency:
    "If your data must stay in the UAE, you can use the Acronis Cyber Cloud data centre in Dubai, open since 2024, or a public cloud region in the UAE. We confirm the right option with you before deployment.",
  links: [
    { label: "NAS & server storage", href: "/nas-storage" },
    { label: "Cyber security solutions", href: "/cyber-security" },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One Partner. \nEvery Layer of Your IT",
  highlightLast: 5,
  subhead:
    "Besides backup, GS IT manages firewalls, networks, servers, and Microsoft 365. Our recovery engineers bring deep, hands-on knowledge of these core business systems to every restore.",
  data: [
    { value: `${portfolioData.years}+ years`, title: "In UAE IT", description: "Supporting single-office and multi-site businesses." },
    { value: `${portfolioData.clients}+`, title: "Specialists", description: "Engineers in backup, security, network and cloud." },
    { value: `10 min`, title: "Critical response", description: "Your SLA sets the response time for critical issues." },
    { value: `${portfolioData.google_score}`, title: "Client retention", description: "Nearly all clients renew because the service is reliable." },
  ], 
  links: [
    { label: "Managed IT services (IT AMC)", href: "/it-amc-dubai" },
    { label: "Cyber security solutions", href: "/cyber-security" },
    { label: "NAS & server storage", href: "/nas-storage" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis MSP UAE: Common Questions",
  highlightLast: 5,
  subhead: "",
  faqData: [
    { question: "Is GS IT an authorised Acronis partner in Dubai?", answer: "Yes. GS IT is an Acronis Gold Service Provider. We supply Acronis Cyber Protect Cloud licences, and we design, deploy and manage Acronis setups for businesses across the UAE." },
    { question: "What is the difference between an Acronis licence and managed Acronis?", answer: "Both use the same software. With a licence, your IT team runs the console, monitors backup jobs and fixes failures, and can escalate issues to GS IT. With managed Acronis, our engineers do this work under an SLA, including patching, threat response and quarterly recovery tests, for one monthly fee. 24/7 threat monitoring is available as an add-on." },
    { question: "Can my Acronis backups stay in the UAE?", answer: "Yes. You can keep backups on NAS or SAN storage in your office, use a hybrid of local and cloud copies, or store them in the cloud, including the Acronis data centre in Dubai that opened in 2024. A hybrid setup follows the 3-2-1 rule: three copies of your data, on two types of media, with one kept offsite. We confirm the right option for your compliance needs during discovery, before deployment." },
    { question: "Does Acronis back up Microsoft 365 and Entra ID?", answer: "Yes. Acronis backs up Exchange Online, SharePoint, OneDrive and Teams directly from the cloud, with no agent to install. Microsoft Entra ID backup, added in 2026, covers users, groups and directory settings such as conditional access policies." },
    // The source page marks this claim "[confirm migration offer]" as unverified; kept so it is not lost.
    { question: "Can you take over our existing Acronis setup or another backup tool?", answer: "Yes. We first review your existing backup jobs, retention settings and restore points, then fix any gaps. If you are moving from another backup product, we plan the migration so you always have a valid restore point. [confirm migration offer]" },
  ],
};

export const getStartedData = {
  tag: "Get started",
  heading: "Would Your Backups \nSurvive Ransomware?",
  highlightLast: 2,
  subhead:
    "A backup review shows how well your current setup would recover from an attack or system failure. The process has three steps and ends with a clear recommendation for licensing or full management.",
  data: [
    { title: "Discovery call", description: "Tell us what systems you run, how much downtime you can accept and where your data must be stored." },
    { title: "Backup health review", description: "We check your current backup jobs, retention settings and restore points, and show you any gaps." },
    { title: "Your proposal", description: "You receive a managed or licence-only proposal scoped to your environment, with the SLA in writing." },
  ],
  buttons: [
    { text: "Get a managed backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
  ],
  panel: {
    title: "Start with a conversation",
    text: "Tell us about your systems and any concerns you have. We will show you where the gaps are and which model suits your business.",
    checklist: [
      "Acronis Gold Service Provider",
      "20+ Acronis-certified engineers",
      "10-minute critical response on managed plans",
      "Quarterly recovery testing on managed plans",
    ],
  },
};

 
export const whyGsitStatsData = {
  header: {
    tag: "Why GS IT",
    heading: "One Partner.\nEvery Layer of Your IT",
    highlightLast: 5,
    subhead:
      "Besides backup, GS IT manages firewalls, networks, servers, and Microsoft 365. Our recovery engineers bring deep, hands-on knowledge of these core business systems to every restore.",
  },
  stats: [
    {
      value:   `${portfolioData.years}+ years`,
      label: "In UAE IT",
      description:
        "Supporting single-office and multi-site businesses.",
    },
    {
      value: `${portfolioData.employees}+`,
      label: "Specialists",
      description:
        "Engineers in backup, security, network and cloud.",
    },
    {
      value: "10 min",
      label: "Critical response",
      description:
        "Your SLA sets the response time for critical issues.",
    },
    {
      value: "98%",
      label: "Client retention",
      description:
        "Nearly all clients renew because the service is reliable.",
    },
  ],
  links: [
    { text: "Managed IT services (IT AMC)", href: "/it-amc-dubai" },
    { text: "Cyber security solutions", href: "/cyber-security" },
    { text: "NAS & server storage", href: "/nas-storage" },
  ],
};

export const dataResidencyData = {
  header: {
    tag: "Storage & Data Residency",
    heading: "Your Data Lives\nWhere Your Rules Say",
    highlightLast: 4,
    subhead:
      "Your sector, client contracts and data residency rules decide where backups can be stored. We agree the location with you during discovery and record it, so auditors can see where each backup is kept.",
  },
  cards: [
    {
      icon: "Cloud",
      title: "Cloud",
      description:
        "Backups go offsite to Acronis Cloud or a public cloud such as Azure or AWS, with no hardware to manage.",
      fits: "Best for: distributed teams and offices without a server room",
    },
    {
      icon: "Network",
      title: "Hybrid: local NAS plus cloud",
      description:
        "A NAS copy gives fast local restores, and a cloud copy stays offsite as part of the 3-2-1 rule.",
      fits: "Best for: most SMEs and multi-site businesses",
    },
    {
      icon: "Server",
      title: "On-premises",
      description:
        "Backups stay on your own NAS or SAN inside your network, for data that must not leave your premises.",
      fits: "Best for: regulated sectors and strict client contracts",
    },
  ],
  note: "If your data must stay in the UAE, you can use the Acronis Cyber Cloud data centre in Dubai, open since 2024, or a public cloud region in the UAE. We confirm the right option with you before deployment.",
  links: [
    { text: "NAS & server storage", href: "/nas-storage" },
    { text: "Cyber security solutions", href: "/cyber-security" },
  ],
};
