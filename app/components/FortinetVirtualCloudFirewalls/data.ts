import type { BentoData } from "@/app/components/BarcoPartnerDubai/Sections/OverviewBento";
import type { FeatureGridData } from "@/app/components/CiscoProduct/Sections/FeatureGrid";
import type { OptionCardsData } from "@/app/components/FortinetFirewallProducts/Sections/OptionCards";
import type { PlatformChipsData } from "@/app/components/FortinetFirewallProducts/Sections/PlatformChips";
import type { BundleCardsData } from "@/app/components/FortinetFirewallProducts/Sections/BundleCards";
import { enquiryHref as enq, type EnquiryTabsData } from "@/app/components/FortinetFirewallProducts/Sections/enquiry";

// Generated from 02-Virtual-and-Cloud-Firewalls/fortinet-virtual-cloud-firewalls.html (Fortinet pages pack)

const IMG = "/assets/images/fortinet/virtual-cloud-firewalls";
const BANNER = `${IMG}/fortigate-vm-hero.webp`;
// Buttons open a tab of the enquiry form at the bottom of the page (src: which button, sent with the form)
const primary = (text: string, href: string) => ({ text, icon: "ArrowRight", bgButton: "bg-primary", dark: true, href });
const outline = (text: string, href: string) => ({ text, icon: "", bgButton: "bg-white", dark: false, href });

export const seo = {
  title: "FortiGate VM Virtual and Cloud Firewalls in Dubai | GS IT",
  description:
    "FortiGate VM firewalls from 1 to 32 vCPU for Azure, AWS, Google Cloud, VMware and Hyper-V, plus FortiFlex, from GS IT in Dubai.",
  ogTitle: "FortiGate VM Virtual and Cloud Firewalls | GS IT",
  ogDescription:
    "The same FortiGate protection for Azure, AWS, Google Cloud and private clouds, sized, licensed and supported by GS IT.",
  image: BANNER,
};

export const bannerData = {
  badge: {
    logo: `${IMG}/fortinet-authorized-partner.webp`,
    alt: "Fortinet Authorized Partner",
    wide: true,
  },
  crumbs: [
    { label: "GS IT Store", href: "/" },
    { label: "Firewalls" },
    { label: "Fortinet", href: "/fortinet-firewall-products" },
    { label: "Virtual and cloud firewalls" },
  ],
  tag: "Fortinet Authorized Partner",
  heading: "FortiGate VM\n virtual and cloud firewalls",
  highlightLast: 4,
  description:
    "The same FortiGate protection for your private cloud, Azure, AWS and Google Cloud workloads, as a VM you run or as Fortinet's managed CNF service. GS IT sizes it, picks the licence model that fits how you run it, then deploys and supports it.",
  backgroundImage: BANNER,
  mobbanner: BANNER,
  buttons: [
    { text: "Compare VM sizes", icon: "ArrowDown", bgButton: "bg-primary", dark: true, href: "#sizes" },
    outline("Get a quote", enq("quote", { src: "Hero: Get a quote" })),
  ],
  points: [
    { value: "1 to 32", desc: "vCPU licences, plus unlimited" },
    { value: "50 Gbps", desc: "throughput on VM32" },
    { value: "5", desc: "public clouds supported" },
    { value: "3", desc: "ways to license" },
  ],
};

export const whyData: BentoData = {
  tag: "Why FortiGate VM",
  heading: "One firewall policy\n from office to cloud",
  highlightLast: 4,
  subhead:
    "Workloads moved to the cloud. The security policy often did not follow. FortiGate VM runs the same FortiOS as your hardware firewalls, so one rule set protects the office, the data centre and every cloud.",
  data: [
    {
      variant: "light",
      big: "vSPU",
      title: "Accelerated in software",
      dim: "Faster than a standard VM",
      text: [
        "Fortinet's vSPU and vNP technology moves packet processing out of the kernel, using DPDK, so the VM keeps its throughput with security switched on.",
      ],
    },
    {
      variant: "light",
      title: "Built for automation",
      dim: "Deploy as code",
      text: [
        "Zero-touch provisioning, a REST API and JSON-RPC let your team deploy and change firewalls from the same pipelines that build the rest of your cloud.",
      ],
    },
    {
      variant: "dark",
      title: "Native cloud integration",
      dim: "Scales with your traffic",
      text: [
        "FortiGate VM connects to Azure Security Center, AWS Security Hub and Google Cloud Security Command Center.",
        "Elastic scaling adds capacity when traffic peaks, so you are not paying for peak capacity all year.",
      ],
    },
  ],
};

