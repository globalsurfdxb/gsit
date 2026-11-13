"use client";

import { useState, type KeyboardEvent } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";
import RunOfShowIllustration, { type RunOfShowSegment } from "./RunOfShowIllustration";
import styles from "./RunOfShow.module.css";

type SpecKey = "aud" | "mic" | "camT" | "str";

export interface RunOfShowData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  planLabel: string;
  legend: { label: string; color: string }[];
  specs: { key: SpecKey; icon: string; title: string }[];
  fitLabel: string;
  segments: RunOfShowSegment[];
  rules: { title: string; text: string }[];
  cta: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: RunOfShowData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RunOfShow({ data, variant, subtitleClass }: Props) {
  const [active, setActive] = useState(0);
  const seg = data.segments[active];
  const count = data.segments.length;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : count - 1)) % count;
    setActive(next);
    document.getElementById(`ros-tab-${next}`)?.focus();
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Segment tabs */}
        <div role="tablist" aria-label="Townhall segment" className="mt-52 grid grid-cols-2 border-b border-[#E3E3E3] lg:grid-cols-4">
          {data.segments.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.label}
                id={`ros-tab-${i}`}
                role="tab"
                aria-selected={selected}
                aria-controls="ros-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`-mb-px cursor-pointer border-b px-4 py-4 text-left text-18 transition-colors lg:py-5 ${
                  selected
                    ? "border-primary bg-gradient-to-b from-[#EEF5FF] to-white text-primary"
                    : "border-transparent text-paragraph hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div
          id="ros-panel"
          role="tabpanel"
          aria-labelledby={`ros-tab-${active}`}
          className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[52px]"
        >
          {/* Illustration */}
          <div className="flex min-w-0 flex-col gap-3 rounded-xl p-3 border border-[#E3E3E3] bg-gradient-to-b from-white to-[#F7FAFE] py-4">
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <span className="text-[13px] uppercase tracking-[0.06em] text-paragraph">{data.planLabel}</span>
              <div className="flex flex-wrap gap-3.5 text-[13px] uppercase tracking-[0.06em] text-paragraph">
                {data.legend.map((l) => (
                  <span key={l.label} className="flex items-center gap-1.5">
                    <i className="inline-block size-2.5 rounded-full" style={{ background: l.color }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            <RunOfShowIllustration segment={seg} />
            <p className="px-1 text-[14px] text-paragraph">{seg.hint}</p>
          </div>

          {/* What each layer does in this segment */}
          <div key={active} className={`flex min-w-0 flex-col ${styles.anim}`}>
            {data.specs.map((sp) => (
              <div key={sp.key} className="flex gap-4 border-b border-[#D3D3D3] py-5 first:pt-2 lg:gap-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#F5F8FD] text-primary">
                  <LucideIcon name={sp.icon} className="size-5" strokeWidth={1} />
                </span>
                <div>
                  <h3 className="text-18 font-medium text-[#2b2b2b]">{sp.title}</h3>
                  <p className="mt-2 text-18 text-paragraphlte">{seg[sp.key]}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 border-l-2 border-primary py-1 pl-4 lg:mt-auto">
              <p className="text-18 text-paragraph">{data.fitLabel}</p>
              <p className="mt-1 text-18 text-primary">{seg.fit}</p>
            </div>
          </div>
        </div>

        {/* Design rules */}
        <div className="mt-52 grid gap-6 md:grid-cols-3 lg:gap-4">
          {data.rules.map((r) => (
            <div key={r.title} className="border-t border-[#D3D3D3] px-0 pt-5 lg:px-4">
              <h3 className="text-[20px] font-medium tracking-[-0.03em] text-primary">{r.title}</h3>
              <p className="mt-3 text-18 text-paragraph/70">{r.text}</p>
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
