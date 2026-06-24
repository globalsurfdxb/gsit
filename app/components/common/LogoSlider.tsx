// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";

// // const SWAP_INTERVAL = 2500;
// // const FADE_DURATION = 900;

// // export interface PartnerItem {
// //   src: string;
// //   alt: string;
// // }

// // interface LogoSliderProps {
// //   partnersData: PartnerItem[];
// // }

// // export default function LogoSlider({ partnersData }: LogoSliderProps) {
// //   const [visibleCount, setVisibleCount] = useState(6);
// //   const [visibleIndices, setVisibleIndices] = useState<number[]>([
// //     0, 1, 2, 3, 4, 5,
// //   ]);
// //   const [animatingSlot, setAnimatingSlot] = useState<number | null>(null);
// //   const [phase, setPhase] = useState<"out" | "in" | null>(null);

// //   const visibleIndicesRef = useRef(visibleIndices);
// //   const visibleCountRef = useRef(visibleCount);

// //   useEffect(() => {
// //     visibleIndicesRef.current = visibleIndices;
// //   }, [visibleIndices]);
// //   useEffect(() => {
// //     visibleCountRef.current = visibleCount;
// //   }, [visibleCount]);

// //   useEffect(() => {
// //     const update = () => {
// //       const count =
// //         window.innerWidth < 768 ? 3 : window.innerWidth < 1440 ? 5 : 6;
// //       setVisibleCount(count);
// //       setVisibleIndices(Array.from({ length: count }, (_, i) => i));
// //     };
// //     update();
// //     window.addEventListener("resize", update);
// //     return () => window.removeEventListener("resize", update);
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const currentVisible = visibleIndicesRef.current;
// //       const currentCount = visibleCountRef.current;

// //       const pool = partnersData
// //         .map((_, i) => i)
// //         .filter((i) => !currentVisible.includes(i));

// //       if (pool.length === 0) return;

// //       const slotIndex = Math.floor(Math.random() * currentCount);
// //       const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

// //       // phase 1: fade out
// //       setAnimatingSlot(slotIndex);
// //       setPhase("out");

// //       setTimeout(() => {
// //         // swap while invisible
// //         setVisibleIndices((prev) => {
// //           const updated = [...prev];
// //           updated[slotIndex] = newDataIndex;
// //           return updated;
// //         });

// //         // phase 2: fade in
// //         setPhase("in");

// //         setTimeout(() => {
// //           setAnimatingSlot(null);
// //           setPhase(null);
// //         }, FADE_DURATION);
// //       }, FADE_DURATION);
// //     }, SWAP_INTERVAL);

// //     return () => clearInterval(interval);
// //   }, [partnersData]);

// //   return (
// //     <div
// //       className="grid gap-6 md:gap-10 items-center"
// //       style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
// //     >
// //       {visibleIndices.map((dataIndex, slotIndex) => {
// //         const partner = partnersData[dataIndex];

// //         const isAnimating = animatingSlot === slotIndex;
// //         const isOut = isAnimating && phase === "out";
// //         const isIn = isAnimating && phase === "in";

// //         return (
// //           <div
// //             key={slotIndex}
// //             className="flex items-center justify-center"
// //             style={{
// //               opacity: isOut ? 0 : 1,
// //               // transform: isOut ? "scale(0.85)" : "scale(1)",
// //               transition:
// //                 isOut || isIn
// //                   ? `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`
// //                   : "none",
// //             }}
// //           >
// //             <Image
// //               src={partner.src}
// //               alt={partner.alt}
// //               width={190}
// //               height={73}
// //               className="h-[42px] lg:h-[70px] 3xl:h-[73px]"
// //             />
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }



// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import Image from "next/image";

// const SWAP_INTERVAL = 3500;
// const FADE_DURATION = 1500;

// export interface PartnerItem {
//   src: string;
//   alt: string;
// }

// interface LogoSliderProps {
//   partnersData: PartnerItem[];
// }

// function getVisibleCount(width: number) {
//   if (width < 768) return 3;
//   if (width < 1440) return 5;
//   return 6;
// }

