import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SpecItem {
  label: string;
  value: string;
  sub?: string;
}

export interface SpecDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  data: SpecItem[];
  note?: string;
  noteHref?: string; // turns the note into a link, e.g. "#full-specs"
}

interface Props {
  data: SpecDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SpecStrip({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52">
          {/* 1px gap over a tinted background draws the grid lines */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e3e8f0] bg-[#e3e8f0] lg:grid-cols-4">
            {data.data.map((spec, i) => (
              <div key={i} className="grid min-w-0 content-start gap-1 bg-white px-5 py-[18px]">
                <span className="text-[12px] uppercase tracking-[0.06em] text-paragraph">{spec.label}</span>
                <b className="text-[18px] font-medium leading-[1.35] tracking-[-0.02em] text-[#111]">{spec.value}</b>
                {spec.sub && <small className="text-[13.5px] leading-[1.45] text-paragraph">{spec.sub}</small>}
              </div>
            ))}
          </div>
          {data.note && (
            <p className="mt-3 text-[13.5px] text-paragraph">
              {data.noteHref ? (
                <a href={data.noteHref} className="text-primary">
                  {data.note}
                </a>
              ) : (
                data.note
              )}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
