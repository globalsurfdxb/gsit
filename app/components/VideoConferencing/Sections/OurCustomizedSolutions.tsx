"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/app/components/common/SectionHeader";
import { videoConferencingItems,  } from "../data";

export default function OurCustomizedSolutions() {
  const [activeId, setActiveId] = useState(videoConferencingItems.items[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeItem =
    videoConferencingItems.items.find((item) => item.id === activeId) ??
    videoConferencingItems.items[0];

  const handleToggle = (id: string) => {
    if (id === activeId) return;

    const prevEl = contentRefs.current[activeId];
    const nextEl = contentRefs.current[id];

    // Collapse previous
    if (prevEl) {
      gsap.to(prevEl, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    setActiveId(id);

    // Expand new — wait a tick for it to mount/render in DOM
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
        data={videoConferencingItems}
        descriptionClass="lg:max-w-[68ch]"
        subtitle={false}
        titlebrake="hidden"
        headingClass="text-heading lg:!whitespace-normal xl:!whitespace-pre-line"
      />

      <div className="mt-52 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[auto_800px] 3xl:grid-cols-[auto_849px] gap-9.5 xl:gap-12 2xl:gap-[97px]">
        <div>
          {videoConferencingItems.items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <div key={item.id} 
                className={`border-b border-[#d3d3d3] lg:mb-6 last:mb-0 p-4 ${isActive ? "py-6" : ""}`}>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className={`w-full text-left  ${isActive ? "mb-4" : ""}`}
                >
                  <span className="block text-16 text-primary font-medium tracking-[-3%]">
                    {item.tag}
                  </span>
                  <span className={`block text-27-medium text-paragraph mt-2`}>
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
                  <div className="">
                    {item.description && (
                      <p className="text-paragraph text-18 max-w-[55ch] mb-8">
                        {item.description}
                      </p>
                    )}

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-5 justify-between">
                        {item.tags.map((tagText, i) => (
                          <span
                            key={i}
                            className={`text-18 tracking-[-3%] text-primary font-medium whitespace-pre-line ${
                              i !== 0
                                ? "pl-4 border-l border-[#d3d3d3]"
                                : ""
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

        <div className="relative w-full aspect-[11/10] h-full overflow-hidden bg-gray-100">
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