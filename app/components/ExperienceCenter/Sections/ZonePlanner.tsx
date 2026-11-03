"use client";

import { useState, type KeyboardEvent } from "react";
import { Lightbulb, Monitor, Pointer, TabletSmartphone, Volume2 } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import CustomButton from "@/app/components/common/CustomButton";

type SpecKey = "disp" | "int" | "aud" | "ctrl";

export interface Zone {
  label: string;
  rect: [number, number, number, number]; // x, y, w, h in plan units
  wall?: "t" | "l" | "r"; // side carrying the display wall
  arrival?: boolean; // host tablet + entry door
  hero?: boolean; // product plinth / model in the middle
  interactive?: boolean;
  immersive?: boolean; // display on three sides
}

export interface CentreType extends Record<SpecKey, string> {
  label: string;
  small: string;
  zones: Zone[];
  fitLabel: string;
  fit: string;
}

export interface ZonesDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  planLabel: string;
  legend: Record<SpecKey, string>;
  specLabels: Record<SpecKey, string>;
  entryLabel: string;
  rackLabel: string;
  types: CentreType[];
  uses: { sector: string; text: string }[];
  rules: { title: string; text: string }[];
  cta: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: ZonesDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const COLORS: Record<SpecKey, string> = { disp: "#114A9F", int: "#4C8BE8", aud: "#C98A1B", ctrl: "#0E8C7F" };
const SPEC_ICONS = { disp: Monitor, int: Pointer, aud: Volume2, ctrl: TabletSmartphone };
const KEYS = Object.keys(SPEC_ICONS) as SpecKey[];

function Plan({ type, data, focus }: { type: CentreType; data: ZonesDataType; focus: SpecKey | null }) {
  // Layers fade back while a spec card is hovered
  const layer = (k: SpecKey) => ({ opacity: !focus || focus === k ? 1 : 0.15, className: "transition-opacity duration-300" });
  const arrival = type.zones.find((z) => z.arrival)?.rect ?? [40, 300];

  return (
    <svg viewBox="0 0 520 420" role="img" aria-label={`Top-down ${type.label} floor plan`} className="h-auto w-full">
      <rect x={10} y={10} width={500} height={400} rx={10} fill="#fff" stroke="#D3D3D3" />
      <rect x={34} y={44} width={452} height={332} rx={6} fill="none" stroke="#cbbfae" />
      <text x={24} y={32} fontSize={12} fill="#525252">
        Indicative layout · {type.zones.length} zones on one control system
      </text>

      {type.zones.map(({ label, immersive, rect: [x, y, w, h] }) => (
        <rect key={label} x={x} y={y} width={w} height={h} rx={6} fill={immersive ? "#C9DAF5" : "#E3ECFA"} />
      ))}

      <g {...layer("disp")}>
        {type.zones.map((z) => {
          const [x, y, w, h] = z.rect;
          const sides = z.immersive ? ["t", "l", "r"] : z.wall ? [z.wall] : [];
          return (
            <g key={z.label} fill={COLORS.disp}>
              {sides.includes("t") && <rect x={x + 6} y={y} width={w - 12} height={7} rx={2} />}
              {sides.includes("l") && <rect x={x} y={y + 6} width={7} height={h - 12} rx={2} />}
              {sides.includes("r") && <rect x={x + w - 7} y={y + 6} width={7} height={h - 12} rx={2} />}
              {z.hero && <rect x={x + w / 2 - 40} y={y + h / 2 - 26} width={80} height={44} rx={6} fill="#fff" stroke={COLORS.disp} />}
            </g>
          );
        })}
      </g>

      <g {...layer("int")}>
        {type.zones
          .filter((z) => z.interactive)
          .map(({ label, rect: [x, y, w, h] }) => (
            <g key={label} fill={COLORS.int}>
              <circle cx={x + w / 2} cy={y + h / 2 - 4} r={22} fillOpacity={0.18} />
              <circle cx={x + w / 2} cy={y + h / 2 - 4} r={7} />
            </g>
          ))}
      </g>

      <g {...layer("aud")}>
        {type.zones.map(({ label, rect: [x, y, w, h] }) => (
          <rect key={label} x={x + w - 20} y={y + h - 20} width={10} height={10} rx={2} fill={COLORS.aud} />
        ))}
      </g>

      <g {...layer("ctrl")}>
        {type.zones.map(({ label, rect: [x, y, w] }) => (
          <circle key={label} cx={x + w - 16} cy={y + 20} r={5} fill="none" stroke={COLORS.ctrl} strokeWidth={2} />
        ))}
        <rect x={arrival[0] + 16} y={arrival[1] + 14} width={16} height={22} rx={3} fill={COLORS.ctrl} />
        <rect x={440} y={18} width={40} height={20} rx={3} fill={COLORS.ctrl} />
        <text x={460} y={32} textAnchor="middle" fontSize={10} fill="#fff">
          {data.rackLabel}
        </text>
      </g>

      {type.zones.map(({ label, rect: [x, y, , h] }) => (
        <text key={label} x={x + 12} y={y + h - 11} fontSize={12} fill="#132250">
          {label}
        </text>
      ))}

      {/* Entry door */}
      <rect x={arrival[0] + 40} y={372} width={50} height={8} fill="#fff" stroke={COLORS.disp} strokeDasharray="3 2" />
      <text x={arrival[0] + 65} y={398} textAnchor="middle" fontSize={11} fill="#525252">
        {data.entryLabel}
      </text>
    </svg>
  );
}

