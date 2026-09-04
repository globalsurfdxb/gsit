"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";  
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ServiceRow {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export interface WifiServicesData {
 tag: string;
    heading: string;
    highlightLast: number;
    subhead: string;
  items: ServiceRow[];
}

interface WifiServicesProps {
  data: WifiServicesData;
  subtitleClass?: string;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
}

export default function WifiServices({ data, subtitleClass, variant }: WifiServicesProps) {
  const lastIndex = data.items.length - 1;

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        {/* Header */}
        
                 <SectionHeader data={data}  subtitleClass={subtitleClass}variant={variant} />

        {/* Grid — each cell is a horizontal image + text pair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 3xl:gap-10.5   mt-52">
          {data.items.map((item, i) => {
            const isLast = i === lastIndex;

            const thumb = (
              <div className="relative w-[150px] h-[133px] shrink-0  overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="110px"
                  className="object-cover"
                />
              </div>
            );

            const text = (
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-4">
                  <h3 className="text-24 !leading-[1.2] 3xl:!leading-[1.5] text-primary font-medium tracking-[-3%] ">
                  {item.title}
                </h3>
                {item.href &&( <ArrowRight strokeWidth={1} className="w-8 h-8 text-primary" />)}
                </div>
                <p className="text-18 text-paragraph  mt-2 3xl:mt-4">
                  {item.description}
                </p>
              </div>
            );

            if (isLast) {
              return (
                <Link
                  key={i}
                  href={item.href || "#"}
                  className="group relative border border-[#D3D3D3] hover:bg-[#F5F9FC]  hover:border-transparent rounded-[4px] p-4 3xl:p-6   transition-all duration-500 hoverborder bgcprimary"
                >
                  <div className="flex flex-col h-full items-end justify-between">
                    <div className="flex gap-4 xl:gap-6">
                  {thumb}
                  {text} 
                  </div> 
                  </div>
                   
                </Link>
              );
            }

            return (
              <div key={i} className="flex gap-4 xl:gap-6 lg:p-4 3xl:p-6">
                {thumb}
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}