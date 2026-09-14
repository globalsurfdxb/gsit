// components/TrackRecordSection.tsx
"use client";

import HeadingTag from "@/app/components/common/Heading/HeadingTag";
import SectionTag from "@/app/components/common/Heading/SectionTag";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
export interface TrackRecordStat {
  value: string;
  suffix?: string;
  title: string;
  description: string;
}

export interface TrackRecordData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  stats: TrackRecordStat[];
}
interface TrackRecordSectionProps {
  data: TrackRecordData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}
 
   
  
 
export default function TrackRecordSection({ data,variant,subtitleClass}: TrackRecordSectionProps ) {  
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        
      <SectionHeader
                data={{
                  tag: data.tag,
                  heading: data.heading,
                  highlightLast: data.highlightLast,
                  subhead: data.subhead,
                }}
                variant={variant}
                subtitleClass={subtitleClass}
              />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-12 mt-52">
          {data.stats.map((stat, i) => (
            <div key={i} className="pb-4 xl:pt-6.5 lg:pb-16.5 border-b border-[#D3D3D3]"> 
              <div className="flex items-baseline ">
                      <p className="text-primary text-56 leading-[1.072] flex items-baseline gap-2">
                        <span className="tabular-nums">{stat.value}</span>
                        <span className="text-56 leading-[1.072] ">{stat.suffix}</span>
                      </p> 
                    </div>
              <h3 className="text-27-medium text-primary tracking-[-3%] mt-12">
                {stat.title}
              </h3>
              <p className="text-18 text-paragraph mt-4 ">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}