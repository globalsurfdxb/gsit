"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import SectionTag from "@/app/components/common/SectionTag";
import HeadingTag from "@/app/components/common/HeadingTag";
import CustomButton from "@/app/components/common/CustomButton";

export interface CtaStep {
  title: string;
  description: string;
}

export interface CtaContactLink {
  text: string;
  href: string;
}

export interface FeatureItem {
  backgroundImage: string;
  mobbanner: string;
  tag: string;
  heading: string;
  highlightLast: number;
  description?: string;
  cta?: string; // optional now: buttons only render when set
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  points?: string[];
  steps?: CtaStep[];
  contact?: { label: string; links: CtaContactLink[] };
}

interface ctaProps {
  data: FeatureItem;
  descclass?: string;
  sectionspace?: string;
  aside?: ReactNode; // e.g. the call-back form, shown in a glass card on the right
}

export default function FooterCta({
  data,
  descclass,
  sectionspace = "",
  aside,
}: ctaProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState<number | null>(null);

  const sourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Measure the content block's rendered width and size the overlay from it.
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

  return (
    <section
      className={`min-h-[60dvh] xl:min-h-[81.913dvh] flex items-center w-full bg-cover rounded-2xl relative overflow-hidden ${
        isMobile ? "bg-top" : "bg-right"
      }`}
      style={{
        backgroundImage: `url('${isMobile ? data.mobbanner : data.backgroundImage}')`,
      }}
    >
      <div
        className="hidden md:block 3xl:hidden -left-13 md:left-0 absolute inset-0 bg-[linear-gradient(270.05deg,rgba(227,226,228,0)_0.04%,rgba(255,255,255,0.8)_23.62%,#FFFFFF_55.84%,#FFFFFF_93.96%)]"
        style={overlayWidth ? { maxWidth: `${overlayWidth}px` } : undefined}
      />

      <div className="md:hidden absolute rounded-2xl bottom-[-1px] h-[70%] w-full bg-[linear-gradient(0deg,#fff_0%,#ffffffc7_50.61%,#ffffffc9_39.61%,#fff0_88.38%)]" />

      <div className="container rounded-2xl">
        {/* With an aside: content left, card right. Without: same as before. */}
        <div
          className={
            aside
              ? "flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
              : ""
          }
        >
          {/* Left content */}
          <div
            className={`${sectionspace} py-52 relative w-fit min-w-0`}
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
                  <div>
                    <p className={`text-18 text-paragraph ${descclass ?? ""} mt-4 2xl:mt-6`}>
                      {data.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Checklist points */}
              {data.points && data.points.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-[max-content_max-content] w-fit gap-2 md:gap-6 xl:md:gap-x-[52px]">
                  {data.points.map((item, i) => (
                    <div className="flex gap-2 items-center" key={i}>
                      <div className="flex gap-2 items-center w-5 h-5 rounded-full bg-primary justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 2.75L2.75 4.75L6.75 0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-primary text-18">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Numbered steps */}
              {data.steps && data.steps.length > 0 && (
                <ol className="mt-2 flex flex-col gap-4 lg:mt-4 lg:gap-5">
                  {data.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="w-8 shrink-0 text-18 text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-18 text-paragraph">{step.title}</p>
                        <p className="mt-1 text-18 text-textgray">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}

              {/* Contact line */}
              {data.contact && (
                <p className="mt-2 text-18 text-primary lg:mt-4">
                  {data.contact.label}{" "}
                  {data.contact.links.map((link, i) => (
                    <span key={i}>
                      {i > 0 && <span className="mx-1">·</span>}
                      <a href={link.href} className="underline underline-offset-2">
                        {link.text}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>

            {/* Buttons: only when a primary CTA is provided */}
            {data.cta && (
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
            )}
          </div>

          {/* Right: frosted glass card */}
          {aside && (
            <div className="relative w-full pb-6 md:pb-0 lg:w-[42%] lg:shrink-0 3xl:w-[585px]">
              <div className="rounded-2xl border border-white/60 bg-white/30 p-5 shadow-[0px_8px_32px_0px_#0000001a] backdrop-blur-md lg:p-6">
                {aside}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}