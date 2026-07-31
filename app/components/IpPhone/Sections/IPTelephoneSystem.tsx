"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/app/components/common/SectionHeader";

interface IPTelephoneItem {
  id: string;
  component: string;
  description: string;
  image: string;
}

interface IPTelephoneData {
  tag: string;
  heading: string;
  highlightLast: number;
  description?: string;
  subhead?: string;
  items: IPTelephoneItem[];
}

interface IPTelephoneSystemProps {
  data: IPTelephoneData;
  subtitleClass?:string;
}

export default function IPTelephoneSystem({ data , subtitleClass}: IPTelephoneSystemProps) {
  const [activeId, setActiveId] = useState(data.items[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeItem =
    data.items.find((item) => item.id === activeId) ?? data.items[0];

  const handleToggle = (id: string) => {
    if (id === activeId) return;
 

    

    setActiveId(id);
 
  };

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader
          data={data}
          subtitle={true}
          subtitleClass={subtitleClass}
          titlebrake="hidden"
          descriptionClass="lg:max-w-[145ch]"
          headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
        />

        <div className="mt-52 grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[694px_auto] gap-9.5 xl:gap-12 items-start">
          <div>
            {data.items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div key={item.id} className={`border-b ${isActive ? 'border-primary' : 'border-[#d3d3d3]'} transition-all duration-300  cursor-pointer  p-4 3xl:p-6 mb-2 3xl:mb-4 3xl:mb-6 last:mb-0`} 
                    onClick={() => handleToggle(item.id)}>
                  <button
                    type="button"
                    className="cursor-pointer w-full text-left pb-4 3xl:pb-10.5"
                  >
                    <span
                      className={`block text-16 font-medium tracking-[-3%] transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-[#AEAEAE]"
                      }`}
                    >
                      Component
                    </span>
                    <span
                      className={`block text-27-medium mt-2 transition-colors duration-300 text-paragraph`}
                    >
                      {item.component}
                    </span>
                  </button>

                  <div
                    ref={(el) => {
                      contentRefs.current[item.id] = el;
                    }}
                    className="overflow-hidden"
                    
                  >
                    <div className=" ">
                      {/* Mobile-only image */}
                      <div className="relative w-full aspect-[11/10] overflow-hidden bg-gray-100 mb-4 lg:hidden">
                        <Image
                          src={item.image}
                          alt={item.component}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className="block text-18 text-primary tracking-[-3%] font-medium mb-1 3xl:mb-2">
                        What it Does
                      </span>
                      <p className={`${isActive ? 'text-paragraph' : 'text-paragraph/50'}  transition-colors duration-300 text-18 `}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop-only fixed right column image */}
          <div className="relative w-full aspect-[11/10] h-full overflow-hidden bg-gray-100 hidden lg:block">
            <Image
              src={activeItem.image}
              alt={activeItem.component}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}