"use client";

import { useState, type KeyboardEvent } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";

type WinType = "cam" | "map" | "data" | "vc" | "alarm";
type SpecKey = "disp" | "ops" | "ctl" | "aud";

interface Mode {
  tab: string;
  sub: string;
  // Wall windows in tile units on a 4 x 3 wall: [col, row, width, height, type, label]
  windows: [number, number, number, number, WinType, string][];
  // Four desks in an arc: [label, active]
  ops: [string, boolean][];
  ctrl: number; // desk index that drives the wall; -1 or 4 = supervisor
  vc: boolean;
  specs: Record<SpecKey, string>;
  fit: { title: string; text: string };
}

export interface OperatingModesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  planLabel: string;
  legend: { type: WinType; label: string }[];
  caption: string;
  specLabels: { key: SpecKey; icon: string; title: string }[];
  modes: Mode[];
  rules: { title: string; key: string; value: string; text: string }[];
  cta: { title: string; text: string; button: string; href: string };
}

interface Props {
  data: OperatingModesData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const COL: Record<WinType, string> = { cam: "#132250", map: "#114A9F", data: "#4C8BE8", vc: "#7FA6E0", alarm: "#C2410C" };
const X0 = 50, Y0 = 34, TW = 105, TH = 56;
// Consoles sit on an arc facing the wall
const CX = 260, CY = -10, R = 318;
const ANGS = [28, 9, -9, -28];
const pos = (a: number) => {
  const r = (a * Math.PI) / 180;
  return [CX - R * Math.sin(r), CY + R * Math.cos(r)];
};
const SX = CX, SY = 394;

function WallPlan({ mode, focus }: { mode: Mode; focus: SpecKey | null }) {
  const op = (k: SpecKey) => ({ opacity: !focus || focus === k ? 1 : 0.18, transition: "opacity .25s" });
  const sup = mode.ctrl < 0 || mode.ctrl === 4;
  const [fx, fy] = sup ? [SX, SY - 11] : (([x, y]) => [x, y - 13])(pos(ANGS[mode.ctrl]));
  const ty = Y0 + TH * 3 + 30;

  return (
    <svg viewBox="0 0 520 420" role="img" aria-label="Video wall layout and operator consoles for the selected mode" className="block h-auto w-full" fontSize={10}>
      <rect x={6} y={6} width={508} height={408} rx={10} fill="#F7F8FA" stroke="#E3E6EC" />

      {/* Wall camera and speakers */}
      <g style={op("aud")}>
        {mode.vc && (
          <>
            <rect x={244} y={14} width={32} height={10} rx={5} fill="#132250" />
            <circle cx={260} cy={19} r={2.5} fill="#fff" />
          </>
        )}
        {[22, 490].map((x) => (
          <g key={x}>
            <rect x={x - 7} y={72} width={14} height={36} rx={3} fill="#2b2b2b" />
            <circle cx={x} cy={84} r={3.5} fill="#555" />
            <circle cx={x} cy={98} r={3.5} fill="#555" />
          </g>
        ))}
        {mode.ops.map(([lab, on], i) => {
          if (!mode.vc || !on || !/Comms|Liaison|Agency|Lead|Incident/.test(lab)) return null;
          const [x, y] = pos(ANGS[i]);
          return <path key={i} transform={`translate(${x},${y}) rotate(${ANGS[i]})`} d="M-7 25 a7 7 0 0 1 14 0" fill="none" stroke="#4C8BE8" strokeWidth={2.2} />;
        })}
      </g>

      {/* Video wall */}
      <g style={op("disp")}>
        <rect x={X0 - 6} y={Y0 - 6} width={TW * 4 + 12} height={TH * 3 + 12} rx={4} fill="#1C1F26" />
        {mode.windows.map(([c, r, w, h, t, l]) => {
          const x = X0 + c * TW + 1.5, y = Y0 + r * TH + 1.5, W = w * TW - 3, H = h * TH - 3;
          return (
            <g key={l}>
              <rect x={x} y={y} width={W} height={H} rx={2} fill={COL[t]} />
              {/* Camera mosaics get a 2 x 2 grid per tile */}
              {t === "cam" && w * h > 1 && (
                <g stroke="#fff" strokeOpacity={0.18}>
                  {Array.from({ length: w * 2 - 1 }, (_, i) => <line key={`v${i}`} x1={x + (W * (i + 1)) / (w * 2)} y1={y} x2={x + (W * (i + 1)) / (w * 2)} y2={y + H} />)}
                  {Array.from({ length: h * 2 - 1 }, (_, i) => <line key={`h${i}`} x1={x} y1={y + (H * (i + 1)) / (h * 2)} x2={x + W} y2={y + (H * (i + 1)) / (h * 2)} />)}
                </g>
              )}
              {t === "map" && (
                <>
                  <path d={`M${x + W * 0.1} ${y + H * 0.7} Q${x + W * 0.35} ${y + H * 0.3} ${x + W * 0.6} ${y + H * 0.55} T${x + W * 0.92} ${y + H * 0.35}`} fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={2} />
                  {/incident/i.test(l) && (
                    <>
                      <circle cx={x + W * 0.58} cy={y + H * 0.5} r={9} fill={COL.alarm} fillOpacity={0.35} />
                      <circle cx={x + W * 0.58} cy={y + H * 0.5} r={4} fill={COL.alarm} />
                    </>
                  )}
                </>
              )}
              {t === "alarm" && <rect x={x} y={y} width={W} height={H} rx={2} fill="none" stroke="#FDBA74" strokeWidth={2.5} />}
              <rect x={x + 5} y={y + H - 19} width={Math.min(l.length * 5.6 + 12, W - 10)} height={15} rx={3} fill="#000" fillOpacity={0.45} />
              <text x={x + 11} y={y + H - 8} fill="#fff" fontSize={9.5}>{l}</text>
            </g>
          );
        })}
        {[1, 2, 3].map((c) => <line key={`c${c}`} x1={X0 + c * TW} y1={Y0} x2={X0 + c * TW} y2={Y0 + TH * 3} stroke="#1C1F26" strokeWidth={1.2} />)}
        {[1, 2].map((r) => <line key={`r${r}`} x1={X0} y1={Y0 + r * TH} x2={X0 + TW * 4} y2={Y0 + r * TH} stroke="#1C1F26" strokeWidth={1.2} />)}
        <text x={260} y={Y0 + TH * 3 + 22} textAnchor="middle" fontSize={11} fill="#525252">Video wall · front view</text>
      </g>

      {/* Operator desks and supervisor */}
      <g style={op("ops")}>
        {mode.ops.map(([lab, on], i) => {
          const [x, y] = pos(ANGS[i]);
          return (
            <g key={i}>
              <g transform={`translate(${x},${y}) rotate(${ANGS[i]})`}>
                <rect x={-44} y={-12} width={88} height={26} rx={6} fill={on ? "#fff" : "#EEF0F3"} stroke={on ? "#114A9F" : "#C9CDD4"} strokeWidth={on ? 1.8 : 1.2} />
                {[-26, 0, 26].map((m) => <rect key={m} x={m - 11} y={-9} width={22} height={5} rx={1.5} fill={on ? "#114A9F" : "#B8BDC6"} />)}
                <circle cx={0} cy={26} r={9} fill={on ? "#5B5F66" : "#C9CDD4"} />
              </g>
              <text x={x} y={y + 52} textAnchor="middle" fontSize={10.5} fill={on ? "#114A9F" : "#8A8A8A"} fontWeight={on ? 500 : 400}>{lab}</text>
            </g>
          );
        })}
        <rect x={SX - 46} y={SY - 11} width={92} height={22} rx={6} fill={mode.ctrl === 4 ? "#114A9F" : "#fff"} stroke="#132250" strokeWidth={1.5} />
        <text x={SX} y={SY + 4} textAnchor="middle" fontSize={10.5} fill={mode.ctrl === 4 ? "#fff" : "#132250"} fontWeight={500}>Supervisor</text>
      </g>

      {/* Control path from whoever drives the wall */}
      <g style={op("ctl")} fill="none" stroke="#114A9F" strokeWidth={1.6}>
        <path d={`M${fx} ${fy} C${fx} ${fy - 30} 260 ${ty + 40} 260 ${ty}`} strokeDasharray="4 4" />
        <path d={`M254 ${ty + 8} L260 ${ty} L266 ${ty + 8}`} />
        <text x={sup ? SX + 54 : fx} y={sup ? SY + 4 : fy + 78} textAnchor={sup ? "start" : "middle"} fill="#114A9F" stroke="none" fontWeight={500}>Wall control</text>
      </g>
    </svg>
  );
}

export default function OperatingModes({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const [focus, setFocus] = useState<SpecKey | null>(null);
  const mode = data.modes[cur];

  // Left/right arrows cycle through modes
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : -1) + data.modes.length) % data.modes.length;
    setCur(n);
    (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
  };

