// components/TrackRecordSection.tsx
"use client";

import HeadingTag from "@/app/components/common/Heading/HeadingTag";
import SectionTag from "@/app/components/common/Heading/SectionTag";
import CounterCard from "@/app/components/common/CounterCard"; 
export interface TrackRecordStat {
   
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 lg:gap-x-7.5 gap-y-12 mt-52 2xl:mt-[86px]">
          {data.stats.map((stat, i) => (
            <div key={i} className="pb-52  2xl:pb-[58px] border-b border-[#D3D3D3]"> 
               
              <h3 className="text-24 font-medium text-primary tracking-[-3%]  ">
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