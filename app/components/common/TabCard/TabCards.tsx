// Index.tsx
"use client";

import SectionHeader from "@/app/components/common/Heading/SectionHeader";
import Cta from "@/app/components/common/Cta";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Card from "./Card";
import { useState, useRef, useEffect, useCallback } from "react";

export interface incards {
  id?: string;
  title?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  highlighted?: boolean;
  url?: string;
  href?: string;
}

export interface carddata {
  id: string;
  label: string;
  cards: incards[];
}

export interface ctatype {
  title?: string;
  description?: string;
  button: string;
  background?: string;
  classtitle?: string;
  classdesc?: string;
}

export interface FeatureItem {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string;
  cardData: carddata[];
  cta?: ctatype;
}

interface dataProps {
  data: FeatureItem;
  gridcount?: "2" | "3" | "4" | "5" | "6";
  subtitleClass?: string;
  variant: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
}

export default function Index({ data, gridcount, variant, subtitleClass }: dataProps) {
  const [activeTab, setActiveTab] = useState(data.cardData[0].id);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeSolution = data.cardData.find((tab) => tab.id === activeTab) ?? data.cardData[0];

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
  }, [checkScroll, data.cardData]);

  const scrollByAmount = (direction: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  // When a tab is clicked, if it's sitting flush against the visible
  // left/right edge of the scroll container (with more tabs further in
  // that direction), nudge the scroll so the neighboring tab peeks into
  // view too — "moves it one position over" instead of leaving it pinned
  // at the very edge.
  const scrollTabIntoView = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const buttons = tabRefs.current;
    const activeBtn = buttons[index];
    if (!activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    const GAP = 12; // roughly matches gap-3 / 2xl:gap-7.5 buffer, tweak as needed

    // Loop backward/forward through neighbors to find the adjacent tab,
    // since we need its width to know how much extra scroll to add.
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
    // Wait a tick so layout/active-state styling settles before measuring.
    requestAnimationFrame(() => scrollTabIntoView(index));
  };

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

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
            {data.cardData.map((tab, index) => {
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

        {/* Card renders the active tab's product cards, not the CTA */}
        <Card data={activeSolution.cards} gridcount={gridcount} />

        {/* Cta renders separately, guarded since data.cta is optional */}
        {data.cta && <div className="mt-52 3xl:mt-[68px]"><Cta items={data.cta} /></div>}
      </div>
    </section>
  );
}