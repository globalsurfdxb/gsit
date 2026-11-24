import { Fragment } from "react";
import { Plus } from "lucide-react";

export interface SpecGroup {
  title: string;
  open?: boolean; // starts expanded
  // A row without a label spans the full width
  rows: { label?: string; value: string }[];
}

const cell = "border-t border-[#e3e8f0] py-[9px] text-[14.5px] leading-[1.5]";

// Two columns of collapsible spec groups
export default function SpecAccordions({ columns, className = "" }: { columns: SpecGroup[][]; className?: string }) {
  return (
    <div className={`${className}grid gap-3 min-[900px]:grid-cols-2 min-[900px]:items-start`}>
      {columns.map((col, ci) => (
        <div key={ci} className="grid gap-3">
          {col.map((g) => (
            <details key={g.title} open={g.open} className="group rounded-xl border border-[#e3e8f0] bg-white open:border-[#c7d9fb]">
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
  );
}
