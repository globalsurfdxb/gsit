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

const SWAP_INTERVAL = 3100;
const FADE_DURATION = 2100;

export interface PartnerItem {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  partnersData: PartnerItem[];
}

type Phase = "idle" | "out" | "snap" | "in";

interface Slot {
  current: number;
  phase: Phase;
}

function getVisibleCount(width: number) {
  if (width < 768) return 3;
  if (width < 1440) return 5;
  return 6;
}

export default function LogoSlider({ partnersData }: LogoSliderProps) {
  const [slots, setSlots] = useState<Slot[]>(() =>
    Array.from({ length: 6 }, (_, i) => ({
      current: i % partnersData.length,
      phase: "idle" as Phase,
    }))
  );

  const slotsRef = useRef(slots);
  const lastSwappedSlotRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const pendingDataRef = useRef<Record<number, number | null>>({});
  const rafIdsRef = useRef<number[]>([]);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    slotsRef.current = slots;
  }, [slots]);

  // Responsive slot count
  useEffect(() => {
    const update = () => {
      const count = getVisibleCount(window.innerWidth);
      setSlots((prev) => {
        if (prev.length === count) return prev;
        return Array.from({ length: count }, (_, i) => ({
          current: i % partnersData.length,
          phase: "idle" as Phase,
        }));
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [partnersData.length]);

  // Pause swapping while the tab is hidden so timers don't pile up
  useEffect(() => {
    const onVisibility = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const clearFallback = () => {
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  // Called when the fade-OUT transition finishes (element is now invisible)
  const handleFadeOutEnd = useCallback((slotIndex: number) => {
    clearFallback();
    const newDataIndex = pendingDataRef.current[slotIndex];
    if (newDataIndex == null) return; // already handled (e.g. by fallback)
    pendingDataRef.current[slotIndex] = null;

    // Swap the data while invisible, no transition (instant snap)
    setSlots((prev) => {
      const next = [...prev];
      next[slotIndex] = { current: newDataIndex, phase: "snap" };
      return next;
    });

    // Wait two frames so the browser actually paints the snap at opacity 0
    // before we re-enable the transition and animate back to opacity 1.
    const r1 = requestAnimationFrame(() => {
      const r2 = requestAnimationFrame(() => {
        setSlots((prev) => {
          const next = [...prev];
          if (next[slotIndex]?.phase === "snap") {
            next[slotIndex] = { ...next[slotIndex], phase: "in" };
          }
          return next;
        });
      });
      rafIdsRef.current.push(r2);
    });
    rafIdsRef.current.push(r1);

    // Safety net in case the fade-in transitionend never fires
    fallbackTimerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      setSlots((prev) => {
        const next = [...prev];
        if (next[slotIndex]?.phase === "in") {
          next[slotIndex] = { ...next[slotIndex], phase: "idle" };
        }
        return next;
      });
    }, FADE_DURATION + 300);
  }, []);

  // Called when the fade-IN transition finishes (swap fully complete)
  const handleFadeInEnd = useCallback((slotIndex: number) => {
    clearFallback();
    isAnimatingRef.current = false;
    setSlots((prev) => {
      const next = [...prev];
      if (next[slotIndex]?.phase === "in") {
        next[slotIndex] = { ...next[slotIndex], phase: "idle" };
      }
      return next;
    });
  }, []);

  const runSwap = useCallback(() => {
    if (isAnimatingRef.current || !isVisibleRef.current) return;
    if (partnersData.length <= slotsRef.current.length) return;

    const current = slotsRef.current;
    const shownIndices = current.map((s) => s.current);
    const pool = partnersData.map((_, i) => i).filter((i) => !shownIndices.includes(i));
    
    if (pool.length === 0) return;

    const availableSlots = current
      .map((_, i) => i)
      .filter((i) => i !== lastSwappedSlotRef.current);
    const slotIndex = availableSlots[Math.floor(Math.random() * availableSlots.length)];
    const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

    isAnimatingRef.current = true;
    lastSwappedSlotRef.current = slotIndex;
    pendingDataRef.current[slotIndex] = newDataIndex;

    // Phase 1: fade out the current logo
    setSlots((prev) => {
      const next = [...prev];
      next[slotIndex] = { ...next[slotIndex], phase: "out" };
      return next;
    });

    // Safety net in case the fade-out transitionend never fires
    fallbackTimerRef.current = setTimeout(
      () => handleFadeOutEnd(slotIndex),
      FADE_DURATION + 300
    );
  }, [partnersData, handleFadeOutEnd]);

  useEffect(() => {
    const interval = setInterval(runSwap, SWAP_INTERVAL);
    return () => {
      clearInterval(interval);
      rafIdsRef.current.forEach(cancelAnimationFrame);
      clearFallback();
    };
  }, [runSwap]);

  return (
    <div
      className="grid gap-6 md:gap-10 items-center"
      style={{ gridTemplateColumns: `repeat(${slots.length}, minmax(0, 1fr))` }}
    >
      {slots.map((slot, slotIndex) => {
        const partner = partnersData[slot.current];

        const opacity = slot.phase === "out" || slot.phase === "snap" ? 0 : 1;
        const transition = slot.phase === "snap" ? "none" : `opacity ${FADE_DURATION}ms ease`;

        return (
          <div
            key={slotIndex}
            className="flex items-center justify-center"
            style={{ opacity, transition }}
            onTransitionEnd={(e) => {
              if (e.propertyName !== "opacity") return;
              if (slot.phase === "out") handleFadeOutEnd(slotIndex);
              else if (slot.phase === "in") handleFadeInEnd(slotIndex);
            }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={190}
              height={73}
              className="h-[42px] lg:h-[70px] 3xl:h-[73px] w-auto pointer-events-none"
            />
          </div>
        );
      })}
    </div>
  );
}