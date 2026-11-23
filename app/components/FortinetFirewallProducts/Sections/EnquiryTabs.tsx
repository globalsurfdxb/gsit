"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import { useLenis, type LenisContextType } from "@/app/components/common/Layout/LenisProvider";

// Types and the enquiryHref() link helper live in ./enquiry (a plain module, so server data files can use them)
import type { EnquiryField, EnquiryOption, EnquiryTabsData } from "./enquiry";

const CONTACT = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "email", label: "Work email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", placeholder: "+971" },
] as const;

const opt = (o: string | EnquiryOption): EnquiryOption => (typeof o === "string" ? { label: o } : o);
const val = (o: EnquiryOption) => o.value ?? o.label;
// Every option of a select field, grouped or not
const allOptions = (f: EnquiryField) => [...(f.options ?? []), ...(f.groups ?? []).flatMap((g) => g.options)].map(opt);
const visible = (o: EnquiryOption, tab: string) => !(o.onlyIn && !o.onlyIn.includes(tab)) && !o.hideIn?.includes(tab);

const input =
  "w-full rounded-[10px] border border-[#d3d3d3] bg-white px-4 py-3 text-[15.5px] text-[#111] placeholder:text-[#9a9a9a] outline-none transition-colors hover:border-[#b9c6dc] focus:border-primary focus:ring-[3px] focus:ring-primary/15 aria-[invalid=true]:border-[#c41a1a]";
const labelCls = "text-[14px] font-medium text-[#111]";

type Status = "idle" | "sending" | "done" | "error";

