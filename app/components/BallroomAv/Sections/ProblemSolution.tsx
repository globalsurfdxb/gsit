import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";
import CustomButton from "@/app/components/common/CustomButton";

interface Cell {
  title: string;
  text: string;
  tag?: string; // short impact / outcome pill under the text
}

export interface ProblemsDataType {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  problemLabel: string;
  solutionLabel: string;
  rows: { problem: Cell; solution: Cell & { icon: string } }[];
  cta?: { title: string; description: string; button: string; href: string };
}

interface Props {
  data: ProblemsDataType;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const h3 = "mb-2 text-[22px] font-medium leading-[1.3] tracking-[-0.03em]";

export default function ProblemSolution({ data, variant, subtitleClass }: Props) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-52 grid gap-4">
          {/* Column labels, desktop only */}
          <div aria-hidden="true" className="mb-1 hidden grid-cols-[1fr_64px_1fr] lg:grid">
            <span className="flex items-center gap-2 text-[14px] uppercase tracking-[0.06em] text-paragraph">
              <i className="size-2 rounded-full bg-[#C9C9C9]" />
              {data.problemLabel}
            </span>
            <span className="col-start-3 flex items-center gap-2 text-[14px] uppercase tracking-[0.06em] text-paragraph">
              <i className="size-2 rounded-full bg-primary" />
              {data.solutionLabel}
            </span>
          </div>

          {data.rows.map((row, i) => (
            <div key={i} className="group grid lg:grid-cols-[1fr_64px_1fr] lg:items-stretch">
              <div className="flex flex-col md:flex-row min-w-0 items-start gap-4 rounded-t-2xl bg-[#F6F6F6] p-[22px] pb-[30px] lg:gap-[22px] lg:rounded-2xl lg:p-7">
                <span className="text-[34px] font-bold leading-none text-[#DAE7F0] tabular-nums lg:text-[44px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`${h3} text-[#2b2b2b]`}>{row.problem.title}</h3>
                  <p className="text-[17px] leading-[1.6] text-paragraph">{row.problem.text}</p>
                  {row.problem.tag && (
                    <span className="mt-3 inline-block rounded-full bg-[#FBEFEF] px-3 py-1 text-[14px] text-[#9A3B3B]">{row.problem.tag}</span>
                  )}
                </div>
              </div>

              {/* Connector: points down on mobile, right on desktop */}
              <div aria-hidden="true" className="relative -top-5 lg:top-0 z-[1] grid h-0 place-items-center text-primary lg:h-auto">
                <span className="grid size-10 place-items-center rounded-full border border-[#D3D3D3] bg-white transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white lg:group-hover:translate-x-[3px]">
                  <ArrowRight strokeWidth={1} className="size-5 rotate-90 lg:rotate-0" />
                </span>
              </div>

              <div className="flex flex-col md:flex-row min-w-0 items-start gap-4 rounded-b-2xl border border-t-0 border-[#D3D3D3] bg-white p-[22px] pt-[30px] transition-colors duration-300 group-hover:border-primary group-hover:bg-[#EEF5FF] lg:gap-[22px] lg:rounded-2xl lg:border-t lg:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#EEF5FF] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <LucideIcon name={row.solution.icon} className="size-6" strokeWidth={1} />
                </span>
                <div>
                  <h3 className={`${h3} text-primary`}>{row.solution.title}</h3>
                  <p className="text-[17px] leading-[1.6] text-paragraph">{row.solution.text}</p>
                  {row.solution.tag && (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#EEF5FF] px-3 py-1 text-[14px] text-primary transition-colors duration-300 group-hover:bg-white">
                      <Check strokeWidth={1} className="size-3.5" />
                      {row.solution.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.cta && (
          <div className="mt-52 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#F6F6F6] p-6 lg:flex-row lg:items-center lg:p-8">
            <div>
              <h3 className="text-24 font-medium tracking-[-0.03em] text-primary">{data.cta.title}</h3>
              <p className="mt-1.5 text-18 text-paragraph">{data.cta.description}</p>
            </div>
            <CustomButton text={data.cta.button} icon="ArrowRight" bgButton="bg-primary" dark href={data.cta.href} className="shrink-0" />
          </div>
        )}
      </div>
    </section>
  );
}
