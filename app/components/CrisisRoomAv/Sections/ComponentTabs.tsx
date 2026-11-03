"use client";

import { useState } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface ComponentTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  // Each tab swaps the wide photo and its four icon cards
  tabs: { label: string; image: string; alt: string; cards: { icon: string; title: string; text: string }[] }[];
}

interface Props {
  data: ComponentTabsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function ComponentTabs({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const tab = data.tabs[cur];

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" className="mt-52 mb-52 flex flex-wrap gap-4">
          {data.tabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={i === cur}
              onClick={() => setCur(i)}
              className={`rounded-full border px-5 py-2.5 text-18 font-medium leading-[1.25] tracking-[-0.03em] transition-colors duration-200 lg:px-8 lg:py-4 lg:text-24 ${
                i === cur
                  ? "border-primary bg-primary text-white"
                  : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75 hover:bg-primary/75 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          role="img"
          aria-label={tab.alt}
          className="mb-10 aspect-video rounded-2xl bg-[#F6F6F6] bg-cover bg-[position:center_40%] lg:aspect-[21/7]"
          style={{ backgroundImage: `url('${tab.image}')` }}
        />

        <div role="tabpanel" className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {tab.cards.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl bg-[#F6F6F6] p-7 transition-[background,box-shadow] duration-300 hover:bg-white hover:shadow-[inset_0_0_0_1px_#114A9F]"
            >
              <span className="mb-7 grid size-16 place-items-center rounded-xl bg-[#EEF5FF] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <LucideIcon name={c.icon} className="size-[30px]" strokeWidth={1} />
              </span>
              <h3 className="mb-4 text-24 font-medium leading-[1.33] tracking-[-0.03em] text-paragraph transition-colors duration-300 group-hover:text-primary">
                {c.title}
              </h3>
              <hr className="mb-4 border-[#D3D3D3] transition-colors duration-300 group-hover:border-primary" />
              <p className="text-18 text-paragraph/50 transition-colors duration-300 group-hover:text-paragraph">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