export default function ZonePlanner({ data, variant, subtitleClass }: Props) {
  const [cur, setCur] = useState(0);
  const [focus, setFocus] = useState<SpecKey | null>(null);
  const type = data.types[cur];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const n = (i + step + data.types.length) % data.types.length;
    setCur(n);
    (e.currentTarget.parentElement?.children[n] as HTMLElement | undefined)?.focus();
  };

  return (
    <section id="centres" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Centre type */}
        <div role="tablist" aria-label="Experience center type" className="mt-52 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {data.types.map((t, i) => {
            const selected = i === cur;
            return (
              <button
                key={t.label}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setCur(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`flex flex-col items-start gap-0.5 rounded-2xl border px-[18px] py-3.5 text-left transition-colors duration-200 ${
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-[#D3D3D3] bg-white text-paragraph hover:border-primary hover:text-primary"
                }`}
              >
                <b className="text-[17px] font-medium leading-[1.2] tracking-[-0.03em] lg:text-24">{t.label}</b>
                <small className="text-[13px] opacity-75 lg:text-[14px]">{t.small}</small>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-stretch gap-[30px] xl:grid-cols-[1.05fr_1fr]">
          {/* Plan */}
          <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F4F2] p-3.5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[14px] uppercase tracking-[0.06em] text-paragraph">{data.planLabel}</span>
              <div className="flex flex-wrap gap-3 text-[12px] text-paragraph sm:text-[13px]">
                {KEYS.map((k) => (
                  <span key={k}>
                    <i className="mr-1.5 inline-block size-2.5 rounded-full align-[-1px]" style={{ background: COLORS[k] }} />
                    {data.legend[k]}
                  </span>
                ))}
              </div>
            </div>
            <Plan type={type} data={data} focus={focus} />
          </div>

          {/* What goes in this centre */}
          <div className="grid min-w-0 grid-cols-2 content-start gap-2.5 sm:gap-4" aria-live="polite">
            {KEYS.map((k) => {
              const Icon = SPEC_ICONS[k];
              return (
                <div
                  key={k}
                  onMouseEnter={() => setFocus(k)}
                  onMouseLeave={() => setFocus(null)}
                  className="flex min-w-0 flex-col gap-2.5 rounded-2xl border border-transparent bg-[#F6F6F6] p-3.5 transition-colors duration-200 hover:border-primary hover:bg-white sm:p-[22px]"
                >
                  <span className="grid size-9 place-items-center rounded-lg bg-[#EEF5FF] text-primary sm:size-11">
                    <Icon strokeWidth={1} className="size-[22px]" />
                  </span>
                  <h4 className="text-[12px] font-medium uppercase tracking-[0.06em] text-paragraph sm:text-[14px]">{data.specLabels[k]}</h4>
                  <p className="text-[15px] font-medium leading-[1.5] tracking-[-0.02em] text-primary sm:text-18">{type[k]}</p>
                </div>
              );
            })}
            <p className="col-span-2 flex items-start gap-3 rounded-2xl border border-dashed border-[#D3D3D3] px-[22px] py-[18px] text-16 text-paragraph">
              <Lightbulb strokeWidth={1} className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>
                <b className="font-medium text-primary">{type.fitLabel}</b> {type.fit}
              </span>
            </p>
          </div>
        </div>

        {/* Where experience centres are used */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {data.uses.map((u) => (
            <span key={u.sector} className="rounded-full border border-[#D3D3D3] bg-white px-3.5 py-1.5 text-[15px] text-paragraph">
              <b className="font-medium text-primary">{u.sector}</b> · {u.text}
            </span>
          ))}
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
