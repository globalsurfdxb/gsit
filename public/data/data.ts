export const footerData = {
  logo: "/assets/images/logo.svg",
  address: ["P.O.Box 13653, 901 – SIT Tower", "Dubai Silicon Oasis", "Dubai, UAE"],
  contact: {
    email: "hello@gs-it.ae",
    phone: "+971 4 578 6518",
  },
  social: [
    { icon: "/assets/images/icons/twitter-x.svg", alt: "X", href: "#", h: "h-[20px]" },
    { icon: "/assets/images/icons/linkedin.svg", alt: "LinkedIn", href: "#", h: "h-[20px]" },
    { icon: "/assets/images/icons/facebook.svg", alt: "Facebook", href: "#", h: "h-[20px]" },
    { icon: "/assets/images/icons/youtube.svg", alt: "YouTube", href: "#", h: "h-[15px]" },
  ],
  navColumns: [
    {
      title: "About GS IT",
      links: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Blogs", href: "/" },
        { label: "Case Studies", href: "/" },
        { label: "Events & Webinars", href: "/" },
      ],
    },
    {
      title: "Our Service",
      links: [
        { label: "AV & Workplace Technology", href: "/" },
        { label: "Cloud Services", href: "/" },
        { label: "Cyber Security", href: "/" },
        { label: "ELV & Physical Security", href: "/" },
        { label: "IT Services", href: "/" },
        { label: "Network & Infrastructure", href: "/" },
      ],
    },
    {
      title: "Solutions By Area",
      links: [
        { label: "AV Solutions", href: "/" },
        { label: "ICT Solutions", href: "/" },
        { label: "Cloud Solutions", href: "/" },
      ],
    },
  ],
  groupCompanies: [
    { logo: "/assets/images/gs-digital.svg", alt: "GS.Digital", href: "#" },
    { logo: "/assets/images/gs-it-security.svg", alt: "GS.IT Security", href: "#" },
    { logo: "/assets/images/gs-av.svg", alt: "GS.AV", href: "#" },
  ],
  legal: [
    { label: "Legal Page", href: "/" },
    { label: "Privacy", href: "/" },
    { label: "Modern Slavery Statement", href: "/" },
  ],
  copyright: "©2026 GS.IT. All rights reserved",
};
// data/headerData.ts
export const headerData = {
  logo: "/assets/images/logo.svg",
  nav: [
    {
      label: "Company",
      href: "/company",
      children: [],
    },
    {
      label: "Services",
      href: "/services",
      children: [],
    },
    {
      label: "Solutions",
      href: "/solutions",
      children: [],
    },
    {
      label: "Product Store",
      href: "/product-store",
      bold: true,
      children: [],
    },
    {
      label: "Insights",
      href: "/insights",
      children: [],
    },
  ],
  cta: {
    label: "Contact Us",
    href: "/contact",
  },
};