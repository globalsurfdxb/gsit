"use client";

import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface EquipmentItem {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface dataitem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  data: EquipmentItem[];
}

interface SmarterEquipmentProps {
  data: dataitem;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function SmarterEquipmentSection({
  data,
  variant,
  subtitleClass,
}: SmarterEquipmentProps) {
  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-4 xl:gap-4 3xl:gap-10.5   mt-52">
          {data.data.map((item, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-0 xl:p-6">
              <div className="relative w-[120px] 2xl:w-[120px] 3xl:w-[150px] h-[120px] 3xl:h-[133px] shrink-0   overflow-hidden bg-[#f6f6f6]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 640px) 112px, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-primary text-24 font-medium tracking-[-3%]  ">
                  {item.title}
                </h3>
                <p className="mt-2 md:mt-4 text-paragraph text-18">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}