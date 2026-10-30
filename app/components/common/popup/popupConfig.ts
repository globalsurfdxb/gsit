export type PopupField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  half?: boolean; // true = half width on desktop
  options?: string[]; // for select
  placeholder?: string;
};

export type PopupConfig = {
  title: string;
  description?: string;
  submitLabel: string;
  submitUrl: string;
  successMessage: string;
  fields: PopupField[];
};

export const popups: Record<string, PopupConfig> = {
  enquiry: {
    title: "Let’s talk",
    description: "Please provide your details below, and we will get in touch with you shortly.",
    submitLabel: "Submit",
    submitUrl: "/api/lets-talk", // TODO: your existing form handler
    successMessage: "Thank you. We have received your details and will be in touch shortly.",
    fields: [
      {
        name: "interest",
        label: "I’m interested in",
        type: "select",
        options: [
          "Acronis Advanced Email Security",
          "Fully managed Acronis",
          "Acronis licensing / co-managed",
          "Backup health review",
        ],
      },
      { name: "name", label: "Name", type: "text", half: true },
      { name: "email", label: "Email", type: "email", required: true, half: true },
      { name: "phone", label: "Phone", type: "tel", half: true },
      { name: "company", label: "Company name", type: "text", required: true, half: true },
    ],
  },

  // Example of a second popup with different inputs:
  // brochure: {
  //   title: "Download the brochure",
  //   submitLabel: "Send me the brochure",
  //   submitUrl: "/api/brochure",
  //   successMessage: "Check your inbox.",
  //   fields: [
  //     { name: "email", label: "Work email", type: "email", required: true },
  //     { name: "message", label: "Anything we should know?", type: "textarea" },
  //   ],
  // },
};