const vmRow = (licence: string, vcpu: string, throughput: string) => ({
  cells: [licence, vcpu, throughput],
  link: { text: "Get a quote", href: enq("quote", { model: licence, src: `Sizes: ${licence}` }) },
});

export const sizesData: OptionCardsData = {
  tag: "Options and sizes",
  heading: "Pick the option,\n then the size",
  highlightLast: 3,
  subhead:
    "Run the firewall yourself as a VM, let Fortinet run it for you with CNF, or license your VMs through FortiFlex points.",
  data: [
    {
      kicker: "You run it",
      title: "FortiGate VM",
      text: "A virtual FortiGate you deploy in your cloud or data centre, licensed by the number of vCPUs. Full control of the firewall, on any supported platform.",
      fit: { label: "Best for", text: "private clouds, multi-cloud and SD-WAN hubs." },
      link: { text: "See VM sizes", href: "#vmsizes" },
    },
    {
      kicker: "Fortinet runs it",
      title: "FortiGate CNF",
      text: "Fortinet's cloud-native firewall service for AWS and Azure. Fortinet manages the infrastructure, scaling and patching, and you manage the policy. One instance can protect several AWS accounts or Azure subscriptions in a region.",
      fit: { label: "Best for", text: "AWS and Azure teams that do not want to run firewall VMs." },
      link: { text: "Ask about FortiGate CNF", href: enq("quote", { model: "FortiGate CNF", src: "Options: Ask about CNF" }) },
    },
    {
      kicker: "Points-based licence",
      title: "FortiFlex",
      text: "Run your VMs on FortiFlex points instead of a fixed licence. Points are used daily according to each VM's vCPU count and services, so you can resize or add VMs without a new purchase.",
      fit: { label: "Best for", text: "estates that grow or change often." },
      link: { text: "Ask about FortiFlex", href: enq("flex", { src: "Options: Ask about FortiFlex" }) },
    },
  ],
  table: {
    id: "vmsizes",
    title: "FortiGate VM sizes",
    columns: ["Licence", "vCPU", "Throughput", "Enquire"],
    rows: [
      vmRow("FortiGate-VM01", "1", "12 Gbps"),
      vmRow("FortiGate-VM02", "2", "15 Gbps"),
      vmRow("FortiGate-VM04", "4", "28 Gbps"),
      vmRow("FortiGate-VM08", "8", "33 Gbps"),
      vmRow("FortiGate-VM16", "16", "36 Gbps"),
      vmRow("FortiGate-VM32", "32", "50 Gbps"),
      vmRow("FortiGate-VMUL", "Unlimited", "Sized on request"),
    ],
    note: "Throughput as published by Fortinet. Real figures depend on the hypervisor or cloud instance, the CPU and the security services you enable. Each size is available as a standard or V-series licence. On FortiFlex, a VM is set up by vCPU count and uses points per day instead. FortiGate CNF is not sized by vCPU: Fortinet scales the service for you.",
  },
};

export const platformsData: PlatformChipsData = {
  tag: "Where it runs",
  heading: "Public cloud or\n your own data centre",
  highlightLast: 4,
  subhead: "One licence model and one policy, whichever platform your workloads sit on today, and wherever they move next.",
  data: [
    {
      icon: '<path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z"/>',
      title: "Public clouds",
      text: "Deploy from the cloud marketplace or bring your own licence.",
      chips: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud", "IBM Cloud"],
    },
    {
      icon: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
      title: "Private cloud and hypervisors",
      text: "Protect virtualised data centres and segment traffic between workloads.",
      chips: ["VMware ESXi and vSphere", "VMware NSX-T", "Microsoft Hyper-V", "KVM", "Xen and XenServer", "Cisco CSP and ENCS"],
    },
  ],
};

