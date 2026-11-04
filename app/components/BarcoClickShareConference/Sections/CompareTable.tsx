import Link from "next/link";

export interface CompareRow {
  label: string;
  // true = ✓, false = —, string = shown as-is
  values: (string | boolean)[];
}

export interface CompareDataType {
  columns: { label: string; href: string }[];
  rows: CompareRow[];
  note?: string;
  highlight?: number; // index of the column to tint, e.g. the current product
}

const HL = "bg-[#f2f2f9]";

function Cell({ value, hl }: { value: string | boolean; hl: boolean }) {
  const base = `px-[18px] py-3.5 align-top ${hl ? HL : ""}`;
  if (value === true) return <td className={`${base} font-medium text-[#0a7a1e]`}>✓</td>;
  if (value === false) return <td className={`${base} text-[#9a9a9a]`}>—</td>;
  return <td className={`${base} text-[#111]`}>{value}</td>;
}

export default function CompareTable({ data, className = "mt-5" }: { data: CompareDataType; className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-x-auto rounded-2xl border border-[#e3e8f0]">
        <table className="w-full min-w-[620px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="border-b border-[#e3e8f0] bg-[#f3f6ff]">
              <th scope="col" className="px-[18px] py-3.5">
                <span className="sr-only">Feature</span>
              </th>
              {data.columns.map((c, i) => (
                <th
                  key={c.label}
                  scope="col"
                  className={`px-[18px] py-3.5 font-medium tracking-[-0.01em] ${i === data.highlight ? HL : ""}`}
                >
                  <Link href={c.href} className="text-primary">
                    {c.label}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.label} className="border-b border-[#e3e8f0] last:border-b-0">
                <th scope="row" className="w-[30%] px-[18px] py-3.5 align-top font-normal text-paragraph">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <Cell key={i} value={v} hl={i === data.highlight} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.note && <p className="mt-3 text-[13.5px] text-paragraph">{data.note}</p>}
    </div>
  );
}
