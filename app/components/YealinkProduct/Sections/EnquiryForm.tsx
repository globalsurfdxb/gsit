"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
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

const FIELDS = [
  { name: "Name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "Company", label: "Company", type: "text", autoComplete: "organization", required: false },
  { name: "Email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "Phone", label: "Phone", type: "tel", autoComplete: "tel", required: true },
];

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
    <section id="enquiry" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div>
          <SectionTag text={data.tag} />
          <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} className="home-banner-heading mt-4" />
          <p className="mt-4 max-w-[48ch] text-18 text-paragraph">{data.text}</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-3.5 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.name} className="grid gap-1.5">
              <label htmlFor={`enq-${f.name}`} className="text-[14px] font-medium text-[#111]">{f.label}</label>
              <input
                id={`enq-${f.name}`}
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                required={f.required}
                className="rounded-[10px] border border-[#d3d3d3] bg-white px-4 py-[13px] text-[15.5px] text-[#111] outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          ))}
          <input type="hidden" name="Product" value={data.product} />
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-[15px] border border-primary bg-primary px-7 py-3.5 text-16 font-medium text-white transition-colors hover:bg-[#152d7a] disabled:opacity-60 lg:px-8 lg:py-4 lg:text-[17px] lg:font-light"
            >
              {status === "sending" ? data.sendingText : data.submitText}
              <ArrowRight strokeWidth={1} className="size-5" />
            </button>
          </div>
          {(status === "success" || status === "error") && (
            <p role="status" className={`text-[14.5px] sm:col-span-2 ${status === "success" ? "text-[#0a7a1e]" : "text-[#c41a1a]"}`}>
              {status === "success" ? data.successText : data.errorText}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
