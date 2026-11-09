// Content shared by every Yealink product page

export const STORE = "/store/video-conferencing-devices/yealink";
export const CATEGORY_URL = "/yealink-video-conferencing-systems";
export const DEMO_URL = "/yealink-product-demo";

export const storeCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink video conferencing", href: CATEGORY_URL },
];

// IP phone pages live under their own route and category
export const IP_PHONE_STORE = "/yealink/ip-phone";
export const IP_PHONE_CATEGORY_URL = "/yealink-ip-phones";

export const ipPhoneCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink IP phones", href: IP_PHONE_CATEGORY_URL },
];

// Headset pages live under their own route and category
export const HEADSET_STORE = "/yealink/headset";
export const HEADSET_CATEGORY_URL = "/yealink-bluetooth-wireless-headsets";

export const headsetCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink wireless headsets", href: HEADSET_CATEGORY_URL },
];

// Wired headsets share the headset route but have their own category
export const WIRED_HEADSET_CATEGORY_URL = "/yealink-wired-headsets";

export const wiredHeadsetCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink wired headsets", href: WIRED_HEADSET_CATEGORY_URL },
];

// Touch consoles keep the video conferencing store URLs but have their own category
export const CONSOLE_CATEGORY_URL = "/yealink-touch-consoles";

export const consoleCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink touch consoles and room control", href: CONSOLE_CATEGORY_URL },
];

// Wireless presentation devices keep the video conferencing store URLs but have their own category
export const PRESENTATION_CATEGORY_URL = "/yealink-wireless-presentation-system";

export const presentationCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Yealink wireless presentation", href: PRESENTATION_CATEGORY_URL },
];

export const heroButtons = [
  { text: "Make an enquiry", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquiry" },
  { text: "Free consultation", icon: "", bgButton: "bg-white", dark: false, href: DEMO_URL },
];

export const qualsData = [
  { icon: "ShieldCheck", title: "Genuine products" },
  { icon: "BadgeCheck", title: "Assured quality" },
  { icon: "Presentation", title: "Product training" },
  { icon: "Wrench", title: "Installation, maintenance and support" },
];

export const enquiryDefaults = {
  tag: "Enquiry",
  heading: "Let's get\n connected",
  highlightLast: 1,
  endpoint: "/api/lets-talk", // same handler as the "Let's talk" popup
  submitText: "Submit enquiry",
  sendingText: "Sending...",
  successText: "Thank you. A GS IT specialist will contact you shortly.",
  errorText: "Something went wrong. Please try again or email hello@gs-it.ae.",
};

export const footNote =
  "Yealink is a trademark of Yealink Network Technology Co., Ltd. Microsoft Teams and Zoom are trademarks of their respective owners.";