  return (
    <section id="modes" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div role="tablist" aria-label="Operating mode" className="mt-52 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
          {data.modes.map((m, i) => (
            <button
              key={m.tab}
              role="tab"
              aria-selected={i === cur}
              tabIndex={i === cur ? 0 : -1}
              onClick={() => setCur(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-left transition-colors duration-200 lg:px-6 lg:py-4 ${
                i === cur ? "border-primary bg-primary text-white" : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary/75"
              }`}
            >
              <b className="text-16 font-medium tracking-[-0.03em] lg:text-[20px]">{m.tab}</b>
              <small className={`text-[13px] lg:text-[15px] ${i === cur ? "text-white/75" : "text-[#8A8A8A]"}`}>{m.sub}</small>
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-live="polite" className="mt-8 grid items-start gap-[30px] lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-2xl bg-[#F6F6F6] p-4 md:p-6">
            <div className="mb-3 flex flex-col gap-2 text-[14px] text-paragraph md:flex-row md:items-center md:justify-between">
              <span className="uppercase tracking-[0.06em]">{data.planLabel}</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {data.legend.map((l) => (
                  <span key={l.type} className="flex items-center gap-1.5 text-[13px]">
                    <i className="size-2.5 rounded-sm" style={{ background: COL[l.type] }} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            <WallPlan mode={mode} focus={focus} />
            <p className="mt-3 text-[14px] text-[#8A8A8A]">{data.caption}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Hovering a spec highlights its part of the plan */}
            {data.specLabels.map((s) => (
              <div
                key={s.key}
                tabIndex={0}
                onMouseEnter={() => setFocus(s.key)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(s.key)}
                onBlur={() => setFocus(null)}
                className="flex flex-col gap-3 rounded-2xl border border-[#D3D3D3] p-5 outline-none transition-colors duration-300 hover:border-primary focus-visible:border-primary"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-[#EEF5FF] text-primary">
                  <LucideIcon name={s.icon} className="size-[22px]" strokeWidth={1} />
                </span>
                <h3 className="text-[20px] font-medium tracking-[-0.03em] text-primary">{s.title}</h3>
                <p className="text-16 !leading-[1.6] text-paragraph">{mode.specs[s.key]}</p>
              </div>
            ))}
            <div className="flex gap-3 rounded-2xl bg-[#EEF5FF] p-5 text-16 !leading-[1.6] text-paragraph sm:col-span-2">
              <LucideIcon name="Lightbulb" className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1} />
              <p>
                <b className="font-medium text-primary">{mode.fit.title}</b> {mode.fit.text}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-52 grid gap-[30px] md:grid-cols-3">
          {data.rules.map((r) => (
            <div key={r.title} className="flex flex-col gap-3.5 rounded-2xl bg-[#F6F6F6] p-6">
              <h3 className="text-24 font-medium leading-[1.3] tracking-[-0.03em] text-primary">{r.title}</h3>
              <div className="flex flex-wrap items-baseline gap-2 border-y border-[#D3D3D3] py-3">
                <b className="text-18 font-medium text-[#2b2b2b]">{r.key}</b>
                <span className="text-16 text-paragraph">{r.value}</span>
              </div>
              <p className="text-18 text-paragraph">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-[30px] flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-[#D3D3D3] px-7 py-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="mb-1.5 text-24 font-medium tracking-[-0.03em] text-primary">{data.cta.title}</h3>
            <p className="max-w-[70ch] text-18 text-paragraph">{data.cta.text}</p>
          </div>
          <CustomButton text={data.cta.button} icon="ArrowRight" bgButton="bg-primary" dark href={data.cta.href} className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
