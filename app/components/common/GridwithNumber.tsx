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

export default function GridwithNumber({ data, gridclass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ",boxheight }: ProcessStepsProps) {
  return (
    <section className="pt-52">
      <div className="">
        <div className={`grid ${gridclass} gap-x-4 xl:gap-x-7.5 gap-y-10 md:gap-y-13`}>
          {data.map((step, i) => (
            <div key={i} className="relative ">
              <span className="absolute z-10 bg-white -top-4 md:-top-5 lg:-top-6 left-0 text-[40px] md:text-[50px] lg:text-[62px] leading-none font-semibold text-[#DAE7F0] select-none">
                {step.number}
              </span>
              <div className={`relative ${boxheight} border border-[#D3D3D3] rounded-lg p-6    h-full`}>
                <span className="absolute -top-px left-16 right-0 " />
                <div className="flex flex-col justify-start md:pt-10 xl:pt-0  h-full">
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