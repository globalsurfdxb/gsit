"use client";

import { useState } from "react";
import { Mic, Monitor, Tablet, Volume2 } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

type Wall = 0 | 1; // 0 = closed, 1 = open

export interface CombineLayout {
  label: string;
  walls: Wall[];
  aud: string;
  mic: string;
  vid: string;
  ctl: string;
  fit: string;
}

export interface CombineDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  planLabel: string;
  hint: string;
  legend: { zone: string; screen: string; wall: string };
  specLabels: { aud: string; mic: string; vid: string; ctl: string };
  fitLabel: string;
  layouts: CombineLayout[];
  rules: { title: string; text: string }[];
  cta: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: CombineDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Plan geometry (SVG units)
const X0 = 20;
const Y0 = 20;
const W = 560;
const H = 300;
const SW = W / 3;
const LETTERS = ["A", "B", "C"];
const ZONE_COLORS = ["#114A9F", "#4C8BE8", "#7FB0F0"];
const NAVY = "#132250";

const SPEC_ICONS = { aud: Volume2, mic: Mic, vid: Monitor, ctl: Tablet };

// Zone index for each section: sections joined by an open wall share a zone
function zonesFor(walls: Wall[]) {
  const z = [0];
  for (let s = 1; s < 3; s++) z.push(walls[s - 1] ? z[s - 1] : z[s - 1] + 1);
  return z;
}

