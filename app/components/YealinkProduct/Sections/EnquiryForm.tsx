"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, CheckCircle2, Mail, MessageSquare, Phone, User, type LucideIcon } from "lucide-react";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

export interface EnquiryDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  text: string;
  product: string; // sent as a hidden field
  endpoint: string;
  submitText: string;
  sendingText: string;
  successText: string;
  errorText: string;
}

type Status = "idle" | "sending" | "success" | "error";

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  placeholder: string;
  required: boolean;
  icon: LucideIcon;
}

const FIELDS: Field[] = [
  { name: "Name", label: "Full name", type: "text", autoComplete: "name", placeholder: "Your name", required: true, icon: User },
  { name: "Company", label: "Company", type: "text", autoComplete: "organization", placeholder: "Company name", required: false, icon: Building2 },
  { name: "Email", label: "Work email", type: "email", autoComplete: "email", placeholder: "Your email", required: true, icon: Mail },
  { name: "Phone", label: "Phone", type: "tel", autoComplete: "tel", placeholder: "Your phone number", required: true, icon: Phone },
];

// const POINTS = ["test", "test2", "test3"];

const inputBase =
  "w-full rounded-[10px] border border-[#d3d3d3] bg-white py-3 pl-11 pr-4 text-[15.5px] text-[#111] placeholder:text-[#9a9a9a] outline-none transition-colors hover:border-[#b9c6dc] focus:border-primary focus:ring-[3px] focus:ring-primary/15 aria-[invalid=true]:border-[#c41a1a]";

const iconBase = "pointer-events-none absolute left-3.5 size-[18px] text-[#8a97ad] transition-colors group-focus-within:text-primary";

export default function EnquiryForm({ data }: { data: EnquiryDataType }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture before the await
    setStatus("sending");
    try {
      const res = await fetch(data.endpoint, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquiry" aria-labelledby="enquiry-heading" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
        <div>
          <SectionTag text={data.tag} />
          <div id="enquiry-heading">
            <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} className="home-banner-heading mt-4" />
          </div>
          <p className="mt-4 max-w-[48ch] text-18 text-paragraph">{data.text}</p>
          {/* <ul className="mt-6 grid gap-3 border-t border-[#e3e8f0] pt-6">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15.5px] text-[#111]">
                <CheckCircle2 strokeWidth={1} className="size-5 shrink-0 text-primary" aria-hidden />
                {p}
              </li>
            ))}
          </ul> */}
        </div>

        <div className="rounded-2xl border border-[#ebf2fd] bg-gradient-to-b from-[#f2f2f9] to-[#f3f6ff] p-5 sm:p-7 lg:p-8">
          {status === "success" ? (
            <div role="status" className="grid justify-items-start gap-4 py-6">
              <span className="grid size-12 place-items-center rounded-full bg-[#eef8f0] text-[#0a7a1e]">
                <CheckCircle2 strokeWidth={1} className="size-7" aria-hidden />
              </span>
              <p className="text-[20px] font-medium tracking-[-0.02em] text-[#111]">Enquiry sent</p>
              <p className="max-w-[44ch] text-[15.5px] text-paragraph">{data.successText}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-[15px] font-medium text-primary underline-offset-4 hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <p className="text-[13.5px] text-paragraph sm:col-span-2">
                Fields marked <span className="text-[#c41a1a]">*</span> are required.
              </p>

              {FIELDS.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.name} className="grid gap-1.5">
                    <label htmlFor={`enq-${f.name}`} className="text-[14px] font-medium text-[#111]">
                      {f.label}
                      {f.required && <span className="ml-0.5 text-[#c41a1a]" aria-hidden>*</span>}
                    </label>
                    <div className="group relative flex items-center">
                      <Icon strokeWidth={1} className={iconBase} aria-hidden />
                      <input
                        id={`enq-${f.name}`}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        placeholder={f.placeholder}
                        required={f.required}
                        className={inputBase}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="grid gap-1.5 sm:col-span-2">
                <label htmlFor="enq-Message" className="text-[14px] font-medium text-[#111]">
                  Message <span className="font-normal text-paragraph">(optional)</span>
                </label>
                <div className="group relative flex">
                  <MessageSquare strokeWidth={1} className={`${iconBase} top-3.5`} aria-hidden />
                  <textarea
                    id="enq-Message"
                    name="Message"
                    rows={4}
                    placeholder="Tell us about your project"
                    className={`${inputBase} resize-y`}
                  />
                </div>
              </div>

              <input type="hidden" name="Product" value={data.product} />

              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[15px] border border-primary bg-primary px-7 py-3.5 text-16 font-medium text-white shadow-[0_0_2px_0_#0000000a,0_8px_8px_0_#00000014] transition-colors hover:bg-[#152d7a] disabled:cursor-wait disabled:opacity-60 sm:w-auto lg:px-8 lg:py-4 lg:text-[17px] lg:font-light"
                >
                  {status === "sending" ? data.sendingText : data.submitText}
                  <ArrowRight strokeWidth={1} className="size-5" aria-hidden />
                </button>
                <p className="text-[13px] text-paragraph">We only use your details to reply to this enquiry.</p>
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-[10px] border border-[#f3c9c9] bg-[#fdf3f3] px-4 py-3 text-[14.5px] text-[#c41a1a] sm:col-span-2">
                  {data.errorText}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
