"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const inputClass =
  "w-full rounded-[10px] border border-[#E5E5E5] bg-white px-3 py-[5px] text-sm text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15";

type Status = "idle" | "sending" | "success" | "error";

       export interface CallbackFormData {
  title: string;
  subtitle: string;
  endpoint: string;
  submitText: string;
  sendingText: string;
  successText: string;
  errorText: string;
  labels: {
    name: string;
    company: string;
    email: string;
    phone: string;
    contract: string;
    users: string;
    usersPlaceholder: string;
    comment: string;
    commentPlaceholder: string;
  };
  userRanges: { value: string; label: string }[];
}

export default function CallbackForm({ data }: { data: CallbackFormData }) {
  const [status, setStatus] = useState<Status>("idle");
  const { labels } = data;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // capture before the await
    setStatus("sending");

    try {
      const res = await fetch(data.endpoint, {
        method: "POST",
        body: new FormData(form),
      });
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
      className="rounded-2xl bg-white p-5 shadow-[0px_8px_24px_0px_#114A9F1A] sm:p-6">
      <h2 className="text-24 font-medium text-primary">{data.title}</h2>
      <p className="  mb-6 text-16 text-pharagraph !leading-[1.4]">{data.subtitle}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={labels.name} htmlFor="cb-name">
          <input id="cb-name" name="Name" type="text" required className={inputClass} />
        </Field>

        <Field label={labels.company} htmlFor="cb-company">
          <input id="cb-company" name="Company" type="text" className={inputClass} />
        </Field>

        <Field label={labels.email} htmlFor="cb-email">
          <input id="cb-email" name="EmailId" type="email" required className={inputClass} />
        </Field>

        <Field label={labels.phone} htmlFor="cb-phone">
          <input id="cb-phone" name="Phone" type="tel" required className={inputClass} />
        </Field>

        <Field label={labels.contract} htmlFor="cb-contract">
          <input id="cb-contract" name="ContractEnds" type="date" className={inputClass} />
        </Field>

        <Field label={labels.users} htmlFor="cb-users">
          <div className="relative">
            <select
              id="cb-users"
              name="Employees"
              defaultValue=""
              className={`${inputClass} appearance-none pr-9`}
            >
              <option value="">{labels.usersPlaceholder}</option>
              {data.userRanges.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-black" />
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field label={labels.comment} htmlFor="cb-comment">
            <textarea
              id="cb-comment"
              name="Comment"
              rows={3}
              maxLength={2000}
              placeholder={labels.commentPlaceholder}
              className={`${inputClass} resize-none min-h-20.5`}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-[12px] bg-gradient-to-r from-blue-800 to-blue-950 px-8 py-[10.5px] text-base text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? data.sendingText : data.submitText}
      </button>

      <p aria-live="polite" className="  text-sm">
        {status === "success" && <span className="text-green-700 mt-3 block">{data.successText}</span>}
        {status === "error" && <span className="text-red-600 mt-3 block">{data.errorText}</span>}
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm text-paragraph">
        {label}
      </label>
      {children}
    </div>
  );
}