 
export const bannerData = {
  tag: "Trusted by UAE Organizations Since 2011",
  heading: "IT AMC services in Dubai",
  highlightLast: 2,
  description:
    "IT annual maintenance contracts built for stability and scale. Fixed pricing. No surprises. Delivered with consistent support.",
  backgroundImage: "/assets/images/itamc/banner.jpeg", 
  mobbanner: "/assets/images/itamc/banner-mob.jpg",
  buttons: [
    {
      text: "View Plans",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-primary",
      dark: true,
      href: "/",
    },
    {
      text: "Get a Free Quote",
      icon: "/assets/images/icons/fullarrow.svg",
      bgButton: "bg-white",
      dark: false,
      href: "/",
    },
  ],
}; 
export const sectionthreeData = {
  tag: "Understanding IT AMC Dubai",
  heading: "One Contract.\n Complete Peace of Mind.",
  highlightLast: 4,
  description:
    "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure running smoothly. Servers, networking, end-user devices, firewalls, and cloud platforms are maintained, monitored, and supported year around for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
};
export const videoData = {
  thumbnail: "/assets/images/itamc/video-thumb.jpeg",
videoUrl: "/assets/videos/itamc.mp4",
  // videoUrl: "https://www.youtube.com/embed/2kVbUEsn8uk?si=wc77rvXdgdY6whzA",
  label: "Watch The IT AMC Overview",
};
export const rightFitData = {
  tag: "The right fit",
  heading: "Is this IT AMC right for you?",
  highlightLast: 3,
  description: "Review your business setup and current IT challenges to see if this is the right fit. ",
};
// data/businessFitData.ts
export const businessFitData = {
  business: {
    title: "Business Fit",
    items: [
      { title: "SMEs with 5-200 users", description: "Without a fulltime internal IT team" },
      { title: "Regional branches of international companies", description: "Operating in the UAE with limited on ground IT sources" },
      { title: "Growing companies", description: "Scaling operations and needing structured IT support" },
      { title: "Multi-location businesses", description: "Requiring consistent IT across offices" },
    ],
  },
  challenges: {
    title: "Operational Challenges",
    items: [
      { title: "Frequent downtime or slow IT response", description: "Impacting productivity and business continuity" },
      { title: "Multiple vendors with no clear ownership", description: "Leading to delays, confusion, and accountability gaps" },
      { title: "Unpredictable IT costs", description: "No clarity on monthly spend or support scope" },
      { title: "Mixed environments (IT, CCTV, AV, Cloud)", description: "With fragmented management and no unified control" },
    ],
  },
  note: {
    title: "Reactive IT vs. AMC — the real cost",
    description: "An IT Annual Maintenance Contract (AMC) is a structured support agreement that keeps your entire IT infrastructure — servers, networking, end-user devices, firewalls, and cloud platforms — maintained, monitored, and supported year-round for a single predictable monthly fee. No surprise invoices, no chasing vendors, no gaps in coverage.",
  },
};

 
export const sectionFiveData = {
  tag: "The GS IT Difference",
  heading: "Beyond Basic IT. \nA Complete 360° AMC",
  highlightLast: 2,
  description: "Most AMC contracts stop at desktops and firewalls. GS IT goes further and maintains every system in your office under a single contract. One team. Four domains. Zero blind spots.",
  domains: [
    {
      domainNumber: 1,
      badge: "Covered By All Plans",
      title: "Core IT Infrastructure",
      description: "The foundation of every GS IT AMC — your full IT stack is proactively maintained with SLA-backed support.",
      items: [
        {
          icon: "User",
          title: "End-User Devices",
          description: "Desktops, laptops, workstations-setup, OS updates, fault management",
        },
        {
          icon: "Network",
          title: "Network Infrastructure",
          description: "Switches, WAPs, routers monitoring, firmware, uptime",
        },
        {
          icon: "Boxes",
          title: "Firewall & Security",
          description: "Rule reviews, health checks, threat log monitoring",
        },
        {
          icon: "Server",
          title: "Servers & Virtualization",
          description: "Physical & virtual servers patching, backup verification, monitoring",
        },
        {
          icon: "Package",
          title: "Storage & Backup",
          description: "NAS, SAN, and backup systems capacity and data integrity checks",
        },
        {
          icon: "AudioLines",
          title: "Voice & PBX",
          description: "IP phones, PBX, and UC platforms maintenance and fault response",
        },
      ],
    },
    {
      domainNumber: 2,
      badge: "Add-On Or Bundled",
      title: "ELV & Physical Security Systems",
      description: "CCTV, access control, intrusion detection, and alarm systems maintained and monitored for continuous protection.",
      items: [
        {
          icon: "Camera",
          title: "CCTV & Surveillance",
          description: "Camera health checks, footage storage, and system monitoring",
        },
        {
          icon: "DoorOpen",
          title: "Access Control",
          description: "Door controllers, card readers, and credential management",
        },
        {
          icon: "ShieldAlert",
          title: "Intrusion Detection",
          description: "Alarm panels, sensors, and monitoring integration",
        },
        {
          icon: "Siren",
          title: "Fire & Safety Systems",
          description: "Periodic testing and compliance checks",
        },
      ],
    },
    {
      domainNumber: 3,
      badge: "Add-On Or Bundled",
      title: "AV & Meeting Room Systems",
      description: "Smart meeting rooms, video conferencing, and collaboration tools kept running smoothly.",
      items: [
        {
          icon: "Monitor",
          title: "Display & Projection",
          description: "Screens, projectors, and signage maintenance",
        },
        {
          icon: "Video",
          title: "Video Conferencing",
          description: "Camera, mic, and platform integration support",
        },
        {
          icon: "Speaker",
          title: "Audio Systems",
          description: "Speakers, mixers, and room acoustics tuning",
        },
      ],
    },
    {
      domainNumber: 4,
      badge: "Add-On Or Bundled",
      title: "Managed Platforms & Cloud Portals",
      description: "Cloud infrastructure, SaaS platforms, and hybrid environments managed end-to-end.",
      items: [
        {
          icon: "Cloud",
          title: "Cloud Infrastructure",
          description: "AWS, Azure, GCP provisioning and monitoring",
        },
        {
          icon: "LayoutDashboard",
          title: "SaaS Platforms",
          description: "Microsoft 365, Google Workspace administration",
        },
        {
          icon: "Database",
          title: "Cloud Backup",
          description: "Automated backups and disaster recovery",
        },
      ],
    },
  ],
};