"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

export interface EnvironmentTab {
  label: string;
  title: string;
  image: string;
  text: string;
  items: string[];
}

export interface EnvironmentTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  listLabel: string;
  tabs: EnvironmentTab[];
  cta: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: EnvironmentTabsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function EnvironmentTabs({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const tab = data.tabs[cur];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = (i + step + data.tabs.length) % data.tabs.length;
    setCur(n);
    (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
  };

  return (
    <section id="environments" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Learning environments" className="mt-52 flex flex-wrap gap-2 lg:gap-3">
          {data.tabs.map((t, i) => {
            const selected = i === cur;
            return (
              <button
                key={t.label}
                id={`env-tab-${i}`}
                role="tab"
                aria-selected={selected}
                aria-controls="env-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setCur(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`rounded-full border px-4 py-2.5 text-16 font-medium leading-[1.25] tracking-[-0.03em] transition-colors duration-200 lg:px-[26px] lg:py-3.5 lg:text-[20px] ${
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75 hover:bg-primary/75 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          key={cur}
          id="env-panel"
          role="tabpanel"
          aria-labelledby={`env-tab-${cur}`}
          className="mt-11 grid items-stretch gap-7 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-12"
        >
          <div className="relative aspect-[772/400] overflow-hidden rounded-2xl bg-[#F6F6F6] xl:aspect-auto xl:min-h-[380px]">
            <Image src={tab.image} alt={tab.title} fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover" />
          </div>

          <div className="min-w-0">
            <span className="text-[14px] uppercase tracking-[0.06em] text-paragraph">
              Environment {cur + 1} of {data.tabs.length}
            </span>
            <h3 className="mb-4 mt-2 text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.2] tracking-[-0.01em] text-primary">{tab.title}</h3>
            <p className="text-18 text-paragraph">{tab.text}</p>
            <h4 className="mb-3.5 mt-7 border-t border-[#D3D3D3] pt-[22px] text-[14px] font-medium uppercase tracking-[0.06em] text-paragraph">
              {data.listLabel}
            </h4>
            <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
              {tab.items.map((li) => (
                <li
                  key={li}
                  className="flex gap-3 text-[17px] leading-[1.5] text-[#2b2b2b] before:mt-[9px] before:size-2 before:shrink-0 before:bg-primary before:content-['']"
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F6F6F6] p-6 lg:flex-row lg:items-center lg:p-8">
          <div>
            <h3 className="text-24 font-medium tracking-[-0.03em] text-primary">{data.cta.title}</h3>
            <p className="mt-1.5 text-18 text-paragraph">{data.cta.description}</p>
          </div>
          <CustomButton text={data.cta.button} icon="ArrowRight" bgButton="bg-primary" dark href={data.cta.href} className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
