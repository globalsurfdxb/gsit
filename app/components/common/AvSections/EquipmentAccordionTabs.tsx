"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import Card from "@/app/components/common/TabCard/Card";
import type { CardItem } from "@/app/components/common/TabCard/GridCard";

export interface EquipmentGroup {
  title: string;
  icon: string;
  cards: CardItem[];
}

export interface EquipmentAccordionTabsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tabs: { id: string; label: string; groups: EquipmentGroup[] }[];
}

interface Props {
  data: EquipmentAccordionTabsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
  gridcount?: "2" | "3" | "4" | "5" | "6";
}

/** Pill tabs (one per system), each holding collapsible equipment groups with a card grid. */
export default function EquipmentAccordionTabs({ data, variant, subtitleClass, gridcount = "4" }: Props) {
  const [activeId, setActiveId] = useState(data.tabs[0]!.id);
  // Toggled groups keyed `${tabId}:${index}`; untouched groups fall back to "first group open"
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const active = data.tabs.find((t) => t.id === activeId) ?? data.tabs[0]!;
  const count = data.tabs.length;

  const isOpen = (i: number) => toggled[`${active.id}:${i}`] ?? i === 0;
  const toggle = (i: number) => setToggled((s) => ({ ...s, [`${active.id}:${i}`]: !isOpen(i) }));

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : count - 1)) % count;
    setActiveId(data.tabs[next]!.id);
    document.getElementById(`eq-tab-${data.tabs[next]!.id}`)?.focus();
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Systems" className="mt-52 flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide 2xl:gap-7.5">
          {data.tabs.map((tab, i) => {
            const selected = tab.id === active.id;
            return (
              <button
                key={tab.id}
                id={`eq-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="eq-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(e) => onKey(e, i)}
                className={`shrink-0 cursor-pointer rounded-full border px-3 py-2 text-18 font-medium !leading-[1.25] tracking-[-3%] transition-colors lg:px-5 lg:py-3 lg:text-24 2xl:px-8 2xl:py-4 3xl:py-[21.8px] ${
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75 hover:bg-primary/75 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div id="eq-panel" role="tabpanel" aria-labelledby={`eq-tab-${active.id}`} className="mt-6 lg:mt-8">
          {active.groups.map((g, i) => {
            const open = isOpen(i);
            const panelId = `eq-${active.id}-${i}`;
            return (
              <div key={panelId} className="border-b border-[#D3D3D3]">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center gap-4 py-6 text-left"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#F5F8FD] text-primary lg:size-14">
                    <LucideIcon name={g.icon} className="size-6" strokeWidth={1} />
                  </span>
                  <h3 className="flex-1 text-24 font-medium tracking-[-3%] text-primary">{g.title}</h3>
                  <ChevronDown
                    strokeWidth={1}
                    className={`size-7 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden" inert={!open}>
                    <div className="pb-8 pt-2">
                      <Card data={g.cards} gridcount={gridcount} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
