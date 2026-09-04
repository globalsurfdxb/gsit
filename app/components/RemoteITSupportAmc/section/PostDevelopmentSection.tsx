"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import IconBox from "@/app/components/common/IconBox";
import LucideIcon from "@/app/components/common/LucideIcon";

import * as Icons from "lucide-react";
import { div } from "framer-motion/client";

export interface FeatureItem {
  icon: string;
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
    <div>
           <div className="bg-[#f6f6f6] rounded-2xl p-6">
       
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

      <h3 className="mt-6 text-primary text-27 font-medium tracking-[-3%]">
        {item.title}
      </h3>
      <p className="mt-4 text-paragraphlte text-18 tracking-[-3%]">
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

          <div className="relative rounded-2xl overflow-hidden min-h-[300px] lg:min-h-full">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
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