export const useCasesData: FeatureGridData = {
  tag: "Use cases",
  heading: "What teams use\n FortiGate VM for",
  highlightLast: 3,
  subhead: "Most deployments start with one of these and grow into the rest.",
  data: [
    {
      icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
      title: "Protect cloud workloads",
      description: "Inspect traffic to and from applications running in Azure, AWS, Google Cloud or your private cloud.",
    },
    {
      icon: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7"/>',
      title: "SD-WAN into the cloud",
      description: "Extend your branch SD-WAN to cloud regions, so offices reach cloud apps over the best path.",
    },
    {
      icon: '<path d="M4 12h16M14 6l6 6-6 6M10 6L4 12l6 6"/>',
      title: "Secure cloud transit",
      description: "Inspect traffic between clouds through Azure vWAN, AWS Cloud WAN and Google Cloud Interconnect.",
    },
    {
      icon: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 9h6M9 13h6M9 17h3"/>',
      title: "One policy for compliance",
      description: "Apply the same rules across every cloud and site, with one set of logs for your auditors.",
    },
    {
      icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      title: "Data centre segmentation",
      description: "Separate virtual server zones on VMware, Hyper-V or KVM, so one breach cannot spread freely.",
    },
    {
      icon: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
      title: "Automated response",
      description: "Automation stitches act on security events across the Fortinet Security Fabric without waiting for a person.",
    },
  ],
};

export const licensingData: OptionCardsData = {
  tag: "Ways to license",
  heading: "Pay the way\n your workloads run",
  highlightLast: 3,
  subhead:
    "Steady workloads, short projects and fast-changing estates each suit a different model. We compare them against your usage before you commit.",
  data: [
    {
      kicker: "Bring your own licence",
      title: "Term or perpetual licence",
      text: "Buy the VM licence from GS IT and run it on any supported cloud or hypervisor. Perpetual licences come as standard or V-series, and annual subscriptions as S-series.",
      fit: { label: "Best for", text: "long-running, predictable workloads." },
    },
    {
      kicker: "Usage-based",
      title: "FortiFlex",
      text: "Buy points once, then spend them daily on the VM sizes and services you actually run. Change sizes, add VMs or move capacity without a new purchase order.",
      fit: { label: "Best for", text: "growing or changing estates, and MSPs." },
    },
    {
      kicker: "Cloud marketplace",
      title: "On-demand",
      text: "Launch FortiGate VM from the Azure, AWS or Google Cloud marketplace and pay through your cloud bill, with no licence to buy upfront.",
      fit: { label: "Best for", text: "pilots, short projects and burst capacity." },
    },
  ],
  buttons: [
    primary("Ask about FortiFlex", enq("flex", { src: "Licensing: Ask about FortiFlex" })),
    outline("Renew a VM licence", enq("renewal", { src: "Licensing: Renew a VM licence" })),
  ],
};

export const bundlesData: BundleCardsData = {
  tag: "Protection bundles",
  heading: "Add the protection\n your traffic needs",
  highlightLast: 3,
  subhead: "FortiGuard services run on top of the VM licence and keep your threat intelligence current.",
  data: [
    {
      icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
      title: "Advanced Threat Protection",
      text: "Core protection: IPS, antivirus, FortiSandbox cloud, application control and inline CASB.",
    },
    {
      icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 8v8M8 12h8"/>',
      title: "Unified Threat Protection",
      text: "Everything in ATP, plus URL and DNS filtering, video filtering and botnet protection.",
    },
    {
      icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
      title: "Enterprise Protection",
      text: "Everything in UTP, plus data loss prevention, attack surface monitoring, AI-based inline malware prevention and IoT detection.",
    },
  ],
  button: primary("Get a bundle quote", enq("bundle", { src: "Bundles: Get a bundle quote" })),
};

