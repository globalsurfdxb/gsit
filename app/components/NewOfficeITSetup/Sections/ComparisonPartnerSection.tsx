import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface PartnerRow {
  area: string;
  typical: string;
  gsit: string;
}

export interface ComparisonPartnerData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  headers: {
    area: string;
    typical: string;
    gsitTitle: string;
    gsitSub: string;
    badge: string;
  };
  rows: PartnerRow[];
  footer: string; // wrap highlighted text in {{ }}
}

interface ComparisonPartnerProps {
  data: ComparisonPartnerData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

function renderFooter(text: string) {
  return text.split(/(\{\{.*?\}\})/g).map((part, i) => {
    const match = part.match(/^\{\{(.*?)\}\}$/);
    return match ? (
      <span key={i} className="text-primary">
        {match[1]}
      </span>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

/* Row layout: fixed cqw widths on mobile (28 + 62 + 72 = 162cqw),
   a 3-column grid from md up. */
const ROW = "flex w-[162cqw] md:grid md:w-full md:grid-cols-[22fr_42fr_36fr]";
const COL1 =
  "sticky left-0 z-10 w-[28cqw] shrink-0 bg-white  md:static md:w-auto md:shadow-none ";
const COL2 = "w-[62cqw] shrink-0 md:w-auto";
const COL3 = "w-[72cqw] shrink-0 md:w-auto shadow-[-18px_13px_24px_2px_#4545453d]";

export default function ComparisonPartnerSection({
  data,
  variant = "default",
  subtitleClass,
}: ComparisonPartnerProps) {
  const { headers, rows } = data;
  const lastIndex = rows.length - 1;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        {/* Scroll container. [container-type] makes cqw units resolve to this box's width. */}
        <div className="scrollbar-hide mt-4 2xl:mt-7 pt-4 overflow-x-auto pb-6 [container-type:inline-size]">
          {/* Header row */}
          <div className={ROW}>
            <div className={`${COL1} pt-8`}>
              <div className="flex h-full items-center rounded-tl-2xl border border-[#e5e5e5] text-primary py-4  2xl:py-6 px-4 text-18 font-light">
                {headers.area}
              </div>
            </div>

            <div className={`${COL2} mt-8 flex items-center border-b border-t border-[#e5e5e5] text-primary py-4  2xl:py-6 px-4 text-18 font-light`}>
              {headers.typical}
            </div>

            <div className={`${COL3} relative flex flex-col justify-center rounded-t-2xl border-b border-[#2D50BE] bg-[#17399A] px-4  py-5 xl:py-6 text-white `}>
              <span className="absolute -top-0 left-4 -translate-y-1/2 rounded-full bg-[#F5CE3A] px-4 py-1.5 text-16 font-bold uppercase leading-none text-[#6B5200] md:left-5  ">
                {headers.badge}
              </span>
              <span className="text-18 font-bold !leading-[1.778]">{headers.gsitTitle}</span>
              <span className="mt-2 md:mt-3 text-18">{headers.gsitSub}</span>
            </div>
          </div>

          {/* Body rows */}
          {rows.map((row, i) => {
            const isLast = i === lastIndex;

            return (
              <div key={i} className={ROW}>
                <div className={COL1}>
                  <div
                    className={`flex h-full items-center border-b border-l border-r border-[#e5e5e5] px-3 py-5   font-medium text-[#1a1a1a] md:px-4  text-18 leading-[1.778] lg:px-6 text-bold ${
                      isLast ? "rounded-bl-2xl" : ""
                    }`}
                  >
                    {row.area}
                  </div>
                </div>

                <div
                  className={`${COL2} flex items-center border-b border-[#e5e5e5] px-3 py-5   text-paragraph md:px-4  text-18 lg:px-6`}
                >
                  {row.typical}
                </div>

                <div
                  className={`${COL3} flex items-center gap-3 border-b border-[#2D50BE] bg-[#1239AA] px-4 py-4   text-white md:px-6  text-18 ${
                    isLast
                      ? "rounded-b-2xl shadow-[-18px_13px_24px_2px_#4545453d]"
                      : " shadow-[-18px_13px_24px_2px_#4545453d]"
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B2DFC366] md:h-6 md:w-6">
                    <LucideIcon name="Check" className="h-3 w-3 text-[#8EDAB5]" strokeWidth={3} />
                  </span>
                  <span>{row.gsit}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="  border-t border-[#D3D3D3] pt-4 text-18 text-paragraph  ">
          {renderFooter(data.footer)}
        </p>
      </div>
    </section>
  );
}