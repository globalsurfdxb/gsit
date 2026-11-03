"use client";

import { useState, type KeyboardEvent } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface EquipmentDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tabs: { label: string; cards: { icon: string; title: string; text: string }[] }[];
}

interface Props {
  data: EquipmentDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function EquipmentTabs({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = (i + step + data.tabs.length) % data.tabs.length;
    setCur(n);
    (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
  };

  return (
    <section id="system" className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Equipment category" className="mt-52 flex flex-wrap gap-3 lg:gap-4">
          {data.tabs.map((t, i) => {
            const selected = i === cur;
            return (
              <button
                key={t.label}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setCur(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`rounded-full border px-2.5 lg:px-5 py-2.5 text-16 font-medium tracking-[-0.03em] transition-colors duration-200 lg:px-8 lg:py-4 lg:text-24 ${
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

        <div role="tabpanel" className="mt-52 grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {data.tabs[cur].cards.map((c) => (
            <div key={c.title} className="group flex flex-col">
              <div className="mb-6 grid aspect-[4/3] max-h-[270px] place-items-center rounded-xl bg-linear-to-br from-[#EEF5FF] to-[#DCE8FA] text-primary">
                <LucideIcon name={c.icon} strokeWidth={1} className="size-[72px] transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="mb-4 border-b border-[#D3D3D3] pb-4 text-24 font-medium leading-[1.33] tracking-[-0.03em] text-paragraph transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
                {c.title}
              </h3>
              <p className="text-18 text-paragraph/50 transition-colors duration-300 group-hover:text-paragraph">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
