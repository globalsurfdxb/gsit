"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowRight, X } from "lucide-react";

/* ---------- config ---------- */
export const INTEREST_OPTIONS = [
  "Acronis Advanced Email Security",
  "Fully managed Acronis",
  "Acronis licensing / co-managed",
  "Backup health review",
];

const SUBMIT_URL = "/api/lets-talk"; // TODO: point to your existing form handler

/* ---------- context ---------- */
interface EnquiryCtx {
  openEnquiry: (interest?: string) => void;
  closeEnquiry: () => void;
}
const EnquiryContext = createContext<EnquiryCtx | null>(null);

export const useEnquiryModal = () => {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiryModal must be used inside <EnquiryModalProvider>");
  return ctx;
};

/* ---------- provider + modal ---------- */
const field =
  "w-full h-[50px] rounded-lg border border-[#D3D3D3] bg-white px-4 text-[16px] text-paragraph outline-none focus:border-primary focus:ring-1 focus:ring-primary";
const label = "block mb-2 text-[14px] text-paragraph";

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const openEnquiry = useCallback((value?: string) => {
    if (value && INTEREST_OPTIONS.includes(value)) setInterest(value);
    setStatus("idle");
    dialogRef.current?.showModal();
  }, []);

  const closeEnquiry = useCallback(() => dialogRef.current?.close(), []);

  // Any existing button/link with href="#enquire" (or data-enquiry) opens the popup,
  // so no change is needed in the individual components.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        'a[href="#enquire"], [data-enquiry]'
      );
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      openEnquiry(el.dataset.interest);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [openEnquiry]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="enquiry-title"
        onClick={(e) => e.target === dialogRef.current && closeEnquiry()}
        className="enquiry-dialog fixed inset-0 m-auto w-[calc(100%-32px)] max-w-[520px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded-2xl bg-white p-6 md:p-9"
      >
        <button
          type="button"
          onClick={closeEnquiry}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF2FF] text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 id="enquiry-title" className="text-primary text-[28px] leading-[1.2] tracking-[-3%]">
          Let’s talk
        </h2>
        <p className="mt-2 pr-10 text-paragraph text-17">
          Please provide your details below, and we will get in touch with you shortly.
        </p>

        {status === "done" ? (
          <p className="mt-8 rounded-lg bg-bgF5F9FC p-5 text-primary text-17">
            Thank you. We have received your details and will be in touch shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label htmlFor="enq-interest" className={label}>I’m interested in</label>
              <select
                id="enq-interest"
                name="interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={field}
              >
                {INTEREST_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="enq-name" className={label}>Name</label>
                <input id="enq-name" name="name" autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="enq-email" className={label}>Email*</label>
                <input id="enq-email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
              <div>
                <label htmlFor="enq-phone" className={label}>Phone</label>
                <input id="enq-phone" name="phone" type="tel" autoComplete="tel" className={field} />
              </div>
              <div>
                <label htmlFor="enq-company" className={label}>Company name*</label>
                <input id="enq-company" name="company" required autoComplete="organization" className={field} />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex h-[58px] w-full items-center justify-center gap-2 rounded-full bg-primary text-white text-[16px] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
              <ArrowRight className="h-5 w-5" />
            </button>

            {status === "error" && (
              <p role="alert" className="text-[14px] text-colorred">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </dialog>
    </EnquiryContext.Provider>
  );
}