export const procedureData = {
  tag: "How we deliver",
  heading: "From sizing\n to supported in production",
  highlightLast: 4,
  subhead: "Every step ends with a clear output, so you know where the project stands.",
  data: [
    { title: "Assessment", text: "Workloads, clouds, traffic flows, current firewall rules and compliance needs." },
    { title: "Design and licensing", text: "VM size, licence model, protection bundle and high availability in one proposal." },
    { title: "Deploy", text: "Deployment from templates or the marketplace, with policies built to your design." },
    { title: "Migrate and test", text: "Rule migration from your current firewall, cutover and testing around your working hours." },
    { title: "Support and renew", text: "Monitoring, firmware updates and renewal tracking for every VM licence." },
  ],
};

export const faqHeaderData = {
  tag: "FAQs",
  heading: "FortiGate VM\n questions answered",
  highlightLast: 2,
  faqData: [
    {
      question: "What is FortiGate VM?",
      answer:
        "It is the virtual version of a FortiGate firewall. It runs the same FortiOS as Fortinet's hardware, so you get the same firewall, VPN, SD-WAN and threat protection on a cloud instance or a virtual machine.",
    },
    {
      question: "What is the difference between FortiGate VM and FortiGate CNF?",
      answer:
        "FortiGate VM is a firewall you deploy and run yourself, on any supported cloud or hypervisor. FortiGate CNF is a service on AWS and Azure where Fortinet runs the infrastructure, scaling and patching, and you only manage the policy. Choose the VM for Google Cloud, Oracle, IBM, private clouds, or when you want full control.",
    },
    {
      question: "Which clouds and hypervisors does it support?",
      answer:
        "Microsoft Azure, AWS, Google Cloud, Oracle Cloud and IBM Cloud. On premises it runs on VMware ESXi, vSphere and NSX-T, Microsoft Hyper-V, KVM, Xen and Cisco CSP and ENCS.",
    },
    {
      question: "How is FortiGate VM licensed?",
      answer:
        "By the number of virtual CPUs: 1, 2, 4, 8, 16, 32 or unlimited. You can buy a perpetual licence (standard or V-series), an annual subscription (S-series), use FortiFlex points, or pay on demand through a cloud marketplace.",
    },
    {
      question: "Should we buy our own licence or use the marketplace?",
      answer:
        "Your own licence usually costs less for workloads that run all year. The marketplace suits pilots and short projects because you pay through your cloud bill. FortiFlex sits in between and suits estates that change often. We compare the options against your usage.",
    },
    {
      question: "What is FortiFlex?",
      answer:
        "A points-based programme from Fortinet. You buy points, and each VM size and service uses a set number of points per day. You can resize, add or remove VMs without a new purchase, and use the same points for some hardware and cloud services.",
    },
    {
      question: "Which protection bundle do we need?",
      answer:
        "Most deployments use Unified Threat Protection. Enterprise Protection adds data loss prevention, attack surface monitoring and AI-based malware prevention for regulated or larger environments. We include the right bundle in the quote.",
    },
    {
      question: "Can we manage VMs and hardware FortiGates together?",
      answer: "Yes. FortiManager manages FortiGate VMs and FortiGate appliances from one console, with one set of policies.",
    },
    {
      question: "Do you deploy and support it?",
      answer:
        "Yes. GS IT is a Fortinet Authorized Partner. We size, deploy and migrate your rules, then support the firewall after go-live. Under a GS IT AMC contract, critical issues get a 15-minute response.",
    },
  ],
};

const VM_SIZES = ["FortiGate-VM01", "FortiGate-VM02", "FortiGate-VM04", "FortiGate-VM08", "FortiGate-VM16", "FortiGate-VM32", "FortiGate-VMUL"];

