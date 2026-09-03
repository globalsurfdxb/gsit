"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";
import { ArrowUpRight } from "lucide-react";
import LucideIcon from "@/app/components/common/LucideIcon";

interface IndustryItem {
  icon: string;
  title: string;
  description: string;
}

interface IndustryCTAProps {
  title: string;
  description: string;
  href: string;
}

interface GridFourProps {
  industriesData: IndustryItem[];
  industryCTA?: IndustryCTAProps;
  gap?: boolean;
  titleclass?: string;
  heightclass?: string;
}

export default function GridFour({
  industriesData,
  industryCTA,
  gap,
  titleclass = "font-medium",
  heightclass,
}: GridFourProps) {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const setCardRef = (i: number) => (el: HTMLElement | null) => {
    cardRefs.current[i] = el;
  };

  const setDescRef = (i: number) => (el: HTMLParagraphElement | null) => {
    descRefs.current[i] = el;
  };

  const equalizeRows = () => {
    const descs = descRefs.current;
    const cards = cardRefs.current;
    if (descs.length === 0) return;

    // Reset first so we measure natural height, not a previous min-height.
    descs.forEach((el) => {
      if (el) el.style.minHeight = "0px";
    });

    // Group by CARD top (stable across content length — grid rows stretch
    // to equal height), not the paragraph's own top, since the paragraph
    // sits at variable position depending on its own content.
    const rows = new Map<number, number[]>(); // top -> indices
    cards.forEach((card, i) => {
      if (!card) return;
      const top = Math.round(card.getBoundingClientRect().top);
      let matchedKey: number | null = null;
      for (const key of rows.keys()) {
        if (Math.abs(key - top) <= 2) {
          matchedKey = key;
          break;
        }
      }
      const key = matchedKey ?? top;
      if (!rows.has(key)) rows.set(key, []);
      rows.get(key)!.push(i);
    });

    rows.forEach((indices) => {
      const els = indices
        .map((i) => descs[i])
        .filter(Boolean) as HTMLParagraphElement[];
      if (els.length === 0) return;

      const maxHeight = Math.max(
        ...els.map((el) => el.getBoundingClientRect().height)
      );
      els.forEach((el) => {
        el.style.minHeight = `${maxHeight}px`;
      });
    });
  };

  useLayoutEffect(() => {
    equalizeRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [industriesData]);

  useLayoutEffect(() => {
    const handleResize = () => equalizeRows();
    window.addEventListener("resize", handleResize);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(equalizeRows);
    }

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`grid lg:mt-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden  ${
        gap
          ? "mt-6 gap-4 lg:gap-7.5  "
          : " mt-5 border-t border-l border-[#cccccc] rounded-2xl  divide-x divide-y divide-[#cccccc]"
      }`}
    >
      {industriesData.map((item, i) => (
        <div
          key={i}
          ref={setCardRef(i)}
          className={`${heightclass} flex justify-between flex-col  group relative flex flex-col p-4 lg:p-6 overflow-hidden transition-colors duration-300 ${
            gap ? "border border-[#FBFBFB] rounded-2xl" : ""
          } `}
        >
          {/* icon — scales on hover */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 w-fit">
            <IconBox
              icon={
                <LucideIcon
                  name={item.icon}
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary"
                />
              }
              bgClass="bg-[#E8EDF6] rounded-[8px] lg:rounded-[12px]"
            />
          </div>
          <div>
            {/* title — slides up slightly */}
            <h3
              className={`${titleclass} relative z-10 text-[#2F5C9E] mt-[23px] mb-[12px] text-24 tracking-[-3%]   transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1`}
            >
              {item.title}
            </h3>

            {/* description — fades in stronger */}
            <p
              ref={setDescRef(i)}
              className={`${
                gap ? "" : "tracking-[-3%]"
              } relative z-10   text-paragraph text-18   transition-all duration-300 group-hover:text-paragraph group-active:text-paragraph`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
      {industryCTA && (
        <Link
          href={industryCTA.href}
          className={`group relative flex flex-col justify-end p-4 lg:p-6 bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)] overflow-hidden ${
            gap ? "rounded-2xl" : ""
          } `}
        >
          {/* subtle shimmer overlay on hover/touch */}
          <span
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 `}
          />

          {/* icon box */}
          <div className="ms-auto lg:absolute top-5 right-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
            <IconBox
              icon={
                <ArrowUpRight
                  strokeWidth={1}
                  className="w-[24px] h-[24px] 2xl:w-[32px] 2xl:h-[32px] text-primary group-active:rotate-45 group-hover:rotate-45 transition-transform duration-300"
                />
              }
              imgsize="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
              bgClass="bg-white rounded-[8px] lg:rounded-[12px]"
            />
          </div>

          {/* content lifts up on hover/touch */}
          <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1">
            <h3 className="text-[#E0E8F3] mt-[23px] mb-[12px] text-24 tracking-[-3%] font-medium ">
              {industryCTA.title}
            </h3>
            <p className="text-[#DEDEDE] tracking-[-3%] text-18">
              {industryCTA.description}
            </p>
          </div>

          {/* bottom accent line */}
          <span className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full group-active:w-full bg-white/30 transition-all duration-500 ease-in-out" />
        </Link>
      )}
    </div>
  );
}