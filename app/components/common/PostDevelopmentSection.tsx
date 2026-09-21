"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";
 

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface dataitem {
   tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
  image: string;
  imageAlt: string;
  leftItems: FeatureItem[];
  rightItems: FeatureItem[];
}

interface SixFeaturesGridProps {
  data: dataitem;
    variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
    subtitleClass?: string;
}

// Static lookup map (not built dynamically from `item.icon`) so bundlers can
// statically analyze every icon reference, per your established pattern.
 

function FeatureCard({ item }: { item: FeatureItem }) {
 

  return (
    <div className="h-full">
           <div className="bg-[linear-gradient(256.69deg,#F6F6F6_-142.56%,#FFFFFF_108.03%)] rounded-2xl p-6 h-full">
       
      {item.icon &&(
        <div className="mb-6">
          <IconBox
             icon={
               <LucideIcon
                 name={item.icon}
                 strokeWidth={1}
                 className={`text-primary w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] `}
               />
             }
             bgClass={`bg-[#FFFFFF]  rounded-[8px]`}
           />
          </div>
            )}

      <h3 className=" text-primary text-24 font-medium tracking-[-3%] md:whitespace-pre-line">
        {item.title}
      </h3>
      <p className="mt-4 text-paragraphlte text-18 ">
        {item.description}
      </p>
    </div>
    </div>
  );
}

export default function SixFeaturesGrid({ data,variant,subtitleClass }: SixFeaturesGridProps) {
  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">

                        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} /> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-52">
          <div className="flex flex-col gap-6">
            {data.leftItems.map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>

          <div className="relative rounded-[32px] overflow-hidden min-h-[300px] lg:min-h-full">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
  sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {data.rightItems.map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}