export default function RoomCombinePlanner({ data, variant, subtitleClass }: Props) {
  const [walls, setWalls] = useState<Wall[]>(data.layouts[0].walls);
  const active = data.layouts.findIndex((l) => l.walls[0] === walls[0] && l.walls[1] === walls[1]);
  const layout = data.layouts[active];
  const zones = zonesFor(walls);

  const toggleWall = (j: number) => setWalls((w) => w.map((v, i) => (i === j ? ((1 - v) as Wall) : v)));

  return (
    <section id="combine" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Layout presets */}
        <div role="tablist" aria-label="Ballroom layout" className="mt-52 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {data.layouts.map((l, i) => {
            const selected = i === active;
            // One pill per zone; an open wall widens the previous pill, e.g. [48, 22] for A+B, C
            const pills = [22];
            l.walls.forEach((open) => (open ? (pills[pills.length - 1] += 26) : pills.push(22)));
            return (
              <button
                key={l.label}
                role="tab"
                aria-selected={selected}
                onClick={() => setWalls(l.walls)}
                className={`flex flex-col items-start gap-2 rounded-2xl border px-[18px] py-4 text-left transition-colors duration-200 ${
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary hover:text-primary"
                }`}
              >
                <span className="flex gap-1">
                  {pills.map((w, k) => (
                    <i key={k} className={`h-2 rounded ${selected ? "bg-white/85" : "bg-[#D3D3D3]"}`} style={{ width: w }} />
                  ))}
                </span>
                <b className="text-[16px] font-medium leading-[1.25] tracking-[-0.02em] lg:text-[19px]">{l.label}</b>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-stretch gap-[30px] 2xl:grid-cols-[1.15fr_1fr]">
          {/* Plan */}
          <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F4F2] p-3.5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[14px] uppercase tracking-[0.06em] text-paragraph">{data.planLabel}</span>
              <div className="flex flex-wrap gap-3.5 text-[13px] text-paragraph">
                {[
                  [ZONE_COLORS[0], data.legend.zone],
                  [NAVY, data.legend.screen],
                  ["#8A8A8A", data.legend.wall],
                ].map(([c, t]) => (
                  <span key={t}>
                    <i className="mr-1.5 inline-block size-2.5 rounded-full align-[-1px]" style={{ background: c }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <svg viewBox="0 0 600 340" role="img" aria-label="Top-down ballroom plan with three divisible sections" className="h-auto w-full">
              <rect x={X0} y={Y0} width={W} height={H} rx={10} fill="#fff" stroke="#C9C9C9" />
              {LETTERS.map((letter, i) => {
                const c = ZONE_COLORS[zones[i]];
                const x = X0 + i * SW;
                const lead = i === 0 || !walls[i - 1]; // first section of its zone owns the live panel
                return (
                  <g key={letter} className="[&_*]:transition-[fill,opacity] [&_*]:duration-500">
                    <rect x={x + 6} y={Y0 + 6} width={SW - 12} height={H - 12} rx={6} fill={c} fillOpacity={0.09} />
                    {/* Speakers */}
                    {[0, 1, 2].map((r) =>
                      [0, 1, 2].map((k) => {
                        const cx = x + (SW * (k + 1)) / 4;
                        const cy = Y0 + 50 + r * 80;
                        return (
                          <g key={`${r}-${k}`}>
                            <circle cx={cx} cy={cy} r={22} fill={c} fillOpacity={0.12} />
                            <circle cx={cx} cy={cy} r={5} fill={c} />
                          </g>
                        );
                      })
                    )}
                    {/* Tables */}
                    {[0, 1].map((r) =>
                      [0, 1].map((k) => (
                        <circle key={`t${r}-${k}`} cx={x + (SW * (k + 1)) / 3} cy={Y0 + 90 + r * 80} r={13} fill="#E9E2D8" stroke="#cbbfae" />
                      ))
                    )}
                    <text x={x + SW / 2} y={Y0 + H - 16} textAnchor="middle" fontSize={13} fontWeight={500} fill="#525252">
                      Section {letter}
                    </text>
                    {/* Screen and control panel */}
                    <rect x={x + SW / 2 - 40} y={Y0 - 2} width={80} height={7} rx={2} fill={NAVY} />
                    <rect x={x + 12} y={Y0 + H - 26} width={12} height={14} rx={2} fill={lead ? NAVY : "#9AA3B5"} />
                  </g>
                );
              })}

              {/* Air walls (clickable) */}
              {[0, 1].map((j) => {
                const x = X0 + (j + 1) * SW;
                const open = walls[j] === 1;
                return (
                  <g
                    key={j}
                    role="button"
                    tabIndex={0}
                    aria-label={`Air wall between ${LETTERS[j]} and ${LETTERS[j + 1]} (${open ? "open" : "closed"})`}
                    onClick={() => toggleWall(j)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleWall(j);
                      }
                    }}
                    className="group cursor-pointer outline-none"
                  >
                    <rect x={x - 14} y={Y0} width={28} height={H} className="fill-transparent group-hover:fill-[rgba(17,74,159,0.08)] group-focus-visible:fill-[rgba(17,74,159,0.12)]" />
                    {open ? (
                      <>
                        <line x1={x} y1={Y0 + 4} x2={x} y2={Y0 + H - 4} stroke="#8A8A8A" strokeWidth={2} strokeDasharray="3 9" strokeOpacity={0.5} />
                        <rect x={x - 5} y={Y0 + 4} width={10} height={22} rx={2} fill="#8A8A8A" />
                      </>
                    ) : (
                      <line x1={x} y1={Y0 + 4} x2={x} y2={Y0 + H - 4} stroke="#6B6B6B" strokeWidth={5} strokeDasharray="14 4" />
                    )}
                  </g>
                );
              })}
            </svg>
            <p className="text-[14px] text-paragraph">{data.hint}</p>
          </div>

          {/* What changes with the layout */}
          <div className="grid min-w-0 gap-4 sm:grid-cols-2" aria-live="polite">
            {(Object.keys(SPEC_ICONS) as (keyof typeof SPEC_ICONS)[]).map((k) => {
              const Icon = SPEC_ICONS[k];
              return (
                <div key={k} className="flex min-w-0 flex-col gap-2.5 rounded-2xl bg-[#F6F6F6] p-[22px]">
                  <span className="grid size-11 place-items-center rounded-lg bg-[#EEF5FF] text-primary">
                    <Icon strokeWidth={1} className="size-[22px]" />
                  </span>
                  <h4 className="text-[14px] font-medium uppercase tracking-[0.06em] text-paragraph">{data.specLabels[k]}</h4>
                  <p className="text-[18px] font-medium leading-[1.45] tracking-[-0.02em] text-primary">{layout[k]}</p>
                </div>
              );
            })}
            <p className="rounded-2xl border border-dashed border-[#D3D3D3] px-[22px] py-[18px] text-[16px] text-paragraph sm:col-span-2">
              <b className="font-medium text-primary">{data.fitLabel}</b> {layout.fit}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-[30px] lg:grid-cols-3">
          {data.rules.map((r) => (
            <div key={r.title} className="border-t border-[#D3D3D3] pt-5">
              <h3 className="mb-1.5 text-[20px] font-medium tracking-[-0.03em] text-primary">{r.title}</h3>
              <p className="text-18 text-paragraph">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-52 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F6F6F6] p-6 lg:flex-row lg:items-center lg:p-8">
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
