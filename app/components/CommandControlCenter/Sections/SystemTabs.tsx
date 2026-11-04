"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

interface Group {
  icon: string;
  title: string;
  // Items with an image show the photo, the rest show their icon
  items: { icon: string; image?: string; title: string; text: string }[];
}

export interface SystemTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tabs: { label: string; groups: Group[] }[];
}

interface Props {
  data: SystemTabsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SystemTabs({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const tab = data.tabs[cur];

  return (
    <section id="system" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" className="mt-52 mb-10 flex flex-wrap gap-2 sm:gap-4">
          {data.tabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={i === cur}
              onClick={() => setCur(i)}
              className={`rounded-full border px-5 py-2.5 text-16 font-medium leading-[1.25] tracking-[-0.03em] transition-colors duration-200 lg:px-8 lg:py-4 lg:text-24 ${
                i === cur
                  ? "border-primary bg-primary text-white"
                  : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75 hover:bg-primary/75 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* key resets the accordions so the first group opens on each tab */}
        <div role="tabpanel" key={tab.label} className="grid gap-4">
          {tab.groups.map((g, gi) => (
            <details key={g.title} open={gi === 0} className="group rounded-2xl border border-[#D3D3D3] open:border-primary/40">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 lg:p-6 [&::-webkit-details-marker]:hidden">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#EEF5FF] text-primary">
                  <LucideIcon name={g.icon} className="size-6" strokeWidth={1} />
                </span>
                <h3 className="flex-1 text-[20px] font-medium tracking-[-0.03em] text-primary lg:text-24">{g.title}</h3>
                <ChevronDown strokeWidth={1} className="size-6 text-primary transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="grid gap-[30px] px-5 pb-6 sm:grid-cols-2 lg:px-6 xl:grid-cols-4">
                {g.items.map((it) => (
                  <div key={it.title} className="flex flex-col">
                    <div className="relative mb-5 grid aspect-[4/3] place-items-center overflow-hidden rounded-xl bg-[#F6F6F6] text-primary">
                      {it.image ? (
                        <Image src={it.image} alt={it.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      ) : (
                        <span className="grid size-16 place-items-center rounded-xl bg-[#EEF5FF]">
                          <LucideIcon name={it.icon} className="size-[30px]" strokeWidth={1} />
                        </span>
                      )}
                    </div>
                    <h4 className="text-[20px] font-medium tracking-[-0.03em] text-primary">{it.title}</h4>
                    <p className="mt-2 text-16 !leading-[1.6] text-paragraph">{it.text}</p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
