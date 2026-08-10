// components/TrackRecordSection.tsx
"use client";

import HeadingTag from "@/app/components/common/Heading/HeadingTag";
import SectionTag from "@/app/components/common/Heading/SectionTag";
import CounterCard from "@/app/components/common/CounterCard"; 
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
}
 
   
  
 
export default function TrackRecordSection({ data}: TrackRecordSectionProps ) {  
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        {/* Header block — full-width subhead below heading, own bottom border.
            Built directly here rather than via SectionHeader since none of
            its existing variants place the description full-width/left-aligned
            below the heading; this is a distinct layout shape. */}
        <div className="pb-6 border-b border-[#D3D3D3]">
          <SectionTag text={data.tag} />
          <div className="pt-4 xl:pt-6.5">
            <HeadingTag as="h2" text={data.heading} highlightLast={data.highlightLast} />
          </div>
          <p className="text-18 text-paragraph mt-4 lg:mt-6.5 max-w-[110ch]">
            {data.subhead}
          </p>
        </div>

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