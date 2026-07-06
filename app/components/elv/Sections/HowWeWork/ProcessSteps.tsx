"use client";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  data: ProcessStep[];
}

export default function ProcessSteps({ data }: ProcessStepsProps) {
  return (
    <section className="pt-52">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 xl:gap-x-7.5 gap-y-10 md:gap-y-13">
          {data.map((step, i) => (
            <div key={i} className="relative ">
              <span className="absolute z-10 bg-white -top-4 md:-top-6 left-0 text-[40px] md:text-[62px] leading-none font-semibold text-[#DAE7F0] select-none">
                {step.number}
              </span>
              <div className="relative border border-[#D3D3D3] rounded-lg p-4 lg:p-6  pt-13 min-h-[200px]  md:min-h-[260px] h-full">
                <span className="absolute -top-px left-16 right-0 " />
                <div className="flex flex-col justify-end h-full">
                    <h3 className="text-primary text-24 tracking-[-3%] font-medium mb-4 lg:mb-5">
                  {step.title}
                </h3>
                <p className="text-paragraph text-18">
                  {step.description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}