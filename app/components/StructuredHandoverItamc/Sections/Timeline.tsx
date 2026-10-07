import { ArrowRight } from "lucide-react";  
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import Cta from "@/app/components/common/Cta";

export interface TimelineStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface TimelineData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  steps: TimelineStep[];
  cta: {
    title: string;
    description: string;
    button: string;
    background: string;
  };
}

export default function Timeline({ data,subtitleClass,variant  }: { data: TimelineData ,subtitleClass:string,variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";}) {
  return (
    <section className="w-full bg-white ">
      <div className="container">
       <div className="py-82 border-t border-[#d3d3d3]">
          {/* Heading */}
          <div>  
                <SectionHeader
                                    data={data}
                                    variant={variant}
                                    subtitleClass={subtitleClass}
                                    highlightColorClass={"text-primary"}
                                  /> 
          </div>

          {/* Steps */}
          <ol className="mt-52 grid gap-8 xl:gap-8 sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-5    ">
            {data.steps.map((step, i) => {
              const isLast = i === data.steps.length - 1;
              return (
                <li key={step.number} className="flex flex-col">
                  <p className="text-18 uppercase-first text-primary">{step.label}</p>

                  <span className="mt-1 lg:mt-[15px] text-[48px] leading-none font-bold text-[#DAE7F0] xl:text-[62px]">
                    {step.number}
                  </span>

                  <div className="mt-[15px] flex items-center justify-between gap-3">
                    <h3 className="text-[22px] 3xl:text-24 font-medium tracking-[-3%] text-primary">
                      {step.title}
                    </h3>
                    {!isLast && (
                      <span
                        aria-hidden
                        className="hidden shadow-[0px_3px_14px_0px_#1A3FA64D] size-8 2xl:size-9 3xl:size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white lg:inline-flex "
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    )}
                  </div>

                  <p className={`text-textgray mt-1 lg:mt-5 text-18  ${!isLast ? '':'max-w-[20ch]'}`}>{step.description}</p>
                </li>
              );
            })}
          </ol>

          {/* CTA bar */} 
          {data.cta?.title && (  <Cta items={data.cta} classcta="mt-52"/>  )}
       </div>
      </div>
    </section>
  );
}