import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/app/components/common/SectionHeader";  
 
  export interface itemData {image: string;
        titleLine1: string;
        titleLine2: string;
        description?: string;
        subhead?: string;
        href: string;
        featured: boolean;}
 export interface frdata {
 tag: string;
    heading: string;
    highlightLast: number;
    description: string;
    items: itemData[];
   
}
  interface IconbgCardGridProps {
    offersData :frdata
  }
  
  export default function WhatWeOffers({  offersData }: IconbgCardGridProps) {  

  return (
    <section className=" py-82 rounded-2xl bg-white">
      <div className="container">
        {/* Eyebrow */}
        
     <SectionHeader data={offersData} subtitleClass="lg:max-w-[145ch]" subtitle={true} titlebrake="hidden" headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"/>
          

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-7.5 3xl:gap-y-[82px] pt-52">
          {offersData.items.map((item, index) => {
          

            return (
              <Link
                key={index}
                href={item.href}
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[4/3]  overflow-hidden mb-6 max-h-[270px]">
                  <Image
                    src={item.image}
                    alt={`${item.titleLine1} ${item.titleLine2}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 "
                  />
                </div>

                <div className="flex items-start justify-between gap-3 mb-4  ">
                  <h3
                    className={`text-24 font-medium tracking-[-3%]   text-paragraph group-hover:text-primary`}
                  >
                    <span className="block">{item.titleLine1}</span>
                    <span className="block">{item.titleLine2}</span>
                  </h3>

                  <span
                    className={`shrink-0 w-10.5 h-10.5 border border-[#EBF2FD] rounded-lg flex items-center justify-center transition-colors text-primary group-hover:text-white bg-[#F5F9FC] group-hover:bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]`}
                  >   
                    <ArrowRight strokeWidth={1} className="w-6 h-6 group-hover:-rotate-45 transition-transform duration-300" />
                  </span>
                </div>

                <hr
                  className={`mb-4 border-[#D3D3D3] group-hover:border-primary transition-all duration-300 `}
                />

                <p
                  className={`text-18 text-paragraph/50 group-hover:text-paragraph transition-color duration-300`}
                >
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
