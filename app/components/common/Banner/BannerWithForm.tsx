"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CustomButton from "@/app/components/common/CustomButton";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";

/* ----------------------------- types ----------------------------- */

export interface ButtonItem {
  text: string;
  icon: string; // lucide icon name or image path (same as BannerMain)
  hoverScroll?: boolean;
  bgButton: string;
  dark: boolean;
  href: string;
}

export interface PointsItem {
  value?: string;
  desc?: string;
}

export interface FormData {
  title: string;
  subtitle: string;
  submitText: string;
  userOptions: string[];
}

export interface BannerFormItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  backgroundImage: string;
  mobbanner: string;
  buttons: ButtonItem[];
  points?: PointsItem[];
  form: FormData;
}

interface BannerWithFormProps {
  bannerData: BannerFormItem;
  descstyle?: string;
  classpointdes?: string;
  onSubmit?: (values: FormValues) => void | Promise<void>;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  users: string;
}

/* --------------------------- animations --------------------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const formCard: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
  },
};

/* --------------------------- shared styles --------------------------- */

const labelClass = "block text-[14px] lg:text-[15px] 3xl:text-[16px] text-paragraph mb-2";
const fieldClass =
  "w-full h-12 3xl:h-[48px] rounded-lg border border-[#E5E5E5] bg-white/70 px-3 text-[14px] lg:text-[15px] text-paragraph outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

/* --------------------------- component --------------------------- */

export default function BannerWithForm({
  bannerData,
  descstyle,
  classpointdes,
  onSubmit,
}: BannerWithFormProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    users: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const { form } = bannerData;

  return (
    <section
      className={` xl:min-h-[79.44dvh] flex items-center w-full bg-cover rounded-2xl relative overflow-hidden xl:mt-[11px] ${
        isMobile ? "bg-top" : "bg-right"
      }`}
      style={{
        backgroundImage: `url('${isMobile ? bannerData.mobbanner : bannerData.backgroundImage}')`,
      }}
    >
      {/* desktop white fade from the left (image -> content) */}
      <div
        className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none md:max-w-[100%] 2xl:max-w-[62%]"
        style={{
          backgroundImage:
            "linear-gradient(270.05deg, #e3e2e400 .04%, #ffffffad 28.62%, #fff 55.84% 93.96%)",
        }}
      />

      <div
        className="container relative md:!bg-none rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(0deg,#FFFFFF 0%, #FFFFFF 68.14%, rgba(255, 255, 255, 0) 96.96%)",
        }}
      >
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          className="pt-[332px] pb-4 md:py-52 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-6 xl:gap-12 3xl:gap-[100px]"
        >
          {/* ------------------------- LEFT CONTENT ------------------------- */}
          <div className="relative lg:w-[58%] 3xl:w-[57.47%]">
            <motion.div variants={fadeUp}>
              <SectionTag text={bannerData.tag} />
            </motion.div>

            <motion.div variants={fadeUp} className="my-4 md:mt-[26px]">
              <HeadingTag
                as="h1"
                highlightLast={bannerData.highlightLast}
                text={bannerData.heading}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className={`${descstyle ?? ""} text-paragraph text-[16px] lg:text-[18px] 3xl:text-[24px] leading-[1.625] lg:leading-[1.778] 3xl:leading-[1.334] tracking-[-3%]`}
            >
              {bannerData.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pt-52"
            >
              {bannerData.buttons.map((btn, i) => (
                <CustomButton
                  key={i}
                  text={btn.text}
                  icon={btn.icon}
                  bgButton={btn.bgButton}
                  dark={btn.dark}
                  href={btn.href}
                  hoverScroll={btn.hoverScroll}
                />
              ))}
            </motion.div>

            {bannerData.points && bannerData.points.length > 1 && (
              <motion.div
                variants={fadeUp}
                className="mt-52 grid grid-cols-2 lg:flex   gap-4 3xl:gap-7 3xl:gap-10.5"
              >
                {bannerData.points.map((point, i) => (
                  <div key={i} className={`${classpointdes ?? ""} lg:flex-1`}>
                    <p className="text-primary text-24 lg:!text-[16px] xl:!text-[20px] 2xl:text-[24px] font-medium !leading-[1.6] lg:!leading-[1.3334] tracking-[-3%]">
                      {point.value}
                    </p>
                    <p className="mt-2 text-paragraph text-[16px] lg:text-[14px] xl:text-[16px] font-medium lg:font-normal xl:!whitespace-pre-line">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* ------------------------- RIGHT FORM CARD ------------------------- */}
          <motion.form
            variants={formCard}
            onSubmit={handleSubmit}
            className="w-full lg:w-[42%] lg:max-w-[540px] 3xl:max-w-[540px] rounded-2xl border border-white/50 bg-white/55 p-5 lg:p-6 shadow-[0_8px_32px_0_rgba(17,74,159,0.10)] backdrop-blur-xl"
          >
            <h2 className="text-primary text-[22px] lg:text-[24px] font-medium leading-[1.2] tracking-[-3%]">
              {form.title}
            </h2>
            <p className="mt-1 text-paragraph text-[14px] lg:text-[16px]">{form.subtitle}</p>

            <div className="mt-5 flex flex-col gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      values.users ? "" : "text-paragraph/80"
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
                    className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-paragraph"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="mt-1 h-[45px] w-full rounded-lg bg-primary text-white text-[14px] lg:text-[16px] font-medium shadow-[0_6px_16px_rgba(17,74,159,0.25)] transition-colors duration-300 hover:bg-[#0d3a7d] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : form.submitText}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
