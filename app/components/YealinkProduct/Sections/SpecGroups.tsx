import { Fragment } from "react";
import { Download, Plus } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SpecGroup {
  title: string;
  // A row without a label spans the full width
  rows: { label?: string; value: string }[];
}

export interface SpecGroupsDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  columns: SpecGroup[][]; // two columns of accordion groups
  note?: string; // e.g. the part number the specs apply to
  datasheet?: { text: string; href: string };
}

interface Props {
  data: SpecGroupsDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const cell = "border-t border-[#e3e8f0] py-[9px] text-[14.5px] leading-[1.5]";

export default function SpecGroups({ data, variant, subtitleClass }: Props) {
  return (
    <section id="specs" className="bg-white py-82 rounded-2xl scroll-mt-8">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {(data.note || data.datasheet) && (
          <div className="mt-52 mb-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            {data.note && <p className="text-[14px] text-paragraph">{data.note}</p>}
            {data.datasheet && (
              <a href={data.datasheet.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:underline">
                <Download strokeWidth={1} className="size-[18px]" />
                {data.datasheet.text}
              </a>
            )}
          </div>
        )}

        <div className={`${data.note || data.datasheet ? "" : "mt-52 "}grid gap-3 min-[900px]:grid-cols-2 min-[900px]:items-start`}>
          {data.columns.map((col, ci) => (
            <div key={ci} className="grid gap-3">
              {col.map((g) => (
                <details key={g.title} className="group rounded-xl border border-[#e3e8f0] bg-white open:border-[#c7d9fb]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[17px] font-medium tracking-[-0.02em] text-[#111] [&::-webkit-details-marker]:hidden">
                    {g.title}
                    <span className="grid size-[26px] flex-none place-items-center rounded-full bg-[#eef5ff] text-primary transition-transform duration-300 group-open:rotate-45">
                      <Plus strokeWidth={1} className="size-4" />
                    </span>
                  </summary>
                  <dl className="grid grid-cols-[minmax(120px,38%)_1fr] px-5 pb-4">
                    {g.rows.map((r, i) =>
                      r.label ? (
                        <Fragment key={i}>
                          <dt className={`${cell} pr-4 text-paragraph`}>{r.label}</dt>
                          <dd className={`${cell} text-[#111]`}>{r.value}</dd>
                        </Fragment>
                      ) : (
                        <dd key={i} className={`${cell} col-span-2 text-[#111]`}>{r.value}</dd>
                      )
                    )}
                  </dl>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
