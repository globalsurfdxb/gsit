"use client";

import { useState, type KeyboardEvent } from "react";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

export interface Stage {
  title: string;
  gate?: string; // e.g. "Your sign-off"
  summary: string;
  lead: string;
  list: string[];
  you: string;
  out: string;
  time: string;
}

export interface DeploymentDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  labels: { list: string; you: string; out: string; time: string };
  stages: Stage[];
  nav?: { prev: string; next: string }; // Previous / Next buttons under the panel
  after?: { title: string; text: string; button: string; href: string };
}

interface Props {
  data: DeploymentDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function DeploymentStages({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const { stages, labels, after, nav } = data;
  const stage = stages[cur];

  // Arrow keys move between stages, like a tab list
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = Math.max(0, Math.min(stages.length - 1, i + step));
    setCur(n);
    (e.currentTarget.parentElement?.children[n + 1] as HTMLElement | undefined)?.focus();
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid items-stretch gap-[30px] xl:grid-cols-[380px_1fr]">
          {/* Stage list: vertical rail on desktop, grid of numbered dots below xl */}
          <div
            role="tablist"
            aria-label="Deployment stages"
            className="relative grid grid-cols-4 gap-1.5 sm:grid-cols-7 xl:flex xl:flex-col xl:gap-0"
          >
            {/* Rail and progress line (desktop) */}
            <span aria-hidden="true" className="absolute bottom-[42px] left-[27px] top-[42px] hidden w-0.5 bg-[#D3D3D3] xl:block" />
            {stages.map((s, i) => {
              const selected = i === cur;
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setCur(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className="relative flex min-w-0 flex-col items-center gap-2 rounded-2xl px-1 py-2.5 text-center transition-colors duration-200 hover:bg-[#F6F6F6] xl:flex-row xl:gap-[18px] xl:py-3.5 xl:pl-0 xl:pr-4 xl:text-left"
                >
                  {/* Progress fill up to the current stage */}
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className={`absolute -top-1/2 left-[27px] hidden h-full w-0.5 transition-colors duration-500 xl:block ${i <= cur ? "bg-primary" : "bg-transparent"}`}
                    />
                  )}
                  <span
                    className={`relative z-[1] grid size-[42px] shrink-0 place-items-center rounded-full border-2 text-[15px] font-medium transition-all duration-300 sm:size-12 xl:size-14 xl:text-18 ${
                      selected
                        ? "border-primary bg-primary text-white shadow-[0_0_0_6px_#EEF5FF]"
                        : i < cur
                          ? "border-primary bg-white text-primary"
                          : "border-[#D3D3D3] bg-white text-paragraph"
                    }`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span>
                    <b className={`block text-[13px] font-medium leading-[1.3] tracking-[-0.03em] sm:text-[15px] xl:text-[20px] ${selected ? "text-primary" : "text-paragraph"}`}>
                      {s.title}
                      {s.gate && (
                        <span className="ml-1.5 hidden rounded-full bg-[#EEF5FF] px-2 py-0.5 align-[2px] text-[11px] uppercase tracking-[0.06em] text-primary xl:inline-block">
                          {s.gate}
                        </span>
                      )}
                    </b>
                    <small className="mt-0.5 hidden max-w-[24ch] text-[14px] text-[#8A8A8A] xl:block">{s.summary}</small>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected stage */}
          <div role="tabpanel" aria-live="polite" className="flex min-w-0 flex-col rounded-2xl bg-[#F6F6F6] p-[22px] md:p-9">
            <div className="mb-[26px] border-b border-[#D3D3D3] pb-[22px]">
              <span className="text-[14px] uppercase tracking-[0.06em] text-paragraph">
                Stage {pad(cur + 1)} of {pad(stages.length)}
              </span>
              <h3 className="mt-1.5 text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.2] tracking-[-0.01em] text-primary">{stage.title}</h3>
            </div>
            <p className="mb-7 text-18 text-paragraph">{stage.lead}</p>
            <div className="grid flex-1 items-stretch gap-7 md:grid-cols-[1.3fr_1fr]">
              <div>
                <h4 className="mb-3.5 text-[14px] font-medium uppercase tracking-[0.06em] text-paragraph">{labels.list}</h4>
                <ul className="grid gap-3">
                  {stage.list.map((li) => (
                    <li
                      key={li}
                      className="flex gap-3 text-[17px] leading-[1.5] text-[#2b2b2b] before:mt-[9px] before:size-2 before:shrink-0 before:bg-primary before:content-['']"
                    >
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid content-start gap-[18px] rounded-2xl bg-white p-5">
                {(
                  [
                    [labels.you, stage.you],
                    [labels.out, stage.out],
                    [labels.time, stage.time],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k} className="grid gap-1">
                    <em className="text-[13px] not-italic uppercase tracking-[0.06em] text-[#8A8A8A]">{k}</em>
                    <strong className="text-[17px] font-medium leading-[1.45] text-primary">{v}</strong>
                  </div>
                ))}
              </div>
            </div>
            {nav && (
              <div className="mt-[30px] flex justify-between border-t border-[#D3D3D3] pt-[22px]">
                {(
                  [
                    [nav.prev, cur - 1],
                    [nav.next, cur + 1],
                  ] as [string, number][]
                ).map(([label, to]) => (
                  <button
                    key={label}
                    type="button"
                    disabled={to < 0 || to >= stages.length}
                    onClick={() => setCur(to)}
                    className="rounded-full border border-[#D3D3D3] px-[22px] py-2.5 text-16 text-primary transition-colors duration-200 enabled:hover:border-primary enabled:hover:bg-primary enabled:hover:text-white disabled:cursor-default disabled:opacity-35"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* After handover */}
        {after && (
        <div className="mt-[30px] flex flex-col items-start gap-5 rounded-2xl border border-dashed border-[#D3D3D3] px-7 py-6 md:flex-row md:items-center">
          <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#EEF5FF] text-primary">
            <ShieldCheck strokeWidth={1} className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-[22px] font-medium tracking-[-0.03em] text-primary">{after.title}</h3>
            <p className="text-[17px] leading-[1.6] text-paragraph">{after.text}</p>
          </div>
          <CustomButton text={after.button} icon="ArrowRight" bgButton="bg-primary" dark href={after.href} className="shrink-0" />
        </div>
        )}
      </div>
    </section>
  );
}
