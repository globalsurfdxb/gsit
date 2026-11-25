"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Download } from "lucide-react";
import SpecAccordions, { type SpecGroup } from "./SpecAccordions";
import { useSyncedModel } from "./ModelSync";

// One tab per component (e.g. kit, microphone, speaker), each with its own figures and datasheet
export interface SpecPane {
  label: string; // tab label, e.g. "AC33"
  model?: string; // model code, set when the tab follows the page's model picker (hero chips, compare table, enquiry)
  sub?: string; // smaller text after it, e.g. "Voice Lift Kit"
  note?: string;
  datasheet?: { text: string; href: string };
  columns: SpecGroup[][];
}

export default function SpecTabs({ panes }: { panes: SpecPane[] }) {
  const [local, setLocal] = useState(0);
  const synced = panes.filter((p) => p.model).map((p) => p.model!);
  const [model, setModel] = useSyncedModel(synced);
  const at = synced.length ? panes.findIndex((p) => p.model === model) : -1;
  const cur = at >= 0 ? at : local;
  const setCur = (i: number) => {
    setLocal(i);
    if (panes[i].model) setModel(panes[i].model!);
  };
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, as in the design's tablist
  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (cur + step + panes.length) % panes.length;
    setCur(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-52">
      <div role="tablist" aria-label="Components" className="mb-5 flex flex-wrap gap-2" onKeyDown={onKey}>
        {panes.map((p, i) => (
          <button
            key={p.label}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`spec-tab-${i}`}
            aria-controls={`spec-pane-${i}`}
            aria-selected={i === cur}
            tabIndex={i === cur ? 0 : -1}
            onClick={() => setCur(i)}
            className={`flex items-baseline gap-2 rounded-xl border px-[18px] py-2.5 text-[15px] font-medium transition-colors ${
              i === cur ? "border-primary bg-primary text-white" : "border-[#e3e8f0] bg-white text-[#111] hover:border-[#c7d9fb]"
            }`}
          >
            {p.label}
            {p.sub && <small className={`text-[13px] font-normal ${i === cur ? "text-white/80" : "text-paragraph"}`}>{p.sub}</small>}
          </button>
        ))}
      </div>

      {panes.map((p, i) => (
        <div key={p.label} role="tabpanel" id={`spec-pane-${i}`} aria-labelledby={`spec-tab-${i}`} hidden={i !== cur}>
          {(p.note || p.datasheet) && (
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
              {p.note && <p className="text-[14px] text-paragraph">{p.note}</p>}
              {p.datasheet && (
                <a href={p.datasheet.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-16 font-medium text-primary hover:underline">
                  <Download strokeWidth={1} className="size-[18px]" />
                  {p.datasheet.text}
                </a>
              )}
            </div>
          )}
          <SpecAccordions columns={p.columns} />
        </div>
      ))}
    </div>
  );
}
