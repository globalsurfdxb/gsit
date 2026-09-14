
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface SupportLayerItem {
  label: string;
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: SupportLayerItem[];
}

interface SupportLayerProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function VideoWall({
  data,
  variant,
  subtitleClass,
}: SupportLayerProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-7.5 xl:gap-y-10.5 mt-52">
          {data.data.map((item, i) => (
            <div key={i} className=""> 
              <h3 className="  text-primary text-24 font-medium tracking-[-3%] border-l-2 border-primary pl-2.5">
                {item.title}
              </h3>
              <p className="mt-4 text-paragraph/50 text-18 leading-[1.6] ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}