"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/app/components/common/SectionHeader";
import { roomFitItems } from "../data"; 

export default function RoomFit() {
  const [activeId, setActiveId] = useState(roomFitItems.items[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeItem =
    roomFitItems.items.find((item) => item.id === activeId) ?? roomFitItems.items[0];

  const handleToggle = (id: string) => {
    if (id === activeId) return;

    const prevEl = contentRefs.current[activeId];

    if (prevEl) {
      gsap.to(prevEl, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    setActiveId(id);

    requestAnimationFrame(() => {
      const el = contentRefs.current[id];
      if (el) {
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.4,
            ease: "power2.inOut",
          }
        );
      }
    });
  };

  return (
    <section className="py-82 bg-white rounded-2xl">
      <div className="container">
        <SectionHeader
          data={roomFitItems}
          descriptionClass="lg:max-w-[68ch]"
          subtitle={true}
          titlebrake="hidden"
          headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
        />

        <div className="mt-52 grid grid-cols-1 lg:grid-cols-2  3xl:grid-cols-[auto_867px] gap-9.5 xl:gap-12 xl:gap-12 2xl:gap-15 3xl:gap-[102px]">
          <div>
            {roomFitItems.items.map((item,i) => {
              const isActive = item.id === activeId;
              return (
                <div key={i} className={`border-b  ${isActive ? 'border-primary':'border-[#d3d3d3]'}`}>
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    className={`cursor-pointer w-full text-left px-2 xl:px-4 pt-4 xl:pt-6 ${isActive ? 'pb-4':'pb-4 xl:pb-6'}`}
                  >
                    <span className="block text-16 text-primary font-medium tracking-[-3%] !leading-[1.188]">
                      Screen Size
                    </span>
                    <span className="block text-42 text-paragraph !leading-[1] font-medium mt-4">
                      {item.size}&quot;
                    </span>
                  </button>

                  <div
                    ref={(el) => {
                      contentRefs.current[item.id] = el;
                    }}
                    className="overflow-hidden px-2 xl:px-4 "
                    style={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="pb-6">
                      {/* Mobile-only image, shows under the active item */}
                      <div className="relative w-full aspect-[12/10]   overflow-hidden  mb-6 lg:hidden">
                        <Image
                          src={item.image}
                          alt={`${item.size} inch display`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col lg:flex-row flex-wrap gap-2 sm:gap-4  ">
                        <div className="ps-3 xl:ps-0 border-s border-[#d3d3d3] xl:border-s-0">
                          <span className="block text-18 text-[#A5A5A5] uppercase  mb-[9px]">
                            Ideal For
                          </span>
                          <p className="text-primary text-18 font-medium tracking-[-3%] max-w-[18.181ch] !leading-[1.223]">
                            {item.idealFor}
                          </p>
                        </div>
                      
                        <div className="ps-3 xl:ps-6 border-s border-[#d3d3d3]">
                          <span className="block text-18 text-[#A5A5A5] uppercase  mb-[9px] ">
                            Typical Settings
                          </span>
                          <p className="text-primary text-18 font-medium tracking-[-3%] max-w-[18.181ch] !leading-[1.223]">
                            {item.typicalSettings}
                          </p>
                        </div>
                      </div>
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
              alt={`${activeItem.size} inch display`}
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