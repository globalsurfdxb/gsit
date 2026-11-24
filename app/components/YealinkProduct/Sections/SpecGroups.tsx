import { Download } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import SpecAccordions, { type SpecGroup } from "./SpecAccordions";
import SpecTabs, { type SpecPane } from "./SpecTabs";

export type { SpecGroup, SpecPane };

// Comparison table: first column holds the row labels, then one column per version
export interface SpecTable {
  title?: string; // heading above the table, e.g. "Compare with similar models"
  columns: string[]; // header labels, e.g. ["Specification", "FS-124G", "FS-124G-FPOE"]
  rows: { label: string; values: string[] }[];
}

export interface SpecGroupsDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  columns?: SpecGroup[][]; // two columns of accordion groups
  table?: SpecTable; // or one comparison table, a column per version (used instead of the accordions)
  tables?: SpecTable[]; // or several tables, each under its own heading
  panes?: SpecPane[]; // or tabs, one per component, each with its own groups and datasheet
  note?: string; // e.g. the part number the specs apply to
  datasheet?: { text: string; href: string };
  source?: string; // optional small print under the groups, e.g. where the figures come from
}

interface Props {
  data: SpecGroupsDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SpecGroups({ data, variant, subtitleClass }: Props) {
  return (
    <section id="specs" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {(data.note || data.datasheet) && (
          <div className="mt-52 mb-4 flex flex-wrap items-center justify-end gap-x-6 gap-y-3">
            {data.note && <p className="text-[14px] text-paragraph">{data.note}</p>}
            {data.datasheet && (
              <a href={data.datasheet.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-16 font-medium text-primary hover:underline">
                <Download strokeWidth={1} className="size-[18px]" />
                {data.datasheet.text}
              </a>
            )}
          </div>
        )}

        {[...(data.table ? [data.table] : []), ...(data.tables ?? [])].map((tbl, ti) => (
          <div key={ti} className={ti > 0 ? "mt-8" : data.note || data.datasheet ? "" : "mt-52"}>
            {tbl.title && <h3 className="mb-4 text-[20px] font-medium tracking-[-0.02em] text-[#111]">{tbl.title}</h3>}
            {/* The table scrolls sideways on narrow screens; the label column stays readable */}
            <div className="overflow-x-auto rounded-2xl border border-[#e3e8f0]">
              <table className="w-full min-w-[560px] border-collapse text-[14.5px] leading-[1.5]">
                <thead className="bg-bgF5F9FC">
                  <tr>
                    {tbl.columns.map((c) => (
                      <th key={c} scope="col" className="px-4 py-3.5 text-left text-[14px] font-medium text-[#111] lg:px-5">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbl.rows.map((r) => (
                    <tr key={r.label} className="border-t border-[#e3e8f0]">
                      <th scope="row" className="px-4 py-3 text-left align-top font-normal text-paragraph lg:px-5">
                        {r.label}
                      </th>
                      {r.values.map((v, i) => (
                        // A tick cell (✓) is highlighted in the brand colour
                        <td key={i} className={`px-4 py-3 align-top lg:px-5 ${v.trim() === "✓" ? "text-primary" : "text-[#111]"}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {data.columns && data.columns.length > 0 && (
          <SpecAccordions columns={data.columns} className={data.note || data.datasheet ? "" : "mt-52 "} />
        )}
        {data.panes && <SpecTabs panes={data.panes} />}
        {data.source && <p className="mt-4 text-[13px] text-paragraph">{data.source}</p>}
      </div>
    </section>
  );
}
