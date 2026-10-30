"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "../CustomButton";
import { ChevronDown } from "lucide-react";

export interface FeatureItem {
  backgroundImage: string;
  mobbanner: string;
  tag: string;
  heading: string;
  highlightLast: number;
  description?: string;
  cta: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  points?: string[];
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  users: string;
}

export interface CallbackFormData {
  title: string;
  subtitle: string;
  submitText: string;
  userOptions: string[];
}

interface ctaProps {
  data: FeatureItem;
  descclass?: string;
  sectionspace?: string;
  /** Set to null to hide the form */
  form?: CallbackFormData | null;
  onSubmit?: (values: FormValues) => void | Promise<void>;
}

const defaultForm: CallbackFormData = {
  title: "Request a Call Back",
  subtitle: "Lets discuss your IT support needs",
  submitText: "Request Call Back",
  userOptions: ["1 - 10", "11 - 25", "26 - 50", "51 - 100", "100+"],
};

const formCard: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
  },
};

const labelClass =
  "block mb-2 text-[16px] !leading-[1] text-paragraph font-normal";

const fieldClass =
  "w-full h-[51px] rounded-xl border border-[#E5E7EB] bg-[#F7F9FC] px-3 text-[16px] text-[#333] outline-none focus:border-primary";

export default function FooterCtaWithForm({
  data,
  descclass,
  sectionspace = "",
  form = defaultForm,
  onSubmit,
}: ctaProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState<number | null>(null);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    users: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();
  const sourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Overlay width follows the content block (+50%), recalculated on resize/content change.
  useLayoutEffect(() => {
    const measure = () => {
      if (sourceRef.current) {
        const width = sourceRef.current.getBoundingClientRect().width;
        setOverlayWidth(width * 1.5);
      }
    };

    measure();
    window.addEventListener("resize", measure);

    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined" && sourceRef.current) {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(sourceRef.current);
    }

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure);
    }

    return () => {
      window.removeEventListener("resize", measure);
      resizeObserver?.disconnect();
    };
  }, [data]);

  const handleChange =
    (key: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit?.(values);
      setValues({ name: "", email: "", phone: "", users: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={`min-h-[60dvh] xl:min-h-[81.913dvh] flex items-center w-full bg-cover rounded-2xl relative overflow-hidden ${
        isMobile ? "bg-top " : "bg-right"
      }`}
      style={{
        backgroundImage: isMobile ? "none" : `url('${data.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
      {isMobile && (
        <div
          aria-hidden="true"
          className="md:hidden absolute inset-x-3 top-3 bottom-0 rounded-2xl bg-no-repeat"
          style={{
            backgroundImage: `url('${data.mobbanner}')`,
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        />
      )}

      <div
        className="hidden md:block 3xl:hidden absolute inset-y-0 left-0 w-full bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.9)_36%,#fff_66%)]"
        style={overlayWidth ? { maxWidth: `${overlayWidth}px` } : undefined}
      />

      <div className="hidden md:block 3xl:hidden absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(0deg,#fff_0%,rgba(255,255,255,0.82)_38%,rgba(255,255,255,0)_100%)]" />

      <div className="md:hidden absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.08)_32%,rgba(255,255,255,0.9)_56%,#fff_72%)]" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8 max-md:pb-5">
          {/* ───────── Left content ───────── */}
          <div
            className={`${sectionspace} py-12 md:py-20 lg:py-52 relative w-fit`}
            ref={sourceRef}
          >
            <div className="relative flex flex-col gap-6 2xl:gap-6">
              <div>
                {data.tag && <SectionTag text={data.tag} />}
                <div className={data.tag ? "mt-4 md:mt-6.5" : ""}>
                  <HeadingTag
                    as="h2"
                    highlightLast={data.highlightLast}
                    className="text-heading md:whitespace-pre-line"
                    text={data.heading}
                    titlebrake="hidden "
                  />
                </div>
                {data.description && (
                  <p
                    className={`text-18 text-paragraph ${descclass ?? ""} mt-4 2xl:mt-6`}
                  >
                    {data.description}
                  </p>
                )}
              </div>

              {data.points && data.points.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content] w-fit gap-2 md:gap-6 xl:gap-x-[52px]">
                  {data.points.map((item, i) => (
                    <div className="flex gap-2 items-center" key={i}>
                      <div className="flex items-center w-5 h-5 rounded-full bg-primary justify-center">
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 2.75L2.75 4.75L6.75 0.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-primary text-18">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 md:pt-8 flex flex-col md:flex-row md:items-center gap-4">
              <CustomButton
                text={data.cta}
                dark={true}
                href={data.ctaHref}
                icon="/assets/images/icons/fullarrow.svg"
              />
              {data.secondaryCta && (
                <CustomButton
                  text={data.secondaryCta}
                  dark={false}
                  bgButton="bg-white"
                  href={data.secondaryCtaHref}
                  icon="/assets/images/icons/fullarrow.svg"
                />
              )}
            </div>
          </div>

          {/* ───────── Right glass form card ───────── */}
          {form && (
            <motion.form
              variants={reduceMotion ? undefined : formCard}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              onSubmit={handleSubmit}
              className="w-full lg:w-[542px] lg:max-w-[542px] shrink-0
  lg:-translate-y-[30px]
  rounded-[18px]
  border border-white/50
  bg-white/40
  p-6

 
  shadow-[0_8px_32px_0_rgba(17,74,159,0.10)]
  backdrop-blur-xl"
            >
              <div>
                <h2 className="text-primary text-24  leading-[1.333] tracking-[-0.03em]">
                  {form.title}
                </h2>
                <p className="mt-1 text-paragraph text-18 leading-[1.444]">
                  {form.subtitle}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <label htmlFor="cb-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="cb-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange("name")}
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cb-email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      id="cb-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cb-phone" className={labelClass}>
                      Phone number
                    </label>
                    <input
                      id="cb-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange("phone")}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cb-users" className={labelClass}>
                    Number of users
                  </label>
                  <div className="relative">
                    <select
                      id="cb-users"
                      required
                      value={values.users}
                      onChange={handleChange("users")}
                      className={`${fieldClass} appearance-none pr-10 cursor-pointer ${
                        values.users ? "" : "text-paragraph"
                      }`}
                    >
                      <option value="" disabled>
                        Select number of users
                      </option>
                      {form.userOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-heading"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  className="mt-2 lg:mt-2 w-full h-[49px] rounded-xl
  bg-primary text-white text-[16px] leading-none
  transition-colors duration-300
  hover:bg-[#0d3a7d]
  disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : form.submitText}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
