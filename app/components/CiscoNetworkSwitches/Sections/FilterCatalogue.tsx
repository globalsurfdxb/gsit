"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

// Filterable product grid for Cisco category pages (switches, wireless).
// Filter groups come from the data; each product lists the option values it matches in each group.

export interface FilterGroup {
  key: string;
  title: string;
  options: { value: string; label: string }[];
}

export interface FilterProduct {
  tag: string;
  extraTags?: string[]; // more chips beside the main tag, e.g. "As a service"
  title: string;
  description: string;
  image: string;
  href: string;
  specs: { label: string; value: string }[];
  filters: Record<string, string[]>; // group key -> matching option values
  enquireHref?: string; // per-card Enquire link, overrides the section's enquireHref
}

export interface FilterCatalogueData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  sidebarTitle: string; // e.g. "Filter switches"
  noun: string; // plural, used in "Showing 8 of 8 switch series"
  emptyText: string; // shown when nothing matches, before the "Clear filters" button
  groups: FilterGroup[];
  products: FilterProduct[];
  linkLabel?: string; // card link text, defaults to "View product"
  // Optional "need help?" card, always shown after the products
  helpCard?: { tag: string; title: string; text: string; image: string; imageHref?: string; button: { text: string; href: string } };
  // Optional segmented buttons above the results that pick one option of a group (or none for "all")
  quick?: { group: string; label: string; all: string; options: { value: string; label: string }[] };
}

interface Props {
  data: FilterCatalogueData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  enquireHref: string;
  imageAspect?: string; // card image box, e.g. "aspect-[864/568]"
  specCols?: string; // spec row grid, widen the label column for long labels
  id?: string;
}

type Picked = Record<string, string[]>;

// A product matches a group when nothing is ticked there, or it has any ticked value
const matchesGroup = (p: FilterProduct, key: string, picked: Picked) =>
  !picked[key]?.length || picked[key].some((v) => p.filters[key]?.includes(v));

