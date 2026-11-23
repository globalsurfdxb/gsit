// Types and link helper for the tabbed enquiry form (EnquiryTabs). Kept out of the client file so server code can call enquiryHref().

// CTA copy beside an enquiry form whose tabs ("What do you need?") each show their own set of fields.
// Any link on the page whose href is built with enquiryHref() opens the matching tab, prefills it and scrolls here.

export interface EnquiryOption {
  label: string;
  value?: string; // sent value when it differs from the label, e.g. "FortiSwitch 108F" for "FortiSwitch 108F, any version"
  onlyIn?: string[]; // shown only on these tabs
  hideIn?: string[]; // hidden on these tabs
}

export interface EnquiryField {
  name: string; // form field name sent to the endpoint
  label: string;
  type: "select" | "text" | "number" | "month";
  show: string[]; // tabs this field appears on
  full?: boolean; // span both columns
  empty?: string; // select: label of the blank first option
  options?: (string | EnquiryOption)[];
  groups?: { label: string; options: (string | EnquiryOption)[] }[]; // select: options in labelled groups (after any plain options)
  placeholder?: string;
  // On these tabs, show the field only while another field is empty or has one of these values
  onlyWhen?: { field: string; values: string[]; tabs: string[] };
}

export interface EnquiryTab {
  value: string; // e.g. "quote", sent as enquiry_type
  label: string; // tab label
  title: string; // form heading on this tab
  pickName: string; // name in the "you picked" chip
  doneName: string; // used in the thank-you line: "...review your {doneName} request"
  modelField?: string; // field a prefilled model goes into on this tab
}

export interface EnquiryTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  steps: string[];
  note: string;
  legend: string; // "What do you need?"
  tabs: EnquiryTab[];
  fields: EnquiryField[];
  detailsTitle: string; // "Your details"
  messageLabel: string;
  messagePlaceholder: string;
  initial?: Record<string, string>; // starting values, e.g. the product page's own model
  page: string; // hidden "page" field
  hidden?: Record<string, string>; // more hidden fields sent with the form, e.g. { product_page: "FortiSwitch 124G" }
  linkFields?: string[]; // fields a link can fill (enquiryHref fields option); a link that does not set one clears it
  glance?: { strong: string; text: string }; // optional line under the CTA note, e.g. "Fortinet Authorized Partner · ..."
  endpoint: string;
  submitText: string;
  sendingText: string;
  smallText: string;
  errorText: string;
  doneTitle: string;
  engineer?: string; // who replies, in the thank-you line: "A GS IT {engineer} will review..." (default "security engineer")
  againText: string;
}

// Link that opens a tab of the form and prefills it, e.g. enquiryHref("upgrade", { model: "FortiGate 1000F" })
export const enquiryHref = (
  type: string,
  opts: { model?: string; bundle?: string; src?: string; fields?: Record<string, string> } = {},
) => {
  const p = new URLSearchParams({ enq: type });
  if (opts.model) p.set("model", opts.model);
  if (opts.bundle) p.set("bundle", opts.bundle);
  if (opts.src) p.set("src", opts.src);
  for (const [k, v] of Object.entries(opts.fields ?? {})) p.set(`f_${k}`, v);
  return `#${p.toString()}`;
};
