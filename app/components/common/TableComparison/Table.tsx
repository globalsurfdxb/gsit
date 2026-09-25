// components/Table.tsx
"use client";

import { useId } from "react";

export interface TableColumn {
  key: string;
  label: string;
}

export type TableRow = Record<string, string | undefined>;

// Matches your Tailwind breakpoint scale, including the custom 3xl (1601px).
// Add/remove keys here if your `tailwind.config` breakpoints ever change.
const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "3xl": "1601px",
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

export type ColumnWidth =
  | string
  | ({ base?: string } & Partial<Record<Breakpoint, string>>);

interface TechMediumTableProps {
  columns: TableColumn[];
  rows: TableRow[];
  columnwidth?: ColumnWidth;
}

export default function TechMediumTable({
  columns,
  rows,
  columnwidth = "220px",
}: TechMediumTableProps) {
  const [firstCol, ...restCols] = columns;
  const restCount = restCols.length;

  const widths =
    typeof columnwidth === "string" ? { base: columnwidth } : columnwidth;

  const reactId = useId();
  // useId() contains colons (":r0:") which aren't valid in CSS selectors — strip them.
  const scopeClass = `tmt-${reactId.replace(/:/g, "")}`;

  const baseWidth = widths.base ?? "220px";

  // Base rule is unconditional; breakpoint overrides come after it in source
  // order (mobile-first cascade). All declarations live in the stylesheet —
  // none of this can be inline, or inline style on the element would always
  // win over the media queries targeting the same element via class.
  const style = [
    `.${scopeClass}{--col-w:${baseWidth};}`,
    ...(Object.keys(BREAKPOINTS) as Breakpoint[])
      .filter((bp) => widths[bp])
      .map((bp) => `@media (min-width:${BREAKPOINTS[bp]}){.${scopeClass}{--col-w:${widths[bp]};}}`),
  ].join("\n");

  return (
    <div className={`rounded-3xl bg-[#F5F9FC] p-2 md:p-6 mt-6 md:mt-12 overflow-x-auto ${scopeClass}`}>
      <style>{style}</style>
      <div
        className="min-w-[720px] md:min-w-0 grid"
        style={{
          gridTemplateColumns: `var(--col-w) repeat(${restCount}, minmax(140px, 1fr))`,
        }}
      >
        {/* First column header — sits on the outer light-gray bg, not the white card */}
        <div className="flex  px-4 py-6 border-b border-[#D3D3D3] mr-4 3xl:mr-[54px] ms-4 3xl:ms-4">
          <h3 className="text-18 font-medium 3xl:!leading-[1.778] text-paragraph">{firstCol?.label}</h3>
        </div>

        {/* Remaining headers sit on the white rounded card */}
        <div
          className="grid bg-white rounded-t-2xl"
          style={{ gridColumn: `span ${restCount} / span ${restCount}`, gridTemplateColumns: `repeat(${restCount}, 1fr)` }}
        >
          {restCols.map((col) => (
            <div key={col.key} className="px-4 py-6 border-b border-[#D3D3D3]">
              <h3 className="text-18 font-medium 3xl:!leading-[1.778] text-paragraph">{col.label}</h3>
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, i) => {
          const isLast = i === rows.length - 1;
          return (
            <div key={i} className="contents">
              <div
                className={`px-4 py-6  flex items-center mr-4 3xl:mr-[54px] ms-4 3xl:ms-4 ${
                  !isLast ? "border-b border-[#D3D3D3]" : ""
                }`}
              >
                <p className="text-16 md:text-17 font-medium text-paragraph">
                  {row[firstCol?.key ?? ""]}
                </p>
              </div>

              <div
                className={`grid bg-white ${isLast ? "rounded-b-2xl" : ""}`}
                style={{ gridColumn: `span ${restCount} / span ${restCount}`, gridTemplateColumns: `repeat(${restCount}, 1fr)` }}
              >
                {restCols.map((col) => (
                  <div
                    key={col.key}
                    className={`p-4 3xl:py-6  flex items-center ${
                      !isLast ? "border-b border-[#D3D3D3]" : ""
                    }`}
                  >
                    <p className="text-18 text-[#ABAFB4]">{row[col.key]}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}