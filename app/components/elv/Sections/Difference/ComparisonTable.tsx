"use client";

export interface ComparisonRow {
  scenario: string;
  without: string;
  with: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
  headers?: {
    scenario: string;
    without: string;
    with: string;
  };
}

export default function ComparisonTable({
  data,
  headers = {
    scenario: "Scenario",
    without: "Without GS IT's ELV",
    with: "With GS IT's ELV",
  },
}: ComparisonTableProps) {
  return (
    <div className="relative rounded-[32px] bg-[#F3F6FB] p-4 mt-52">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1.3fr] gap-x-6">
        {/* Column 1 — Scenario */}
        <div>
          <h3 className="text-24 text-paragraph font-medium  py-6 px-4">
            {headers.scenario}
          </h3>
          <div className="divide-y divide-[#DCE3EE]">
            {data.map((row, i) => (
              <div key={i} className="py-4 md:py-[29px] px-4">
                <p className="text-18 text-paragraph">{row.scenario}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Without */}
        <div>
          <h3 className="text-24 text-[#909090] font-medium  py-6 px-4">
            {headers.without}
          </h3>
          <div className="divide-y divide-[#DCE3EE]">
            {data.map((row, i) => (
              <div key={i} className="p-4">
                <p className="text-18 text-[#ABAFB4]  ">
                  {row.without}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 — With (raised card) */}
        <div className="relative mt-8 md:mt-0 md:-my-8 md:-mr-8 md:py-8 md:pr-8 md:pl-6 rounded-2xl bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] shadow-[0_20px_40px_-12px_rgba(26,46,110,0.35)]">
          <h3 className="text-24 text-white font-medium mb-6 md:mb-8 px-5 md:px-0 pt-5 md:pt-0">
            {headers.with}
          </h3>
          <div className="divide-y divide-white/15">
            {data.map((row, i) => (
              <div key={i} className="py-5 md:py-6 px-5 md:px-0">
                <p className="text-16 md:text-18 text-white leading-[1.5]">
                  {row.with}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}