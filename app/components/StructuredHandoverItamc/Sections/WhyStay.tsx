
import SectionHeader from "@/app/components/common/Heading/SectionHeader";  

export interface WhyStayStat {
  value: string;
  label: string;
}

export interface WhyStayData {
  
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  stats: WhyStayStat[];
  teamLabel: string;
  teamTags: string[];
}

export default function WhyStay({ data,subtitleClass,variant,rundborder,containertopline }: {rundborder?:boolean; 
containertopline?:boolean; data: WhyStayData ,subtitleClass:string,variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder"; }) {
  return (
<section    className={`w-full bg-white   ${
    rundborder !== false ? "rounded-xl" : "" }`}>
       <div className="container">
        <div className={`py-82   ${
    containertopline !== false ? "border-t border-[#d3d3d3]" : ""
  }`} >
          {/* Heading row */}
        <div>   
          <SectionHeader  data={data} variant={variant}  subtitleClass={subtitleClass} highlightColorClass={"text-primary"} />  
        </div>

        {/* Stats */}
        <div className="mt-6 lg:mt-10.5 rounded-2xl bg-[#FAFAFA] p-4 md:p-6">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {data.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-4 lg:p-6 ${
                  i >= 4 ? "border-t border-[#E0E0E0]" : ""
                } ${i >= 2 ? "max-lg:border-t max-lg:border-[#E0E0E0]" : ""} ${
                  i % 4 === 0 ? "lg:pl-6" : ""
                }`}
              >
                  <dd className="order-1 text-[32px] leading-none 2xl:leading-[1.404] font-medium text-primary md:text-[40px] xl:text-[52px]">
                  {stat.value}
                </dd>
                <dt className="text-paragraph mt-[5px] text-16 2xl:!leading-[1.375]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Team tags */}
        <div className="mt-5 md:mt-8 2xl:mt-10.5 flex flex-wrap items-center gap-3">
          <p className="text-18 text-primary font-medium">{data.teamLabel}</p>
          <div className="flex flex-wrap items-center gap-3">
            {data.teamTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary px-[14.7px] py-[5px] text-base text-white min-w-20.5 text-center text-18"
            >
              {tag}
            </span>
          ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}