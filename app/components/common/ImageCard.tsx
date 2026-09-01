"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface itemkey {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TabGroup {
  id: string;
  label: string;
  items: itemkey[];
}

export interface frdata {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  tab?: boolean;
  items?: itemkey[]; // used when tab is false/undefined
  tabData?: TabGroup[]; // used when tab is true
}

interface IconbgCardGridProps {
  data: frdata;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

function CardGrid({ items }: { items: itemkey[] }) {
  return (
    <div className="mt-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
      {items.map((item, i) => (
        <div key={i}>
          <div className="relative w-full aspect-[5.309/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-24 text-primary mb-0 mt-4 lg:my-4">
            {item.title}
          </h3>
          <p className="text-paragraph text-18">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function ImageCard({
  data,
  variant,
  subtitleClass,
}: IconbgCardGridProps) {
  const hasTabs = Boolean(data.tab && data.tabData && data.tabData.length > 0);

  return (
    <section className="bg-white rounded-2xl py-82">
      <div className="container">
        <SectionHeader data={data} subtitleClass={subtitleClass} variant={variant} />

        {hasTabs ? (
          <ImageCardTabs tabData={data.tabData as TabGroup[]} />
        ) : (
          <CardGrid items={data.items ?? []} />
        )}
      </div>
    </section>
  );
}

function ImageCardTabs({ tabData }: { tabData: TabGroup[] }) {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeGroup = tabData.find((tab) => tab.id === activeTab) ?? tabData[0];

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 1);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll, tabData]);

  const scrollByAmount = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  const scrollTabIntoView = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const buttons = tabRefs.current;
    const activeBtn = buttons[index];
    if (!activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const GAP = 12;

    const findNeighbor = (dir: -1 | 1) => {
      for (let i = index + dir; i >= 0 && i < buttons.length; i += dir) {
        if (buttons[i]) return buttons[i];
      }
      return null;
    };

    const isFlushRight = btnRect.right >= containerRect.right - 1;
    const isFlushLeft = btnRect.left <= containerRect.left + 1;

    if (isFlushRight) {
      const nextTab = findNeighbor(1);
      if (nextTab) {
        const nextWidth = nextTab.getBoundingClientRect().width;
        container.scrollBy({ left: nextWidth + GAP, behavior: "smooth" });
      }
    } else if (isFlushLeft) {
      const prevTab = findNeighbor(-1);
      if (prevTab) {
        const prevWidth = prevTab.getBoundingClientRect().width;
        container.scrollBy({ left: -(prevWidth + GAP), behavior: "smooth" });
      }
    }
  };

  const handleTabClick = (tabId: string, index: number) => {
    setActiveTab(tabId);
    requestAnimationFrame(() => scrollTabIntoView(index));
  };

  return (
    <>
      <div className="group relative mb-4 2xl:mb-10.5 mt-52 overflow-hidden rounded-[32px]">
        {canScrollPrev && (
          <div>
            <div className="hidden lg:block absolute w-[15%] h-full left-0 top-0 blur-lg bg-[linear-gradient(270deg,#ffffff8f_3.29%,#ffffff_23.29%,#ffffffde_94.24%)] transition-opacity duration-300 group-hover:opacity-0"></div>
            <button
              type="button"
              onClick={() => scrollByAmount("prev")}
              aria-label="Previous tabs"
              className="cursor-pointer absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 3xl:w-[49px] 3xl:h-[49px] rounded-full bg-white flex items-center justify-center shadow-[0px_0px_7px_1px_#dcd9d9] hover:border-primary transition-colors"
            >
              <ArrowLeft className="w-7 h-7 text-primary" strokeWidth={1} />
            </button>
          </div>
        )}

        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto gap-3 2xl:gap-7.5 scrollbar-hide scroll-smooth"
        >
          {tabData.map((tab, index) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                onClick={() => handleTabClick(tab.id, index)}
                className={`shrink-0 px-3 lg:px-5 2xl:px-8 py-2 lg:py-3 2xl:px-8 2xl:py-4 3xl:py-[21.8px] tracking-[-3%] rounded-full font-medium text-18 lg:text-24 !leading-[1.25] transition-colors border cursor-pointer hover:bg-primary/75 hover:text-white hover:border-primary/75 ${
                  isActive
                    ? "bg-primary text-white border-primary z-10"
                    : "bg-white text-paragraph border-[#D3D3D3] hover:border-[#D3D3D3]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {canScrollNext && (
          <div>
            <div className="hidden lg:block absolute w-[15%] h-full -right-2 top-0 blur-lg bg-[linear-gradient(90deg,#ffffff8f_3.29%,#ffffff_23.29%,#ffffffde_94.24%)] transition-opacity duration-300 group-hover:opacity-0"></div>
            <button
              type="button"
              onClick={() => scrollByAmount("next")}
              aria-label="Next tabs"
              className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 3xl:w-[49px] 3xl:h-[49px] rounded-full bg-white flex items-center justify-center shadow-[0px_0px_7px_1px_#dcd9d9] hover:border-primary transition-colors"
            >
              <ArrowRight className="w-7 h-7 text-primary" strokeWidth={1} />
            </button>
          </div>
        )}
      </div>

      <CardGrid items={activeGroup.items} />
    </>
  );
}