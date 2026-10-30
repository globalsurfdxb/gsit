"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import { popups, type PopupField } from "./popupConfig";

const OPEN_EVENT = "popup:open";

/** Open a popup from any code: openPopup("enquiry", { interest: "Backup health review" }) */
export function openPopup(id: string, preset: Record<string, string> = {}) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { id, preset } }));
}

const fieldCls =
  "w-full rounded-lg border border-[#D3D3D3] bg-white px-4 text-[16px] text-paragraph outline-none focus:border-primary focus:ring-1 focus:ring-primary";
const labelCls = "block mb-2 text-[14px] text-paragraph";

function Field({ f, preset }: { f: PopupField; preset?: string }) {
  const id = `popup-${f.name}`;
  return (
    <div className={f.half ? "" : "sm:col-span-2"}>
      <label htmlFor={id} className={labelCls}>
        {f.label}
        {f.required && "*"}
      </label>
      {f.type === "select" ? (
        <select id={id} name={f.name} defaultValue={preset} required={f.required} className={`${fieldCls} h-[50px]`}>
          {f.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : f.type === "textarea" ? (
        <textarea id={id} name={f.name} defaultValue={preset} required={f.required} placeholder={f.placeholder} rows={4} className={`${fieldCls} py-3`} />
      ) : (
        <input id={id} name={f.name} type={f.type} defaultValue={preset} required={f.required} placeholder={f.placeholder} className={`${fieldCls} h-[50px]`} />
      )}
    </div>
  );
}

export default function PopupHost() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<{ id: string; preset: Record<string, string>; n: number } | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const config = active ? popups[active.id] : null;

  // open: from data attributes, legacy #enquire links, or openPopup()
  useEffect(() => {
    const open = (id: string, preset: Record<string, string> = {}) => {
      if (!popups[id]) return;
      setStatus("idle");
      setActive((prev) => ({ id, preset, n: (prev?.n ?? 0) + 1 }));
    };

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-popup], [data-enquiry], a[href="#enquire"]'
      );
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();

      const preset: Record<string, string> = {};
      if (el.dataset.interest) preset.interest = el.dataset.interest; // legacy
      for (const [k, v] of Object.entries(el.dataset)) {
        // data-preset-interest="x"  ->  { interest: "x" }
        if (k.startsWith("preset") && v) {
          const name = k.slice(6);
          preset[name.charAt(0).toLowerCase() + name.slice(1)] = v;
        }
      }
      open(el.dataset.popup ?? "enquiry", preset);
    };

    const onEvent = (e: Event) => {
      const { id, preset } = (e as CustomEvent).detail;
      open(id, preset);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener(OPEN_EVENT, onEvent);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(OPEN_EVENT, onEvent);
    };
  }, []);

  // show the dialog after the new content has rendered
  useEffect(() => {
    const d = dialogRef.current;
    if (active && d && !d.open) {
      d.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, [active]);

  const close = () => dialogRef.current?.close();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!config || !active) return;
    setStatus("sending");
    try {
      const data = new FormData(e.currentTarget);
      data.append("popup", active.id);
      const res = await fetch(config.submitUrl, { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent
      aria-labelledby="popup-title"
      onClick={(e) => e.target === dialogRef.current && close()}
      onClose={() => (document.documentElement.style.overflow = "")}
      className="enquiry-dialog fixed inset-0 m-auto w-[calc(100%-32px)] max-w-[520px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-2xl bg-white p-6 md:p-9"
    >
      {config && active && (
        <>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF2FF] text-primary"
          >
            <X className="h-4 w-4" />
          </button>

          <h2 id="popup-title" className="text-primary text-[28px] leading-[1.2] tracking-[-3%]">
            {config.title}
          </h2>
          {config.description && (
            <p className="mt-2 pr-10 text-paragraph text-17">{config.description}</p>
          )}

          {status === "done" ? (
            <p className="mt-8 rounded-lg bg-bgF5F9FC p-5 text-primary text-17">
              {config.successMessage}
            </p>
          ) : (
            <form
              key={`${active.id}-${active.n}`}
              onSubmit={onSubmit}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {config.fields.map((f) => (
                <Field key={f.name} f={f} preset={active.preset[f.name]} />
              ))}

              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 flex h-[58px] w-full items-center justify-center gap-2 rounded-full bg-primary text-white text-[16px] transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : config.submitLabel}
                <ArrowRight className="h-5 w-5" />
              </button>

              {status === "error" && (
                <p role="alert" className="sm:col-span-2 text-[14px] text-colorred">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </>
      )}
    </dialog>
  );
}