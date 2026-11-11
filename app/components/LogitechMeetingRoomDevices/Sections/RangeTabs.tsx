"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import { platformLogos } from "@/app/components/LogitechProduct/shared";
import type { PlatformKey } from "@/app/components/LogitechProduct/Sections/FeatureGrid";

export interface RangeItem {
  title: string;
  size: string;
  text: string;
  isNew?: boolean;
  image: string;
  href: string;
}

export interface RangeTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tabs: { label: string; items: RangeItem[] }[];
  platforms?: { label: string; logos: PlatformKey[] };
}

interface Props {
  data: RangeTabsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Product range split into tabs (video bars, cameras, controllers); each card links to its product page
export default function RangeTabs({ data, variant, subtitleClass }: Props) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + data.tabs.length) % data.tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="range" className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Logitech product types" className="mt-52 mb-5 flex flex-wrap gap-2 overflow-x-auto [scrollbar-width:none]">
          {data.tabs.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`range-tab-${i}`}
              aria-controls={`range-panel-${i}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`whitespace-nowrap rounded-full border px-[22px] py-2.5 text-[15px] font-medium transition-colors ${
                i === active ? "border-primary bg-primary text-white" : "border-[#e6e6e6] bg-white text-paragraph hover:border-[#c9d7f0] hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {data.tabs.map((t, i) => (
          <div
            key={t.label}
            role="tabpanel"
            id={`range-panel-${i}`}
            aria-labelledby={`range-tab-${i}`}
            hidden={i !== active}
            className={`grid gap-4 sm:grid-cols-2 ${t.items.length > 4 ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}
          >
            {t.items.map((p) => (
              <div
                key={p.href}
                className="group relative flex flex-col overflow-hidden rounded-[14px] border border-[#e6e6e6] bg-white transition-[border-color,box-shadow] hover:border-[#c9d7f0] hover:shadow-[0_8px_22px_rgba(17,74,159,0.07)]"
              >
                <div className="relative flex h-[140px] items-center justify-center bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff] px-7 py-5">
                  {p.isNew && (
                    <span className="absolute left-3 top-3 rounded bg-primary px-2 py-1 text-[10.5px] uppercase tracking-[0.06em] text-white">New</span>
                  )}
                  <img src={p.image} alt={`Logitech ${p.title}`} loading="lazy" className="h-full w-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">
                  <span className="mb-1.5 text-[11px] uppercase tracking-[0.06em] text-[#6b6b6b]">{p.size}</span>
                  <Link
                    href={p.href}
                    className="mb-2 inline-flex items-center gap-2 text-[19px] font-medium leading-[1.3] text-[#111] after:absolute after:inset-0 group-hover:text-primary"
                  >
                    {p.title}
                    <ArrowRight strokeWidth={1} className="size-4 flex-none text-primary transition-transform group-hover:translate-x-[3px]" />
                  </Link>
                  <p className="text-[14px] leading-[1.55] text-paragraph">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {data.platforms && (
          <div className="mt-4 flex flex-col items-start gap-3 rounded-xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] px-[18px] py-2.5 min-[961px]:flex-row min-[961px]:items-center min-[961px]:justify-between">
            <span className="text-[12px] uppercase tracking-[0.06em] text-paragraph">{data.platforms.label}</span>
            <div className="flex w-full overflow-hidden rounded-lg bg-white sm:w-auto">
              {data.platforms.logos.map((key, i) => {
                const logo = platformLogos[key];
                return (
                  <div key={key} className={`flex h-12 flex-1 items-center justify-center px-3 sm:w-[170px] sm:flex-none ${i > 0 ? "border-l border-[#e3e8f1]" : ""}`}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" className={`h-auto w-auto max-w-full ${logo.className}`} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
