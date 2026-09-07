"use client";

import Image from "next/image";
import IconBox from "@/app/components/common/IconBox"; 
import LucideIcon from "@/app/components/common/LucideIcon";
 
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface PointItem {
  icon: string;
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  points: PointItem[];
  image: string;
  imageAlt: string;
  note: string;
}

interface LicensingComplianceProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

// Static lookup map (not built dynamically from `item.icon`) so bundlers can
// statically analyze every icon reference, per your established pattern.
 

export default function LicensingComplianceSection({
  data,
  variant,
  subtitleClass,
}: LicensingComplianceProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[auto_770px] gap-6 mt-52">
          <div className="grid grid-cols-1 sm:grid-cols-2   gap-4  lg:gap-6">
            {data.points.map((point, i) => { 

              return (
                <div key={i} className="p-4 lg:p-6"> 
                 <IconBox icon={ <LucideIcon name={point.icon} strokeWidth={1} className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary group-hover:brightness-0 group-hover:invert-100"   />
                  } bgClass="bg-[#F5F9FC] rounded-[8px]  "  />

                  <h3 className="mt-6 text-primary text-24 font-medium tracking-[-3%]">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-paragraph/50 text-18  ">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="relative w-full min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-52 bg-[#F5F9FC] rounded-2xl p-4 md:p-6">
          <p className="text-primary text-18">{data.note}</p>
        </div>
      </div>
    </section>
  );
}