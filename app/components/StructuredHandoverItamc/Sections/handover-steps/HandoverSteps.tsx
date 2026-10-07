
import { Check } from "lucide-react"; 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import StickyColumn from "./StickyColumn";
import StepCard from "./StepCard";
export interface HandoverStep {
  number: string;
  title: string;
  description: string;
  featured?: boolean;
  whatWeDo: string[];
  receive: { text: string; note: string };
}

export interface HandoverStepsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  whatWeDoLabel: string;
  youReceiveLabel: string;
  steps: HandoverStep[];  
}

export default function HandoverSteps({ data,subtitleClass,variant }: { data: HandoverStepsData, subtitleClass:string,variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder"; }) {
  return (
    <section id="handover" className="w-full  bg-white  ">
      <div className="container">
        <div className="py-82 border-t border-[#d3d3d3]"> 
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] gap-52 xl:grid-cols-[1fr_820px]  ">
          {/* Left: fixed while the steps scroll */}
          <StickyColumn top={112}>
            <SectionHeader
                      data={data}
                      variant={variant}
                      subtitleClass={subtitleClass}
                      highlightColorClass={"text-primary"}
                    />

          </StickyColumn>

          {/* Right: normal page scroll */}
          <div className=""> 
              <article className="flex flex-col gap-52">
                {data.steps.map((step) => (
                  <StepCard key={step.number} id={`step-${Number(step.number)}`} top={200}>
                    {/* Header */}
                    <div className="sm:flex gap-4 border-b border-[#d3d3d3] pb-4 xl:pb-6 sm:gap-6">
                      <span className="text-[24px] md:text-[40px] xl:text-[62px] leading-none font-bold text-[#DAE7F0] ">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-[20px] md:text-24 font-medium text-primary tracking-[-3%]">
                          {step.title}
                        </h3>
                        <p className="text-textgray mt-2 md:mt-4 text-18">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="mt-2 xl:mt-6 grid  gap-0 xl:gap-4 xl:grid-cols-2">
                      <div className="p-4">
                        <h4 className="text-18 font-medium text-primary tracking-[-3%] xl:py-[3px]">
                          {data.whatWeDoLabel}
                        </h4>
                        <ul className="mt-4 flex flex-col gap-4 2xl:gap-6">
                          {step.whatWeDo.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-18 text-paragraph"
                            >
                              <Check className="mt-1 size-4 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl bg-[linear-gradient(360deg,#E7EFF9_0%,#ECEFF5_100%)] p-4">
                        <h4 className="text-18 font-medium text-primary tracking-[-3%] xl:py-[3px]">
                          {data.youReceiveLabel}
                        </h4>
                        <p className="mt-4 text-18 text-primary  ">
                          {step.receive.text}
                        </p>
                        <p className="text-textgray mt-4 text-18">
                          {step.receive.note}
                        </p>
                      </div>
                    </div>
                  </StepCard>
                ))}
              </article>
            
          </div>
        </div>
        </div> 
      </div>
    </section>
  );
}