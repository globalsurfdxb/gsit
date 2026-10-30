import React from "react";
import Image from "next/image";
import SectionHeader from "../../common/Heading/SectionHeader";

type Cell = { status: string; text: string };
type ComparisonTableSectionProps = {
  data: typeof import("../data").comparisonData;
};

const ICON_BASE = "/assets/images/itamc";

const cellBase =
  "border-b border-[#d3d3d3] px-3 py-4 align-middle md:px-4 md:py-5 lg:px-5";
const cell = `${cellBase} border-r`;

const firstCol =
  "border-b border-r border-[#d3d3d3] px-2.5 py-4 align-middle md:px-4 md:py-5 lg:px-5 " +
  "sticky left-0 z-20 bg-white " +
  "max-lg:after:pointer-events-none max-lg:after:absolute max-lg:after:inset-y-0 max-lg:after:left-full max-lg:after:w-3 " +
  "max-lg:after:bg-gradient-to-r max-lg:after:from-black/10 max-lg:after:to-transparent";

/*
  base (<md) : 596px = 112 + 150 + 150 + 184
  md  (768+) : 720px = 160 + 165 + 165 + 230
  lg (1024+) : 820px = original proportions
*/
const W = {
  c1: "w-[18.8%] md:w-[22.2%] lg:w-[27.6%]",
  c2: "w-[25.1%] md:w-[22.9%] lg:w-[23%]",
  c3: "w-[25.1%] md:w-[22.9%] lg:w-[24.2%]",
  c4: "w-[31%] md:w-[32%] lg:w-[25.2%]",
};

const STATUS_MAP: Record<
  string,
  { dot: string; icon: string; text: string } | undefined
> = {
  covered: { dot: "bg-[#B2DFC3]", icon: "check.svg", text: "text-[#464646]" },
  included: { dot: "bg-[#B2DFC3]", icon: "check.svg", text: "text-[#464646]" },
  "one-team": {
    dot: "bg-[#B2DFC3]",
    icon: "check.svg",
    text: "text-[#464646]",
  },
  separate: { dot: "bg-[#B2DFC3]", icon: "check.svg", text: "text-[#464646]" },
  "not-covered": {
    dot: "bg-[#EEEFF2]",
    icon: "not.svg",
    text: "text-[#ACACAC]",
  },
  "not-offered": {
    dot: "bg-[#EEEFF2]",
    icon: "not.svg",
    text: "text-[#ACACAC]",
  },
  unmanaged: { dot: "bg-[#FCEFDC]", icon: "minus.svg", text: "text-[#464646]" },
  varies: { dot: "bg-[#FCEFDC]", icon: "minus.svg", text: "text-[#464646]" },
  "other-vendor": {
    dot: "bg-[#EEEFF2]",
    icon: "oth.svg",
    text: "text-[#ACACAC]",
  },
};

const CELL_TEXT = "text-[13px] md:text-sm lg:text-18";

const StatusCell: React.FC<{ cell: Cell }> = ({ cell }) => {
  const s = STATUS_MAP[cell.status];

  // plain text cells (count / queue / head)
  if (!s) {
    const color = cell.text === "2 to 3" ? "text-[#8A5A07]" : "text-[#848484]";
    return <span className={`${CELL_TEXT} ${color}`}>{cell.text}</span>;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 font-normal leading-[1.4444] lg:gap-3 ${CELL_TEXT} ${s.text}`}
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center self-start rounded-full ${s.dot}`}
      >
        <Image
          src={`${ICON_BASE}/${s.icon}`}
          width={24}
          height={24}
          alt=""
          className="h-[24px] w-[24px]"
        />
      </span>
      {cell.text}
    </span>
  );
};