export default function FilterCatalogue({
  data,
  variant,
  subtitleClass,
  enquireHref,
  imageAspect = "aspect-[864/568]",
  specCols = "grid-cols-[96px_1fr]",
  id = "catalogue",
}: Props) {
  const { quick, helpCard: help } = data;
  const [picked, setPicked] = useState<Picked>({});
  const [open, setOpen] = useState(false); // filter panel on mobile

  const matchesAll = (p: FilterProduct, except?: string) =>
    data.groups.every((g) => g.key === except || matchesGroup(p, g.key, picked));

  const shown = data.products.filter((p) => matchesAll(p));
  const active = Object.values(picked).reduce((n, v) => n + v.length, 0);

  // Counts reflect the selections in the other groups
  const count = (key: string, value: string) =>
    data.products.filter((p) => p.filters[key]?.includes(value) && matchesAll(p, key)).length;

  const toggle = (key: string, value: string) =>
    setPicked((cur) => {
      const list = cur[key] ?? [];
      return { ...cur, [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] };
    });

  const renderGroup = (g: FilterGroup) => (
    <details key={g.key} open className="group/fg border-t border-[#e3e8f0]">
      <summary className="flex cursor-pointer list-none items-center justify-between pb-2.5 pt-3.5 text-16 font-medium text-[#111] [&::-webkit-details-marker]:hidden">
        {g.title}
        <ChevronDown strokeWidth={1} className="size-4 transition-transform duration-200 group-open/fg:rotate-180" />
      </summary>
      <div className="grid gap-0.5 pb-2.5">
        {g.options.map((o) => {
          const on = picked[g.key]?.includes(o.value) ?? false;
          return (
            <label
              key={o.value}
              className="grid cursor-pointer grid-cols-[20px_1fr_auto] items-center gap-2.5 rounded-lg px-1 py-[7px] text-16 text-[#111] hover:bg-[#eef5ff]"
            >
              <input type="checkbox" checked={on} onChange={() => toggle(g.key, o.value)} className="peer sr-only" />
              <span
                aria-hidden="true"
                className={`grid size-[18px] place-items-center rounded border-[1.5px] transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary ${
                  on ? "border-primary bg-primary text-white" : "border-[#9aa5b8]"
                }`}
              >
                {on && <Check strokeWidth={1} className="size-3.5" />}
              </span>
              <span>{o.label}</span>
              <span className="text-[13px] tabular-nums text-paragraph">({count(g.key, o.value)})</span>
            </label>
          );
        })}
      </div>
    </details>
  );

  const renderCard = (p: FilterProduct) => (
    <article
      key={p.title}
      className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition-colors duration-300 hover:border-primary/40"
    >
      <Link href={p.href} tabIndex={-1} aria-hidden="true" className={`relative block ${imageAspect} border-b border-[#E5E5E5] bg-[#e3e6ea]`}>
        <Image src={p.image} alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </Link>
      <div className="flex flex-1 flex-col gap-2.5 px-5 pb-[22px] pt-[18px]">
        <div className="flex flex-wrap gap-1.5">
          {[p.tag, ...(p.extraTags ?? [])].map((t) => (
            <span key={t} className="w-fit rounded bg-bgF5F9FC px-2 py-0.5 text-[12.5px] text-primary">{t}</span>
          ))}
        </div>
        <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-1%] text-[#1a1a1a]">
          <Link href={p.href} className="transition-colors hover:text-primary">
            {p.title}
          </Link>
        </h3>
        <p className="text-[14.5px] leading-[1.55] text-paragraph">{p.description}</p>
        <dl className="mt-0.5 grid gap-1.5 border-t border-[#E5E5E5] pt-3 text-14">
          {p.specs.map((s) => (
            <div key={s.label} className={`grid ${specCols} gap-2.5`}>
              <dt className="text-paragraph">{s.label}</dt>
              <dd className="m-0 text-[#1a1a1a]">{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2.5">
          <Link href={p.href} className="group inline-flex items-center gap-1.5 text-[14.5px] font-medium text-primary hover:underline">
            {data.linkLabel ?? "View product"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1} aria-hidden="true" />
          </Link>
          <Link
            href={p.enquireHref ?? enquireHref}
            className="rounded-full border border-primary px-3.5 py-1.5 text-[14px] font-medium text-primary transition-colors duration-300 hover:bg-bgF5F9FC"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <section id={id} className="bg-white py-82 rounded-2xl scroll-mt-4">
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
              <span>
                <span className="lg:hidden">Filters</span>
                <span className="hidden lg:inline">{data.sidebarTitle}</span>
              </span>
              <span className="flex items-center gap-2.5 text-[13px] font-medium text-primary">
                {active ? `${active} selected` : ""}
                <SlidersHorizontal strokeWidth={1} aria-hidden="true" className="size-5 text-primary lg:hidden" />
              </span>
            </button>
            <div className={`${open ? "block" : "hidden"} lg:block`}>
              {data.groups.map(renderGroup)}
              {active > 0 && (
                <button type="button" onClick={() => setPicked({})} className="mt-1.5 px-1 py-1.5 text-[14px] font-medium text-primary hover:underline">
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          <div className="min-w-0">
           

            {/* Active filters: one chip per ticked option, click to remove */}
            {active > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {data.groups.flatMap((g) =>
                  g.options
                    .filter((o) => picked[g.key]?.includes(o.value))
                    .map((o) => (
                      <button
                        key={`${g.key}:${o.value}`}
                        type="button"
                        onClick={() => toggle(g.key, o.value)}
                        aria-label={`Remove filter: ${o.label}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#ebf2fd] bg-[#eef5ff] py-[5px] pl-3 pr-2.5 text-[13.5px] text-primary transition-colors hover:border-primary"
                      >
                        {o.label}
                        <X strokeWidth={1} aria-hidden="true" className="size-3.5" />
                      </button>
                    )),
                )}
                <button type="button" onClick={() => setPicked({})} className="px-2.5 py-[5px] text-[13.5px] text-paragraph underline hover:text-primary">
                  Clear all
                </button>
              </div>
            )}

            <p aria-live="polite" className="mb-3.5 mt-0.5 text-[14.5px] text-paragraph">
              Showing <b className="font-medium text-[#111]">{shown.length}</b> of {data.products.length} {data.noun}
            </p>

            {!shown.length && (
              <p className="mb-4 rounded-2xl border border-dashed border-[#d3d3d3] p-7 text-center text-paragraph">
                {data.emptyText}{" "}
                <button type="button" onClick={() => setPicked({})} className="font-medium text-primary hover:underline">
                  Clear filters
                </button>
              </p>
            )}
            {(shown.length > 0 || help) && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {shown.map(renderCard)}
                {help && (
                  <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#c7d9fb] bg-linear-to-b from-[#eef4fd] to-[#f6f9ff]">
                    {/* The image links only when the data gives it a link of its own */}
                    {help.imageHref ? (
                      <Link href={help.imageHref} tabIndex={-1} aria-hidden="true" className={`relative block ${imageAspect} border-b border-[#dfe8f7] bg-[#e3e6ea]`}>
                        <Image src={help.image} alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </Link>
                    ) : (
                      <span aria-hidden="true" className={`relative block ${imageAspect} border-b border-[#dfe8f7] bg-[#e3e6ea]`}>
                        <Image src={help.image} alt="" fill sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </span>
                    )}
                    <div className="flex flex-1 flex-col gap-2.5 px-5 pb-[22px] pt-[18px]">
                      <span className="w-fit rounded bg-white px-2 py-0.5 text-[12.5px] text-primary">{help.tag}</span>
                      <h3 className="text-[19px] font-medium leading-[1.3] tracking-[-1%] text-[#1a1a1a]">{help.title}</h3>
                      <p className="text-[14.5px] leading-[1.55] text-paragraph">{help.text}</p>
                      <div className="mt-auto pt-2.5">
                        <CustomButton text={help.button.text} icon="ArrowRight" bgButton="bg-primary" dark href={help.button.href} />
                      </div>
                    </div>
                  </article>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
