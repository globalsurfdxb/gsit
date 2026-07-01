"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

const SWAP_INTERVAL = 3100;
const FADE_DURATION = 2.1;

export interface PartnerItem {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  partnersData: PartnerItem[];
}

function getVisibleCount(width: number, slidecount: number) {
  if (width < 768) return 3;
  if (width < 1440) return 5;
  return slidecount;
}

function getUniqueStartIndices(total: number, count: number): number[] {
  const indices: number[] = [];
  const pool = Array.from({ length: total }, (_, i) => i);
  // shuffle pool so starting logos are random
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // take only as many as needed, capped by available logos
  for (let i = 0; i < Math.min(count, total); i++) {
    indices.push(pool[i]);
  }
  return indices;
}

export default function LogoSlider({
  partnersData,
  slidecount = 6,
  imgheight = 'h-[42px] lg:h-[50px] 3xl:h-[73px]'
}: LogoSliderProps & { slidecount?: number, imgheight?: string }) {
  const [slotCount, setSlotCount] = useState(slidecount);

  // Unique indices from the start — no duplicates on initial render
  const shownRef = useRef<number[]>(
    getUniqueStartIndices(partnersData.length, slidecount)
  );

  // One DOM ref per slot — GSAP animates these directly, zero React re-renders
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lastSwappedSlotRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const isVisibleRef = useRef(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Responsive slot count ────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      const count = getVisibleCount(window.innerWidth, slidecount);
      setSlotCount(count);
      // Unique indices on every resize — no duplicates
      shownRef.current = getUniqueStartIndices(partnersData.length, count);
      itemRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1 });
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [partnersData.length, slidecount]);

  // ─── Pause while tab is hidden ────────────────────────────────────────────
  useEffect(() => {
    const onVisibility = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // ─── Warm browser image cache ─────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    const warm = () => {
      if (cancelled) return;
      partnersData.forEach((p) => {
        const img = new window.Image();
        img.src = p.src;
      });
    };
    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(warm, { timeout: 2000 });
      return () => {
        cancelled = true;
        (window as any).cancelIdleCallback?.(id);
      };
    } else {
      const id = setTimeout(warm, 200);
      return () => {
        cancelled = true;
        clearTimeout(id);
      };
    }
  }, [partnersData]);

  // ─── Core swap logic ──────────────────────────────────────────────────────
  const runSwap = useCallback(() => {
    if (isAnimatingRef.current || !isVisibleRef.current) return;

    const shown = shownRef.current;

    // Not enough logos to rotate without duplicates — skip
    if (partnersData.length <= shown.length) return;

    // Pick a logo that isn't currently visible
    const pool = partnersData
      .map((_, i) => i)
      .filter((i) => !shown.includes(i));
    if (pool.length === 0) return;

    // Pick a slot that wasn't touched last time (avoids same-slot flicker)
    const availableSlots = shown
      .map((_, i) => i)
      .filter((i) => i !== lastSwappedSlotRef.current);
    const slotIndex =
      availableSlots[Math.floor(Math.random() * availableSlots.length)];
    const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

    const el = itemRefs.current[slotIndex];
    if (!el) return;

    // Find the <img> inside the slot so we can swap its src while invisible
    const img = el.querySelector("img");
    if (!img) return;

    isAnimatingRef.current = true;
    lastSwappedSlotRef.current = slotIndex;

    gsap
      .timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      })
      .to(el, {
        opacity: 0,
        duration: FADE_DURATION,
        ease: "power1.inOut",
        onComplete: () => {
          // Fully invisible — safe to swap src with no flash
          shownRef.current = shown.map((v, i) =>
            i === slotIndex ? newDataIndex : v
          );
          img.src = partnersData[newDataIndex].src;
          img.alt = partnersData[newDataIndex].alt;
        },
      })
      // Tiny delay lets the browser decode the new image before fade-in
      .to(el, {
        opacity: 1,
        duration: FADE_DURATION,
        ease: "power1.inOut",
        delay: 0.05,
      });
  }, [partnersData]);

  // ─── Interval ─────────────────────────────────────────────────────────────
  useEffect(() => {
    intervalRef.current = setInterval(runSwap, SWAP_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Kill any in-progress GSAP tweens so unmount is clean
      itemRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, [runSwap]);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <div
      className="grid gap-6 md:gap-10 items-center"
      style={{ gridTemplateColumns: `repeat(${slotCount}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: slotCount }, (_, slotIndex) => {
        const partner =
          partnersData[
            shownRef.current[slotIndex] ?? slotIndex % partnersData.length
          ];
        return (
          <div
            key={slotIndex}
            ref={(el) => {
              itemRefs.current[slotIndex] = el;
            }}
            className="flex items-center"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={190}
              height={73}
              unoptimized
              className={` w-auto pointer-events-none ${imgheight}`}
            />
          </div>
        );
      })}
    </div>
  );
}