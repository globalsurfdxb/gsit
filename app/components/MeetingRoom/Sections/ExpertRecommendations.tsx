"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface ConsultationData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  backgroundImage: string;
  mobbanner?: string;
  steps: StepItem[];
  contact: {
    prefix: string;
    phone: string;
    phoneHref: string;
    email: string;
  };
  form: {
    title: string;
    subtitle: string;
    button: string;
    contractOptions: SelectOption[];
    usersOptions: SelectOption[];
  };
}

interface ConsultationSectionProps {
  data: ConsultationData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const labelClass = "block text-paragraph text-[14px] 3xl:text-[16px] leading-[1.4] mb-2";
const fieldClass =
  "w-full bg-white rounded-lg border border-[#E5E5E5] h-[40px] 3xl:h-[46px] px-3 text-[14px] text-paragraph outline-none focus:border-primary transition-colors";

export default function ConsultationSection({
  data,
  variant ,
  subtitleClass,
}: ConsultationSectionProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    contract: "",
    users: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to API
    console.log(form);
  };

  return (
    <section
      className="relative w-full rounded-2xl overflow-hidden bg-cover bg-center md:bg-right"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
    >
      {/* white fade over the photo (left -> right) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0.75) 62%, rgba(255,255,255,0) 85%)",
        }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_41%] 3xl:grid-cols-[1fr_582px] gap-10 lg:gap-12 items-center py-82">
          {/* LEFT */}
          <div className="lg:pr-6">
            <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass ?? "max-w-[76ch]"} />

            {/* Steps */}
            <ul className="mt-8 lg:mt-12 space-y-5 lg:space-y-6">
              {data.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4 lg:gap-5">
                  <span className="text-primary text-18 font-normal min-w-[34px]">{step.num}</span>
                  <div>
                    <p className="text-paragraph text-18 font-medium lg:font-normal">{step.title}</p>
                    <p className="text-paragraphlte text-18 mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact line */}
            <p className="mt-8 lg:mt-12 text-primary text-18">
              {data.contact.prefix}{" "}
              <a href={data.contact.phoneHref} className="underline underline-offset-2">
                {data.contact.phone}
              </a>{" "}
              · {" "}
              <a href={`mailto:${data.contact.email}`} className="underline underline-offset-2">
                {data.contact.email}
              </a>
            </p>
          </div>

          {/* RIGHT - glass form card */}
          <div className="rounded-2xl border border-white/70 bg-white/30 backdrop-blur-md shadow-[0px_8px_32px_0px_#0000000f] p-5 lg:p-6 3xl:p-6">
            <h3 className="text-primary text-24 font-medium tracking-[-3%] !leading-[1.2]">
              {data.form.title}
            </h3>
            <p className="text-paragraph text-16 !leading-[1.4] mt-1">{data.form.subtitle}</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>Full name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Company</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={fieldClass} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Work email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={fieldClass} />
              </div>

              <div>
                <label htmlFor="contract" className={labelClass}>Current contract ends (optional)</label>
                <div className="relative">
                  <select
                    id="contract"
                    name="contract"
                    value={form.contract}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none pr-9 ${form.contract ? "" : "text-paragraph"}`}
                  >
                    <option value="">Select Range</option>
                    {data.form.contractOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-paragraph absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <label htmlFor="users" className={labelClass}>Number of users</label>
                <div className="relative">
                  <select
                    id="users"
                    name="users"
                    value={form.users}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none pr-9`}
                  >
                    <option value="">Select Range</option>
                    {data.form.usersOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-paragraph absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>What Isn’t Working Today? (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="eg: Slow response times , repeat network issues…"
                  className="w-full bg-white rounded-lg border border-[#E5E5E5] px-3 py-2 text-[14px] text-paragraph placeholder:text-[#979797] placeholder:text-[13px] outline-none focus:border-primary resize-none h-[82px] 3xl:h-[96px] transition-colors"
                />
              </div>

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  className="w-full h-[45px] 3xl:h-[50px] rounded-full text-white text-[14px] lg:text-[15px] font-medium cursor-pointer transition-opacity hover:opacity-90"
                  style={{ backgroundImage: "linear-gradient(90deg, #114A9F 0%, #0A3274 100%)" }}
                >
                  {data.form.button}
                </button>
              </div>
            </form>
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
