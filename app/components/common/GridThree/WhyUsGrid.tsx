"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import IconBox from "@/app/components/common/IconBox";
import { ArrowUpRight } from "lucide-react";

export interface WhyUsItem {
  title: string;
  description: string;
  url?: string;
}

interface WhyUsGridProps {
  data: WhyUsItem[];
  minheight?: string;
}

export default function WhyUsGrid({
  data,
  minheight = "min-h-[225px] 2xl:min-h-[325px]",
}: WhyUsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

    // Group by CARD top (stable — grid rows stretch to equal height
    // regardless of content), not by the paragraph's own top, which
    // shifts based on its own height since it's bottom-anchored via
    // justify-between.
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
  }, [data]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7.5 mt-52">
      {data.map((item, i) => {
        const active = activeIndex === i;
        const hasUrl = Boolean(item.url && item.url.trim() !== "");

        const cardContent = (
          <div
            ref={setCardRef(i)}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            className={`group rounded-2xl p-4 lg:p-6 border h-full transition-colors duration-500 ${minheight} flex flex-col justify-between ${
              hasUrl
                ? "cursor-pointer bg-[linear-gradient(135deg,_#1A2E6E_0%,_#1A3FA0_100%)] border-primary"
                : "bg-white border-[#d3d3d3]"
            }`}
          >
            <div className="flex">
              <h3
                className={`text-32 font-medium mb-4 transition-colors duration-500 xl:whitespace-pre-line ${
                  hasUrl ? "text-white" : "text-primary"
                }`}
              >
                {item.title}
              </h3>
              {hasUrl && (
                <div className="ms-auto top-5 right-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
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
              )}
            </div>

            <div>
              <div
                className={`border-t transition-colors duration-500 mb-4 ${
                  hasUrl ? "border-white" : "border-[#d3d3d3]"
                }`}
              />

              <p
                ref={setDescRef(i)}
                className={`text-18 tracking-[-3%] 2xl:!leading-[1.704] transition-colors duration-500 ${
                  hasUrl ? "text-white" : "text-paragraph"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        );

        return hasUrl ? (
          <Link href={item.url as string} key={i} ref={undefined}>
            {cardContent}
          </Link>
        ) : (
          <div key={i}>{cardContent}</div>
        );
      })}
    </div>
  );
}