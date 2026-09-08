"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import LucideIcon from "@/app/components/common/LucideIcon";

export interface PointItem {
  title: string;
  description: string;
  link?:string
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  points: PointItem[];
}

interface WhyChooseUsProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function WhyChooseUsSection({
  data,
  variant,
  subtitleClass,
}: WhyChooseUsProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 mt-52">
          {data.points.map((point, i) => (
            <div key={i} className="py-4 md:py-6">
              <span className="block w-8 h-[2px] bg-primary" />

              <div className="flex   justify-between">
                <h3 className="mt-4 md:mt-6  text-primary text-24 font-medium tracking-[-3%]">
                {point.title}
              </h3>
              {point.link&&(
                 <div className={`    min-w-10.5 h-10.5 border border-[#EBF2FD] bg-[#F5F9FC] rounded-[4.5px]   flex items-center justify-center`}
                     > 
                       <LucideIcon
                                                       name="ArrowRight"
                                                       strokeWidth={1}
                                                       className="w-6 h-6 2xl:w-6 2xl:h-6 text-primary transition-colors duration-500"
                                                     />
                      
                    </div>
              )}
              </div>
              <p className="mt-4 md:mt-6 text-paragraphlte text-18 ">
                {point.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}