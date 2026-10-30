// Content copied unchanged from the approved HTML page (Acronis Partner in Dubai hub).

export const bannerData = {
  badge: {
    image: "/assets/images/acronis-advanced/acronics.png",
    alt: "Acronis Gold Service Provider",
    list: [
      { value: "20+", desc: "Acronis-certified engineers" },
      { value: "2 ways", desc: "Fully managed, or licence-only with escalation" },
      { value: "Dubai", desc: "In-country cloud storage option" },
    ],
  },
  tag: "Acronis Cyber Protect Cloud · Dubai, UAE",
  heading: "Recovery You Can Prove.\nAcronis Partner & MSP in Dubai",
  highlightLast: 6,
  description:
    "Most backups are only tested on the day something fails. We run Acronis Cyber Protect Cloud for you: checking every job, fixing every failure and testing recovery on a schedule. A ransomware hit or a dead server becomes a recovery task, not a business crisis. Prefer to run it yourself? License direct and keep your team in the console.",
  buttons: [
    { text: "Get a managed backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
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
  tag: "Why backup stacks fail",
  heading: "More Agents, \n More Ways In",
  highlightLast: 3,
  subhead:
    "Ransomware goes after your backups first. A stack of separate backup, antivirus and patch tools gives it more gaps to use, and gives your team more consoles to watch while it does.",
  data: [
    {
      problem: "Backups that fail quietly",
      problemText:
        "A job fails on Tuesday. Nobody notices until Friday, when someone needs a file restored. With three tools reporting to three consoles, failed jobs are easy to miss.",
      solution:
        "One Acronis console shows backup status, threats and patch gaps for every machine. On the managed plan, our engineers review job results every working day and fix failures before they turn into missing data.",
    },
    {
      problem: "Backups the attacker can reach",
      problemText:
        "If the backup repository sits behind the same admin credentials as everything else, an attacker encrypts or deletes it before asking for payment.",
      solution:
        "Immutable storage keeps backup copies locked against change or deletion for a set retention period. A clean restore point survives the attack.",
    },
    {
      problem: "Tools that never talk",
      problemText: "Antivirus flags an infection. Backup has no idea, and keeps copying infected files into your restore points.",
      solution:
        "Because protection and backup share one agent, backups can be scanned for malware before recovery. You restore to a clean point instead of reinfecting the machine.",
    },
    {
      problem: "Endpoint bloat",
      problemText:
        "Four agents on every laptop compete for memory, clash on updates and slow your team down. Each one is another licence and another renewal date.",
      solution:
        "One lightweight agent covers backup, disaster recovery, endpoint security, data loss prevention and patching. One vendor, one console, one renewal.",
    },
  ],
};

export const capabilitiesData = {
  tag: "Capabilities & outcomes",
  heading: "Five Pillars. \nOne Acronis Platform",
  highlightLast: 3,
  subhead:
    "Managed Acronis Cyber Protect in Dubai, built on one platform for backup, recovery, security and management. Capabilities are licensed as packs, so we scope only what your environment needs.",
  data: [
    {
      icon: "MonitorCheck",
      title: "Single-agent protection",
      description: "Backup, disaster recovery, EDR and XDR, data loss prevention and patch management run from one agent and one console.",
      outcome: "Fewer tools to license, update and watch.",
      links: [
        { label: "Cyber Protect Cloud", href: "/acronis-cyber-protect-cloud" },
        { label: "Advanced DLP", href: "/acronis-dlp" },
      ],
    },
    {
      icon: "History",
      title: "Backup and rapid recovery",
      description: "Continuous data protection for critical files, immutable storage, and Instant Restore, which runs a failed server as a virtual machine straight from its backup.",
      outcome: "Critical systems come back while the full restore runs.",
      links: [
        { label: "Advanced Backup", href: "/acronis-advanced-backup" },
        { label: "Disaster Recovery", href: "/acronis-disaster-recovery" },
      ],
    },
    {
      icon: "Database",
      title: "Flexible storage",
      description: "Send backups to Acronis Cloud, a public cloud such as Azure or AWS, local NAS and SAN storage, or a combination of them.",
      outcome: "Storage follows your compliance rules, not the vendor's.",
      links: [{ label: "NAS solutions", href: "/nas-solutions" }],
    },
    {
      icon: "ShieldCheck",
      title: "AI-guided security",
      description: "Behavioural anti-ransomware, EDR and XDR with automated containment, vulnerability assessment, and optional managed detection and response (MDR).",
      outcome: "An infected laptop is isolated before it spreads.",
      links: [{ label: "Advanced Security + EDR", href: "/acronis-security-edr" }],
    },
    {
      icon: "Mail",
      title: "Microsoft 365 and Entra ID",
      description: "Cloud-to-cloud backup for Exchange Online, SharePoint, OneDrive and Teams, plus Entra ID users, groups and policies. Add Microsoft 365 security posture management to catch risky settings.",
      outcome: "A deleted mailbox or broken sign-in policy is a restore, not a rebuild.",
      links: [{ label: "Advanced Email Security", href: "/acronis-advanced-email-security" }],
    },
  ],
  cta: {
    title: "Not sure which packs you need?",
    description:
      "Tell us what you run today. We map it to the right Acronis packs and show you where your current backups leave gaps.",
    button: { text: "Book a backup review", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  },
  platformsLabel: "Protects the workloads you already run",
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
    "Both models run on the same Acronis platform. The difference is who checks the backups each morning, who answers the alert at 2am, and who proves recovery works.",
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
    ["Threat monitoring and response", "Your IT team", "24/7 monitoring available as an option", false, true],
    ["Patch management", "Your IT team sets and runs policies", "GS IT schedules, applies and reports", false, true],
    ["Disaster recovery testing", "On request", "Quarterly, documented", false, true],
    ["Reporting", "Console access", "Monthly plain-language report", false, true],
    ["Escalation to a GS IT engineer", "Available", "Included, 10-minute critical response", true, true],
    ["Billing", "Licence subscription", "One predictable monthly fee", false, false],
    ["Best for", "Teams with in-house capacity who want official licensing and a clean setup", "Businesses that want backup and security off their plate", false, false],
  ] as [string, string, string, boolean, boolean][],
  note: "Renewing an Acronis licence? Ask us to price both columns. Many teams find the managed plan replaces hours of weekly console work.",
  text:"Renewing an Acronis licence? Ask us to price both columns. Many teams find the managed plan replaces hours of weekly console work.",
  button: { text: "Compare both options for my setup", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
};

export const storageData = {
  tag: "Storage & data residency",
  heading: "Your Data Lives \nWhere Your Rules Say",
  highlightLast: 4,
  subhead:
    "Data residency rules differ by sector and by contract. We choose the storage destination with you during discovery, then document it so auditors can see where every backup sits.",
  data: [
    { icon: "Cloud", title: "Cloud", description: "Acronis Cloud, or a public cloud such as Microsoft Azure or AWS. Offsite by default, with no hardware for you to maintain.", fit: "Fits: distributed teams, offices without a server room" },
    { icon: "HardDrive", title: "Hybrid: local NAS plus cloud", description: "A local copy on your NAS for fast everyday restores, plus a cloud copy for disaster recovery. The 3-2-1 pattern: three copies, two media, one offsite.", fit: "Fits: most SMEs and multi-site businesses" },
    { icon: "Server", title: "On-premises", description: "Backups stay on your own NAS or SAN, inside your network, for regulated data that must not leave the building.", fit: "Fits: regulated sectors, strict client contracts" },
  ],
  residency:
    "Need in-country cloud storage? Acronis runs a Cyber Cloud data centre in Dubai, opened in 2024, and public cloud regions in the UAE are another option. We confirm which destination meets your requirements before anything is deployed.",
  links: [
    { label: "NAS & server storage", href: "/nas-solutions" },
    { label: "Cyber security solutions", href: "/cyber-security-solutions-dubai" },
  ],
};

export const whyData = {
  tag: "Why GS IT",
  heading: "One Partner. \nEvery Layer of Your IT",
  highlightLast: 5,
  subhead:
    "Backup is one layer. Your firewall, network, servers and Microsoft 365 tenant are others. We manage all of them, so the team restoring your data already knows how your environment is built.",
  data: [
    { value: "13+ years", title: "In UAE IT", description: "Over a decade supporting businesses across the UAE, from single offices to multi-site groups." },
    { value: "150+", title: "Specialists", description: "Engineers across backup, security, networking and cloud, including 20+ Acronis-certified engineers." },
    { value: "10 min", title: "Critical response", description: "A contractual response target for critical incidents, written into your SLA." },
    { value: "98%", title: "Client retention", description: "Clients stay because the service holds up when it is tested." },
  ],
  links: [
    { label: "Managed IT services (IT AMC)", href: "/it-amc-dubai" },
    { label: "Cyber security solutions", href: "/cyber-security-solutions-dubai" },
    { label: "NAS & server storage", href: "/nas-solutions" },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "Acronis MSP UAE: Common Questions",
  highlightLast: 5,
  subhead: "",
  faqData: [
    { question: "Is GS IT an authorised Acronis partner in Dubai?", answer: "Yes. GS IT is an Acronis Gold Service Provider. We supply Acronis Cyber Protect Cloud licences, design and deploy the setup, and manage it for businesses across the UAE." },
    { question: "What is the difference between an Acronis licence and managed Acronis?", answer: "The software is the same. With a licence, your IT team runs the console, checks jobs and handles failures, with GS IT available for escalation. With managed Acronis, our engineers do that work under an SLA, including patching, threat response and quarterly recovery tests, for one monthly fee." },
    { question: "Can my Acronis backups stay in the UAE?", answer: "Yes, there are several ways. Backups can stay on NAS or SAN storage in your own office, run as a hybrid of local and cloud copies, or go to cloud storage. Acronis runs a data centre in Dubai, opened in 2024. We confirm the right destination for your compliance needs during discovery, before deployment." },
    { question: "Does Acronis back up Microsoft 365 and Entra ID?", answer: "Yes. Acronis backs up Exchange Online, SharePoint, OneDrive and Teams cloud-to-cloud, with no agent to install. Microsoft Entra ID backup was added in 2026, covering users, groups and directory configuration such as conditional access policies." },
    // The source page marks this claim "[confirm migration offer]" as unverified; kept so it is not lost.
    { question: "Can you take over our existing Acronis setup or another backup tool?", answer: "Yes. We start by reviewing your current jobs, retention and restore points, then close the gaps. If you are moving from another backup product, we plan the switch so you are never without a valid restore point. [confirm migration offer]" },
  ],
};

export const getStartedData = {
  tag: "Get started",
  heading: "Would Your Backups \nSurvive Ransomware?",
  highlightLast: 2,
  subhead:
    "Find out before you need to. Three steps, and you leave with a clear answer whichever model you choose.",
  data: [
    { title: "Discovery call", description: "Tell us what you run, how much downtime you can absorb, and where your data must live." },
    { title: "Backup health review", description: "We check your current jobs, retention and restore points, and show you the gaps." },
    { title: "Your proposal", description: "Managed or licence-only, scoped to your environment, with the SLA in writing." },
  ],
  buttons: [
    { text: "Get a managed backup proposal", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquire" },
    { text: "Request an Acronis licence quote", icon: "ArrowRight", bgButton: "bg-white", dark: false, href: "#enquire" },
  ],
};

 
export const whyGsitStatsData = {
  header: {
    tag: "Why GS IT",
    heading: "One Partner.\nEvery Layer of Your IT",
    highlightLast: 5,
    subhead:
      "Backup is one layer. Your firewall, network, servers and Microsoft 365 tenant are others. We manage all of them, so the team restoring your data already knows how your environment is built.",
  },
  stats: [
    {
      value: "13+ years",
      label: "In UAE IT",
      description:
        "Over a decade supporting businesses across the UAE, from single offices to multi-site groups.",
    },
    {
      value: "150+",
      label: "Specialists",
      description:
        "Engineers across backup, security, networking and cloud, including 20+ Acronis-certified engineers.",
    },
    {
      value: "10 min",
      label: "Critical response",
      description:
        "A contractual response target for critical incidents, written into your SLA.",
    },
    {
      value: "98%",
      label: "Client retention",
      description:
        "Clients stay because the service holds up when it is tested.",
    },
  ],
  links: [
    { text: "Managed IT services (IT AMC)", href: "/managed-it-services" },
    { text: "Cyber security solutions", href: "/cyber-security-solutions" },
    { text: "NAS & server storage", href: "/nas-server-storage" },
  ],
};

export const dataResidencyData = {
  header: {
    tag: "Storage & Data Residency",
    heading: "Your Data Lives\nWhere Your Rules Say",
    highlightLast: 4,
    subhead:
      "Data residency rules differ by sector and by contract. We choose the storage destination with you during discovery, then document it so auditors can see where every backup sits.",
  },
  cards: [
    {
      icon: "Cloud",
      title: "Cloud",
      description:
        "Acronis Cloud, or a public cloud such as Microsoft Azure or AWS. Offsite by default, with no hardware for you to maintain.",
      fits: "Fits: distributed teams, offices without a server room",
    },
    {
      icon: "Network",
      title: "Hybrid: local NAS plus cloud",
      description:
        "A local copy on your NAS for fast everyday restores, plus a cloud copy for disaster recovery. The 3-2-1 pattern: three copies, two media, one offsite.",
      fits: "Fits: most SMEs and multi-site businesses",
    },
    {
      icon: "Server",
      title: "On-premises",
      description:
        "Backups stay on your own NAS or SAN, inside your network, for regulated data that must not leave the building.",
      fits: "Fits: regulated sectors, strict client contracts",
    },
  ],
  note: "Need in-country cloud storage? Acronis runs a Cyber Cloud data centre in Dubai, opened in 2024, and public cloud regions in the UAE are another option. We confirm which destination meets your requirements before anything is deployed.",
  links: [
    { text: "NAS & server storage", href: "/nas-server-storage" },
    { text: "Cyber security solutions", href: "/cyber-security-solutions" },
  ],
};
