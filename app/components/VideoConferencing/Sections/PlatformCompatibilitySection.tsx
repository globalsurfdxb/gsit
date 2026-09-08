"use client";

import Image from "next/image"; 
import SectionHeader from "@/app/components/common/Heading/SectionHeader"; 
export interface PlatformItem {
  name: string;
  logo: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  paragraphs: string[];
  platforms: PlatformItem[];
}

interface PlatformCompatibilityProps {
  data: dataitem;
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" |"subtitleBorder"; 
}

export default function PlatformCompatibilitySection({ data ,subtitleClass,variant}: PlatformCompatibilityProps) {
  const headingLines = data.heading.split("\n");

  return (
    <section className="bg-white rounded-2xl py-82 3xl:py-[118px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[auto_858px] gap-6 lg:gap-16 3xl:gap-25.5 items-center">
          <div>
            
 <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant}  />

            <div className="mt-1 lg:mt-10.5 flex flex-col gap-4 lg:gap-6">
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-paragraph text-18">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 rounded-[10px] overflow-hidden bg-[#F6F6F6] ">
            {data.platforms.map((platform, i) => (
              <div
                key={i}
                className={`flex items-center justify-center py-4 md:py-16 3xl:py-[79.5px] px-8 ${
                  i % 2 === 0 ? "border-r border-[#e5e5e5]" : ""
                } ${i < data.platforms.length - 2 ? "border-b border-[#e5e5e5]" : ""}`}
              >
                <div className="relative w-full h-[64px] ">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}