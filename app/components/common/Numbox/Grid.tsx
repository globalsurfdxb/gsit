"use client";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  data: ProcessStep[];
  gridclass?:string;
  boxheight?:string;
}

export default function Grid({ data, gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ",boxheight }: ProcessStepsProps) {
  return (
    <section className="pt-52">
      <div className="">
        <div className={`grid ${gridclass}  gap-12 md:gap-13 2xl:gap-[82px]`}>
          {data.map((step, i) => (
            <div key={i} className="relative ">
              
              <div className={`relative ${boxheight} h-full`}>
                <span className=" block text-[40px] md:text-[50px] lg:text-[62px] leading-[1] font-bold text-[#DAE7F0] select-none">
                {step.number}
              </span> 
                <div className="flex flex-col justify-start lg:pt-10 xl:pt-0  h-full mt-[15px] ">
                    <h3 className="text-primary text-24 tracking-[-3%] font-medium mb-4 lg:mb-5">
                  {step.title}
                </h3>
                <p className="text-[#A9A9A9] text-18">
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