export default function EnquiryTabs({ data, id = "start" }: { data: EnquiryTabsData; id?: string }) {
  const { scrollTo }: LenisContextType = useLenis();
  const [tab, setTab] = useState(data.tabs[0].value);
  const [values, setValues] = useState<Record<string, string>>(data.initial ?? {});
  const [source, setSource] = useState(""); // which button opened the form
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [doneText, setDoneText] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const prefilled = useRef<{ field: string; value: string } | null>(null); // model set by the last button click

  const current = data.tabs.find((t) => t.value === tab)!;
  const fields = data.fields.filter(
    (f) =>
      f.show.includes(tab) &&
      // e.g. the FortiGate fields only while the product area is empty or "FortiGate firewalls"
      !(f.onlyWhen && f.onlyWhen.tabs.includes(tab) && values[f.onlyWhen.field] && !f.onlyWhen.values.includes(values[f.onlyWhen.field])),
  );
  const modelField = current.modelField;

  // Switching tab clears any choice that the new tab does not offer
  const switchTab = (next: string) => {
    setTab(next);
    setValues((v) => {
      const out = { ...v };
      for (const f of data.fields) {
        if (f.type !== "select" || !out[f.name]) continue;
        const o = allOptions(f).find((x) => val(x) === out[f.name]);
        if (o && !visible(o, next)) out[f.name] = "";
      }
      return out;
    });
  };

  const set = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name])
      setErrors((cur) => {
        const rest = { ...cur };
        delete rest[name];
        return rest;
      });
  };

  // Links built with enquiryHref() anywhere on the page open the form here
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#enq="]');
      if (!a) return;
      e.preventDefault();
      e.stopPropagation(); // keep next/link and the smooth-scroll button handler out of it
      const p = new URLSearchParams(a.getAttribute("href")!.slice(1));
      const type = data.tabs.some((t) => t.value === p.get("enq")) ? p.get("enq")! : data.tabs[0].value;
      const target = data.tabs.find((t) => t.value === type)!.modelField;
      setStatus("idle");
      switchTab(type);
      const model = p.get("model");
      const bundle = p.get("bundle");
      // A model filled in by an earlier button is cleared by a button without one; a model the visitor picked stays
      const prev = prefilled.current;
      prefilled.current = model && target ? { field: target, value: model } : null;
      setValues((v) => {
        const out = { ...v };
        if (prev && out[prev.field] === prev.value) out[prev.field] = data.initial?.[prev.field] ?? "";
        // Like the page design: a model that is not in the list leaves the selection as it was
        const field = data.fields.find((f) => f.name === target);
        if (model && target && (!field || allOptions(field).some((x) => val(x) === model || x.label === model))) {
          const match = field && allOptions(field).find((x) => val(x) === model || x.label === model);
          out[target] = match ? val(match) : model;
        }
        if (bundle) out.bundle = bundle;
        for (const k of data.linkFields ?? []) out[k] = p.get(`f_${k}`) ?? "";
        return out;
      });
      setSource(p.get("src") || a.textContent?.trim() || "");
      const el = document.getElementById(id);
      if (el) scrollTo(el);
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 450);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, id, scrollTo]);

  // Chip: what was picked; a link-filled field (e.g. product area) stands in when no model is picked
  const linkValue = (data.linkFields ?? []).filter((k) => fields.some((f) => f.name === k)).map((k) => values[k]).find(Boolean);
  const pickText = [current.pickName, (modelField && values[modelField]) || linkValue, tab === "bundle" && values.bundle]
    .filter(Boolean)
    .join(" · ");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const errs: Record<string, string> = {};
    for (const c of CONTACT) {
      const v = (values[c.name] ?? "").trim();
      if (!v) errs[c.name] = "Required";
      else if (c.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[c.name] = "Enter a valid email";
      else if (c.type === "tel" && v.replace(/\D/g, "").length < 7) errs[c.name] = "Enter a valid phone number";
    }
    setErrors(errs);
    const first = CONTACT.find((c) => errs[c.name]);
    if (first) {
      (form.elements.namedItem(first.name) as HTMLElement | null)?.focus();
      return;
    }

    const body = new FormData(form);
    for (const [k, v] of [...body.entries()]) if (v === "") body.delete(k); // send only what was filled in
    setStatus("sending");
    try {
      const res = await fetch(data.endpoint, { method: "POST", body });
      if (!res.ok) throw new Error("Request failed");
      const firstName = (values.name ?? "").trim().split(" ")[0];
      setDoneText(
        `Thank you, ${firstName}. A GS IT ${data.engineer ?? "security engineer"} will review your ${current.doneName} request and contact you at ${values.email}.`,
      );
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const again = () => {
    prefilled.current = null;
    setValues(data.initial ?? {});
    setSource("");
    setErrors({});
    setStatus("idle");
    setTab(data.tabs[0].value);
  };

  const renderField = (f: EnquiryField) => {
    const fid = `${id}-${f.name}`;
    const value = values[f.name] ?? "";
    return (
      <div key={f.name} className={`grid content-start gap-1.5 ${f.full ? "sm:col-span-2" : ""}`}>
        <label htmlFor={fid} className={labelCls}>
          {f.label}
        </label>
        {f.type === "select" ? (
          <div className="relative">
            <select
              id={fid}
              name={f.name}
              value={value}
              onChange={(e) => set(f.name, e.target.value)}
              className={`${input} cursor-pointer appearance-none pr-10`}
            >
              <option value="">{f.empty ?? "Select"}</option>
              {(f.options ?? []).map(opt).filter((o) => visible(o, tab)).map((o) => (
                <option key={o.label} value={val(o)}>
                  {o.label}
                </option>
              ))}
              {f.groups?.map((g) => (
                <optgroup key={g.label} label={g.label}>
                  {g.options.map(opt).filter((o) => visible(o, tab)).map((o) => (
                    <option key={o.label} value={val(o)}>
                      {o.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown aria-hidden="true" strokeWidth={1} className="pointer-events-none absolute right-3.5 top-1/2 size-[18px] -translate-y-1/2 text-[#8a97ad]" />
          </div>
        ) : (
          <input
            id={fid}
            name={f.name}
            type={f.type}
            value={value}
            onChange={(e) => set(f.name, e.target.value)}
            placeholder={f.placeholder}
            autoComplete="off"
            {...(f.type === "number" ? { min: 1, inputMode: "numeric" as const } : {})}
            className={input}
          />
        )}
      </div>
    );
  };

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8 rounded-2xl bg-white py-82">
      <div className="container grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        {/* CTA copy */}
        <div className="grid gap-4 lg:sticky lg:top-8">
          <SectionTag text={data.tag} />
          <div id={`${id}-heading`}>
            <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} />
          </div>
          <ol className="mt-2 grid list-none gap-2.5 p-0">
            {data.steps.map((step, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] items-start gap-3 text-[15.5px] text-paragraph">
                <b className="grid size-7 place-items-center rounded-lg bg-primary text-[13px] font-medium text-white">{i + 1}</b>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-1 border-t border-[#e3e8f0] pt-4 text-[14.5px] text-paragraph">{data.note}</p>
          {data.glance && (
            <p className="rounded-xl bg-bgF5F9FC px-4 py-3 text-[14.5px] text-paragraph">
              <b className="font-medium text-[#111]">{data.glance.strong}</b> {data.glance.text}
            </p>
          )}
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-[#ebf2fd] bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff] p-5 sm:p-7 lg:p-8">
          {status === "done" ? (
            <div role="status" className="grid justify-items-start gap-4 py-6">
              <span className="grid size-12 place-items-center rounded-full bg-[#eef8f0] text-[#0a7a1e]">
                <CheckCircle2 strokeWidth={1} className="size-7" aria-hidden="true" />
              </span>
              <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#111]">{data.doneTitle}</h3>
              <p className="max-w-[48ch] text-[15.5px] text-paragraph">{doneText}</p>
              <button
                type="button"
                onClick={again}
                className="rounded-full border border-primary px-5 py-2.5 text-[15px] font-medium text-primary transition-colors hover:bg-white"
              >
                {data.againText}
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby={`${id}-form-title`} className="grid gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 id={`${id}-form-title`} className="text-[20px] font-medium tracking-[-0.02em] text-[#111]">
                  {current.title}
                </h3>
                {source && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#c7d9fb] bg-white py-1 pl-3 pr-1 text-[13.5px] text-primary">
                    {pickText}
                    <button
                      type="button"
                      onClick={() => {
                        setSource("");
                        if (modelField) set(modelField, "");
                      }}
                      aria-label="Clear selection"
                      className="rounded-full px-2.5 py-1 text-[13px] text-paragraph hover:bg-bgF5F9FC hover:text-primary"
                    >
                      Change
                    </button>
                  </span>
                )}
              </div>

              {/* Tabs: each one shows its own fields below */}
              <fieldset className="grid gap-2.5">
                <legend className={`${labelCls} mb-2.5`}>{data.legend}</legend>
                <div className="flex flex-wrap gap-2">
                  {data.tabs.map((t) => (
                    <label
                      key={t.value}
                      className={`flex min-h-10 cursor-pointer items-center whitespace-nowrap rounded-full border px-4 text-[14.5px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary ${
                        tab === t.value
                          ? "border-primary bg-primary font-medium text-white"
                          : "border-[#d9e2f0] bg-white text-paragraph hover:border-primary hover:text-primary"
                      }`}
                    >
                      <input
                        type="radio"
                        name="enquiry_type"
                        value={t.value}
                        checked={tab === t.value}
                        onChange={() => switchTab(t.value)}
                        className="sr-only"
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                {fields.map(renderField)}

                <p className="border-t border-[#dfe6f2] pt-4 text-[13px] font-medium uppercase tracking-[0.06em] text-paragraph sm:col-span-2">
                  {data.detailsTitle}
                </p>
                {CONTACT.map((c) => (
                  <div key={c.name} className="grid content-start gap-1.5">
                    <label htmlFor={`${id}-${c.name}`} className={labelCls}>
                      {c.label} <span className="text-[#c41a1a]" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={c.name === "name" ? nameRef : undefined}
                      id={`${id}-${c.name}`}
                      name={c.name}
                      type={c.type}
                      autoComplete={c.autoComplete}
                      placeholder={"placeholder" in c ? c.placeholder : undefined}
                      required
                      value={values[c.name] ?? ""}
                      onChange={(e) => set(c.name, e.target.value)}
                      aria-invalid={errors[c.name] ? true : undefined}
                      aria-describedby={errors[c.name] ? `${id}-${c.name}-err` : undefined}
                      className={input}
                    />
                    {errors[c.name] && (
                      <span id={`${id}-${c.name}-err`} className="text-[13px] text-[#c41a1a]">
                        {errors[c.name]}
                      </span>
                    )}
                  </div>
                ))}
                <div className="grid gap-1.5 sm:col-span-2">
                  <label htmlFor={`${id}-message`} className={labelCls}>
                    {data.messageLabel}
                  </label>
                  <textarea
                    id={`${id}-message`}
                    name="message"
                    rows={3}
                    placeholder={data.messagePlaceholder}
                    value={values.message ?? ""}
                    onChange={(e) => set("message", e.target.value)}
                    className={`${input} resize-y`}
                  />
                </div>
              </div>

              <input type="hidden" name="page" value={data.page} />
              {Object.entries(data.hidden ?? {}).map(([k, v]) => (
                <input key={k} type="hidden" name={k} value={v} />
              ))}
              <input type="hidden" name="source_button" value={source} />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[15px] border border-primary bg-primary px-7 py-3.5 text-16 font-medium text-white transition-colors hover:bg-[#152d7a] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? data.sendingText : data.submitText}
                  <ArrowRight strokeWidth={1} className="size-5" aria-hidden="true" />
                </button>
                <p className="text-[13px] text-paragraph">{data.smallText}</p>
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-[10px] border border-[#f3c9c9] bg-[#fdf3f3] px-4 py-3 text-[14.5px] text-[#c41a1a]">
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
