"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

export interface HeroFormData {
  title: string;
  subtitle: string;
  endpoint: string;
  referralUrl: string;
  submitText: string;
  sendingText: string;
  successText: string;
  errorText: string;
  labels: { name: string; email: string; phone: string; company: string; interest: string };
  placeholders: { name: string; email: string; phone: string };
  interests: string[];
}

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full min-h-10 rounded-[10px] border border-[#D3D3D3] bg-white px-2.5 py-2 text-16 lg:text-[14px] text-paragraph outline-none placeholder:text-[#999] focus:border-primary focus:ring-1 focus:ring-primary";

export default function HeroCallbackForm({ data }: { data: HeroFormData }) {
  const [status, setStatus] = useState<Status>("idle");
  const { labels, placeholders } = data;

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
    <form
      onSubmit={onSubmit}
      aria-labelledby="hf-title"
      className="flex w-full flex-col gap-6 rounded-2xl border border-[#e3e8f0] bg-white p-6 lg:p-8 shadow-[0_8px_32px_0_rgba(17,74,159,0.10)]"
    >
      <div>
        <p id="hf-title" className="text-24 font-medium leading-[1.5] tracking-[-0.03em] text-primary">
          {data.title}
        </p>
        <p className="text-18 text-paragraph">{data.subtitle}</p>
      </div>

      <div className="flex flex-col gap-4">
        <Field id="hf-name" label={labels.name}>
          <input id="hf-name" name="name" type="text" autoComplete="name" placeholder={placeholders.name} className={inputCls} />
        </Field>
        <Field id="hf-email" label={`${labels.email}*`}>
          <input id="hf-email" name="email" type="email" autoComplete="email" required placeholder={placeholders.email} className={inputCls} />
        </Field>
        <Field id="hf-phone" label={labels.phone}>
          <input id="hf-phone" name="phone" type="tel" autoComplete="tel" placeholder={placeholders.phone} className={inputCls} />
        </Field>
        <Field id="hf-company" label={`${labels.company}*`}>
          <input id="hf-company" name="company" type="text" autoComplete="organization" required className={inputCls} />
        </Field>
        <Field id="hf-interest" label={labels.interest}>
          <div className="relative">
            <select id="hf-interest" name="interest" defaultValue={data.interests[0]} className={`${inputCls} appearance-none pr-9`}>
              {data.interests.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <ChevronDown strokeWidth={1} className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-paragraph" />
          </div>
        </Field>
        <input type="hidden" name="ReferralPageURL" value={data.referralUrl} />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-[15px] bg-gradient-to-r from-primary to-[#032C69] px-[30px] py-3 text-16 text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? data.sendingText : data.submitText}
        </button>
        <p aria-live="polite" className="text-[14px]">
          {status === "success" && <span className="mt-3 block text-[#0A7A1E]">{data.successText}</span>}
          {status === "error" && <span className="mt-3 block text-colorred">{data.errorText}</span>}
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-18 leading-[1.445] text-paragraph">
        {label}
      </label>
      {children}
    </div>
  );
}
