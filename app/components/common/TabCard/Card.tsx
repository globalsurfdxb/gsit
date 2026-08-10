"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface SolutionCard {
  id?: string;
  titleLine1: string;
  titleLine2?: string;
  description: string;
  image: string;
  highlighted?: boolean;
  url?: string;
  href?: string;
}

interface UsecaseProps {
  data: SolutionCard[];
  border?: boolean;
  gridcount?: "2" | "3" | "4" | "5" | "6";
}

// Full literal class strings so Tailwind's scanner can pick them up at build time
const gridColsMap: Record<string, string> = {
  "2": "2xl:grid-cols-2",
  "3": "2xl:grid-cols-3",
  "4": "2xl:grid-cols-4",
  "5": "2xl:grid-cols-5",
  "6": "2xl:grid-cols-6",
};

export default function Card({ data, gridcount = "4", border = true }: UsecaseProps) {
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const equalizeRows = useCallback(() => {
    const width = window.innerWidth;
    let columns = 1;
    if (width >= 1024) columns = Number(gridcount) || 4;
    else if (width >= 640) columns = 2;

    descRefs.current.forEach((el) => {
      if (el) el.style.minHeight = "0px";
    });

    for (let i = 0; i < descRefs.current.length; i += columns) {
      const rowEls = descRefs.current.slice(i, i + columns).filter(Boolean) as HTMLParagraphElement[];
      const maxHeight = Math.max(...rowEls.map((el) => el.scrollHeight));
      rowEls.forEach((el) => {
        el.style.minHeight = `${maxHeight}px`;
      });
    }
  }, [gridcount]);

  useEffect(() => {
    equalizeRows();
    window.addEventListener("resize", equalizeRows);
    const timeout = setTimeout(equalizeRows, 100);

    return () => {
      window.removeEventListener("resize", equalizeRows);
      clearTimeout(timeout);
    };
  }, [equalizeRows, data]);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
        gridColsMap[gridcount] || gridColsMap["4"]
      } gap-6 lg:gap-7.5 2xl:gap-y-10 3xl:gap-y-[82px]`}
    >
      {data.map((item, index) => (
        <Link key={item.id} href={item.url || "#"} className="group flex flex-col">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 max-h-[270px]">
                <Image
                  src={item.image}
                  alt={item.titleLine1}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-3 mb-2 md:mb-4">
                <h3 className="text-24 font-medium tracking-[-3%] text-paragraph group-hover:text-primary">
                  <span className="block">{item.titleLine1}</span>
                  <span className="block">{item.titleLine2}</span>
                </h3>

                <span className="shrink-0 w-10.5 h-10.5 border border-[#EBF2FD] rounded-lg flex items-center justify-center transition-colors text-primary group-hover:text-white bg-[#F5F9FC] group-hover:bg-[linear-gradient(135deg,#1A2E6E_0%,#1A3FA0_100%)]">
                  <ArrowRight
                    strokeWidth={1}
                    className="w-6 h-6 group-hover:-rotate-45 transition-transform duration-300"
                  />
                </span>
              </div>
            </div>
            <div>
              {border && (
                <hr className="mb-2 md:mb-4 border-[#D3D3D3] group-hover:border-primary transition-all duration-300" />
              )}

              <p
                ref={(el) => {
                  descRefs.current[index] = el;
                }}
                className="text-18 text-paragraph/50 group-hover:text-paragraph transition-color duration-300"
              >
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}