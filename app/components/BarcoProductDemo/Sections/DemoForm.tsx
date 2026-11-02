"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

export interface DemoFormData {
  endpoint: string;
  detailsLegend: string;
  productsLegend: string;
  availabilityLegend: string;
  locations: string[];
  products: string[];
  times: string[];
  hint: string;
  submitText: string;
  sendingText: string;
  productsError: string;
  dateError: string;
  invalidText: string;
  errorText: string;
  successTitle: string;
  successText: string;
}

type Status = "idle" | "sending" | "done" | "error";

const fieldCls =
  "w-full rounded-[10px] border border-[#D3D3D3] bg-white px-[14px] py-3 text-[15.5px] text-[#111] outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#8a8a8a] focus:border-primary focus:shadow-[0_0_0_3px_rgb(17_74_159/0.15)]";
const invalidCls = "[&_:invalid]:border-[#c41a1a]";
const legendCls = "mb-3 p-0 text-[17px] font-medium tracking-[-0.02em] text-[#111]";
const errCls = "m-0 text-[14px] text-[#c41a1a]";

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="grid min-w-0 gap-1.5">
      <label htmlFor={id} className="text-[14px] text-[#111]">
        {label} <i className="not-italic text-[#c41a1a]">*</i>
      </label>
      {children}
    </div>
  );
}

function Select({ id, name, options }: { id: string; name: string; options: string[] }) {
  return (
    <div className="relative">
      <select id={id} name={name} required defaultValue="" className={`${fieldCls} appearance-none pr-10`}>
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown
        strokeWidth={1.5}
        className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-paragraph"
      />
    </div>
  );
}

export default function DemoForm({ data }: { data: DemoFormData }) {
  const [status, setStatus] = useState<Status>("idle");
  const [tried, setTried] = useState(false);
  const [message, setMessage] = useState("");
  const [productsErr, setProductsErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  // Earliest bookable date is tomorrow
  const [minDate] = useState(() => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return iso(t);
  });
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "done") doneRef.current?.focus();
  }, [status]);

  const dateOk = (value: string) => {
    if (!value) return false;
    const day = new Date(`${value}T12:00:00`).getDay();
    return value >= minDate && day !== 0 && day !== 6;
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture before the await
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const ok = form.checkValidity();
    const prod = form.querySelectorAll("input[name=products]:checked").length > 0;
    const dv = dateOk(date);

    setTried(true);
    setProductsErr(!prod);
    setDateErr(!dv);
    if (!ok || !prod || !dv) {
      setMessage(data.invalidText);
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }

    setMessage("");
    setStatus("sending");
    try {
      const res = await fetch(data.endpoint, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage(data.errorText);
    }
  }

  return (
    <div className="grid min-w-0 gap-3 rounded-2xl border border-[#e3e8f0] bg-white p-[clamp(20px,3vw,36px)]">
      {status === "done" ? (
        <div ref={doneRef} tabIndex={-1} className="grid gap-2 px-2 py-6 outline-none">
          <h2 className="text-[28px] font-normal text-primary">{data.successTitle}</h2>
          <p className="text-paragraph">{data.successText}</p>
        </div>
      ) : (
        <form noValidate onSubmit={onSubmit} className={`grid gap-[22px] ${tried ? invalidCls : ""}`}>
          <fieldset className="m-0 grid min-w-0 gap-3.5 border-0 p-0">
            <legend className={legendCls}>{data.detailsLegend}</legend>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field id="name" label="Full name">
                <input id="name" name="name" type="text" required autoComplete="name" className={fieldCls} />
              </Field>
              <Field id="job" label="Job title">
                <input
                  id="job"
                  name="job"
                  type="text"
                  required
                  placeholder="e.g. IT Manager"
                  autoComplete="organization-title"
                  className={fieldCls}
                />
              </Field>
              <Field id="company" label="Company">
                <input id="company" name="company" type="text" required autoComplete="organization" className={fieldCls} />
              </Field>
              <Field id="email" label="Work email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  autoComplete="email"
                  className={fieldCls}
                />
              </Field>
              <Field id="phone" label="Mobile number">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+971 5X XXX XXXX"
                  autoComplete="tel"
                  className={fieldCls}
                />
              </Field>
              <Field id="emirate" label="Location">
                <Select id="emirate" name="emirate" options={data.locations} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="m-0 grid min-w-0 gap-3.5 border-0 p-0">
            <legend className={legendCls}>
              {data.productsLegend} <i className="not-italic text-[#c41a1a]">*</i>
            </legend>
            <div className="flex flex-wrap gap-2">
              {data.products.map((p, i) => (
                <label key={p} className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    name="products"
                    value={p}
                    id={`products-${i}`}
                    onChange={() => tried && setProductsErr(false)}
                    className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
                  />
                  <span className="inline-block rounded-[10px] border border-[#D3D3D3] bg-white px-3.5 py-[9px] text-[14.5px] text-[#111] transition-colors duration-200 peer-checked:border-primary peer-checked:bg-[#eef5ff] peer-checked:text-primary peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                    {p}
                  </span>
                </label>
              ))}
            </div>
            {productsErr && <p className={errCls}>{data.productsError}</p>}
          </fieldset>

          <fieldset className="m-0 grid min-w-0 gap-3.5 border-0 p-0">
            <legend className={legendCls}>{data.availabilityLegend}</legend>
            <div className="grid gap-3.5 sm:grid-cols-2">
              <Field id="date" label="Preferred date">
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  min={minDate}
                  // server and browser can disagree on "tomorrow" across time zones
                  suppressHydrationWarning
                  onChange={(e) => setDateErr(!!e.target.value && !dateOk(e.target.value))}
                  className={`${fieldCls} py-[11px]`}
                />
              </Field>
              <Field id="time" label="Preferred time">
                <Select id="time" name="time" options={data.times} />
              </Field>
            </div>
            <p className="m-0 text-[13.5px] text-paragraph">{data.hint}</p>
            {dateErr && <p className={errCls}>{data.dateError}</p>}
          </fieldset>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full cursor-pointer rounded-[15px] bg-linear-to-r from-[#114a9f] to-[#032c69] px-7 py-4 text-[16px] font-medium text-white shadow-[0_0_2px_0_#0000000a,0_8px_8px_0_#00000014] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:justify-self-start"
          >
            {status === "sending" ? data.sendingText : data.submitText}
          </button>

          {message && (
            <p role="alert" className={errCls}>
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
