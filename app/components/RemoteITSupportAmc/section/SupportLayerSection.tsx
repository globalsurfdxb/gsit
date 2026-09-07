
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

export default function SupportLayerSection({
  data,
  variant,
  subtitleClass,
}: SupportLayerProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7.5 mt-52">
          {data.data.map((item, i) => (
            <div key={i} className="">
              <span className="text-paragraph text-18 py-[3px] tracking-[-3%] border-l-2 border-primary pl-2.5 block">
                {item.label}
              </span>

              <h3 className="mt-4 text-primary text-27 leading-[1.2967] font-medium tracking-[-3%]">
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