"use client";
 

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

interface OnboardingStepsProps {
  data: ProcessStep[];
}

export default function OnboardingSteps({ data }: OnboardingStepsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0">
      {data.map((step, i) => {
        const isLast = i === data.length - 1;
        return (
          <div key={i} className="relative flex flex-col mainsts">
            {/* Vertical divider on mobile, horizontal on desktop between columns */}
            <div
              className={`px-0 md:px-8 lg:px-10  innerpd ${
                !isLast
                  ? "border-b lg:border-b-0 lg:border-r border-[#d3d3d3] pb-5 lg:pb-0"
                  : ""
              }`}
            >
             <div className="flex flex-col justify-between gap-4 lg:h-[311px]">
                <div>
                <span className="block text-65 3xl:text-[62px] leading-none font-bold text-[#DAE7F0] select-none mb-[15px]">
                {step.number}
              </span>

              <h3 className="text-primary text-24 font-medium mb-4 lg:mb-5" >
                {step.title}
              </h3>

              <p className="text-paragraph text-18 2 max-w-[35ch]">
                {step.description}
              </p>
              </div>

              <span className="text-primary text-18 uppercase">
                {step.tag}
              </span>
            </div>
             </div>

            {/* Arrow connector — hidden on mobile, shown between columns on desktop */}
            {!isLast && (
              <span className="hidden lg:flex absolute top-[76px] md:top-1/2 -translate-y-1/2 -right-6 lg:-right-6 z-10 items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary shadow-[0_8px_20px_-4px_rgba(26,46,110,0.4)]">
               
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 9H14.25" stroke="white" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 3.75L14.25 9L9 14.25" stroke="white" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}