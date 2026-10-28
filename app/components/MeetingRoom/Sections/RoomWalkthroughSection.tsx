"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import SectionHeader from "@/app/components/common/Heading/SectionHeader";

export interface WalkthroughStep {
  label: string;
  title: string;
  text: string;
  tags?: string[];
  image?: string; // optional: swaps the main image when this step opens
  x: number; // pin position, % from left
  y: number; // pin position, % from top
}

export interface RoomWalkthroughData {
  tag: string;
  heading: string;
  highlightLast: number;
  subhead: string; 
  image: string;
  imageAlt: string;
  steps: WalkthroughStep[];
}

interface RoomWalkthroughProps {
  data: RoomWalkthroughData;
  variant?: "default" | "defaultBorder" | "subtitle" | "subtitleBorder";
  subtitleClass?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function RoomWalkthroughSection({
  data,
  variant = "subtitle",
  subtitleClass,
}: RoomWalkthroughProps) {
  const [open, setOpen] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const current = open !== null ? data.steps[open] : null;
  const idle = open === null;

  // Spotlight position: keep the last position while idle so it fades out in place
  const [pos, setPos] = useState({ x: data.steps[0]?.x ?? 50, y: data.steps[0]?.y ?? 50 });
  useEffect(() => {
    if (current) setPos({ x: current.x, y: current.y });
  }, [current]);

  // Image that follows the open step; falls back to the main image
  const target = current?.image || data.image;
  const [shown, setShown] = useState(target);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    if (target === shown) return;
    let cancelled = false;
    setSwapping(true);
    const pre = new window.Image();
    const done = () => {
      if (cancelled) return;
      setShown(target);
      setSwapping(false);
    };
    pre.onload = done;
    pre.onerror = done;
    pre.src = target;
    return () => {
      cancelled = true;
    };
  }, [target, shown]);

  const onPinClick = (i: number) => {
    setOpen(i);
    // bring the opened step into view (useful when the list is below the image)
    window.setTimeout(() => {
      itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 360);
  };

  const stageVars = {
    "--x": `${pos.x}%`,
    "--y": `${pos.y}%`,
    transition: "--x .6s cubic-bezier(.2,.7,.2,1), --y .6s cubic-bezier(.2,.7,.2,1)",
  } as CSSProperties;

  return (
    <section className="bg-white py-82 rounded-2xl">
      <div className="container">
        <SectionHeader data={data} variant={variant} subtitleClass={subtitleClass} />

        <div className="mt-8 grid grid-cols-1 items-start gap-[clamp(28px,2.8vw,42px)] lg:mt-52 xl:grid-cols-[60%_auto] 3xl:grid-cols-[1009px_auto]">
          {/* Image stage + pins */}
          <div className="xl:sticky xl:top-[100px] h-full">
            <div
              className="relative aspect-[1255/976] xl:aspect-[1115/976] 3xl:aspect-[1345/976] w-full h-full overflow-hidden border border-[#E0E8F3] bg-[#F2F3F5]"
              style={stageVars}
            >
              <Image
                src={shown}
                alt={data.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-contain transition-opacity duration-300 ${
                  swapping ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Spotlight: dims everything except the area around the open pin */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                  idle ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  background:
                    "radial-gradient(circle at var(--x) var(--y), rgba(17,74,159,0) 0, rgba(17,74,159,0) 70px, rgba(10,43,94,.42) 150px)",
                }}
              >
                <span
                  className="absolute left-[var(--x)] top-[var(--y)] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(17,74,159,0.4),0_0_0_8px_rgba(255,255,255,0.18)] min-[901px]:h-[120px] min-[901px]:w-[120px]"
                />
              </div>

              {/* Pins */}
              {data.steps.map((step, i) => {
                const on = open === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onPinClick(i)}
                    aria-label={`Step ${i + 1}: ${step.label}`}
                    aria-pressed={on}
                    style={{ left: `${step.x}%`, top: `${step.y}%` }}
                    className={`absolute z-[2] grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-[1.5px] border-white p-0 text-[11px] font-semibold leading-none shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-110 min-[901px]:h-[30px] min-[901px]:w-[30px] min-[901px]:text-[12px] ${
                      on
                        ? "scale-[1.2] bg-primary text-white"
                        : "bg-white/85 text-primary"
                    }`}
                  >
                    {i + 1}
                    {on && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -inset-[7px] rounded-full border-2 border-[#80B4FF] motion-safe:animate-[wtPing_1.8s_ease-out_infinite]"
                      />
                    )}
                  </button>
                );
              })}

              {/* Caption */}
              {current && (
                <div
                  aria-live="polite"
                  className="absolute inset-x-3.5 bottom-3.5 z-[3] flex items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2 text-[13px] text-black shadow-[0_4px_14px_rgba(0,0,0,0.12)] min-[901px]:px-3.5 min-[901px]:py-2.5 min-[901px]:text-[14.5px]"
                >
                  <b className="font-bold text-primary">{pad(open! + 1)}</b>
                  <span>
                    {current.label}: {current.title}
                  </span>
                </div>
              )}
            </div>

             
          </div>

          {/* Accordion */}
          <div>
            {data.steps.map((step, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="border-b border-[#D5D5D5]"
                > 
                    <button
                      type="button"
                      id={`wt-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`wt-panel-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={` ${i == 0?'pb-4':'py-3 2xl:py-4'} group flex w-full cursor-pointer items-start gap-3.5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-[22px]`}
                    >
                      <span
                        className={`w-6 3xl:w-7 shrink-0 text-[20px] leading-[1.3] transition-colors duration-300  3xl:text-24 ${
                          isOpen ? "text-primary" : "text-paragraphlte"
                        }`}
                      >
                        {pad(i + 1)}
                      </span>

                      <div>
                        <span className="flex-1">
                          <span className="block text-[16px] leading-[1.625] text-paragraph">
                            {step.label}
                          </span>
                          <span
                            className={`2xl:mt-2 block text-[18px] 3xl:text-[24px] leading-[1.5]  transition-colors duration-300 group-hover:text-primary ${
                              isOpen ? "text-primary" : "text-paragraph"
                            }`}
                          >
                            {step.title}
                          </span>
                        </span>
                              <div
                                id={`wt-panel-${i}`}
                                role="region"
                                aria-labelledby={`wt-btn-${i}`}
                                aria-hidden={!isOpen}
                                className={`grid transition-[grid-template-rows,visibility] duration-[400ms] ease-out ${
                                  isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                                }`}
                              >
                                <div className="min-h-0 overflow-hidden  ">
                                  <p className="mt-3 3xl:mt-4 text-18 text-paragraph xl:text-18">
                                    {step.text}
                                  </p>

                                  {step.tags && step.tags.length > 0 && (
                                    <ul className=" mt-1 3xl:mt-4   flex flex-wrap gap-x-4 gap-y-2 pl-3  gap-x-[26px] wt-tags ">
                                      {step.tags.map((tag, j) => (
                                        <li key={j} className="text-18 text-primary  relative">
                                          {tag}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                      </div>
                    </button>
                  

                
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}