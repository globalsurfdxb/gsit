"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface StepItem {
  num: string;
  title: string;
  desc?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string; // for a select: the empty first option (default "Select Range")
  autoComplete?: string;
  options?: (string | SelectOption)[]; // for "select"
  full?: boolean; // full width; fields are half width by default
  rows?: number; // for "textarea"
}

export interface ConsultationData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  backgroundImage: string; // "" for a plain white section
  mobileimage?: string; // phone image shown above the content; falls back to backgroundImage
  steps: StepItem[];
  contact?: {
    prefix: string;
    phone: string;
    phoneHref: string;
    email: string;
  };
  form: {
    title: string;
    subtitle: string;
    button: string;
    fields?: FormFieldConfig[]; // defaults to name, company, email, phone, contract end, users, message
    contractOptions?: SelectOption[]; // options for the default "Current contract ends" select
    usersOptions?: SelectOption[]; // options for the default "Number of users" select
  };
}

const defaultFields = (form: ConsultationData["form"]): FormFieldConfig[] => [
  { name: "name", label: "Full name", type: "text" },
  { name: "company", label: "Company", type: "text" },
  { name: "email", label: "Work email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "contract", label: "Current contract ends (optional)", type: "select", options: form.contractOptions ?? [] },
  { name: "users", label: "Number of users", type: "select", options: form.usersOptions ?? [] },
  {
    name: "message",
    label: "What Isn’t Working Today? (optional)",
    type: "textarea",
    full: true,
    placeholder: "eg: Slow response times , repeat network issues…",
  },
];

const optionOf = (o: string | SelectOption): SelectOption => (typeof o === "string" ? { label: o, value: o } : o);

interface ConsultationSectionProps {
  data: ConsultationData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const labelClass = "block text-paragraph text-[14px]  font-medium leading-[1.429] mb-2";
const fieldClass =
  "w-full bg-white rounded-lg border border-[#E5E5E5] h-[32px] px-3 text-[14px] text-paragraph outline-none focus:border-primary transition-colors";

export default function ConsultationSection({
  data,
  variant ,
  subtitleClass,
}: ConsultationSectionProps) {
  const fields = data.form.fields ?? defaultFields(data.form);
  const [form, setForm] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to API
    console.log(form);
  };

  return (
    <section className="rounded-2xl overflow-hidden bg-white md:bg-transparent">
      {/* Phones: image on top, fading into the content below. Tablet and up use the background image. */}
      {(data.mobileimage || data.backgroundImage) && (
        <div className="relative md:hidden">
          <Image src={data.mobileimage || data.backgroundImage} width={716} height={450} sizes="100vw" alt="" className="w-full" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(255 255 255 / 78%) 16%, rgb(255 255 255 / 0%) 44%)",
            }}
          />
        </div>
      )}
    <div
      className="xl:min-h-[711px] relative w-full md:rounded-2xl overflow-hidden flex items-center justify-center md:bg-cover md:bg-right md:bg-no-repeat md:bg-[image:var(--cta-bg)]"
      style={(data.backgroundImage ? { "--cta-bg": `url('${data.backgroundImage}')` } : { "--cta-bg": "none" }) as React.CSSProperties}
    >
      {/* white fade over the photo (left -> right), tablet and up */}
      {data.backgroundImage && (
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0.75) 62%, rgba(255,255,255,0) 85%)",
        }}
      />
      )}

      <div className="container relative">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_41%] 3xl:grid-cols-[1fr_585px] gap-10 lg:gap-12 items-center pt-2 pb-82 md:py-82 xl:py-5`}>
          {/* LEFT */}
          <div className="lg:pr-6">
            <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass ?? "max-w-[76ch]"} />

            {/* Steps */}
            <ul className="mt-8 lg:mt-10.5 space-y-4">
              {data.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 lg:gap-3">
                  <span className="text-primary text-18 font-normal min-w-8 min-h-8 flex items-center justify-center">{step.num}</span>
                  <div>
                    <p className="text-paragraph text-18-medium">{step.title}</p>
                    {step.desc && <p className="text-paragraphlte text-18  ">{step.desc}</p>}
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact line */}
            {data.contact && (
            <p className="mt-8 lg:mt-10.5 text-primary text-18-medium">
              {data.contact.prefix}{" "}
              <a href={data.contact.phoneHref} className="underline underline-offset-2">
                {data.contact.phone}
              </a>{" "}
              · {" "}
              <a href={`mailto:${data.contact.email}`} className="underline underline-offset-2">
                {data.contact.email}
              </a>
            </p>
            )}
          </div>

          {/* RIGHT - glass form card */}
          <div className="rounded-2xl border border-white/70 bg-white/30 backdrop-blur-md shadow-[0px_8px_32px_0px_#0000000f] p-5 lg:p-6 3xl:p-6">
            <h3 className="text-primary text-24-medium ">
              {data.form.title}
            </h3>
            <p className="text-paragraph text-16 !leading-[1.4]">{data.form.subtitle}</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((field) => {
                const value = form[field.name] ?? "";
                return (
                  <div key={field.name} className={field.full ? "sm:col-span-2" : ""}>
                    <label htmlFor={field.name} className={labelClass}>{field.label}</label>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={value}
                          onChange={handleChange}
                          className={`${fieldClass} appearance-none pr-9 ${value ? "" : "text-paragraph"}`}
                        >
                          <option value="">{field.placeholder ?? "Select Range"}</option>
                          {(field.options ?? []).map(optionOf).map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-paragraph absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        rows={field.rows ?? 3}
                        value={value}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-white rounded-lg border border-[#E5E5E5] px-3 py-2 text-[14px] text-paragraph placeholder:text-[#979797] placeholder:text-[13px] outline-none focus:border-primary resize-none h-[82px] transition-colors"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        value={value}
                        onChange={handleChange}
                        className={`${fieldClass} placeholder:text-[#979797] placeholder:text-[13px]`}
                      />
                    )}
                  </div>
                );
              })}

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  className="w-full h-[45px] 3xl:h-[50px] rounded-full text-white text-[14px] lg:text-16 font-medium cursor-pointer transition-opacity hover:opacity-90"
                  style={{ backgroundImage: "linear-gradient(90deg, #114A9F 0%, #0A3274 100%)" }}
                >
                  {data.form.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

/* ---------- sample data (move to your data file) ----------

export const consultationData: ConsultationData = {
  tag: "GET STARTED",
  heading: "Book a Room {{Consultation}}",
  highlightLast: 3,
  subhead:
    "Tell us about your rooms and pick a date. A GS.AV engineer will review them with you and recommend what each room needs.",
  backgroundImage: "/assets/images/consultation-bg.webp",
  steps: [
    { num: "01", title: "We call you back", desc: "Within 60 minutes during working hours" },
    { num: "02", title: "We review your rooms", desc: "On site, or from a floor plan and photos" },
    { num: "03", title: "You get a room-by-room plan", desc: "Equipment, layout and a clear quotation" },
  ],
  contact: {
    prefix: "Prefer to talk now?",
    phone: "+971 4 578 6518",
    phoneHref: "tel:+97145786518",
    email: "hello@gs-it.ae",
  },
  form: {
    title: "Request a Call Back",
    subtitle: "Lets discuss your IT support needs",
    button: "Request Call Back",
    contractOptions: [
      { label: "Within 3 months", value: "3" },
      { label: "3 – 6 months", value: "3-6" },
      { label: "6+ months", value: "6+" },
    ],
    usersOptions: [
      { label: "1 – 25", value: "1-25" },
      { label: "26 – 100", value: "26-100" },
      { label: "100+", value: "100+" },
    ],
  },
};

Usage:
<ConsultationSection data={consultationData} variant={'subtitleBorder'} />
*/
