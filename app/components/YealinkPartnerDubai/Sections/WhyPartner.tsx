import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface WhyPartnerDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: { icon: string; title: string; text: string }[];
  stats: { value: string; text: string }[];
}

interface Props {
  data: WhyPartnerDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyPartner({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-7 min-[900px]:grid-cols-3 min-[900px]:gap-6">
          {data.data.map((item, i) => (
            <div key={i} className="flex min-w-0 flex-col items-start gap-3.5 border-l-2 border-primary py-1.5 pl-[26px] pr-4">
              <span className="mb-[22px] grid size-[54px] place-items-center rounded-lg border border-[#ebf2fd] bg-[#eef5ff] text-primary">
                <LucideIcon name={item.icon} className="size-6 text-primary" strokeWidth={1} />
              </span>
              <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.02em] text-[#111]">{item.title}</h3>
              <p className="text-[16px] leading-[1.6] text-paragraph">{item.text}</p>
            </div>
          ))}
        </div>

        {/* GS IT in numbers */}
        <div role="list" aria-label="GS IT in numbers" className="mt-14 grid rounded-2xl bg-linear-to-r from-[#eef4fd] to-[#eaf1fc] px-6 py-2 min-[900px]:grid-cols-3 min-[900px]:px-2 min-[900px]:py-7">
          {data.stats.map((s, i) => (
            <div
              key={i}
              role="listitem"
              className="flex min-w-0 items-center gap-5 border-t border-[#d3d3d3] py-[18px] first:border-t-0 min-[900px]:border-l min-[900px]:border-t-0 min-[900px]:px-8 min-[900px]:py-1.5 min-[900px]:first:border-l-0"
            >
              <b className="flex-none text-[clamp(30px,2.6vw,38px)] font-normal leading-none tracking-[-0.03em] text-primary tabular-nums">{s.value}</b>
              <span className="text-[16px] leading-[1.4] text-paragraph">{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