export const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
  data,
}) => {
  const { header, columns, rows, badge, footers } = data;
  const lastIndex = rows.length - 1;

  return (
    <section className="w-full rounded-[16px] bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <SectionHeader
          data={{
            tag: header.tag,
            heading: header.heading,
            highlightLast: header.highlightLast,
            subhead: header.subhead,
          }}
          variant="subtitle"
          className="!pt-2"
          subtitleClass="w-full !mt-2 max-w-[61ch]"
        />

        {/* Table */}
        <div
          role="region"
          aria-label="IT AMC coverage comparison"
          tabIndex={0}
          className="overflow-x-auto  pt-[42px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div className="relative w-full min-w-[596px] md:min-w-[720px] lg:min-w-[820px]">
            {/* Highlighted column background: ONE continuous gradient + shadow */}
            <span
              aria-hidden="true"
              className={`absolute -top-5 bottom-0 right-0 z-0 rounded-[16px] bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)] shadow-[-16px_16px_24.9px_0px_#00000024] ${W.c4}`}
            />

            <table className="relative z-10 w-full table-fixed border-separate border-spacing-0 rounded-[16px] border border-r-0 border-t-0 border-color-border text-left">
              <caption className="sr-only">
                Comparison of IT AMC coverage across providers
              </caption>
              <colgroup>
                <col className={W.c1} />
                <col className={W.c2} />
                <col className={W.c3} />
                <col className={W.c4} />
              </colgroup>

              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`${firstCol} z-30 rounded-tl-[16px] border-t border-color-border text-[12px] font-medium uppercase text-primary md:text-sm lg:text-base lg:normal-case`}
                  >
                    {columns[0]}
                  </th>
                  <th
                    scope="col"
                    className={`${cell} border-t border-color-border text-[13px] font-medium uppercase tracking-[0.03em] text-primary md:text-sm lg:text-base`}
                  >
                    {columns[1]}
                  </th>
                  <th
                    scope="col"
                    className={`${cellBase} border-t border-color-border text-[13px] font-medium uppercase tracking-[0.03em] text-primary md:text-sm lg:text-base`}
                  >
                    {columns[2]}
                  </th>

                  {/* Highlighted header: transparent, sits on the overlay */}
                  <th
                    scope="col"
                    className="relative !border-t-0 pt-1 border-b border-white/25 px-3 pb-4 align-middle text-white md:px-4 md:pb-5 lg:px-5"
                  >
                    <span className="absolute -top-[32px] left-0 rounded-full bg-[linear-gradient(180deg,#FED78A_0%,#DFC503_95.19%)] px-3 py-0.5 text-[10px] font-bold capitalize leading-[18px] text-[#6B5834] shadow-[0_8px_24px_0_#F9D47724] lg:px-4 lg:py-1 lg:text-sm lg:leading-[26px]">
                      {badge}
                    </span>

                    <div className="flex flex-col justify-center gap-1 md:gap-1.5 lg:gap-2">
                      <span className="text-base font-medium normal-case leading-[1.5] tracking-[-0.03em] lg:text-18-medium">
                        GS IT 360° AMC
                      </span>
                      <span className="text-[12px] font-normal normal-case tracking-normal text-white md:text-[13px] lg:text-[14px]">
                        One Partner One Contract
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => {
                  const isLast = i === lastIndex;
                  const bb = isLast ? "border-b-0" : "";
                  return (
                    <tr key={row.id}>
                      <th
                        scope="row"
                        className={`${firstCol} ${bb} ${
                          isLast ? "rounded-bl-[16px]" : ""
                        } text-[12px] font-medium leading-[1.35] tracking-[-0.03em] text-[#242E37] md:text-sm lg:text-base`}
                      >
                        {row.coverageArea}
                      </th>
                      <td className={`${cell} ${bb}`}>
                        <StatusCell cell={row.typicalITAMC} />
                      </td>
                      <td className={`${cellBase} ${bb}`}>
                        <StatusCell cell={row.specialistAVELV} />
                      </td>

                      {/* Highlighted cells: no background, the overlay shows through */}
                      <td
                        className={`px-3 py-4 align-middle text-white md:px-4 md:py-5 lg:px-5 ${
                          isLast ? "" : "border-b border-white/25"
                        }`}
                      >
                        <span className="inline-flex items-center gap-2 text-[14px] leading-[1.444] md:text-base lg:gap-3 lg:text-18">
                          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center self-start rounded-full">
                            <Image
                              src={`${ICON_BASE}/green-check.svg`}
                              width={24}
                              height={24}
                              alt=""
                              className="h-[24px] w-[24px]"
                            />
                          </span>
                          {row.gsIt360.text}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer cards */}
        <div className="mt-6 grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          <div className="flex h-full items-center gap-7 rounded-[16px] bg-[#CACACA1A] glass-effect !border-none p-6 max-md:flex-col max-md:items-start max-md:gap-2.5">
            <span className="shrink-0 self-start text-[35px] font-bold leading-none text-[#AAB1C2]">
              {(footers.left as { value?: string }).value ?? "2-3"}
            </span>
            <div>
              <h4 className="mb-2 text-24-medium text-paragraph">
                {footers.left.title}
              </h4>
              <p className="m-0 text-18 leading-[1.4444] text-[#8188A0]">
                {footers.left.description}
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-center rounded-[16px] bg-[#F5F9FC] p-6 text-primary">
            <h4 className="mb-2 text-24-medium">{footers.right.title}</h4>
            <p className="m-0 text-18 leading-[1.444] text-primary">
              {footers.right.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
