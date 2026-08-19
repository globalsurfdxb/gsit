"use client";

import { useEffect, useRef, useState } from "react";
import LucideIcon from "@/app/components/common/LucideIcon";
import IconBox from "@/app/components/common/IconBox";
import Link from "next/link";

export interface ServiceItem {
  icon: string;
  title: string;
  description?: string;
  href: string;
}

interface ServicesGridProps {
  data: ServiceItem[];
  classprop?: string;
  minheight?: string;
}

export default function ServicesGrid({
  data,
  minheight,
  classprop = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
}: ServicesGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setActiveIndex(null);
      return;
    }

    const targetLine = () => window.innerHeight * 0.4; // "top area" trigger line

    const updateActiveCard = () => {
      const line = targetLine();
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        // Card must at least partially overlap the viewport
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        // Distance from the card's top edge to our trigger line
        const distance = Math.abs(rect.top - line);

        if (rect.top <= line && rect.bottom >= line) {
          // Line passes directly through this card — strong match
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
      });

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
    };

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        updateActiveCard();
        rafId.current = null;
      });
    };

    updateActiveCard();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, data.length]);

  return (
    <div className={`grid ${classprop} gap-4 md:gap-5 xl:gap-7.5 pt-52`}>
      {data.map((item, i) => {
        const active = activeIndex === i;
        return (
          <Link
            key={i}
            href={item.href}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onMouseEnter={() => {
              if (!isMobile) setActiveIndex(i);
            }}
            onMouseLeave={() => {
              if (!isMobile) setActiveIndex(null);
            }}
            className={` ${minheight} group gap-4 lg:gap-2 2xl:gap-6 border flex flex-col justify-between rounded-2xl p-5 lg:p-6 transition-colors duration-500 ${
              active ? "bg-primary border-primary" : "bg-white border-[#d3d3d3]"
            }`}
          >
            <div>
              <h3
                className={`text-24 tracking-[-3.5%] transition-colors duration-500 mb-4 ${
                  active ? "text-white" : "text-primary"
                }`}
              >
                {item.title}
              </h3>

              {item.description && (
                <div className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <p
                      className={`text-18 text-[#E3E3E3] transition-all duration-700 ease-[cubic-bezier(0.65,3,4.5,2)] ${
                        active
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-6"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <IconBox
                icon={
                  <LucideIcon
                    name={item.icon}
                    strokeWidth={1}
                    className={`w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] transition-colors duration-500 ${
                      active ? "text-white" : "text-primary"
                    }`}
                  />
                }
                bgClass={active ? "bg-transparent" : "bg-transparent rounded-[0px]"}
              />

              <span className="flex items-center justify-center w-[42px] h-[42px] 2xl:w-[58px] 2xl:h-[58px] rounded-xl transition-colors duration-500 bg-[#EEF5FF]">
                <LucideIcon
                  name="ArrowRight"
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary transition-colors duration-500"
                />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}