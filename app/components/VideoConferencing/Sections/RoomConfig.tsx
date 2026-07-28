"use client";

import { useState } from "react";
import Image from "next/image"; 
import SectionHeader from "@/app/components/common/SectionHeader";
 export interface itemData {
  id: string;
        range: string;
        title: string;
        description: string;
        image: string;
 }
 export interface frdata {
 tag: string;
    heading: string;
    highlightLast: number;
    description: string;
    items: itemData[];
   
}
  interface IconbgCardGridProps {
    roomConfigData :frdata
  }
  
  export default function RoomConfig({  roomConfigData }: IconbgCardGridProps) {  
 
  const [activeId, setActiveId] = useState(roomConfigData.items[0].id);
  const activeItem =
    roomConfigData.items.find((item) => item.id === activeId) ??
    roomConfigData.items[0];

  return (
    <section className="py-82 rounded-2xl bg-white">
      <div className="container">
        <SectionHeader
        data={roomConfigData}
        descriptionClass="lg:max-w-[68ch]"
        subtitle={false}
        titlebrake="hidden"
        headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
      />

      <div className="mt-52 grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-[auto_849px] gap-9.5 xl:gap-13 3xl:gap-[125px] items-center">
        <div className="flex flex-col gap-4 2xl:gap-6">
          {roomConfigData.items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <div key={item.id} className={`border-b  ${isActive ? 'border-primary' : 'border-[#d3d3d3]'} `}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full flex items-start justify-between gap-4 ${isActive ? 'py-6' : 'py-4'} 2xl:px-4 text-left cursor-pointer`}
                >
                  <div>
                    <span className="block text-16 text-primary font-medium tracking-[3%]">
                      {item.range}
                    </span>
                    <span className="block text-paragraph text-27-medium   mt-2">
                      {item.title}
                    </span>
                    {isActive && (
                      <p className="tracking-[-3%] mt-4 max-w-[47ch] text-18 text-[#AEAEAE] font-medium">
                        {item.description}
                      </p>
                    )}
                  </div>

                
                   <span
            className="w-6 h-6 3xl:w-6.5 3xl:h-6.5 rounded-full border flex items-center justify-center flex-shrink-0 border-primary" 
          >
            {isActive ? (
              <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.5H11.1667" stroke={'#114a9f'} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666992 6H11.3337" stroke={'#114a9f'} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 0.666504V11.3332" stroke={'#114a9f'} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="relative w-full aspect-[16/10] overflow-hidden max-h-[478px]">
          <Image
            src={activeItem.image}
            alt={activeItem.title}
            fill
            className="object-cover "
            priority
          />
        </div>
      </div>
      </div>
    </section>
  );
}