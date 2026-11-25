"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RangeProduct {
  name: string;
  image: string;
  alt: string;
  text: string;
  room: string; // first chip, e.g. "Meeting rooms"
  caps: string[]; // the other chips, e.g. ["Up to 92-inch", "16 mics"]
  href: string; // product page
}

export interface ProductRangeData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tabs: { label: string; items: RangeProduct[] }[];
}

interface Props {
  data: ProductRangeData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// MAXHUB lineup: one tab per product group, each a grid of cards linking to the product pages
export default function ProductRange({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (cur + step + data.tabs.length) % data.tabs.length;
    setCur(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="products" className="scroll-mt-4 rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Product groups" className="mt-52 mb-3 flex flex-wrap gap-2" onKeyDown={onKey}>
          {data.tabs.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`range-tab-${i}`}
              aria-controls={`range-pane-${i}`}
              aria-selected={i === cur}
              tabIndex={i === cur ? 0 : -1}
              onClick={() => setCur(i)}
              className={`rounded-full border px-[22px] py-[9px] text-[15px] font-medium transition-colors ${
                i === cur ? "border-primary bg-primary text-white" : "border-[#e3e8f0] bg-white text-paragraph hover:border-[#c9d7f0] hover:text-primary"
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
            id={`range-pane-${i}`}
            aria-labelledby={`range-tab-${i}`}
            hidden={i !== cur}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {t.items.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#e3e8f0] bg-white transition-[border-color,box-shadow] duration-200 hover:border-[#c9d7f0] hover:shadow-[0_8px_22px_rgb(17_74_159_/_0.07)]"
              >
                <div className="flex h-[180px] items-center justify-center bg-linear-to-b from-[#f2f2f9] to-[#f3f6ff] px-7 py-5">
                  <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <span className="flex items-center gap-2.5 text-[16px] font-medium tracking-[-0.02em] text-[#111] transition-colors group-hover:text-primary">
                    {p.name}
                    <ArrowRight strokeWidth={1} aria-hidden className="size-[18px] transition-transform group-hover:translate-x-[3px]" />
                  </span>
                  <p className="text-[14.5px] text-paragraph">{p.text}</p>
                  <div className="mt-auto flex flex-wrap gap-[5px] pt-1">
                    {[p.room, ...p.caps].map((c) => (
                      <span key={c} className="whitespace-nowrap rounded-full border border-[#dce5f5] bg-white px-[9px] py-1 text-[11.5px] font-medium leading-[1.35] text-primary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
