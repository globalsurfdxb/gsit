"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface RaidLevelItem {
  badge: string;
  title: string;
  description: string;
}

export interface RaidLevelsData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  items: RaidLevelItem[];
}

interface RaidLevelsProps {
  data: RaidLevelsData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function RaidLevels({
  data,
  variant = "default",
  subtitleClass,
}: RaidLevelsProps) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-52">
          {data.items.map((item, i) => (
            <div key={i}>
              <span className="inline-block rounded-[8px] bg-[linear-gradient(143.49deg,#1A2E6E_3.29%,#4578FF_94.24%)] text-white text-18 font-medium tracking-[-3%] px-3 py-[11px]">
                {item.badge}
              </span>

              <h3 className="text-24 text-primary font-medium tracking-[-2%] mt-4 xl:mt-6.5">
                {item.title}
              </h3>

              <p className="text-18 text-[#a9a9a9]  mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}