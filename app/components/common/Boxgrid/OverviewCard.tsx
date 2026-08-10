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

function OverviewCard({ item }: { item: OverviewCardItem }) {
  if (item.highlighted) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)] p-6 lg:p-8 min-h-[280px] lg:min-h-[217px] 3xl:min-h-[317px]  flex flex-col justify-between">
        <Image
          src="/assets/images/icons/pattern-full.svg"
          alt=""
          width={283}
          height={276}
          className="absolute top-0 right-0 translate-x-2/4 -translate-y-2/6"
        />

        <h3 className="relative z-10 text-32  tracking-[-3%]">
          <span className="block text-white ">{item.titleLine1}</span>
          <span className="block text-white/50 ">{item.titleLine2}</span>
        </h3>

        <p className="relative z-10 text-white text-18">{item.description}</p>
      </div>
    );
  }

  return (
    <div className="bg-[linear-gradient(180deg,#F2F2F9_0%,#F3F6FF_100%)] rounded-2xl p-6 lg:p-6 min-h-[280px] 3xl:min-h-[317px] flex flex-col justify-between">
      <h3 className="text-32  tracking-[-3%]">
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

        <div className="mt-52 grid grid-cols-1 lg:grid-cols-[auto_auto_400px] xl:grid-cols-[auto_auto_590px] 3xl:grid-cols-[auto_auto_650px] 3xl:grid-cols-[auto_auto_778px] gap-4 lg:gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 2xl:gap-x-6 2xl:gap-y-7.5">
            {data.cards.map((item) => (
              <OverviewCard key={item.id} item={item} />
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[280px] h-full">
            <Image src={data.image} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}