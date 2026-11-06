"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface CataloguePhone {
  tag: string;
  title: string;
  text: string;
  image: string;
  href: string;
  pills: string[];
  bestFor: string;
  series: string;
  features: string[];
}

export interface PhoneCatalogueDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  filters: { series: { key: string; label: string }[]; features: { key: string; label: string }[] };
  empty: { text: string; link: string; href: string };
  data: CataloguePhone[];
}

interface Props {
  data: PhoneCatalogueDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// A phone matches a filter group when no box is ticked, or it has any ticked value
const matches = (values: string[], picked: string[]) => !picked.length || picked.some((v) => values.includes(v));

export default function PhoneCatalogue({ data, variant, subtitleClass }: Props) {
  const [se, setSe] = useState<string[]>([]);
  const [ft, setFt] = useState<string[]>([]);
  const [open, setOpen] = useState(false); // filter panel on mobile

  const shown = data.data.filter((p) => matches([p.series], se) && matches(p.features, ft));
  const active = se.length + ft.length;

  // Counts reflect the other group's current selection
  const countSe = (k: string) => data.data.filter((p) => p.series === k && matches(p.features, ft)).length;
  const countFt = (k: string) => data.data.filter((p) => p.features.includes(k) && matches([p.series], se)).length;

  const toggle = (list: string[], set: (v: string[]) => void, v: string) => set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const group = (title: string, opts: { key: string; label: string }[], picked: string[], set: (v: string[]) => void, count: (k: string) => number) => (
    <details open className="group/fg border-t border-[#e3e8f0]">
      <summary className="flex cursor-pointer list-none items-center justify-between pb-2.5 pt-3.5 text-[15px] font-medium text-[#111] [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown strokeWidth={1} className="size-4 transition-transform duration-200 group-open/fg:rotate-180" />
      </summary>
      <div className="grid gap-0.5 pb-2.5">
        {opts.map((o) => {
          const on = picked.includes(o.key);
          return (
            <label key={o.key} className="grid cursor-pointer grid-cols-[20px_1fr_auto] items-center gap-2.5 rounded-lg px-1 py-[7px] text-[15px] text-[#111] hover:bg-[#eef5ff]">
              <input type="checkbox" checked={on} onChange={() => toggle(picked, set, o.key)} className="peer sr-only" />
              <span
                aria-hidden="true"
                className={`grid size-[18px] place-items-center rounded border-[1.5px] transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary ${
                  on ? "border-primary bg-primary text-white" : "border-[#9aa5b8]"
                }`}
              >
                {on && <Check strokeWidth={1} className="size-3.5" />}
              </span>
              <span>{o.label}</span>
              <span className="text-[13px] tabular-nums text-paragraph">({count(o.key)})</span>
            </label>
          );
        })}
      </div>
    </details>
  );

  return (
    <section id="catalogue" className="bg-white py-82 rounded-2xl scroll-mt-4">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid items-start gap-5 lg:grid-cols-[260px_1fr] lg:gap-6">
          <aside aria-label="Filter products" className="rounded-2xl border border-[#efefef] bg-[#fcfcfc] px-5 pb-3.5 pt-1.5 lg:sticky lg:top-4">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-3 text-16 font-medium text-[#111] lg:pointer-events-none"
            >
              <span>Filters</span>
              <span className="flex items-center gap-2.5 text-[13px] font-medium text-primary">
                {active ? `${active} selected` : ""}
                {/* Filter toggle icon, mobile only */}
                <SlidersHorizontal strokeWidth={1} aria-hidden="true" className="size-5 text-primary lg:hidden" />
              </span>
            </button>
            <div className={`${open ? "block" : "hidden"} lg:block`}>
              {group("Series", data.filters.series, se, setSe, countSe)}
              {group("Features", data.filters.features, ft, setFt, countFt)}
              {active > 0 && (
                <button type="button" onClick={() => { setSe([]); setFt([]); }} className="mt-1.5 px-1 py-1.5 text-[14px] font-medium text-primary hover:underline">
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          <div>
            <p aria-live="polite" className="mb-3.5 mt-0.5 text-[14.5px] text-paragraph">
              Showing <b className="font-medium text-[#111]">{shown.length}</b> of {data.data.length} new phones
            </p>

            {shown.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {shown.map((p) => (
                  <article key={p.title} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#efefef] bg-white transition-colors duration-300 hover:border-[#c7d9fb]">
                    <Link href={p.href} tabIndex={-1} aria-hidden="true" className="block aspect-[432/283] border-b border-[#efefef] bg-white">
                      <img src={p.image} alt="" loading="lazy" width={432} height={283} className="h-full w-full object-contain" />
                    </Link>
                    <div className="flex flex-1 flex-col gap-2.5 px-5 pb-[22px] pt-[18px]">
                      <span className="self-start rounded border border-[#ebf2fd] bg-[#eef5ff] px-2 py-0.5 text-[12px] uppercase tracking-[0.06em] text-primary">{p.tag}</span>
                      <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-0.03em] text-[#111]">
                        <Link href={p.href} className="hover:text-primary">{p.title}</Link>
                      </h3>
                      <p className="text-[14.5px] leading-[1.55] text-paragraph">{p.text}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.pills.map((x) => (
                          <span key={x} className="rounded border border-[#e3e8de] bg-[#f4f6f2] px-2 py-0.5 text-[12.5px] text-[#111]">{x}</span>
                        ))}
                      </div>
                      <p className="text-[14px] text-paragraph">
                        <b className="font-medium text-[#111]">Best for</b> {p.bestFor}
                      </p>
                      <Link href={p.href} className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14.5px] font-medium text-primary hover:underline">
                        View product <ArrowRight strokeWidth={1} className="size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-[#d3d3d3] p-7 text-center text-paragraph">
                {data.empty.text}{" "}
                <Link href={data.empty.href} className="text-primary hover:underline">{data.empty.link}</Link>{" "}
                and we will recommend one for your users.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
