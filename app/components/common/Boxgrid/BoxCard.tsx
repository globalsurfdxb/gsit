"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 

export interface OverviewCardItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  highlighted?: boolean;
}

export interface OverviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead?: string;
  cards: OverviewCardItem[]; // exactly 4 expected
  image: string;
}

interface OverviewGridProps {
  data: OverviewData; 
  subtitleClass?: string; 
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

function BoxCard({ item }: { item: OverviewCardItem }) {
   
  return (
    <div className="bg-[#F2F7FE] rounded-2xl p-4 lg:p-6 min-h-[220px] lg:min-h-[272px] flex flex-col justify-between">
      <h3 className="text-42  tracking-[-3%]">
        <span className="block text-paragraph ">{item.titleLine1}</span>
        <span className="block text-[#9a9a9a] ">{item.titleLine2}</span>
      </h3>

      <p className="text-paragraph/50 text-18">{item.description}</p>
    </div>
  );
}

export default function OverviewGrid({
  data, 
  subtitleClass,
  variant,
}: OverviewGridProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
         
        />

        <div className="mt-52 ">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-4 lg:gap-6 2xl:gap-7.5">
            {data.cards.map((item ,index) => (
              <BoxCard key={index} item={item} />
            ))}
          </div>

           
        </div>
      </div>
    </section>
  );
}