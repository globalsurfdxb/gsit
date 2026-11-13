"use client";

import { Fragment, useEffect, useState, type KeyboardEvent, type ReactNode } from "react";
import { Check, ChevronDown, Fullscreen, HeartHandshake, Timer } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";
import type { DeploymentDataType } from "@/app/components/BallroomAv/Sections/DeploymentStages";

interface Props {
  data: DeploymentDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

// "[confirm …]" placeholders from the copy deck show in red until they're filled in
function withPlaceholders(text: string): ReactNode {
  return text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="text-[#DD0505]">{part}</span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function HowWeWork({ data, variant, subtitleClass }: Props) {
  // open === null is only possible on mobile (accordion fully collapsed)
  const [open, setOpen] = useState<number | null>(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const { stages, labels, after } = data;

  // same breakpoint as Tailwind `lg` (1024px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const cur = open ?? 0; // desktop always has one stage selected
  const stage = stages[cur];

  const getFacts = (s: (typeof stages)[number]) => [
    { icon: Fullscreen, label: labels.you, value: s.you },
    { icon: HeartHandshake, label: labels.out, value: s.out },
    { icon: Timer, label: labels.time, value: s.time },
  ];

  const onSelect = (i: number) => {
    if (isDesktop) setOpen(i);
    else setOpen((prev) => (prev === i ? null : i)); // accordion toggles
  };

  // Arrow keys move between stages (desktop tab list only)
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!isDesktop) return;
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(stages.length - 1, i + step));
    setOpen(n);
    document.getElementById(`hww-tab-${n}`)?.focus();
  };

  // Shared body: facts + checklist (used in accordion and desktop panel)
  const renderBody = (s: (typeof stages)[number]) => (
    <>
      <div className="grid gap-6 border-y border-[#D3D3D3] py-6 sm:grid-cols-3">
        {getFacts(s).map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <span className="grid size-[42px] place-items-center rounded-lg bg-[#F5F8FD] text-primary">
              <Icon strokeWidth={1} className="size-5" />
            </span>
            <p className="mt-4 text-18 text-paragraph">{label}</p>
            <p className="mt-2 text-18 text-primary">{withPlaceholders(value)}</p>
          </div>
        ))}
      </div>

      <h4 className="mt-6 text-18 font-medium text-paragraph">{labels.list}</h4>
      <ul className="mt-4 grid gap-3">
        {s.list.map((li) => (
          <li key={li} className="flex items-start gap-3 text-18 text-paragraph">
            <span className="mt-[3px] grid size-[22px] shrink-0 place-items-center rounded-full bg-[#BFE5CF] text-white">
              <Check strokeWidth={1} className="size-3.5" />
            </span>
            {li}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-[66px]">
          {/* Stage list: accordion on mobile, tab list on desktop */}
          <div
            role={isDesktop ? "tablist" : undefined}
            aria-label={isDesktop ? "Deployment stages" : undefined}
            aria-orientation={isDesktop ? "vertical" : undefined}
            className="flex flex-col lg:gap-4 2xl:gap-6"
          >
            {stages.map((s, i) => {
              const selected = isDesktop ? i === cur : i === open;
              return (
                <div
                  key={s.title}
                  className={`border-b transition-colors ${
                    selected ? "border-primary" : "border-[#D3D3D3] hover:border-primary/50"
                  }`}
                >
                  <button
                    id={`hww-tab-${i}`}
                    type="button"
                    {...(isDesktop
                      ? {
                          role: "tab",
                          "aria-selected": selected,
                          "aria-controls": "hww-panel",
                          tabIndex: selected ? 0 : -1,
                        }
                      : {
                          "aria-expanded": selected,
                          "aria-controls": `hww-acc-${i}`,
                        })}
                    onClick={() => onSelect(i)}
                    onKeyDown={(e) => onKey(e, i)}
                    className="flex w-full cursor-pointer items-start gap-4 py-4 text-left"
                  >
                    <span
                      className={`grid size-[42px] shrink-0 place-items-center rounded-lg border text-18 transition-colors ${
                        selected ? "border-primary bg-primary text-white" : "border-[#E3E8F0] bg-white text-primary"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2.5">
                        <span className={`text-24 tracking-[-0.03em] ${selected ? "text-primary" : "text-paragraph"}`}>
                          {s.title}
                        </span>
                        {s.gate && (
                          <span className="rounded-lg bg-[#F5F8FD] px-2 py-1 text-16 text-primary">{s.gate}</span>
                        )}
                      </span>
                      {selected && <span className="mt-1 block text-18 text-primary">{s.summary}</span>}
                    </span>
                    {/* chevron: mobile only */}
                    <ChevronDown
                      strokeWidth={1.5}
                      className={`mt-2.5 size-5 shrink-0 text-primary transition-transform duration-300 lg:hidden ${
                        selected ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion content: mobile only */}
                  <div
                    id={`hww-acc-${i}`}
                    role="region"
                    aria-labelledby={`hww-tab-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden ${
                      selected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6">
                        <p className="text-18 text-paragraph">{s.lead}</p>
                        <div className="mt-6">{renderBody(s)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected stage: desktop only */}
          <div
            id="hww-panel"
            role="tabpanel"
            aria-labelledby={`hww-tab-${cur}`}
            aria-live="polite"
            className="hidden min-w-0 lg:block"
          >
            <div aria-hidden="true" className="flex gap-0.5">
              {stages.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 transition-all duration-300 ${i === cur ? "w-9 bg-primary" : "w-2.5 bg-[#D3D3D3]"}`}
                />
              ))}
            </div>

            <h3 className="mt-6 text-24 tracking-[-0.03em] text-primary">{stage.title}</h3>
            <p className="mt-3 text-18 text-paragraph">{stage.lead}</p>

            <div className="mt-6">{renderBody(stage)}</div>
          </div>
        </div>

        {after && (
          <div className="mt-52 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F5F8FC] p-6 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1">
              <h3 className="text-24 font-medium tracking-[-0.03em] text-primary">{after.title}</h3>
              <p className="mt-3 text-18 text-paragraph">{withPlaceholders(after.text)}</p>
            </div>
            <CustomButton text={after.button} icon="ArrowRight" bgButton="bg-primary" dark href={after.href} className="shrink-0" />
          </div>
        )}
      </div>
    </section>
  );
}