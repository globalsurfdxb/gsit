import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface SystemLayersData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: { icon: string; label: string; title: string; text: string }[];
}

interface Props {
  data: SystemLayersData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SystemLayers({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-7 md:grid-cols-2 md:gap-x-16 md:gap-y-12 3xl:grid-cols-4 3xl:gap-x-8 3xl:gap-y-14">
          {data.items.map((c) => (
            <div key={c.title} className="group flex min-w-0 items-start gap-4 md:gap-5">
              {/* Icon tile with the layer name under it */}
              <div
                aria-hidden="true"
                className="flex h-[84px] w-[88px] shrink-0 flex-col items-center justify-center gap-2 bg-[#F6F6F6] text-primary transition-colors duration-300 group-hover:bg-[#EEF5FF] md:h-[108px] md:w-[120px]"
              >
                <LucideIcon name={c.icon} strokeWidth={1} className="size-[30px] transition-transform duration-400 group-hover:-translate-y-0.5 md:size-[38px]" />
                <span className="text-[9px] uppercase tracking-[0.03em] text-paragraph md:text-[11px] md:tracking-[0.06em]">{c.label}</span>
              </div>
              <div className="min-w-0">
                <h3 className="mb-2.5 text-18 font-normal leading-[1.4] tracking-[-0.02em] text-primary md:mt-1 md:text-[20px]">{c.title}</h3>
                <p className="max-w-[46ch] text-16 leading-[1.6] text-paragraph">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
