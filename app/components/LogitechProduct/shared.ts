// Content shared by every Logitech product page

export const STORE = "/store/meeting-room-devices/logitech";
export const CATEGORY_URL = "/logitech-meeting-room-devices";

export const storeCrumbs = [
  { label: "GS IT Store", href: "/store" },
  { label: "Logitech meeting room devices", href: CATEGORY_URL },
];

export const heroButtons = [
  { text: "Make an enquiry", icon: "ArrowRight", bgButton: "bg-primary", dark: true, href: "#enquiry" },
  { text: "Free consultation", icon: "", bgButton: "bg-white", dark: false, href: "#enquiry" },
];

// Platform logos shown under the features grid
export const platformLogos = {
  teams: { src: "/assets/images/logitech/platforms/teams.webp", alt: "Microsoft Teams", className: "max-h-[34px] lg:max-h-[44px]" },
  zoom: { src: "/assets/images/logitech/platforms/zoom.webp", alt: "Zoom", className: "max-h-[18px] lg:max-h-[26px]" },
  meet: { src: "/assets/images/logitech/platforms/meet.webp", alt: "Google Meet", className: "max-h-[20px] lg:max-h-[30px]" },
};

export const footNote =
  "Logitech, Rally, MeetUp and Tap are trademarks of Logitech International S.A. Microsoft Teams, Zoom and Google Meet are trademarks of their respective owners.";
