"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";
import styles from "@/app/components/common/AvSections/RunOfShow.module.css";

// Each page picks which of these spec rows it shows (via data.specs); tiers fill in the matching keys
type SpecKey = "snd" | "disp" | "mic" | "cam" | "ctl";

export interface SizingGuideData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  specs: { key: SpecKey; icon: string; title: string }[];
  fitLabel: string;
  tiers: ({
    label: string;
    image: string;
    alt: string;
    fit: string;
    rules: { title: string; subtitle?: string; text: string }[];
  } & Partial<Record<SpecKey, string>>)[];
  cta: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: SizingGuideData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SizingGuide({ data, variant, subtitleClass }: Props) {
  const [active, setActive] = useState(0);
  const tier = data.tiers[active]!;
  const count = data.tiers.length;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : count - 1)) % count;
    setActive(next);
    document.getElementById(`sz-tab-${next}`)?.focus();
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Seat-count tabs */}
        <div role="tablist" aria-label="Boardroom size" className="mt-52 grid grid-cols-2 border-b border-[#d3d3d3] lg:grid-cols-4">
          {data.tiers.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.label}
                id={`sz-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="sz-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`-mb-px flex cursor-pointer items-center gap-3 border-b px-4 py-4 text-left text-18 transition-colors lg:py-5 ${
                  selected
                    ? "border-primary bg-gradient-to-b from-[#EEF5FF] to-white text-primary"
                    : "border-transparent text-paragraph hover:text-primary"
                }`}
              >
                <Image src="/assets/images/icons/userroundgroup.svg" width={25} height={25} alt="" className="shrink-0" />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          id="sz-panel"
          role="tabpanel"
          aria-labelledby={`sz-tab-${active}`}
          className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[52px]"
        >
          {/* Room photo */}
          <div key={`img-${active}`} className={`min-w-0 ${styles.anim}`}>
            <Image
              src={tier.image}
              alt={tier.alt}
              width={744}
              height={572}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* What each layer does at this size */}
          <div key={active} className={`flex min-w-0 flex-col ${styles.anim}`}>
            {data.specs.map((sp) => (
              <div key={sp.key} className="flex gap-4 border-b border-[#D3D3D3] py-6 first:pt-2 lg:gap-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#F5F8FD] text-primary">
                  <LucideIcon name={sp.icon} className="size-5" strokeWidth={1} />
                </span>
                <div>
                  <h3 className="text-18 font-medium text-[#2b2b2b]">{sp.title}</h3>
                  <p className="mt-2 text-18 text-paragraphlte">{tier[sp.key]}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 border-l-2 border-primary py-1 pl-4 lg:mt-auto">
              <p className="text-18 text-paragraph">{data.fitLabel}</p>
              <p className="mt-1 text-18 text-primary">{tier.fit}</p>
            </div>
          </div>
        </div>

        {/* Design rules for this size */}
        <div key={`rules-${active}`} aria-live="polite" className={`mt-8 grid gap-6 md:grid-cols-3 lg:gap-4 ${styles.anim}`}>
          {tier.rules.map((r) => (
            <div key={r.title} className="border-t border-[#D3D3D3] px-0 pt-5 lg:px-4">
              <h3 className="text-18 font-medium text-[#2b2b2b]">{r.title}</h3>
              {r.subtitle && <p className="mt-2 text-18 text-primary">{r.subtitle}</p>}
              <p className={`${r.subtitle ? "mt-3" : "mt-2"} text-18 text-paragraphlte`}>{r.text}</p>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-52 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F5F8FC] p-6 lg:flex-row lg:items-center lg:px-6 lg:py-8">
          <div>
            <h3 className="text-24 font-medium tracking-[-0.03em] text-primary">{data.cta.title}</h3>
            <p className="mt-2 text-18 text-paragraph">{data.cta.description}</p>
          </div>
          <CustomButton text={data.cta.button} icon="ArrowRight" bgButton="bg-primary" dark href={data.cta.href} className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
