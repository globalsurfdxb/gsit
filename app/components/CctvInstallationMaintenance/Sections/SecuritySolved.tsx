"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
import LucideIcon from "@/app/components/common/LucideIcon";
import Image from "next/image";

export interface SolvePoint {
  icon: string;
  text: string;
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  description: string;
  image: string;
  points: SolvePoint[];
}

interface SecuritySolvedProps {
  data: FeatureItem;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function SecuritySolved({ data ,variant}: SecuritySolvedProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
       <SectionHeader
                 data={data}
                 subtitleClass="lg:max-w-[145ch]"
                 variant={variant}  
               />
 

        <div className="mt-52 2xl:mt-10.5 grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-[auto_675px] gap-8 lg:gap-82 items-start">
          <div>
            <p className="text-18 text-paragraph">
              {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 2xl:gap-6 mt-52">
              {data.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 lg:gap-4 bg-[#F5F9FC] rounded-xl px-3 py-2 2xl:p-6"
                >
                  <LucideIcon
                    name={point.icon}
                    strokeWidth={1}
                    className="w-6 h-6 text-[#DD0505] shrink-0"
                  />
                  <p className="text-18 text-paragraph">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-full aspect-[4/3] md:aspect-[6/3] lg:aspect-auto rounded-2xl overflow-hidden">
            <Image
              src={data.image}
              alt={data.heading}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}