import React from "react";
import Image from "next/image";
import SectionHeader from "../../common/Heading/SectionHeader";
import { comparisonData } from "../data";

type Cell = { status: string; text: string };

const ICON_BASE = "/assets/images/itamc";

/* status -> dot style + icon + text colour (mirrors .ct-dot / .ct-status in the PHP CSS) */
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
  separate: { dot: "bg-[#B2DFC3]", icon: "check.svg", text: "text-[#464646]" }, // "Covered, separate contract"
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

const StatusCell: React.FC<{ cell: Cell }> = ({ cell }) => {
  const s = STATUS_MAP[cell.status];

  // plain text cells (count / queue / head)
  if (!s) {
    const color = cell.text === "2 to 3" ? "text-[#8A5A07]" : "text-[#848484]";
    return <span className={`text-base ${color}`}>{cell.text}</span>;
  }

  return (
    <span
      className={`inline-flex items-center gap-3 text-18 font-normal leading-[1.4444] ${s.text}`}
    >
      <span
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${s.dot}`}
      >
        <Image
          src={`${ICON_BASE}/${s.icon}`}
          width={10}
          height={10}
          alt=""
          className="h-2.5 w-2.5"
        />
      </span>
      {cell.text}
    </span>
  );
};

export const ComparisonTableSection: React.FC = () => {
  const { header, columns, rows, badge, footers } = comparisonData;
  const lastIndex = rows.length - 1;

  const cell =
    "border-b border-r border-color-border px-5 py-5  text-18 font-[500]  leading-[1.625] md:leading-[1.6255] lg:leading-[1.625] 3xl:leading-[1.778] tracking-[-3%] ";

  return (
    <section className="w-full rounded-[16px] bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
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
        </div>

        {/* Table (pt-5 gives the highlighted column room to pop above the border) */}
        <div
          role="region"
          aria-label="IT AMC coverage comparison"
          tabIndex={0}
          className="overflow-x-auto pt-10 max-md:pt-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <table className="w-full min-w-[820px] table-fixed border-separate border-spacing-0 rounded-[16px] border border-r-0 border-color-border text-left">
            <caption className="sr-only">
              Comparison of IT AMC coverage across providers
            </caption>
            <colgroup>
              <col className="w-[26.4%]" />
              <col className="w-[22%]" />
              <col className="w-[24.2%]" />
              <col className="w-[25.2%]" />
            </colgroup>

            <thead>
              <tr>
                <th
                  scope="col"
                  className={`${cell} text-base font-medium text-primary`}
                >
                  {columns[0]}
                </th>
                <th
                  scope="col"
                  className={`${cell}  font-medium uppercase tracking-[0.03em] text-primary`}
                >
                  {columns[1]}
                </th>
                <th
                  scope="col"
                  className={`${cell}  font-medium uppercase tracking-[0.03em] text-primary`}
                >
                  {columns[2]}
                </th>

                {/* Highlighted column header */}
                <th
                  scope="col"
                  className="relative border-b border-[#d3d3d3] pb-5 px-5 text-white"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 top-0 rounded-t-[16px] bg-primary md:-top-5"
                  />
                  <span className="absolute -top-[37px] left-0 z-50 rounded-full bg-[linear-gradient(180deg,#FED78A_0%,#DFC503_95.19%)] px-4 py-1 text-sm font-bold capitalize leading-[26px] text-[#6B5834] shadow-[0_8px_24px_0_#F9D47724] max-md:static max-md:mb-1 max-md:inline-block max-md:px-[13px] max-md:text-[10px] max-md:leading-[18px]">
                    {badge}
                  </span>

                  <div className="relative z-10 flex flex-col mt-1 justify-center gap-2">
                    <span className="text-18 font-medium normal-case tracking-[-3%] leading-[1.77]">
                      GS IT 360° AMC
                    </span>
                    <span className="text-[14px] font-normal normal-case tracking-normal text-white">
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
                      className={`${cell} ${bb} tracking-[-3%]  font-medium text-[#242E37]`}
                    >
                      {row.coverageArea}
                    </th>
                    <td className={`${cell} ${bb}`}>
                      <StatusCell cell={row.typicalITAMC} />
                    </td>
                    <td className={`${cell} ${bb}`}>
                      <StatusCell cell={row.specialistAVELV} />
                    </td>
                    <td
                      className={`border-b border-[#d3d3d3] bg-primary  px-5 py-5  text-white ${
                        isLast ? "rounded-br-[16px] border-b-0" : ""
                      }`}
                    >
                      <span className="inline-flex items-center gap-3 text-18 leading-[1.444444]">
                        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#B2DFC366]">
                          <Image
                            src={`${ICON_BASE}/checkgreen.svg`}
                            width={10}
                            height={10}
                            alt=""
                            className="h-2.5 w-2.5"
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

        {/* Footer cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex h-full items-center gap-5 rounded-[16px] bg-[#CACACA1A] p-6 max-md:flex-col max-md:items-start max-md:gap-2.5">
            <span className="shrink-0 text-[35px] font-bold leading-none text-[#AAB1C2]">
              {(footers.left as { number?: string }).number ?? "2-3"}
            </span>
            <div>
              <h4 className="mb-2 text-2xl font-medium text-[#242E37]">
                {footers.left.title}
              </h4>
              <p className="m-0 text-base text-[#8188A0]">
                {footers.left.description}
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-center rounded-[16px] bg-[linear-gradient(90deg,#15307F_0%,#1C4ACA_100%)] p-6 text-white">
            <h4 className="mb-1.5 text-2xl font-medium">
              {footers.right.title}
            </h4>
            <p className="m-0 text-base text-white/85">
              {footers.right.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
