"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SWAP_INTERVAL = 2500;
const FADE_DURATION = 900;

export interface PartnerItem {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  partnersData: PartnerItem[];
}

export default function LogoSlider({ partnersData }: LogoSliderProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [animatingSlot, setAnimatingSlot] = useState<number | null>(null);
  const [phase, setPhase] = useState<"out" | "in" | null>(null);

  const visibleIndicesRef = useRef(visibleIndices);
  const visibleCountRef = useRef(visibleCount);

  useEffect(() => { visibleIndicesRef.current = visibleIndices; }, [visibleIndices]);
  useEffect(() => { visibleCountRef.current = visibleCount; }, [visibleCount]);

  useEffect(() => {
    const update = () => {
      const count = window.innerWidth < 768 ? 3 : 6;
      setVisibleCount(count);
      setVisibleIndices(Array.from({ length: count }, (_, i) => i));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentVisible = visibleIndicesRef.current;
      const currentCount = visibleCountRef.current;

      const pool = partnersData
        .map((_, i) => i)
        .filter((i) => !currentVisible.includes(i));

      if (pool.length === 0) return;

      const slotIndex = Math.floor(Math.random() * currentCount);
      const newDataIndex = pool[Math.floor(Math.random() * pool.length)];

      // phase 1: fade out
      setAnimatingSlot(slotIndex);
      setPhase("out");

      setTimeout(() => {
        // swap while invisible
        setVisibleIndices((prev) => {
          const updated = [...prev];
          updated[slotIndex] = newDataIndex;
          return updated;
        });

        // phase 2: fade in
        setPhase("in");

        setTimeout(() => {
          setAnimatingSlot(null);
          setPhase(null);
        }, FADE_DURATION);

      }, FADE_DURATION);

    }, SWAP_INTERVAL);

    return () => clearInterval(interval);
  }, [partnersData]);

  return (
    <div
      className="grid gap-6 md:gap-10 items-center"
      style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
    >
      {visibleIndices.map((dataIndex, slotIndex) => {
        const partner = partnersData[dataIndex];

        const isAnimating = animatingSlot === slotIndex;
        const isOut = isAnimating && phase === "out";
        const isIn  = isAnimating && phase === "in";

        return (
          <div
            key={slotIndex}
            className="flex items-center justify-center"
            style={{
              opacity: isOut ? 0 : 1,
              // transform: isOut ? "scale(0.85)" : "scale(1)",
              transition: isOut || isIn
                ? `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`
                : "none",
            }}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={190}
              height={73}
              className="h-[73px] w-[190px] object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}