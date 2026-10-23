"use client";

import { useRef, useState } from "react";
import { DoorClosed, User, type LucideIcon } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";
interface itemstype {
  id: string;
  tag: string;
  title: string;
  icon: string;
  peopleIcon: string;
  people: string | null;
  description: string;
  tags: string[];
  image: string;
}
interface BlogCardProps {
  tag: string;
  heading: string;
  subhead: string;
  highlightLast: number;
  items: itemstype[];
}

interface SliderKnowledgeInsightsProps {
  data: BlogCardProps;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

export default function OurCustomizedSolutions({
  data,
  variant,
  subtitleClass,
}: SliderKnowledgeInsightsProps) {
  const [activeId, setActiveId] = useState(data.items[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const activeItem =
    data.items.find((item) => item.id === activeId) ?? data.items[0];

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
          },
        );
      }
    });
  };

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader
          data={data}
          variant={variant}
          subtitleClass={subtitleClass}
        />

        <div className="mt-2 lg:mt-52 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[auto_600px] 3xl:grid-cols-[auto_849px] gap-9.5 xl:gap-12 3xl:gap-[68px]">
          <div >
            {data.items.map((item, i) => {
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
                    {/* Room type and people capacity */}
                    <span className="flex flex-col leading-[18px] min-[400px]:flex-row items-start min-[400px]:items-center gap-1 min-[400px]:gap-2  text-16 text-primary font-medium md:leading-[1.2]">
                      <span className="inline-flex items-center gap-1 ">
                        <DoorClosed
                          size={16}
                          strokeWidth={1.5}
                          className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                        />
                        <span>{item.tag}</span>
                      </span>

                      {item.peopleIcon && item.people && (
                        <>
                          <span className="hidden min-[400px]:block h-4 w-px bg-primary" />
                          <span className="inline-flex items-center gap-1">
                            <User
                              size={16}
                              strokeWidth={1.5}
                              className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
                            />
                            <span>{item.people}</span>
                          </span>
                        </>
                      )}
                    </span>

                    {/* Main heading */}
                    <span className="block text-27-medium 2xl:text-24 3xl:text-27-medium text-paragraph font-medium tracking-[-0.03em] mt-2">
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
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 mt-5 xl:justify-between">
                          {item.tags.map((tagText, i) => (
                            <span
                              key={i}
                              className={`text-[12px] lg:w-[213px] lg:text-18 2xl:!leading-[1.445] tracking-[-3%] text-primary font-medium whitespace-pre-line ${
                                i !== 0
                                  ? "pl-2 sm:pl-2 border-l border-[#d3d3d3]"
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
