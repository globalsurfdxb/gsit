"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import { useSyncedModel } from "./ModelSync";

export interface CompareModelsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  columns: { model: string; label: string; sub: string }[]; // one column per model
  rows: { label: string; values: string[] }[];
}

interface Props {
  data: CompareModelsData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Side-by-side table of the values that differ between models; the model picked on the page is highlighted
export default function CompareModels({ data, variant, subtitleClass }: Props) {
  const [model] = useSyncedModel(data.columns.map((c) => c.model));

  return (
    <section className="rounded-2xl bg-white py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Scrolls sideways on narrow screens */}
        <div tabIndex={0} role="region" aria-label="Model comparison table" className="mt-52 overflow-x-auto rounded-xl border border-[#e3e8f0]">
          <table className="w-full min-w-[760px] table-fixed border-collapse text-left text-[14.5px] leading-[1.45]">
            <thead>
              <tr>
                <td className="w-[20%] bg-[#f3f6ff] px-4 py-3" />
                {data.columns.map((c) => (
                  <th
                    key={c.model}
                    scope="col"
                    className={`px-4 py-3 align-top text-16 font-medium tracking-[-0.01em] transition-colors ${
                      c.model === model ? "bg-primary text-white" : "bg-[#f3f6ff] text-[#111]"
                    }`}
                  >
                    {c.label}
                    <small className={`block text-[13px] font-normal ${c.model === model ? "text-white/80" : "text-paragraph"}`}>{c.sub}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="w-[20%] whitespace-nowrap border-t border-[#e3e8f0] px-4 py-3 align-top font-normal text-paragraph">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={`border-t border-[#e3e8f0] px-4 py-3 align-top text-[#111] transition-colors ${
                        data.columns[i]?.model === model ? "bg-[#eef4fd]" : ""
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
