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

// Deterministic — always returns the SAME result for the same inputs.
// Used for the very first render so server and client markup match exactly.
function getSequentialStartIndices(total: number, count: number): number[] {
  const n = Math.min(count, total);
  return Array.from({ length: n }, (_, i) => i);
}

// Randomized — only ever called client-side, after mount, never during
// the initial render that has to match the server.
function getUniqueStartIndices(total: number, count: number): number[] {
  const indices: number[] = [];
  const pool = Array.from({ length: total }, (_, i) => i);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
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
  const [slotCount, setSlotCount] = useState(
    Math.min(slidecount, partnersData.length)
  );

  // Deterministic on first render — identical on server and client,
  // so hydration matches. No Math.random() here.
  const shownRef = useRef<number[]>(
    getSequentialStartIndices(partnersData.length, slotCount)
  );

  // Forces a re-render once we've shuffled client-side, so the DOM
  // actually reflects the new shownRef order.
  const [, forceRender] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastSwappedSlotRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const isVisibleRef = useRef(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasHydratedRef = useRef(false);

  // ─── Shuffle client-side ONLY, after mount (never during SSR/hydration) ───
  useEffect(() => {
    hasHydratedRef.current = true;
    shownRef.current = getUniqueStartIndices(partnersData.length, slotCount);
    forceRender((n) => n + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once, right after the first client render commits

  // ─── Responsive slot count ────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      const rawCount = getVisibleCount(window.innerWidth, slidecount);
      const count = Math.min(rawCount, partnersData.length);
      setSlotCount(count);
      // Safe to randomize here — this only ever runs client-side (resize
      // listener never fires during SSR), so no hydration risk.
      shownRef.current = getUniqueStartIndices(partnersData.length, count);
      itemRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1 });
      });
    };
    // Skip calling update() synchronously on mount here — the dedicated
    // shuffle effect above already handles the initial client-side shuffle.
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

    if (partnersData.length <= shown.length) return;

    const pool = partnersData
      .map((_, i) => i)
      .filter((i) => !shown.includes(i));
    if (pool.length === 0) return;

    const availableSlots = shown
      .map((_, i) => i)
      .filter((i) => i !== lastSwappedSlotRef.current);
    if (availableSlots.length === 0) return;

    const slotIndex =
      availableSlots[Math.floor(Math.random() * availableSlots.length)];
    const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

    const el = itemRefs.current[slotIndex];
    if (!el) return;

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
          shownRef.current = shown.map((v, i) =>
            i === slotIndex ? newDataIndex : v
          );
          img.src = partnersData[newDataIndex].src;
          img.alt = partnersData[newDataIndex].alt;
        },
      })
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
        const dataIndex = shownRef.current[slotIndex];
        if (dataIndex === undefined) return null;
        const partner = partnersData[dataIndex];
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
              className={`w-auto pointer-events-none ${imgheight}`}
            />
          </div>
        );
      })}
    </div>
  );
}