"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/app/components/common/SectionHeader"; 
interface itemstype {
 id: string; tag: string; title: string; description: string; tags: string[]; image: string;
  }
  interface BlogCardProps {
tag: string; heading: string; description: string; highlightLast: number;  
    items: itemstype[];

}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
}

export default function OurCustomizedSolutions({ data }: SliderKnowledgeInsightsProps) {    
 
  const [activeId, setActiveId] = useState(data.items[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeItem =
    data.items.find((item) => item.id === activeId) ??
    data.items[0];

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
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          descriptionClass="lg:max-w-[68ch]"
          subtitle={false}
          titlebrake="hidden"
          headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
        />

        <div className="mt-2 lg:mt-52 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[auto_600px] 3xl:grid-cols-[auto_849px] gap-9.5 xl:gap-12 3xl:gap-[97px]">
          <div>
            {data.items.map((item,i) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={i}
                  className={`border-b border-[#d3d3d3] 3xl:mb-6 last:mb-0 px-0  lg:p-4 ${
                    isActive ? "!py-6" : "py-4"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    className={`cursor-pointer w-full text-left ${
                      isActive ? "mb-3 3xl:mb-4" : ""
                    }`}
                  >
                    <span className="block text-16 text-primary font-medium tracking-[-3%]">
                      {item.tag}
                    </span>
                    <span className="block text-27-medium 2xl:text-24 font-medium 3xl:text-27-medium text-paragraph lg:mt-2">
                      {item.title}
                    </span>
                  </button>

                  <div
                    ref={(el) => {
                      contentRefs.current[item.id] = el;
                    }}
                    className="overflow-hidden"
                    style={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div>
                      {/* Mobile-only image, sits directly under the active item */}
                      <div className="relative w-full aspect-[17/10] md:aspect-[20/10] overflow-hidden bg-gray-100 mb-4 lg:hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {item.description && (
                        <p className="text-paragraph text-18 max-w-[55ch] mb-4 3xl:mb-8">
                          {item.description}
                        </p>
                      )}

                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mt-5 xl:justify-between">
                          {item.tags.map((tagText, i) => (
                            <span
                              key={i}
                              className={`text-[12px] lg:text-18 2xl:!leading-[1.445] tracking-[-3%] text-primary font-medium whitespace-pre-line ${
                                i !== 0
                                  ? "pl-2 sm:pl-4 border-l border-[#d3d3d3]"
                                  : "border-l border-[#d3d3d3] sm:border-0 pl-2  sm:pl-0"
                              }`}
                            >
                              {tagText}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop-only fixed right column image */}
          <div className="relative w-full lg:aspect-[14/10] xl:aspect-[11/10] h-full overflow-hidden bg-gray-100 hidden lg:block">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
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