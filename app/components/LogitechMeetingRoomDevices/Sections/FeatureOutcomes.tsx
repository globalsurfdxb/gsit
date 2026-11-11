import { ArrowRight } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import SvgIcon from "@/app/components/LogitechProduct/Sections/SvgIcon";

export interface FeatureOutcomesData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: { icon: string; title: string; text: string; outcome: string }[];
}

interface Props {
  data: FeatureOutcomesData;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Feature cards, each closing with a one-line outcome for the buyer
export default function FeatureOutcomes({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {data.data.map((f) => (
            <article key={f.title} className="flex min-w-0 flex-col rounded-[14px] border border-[#efeff2] bg-[#fafafb] p-6">
              <span className="mb-[22px] grid size-10 place-items-center rounded-lg bg-[#eef4fd] text-primary">
                <SvgIcon markup={f.icon} className="size-5" />
              </span>
              <h3 className="mb-3 text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111]">{f.title}</h3>
              <p className="flex-1 text-[14.5px] leading-[1.65] text-paragraph">{f.text}</p>
              <p className="mt-4 flex items-center gap-2 border-t border-[#e6eaf2] pt-3.5 text-[14.5px] font-medium leading-normal text-primary">
                <ArrowRight strokeWidth={1} className="size-[15px] flex-none" />
                {f.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
