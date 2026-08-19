"use client";

import Image from "next/image";
import LucideIcon from "@/app/components/common/LucideIcon"; 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
export interface OverviewImageItem {
  id: string;
  type: "image";
  image: string;
}

export interface OverviewTextItem {
  id: string;
  type: "text";
  icon: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export interface OverviewHighlightItem {
  id: string;
  type: "highlight";
  description: string;
}

export type OverviewItem =
  | OverviewImageItem
  | OverviewTextItem
  | OverviewHighlightItem;

export interface OverviewData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cardsitem: OverviewItem[];
}  
  

interface OverviewGridProps {
  data: OverviewData;
  subtitle?: boolean;
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

function OverviewCell({ item }: { item: OverviewItem }) {
  if (item.type === "image") {
    return (
      <div className="relative w-full h-full min-h-[280px] lg:min-h-[353px] overflow-hidden rounded-2xl">
        <Image src={item.image} alt="" fill className="object-cover" />
      </div>
    );
  }

  if (item.type === "highlight") {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)] p-6 lg:p-8 min-h-[320px] lg:min-h-[353px] flex items-end">
        <Image src='/assets/images/elv/pattern.svg' alt=""width={226} height={138} className="absolute top-0 right-0"/>
        <p className="text-white text-24 !leading-[1.3] lg:!leading-[1.5] font-medium  ">
          {item.description}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6f6] rounded-2xl p-4 lg:p-6 min-h-[280px] lg:min-h-[353px] flex flex-col justify-between">
        <div>
      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6">
        <LucideIcon
          name={item.icon}
          strokeWidth={1.5}
          className="w-6 h-6 text-primary"
        />
      </div>

        <h3 className="text-32   text-primary leading-snug mb-4 tracking-[-3%]">
          <span className="block">{item.titleLine1}</span>
          <span className="block">{item.titleLine2}</span>
        </h3>
</div>
      <div>
        <p className="text-paragraph/50 text-18">{item.description}</p>
      </div>
    </div>
  );
}

export default function OverviewGrid({
  data,
  variant, 
  subtitleClass,
}: OverviewGridProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass} 
        />

        <div className="mt-4 md:mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-7.5">
          {data.cardsitem.map((item) => (
            <OverviewCell key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}