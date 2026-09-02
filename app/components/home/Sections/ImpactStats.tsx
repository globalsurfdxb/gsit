"use client";

export interface StatItem {
  stat: string;
  title: string;
  description: string;
}

export interface ImpactStatsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  stats: StatItem[];
}

interface ImpactStatsProps {
  data: ImpactStatsData;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
  subtitleClass?:string;
}

import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
export default function ImpactStats({ data,variant,subtitleClass }: ImpactStatsProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">  
         <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant}    />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-7.5 mt-52 2xl:pt-6">
          {data.stats.map((item, i) => (
            <div key={i} className="p-4 lg:p-6">
              <div className="text-[56px] lg:text-[64px] 3xl:text-[86px] text-primary font-bold tracking-[-2%] leading-[1]">
                {item.stat}
              </div>

              <h3 className="text-24 text-primary font-medium tracking-[-3%] mt-4 xl:mt-8">
                {item.title}
              </h3>

              <p className="text-18 text-[#5875A0] mt-4.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}