// export default function LogoSlider({ partnersData }: LogoSliderProps) {
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [visibleIndices, setVisibleIndices] = useState<number[]>(() =>
//     Array.from({ length: 6 }, (_, i) => i)
//   );
//   const [fadingOutSlot, setFadingOutSlot] = useState<number | null>(null);

//   const visibleIndicesRef = useRef(visibleIndices);
//   const visibleCountRef = useRef(visibleCount);
//   const lastSwappedSlotRef = useRef<number | null>(null);
//   const isAnimatingRef = useRef(false);

//   useEffect(() => {
//     visibleIndicesRef.current = visibleIndices;
//   }, [visibleIndices]);

//   useEffect(() => {
//     visibleCountRef.current = visibleCount;
//   }, [visibleCount]);

//   useEffect(() => {
//     const update = () => {
//       const count = getVisibleCount(window.innerWidth);
//       setVisibleCount(count);
//       setVisibleIndices(Array.from({ length: count }, (_, i) => i));
//       visibleCountRef.current = count;
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const runSwap = useCallback(() => {
//     if (isAnimatingRef.current) return;

//     const currentVisible = visibleIndicesRef.current;
//     const currentCount = visibleCountRef.current;

//     const pool = partnersData
//       .map((_, i) => i)
//       .filter((i) => !currentVisible.includes(i));

//     if (pool.length === 0) return;

//     // Pick a slot that isn't the last swapped one
//     const availableSlots = Array.from({ length: currentCount }, (_, i) => i).filter(
//       (i) => i !== lastSwappedSlotRef.current
//     );
//     const slotIndex = availableSlots[Math.floor(Math.random() * availableSlots.length)];
//     const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

//     isAnimatingRef.current = true;
//     lastSwappedSlotRef.current = slotIndex;

//     // Phase 1: fade out
//     setFadingOutSlot(slotIndex);

//     setTimeout(() => {
//       // Swap data while element is invisible
//       setVisibleIndices((prev) => {
//         const updated = [...prev];
//         updated[slotIndex] = newDataIndex;
//         return updated;
//       });

//       // Wait for the DOM to repaint with the new image still at opacity 0,
//       // then remove fadingOutSlot so the transition fires fade-in
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           setFadingOutSlot(null);
//           setTimeout(() => {
//             isAnimatingRef.current = false;
//           }, FADE_DURATION);
//         });
//       });
//     }, FADE_DURATION);
//   }, [partnersData]);

//   useEffect(() => {
//     const interval = setInterval(runSwap, SWAP_INTERVAL);
//     return () => clearInterval(interval);
//   }, [runSwap]);

//   return (
//     <div
//       className="grid gap-6 md:gap-10 items-center"
//       style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
//     >
//       {visibleIndices.map((dataIndex, slotIndex) => {
//         const partner = partnersData[dataIndex];
//         const isFadingOut = fadingOutSlot === slotIndex;

//         return (
//           <div
//             key={slotIndex}
//             className="flex items-center justify-center"
//             style={{
//               opacity: isFadingOut ? 0 : 1,
//               transition: `opacity ${FADE_DURATION}ms ease`,
//             }}
//           >
//             <Image
//               src={partner.src}
//               alt={partner.alt}
//               width={190}
//               height={73}
//               className="h-[42px] lg:h-[70px] 3xl:h-[73px]"
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }






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

function getVisibleCount(width: number) {
  if (width < 768) return 3;
  if (width < 1440) return 5;
  return 6;
}

export default function LogoSlider({ partnersData }: LogoSliderProps) {
  const [slotCount, setSlotCount] = useState(6);

  // Stable array of current data indices, one per slot.
  // We store this in a ref so GSAP callbacks always see the latest value
  // without needing to be recreated.
  const shownRef = useRef<number[]>(
    Array.from({ length: 6 }, (_, i) => i % partnersData.length)
  );

  // One DOM ref per slot — GSAP animates these directly, zero React re-renders
  // during the animation itself.
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lastSwappedSlotRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const isVisibleRef = useRef(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── Responsive slot count ────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      const count = getVisibleCount(window.innerWidth);
      setSlotCount(count);
      // Re-initialise shown indices whenever slot count changes
      shownRef.current = Array.from(
        { length: count },
        (_, i) => i % partnersData.length
      );
      // Reset all slots to full opacity (layout just changed)
      itemRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 1 });
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [partnersData.length]);

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

    // GSAP timeline — no transitionend, no RAF tricks, no race conditions.
    // Phase 1: fade out
    // Phase 2 (onComplete): swap src, then immediately fade in
    gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    })
      .to(el, {
        opacity: 0,
        duration: FADE_DURATION,
        ease: "power1.inOut",
        onComplete: () => {
          // We are now fully invisible — safe to swap the image src.
          // Update the logical index first so shownRef stays consistent.
          shownRef.current = shown.map((v, i) =>
            i === slotIndex ? newDataIndex : v
          );
          img.src = partnersData[newDataIndex].src;
          img.alt = partnersData[newDataIndex].alt;
        },
      })
      // A tiny gap (one frame) lets the browser decode the new image
      // before we start fading back in. Eliminates the "flash of old logo".
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
  // We render exactly `slotCount` slots. The initial src comes from shownRef
  // (which is reset whenever slotCount changes). No phase state needed — GSAP
  // owns the opacity entirely after mount.
  return (
    <div
      className="grid gap-6 md:gap-10 items-center"
      style={{ gridTemplateColumns: `repeat(${slotCount}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: slotCount }, (_, slotIndex) => {
        const partner = partnersData[shownRef.current[slotIndex] ?? slotIndex % partnersData.length];
        return (
          <div
            key={slotIndex}
            ref={(el) => {
              itemRefs.current[slotIndex] = el;
            }}
            className="flex items-center "
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={190}
              height={73}
              unoptimized
              className="h-[42px] lg:h-[70px] 3xl:h-[73px] w-auto pointer-events-none"
            />
          </div>
        );
      })}
    </div>
  );
}