// CTA and enquiry form: each tab ("What do you need?") shows its own fields
export const enquiryData: EnquiryTabsData = {
  tag: "Get started",
  heading: "Size your FortiGate VM\n with a security engineer",
  highlightLast: 4,
  steps: [
    "Tell us where your workloads run and the traffic you need to protect.",
    "We size the VM and compare licence models against your usage.",
    "You get a proposal with the design, bill of materials, timeline and quote.",
  ],
  note: "Clicked Get a quote on a VM size, or one of the licensing buttons? The form is already filled in with what you picked.",
  legend: "What do you need?",
  tabs: [
    { value: "quote", label: "New deployment", title: "Request a FortiGate VM quote", pickName: "New deployment", doneName: "FortiGate VM", modelField: "model" },
    { value: "renewal", label: "Licence renewal", title: "Renew your FortiGate VM licence", pickName: "Licence renewal", doneName: "licence renewal", modelField: "current_model" },
    { value: "bundle", label: "Protection bundle", title: "Get a protection bundle quote", pickName: "Protection bundle", doneName: "protection bundle", modelField: "model" },
    { value: "flex", label: "FortiFlex", title: "Ask about FortiFlex", pickName: "FortiFlex", doneName: "FortiFlex", modelField: "model" },
  ],
  fields: [
    {
      name: "platform",
      label: "Platform",
      type: "select",
      show: ["quote", "renewal", "bundle", "flex"],
      full: true,
      empty: "Not sure yet",
      options: [
        "Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud", "IBM Cloud", "VMware ESXi / vSphere", "VMware NSX-T",
        "Microsoft Hyper-V", "KVM", "Xen / XenServer", "Cisco CSP / ENCS", "More than one",
      ],
    },
    {
      name: "model",
      label: "VM size or service",
      type: "select",
      show: ["quote", "bundle", "flex"],
      full: true,
      empty: "Not sure, help me size it",
      options: [...VM_SIZES, "FortiGate CNF"],
    },
    { name: "current_model", label: "Current VM licence", type: "select", show: ["renewal"], options: [...VM_SIZES, "FortiGate-VM00", "Other or not sure"] },
    { name: "serial_numbers", label: "Serial number(s)", type: "text", show: ["renewal"], placeholder: "e.g. FGVM02TM…" },
    { name: "licence_expiry", label: "Current licence expiry", type: "month", show: ["renewal"] },
    {
      name: "licence_model",
      label: "Licence model",
      type: "select",
      show: ["quote"],
      empty: "Not sure, compare for us",
      options: ["Own licence (perpetual)", "Own licence (annual subscription)", "FortiFlex", "Cloud marketplace"],
    },
    {
      name: "bundle",
      label: "Protection bundle",
      type: "select",
      show: ["quote", "renewal", "bundle", "flex"],
      empty: "Not sure, recommend one",
      options: ["Unified Threat Protection (UTP)", "Enterprise Protection", "FortiCare only"],
    },
    {
      name: "term",
      label: "Term",
      type: "select",
      show: ["quote", "renewal", "bundle", "flex"],
      empty: "Not sure yet",
      options: [{ label: "1 year", hideIn: ["flex"] }, "3 years", "5 years"],
    },
    { name: "vm_count", label: "Number of VMs", type: "number", show: ["quote", "flex"], placeholder: "1" },
    { name: "high_availability", label: "High availability", type: "select", show: ["quote"], empty: "Not sure", options: ["Single unit", "HA pair"] },
  ],
  detailsTitle: "Your details",
  messageLabel: "Anything else we should know?",
  messagePlaceholder: "Workloads, traffic volumes, current firewall, timeline",
  page: "fortinet-virtual-cloud-firewalls",
  endpoint: "/api/lets-talk", // same handler as the other enquiry forms
  submitText: "Send request",
  sendingText: "Sending…",
  smallText: "A GS IT security engineer will review your request and reply with next steps.",
  errorText: "Sorry, your request did not send. Please try again, or call us.",
  doneTitle: "Thank you. Your request is in.",
  againText: "Send another request",
};

export const footNote =
  "Fortinet, FortiGate, FortiOS, FortiGuard, FortiFlex and other product names are trademarks of Fortinet, Inc. Microsoft Azure, AWS, Google Cloud, Oracle Cloud, IBM Cloud, VMware, Hyper-V and Cisco are trademarks of their respective owners.";
